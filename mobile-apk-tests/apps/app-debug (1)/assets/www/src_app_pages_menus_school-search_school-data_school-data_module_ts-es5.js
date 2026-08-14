(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_school-search_school-data_school-data_module_ts"], {
    /***/
    69902:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/school-data/school-data-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolDataPageRoutingModule": function SchoolDataPageRoutingModule() {
          return (
            /* binding */
            _SchoolDataPageRoutingModule
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


      var _school_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-data.page */
      37571);

      var routes = [{
        path: '',
        component: _school_data_page__WEBPACK_IMPORTED_MODULE_0__.SchoolDataPage
      }];

      var _SchoolDataPageRoutingModule = /*#__PURE__*/_createClass(function SchoolDataPageRoutingModule() {
        _classCallCheck(this, SchoolDataPageRoutingModule);
      });

      _SchoolDataPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolDataPageRoutingModule);
      /***/
    },

    /***/
    61349:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/school-data/school-data.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolDataPageModule": function SchoolDataPageModule() {
          return (
            /* binding */
            _SchoolDataPageModule
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


      var _school_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-data-routing.module */
      69902);
      /* harmony import */


      var _school_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-data.page */
      37571);

      var _SchoolDataPageModule = /*#__PURE__*/_createClass(function SchoolDataPageModule() {
        _classCallCheck(this, SchoolDataPageModule);
      });

      _SchoolDataPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _school_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolDataPageRoutingModule],
        declarations: [_school_data_page__WEBPACK_IMPORTED_MODULE_1__.SchoolDataPage]
      })], _SchoolDataPageModule);
      /***/
    },

    /***/
    37571:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/school-data/school-data.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolDataPage": function SchoolDataPage() {
          return (
            /* binding */
            _SchoolDataPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-data.page.html */
      91112);
      /* harmony import */


      var _school_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-data.page.scss */
      82475);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _SchoolDataPage = /*#__PURE__*/function () {
        function SchoolDataPage(SchoolsService, router, userSessionService, route, userService, fb) {
          _classCallCheck(this, SchoolDataPage);

          this.SchoolsService = SchoolsService;
          this.router = router;
          this.userSessionService = userSessionService;
          this.route = route;
          this.userService = userService;
          this.fb = fb;
          this.headerType = "Header";
          this.sch_id = this.router.getCurrentNavigation().extras; // this.schoolTypeId = +this.userSessionService.schoolTypeId();
          // this.schoolId = this.userSessionService.schoolId();
        }

        return _createClass(SchoolDataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.route.snapshot.queryParamMap.get("id")) {
              // @ts-ignore TS2322
              this.udise_code = this.route.snapshot.queryParamMap.get("id");
              this.school_name = this.route.snapshot.queryParamMap.get("school_name");
              this.school_type = this.route.snapshot.queryParamMap.get("school_type");
              this.school_id = this.route.snapshot.queryParamMap.get("sclid"); // console.log(this.school_name,this.school_type,this.udise_code)
            }

            this.userService.getUdisePdf(this.school_id).subscribe(function (response) {//  console.log(response,"dataresponse",this.school_id)
            });
            this.getHeadings();
          }
        }, {
          key: "getHeadings",
          value: function getHeadings() {
            this.headerList = [{
              id: 1,
              header: 'BASIC INFORMATION'
            }, {
              id: 2,
              header: 'STUDENT AND STAFF DETAILS'
            }, {
              id: 3,
              header: 'SCHOOL DETAILS'
            }];
          }
        }, {
          key: "getheaderOpen",
          value: function getheaderOpen(headerType) {
            if (headerType == 'BASIC INFORMATION') {
              this.headerType = 'BASIC INFORMATION';
            }

            if (headerType == 'STUDENT AND STAFF DETAILS') {
              this.headerType = 'STUDENT AND STAFF DETAILS';
            }

            if (headerType == 'SCHOOL DETAILS') {
              this.headerType = 'SCHOOL DETAILS';
            }
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.headerType = 'Header';
          }
        }, {
          key: "goToBackMenu",
          value: function goToBackMenu() {
            this.router.navigate(['/tabs/nearby-school']);
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              'udise_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', null),
              'school_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', null),
              'latitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', null),
              'longitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', null),
              schoolnew_mediumentry_details: this.fb.array([]),
              schoolnew_langtaught_entry_details: this.fb.array([]),
              voc_trade_details: this.fb.array([])
              /*newly created fields */

            });
          }
        }, {
          key: "getMediumInstruction",
          value: function getMediumInstruction(item) {
            var mediumentry = this.form.controls.schoolnew_mediumentry_details;

            for (var i = 0; i < item.length; i++) {
              mediumentry.push(this.fb.group({
                // school_key_id: this.schoolId,
                medium_instrut: item[i].id,
                // other_medium: item[i].other_medium,
                medium: item[i].MEDINSTR_DESC
              }));
            }
          }
        }, {
          key: "getLanguageList",
          value: function getLanguageList(items) {
            var langtaught_entry = this.form.controls.schoolnew_langtaught_entry_details;

            for (var i = 0; i < items.length; i++) {
              langtaught_entry.push(this.fb.group({
                // school_key_id: this.schoolId,
                lang_taught: items[i].id,
                lang: items[i].MEDINSTR_DESC
              }));
            }
          }
        }, {
          key: "getVocationList",
          value: function getVocationList(data) {
            var vocation_entry = this.form.controls.voc_trade_details;

            for (var i = 0; i < data.length; i++) {
              vocation_entry.push(this.fb.group({
                // school_key_id: this.schoolId,
                voc_trade: data[i].voc_trade,
                trade: data[i].trade
              }));
            }
          }
        }]);
      }();

      _SchoolDataPage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _SchoolDataPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-school-data',
        template: _raw_loader_school_data_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_data_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolDataPage);
      /***/
    },

    /***/
    82475:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/school-data/school-data.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  background: white;\n  padding: 15px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic2Nob29sLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    91112:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/school-search/school-data/school-data.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"headerType == 'Header'\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBackMenu()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">School Data</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"headerType == 'BASIC INFORMATION'\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">BASIC INFORMATION</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"headerType == 'STUDENT AND STAFF DETAILS'\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">STUDENT AND STAFF DETAILS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"headerType == 'SCHOOL DETAILS'\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">SCHOOL DETAILS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"headerType == 'Header'\">\r\n\r\n  <ion-grid class=\"pad-10\">\r\n    <ion-row *ngFor=\"let item of headerList; let i= index;\" class=\"header\">\r\n      <ion-label (click)=getheaderOpen(item.header)><span style=\"padding-right: 5px;\">\r\n          {{item.id}}.</span>{{item.header}}</ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"headerType == 'BASIC INFORMATION'\">\r\n  <ion-grid class=\"pad-10\">\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"5\">\r\n        <ion-label> UDISE Code </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"7\"> {{udise_code}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"5\">\r\n        <ion-label> School Name </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"7\"> {{school_name}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"5\">\r\n        <ion-label> School Address </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"7\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"5\">\r\n        <ion-label> Management </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"7\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"5\">\r\n        <ion-label> School Category </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"7\"></ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"headerType == 'STUDENT AND STAFF DETAILS'\">\r\n  <ion-grid class=\"pad-10\">\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Type of School </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col> \r\n        <ion-row style=\"padding-bottom: 10px;\"> Number of Students </ion-row>\r\n        <ion-row style=\"padding: 5px; background-color: aquamarine;\">\r\n          <ion-col size=\"4\">Boys</ion-col>\r\n          <ion-col size=\"4\">Girls</ion-col>\r\n          <ion-col size=\"4\">Total</ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"background-color: antiquewhite; padding: 5px;\">\r\n          <ion-col size=\"4\">120</ion-col>\r\n          <ion-col size=\"4\">130</ion-col>\r\n          <ion-col size=\"4\">250</ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Number of Teaching Staff </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Number of Non-Teaching Staff </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Pupil-Teacher Ratio </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"headerType == 'SCHOOL DETAILS'\">\r\n  <ion-grid class=\"pad-10\">\r\n    <ion-row class=\"header\">\r\n      <ion-col> \r\n        <ion-row style=\"padding-bottom: 10px;\"> Functional Toilets </ion-row>\r\n        <ion-row style=\"padding: 5px; background-color: aquamarine;\">\r\n          <ion-col size=\"4\">Boys</ion-col>\r\n          <ion-col size=\"4\">Girls</ion-col>\r\n          <ion-col size=\"4\">Not Use</ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"background-color: antiquewhite; padding: 5px;\">\r\n          <ion-col size=\"4\">7</ion-col>\r\n          <ion-col size=\"4\">7</ion-col>\r\n          <ion-col size=\"4\">5</ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Pupil-Classroom Ratio </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Ramp for Children with Special Needs </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header\"\r\n      *ngIf=\"school_type == 'Fully Aided' || school_type == 'Government' || school_type == 'Partially Aided'\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Constitution of SMC </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"header\" *ngIf=\"school_type == 'Central Govt' || school_type == 'Un-aided'\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Affiliation </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"header\"\r\n      *ngIf=\"school_type == 'Fully Aided' || school_type == 'Partially Aided' || school_type == 'Central Govt' || school_type == 'Un-aided'\">\r\n      <ion-col size=\"8\">\r\n        <ion-label> Year of Last Renewal </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_menus_school-search_school-data_school-data_module_ts-es5.js.map