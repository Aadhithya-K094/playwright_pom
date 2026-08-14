(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_design-page_design-page_module_ts"], {
    /***/
    92644:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/design-page/design-page-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignPagePageRoutingModule": function DesignPagePageRoutingModule() {
          return (
            /* binding */
            _DesignPagePageRoutingModule
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


      var _design_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./design-page.page */
      67164);

      var routes = [{
        path: '',
        component: _design_page_page__WEBPACK_IMPORTED_MODULE_0__.DesignPagePage
      }];

      var _DesignPagePageRoutingModule = /*#__PURE__*/_createClass(function DesignPagePageRoutingModule() {
        _classCallCheck(this, DesignPagePageRoutingModule);
      });

      _DesignPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DesignPagePageRoutingModule);
      /***/
    },

    /***/
    16469:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/design-page/design-page.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignPagePageModule": function DesignPagePageModule() {
          return (
            /* binding */
            _DesignPagePageModule
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


      var _design_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./design-page-routing.module */
      92644);
      /* harmony import */


      var _design_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./design-page.page */
      67164);

      var _DesignPagePageModule = /*#__PURE__*/_createClass(function DesignPagePageModule() {
        _classCallCheck(this, DesignPagePageModule);
      });

      _DesignPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _design_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignPagePageRoutingModule],
        declarations: [_design_page_page__WEBPACK_IMPORTED_MODULE_1__.DesignPagePage]
      })], _DesignPagePageModule);
      /***/
    },

    /***/
    67164:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/design-page/design-page.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignPagePage": function DesignPagePage() {
          return (
            /* binding */
            _DesignPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_design_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./design-page.page.html */
      23108);
      /* harmony import */


      var _design_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./design-page.page.scss */
      93989);
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

      var _DesignPagePage = /*#__PURE__*/function () {
        function DesignPagePage(usersessionService, userService, router) {
          _classCallCheck(this, DesignPagePage);

          this.usersessionService = usersessionService;
          this.userService = userService;
          this.router = router;
          this.accordionState = {};
          this.selectedYear = null;
          this.Acdamicyear = [];
          this.currUser = this.usersessionService.emis_username(); // this.years.forEach(year => {
          //   this.phaseVisibility[year] = false;
          // });
        }

        return _createClass(DesignPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedYear = null;
            this.getacdamicyear();
          }
        }, {
          key: "toggleAccordion",
          value: function toggleAccordion(year, index) {
            var _this = this;

            debugger;
            this.Acdamicyear[index]['view'] = !this.Acdamicyear[index]['view'];
            this.selectedYear = null;

            if (this.selectedYear === year) {
              this.selectedYear = null;
            } else {
              this.selectedYear = year;
              Object.keys(this.accordionState).forEach(function (key) {
                if (parseInt(key) !== year) {
                  _this.accordionState[parseInt(key)] = false;
                }
              });
              this.accordionState[year] = !this.accordionState[year];
            }

            console.log(this.Acdamicyear, "this.Acdamicyear");
          }
        }, {
          key: "getacdamicyear",
          value: function getacdamicyear() {
            var _this2 = this;

            this.Acdamicyear = [];
            this.userService.getacdamicdata().subscribe(function (res) {
              _this2.Acdamicyear = res.result.map(function (item) {
                return {
                  AcYears: item.AcYears,
                  view: false,
                  Phase: item.Phase.map(function (phase) {
                    return {
                      id: phase.id,
                      phaseName: phase.phase,
                      viewstatus: phase.view_status
                    };
                  })
                };
              });
              console.log(_this2.Acdamicyear, "this.Acdamicyear"); // Log the retrieved data to the console

              _this2.id = "id";
              _this2.viewstatus = "viewstatus";
              _this2.AcYears = "AcYears";
              _this2.phaseName = "phaseName"; // this.getawcname(id);
            });
          }
        }, {
          key: "getawcname",
          value: function getawcname(id, viewstatus, phaseName, AcYears) {
            debugger;
            window.localStorage.setItem("viewstatus", viewstatus);
            this.router.navigate(['/tabs/list-of-awc'], {
              queryParams: {
                id: id,
                viewstatus: viewstatus,
                phaseName: phaseName,
                AcYears: AcYears
              }
            });
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.selectedYear = null;
            this.getacdamicyear(); // this.accordionState =null

            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.getacdamicyear();
            this.selectedYear = null;
          }
        }]);
      }();

      _DesignPagePage.ctorParameters = function () {
        return [{
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _DesignPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-design-page',
        template: _raw_loader_design_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_design_page_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DesignPagePage);
      /***/
    },

    /***/
    93989:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/design-page/design-page.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".year-cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.year-card {\n  width: calc(33.33% - 20px);\n  padding: 20px;\n  margin: 10px;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.year-card h3 {\n  margin-bottom: 10px;\n  font-size: 1.5rem;\n  color: #333;\n}\n\n.year-card p {\n  font-size: 1rem;\n  color: #666;\n}\n\n/* Colors for different years */\n\n.year-card.year-2020 {\n  background-color: #ffe6e6;\n  /* Light red */\n}\n\n.year-card.year-2021 {\n  background-color: #e6ffe6;\n  /* Light green */\n}\n\n.year-card.year-2022 {\n  background-color: #e6e6ff;\n  /* Light blue */\n}\n\n.year-cards {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.year-card {\n  width: calc(33.33% - 20px);\n  padding: 20px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  /* Light background color */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.custom-card {\n  margin-top: 20px;\n  background-color: #ffffff;\n  /* Light background color */\n  border-radius: 10px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Box shadow for cards */\n}\n\n.custom-card ion-card-header {\n  background-color: #FBF3D5;\n  /* Background color for card header */\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.custom-card ion-card-header ion-card-title {\n  color: #ffffff;\n  /* Text color for card title */\n}\n\n.card-header-2 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.icon-end {\n  font-size: 1.5rem;\n  color: #ac74be;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFLCtCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFBMkIsY0FBQTtBQUUvQjs7QUFDRTtFQUNFLHlCQUFBO0VBQTJCLGdCQUFBO0FBRy9COztBQUFFO0VBQ0UseUJBQUE7RUFBMkIsZUFBQTtBQUkvQjs7QUFERTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREU7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUEyQiwyQkFBQTtFQUMzQiwwQ0FBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQTJCLDJCQUFBO0VBQzNCLG1CQUFBO0VBQ0EsMENBQUE7RUFBNEMseUJBQUE7QUFPaEQ7O0FBSkU7RUFDRSx5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQiw0QkFBQTtFQUNBLDZCQUFBO0FBUUo7O0FBTEU7RUFDRSxjQUFBO0VBQWdCLDhCQUFBO0FBU3BCOztBQU5FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFORTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBU0oiLCJmaWxlIjoiZGVzaWduLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnllYXItY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAueWVhci1jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC55ZWFyLWNhcmQgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC55ZWFyLWNhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbiAgXHJcbiAgLyogQ29sb3JzIGZvciBkaWZmZXJlbnQgeWVhcnMgKi9cclxuICAueWVhci1jYXJkLnllYXItMjAyMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNmU2OyAvKiBMaWdodCByZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLnllYXItY2FyZC55ZWFyLTIwMjEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZmZlNjsgLyogTGlnaHQgZ3JlZW4gKi9cclxuICB9XHJcbiAgXHJcbiAgLnllYXItY2FyZC55ZWFyLTIwMjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZmZjsgLyogTGlnaHQgYmx1ZSAqL1xyXG4gIH1cclxuXHJcbiAgLnllYXItY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLnllYXItY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAyMHB4KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogTGlnaHQgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIExpZ2h0IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEJveCBzaGFkb3cgZm9yIGNhcmRzICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjNENTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgY2FyZCBoZWFkZXIgKi9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyogVGV4dCBjb2xvciBmb3IgY2FyZCB0aXRsZSAqL1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGVyLTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICB9XHJcblxyXG4gIC5pY29uLWVuZCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXHJcbiAgICBjb2xvcjogI2FjNzRiZTsgXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    23108:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/design-page/design-page.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Academic Year</div>\r\n      <div class=\"ion-text-wrap floatLabel\">\r\n        <ion-icon name=\"person-circle-outline\" class=\"userlabel\"></ion-icon>\r\n        {{currUser}}\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ng-container *ngFor=\"let year of Acdamicyear; let i = index\">\r\n      <ion-item (click)=\"toggleAccordion(year.AcYears, i)\">\r\n        <ion-label>{{ year.AcYears }}</ion-label>\r\n        <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card *ngIf=\"year['view']\">\r\n        <ion-card-content *ngIf=\"selectedYear === year.AcYears\" style=\"background-color: #ac74be;\">\r\n          <ng-container *ngFor=\"let phase of year.Phase\">\r\n            <ion-card *ngIf=\"phase.viewstatus\" (click)=\"getawcname(phase.id,phase.viewstatus,phase.phaseName,year.AcYears)\"\r\n            >\r\n              <ion-card-header class=\"card-header-2\"\r\n              >{{phase.phaseName }}\r\n              <ion-icon *ngIf= \"phase.viewstatus != 1\" name=\"eye-outline\" class=\"icon-end\"></ion-icon>\r\n              <ion-icon *ngIf= \"phase.viewstatus == 1\" name=\"create\" class=\"icon-end\"></ion-icon></ion-card-header>\r\n\r\n            </ion-card>\r\n          </ng-container>\r\n          <!-- <ion-card>\r\n            <ion-card-header>{{year.phase}} {{ year.AcYears }}</ion-card-header>\r\n          </ion-card> -->\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ng-container>\r\n  </ion-list>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_design-page_design-page_module_ts-es5.js.map