(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-list_observation-list_module_ts"], {
    /***/
    49642:
    /*!************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-list/observation-list.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationListPageModule": function ObservationListPageModule() {
          return (
            /* binding */
            _ObservationListPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _observation_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./observation-list.page */
      79165);

      var routes = [{
        path: '',
        component: _observation_list_page__WEBPACK_IMPORTED_MODULE_0__.ObservationListPage
      }];

      var _ObservationListPageModule = /*#__PURE__*/_createClass(function ObservationListPageModule() {
        _classCallCheck(this, ObservationListPageModule);
      });

      _ObservationListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_observation_list_page__WEBPACK_IMPORTED_MODULE_0__.ObservationListPage]
      })], _ObservationListPageModule);
      /***/
    },

    /***/
    79165:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-list/observation-list.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationListPage": function ObservationListPage() {
          return (
            /* binding */
            _ObservationListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation-list.page.html */
      1220);
      /* harmony import */


      var _observation_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation-list.page.scss */
      68654);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */
      90110);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      var _ObservationListPage = /*#__PURE__*/function () {
        function ObservationListPage(actionSheetController, apiService, ionicStorageService, loaderService) {
          _classCallCheck(this, ObservationListPage);

          this.actionSheetController = actionSheetController;
          this.apiService = apiService;
          this.ionicStorageService = ionicStorageService;
          this.loaderService = loaderService;
          this.lastUpdated_value = '';
          this.local_list_data = [];
        }

        return _createClass(ObservationListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getObservationList();
          }
        }, {
          key: "getObservationList",
          value: function getObservationList() {
            var _this = this;

            this.loaderService.presentLoading();
            this.ionicStorageService.getData('observation_list').then(function (local_data) {
              _this.ionicStorageService.getData('store_observation').then(function (local_stored) {
                if (local_stored) {
                  local_stored = JSON.parse(local_stored);
                  _this.local_list_data = local_stored.map(function (val) {
                    return val.data.records.form_values;
                  });
                  var temp = [];

                  _this.local_list_data.map(function (res) {
                    var d = res.filter(function (val) {
                      return val.classroom_data;
                    })[0];
                    var class_type = res.filter(function (val) {
                      return val.classroom_type;
                    })[0];
                    class_type = class_type.classroom_type;
                    d.classroom_data[1]["class"] = class_type.hasOwnProperty('class') ? class_type["class"] : class_type.class_observed;
                    d.classroom_data[1].section = class_type.section;
                    temp.push(d.classroom_data[1]);
                  });

                  _this.local_list_data = temp;
                }

                if (local_data) {
                  _this.observation_list_data = local_data.records;
                  _this.lastUpdated_value = local_data.lastUpdated;

                  _this.loaderService.dismissLoader();
                } else {
                  var params = {
                    start_date: null,
                    end_date: null
                  };

                  _this.apiService.getObservationList(params).subscribe(function (result) {
                    if (result['dataStatus']) {
                      _this.observation_list_data = result['records'];
                      _this.lastUpdated_value = new Date();
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var actionSheet;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.actionSheetController.create({
                      header: '',
                      buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {}
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 1:
                    actionSheet = _context.v;
                    _context.n = 2;
                    return actionSheet.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            var params = {
              start_date: null,
              end_date: null
            };
            this.apiService.getObservationList(params).subscribe(function (result) {
              if (result['dataStatus']) {
                _this2.observation_list_data = result['records'];
                _this2.lastUpdated_value = new Date();
              }
            });
            setTimeout(function () {
              event.target.complete();
            }, 2000);
          }
        }]);
      }();

      _ObservationListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_3__.LoaderServiceService
        }];
      };

      _ObservationListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-observation-list',
        template: _raw_loader_observation_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationListPage);
      /***/
    },

    /***/
    68654:
    /*!************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-list/observation-list.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fixed[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\n.fixed[scrollx=true] ::-webkit-scrollbar, div[scrolly=true] ::-webkit-scrollbar {\n  display: none;\n}\n.fixed[scrollx=true] {\n  overflow-x: auto;\n}\n.fixed[scrolly=true] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFHRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBQUoiLCJmaWxlIjoib2JzZXJ2YXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWRbc2Nyb2xseD10cnVlXSwgZGl2W3Njcm9sbHk9dHJ1ZV0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZml4ZWRbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZml4ZWRbc2Nyb2xseT10cnVlXSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    1220:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-list/observation-list.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Observation List</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content\r\n          pullingIcon=\"arrow-dropdown\"\r\n          pullingText=\"Pull to refresh\"\r\n          refreshingSpinner=\"circles\"\r\n          refreshingText=\"Refreshing...\">\r\n        </ion-refresher-content>\r\n      </ion-refresher>\r\n  <ion-list style=\"position: relative;bottom:3px;\">\r\n      <div *ngIf=\"local_list_data.length > 0\">\r\n    <ion-item *ngFor=\"let data of local_list_data;let index=index\"> \r\n        <ion-icon slot=\"start\" name=\"cloud-upload\" style=\"color:orange\"></ion-icon>\r\n      \r\n        <ion-label text-wrap>\r\n          <h2 >\r\n            <ion-col>{{data.school_name}}</ion-col></h2>\r\n          <h3><ion-col size=30>{{data.block_name}},{{data.district_name}}</ion-col>|\r\n            <ion-col style=\"color:orange;font-size:14px;\">Not Synced</ion-col></h3>\r\n       \r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item *ngFor=\"let data of observation_list_data;let index=index\"> \r\n      <ion-icon slot=\"start\" name=\"checkmark-circle\" style=\"color:green\"></ion-icon>\r\n      <ion-label text-wrap>\r\n        <h2>\r\n          <ion-col>{{data.school_name}}</ion-col></h2>\r\n        <h3><ion-col size=30>{{data.block_name}},{{data.district_name}}</ion-col>|\r\n         {{data.class}}<span *ngIf=\"data.section\"> '{{data.section.toUpperCase()}}'</span></h3>\r\n        <p><ion-col>{{data.createdon}}</ion-col> |\r\n          <ion-col style=\"color:green;font-size:14px;\">Synced</ion-col></p>\r\n      </ion-label>\r\n    </ion-item>\r\n   \r\n    </ion-list>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n      <ion-fab-button size=\"small\" routerLink=\"/tnvntabs/page-route/classroom-data\" routerDirection=\"forward\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n<ion-footer style=\"height: 30px;\" *ngIf=\"lastUpdated_value != ''\">\r\n  <ion-text><p style=\"text-align: center;color:gray;font-size: 12px;\">{{lastUpdated_value | date:'medium'}}</p></ion-text>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-list_observation-list_module_ts-es5.js.map