(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-resource_awc-resource_module_ts"], {
    /***/
    36396:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/awc/awc-resource/awc-resource-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcResourcePageRoutingModule": function AwcResourcePageRoutingModule() {
          return (
            /* binding */
            _AwcResourcePageRoutingModule
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


      var _awc_resource_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-resource.page */
      52158);

      var routes = [{
        path: '',
        component: _awc_resource_page__WEBPACK_IMPORTED_MODULE_0__.AwcResourcePage
      }];

      var _AwcResourcePageRoutingModule = /*#__PURE__*/_createClass(function AwcResourcePageRoutingModule() {
        _classCallCheck(this, AwcResourcePageRoutingModule);
      });

      _AwcResourcePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AwcResourcePageRoutingModule);
      /***/
    },

    /***/
    20936:
    /*!***************************************************************!*\
      !*** ./src/app/pages/awc/awc-resource/awc-resource.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcResourcePageModule": function AwcResourcePageModule() {
          return (
            /* binding */
            _AwcResourcePageModule
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


      var _awc_resource_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-resource-routing.module */
      36396);
      /* harmony import */


      var _awc_resource_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-resource.page */
      52158);

      var _AwcResourcePageModule = /*#__PURE__*/_createClass(function AwcResourcePageModule() {
        _classCallCheck(this, AwcResourcePageModule);
      });

      _AwcResourcePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _awc_resource_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcResourcePageRoutingModule],
        declarations: [_awc_resource_page__WEBPACK_IMPORTED_MODULE_1__.AwcResourcePage]
      })], _AwcResourcePageModule);
      /***/
    },

    /***/
    52158:
    /*!*************************************************************!*\
      !*** ./src/app/pages/awc/awc-resource/awc-resource.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcResourcePage": function AwcResourcePage() {
          return (
            /* binding */
            _AwcResourcePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_awc_resource_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./awc-resource.page.html */
      97284);
      /* harmony import */


      var _awc_resource_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-resource.page.scss */
      96050);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ennum_ezhuthum_truthing_services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ennum-ezhuthum-truthing/services/loader/ion-loader.service */
      21645);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AwcResourcePage = /*#__PURE__*/function () {
        function AwcResourcePage(file, androidPermissions, usersessionService, transfer, fileOpener, alertService, ionLoaderService, router) {
          _classCallCheck(this, AwcResourcePage);

          this.file = file;
          this.androidPermissions = androidPermissions;
          this.usersessionService = usersessionService;
          this.transfer = transfer;
          this.fileOpener = fileOpener;
          this.alertService = alertService;
          this.ionLoaderService = ionLoaderService;
          this.router = router;
        }

        return _createClass(AwcResourcePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "downloadExlWithPermission",
          value: function downloadExlWithPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (status) {
                      if (status.hasPermission) {
                        _this.downloadExcel();
                      } else {
                        _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]).then(function (status) {
                          if (status.hasPermission) {
                            _this.downloadExcel();
                          }

                          ;
                        });
                      }
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "downloadExcel",
          value: function downloadExcel() {
            var _this2 = this;

            var url = 'https://deka0egrc3bqo.cloudfront.net/GMC_ICDS.pdf';
            var userId = this.usersessionService.emis_username();
            var fileExtension = '.pdf';
            var fileName = 'AWC-Resource' + Date.now().toString(); // if (val == 1) {
            //   url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/'+userId+'-MHT-Wise-User-Level-Rpt.xlsx';
            //   fileName = 'MHT-Report' + Date.now().toString();
            // } else if(val==2){
            //   url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/'+userId+'-Pmoa-Line-List-Rpt.xlsx';
            //   fileName = 'PMOA-Report' + Date.now().toString();
            // }

            this.ionLoaderService.simpleLoader();
            var fileTransfer = this.transfer.create();
            fileTransfer.download(url, this.file.externalRootDirectory + '/Download/' + fileName + fileExtension, true).then(function (entry) {
              // fileTransfer.download(workbook,true)
              _this2.ionLoaderService.dismissLoader();

              _this2.fileOpener.showOpenWithDialog(entry.toURL(), 'application/pdf').then(function () {
                return console.log('File is opened');
              })["catch"](function (e) {
                return console.log('Error opening file', e);
              });

              console.log('download complete: ' + entry.toURL());
            }, function (error) {
              _this2.alertService.warning("Error While getting report");

              console.log('err', error);
            });
          }
        }]);
      }();

      _AwcResourcePage.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
        }, {
          type: _ennum_ezhuthum_truthing_services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_8__.IonLoaderService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _AwcResourcePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-awc-resource',
        template: _raw_loader_awc_resource_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_awc_resource_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AwcResourcePage);
      /***/
    },

    /***/
    96050:
    /*!***************************************************************!*\
      !*** ./src/app/pages/awc/awc-resource/awc-resource.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.p-10p {\n  padding: 10px;\n}\n\n.cusIcon {\n  font-size: 25px;\n}\n\n.titleCus {\n  margin: 0;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1yZXNvdXJjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoiYXdjLXJlc291cmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnAtMTBwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXNJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4udGl0bGVDdXMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    97284:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-resource/awc-resource.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Resource</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"p-10p\">\r\n    <div class=\"mainLable\" (click)=\"downloadExlWithPermission()\"> \r\n      <h6 class=\"titleCus\">Growth Monitoring Chart</h6>\r\n      <ion-icon name=\"cloud-download-outline\" class=\"cusIcon\"></ion-icon>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_awc_awc-resource_awc-resource_module_ts-es5.js.map