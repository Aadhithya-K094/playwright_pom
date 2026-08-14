(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_itk-center-dashboard_itk-center-dashboard_module_ts"], {
    /***/
    27683:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/itk-center-dashboard/itk-center-dashboard-routing.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItkCenterDashboardPageRoutingModule": function ItkCenterDashboardPageRoutingModule() {
          return (
            /* binding */
            _ItkCenterDashboardPageRoutingModule
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


      var _itk_center_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./itk-center-dashboard.page */
      17128);

      var routes = [{
        path: '',
        component: _itk_center_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.ItkCenterDashboardPage
      }];

      var _ItkCenterDashboardPageRoutingModule = /*#__PURE__*/_createClass(function ItkCenterDashboardPageRoutingModule() {
        _classCallCheck(this, ItkCenterDashboardPageRoutingModule);
      });

      _ItkCenterDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ItkCenterDashboardPageRoutingModule);
      /***/
    },

    /***/
    56059:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/itk-center-dashboard/itk-center-dashboard.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItkCenterDashboardPageModule": function ItkCenterDashboardPageModule() {
          return (
            /* binding */
            _ItkCenterDashboardPageModule
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


      var _itk_center_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./itk-center-dashboard-routing.module */
      27683);
      /* harmony import */


      var _itk_center_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./itk-center-dashboard.page */
      17128);

      var _ItkCenterDashboardPageModule = /*#__PURE__*/_createClass(function ItkCenterDashboardPageModule() {
        _classCallCheck(this, ItkCenterDashboardPageModule);
      });

      _ItkCenterDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _itk_center_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItkCenterDashboardPageRoutingModule],
        declarations: [_itk_center_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.ItkCenterDashboardPage]
      })], _ItkCenterDashboardPageModule);
      /***/
    },

    /***/
    17128:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/itk-center-dashboard/itk-center-dashboard.page.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItkCenterDashboardPage": function ItkCenterDashboardPage() {
          return (
            /* binding */
            _ItkCenterDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_itk_center_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./itk-center-dashboard.page.html */
      14060);
      /* harmony import */


      var _itk_center_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./itk-center-dashboard.page.scss */
      77894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _ItkCenterDashboardPage = /*#__PURE__*/function () {
        function ItkCenterDashboardPage(usersessionService, router) {
          _classCallCheck(this, ItkCenterDashboardPage);

          this.usersessionService = usersessionService;
          this.router = router;
          this.menuLists = [];
          this.sessionModId = this.usersessionService.mod1();
        }

        return _createClass(ItkCenterDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getMenuList();
          }
        }, {
          key: "getMenuList",
          value: function getMenuList() {
            this.menuLists = [{
              menu: "ITK Center Visit",
              image: 'assets/icons/Inspection2.svg',
              mod1: 29,
              url: '/tabs/teacher/volunteer-search'
            }, {
              menu: 'ITK Center Visit Details',
              image: 'assets/icons/Inspection2.svg',
              mod1: 29,
              url: '/tabs/my-inspections2'
            } // {
            //   menu:  'ITK Working Status',
            //   image: 'assets/icons/itk-working-status/lecture.svg',
            //   mod1: 29,
            //   url: '/tabs/search-working-volunteer'
            // }, 
            // {
            //   menu: 'ITK Volunteer List',
            //   image:'assets/icons/itk-working-status/itk-volunteers.svg',
            //   mod1: 29,
            //   url: '/tabs/volunteer-list'
            // },   
            ];

            if (this.sessionModId) {
              var splitedModValue = this.sessionModId.split(",");
              var showModuleLists = new Array();
              this.menuLists.forEach(function (menuvalue) {
                splitedModValue.forEach(function (modvalue) {
                  if (menuvalue.mod1 == +modvalue) {
                    showModuleLists.push(menuvalue);
                  }
                });
              });
              this.menuLists = showModuleLists;
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/home"]);
          }
        }, {
          key: "navigatePage",
          value: function navigatePage(item, url, mod) {
            this.router.navigate([url]);
          }
        }]);
      }();

      _ItkCenterDashboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _ItkCenterDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-itk-center-dashboard',
        template: _raw_loader_itk_center_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_itk_center_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ItkCenterDashboardPage);
      /***/
    },

    /***/
    77894:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/itk-center-dashboard/itk-center-dashboard.page.scss ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  box-shadow: none !important;\n}\n\nion-grid {\n  margin: 3%;\n  margin-top: 0% !important;\n}\n\n.card-widget {\n  width: 100%;\n  margin: auto;\n  margin-top: 5%;\n  padding: 1%;\n  background-color: #e8f1f8;\n}\n\n.card-title {\n  width: 90%;\n  display: inline-block;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n\n.card-subtitle {\n  color: #000000;\n  font-size: 13px;\n}\n\n.icon1 {\n  Zoom: 2;\n  text-align: end;\n  color: #2176b9;\n}\n\n.border {\n  border: #9a9fcd 1px solid;\n  margin-top: 3%;\n  width: 100%;\n}\n\n.back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\n.square-container .square .content .labeltext {\n  font-size: 22px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.card-menu {\n  height: 110px;\n  text-align: center;\n  margin: auto;\n  font-weight: 500;\n  padding: 1px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ay1jZW50ZXItZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBSUM7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUYiLCJmaWxlIjoiaXRrLWNlbnRlci1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBtYXJnaW46IDMlO1xyXG4gIG1hcmdpbi10b3A6IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXdpZGdldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYxZjg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmljb24xIHtcclxuICBab29tOiAyO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBjb2xvcjogIzIxNzZiOTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAjOWE5ZmNkIDFweCBzb2xpZDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiAuYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnNxdWFyZS1jb250YWluZXIgLnNxdWFyZSAuY29udGVudCAubGFiZWx0ZXh0IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLW1lbnUge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    14060:
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/itk-center-dashboard/itk-center-dashboard.page.html ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n\t\t\t<ion-button>\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n    <ion-title>ITK Center Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> ITK Center Dashboard </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"graybackgrond\"> \r\n  <div style=\"height: 100%;\">\r\n    <ion-grid style=\"padding: 10px\">\r\n      <ion-row class=\"square-container\">\r\n        <ion-col size=\"6\" *ngFor=\"let item of menuLists\" (click)=\"navigatePage(item,item.url,item.mod1)\">\r\n          <ion-card class=\"card-menu\">\r\n            <div class=\"ion-margin-top ion-margin-bottom\">\r\n              <img [src]=\"item.image\" /><br />\r\n              <span style=\"font-weight: 500;\">{{item.menu}}</span>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_itk-center-dashboard_itk-center-dashboard_module_ts-es5.js.map