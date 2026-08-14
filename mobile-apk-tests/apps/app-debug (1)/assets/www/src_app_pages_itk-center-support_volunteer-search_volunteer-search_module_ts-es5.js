(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-search_volunteer-search_module_ts"], {
    /***/
    91671:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-search/volunteer-search-routing.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerSearchPageRoutingModule": function VolunteerSearchPageRoutingModule() {
          return (
            /* binding */
            _VolunteerSearchPageRoutingModule
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


      var _volunteer_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-search.page */
      17005);

      var routes = [{
        path: '',
        component: _volunteer_search_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerSearchPage
      }];

      var _VolunteerSearchPageRoutingModule = /*#__PURE__*/_createClass(function VolunteerSearchPageRoutingModule() {
        _classCallCheck(this, VolunteerSearchPageRoutingModule);
      });

      _VolunteerSearchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VolunteerSearchPageRoutingModule);
      /***/
    },

    /***/
    80545:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-search/volunteer-search.module.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VounteerSearchPageModule": function VounteerSearchPageModule() {
          return (
            /* binding */
            _VounteerSearchPageModule
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


      var _volunteer_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-search-routing.module */
      91671);
      /* harmony import */


      var _volunteer_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-search.page */
      17005);

      var _VounteerSearchPageModule = /*#__PURE__*/_createClass(function VounteerSearchPageModule() {
        _classCallCheck(this, VounteerSearchPageModule);
      });

      _VounteerSearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _volunteer_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerSearchPageRoutingModule],
        declarations: [_volunteer_search_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerSearchPage]
      })], _VounteerSearchPageModule);
      /***/
    },

    /***/
    17005:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-search/volunteer-search.page.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerSearchPage": function VolunteerSearchPage() {
          return (
            /* binding */
            _VolunteerSearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_volunteer_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./volunteer-search.page.html */
      47425);
      /* harmony import */


      var _volunteer_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-search.page.scss */
      86440);
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


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);

      var _VolunteerSearchPage = /*#__PURE__*/function () {
        function VolunteerSearchPage(route, navCtrl, router, userSessionService, emisService, alertService) {
          _classCallCheck(this, VolunteerSearchPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.router = router;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.alertService = alertService;
          this.searchOption = "id";
          this.smcstatusList = [];
        }

        return _createClass(VolunteerSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            debugger;
            this.showList = false;
            this.routeData = this.route.snapshot;
            this.paramsVolunteerId = this.routeData.params.volunId;

            if (this.paramsVolunteerId) {
              this.searchTxt = this.paramsVolunteerId;
              this.emisService.searchVolunteerById(this.searchTxt).subscribe(function (res) {
                if (res && res.dataStatus) {
                  _this.noData = false;
                  _this.volInfo = res.result[0];
                  _this.showList = true;
                } else {
                  _this.alertService.error(res.message);

                  _this.noData = true;
                }
              });
              this.emisService.searchVolunteerByPhone(this.searchTxt).subscribe(function (res) {
                if (res && res.dataStatus) {
                  _this.noData = false;
                  _this.volInfo = res.result[0];
                  _this.showList = true;
                } else {
                  _this.alertService.error(res.message);

                  _this.noData = true;
                }
              });
            } else {
              this.searchTxt = "";
            }
          }
        }, {
          key: "doSearch",
          value: function doSearch() {
            if (this.searchOption == 'phone') {
              if (this.searchTxt && this.searchTxt.length == 10) {
                this.getVolunteerInfoServer();
              } else {
                this.alertService.error("Invalid phone number");
              }
            } else if (this.searchOption == 'id' && this.searchTxt) {
              this.getVolunteerInfoServer();
            }
          }
        }, {
          key: "getVolunteerInfoServer",
          value: function getVolunteerInfoServer() {
            var _this2 = this;

            debugger;

            if (this.searchOption == 'id') {
              this.emisService.searchVolunteerById(this.searchTxt).subscribe(function (res) {
                if (res && res.dataStatus) {
                  _this2.noData = false;
                  _this2.volInfo = res.result[0];
                  _this2.showList = true;
                } else if (res.message == "No Data Found") {
                  _this2.noData = true; // this.alertService.error("This id or phone number is not available / volunteer discontinued")

                  _this2.alertService.error(res.message);
                } else {
                  _this2.noData = true;

                  _this2.alertService.error(res.message);
                }
              });
            } else {
              this.emisService.searchVolunteerByPhone(this.searchTxt).subscribe(function (res) {
                if (res && res.dataStatus) {
                  _this2.noData = false;
                  _this2.volInfo = res.result[0];
                  _this2.showList = true;
                } else if (res.message == "No Data Found") {
                  _this2.noData = true;

                  _this2.alertService.error(res.message); // this.alertService.error("This id or phone number is not available / volunteer discontinued")

                } else {
                  _this2.noData = true;

                  _this2.alertService.error(res.message);
                }
              });
            }
          }
        }, {
          key: "startInspection",
          value: function startInspection() {
            this.router.navigate(['/tabs/volunteer-inspection'], {
              queryParams: {
                searchTxt: this.searchTxt,
                volunteerId: this.volInfo.VolunteerId,
                VolEmisUsrName: this.volInfo.PhoneNo
              }
            }); //  this.router.navigate(['/tabs/teacher/volunteer-inspection', { details: "volunteer", data: JSON.stringify(this.volInfo) }])
            // this.router.navigate(['/tabs/teacher/volunteer-inspection', { searchTxt : this.searchTxt,volunteerId : this.volInfo.VolunteerId,details: "volunteer", data: JSON.stringify(this.volInfo) }])
            // this.navCtrl.navigateForward(['/tabs/volunteer-inspection2'],{ queryParams: { searchTxt : this.searchTxt, volunteerId : this.volInfo.VolunteerId,VolEmisUsrName:this.volInfo.PhoneNo}});
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.searchOption = event.detail.value;
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            // this.navCtrl.back();
            // this.router.navigate(['tabs/dashboard']);
            this.router.navigate(['tabs/itk-center-dashboard']);
          }
        }]);
      }();

      _VolunteerSearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _VolunteerSearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-volunteer-search',
        template: _raw_loader_volunteer_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_volunteer_search_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VolunteerSearchPage);
      /***/
    },

    /***/
    86440:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-search/volunteer-search.page.scss ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search_row {\n  padding: 3% 2%;\n}\n\nion-searchbar.service_search {\n  width: 100%;\n  --box-shadow: 0px;\n  border-bottom: 0.5px solid #eadefd;\n  padding-bottom: 1px;\n  margin-bottom: 9px;\n  padding-inline-start: 0px;\n  --background: none;\n  padding-bottom: 0px;\n  padding-right: 0px;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\n.card-title {\n  background-color: var(--ion-color-primary);\n  color: white;\n  padding-left: 15px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\n.card-widget {\n  width: 90%;\n  margin: auto;\n  margin-top: 5%;\n  padding: 1%;\n  background-color: #F4F4F4;\n}\n\n.resource-title {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.resource-text {\n  color: #000000;\n}\n\nion-label {\n  font-size: 12px;\n}\n\n.row-clr {\n  background: white;\n  border-radius: 5px;\n}\n\n.img-center {\n  margin: auto;\n  text-align: center;\n}\n\nion-item {\n  --ion-background-color: #ffffff !important;\n}\n\nion-label {\n  font-size: 15px;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUVFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFFRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUFrQixtQkFBQTtFQUNsQixvQkFBQTtBQUVGOztBQUFDO0VBRUMsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFFQSwrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBQTs7QUFFQTtFQUdBLGNBQUE7QUFEQTs7QUFJQTtFQUNBLGVBQUE7QUFEQTs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQVVBO0VBQ0UsMENBQUE7QUFQRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQVJGIiwiZmlsZSI6InZvbHVudGVlci1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaF9yb3d7XHJcbiAgcGFkZGluZzogMyUgMiU7ICBcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhci5zZXJ2aWNlX3NlYXJjaHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJveC1zaGFkb3c6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWFkZWZkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbmlvbi1jYXJkXHJcbntcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtdGl0bGVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxufVxyXG4gLmNhcmQtd2lkZ2V0XHJcbntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG59XHJcblxyXG4ucmVzb3VyY2UtdGl0bGUgXHJcbntcclxuY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vIGZvbnQtc2l6ZTogMThweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLnJlc291cmNlLXRleHQgXHJcbntcclxuLy8gZm9udC1zaXplOiAxNHB4O1xyXG5jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yb3ctY2xyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbWctY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBpb24tZm9vdGVyIHtcclxuLy8gICAmLmZvb3Rlci1tZDo6YmVmb3JlIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgd2hpdGUtc3BhY2U6cHJlLWxpbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    47425:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-search/volunteer-search.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar class=\"toolbar\" text-wrap>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Volunteer Search</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goToBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Volunteer Search</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\" >\r\n  <ion-row class=\"search_row\" style=\"padding-bottom: 0px;\">\r\n\r\n\r\n    <ion-radio-group style=\"width: 100%;\" [(ngModel)]=\"searchOption\" (ionChange)=\"onChange($event)\">\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"padding-left: 10px;\r\n        padding-right: 10px;\" lines=\"none\">\r\n          <ion-radio value=\"id\"></ion-radio>\r\n          <ion-label style=\"padding-left: 10px;font-weight: bold;padding-top: 4px;\">By Volunteer Id</ion-label>\r\n        </ion-item>\r\n        <ion-item style=\"padding-left: 10px;padding-right: 10px;\" lines=\"none\">\r\n          <ion-radio value=\"phone\"></ion-radio>\r\n          <ion-label style=\"padding-left: 10px;font-weight: bold;padding-top: 4px;\">By Phone Number</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-radio-group>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"padding-left: 5px;\r\n  padding-right: 15px;\">\r\n    <ion-col size=\"10\" >\r\n      <ion-searchbar search-icon=“undefined” class=\"icon-search\" inputmode=\"numeric\" [(ngModel)]=\"searchTxt\"\r\n        debounce=\"100\" placeholder=\"Search volunteer\" (search)=\"doSearch()\"></ion-searchbar>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"flex-center\" (click)=\"doSearch()\">\r\n      <ion-button style=\"height: 40px;\">\r\n        <ion-icon style=\"color: aliceblue;\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"mr-10\" *ngIf=\"showList && !noData\">\r\n    <ion-row class=\"card-title\" style=\"margin-left: 15px;\r\n    margin-right: 15px;\">\r\n      <ion-col size=\"12\" >\r\n        <ion-label style=\"font-size: 16px;font-weight: bold;\">Volunteer Details / தன்னார்வலர் விவரங்கள்</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-card class=\"card-widget\" style=\"background: white;\">\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/name.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\" >தன்னார்வலர் பெயர் [Volunteer Name]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.Name}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/phone.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">தொலைபேசி எண் [Mobile Number]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.PhoneNo}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/address.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">முகவரி [Address]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.Address}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/title.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">அஞ்சல் குறியீடு [Pincode]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.Pincode}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/aadhar.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">தன்னார்வலர் ஐடி [Volunteer Id]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.VolunteerId}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/title.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">மாவட்டம் [District]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.VolDistrictName}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"row-clr\">\r\n        <ion-col size=\"2\" class=\"img-center\">\r\n          <img src=\"assets/icons/volunteer/title.svg\" width=\"45%\">\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"txt-aln\" style=\"padding-bottom: 12px;\">\r\n          <ion-label position=\"stacked\" color=\"primary\">வாழ்விடம் [Habitation]</ion-label><br>\r\n          <ion-label position=\"stacked\" color=\"primary\" style=\"color:black\">{{volInfo.Habitation}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </ion-card>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <ion-footer class=\"graybackgrond\">\r\n  <div style=\"text-align: center;\r\n    padding-top: 10px;padding-bottom:15px;font-size: 19px;\">\r\n    <ion-button *ngIf=\"showList\" color=\"primary\" (click)=\"startInspection()\"></ion-button>\r\n  </div>\r\n</ion-footer> -->\r\n\r\n<ion-footer class=\"footer-bckclr\" (click)=\"startInspection()\" *ngIf=\"!noData\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\" style=\"font-size: 19px !important;\">\r\n      Start\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-search_volunteer-search_module_ts-es5.js.map