(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_cwsn-menu_cwsn-menu_module_ts"], {
    /***/
    89496:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-menu/cwsn-menu-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMenuPageRoutingModule": function CwsnMenuPageRoutingModule() {
          return (
            /* binding */
            _CwsnMenuPageRoutingModule
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


      var _cwsn_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-menu.page */
      51918);

      var routes = [{
        path: '',
        component: _cwsn_menu_page__WEBPACK_IMPORTED_MODULE_0__.CwsnMenuPage
      }];

      var _CwsnMenuPageRoutingModule = /*#__PURE__*/_createClass(function CwsnMenuPageRoutingModule() {
        _classCallCheck(this, CwsnMenuPageRoutingModule);
      });

      _CwsnMenuPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CwsnMenuPageRoutingModule);
      /***/
    },

    /***/
    54681:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-menu/cwsn-menu.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMenuPageModule": function CwsnMenuPageModule() {
          return (
            /* binding */
            _CwsnMenuPageModule
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


      var _cwsn_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-menu-routing.module */
      89496);
      /* harmony import */


      var _cwsn_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-menu.page */
      51918);

      var _CwsnMenuPageModule = /*#__PURE__*/_createClass(function CwsnMenuPageModule() {
        _classCallCheck(this, CwsnMenuPageModule);
      });

      _CwsnMenuPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cwsn_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnMenuPageRoutingModule],
        declarations: [_cwsn_menu_page__WEBPACK_IMPORTED_MODULE_1__.CwsnMenuPage]
      })], _CwsnMenuPageModule);
      /***/
    },

    /***/
    51918:
    /*!***************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-menu/cwsn-menu.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMenuPage": function CwsnMenuPage() {
          return (
            /* binding */
            _CwsnMenuPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cwsn_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cwsn-menu.page.html */
      11591);
      /* harmony import */


      var _cwsn_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-menu.page.scss */
      18436);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _CwsnMenuPage = /*#__PURE__*/function () {
        function CwsnMenuPage(router, ionicstorage, route, alertService) {
          _classCallCheck(this, CwsnMenuPage);

          this.router = router;
          this.ionicstorage = ionicstorage;
          this.route = route;
          this.alertService = alertService;
          this.dataInLolDB = false;
          this.clustoers = [];
          this.zonalId = '';
          this.phase2MenuList = [{
            label: 'Functional Assessment',
            value: '1',
            img: '../../../../assets/icons/cwsn/Functional-Grey.svg'
          }, {
            label: 'Annual Evalution',
            value: '2',
            img: '../../../../assets/icons/cwsn/Annual Evaluation-Grey.svg'
          }, {
            label: 'Goal Setting for Next Academic Year',
            value: '3',
            img: '../../../../assets/icons/cwsn/Goal-Grey.svg'
          }];
        }

        return _createClass(CwsnMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            console.log('title', this.title, 'mode', this.mode); // item: JSON.stringify(item)
            // this.route.queryParams.subscribe(data => {
            //   this.allStudentData = JSON.parse(data.item);
            //   console.log('queryParams allStudentData', this.allStudentData);
            // })

            this.ionicstorage.getData('getUserDetailsCwsn').then(function (userData) {
              console.log('userData', userData);
              _this.usertype = userData;
              console.log('usertype', _this.usertype);
            }); // this.checkLocalDB();
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(val) {
            if (val == 1) {
              this.router.navigate(['/tabs/cwsn/ca-school-list'], {
                queryParams: {
                  'mode': this.mode,
                  'title': this.title
                }
              });
            } else {
              this.alertService.warning("Will be enable soon");
            } // this.router.navigate(['/tabs/cwsn/ca-cluster'],{ queryParams: { title: this.title,mode: this.mode } })

          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            // this.router.navigate(['/tabs/cwsn-menu'], { queryParams: { 'mode': this.mode, 'title': this.title} })
            this.router.navigate(['/tabs/cwsn/dashboard']);
          }
        }]);
      }();

      _CwsnMenuPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _CwsnMenuPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cwsn-menu',
        template: _raw_loader_cwsn_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cwsn_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CwsnMenuPage);
      /***/
    },

    /***/
    18436:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-menu/cwsn-menu.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  height: 75px;\n  margin: 25px 0px;\n  border-radius: 10px;\n  padding: 20px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 1.1rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 50px;\n  height: 150%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-left: 6px solid #818181;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-left: 6px solid #818181;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-left: 6px solid #818181;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-left: 6px solid var(--primary-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #6261cb;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQU1JO0VBQ0UsZUFBQTtBQUhOOztBQWNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUFYTjs7QUFjTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVpSOztBQWNRO0VBQ0UsZUFBQTtBQVpWOztBQWVRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFiVjs7QUFpQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWZSOztBQWlCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBZlY7O0FBb0JJO0VBQ0UsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQW5CTjs7QUFzQkk7RUFFRSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFyQk47O0FBd0JJO0VBRUUsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBdkJOOztBQTBCSTtFQUVFLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQXpCTjs7QUFpQ0k7RUFDRSxjQUFBO0FBL0JOOztBQWtDSTtFQUNFLGNBQUE7QUFoQ047O0FBbUNJO0VBQ0UsbUNBQUE7QUFqQ047O0FBb0NJO0VBQ0UsZ0NBQUE7QUFsQ047O0FBNkNJO0VBR0UsVUFBQTtFQUNBLGtCQUFBO0FBN0NOOztBQWdESTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUE5Q047O0FBZ0RNO0VBQ0UsOENBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTlDUjs7QUFnRFE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQTlDVjs7QUFtREk7RUFDRSxnQkFBQTtBQWpETjs7QUFzREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbkRGOztBQXVEQTtFQUNFLDRDQUFBO0FBcERGOztBQXVEQTtFQUNFLDhDQUFBO0FBcERGIiwiZmlsZSI6ImN3c24tbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbiViYXNlLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxufVxyXG5cclxuLmhlYWRlci1kYXRhIHtcclxuICBAZXh0ZW5kICViYXNlLWxheW91dDtcclxuXHJcbiAgLnN5bmMtaWNvbiB7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuXHJcbiAgLmNhcmRzIHtcclxuXHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLmNhcmQtZGVzaWduIHtcclxuICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICBtYXJnaW46IDI1cHggMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG5cclxuICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAudG90YWxDb3VudExhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY2hvb2xuYW1lcyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWFnZS1vdXRlciB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTAlO1xyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkICM2MjYxY2I7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzgxODE4MTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzA0YzAzZDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjODE4MTgxO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDMpIHtcclxuICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM4MTgxODE7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkICMwMEEwQTA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmNhcmQtYWxpZ246bGFzdC1jaGlsZHtcclxuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoNCl7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMzsgfVxyXG5cclxuICAgIC50b3RhbFNjaCB7XHJcbiAgICAgIGNvbG9yOiAjNjI2MWNiO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbFN0dSB7XHJcbiAgICAgIGNvbG9yOiAjMDRjMDNkO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbFVuc2NyZWVuU3R1IHtcclxuICAgICAgY29sb3I6IHZhcigtLXVuc2NyZWVuZWQtdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld2x5U3R1IHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLm5ld2x5U3R1eyAgY29sb3I6ICMwMEEwQTA7ICB9XHJcbiAgICAvLyAubmV3bHlTdHV7ICBjb2xvcjogIzhCNjZCMzsgIH1cclxuICB9XHJcblxyXG4gIC8vIHNlYXJjaCByZXN1bHRcclxuICAuc2VhcmNoLXJlc3VsdCB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDEwcHg7XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIC8vIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAvLyBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWRhdGEge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG5cclxuICAgICAgLnNjaG9vbC1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgIC5zY2hvb2wtbGlzdF9faWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWRhdGE6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YU5vdEZvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5zY3JlZW5lZCB7XHJcbiAgY29sb3I6IHZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51blNjcmVlbmVkIHtcclxuICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    11591:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/cwsn-menu/cwsn-menu.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Menu</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\" *ngFor=\"let menuItem of phase2MenuList;let i = index\">\r\n      <!-- {{mode}} : mode {{menuItem.value}} : menuItem -->\r\n    <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"navigateTo(menuItem.value)\" [ngStyle]=\"{'background': menuItem.value == '1' ? 'var(--seconday-color-change)' : '#E9E9E9'}\" >\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\" [ngStyle]=\"{'background': menuItem.value == '1' ? 'var(--seconday-color-change)' : '#E9E9E9', 'color': (mode == 'DarkMode' && menuItem.value != '1') ? '#4c4a4a' : (mode == 'DarkMode' && menuItem.value == '1') ? 'var(--primary-text-color)' : '#4c4a4a'}\">{{menuItem.label}} </ion-label>\r\n          </div>\r\n          <div class=\"image-outer\">\r\n            <img class=\"img\" src={{menuItem.img}} /> \r\n          </div>\r\n        </ion-card>\r\n\r\n        <!-- <ion-card class=\"card-design ion-card-margin-top-bottom\" style=\"background-color: #E9E9E9\">\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\">Annual Evalution</ion-label>\r\n          </div>\r\n          <div class=\"image-outer\">\r\n             <img class=\"img\" src=\"../../../../assets/icons/cwsn/Annual Evaluation-Grey.svg\" /> \r\n          </div>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"card-design ion-card-margin-top-bottom\" style=\"background-color: #E9E9E9\">\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\">Goal Setting for Next Academic Year </ion-label>\r\n          </div>\r\n          <div class=\"image-outer\">\r\n            <img class=\"img\" src=\"../../../../assets/icons/cwsn/Goal-Grey.svg\" /> \r\n          </div>\r\n        </ion-card> -->\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_cwsn-menu_cwsn-menu_module_ts-es5.js.map