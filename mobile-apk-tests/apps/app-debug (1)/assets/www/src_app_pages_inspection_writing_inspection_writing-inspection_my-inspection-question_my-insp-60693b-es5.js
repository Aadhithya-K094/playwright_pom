(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-question_my-insp-60693b"], {
    /***/
    7229:
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question-routing.module.ts ***!
      \****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionQuestionPageRoutingModule": function MyInspectionQuestionPageRoutingModule() {
          return (
            /* binding */
            _MyInspectionQuestionPageRoutingModule
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


      var _my_inspection_question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspection-question.page */
      57833);

      var routes = [{
        path: '',
        component: _my_inspection_question_page__WEBPACK_IMPORTED_MODULE_0__.MyInspectionQuestionPage
      }];

      var _MyInspectionQuestionPageRoutingModule = /*#__PURE__*/_createClass(function MyInspectionQuestionPageRoutingModule() {
        _classCallCheck(this, MyInspectionQuestionPageRoutingModule);
      });

      _MyInspectionQuestionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyInspectionQuestionPageRoutingModule);
      /***/
    },

    /***/
    16842:
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question.module.ts ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionQuestionPageModule": function MyInspectionQuestionPageModule() {
          return (
            /* binding */
            _MyInspectionQuestionPageModule
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


      var _my_inspection_question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspection-question-routing.module */
      7229);
      /* harmony import */


      var _my_inspection_question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspection-question.page */
      57833);

      var _MyInspectionQuestionPageModule = /*#__PURE__*/_createClass(function MyInspectionQuestionPageModule() {
        _classCallCheck(this, MyInspectionQuestionPageModule);
      });

      _MyInspectionQuestionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _my_inspection_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspectionQuestionPageRoutingModule],
        declarations: [_my_inspection_question_page__WEBPACK_IMPORTED_MODULE_1__.MyInspectionQuestionPage]
      })], _MyInspectionQuestionPageModule);
      /***/
    },

    /***/
    57833:
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question.page.ts ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionQuestionPage": function MyInspectionQuestionPage() {
          return (
            /* binding */
            _MyInspectionQuestionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_my_inspection_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-inspection-question.page.html */
      50690);
      /* harmony import */


      var _my_inspection_question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspection-question.page.scss */
      6539);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _MyInspectionQuestionPage = /*#__PURE__*/function () {
        function MyInspectionQuestionPage(route, router, utilityService) {
          _classCallCheck(this, MyInspectionQuestionPage);

          this.route = route;
          this.router = router;
          this.utilityService = utilityService;
        }

        return _createClass(MyInspectionQuestionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (this.route.snapshot.queryParamMap.get("id")) {
              this.trnId = this.route.snapshot.queryParamMap.get("id");
              this.userid = this.route.snapshot.queryParamMap.get("userid");
              this.date = this.route.snapshot.queryParamMap.get("date");
            } // this.getServeData()

          } // getServeData() {
          //   debugger
          //   this.utilityService.getTrainerData(this.userid,this.date,this.trnId).subscribe((response) => {
          //     this.trainerData = []
          //     this.trainerData = response.result
          //     console.log(this.trainerData)
          // });
          // }

        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/my-inspection-dashboard']);
          }
        }]);
      }();

      _MyInspectionQuestionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }];
      };

      _MyInspectionQuestionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-inspection-question',
        template: _raw_loader_my_inspection_question_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_inspection_question_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyInspectionQuestionPage);
      /***/
    },

    /***/
    6539:
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question.page.scss ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".trainIdstyle {\n  background: white;\n  margin: 4%;\n  padding: 10px;\n  color: crimson;\n  border-radius: 10px;\n}\n\n.valueData {\n  color: black;\n}\n\n.labelData {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWluc3BlY3Rpb24tcXVlc3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6Im15LWluc3BlY3Rpb24tcXVlc3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWluSWRzdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxufVxyXG5cclxuLnZhbHVlRGF0YXtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG4ubGFiZWxEYXRhIHtcclxuICAgIGNvbG9yOiBicm93bjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    50690:
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question.page.html ***!
      \**********************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Ennum Ezhuthum </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  \r\n    <ion-row class=\"trainIdstyle\">\r\n      <ion-col size=\"12\" class=\"valueData\">\r\n        <ion-label>data.school_name </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"labelData\">\r\n        <ion-label>data.school_name</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-question_my-insp-60693b-es5.js.map