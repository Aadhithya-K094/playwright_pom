(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_student-assesment_student-assesment_module_ts"], {
    /***/
    19496:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-assesment/student-assesment.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentAssesmentPageModule": function StudentAssesmentPageModule() {
          return (
            /* binding */
            _StudentAssesmentPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _student_assesment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-assesment.page */
      57378);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319); // import {StudentListPageModule} from '../student-list/student-list.module'


      var routes = [{
        path: '',
        component: _student_assesment_page__WEBPACK_IMPORTED_MODULE_0__.StudentAssesmentPage
      }];

      var _StudentAssesmentPageModule = /*#__PURE__*/_createClass(function StudentAssesmentPageModule() {
        _classCallCheck(this, StudentAssesmentPageModule);
      });

      _StudentAssesmentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule // StudentListPageModule
        ],
        declarations: [_student_assesment_page__WEBPACK_IMPORTED_MODULE_0__.StudentAssesmentPage]
      })], _StudentAssesmentPageModule);
      /***/
    },

    /***/
    57378:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-assesment/student-assesment.page.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentAssesmentPage": function StudentAssesmentPage() {
          return (
            /* binding */
            _StudentAssesmentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_assesment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-assesment.page.html */
      57240);
      /* harmony import */


      var _student_assesment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-assesment.page.scss */
      44939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      ;

      var _StudentAssesmentPage = /*#__PURE__*/function () {
        function StudentAssesmentPage(modal, navCtrl, fb, activateRoute, ionicStorageService) {
          _classCallCheck(this, StudentAssesmentPage);

          this.modal = modal;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.activateRoute = activateRoute;
          this.ionicStorageService = ionicStorageService;
        }

        return _createClass(StudentAssesmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.final_remarks_form = this.fb.group({
              recomend_class_action: [''],
              teacher_last_visit: [''],
              final_remarks: ['']
            });
            this.ionicStorageService.getData('final_remarks').then(function (result) {
              if (result) {
                _this.final_remarks_form.patchValue(result.final_remarks);
              }
            });
            this.activateRoute.queryParams.subscribe(function (params) {
              if (params.template_list) {
                _this.template_id = JSON.parse(params.template_list);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var navigationExtras = {
              queryParams: {
                template_list: this.template_id
              }
            };
            this.ionicStorageService.insertData_Replace('final_remarks', {
              final_remarks: this.final_remarks_form.value
            });
            this.navCtrl.navigateBack(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
          }
        }, {
          key: "clearLastSavedForms",
          value: function clearLastSavedForms() {}
        }]);
      }();

      _StudentAssesmentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }];
      };

      _StudentAssesmentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-student-assesment',
        template: _raw_loader_student_assesment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_assesment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentAssesmentPage);
      /***/
    },

    /***/
    44939:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-assesment/student-assesment.page.scss ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  font-size: 16px;\n  color: black;\n}\n\n.select {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  color: black;\n}\n\n.text-area {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  font-weight: bold;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXNzZXNtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBRUEsWUFBQTtBQURKOztBQUlFO0VBQ0UsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFLRTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUlFO0VBQ0UsZUFBQTtBQURKIiwiZmlsZSI6InN0dWRlbnQtYXNzZXNtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8vIGJvcmRlci1ibG9jay1zdGFydC1jb2xvcjogYXF1YTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgIFxyXG4gIH1cclxuICAuc2VsZWN0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOiBhcXVhO1xyXG4gICBcclxuICB9XHJcbiAgLnRleHQtYXJlYXtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    57240:
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/student-assesment/student-assesment.page.html ***!
      \*********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>Final Remarks</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <form [formGroup]=\"final_remarks_form\">\r\n        <ion-card padding>\r\n               <ion-label>Final Remarks</ion-label>\r\n               <ion-textarea class=\"text-area\" type=\"text\" placeholder=\"Remarks\" formControlName=\"final_remarks\"></ion-textarea><br/>          \r\n         </ion-card> \r\n      </form>\r\n      </ion-content>\r\n      \r\n\r\n<ion-footer>  \r\n      <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Save </ion-button>  \r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-data_student-assesment_student-assesment_module_ts-es5.js.map