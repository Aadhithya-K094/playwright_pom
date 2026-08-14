(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_domain_domain_module_ts"], {
    /***/
    25867:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/domain/domain-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DomainPageRoutingModule": function DomainPageRoutingModule() {
          return (
            /* binding */
            _DomainPageRoutingModule
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


      var _domain_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./domain.page */
      8048);

      var routes = [{
        path: '',
        component: _domain_page__WEBPACK_IMPORTED_MODULE_0__.DomainPage
      }];

      var _DomainPageRoutingModule = /*#__PURE__*/_createClass(function DomainPageRoutingModule() {
        _classCallCheck(this, DomainPageRoutingModule);
      });

      _DomainPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DomainPageRoutingModule);
      /***/
    },

    /***/
    72757:
    /*!********************************************************!*\
      !*** ./src/app/pages/stem_new/domain/domain.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DomainPageModule": function DomainPageModule() {
          return (
            /* binding */
            _DomainPageModule
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


      var _domain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./domain-routing.module */
      25867);
      /* harmony import */


      var _domain_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./domain.page */
      8048);

      var _DomainPageModule = /*#__PURE__*/_createClass(function DomainPageModule() {
        _classCallCheck(this, DomainPageModule);
      });

      _DomainPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _domain_routing_module__WEBPACK_IMPORTED_MODULE_0__.DomainPageRoutingModule],
        declarations: [_domain_page__WEBPACK_IMPORTED_MODULE_1__.DomainPage]
      })], _DomainPageModule);
      /***/
    },

    /***/
    8048:
    /*!******************************************************!*\
      !*** ./src/app/pages/stem_new/domain/domain.page.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DomainPage": function DomainPage() {
          return (
            /* binding */
            _DomainPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_domain_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./domain.page.html */
      89188);
      /* harmony import */


      var _domain_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./domain.page.scss */
      30062);
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


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _DomainPage = /*#__PURE__*/function () {
        function DomainPage(router, alertService, route, userService) {
          _classCallCheck(this, DomainPage);

          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.userService = userService;
          this.array = [{
            icon: "../../../../assets/images/air_matters.png",
            name: "Air and Matter",
            value: "1"
          }, {
            icon: "../../../../assets/images/chemical_reaction.png",
            name: "Chemical reaction",
            value: "2"
          }, {
            icon: "../../../../assets/images/light_bulb.png",
            name: "Light",
            value: "3"
          }, {
            icon: "../../../../assets/images/Maths.png",
            name: "Mathematics",
            value: "4"
          }, // { 
          //   icon : "../../../../assets/images/Maths.png",
          //   name: "Mathematics 2",
          //   value: "5"
          // },
          {
            icon: "../../../../assets/images/plant_animal.png",
            name: "Plant and Animal Cell",
            value: "6"
          }];
        }

        return _createClass(DomainPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.name = this.routeData.queryParams.name; // this.onTheam()
          }
        }, {
          key: "onTheam",
          value: function onTheam() {
            this.userService.getTheam().subscribe(function (response) {});
          }
        }, {
          key: "onNext",
          value: function onNext(value, name) {
            if (this.name == 'experiments') {
              this.router.navigate(['/tabs/experiments'], {
                queryParams: {
                  "value": value,
                  "name": name
                }
              });
            }

            if (this.name == 'feed') {
              this.router.navigate(['/tabs/feed'], {
                queryParams: {
                  "value": value,
                  "name": name
                }
              });
            }
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/experiment-dashboard']);
          }
        }]);
      }();

      _DomainPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }];
      };

      _DomainPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-domain',
        template: _raw_loader_domain_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_domain_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DomainPage);
      /***/
    },

    /***/
    30062:
    /*!********************************************************!*\
      !*** ./src/app/pages/stem_new/domain/domain.page.scss ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-image {\n  background: url(\"/assets/images/Rectangle.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 2100%;\n}\n\n.circle {\n  height: 75px;\n  padding: 10%;\n  padding-left: 15% !important;\n  padding-top: 15% !important;\n}\n\n.circle1 {\n  padding: 10%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUdBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6ImRvbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMTAwJTtcclxuICB9IFxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM2RTUzRkY7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZTEge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICJdfQ== */";
      /***/
    },

    /***/
    89188:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/domain/domain.page.html ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-row class=\"header-image\">\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"font-size: x-large;\">\r\n           <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"padding-left:5%;font-size: large;color: white;\">\r\n          Theme \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let item of array\">\r\n        <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n         <img src={{item.icon}} /> \r\n        </ion-col>\r\n        <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\"\r\n        (click)=\"onNext(item.value,item.name)\">  \r\n         {{item.name}}  \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_domain_domain_module_ts-es5.js.map