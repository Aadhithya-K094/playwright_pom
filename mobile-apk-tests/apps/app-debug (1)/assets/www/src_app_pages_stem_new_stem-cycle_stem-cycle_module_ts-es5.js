(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-cycle_stem-cycle_module_ts"], {
    /***/
    73784:
    /*!************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-cycle/stem-cycle-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCyclePageRoutingModule": function StemCyclePageRoutingModule() {
          return (
            /* binding */
            _StemCyclePageRoutingModule
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


      var _stem_cycle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-cycle.page */
      41029);

      var routes = [{
        path: '',
        component: _stem_cycle_page__WEBPACK_IMPORTED_MODULE_0__.StemCyclePage
      }];

      var _StemCyclePageRoutingModule = /*#__PURE__*/_createClass(function StemCyclePageRoutingModule() {
        _classCallCheck(this, StemCyclePageRoutingModule);
      });

      _StemCyclePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StemCyclePageRoutingModule);
      /***/
    },

    /***/
    88519:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-cycle/stem-cycle.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCyclePageModule": function StemCyclePageModule() {
          return (
            /* binding */
            _StemCyclePageModule
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


      var _stem_cycle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-cycle-routing.module */
      73784);
      /* harmony import */


      var _stem_cycle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-cycle.page */
      41029);

      var _StemCyclePageModule = /*#__PURE__*/_createClass(function StemCyclePageModule() {
        _classCallCheck(this, StemCyclePageModule);
      });

      _StemCyclePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _stem_cycle_routing_module__WEBPACK_IMPORTED_MODULE_0__.StemCyclePageRoutingModule],
        declarations: [_stem_cycle_page__WEBPACK_IMPORTED_MODULE_1__.StemCyclePage]
      })], _StemCyclePageModule);
      /***/
    },

    /***/
    41029:
    /*!**************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-cycle/stem-cycle.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCyclePage": function StemCyclePage() {
          return (
            /* binding */
            _StemCyclePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_stem_cycle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stem-cycle.page.html */
      88050);
      /* harmony import */


      var _stem_cycle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-cycle.page.scss */
      5916);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _StemCyclePage = /*#__PURE__*/function () {
        // cycleData: any;
        function StemCyclePage(router, sqliteDB, userService, usersessionService) {
          _classCallCheck(this, StemCyclePage);

          this.router = router;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.usersessionService = usersessionService;
          this.username = this.usersessionService.emis_username();
        }

        return _createClass(StemCyclePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.activeshowHide = false; // this.getcycleStatus()

            this.localData(); // this.getServerData()

            var date = new Date();
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            var daycycle = '' + (d.getDate() + 5);

            if (month.length < 2) {
              month = '0' + month;
            }

            if (day.length < 2) {
              day = '0' + day;
            }

            this.currentDate = [year, month, day].join('-');
            this.currentnextDate = [year, month, daycycle].join('-');
            console.log(this.currentDate, this.currentnextDate);
          } // getcycleStatus(){
          //   this.userService.getCycleStatus('1005067',2).subscribe((data) => {
          //     let test = data.result.ManualFilledCount[0].Cycle
          //     let tutu = "Cycle_"+test
          //     this.cycleData = data.result[tutu]
          //     console.log(this.cycleData,"1234567890");
          //   })
          // }

        }, {
          key: "viewfill",
          value: function viewfill() {
            var _this = this;

            var _loop = function _loop(i) {
              _this.cycleStatus = 0;

              _this.userService.getViewFillSlot(_this.username, _this.dataList[i].Cycle).subscribe(function (response) {
                if (response) {
                  _this.finalfill = response.result;
                }

                console.log(_this.finalfill, "fill", _this.dataList[i].Cycle);

                if (_this.finalfill) {
                  _this.cycleStatus = _this.finalfill[0].StemStatus;
                }
              });

              console.log(_this.cycleStatus, "cycleStatus", _this.finalfill);
            };

            for (var i = 0; i < this.dataList.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "localData",
          value: function localData() {
            var _this2 = this;

            var query = 'SELECT * FROM stemModedetail' + ' WHERE UserId = "' + this.username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this2.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this2.dataList.push(data.rows.item(i));
                }

                _this2.viewfill();

                _this2.selectModeListData = []; // this.selectModeListData = this.dataList

                var item;
                var color;

                for (var _i = 0; _i < _this2.dataList.length; _i++) {
                  var current = new Date(_this2.currentDate);
                  var currentnext = new Date(_this2.currentnextDate);
                  var eventstart = new Date(_this2.dataList[_i].EventStartDate);
                  var eventend = new Date(_this2.dataList[_i].EventEndDate);
                  var startcycle = new Date(_this2.dataList[_i].StartDate);
                  var endcycle = new Date(_this2.dataList[_i].EndDate);
                  var eventstartnext;
                  var eventendnext;
                  var eventstartnext1;
                  var eventendnext1;

                  if (_this2.dataList.length > _i + 1) {
                    eventstartnext = new Date(_this2.dataList[_i + 1].EventStartDate);
                    eventendnext = new Date(_this2.dataList[_i + 1].EventEndDate);
                    eventstartnext1 = _this2.dataList[_i + 1].EventStartDate;
                    eventendnext1 = _this2.dataList[_i + 1].EventEndDate;
                  }

                  if (_this2.dataList[_i].EventEndDate) {
                    if (_this2.currentDate == eventstartnext1 || _this2.currentDate == eventendnext1 || _this2.currentDate == _this2.dataList[_i].EventStartDate || _this2.currentDate == _this2.dataList[_i].EventEndDate || _this2.currentDate == _this2.dataList[_i].StartDate || _this2.currentDate == _this2.dataList[_i].EndDate || _this2.currentnextDate == eventstartnext1 || _this2.currentnextDate == eventendnext1 || current < eventendnext && current > eventstartnext || currentnext < eventendnext && currentnext > eventstartnext || current == eventstart || current == eventend || current == startcycle || current == endcycle || current < eventend && current > eventstart || current < endcycle && current > startcycle) {
                      color = 1;
                    } else {
                      color = 2;
                    }
                  } else {
                    color = 2;
                  } // var status = 0
                  // if(this.finalfill[i].Type){
                  //   status
                  // }


                  item = {
                    Cycle: _this2.dataList[_i].Cycle,
                    EndDate: _this2.dataList[_i].EndDate,
                    EventEndDate: _this2.dataList[_i].EventEndDate,
                    EventStartDate: _this2.dataList[_i].EventStartDate,
                    Id: _this2.cycleStatus,
                    StartDate: _this2.dataList[_i].StartDate,
                    Status: _this2.dataList[_i].Status,
                    UserId: _this2.dataList[_i].UserId,
                    color: color
                  };

                  _this2.selectModeListData.push(item); // })

                }

                console.log(_this2.selectModeListData, "11232423");
              } else {
                _this2.getServerData();
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(element) {
            var insertRows = []; // elementData.forEach(element => {
            // console.log(element);

            for (var i = 0; i < element.length; i++) {
              console.log(i, "i");
              insertRows.push(["INSERT INTO stemModedetail VALUES (?,?,?,?,?,?,?,?)", [null, this.username, i + 1, "1", element[i].EndDate, element[i].EventEndDate, element[i].EventStartDate, element[i].StartDate]]);
              console.info("LocalData Stored Locally 12312412");
            } // });


            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
            this.localData();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/stem-dashboard']);
          }
        }, {
          key: "schedule",
          value: function schedule(item, value, startdate, enddate, eventstartdate, eventenddate, statusMode, cycle) {
            var _this3 = this;

            var query = 'UPDATE stemModedetail SET Status="' + value + '"' + 'WHERE EventStartDate = "' + startdate + '" And UserId = "' + this.username + '"';
            return this.sqliteDB.update(query).then(function (res) {
              console.log(value, "Updated In server");

              _this3.router.navigate(['/tabs/school-schedule'], {
                queryParams: {
                  "item": item,
                  "startdate": startdate,
                  "enddate": enddate,
                  "eventstartdate": eventstartdate,
                  "eventenddate": eventenddate,
                  'statusMode': statusMode,
                  'cycle': cycle
                }
              });
            });
          }
        }, {
          key: "onHideShow",
          value: function onHideShow() {
            this.activeshowHide = !this.activeshowHide;
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this4 = this;

            this.selectModeListData = [];
            this.userService.getstemModeDetails(this.username).subscribe(function (response) {
              // console.log(response.result.Cycle_1[0],response.result.Cycle_1,response.result); 
              // this.selectModeListData = response.result
              _this4.selectModeListData.push(response.result.Cycle_1[0], response.result.Cycle_2[0], response.result.Cycle_3[0], response.result.Cycle_4[0], response.result.Cycle_5[0], response.result.Cycle_6[0]);

              console.log(_this4.selectModeListData);

              _this4.insertLocalData(_this4.selectModeListData);
            });
          }
        }, {
          key: "refreshMyInspections",
          value: function refreshMyInspections() {
            var query = "DELETE FROM stemModedetail";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rowsAffected > 0) {
                console.log("true");
              } else {
                console.log("false");
              }
            });
          }
        }]);
      }();

      _StemCyclePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }];
      };

      _StemCyclePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stem-cycle',
        template: _raw_loader_stem_cycle_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stem_cycle_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StemCyclePage);
      /***/
    },

    /***/
    5916:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-cycle/stem-cycle.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-pg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.title-icon {\n  margin-top: 3%;\n  font-size: 10px;\n  margin-left: 3px;\n}\n\n.arrow-icon {\n  margin-top: 2%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 10%;\n  height: 100%;\n}\n\n.card-header {\n  background-color: #B357FF;\n  color: white;\n  padding: 5%;\n  font-weight: bold;\n}\n\n.card-header1 {\n  background-color: #D5D5D5;\n  color: #ffffff;\n  padding: 5%;\n  font-weight: bold;\n}\n\n.card-text {\n  padding: 5%;\n  font-weight: bold;\n}\n\n.automanual {\n  border-radius: 5%;\n  background-color: #B357FF;\n  padding: 5%;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZW0tY3ljbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7QUFJSjs7QUFGRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFPSiIsImZpbGUiOiJzdGVtLWN5Y2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhcmQtc3RlbS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgLnRpdGxlLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYXJyb3ctaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IzNTdGRjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDUlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENUQ1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICBwYWRkaW5nOiA1JTsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmF1dG9tYW51YWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMzU3RkY7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    88050:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-cycle/stem-cycle.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header-pg\">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"back-icon\">\r\n        <ion-icon class=\"arrow-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n        <ion-title class=\"title-icon\" (click)=\"refreshMyInspections()\">Cycle List</ion-title>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\">\r\n        <ion-card *ngFor=\"let item of selectModeListData; let i = index\">\r\n          <ion-row class=\"card-header\" *ngIf=\"item.color == '1'\">\r\n            <ion-col size=\"6\">Cycle {{i + 1}}</ion-col>\r\n            <ion-col size=\"6\" *ngIf=\"item.Status == '1'\" style=\"text-align: end;\" (click)=\"onHideShow()\"><ion-icon\r\n                name=\"chevron-forward-outline\"></ion-icon></ion-col>\r\n            <ion-col size=\"6\" *ngIf=\"item.Status == '2'\" style=\"text-align: end;\"\r\n              (click)=\"schedule('auto','2',item.EventStartDate,item.EventEndDate,item.StartDate,item.EndDate,item.Status,i+1)\">Auto\r\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-col>\r\n            <ion-col size=\"6\" *ngIf=\"item.Status == '3'\" style=\"text-align: end;\"\r\n              (click)=\"schedule('manual','3',item.EventStartDate,item.EventEndDate,item.StartDate,item.EndDate,item.Status,i+1)\">Manual\r\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"card-header1\" *ngIf=\"item.color == '2'\">\r\n            <ion-col size=\"6\">Cycle {{i + 1}}</ion-col>\r\n            <ion-col size=\"6\" style=\"text-align: end;\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-card>\r\n                <div class=\"card-header\" *ngIf=\"item.color == '1'\">Start date</div>\r\n                <div class=\"card-header1\" *ngIf=\"item.color == '2'\">Start date</div>\r\n                <div class=\"card-text\">{{item.StartDate}}</div>\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\">\r\n              <ion-card>\r\n                <div class=\"card-header\" *ngIf=\"item.color == '1'\">End date</div>\r\n                <div class=\"card-header1\" *ngIf=\"item.color == '2'\">End date</div>\r\n                <div class=\"card-text\">{{item.EndDate}}</div>\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\" *ngIf=\"item.Status == '1' && this.activeshowHide && item.color == '1'\"\r\n              style=\"text-align: center;\"\r\n              (click)=\"schedule('auto','2',item.EventStartDate,item.EventEndDate,item.StartDate,item.EndDate,item.Status,i+1)\">\r\n              <div class=\"automanual\">Auto Assign</div>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\" *ngIf=\"item.Status == '1' && this.activeshowHide && item.color == '1'\"\r\n              style=\"text-align: center;\"\r\n              (click)=\"schedule('manual','3',item.EventStartDate,item.EventEndDate,item.StartDate,item.EndDate,item.Status,i+1)\">\r\n              <div class=\"automanual\">Manual</div>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\">\r\n              <div>Notes : <span> cycle will be enabled to edit from {{item.EventStartDate}} to\r\n                  {{item.EventEndDate}}</span> </div>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_stem-cycle_stem-cycle_module_ts-es5.js.map