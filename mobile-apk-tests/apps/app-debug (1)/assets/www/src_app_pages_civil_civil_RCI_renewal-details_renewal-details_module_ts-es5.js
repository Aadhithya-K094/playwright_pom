(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_renewal-details_renewal-details_module_ts"], {
    /***/
    69656:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/renewal-details/renewal-details-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RenewalDetailsPageRoutingModule": function RenewalDetailsPageRoutingModule() {
          return (
            /* binding */
            _RenewalDetailsPageRoutingModule
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


      var _renewal_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./renewal-details.page */
      53638);

      var routes = [{
        path: '',
        component: _renewal_details_page__WEBPACK_IMPORTED_MODULE_0__.RenewalDetailsPage
      }];

      var _RenewalDetailsPageRoutingModule = /*#__PURE__*/_createClass(function RenewalDetailsPageRoutingModule() {
        _classCallCheck(this, RenewalDetailsPageRoutingModule);
      });

      _RenewalDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RenewalDetailsPageRoutingModule);
      /***/
    },

    /***/
    35988:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/renewal-details/renewal-details.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RenewalDetailsPageModule": function RenewalDetailsPageModule() {
          return (
            /* binding */
            _RenewalDetailsPageModule
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


      var _renewal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./renewal-details-routing.module */
      69656);
      /* harmony import */


      var _renewal_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./renewal-details.page */
      53638);

      var _RenewalDetailsPageModule = /*#__PURE__*/_createClass(function RenewalDetailsPageModule() {
        _classCallCheck(this, RenewalDetailsPageModule);
      });

      _RenewalDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _renewal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.RenewalDetailsPageRoutingModule],
        declarations: [_renewal_details_page__WEBPACK_IMPORTED_MODULE_1__.RenewalDetailsPage]
      })], _RenewalDetailsPageModule);
      /***/
    },

    /***/
    53638:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/renewal-details/renewal-details.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RenewalDetailsPage": function RenewalDetailsPage() {
          return (
            /* binding */
            _RenewalDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_renewal_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./renewal-details.page.html */
      3309);
      /* harmony import */


      var _renewal_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./renewal-details.page.scss */
      98279);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _RenewalDetailsPage = /*#__PURE__*/function () {
        function RenewalDetailsPage(route, router) {
          _classCallCheck(this, RenewalDetailsPage);

          this.route = route;
          this.router = router;
          this.onstartclass = [{
            label: "LKG",
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
          this.onendclass = [{
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
          }, {
            label: "IV",
            value: 5
          }, {
            label: "V",
            value: 6
          }, {
            label: "VI",
            value: 7
          }, {
            label: "VII",
            value: 8
          }, {
            label: "VIII",
            value: 9
          }, {
            label: "IX",
            value: 10
          }, {
            label: "X",
            value: 11
          }, {
            label: "XI",
            value: 12
          }, {
            label: "XII",
            value: 13
          }];
        }

        return _createClass(RenewalDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.status = this.routeData.queryParams.status;
            this.uidse = this.routeData.queryParams.uidse;
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/regulator-section'], {
              queryParams: {
                status: 1,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            this.router.navigate(['/tabs/regulator-section'], {
              queryParams: {
                status: 2,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
          }
        }]);
      }();

      _RenewalDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _RenewalDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-renewal-details',
        template: _raw_loader_renewal_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_renewal_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RenewalDetailsPage);
      /***/
    },

    /***/
    98279:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/renewal-details/renewal-details.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\nion-label {\n  max-width: 100% !important;\n  font-weight: 500;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\nion-select {\n  padding-left: 0px !important;\n  max-width: 100% !important;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3YWwtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUFBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0csb0JBQUE7QUFDSDs7QUFFQTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQUNGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQUEsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoicmVuZXdhbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRhcnkge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4ucXVlcy10eHQge1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxufVxyXG5cclxuaW9uLWlucHV0W3R5cGU9XCJkYXRlXCJdOm5vdCguaGFzLXZhbHVlKTpiZWZvcmV7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxufSBcclxuXHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6b29tOjIuMDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG4uaW5wdXQtY2xyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OjBweDtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tbm8tcGFkZGluZ3tcclxuICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLXNhdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG59XHJcbi5mb290ZXItbm90IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcbi5mb290ZXItdmVyaWZpZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */";
      /***/
    },

    /***/
    3309:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/renewal-details/renewal-details.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Renewal Details</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"container\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Period from which recognition is sought <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\"></ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Period upto which recognition is sought <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\"></ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Classes from which recognition is sought <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Classes from which recognition is sought <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n     \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n \r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_renewal-details_renewal-details_module_ts-es5.js.map