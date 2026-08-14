(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_ca-student-details_ca-student-details_module_ts"], {
    /***/
    74932:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-student-details/ca-student-details-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaStudentDetailsPageRoutingModule": function CaStudentDetailsPageRoutingModule() {
          return (
            /* binding */
            _CaStudentDetailsPageRoutingModule
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


      var _ca_student_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-student-details.page */
      77417);

      var routes = [{
        path: '',
        component: _ca_student_details_page__WEBPACK_IMPORTED_MODULE_0__.CaStudentDetailsPage
      }];

      var _CaStudentDetailsPageRoutingModule = /*#__PURE__*/_createClass(function CaStudentDetailsPageRoutingModule() {
        _classCallCheck(this, CaStudentDetailsPageRoutingModule);
      });

      _CaStudentDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CaStudentDetailsPageRoutingModule);
      /***/
    },

    /***/
    31052:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-student-details/ca-student-details.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaStudentDetailsPageModule": function CaStudentDetailsPageModule() {
          return (
            /* binding */
            _CaStudentDetailsPageModule
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


      var _ca_student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-student-details-routing.module */
      74932);
      /* harmony import */


      var _ca_student_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-student-details.page */
      77417);

      var _CaStudentDetailsPageModule = /*#__PURE__*/_createClass(function CaStudentDetailsPageModule() {
        _classCallCheck(this, CaStudentDetailsPageModule);
      });

      _CaStudentDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ca_student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaStudentDetailsPageRoutingModule],
        declarations: [_ca_student_details_page__WEBPACK_IMPORTED_MODULE_1__.CaStudentDetailsPage]
      })], _CaStudentDetailsPageModule);
      /***/
    },

    /***/
    77417:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-student-details/ca-student-details.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaStudentDetailsPage": function CaStudentDetailsPage() {
          return (
            /* binding */
            _CaStudentDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ca_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ca-student-details.page.html */
      14630);
      /* harmony import */


      var _ca_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-student-details.page.scss */
      86870);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _CaStudentDetailsPage = /*#__PURE__*/function () {
        function CaStudentDetailsPage(router, route, ionicstorage, http) {
          _classCallCheck(this, CaStudentDetailsPage);

          this.router = router;
          this.route = route;
          this.ionicstorage = ionicstorage;
          this.http = http;
          this.menuValue = '';
          this.cwsnDiffAbleList = [];
          this.classMap = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            10: 'X',
            11: 'XI',
            12: 'XII',
            13: 'LKG',
            14: 'UKG',
            15: 'PRE-KG'
          };
        }

        return _createClass(CaStudentDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              _this.studentData = JSON.parse(data.item);
              console.log('queryParams', _this.studentData);
              _this.zonelId = _this.studentData.ZonalId;
              _this.schoolName = _this.studentData.SchlNme;
              _this.SchoolId = parseInt(_this.studentData.SchlId);
              _this.EMISNo = _this.studentData.EMIS_No;
              _this.Class = _this.studentData.Class;
              _this.Section = _this.studentData.Section;
              _this.studId = _this.studentData.studId;
              _this.studName = _this.studentData.Name;
              _this.menuValue = data.menuValue;

              _this.ionicstorage.insertData_Replace('studentData', _this.studentData);

              _this.ionicstorage.getData('studentData').then(function (studData) {
                console.log('studData', studData);
              });

              _this.loadDisability(_this.studentData.screen_disability);
            });
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            console.log('title', this.title, 'mode', this.mode); // ====schoollist data check in local db======
            // this.checkLocalDB();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/ca-student-list'], {
              queryParams: {
                item: JSON.stringify(this.studentData),
                menuValue: this.menuValue,
                'zonleId': this.zonelId,
                title: this.title,
                mode: this.mode
              }
            });
          }
        }, {
          key: "goToDomainList",
          value: function goToDomainList() {
            this.router.navigate(["/tabs/ca-domain-list"], {
              queryParams: {
                title: this.title,
                mode: this.mode
              }
            });
          }
        }, {
          key: "loadDisability",
          value: function loadDisability(disabily) {
            var _this2 = this;

            // let url = 'https://d1wpyxz35bzzz4.cloudfront.net/diff-abled/baseapp_diff_able_json.json';
            this.ionicstorage.getData('cwsn_diff_able_json').then(function (data) {
              if (!data) {
                _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.cwsn_diff_able_json).subscribe(function (data) {
                  _this2.calcDisability(data.cwsn_diff_able, disabily);

                  _this2.ionicstorage.insertData_Replace('cwsn_diff_able_json', data.cwsn_diff_able);
                });
              } else {
                _this2.calcDisability(data, disabily);
              }

              ;
            });
          }
        }, {
          key: "calcDisability",
          value: function calcDisability(list, disabily) {
            this.cwsnDiffAbleList = [];
            disabily = disabily.split(",");
            this.cwsnDiffAbleList = list.filter(function (obj) {
              return disabily.includes(obj.id.toString());
            });
            debugger;
          }
        }, {
          key: "classDisplay",
          get: function get() {
            return this.classMap[this.Class] || '';
          }
        }]);
      }();

      _CaStudentDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }];
      };

      _CaStudentDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ca-student-details',
        template: _raw_loader_ca_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ca_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CaStudentDetailsPage);
      /***/
    },

    /***/
    86870:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-student-details/ca-student-details.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhLXN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQ0FBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORjs7QUFTQTtFQUNFLHdDQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBTkY7O0FBU0E7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQTVDUztFQTZDVCxpQkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBV0E7RUFDRSxhQUFBO0VBQ0Usc0JBQUE7QUFSSjs7QUFXRTtFQUNFLGlCQUFBO0FBVEo7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBY0U7RUFHRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZEo7O0FBbUJBO0VBQ0UsNEJBQUE7QUFoQkY7O0FBd0JJO0VBQ0UsY0FBQTtFQUNBLGdCQTVGTztFQTZGUCxnQ0FoR087QUEyRWI7O0FBNkJLO0VBQ0UsY0FBQTtFQUNBLGdCQXZHTTtFQXdHTixnQ0FBQTtBQTNCUDs7QUFtQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBakNKOztBQWtDSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWhDTjs7QUFpQ007RUFDRSxnQkF6SEs7RUEwSEwsZ0NBN0hLO0FBOEZiOztBQWlDTTtFQUVFLGdDQWpJSztBQWlHYjs7QUFvQ0k7RUFDRSxxQkFBQTtBQWxDTjs7QUFtQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFqQ1I7O0FBa0NRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBaENWOztBQXNDRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBbkNKOztBQXNDRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFuQ0oiLCJmaWxlIjoiY2Etc3R1ZGVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhcmlhYmxlc1xyXG5cclxuJHRleHQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRhcnJvdy1pY29uLWNvbG9yOnZhcigtLWljb24tY29sb3IpO1xyXG4kZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbiVsYWJlbC1kZXNpZ257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1kZXNpZ257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG5cclxuLy8gaGVhZGVyXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAucGFnZS10aXRsZXtcclxuICB9XHJcbiAgLnN0dU5hbWV7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zY3JlZW4tZGF0ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xyXG4gIC50ZXh0LWNvbG9ye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1wcmltYXJ5KTtcclxuICB9XHJcbiAgLmRhdGVwaWNrZXJ7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIH1cclxuIH1cclxuXHJcbi8vICBpb24taW5wdXQgcGFkZGluZ1xyXG4ucGFkZGluZy1sZWZ0e1xyXG4gIHBhZGRpbmctbGVmdDogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLy8gY2xhc3MgYW5kIHNlY3Rpb25cclxuICAuY2FyZC1hbGlnbiB7XHJcbiAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAuY2xhc3N7XHJcbiAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgIC5jbGFzcy10aXRsZXtcclxuICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIH1cclxuICAgIC5jbGFzc19fdmFsdWV7XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnNlY3Rpb257XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi1kZXNpZ247XHJcbiAgICAgLnNlY3Rpb24tdGl0bGV7XHJcbiAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICB9XHJcbiAgICAgLnNlY3Rpb25fX3ZhbHVle1xyXG4gICAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG4gIC8vIGZvcm1cclxuICAuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLmZvcm0tZ3JvdXBfX3RpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWdyb3VwX192YWx1ZXtcclxuICAgICAgICBAZXh0ZW5kICVsYWJlbC1kZXNpZ247XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAuaWNvbi1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgICAgIC5hcnJvdy1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5jdXN0b21JY29uQmcge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDBweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    14630:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/ca-student-details/ca-student-details.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-content class=\"graybackgrond\">\r\n    <ion-card class=\"card-align ion-card-margin\">\r\n      <form class=\"form\">\r\n        <div class=\"form-group\">\r\n\r\n          <ion-col size=\"12\" no-padding>\r\n            <ion-label class=\"form-group__title\">School Name</ion-label>\r\n            <ion-input class=\"form-group__value\" value=\"{{schoolName}}\" disabled></ion-input>\r\n          </ion-col>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-col size=\"12\" no-padding>\r\n            <ion-label class=\"form-group__title\">Emis ID</ion-label>\r\n            <ion-input class=\"form-group__value\" value=\"{{EMISNo}}\" disabled></ion-input>\r\n          </ion-col>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" no-padding>\r\n              <ion-label class=\"form-group__title\">Class</ion-label>\r\n              <!-- <ion-input class=\"form-group__value\" value=\"{{Class}}\" disabled></ion-input> -->\r\n               <ion-input class=\"form-group__value\" [value]=\"classDisplay\" disabled></ion-input>\r\n            </ion-col>\r\n            <ion-col size=\"6\" no-padding>\r\n              <ion-label class=\"form-group__title\">Section</ion-label>\r\n              <ion-input class=\"form-group__value\" value=\"{{Section}}\" disabled></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-col size=\"12\" no-padding>\r\n            <ion-label class=\"form-group__title\">Disability</ion-label>\r\n            <div>\r\n              <span class=\"disList\" *ngFor=\"let item of cwsnDiffAbleList;let last=last\">\r\n                {{item.value}}{{!last?\",\":\".\"}}\r\n              </span>\r\n            </div>\r\n          </ion-col>\r\n        </div>\r\n      </form>\r\n      <div class=\"mt-2 text-center pb-3\">\r\n        <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"goToDomainList()\">NEXT</ion-button>\r\n      </div>\r\n    </ion-card>\r\n\r\n  </ion-content>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_ca-student-details_ca-student-details_module_ts-es5.js.map