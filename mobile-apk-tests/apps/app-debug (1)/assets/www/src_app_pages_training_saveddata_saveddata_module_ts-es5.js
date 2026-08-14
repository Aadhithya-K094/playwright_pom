(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_training_saveddata_saveddata_module_ts"], {
    /***/
    83210:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/training/saveddata/saveddata-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SaveddataPageRoutingModule": function SaveddataPageRoutingModule() {
          return (
            /* binding */
            _SaveddataPageRoutingModule
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


      var _saveddata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./saveddata.page */
      37371);

      var routes = [{
        path: '',
        component: _saveddata_page__WEBPACK_IMPORTED_MODULE_0__.SaveddataPage
      }];

      var _SaveddataPageRoutingModule = /*#__PURE__*/_createClass(function SaveddataPageRoutingModule() {
        _classCallCheck(this, SaveddataPageRoutingModule);
      });

      _SaveddataPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SaveddataPageRoutingModule);
      /***/
    },

    /***/
    87038:
    /*!**************************************************************!*\
      !*** ./src/app/pages/training/saveddata/saveddata.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SaveddataPageModule": function SaveddataPageModule() {
          return (
            /* binding */
            _SaveddataPageModule
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


      var _saveddata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./saveddata-routing.module */
      83210);
      /* harmony import */


      var _saveddata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./saveddata.page */
      37371);

      var _SaveddataPageModule = /*#__PURE__*/_createClass(function SaveddataPageModule() {
        _classCallCheck(this, SaveddataPageModule);
      });

      _SaveddataPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _saveddata_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaveddataPageRoutingModule],
        declarations: [_saveddata_page__WEBPACK_IMPORTED_MODULE_1__.SaveddataPage]
      })], _SaveddataPageModule);
      /***/
    },

    /***/
    37371:
    /*!************************************************************!*\
      !*** ./src/app/pages/training/saveddata/saveddata.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SaveddataPage": function SaveddataPage() {
          return (
            /* binding */
            _SaveddataPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_saveddata_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./saveddata.page.html */
      94008);
      /* harmony import */


      var _saveddata_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./saveddata.page.scss */
      80287);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

      var _SaveddataPage = /*#__PURE__*/function () {
        function SaveddataPage(router, alertService, route, usersessionService, userService) {
          _classCallCheck(this, SaveddataPage);

          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.usersessionService = usersessionService;
          this.userService = userService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
        }

        return _createClass(SaveddataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            debugger;
            this.todayDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
            this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            this.sessionUserName = this.usersessionService.emis_username();
            this.routeData = this.route.snapshot;
            this.page = this.routeData.queryParams.page;
            this.userService.getTeacherTrainingList().subscribe(function (res) {
              if (res.dataStatus) {
                _this.trainingList = res.result;

                if (_this.page == 1) {
                  _this.getTrainerData();
                } else {
                  _this.getTrianeeData();
                }
              }
            });
          }
        }, {
          key: "getTrainerData",
          value: function getTrainerData() {
            var _this2 = this;

            this.userService.getTrainnerData(this.sessionUserName, this.todayDateFormat).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.noData = false;
                _this2.trainerData = res.result;

                _this2.trainerData.forEach(function (a) {
                  var assignBookList = _this2.trainingList.filter(function (tt) {
                    return tt.IndexId == a.TrainiType;
                  });

                  if (assignBookList.length > 0) {
                    a.training = assignBookList[0].TranNme;
                  } else {
                    a.training = '';
                  }
                });

                console.log(_this2.trainerData);
              } else {
                _this2.noData = true;
              }
            });
          }
        }, {
          key: "getTrianeeData",
          value: function getTrianeeData() {
            var _this3 = this;

            this.userService.getTrainingData(this.sessionUserName).subscribe(function (res) {
              if (res.dataStatus) {
                _this3.noData = false;
                _this3.traineeData = res.result.filter(function (tt) {
                  return tt.TrainiDate == _this3.todayDateFormat;
                });
                ;
                console.log(res);
              } else {
                _this3.noData = true;
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/training-attendance']);
          }
        }]);
      }();

      _SaveddataPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }];
      };

      _SaveddataPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-saveddata',
        template: _raw_loader_saveddata_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_saveddata_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SaveddataPage);
      /***/
    },

    /***/
    80287:
    /*!**************************************************************!*\
      !*** ./src/app/pages/training/saveddata/saveddata.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.stuline {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\n.stulines {\n  border-bottom: 3px solid lightgray;\n  margin-left: 13px;\n  margin-right: 13px;\n  border-radius: 5px;\n}\n\n.stucard-class {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.avatar {\n  width: auto;\n  padding-right: 10px;\n}\n\n.name {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\n.tamilname {\n  font-size: 14px;\n  color: gray;\n  white-space: pre-line;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.btn-present {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.btn-na {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 16px;\n  --background:black !important;\n  color: #fff;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\nion-card {\n  margin-inline: 14px !important;\n}\n\nion-item {\n  background: transparent !important;\n}\n\n.ion-label {\n  font-size: 20px;\n  color: black;\n}\n\nion-select {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\n.option {\n  padding-top: 20px;\n  padding-left: 18px;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\nion-input {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  padding-bottom: 10px !important;\n}\n\n.input {\n  font-size: 17px;\n  padding-bottom: 15px;\n}\n\n.code {\n  font-size: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-datetime {\n  color: var(--ion-color-primary);\n}\n\n.error-message {\n  color: red;\n  margin: 0px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  color: red;\n}\n\n.view {\n  text-align: center;\n  margin: auto;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFERTtFQUVHLGtCQUFBO0VBQ0Esa0JBQUE7QUFHTDs7QUFERTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSkU7RUFDRSxpQkFBQTtBQU9KOztBQUpFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQU1OOztBQUpFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUFNTjs7QUFKRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBTU47O0FBSkU7RUFDRSxxQkFBQTtBQU9KOztBQUpFO0VBQ0UsOEJBQUE7QUFPSjs7QUFKRTtFQUNJLGtDQUFBO0FBT047O0FBSkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUpFO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBT047O0FBSkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBT0o7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQU9KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBT0o7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFKRTtFQUNFLCtCQUFBO0FBT0o7O0FBREU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUlKIiwiZmlsZSI6InNhdmVkZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zdWItaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLnN0dWxpbmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWFhYmI7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweFxyXG4gIH1cclxuICAuc3R1bGluZXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAvLyBwYWRkaW5nOjBweDtcclxuICB9XHJcbiAgLnN0dWNhcmQtY2xhc3NcclxuICB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiBhdXRvOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgLnRhbWlsbmFtZSB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlLWxpbmVcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmVzZW50XHJcbiAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1hYnNlbnRcclxuICB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiNmODIzMzkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgLmJ0bi1uYVxyXG4gIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6YmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOnByZS1saW5lXHJcbiAgfVxyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW4taW5saW5lOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gIH1cclxuICBcclxuICAub3B0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuICBcclxuICBpb24taW5wdXR7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29kZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gICAgLy8gcGFkZGluZy10b3A6IDVweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgLy8gZm9udC1zaXplOiAxNXB4OyBcclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAgcmVkOyAgXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC52aWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    94008:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/training/saveddata/saveddata.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size: 20px\">View Today's Training Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\"> Date</ion-col>\r\n    <ion-col size=\"12\" class=\"sub-head\"> {{todayDate}}</ion-col>\r\n    <ion-col size=\"12\">\r\n      <div class=\"stuline\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"noData\">\r\n    <ion-col size=\"12\" class=\"head\"> No Data Found</ion-col>\r\n    <ion-col size=\"12\">\r\n      <div class=\"stuline\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div *ngIf=\"page == 1 && !noData\" style=\"padding-top:5px\">\r\n    <ion-card class=\"card-aln\" *ngFor=\"let item of trainerData\" style=\"margin-bottom:20px\">\r\n      <ion-row style=\"font-size: 15px;\">\r\n        <ion-col size=\"7\" style=\"padding-left:10px;padding-top:10px;color:white;background: var(--ion-color-primary);\">\r\n          Training Unique Code* \r\n          <!-- - <span style=\"font-size:20px;font-weight: bold;\">{{item.TrainiCode}}</span> -->\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-top:10px;color:white;background: var(--ion-color-primary);font-size:20px;font-weight: bold;\">\r\n          {{item.TrainiCode}}\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"padding-left:10px;padding-top:10px;color:black;background: rgb(225, 203, 230)\">\r\n          Share the training unique code with participants to mark their attendance\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;padding-top:20px;color:black\">\r\n          UDISE code of training location\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-top:20px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiVenue}}\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" style=\"padding:10px;color:black\">\r\n          Training Code\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiCode}}\r\n        </ion-col> -->\r\n        <ion-col size=\"7\" style=\"padding:10px;color:black\">\r\n          Training Type\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.training}}\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;color:black\">\r\n          Start Time\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiStartTime | date:\"hh:mm a\"}}\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;padding-bottom:20px;color:black\">\r\n          End Time\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-bottom:20px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiEndTime | date:\"hh:mm a\"}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row style=\"padding:10px\">\r\n        <ion-col size=\"6\" class=\"code\">\r\n          <ion-label>Your Code </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\"\r\n          style=\"background: green;color: white;text-align: center;font-size: 20px;border-radius:5px;padding:10px\">\r\n          <ion-label>{{item.TrainiCode}}</ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"page == 2 && !noData\">\r\n    <ion-card class=\"card-aln\" *ngFor=\"let item of traineeData\" style=\"margin-bottom:20px\">\r\n      <ion-row style=\"font-size: 15px;\">\r\n        <ion-col size=\"7\" style=\"padding-left:10px;padding-top:10px;color:white;background: var(--ion-color-primary);\">\r\n          Training Unique Code* \r\n          <!-- - <span style=\"font-size:20px;font-weight: bold;\">{{item.TrainiCode}}</span> -->\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-top:10px;color:white;background: var(--ion-color-primary);font-size:20px;font-weight: bold;\">\r\n          {{item.TrainiCode}}\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;padding-top:20px;color:black\">\r\n          UDISE code of training location\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-top:20px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiVenue}}\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;color:black\">\r\n          Training Type\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.TrNme}}\r\n        </ion-col>\r\n        <!-- <ion-col size=\"7\" style=\"padding:10px;color:black\">\r\n          Training date\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiDate | date:\"dd-MM-yyyy\"}}\r\n        </ion-col> -->\r\n        <ion-col size=\"7\" style=\"padding:10px;color:black\">\r\n          Start Time\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiStartTime | date:\"hh:mm a\"}}\r\n        </ion-col>\r\n        <ion-col size=\"7\" style=\"padding:10px;padding-bottom:20px;color:black\">\r\n          End Time\r\n        </ion-col>\r\n        <ion-col size=\"5\" style=\"padding:10px;padding-bottom:20px;color:var(--ion-color-primary);\">\r\n          {{item.TrainiEndTime | date:\"hh:mm a\"}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row style=\"padding:10px\">\r\n        <ion-col size=\"6\" class=\"code\">\r\n          <ion-label>Your Code </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\"\r\n          style=\"background: green;color: white;text-align: center;font-size: 20px;border-radius:5px;padding:10px\">\r\n          <ion-label>{{item.TrainiCode}}</ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_training_saveddata_saveddata_module_ts-es5.js.map