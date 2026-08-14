(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_general_schooldata_schooldata_module_ts"], {
    /***/
    92006:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/sids/general/schooldata/schooldata-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchooldataPageRoutingModule": function SchooldataPageRoutingModule() {
          return (
            /* binding */
            _SchooldataPageRoutingModule
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


      var _schooldata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./schooldata.page */
      77087);

      var routes = [{
        path: '',
        component: _schooldata_page__WEBPACK_IMPORTED_MODULE_0__.SchooldataPage
      }];

      var _SchooldataPageRoutingModule = /*#__PURE__*/_createClass(function SchooldataPageRoutingModule() {
        _classCallCheck(this, SchooldataPageRoutingModule);
      });

      _SchooldataPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchooldataPageRoutingModule);
      /***/
    },

    /***/
    99485:
    /*!********************************************************************!*\
      !*** ./src/app/pages/sids/general/schooldata/schooldata.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchooldataPageModule": function SchooldataPageModule() {
          return (
            /* binding */
            _SchooldataPageModule
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


      var _schooldata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./schooldata-routing.module */
      92006);
      /* harmony import */


      var _schooldata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./schooldata.page */
      77087);

      var _SchooldataPageModule = /*#__PURE__*/_createClass(function SchooldataPageModule() {
        _classCallCheck(this, SchooldataPageModule);
      });

      _SchooldataPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _schooldata_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchooldataPageRoutingModule],
        declarations: [_schooldata_page__WEBPACK_IMPORTED_MODULE_1__.SchooldataPage]
      })], _SchooldataPageModule);
      /***/
    },

    /***/
    77087:
    /*!******************************************************************!*\
      !*** ./src/app/pages/sids/general/schooldata/schooldata.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchooldataPage": function SchooldataPage() {
          return (
            /* binding */
            _SchooldataPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_schooldata_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./schooldata.page.html */
      46926);
      /* harmony import */


      var _schooldata_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./schooldata.page.scss */
      13284);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _SchooldataPage = /*#__PURE__*/function () {
        function SchooldataPage(router, formBuilder, route, file, geolocation, alertController, sanitizer, sqliteDB, uploadService, utilityService, camera, sidsService, androidPermissions, userSessionService, NetworkService, alertService, el, ionicstorage) {
          _classCallCheck(this, SchooldataPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.route = route;
          this.file = file;
          this.geolocation = geolocation;
          this.alertController = alertController;
          this.sanitizer = sanitizer;
          this.sqliteDB = sqliteDB;
          this.uploadService = uploadService;
          this.utilityService = utilityService;
          this.camera = camera;
          this.sidsService = sidsService;
          this.androidPermissions = androidPermissions;
          this.userSessionService = userSessionService;
          this.NetworkService = NetworkService;
          this.alertService = alertService;
          this.el = el;
          this.ionicstorage = ionicstorage;
          this.data = [];
          this.ConnectionType = [{
            value: "1",
            label: 'Broadband'
          }, {
            value: "2",
            label: 'Fibrenet'
          }, {
            value: "3",
            label: 'Cable'
          }, {
            value: "4",
            label: 'Cellular'
          }, {
            value: "5",
            label: 'DSL(Digital Subscriber Line)'
          }, {
            value: "6",
            label: 'ISDN'
          }, {
            value: "7",
            label: 'Others'
          }];
          this.ProviderService = [{
            value: "1",
            label: 'Airtel'
          }, {
            value: "2",
            label: 'BSNL'
          }, {
            value: "3",
            label: 'ACT '
          }, {
            value: "4",
            label: 'Hathway'
          }, {
            value: "5",
            label: 'VI'
          }, {
            value: "6",
            label: 'Jio'
          }, {
            value: "7",
            label: 'Others'
          }];
          this.Electricity = [{
            value: "1",
            label: 'Yes'
          }, {
            value: "2",
            label: 'No'
          }, {
            value: "3",
            label: 'Yes but not Functional '
          }];
          this.SolarPanel = [{
            value: "1",
            label: 'Yes'
          }, {
            value: "2",
            label: 'No'
          }, {
            value: "3",
            label: 'Yes but not Functional '
          }];
          this.PowerBackup = [{
            value: "1",
            label: 'Yes'
          }, {
            value: "2",
            label: 'No'
          }, {
            value: "3",
            label: 'Yes but not Functional'
          }];
        }

        return _createClass(SchooldataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // this.form.reset();
            this.routeData = this.route.snapshot;
            this.SchlId = this.routeData.queryParams.schoolId;
            this.VistUId = this.routeData.queryParams.vistId;
            console.log(this.SchlId, this.VistUId, "data");
            this.udiseCode = this.utilityService.udiseCode;
            this.checkLocalDB();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.serverData();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            console.log(this.SchlId, this.VistUId, "data");
            this.form = this.formBuilder.group({
              "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.SchlId, null),
              "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.VistUId, null),
              "SiteNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "SiteNumRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "TotalArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "TotalAreaRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "TotalLandAreaExcludPg": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "TotalLandAreaExcludPgRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpLaptopYN": new FormControl(false, null),
              "LaptopNumFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(25)]),
              "LaptopNumFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpLaptopNonFun": new FormControl('', null),
              // "PurpComputerYN": new FormControl(false, null),
              "ComputerNumFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(25)]),
              "ComputerNumFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpComputerNonFun": new FormControl('', null),
              // "PurpTabYN": new FormControl(false, null),
              "TabNumFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(25)]),
              "TabNumFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpTabNonFun": new FormControl('', null),
              // "PurpPrinterYN": new FormControl(false, null),
              "PurpPrinterFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "PurpPrinterFunRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpPrinterNonFun": new FormControl('', null),
              // "PurpProjectorYN": new FormControl(false, null),
              "PrjctrNumFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "PrjctrNumFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "PurpProjectorNonFun": new FormControl('', null),
              "ScannerNumFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "ScannerNumFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "InternetYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetType": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetTypeOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetTypeOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetServProv": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetServProvRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetServProvOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "InternetServProvOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "Bandwidth": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(0, null),
              "BandwidthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralPhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "GeneralPhotoRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralPhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralPhotoNameRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              // "ElectricityAvai": new FormControl('', Validators.required),
              "SolarPanelAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "SolarPanelAvaiRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneratorAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "GeneratorAvaiRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralLatitudeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "GeneralLongitudeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null)
            });
            console.log(this.form);
          }
        }, {
          key: "serverData",
          value: function serverData() {
            var _this = this;

            var query = 'SELECT * FROM sidsGeneralServer' + ' WHERE SclId = "' + this.SchlId + '"' + ' And VistId = "' + this.VistUId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.serverDatas = true;
                console.log('Server general');
              } else {
                _this.serverDatas = false;
                console.log('Local general');
              }
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(event, id) {
            debugger;

            if (id == 1) {
              if (this.form.value.CmpAdmin) {
                this.form.controls['CmpAdminFunc'].setValue('');
                this.form.controls['CmpAdminFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['CmpAdminFunc'].setValue('');
                this.form.controls['CmpAdminFunc'].setValidators(null);
              }

              this.form.controls['CmpAdminFunc'].updateValueAndValidity();
            }

            if (id == 2) {
              if (this.form.value.PrinterAdminYn) {
                this.form.controls['PrinterAdminFunc'].setValue('');
                this.form.controls['PrinterAdminFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['PrinterAdminFunc'].setValue('');
                this.form.controls['PrinterAdminFunc'].setValidators(null);
              }

              this.form.controls['PrinterAdminFunc'].updateValueAndValidity();
            }

            if (id == 3) {
              if (this.form.value.AuditoriumPrjtYn) {
                this.form.controls['AuditoriumPrjtFunc'].setValue('');
                this.form.controls['AuditoriumPrjtFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['AuditoriumPrjtFunc'].setValue('');
                this.form.controls['AuditoriumPrjtFunc'].setValidators(null);
              }

              this.form.controls['AuditoriumPrjtFunc'].updateValueAndValidity();
            } // if(id == 4){
            //   if(this.form.value.OutsiClsYN){
            //     this.form.controls['OutsiClsNum'].setValue('');
            //     this.form.controls['OutsiClsNum'].setValidators(Validators.required);
            //   }else{
            //     this.form.controls['OutsiClsNum'].setValue('');
            //     this.form.controls['OutsiClsNum'].setValidators(null);
            //   }
            //   this.form.controls['OutsiClsNum'].updateValueAndValidity();
            // }
            // if(id == 5){
            //   if(this.form.value.OutsiLabYN){
            //     this.form.controls['OutsiLabNum'].setValue('');
            //     this.form.controls['OutsiLabNum'].setValidators(Validators.required);
            //   }else{
            //     this.form.controls['OutsiLabNum'].setValue('');
            //     this.form.controls['OutsiLabNum'].setValidators(null);
            //   }
            //   this.form.controls['OutsiLabNum'].updateValueAndValidity();
            // }
            // if(id == 6){
            //   if(this.form.value.LadderYn){
            //     this.form.controls['LadderHeight'].setValue('');
            //     this.form.controls['LadderHeight'].setValidators(Validators.required);
            //   }else{
            //     this.form.controls['LadderHeight'].setValue('');
            //     this.form.controls['LadderHeight'].setValidators(null);
            //   }
            //   this.form.controls['LadderHeight'].updateValueAndValidity();
            // }


            if (id == 7) {
              if (this.form.value.InternetYn) {
                this.form.controls['InternetType'].setValue('');
                this.form.controls['InternetTypeOthers'].setValue('');
                this.form.controls['InternetType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['Bandwidth'].setValue('0');
                this.form.controls['Bandwidth'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['InternetServProv'].setValue('');
                this.form.controls['InternetServProv'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['InternetType'].setValue('');
                this.form.controls['InternetTypeOthers'].setValue('');
                this.form.controls['Bandwidth'].setValue('');
                this.form.controls['InternetServProv'].setValue('');
                this.form.controls['InternetServProvOthers'].setValue('');
                this.form.controls['InternetType'].setValidators(null);
                this.form.controls['InternetTypeOthers'].setValidators(null);
                this.form.controls['Bandwidth'].setValidators(null);
                this.form.controls['InternetServProv'].setValidators(null);
                this.form.controls['InternetServProvOthers'].setValidators(null);
              }

              this.form.controls['InternetType'].updateValueAndValidity();
              this.form.controls['InternetTypeOthers'].updateValueAndValidity();
              this.form.controls['Bandwidth'].updateValueAndValidity();
              this.form.controls['InternetServProv'].updateValueAndValidity();
              this.form.controls['InternetServProvOthers'].updateValueAndValidity();
            }
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(event, id) {
            if (id == 1 && this.form.value.SiteNum == 0) {
              this.form.controls['SiteNum'].setValue('');
              this.form.controls['SiteNum'].updateValueAndValidity(); // this.alertService.error('Please Enter Valid Data');
            }

            if (id == 2 && this.form.value.TotalArea == 0) {
              this.form.controls['TotalArea'].setValue('');
              this.form.controls['TotalArea'].updateValueAndValidity(); // this.alertService.error('Please Enter Valid Data');
            } // if (id == 14 && this.form.value.TotalLandAreaExcludPg == 0) {
            //   this.form.controls['TotalLandAreaExcludPg'].setValue('');
            //   this.form.controls['TotalLandAreaExcludPg'].updateValueAndValidity();
            //   // this.alertService.error('Please Enter Valid Data');
            // }
            // if (id == 3 && this.form.value.CmpAdminFunc == 0) {
            //   this.form.controls['CmpAdminFunc'].setValue('');
            //   this.form.controls['CmpAdminFunc'].updateValueAndValidity();
            //   // this.alertService.error('Please Enter Valid Data');
            // }
            // if (id == 4 && this.form.value.LaptopNumFunc == 0) {
            // if(this.form.value.PurpLaptopNonFun != ''){


            if (id == 4 && +this.form.value.LaptopNumFunc > 25) {
              this.form.controls['LaptopNumFunc'].setValue('');
              this.form.controls['LaptopNumFunc'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            } // }
            // }
            // if (id == 5 && this.form.value.ComputerNumFunc == 0) {
            //   if(this.form.value.PurpComputerNonFun != ''){


            if (id == 5 && +this.form.value.ComputerNumFunc > 25) {
              this.form.controls['ComputerNumFunc'].setValue('');
              this.form.controls['ComputerNumFunc'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            } //   }
            // }
            // if (id == 6 && this.form.value.TabNumFunc == 0) {
            //   if(this.form.value.PurpTabNonFun != ''){


            if (id == 6 && +this.form.value.TabNumFunc > 25) {
              this.form.controls['TabNumFunc'].setValue('');
              this.form.controls['TabNumFunc'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            } //   }
            // }
            // if (id == 7 && this.form.value.PurpPrinterFun == 0) {
            //   if(this.form.value.PurpPrinterNonFun != ''){


            if (id == 7 && +this.form.value.PurpPrinterFun > 25) {
              this.form.controls['PurpPrinterFun'].setValue('');
              this.form.controls['PurpPrinterFun'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            } //   }
            // }
            // if (id == 8 && this.form.value.PrjctrNumFunc == 0) {
            //   if(this.form.value.PurpProjectorNonFun != ''){


            if (id == 8 && +this.form.value.PrjctrNumFunc > 25) {
              this.form.controls['PrjctrNumFunc'].setValue('');
              this.form.controls['PrjctrNumFunc'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            }

            if (id == 9 && +this.form.value.ScannerNumFunc > 25) {
              this.form.controls['ScannerNumFunc'].setValue('');
              this.form.controls['ScannerNumFunc'].updateValueAndValidity();
              this.alertService.error('Please enter a maximum 25');
            }

            if (id == 10 && +this.form.value.Bandwidth == 0) {
              this.form.controls['Bandwidth'].setValue('');
              this.form.controls['Bandwidth'].updateValueAndValidity();
              this.alertService.error('Please Enter Valid Data');
            }

            if (id == 11 && +this.form.value.InternetServProv == 0) {
              this.form.controls['InternetServProv'].setValue('');
              this.form.controls['InternetServProv'].updateValueAndValidity(); // this.alertService.error('Please Enter Valid Data');
            } //   }
            // }
            // if (id == 9 && this.form.value.PurpLaptopNonFun == 0) {
            //   if(this.form.value.LaptopNumFunc != ''){
            //     if(+this.form.value.LaptopNumFunc == 0){
            //       this.form.controls['PurpLaptopNonFun'].setValue('');
            //       this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
            //       // this.alertService.error('Please Enter Valid Data');
            //     }
            //   }
            // }
            // if (id == 10 && this.form.value.PurpComputerNonFun == 0) {
            //   if(this.form.value.ComputerNumFunc != ''){
            //       if(+this.form.value.ComputerNumFunc == 0){
            //       this.form.controls['PurpComputerNonFun'].setValue('');
            //       this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
            //       // this.alertService.error('Please Enter Valid Data');
            //     }
            //   }
            // }
            // if (id == 11 && this.form.value.PurpTabNonFun == 0) {
            //   if(this.form.value.TabNumFunc != ''){
            //       if(+this.form.value.TabNumFunc == 0){
            //       this.form.controls['PurpTabNonFun'].setValue('');
            //       this.form.controls['PurpTabNonFun'].updateValueAndValidity();
            //       // this.alertService.error('Please Enter Valid Data');
            //     }
            //   }
            // }
            // if (id == 12 && this.form.value.PurpPrinterNonFun == 0) {
            //   if(this.form.value.PurpPrinterFun != ''){
            //       if(+this.form.value.PurpPrinterFun == 0){
            //       this.form.controls['PurpPrinterNonFun'].setValue('');
            //       this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
            //       // this.alertService.error('Please Enter Valid Data');
            //     }
            //   }
            // }
            // if (id == 13 && this.form.value.PurpProjectorNonFun == 0) {
            //   if(this.form.value.PrjctrNumFunc != ''){
            //       if(+this.form.value.PrjctrNumFunc == 0){
            //       this.form.controls['PurpProjectorNonFun'].setValue('');
            //       this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
            //       // this.alertService.error('Please Enter Valid Data');
            //     }
            //   }
            // }

          }
        }, {
          key: "getTableData",
          value: function getTableData(status, id) {
            if (id == 1) {
              this.form.controls['PurpLaptopYN'].setValue(status);
              this.form.controls['PurpLaptopYN'].updateValueAndValidity();

              if (+status) {
                this.form.controls['LaptopNumFunc'].setValue("");
                this.form.controls['LaptopNumFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['LaptopNumFunc'].updateValueAndValidity();
                this.form.controls['PurpLaptopNonFun'].setValue("");
                this.form.controls['PurpLaptopNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
              } else {
                this.form.controls['LaptopNumFunc'].setValue("");
                this.form.controls['LaptopNumFunc'].setValidators(null);
                this.form.controls['LaptopNumFunc'].updateValueAndValidity();
                this.form.controls['PurpLaptopNonFun'].setValue("");
                this.form.controls['PurpLaptopNonFun'].setValidators(null);
                this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
              }
            }

            if (id == 2) {
              this.form.controls['PurpComputerYN'].setValue(status);
              this.form.controls['PurpComputerYN'].updateValueAndValidity();

              if (+status) {
                this.form.controls['ComputerNumFunc'].setValue("");
                this.form.controls['ComputerNumFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['ComputerNumFunc'].updateValueAndValidity();
                this.form.controls['PurpComputerNonFun'].setValue("");
                this.form.controls['PurpComputerNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
              } else {
                this.form.controls['ComputerNumFunc'].setValue("");
                this.form.controls['ComputerNumFunc'].setValidators(null);
                this.form.controls['ComputerNumFunc'].updateValueAndValidity();
                this.form.controls['PurpComputerNonFun'].setValue("");
                this.form.controls['PurpComputerNonFun'].setValidators(null);
                this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
              }
            }

            if (id == 3) {
              this.form.controls['PurpTabYN'].setValue(status);
              this.form.controls['PurpTabYN'].updateValueAndValidity();

              if (+status) {
                this.form.controls['TabNumFunc'].setValue("");
                this.form.controls['TabNumFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['TabNumFunc'].updateValueAndValidity();
                this.form.controls['PurpTabNonFun'].setValue("");
                this.form.controls['PurpTabNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpTabNonFun'].updateValueAndValidity();
              } else {
                this.form.controls['TabNumFunc'].setValue("");
                this.form.controls['TabNumFunc'].setValidators(null);
                this.form.controls['TabNumFunc'].updateValueAndValidity();
                this.form.controls['PurpTabNonFun'].setValue("");
                this.form.controls['PurpTabNonFun'].setValidators(null);
                this.form.controls['PurpTabNonFun'].updateValueAndValidity();
              }
            }

            if (id == 4) {
              this.form.controls['PurpPrinterYN'].setValue(status);
              this.form.controls['PurpPrinterYN'].updateValueAndValidity();

              if (+status) {
                this.form.controls['PurpPrinterFun'].setValue("");
                this.form.controls['PurpPrinterFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpPrinterFun'].updateValueAndValidity();
                this.form.controls['PurpPrinterNonFun'].setValue("");
                this.form.controls['PurpPrinterNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
              } else {
                this.form.controls['PurpPrinterFun'].setValue("");
                this.form.controls['PurpPrinterFun'].setValidators(null);
                this.form.controls['PurpPrinterFun'].updateValueAndValidity();
                this.form.controls['PurpPrinterNonFun'].setValue("");
                this.form.controls['PurpPrinterNonFun'].setValidators(null);
                this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
              }
            }

            if (id == 5) {
              this.form.controls['PurpProjectorYN'].setValue(status);
              this.form.controls['PurpProjectorYN'].updateValueAndValidity();

              if (+status) {
                this.form.controls['PrjctrNumFunc'].setValue("");
                this.form.controls['PrjctrNumFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PrjctrNumFunc'].updateValueAndValidity();
                this.form.controls['PurpProjectorNonFun'].setValue("");
                this.form.controls['PurpProjectorNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
              } else {
                this.form.controls['PrjctrNumFunc'].setValue("");
                this.form.controls['PrjctrNumFunc'].setValidators(null);
                this.form.controls['PrjctrNumFunc'].updateValueAndValidity();
                this.form.controls['PurpProjectorNonFun'].setValue("");
                this.form.controls['PurpProjectorNonFun'].setValidators(null);
                this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "onSelectEvent",
          value: function onSelectEvent(ev, id) {
            if (id == 1) {
              if (+this.form.value.InternetServProv == 7) {
                this.form.controls['InternetServProvOthers'].setValue('');
                this.form.controls['InternetServProvOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['InternetServProvOthers'].setValue('');
                this.form.controls['InternetServProvOthers'].setValidators(null);
              }

              this.form.controls['InternetServProvOthers'].updateValueAndValidity();
            }

            if (id == 2) {
              if (+this.form.value.InternetType == 7) {
                this.form.controls['InternetTypeOthers'].setValue('');
                this.form.controls['InternetTypeOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
              } else {
                this.form.controls['InternetTypeOthers'].setValue('');
                this.form.controls['InternetTypeOthers'].setValidators(null);
              }

              this.form.controls['InternetTypeOthers'].updateValueAndValidity();
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this2 = this;

            debugger;
            console.log(this.form);

            if (this.form.valid) {
              this.submitted = false;
              var deleteQuery = 'DELETE FROM sids_general_schooldata' + ' WHERE SchlId = "' + this.SchlId + '"' + ' And VistUId = "' + this.VistUId + '"'; // console.log("DeleteQuery",deleteQuery, this.form.value);

              return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
                var datainsert = 'INSERT INTO sids_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this2.sqliteDB.insert(datainsert, [null, _this2.SchlId, _this2.VistUId, _this2.form.value.SiteNum, _this2.form.value.TotalArea, _this2.form.value.TotalLandAreaExcludPg, //  this.form.value.PurpLaptopYN,
                _this2.form.value.LaptopNumFunc, // this.form.value.PurpLaptopNonFun, 
                // this.form.value.PurpComputerYN, 
                _this2.form.value.ComputerNumFunc, // this.form.value.PurpComputerNonFun, 
                // this.form.value.PurpTabYN, 
                _this2.form.value.TabNumFunc, // this.form.value.PurpTabNonFun, 
                // this.form.value.PurpPrinterYN,
                _this2.form.value.PurpPrinterFun, // this.form.value.PurpPrinterNonFun, 
                // this.form.value.PurpProjectorYN, 
                _this2.form.value.PrjctrNumFunc, // this.form.value.PurpProjectorNonFun, 
                _this2.form.value.ScannerNumFunc, _this2.form.value.InternetYn, _this2.form.value.InternetType, _this2.form.value.InternetTypeOthers, _this2.form.value.InternetServProv, _this2.form.value.InternetServProvOthers, _this2.form.value.Bandwidth, _this2.form.value.GeneralPhoto, _this2.form.value.GeneralPhotoName, // this.form.value.ElectricityAvai,
                _this2.form.value.SolarPanelAvai, _this2.form.value.GeneratorAvai, _this2.form.value.GeneralLatitude, _this2.form.value.GeneralLongitude, 1]).then(function (insertres) {
                  if (insertres.insertId) {
                    _this2.alertService.success('Saved Successfully');

                    console.log('Inserted SIDS General School Data');

                    _this2.router.navigate(['/tabs/sids-common-dashboard'], {
                      queryParams: {
                        'schoolId': _this2.SchlId,
                        'vistId': _this2.VistUId
                      },
                      skipLocationChange: false
                    });
                  }
                });
              });
            } else {
              this.submitted = true;
              this.form.markAllAsTouched();
              this.focusValidator();
              this.alertService.error("Please Enter Valid Data");
            }
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/sids-common-dashboard'], {
              queryParams: {
                'schoolId': this.SchlId,
                'vistId': this.VistUId
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            var _this3 = this;

            var deleteQuery = 'SELECT * FROM sids_general_schooldata' + ' WHERE SchlId = "' + this.SchlId + '"' + ' And VistUId = "' + this.VistUId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              console.log(data);

              if (data.rows.length > 0) {
                _this3.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.dataList.push(data.rows.item(i));
                }

                _this3.syncLocal = true;
                console.log(_this3.dataList, "dataList");

                _this3.form.patchValue({
                  "SchlId": _this3.SchlId,
                  "VistUId": _this3.VistUId,
                  "SiteNum": _this3.dataList[0].SiteNum,
                  "TotalArea": _this3.dataList[0].TotalArea,
                  "TotalLandAreaExcludPg": _this3.dataList[0].TotalLandAreaExcludPg,
                  // "PurpLaptopYN": this.dataList[0].PurpLaptopYN == "false" ? false : this.dataList[0].PurpLaptopYN == "true" ? true : this.dataList[0].PurpLaptopYN == true ? 1 : 2,
                  "LaptopNumFunc": _this3.dataList[0].LaptopNumFunc,
                  // "PurpLaptopNonFun": this.dataList[0].PurpLaptopNonFun,
                  // "PurpComputerYN": this.dataList[0].PurpComputerYN == "false" ? false : this.dataList[0].PurpComputerYN == "true" ? true : this.dataList[0].PurpComputerYN == true ? 1 : 2,
                  "ComputerNumFunc": _this3.dataList[0].ComputerNumFunc,
                  // "PurpComputerNonFun": this.dataList[0].PurpComputerNonFun,
                  // "PurpTabYN": this.dataList[0].PurpTabYN == "false" ? false : this.dataList[0].PurpTabYN == "true" ? true : this.dataList[0].PurpTabYN == true ? 1 : 2,
                  "TabNumFunc": _this3.dataList[0].TabNumFunc,
                  // "PurpTabNonFun": this.dataList[0].PurpTabNonFun,
                  // "PurpPrinterYN": this.dataList[0].PurpPrinterYN == "false" ? false : this.dataList[0].PurpPrinterYN == "true" ? true : this.dataList[0].PurpPrinterYN == true ? 1 : 2,
                  "PurpPrinterFun": _this3.dataList[0].PurpPrinterFun,
                  // "PurpPrinterNonFun": this.dataList[0].PurpPrinterNonFun,
                  // "PurpProjectorYN": this.dataList[0].PurpProjectorYN == "false" ? false : this.dataList[0].PurpProjectorYN == "true" ? true : this.dataList[0].PurpProjectorYN == true ? 1 : 2,
                  "PrjctrNumFunc": _this3.dataList[0].PrjctrNumFunc,
                  // "PurpProjectorNonFun": this.dataList[0].PurpProjectorNonFun,
                  "ScannerNumFunc": _this3.dataList[0].ScannerNumFunc,
                  "InternetYn": _this3.dataList[0].InternetYn == "false" ? false : _this3.dataList[0].InternetYn == "true" ? true : _this3.dataList[0].InternetYn == true ? 1 : 2,
                  "InternetType": _this3.dataList[0].InternetType,
                  "InternetTypeOthers": _this3.dataList[0].InternetTypeOthers,
                  "InternetServProv": _this3.dataList[0].InternetServProv,
                  "InternetServProvOthers": _this3.dataList[0].InternetServProvOthers,
                  "Bandwidth": _this3.dataList[0].Bandwidth,
                  "GeneralPhoto": _this3.dataList[0].GeneralPhoto,
                  "GeneralPhotoName": _this3.dataList[0].GeneralPhotoName,
                  // "ElectricityAvai": this.dataList[0].ElectricityAvai,
                  "SolarPanelAvai": _this3.dataList[0].SolarPanelAvai,
                  "GeneratorAvai": _this3.dataList[0].GeneratorAvai,
                  "GeneralLatitude": _this3.dataList[0].GeneralLatitude,
                  "GeneralLongitude": _this3.dataList[0].GeneralLongitude
                });
              } else {
                console.log("local data");
                _this3.syncLocal = false;
                _this3.isData = false;
              }
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // this.form.reset();
            this.initialValidator();
            this.submitted = false;
            this.scrollToTop();
          }
        }, {
          key: "onSaveNetwork",
          value: function onSaveNetwork() {
            var _this4 = this;

            this.NetworkService.onNetworkChange().subscribe(function (status) {
              if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__.ConnectionStatus.Online) {
                _this4.onSyncSave();
              } else {
                var query = 'UPDATE sids_general_schooldata SET Status = ' + "2" + ' WHERE sids_general_schooldata.SchlId = "' + _this4.SchlId + '" And sids_general_schooldata.VistUId = "' + _this4.VistUId + '"';
                return _this4.sqliteDB.update(query).then(function (data) {
                  _this4.router.navigate(['/tabs/sids-common-dashboard'], {
                    queryParams: {
                      'schoolId': _this4.SchlId,
                      'vistId': _this4.VistUId
                    },
                    skipLocationChange: false
                  });
                });
              }
            });
          }
        }, {
          key: "onSyncSave",
          value: function onSyncSave() {
            var _this5 = this;

            var dataImage = this.dataList[0].GeneralPhoto.split(',');
            var records = {
              "records": {
                "IndexId": "",
                "SchlId": this.SchlId,
                "VistUId": this.VistUId,
                "SiteNum": this.dataList[0].SiteNum,
                "TotalArea": this.dataList[0].TotalArea,
                "TotalLandAreaExcludPg": this.dataList[0].TotalLandAreaExcludPg,
                "LaptopNumFunc": this.dataList[0].LaptopNumFunc,
                "ComputerNumFunc": this.dataList[0].ComputerNumFunc,
                "TabNumFunc": this.dataList[0].TabNumFunc,
                "ScannerNumFunc": this.dataList[0].ScannerNumFunc,
                "PrinterNumFunc": this.dataList[0].PurpPrinterFun,
                "PrjctrNumFunc": this.dataList[0].PrjctrNumFunc,
                "InternetYn": this.dataList[0].InternetYn == "false" ? 2 : 1,
                "InternetType": this.dataList[0].InternetType,
                "InternetTypeOthers": this.dataList[0].InternetTypeOthers,
                "InternetServProv": this.dataList[0].InternetServProv,
                "InternetServProvOthers": this.dataList[0].InternetServProvOthers,
                "Bandwidth": this.dataList[0].Bandwidth,
                // "GeneralPhoto": this.dataList[0].GeneralPhoto,
                "GeneralPhoto": dataImage[1],
                "GeneralPhotoName": this.dataList[0].GeneralPhotoName,
                // "ElectricityAvai": this.dataList[0].ElectricityAvai,
                "SolarPanelAvai": this.dataList[0].SolarPanelAvai,
                "GeneratorAvai": this.dataList[0].GeneratorAvai,
                "GeneralLatitude": this.dataList[0].GeneralLatitude,
                "GeneralLongitude": this.dataList[0].GeneralLongitude // "PurpLaptopYN": this.dataList[0].PurpLaptopYN == "false" ? 2: 1,
                // "LaptopNumFunc": this.dataList[0].LaptopNumFunc,
                // // "PurpLaptopNonFun": this.dataList[0].PurpLaptopNonFun,
                // // "PurpComputerYN": this.dataList[0].PurpComputerYN == "false" ? 2 : 1,
                // "ComputerNumFunc": this.dataList[0].ComputerNumFunc,
                // // "PurpComputerNonFun": this.dataList[0].PurpComputerNonFun,
                // // "PurpTabYN": this.dataList[0].PurpTabYN == "false" ? 2 : 1,
                // "TabNumFunc": this.dataList[0].TabNumFunc,
                // // "PurpTabNonFun": this.dataList[0].PurpTabNonFun,
                // // "PurpPrinterYN": this.dataList[0].PurpPrinterYN == "false" ? 2 : 1,
                // "PurpPrinterFun": this.dataList[0].PurpPrinterFun,
                // // "PurpPrinterNonFun": this.dataList[0].PurpPrinterNonFun,
                // // "PurpProjectorYN": this.dataList[0].PurpProjectorYN == "false" ? 2 : 1,
                // "PrjctrNumFunc": this.dataList[0].PrjctrNumFunc,
                // // "PurpProjectorNonFun": this.dataList[0].PurpProjectorNonFun,
                // "ScannerNumFunc": this.dataList[0].ScannerNumFunc,
                // "InternetYn": this.dataList[0].InternetYn,
                // "InternetType": this.dataList[0].InternetType,
                // "Bandwidth": this.dataList[0].Bandwidth,

              }
            }; // console.log("records",records)

            this.sidsService.SidsGeneralQues(records).subscribe(function (res) {
              if (res.dataStatus) {
                _this5.insertLocalDB();

                _this5.alertService.success('Saved Successfully');
              }
            });
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB() {
            var _this6 = this;

            var datainsert = "INSERT INTO sidsGeneralServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, "1"]).then(function (insertres) {
              console.log('server inserted successfully', insertres);

              _this6.goToBack();
            });
          }
        }, {
          key: "getInfo",
          value: function getInfo(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var popover;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'SQFT',
                      message: "\n      <div>\n        <li>1 hectare = 107639 sqft</li>\n        <li>1 acre = 43560 sqft</li>\n        <li>1 sqm = 10.76 sqft</li>\n        <li>1 sq yard = 9 sqft</li>\n      </div>\n    ",
                      buttons: ['Close']
                    });

                  case 1:
                    popover = _context.v;
                    _context.n = 2;
                    return popover.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "focusValidator",
          value: function focusValidator() {
            var invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
            invalidControl.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            }); // invalidControl.scrollTo(50, 0);

            invalidControl.focus();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop();
          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this7 = this;

            this.androidPermission();
            debugger;
            var options = {
              quality: 60,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              cameraDirection: this.camera.Direction.BACK
            };
            this.camera.getPicture(options).then(function (imageData) {
              // console.log("CameraPicture",imageData)
              var bucketName = "renewalapplicationemis";
              var expiry = 1800;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this7.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 3145728) {
                    _this7.form.controls['GeneralPhoto'].setValue(base64string);

                    _this7.form.controls['GeneralPhotoName'].setValue(splitedImage[0] + '.png');

                    _this7.getLatLong();
                  } else {
                    _this7.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          }
        }, {
          key: "androidPermission",
          value: function androidPermission() {
            var _this8 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this8.androidPermissions.requestPermission(_this8.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this8.androidPermissions.requestPermission(_this8.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }, {
          key: "uploadImgDelete",
          value: function uploadImgDelete(id) {
            var _this9 = this;

            if (id == 1) {
              this.form.controls['GeneralPhoto'].setValue(null);
              this.form.controls['GeneralPhotoName'].setValue(null);
              this.form.get('GeneralPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
            }

            this.form.get('GeneralPhoto').updateValueAndValidity();
            this.form.controls['GeneralLatitude'].setValue('');
            this.form.controls['GeneralLongitude'].setValue('');
            this.form.get('GeneralLatitude').updateValueAndValidity();
            this.form.get('GeneralLongitude').updateValueAndValidity();
            setTimeout(function () {
              _this9.getLatLong();
            }, 1000);
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this0 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this0.form.controls['GeneralLatitude'].setValue(resp.coords.latitude);

              _this0.form.controls['GeneralLongitude'].setValue(resp.coords.longitude);

              _this0.form.get('GeneralLatitude').updateValueAndValidity();

              _this0.form.get('GeneralLongitude').updateValueAndValidity();
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this0.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }]);
      }();

      _SchooldataPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__.Geolocation
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_11__.UploadService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_10__.Camera
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_6__.SidsService
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__.AndroidPermissions
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__.NetworkService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ElementRef
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_14__.IonicStorageService
        }];
      };

      _SchooldataPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent]
        }]
      };
      _SchooldataPage = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-schooldata',
        template: _raw_loader_schooldata_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_schooldata_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchooldataPage);
      /***/
    },

    /***/
    13284:
    /*!********************************************************************!*\
      !*** ./src/app/pages/sids/general/schooldata/schooldata.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 16px !important;\n}\n\ndiv {\n  font-size: 16px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.rowColr {\n  background-color: #E8F2FF;\n}\n\n.btn-present {\n  width: 100%;\n  height: 40px;\n  font-weight: bold;\n  font-size: 10px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 100%;\n  height: 40px;\n  font-weight: bold;\n  font-size: 10px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.left-text {\n  text-align: left;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 5px;\n  border-radius: 10px;\n  background: var(--ion-color-primary);\n}\n\n.normal {\n  border-bottom: 1px solid;\n}\n\n.error {\n  border-bottom: 1px solid;\n  opacity: 1;\n  border: 1px solid red;\n  box-shadow: 0px 1px 5px 2px red;\n}\n\n.btn-monitoring {\n  width: 100%;\n  height: 40px;\n  font-weight: bold;\n  font-size: 10px;\n  --background: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbGRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFFRSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFHQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQUEsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTs7O0VBR0UsZUFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7O0VBRUUscUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBT0EsU0FBQTs7QUFHQSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRjs7QUFXQSxPQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7QUFURjs7QUFhQSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFlQSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBaUJBLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7QUFmRjs7QUFtQkEsUUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBakJGOztBQW9CQTtFQUNFLGNBQUE7QUFqQkY7O0FBcUJBLE9BQUE7O0FBTUE7RUFDRSxXQUFBO0FBdkJGOztBQTBCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBdkJGOztFQXlCQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBdEJGOztFQXdCQTs7SUFFRSxlQUFBO0lBQ0EsbUJBQUE7RUFyQkY7QUFDRjs7QUF3QkE7RUFDRSx3Q0FBQTtFQUNBLDRDQUFBO0FBdEJGOztBQThCQTtFQUNFLFVBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBM0JGOztBQThCQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxVQUFBO0FBM0JGOztBQW9DQTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSx1REFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFqQ0Y7O0FBd0NBO0VBQ0UsMEJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsMEJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFyQ0o7O0FBd0NBO0VBQ0csb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyQ0g7O0FBd0NFO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQXJDTjs7QUF3Q0E7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFyQ0Y7O0FBd0NFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQ0o7O0FBdUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQUEsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwQ0Y7O0FBc0NBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbkNGOztBQXFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBbENGOztBQXFDQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBbENGOztBQXFDQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFsQ0Y7O0FBb0NBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0Y7O0FBbUNBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWhDRjs7QUFrQ0E7RUFDRSx5QkFBQTtBQS9CRjs7QUFpQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBL0JKOztBQWlDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBL0JKOztBQWtDQTtFQUNFLGdCQUFBO0FBL0JGOztBQWlDQTtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE5QkY7O0FBZ0NBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUE3QkY7O0FBZ0NBO0VBQ0Usd0JBQUE7QUE3QkY7O0FBZ0NBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQTdCRjs7QUErQkE7RUFDRSxXQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBNUJKOztBQThCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBNkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTFCRiIsImZpbGUiOiJzY2hvb2xkYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Cb3R0b20wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wMCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm1hcmdpblRvcDUge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2QtY29udGFpbmVyIHtcclxuICAvLyB3aWR0aDogOTMlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIC8vIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2QtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZVRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRpbWVsaW5lSWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNkLWF1dGhvciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNjZC10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG1hcmdpbi10b3A6IDJlbTtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY2QtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgLyogdGhpcyBpcyB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMThweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDJlbSAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWljb24gaSB7XHJcbiAgY29sb3I6ICM0YTg3ZWU7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1waWN0dXJlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1waWN0dXJlIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICBjb2xvcjogIzMwM2U0OTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCxcclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi8qQ09MT1JTKi9cclxuXHJcblxyXG4vKlBPU0lUSVZFKi9cclxuXHJcbi5wb3NpdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG4ucG9zaXRpdmUgaSB7XHJcbiAgY29sb3I6ICM0YTg3ZWU7XHJcbn1cclxuXHJcblxyXG4vKkNBTE0qL1xyXG5cclxuLmNhbG0ge1xyXG4gIGJvcmRlci1jb2xvcjogIzQzY2VlNjtcclxufVxyXG5cclxuLmNhbG0gaSB7XHJcbiAgY29sb3I6ICM0M2NlZTY7XHJcbn1cclxuXHJcblxyXG4vKkJBTEFOQ0VEKi9cclxuXHJcbi5iYWxhbmNlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjZjYzMzO1xyXG59XHJcblxyXG4uYmFsYW5jZWQgaSB7XHJcbiAgY29sb3I6ICM2NmNjMzM7XHJcbn1cclxuXHJcblxyXG4vKkVORVJHSVpFRCovXHJcblxyXG4uZW5lcmdpemVkIHtcclxuICBib3JkZXItY29sb3I6ICNmMGI4NDA7XHJcbn1cclxuXHJcbi5lbmVyZ2l6ZWQgaSB7XHJcbiAgY29sb3I6ICNmMGI4NDA7XHJcbn1cclxuXHJcblxyXG4vKkFTU0VSVElWRSovXHJcblxyXG4uYXNzZXJ0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICNlZjRlM2E7XHJcbn1cclxuXHJcbi5hc3NlcnRpdmUgaSB7XHJcbiAgY29sb3I6ICNlZjRlM2E7XHJcbn1cclxuXHJcblxyXG4vKlJPWUFMKi9cclxuXHJcbi5yb3lhbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOGE2ZGU5O1xyXG59XHJcblxyXG4ucm95YWwgaSB7XHJcbiAgY29sb3I6ICM4YTZkZTk7XHJcbn1cclxuXHJcblxyXG4vKkRBUksqL1xyXG5cclxuLy8gLmRhcmsge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogIzQ0NDtcclxuLy8gfVxyXG5cclxuLmRhcmsgaSB7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vjb25kYXJ5IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4vLyBpb24tbGFiZWwge1xyXG4gIC8vIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIH1cclxuXHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLnF1ZXMtdHh0IHtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoLmhhcy12YWx1ZSk6YmVmb3Jle1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbn0gXHJcblxyXG4uYmFjay1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgem9vbToxLjA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLXBhZGRpbmcge1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi8vIGlvbi1zZWxlY3Qge1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbi8vIH1cclxuXHJcbi5pbnB1dC1jbHIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpIDFweCBzb2xpZDs7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLy8gaW9uLWlucHV0IHtcclxuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLW5vLXBhZGRpbmd7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW9uLW5vLXBhZGRpbmctcXVlc3Rpb257XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItc2F2ZSB7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG4uZm9vdGVyLW5vdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgcGFkZGluZzogMTBweDsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLnNpZHNWaWV3e1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5xdWVzQ29sb3J7XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGQTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYmdDaGVja3tcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLXRvZ2dsZXtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuLnJvd0NvbHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEYyRkY7XHJcbn1cclxuLmJ0bi1wcmVzZW50XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzRDQUY1MCFpbXBvcnRhbnQ7IFxyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tYWJzZW50XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIC0tYmFja2dyb3VuZDojZjgyMzM5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG5cclxufVxyXG4ubGVmdC10ZXh0e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFkZEJ1dHRvbntcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnN5bmNTZXJ2ZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5ub3JtYWx7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweCByZWQ7XHJcbn1cclxuLmJ0bi1tb25pdG9yaW5ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxufVxyXG4udXBsb2FkSW1hZ2V7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uY2xvc2VidG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    46926:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/general/schooldata/schooldata.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goToBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">General Question ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3;\">\r\n      <img src=\"assets/icons/sids/server_general.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">General School Data</ion-label>\r\n    </ion-card>\r\n    \r\n    <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n      <div>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-label> Number of Sites in which the school is located<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[1-9][0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"SiteNum\"\r\n                    style=\"border-bottom: 1px solid;\" maxlength=\"1\" (ionChange)=\"onInputChange($event.detail.value,1)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['SiteNum'].hasError('required') && (form.controls['SiteNum'].dirty || form.controls['SiteNum'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.SiteNum.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"10\" class=\"quesColor\">\r\n                  <ion-label> Total Area (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\" (click)=\"getInfo($event)\">\r\n                  <ion-icon name=\"information-circle-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[1-9][0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"TotalArea\" style=\"border-bottom: 1px solid;\" maxlength=\"8\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,2)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['TotalArea'].hasError('required') && (form.controls['TotalArea'].dirty || form.controls['TotalArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.TotalArea.errors?.pattern\">Please enter a number with one value after decimal point</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Total land Area availabe for construction excluding playground (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"TotalLandAreaExcludPg\" style=\"border-bottom: 1px solid;\" maxlength=\"8\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['TotalLandAreaExcludPg'].hasError('required') && (form.controls['TotalLandAreaExcludPg'].dirty || form.controls['TotalLandAreaExcludPg'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.TotalLandAreaExcludPg.errors?.pattern\">Please enter a number with one value after decimal point</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have any of the following devices for administrative purposes (apart from those in classrooms)?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-row size=\"12\" style=\"padding:10px; margin: 10px auto; background: #f3f4f9; width: 100%;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Device</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <div class=\"font-wB font-14\">Functional</div>\r\n                  </ion-col>\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Non - Fun</div>\r\n                  </ion-col> -->\r\n                </ion-row>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Laptop</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <!-- <ion-button *ngIf=\"form.value.PurpLaptopYN\" class=\"btn-present\"(click)=\"getTableData(false, 1)\">Laptop</ion-button> -->\r\n                    <ion-button class=\"btn-monitoring\">Laptop</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input (ionChange)=\"onInputChange($event, 4)\" placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['LaptopNumFunc'].hasError('required') ? 'error' : 'normal'\" formControlName=\"LaptopNumFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                 \r\n                  <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpLaptopNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 9)\" maxlength=\"2\" formControlName=\"PurpLaptopNonFun\" disabled=\"{{form.value.PurpLaptopYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpLaptopYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col> -->\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"text-center\">\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.LaptopNumFunc.errors?.pattern\">Please enter a number with only</p> -->\r\n                  <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['LaptopNumFunc'].hasError('required') && (form.controls['LaptopNumFunc'].dirty || form.controls['LaptopNumFunc'].touched)\">\r\n                      Field is required</p>\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.LaptopNumFunc.errors?.max\">Please enter a maximum 25</p> -->\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Computer</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <!-- <ion-button *ngIf=\"form.value.PurpComputerYN\" class=\"btn-present\"(click)=\"getTableData(false, 2)\">Computer</ion-button> -->\r\n                    <ion-button class=\"btn-monitoring\">Computer</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input (ionChange)=\"onInputChange($event, 5)\" placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['ComputerNumFunc'].hasError('required') ? 'error' : 'normal'\" formControlName=\"ComputerNumFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                  <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpComputerNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 10)\" maxlength=\"2\" formControlName=\"PurpComputerNonFun\" disabled=\"{{form.value.PurpComputerYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpComputerYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col> -->\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"text-center\">\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.ComputerNumFunc.errors?.pattern\">Please enter a number with only</p> -->\r\n                  <p class=\"error-message\"\r\n                  *ngIf=\"form.controls['ComputerNumFunc'].hasError('required') && (form.controls['ComputerNumFunc'].dirty || form.controls['ComputerNumFunc'].touched)\">\r\n                  Field is required</p>\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.ComputerNumFunc.errors?.max\">Please enter a maximum 25</p> -->\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Tab</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <!-- <ion-button *ngIf=\"form.value.PurpTabYN\" class=\"btn-present\"(click)=\"getTableData(false, 3)\">Tab</ion-button> -->\r\n                    <ion-button class=\"btn-monitoring\">Tab</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input (ionChange)=\"onInputChange($event, 6)\" placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['TabNumFunc'].hasError('required') ? 'error' : 'normal'\" formControlName=\"TabNumFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                  <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpTabNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 11)\" maxlength=\"2\" formControlName=\"PurpTabNonFun\" disabled=\"{{form.value.PurpTabYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpTabYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col> -->\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"text-center\">\r\n                  <p class=\"error-message\"\r\n                  *ngIf=\"form.controls['TabNumFunc'].hasError('required') && (form.controls['TabNumFunc'].dirty || form.controls['TabNumFunc'].touched)\">\r\n                  Field is required</p>\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.TabNumFunc.errors?.max\">Please enter a maximum 25</p> -->\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Printer / Xerox</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <!-- <ion-button *ngIf=\"form.value.PurpPrinterYN\" class=\"btn-present\"(click)=\"getTableData(false, 4)\">Printer</ion-button> -->\r\n                    <ion-button class=\"btn-monitoring\">Printer</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input (ionChange)=\"onInputChange($event, 7)\"  placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['PurpPrinterFun'].hasError('required') ? 'error' : 'normal'\" formControlName=\"PurpPrinterFun\" style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                  <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpPrinterNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 12)\" maxlength=\"1\" formControlName=\"PurpPrinterNonFun\" disabled=\"{{form.value.PurpPrinterYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpPrinterYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col> -->\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"text-center\">\r\n                  <p class=\"error-message\"\r\n                  *ngIf=\"form.controls['PurpPrinterFun'].hasError('required') && (form.controls['PurpPrinterFun'].dirty || form.controls['PurpPrinterFun'].touched)\">\r\n                  Field is required</p>\r\n                  <!-- <p class=\"error-message\" *ngIf=\"form.controls.PurpPrinterFun.errors?.max\">Please enter a maximum 25</p> -->\r\n                </ion-col>\r\n               <!-- <ion-col size=\"12\" class=\"text-center\">\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.PurpPrinterFun.errors?.pattern\">Please enter a number with only</p>\r\n                </ion-col> -->\r\n\r\n              <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <!-- <ion-col size=\"4\">\r\n                  <div class=\"font-14\">Projector</div> \r\n                </ion-col> -->\r\n                <ion-col size=\"4\" class=\"text-center\">\r\n                  <!-- <ion-button *ngIf=\"form.value.PurpProjectorYN\" class=\"btn-present\"(click)=\"getTableData(false, 5)\">Projector</ion-button> -->\r\n                  <ion-button class=\"btn-monitoring\">Projector</ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input (ionChange)=\"onInputChange($event, 8)\" placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['PrjctrNumFunc'].hasError('required') ? 'error' : 'normal'\" formControlName=\"PrjctrNumFunc\" class=\"left-text\"></ion-input>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpProjectorNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 13)\" maxlength=\"1\" formControlName=\"PurpProjectorNonFun\" disabled=\"{{form.value.PurpProjectorYN ? 'false' : 'true'}}\"  class=\"left-text\" [style.opacity]=\"form.value.PurpProjectorYN ? '1' : '0.5'\"></ion-input>\r\n                </ion-col> -->\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"text-center\">\r\n                <p class=\"error-message\"\r\n                *ngIf=\"form.controls['PrjctrNumFunc'].hasError('required') && (form.controls['PrjctrNumFunc'].dirty || form.controls['PrjctrNumFunc'].touched)\">\r\n                Field is required</p>\r\n                <!-- <p class=\"error-message\" *ngIf=\"form.controls.PrjctrNumFunc.errors?.max\">Please enter a maximum 25</p> -->\r\n                <!-- <p class=\"error-message\" *ngIf=\"form.controls.PrjctrNumFunc.errors?.pattern\">Please enter a number with only</p> -->\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <!-- <ion-col size=\"4\">\r\n                  <div class=\"font-14\">Computer</div> \r\n                </ion-col> -->\r\n                <ion-col size=\"4\" class=\"text-center\">\r\n                  <!-- <ion-button *ngIf=\"form.value.PurpComputerYN\" class=\"btn-present\"(click)=\"getTableData(false, 2)\">Computer</ion-button> -->\r\n                  <ion-button class=\"btn-monitoring\">Scanner</ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input (ionChange)=\"onInputChange($event, 9)\" placeholder=\"Please enter\" type=\"tel\" maxlength=\"2\" [ngClass]=\"submitted && form.controls['ScannerNumFunc'].hasError('required') ? 'error' : 'normal'\" formControlName=\"ScannerNumFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"4\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpComputerNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 10)\" maxlength=\"2\" formControlName=\"PurpComputerNonFun\" disabled=\"{{form.value.PurpComputerYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpComputerYN ? '1' : '0.5'\"></ion-input>\r\n                </ion-col> -->\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"text-center\">\r\n                <!-- <p class=\"error-message\" *ngIf=\"form.controls.ScannerNumFunc.errors?.pattern\">Please enter a number with only</p> -->\r\n                <p class=\"error-message\"\r\n                *ngIf=\"form.controls['ScannerNumFunc'].hasError('required') && (form.controls['ScannerNumFunc'].dirty || form.controls['ScannerNumFunc'].touched)\">\r\n                Field is required</p>\r\n                <!-- <p class=\"error-message\" *ngIf=\"form.controls.ScannerNumFunc.errors?.max\">Please enter a maximum 25</p> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Internet Facility ( other than hi tech lab) <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                    <div *ngIf=\"form.value.InternetYn\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.InternetYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.InternetYn?true:false}}\"\r\n                      formControlName=\"InternetYn\" (ionChange)=\"onToggleChange($event, 7)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\"  *ngIf=\"form.value.InternetYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Type of Connection<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"InternetType\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectEvent($event,2)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ConnectionType\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['InternetType'].hasError('required') && (form.controls['InternetType'].dirty || form.controls['InternetType'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.InternetType == '7'\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5A1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Please Specify<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                  formControlName=\"InternetTypeOthers\" \r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"20\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['InternetTypeOthers'].hasError('required') && (form.controls['InternetTypeOthers'].dirty || form.controls['InternetTypeOthers'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.InternetYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5B\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Service provider<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <!-- <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                  formControlName=\"InternetServProv\" style=\"border-bottom: 1px solid;\" maxlength=\"20\">\r\n                </ion-input> -->\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"InternetServProv\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectEvent($event,1)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ProviderService\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['InternetServProv'].hasError('required') && (form.controls['InternetServProv'].dirty || form.controls['InternetServProv'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.InternetServProv.errors?.pattern\">Please enter a number with one value after decimal point</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.InternetServProv == '7'\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5B1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Please Specify<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                  formControlName=\"InternetServProvOthers\" \r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"20\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['InternetServProvOthers'].hasError('required') && (form.controls['InternetServProvOthers'].dirty || form.controls['InternetServProvOthers'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.InternetYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5C\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Bandwith(Mbps)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"Bandwidth\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,10)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['Bandwidth'].hasError('required') && (form.controls['Bandwidth'].dirty || form.controls['Bandwidth'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.Bandwidth.errors?.pattern\">Only 3 digits</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              6\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Please upload the image ( image must contain functional devices/instruments)\r\n                  <br>Photo Upload 1<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <div *ngIf=\"!form.value.GeneralPhoto \" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                  <ion-col size=\"1\" style=\"text-align: center;\">\r\n                    <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                      Click to Upload Image\r\n                    </label>\r\n                  </ion-col>\r\n                </div>\r\n\r\n                <div *ngIf=\"form.value.GeneralPhoto\">\r\n                  <ion-col size=\"12\" style=\"float: left;\">\r\n                    <ion-button *ngIf=\"!serverDatas\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                    </ion-button>\r\n                    <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.GeneralPhoto}}\"></div>\r\n                  </ion-col>\r\n                </div>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['GeneralPhoto'].hasError('required') && (form.controls['GeneralPhoto'].dirty || form.controls['GeneralPhoto'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Electricity Availability<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ElectricityAvai\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Electricity\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['ElectricityAvai'].hasError('required') && (form.controls['ElectricityAvai'].dirty || form.controls['ElectricityAvai'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Solar Panel Availability<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SolarPanelAvai\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of SolarPanel\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['SolarPanelAvai'].hasError('required') && (form.controls['SolarPanelAvai'].dirty || form.controls['SolarPanelAvai'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              8\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Generator/Invertors/Power Backup/Big UPS (above 1KVA)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"GeneratorAvai\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of PowerBackup\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['GeneratorAvai'].hasError('required') && (form.controls['GeneratorAvai'].dirty || form.controls['GeneratorAvai'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <ion-row (click)=\"onSave()\" *ngIf=\"!serverDatas\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"syncServer\" *ngIf=\"!serverDatas && syncLocal\">\r\n      <ion-col (click)=\"onSyncSave()\" size=\"12\" class=\"add\">\r\n        <ion-label> Sync Server </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_general_schooldata_schooldata_module_ts-es5.js.map