(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-inspection_volunteer-inspection_module_ts"], {
    /***/
    64855:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection-routing.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspectionPageRoutingModule": function VolunteerInspectionPageRoutingModule() {
          return (
            /* binding */
            _VolunteerInspectionPageRoutingModule
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


      var _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-inspection.page */
      41175);

      var routes = [{
        path: '',
        component: _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPage
      }];

      var _VolunteerInspectionPageRoutingModule = /*#__PURE__*/_createClass(function VolunteerInspectionPageRoutingModule() {
        _classCallCheck(this, VolunteerInspectionPageRoutingModule);
      });

      _VolunteerInspectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VolunteerInspectionPageRoutingModule);
      /***/
    },

    /***/
    27575:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspectionPageModule": function VolunteerInspectionPageModule() {
          return (
            /* binding */
            _VolunteerInspectionPageModule
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


      var _volunteer_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-inspection-routing.module */
      64855);
      /* harmony import */


      var _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection.page */
      41175);

      var _VolunteerInspectionPageModule = /*#__PURE__*/_createClass(function VolunteerInspectionPageModule() {
        _classCallCheck(this, VolunteerInspectionPageModule);
      });

      _VolunteerInspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _volunteer_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerInspectionPage]
      })], _VolunteerInspectionPageModule);
      /***/
    },

    /***/
    41175:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspectionPage": function VolunteerInspectionPage() {
          return (
            /* binding */
            _VolunteerInspectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./volunteer-inspection.page.html */
      70161);
      /* harmony import */


      var _volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection.page.scss */
      10081);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/json.service */
      77232);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
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


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275); // import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';


      var _VolunteerInspectionPage = /*#__PURE__*/function () {
        function VolunteerInspectionPage(router, route, platform, alert, el, cdRef, fb, modalController, http, userSesstion, ionicStorage, jsonApi, emisService, loader, sqliteDB, userService, networkService, geolocation, alertController, file, modalCtrl, pipe, camera, androidPermissions) {
          _classCallCheck(this, VolunteerInspectionPage);

          this.router = router;
          this.route = route;
          this.platform = platform;
          this.alert = alert;
          this.el = el;
          this.cdRef = cdRef;
          this.fb = fb;
          this.modalController = modalController;
          this.http = http;
          this.userSesstion = userSesstion;
          this.ionicStorage = ionicStorage;
          this.jsonApi = jsonApi;
          this.emisService = emisService;
          this.loader = loader;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.networkService = networkService;
          this.geolocation = geolocation;
          this.alertController = alertController;
          this.file = file;
          this.modalCtrl = modalCtrl;
          this.pipe = pipe;
          this.camera = camera;
          this.androidPermissions = androidPermissions;
          this.blockDropdown = [];
          this.savedVolunteerData = [];
          this.volunteerData = [];
          this.edit_status = ""; // this.loader.show();
        }

        return _createClass(VolunteerInspectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.todayDate = this.pipe.transform(new Date(), "yyyy-MM-dd");
            this.month = this.pipe.transform(new Date(), 'MM');
            this.LeadVol = this.userSesstion.emis_username();
            this.getVolunteer();
            this.route.queryParams.subscribe(function (params) {
              _this.volId = params.volunteerId, _this.searchTxt = params.searchTxt;
            });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.VForm = this.fb.group({
              VolunteerForm: this.fb.array([])
            });
          }
        }, {
          key: "getVolunteer",
          value: function getVolunteer() {
            var _this2 = this;

            this.ionicStorage.getData('ItkCenterVolunteer').then(function (res) {
              if (res && res != null) {
                _this2.onVolunteerList(res);

                _this2.volunteerData = res;
              } else {
                _this2.emisService.ItkCenterVolunJson(1).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this2.onVolunteerList(res.result);

                    _this2.ionicStorage.insertData_Replace('ItkCenterVolunteer', res.result);

                    _this2.volunteerData = res.result;
                  }
                });
              }
            });
          }
        }, {
          key: "geoLocation",
          value: function geoLocation() {
            var _this3 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this3.usrLat = resp.coords.latitude.toString();
              _this3.usrLong = resp.coords.longitude.toString(); // }).catch((error: any) => console.log(error));
            })["catch"](function (error) {
              console.log('Error getting current lat long ', error);

              if (error.message === 'Illegal Access') {
                _this3.alert.alertToTurnOnPermission('Location', 'Location');
              }
            });
          }
        }, {
          key: "onVolunteerList",
          value: function onVolunteerList(item) {
            var _this4 = this;

            debugger;
            var control = this.VForm.controls['VolunteerForm'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = this.VForm.controls.VolunteerForm;

            if (item.length > 0) {
              for (var _i = 0; _i < item.length; _i++) {
                this.queslist.push(this.fb.group({
                  sno: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].id, null),
                  id: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].id, null),
                  indexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                  qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_id, null),
                  qusText: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_text, null),
                  qusSubId: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_sub_id, null),
                  qusSub: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].qusSub, null),
                  // qusSub: new FormControl(item[i].sub_ques_yn, null),
                  qusType: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_type_id, null),
                  qusOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_option, null),
                  qusRes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].qusRes, +item[_i].q_validation == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required : null),
                  // qusRes: new FormControl(item[i].qusRes, null ),
                  qusMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_min_valid, null),
                  qusMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_max_valid, null),
                  qusValidation: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_validation, null),
                  qusPattern: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_pattern, null),
                  qusActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].qusActive, null),
                  qusGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].q_group_id, null),
                  totalSub: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].sub_q_count, null),
                  DropDownType: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].dropdown_type, null),
                  ImageView: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                  qusDisable: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].qus_disable, null),
                  qusSubAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].qus_subanswer, null),
                  qusScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].score, null),
                  qusResScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                  qusScoreSplit: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[_i].split_score ? JSON.parse(item[_i].split_score) : '', null)
                }));
              }
            }

            for (var _i2 = 0; _i2 < this.VForm.value.VolunteerForm.length; _i2++) {
              if (this.VForm.value.VolunteerForm[_i2].qusOption) {
                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusOption'].setValue(JSON.parse(this.VForm.value.VolunteerForm[_i2].qusOption));

                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusOption'].updateValueAndValidity();
              }

              if (this.VForm.value.VolunteerForm[_i2].qusMin) {
                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.minLength(this.VForm.value.VolunteerForm[_i2].qusMin));

                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].updateValueAndValidity();
              }

              if (this.VForm.value.VolunteerForm[_i2].qusMax) {
                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(this.VForm.value.VolunteerForm[_i2].qusMax));

                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].updateValueAndValidity();
              }

              if (this.VForm.value.VolunteerForm[_i2].qusPattern) {
                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.VForm.value.VolunteerForm[_i2].qusPattern));

                this.VForm.controls['VolunteerForm']['controls'][_i2].controls['qusRes'].updateValueAndValidity();
              }
            }

            setTimeout(function () {
              if (_this4.savedVolunteerData.length > 0) {
                for (var _i3 = 0; _i3 < _this4.VForm.value.VolunteerForm.length; _i3++) {
                  for (var j = 0; j < _this4.savedVolunteerData.length; j++) {
                    if (_this4.VForm.value.VolunteerForm[_i3].qid == _this4.savedVolunteerData[j].q_id) {
                      // this.VForm.controls['VolunteerForm']['controls'][i].controls['qusActive'].setValue(1);
                      if (+_this4.savedVolunteerData[j].q_type_id == 6) {
                        if (_this4.savedVolunteerData[j].volun_response) {
                          // if(+this.savedVolunteerData[j].DropDownType != 1 && +this.savedVolunteerData[j].DropDownType != 2){
                          _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusRes'].setValue(+_this4.savedVolunteerData[j].volun_response);

                          _this4.savedVolunteerData[j].qusOption = _this4.VForm.value.VolunteerForm[_i3].qusOption; // }
                        }
                      } else if (+_this4.savedVolunteerData[j].q_type_id == 7) {
                        if (_this4.savedVolunteerData[j].volun_response) {
                          // if(+this.savedVolunteerData[j].DropDownType != 1 && +this.savedVolunteerData[j].DropDownType != 2){
                          _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusRes'].setValue(Array.from(_this4.savedVolunteerData[j].volun_response.split(",").map(Number)));

                          _this4.savedVolunteerData[j].qusOption = _this4.VForm.value.VolunteerForm[_i3].qusOption; // }
                        }
                      } else if (+_this4.savedVolunteerData[j].q_type_id == 10) {
                        if (_this4.savedVolunteerData[j].volun_response) {
                          _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusRes'].setValue(_this4.savedVolunteerData[j].volun_response);

                          _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['ImageView'].setValue('https://deka0egrc3bqo.cloudfront.net/' + _this4.savedVolunteerData[j].volun_response);
                        }
                      } else {
                        if (_this4.savedVolunteerData[j].volun_response) {
                          _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusRes'].setValue(_this4.savedVolunteerData[j].volun_response);
                        } // else{
                        //   this.VForm.controls['VolunteerForm']['controls'][i].controls['qusActive'].setValue('');
                        // }

                      }

                      if (_this4.savedVolunteerData[j].volun_response) {
                        _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusActive'].setValue(1);
                      }

                      _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusResScore'].setValue(_this4.savedVolunteerData[j].volun_score);

                      _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['indexId'].setValue(_this4.savedVolunteerData[j].id);

                      if (+_this4.edit_status == 1) {
                        _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusDisable'].setValue("");
                      } else {
                        _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusDisable'].setValue(1);
                      } // this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(this.savedVolunteerData[j].Response);


                      _this4.VForm.controls['VolunteerForm']['controls'][_i3].controls['qusRes'].updateValueAndValidity();
                    }
                  }
                }
              }
            }, 1000);
            console.log(this.VForm);
          }
        }, {
          key: "onSave",
          value: function onSave() {
            for (var i = 0; i < this.VForm.value.VolunteerForm.length; i++) {
              if (+this.VForm.value.VolunteerForm[i].qusValidation == 1) {
                if (this.VForm.value.VolunteerForm[i].qusRes == "" || this.VForm.value.VolunteerForm[i].qusRes == null) {
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(null);
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                  this.alert.error("Field is Required");
                }
              }
            }

            if (this.VForm.valid) {
              this.submitted = false;

              if (this.networkService.getCurrentNetworkStatus() == 0) {
                this.syncServer();
              } else {
                this.alert.error("No network connection. Please Connect to the Internet");
              }
            } else {
              this.submitted = true; // this.alert.error("Field is Required");

              this.focusValidator();
            }
          }
        }, {
          key: "syncServer",
          value: function syncServer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'உறுதிப்படுத்தல்',
                      message: 'சமர்பிக்கும் முன், தங்களின் அனைத்து பதில்களும் சரியாக உள்ளதா என்பதை சரிபார்க்கவும். படிவத்தை ஒருமுறை சமர்பித்த பின் மீண்டும் உங்களால் மாற்றங்களைச் செய்ய முடியாது.',
                      backdropDismiss: false,
                      cssClass: 'Volunteer',
                      buttons: [{
                        text: 'சமர்பிக்கிறேன்',
                        cssClass: 'buttonOne',
                        handler: function handler() {
                          var _a;

                          var req = [];

                          for (var i = 0; i < _this5.VForm.value.VolunteerForm.length; i++) {
                            var option = void 0;

                            if (_this5.VForm.value.VolunteerForm[i].qusType == 6) {
                              option = _this5.VForm.value.VolunteerForm[i].qusOption.filter(function (dd) {
                                return dd.id == _this5.VForm.value.VolunteerForm[i].qusRes;
                              });
                            }

                            req.push({
                              "id": _this5.VForm.value.VolunteerForm[i].indexId,
                              "volunteer_id": _this5.volId,
                              "lead_vol": _this5.LeadVol,
                              "master_idx_id": _this5.VForm.value.VolunteerForm[i].id,
                              "q_id": _this5.VForm.value.VolunteerForm[i].qid,
                              "volun_response": +_this5.VForm.value.VolunteerForm[i].qusType == 7 ? _this5.VForm.value.VolunteerForm[i].qusRes.toString() : _this5.VForm.value.VolunteerForm[i].qusRes,
                              "volun_response_text": +_this5.VForm.value.VolunteerForm[i].qusType == 7 ? _this5.VForm.value.VolunteerForm[i].qusRes.toString() : +_this5.VForm.value.VolunteerForm[i].qusType == 6 ? (_a = option[0]) === null || _a === void 0 ? void 0 : _a.name : _this5.VForm.value.VolunteerForm[i].qusRes,
                              "volun_score": _this5.VForm.value.VolunteerForm[i].qusRes ? _this5.VForm.value.VolunteerForm[i].qusResScore : '',
                              "latitude": _this5.usrLat,
                              "longitude": _this5.usrLong
                            });
                          }

                          var data = {
                            "ItkVolunteer": [{
                              "IndxID": "",
                              "LeadVol": _this5.LeadVol,
                              "volunteer_Id": _this5.volId,
                              "SurveyMonth": _this5.month,
                              "surveyDate": _this5.todayDate,
                              "QGroupId": 1
                            }],
                            "records": req
                          };

                          _this5.emisService.ItkVolunCenterResponse(data).subscribe(function (res) {
                            if (res.dataStatus) {
                              _this5.alert.success(res.message);

                              _this5.initialValidator();

                              _this5.router.navigate(['tabs/itk-center-dashboard']);
                            } else {
                              _this5.alert.error(res.message);
                            }
                          });
                        }
                      }, {
                        text: 'மாற்றம் செய்ய வேண்டும்',
                        cssClass: 'buttonTwo',
                        handler: function handler() {
                          _this5.alertController.dismiss();
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
          key: "focusValidator",
          value: function focusValidator() {
            var invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
            invalidControl.scrollIntoView({
              behavior: "smooth",
              inline: "nearest"
            }); // invalidControl.scrollTo(50, 0);

            invalidControl.focus();
          }
        }, {
          key: "onEvent",
          value: function onEvent(item, i, total) {
            // console.log("ionChange",item, i, total)
            debugger;

            for (var n = 1; n <= total; n++) {
              if (item.detail.value == this.volunteerData[i + n].qus_subanswer) {
                if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();

                  if (+this.volunteerData[i + n].q_validation == 1) {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                  }

                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
                }
              } else {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
              }
            }

            if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
              var selectValue = this.VForm.value.VolunteerForm[i].qusScoreSplit.filter(function (dd) {
                return dd.id == item.detail.value;
              });

              if (selectValue.length > 0) {
                // if(this.VForm.value.VolunteerForm[i].qusValidation == 1){
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(selectValue[0].score); // }
              } else {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
              }
            }

            this.cdRef.detectChanges();
          }
        }, {
          key: "onCheckBox",
          value: function onCheckBox(item, i, total) {
            var _this6 = this;

            console.log("onCheckBox", item.detail.value, i, total);

            if (i == 0) {
              for (var m = 0; m < item.detail.value.length; m++) {
                if (item.detail.value[m] == 8) {
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(item.detail.value[m]);
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                  break;
                }
              }
            }

            for (var n = 1; n <= total; n++) {
              var isIncluded = false;
              var array = this.volunteerData[i + n].qus_subanswer.split(",");

              for (var _i4 = 0; _i4 < item.detail.value.length; _i4++) {
                for (var j = 0; j < array.length; j++) {
                  if (item.detail.value[_i4] == array[j]) {
                    isIncluded = true;
                    break;
                  }
                }
              } // let isIncluded = this.volunteerData[i+n].qus_subanswer.includes(item.detail.value.toString());


              if (isIncluded) {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();

                if (+this.volunteerData[i + n].q_validation == 1) {
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                }

                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
              } else {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
              }
            }

            if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
              var value = 0;

              var _loop = function _loop(k) {
                var selectValue = _this6.VForm.value.VolunteerForm[i].qusScoreSplit.filter(function (dd) {
                  return dd.id == item.detail.value[k];
                });

                if (selectValue.length > 0) {
                  value += +selectValue[0].score;

                  if (+_this6.VForm.value.VolunteerForm[i].qid == 7.1 || +_this6.VForm.value.VolunteerForm[i].qid == 7.2) {
                    _this6.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(value);

                    return 1; // break
                  } else {
                    _this6.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(value);
                  }
                } else {
                  _this6.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                }
              };

              for (var k = 0; k < item.detail.value.length; k++) {
                if (_loop(k)) break;
              }
            }

            console.log(this.VForm.value.VolunteerForm);
          }
        }, {
          key: "onDropDown",
          value: function onDropDown(item, i, total) {
            // console.log(item,i,total);
            debugger;

            for (var n = 1; n <= total; n++) {
              var splited = this.volunteerData[i + n].qus_subanswer.split(",");

              if (splited.length < 2) {
                if (item.detail.value == this.volunteerData[i + n].qus_subanswer) {
                  if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();

                    if (+this.volunteerData[i + n].q_validation == 1) {
                      this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                      this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                    }
                  }
                } else {
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusResScore'].setValue("");
                }
              } else {
                if (item.detail.value == splited[0] || item.detail.value == splited[1] || item.detail.value == splited[2]) {
                  if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();

                    if (+this.volunteerData[i + n].q_validation == 1) {
                      this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                      this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                    }
                  }
                } else {
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusResScore'].setValue("");
                }
              }
            }

            if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
              var selectValue = this.VForm.value.VolunteerForm[i].qusScoreSplit.filter(function (dd) {
                return dd.id == item.detail.value;
              });

              if (selectValue.length > 0) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(selectValue[0].score);
              } else {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
              }
            }
          }
        }, {
          key: "onEventDropDown",
          value: function onEventDropDown(event, i) {
            this.VForm.controls['VolunteerForm']['controls'][i + 1].controls['qusRes'].setValue(''); // console.log("ionChange Dropdown",event, this.blockList)
            // this.blockDropdown = this.blockList.filter(dd => +dd.DistId == +event.detail.value);
            // for(let i=0; i<this.VForm.value.VolunteerForm.length; i++){
            //   if(+this.VForm.value.VolunteerForm[i].DropDownType == 2){
            //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
            //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].setValue(this.blockDropdown);
            //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].updateValueAndValidity();
            //   }
            // }
          }
        }, {
          key: "onEventPatch",
          value: function onEventPatch(item, i, value) {
            var _this7 = this;

            if (value == 1) {
              for (var n = 1; n <= item; n++) {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
              }
            }

            if (value == 2) {
              this.emisService.getSchoolInfo(this.VForm.value.VolunteerForm[i].qusRes).subscribe(function (res) {
                if (res.result) {
                  var schoolDeatils = res.result[0];
                  debugger;

                  for (var _n = 1; _n <= item; _n++) {
                    if (_n == 1) {
                      if (schoolDeatils.SclNam) {
                        _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue(schoolDeatils.SclNam);

                        _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue(_this7.edit_status == 1 ? '' : '1');
                      } else {
                        _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue('');

                        _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue('');
                      }
                    } else if (_n == 2) {
                      if (+_this7.VForm.value.VolunteerForm[i + _n].DropDownType == 1) {
                        if (schoolDeatils.DistID) {
                          // this.VForm.controls['VolunteerForm']['controls'][i+n].controls['qusRes'].setValue(+schoolDeatils.DistID);
                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue(_this7.edit_status == 1 ? '' : '1');
                        } else {
                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue('');

                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue('');
                        }
                      }
                    } else if (_n == 3) {
                      if (+_this7.VForm.value.VolunteerForm[i + _n].DropDownType == 2) {
                        if (schoolDeatils.BlkID) {
                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue(schoolDeatils.BlkID);

                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue(_this7.edit_status == 1 ? '' : '1');
                        } else {
                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue('');

                          _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusDisable'].setValue('');
                        }
                      }
                    } else {
                      _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValue('');
                    }

                    _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);

                    _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusActive'].setValue('1');

                    _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusRes'].updateValueAndValidity();

                    _this7.VForm.controls['VolunteerForm']['controls'][i + _n].controls['qusActive'].updateValueAndValidity();
                  }
                }
              });
            }
          }
        }, {
          key: "onEventText",
          value: function onEventText(ev, i, id) {
            if (id == 1) {
              if (ev.detail.value == '') {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
              }

              if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
              }
            }

            if (id == 2) {}
          }
        }, {
          key: "onEventNumber",
          value: function onEventNumber(ev, i, id, total) {
            var _this8 = this;

            // console.log(ev, total)
            if (ev.detail.value.length == 11) {
              this.emisService.getSchoolInfo(ev.detail.value).subscribe(function (res) {
                if (res.result) {
                  var schoolDeatils = res.result[0];
                  debugger;

                  if (schoolDeatils.BlkID && schoolDeatils.DistID && schoolDeatils.SclId) {
                    for (var n = 1; n <= total; n++) {
                      if (n == 1) {
                        if (schoolDeatils.SclNam) {
                          _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(schoolDeatils.SclNam);

                          _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(_this8.edit_status == 1 ? '' : '1');
                        } else {
                          _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');

                          _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                        }
                      } else if (n == 2) {
                        if (+_this8.VForm.value.VolunteerForm[i + n].DropDownType == 1) {
                          if (schoolDeatils.DistID) {
                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(+schoolDeatils.DistID);

                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(_this8.edit_status == 1 ? '' : '1');
                          } else {
                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');

                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                          }
                        }
                      } else if (n == 3) {
                        if (+_this8.VForm.value.VolunteerForm[i + n].DropDownType == 2) {
                          if (schoolDeatils.BlkID) {
                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(+schoolDeatils.BlkID);

                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(_this8.edit_status == 1 ? '' : '1');
                          } else {
                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');

                            _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                          }
                        }
                      } else {
                        _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                      }

                      _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);

                      _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');

                      _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();

                      _this8.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    }
                  } else {
                    _this8.alert.error("Wrong udisecode");

                    for (var _n2 = 1; _n2 <= total; _n2++) {
                      _this8.VForm.controls['VolunteerForm']['controls'][i + _n2].controls['qusRes'].setValue('');

                      _this8.VForm.controls['VolunteerForm']['controls'][i + _n2].controls['qusRes'].setValidators(null);

                      _this8.VForm.controls['VolunteerForm']['controls'][i + _n2].controls['qusActive'].setValue('');

                      _this8.VForm.controls['VolunteerForm']['controls'][i + _n2].controls['qusRes'].updateValueAndValidity();

                      _this8.VForm.controls['VolunteerForm']['controls'][i + _n2].controls['qusActive'].updateValueAndValidity();
                    }

                    _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');

                    _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);

                    _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                  }
                } else {
                  _this8.alert.error(res.message);

                  for (var _n3 = 1; _n3 <= total; _n3++) {
                    _this8.VForm.controls['VolunteerForm']['controls'][i + _n3].controls['qusRes'].setValue('');

                    _this8.VForm.controls['VolunteerForm']['controls'][i + _n3].controls['qusRes'].setValidators(null);

                    _this8.VForm.controls['VolunteerForm']['controls'][i + _n3].controls['qusActive'].setValue('');

                    _this8.VForm.controls['VolunteerForm']['controls'][i + _n3].controls['qusRes'].updateValueAndValidity();

                    _this8.VForm.controls['VolunteerForm']['controls'][i + _n3].controls['qusActive'].updateValueAndValidity();
                  }

                  _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');

                  _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);

                  _this8.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                }
              }); // console.log(this.VForm)
            }

            if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
              this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
            } else {
              this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
            }
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event, i) {
            var _this9 = this;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg" || event.target.files[0].type == "image/png") {
                if (event.target.files[0].size <= 1048576) {
                  var doc_file = event.target.files;
                  var fileName = event.target.files[0].name;
                  var splittedName = fileName.split(".");
                  var fileType = splittedName[1];
                  var fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);

                  fileReader.onload = function (event) {
                    var uploadUrl = fileReader.result;
                    var bucketName = "renewalapplicationemis";
                    var ext = splittedName[1];
                    var expiry = 300;

                    if (_this9.networkService.getCurrentNetworkStatus() == 0) {
                      _this9.userService.getFileUrl(bucketName, ext, fileName, expiry).subscribe(function (result) {
                        if (result) {// let files: FileList = doc_file;
                          // let file: File = files[0];
                          // this.emisService.uploadFile(result.url, file).subscribe((res) => {
                          //   this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue(fileReader.result)
                          //   this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(result.key);              
                          //   if(this.VForm.value.VolunteerForm[i].qusScoreSplit){
                          //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
                          //   }else{
                          //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                          //   }
                          //   this.alert.success('File Uploaded Successfully');
                          // });
                        } else {
                          _this9.alert.error('Error in Uploading File please try again');

                          _this9.alert.error("No network connection. Please Connect to the Internet");

                          _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');

                          _this9.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');

                          _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();

                          _this9.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();

                          _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');

                          if (_this9.fileEmpty) {
                            _this9.fileEmpty = false;
                          } else {
                            _this9.fileEmpty = true;
                          }
                        }
                      });
                    } else {
                      _this9.alert.error("No network connection. Please Connect to the Internet");

                      _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');

                      _this9.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');

                      _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();

                      _this9.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();

                      _this9.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');

                      if (_this9.fileEmpty) {
                        _this9.fileEmpty = false;
                      } else {
                        _this9.fileEmpty = true;
                      }

                      _this9.jpgimage.nativeElement.value = "";
                    }
                  };
                } else {
                  this.alert.error('File Can`t uploaded because Image size should not exceed 1 MB');
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                  this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');

                  if (this.fileEmpty) {
                    this.fileEmpty = false;
                  } else {
                    this.fileEmpty = true;
                  }

                  this.el.nativeElement.value = "";
                }
              } else {
                this.alert.error('Please upload only JPG / JPEG / PNG image format');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');

                if (this.fileEmpty) {
                  this.fileEmpty = false;
                } else {
                  this.fileEmpty = true;
                }

                this.jpgimage.nativeElement.value = "";
              }
            } else {
              this.alert.error('Please upload only JPG / JPEG / PNG image format');
              this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
              this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
              this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
              this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
              this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');

              if (this.fileEmpty) {
                this.fileEmpty = false;
              } else {
                this.fileEmpty = true;
              }
            }
          }
        }, {
          key: "S3ImgaeSave",
          value: function S3ImgaeSave(i, s3ImgObj) {
            var _this0 = this;

            this.emisService.S3ImageSave(s3ImgObj).subscribe(function (res) {
              if (res.dataStatus) {} else {
                _this0.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');

                _this0.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');

                _this0.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();

                _this0.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
              }
            });
          }
        }, {
          key: "uploadImgDelete",
          value: function uploadImgDelete(i) {
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
          }
        }, {
          key: "viewImage",
          value: function viewImage(url) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalCtrl.create({
                      component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__.ViewImagePage,
                      cssClass: 'view-image-modal'
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.initialValidator();
            this.imageView = '';
            this.submitted = false;
            this.savedVolunteerData = [];
            this.volunteerData = [];
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/teacher/volunteer-search']);
          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this1 = this;

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
              var filename = imageData.substring(imageData.lastIndexOf("/") + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf("/") + 1);
              var splitedImage = filename.split(".");

              _this1.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split("base64,");
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], "image/jpg");

                  if (blob.size <= 3145728) {
                    _this1.userService.getFileUrl1(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                      if (result) {
                        //  console.log("result",result);
                        _this1.userService.uploadFile(result.url, blob).subscribe(function (res) {
                          _this1.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue(base64string);

                          _this1.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(result.key);

                          _this1.alert.success('File Uploaded Successfully'); // console.log("responce",res);
                          // this.form.controls['form_questions']['controls'][i].controls['result'].setValue(this.imageKey);


                          _this1.alert.success("File Uploaded Successfully");
                        });
                      }
                    });
                  } else {
                    _this1.alert.error("File Can`t uploaded because Image size should not exceed 3 MB");
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
            var _this10 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this10.androidPermissions.requestPermission(_this10.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this10.androidPermissions.requestPermission(_this10.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }]);
      }();

      _VolunteerInspectionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService
        }, {
          type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_5__.JsonService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_14__.EmisService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_12__.LoadingService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_16__.UserService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__.NetworkService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__.AndroidPermissions
        }];
      };

      _VolunteerInspectionPage.propDecorators = {
        jpgimage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['jpgimage']
        }]
      };
      _VolunteerInspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-volunteer-inspection',
        template: _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VolunteerInspectionPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this11 = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = true;
                    _context3.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this11.isLoading) {
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
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this12 = this;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.isLoading = true;
                    _context4.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this12.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    this.isLoading = false;
                    _context5.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context5.a(2, _context5.v);
                }
              }, _callee5, this);
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
    10081:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.scss ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-select::part(text) {\n  white-space: normal;\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\nion-content .header-text {\n  background: #f4f4f4;\n  padding: 15px;\n  border-radius: 10px 10px 0px 0px;\n}\n\nion-content .middle-text {\n  border-radius: 0px 0px 10px 10px;\n}\n\nion-content .question {\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\nion-content .question p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nion-content .question ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\nion-content .question ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n\nion-content ion-radio-group {\n  display: flex;\n}\n\nion-content ion-radio-group ion-item {\n  margin: 0 !important;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.popUp {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n  z-index: 1000;\n}\n\n.popUp .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.popUp .img-card {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.popUp .img-card .popupStyle {\n  width: 100%;\n  height: 70%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.popUp .img-card img {\n  max-width: 90%;\n  max-height: 180px;\n  border-radius: 20px;\n  margin: 15px 0px 15px;\n}\n\n.popUp .img-card table {\n  text-align: left;\n  width: 90%;\n  margin: 0px auto 20px;\n  font-size: 15px;\n}\n\n.popUp .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #9162b0;\n  color: #9162b0;\n  font-size: 29px;\n  padding: 5px 5px;\n  position: absolute;\n  top: -15px;\n  right: -10px;\n  z-index: 1;\n}\n\n.popUp.open {\n  top: 0%;\n}\n\n.saveBtn {\n  --border-radius: 15px;\n  text-transform: capitalize;\n  color: #FFF;\n  display: flex;\n  margin: 10px auto;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 40%;\n}\n\n.error-message {\n  color: red !important;\n  margin: 0px 0px 0px 5px;\n}\n\n.questionSub {\n  border: 1.5px solid #480ca8;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\n.questionSub p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.questionSub ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\n.questionSub ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQURJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFHUjs7QUFESTtFQUVJLGdDQUFBO0FBRVI7O0FBQUk7RUFDRSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFBTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFDTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQ007RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBQ007RUFDRSxvQkFBQTtBQUNSOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFESjs7QUFFSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVI7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUNRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNWOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNaOztBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDVjs7QUFFSTtFQUNJLE9BQUE7QUFBUjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUdJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFGTjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGTiIsImZpbGUiOiJ2b2x1bnRlZXItaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuaGVhZGVyLXRleHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZS10ZXh0e1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucXVlc3Rpb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3BVcHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIC5ibGFja2Ryb3B7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZy1jYXJke1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAucG9wdXBTdHlsZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM5MTYyYjA7XHJcbiAgICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm9wZW57XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNhdmVCdG57XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG4gIH1cclxuICBcclxuICAucXVlc3Rpb25TdWIge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNDgwY2E4O1xyXG4gIC8vICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    70161:
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.html ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n      <ion-button><ion-icon slot=\"icon-only\" style=\"zoom:1\" name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons> \r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">ITK Center Questions</div>\r\n    </ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"VForm\">\r\n    <div formArrayName=\"VolunteerForm\">\r\n      <div size=\"12\" *ngFor=\"let item of VForm.get('VolunteerForm')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n        \r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 1 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\" (ionChange)=\"onEvent($event,i,item.value.totalSub)\">\r\n            <ion-col size=\"12\">\r\n              <ion-radio-group  value=\"true\" formControlName=\"qusRes\" >\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>ஆம் </ion-label>\r\n                  <ion-radio slot=\"start\" value=\"1\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>இல்லை</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"2\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 1 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\" (ionChange)=\"onEvent($event,i,item.value.totalSub)\">\r\n            <ion-col size=\"12\">\r\n              <ion-radio-group value=\"true\" formControlName=\"qusRes\" >\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>ஆம் </ion-label>\r\n                  <ion-radio slot=\"start\" value=\"1\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>இல்லை</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"2\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  *ngIf=\"item.value.qusType == 2 && !!item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" >\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"text\" (ionChange)=\"onEventText($event, i, 1)\" formControlName=\"qusRes\" placeholder=\"Please enter\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n\r\n        </div>\r\n\r\n        <div class=\"questionSub\"  *ngIf=\"item.value.qusType == 2 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"text\" (ionChange)=\"onEventText($event, i, 2)\" formControlName=\"qusRes\" placeholder=\"Please enter\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n  \r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 3 && !item.value.qusSubId\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"tel\" (ionChange)=\"onEventNumber($event, i, 1, item.value.totalSub)\" maxlength=\"{{item.value.qusMax}}\" minlength=\"{{item.value.qusMin}}\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} digit number </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} digit number </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 3 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"tel\" (ionChange)=\"onEventNumber($event, i, 2, item.value.totalSub)\" maxlength=\"{{item.value.qusMax}}\" minlength=\"{{item.value.qusMin}}\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} digit number </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} digit number </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"*ngIf=\"item.value.qusType == 4 && !item.value.qusSubId\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"email\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\"*ngIf=\"item.value.qusType == 4 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"email\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 5 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-textarea rows=\"5\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 5 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-textarea rows=\"5\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 6 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onDropDown($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"false\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption \" [value]=\"option.id\" >{{ option.name }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 6 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onDropDown($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"false\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 7 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onCheckBox($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"true\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 7 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onCheckBox($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"true\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 8 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"DD/MM/YYYY hh:mm A\" placeholder=\"Select Date\"></ion-datetime>\r\n                <ion-icon name=\"calendar-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 8 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"DD/MM/YYYY hh:mm A\" placeholder=\"Select Date \"></ion-datetime>\r\n                <ion-icon name=\"calendar-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 9 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"hh:mm A\" placeholder=\"Select Time\"></ion-datetime>\r\n                <ion-icon name=\"time-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 9 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"hh:mm A\" placeholder=\"Select Time\"></ion-datetime>\r\n                <ion-icon name=\"time-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 10 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"!item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <!-- <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-input *ngIf=\"!fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\"></ion-input>\r\n                <ion-input *ngIf=\"fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\"></ion-input>\r\n              </ion-item> -->\r\n              <div style=\"margin-top: 10px;\" (click)=\"openCamera(i)\">\r\n                <ion-col size=\"1\" style=\"text-align: center;\">\r\n                  <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                    Click to Capture Image\r\n                  </label>\r\n                </ion-col>\r\n              </div>\r\n            </ion-col>\r\n            <!-- <label class=\"valid-clr1\" style=\"color: #480ca8;margin: 0px 10px; display: block;\">Only JPG / JPEG / PNG allowed, size 1 MB </label> -->\r\n          </ion-row>\r\n          <ion-row *ngIf=\"item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n                <ion-button *ngIf=\"edit_status == '1'\" (click)=\"uploadImgDelete(i)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                </ion-button>\r\n                <img (click)=\"viewImage(item.value.ImageView)\" src=\"{{item.value.ImageView}}\" class=\"uploadImage\">\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 10 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"!item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <!-- <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-input *ngIf=\"!fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\" #fileInput></ion-input>\r\n                <ion-input *ngIf=\"fileEmpty\"type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\" #fileInput></ion-input>\r\n              </ion-item> -->\r\n              <div style=\"margin-top: 10px;\" (click)=\"openCamera(i)\">\r\n                <ion-col size=\"1\" style=\"text-align: center;\">\r\n                  <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                    Click to Capture Image\r\n                  </label>\r\n                </ion-col>\r\n              </div>\r\n            </ion-col>\r\n            <!-- <label class=\"valid-clr1\" style=\"color: #480ca8;margin: 0px 10px; display: block;\">Only JPG / JPEG / PNG allowed, size 1 MB </label> -->\r\n          </ion-row>\r\n          <ion-row *ngIf=\"item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n                <ion-button (click)=\"uploadImgDelete(i)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                </ion-button>\r\n                <img (click)=\"viewImage(item.value.ImageView)\" src=\"{{item.value.ImageView}}\" class=\"uploadImage\">\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <ion-col size=\"12\" *ngIf=\"volunteerData.length == 0\">\r\n    <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"volunteerData.length > 0\">\r\n  <!-- <ion-button [disabled]=\"VolunteerForm.invalid\" size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\"> சேமிக்கவும் </ion-button> -->\r\n  <ion-button size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\"> சமர்பிக்க </ion-button>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-inspection_volunteer-inspection_module_ts-es5.js.map