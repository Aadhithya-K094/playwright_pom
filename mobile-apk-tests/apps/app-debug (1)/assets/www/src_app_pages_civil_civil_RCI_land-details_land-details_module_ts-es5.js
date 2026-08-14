(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_land-details_land-details_module_ts"], {
    /***/
    54672:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/land-details/land-details-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandDetailsPageRoutingModule": function LandDetailsPageRoutingModule() {
          return (
            /* binding */
            _LandDetailsPageRoutingModule
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


      var _land_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./land-details.page */
      23925);

      var routes = [{
        path: '',
        component: _land_details_page__WEBPACK_IMPORTED_MODULE_0__.LandDetailsPage
      }];

      var _LandDetailsPageRoutingModule = /*#__PURE__*/_createClass(function LandDetailsPageRoutingModule() {
        _classCallCheck(this, LandDetailsPageRoutingModule);
      });

      _LandDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LandDetailsPageRoutingModule);
      /***/
    },

    /***/
    97312:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/land-details/land-details.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandDetailsPageModule": function LandDetailsPageModule() {
          return (
            /* binding */
            _LandDetailsPageModule
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


      var _land_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./land-details-routing.module */
      54672);
      /* harmony import */


      var _land_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./land-details.page */
      23925);

      var _LandDetailsPageModule = /*#__PURE__*/_createClass(function LandDetailsPageModule() {
        _classCallCheck(this, LandDetailsPageModule);
      });

      _LandDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _land_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandDetailsPageRoutingModule],
        declarations: [_land_details_page__WEBPACK_IMPORTED_MODULE_1__.LandDetailsPage]
      })], _LandDetailsPageModule);
      /***/
    },

    /***/
    23925:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/land-details/land-details.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandDetailsPage": function LandDetailsPage() {
          return (
            /* binding */
            _LandDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_land_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./land-details.page.html */
      9280);
      /* harmony import */


      var _land_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./land-details.page.scss */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LandDetailsPage = /*#__PURE__*/function () {
        function LandDetailsPage(route, formBuilder, router) {
          _classCallCheck(this, LandDetailsPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.router = router;
          this.owner = [{
            label: "Leased",
            value: 1
          }, {
            label: "Rented",
            value: 2
          }, {
            label: "Owned",
            value: 3
          }];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        }

        return _createClass(LandDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              landDetails: this.formBuilder.array([this.landDataDetails()])
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.status = this.routeData.queryParams.status;
            this.uidse = this.routeData.queryParams.uidse;
          }
        }, {
          key: "onOfChange",
          value: function onOfChange(event, id, i) {
            console.log(event, id, i);

            if (id == 2) {
              this.activeData = false;
              this.form.controls['landDetails']['controls'][i].controls['resp5'].setValue(false);
              this.form.controls['landDetails']['controls'][i].controls['resp5'].updateValueAndValidity();
            }

            if (id == 1) {
              this.activeData = true;
              this.form.controls['landDetails']['controls'][i].controls['resp5'].setValue(true);
              this.form.controls['landDetails']['controls'][i].controls['resp5'].updateValueAndValidity();
            }
          }
        }, {
          key: "onOfdataChange",
          value: function onOfdataChange(data) {
            console.log(data);

            if (data == 2) {
              this.onRented = true;
            } else {
              this.onRented = false;
            }
          }
        }, {
          key: "landDataDetails",
          value: function landDataDetails() {
            return this.formBuilder.group({
              resp1: [""],
              resp2: [""],
              resp3: [""],
              resp4: [""],
              resp5: [false]
            });
          }
        }, {
          key: "landArray",
          value: function landArray() {
            return this.form.controls.landDetails.controls;
          }
        }, {
          key: "addlandData",
          value: function addlandData() {
            this.landDetails = this.form.controls.landDetails;
            this.landDetails.push(this.landDataDetails());
            console.log(this.landDetails, "data");
          }
        }, {
          key: "onSave",
          value: function onSave() {
            this.router.navigate(['/tabs/regulator-section'], {
              queryParams: {
                status: 4,
                "uidse": this.uidse
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/regulator-section']);
          }
        }]);
      }();

      _LandDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _LandDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-land-details',
        template: _raw_loader_land_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_land_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LandDetailsPage);
      /***/
    },

    /***/
    81170:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/civil/civil/RCI/land-details/land-details.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  width: 93%;\n  max-width: 1170px;\n  margin: 0 auto;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 10px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 4px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark {\n  border-color: #444;\n}\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\nion-label {\n  max-width: 100% !important;\n  font-weight: 500;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\nion-select {\n  padding-left: 0px !important;\n  max-width: 100% !important;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  background-color: cadetblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBR0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUFBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7OztFQUdFLGVBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBOztFQUVFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUtBLFNBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBU0EsT0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBV0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0FBVEY7O0FBYUEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBZUEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWlCQSxRQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxjQUFBO0FBZkY7O0FBbUJBLE9BQUE7O0FBRUE7RUFDRSxrQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxXQUFBO0FBakJGOztBQW9CQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBakJGOztFQW1CQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBaEJGOztFQWtCQTs7SUFFRSxlQUFBO0lBQ0EsbUJBQUE7RUFmRjtBQUNGOztBQWtCQTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxVQUFBO0FBaEJGOztBQW1CQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBaEJGOztBQW1CQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsVUFBQTtBQWhCRjs7QUFtQkE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFBQSw2Q0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBaEJGOztBQW1CQTtFQUNFLCtCQUFBO0FBaEJGOztBQW1CQTtFQUNFLDBCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBaEJKOztBQW1CQTtFQUNHLG9CQUFBO0FBaEJIOztBQW1CQTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQWhCRjs7QUFtQkU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQWtCQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBYkYiLCJmaWxlIjoibGFuZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Cb3R0b20wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wMCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm1hcmdpblRvcDUge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2QtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTMlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2QtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZVRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRpbWVsaW5lSWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNkLWF1dGhvciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNjZC10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG1hcmdpbi10b3A6IDJlbTtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xyXG4gIC8qIHRoaXMgaXMgdGhlIHZlcnRpY2FsIGxpbmUgKi9cclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1pY29uIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgY29sb3I6ICMzMDNlNDk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKkNPTE9SUyovXHJcblxyXG5cclxuLypQT1NJVElWRSovXHJcblxyXG4ucG9zaXRpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuLnBvc2l0aXZlIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG5cclxuLypDQUxNKi9cclxuXHJcbi5jYWxtIHtcclxuICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbn1cclxuXHJcbi5jYWxtIGkge1xyXG4gIGNvbG9yOiAjNDNjZWU2O1xyXG59XHJcblxyXG5cclxuLypCQUxBTkNFRCovXHJcblxyXG4uYmFsYW5jZWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2Y2MzMztcclxufVxyXG5cclxuLmJhbGFuY2VkIGkge1xyXG4gIGNvbG9yOiAjNjZjYzMzO1xyXG59XHJcblxyXG5cclxuLypFTkVSR0laRUQqL1xyXG5cclxuLmVuZXJnaXplZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG4uZW5lcmdpemVkIGkge1xyXG4gIGNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG5cclxuLypBU1NFUlRJVkUqL1xyXG5cclxuLmFzc2VydGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG4uYXNzZXJ0aXZlIGkge1xyXG4gIGNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG5cclxuLypST1lBTCovXHJcblxyXG4ucm95YWwge1xyXG4gIGJvcmRlci1jb2xvcjogIzhhNmRlOTtcclxufVxyXG5cclxuLnJveWFsIGkge1xyXG4gIGNvbG9yOiAjOGE2ZGU5O1xyXG59XHJcblxyXG5cclxuLypEQVJLKi9cclxuXHJcbi5kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5kYXJrIGkge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206MS4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG4uaW5wdXQtY2xyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OjBweDtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tbm8tcGFkZGluZ3tcclxuICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1zYXZlIHtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG59XHJcbi5mb290ZXItbm90IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uZm9vdGVyLXZlcmlmaWVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICBwYWRkaW5nOiAxMHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    9280:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/land-details/land-details.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Land Details </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\">\r\n    <ion-grid class=\"grid-padding\">\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" formArrayName=\"landDetails\"\r\n        *ngFor=\"let group of landArray() let i = index\">\r\n        <div ng-repeat=\"activity in timeline\" [formGroupName]=\"i\">\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              {{i+1}}\r\n            </div>\r\n            <div class=\"cd-timeline-content\">\r\n              <ion-row class=\"container\">\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Survey No<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"resp1\">\r\n                  </ion-input>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Ownership Type <span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\"\r\n                    formControlName=\"resp2\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onRented\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Rent period from <span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"date\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"resp3\">\r\n                  </ion-input>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onRented\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Rent period to <span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"date\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"resp4\">\r\n                  </ion-input>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Registration Completed <span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"activeData\"> Yes</div>\r\n                      <div *ngIf=\"!activeData\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <div *ngIf=\"activeData\">\r\n                        <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"activeData\" formControlName=\"resp5\"\r\n                          (ionChange)=\"onOfChange($event,'2',i)\"></ion-toggle>\r\n                      </div>\r\n                      <div *ngIf=\"!activeData\">\r\n                        <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"activeData\" formControlName=\"resp5\"\r\n                          (ionChange)=\"onOfChange($event,'1',i)\"></ion-toggle>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"activeData\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    Date of Registration<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"date\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"resp5\">\r\n                  </ion-input>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <ion-row style=\"padding: 10px;\">\r\n        <ion-col size=\"12\" class=\"add\" (click)=\"addlandData()\">\r\n          <ion-label> ADD Land Details </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<!-- <ion-content class=\"secondary\">\r\n  <div class=\"header\">\r\n    <form [formGroup]=\"form\" class=\"form-horizontal\">\r\n      <div formArrayName=\"landDetails\" *ngFor=\"let group of landArray() let i = index\">\r\n        <ion-row [formGroupName]=\"i\">\r\n\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <ion-item lines=\"none\" class=\"item-style item-border\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  1. Survey No<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"resp1\">\r\n                </ion-input>\r\n              </ion-col><br>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <ion-item lines=\"none\" class=\"item-style item-border\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  2. Ownership Type <span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                  (ionChange)=\"onOfdataChange($event.detail.value)\" formControlName=\"resp2\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col><br>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onRented\">\r\n            <ion-item lines=\"none\" class=\"item-style item-border\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  2.1 . Rent period from <span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row class=bt-10>\r\n                  <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n                    <ion-input style=\"color: #000000\" type=\"date\" placeholder=\"Please Select the date\"\r\n                      formControlName=\"resp3\"></ion-input>\r\n                    <ion-icon style=\"padding-top:5px\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>\r\n                  </ion-list>\r\n                </ion-row>\r\n              </ion-col><br>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"onRented\">\r\n            <ion-item lines=\"none\" class=\"item-style item-border\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  2.2. Rent period to <span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row class=bt-10>\r\n                  <ion-list style=\"background-color: transparent;display:flex;width:100%\" class=\"list\">\r\n                    <ion-input style=\"color: #000000\" type=\"date\" placeholder=\"Please Select the date\"\r\n                      formControlName=\"resp4\"></ion-input>\r\n                    <ion-icon style=\"padding-top:5px\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>\r\n                  </ion-list>\r\n                </ion-row>\r\n              </ion-col><br>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <ion-item lines=\"none\" class=\"item-style item-border\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  3. Registration Completed <span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"activeData\"> Yes</div>\r\n                    <div *ngIf=\"!activeData\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div *ngIf=\"activeData\">\r\n                      <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"activeData\" formControlName=\"resp5\"\r\n                        (ionChange)=\"onOfChange($event,'2',i)\"></ion-toggle>\r\n                    </div>\r\n                    <div *ngIf=\"!activeData\">\r\n                      <ion-toggle style=\"height: 25px;width: 50px;\" [checked]=\"activeData\" formControlName=\"resp5\"\r\n                        (ionChange)=\"onOfChange($event,'1',i)\"></ion-toggle>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n              </ion-col><br>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <div style=\"border-bottom: 1px solid rgb(132 20 139 / 60%); margin-bottom: 5%;\">\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </div>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"add\" (click)=\"addlandData()\">\r\n          <ion-label> ADD Land Details </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </form>\r\n  </div>\r\n</ion-content> -->\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_RCI_land-details_land-details_module_ts-es5.js.map