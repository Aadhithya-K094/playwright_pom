(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_establishment_establishment_module_ts"], {
    /***/
    60115:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/establishment/establishment-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EstablishmentPageRoutingModule": function EstablishmentPageRoutingModule() {
          return (
            /* binding */
            _EstablishmentPageRoutingModule
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


      var _establishment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./establishment.page */
      26491);

      var routes = [{
        path: '',
        component: _establishment_page__WEBPACK_IMPORTED_MODULE_0__.EstablishmentPage
      }];

      var _EstablishmentPageRoutingModule = /*#__PURE__*/_createClass(function EstablishmentPageRoutingModule() {
        _classCallCheck(this, EstablishmentPageRoutingModule);
      });

      _EstablishmentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EstablishmentPageRoutingModule);
      /***/
    },

    /***/
    74535:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/establishment/establishment.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EstablishmentPageModule": function EstablishmentPageModule() {
          return (
            /* binding */
            _EstablishmentPageModule
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


      var _establishment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./establishment-routing.module */
      60115);
      /* harmony import */


      var _establishment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./establishment.page */
      26491);

      var _EstablishmentPageModule = /*#__PURE__*/_createClass(function EstablishmentPageModule() {
        _classCallCheck(this, EstablishmentPageModule);
      });

      _EstablishmentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _establishment_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstablishmentPageRoutingModule],
        declarations: [_establishment_page__WEBPACK_IMPORTED_MODULE_1__.EstablishmentPage]
      })], _EstablishmentPageModule);
      /***/
    },

    /***/
    26491:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/establishment/establishment.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EstablishmentPage": function EstablishmentPage() {
          return (
            /* binding */
            _EstablishmentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_establishment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./establishment.page.html */
      11332);
      /* harmony import */


      var _establishment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./establishment.page.scss */
      91571);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _EstablishmentPage = /*#__PURE__*/function () {
        function EstablishmentPage(route, router) {
          _classCallCheck(this, EstablishmentPage);

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

        return _createClass(EstablishmentPage, [{
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
          key: "goToBack",
          value: function goToBack() {
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
                status: 1,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
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
          key: "onOfChange1",
          value: function onOfChange1(event, id) {
            if (id == 2) {
              this.onAgency1 = false;
            }

            if (id == 1) {
              this.onAgency1 = true;
            }
          }
        }]);
      }();

      _EstablishmentPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _EstablishmentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-establishment',
        template: _raw_loader_establishment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_establishment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EstablishmentPage);
      /***/
    },

    /***/
    91571:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/establishment/establishment.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\nion-label {\n  max-width: 100% !important;\n  font-weight: 500;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\nion-select {\n  padding-left: 0px !important;\n  max-width: 100% !important;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFibGlzaG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFBQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNHLG9CQUFBO0FBQ0g7O0FBRUE7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFDRjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxCRjs7QUFvQkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFqQkY7O0FBbUJBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBaEJGIiwiZmlsZSI6ImVzdGFibGlzaG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206Mi4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLXBhZGRpbmcge1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbn1cclxuXHJcbi5pbnB1dC1jbHIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpIDFweCBzb2xpZDs7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAvKiBtYXJnaW46IDAlOyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlvbi1uby1wYWRkaW5ne1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXRvZ2dsZSB7XHJcbiAgLy8gICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmYgdXJsKC9hc3NldHMvaWNvbnMvZG93bmxvYWQuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi10b2dnbGU6OmJlZm9yZSB7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgXHJcbiAgLy8gICB0b3A6IDE2cHg7XHJcbiAgLy8gICBsZWZ0OiAxMHB4O1xyXG4gIFxyXG4gIC8vICAgY29udGVudDogXCJPTlwiO1xyXG4gIFxyXG4gIC8vICAgY29sb3I6IHdoaXRlO1xyXG4gIC8vICAgZm9udC1zaXplOiA4cHg7XHJcbiAgXHJcbiAgLy8gICB6LWluZGV4OiAxO1xyXG4gIC8vIH1cclxuXHJcblxyXG4uZm9vdGVyLXNhdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG4uZm9vdGVyLW5vdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgcGFkZGluZzogMTBweDsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */";
      /***/
    },

    /***/
    11332:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/establishment/establishment.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"goToBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Establishment Details</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"container\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Date of Establishment<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row class=bt-10>\r\n          <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n            <ion-input style=\"color: #000000\" class=\"input-clr\" type=\"date\" placeholder=\"Please Select the date\">\r\n            </ion-input>\r\n            <ion-icon style=\" padding-bottom: 18px;\r\n            border-bottom: var(--ion-color-primary, #388) 1px solid;\" name=\"calendar\" class=\"fs-30\" color=\"primary\">\r\n            </ion-icon>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Proceeding details<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Upload opening permission order <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-list size=\"6\"\r\n          style=\"background:rgb(248, 248, 248) ;border-bottom: var(--ion-color-primary, #388) 1px solid;\">\r\n          <ion-icon src=\"../../../../assets/icons/download.svg\" style=\"font-size: 70px;padding-top: 17px;\" width=\"600\"\r\n            height=\"100\"></ion-icon>\r\n        </ion-list>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Name of the Trust / Society <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Byelaws of the Trust / Society <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-list size=\"6\"\r\n          style=\"background:rgb(248, 248, 248) ;border-bottom: var(--ion-color-primary, #388) 1px solid;\">\r\n          <ion-icon src=\"../../../../assets/icons/download.svg\" style=\"font-size: 70px;padding-top: 17px;\" width=\"600\"\r\n            height=\"100\"></ion-icon>\r\n        </ion-list>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Whether Education Agency is alive <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row style=\"border-bottom: var(--ion-color-primary, #388) 1px solid;\">\r\n         <ion-col size=\"3\">\r\n            <div *ngIf=\"onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\" (ionChange)=\"onOfChange($event,'2')\">\r\n              </ion-toggle>\r\n            </div>\r\n            <div *ngIf=\"!onAgency\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency\" (ionChange)=\"onOfChange($event,'1')\">\r\n              </ion-toggle>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;\">\r\n            <div *ngIf=\"onAgency\"> Yes</div>\r\n            <div *ngIf=\"!onAgency\"> No</div>\r\n          </ion-col>\r\n          </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Whether Education Agency is running any other school in the same premises <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-row style=\"border-bottom: var(--ion-color-primary, #388) 1px solid;\">\r\n          <ion-col size=\"3\">\r\n            <div *ngIf=\"onAgency1\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency1\" (ionChange)=\"onOfChange1($event,'2')\">\r\n              </ion-toggle>\r\n            </div>\r\n            <div *ngIf=\"!onAgency1\">\r\n              <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"onAgency1\" (ionChange)=\"onOfChange1($event,'1')\">\r\n              </ion-toggle>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;\">\r\n            <div *ngIf=\"onAgency1\"> Yes</div>\r\n            <div *ngIf=\"!onAgency1\"> No</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onAgency1\">\r\n        <ion-label class=\"ques-txt\">\r\n          UDISE number of the School <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onAgency1\">\r\n        <ion-label class=\"ques-txt\">\r\n          Name of the school in the same premsies <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_establishment_establishment_module_ts-es5.js.map