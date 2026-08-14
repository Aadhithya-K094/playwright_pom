(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_never-enrollment-stu-list_never-enrollment-stu-list_module_ts"], {
    /***/
    95597:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/oosc/never-enrollment-stu-list/never-enrollment-stu-list-routing.module.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeverEnrollmentStuListPageRoutingModule": function NeverEnrollmentStuListPageRoutingModule() {
          return (
            /* binding */
            _NeverEnrollmentStuListPageRoutingModule
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


      var _never_enrollment_stu_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./never-enrollment-stu-list.page */
      48950);

      var routes = [{
        path: '',
        component: _never_enrollment_stu_list_page__WEBPACK_IMPORTED_MODULE_0__.NeverEnrollmentStuListPage
      }];

      var _NeverEnrollmentStuListPageRoutingModule = /*#__PURE__*/_createClass(function NeverEnrollmentStuListPageRoutingModule() {
        _classCallCheck(this, NeverEnrollmentStuListPageRoutingModule);
      });

      _NeverEnrollmentStuListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NeverEnrollmentStuListPageRoutingModule);
      /***/
    },

    /***/
    24362:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/oosc/never-enrollment-stu-list/never-enrollment-stu-list.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeverEnrollmentStuListPageModule": function NeverEnrollmentStuListPageModule() {
          return (
            /* binding */
            _NeverEnrollmentStuListPageModule
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


      var _never_enrollment_stu_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./never-enrollment-stu-list-routing.module */
      95597);
      /* harmony import */


      var _never_enrollment_stu_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./never-enrollment-stu-list.page */
      48950);

      var _NeverEnrollmentStuListPageModule = /*#__PURE__*/_createClass(function NeverEnrollmentStuListPageModule() {
        _classCallCheck(this, NeverEnrollmentStuListPageModule);
      });

      _NeverEnrollmentStuListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _never_enrollment_stu_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeverEnrollmentStuListPageRoutingModule],
        declarations: [_never_enrollment_stu_list_page__WEBPACK_IMPORTED_MODULE_1__.NeverEnrollmentStuListPage]
      })], _NeverEnrollmentStuListPageModule);
      /***/
    },

    /***/
    48950:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/oosc/never-enrollment-stu-list/never-enrollment-stu-list.page.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NeverEnrollmentStuListPage": function NeverEnrollmentStuListPage() {
          return (
            /* binding */
            _NeverEnrollmentStuListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_never_enrollment_stu_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./never-enrollment-stu-list.page.html */
      44534);
      /* harmony import */


      var _never_enrollment_stu_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./never-enrollment-stu-list.page.scss */
      41544);
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

      var _NeverEnrollmentStuListPage = /*#__PURE__*/function () {
        function NeverEnrollmentStuListPage(route, userService, alertService, router, emisUser, userSessionService) {
          _classCallCheck(this, NeverEnrollmentStuListPage);

          this.route = route;
          this.userService = userService;
          this.alertService = alertService;
          this.router = router;
          this.emisUser = emisUser;
          this.userSessionService = userSessionService;
          this.studList = [];
          this.cenGovSchlList = [];
          this.govSchlList = [];
          this.fullAidSchoolList = [];
          this.unAidSchlList = [];
          this.parAidSchlList = [];
          this.distStudList = [];
        }

        return _createClass(NeverEnrollmentStuListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.teacher_id = this.userSessionService.teacher_id();
            this.blkId = this.userSessionService.district_id();
            this.Idhide = this.routeData.queryParams.id;
            this.getUserDetails();

            if (this.Idhide == 0 || this.Idhide == undefined) {
              this.blocklistActive = false;
            } else {
              this.blocklistActive = true;
            }
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this = this;

            this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
              if (res.dataStatus == true) {
                var getOoscUserDetails = res.result;

                if (getOoscUserDetails.length > 0) {
                  _this.distId = getOoscUserDetails[0].district_id;

                  _this.getNvrEnrollmentStuList();
                }
              } else {
                _this.alertService.error("Something went wrong");
              }
            });
          }
        }, {
          key: "getNvrEnrollmentStuList",
          value: function getNvrEnrollmentStuList() {
            var _this2 = this;

            // this.emisUser.getNvrEnrolmentStudentList(this.teacher_id, this.distId).subscribe(res => {
            //   this.studList = res.result.my_survey;
            //   this.distStudList = res.result.my_dist_survey;
            // })
            this.emisUser.getNvrEnrolmentStudentListPhaseTwo(this.teacher_id, this.distId).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.studList = res.result.my_survey.filter(function (x) {
                  return x.dropout_reason != null;
                });
                _this2.distStudList = res.result.my_dist_survey.filter(function (x) {
                  return x.dropout_reason != null;
                });
              }
            });
          }
        }, {
          key: "goToOoscSurvey",
          value: function goToOoscSurvey(studentData) {
            // debugger
            // this.router.navigate(['/tabs/ooscquestions'], { queryParams: { 'studentDetails': JSON.stringify(studentData), 'IndxID': studentData.IndxID, 'teacher': this.teacher_id, 'school': this.schId, 'block': this.blkId, 'Id': '2', 'schoolname': this.schName, 'distId': this.distId, 'fun': 'edit' }, skipLocationChange: false });
            this.router.navigate(['/tabs/neverenrollment-quest'], {
              queryParams: {
                'studentDetails': JSON.stringify(studentData),
                'IndxID': studentData.IndxID,
                'teacher': this.teacher_id,
                'school': this.schId,
                'block': this.blkId,
                'Id': '2',
                'schoolname': this.schName,
                'distId': this.distId,
                'fun': 'edit'
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "addSurvey",
          value: function addSurvey() {
            debugger; // this.router.navigate(['tabs/ooscquestions'], { queryParams: { 'Id': '2', 'distId': this.distId, 'fun': 'add' } })

            this.router.navigate(['tabs/neverenrollment-quest'], {
              queryParams: {
                'Id': '2',
                'distId': this.distId,
                'fun': 'add'
              }
            }); // neverenrollment-quest
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['tabs/oosctype']);
          }
        }]);
      }();

      _NeverEnrollmentStuListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }];
      };

      _NeverEnrollmentStuListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-never-enrollment-stu-list',
        template: _raw_loader_never_enrollment_stu_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_never_enrollment_stu_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NeverEnrollmentStuListPage);
      /***/
    },

    /***/
    41544:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/oosc/never-enrollment-stu-list/never-enrollment-stu-list.page.scss ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\nion-button {\n  --color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldmVyLWVucm9sbG1lbnQtc3R1LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6Im5ldmVyLWVucm9sbG1lbnQtc3R1LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    44534:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/never-enrollment-stu-list/never-enrollment-stu-list.page.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\">Never Enrolled Student List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div style=\"margin: 0px 20px;\">\r\n    <ion-row>\r\n      <ion-col size='9'>\r\n      </ion-col>\r\n      <ion-col size='3' float-right>\r\n        <ion-button style=\"margin:0px 10px;\" (click)=\"addSurvey()\">Add <ion-icon slot=\"start\" name=\"add-outline\">\r\n          </ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <!-- <div *ngIf=\"studList?.length != 0\" style=\"margin: 10px;\">\r\n    <ion-label style=\"margin-left: 20px;font-weight:500;\">Survey by me</ion-label>\r\n    <ion-card *ngFor=\"let item of studList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.Gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.Gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.Gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.Gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n          style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"distStudList?.length != 0\" style=\"margin: 10px;\">\r\n    <ion-label style=\"margin-left: 20px;font-weight:500;\">Survey By Others</ion-label>\r\n    <ion-card *ngFor=\"let item of distStudList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.Gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.Gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.Gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.Gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <p style=\"color: rgb(20, 37, 220);\">Type: {{item.reason_type}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n          style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n  <div *ngIf=\"studList?.length != 0\" style=\"margin: 10px;\">\r\n    <ion-label style=\"margin-left: 20px;font-weight:500;\">Survey by me</ion-label>\r\n    <ion-card *ngFor=\"let item of studList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n          style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"distStudList?.length != 0\" style=\"margin: 10px;\">\r\n    <ion-label style=\"margin-left: 20px;font-weight:500;\">Survey By Others</ion-label>\r\n    <ion-card *ngFor=\"let item of distStudList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p class=\"designation\">{{item.address}}</p>\r\n          <p style=\"font-size: 10;color:grey\">Survey Date: {{item.SurveyDate | date:'dd/MM/yyyy'}}</p>\r\n        </ion-label>\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n          style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_never-enrollment-stu-list_never-enrollment-stu-list_module_ts-es5.js.map