(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_myinspection_myinspection_module_ts"], {
    /***/
    11033:
    /*!************************************************************************!*\
      !*** ./src/app/pages/sids/myinspection/myinspection-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyinspectionPageRoutingModule": function MyinspectionPageRoutingModule() {
          return (
            /* binding */
            _MyinspectionPageRoutingModule
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


      var _myinspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myinspection.page */
      12796);

      var routes = [{
        path: '',
        component: _myinspection_page__WEBPACK_IMPORTED_MODULE_0__.MyinspectionPage
      }];

      var _MyinspectionPageRoutingModule = /*#__PURE__*/_createClass(function MyinspectionPageRoutingModule() {
        _classCallCheck(this, MyinspectionPageRoutingModule);
      });

      _MyinspectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyinspectionPageRoutingModule);
      /***/
    },

    /***/
    61992:
    /*!****************************************************************!*\
      !*** ./src/app/pages/sids/myinspection/myinspection.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyinspectionPageModule": function MyinspectionPageModule() {
          return (
            /* binding */
            _MyinspectionPageModule
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


      var _myinspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myinspection-routing.module */
      11033);
      /* harmony import */


      var _myinspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myinspection.page */
      12796);

      var _MyinspectionPageModule = /*#__PURE__*/_createClass(function MyinspectionPageModule() {
        _classCallCheck(this, MyinspectionPageModule);
      });

      _MyinspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myinspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyinspectionPageRoutingModule],
        declarations: [_myinspection_page__WEBPACK_IMPORTED_MODULE_1__.MyinspectionPage]
      })], _MyinspectionPageModule);
      /***/
    },

    /***/
    12796:
    /*!**************************************************************!*\
      !*** ./src/app/pages/sids/myinspection/myinspection.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyinspectionPage": function MyinspectionPage() {
          return (
            /* binding */
            _MyinspectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_myinspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myinspection.page.html */
      79018);
      /* harmony import */


      var _myinspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myinspection.page.scss */
      16724);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var _MyinspectionPage = /*#__PURE__*/function () {
        function MyinspectionPage(userService, usersessionService, router, route) {
          _classCallCheck(this, MyinspectionPage);

          this.userService = userService;
          this.usersessionService = usersessionService;
          this.router = router;
          this.route = route;
          this.buildingActive = true;
          this.roomActive = false;
          this.schoolActive = false;
        }

        return _createClass(MyinspectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sessionUserName = this.usersessionService.emis_username();
            this.routeData = this.route.snapshot;
            this.UdiseCode = this.routeData.queryParams.Id;
            this.buildingActive = true;
            this.roomActive = false;
            this.schoolActive = false;
            this.getSchoolInfo();
          }
        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo() {
            var _this = this;

            this.userService.getSidsResponedData(this.sessionUserName).subscribe(function (res) {
              if (res.dataStatus) {
                var filter = [];
                filter = res.result.filter(function (item) {
                  return item.udise_code == _this.UdiseCode;
                });
                _this.buildingDetails = filter[0].BuildingDetails;
                _this.roomDetails = filter[0].RoomQuestion;
                _this.CommonQuestions = filter[0].CommonQuestions;
              } else {
                _this.buildingActive = false;
                _this.roomActive = false;
                _this.schoolActive = false;
              }
            });
          }
        }, {
          key: "room",
          value: function room() {
            this.buildingActive = false;
            this.roomActive = false;
            this.schoolActive = true;
          }
        }, {
          key: "building",
          value: function building() {
            this.buildingActive = false;
            this.roomActive = true;
            this.schoolActive = false;
          }
        }, {
          key: "schoolCommon",
          value: function schoolCommon() {
            this.buildingActive = false;
            this.roomActive = true;
            this.schoolActive = false;
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.router.navigate(['/tabs/inspection-selection']);
          }
        }]);
      }();

      _MyinspectionPage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _MyinspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myinspection',
        template: _raw_loader_myinspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_myinspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyinspectionPage);
      /***/
    },

    /***/
    16724:
    /*!****************************************************************!*\
      !*** ./src/app/pages/sids/myinspection/myinspection.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".building_details {\n  color: black;\n  font-size: 16px;\n  padding: 7px;\n}\n\n.building_header {\n  font-size: 19px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.question_name {\n  color: #f4f5f8;\n  font-weight: bolder;\n  background-color: cadetblue;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.odd {\n  background-color: #eef8ff;\n  --background: #eef8ff;\n}\n\n.even {\n  background-color: #f9fcff;\n  --background: #f9fcff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15aW5zcGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDTDs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFLSiIsImZpbGUiOiJteWluc3BlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1aWxkaW5nX2RldGFpbHMge1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgIHBhZGRpbmc6IDdweDtcclxufVxyXG4uYnVpbGRpbmdfaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbl9uYW1lIHtcclxuICAgIGNvbG9yOiAjZjRmNWY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmOGZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVmOGZmO1xyXG4gIH1cclxuICAuZXZlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZjZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    79018:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/myinspection/myinspection.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">My Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n\r\n    <ion-card class=\"building_details\" *ngIf=\"buildingActive\">\r\n      <ion-row>\r\n        <ion-col class=\"building_header\" size=\"12\"> BuildingDetails </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let data of buildingDetails; let i = index;\">\r\n        <ion-col class=\"question_name\" size=\"12\" *ngIf=\"data.Id == '1'\"> \r\n          Building Name {{data.ResChar}}\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ResInt != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">{{data.Id}} . {{data.Question}} </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ResChar != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">{{data.Id}} . {{data.Question}} </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"data.ResInt != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" style=\"color: blue;padding-left: 25px;\">\r\n          <div> {{data.ResInt}} </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"data.ResChar != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" style=\"color: blue;padding-left: 25px;\">\r\n          <div> {{data.ResChar}} </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-button (click)=\"building()\"> Next </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"building_details\" *ngIf=\"roomActive\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"building_header\"> Room Details </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let data of roomDetails; let i = index;\">\r\n        <ion-col  size=\"12\" *ngIf=\"data.ques_displayid == '1'\"> \r\n        <div class=\"question_name\">\r\n          Building No {{data.BuildingId}}\r\n        </div> \r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ques_displayid == '1'\"> \r\n         <div  class=\"question_name\">  Floor No {{data.FloorCount}} </div> \r\n        </ion-col>\r\n         <ion-col size=\"12\" *ngIf=\"data.ques_displayid == '1'\"> \r\n        <div class=\"question_name\"> Room No {{data.RoomCount}} </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ques_response != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">{{data.ques_displayid}} . {{data.ques_text}} </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ques_response != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">\r\n          <div  style=\"color: blue;padding-left: 25px;\"> {{data.ques_response}} </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-button (click)=\"room()\"> Next </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"building_details\" *ngIf=\"schoolActive\">\r\n      <ion-row>\r\n        <ion-col class=\"building_header\" size=\"12\">  School common </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let data of CommonQuestions; let i = index;\">\r\n        <ion-col class=\"question_name\" size=\"12\" *ngIf=\"data.Id == '1'\"> \r\n          School common \r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ResInt != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">{{data.Id}} . {{data.Question}} </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"data.ResChar != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">{{data.Id}} . {{data.Question}} </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"data.ResInt != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" style=\"color: blue;padding-left: 25px;\">\r\n          <div> {{data.ResInt}} </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"data.ResChar != ''\"  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" style=\"color: blue;padding-left: 25px;\">\r\n          <div> {{data.ResChar}} </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-button (click)=\"schoolCommon()\"> Final </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_myinspection_myinspection_module_ts-es5.js.map