(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_aadhitiya-session_aadhitiya-session_module_ts"], {
    /***/
    12147:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AadhitiyaSessionPageRoutingModule": function AadhitiyaSessionPageRoutingModule() {
          return (
            /* binding */
            _AadhitiyaSessionPageRoutingModule
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


      var _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aadhitiya-session.page */
      63973);

      var routes = [{
        path: '',
        component: _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_0__.AadhitiyaSessionPage
      }];

      var _AadhitiyaSessionPageRoutingModule = /*#__PURE__*/_createClass(function AadhitiyaSessionPageRoutingModule() {
        _classCallCheck(this, AadhitiyaSessionPageRoutingModule);
      });

      _AadhitiyaSessionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AadhitiyaSessionPageRoutingModule);
      /***/
    },

    /***/
    14501:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AadhitiyaSessionPageModule": function AadhitiyaSessionPageModule() {
          return (
            /* binding */
            _AadhitiyaSessionPageModule
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


      var _aadhitiya_session_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aadhitiya-session-routing.module */
      12147);
      /* harmony import */


      var _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aadhitiya-session.page */
      63973);

      var _AadhitiyaSessionPageModule = /*#__PURE__*/_createClass(function AadhitiyaSessionPageModule() {
        _classCallCheck(this, AadhitiyaSessionPageModule);
      });

      _AadhitiyaSessionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _aadhitiya_session_routing_module__WEBPACK_IMPORTED_MODULE_0__.AadhitiyaSessionPageRoutingModule],
        declarations: [_aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_1__.AadhitiyaSessionPage]
      })], _AadhitiyaSessionPageModule);
      /***/
    },

    /***/
    63973:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AadhitiyaSessionPage": function AadhitiyaSessionPage() {
          return (
            /* binding */
            _AadhitiyaSessionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_aadhitiya_session_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./aadhitiya-session.page.html */
      60886);
      /* harmony import */


      var _aadhitiya_session_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aadhitiya-session.page.scss */
      32753);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _AadhitiyaSessionPage = /*#__PURE__*/function () {
        function AadhitiyaSessionPage(router, route, emisService, uploadService, modalCtrl, alertService, domsaintizer, userSessionService) {
          _classCallCheck(this, AadhitiyaSessionPage);

          this.router = router;
          this.route = route;
          this.emisService = emisService;
          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.domsaintizer = domsaintizer;
          this.userSessionService = userSessionService;
          this.studentList = true;
          this.isplay = false;
          this.emisName = this.userSessionService.emis_username();
        }

        return _createClass(AadhitiyaSessionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.dataList = JSON.parse(params['data']);
            });

            if (this.dataList) {
              this.initialGet(this.dataList);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            // this.route.queryParams.subscribe((params) => {
            //   this.dataList = JSON.parse(params['data']);
            // })
            if (this.dataList) {
              this.initialGet(this.dataList);
            }
          }
        }, {
          key: "initialGet",
          value: function initialGet(data) {
            var _this2 = this;

            this.school_id = data.school_id;
            var chk = {
              "SchlID": data.school_id,
              "BatcId": data.batch_id,
              "GrouId": data.id,
              "SesDate": data.session_date,
              "ArpId": data.user_id
            };
            this.studList = [];
            this.uploadDet = [];
            this.emisService.ArpRatingDetfBrte({
              "records": chk
            }).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.studList = res.result.RatingDetails;
                _this2.uploadDet = res.result.UploadDetails;
                _this2.statusChk = _this2.uploadDet[0].Stauts;
                _this2.reasonChk = _this2.uploadDet[0].Reasons;
                console.log(_this2.uploadDet, "ooo");
              }
            });
          }
        }, {
          key: "summary",
          value: function summary() {
            this.studentList = true;
            this.attendance = false;
            this.galleryPhoto = false;
          }
        }, {
          key: "attendence",
          value: function attendence() {
            this.studentList = false;
            this.attendance = true;
            this.galleryPhoto = false;
          }
        }, {
          key: "gallery",
          value: function gallery() {
            this.studentList = false;
            this.attendance = false;
            this.galleryPhoto = true;
            var bucketName = "renewalapplicationemis";
            var filename = this.uploadDet[0].Photo;
            var expiry = 1800; // this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(async (result) => {
            //   if (result) {
            //     this.imageData = result.url;
            //     if(this.imageData){
            //       var bucketName = "renewalapplicationemis";
            //       var filename = this.uploadDet[0].Photo1;
            //       let expiry: number = 1800;
            //       this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(async (result) => {
            //         if (result) {
            //           this.imageData1 = result.url;
            //         }
            //       })
            //     }
            //   }
            // })
            // var downloadedname = this.uploadDet[0].Video
            // let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + downloadedname);
            // this.vidUrl = videoUrl

            this.playVideo(this.uploadDet[0].Video);
          }
        }, {
          key: "playVideo",
          value: function playVideo(val) {
            // this.destroyVideo() 
            this.filename = '';
            var A = Date.now();
            this.filename = A;
            this.downloadedname = val;
            this.videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://deka0egrc3bqo.cloudfront.net/" + this.downloadedname);
            this.vidUrl = this.videoUrl.changingThisBreaksApplicationSecurity; // if(!this.isplay){
            //   this.myVideo.nativeElement.pause();
            // }
            // else{
            //     this.myVideo.nativeElement.play();
            // }
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(val) {
            this.allowReasons = val;

            if (this.allowReasons == 1) {
              this.reasonData = null;
            }
          }
        }, {
          key: "valReasons",
          value: function valReasons(reason) {
            console.log(reason.target.value, "tete");
            this.reasonData = reason.target.value;
          }
        }, {
          key: "viewDoc",
          value: function viewDoc(docName) {
            var _this3 = this;

            console.log('onDownloadFile');
            var bucketName = "renewalapplicationemis";
            var filename = docName;
            var expiry = 1800;
            var ext = '';
            var splittedName = docName.split(".");
            ext = splittedName[1];
            console.log('ext', ext[1]);

            if (filename != null && filename != "") {
              this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                  var doc, modal;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (!result) {
                          _context.n = 4;
                          break;
                        }

                        doc = result.url;

                        if (!(ext[1] == 'pdf' || ext == 'pdf')) {
                          _context.n = 1;
                          break;
                        }

                        this.uploadService.viewPdf(doc);
                        _context.n = 3;
                        break;

                      case 1:
                        _context.n = 2;
                        return this.modalCtrl.create({
                          component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_4__.ViewImagePage,
                          componentProps: {
                            image: doc
                          },
                          cssClass: 'view-image-modal'
                        });

                      case 2:
                        modal = _context.v;
                        _context.n = 3;
                        return modal.present();

                      case 3:
                        _context.n = 5;
                        break;

                      case 4:
                        this.alertService.error('Error in getting document');

                      case 5:
                        return _context.a(2);
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }, {
          key: "showplan",
          value: function showplan() {
            this.router.navigate(["/tabs/aadhitiya-session"]);
          }
        }, {
          key: "sessionPlan",
          value: function sessionPlan() {
            this.router.navigate(["/tabs/session-plan"]);
          }
        }, {
          key: "sessionSummary",
          value: function sessionSummary() {
            this.router.navigate(["/tabs/session-summary"]);
          }
        }, {
          key: "backBtn",
          value: function backBtn() {
            this.router.navigate(["/tabs/ka-session-verification"]);
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            if (this.allowReasons == 2) {
              if (this.reasonData != null) {
                this.submitAllow = true;
              } else {
                this.alertService.error('Please Enter The Reasons');
              }
            } else {
              this.submitAllow = true;
            }

            if (this.submitAllow) {
              var val = {
                "IndxId": this.uploadDet[0].IndxId,
                "SchlId": this.school_id,
                "Stauts": this.allowReasons,
                "BrteId": this.emisName,
                "Reasons": this.reasonData
              };
              this.emisService.ArpBrteVerifyStaus({
                "records": val
              }).subscribe(function (res) {
                if (res.dataStatus) {
                  _this4.alertService.success('Verified Successfully');

                  _this4.router.navigate(["/tabs/ka-session-verification"]);
                } else {
                  _this4.alertService.error('Unable to Verified');
                }
              });
            }
          }
        }]);
      }();

      _AadhitiyaSessionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }];
      };

      _AadhitiyaSessionPage.propDecorators = {
        myVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: ['video']
        }],
        myAudio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: ['audio']
        }]
      };
      _AadhitiyaSessionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-aadhitiya-session',
        template: _raw_loader_aadhitiya_session_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aadhitiya_session_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AadhitiyaSessionPage);
      /***/
    },

    /***/
    32753:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".color {\n  background-color: #03BECB;\n}\n\n.Div_plan {\n  padding: 25px;\n  border: 3px solid #8934E7;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n}\n\n.Div_font {\n  font-size: 14px;\n  font-weight: bold;\n  color: #182D80;\n}\n\n.Div_color {\n  align-self: self-end;\n  color: azure;\n  padding-left: 5px;\n}\n\n.Div_size {\n  text-align: center;\n  color: white;\n  align-self: center;\n  font-size: 20px;\n}\n\n.Div_summary {\n  padding: 24px;\n  border: 3px solid #22720E;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n}\n\n.Div_attnce {\n  border: 1px solid #8934E7;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.imgRow {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFhZGhpdGl5YS1zZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxhQUFBO0VBQWMsNkJBQUE7QUFPbEIiLCJmaWxlIjoiYWFkaGl0aXlhLXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzQkVDQjtcclxuICBcclxuICB9XHJcbiAgLkRpdl9wbGFue1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4OTM0RTc7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2ZvbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzE4MkQ4MDtcclxuICB9XHJcbiAgLkRpdl9jb2xvcntcclxuICAgIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5EaXZfc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLkRpdl9zdW1tYXJ5e1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMjcyMEU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2F0dG5jZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4OTM0RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltZ1Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    60886:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>aadhitiya-session</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" >\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"backBtn()\"></ion-icon>\r\n      <!-- <ion-icon class=\"back-icon\" name=\"arrow-back\" name=\"person-circle-outline\" size=\"large\"></ion-icon> -->\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Art and Culture</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-row style=\"margin: 15px;margin-top: 9%;\">\r\n  <!--<ion-col size=\"6\">\r\n    <div class=\"Div_plan\">\r\n      <ion-label class=\"Div_font\">Session Plan</ion-label>\r\n    </div>\r\n    <ion-row style=\"background-color: #8934E7;\" (click)=\"sessionPlan()\">\r\n      <ion-col size=\"8\">\r\n        <div class=\"Div_color\"(click)=\"showplan()\">See mores\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"Div_size\">\r\n        <div>\r\n          <ion-icon name='arrow-forward-circle'></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col> -->\r\n  \r\n  <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_summary\">\r\n      <ion-label class=\"Div_font\">Session Summary</ion-label>\r\n    </div>\r\n    <ion-row style=\"background-color: #22720E;\" (click)=\"sessionSummary()\">\r\n      <ion-col size=\"8\">\r\n        <div class=\"Div_color\">See mores\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"Div_size\">\r\n        <div>\r\n          <ion-icon name='arrow-forward-circle'></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col> -->\r\n\r\n\r\n  <ion-col size=\"6\" class=\"Div_attnce\" (click)=\"summary()\">\r\n    <ion-row class=\"imgRow\">\r\n        <div style=\"font-size: 15px;\">Summary</div>\r\n    </ion-row>\r\n  </ion-col>\r\n  <!-- <ion-col size=\"4\" class=\"Div_attnce\" (click)=\"attendence()\">\r\n    <ion-row class=\"imgRow\">\r\n      <div >\r\n        <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> \r\n      </div>\r\n        <div style=\"font-size: 15px;\">Attendance</div>\r\n    </ion-row>\r\n  </ion-col> -->\r\n  <ion-col size=\"6\" class=\"Div_attnce\" (click)=\"gallery()\">\r\n    <ion-row class=\"imgRow\">\r\n        <div style=\"font-size: 15px;\">Gallery</div>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n\r\n  \r\n<ion-row style=\"background-color:#917AFE;padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"studentList\">\r\n  <ion-col size=\"6.5\" style=\"border-right: 1px solid white;\">\r\n    <div style=\"color:white\">\r\n      <ion-label>Student Name</ion-label>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"5.5\">\r\n    <div style=\"color:white;padding-left: 5px;\">\r\n      <ion-label>Rating</ion-label>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n<div *ngIf=\"studentList\">\r\n  <ion-row class=\"stuName\" *ngFor=\"let data of studList;index as j\">\r\n    <ion-col size=\"6.5\" style=\"border-right: 1px solid lightgray;\">\r\n      <div style=\"padding-left: 5px;\">\r\n        <ion-label>{{data.StudName}}</ion-label><br>\r\n        <!-- <ion-label>{{data.class_studying_id == 6 ? 'VI' : data.class_studying_id == 7 ? 'VII' : data.class_studying_id == 8 ? 'VIII' : 'IX'}} - {{data.class_section}}  {{data.user_id}}</ion-label> -->\r\n        <ion-label>{{data.StudId}}</ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"5.5\">\r\n      <div *ngIf=\"data.Rating == 5\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 4\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 3\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 2\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 1\"><ion-icon name=\"star\"></ion-icon></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n\r\n<ion-row style=\"background-color:#917AFE;padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"attendance\">\r\n  <ion-col size=\"12\">\r\n    <div style=\"color:white\">\r\n      <ion-label>Student Attendance Percentage is 75%</ion-label>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"galleryPhoto\">\r\n  <ion-col size=\"12\" *ngIf=\"this.uploadDet[0].Photo\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <p>Please Click To View</p>\r\n        <a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.uploadDet[0].Photo)\">\r\n          View Image : {{this.uploadDet[0].Photo | json}}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"12\" *ngIf=\"this.uploadDet[0].Photo1\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <p>Please Click To View</p>\r\n        <a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.uploadDet[0].Photo1)\">\r\n          View Image : {{this.uploadDet[0].Photo1 | json}}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"12\" *ngIf=\"vidUrl\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <video controls width=\"100%\" height=\"210\" #video type=\"video/mp4\" controlsList=\"nodownload\">\r\n          <source src={{vidUrl}} type=\"video/mp4\">\r\n        </video>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"vidUrl\" style=\"margin: 15px;margin-top: 5%;\">\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"statusChk == 0\">\r\n      <ion-label>Please Select Verified / Not Verified</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;background-color: #d8b7ef; border-radius: 31px;\" *ngIf=\"statusChk != 0\">\r\n    <ion-label>{{statusChk == 1 ? 'Verified' : 'Not Verified' }}</ion-label>\r\n</ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"statusChk == 0\">\r\n    <ion-select [(ngModel)]=\"statusChk\" (ngModelChange)=\"mySelectHandler($event)\" placeholder=\"Please Select\" style=\"background-color: #d8b7ef; border-radius: 10px;\">\r\n      <ion-select-option [value]=\"1\">Verified</ion-select-option>\r\n      <ion-select-option [value]=\"2\">Not Verified</ion-select-option>\r\n    </ion-select>\r\n  </ion-col>\r\n  <ion-col size=\"6\" *ngIf=\"allowReasons == 2\">\r\n    <ion-label>Enter Reasons <span style=\"color:red\">*</span></ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"allowReasons == 2 || statusChk == 2\">\r\n      <input required=\"true\" type=\"text\" (keyup)=\"valReasons($event)\" placeholder=\"Please Enter Reason\" disabled=\"statusChk == 2\" [(ngModel)]=\"reasonChk\" class=\"w-100\" />\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\" *ngIf=\"allowReasons == 1 || allowReasons == 2\">\r\n    <div style=\"text-align: center;\" (click)=\"save()\" >\r\n      <button class=\"btn\" style=\"background-color: #d8b7ef; border-radius: 10px;\">Submit</button>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_art-culture_aadhitiya-session_aadhitiya-session_module_ts-es5.js.map