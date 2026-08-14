(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_survey-by-me_survey-by-me_module_ts"], {
    /***/
    48350:
    /*!************************************************************************!*\
      !*** ./src/app/pages/oosc/survey-by-me/survey-by-me-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveyByMePageRoutingModule": function SurveyByMePageRoutingModule() {
          return (
            /* binding */
            _SurveyByMePageRoutingModule
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


      var _survey_by_me_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./survey-by-me.page */
      60551);

      var routes = [{
        path: '',
        component: _survey_by_me_page__WEBPACK_IMPORTED_MODULE_0__.SurveyByMePage
      }];

      var _SurveyByMePageRoutingModule = /*#__PURE__*/_createClass(function SurveyByMePageRoutingModule() {
        _classCallCheck(this, SurveyByMePageRoutingModule);
      });

      _SurveyByMePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SurveyByMePageRoutingModule);
      /***/
    },

    /***/
    99873:
    /*!****************************************************************!*\
      !*** ./src/app/pages/oosc/survey-by-me/survey-by-me.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveyByMePageModule": function SurveyByMePageModule() {
          return (
            /* binding */
            _SurveyByMePageModule
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


      var _survey_by_me_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./survey-by-me-routing.module */
      48350);
      /* harmony import */


      var _survey_by_me_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./survey-by-me.page */
      60551);

      var _SurveyByMePageModule = /*#__PURE__*/_createClass(function SurveyByMePageModule() {
        _classCallCheck(this, SurveyByMePageModule);
      });

      _SurveyByMePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _survey_by_me_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurveyByMePageRoutingModule],
        declarations: [_survey_by_me_page__WEBPACK_IMPORTED_MODULE_1__.SurveyByMePage]
      })], _SurveyByMePageModule);
      /***/
    },

    /***/
    60551:
    /*!**************************************************************!*\
      !*** ./src/app/pages/oosc/survey-by-me/survey-by-me.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveyByMePage": function SurveyByMePage() {
          return (
            /* binding */
            _SurveyByMePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_survey_by_me_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./survey-by-me.page.html */
      94157);
      /* harmony import */


      var _survey_by_me_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./survey-by-me.page.scss */
      15246);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SurveyByMePage = /*#__PURE__*/function () {
        function SurveyByMePage(route, router, emisUser, userSessionService) {
          _classCallCheck(this, SurveyByMePage);

          this.route = route;
          this.router = router;
          this.emisUser = emisUser;
          this.userSessionService = userSessionService;
          this.studList = [];
          this.acYrList = [// { label: '2020-2021', value: '2020' },
          // { label: '2021-2022', value: '2021' },
          {
            label: '2022-2023',
            value: '2022'
          }, {
            label: '2023-2024',
            value: '2023'
          } // { label: 'None', value: '3' }
          ];
          this.toBeAdmitted = [];
          this.toBeVerified = [];
          this.toBeSurvey = [];
          this.nonTarget = [];
        }

        return _createClass(SurveyByMePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.paramsId = this.routeData.queryParams.Id;
            this.pageId = this.routeData.queryParams.page;
            this.active = this.routeData.queryParams.active;
            this.distId = this.routeData.queryParams.distId;
            this.teacher_id = this.userSessionService.teacher_id();
            console.log('teacher_id', this.teacher_id); // this.getNvrEnrollmentStuList();
          }
        }, {
          key: "getOOSCstuList",
          value: function getOOSCstuList(event) {
            var _this = this;

            console.log('event', event);
            this.toBeAdmitted = [];
            this.toBeVerified = [];
            this.toBeSurvey = [];
            this.nonTarget = [];
            this.studList = [];
            this.emisUser.getAccListSurvey(this.teacher_id, event).subscribe(function (res) {
              console.log('getAccListSurvey', res);

              if (res.dataStatus == true) {
                _this.studList = res.result;

                for (var i = 0; i < _this.studList.length; i++) {
                  if (_this.studList[i].reason_type == 'To be admitted') {
                    _this.toBeAdmitted.push(_this.studList[i]);
                  }

                  if (_this.studList[i].reason_type == "To be verified") {
                    _this.toBeVerified.push(_this.studList[i]);
                  }

                  if (_this.studList[i].reason_type == 'To be survey') {
                    _this.toBeSurvey.push(_this.studList[i]);
                  }

                  if (_this.studList[i].reason_type == 'Non-Target') {
                    _this.nonTarget.push(_this.studList[i]);
                  }
                }

                _this.studListCopy = _this.studList;
                console.log('stuList', _this.studList);
              } else {
                _this.studList = [];
              }
            });
            console.log('toBeAdmitted:', this.toBeAdmitted, 'toBeVerified:', this.toBeSurvey, 'toBeSurvey:');
          }
        }, {
          key: "getNvrEnrollmentStuList",
          value: function getNvrEnrollmentStuList() {
            var _this2 = this;

            this.emisUser.getNvrEnrolmentStudentListForBRTE(this.teacher_id).subscribe(function (res) {
              _this2.studList = res.result;
              _this2.studListCopy = _this2.studList;
              console.log('stuList', _this2.studList);
            });
          }
        }, {
          key: "getFilterStudlist",
          value: function getFilterStudlist(event) {
            var _this3 = this;

            console.log('test', event);
            this.searchItem = event.detail.value.trim(); //  this.searchItem = this.searchItem;

            console.log('test1', this.searchItem, this.toBeAdmitted);
            this.toBeAdmitted.forEach(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1) {
                console.log('inside if');
                item.filter = 1;
              } else {
                console.log('inside else');
                item.filter = 2; //  this.noData = true;
              } //  console.log('toBeAdmitted',item.filter)


              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              }
            });
            this.toBeVerified.filter(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2; //  this.noData = true;
              } //  console.log('toBeVerified',item.filter)


              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              }
            });
            this.nonTarget.filter(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2; //  this.noData = true;
              } //  console.log('nonTarget',item.filter)


              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying_id.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this3.searchItem.toLowerCase()) > -1;
              }
            });
          } // getSurveyData(event){
          //   console.log('event',event);
          //   this.router.navigate(['/tabs/ooscquestions'], { queryParams: { 'studentName': event.StudName, 'Address': event.address, 'indexId': event.IndxId, 'teacher': this.teacher_id, 'Id': '2'}, skipLocationChange: false });
          // }

        }, {
          key: "goToOoscSurvey",
          value: function goToOoscSurvey(studentData) {
            // debugger
            this.router.navigate(['/tabs/ooscquestions'], {
              queryParams: {
                'studentDetails': JSON.stringify(studentData),
                'teacher': this.teacher_id,
                'school': studentData.school_id,
                'Id': this.paramsId,
                'active': this.active,
                'page': this.pageId,
                'distId': this.distId
              },
              skipLocationChange: false
            }); // this.router.navigate(['/tabs/ooscquestions'], { queryParams: { 'studentName': student.NAME, 'studentEmisNo': student.unique_id_no, 'Address': student.Address, 'id': student.stud_id, 'teacher': this.teacher_id, 'school': this.activeSchoolId, 'block': this.blockId, 'Id': this.paramsId ,'schoolname': this.activeSchollName,'active':this.active}, skipLocationChange: false });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.acyear = '';
            this.router.navigate(['tabs/oosctype']);
          }
        }]);
      }();

      _SurveyByMePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }];
      };

      _SurveyByMePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-survey-by-me',
        template: _raw_loader_survey_by_me_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_survey_by_me_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SurveyByMePage);
      /***/
    },

    /***/
    15246:
    /*!****************************************************************!*\
      !*** ./src/app/pages/oosc/survey-by-me/survey-by-me.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".noDataCls {\n  padding: 10px;\n  text-align: center;\n}\n\n.d-none {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1ieS1tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3VydmV5LWJ5LW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0RhdGFDbHMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    94157:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/survey-by-me/survey-by-me.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\">Survey By Academic Year</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"graybackgrond\">\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-row style=\"width:100%\">\r\n        <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n          <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n              class=\"index-aln\"></span>Academic Year</ion-label>\r\n        </ion-col>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          style=\"max-width: 100% !important;padding-left:0px\" [(ngModel)]=\"acyear\" (ionChange)=\"getOOSCstuList($event.detail.value)\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of acYrList\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n  <div style=\"margin: 10px;\">\r\n    <!-- {{studList.length}} : studList length          {{toBeAdmitted}} -->\r\n    <ion-searchbar *ngIf=\"studList?.length != 0\" style=\"padding-left : 0px; padding-right: 0px; background: none;\" (ionChange)=\"getFilterStudlist($event)\" placeholder=\"Search\" class=\"search\"></ion-searchbar>\r\n\r\n    <!-- {{item.filter}} -->\r\n    <div style=\"margin-top:15px;\" *ngIf=\"toBeAdmitted?.length != 0 && studList?.length != 0\"> \r\n      <ion-label style=\"margin-left: 20px;font-weight:500;\">To be admitted</ion-label>     \r\n    <!-- <ion-card *ngFor=\"let item of studList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\" (click)=\"getSurveyData(item)\"> -->\r\n    <ion-card *ngFor=\"let item of toBeAdmitted\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p> -->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p>-->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p> -->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\" style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == null || item.Status == ''\">\r\n            <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == 2 || item.Status == 1\"\r\n            style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n  </div>\r\n  <!-- <ion-card *ngFor=\"let item of studList\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\" (click)=\"getSurveyData(item)\"> -->\r\n\r\n\r\n\r\n  <div style=\"margin-top:15px;\" *ngIf=\"toBeVerified?.length != 0 && studList?.length != 0\">\r\n    <ion-label style=\"margin-left: 20px;font-weight:500;\">To be verified</ion-label>  \r\n    <ion-card *ngFor=\"let item of toBeVerified\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n\r\n      <ion-item lines=\"none\">\r\n        <img src=\"{{item.gender== '1'?'assets/icons/boy.svg':'assets/icons/girl.svg'}}\">\r\n        <ion-label *ngIf=\"item.gender == '1'\">\r\n          <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p> -->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '2'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p>-->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n\r\n        <ion-label *ngIf=\"item.gender == '3'\">\r\n          <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n          <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n          <p class=\"designation\">{{item.Address}}</p>\r\n          <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p>-->\r\n          <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n        </ion-label>\r\n        <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\" style=\"margin: auto;outline: none;padding-left:15px\">\r\n          <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == null || item.Status == ''\">\r\n            <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == 2 || item.Status == 1\"\r\n            style=\"--background:green\">\r\n            <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>    \r\n    </div> \r\n       \r\n    <div style=\"margin-top:15px;\" *ngIf=\"nonTarget?.length != 0 && studList?.length != 0\">    \r\n      <ion-label style=\"margin-left: 20px;font-weight:500;\">Non-Target</ion-label>   \r\n      <ion-card *ngFor=\"let item of nonTarget\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{item.gender== '1'?'assets/icons/boy.svg':'assets/icons/girl.svg'}}\">\r\n          <ion-label *ngIf=\"item.gender == '1'\">\r\n            <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}}</p>\r\n            <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n            <p class=\"designation\">{{item.Address}}</p>\r\n            <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p> -->\r\n            <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n          </ion-label>\r\n\r\n          <ion-label *ngIf=\"item.gender == '2'\">\r\n            <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n            <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n            <p class=\"designation\">{{item.Address}}</p>\r\n            <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p>-->\r\n            <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n          </ion-label>\r\n\r\n          <ion-label *ngIf=\"item.gender == '3'\">\r\n            <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} </p>\r\n            <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n            <p class=\"designation\">{{item.Address}}</p>\r\n            <!-- <p style=\"font-size: 10;color:grey\">Reason: {{item.Reason}}</p>-->\r\n            <p style=\"font-size: 10;color:blue\" *ngIf=\"item.reason_type != ''\">Type: {{item.reason_type}}</p>\r\n          </ion-label>\r\n          <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\" style=\"margin: auto;outline: none;padding-left:15px\">\r\n            <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n          </a>\r\n          <div class=\"button\">\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == null || item.Status == ''\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\" *ngIf=\"item.Status == 2 || item.Status == 1\"\r\n              style=\"--background:green\">\r\n              <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n  \r\n      </div>\r\n   \r\n  </div>\r\n\r\n  <div *ngIf=\"studList?.length == 0\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"noDataCls\">\r\n        <ion-label>\r\n          No Data Found\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_survey-by-me_survey-by-me_module_ts-es5.js.map