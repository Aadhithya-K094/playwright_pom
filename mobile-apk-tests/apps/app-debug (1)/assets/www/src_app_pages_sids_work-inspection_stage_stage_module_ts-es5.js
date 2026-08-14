(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_work-inspection_stage_stage_module_ts"], {
    /***/
    21033:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/stage/stage-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StagePageRoutingModule": function StagePageRoutingModule() {
          return (
            /* binding */
            _StagePageRoutingModule
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


      var _stage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stage.page */
      47444);

      var routes = [{
        path: '',
        component: _stage_page__WEBPACK_IMPORTED_MODULE_0__.StagePage
      }];

      var _StagePageRoutingModule = /*#__PURE__*/_createClass(function StagePageRoutingModule() {
        _classCallCheck(this, StagePageRoutingModule);
      });

      _StagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StagePageRoutingModule);
      /***/
    },

    /***/
    57940:
    /*!******************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/stage/stage.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StagePageModule": function StagePageModule() {
          return (
            /* binding */
            _StagePageModule
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


      var _stage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stage-routing.module */
      21033);
      /* harmony import */


      var _stage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stage.page */
      47444);

      var _StagePageModule = /*#__PURE__*/_createClass(function StagePageModule() {
        _classCallCheck(this, StagePageModule);
      });

      _StagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _stage_routing_module__WEBPACK_IMPORTED_MODULE_0__.StagePageRoutingModule],
        declarations: [_stage_page__WEBPACK_IMPORTED_MODULE_1__.StagePage]
      })], _StagePageModule);
      /***/
    },

    /***/
    47444:
    /*!****************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/stage/stage.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StagePage": function StagePage() {
          return (
            /* binding */
            _StagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_stage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stage.page.html */
      4741);
      /* harmony import */


      var _stage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stage.page.scss */
      75622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _StagePage = /*#__PURE__*/function () {
        function StagePage(router, _apiService, alertService, ionicstorage, alertController, location, activateRoute) {
          _classCallCheck(this, StagePage);

          this.router = router;
          this._apiService = _apiService;
          this.alertService = alertService;
          this.ionicstorage = ionicstorage;
          this.alertController = alertController;
          this.location = location;
          this.activateRoute = activateRoute;
          this.imgPopup = false;
          this.timeLine = [];
        }

        return _createClass(StagePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.schoolId = this.activateRoute.snapshot.queryParams.school_id;
            this.list_id = this.activateRoute.snapshot.queryParams.list_id;
            this.curr_stage = this.activateRoute.snapshot.queryParams.curr_stage;
            console.log(this.schoolId, 'this.schoolId');
            this.getStageList();
          } // ionViewDidEnter(){
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getStageList",
          value: function getStageList() {
            var _this = this;

            debugger;
            this.ionicstorage.getData('inspectionData').then(function (dataa) {
              var inspectData = dataa.filter(function (x) {
                return x.school_id == _this.schoolId && x.id == _this.list_id;
              });
              _this.inspecList = inspectData[0];
              console.log(_this.inspecList, 'this.inspecList');

              var checkNtStart = _this.inspecList.stages.filter(function (x) {
                return x.stage == "Work not started" && x.date_of_completion != 0;
              });

              var checkrqLtr = _this.inspecList.stages.filter(function (x) {
                return x.stage == "Request Letter Sent" && x.date_of_completion != 0;
              });

              if (_this.curr_stage != 0 && checkNtStart.length > 0) {
                _this.timeLine = _this.inspecList.stages;
              } else if (_this.curr_stage != 0) {
                _this.timeLine = _this.inspecList.stages.filter(function (x) {
                  return x.stage != "Work not started";
                });
              } else {
                _this.timeLine = _this.inspecList.stages;
              } // FIXED IMAGE CHECK LOGIC


              _this.timeLine.forEach(function (element) {
                // Handle image source detection
                if (element.image && element.image !== 0 && element.image !== '0') {
                  var imageStr = String(element.image);

                  if (imageStr.startsWith('data:image')) {
                    // Base64 encoded image
                    element.checkImg = 1;
                  } else if (imageStr.includes('http://') || imageStr.includes('https://')) {
                    // Full URL image
                    element.checkImg = 2; // If it's already a full URL, use it as-is

                    element.image = imageStr;
                  } else {
                    // Just a filename - assume CloudFront
                    element.checkImg = 2; // Clean the filename and construct CloudFront URL

                    var cleanFileName = imageStr.replace(/^.*[\\\/]/, ''); // Remove any path

                    element.image = "https://deka0egrc3bqo.cloudfront.net/".concat(cleanFileName);
                  }
                } else {
                  element.checkImg = 0; // No image
                } // Handle uploads parsing


                if (element.uploads && element.uploads !== 0 && element.uploads !== '0') {
                  try {
                    if (typeof element.uploads === 'string') {
                      element.uploadfile = JSON.parse(element.uploads); // Also create uploadSplit for popup display

                      element.uploadSplit = JSON.parse(element.uploads);
                    } else {
                      element.uploadfile = element.uploads;
                      element.uploadSplit = element.uploads;
                    }
                  } catch (e) {
                    console.error('Error parsing uploads:', e, element.uploads);
                    element.uploadfile = [];
                    element.uploadSplit = [];
                  }
                } else {
                  element.uploadfile = [];
                  element.uploadSplit = [];
                }
              });

              if (_this.curr_stage != 26) {
                _this.timeLine.forEach(function (element, ind) {
                  if (element.stage == "Demolition not required") {
                    var varl = _this.timeLine.splice(ind, 1);
                  }

                  if (element.stage == "Request Letter Sent") {
                    if (element.date_of_completion != 0 && _this.timeLine[_this.timeLine.length - 1].date_of_completion == 0) {
                      var _varl = _this.timeLine.pop();
                    }
                  }

                  if (element.stage == "Building demolished and scrap cleared") {
                    if (element.date_of_completion != 0 && _this.timeLine[ind + 1].date_of_completion == 0) {
                      var _varl2 = _this.timeLine.splice(ind + 1, 1);
                    }
                  }

                  if (element.stage == "Yet to be demolished") {
                    if (element.date_of_completion == 0 && _this.timeLine[ind].date_of_completion == 0) {
                      var _varl3 = _this.timeLine.splice(ind, 1);
                    }
                  }
                });

                _this.timeLine.forEach(function (element, ind) {
                  if (element.stage == "Request Letter Sent") {
                    if (checkrqLtr.length == 0 && (_this.curr_stage == 20 || _this.curr_stage == 21)) {
                      var varl = _this.timeLine.splice(ind, 1);
                    }
                  }
                });
              } else {
                var gtTmLine = _this.timeLine.filter(function (x) {
                  return x.stage_id == 26;
                });

                _this.timeLine = gtTmLine;
              }

              var sameUsStage = _this.timeLine.filter(function (x) {
                return x.date_of_completion == 0;
              });

              var otherStage = _this.timeLine.filter(function (x) {
                return x.date_of_completion != 0;
              }).sort(function (a, b) {
                return Date.parse(b.date_of_completion) - Date.parse(a.date_of_completion);
              });

              console.log(sameUsStage, 'sameUsStage');
              console.log(otherStage, 'otherStage');
              console.log(_this.timeLine, 'this.timeLine');
              _this.timeLine = sameUsStage.concat(otherStage);

              _this.timeLine.forEach(function (x) {
                var splitMee = x.stage.split('-')[0];

                if (splitMee != undefined) {
                  x.stage = splitMee;
                }
              });

              console.log('Final timeline:', _this.timeLine);
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            // this.location.back();
            this.router.navigate(['/tabs/work-inspection']);
          }
        }, {
          key: "openPop",
          value: function openPop(data) {
            this.imgPopup = true;
            this.popData = data;
            console.log(this.popData, 'this.popData');
          }
        }, {
          key: "close",
          value: function close() {
            this.popData = '';
            this.imgPopup = false;
          }
        }, {
          key: "gotoForm",
          value: function gotoForm(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Are you sure this is the current status of project?',
                      message: "<h5>You Are selected the following stage. - ".concat(data.stage, "</h5>"),
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this2.router.navigate(['/tabs/my-inspection-from'], {
                            queryParams: {
                              'id': 1,
                              'stage': data.stage,
                              "school_id": _this2.schoolId
                            }
                          });
                        }
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      _StagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _StagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-stage',
        template: _raw_loader_stage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StagePage);
      /***/
    },

    /***/
    75622:
    /*!******************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/stage/stage.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#stage {\n  padding: 20px 0px;\n  position: relative;\n  border-top: 2px solid #9162b0;\n}\n#stage .line {\n  height: 82%;\n  border-left: 2px dashed #9162b0;\n  position: absolute;\n  left: 33%;\n  z-index: -1;\n  top: 4%;\n}\n#stage .info-bx {\n  display: flex;\n  align-items: start;\n  margin-bottom: 35px;\n}\n#stage .info-bx .stge {\n  width: 30%;\n  font-size: 16px;\n  text-align: right;\n  padding: 4px 10px 0px;\n  margin: 0px;\n}\n#stage .info-bx .circle {\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  border: 3px solid #5fb587;\n  color: #5fb587;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n}\n#stage .info-bx .toolbox {\n  width: 56%;\n  background: #f9f1fe;\n  border: 1px solid #9162b0;\n  padding: 10px;\n  position: relative;\n  margin-left: 16px;\n  border-radius: 8px;\n}\n#stage .info-bx .toolbox:before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: -7px;\n  height: 13px;\n  width: 13px;\n  background: #f9f1fe;\n  border-left: 1px solid #9162b0;\n  border-bottom: 1px solid #9162b0;\n  transform: rotate(45deg);\n}\n#stage .info-bx .toolbox img {\n  max-width: 40px;\n  max-height: 40px;\n  border-radius: 6px;\n  margin-left: 10px;\n}\n#stage .info-bx .toolbox p {\n  margin: 5px 0px 0px;\n  background: #ddb5e9;\n  padding: 7px;\n  font-size: 15px;\n  border-radius: 10px;\n}\n#stage .info-bx.pending .circle {\n  border-color: #ef666a;\n  color: #ef666a;\n}\n#stage .info-bx.pending .toolbox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0px 0px 10px;\n}\n#stage .info-bx.pending .toolbox .upload {\n  font-size: 24px;\n  border-left: 2px solid #9162b0;\n  padding: 6px 10px 0px 10px;\n  color: #9162b0;\n  background: #fff;\n  border-radius: 0px 10px 10px 0px;\n}\n.pop-up {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n}\n.pop-up .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n.pop-up .img-card {\n  position: relative;\n  width: 80%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n.pop-up .img-card img {\n  max-width: 90%;\n  max-height: 180px;\n  border-radius: 20px;\n  margin: 15px 0px 15px;\n}\n.pop-up .img-card table {\n  text-align: left;\n  width: 90%;\n  margin: 0px auto 20px;\n  font-size: 15px;\n}\n.pop-up .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #ef666a;\n  color: #ef666a;\n  font-size: 29px;\n  padding: 3px 5px;\n  position: absolute;\n  top: -27px;\n  right: -25px;\n}\n.pop-up.open {\n  top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0FBSWhCO0FBRlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUloQjtBQUFZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBRWhCO0FBQVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUdwQjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBQUo7QUFDSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDUjtBQUFRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUVaO0FBQVE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFWjtBQUNJO0VBQ0ksT0FBQTtBQUNSIiwiZmlsZSI6InN0YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM5MTYyYjA7XHJcbiAgICAubGluZXtcclxuICAgICAgICBoZWlnaHQ6IDgyJTtcclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCAjOTE2MmIwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAzMyU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgdG9wOiA0JTtcclxuICAgIH1cclxuICAgIC5pbmZvLWJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgICAgLnN0Z2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzVmYjU4NztcclxuICAgICAgICAgICAgY29sb3I6ICM1ZmI1ODc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b29sYm94e1xyXG4gICAgICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmMWZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE2MmIwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWYxZmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5MTYyYjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRiNWU5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnBlbmRpbmd7XHJcbiAgICAgICAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlZjY2NmE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudG9vbGJveHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIC51cGxvYWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wb3AtdXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC5ibGFja2Ryb3B7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZy1jYXJke1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZWY2NjZhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTI3cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm9wZW57XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    4741:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/work-inspection/stage/stage.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size:14px;\">{{inspecList?.school_name}}\r\n      ({{inspecList?.udise_code}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"stage\">\r\n    <div class=\"line\"></div>\r\n    <div class=\"info-bx\" [class.pending]=\"data.status == 'pending'\" *ngFor=\"let data of timeLine; let i = index\">\r\n      <h5 class=\"stge\">{{data.stage}}</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"{{data.status == 'completed' ? 'checkmark-sharp' : 'close-sharp'}}\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <div class=\"toolbox-left\">\r\n          <span>{{data.date_of_completion}}</span>\r\n\r\n          <div *ngIf=\"data.status == 'completed'\">\r\n            <p *ngFor=\"let uploadData of data.uploadfile\">\r\n              {{uploadData.fileName}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"toolbox-right\">\r\n          <!-- Base64 image -->\r\n          <img *ngIf=\"data.status == 'completed' && data.checkImg == 1 && data.image\" (click)=\"openPop(data)\"\r\n            [src]=\"data.image\" alt=\"\" onerror=\"this.style.display='none'\" style=\"\r\n       width:32px;\r\n       height:32px;\r\n       object-fit:cover;\r\n       border-radius:4px;\r\n       margin-left:auto;\r\n       display:block;\r\n       cursor:pointer;\r\n     \">\r\n\r\n          <!-- CloudFront image -->\r\n          <img *ngIf=\"data.status == 'completed' && data.checkImg == 2 && data.image\" (click)=\"openPop(data)\"\r\n            [src]=\"data.image\" alt=\"\" onerror=\"this.style.display='none'\" style=\"\r\n       width:32px;\r\n       height:32px;\r\n       object-fit:cover;\r\n       border-radius:4px;\r\n       margin-left:auto;\r\n       display:block;\r\n       cursor:pointer;\r\n     \">\r\n\r\n\r\n          <!-- Upload icon -->\r\n          <span class=\"upload\" *ngIf=\"data.status == 'pending'\">\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"pop-up\" [class.open]=\"imgPopup\">\r\n    <div class=\"blackdrop\" (click)=\"close()\"></div>\r\n    <div class=\"img-card\">\r\n      <!-- Popup images -->\r\n      <img *ngIf=\"popData?.checkImg == 1\" [src]=\"popData?.image\" alt=\"\">\r\n      <img *ngIf=\"popData?.checkImg == 2\" [src]=\"popData?.image\" alt=\"\">\r\n      <table>\r\n        <tr>\r\n          <td>Date</td>\r\n          <td>: {{popData?.date_of_completion}}</td>\r\n        </tr>\r\n        <tr *ngFor=\"let popdoc of popData?.uploadSplit\">\r\n          <td>Document</td>\r\n          <td>: {{popdoc.fileName}}</td>\r\n        </tr>\r\n      </table>\r\n      <button (click)=\"close()\"><ion-icon name=\"close-outline\"></ion-icon></button>\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_work-inspection_stage_stage_module_ts-es5.js.map