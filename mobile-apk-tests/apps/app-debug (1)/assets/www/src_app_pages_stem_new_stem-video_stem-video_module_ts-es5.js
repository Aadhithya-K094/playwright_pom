(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-video_stem-video_module_ts"], {
    /***/
    83232:
    /*!************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-video/stem-video-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemVideoPageRoutingModule": function StemVideoPageRoutingModule() {
          return (
            /* binding */
            _StemVideoPageRoutingModule
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


      var _stem_video_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-video.page */
      33404);

      var routes = [{
        path: '',
        component: _stem_video_page__WEBPACK_IMPORTED_MODULE_0__.StemVideoPage
      }];

      var _StemVideoPageRoutingModule = /*#__PURE__*/_createClass(function StemVideoPageRoutingModule() {
        _classCallCheck(this, StemVideoPageRoutingModule);
      });

      _StemVideoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StemVideoPageRoutingModule);
      /***/
    },

    /***/
    73955:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-video/stem-video.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemVideoPageModule": function StemVideoPageModule() {
          return (
            /* binding */
            _StemVideoPageModule
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


      var _stem_video_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-video-routing.module */
      83232);
      /* harmony import */


      var _stem_video_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-video.page */
      33404);

      var _StemVideoPageModule = /*#__PURE__*/_createClass(function StemVideoPageModule() {
        _classCallCheck(this, StemVideoPageModule);
      });

      _StemVideoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _stem_video_routing_module__WEBPACK_IMPORTED_MODULE_0__.StemVideoPageRoutingModule],
        declarations: [_stem_video_page__WEBPACK_IMPORTED_MODULE_1__.StemVideoPage]
      })], _StemVideoPageModule);
      /***/
    },

    /***/
    33404:
    /*!**************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-video/stem-video.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemVideoPage": function StemVideoPage() {
          return (
            /* binding */
            _StemVideoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_stem_video_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stem-video.page.html */
      1635);
      /* harmony import */


      var _stem_video_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-video.page.scss */
      93010);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../view-pdf/view-pdf.page */
      51747);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);

      var _StemVideoPage = /*#__PURE__*/function () {
        function StemVideoPage(upload, http, domsaintizer, fileTransfer, file, modalCtrl, router, alertService, route, modalcontroller, userService, fileOpener, loading) {
          _classCallCheck(this, StemVideoPage);

          this.upload = upload;
          this.http = http;
          this.domsaintizer = domsaintizer;
          this.fileTransfer = fileTransfer;
          this.file = file;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.modalcontroller = modalcontroller;
          this.userService = userService;
          this.fileOpener = fileOpener;
          this.loading = loading;
        }

        return _createClass(StemVideoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.theme = this.routeData.queryParams.theme;
            this.value = this.routeData.queryParams.value;
            this.vidUrl = '';
            this.playVideo();
            this.name = this.routeData.queryParams.name;
            this.tpdf = this.routeData.queryParams.tpdf;
            this.epdf = this.routeData.queryParams.epdf;
            this.downloadedname = '';
            this.studentData();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.destroyVideo();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.destroyVideo();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyVideo();
          }
        }, {
          key: "studentData",
          value: function studentData() {}
        }, {
          key: "destroyVideo",
          value: function destroyVideo() {
            var videoElement = document.getElementById(this.filename);
            videoElement.pause();
            this.vidUrl = "";
            videoElement.src = "";
            videoElement.removeAttribute('src');
            videoElement.load();
          }
        }, {
          key: "playVideo",
          value: function playVideo() {
            this.destroyVideo();
            this.filename = '';
            var A = Date.now();
            this.filename = A;
            this.downloadedname = this.value;
            var videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.downloadedname + ".mp4");
            this.vidUrl = videoUrl;
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/experiments'], {
              queryParams: {
                "value": this.theme,
                "name": this.name
              }
            });
          }
        }, {
          key: "viewImage",
          value: function viewImage(urlPdf) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__.ViewPdfPage,
                      componentProps: {
                        image: urlPdf,
                        name: this.name
                      },
                      cssClass: 'fullscreen',
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "modal",
          value: function modal(value) {
            if (value == 1) {
              this.presentModal("rating");
              this.pauseVideo();
            } else if (value == 2) {
              {
                this.presentModal("Comments");
                this.pauseVideo();
              }
            } else {// this.downloadVideo(this.downloadedname)
            }
          }
        }, {
          key: "presentModal",
          value: function presentModal(mode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    return _context2.a(2);
                }
              }, _callee2);
            }));
          }
        }, {
          key: "pauseVideo",
          value: function pauseVideo() {// let videoElement = <HTMLVideoElement>document.getElementById('this.filename');
            // videoElement.pause();
          }
        }, {
          key: "viewFile",
          value: function viewFile(selectedFilename) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this = this;

              var filename, pdfurl, path, transfer;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    // var filename = "Thoduvaanam2_itk_e_journal_M_2022.pdf";
                    filename = selectedFilename;
                    this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + selectedFilename);
                    pdfurl = this.PDFFileName.changingThisBreaksApplicationSecurity;
                    path = this.file.dataDirectory;
                    transfer = this.fileTransfer.create();
                    this.loading.show();
                    transfer.download(pdfurl, "".concat(path, " ").concat(selectedFilename)).then(function (entry) {
                      var url = entry.toURL();

                      _this.fileOpener.open(url, "application/pdf");

                      _this.loading.dismiss();
                    }, function (error) {
                      _this.fileOpener.open(pdfurl, "application/pdf");

                      _this.alertService.error("File download failed");

                      _this.loading.dismiss();
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "testVideoDownload",
          value: function testVideoDownload() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var fileTransfer, path, vDownload, videorl;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.alertService.success("File downloaded Successfully");
                    fileTransfer = this.fileTransfer.create();
                    path = this.file.externalRootDirectory;
                    this.downloadedname = this.value;
                    vDownload = this.vidUrl.changingThisBreaksApplicationSecurity;
                    videorl = "https://d1p3r7kc5uix85.cloudfront.net/bd16ae508cf1425886d81068d255973a.mp4";
                    _context4.n = 1;
                    return fileTransfer.download(vDownload, path + '/Download/' + this.name + ".mp4").then(function (entry) {}, function (error) {// this.alertService.error("File download failed");
                    });

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }]);
      }();

      _StemVideoPage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__.FileOpener
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_9__.LoadingService
        }];
      };

      _StemVideoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-stem-video',
        template: _raw_loader_stem_video_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stem_video_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StemVideoPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this2 = this;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    this.isLoading = true;
                    _context5.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this2.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context5.a(2, _context5.v);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this3 = this;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    this.isLoading = true;
                    _context6.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this3.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context6.a(2, _context6.v);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    this.isLoading = false;
                    _context7.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context7.a(2, _context7.v);
                }
              }, _callee7, this);
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
    93010:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-video/stem-video.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVtLXZpZGVvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    1635:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-video/stem-video.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row>\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-icon name=\"arrow-back\" style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\" (click)=\"navigateBack()\">  </ion-icon> <span style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\"> Experiments </span>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <video controls width=\"100%\" height=\"210\" [id]=this.filename type=\"video/mp4\" controlsList=\"nodownload\">\r\n        <source [src]=this.vidUrl type=\"video/mp4\">\r\n      </video>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" style=\"padding: 5%;font-weight: bold;\">\r\n      {{name}}\r\n    </ion-col>\r\n\r\n    <ion-col size=\"4\" style=\"padding: 5%;zoom: 1.5;text-align: center;color: #6b4dc9;\">\r\n      <ion-icon name=\"download\" (click)=\"testVideoDownload()\"></ion-icon>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <ion-row> \r\n\r\n        <ion-col size=\"4\" (click)=\"modal(1)\">\r\n          <ion-icon class=\"ion-ma\" src=\"/assets/images/awesome-star.svg\"></ion-icon><br>\r\n          <ion-label class=\"tab-label-text\">Rating</ion-label>\r\n         </ion-col>\r\n\r\n         <ion-col size=\"4\"  (click)=\"modal(2)\">\r\n          <ion-icon src=\"/assets/images/awesome-comments.svg\"></ion-icon><br>\r\n          <ion-label class=\"tab-label-text\">Comment</ion-label>\r\n         </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-col> -->\r\n\r\n    <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <ion-row> \r\n        <ion-col size=\"6\" (click)=\"viewFile(this.tpdf)\">\r\n          <img src=\"/assets/images/video_tamil.png\" class=\"menuicon\">  \r\n        </ion-col>\r\n    \r\n        <ion-col size=\"6\" (click)=\"viewFile(this.epdf)\">\r\n          <img src=\"/assets/images/video_english.png\" class=\"menuicon\">   \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n \r\n  </ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_stem-video_stem-video_module_ts-es5.js.map