(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_module-menu_module-menu_module_ts"], {
    /***/
    79276:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu-routing.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleMenuPageRoutingModule": function ModuleMenuPageRoutingModule() {
          return (
            /* binding */
            _ModuleMenuPageRoutingModule
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


      var _module_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-menu.page */
      60262);

      var routes = [{
        path: '',
        component: _module_menu_page__WEBPACK_IMPORTED_MODULE_0__.ModuleMenuPage
      }];

      var _ModuleMenuPageRoutingModule = /*#__PURE__*/_createClass(function ModuleMenuPageRoutingModule() {
        _classCallCheck(this, ModuleMenuPageRoutingModule);
      });

      _ModuleMenuPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ModuleMenuPageRoutingModule);
      /***/
    },

    /***/
    36491:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleMenuPageModule": function ModuleMenuPageModule() {
          return (
            /* binding */
            _ModuleMenuPageModule
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


      var _module_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-menu-routing.module */
      79276);
      /* harmony import */


      var _module_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./module-menu.page */
      60262);

      var _ModuleMenuPageModule = /*#__PURE__*/_createClass(function ModuleMenuPageModule() {
        _classCallCheck(this, ModuleMenuPageModule);
      });

      _ModuleMenuPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _module_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleMenuPageRoutingModule],
        declarations: [_module_menu_page__WEBPACK_IMPORTED_MODULE_1__.ModuleMenuPage]
      })], _ModuleMenuPageModule);
      /***/
    },

    /***/
    60262:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleMenuPage": function ModuleMenuPage() {
          return (
            /* binding */
            _ModuleMenuPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_module_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./module-menu.page.html */
      78101);
      /* harmony import */


      var _module_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./module-menu.page.scss */
      67840);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _ModuleMenuPage = /*#__PURE__*/function () {
        function ModuleMenuPage(router, userSessionService, apiService, alertController, ionicstorage) {
          _classCallCheck(this, ModuleMenuPage);

          this.router = router;
          this.userSessionService = userSessionService;
          this.apiService = apiService;
          this.alertController = alertController;
          this.ionicstorage = ionicstorage;
          this.menuE = true;
          this.fullMenu = true;
          this.menuEE = true;
          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emis_usertype1 = this.userSessionService.emis_usertype1();
        }

        return _createClass(ModuleMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            debugger; // this.getSchoolDetails();
          }
        }, {
          key: "getSchoolDetails",
          value: function getSchoolDetails() {
            var _this = this;

            this.apiService.eet_school_observation().subscribe(function (dataval) {
              try {
                if (Object.keys(dataval.record).length > 0 && dataval.status == 200 && dataval.dataStatus == true) {
                  _this.start_datae = dataval.record.start_date;
                  _this.end_datae = dataval.record.end_date;
                  _this.currentDate = new Date().toJSON().slice(0, 10);

                  _this.ionicstorage.insertData_Replace('eetSurveyLevel', dataval.record.level);

                  console.log(_this.currentDate); // this.palliparvaiRoute('');
                } else {
                  if (Object.keys(dataval.record).length == 0) {
                    throw 'There is no Data';
                  } else if (dataval.status != 200 || dataval.dataStatus == false) {
                    _this.fullMenu = false;
                    _this.showMsg = dataval.record ? dataval.record : "API Error";
                    console.log(_this.showMsg);
                    throw _this.showMsg;
                  } else {
                    _this.showMsg = "API Error";
                    console.log(_this.showMsg);
                    throw _this.showMsg;
                  }
                }
              } catch (err) {
                _this.errorMsg = err;

                _this.apiService.displayToast(err, true);

                _this.errorLog(err, {});
              }
            }, function (error) {
              debugger;
              console.log('oops11111', error);

              _this.errorLog(error === null || error === void 0 ? void 0 : error.message, {});

              console.log('oops22222', error === null || error === void 0 ? void 0 : error.message);
            });
          }
        }, {
          key: "errorLog",
          value: function errorLog(err, payload) {
            var record = {
              "observation_id": '',
              "school_id": '',
              "student_id": "",
              "oberved_date": "",
              "oberved_by": "",
              "page": 'L1-1',
              "error": err,
              "payload": JSON.stringify(payload),
              "result": ""
            };
            console.log(record, 'recordrecord');
            this.apiService.eet_error_log(record).subscribe(function (data) {
              try {
                if (data.status == 200) {
                  throw "Data Saved Successfully";
                } else {
                  throw "Server not found";
                }
              } catch (err) {
                // this.apiService.displayToast(err, false);
                console.log('Error log api ' + err);
              }
            });
          } //  generateDateList(from, to) {
          //   var getDate = function(date) { //Mysql Format
          //       var m = date.getMonth(), d = date.getDate();
          //       return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
          //   }
          //   var fs = from.split('-'), startDate = new Date(fs[0], fs[1], fs[2]), result = [getDate(startDate)], start = startDate.getTime(), ts, end;
          //   if ( typeof to == 'undefined') {
          //       end = new Date().getTime();
          //   } else {
          //       ts = to.split('-');
          //       end = new Date(ts[0], ts[1], ts[2]).getTime();
          //   }
          //   while (start < end) {
          //       start += 86400000;
          //       startDate.setTime(start);
          //       result.push(getDate(startDate));
          //   }
          //   return result;
          //  }

        }, {
          key: "palliparvaiRoute",
          value: function palliparvaiRoute(path) {
            if (this.currentDate >= this.start_datae && this.currentDate <= this.end_datae) {
              if (path == '/tabs/menu') {
                this.router.navigate([path]);
              } else {
                this.checkObservationPalli();
              }
            } else {
              if (path == '/tabs/menu') {
                this.checkObservation();
              } else {
                this.router.navigate([path]);
              }
            }
          }
        }, {
          key: "underMaintaines",
          value: function underMaintaines() {
            this.maintainence();
          } // palliparvaimainRoute(path){
          //   this.router.navigate([path])
          // }

        }, {
          key: "maintainence",
          value: function maintainence() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Important message',
                      message: 'The Palli Paarvai module is under maintenance, kindly wait until futher notice.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this2.router.navigate(['/tabs/home']);
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
        }, {
          key: "checkObservation",
          value: function checkObservation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Important message',
                      message: 'Access to this Ennum Ezhuthum is restricted between ' + this.start_datae + ' & ' + this.end_datae,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {// this.updateObservation();
                        }
                      }]
                    });

                  case 1:
                    alert = _context2.v;
                    _context2.n = 2;
                    return alert.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkObservationPalli",
          value: function checkObservationPalli() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Important message',
                      message: 'Access to this School Observation is restricted between ' + this.start_datae + ' & ' + this.end_datae,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {// this.updateObservation();
                        }
                      }]
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _ModuleMenuPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }];
      };

      _ModuleMenuPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-module-menu',
        template: _raw_loader_module_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_module_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModuleMenuPage);
      /***/
    },

    /***/
    67840:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\n.icon-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-content {\n  margin-top: 10%;\n}\n\nion-back-button {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6Im1vZHVsZS1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXHJcbiAgfVxyXG4gIC5pY29uLWF2YXRhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG4gIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */";
      /***/
    },

    /***/
    78101:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"header-style\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 1</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && (emis_usertype1 == '1' || emis_usertype1 == '2')\">L2 - 1</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\" >\r\n    <!-- <ion-item button (click)=\"classRoom()\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Classroom Details\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <ion-item button (click)=\"palliparvaiRoute('/tnvntabs/page-route/dashboardc')\" *ngIf=\"menuE\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        School Observation\r\n      </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item button (click)=\"underMaintaines()\" *ngIf=\"menuE\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        School Observation\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <!-- <ion-item *ngIf=\"menuEE\" button (click)=\"palliparvaiRoute('/tabs/menu')\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Ennum Ezhuthum Survey\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <!-- <span *ngFor=\"let data of newmenus\">\r\n      <ion-item button [disabled]=\"data.disabled\" (click)=\"navigateModule(data.routerlink,data.assessment_type)\" detail>\r\n        <img width=\"30\" src=\"{{data.imgsrc}}\" />\r\n        <ion-label class=\"ion-text-center\">\r\n          {{data.name}}\r\n        </ion-label>\r\n      </ion-item>\r\n    </span> -->\r\n    <!-- <ion-item button detail routerLink=\"/tabs/assessment-report-menu\">\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/studentreportcard.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Assessment Reports\r\n      </ion-label>\r\n    </ion-item> -->\r\n  </ion-card>\r\n  <!-- <h5 style=\"text-align: center; margin-top: 100px;\">{{this.showMsg}}</h5> -->\r\n\r\n\r\n  <!-- <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <div *ngIf=\"saving\" style=\"padding:5px;padding: 10px;\r\n    background: #c5c1c1;\">Saving...</div>\r\n    <div>\r\n      <ion-button *ngIf=\"remainguserdata > 0\" style=\"--background: #c34242;width: 90%;\r\n        margin: 20px\"\r\n        (click)=\"saveRemainingData();saveRemainingDataFormative();saveRemainingDataSummative();saveRemainingDataFormative_A()\">Data\r\n        Save Pending</ion-button>\r\n    </div>\r\n  </ion-col> -->\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_module-menu_module-menu_module_ts-es5.js.map