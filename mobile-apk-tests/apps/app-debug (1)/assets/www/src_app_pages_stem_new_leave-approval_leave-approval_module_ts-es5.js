(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_leave-approval_leave-approval_module_ts"], {
    /***/
    21315:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-approval/leave-approval-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalPageRoutingModule": function LeaveApprovalPageRoutingModule() {
          return (
            /* binding */
            _LeaveApprovalPageRoutingModule
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


      var _leave_approval_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-approval.page */
      7680);

      var routes = [{
        path: '',
        component: _leave_approval_page__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalPage
      }];

      var _LeaveApprovalPageRoutingModule = /*#__PURE__*/_createClass(function LeaveApprovalPageRoutingModule() {
        _classCallCheck(this, LeaveApprovalPageRoutingModule);
      });

      _LeaveApprovalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LeaveApprovalPageRoutingModule);
      /***/
    },

    /***/
    62915:
    /*!************************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-approval/leave-approval.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalPageModule": function LeaveApprovalPageModule() {
          return (
            /* binding */
            _LeaveApprovalPageModule
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


      var _leave_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-approval-routing.module */
      21315);
      /* harmony import */


      var _leave_approval_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-approval.page */
      7680);

      var _LeaveApprovalPageModule = /*#__PURE__*/_createClass(function LeaveApprovalPageModule() {
        _classCallCheck(this, LeaveApprovalPageModule);
      });

      _LeaveApprovalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _leave_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalPageRoutingModule],
        declarations: [_leave_approval_page__WEBPACK_IMPORTED_MODULE_1__.LeaveApprovalPage]
      })], _LeaveApprovalPageModule);
      /***/
    },

    /***/
    7680:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-approval/leave-approval.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalPage": function LeaveApprovalPage() {
          return (
            /* binding */
            _LeaveApprovalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_leave_approval_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./leave-approval.page.html */
      80435);
      /* harmony import */


      var _leave_approval_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-approval.page.scss */
      89291);
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


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _LeaveApprovalPage = /*#__PURE__*/function () {
        function LeaveApprovalPage(userService, usersessionService, alertService, router) {
          _classCallCheck(this, LeaveApprovalPage);

          this.userService = userService;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.router = router;
          this.tabsData = 1;
          this.selectedArray = [];
          this.finaldata = [];
        }

        return _createClass(LeaveApprovalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.username = this.usersessionService.emis_username();
            this.selectedArray = [];
            this.Nodata = false;
            this.approvalNodata = false;
            this.indixActive = false;
            this.indix = '';
            this.getServerData();
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this = this;

            this.history = [];
            this.userService.approvalDetail().subscribe(function (response) {
              if (response.dataStatus) {
                var indexToUpdate = response.result.filter(function (rq) {
                  return rq.ApprovedStatus == 1;
                });
                _this.history = indexToUpdate;

                if (_this.history.length == 0) {
                  _this.Nodata = true;
                }

                var indexToUpdate1 = response.result.filter(function (rq) {
                  return rq.ApprovedStatus == 2 || rq.ApprovedStatus == 3;
                });
                _this.approvalhistory = indexToUpdate1;

                if (_this.approvalhistory.length == 0) {
                  _this.approvalNodata = true;
                }

                var indexToUpdate2 = response.result.filter(function (rq) {
                  return rq.ApprovedStatus == 3;
                });
                _this.rejecthistory = indexToUpdate2;

                _this.history.forEach(function (rq) {
                  rq.checked = false;
                });
              } else {
                _this.Nodata = true;
                _this.approvalNodata = true;
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/approval-dashboard']);
          }
        }, {
          key: "checkAll",
          value: function checkAll() {
            this.selectedArray = [];

            for (var i = 0; i < this.history.length; i++) {
              this.history[i].checked = true;
            }

            this.selectedArray = this.history;
          }
        }, {
          key: "selectMember",
          value: function selectMember(data, item, i) {
            this.history[i].checked = item;

            if (this.history[i].checked == true) {
              if (this.selectedArray.length > 0) {
                var indexToUpdate = this.selectedArray.filter(function (rq) {
                  return rq.IndxId == data.IndxId;
                });

                if (indexToUpdate.length == 0) {
                  this.selectedArray.push(data);
                }
              } else {
                this.selectedArray.push(data);
              }
            } else {
              var _indexToUpdate = this.selectedArray.filter(function (rq) {
                return rq.IndxId != data.IndxId;
              });

              this.selectedArray = _indexToUpdate;
            }
          }
        }, {
          key: "onSave",
          value: function onSave(item) {
            var _this2 = this;

            this.finaldata = [];

            for (var i = 0; i < this.selectedArray.length; i++) {
              var data = {
                "AppliedId": this.selectedArray[i].AppliedId,
                "ApprovedStatus": item
              };
              this.finaldata.push(data);
            }

            var datas = {
              "records": this.finaldata
            };
            this.userService.stemleaveApproval(datas).subscribe(function (response) {
              _this2.alertService.success(response.message);

              _this2.router.navigate(['/tabs/approval-dashboard']);
            });
          }
        }, {
          key: "onView",
          value: function onView(indix, active) {
            // this.indix = ''
            // this.indix = indix
            // this.indixActive = true
            if (active == '2') {
              this.indix = '';
              this.indixActive = false;
            }

            if (active == '1') {
              this.indix = indix;
              this.indixActive = true;
            }
          }
        }, {
          key: "viewpage",
          value: function viewpage(event, phone, distric) {
            this.router.navigate(['/tabs/leave-history'], {
              queryParams: {
                "userid": event,
                "phone": phone,
                "distric": distric
              }
            });
          }
        }]);
      }();

      _LeaveApprovalPage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _LeaveApprovalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-leave-approval',
        template: _raw_loader_leave_approval_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_leave_approval_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LeaveApprovalPage);
      /***/
    },

    /***/
    89291:
    /*!************************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-approval/leave-approval.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-pg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.title-icon {\n  margin-top: 3%;\n  font-size: 10px;\n  margin-left: 3px;\n}\n\n.arrow-icon {\n  margin-top: 2%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n  padding-top: 5%;\n}\n\n.header {\n  color: #B357FF;\n  font-weight: bold;\n  text-align: start;\n}\n\n.status1 {\n  background-color: #d6e9c0;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.status2 {\n  background-color: #eaacb2;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.status3 {\n  background-color: #a0eab1;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBU0oiLCJmaWxlIjoibGVhdmUtYXBwcm92YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAudGl0bGUtaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG4gIC5hcnJvdy1pY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5jYXJkLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjg1N2ZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICBjb2xvcjogI0IzNTdGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfSBcclxuICAuc3RhdHVzMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlOWMwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuICAuc3RhdHVzMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFhY2IyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuICAuc3RhdHVzMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBlYWIxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    80435:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/leave-approval/leave-approval.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header-pg\" id=\"contact\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon class=\"arrow-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n      <ion-title class=\"title-icon\">Approved Status & History</ion-title>\r\n    </ion-buttons>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-segment [(ngModel)]=\"tabsData\"\r\n        style=\"max-width: 95%; margin: 8px; border-radius: 10px; border: 1px solid #e0e0e0;;\">\r\n        <ion-segment-button value=\"1\" style=\"border-right: 1px solid #e0e0e0; min-width: 48%;\">\r\n          <ion-label style=\"margin: auto;\">Pending </ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"2\" style=\"border-right: 1px solid #e0e0e0; min-width: 48%;\">\r\n          <ion-label style=\"margin: auto;\">Approved & Rejected </ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"tabsData == 1 && Nodata\">\r\n        <ion-row class=\"header\">\r\n          <ion-col size=\"12\" style=\"text-align: center;\"> No Data</ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"tabsData == 1 && !Nodata\">\r\n        <ion-card *ngFor=\"let item of history; let i = index\">\r\n          <ion-row>\r\n            <ion-col size=\"2.5\" *ngIf=\"item.checked\">\r\n              <div>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label></ion-label>\r\n                  <ion-checkbox color=\"dark\" [(ngModel)]=\"item.checked\"\r\n                    (click)=\"selectMember(item,false,i)\"></ion-checkbox>\r\n                </ion-item>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2.5\" *ngIf=\"!item.checked\">\r\n              <div>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label></ion-label>\r\n                  <ion-checkbox color=\"dark\" [(ngModel)]=\"item.checked\"\r\n                    (click)=\"selectMember(item,true,i)\"></ion-checkbox>\r\n                </ion-item>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"3.5\">\r\n              <div class=\"header\">Name</div>\r\n              <div style=\"text-align: start;\">{{item.Name}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <div class=\"header\">Days</div>\r\n              <div style=\"text-align: start;\">{{item.Duration}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <div class=\"header\">Duration  <span>\r\n                <ion-icon *ngIf=\"indix == '' && !indixActive\" (click)=\"onView(item.IndxId,'1')\" name=\"arrow-down-circle-outline\"></ion-icon>\r\n                <ion-icon *ngIf=\"item.IndxId == indix && indixActive == true\" (click)=\"onView(item.IndxId,'2')\" name=\"arrow-up-circle-outline\"></ion-icon>\r\n              </span> </div>\r\n              <div style=\"text-align: start;\">{{item.Fromdate}} <div *ngIf=\"item.Session1 == 1\"> Morning  - </div>\r\n                <div *ngIf=\"item.Session1 == 2\"> AfterNoon  - </div>{{item.ToDate}} <div *ngIf=\"item.Session2 == 1\">\r\n                  Morning </div>\r\n                <div *ngIf=\"item.Session2 == 2\"> AfterNoon </div>\r\n              </div>\r\n            </ion-col> \r\n            <ion-col size=\"12\" style=\"background-color: #eaeff2;\" *ngIf=\"item.IndxId == indix && indixActive\">\r\n              <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <div class=\"header\">Resource ID</div>\r\n                  <div style=\"text-align: start;\">{{item.ResourceId}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <div class=\"header\">District</div>\r\n                  <div style=\"text-align: start;\">{{item.DistName}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <div class=\"header\">Applied on</div>\r\n                  <div style=\"text-align: start;\">{{item.AppliedOn}}</div>\r\n                </ion-col> \r\n                <ion-col size=\"4\">\r\n                  <div class=\"header\">Mobile</div>\r\n                  <div style=\"text-align: start;\">{{item.Phone}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <div class=\"header\">Reason</div>\r\n                  <div style=\"text-align: start;\">{{item.Reason}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"12\" style=\"text-align: center;\">\r\n                  <ion-button style=\"color: aliceblue;\" (click)=\"viewpage(item.ResourceId,item.Phone,item.Name)\"> View History </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"tabsData == 2 && approvalNodata\">\r\n        <ion-row class=\"header\">\r\n          <ion-col size=\"12\" style=\"text-align: center;\"> No Data</ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"tabsData == 2 && !approvalNodata\">\r\n        <ion-card *ngFor=\"let item of approvalhistory; let i = index\">\r\n          <ion-row class=\"header\">\r\n            <ion-col size=\"4\">Name</ion-col>\r\n            <ion-col size=\"4\">Days</ion-col>\r\n            <ion-col size=\"4\">Status</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <div style=\"text-align:  start;\">{{item.Name}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <div style=\"text-align: start;\">{{item.Duration}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <div class=\"status3\" style=\"text-align: center; color: #28a745;\" *ngIf=\"item.ApprovedStatus == 2\">Approved</div>\r\n              <div class=\"status2\" style=\"text-align: center;color: #bd3434;\" *ngIf=\"item.ApprovedStatus == 3\">Rejected</div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-row>\r\n                <ion-col style=\"color: #b357ff !important;font-weight: bold;\" size=\"3\">\r\n                  Duration :\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                <div>\r\n                  {{item.Fromdate}} <span *ngIf=\"item.Session1 == 1\"> Morning /</span>\r\n                  <span *ngIf=\"item.Session1 == 2\"> AfterNoon / </span>\r\n                </div> \r\n                <div>\r\n                  {{item.ToDate}} <span *ngIf=\"item.Session2 == 1\">\r\n                    Morning </span>\r\n                  <span *ngIf=\"item.Session2 == 2\"> AfterNoon </span>\r\n                </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"tabsData == 1 && !Nodata\">\r\n  <ion-row style=\"padding: 3%;font-weight: bolder;background-color: azure;\">\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n      <ion-button (click)=\"onSave('2')\" style=\"color: white;--background: #28a745;\">Approve</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n      <ion-button (click)=\"onSave('3')\" style=\"color: white;--background: #bd3434;\">Reject</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_leave-approval_leave-approval_module_ts-es5.js.map