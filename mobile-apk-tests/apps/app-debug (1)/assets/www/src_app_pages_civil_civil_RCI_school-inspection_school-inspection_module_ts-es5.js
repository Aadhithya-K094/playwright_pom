(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_school-inspection_school-inspection_module_ts"], {
    /***/
    9316:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/school-inspection/school-inspection-routing.module.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolInspectionPageRoutingModule": function SchoolInspectionPageRoutingModule() {
          return (
            /* binding */
            _SchoolInspectionPageRoutingModule
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


      var _school_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-inspection.page */
      80553);

      var routes = [{
        path: '',
        component: _school_inspection_page__WEBPACK_IMPORTED_MODULE_0__.SchoolInspectionPage
      }];

      var _SchoolInspectionPageRoutingModule = /*#__PURE__*/_createClass(function SchoolInspectionPageRoutingModule() {
        _classCallCheck(this, SchoolInspectionPageRoutingModule);
      });

      _SchoolInspectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolInspectionPageRoutingModule);
      /***/
    },

    /***/
    78683:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/school-inspection/school-inspection.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolInspectionPageModule": function SchoolInspectionPageModule() {
          return (
            /* binding */
            _SchoolInspectionPageModule
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


      var _school_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-inspection-routing.module */
      9316);
      /* harmony import */


      var _school_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-inspection.page */
      80553);

      var _SchoolInspectionPageModule = /*#__PURE__*/_createClass(function SchoolInspectionPageModule() {
        _classCallCheck(this, SchoolInspectionPageModule);
      });

      _SchoolInspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolInspectionPageRoutingModule],
        declarations: [_school_inspection_page__WEBPACK_IMPORTED_MODULE_1__.SchoolInspectionPage]
      })], _SchoolInspectionPageModule);
      /***/
    },

    /***/
    80553:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/school-inspection/school-inspection.page.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolInspectionPage": function SchoolInspectionPage() {
          return (
            /* binding */
            _SchoolInspectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-inspection.page.html */
      11043);
      /* harmony import */


      var _school_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-inspection.page.scss */
      54102);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
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

      var _SchoolInspectionPage = /*#__PURE__*/function () {
        function SchoolInspectionPage(fb, userService, route, router, alertService, userSessionService) {
          _classCallCheck(this, SchoolInspectionPage);

          this.fb = fb;
          this.userService = userService;
          this.route = route;
          this.router = router;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.noData = true;
          this.submitted = false;
          this.filter = [];
          this.username = this.userSessionService.emis_username();
        }

        return _createClass(SchoolInspectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sessionUserName = this.userSessionService.emis_username();
            this.routeData = this.route.snapshot;
            this.UdiseCode = this.routeData.queryParams.uidse;
            console.log(this.UdiseCode); // this.getSchoolInfo()
          }
        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo() {
            var _this = this;

            this.userService.getSchoolInfo(this.UdiseCode).subscribe(function (res) {
              console.log(res, "info");

              if (res.dataStatus) {
                _this.noData = false;
                _this.noDataFound = false;
                _this.schoolInfo = res.result;
                console.log(_this.schoolInfo, "info");
              } else {
                _this.noData = true;
                _this.noDataFound = true;
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/dashboard']);
          }
        }, {
          key: "onKeypressEvent",
          value: function onKeypressEvent(event) {
            //debugger
            this.udiseLen = this.UdiseCode;
            var len = this.udiseLen.length;

            if (len == 11) {} else {
              this.schoolInfo = [];
              this.noData = true;
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.router.navigate(['/tabs/inspection']);
          }
        }]);
      }();

      _SchoolInspectionPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }];
      };

      _SchoolInspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-school-inspection',
        template: _raw_loader_school_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolInspectionPage);
      /***/
    },

    /***/
    54102:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/school-inspection/school-inspection.page.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".formLine {\n  --background: transparent;\n}\n\n.header {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.ion-margin-bottom {\n  margin-bottom: 0px;\n  border-radius: 15px;\n}\n\n.row-width {\n  width: 100%;\n}\n\n.ionlbl {\n  color: #0e0b0b;\n  font-size: 20px !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.input-txt {\n  border-bottom: 1px solid;\n  color: #8B67B3;\n}\n\n.formLine {\n  color: red;\n  font-size: 16px !important;\n  padding-top: 5px;\n}\n\n.icon-aln {\n  margin: auto;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.icon-color {\n  zoom: 1.8;\n  color: #8B67B3;\n}\n\n.title {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #8b67b3;\n  border-right: 12px solid #8b67b3;\n  padding: 13px;\n}\n\n.title-clr {\n  color: #0e0b0b;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n}\n\n.value {\n  color: #8B67B3;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n\n.value-class {\n  color: #f8f9fa;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.value-data {\n  color: #8B67B3;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.title-nodata {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #8b67b3;\n  border-right: 5px solid #8b67b3;\n}\n\nion-label {\n  font-size: 16px !important;\n}\n\n.icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHlCQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFFO0VBQ0EsVUFBQTtBQUdGOztBQURFO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkU7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhFO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpFO0VBQ0EsU0FBQTtFQUFTLGNBQUE7QUFRWDs7QUFORTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBU0o7O0FBUEU7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkU7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFXRjs7QUFURTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsa0JBQUE7QUFXSjs7QUFURTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBWUY7O0FBVkU7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBYUY7O0FBVkU7RUFDQSwwQkFBQTtBQWFGOztBQVZFO0VBQ0UsZUFBQTtBQWFKIiwiZmlsZSI6InNjaG9vbC1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtTGluZXtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLnJvdy13aWR0aCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAuaW9ubGJsIHtcclxuICAgIGNvbG9yOnJnYigxNCwgMTEsIDExKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudmFsaWQtY2xyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAuaW5wdXQtdHh0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgY29sb3I6IzhCNjdCM1xyXG4gIH1cclxuICAuZm9ybUxpbmUge1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAuaWNvbi1hbG4ge1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuaWNvbi1jb2xvciB7XHJcbiAgem9vbToxLjg7Y29sb3I6IzhCNjdCM1xyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzhiNjdiMztcclxuICAgIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCAjOGI2N2IzO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICB9XHJcbiAgLnRpdGxlLWNsciB7XHJcbiAgY29sb3I6cmdiKDE0LCAxMSwgMTEpO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4XHJcbiAgfVxyXG4gIC52YWx1ZSB7XHJcbiAgY29sb3I6IzhCNjdCMztcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgcGFkZGluZy10b3A6MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHhcclxuICB9XHJcbiAgLnZhbHVlLWNsYXNzIHtcclxuICAgIGNvbG9yOiAjZjhmOWZhO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM4YjY3YjM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52YWx1ZS1kYXRhIHtcclxuICBjb2xvcjojOEI2N0IzO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGl0bGUtbm9kYXRhIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGI2N2IzO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    11043:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/school-inspection/school-inspection.page.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Regulator compliance</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div>\r\n    <ion-row class=\"title\">\r\n      <ion-col size=\"9\" class=\"title-clr\">\r\n        <ion-label>New School</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"value-class\" (click)=\"nextPage()\">\r\n        <ion-label>\r\n          <ion-icon class=\"icon\" src=\"../../../../assets/icons/next_purple.svg\">\r\n          </ion-icon>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"title\">\r\n      <ion-col size=\"9\" class=\"title-clr\">\r\n        <ion-label>Renewal School</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"value-class\" (click)=\"nextPage()\">\r\n        <ion-label>\r\n          <ion-icon class=\"icon\" src=\"../../../../assets/icons/next_purple.svg\">\r\n          </ion-icon>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"title\">\r\n      <ion-col size=\"9\" class=\"title-clr\">\r\n        <ion-label>Upgrade School</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"value-class\" (click)=\"nextPage()\">\r\n        <ion-label>\r\n          <ion-icon class=\"icon\" src=\"../../../../assets/icons/next_purple.svg\">\r\n          </ion-icon>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_school-inspection_school-inspection_module_ts-es5.js.map