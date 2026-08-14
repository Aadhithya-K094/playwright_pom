(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_experiment-phase_experiment-phase_module_ts"], {
    /***/
    2082:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase-routing.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPhasePageRoutingModule": function ExperimentPhasePageRoutingModule() {
          return (
            /* binding */
            _ExperimentPhasePageRoutingModule
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


      var _experiment_phase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-phase.page */
      21185);

      var routes = [{
        path: '',
        component: _experiment_phase_page__WEBPACK_IMPORTED_MODULE_0__.ExperimentPhasePage
      }];

      var _ExperimentPhasePageRoutingModule = /*#__PURE__*/_createClass(function ExperimentPhasePageRoutingModule() {
        _classCallCheck(this, ExperimentPhasePageRoutingModule);
      });

      _ExperimentPhasePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExperimentPhasePageRoutingModule);
      /***/
    },

    /***/
    59230:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPhasePageModule": function ExperimentPhasePageModule() {
          return (
            /* binding */
            _ExperimentPhasePageModule
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


      var _experiment_phase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-phase-routing.module */
      2082);
      /* harmony import */


      var _experiment_phase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-phase.page */
      21185);

      var _ExperimentPhasePageModule = /*#__PURE__*/_createClass(function ExperimentPhasePageModule() {
        _classCallCheck(this, ExperimentPhasePageModule);
      });

      _ExperimentPhasePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _experiment_phase_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperimentPhasePageRoutingModule],
        declarations: [_experiment_phase_page__WEBPACK_IMPORTED_MODULE_1__.ExperimentPhasePage]
      })], _ExperimentPhasePageModule);
      /***/
    },

    /***/
    21185:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.page.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPhasePage": function ExperimentPhasePage() {
          return (
            /* binding */
            _ExperimentPhasePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_experiment_phase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./experiment-phase.page.html */
      81886);
      /* harmony import */


      var _experiment_phase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-phase.page.scss */
      49748);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);

      var _ExperimentPhasePage = /*#__PURE__*/function () {
        function ExperimentPhasePage(router, alertService, route, userService, http, domsaintizer, fileTransfer, file, modalCtrl, fileOpener, loading) {
          _classCallCheck(this, ExperimentPhasePage);

          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.userService = userService;
          this.http = http;
          this.domsaintizer = domsaintizer;
          this.fileTransfer = fileTransfer;
          this.file = file;
          this.modalCtrl = modalCtrl;
          this.fileOpener = fileOpener;
          this.loading = loading;
          this.headerName = '';
          this.array = [{
            icon: "../../../../assets/images/physics.png",
            name: "Physics",
            value: "1"
          }, {
            icon: "../../../../assets/images/number_system.png",
            name: "Mathematics",
            value: "2"
          }];
          this.array1 = [{
            icon: "../../../../assets/images/measurement.png",
            name: "Measurement",
            value: "1",
            pdf: "https://drive.google.com/file/d/1l9AkstXKscQxI-oBh_B3FMWrDuOjquIf/view?usp=drive_link"
          }, {
            icon: "../../../../assets/images/force_and_motion.png",
            name: "Force and Motion",
            value: "2",
            pdf: "https://drive.google.com/file/d/1cZJdTWSDGMqFnkrFTZtz0b7bKRYxbPzY/view?usp=drive_link"
          }, {
            icon: "../../../../assets/images/pressure.png",
            name: "Pressure",
            value: "3",
            pdf: "https://drive.google.com/file/d/1sxqIp_6ncyugVO9nEZ6Qyt5PtT_3SY2U/view?usp=drive_link"
          }, {
            icon: "../../../../assets/images/friction.png",
            name: "Friction",
            value: "4",
            pdf: "https://drive.google.com/file/d/1W2ne-NIh0sRixQMnF4-Axiy41rhWdDSP/view?usp=drive_link"
          }];
          this.array2 = [{
            icon: "../../../../assets/images/measurement.png",
            name: "Measurements",
            value: "1",
            pdf: ""
          }, {
            icon: "../../../../assets/images/number_system.png",
            name: "Number System ",
            value: "2",
            pdf: ""
          }, {
            icon: "../../../../assets/images/real_life_mathematics.png",
            name: "Real Life Mathematics",
            value: "3",
            pdf: ""
          }, {
            icon: "../../../../assets/images/area.png",
            name: "Area",
            value: "4",
            pdf: ""
          }];
        }

        return _createClass(ExperimentPhasePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.headerName = 'Theme';
            this.activeMenu = true;
            this.routeData = this.route.snapshot;
            this.name = this.routeData.queryParams.name;
            console.log(this.routeData.queryParams.expermentId, "this.routeData.queryParams.expermentId");

            if (this.routeData.queryParams.expermentId) {
              this.expermentId = this.routeData.queryParams.expermentId;
              console.log(this.expermentId);

              if (this.expermentId == 1) {
                this.array1Active = true;
                this.array2Active = false;
                this.activeMenu = false;
                this.headerName = 'Physics';
              }

              if (this.expermentId == 2) {
                this.array1Active = false;
                this.array2Active = true;
                this.activeMenu = false;
                this.headerName = 'Mathematics';
              }
            }
          }
        }, {
          key: "onNextMenu",
          value: function onNextMenu(value) {
            if (value == 1) {
              this.array1Active = true;
              this.array2Active = false;
              this.activeMenu = false;
              this.headerName = 'Physics';
            }

            if (value == 2) {
              this.array1Active = false;
              this.array2Active = true;
              this.activeMenu = false;
              this.headerName = 'Mathematics';
            }
          }
        }, {
          key: "onNextPage",
          value: function onNextPage(value, name, id) {
            this.router.navigate(['/tabs/experiment-pdfviewer'], {
              queryParams: {
                "value": value,
                "name": name,
                expermentId: id
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.array1Active = false;
            this.array2Active = false;
            this.activeMenu = true;
            this.router.navigate(['/tabs/experiment-dashboard'], {
              queryParams: {
                "name": "experiments"
              }
            });
          }
        }, {
          key: "navigateBackpage",
          value: function navigateBackpage() {
            this.array1Active = false;
            this.array2Active = false;
            this.activeMenu = true;
          }
        }]);
      }();

      _ExperimentPhasePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }];
      };

      _ExperimentPhasePage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-experiment-phase',
        template: _raw_loader_experiment_phase_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_experiment_phase_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExperimentPhasePage);
      /***/
    },

    /***/
    47224:
    /*!***********************************************************!*\
      !*** ./src/app/services/tnvn/services/loading.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(LoadingService, [{
          key: "present",
          value: function present(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.isLoading = true;
                    _context.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.isLoading = true;
                    _context2.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this2.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = false;
                    _context3.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    49748:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.page.scss ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-image {\n  background: url(\"/assets/images/Rectangle.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 2100%;\n}\n\n.circle {\n  height: 75px;\n  padding: 10%;\n  padding-left: 15% !important;\n  padding-top: 15% !important;\n}\n\n.circle1 {\n  padding: 10%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQtcGhhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFHQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJleHBlcmltZW50LXBoYXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9SZWN0YW5nbGUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIxMDAlO1xyXG4gIH0gXHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzZFNTNGRjtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlMSB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIl19 */";
      /***/
    },

    /***/
    81886:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/experiment-phase/experiment-phase.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-row class=\"header-image\">\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"font-size: x-large;\">\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" *ngIf=\"activeMenu\" (click)=\"navigateBack()\">\r\n          </ion-icon>\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" *ngIf=\"!activeMenu\" (click)=\"navigateBackpage()\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"padding-left:5%;font-size: large;color: white;\">\r\n          Theme\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div *ngIf=\"activeMenu\">\r\n        <ion-row *ngFor=\"let item of array\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextMenu(item.value)\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div *ngIf=\"array1Active\">\r\n        <ion-row *ngFor=\"let item of array1\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextPage(item.value,item.name,'1')\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div *ngIf=\"array2Active\">\r\n        <ion-row *ngFor=\"let item of array2\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextPage(item.value,item.name,'2')\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_experiment-phase_experiment-phase_module_ts-es5.js.map