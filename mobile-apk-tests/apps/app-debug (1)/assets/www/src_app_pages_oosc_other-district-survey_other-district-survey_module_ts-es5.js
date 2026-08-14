(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_other-district-survey_other-district-survey_module_ts"], {
    /***/
    8106:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/oosc/other-district-survey/other-district-survey-routing.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherDistrictSurveyPageRoutingModule": function OtherDistrictSurveyPageRoutingModule() {
          return (
            /* binding */
            _OtherDistrictSurveyPageRoutingModule
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


      var _other_district_survey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./other-district-survey.page */
      3177);

      var routes = [{
        path: '',
        component: _other_district_survey_page__WEBPACK_IMPORTED_MODULE_0__.OtherDistrictSurveyPage
      }];

      var _OtherDistrictSurveyPageRoutingModule = /*#__PURE__*/_createClass(function OtherDistrictSurveyPageRoutingModule() {
        _classCallCheck(this, OtherDistrictSurveyPageRoutingModule);
      });

      _OtherDistrictSurveyPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtherDistrictSurveyPageRoutingModule);
      /***/
    },

    /***/
    27335:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/oosc/other-district-survey/other-district-survey.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherDistrictSurveyPageModule": function OtherDistrictSurveyPageModule() {
          return (
            /* binding */
            _OtherDistrictSurveyPageModule
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


      var _other_district_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./other-district-survey-routing.module */
      8106);
      /* harmony import */


      var _other_district_survey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./other-district-survey.page */
      3177);

      var _OtherDistrictSurveyPageModule = /*#__PURE__*/_createClass(function OtherDistrictSurveyPageModule() {
        _classCallCheck(this, OtherDistrictSurveyPageModule);
      });

      _OtherDistrictSurveyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _other_district_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherDistrictSurveyPageRoutingModule],
        declarations: [_other_district_survey_page__WEBPACK_IMPORTED_MODULE_1__.OtherDistrictSurveyPage]
      })], _OtherDistrictSurveyPageModule);
      /***/
    },

    /***/
    3177:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/oosc/other-district-survey/other-district-survey.page.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherDistrictSurveyPage": function OtherDistrictSurveyPage() {
          return (
            /* binding */
            _OtherDistrictSurveyPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_other_district_survey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./other-district-survey.page.html */
      10395);
      /* harmony import */


      var _other_district_survey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./other-district-survey.page.scss */
      88606);
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


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _OtherDistrictSurveyPage = /*#__PURE__*/function () {
        function OtherDistrictSurveyPage(alertService, userService, emisService, userSessionService, router, route) {
          _classCallCheck(this, OtherDistrictSurveyPage);

          this.alertService = alertService;
          this.userService = userService;
          this.emisService = emisService;
          this.userSessionService = userSessionService;
          this.router = router;
          this.route = route;
          this.otherStudents = [];
        }

        return _createClass(OtherDistrictSurveyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.distId = this.userSessionService.district_id();
            this.teacher_id = this.userSessionService.teacher_id();
            this.routeData = this.route.snapshot;
            this.paramsId = this.routeData.queryParams.Id;
            this.pageId = this.routeData.queryParams.page;
            this.active = this.routeData.queryParams.active;
            this.getUserDetails();
            console.log('id3', this.paramsId);
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this = this;

            this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
              console.log("result", res);

              if (res.dataStatus == true) {
                var uerDetails = res.result;

                if (uerDetails.length > 0) {
                  _this.getOoscOtherDistrict(uerDetails[0].district_id);

                  console.log('dissssss', uerDetails[0].district_id);
                } else {
                  _this.blocklistActive = false;
                }
              } else {
                _this.alertService.error("Something went wrong");
              }
            });
          }
        }, {
          key: "getOoscOtherDistrict",
          value: function getOoscOtherDistrict(distId) {
            var _this2 = this;

            this.emisService.GetOoscOtherDistrict(distId).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.show = false;
                _this2.otherStudents = res.result;
                console.log('>>>>>>>>>>>hey', _this2.otherStudents);
                var student = _this2.otherStudents;
                console.log('>>>>>>>>>>>uuuuu', student);
              } else {
                console.log('>>false');
                _this2.show = true;
              }
            });
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/tabs/oosctype']);
          }
        }, {
          key: "goToOoscSurvey",
          value: function goToOoscSurvey(student) {
            debugger; // console.log('st',student)

            console.log('stuuuuu', student.student_id);
            this.router.navigate(['/tabs/ooscquestions'], {
              queryParams: {
                'studentName': student.name,
                'studentEmisNo': student.unique_id_no,
                'Address': student.house_address,
                'id': student.student_id,
                'teacher': this.teacher_id,
                'school': this.activeSchoolId,
                'block': this.blockId,
                'Id': this.paramsId,
                'schoolname': this.activeSchollName,
                'active': this.active
              },
              skipLocationChange: false
            });
          }
        }]);
      }();

      _OtherDistrictSurveyPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _OtherDistrictSurveyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-other-district-survey',
        template: _raw_loader_other_district_survey_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_other_district_survey_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtherDistrictSurveyPage);
      /***/
    },

    /***/
    88606:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/oosc/other-district-survey/other-district-survey.page.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci1kaXN0cmljdC1zdXJ2ZXkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    10395:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/other-district-survey/other-district-survey.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Student List</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div style=\"text-align: center;padding:10px;font-weight:500; color:black;font-size: 20px;\">\r\n  <ion-label>District wise referred Students</ion-label>\r\n</div>\r\n\r\n  <ion-row *ngIf=\"!show\">\r\n    <ion-col size=\"12\" style=\"padding:0px\">\r\n      <ion-card *ngFor=\"let item of otherStudents\" style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n          <ion-label *ngIf=\"item.gender == '1'\">\r\n            <p class=\"name\" style=\"color:#2176b9 !important\">{{item.name}}</p>\r\n            <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n            <p class=\"designation\">{{item.house_address}}</p>\r\n            <p style=\"font-size: 10;color:grey\">Reason: {{item.dropout_reason}}</p>\r\n            <p style=\"font-size: 10;color:grey\">Referred from: {{item.referedDist}}</p>\r\n          </ion-label>\r\n          <ion-label *ngIf=\"item.gender == '2'\">\r\n            <p class=\"name\" style=\"color:maroon !important\">{{item.name}} </p>\r\n            <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n            <p class=\"designation\">{{item.house_address}}</p>\r\n            <p style=\"font-size: 10;color:grey\">Reason: {{item.dropout_reason}}</p>\r\n            <p style=\"font-size: 10;color:grey\">Referred from: {{item.referedDist}}</p>\r\n          </ion-label>\r\n          <a href=\"tel:{{item.phone_number}}\" style=\"margin: auto;outline: none;padding-left:15px\">\r\n            <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n          </a>\r\n          <div class=\"button\">\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == null || item.Status == 1\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == 2\"\r\n              style=\"--background:green\">\r\n              <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div style=\"text-align: center;\" *ngIf=\"show\">\r\n    <ion-label>\r\n      No Data Found\r\n    </ion-label>\r\n  </div>\r\n  \r\n\r\n</ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_other-district-survey_other-district-survey_module_ts-es5.js.map