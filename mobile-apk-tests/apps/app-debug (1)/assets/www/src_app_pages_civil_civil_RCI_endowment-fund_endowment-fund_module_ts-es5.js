(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_endowment-fund_endowment-fund_module_ts"], {
    /***/
    59161:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/endowment-fund/endowment-fund-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EndowmentFundPageRoutingModule": function EndowmentFundPageRoutingModule() {
          return (
            /* binding */
            _EndowmentFundPageRoutingModule
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


      var _endowment_fund_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./endowment-fund.page */
      64339);

      var routes = [{
        path: '',
        component: _endowment_fund_page__WEBPACK_IMPORTED_MODULE_0__.EndowmentFundPage
      }];

      var _EndowmentFundPageRoutingModule = /*#__PURE__*/_createClass(function EndowmentFundPageRoutingModule() {
        _classCallCheck(this, EndowmentFundPageRoutingModule);
      });

      _EndowmentFundPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EndowmentFundPageRoutingModule);
      /***/
    },

    /***/
    52186:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/endowment-fund/endowment-fund.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EndowmentFundPageModule": function EndowmentFundPageModule() {
          return (
            /* binding */
            _EndowmentFundPageModule
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


      var _endowment_fund_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./endowment-fund-routing.module */
      59161);
      /* harmony import */


      var _endowment_fund_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./endowment-fund.page */
      64339);

      var _EndowmentFundPageModule = /*#__PURE__*/_createClass(function EndowmentFundPageModule() {
        _classCallCheck(this, EndowmentFundPageModule);
      });

      _EndowmentFundPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _endowment_fund_routing_module__WEBPACK_IMPORTED_MODULE_0__.EndowmentFundPageRoutingModule],
        declarations: [_endowment_fund_page__WEBPACK_IMPORTED_MODULE_1__.EndowmentFundPage]
      })], _EndowmentFundPageModule);
      /***/
    },

    /***/
    64339:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/endowment-fund/endowment-fund.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EndowmentFundPage": function EndowmentFundPage() {
          return (
            /* binding */
            _EndowmentFundPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_endowment_fund_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./endowment-fund.page.html */
      1745);
      /* harmony import */


      var _endowment_fund_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./endowment-fund.page.scss */
      33325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _EndowmentFundPage = /*#__PURE__*/function () {
        function EndowmentFundPage(route, router) {
          _classCallCheck(this, EndowmentFundPage);

          this.route = route;
          this.router = router;
          this["class"] = [{
            label: "UKG",
            value: 1
          }, {
            label: "I",
            value: 2
          }, {
            label: "II",
            value: 3
          }, {
            label: "III",
            value: 4
          }];
        }

        return _createClass(EndowmentFundPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.status = this.routeData.queryParams.status;
            this.uidse = this.routeData.queryParams.uidse;
            parseInt(this.status);
            console.log(this.status);
          }
        }, {
          key: "onOfChange",
          value: function onOfChange(event, id) {
            if (id == 2) {
              this.onAgency = false;
            }

            if (id == 1) {
              this.onAgency = true;
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var data = parseInt(this.status);
            console.log(data);
            this.router.navigate(['/tabs/regulator-section'], {
              queryParams: {
                status: data,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/regulator-section'], {
              queryParams: {
                status: this.status,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
          }
        }]);
      }();

      _EndowmentFundPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _EndowmentFundPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-endowment-fund',
        template: _raw_loader_endowment_fund_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_endowment_fund_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EndowmentFundPage);
      /***/
    },

    /***/
    33325:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/endowment-fund/endowment-fund.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\nion-label {\n  max-width: 100% !important;\n  font-weight: 500;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 0px;\n}\n\n.grid-padding {\n  margin: 4%;\n}\n\nion-select {\n  padding-left: 0px !important;\n  max-width: 100% !important;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZG93bWVudC1mdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQUEsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSx1REFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDRyxvQkFBQTtBQUNIOztBQUVBO0VBQ0UsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBQ0Y7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJlbmRvd21lbnQtZnVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kYXJ5IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLnF1ZXMtdHh0IHtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoLmhhcy12YWx1ZSk6YmVmb3Jle1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbn0gXHJcblxyXG4uYmFjay1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgem9vbToxLjA7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtcGFkZGluZyB7XHJcbiAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxufVxyXG5cclxuLmlucHV0LWNsciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCkgMXB4IHNvbGlkOztcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLW5vLXBhZGRpbmd7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO3doaXRlLXNwYWNlOiBcclxuICBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1zYXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxuICB9XHJcbiAgLmZvb3Rlci1ub3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgfVxyXG4gIC5mb290ZXItdmVyaWZpZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9Il19 */";
      /***/
    },

    /***/
    1745:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/endowment-fund/endowment-fund.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> {{uidse}} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"container\" *ngIf=\"status == '8'\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. Classes from <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of class\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Classes to <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\"  class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of class\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          3. Amount to be deposited <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          4. Amount deposited <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          5. Name of the bank in which amount depositedd <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          6. IFS Code of the branch in which amount deposited <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          7. Period of deposit, from<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n   \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          8. Period of deposit, to<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '9'\">\r\n\r\n      <!-- <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Corpus Fund\r\n        </ion-label>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. One month Salary <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Savings amount <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          3. Name of the bank in which amount deposited <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          4. IFS Code of the branch in which amount deposited <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          5. Account Number<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          6. Period of deposit, from <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          7. Period of deposit, to <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col><br>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '10'\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. Amount to be remitted <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Amount remitted <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          3. Challan No. <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          4. Date of remittance <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n       </ion-col><br>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '11'\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. Amount <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Challan No. <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          3. Date of remittance. <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col><br>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '13'\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. R.C.No.  <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n         2. Date <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col><br>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '14'\">\r\n     \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. Whether conditions were imposed in previous recognition order <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n            <div *ngIf=\"onAgency\"> Yes</div>\r\n            <div *ngIf=\"!onAgency\"> No</div>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <div *ngIf=\"onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\" (ionChange)=\"onOfChange($event,'2')\">\r\n              </ion-toggle>\r\n            </div>\r\n            <div *ngIf=\"!onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\" (ionChange)=\"onOfChange($event,'1')\">\r\n              </ion-toggle>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onAgency\">\r\n        <ion-label class=\"ques-txt\">\r\n          1.1. Whether complied with the conditions? <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n            <div *ngIf=\"onAgency\"> Yes</div>\r\n            <div *ngIf=\"!onAgency\"> No</div>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <div *ngIf=\"onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\"></ion-toggle>\r\n            </div>\r\n            <div *ngIf=\"!onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\"></ion-toggle>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Details of compliance. <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n       </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row class=\"container\" *ngIf=\"status == '15'\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          1. Amount remitted  <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input max=\"5\" type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          2. Challan No.   <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input max=\"10\" type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_endowment-fund_endowment-fund_module_ts-es5.js.map