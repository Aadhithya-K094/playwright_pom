(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_class-list_class-list_module_ts"], {
    /***/
    37298:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ndd/class-list/class-list-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListPageRoutingModule": function ClassListPageRoutingModule() {
          return (
            /* binding */
            _ClassListPageRoutingModule
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


      var _class_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./class-list.page */
      72901);

      var routes = [{
        path: '',
        component: _class_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassListPage
      }];

      var _ClassListPageRoutingModule = /*#__PURE__*/_createClass(function ClassListPageRoutingModule() {
        _classCallCheck(this, ClassListPageRoutingModule);
      });

      _ClassListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClassListPageRoutingModule);
      /***/
    },

    /***/
    76435:
    /*!***********************************************************!*\
      !*** ./src/app/pages/ndd/class-list/class-list.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListPageModule": function ClassListPageModule() {
          return (
            /* binding */
            _ClassListPageModule
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


      var _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./class-list-routing.module */
      37298);
      /* harmony import */


      var _class_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./class-list.page */
      72901);

      var _ClassListPageModule = /*#__PURE__*/_createClass(function ClassListPageModule() {
        _classCallCheck(this, ClassListPageModule);
      });

      _ClassListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListPageRoutingModule],
        declarations: [_class_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassListPage]
      })], _ClassListPageModule);
      /***/
    },

    /***/
    72901:
    /*!*********************************************************!*\
      !*** ./src/app/pages/ndd/class-list/class-list.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListPage": function ClassListPage() {
          return (
            /* binding */
            _ClassListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./class-list.page.html */
      38024);
      /* harmony import */


      var _class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./class-list.page.scss */
      84498);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _ClassListPage = /*#__PURE__*/function () {
        function ClassListPage(router, usersessionService, pmoaService, route) {
          _classCallCheck(this, ClassListPage);

          this.router = router;
          this.usersessionService = usersessionService;
          this.pmoaService = pmoaService;
          this.route = route;
          this["class"] = [];
        }

        return _createClass(ClassListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.routeData = this.route.snapshot;
            this.bloack_id = this.routeData.queryParams.id;
            this.schol_id = this.routeData.queryParams.school_id;
            this.schol_name = this.routeData.queryParams.school_name;
            this.UserName = this.usersessionService.emis_username();
            this.getapi();
            this.getstudentlist();
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/ndd/school-list'], {
              queryParams: {
                id: this.bloack_id,
                school_id: this.schol_id,
                school_name: this.schol_name
              }
            });
          }
        }, {
          key: "sectionSelected",
          value: function sectionSelected(cls) {
            this.router.navigate(['/tabs/ndd/section-list'], {
              queryParams: {
                id: this.bloack_id,
                school_id: this.schol_id,
                school_name: this.schol_name,
                "class": cls,
                section: this.section
              }
            });
          }
        }, {
          key: "getapi",
          value: function getapi() {
            var _this = this;

            this.pmoaService.getcount(this.schol_id).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      this.schoolcount = res.result;
                      this.count = this.schoolcount.TotStuCount[0].Count;
                      this.RcvdSchoolCount = this.schoolcount.TotTbltRcvdCount[0].Count;
                      this.NotRcvdSchlCount = this.schoolcount.TotTbltNotRcvdCount[0].Count;

                    case 1:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "getstudentlist",
          value: function getstudentlist() {
            var _this2 = this;

            this["class"] = [];
            this.section = [];
            this.pmoaService.studentlist(this.schol_id).subscribe(function (res) {
              _this2.stutlist = res.result;
              _this2["class"] = _toConsumableArray(new Set(_this2.stutlist.map(function (item) {
                return item["class"];
              })));

              _this2["class"].sort(function (a, b) {
                return a - b;
              });

              _this2.section = _toConsumableArray(new Set(_this2.stutlist.map(function (item) {
                return item.sections;
              }))); // this.class= this.stutlist[i].class    
              // this.section= this.stutlist[i].sections    
            });
          }
        }]);
      }();

      _ClassListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }];
      };

      _ClassListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-class-list',
        template: _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClassListPage);
      /***/
    },

    /***/
    84498:
    /*!***********************************************************!*\
      !*** ./src/app/pages/ndd/class-list/class-list.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classText {\n  font-size: 15px;\n  font-weight: 600;\n  color: black;\n}\n\n.classNo {\n  font-size: 14px;\n  color: #767676;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSiIsImZpbGUiOiJjbGFzcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc2NhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7IFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2xhc3NUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLmNsYXNzTm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    38024:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/class-list/class-list.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Class List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-content class=\"graybackgrond\">\r\n    <div>\r\n      <!-- *ngFor=\"let item of StudentsCounts\" -->\r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #D9688B;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{count}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Students </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../../assets/icons/Total_Students.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #E9A069;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{RcvdSchoolCount}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Received </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <!-- <img src=\"../../../../../assets/icons/Screened_Students.svg\"> -->\r\n            <img src=\"../../../../../assets/icons/Received1.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #439DE3;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{NotRcvdSchlCount}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Not Received</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n          <img src=\"../../../../../assets/icons/Not_Received1.svg\">\r\n            <!-- <img src=\"../../../../../assets/icons/Unscreened_Students.svg\"> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n    </div>\r\n\r\n    <div class=\"maindiv\">\r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\"  *ngFor=\"let cla of class\">\r\n          <ion-card class=\"classcard\" (click)=\"sectionSelected(cla)\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">{{  cla == '1' ? 'I' : cla == '2' ? 'II' : cla == '3' ? 'III' :cla == '4' ? 'VI' : cla == '5' ? 'V' : cla == '6' ? 'VI' : cla == '7' ? 'VII' : cla == '8' ? 'VIII' : cla == '9' ? 'IX' : cla == '10' ? 'X' : cla == '11' ? 'XI' : cla == '12' ? 'XII' : ''}}</ion-label><br>\r\n              <ion-label  class=\"classNo\">Std</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ndd_class-list_class-list_module_ts-es5.js.map