(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_feed_feed_module_ts"], {
    /***/
    91925:
    /*!************************************************************!*\
      !*** ./src/app/pages/stem_new/feed/feed-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedPageRoutingModule": function FeedPageRoutingModule() {
          return (
            /* binding */
            _FeedPageRoutingModule
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


      var _feed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./feed.page */
      71947);

      var routes = [{
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_0__.FeedPage
      }];

      var _FeedPageRoutingModule = /*#__PURE__*/_createClass(function FeedPageRoutingModule() {
        _classCallCheck(this, FeedPageRoutingModule);
      });

      _FeedPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FeedPageRoutingModule);
      /***/
    },

    /***/
    65021:
    /*!****************************************************!*\
      !*** ./src/app/pages/stem_new/feed/feed.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedPageModule": function FeedPageModule() {
          return (
            /* binding */
            _FeedPageModule
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


      var _feed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./feed-routing.module */
      91925);
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./feed.page */
      71947);

      var _FeedPageModule = /*#__PURE__*/_createClass(function FeedPageModule() {
        _classCallCheck(this, FeedPageModule);
      });

      _FeedPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _feed_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedPageRoutingModule],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_1__.FeedPage]
      })], _FeedPageModule);
      /***/
    },

    /***/
    71947:
    /*!**************************************************!*\
      !*** ./src/app/pages/stem_new/feed/feed.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedPage": function FeedPage() {
          return (
            /* binding */
            _FeedPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./feed.page.html */
      45166);
      /* harmony import */


      var _feed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./feed.page.scss */
      59333);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);

      var _FeedPage = /*#__PURE__*/function () {
        function FeedPage(router, alertService, route, userService, http, domsaintizer, fileOpener, loading, fileTransfer, file) {
          _classCallCheck(this, FeedPage);

          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.userService = userService;
          this.http = http;
          this.domsaintizer = domsaintizer;
          this.fileOpener = fileOpener;
          this.loading = loading;
          this.fileTransfer = fileTransfer;
          this.file = file;
          this.vidUrl = [];
        }

        return _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.value = this.routeData.queryParams.value;
            this.name = this.routeData.queryParams.name;
            this.onDropdown();
          }
        }, {
          key: "onDropdown",
          value: function onDropdown() {
            // this.userService.getTheam().subscribe((response) => {
            //   this.airArray =  response.result.filter((rq) => rq.DomainId == this.value);
            //   console.log("response",this.airArray)
            //  })
            this.airArray = [];

            if (this.value == 1) {
              this.airArray = [{
                icon: "../../../../assets/images/magic_egg.png",
                name: "Magic Egg",
                value: "1",
                url: "bd16ae508cf1425886d81068d255973a",
                tPdf: "7854e25176e344bda6345f36fc6aab81.pdf",
                ePdf: "0113e095a2484dc69be96a6f10bf6946.pdf"
              }, {
                icon: "../../../../assets/images/water_rises_due_to_heart.png",
                name: "Water Rises Due To Heat",
                value: "2",
                url: "4267ded890ee4c94be3888154a458b84",
                tPdf: "1f416e4a344f4c04a16cb0d0e7f67617.pdf",
                ePdf: "b112ac711c284cff8035b5cca8a11979.pdf"
              }, {
                icon: "../../../../assets/images/Bernoullis_balloon.png",
                name: "Bernoulli's Balloon",
                value: "3",
                url: "57135c6b15cb4d93b471a563f7fa4c15",
                tPdf: "e12316fdc31e404192b96123a988edef.pdf",
                ePdf: "a027e61cab324887b94ad62598940ade.pdf"
              }, {
                icon: "../../../../assets/images/whirlpool.png",
                name: "Whirlpool",
                value: "4",
                url: "f0cefeb1b4bc4d92ab313b7acdd35d68",
                tPdf: "da549ed18e7d461da04a2da70374c2cb.pdf",
                ePdf: "952f20f4321f423394f8498bed202119.pdf"
              }, {
                icon: "../../../../assets/images/spray.png",
                name: "Spray",
                value: "5",
                url: "fdfa9a15ae084c76b1a1ffdef771f251",
                tPdf: "8f2f9e1e94bd4bf18ee473757b8e0245.pdf",
                ePdf: "0d88528dd0df4c4eb40ead1610e99487.pdf"
              }, {
                icon: "../../../../assets/images/filling_balllon.png",
                name: "Filling Balloon with Thermocole balls",
                value: "6",
                url: "6b6824ce3fbe480ba57d162ab8dd9ff1",
                tPdf: "e765b7f2fc7246e7a78c44f81a994fa8.pdf",
                ePdf: "e40e2b0c52654250b1fbc094555b7f1b.pdf"
              } // { 
              //   icon : "../../../../assets/images/plant_animal.png",
              //   name: "Compressible as compared to Matter",
              //   value: "7"
              // },
              // { 
              //   icon : "../../../../assets/images/plant_animal.png",
              //   name: "Heat sensitive fan",
              //   value: "8"
              // }
              ];
            }

            if (this.value == 2) {
              this.airArray = [{
                icon: "../../../../assets/images/vegetable.png",
                name: "Vegetable and Fruit Battery",
                value: "7",
                url: "5bd83c8232294138ba117fdb53ab3f90",
                tPdf: "224d804a281541d2a8821a37d73ae53e.pdf",
                ePdf: "66a8a33bddd84903adcebe152c5790cf.pdf"
              }, {
                icon: "../../../../assets/images/natural.png",
                name: "Natural pH Indicator",
                value: "11",
                url: "c13929f77d57474fb84aea043008569e",
                tPdf: "81aa45daf12d4b09ba20e9ab6d562023.pdf",
                ePdf: "34a8a7e3b03e4130931524d177dd4815.pdf"
              }, {
                icon: "../../../../assets/images/acidic.png",
                name: "Acidic Alkaline Indicator",
                value: "12",
                url: "6c1d5187f8af441fbe35a9f65c857575",
                tPdf: "4148e06afe204784969469fa5726b424.pdf",
                ePdf: "5256fb50520941bba8d8f1f459debc84.pdf"
              }, {
                icon: "../../../../assets/images/Magic.png",
                name: "Magic Words",
                value: "13",
                url: "28f3c628f29e43759fffa9b02aadd410",
                tPdf: "16916241c4a14fee82d429ac37ac9425.pdf",
                ePdf: "0afb0b73c7104b7685a47cd1b4f0a980.pdf"
              }, {
                icon: "../../../../assets/images/Cleansing.png",
                name: "Cleansing Copper Sheets and Metals in Household",
                value: "14",
                url: "5a643b3d037a468281e1ad86ec1d53a1",
                tPdf: "d5605e1bd1924c7a921824559705c081.pdf",
                ePdf: "0da38960b053406ca0f367e4ce8c127d.pdf"
              }, {
                icon: "../../../../assets/images/Bouncing.png",
                name: "Bouncing Ball",
                value: "15",
                url: "6a76324beab14899bd27e300b87719f2",
                tPdf: "d2ef1bab75f74419aa4fed9fd60f2906.pdf",
                ePdf: "8d85d818383d4b8f9053b1c1ca1dbba5.pdf"
              }];
            }

            if (this.value == 3) {
              this.airArray = [{
                icon: "../../../../assets/images/pathLight.png",
                name: "Path of Light",
                value: "1",
                url: "b387b8f0c99648d19fe21358891d35c8",
                tPdf: "c2398f00c8fe446d8680b8bf869d3fec.pdf",
                ePdf: "d9fcdead2a3d4bc0b81cf05295bb0bea.pdf"
              }, {
                icon: "../../../../assets/images/RefractionConvex.png",
                name: "Refraction Convex",
                value: "1",
                url: "e90673a59ea64e8db6a5c1011d4d88fa",
                tPdf: "c2398f00c8fe446d8680b8bf869d3fec.pdf",
                ePdf: "d9fcdead2a3d4bc0b81cf05295bb0bea.pdf"
              }, {
                icon: "../../../../assets/images/magic_egg.png",
                name: "Bent pencil",
                value: "1",
                url: "cb9b0123045248159962d3888f96bf5c",
                tPdf: "d539f4e9425749e682c4bdeee3df28e7.pdf",
                ePdf: "afdfd26db34a461d86fcfa422782230e.pdf"
              }, {
                icon: "../../../../assets/images/rainbow.png",
                name: "Make your own rainbow",
                value: "1",
                url: "09bc8f60b28646dba13f65ad6dc872a9",
                tPdf: "37fb8a2277db4604be728e15ba66e43b.pdf",
                ePdf: "10844fc6d9ce44d8ab12ab6b257e8fb2.pdf"
              }, {
                icon: "../../../../assets/images/Multiple_Reflection.png",
                name: "Multiple Reflection",
                value: "1",
                url: "f540a2323ff94dd18fbdb65d091e8d58",
                tPdf: "1503eea988994a33a4aa2a4579b853ef.pdf",
                ePdf: "d4dfd409ad8a4282856b9961703ae4c7.pdf"
              }, {
                icon: "../../../../assets/images/Disappearing.png",
                name: "Disappearing Beaker",
                value: "1",
                url: "42ae2918ca48499a9b2c955cea4a9b60",
                tPdf: "443d41f855644683a32a4c5c1d6b395a.pdf",
                ePdf: "56eefdd62e3b416b8035a5ba76043614.pdf"
              }, {
                icon: "../../../../assets/images/Path_changer_Refraction.png",
                name: "Path changer- Refraction",
                value: "1",
                url: "e90673a59ea64e8db6a5c1011d4d88fa",
                tPdf: "c2398f00c8fe446d8680b8bf869d3fec.pdf",
                ePdf: "d9fcdead2a3d4bc0b81cf05295bb0bea.pdf"
              }];
            }

            if (this.value == 4 || this.value == 5) {
              this.airArray = [{
                icon: "../../../../assets/images/juice_Box.png",
                name: "Juice Box Geometry",
                value: "1",
                url: "6478c1d146294112ae6de0ff60123b2f",
                tPdf: "365dcdc8ae564a1399ee948f69a9db59.pdf",
                ePdf: "cb2587586f60477ca832e3eb5678bb0d.pdf"
              }, {
                icon: "../../../../assets/images/Pythagorean.png",
                name: "Pythagorean theorem",
                value: "1",
                url: "d3fc7740a22b4aca8f72d779f9ffbb41",
                tPdf: "9c4c810269a141f3be7770d7f95313cd.pdf",
                ePdf: "754ff8e96e4f4418b6f47095f7013482.pdf"
              }, {
                icon: "../../../../assets/images/Factorization.png",
                name: "Factorization using Snap Cubes",
                value: "1",
                url: "88a8f7fd2b064efdbbd59a4f209e0860",
                tPdf: "f4c299f2806a4bef8a7673f44eac8127.pdf",
                ePdf: "fa4e20f68a2f4a639bf97990c7a1dcc6.pdf"
              }, {
                icon: "../../../../assets/images/Algebra.png",
                name: "Learn Algebra from Geometry",
                value: "1",
                url: "b8df97be104346329539b044396d8c56",
                tPdf: "abf80e7638254585a5f840d12cfa4363.pdf",
                ePdf: "a099f96aa64747e7be7d5722590ec286.pdf"
              }, {
                icon: "../../../../assets/images/shapes.png",
                name: "Let's form shapes",
                value: "1",
                url: "021c062bfa234fb98d24d1aecff95540",
                tPdf: "2d203b5d7c5c4f2a80859698ac5f59c8.pdf",
                ePdf: "cc0fcef99108460995a352dd4be11ec4.pdf"
              }];
            }

            if (this.value == 6) {
              this.airArray = [{
                icon: "../../../../assets/images/Heart.png",
                name: "Making Maida Heart and Stethoscope",
                value: "1",
                url: "8cf8bd1950f8465c9eb2bbf8764218ba",
                tPdf: "4c4423a6cc0a4a40ba159334eb03dc59.pdf",
                ePdf: "4f28c255da9b4a5f9b122899ddb6be9e.pdf"
              }, {
                icon: "../../../../assets/images/Flower.png",
                name: "Part of plant's & Dissection of Flower",
                value: "1",
                url: "d64f4676f8f7457e8eb0b57073ebb488",
                tPdf: "9823e3c1f9f949488a6388cfb5b06eb0.pdf",
                ePdf: "053730aba71a4343ab5eb30ad73de1cb.pdf"
              }, {
                icon: "../../../../assets/images/osmosis.png",
                name: "Osmosis",
                value: "1",
                url: "bcea2e8ed9b64407af322fa2d09ec3d6",
                tPdf: "4b5e9daa6ce6416f863d33863ca7562c.pdf",
                ePdf: "4dc4145cd7d140fe98da7555ebd77a18.pdf"
              }];
            }

            this.playVideo(this.airArray);
          }
        }, {
          key: "playVideo",
          value: function playVideo(item) {
            // this.destroyVideo() 
            for (var i = 0; i <= item.length; i++) {
              this.filename = '';
              var A = Date.now();
              this.filename = A;
              this.downloadedname = this.airArray[i].url;
              var videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.downloadedname + ".mp4");
              this.vidUrl.push({
                "name": this.airArray[i].name,
                "url": videoUrl,
                "tpdf": this.airArray[i].tPdf,
                "epdf": this.airArray[i].ePdf
              });
            }
          }
        }, {
          key: "viewFile",
          value: function viewFile(selectedFilename) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              var filename, pdfurl, path, transfer;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
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
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/domain'], {
              queryParams: {
                "name": "feed"
              }
            });
          }
        }]);
      }();

      _FeedPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }];
      };

      _FeedPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FeedPage);
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
              var _this2 = this;

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
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this3 = this;

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
                        if (!_this3.isLoading) {
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
    59333:
    /*!****************************************************!*\
      !*** ./src/app/pages/stem_new/feed/feed.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-bg {\n  background: url(\"/assets/images/experment.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZXhwZXJtZW50LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0gIl19 */";
      /***/
    },

    /***/
    45166:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/feed/feed.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size: 20px\">Experiments</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"login-bg\">\r\n\r\n  </ion-grid>\r\n  <!-- <ion-row>\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-icon name=\"arrow-back\" style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\" (click)=\"navigateBack()\">  </ion-icon> <span style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\"> Experiments </span>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" style=\"padding: 5%;\" *ngFor=\"let item of vidUrl\">\r\n      <div style=\"padding: 3%;color: blue;\"> {{item.name}} </div>\r\n      <video controls width=\"100%\" height=\"210\" [id]=this.filename type=\"video/mp4\">\r\n        <source [src]=item.url type=\"video/mp4\">\r\n      </video>\r\n\r\n      <ion-row> \r\n        <ion-col size=\"6\" (click)=\"viewFile(item.tpdf)\">\r\n          <img src=\"/assets/images/video_tamil.png\" class=\"menuicon\">  \r\n        </ion-col>\r\n    \r\n        <ion-col size=\"6\" (click)=\"viewFile(item.epdf)\">\r\n          <img src=\"/assets/images/video_english.png\" class=\"menuicon\">   \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-col>\r\n  \r\n  </ion-row> -->\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_feed_feed_module_ts-es5.js.map