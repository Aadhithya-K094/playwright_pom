(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_kgbv_kgbv-hostel_kgbv-hostel_module_ts"], {
    /***/
    33793:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/kgbv/kgbv-hostel/kgbv-hostel-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KgbvHostelPageRoutingModule": function KgbvHostelPageRoutingModule() {
          return (
            /* binding */
            _KgbvHostelPageRoutingModule
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


      var _kgbv_hostel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kgbv-hostel.page */
      16793);

      var routes = [{
        path: '',
        component: _kgbv_hostel_page__WEBPACK_IMPORTED_MODULE_0__.KgbvHostelPage
      }];

      var _KgbvHostelPageRoutingModule = /*#__PURE__*/_createClass(function KgbvHostelPageRoutingModule() {
        _classCallCheck(this, KgbvHostelPageRoutingModule);
      });

      _KgbvHostelPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _KgbvHostelPageRoutingModule);
      /***/
    },

    /***/
    29874:
    /*!**************************************************************!*\
      !*** ./src/app/pages/kgbv/kgbv-hostel/kgbv-hostel.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KgbvHostelPageModule": function KgbvHostelPageModule() {
          return (
            /* binding */
            _KgbvHostelPageModule
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


      var _kgbv_hostel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kgbv-hostel-routing.module */
      33793);
      /* harmony import */


      var _kgbv_hostel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kgbv-hostel.page */
      16793);

      var _KgbvHostelPageModule = /*#__PURE__*/_createClass(function KgbvHostelPageModule() {
        _classCallCheck(this, KgbvHostelPageModule);
      });

      _KgbvHostelPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _kgbv_hostel_routing_module__WEBPACK_IMPORTED_MODULE_0__.KgbvHostelPageRoutingModule],
        declarations: [_kgbv_hostel_page__WEBPACK_IMPORTED_MODULE_1__.KgbvHostelPage]
      })], _KgbvHostelPageModule);
      /***/
    },

    /***/
    16793:
    /*!************************************************************!*\
      !*** ./src/app/pages/kgbv/kgbv-hostel/kgbv-hostel.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KgbvHostelPage": function KgbvHostelPage() {
          return (
            /* binding */
            _KgbvHostelPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_kgbv_hostel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./kgbv-hostel.page.html */
      22602);
      /* harmony import */


      var _kgbv_hostel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kgbv-hostel.page.scss */
      32703);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _KgbvHostelPage = /*#__PURE__*/function () {
        function KgbvHostelPage(router) {
          _classCallCheck(this, KgbvHostelPage);

          this.router = router;
          this.menuLists = [];
        }

        return _createClass(KgbvHostelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getMenuList();
          }
        }, {
          key: "getMenuList",
          value: function getMenuList() {
            this.menuLists = [{
              menu: "Student Attendance",
              image: "../../../../assets/icons/student.svg",
              mod1: 71,
              url: '/tabs/hostel-student-attendance'
            }, {
              menu: "Staff Attendance",
              image: "../../../../assets/icons/teacher.svg",
              mod1: 72,
              url: "/tabs/hostel-staff-attendance"
            }];
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "navigatePage",
          value: function navigatePage(item) {
            this.router.navigate([item.url]);
          }
        }]);
      }();

      _KgbvHostelPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _KgbvHostelPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-kgbv-hostel',
        template: _raw_loader_kgbv_hostel_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_kgbv_hostel_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KgbvHostelPage);
      /***/
    },

    /***/
    32703:
    /*!**************************************************************!*\
      !*** ./src/app/pages/kgbv/kgbv-hostel/kgbv-hostel.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".square-containers {\n  padding: 10px;\n}\n\n.square {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square-containers .square .content {\n  width: 98%;\n  height: calc(100% - 16px);\n  color: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.square-containers .square .content .labeltext {\n  font-size: 22px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.square-containers .square .content p {\n  color: #fff;\n  padding: 2px;\n}\n\n.card-menu {\n  min-height: 110px;\n  text-align: center;\n  margin: auto;\n  border-radius: 10px;\n}\n\n.header {\n  padding-bottom: 15px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtnYnYtaG9zdGVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFFO0VBQ0csVUFBQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURFO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSU47O0FBRkU7RUFHRyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0w7O0FBQUU7RUFDRSxvQkFBQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdOIiwiZmlsZSI6ImtnYnYtaG9zdGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmUtY29udGFpbmVycyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuc3F1YXJlIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuc3F1YXJlLWNvbnRhaW5lcnMgIC5zcXVhcmUgLmNvbnRlbnQge1xyXG4gICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTZweCk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc3F1YXJlLWNvbnRhaW5lcnMgLnNxdWFyZSAuY29udGVudCAubGFiZWx0ZXh0XHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNxdWFyZS1jb250YWluZXJzIC5zcXVhcmUgLmNvbnRlbnQgcHtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuICAuY2FyZC1tZW51XHJcbiAge1xyXG4gICAgLy8gIGhlaWdodDogMTEwcHg7XHJcbiAgICAgbWluLWhlaWdodDogMTEwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    22602:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/kgbv/kgbv-hostel/kgbv-hostel.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goHome()\">\r\n      <ion-icon name=\"arrow-back\" >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\" style=\"margin-left: 5px;\">HOSTEL</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row class=\"square-containers\">\r\n    <ion-col size=\"4\" *ngFor=\"let item of menuLists\" (click)=\"navigatePage(item)\">\r\n      <ion-card class=\"card-menu\">\r\n        <div class=\"ion-margin-top ion-margin-bottom\" style=\"padding-left: 5px;\r\n        padding-right: 5px;\"> \r\n          <img [src]=\"item.image\" /><br />\r\n          <span style=\"font-weight: 500;\">{{item.menu}}</span>\r\n        </div>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_kgbv_kgbv-hostel_kgbv-hostel_module_ts-es5.js.map