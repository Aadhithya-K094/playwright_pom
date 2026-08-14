(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_my-inspections_my-inspections_module_ts"], {
    /***/
    49577:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/my-inspections/my-inspections-routing.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionsPageRoutingModule": function MyInspectionsPageRoutingModule() {
          return (
            /* binding */
            _MyInspectionsPageRoutingModule
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


      var _my_inspections_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspections.page */
      79338);

      var routes = [{
        path: '',
        component: _my_inspections_page__WEBPACK_IMPORTED_MODULE_0__.MyInspectionsPage
      }];

      var _MyInspectionsPageRoutingModule = /*#__PURE__*/_createClass(function MyInspectionsPageRoutingModule() {
        _classCallCheck(this, MyInspectionsPageRoutingModule);
      });

      _MyInspectionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyInspectionsPageRoutingModule);
      /***/
    },

    /***/
    32381:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/my-inspections/my-inspections.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionsPageModule": function MyInspectionsPageModule() {
          return (
            /* binding */
            _MyInspectionsPageModule
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


      var _my_inspections_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspections-routing.module */
      49577);
      /* harmony import */


      var _my_inspections_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspections.page */
      79338);

      var _MyInspectionsPageModule = /*#__PURE__*/_createClass(function MyInspectionsPageModule() {
        _classCallCheck(this, MyInspectionsPageModule);
      });

      _MyInspectionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _my_inspections_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspectionsPageRoutingModule],
        declarations: [_my_inspections_page__WEBPACK_IMPORTED_MODULE_1__.MyInspectionsPage]
      })], _MyInspectionsPageModule);
      /***/
    },

    /***/
    79338:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/my-inspections/my-inspections.page.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionsPage": function MyInspectionsPage() {
          return (
            /* binding */
            _MyInspectionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_my_inspections_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-inspections.page.html */
      35973);
      /* harmony import */


      var _my_inspections_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspections.page.scss */
      73256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _MyInspectionsPage = /*#__PURE__*/function () {
        function MyInspectionsPage(sqliteDB, userSessionService, emisService, alertController, alertService, router, route, navCtrl) {
          _classCallCheck(this, MyInspectionsPage);

          this.sqliteDB = sqliteDB;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.alertController = alertController;
          this.alertService = alertService;
          this.router = router;
          this.route = route;
          this.navCtrl = navCtrl;
        }

        return _createClass(MyInspectionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.showList = true;
            this.userId = this.userSessionService.emis_user_id(); // this.checkInspectionList();

            this.getMyInspectionsServer();
          }
        }, {
          key: "checkInspectionList",
          value: function checkInspectionList() {
            var _this = this;

            this.sqliteDB.checkDataExists('MyInspections').then(function (res) {
              if (res == true) {
                if (localStorage.getItem("refreshInspections") == "true") {
                  _this.refreshMyInspections();

                  localStorage.setItem("refreshInspections", "false");
                } else {
                  _this.getMyInspectionsDB();
                }
              } else {
                _this.getMyInspectionsServer();
              }
            });
          }
        }, {
          key: "getMyInspectionsServer",
          value: function getMyInspectionsServer() {
            var _this2 = this;

            this.emisService.getMyInspectionList(this.userId).subscribe(function (res) {
              if (res && res.dataStatus) {
                if (res.result && res.result.length > 0) {
                  _this2.inspectionList = [];
                  res.result.forEach(function (element) {
                    _this2.inspectionList.push(element);
                  });
                  _this2.showList = true; // this.insertMyInspections(res.result);
                } else {
                  _this2.inspectionList = [];
                  _this2.showList = false;
                }
              } else {
                if (res.message == "No Data Found") _this2.showList = false;
              }
            });
          }
        }, {
          key: "refreshMyInspections",
          value: function refreshMyInspections() {
            var _this3 = this;

            var query = "DELETE FROM MyInspections";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rowsAffected > 0) {
                _this3.getMyInspectionsServer();
              }
            });
          }
        }, {
          key: "insertMyInspections",
          value: function insertMyInspections(result) {
            var _this4 = this;

            result.forEach(function (element) {
              var datainsert = 'INSERT INTO MyInspections VALUES (?,?,?,?,?,?,?,?,?)';

              _this4.sqliteDB.insert(datainsert, [null, element.VolId, element.VolName, element.VolPhoneNo, element.VolDistName, element.InspDate, element.VolBlockName, JSON.stringify(element.resultData), 1]).then(function (insertres) {
                if (insertres.rowsAffected > 0) {}
              });
            });
          }
        }, {
          key: "getMyInspectionsDB",
          value: function getMyInspectionsDB() {
            var _this5 = this;

            var query = "SELECT * FROM MyInspections";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              _this5.inspectionList = [];

              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  var element = data.rows.item(i);
                  element.resultData = JSON.parse(data.rows.item(i).ResultData);

                  _this5.inspectionList.push(element);
                }

                _this5.showList = true;
              } else {
                _this5.showList = false;
              }
            });
          }
        }, {
          key: "moveInspection",
          value: function moveInspection(resultData) {
            this.router.navigate(['/tabs/teacher/volunteer-inspection', {
              details: "inspection",
              data: JSON.stringify(resultData),
              pageid: 1
            }]);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['tabs/dashboard']);
          }
        }]);
      }();

      _MyInspectionsPage.ctorParameters = function () {
        return [{
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }];
      };

      _MyInspectionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-inspections',
        template: _raw_loader_my_inspections_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_inspections_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyInspectionsPage);
      /***/
    },

    /***/
    73256:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/my-inspections/my-inspections.page.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".row-clr {\n  background: white;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.img-center {\n  margin: auto;\n  text-align: center;\n}\n\n.mr-10 {\n  margin: 15px;\n}\n\n.txt-aln {\n  padding-left: 0px;\n}\n\n.btn-bck {\n  --background:transparent;\n}\n\nion-input {\n  white-space: pre-line;\n}\n\nion-label {\n  font-size: 14px;\n}\n\nion-item {\n  padding-bottom: 5px;\n}\n\n.label-stacked.sc-ion-label-md-h, .label-floating.sc-ion-label-md-h {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\n.card-widget {\n  width: 100%;\n  margin: auto;\n  margin-top: 5%;\n  padding: 1%;\n  background-color: #e8f1f8;\n}\n\nion-label {\n  font-size: 12px;\n}\n\n.card-title {\n  width: 90%;\n  display: inline-block;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n\n.card-subtitle {\n  color: #000000;\n  font-size: 13px;\n}\n\n.toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n}\n\nion-title {\n  position: static;\n}\n\nimg {\n  zoom: 1.2;\n}\n\nh2 {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWluc3BlY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0Esd0JBQUE7QUFDRjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUVJLDJCQUFBO0FBQ0o7O0FBQ0c7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUVJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoibXktaW5zcGVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1jbHIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAuaW1nLWNlbnRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tci0xMCB7XHJcbiAgICBtYXJnaW46MTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnR4dC1hbG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tYmNrIHtcclxuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmRcclxue1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgIC5jYXJkLXdpZGdldFxyXG4gIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjg7XHJcbiAgfVxyXG5cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZVxyXG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQtc3VidGl0bGVcclxue1xyXG4gICAgY29sb3I6ICAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi50b29sYmFyLXRpdGxlIHtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG5cclxuaW1ne1xyXG4gIHpvb206MS4yO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    35973:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/my-inspections/my-inspections.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar class=\"toolbar\"  text-wrap>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">ITK Center Support Details</div>\r\n    </ion-title> -->\r\n    <!-- <ion-buttons slot=\"end\" (click)=\"refreshMyInspections()\">\r\n      <ion-icon class=\"back-icon\" name=\"refresh\" (click)=\"refreshMyInspections()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  <!-- </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goToBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> ITK Center Support Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-row class=\"emptysec\" *ngIf=\"!showList\">\r\n    <img src=\"assets/images/notfound.png\">\r\n    <h2>No inspections added yet</h2>\r\n  </ion-row>\r\n  <ion-grid *ngIf=\"showList\" style=\"padding-left: 15px;\r\n  padding-right: 15px;\">\r\n  <ion-card *ngFor=\"let res of inspectionList\" class=\"card-widget\"\r\n   style=\"background: white;\" (click)=\"moveInspection(res.resultData)\">\r\n   <ion-card-header>\r\n    <ion-card-subtitle class=\"card-subtitle\">{{res.InspDate | date :  \"dd/MM/y\" }}</ion-card-subtitle>\r\n    <ion-card-title class=\"card-title\">{{res.VolName}}</ion-card-title><img src=\"../../../assets/icons/volunteer/arrow.svg\"/>\r\n    <ion-card-subtitle class=\"card-subtitle\">\r\n      {{res.VolPhoneNo}} &nbsp;&nbsp; | &nbsp; &nbsp;{{res.VolDistName}}\r\n   </ion-card-subtitle>\r\n  </ion-card-header>\r\n</ion-card>\r\n</ion-grid>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_my-inspections_my-inspections_module_ts-es5.js.map