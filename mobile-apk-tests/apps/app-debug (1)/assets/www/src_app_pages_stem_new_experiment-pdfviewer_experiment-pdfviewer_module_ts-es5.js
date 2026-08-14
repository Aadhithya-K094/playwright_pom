(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_experiment-pdfviewer_experiment-pdfviewer_module_ts"], {
    /***/
    96373:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPdfviewerPageRoutingModule": function ExperimentPdfviewerPageRoutingModule() {
          return (
            /* binding */
            _ExperimentPdfviewerPageRoutingModule
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


      var _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-pdfviewer.page */
      89993);

      var routes = [{
        path: '',
        component: _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_0__.ExperimentPdfviewerPage
      }];

      var _ExperimentPdfviewerPageRoutingModule = /*#__PURE__*/_createClass(function ExperimentPdfviewerPageRoutingModule() {
        _classCallCheck(this, ExperimentPdfviewerPageRoutingModule);
      });

      _ExperimentPdfviewerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExperimentPdfviewerPageRoutingModule);
      /***/
    },

    /***/
    35236:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPdfviewerPageModule": function ExperimentPdfviewerPageModule() {
          return (
            /* binding */
            _ExperimentPdfviewerPageModule
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


      var _experiment_pdfviewer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-pdfviewer-routing.module */
      96373);
      /* harmony import */


      var _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-pdfviewer.page */
      89993);

      var _ExperimentPdfviewerPageModule = /*#__PURE__*/_createClass(function ExperimentPdfviewerPageModule() {
        _classCallCheck(this, ExperimentPdfviewerPageModule);
      });

      _ExperimentPdfviewerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _experiment_pdfviewer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperimentPdfviewerPageRoutingModule],
        declarations: [_experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_1__.ExperimentPdfviewerPage]
      })], _ExperimentPdfviewerPageModule);
      /***/
    },

    /***/
    89993:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentPdfviewerPage": function ExperimentPdfviewerPage() {
          return (
            /* binding */
            _ExperimentPdfviewerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_experiment_pdfviewer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./experiment-pdfviewer.page.html */
      43685);
      /* harmony import */


      var _experiment_pdfviewer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-pdfviewer.page.scss */
      91839);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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

      var _ExperimentPdfviewerPage = /*#__PURE__*/function () {
        function ExperimentPdfviewerPage(router, alertService, route, userService, http, domsaintizer, fileTransfer, file, modalCtrl, fileOpener, loading) {
          _classCallCheck(this, ExperimentPdfviewerPage);

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
          this.array1Submenu = [{
            icon: "../../../../assets/images/A4A3A5_paper.png",
            name: "A4 paper, A3 paper, A5 Paper Volume of sand with a Cylinder, Cone",
            value: "1",
            subvalue: "1",
            pdf: "fe6053e0-5c57-11ee-883b-abbb8bad8816.pdf"
          }, {
            icon: "../../../../assets/images/BMI.png",
            name: "Body Mass Index",
            value: "2",
            subvalue: "1",
            pdf: "5093e7b0-5c55-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/tug_of_war.png",
            name: "Tug or War - Pulling the Rope ",
            value: "3",
            subvalue: "2",
            pdf: "74435790-5c55-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/balloon_car.png",
            name: "Balloon Car",
            value: "4",
            subvalue: "2",
            pdf: "99db84a0-5c55-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/basket_ball.png",
            name: "Basket Ball Game",
            value: "5",
            subvalue: "2",
            pdf: "98a3d280-5c56-11ee-b444-3b0bc1074ee2.pdf"
          }, {
            icon: "../../../../assets/images/balloon_pressure.png",
            name: "Balloon Pressure",
            value: "6",
            subvalue: "3",
            pdf: "b8b7f330-5c56-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/salt_paper.png",
            name: "Salt Paper experiment ",
            value: "7",
            subvalue: "4",
            pdf: "d4f171c0-5c56-11ee-b444-3b0bc1074ee2.pdf"
          }];
          this.array2Submenu = [{
            icon: "../../../../assets/images/pi.png",
            name: "Find out the value of pi",
            value: "1",
            subvalue: "1",
            pdf: "fd141a40-5c56-11ee-b444-3b0bc1074ee2.pdf"
          }, {
            icon: "../../../../assets/images/number_system.png",
            name: "Number System",
            value: "2",
            subvalue: "2",
            pdf: "21a95640-5c57-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/prime_numbers.png",
            name: "Prime Numbers",
            value: "3",
            subvalue: "2",
            pdf: "3ceb0750-5c57-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/place_Value.png",
            name: "Place value",
            value: "4",
            subvalue: "2",
            pdf: "559125f0-5c57-11ee-b444-3b0bc1074ee2.pdf"
          }, {
            icon: "../../../../assets/images/place_Value.png",
            name: "Place Value",
            value: "5",
            subvalue: "2",
            pdf: "6de04af0-5c57-11ee-b444-3b0bc1074ee2.pdf"
          }, {
            icon: "../../../../assets/images/decimal.png",
            name: "Decimals",
            value: "6",
            subvalue: "2",
            pdf: "86cd5da0-5c57-11ee-b8da-7b2267927916.pdf"
          }, {
            icon: "../../../../assets/images/cilinometer.png",
            name: "Clinometer",
            value: "7",
            subvalue: "3",
            pdf: "a25391c0-5c57-11ee-883b-abbb8bad8816.pdf"
          }, {
            icon: "../../../../assets/images/profitsandLoss.png",
            name: "Profits, and Loss",
            value: "8",
            subvalue: "3",
            pdf: "b795c4e0-5c57-11ee-883b-abbb8bad8816.pdf"
          }, {
            icon: "../../../../assets/images/perimeter_using_Snap_Cubes.png",
            name: "Perimeter using Snap Cubes",
            value: "9",
            subvalue: "4",
            pdf: "cecb8aa0-5c57-11ee-883b-abbb8bad8816.pdf"
          }];
        }

        return _createClass(ExperimentPdfviewerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.routeData = this.route.snapshot;
            this.name = this.routeData.queryParams.name;
            this.value = this.routeData.queryParams.value;
            this.expermentId = this.routeData.queryParams.expermentId;
            this.activeMenu = true;
            this.menuarray = [];

            if (this.expermentId == 1) {
              this.menuarray = this.array1Submenu.filter(function (item) {
                return item.subvalue == _this.value;
              });
            }

            if (this.expermentId == 2) {
              this.menuarray = this.array2Submenu.filter(function (item) {
                return item.subvalue == _this.value;
              });
            }
          }
        }, {
          key: "viewFile",
          value: function viewFile(selectedFilename) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var filename, pdfurl, path, transfer;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    // var filename = "Thoduvaanam2_itk_e_journal_M_2022.pdf";
                    filename = selectedFilename;
                    this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://deka0egrc3bqo.cloudfront.net/" + selectedFilename);
                    pdfurl = this.PDFFileName.changingThisBreaksApplicationSecurity;
                    path = this.file.dataDirectory;
                    transfer = this.fileTransfer.create();
                    this.loading.show();
                    transfer.download(pdfurl, "".concat(path, " ").concat(selectedFilename)).then(function (entry) {
                      var url = entry.toURL();

                      _this2.fileOpener.open(url, "application/pdf");

                      _this2.loading.dismiss();
                    }, function (error) {
                      _this2.fileOpener.open(pdfurl, "application/pdf");

                      _this2.alertService.error("File download failed");

                      _this2.loading.dismiss();
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/experiment-phase'], {
              queryParams: {
                "value": this.value,
                "name": this.name,
                expermentId: this.expermentId
              }
            });
          }
        }]);
      }();

      _ExperimentPdfviewerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }];
      };

      _ExperimentPdfviewerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-experiment-pdfviewer',
        template: _raw_loader_experiment_pdfviewer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_experiment_pdfviewer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExperimentPdfviewerPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.isLoading = true;
                    _context2.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this3.isLoading) {
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
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this4 = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = true;
                    _context3.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this4.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.isLoading = false;
                    _context4.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
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
    91839:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-image {\n  background: url(\"/assets/images/Rectangle.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 2100%;\n}\n\n.circle {\n  height: 75px;\n  padding: 10%;\n  padding-left: 15% !important;\n  padding-top: 15% !important;\n}\n\n.circle1 {\n  padding: 10%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQtcGRmdmlld2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBR0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiZXhwZXJpbWVudC1wZGZ2aWV3ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1JlY3RhbmdsZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMjEwMCU7XHJcbiAgfSBcclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU1M0ZGO1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUxIHtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAiXX0= */";
      /***/
    },

    /***/
    43685:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-row class=\"header-image\">\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"font-size: x-large;\">\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"padding-left:5%;font-size: large;color: white;\">\r\n          {{name}}\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div>\r\n        <ion-row *ngFor=\"let item of menuarray\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"viewFile(item.pdf)\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_experiment-pdfviewer_experiment-pdfviewer_module_ts-es5.js.map