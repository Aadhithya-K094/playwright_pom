(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_deic-questions_deic-questions_module_ts"], {
    /***/
    27258:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/deic-questions/deic-questions-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeicQuestionsPageRoutingModule": function DeicQuestionsPageRoutingModule() {
          return (
            /* binding */
            _DeicQuestionsPageRoutingModule
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


      var _deic_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deic-questions.page */
      56956);

      var routes = [{
        path: '',
        component: _deic_questions_page__WEBPACK_IMPORTED_MODULE_0__.DeicQuestionsPage
      }];

      var _DeicQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function DeicQuestionsPageRoutingModule() {
        _classCallCheck(this, DeicQuestionsPageRoutingModule);
      });

      _DeicQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeicQuestionsPageRoutingModule);
      /***/
    },

    /***/
    57390:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/deic-questions/deic-questions.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeicQuestionsPageModule": function DeicQuestionsPageModule() {
          return (
            /* binding */
            _DeicQuestionsPageModule
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


      var _deic_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deic-questions-routing.module */
      27258);
      /* harmony import */


      var _deic_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deic-questions.page */
      56956);

      var _DeicQuestionsPageModule = /*#__PURE__*/_createClass(function DeicQuestionsPageModule() {
        _classCallCheck(this, DeicQuestionsPageModule);
      });

      _DeicQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _deic_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeicQuestionsPageRoutingModule],
        declarations: [_deic_questions_page__WEBPACK_IMPORTED_MODULE_1__.DeicQuestionsPage]
      })], _DeicQuestionsPageModule);
      /***/
    },

    /***/
    56956:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/deic-questions/deic-questions.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeicQuestionsPage": function DeicQuestionsPage() {
          return (
            /* binding */
            _DeicQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_deic_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./deic-questions.page.html */
      91862);
      /* harmony import */


      var _deic_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deic-questions.page.scss */
      1299);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);

      var _DeicQuestionsPage = /*#__PURE__*/function () {
        function DeicQuestionsPage(alertService, router) {
          _classCallCheck(this, DeicQuestionsPage);

          this.alertService = alertService;
          this.router = router;
          this.arrayDEIC = [{
            id: "1",
            name: "Diagnosis"
          }, {
            id: "2",
            name: "Treatment Precribed"
          }, {
            id: "3",
            name: "Tests Prescribed"
          }, {
            id: "4",
            name: "Medicines Prescribed"
          }, {
            id: "5",
            name: "Treatment Done"
          }, {
            id: "6",
            name: "Tests done"
          }, {
            id: "7",
            name: "Medicines given"
          }, {
            id: "8",
            name: "Surgical Intervention"
          }, {
            id: "9",
            name: "Follow up visit"
          }, {
            id: "10",
            name: "Remarks"
          }];
        }

        return _createClass(DeicQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSumbit",
          value: function onSumbit() {
            this.alertService.alert("Saved Successfully");
            this.router.navigate(['/tabs/home']); // window.location.reload();
          }
        }]);
      }();

      _DeicQuestionsPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _DeicQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-deic-questions',
        template: _raw_loader_deic_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_deic_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeicQuestionsPage);
      /***/
    },

    /***/
    1299:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/deic-questions/deic-questions.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n}\n\n.student-header {\n  background-color: var(--ion-color-primary);\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\n.student-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.student-name {\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.screening-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.screening-report {\n  padding-left: 11PX;\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.radio-card {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.radio {\n  font-size: 16px !important;\n  padding-left: 5px;\n}\n\n.odd {\n  background-color: #eef8ff;\n  --background: #eef8ff;\n}\n\n.even {\n  background-color: #f9fcff;\n  --background: #f9fcff;\n}\n\n.header_details {\n  padding-left: 13px;\n  padding-right: 13px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.table-row {\n  background-color: var(--ion-color-primary);\n  padding-bottom: 10px;\n  color: aliceblue;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.sumbit-button {\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n  color: white;\n}\n\n.eyeTableOdd {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #eef8ff;\n  text-align: center;\n}\n\n.eyeTableEven {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #f9fcff;\n  text-align: center;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlaWMtcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSUU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFKRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFKRTtFQUNFLG9CQUFBO0FBT0o7O0FBSkU7RUFDRSxZQUFBO0FBT0o7O0FBSkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBT0o7O0FBSkU7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtBQU9KIiwiZmlsZSI6ImRlaWMtcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLnN0dWRlbnQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbn1cclxuLnN0dWRlbnQtY29sIHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTFQWDtcclxuICAgIGZvbnQtc2l6ZTogMTdQWDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLnN0dWRlbnQtbmFtZSB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDExUFg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAxOFBYO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uc2NyZWVuaW5nLWNvbCB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDExUFg7XHJcbiAgICBmb250LXNpemU6IDE3UFg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi5zY3JlZW5pbmctcmVwb3J0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTFQWDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDE4UFg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5yYWRpby1jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi8vIC5yYWRpby1idXRue1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAvLyB3aWR0aDogMjNweDtcclxuICAgIC8vIGhlaWdodDogMTVweDtcclxuICAvLyB9XHJcbiAgLnJhZGlve1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAub2Rke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjhmZjtcclxuICAgIC0tYmFja2dyb3VuZDogI2VlZjhmZjtcclxuICB9XHJcbiAgLmV2ZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmY2ZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gIH1cclxuICAuaGVhZGVyX2RldGFpbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5idG4tc2NyZWVuIHtcclxuICAgIHBhZGRpbmctdG9wOiAzN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnN1bWJpdC1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSBcclxuICAuZXllVGFibGVPZGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWY4ZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leWVUYWJsZUV2ZW4ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZjZmY7O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHQtMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgfVxyXG5cclxuICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxuICB9XHJcbiAgIFxyXG4gIC5pbnB1dC1jbHIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    91862:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/deic-questions/deic-questions.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\"> DEIC Questions </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n   \r\n    <ion-row *ngFor=\"let data of arrayDEIC; let i = index;\" style=\"padding : 17px;\">\r\n    <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '1' || data.id == '2' || data.id == '3' ||\r\n    data.id == '4' || data.id == '10'\">\r\n      <ion-label class=\"ques-txt\">\r\n        {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n      </ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n      </ion-input>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '9'\">\r\n      <ion-label class=\"ques-txt\">\r\n        {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n      </ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n      </ion-input>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '5' || data.id == '6' || data.id == '7' ||\r\n    data.id == '8'\">\r\n    <ion-label class=\"ques-txt\">\r\n      {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n    </ion-label>\r\n      <ion-radio-group>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n          <ion-item lines=\"none\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">\r\n            <ion-radio value=\"1\"></ion-radio> <span class=\"radio\"> Yes </span>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-item lines=\"none\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">\r\n            <ion-radio class=\"radio-butn\" value=\"2\"></ion-radio> <span class=\"radio\"> No </span>\r\n          </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-radio-group>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"12\"  style=\"color:white; text-align: center; padding-top: 10px;padding-bottom: 10px;\"  class=\"footer-verified\" (click)=\"onSumbit()\">\r\n        <div color=\"primary\" (click)=\"onSumbit()\">Save</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_deic-questions_deic-questions_module_ts-es5.js.map