(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_rbsk-questions_rbsk-questions_module_ts"], {
    /***/
    33749:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/rbsk-questions/rbsk-questions-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskQuestionsPageRoutingModule": function RbskQuestionsPageRoutingModule() {
          return (
            /* binding */
            _RbskQuestionsPageRoutingModule
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


      var _rbsk_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rbsk-questions.page */
      9289);

      var routes = [{
        path: '',
        component: _rbsk_questions_page__WEBPACK_IMPORTED_MODULE_0__.RbskQuestionsPage
      }];

      var _RbskQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function RbskQuestionsPageRoutingModule() {
        _classCallCheck(this, RbskQuestionsPageRoutingModule);
      });

      _RbskQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RbskQuestionsPageRoutingModule);
      /***/
    },

    /***/
    70181:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/rbsk-questions/rbsk-questions.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskQuestionsPageModule": function RbskQuestionsPageModule() {
          return (
            /* binding */
            _RbskQuestionsPageModule
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


      var _rbsk_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rbsk-questions-routing.module */
      33749);
      /* harmony import */


      var _rbsk_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rbsk-questions.page */
      9289);

      var _RbskQuestionsPageModule = /*#__PURE__*/_createClass(function RbskQuestionsPageModule() {
        _classCallCheck(this, RbskQuestionsPageModule);
      });

      _RbskQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _rbsk_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.RbskQuestionsPageRoutingModule],
        declarations: [_rbsk_questions_page__WEBPACK_IMPORTED_MODULE_1__.RbskQuestionsPage]
      })], _RbskQuestionsPageModule);
      /***/
    },

    /***/
    9289:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/rbsk-questions/rbsk-questions.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskQuestionsPage": function RbskQuestionsPage() {
          return (
            /* binding */
            _RbskQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_rbsk_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./rbsk-questions.page.html */
      48136);
      /* harmony import */


      var _rbsk_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rbsk-questions.page.scss */
      34630);
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

      var _RbskQuestionsPage = /*#__PURE__*/function () {
        function RbskQuestionsPage(alertService, router) {
          _classCallCheck(this, RbskQuestionsPage);

          this.alertService = alertService;
          this.router = router;
          this.arrayRBSK = [{
            id: "1",
            name: "Condition Diagnosed "
          }, {
            id: "2",
            name: "Actions taken "
          }, {
            id: "3",
            name: "Distributed "
          }, {
            id: "4",
            name: "Tests taken "
          }];
          this.dataoption = [{
            id: "1",
            value: "Nueral tube defect "
          }, {
            id: "2",
            value: "Down syndrome "
          }, {
            id: "3",
            value: "Cleft Lip and Palate "
          }, {
            id: "4",
            value: "Club foot "
          }, {
            id: "5",
            value: "Developmental dysplasia of the hip "
          }, {
            id: "6",
            value: "Congential Deafness "
          }, {
            id: "7",
            value: "Congential Heart Diseases "
          }, {
            id: "8",
            value: "Retinopathy  of Prematurity "
          }, {
            id: "9",
            value: "Severe Anaemia "
          }, {
            id: "10",
            value: "Vitamin A deficiency (Bitot spot)"
          }, {
            id: "11",
            value: "Vitamin D Deficiency (Rickets)"
          }, {
            id: "12",
            value: "a. SAM"
          }, {
            id: "13",
            value: "b. Severe Thinning "
          }, {
            id: "14",
            value: "c. Obesity "
          }, {
            id: "15",
            value: "Goitre "
          }, {
            id: "16",
            value: "Skin conditions "
          }, {
            id: "17",
            value: "Otitis Media "
          }, {
            id: "18",
            value: "Rheumatic heart disease"
          }, {
            id: "19",
            value: "Reactive airway disease"
          }, {
            id: "20",
            value: "Dental Conditions "
          }, {
            id: "21",
            value: "Conclusive disorders "
          }, {
            id: "22",
            value: "Vision impairment "
          }, {
            id: "23",
            value: "Hearing impairment "
          }, {
            id: "24",
            value: "Neuro motor impairment "
          }, {
            id: "25",
            value: "Motor delay "
          }, {
            id: "26",
            value: "Congitive delay "
          }, {
            id: "27",
            value: "Language delay "
          }, {
            id: "28",
            value: "Behaviour disorder "
          }, {
            id: "29",
            value: "Attention deficit hyperactivity disorder "
          }, {
            id: "30",
            value: "Others "
          }, {
            id: "31",
            value: "Growing up concerns "
          }, {
            id: "32",
            value: "Substance abuse "
          }, {
            id: "33",
            value: "Feel depressed "
          }, {
            id: "34",
            value: "Delay in menstruation cycles "
          }, {
            id: "35",
            value: "Irregular periods "
          }, {
            id: "36",
            value: "Pain or burning sensation while urinating "
          }, {
            id: "37",
            value: "Discharge/ foul smelling discharge from the genitor-urinary area "
          }, {
            id: "38",
            value: "Pain during mentruation "
          }, {
            id: "39",
            value: "Tuberculosis "
          }, {
            id: "40",
            value: "Leprosy"
          }];
          this.dataoption1 = [{
            id: "1",
            value: "Treatment given during camp "
          }, {
            id: "2",
            value: "Referred to PHC "
          }, {
            id: "3",
            value: "Referred to DEIC "
          }];
          this.dataoption2 = [{
            id: "1",
            value: "Iron folic "
          }, {
            id: "2",
            value: "Albendazole"
          }, {
            id: "3",
            value: "Deworming"
          }, {
            id: "4",
            value: "Paracetemol"
          }, {
            id: "5",
            value: "Sanitary pads"
          }, {
            id: "6",
            value: "Other - if other text box needed "
          }];
        }

        return _createClass(RbskQuestionsPage, [{
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

      _RbskQuestionsPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _RbskQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rbsk-questions',
        template: _raw_loader_rbsk_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rbsk_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RbskQuestionsPage);
      /***/
    },

    /***/
    34630:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/rbsk-questions/rbsk-questions.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n}\n\n.student-header {\n  background-color: var(--ion-color-primary);\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\n.student-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.student-name {\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.screening-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.screening-report {\n  padding-left: 11PX;\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.radio-card {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.radio {\n  font-size: 16px !important;\n  padding-left: 5px;\n}\n\n.header_details {\n  padding-left: 13px;\n  padding-right: 13px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.table-row {\n  background-color: var(--ion-color-primary);\n  padding-bottom: 10px;\n  color: aliceblue;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.sumbit-button {\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n  color: white;\n}\n\n.eyeTableOdd {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #eef8ff;\n  text-align: center;\n}\n\n.eyeTableEven {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #f9fcff;\n  text-align: center;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\nion-select {\n  border: 1px solid #bcc4cb;\n  background-color: aliceblue;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\nion-input {\n  border: 1px solid #bcc4cb;\n  background-color: aliceblue;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n.card-school {\n  margin: 3%;\n  border-radius: 2%;\n  font-size: medium;\n  color: black;\n}\n\n.rowdata {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJic2stcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSUU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBUko7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFTRTtFQUNFLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9FO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLG9CQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBO0FBSEo7O0FBTUM7RUFDRyx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRiIsImZpbGUiOiJyYnNrLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5zdHVkZW50LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmctbGVmdDogMTNweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG59XHJcbi5zdHVkZW50LWNvbCB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDExUFg7XHJcbiAgICBmb250LXNpemU6IDE3UFg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi5zdHVkZW50LW5hbWUge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMVBYO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMThQWDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnNjcmVlbmluZy1jb2wge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMVBYO1xyXG4gICAgZm9udC1zaXplOiAxN1BYO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4uc2NyZWVuaW5nLXJlcG9ydCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExUFg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAxOFBYO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ucmFkaW8tY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4vLyAucmFkaW8tYnV0bntcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgLy8gd2lkdGg6IDIzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE1cHg7XHJcbiAgLy8gfVxyXG4gIC5yYWRpb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgLy8gLm9kZHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNlZWY4ZmY7XHJcbiAgLy8gICAtLWJhY2tncm91bmQ6ICNlZWY4ZmY7XHJcbiAgLy8gfVxyXG4gIC8vIC5ldmVue1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmNmZjtcclxuICAvLyAgIC0tYmFja2dyb3VuZDogI2Y5ZmNmZjtcclxuICAvLyB9XHJcbiAgLmhlYWRlcl9kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuYnRuLXNjcmVlbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGFibGUtcm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5zdW1iaXQtYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgLmV5ZVRhYmxlT2RkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmOGZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZXllVGFibGVFdmVuIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmY2ZmOztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnB0LTE1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gIH1cclxuXHJcbiBpb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2M0Y2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNjNGNiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn0gXHJcblxyXG4uY2FyZC1zY2hvb2wgeyBcclxuICBtYXJnaW46IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnJvd2RhdGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    48136:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/rbsk-questions/rbsk-questions.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\"> RBSK Question </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-card class=\"card-school\">\r\n    <ion-row  class=\"rowdata\" *ngFor=\"let data of arrayRBSK; let i = index;\">\r\n\r\n      <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '1'\">\r\n        <ion-label class=\"ques-txt\">\r\n          {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.id\" *ngFor=\"let item of dataoption\"> {{item.value}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '2'\">\r\n        <ion-label class=\"ques-txt\">\r\n          {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.id\" *ngFor=\"let item of dataoption1\"> {{item.value}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '3'\">\r\n        <ion-label class=\"ques-txt\">\r\n          {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.id\" *ngFor=\"let item of dataoption2\"> {{item.value}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" *ngIf=\"data.id == '4'\">\r\n        <ion-label class=\"ques-txt\">\r\n          {{data.id}} . {{data.name}} <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"color:white; text-align: center; padding-top: 10px;padding-bottom: 10px;\"\r\n      class=\"footer-verified\" (click)=\"onSumbit()\">\r\n      <div color=\"primary\" (click)=\"onSumbit()\">Save</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_rbsk-questions_rbsk-questions_module_ts-es5.js.map