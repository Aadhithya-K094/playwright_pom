(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_regulator-section_regulator-section_module_ts"], {
    /***/
    25417:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/regulator-section/regulator-section-routing.module.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegulatorSectionPageRoutingModule": function RegulatorSectionPageRoutingModule() {
          return (
            /* binding */
            _RegulatorSectionPageRoutingModule
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


      var _regulator_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regulator-section.page */
      25282);

      var routes = [{
        path: '',
        component: _regulator_section_page__WEBPACK_IMPORTED_MODULE_0__.RegulatorSectionPage
      }];

      var _RegulatorSectionPageRoutingModule = /*#__PURE__*/_createClass(function RegulatorSectionPageRoutingModule() {
        _classCallCheck(this, RegulatorSectionPageRoutingModule);
      });

      _RegulatorSectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegulatorSectionPageRoutingModule);
      /***/
    },

    /***/
    486:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/regulator-section/regulator-section.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegulatorSectionPageModule": function RegulatorSectionPageModule() {
          return (
            /* binding */
            _RegulatorSectionPageModule
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


      var _regulator_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regulator-section-routing.module */
      25417);
      /* harmony import */


      var _regulator_section_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./regulator-section.page */
      25282);

      var _RegulatorSectionPageModule = /*#__PURE__*/_createClass(function RegulatorSectionPageModule() {
        _classCallCheck(this, RegulatorSectionPageModule);
      });

      _RegulatorSectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _regulator_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegulatorSectionPageRoutingModule],
        declarations: [_regulator_section_page__WEBPACK_IMPORTED_MODULE_1__.RegulatorSectionPage]
      })], _RegulatorSectionPageModule);
      /***/
    },

    /***/
    25282:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/regulator-section/regulator-section.page.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegulatorSectionPage": function RegulatorSectionPage() {
          return (
            /* binding */
            _RegulatorSectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_regulator_section_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./regulator-section.page.html */
      78844);
      /* harmony import */


      var _regulator_section_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./regulator-section.page.scss */
      53447);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _RegulatorSectionPage = /*#__PURE__*/function () {
        function RegulatorSectionPage(route, router) {
          _classCallCheck(this, RegulatorSectionPage);

          this.route = route;
          this.router = router;
          this.inspectionHeader = [{
            name: "Establishment Details",
            id: 1,
            value: "1"
          }, {
            name: "Renewal Details",
            id: 2,
            value: "1"
          }, {
            name: "Student Strength Details",
            id: 3,
            value: "1"
          }, {
            name: "Staff Details",
            id: 4,
            value: "1"
          }, {
            name: "Land Details",
            id: 5,
            value: "1"
          }, {
            name: "Infrastructure Details",
            id: 6,
            value: "1"
          }, {
            name: "Fund Details",
            id: 7,
            value: "1"
          }, {
            name: "Endowment Fund",
            id: 8,
            value: "2"
          }, {
            name: "Corpus Fund",
            id: 9,
            value: "2"
          }, {
            name: "Management Contribution",
            id: 10,
            value: "2"
          }, {
            name: "Inspection Fee",
            id: 11,
            value: "2"
          }, {
            name: "Previous order",
            id: 12,
            value: "1"
          }, {
            name: "Details of previous order",
            id: 13,
            value: "2"
          }, {
            name: "Conditions",
            id: 14,
            value: "2"
          }, {
            name: "Application Fee",
            id: 15,
            value: "1"
          }];
        }

        return _createClass(RegulatorSectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.status = this.routeData.queryParams.status;
            this.uidse = this.routeData.queryParams.uidse;
            this.schoolid = this.routeData.queryParams.id;
            parseInt(this.status);
          }
        }, {
          key: "nextPage",
          value: function nextPage(value) {
            if (value == '1') {
              this.router.navigate(['/tabs/establishment'], {
                queryParams: {
                  status: value,
                  "uidse": this.uidse
                },
                skipLocationChange: false
              });
            }

            if (value == '2') {
              this.router.navigate(['/tabs/renewal-details'], {
                queryParams: {
                  status: 2,
                  "uidse": this.uidse
                },
                skipLocationChange: false
              });
            }

            if (value == '3') {
              this.router.navigate(['/tabs/student-details'], {
                queryParams: {
                  status: 3,
                  "uidse": this.uidse
                },
                skipLocationChange: false
              });
            }

            if (value == '4') {
              this.router.navigate(['/tabs/staff-details'], {
                queryParams: {
                  status: 5,
                  "uidse": this.uidse
                },
                skipLocationChange: false
              });
            }

            if (value == '5') {
              this.router.navigate(['/tabs/land-details'], {
                queryParams: {
                  status: 5,
                  "uidse": this.uidse
                },
                skipLocationChange: false
              });
            }

            if (value == '6') {
              this.router.navigate(['/tabs/building-classification'], {
                queryParams: {
                  'schoolId': this.schoolid,
                  'udise': this.uidse,
                  "addbuildingCount": "new"
                },
                skipLocationChange: false
              });
            } // if (value == '6') {
            //   this.router.navigate(['/tabs/endowment-fund'], {
            //     queryParams: { status: 6, "uidse": this.uidse }, skipLocationChange: false
            //   });
            // }


            if (value == '7') {// this.router.navigate(['/tabs/endowment-fund'], {
              //   queryParams: { status: 7, "uidse": this.uidse }, skipLocationChange: false
              // }); 
            }

            if (value == '8') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 8,
                  "uidse": 'Endowment Fund'
                },
                skipLocationChange: false
              });
            }

            if (value == '9') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 9,
                  "uidse": 'Corpus Fund'
                },
                skipLocationChange: false
              });
            }

            if (value == '10') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 10,
                  "uidse": 'Management Contribution'
                },
                skipLocationChange: false
              });
            }

            if (value == '11') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 11,
                  "uidse": 'Inspection Fee'
                },
                skipLocationChange: false
              });
            }

            if (value == '12') {}

            if (value == '13') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 13,
                  "uidse": 'Details of previous order'
                },
                skipLocationChange: false
              });
            }

            if (value == '14') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 14,
                  "uidse": 'Conditions'
                },
                skipLocationChange: false
              });
            }

            if (value == '15') {
              this.router.navigate(['/tabs/endowment-fund'], {
                queryParams: {
                  status: 15,
                  "uidse": 'Application Fee'
                },
                skipLocationChange: false
              });
            }
          }
        }, {
          key: "onNextPage",
          value: function onNextPage() {
            this.router.navigate(['/tabs/inspection']);
          }
        }]);
      }();

      _RegulatorSectionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _RegulatorSectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-regulator-section',
        template: _raw_loader_regulator_section_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_regulator_section_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegulatorSectionPage);
      /***/
    },

    /***/
    53447:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/regulator-section/regulator-section.page.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".formLine {\n  --background: transparent;\n}\n\n.header {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.ion-margin-bottom {\n  margin-bottom: 0px;\n  border-radius: 15px;\n}\n\n.row-width {\n  width: 100%;\n}\n\n.ionlbl {\n  color: #0e0b0b;\n  font-size: 20px !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.input-txt {\n  border-bottom: 1px solid;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\n.formLine {\n  color: red;\n  font-size: 16px !important;\n  padding-top: 5px;\n}\n\n.icon-aln {\n  margin: auto;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.icon-color {\n  zoom: 1.8;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\n.subtitle {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  background-color: #f8f9fa;\n  margin-left: 13%;\n  margin-right: 3%;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n.title {\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  background-color: #f8f9fa;\n}\n\n.title-clr {\n  padding: 10px;\n}\n\n.value {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n\n.value-class {\n  color: #f8f9fa;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.value-data {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.title-nodata {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #388;\n  border-left: 5px solid var(--ion-color-primary, #388);\n  border-right: 5px solid #388;\n  border-right: 5px solid var(--ion-color-primary, #388);\n}\n\nion-label {\n  font-size: 16px !important;\n}\n\n.icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXRvci1zZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHlCQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFFO0VBQ0EsVUFBQTtBQUdGOztBQURFO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUFJRjs7QUFGRTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEU7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkU7RUFDQSxTQUFBO0VBQVMsV0FBQTtFQUFBLHFDQUFBO0FBUVg7O0FBTkU7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFQRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUFvQixXQUFBO0VBQUEscUNBQUE7RUFDcEIseUJBQUE7QUFXSjs7QUFURTtFQUNDLGFBQUE7QUFZSDs7QUFWRTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBYUY7O0FBWEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLGtCQUFBO0FBYUo7O0FBWEU7RUFDQSxXQUFBO0VBQUEscUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkU7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHFEQUFBO0VBQ0EsNEJBQUE7RUFBQSxzREFBQTtBQWVGOztBQVpFO0VBQ0EsMEJBQUE7QUFlRjs7QUFaRTtFQUNFLGVBQUE7QUFlSiIsImZpbGUiOiJyZWd1bGF0b3Itc2VjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybUxpbmV7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi1tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5yb3ctd2lkdGgge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgLmlvbmxibCB7XHJcbiAgICBjb2xvcjpyZ2IoMTQsIDExLCAxMSk7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLmlucHV0LXR4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIH1cclxuICAuZm9ybUxpbmUge1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAuaWNvbi1hbG4ge1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuaWNvbi1jb2xvciB7XHJcbiAgem9vbToxLjg7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElOyBcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElOyAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB9XHJcbiAgLnRpdGxlLWNsciB7XHJcbiAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICB9XHJcbiAgLnZhbHVlIHtcclxuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgcGFkZGluZy10b3A6MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHhcclxuICB9XHJcbiAgLnZhbHVlLWNsYXNzIHtcclxuICAgIGNvbG9yOiAjZjhmOWZhO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM4YjY3YjM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52YWx1ZS1kYXRhIHtcclxuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlLW5vZGF0YSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    78844:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/regulator-section/regulator-section.page.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onNextPage()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Regulator compliance </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n\r\n    <ion-row *ngFor=\"let data of inspectionHeader\">\r\n      <ion-col size=\"12\" >\r\n        <ion-row [ngClass]=\"(data.value == 1) ? 'title' : 'subtitle'\">\r\n          <ion-col size=\"10\" class=\"title-clr\" *ngIf=\"data.value == '1'\">\r\n            <div>\r\n              <ion-label> {{data.name}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"10\"  class=\"title-clr\" *ngIf=\"data.value == '2'\">\r\n            <div>\r\n              <ion-label> {{data.name}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"value-class\" (click)=\"nextPage(data.id)\">\r\n            <ion-label *ngIf=\"this.status >= data.id\">\r\n              <ion-icon class=\"icon\" src=\"../../../../assets/icons/Tick.svg\">\r\n              </ion-icon>\r\n            </ion-label>\r\n\r\n            <ion-label *ngIf=\"data.id > this.status\">\r\n              <ion-icon class=\"icon\" src=\"../../../../assets/icons/next_purple.svg\">\r\n              </ion-icon>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_regulator-section_regulator-section_module_ts-es5.js.map