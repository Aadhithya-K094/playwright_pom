(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_section-list_section-list_module_ts"], {
    /***/
    41471:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/ndd/section-list/section-list-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SectionListPageRoutingModule": function SectionListPageRoutingModule() {
          return (
            /* binding */
            _SectionListPageRoutingModule
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


      var _section_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./section-list.page */
      14042);

      var routes = [{
        path: '',
        component: _section_list_page__WEBPACK_IMPORTED_MODULE_0__.SectionListPage
      }];

      var _SectionListPageRoutingModule = /*#__PURE__*/_createClass(function SectionListPageRoutingModule() {
        _classCallCheck(this, SectionListPageRoutingModule);
      });

      _SectionListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SectionListPageRoutingModule);
      /***/
    },

    /***/
    24338:
    /*!***************************************************************!*\
      !*** ./src/app/pages/ndd/section-list/section-list.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SectionListPageModule": function SectionListPageModule() {
          return (
            /* binding */
            _SectionListPageModule
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


      var _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./section-list-routing.module */
      41471);
      /* harmony import */


      var _section_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./section-list.page */
      14042);

      var _SectionListPageModule = /*#__PURE__*/_createClass(function SectionListPageModule() {
        _classCallCheck(this, SectionListPageModule);
      });

      _SectionListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SectionListPageRoutingModule],
        declarations: [_section_list_page__WEBPACK_IMPORTED_MODULE_1__.SectionListPage]
      })], _SectionListPageModule);
      /***/
    },

    /***/
    14042:
    /*!*************************************************************!*\
      !*** ./src/app/pages/ndd/section-list/section-list.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SectionListPage": function SectionListPage() {
          return (
            /* binding */
            _SectionListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./section-list.page.html */
      90525);
      /* harmony import */


      var _section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./section-list.page.scss */
      92657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SectionListPage = /*#__PURE__*/function () {
        function SectionListPage(router, usersessionService, route, pmoaService) {
          _classCallCheck(this, SectionListPage);

          this.router = router;
          this.usersessionService = usersessionService;
          this.route = route;
          this.pmoaService = pmoaService;
        }

        return _createClass(SectionListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.routeData = this.route.snapshot;
            this.bloack_id = this.routeData.queryParams.id;
            this.schol_id = this.routeData.queryParams.school_id;
            this.schol_name = this.routeData.queryParams.school_name;
            this["class"] = this.routeData.queryParams["class"];
            this.section = this.routeData.queryParams.section;
            this.UserName = this.usersessionService.emis_username();
            this.getstudentlist();
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/ndd/class-list'], {
              queryParams: {
                id: this.bloack_id,
                school_id: this.schol_id,
                school_name: this.schol_name,
                "class": this["class"],
                section: this.section
              }
            });
          }
        }, {
          key: "mainpage",
          value: function mainpage(sec) {
            this.router.navigate(['/tabs/ndd/ndd-tablet'], {
              queryParams: {
                id: this.bloack_id,
                school_id: this.schol_id,
                school_name: this.schol_name,
                "class": this["class"],
                section: sec
              }
            });
          }
        }, {
          key: "getstudentlist",
          value: function getstudentlist() {
            var _this = this;

            this.section = [];
            this.pmoaService.studentlist(this.schol_id).subscribe(function (res) {
              _this.stutlist = res.result;

              var filterList = _this.stutlist.filter(function (y) {
                return y["class"] == _this["class"];
              });

              _this.section = _toConsumableArray(new Set(filterList.map(function (item) {
                return item.sections;
              })));

              _this.section.sort(function (a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
              }); // this.class= this.stutlist[i].class    
              // this.section= this.stutlist[i].sections    

            });
          }
        }]);
      }();

      _SectionListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService
        }];
      };

      _SectionListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-section-list',
        template: _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SectionListPage);
      /***/
    },

    /***/
    92657:
    /*!***************************************************************!*\
      !*** ./src/app/pages/ndd/section-list/section-list.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classNo {\n  font-size: 14px;\n  color: #767676;\n  font-weight: 500;\n}\n\n.classText {\n  font-size: 15px;\n  font-weight: 600;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6InNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNsYXNzTm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNsYXNzVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjpibGFja1xyXG59Il19 */";
      /***/
    },

    /***/
    90525:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/section-list/section-list.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Section</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"maindiv\">\r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let sec of section\">\r\n          <ion-card class=\"classcard\" (click)=\"mainpage(sec)\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">{{sec}}</ion-label><br>\r\n              <ion-label  class=\"classNo\">Section</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ndd_section-list_section-list_module_ts-es5.js.map