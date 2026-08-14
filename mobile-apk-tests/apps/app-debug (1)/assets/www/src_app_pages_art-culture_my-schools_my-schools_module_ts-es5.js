(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_my-schools_my-schools_module_ts"], {
    /***/
    57986:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/art-culture/my-schools/my-schools-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MySchoolsPageRoutingModule": function MySchoolsPageRoutingModule() {
          return (
            /* binding */
            _MySchoolsPageRoutingModule
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


      var _my_schools_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-schools.page */
      56);

      var routes = [{
        path: '',
        component: _my_schools_page__WEBPACK_IMPORTED_MODULE_0__.MySchoolsPage
      }, {
        path: 'pums-session-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_art-culture_my-schools_pums-session-details_pums-session-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pums-session-details/pums-session-details.module */
          67149)).then(function (m) {
            return m.PumsSessionDetailsPageModule;
          });
        }
      }, {
        path: 'otp-submission',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_art-culture_my-schools_otp-submission_otp-submission_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./otp-submission/otp-submission.module */
          93674)).then(function (m) {
            return m.OtpSubmissionPageModule;
          });
        }
      }];

      var _MySchoolsPageRoutingModule = /*#__PURE__*/_createClass(function MySchoolsPageRoutingModule() {
        _classCallCheck(this, MySchoolsPageRoutingModule);
      });

      _MySchoolsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MySchoolsPageRoutingModule);
      /***/
    },

    /***/
    97706:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/art-culture/my-schools/my-schools.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MySchoolsPageModule": function MySchoolsPageModule() {
          return (
            /* binding */
            _MySchoolsPageModule
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


      var _my_schools_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-schools-routing.module */
      57986);
      /* harmony import */


      var _my_schools_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-schools.page */
      56);

      var _MySchoolsPageModule = /*#__PURE__*/_createClass(function MySchoolsPageModule() {
        _classCallCheck(this, MySchoolsPageModule);
      });

      _MySchoolsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _my_schools_routing_module__WEBPACK_IMPORTED_MODULE_0__.MySchoolsPageRoutingModule],
        declarations: [_my_schools_page__WEBPACK_IMPORTED_MODULE_1__.MySchoolsPage]
      })], _MySchoolsPageModule);
      /***/
    },

    /***/
    56:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/art-culture/my-schools/my-schools.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MySchoolsPage": function MySchoolsPage() {
          return (
            /* binding */
            _MySchoolsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_my_schools_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-schools.page.html */
      9920);
      /* harmony import */


      var _my_schools_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-schools.page.scss */
      35741);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _MySchoolsPage = /*#__PURE__*/function () {
        function MySchoolsPage(router, userSessionService, emisService, userService) {
          _classCallCheck(this, MySchoolsPage);

          this.router = router;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.userService = userService;
          this.showtable = false;
          this.allowGroup = false;
          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emisName = this.userSessionService.emis_username();
          this.teacher_id = this.userSessionService.teacher_id();
          var currentDate = new Date();
          this.day = currentDate.getDay();
          var date = currentDate.getDate();
          this.curr_month = currentDate.getMonth() + 1; // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);

          var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
          this.week = weekOfMonth;
        }

        return _createClass(MySchoolsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.emis_usertype == '39') {
              this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
                if (res.dataStatus) {
                  _this.block = res.result[0].block_id;

                  if (_this.block) {
                    _this.initialGet();
                  }
                }
              });
            }
          }
        }, {
          key: "initialGet",
          value: function initialGet() {
            var _this2 = this;

            var data = {
              "BlkId": this.block
            };
            this.schoolListAll = [];
            this.emisService.ArpSchlListBrte(data).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.schoolListAll = res.result;
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            // if(this.emis_usertype == '55'){
            //   this.type = 1
            // }
            // else{
            //   this.type = 2
            // }
            if (this.emis_usertype == '55') {
              var data = {
                "arpId": this.emisName
              };
              this.schoolList = [];
              this.emisService.ArpSchlDetails(data).subscribe(function (res) {
                _this3.schoolList = res.result;
              });
            }

            if (this.emis_usertype == '39') {
              this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
                if (res.dataStatus) {
                  _this3.block = res.result[0].block_id;

                  if (_this3.block) {
                    _this3.initialGet();
                  }
                }
              });
            }
          }
        }, {
          key: "SchInfo",
          value: function SchInfo() {
            this.infoSchHide = true;
          }
        }, {
          key: "SchInfohide",
          value: function SchInfohide(i, data) {
            var _this4 = this;

            this.allowGroup = false;
            this.indexVal = i;
            this.dataSchoolId = data.school_id;
            this.batchGrpList = [];
            this.emisService.ArpBtchGropBrte(this.dataSchoolId).subscribe(function (res) {
              if (res.dataStatus) {
                _this4.batchGrpList = res.result;
                _this4.showtable = true;

                if (_this4.batchGrpList) {
                  _this4.batchList = [];

                  for (var _i = 0; _i < _this4.batchGrpList.length; _i++) {
                    if (_this4.batchList.indexOf(_this4.batchGrpList[_i].batch_id) === -1) {
                      _this4.batchList.push(_this4.batchGrpList[_i].batch_id);
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "groupDiv",
          value: function groupDiv(val) {
            this.databatchGrpList = [];

            for (var i = 0; i < this.batchGrpList.length; i++) {
              if (val == this.batchGrpList[i].batch_id) {
                this.databatchGrpList.push(this.batchGrpList[i]);
              }
            }

            this.allowGroup = true;
          }
        }, {
          key: "showlow",
          value: function showlow() {
            this.showtable = false;
          }
        }, {
          key: "showlow1",
          value: function showlow1() {
            this.allowGroup = false;
          }
        }, {
          key: "pums_session_details",
          value: function pums_session_details(val) {
            this.router.navigate(["/tabs/pums-session-details"], {
              queryParams: {
                'schoolId': val.school_id
              }
            });
          }
        }, {
          key: "nextpage",
          value: function nextpage(val, data) {
            this.router.navigate(["/tabs/session-details"], {
              queryParams: {
                'groupData': JSON.stringify(val),
                'schoolData': JSON.stringify(data)
              }
            });
          }
        }, {
          key: "backBtn",
          value: function backBtn() {
            this.router.navigate(["/tabs/art-culture"]);
          }
        }]);
      }();

      _MySchoolsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }];
      };

      _MySchoolsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-schools',
        template: _raw_loader_my_schools_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_schools_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MySchoolsPage);
      /***/
    },

    /***/
    35741:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/art-culture/my-schools/my-schools.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #917AFE;\n}\n\n.mainDiv {\n  margin: 20px;\n}\n\n.headerRow {\n  background-color: #ECE8FF;\n  padding: 6px;\n  text-align: center;\n  font-size: 11px;\n}\n\n.tabelRow {\n  font-size: 14px;\n  text-align: center;\n}\n\n.iconCol {\n  align-self: center;\n  text-align: center;\n  color: white;\n  background-color: #917AFE;\n}\n\n.labelCol {\n  font-size: 9px;\n  background-color: white;\n  align-self: center;\n}\n\n.hideHeader {\n  font-weight: 500;\n  text-align: center;\n  color: #050505;\n}\n\n.headCol {\n  font-size: 12px;\n  text-align: center;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXNjaG9vbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkscUJBQUE7QUFGSjs7QUFNQTtFQUVJLFlBQUE7QUFKSjs7QUFRQTtFQUVJLHlCQUFBO0VBRUEsWUFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBQVRKOztBQWFBO0VBRUksZUFBQTtFQUVBLGtCQUFBO0FBWko7O0FBZ0JBO0VBRUksa0JBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSx5QkFBQTtBQWpCSjs7QUF1QkE7RUFFSSxjQUFBO0VBRUEsdUJBQUE7RUFFQSxrQkFBQTtBQXZCSjs7QUEyQkE7RUFFSSxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixjQUFBO0FBdkJ4Qzs7QUEyQkE7RUFFSSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGNBQUE7QUF2QnZDIiwiZmlsZSI6Im15LXNjaG9vbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tdG9vbGJhcntcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6ICM5MTdBRkU7XHJcblxyXG4gIH1cclxuXHJcbi5tYWluRGl2e1xyXG5cclxuICAgIG1hcmdpbjogMjBweDtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXJSb3d7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRThGRjtcclxuXHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbn1cclxuXHJcbi50YWJlbFJvd3tcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmljb25Db2x7XHJcblxyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxN0FGRTtcclxuXHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6cmVkO1xyXG5cclxufVxyXG5cclxuLmxhYmVsQ29se1xyXG5cclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5oaWRlSGVhZGVye1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiMwNTA1MDU7XHJcblxyXG59XHJcblxyXG4uaGVhZENvbHtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiM3MDcwNzA7XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    9920:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/my-schools/my-schools.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar class=\"toolbar\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n\r\n      </ion-icon>\r\n\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">My School</ion-title>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content *ngIf=\"week == 1 || week == 3 || week == 4 \">\r\n\r\n  <div class=\"mainDiv\" *ngIf=\"emis_usertype == '39'\">\r\n    <ion-row class=\"headerRow\">\r\n      <ion-col size=\"1\">\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-label>School Name</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-label>HM Name</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-label>Art Facilitator</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabelRow\" *ngFor=\"let data of schoolListAll; let index as i\">\r\n      <ion-col size=\"1\" class=\"iconCol\">\r\n        <div style=\"zoom:0.9\">\r\n          <ion-icon name=\"add\" (click)=\"SchInfohide(index,data)\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"labelCol\">\r\n        <ion-label>{{data.school_name}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"labelCol\">\r\n        <ion-label>{{data.HmName}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"labelCol\">\r\n        <ion-label>{{data.ArtFacilitator}}</ion-label>\r\n      </ion-col>\r\n      <ion-row style=\"background-color: #ECE8FF;width: 100%\" *ngIf=\"showtable && indexVal == index\">\r\n        <ion-col size=\"1\" style=\"align-self: center;\" *ngIf=\"!allowGroup\">\r\n          <div style=\"zoom:1.5;color: #707070;\">\r\n            <ion-icon name=\"remove\" (click)=\"showlow()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"1\" style=\"align-self: center;\" *ngIf=\"allowGroup\">\r\n          <div style=\"zoom:1.5;color: #707070;\">\r\n            <ion-icon name=\"remove\" (click)=\"showlow1()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"11\">\r\n          <ion-row *ngIf=\"!allowGroup\">\r\n            <ion-col size=\"12\" class=\"hideHeader\">\r\n              <ion-label>Batch List</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div *ngIf=\"!allowGroup\">\r\n            <ion-row *ngFor=\"let chk of batchList; let j as index\">\r\n              <ion-col size=\"12\" class=\"headCol\" style=\"color: blue;\">\r\n                <ion-label (click)=\"groupDiv(j)\">Batch {{j}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <ion-row *ngIf=\"allowGroup\">\r\n            <ion-col size=\"4\" class=\"hideHeader\">\r\n              <ion-label>Group Name</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"hideHeader\">\r\n              <ion-label>Arp Name</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"hideHeader\">\r\n              <ion-label>Art from</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div *ngIf=\"allowGroup\">\r\n            <ion-row *ngFor=\"let val of databatchGrpList\">\r\n              <ion-col size=\"4\" class=\"headCol\" style=\"color: blue;\">\r\n                <ion-label (click)=\"nextpage(val,data)\">{{val.group_name}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"headCol\">\r\n                <ion-label>{{val.name}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"headCol\">\r\n                <ion-label>{{val.key_art_form}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          \r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </ion-row>\r\n\r\n    \r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"emis_usertype == '55'\">\r\n    <div style=\"margin-top:15px;\">\r\n      <!-- <ion-label style=\"margin-left: 20px;font-weight:500;\">Schools</ion-label> -->\r\n      <ion-card style=\"padding: 8px;border:1px solid #917AFE\" *ngFor=\"let data of schoolList\">\r\n        <ion-row style=\"width:100%\" (click)=\"pums_session_details(data)\">\r\n          <ion-col size=\"2\" style=\"align-content: center; align-self: left;\">\r\n            <img src=\"assets/icons/dashbordSchool.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"10\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">{{data.SchlName}},{{data.SchlAddress}}.</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <!-- <ion-card style=\"padding: 8px;border:1px solid #917AFE\">\r\n        <ion-row style=\"width:100%\" (click)=\"pums_session_details()\">\r\n          <ion-col size=\"2\" style=\"align-content: center; align-self: left;\">\r\n            <img src=\"assets/icons/dashbordSchool.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"10\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">PUMSS HSS Aavadi,Chennai.</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card style=\"padding: 8px;border:1px solid #917AFE\">\r\n        <ion-row style=\"width:100%\" (click)=\"pums_session_details()\">\r\n          <ion-col size=\"2\" style=\"align-content: center; align-self: left;\">\r\n            <img src=\"assets/icons/dashbordSchool.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"10\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">PUMSS HSS Aavadi,Chennai.</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card style=\"padding: 8px;border:1px solid #917AFE\">\r\n        <ion-row style=\"width:100%\" (click)=\"pums_session_details()\">\r\n          <ion-col size=\"2\" style=\"align-content: center; align-self: left;\">\r\n            <img src=\"assets/icons/dashbordSchool.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"10\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">PUMSS HSS Aavadi,Chennai.</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card> -->\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\" week == 2 || week == 5\">\r\n  <div class=\"mainDiv\">\r\n    <ion-row class=\"headerRow\">\r\n      <ion-col size=\"12\">\r\n        <ion-label>This Week Don't Have Sessions</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_art-culture_my-schools_my-schools_module_ts-es5.js.map