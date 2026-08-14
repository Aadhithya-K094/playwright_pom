(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_building_new-roomquestions_new-roomquestions_module_ts"], {
    /***/
    1834:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-roomquestions/new-roomquestions-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRoomquestionsPageRoutingModule": function NewRoomquestionsPageRoutingModule() {
          return (
            /* binding */
            _NewRoomquestionsPageRoutingModule
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


      var _new_roomquestions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-roomquestions.page */
      67438);

      var routes = [{
        path: '',
        component: _new_roomquestions_page__WEBPACK_IMPORTED_MODULE_0__.NewRoomquestionsPage
      }];

      var _NewRoomquestionsPageRoutingModule = /*#__PURE__*/_createClass(function NewRoomquestionsPageRoutingModule() {
        _classCallCheck(this, NewRoomquestionsPageRoutingModule);
      });

      _NewRoomquestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewRoomquestionsPageRoutingModule);
      /***/
    },

    /***/
    46964:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-roomquestions/new-roomquestions.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRoomquestionsPageModule": function NewRoomquestionsPageModule() {
          return (
            /* binding */
            _NewRoomquestionsPageModule
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


      var _new_roomquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-roomquestions-routing.module */
      1834);
      /* harmony import */


      var _new_roomquestions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-roomquestions.page */
      67438);

      var _NewRoomquestionsPageModule = /*#__PURE__*/_createClass(function NewRoomquestionsPageModule() {
        _classCallCheck(this, NewRoomquestionsPageModule);
      });

      _NewRoomquestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_roomquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRoomquestionsPageRoutingModule],
        declarations: [_new_roomquestions_page__WEBPACK_IMPORTED_MODULE_1__.NewRoomquestionsPage]
      })], _NewRoomquestionsPageModule);
      /***/
    },

    /***/
    67438:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-roomquestions/new-roomquestions.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRoomquestionsPage": function NewRoomquestionsPage() {
          return (
            /* binding */
            _NewRoomquestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_new_roomquestions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./new-roomquestions.page.html */
      58585);
      /* harmony import */


      var _new_roomquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-roomquestions.page.scss */
      32416);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
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


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);

      var _NewRoomquestionsPage = /*#__PURE__*/function () {
        function NewRoomquestionsPage(formBuilder, route, camera, router, el, androidPermissions, sqliteDB, toastController, alertService, utilityService, file, uploadService, geolocation) {
          _classCallCheck(this, NewRoomquestionsPage);

          this.formBuilder = formBuilder;
          this.route = route;
          this.camera = camera;
          this.router = router;
          this.el = el;
          this.androidPermissions = androidPermissions;
          this.sqliteDB = sqliteDB;
          this.toastController = toastController;
          this.alertService = alertService;
          this.utilityService = utilityService;
          this.file = file;
          this.uploadService = uploadService;
          this.geolocation = geolocation;
          this.id = 1;
          this.repair1 = [{
            "value": "1",
            "label": "Classroom"
          }, {
            "value": "2",
            "label": "Lab"
          }, {
            "value": "3",
            "label": "Library"
          }, {
            "value": "4",
            "label": "HM Room"
          }, {
            "value": "5",
            "label": "Record Room"
          }, {
            "value": "6",
            "label": "Staff Room"
          }, {
            "value": "7",
            "label": "Kitchen"
          }, {
            "value": "8",
            "label": "Noon Meal Store Room"
          }, {
            "value": "9",
            "label": "Dining"
          }, {
            "value": "10",
            "label": "Toilet"
          }, {
            "value": "11",
            "label": "Pump Room"
          }, {
            "value": "12",
            "label": "Store Room"
          }, {
            "value": "13",
            "label": "Anganwadi"
          }, {
            "value": "14",
            "label": "Empty"
          }, {
            "value": "15",
            "label": "Security Room "
          }, {
            "value": "16",
            "label": "PET Room"
          }, {
            "value": "17",
            "label": "SMART Classroom"
          }, {
            "value": "18",
            "label": "Auditorium"
          }, {
            "value": "19",
            "label": "Co-Curricular Activity Room"
          }];
          this.repair69 = [{
            "value": "1",
            "label": "Cement"
          }, {
            "value": "2",
            "label": "Mosaic"
          }, {
            "value": "3",
            "label": "Tiles"
          }, {
            "value": "4",
            "label": "Kotta Stone"
          }, {
            "value": "5",
            "label": "Others"
          }];
          this.repair63 = [{
            "value": "1",
            "label": "Excess Furniture"
          }, {
            "value": "2",
            "label": " Excess Uniforms"
          }, {
            "value": "3",
            "label": "Books"
          }, {
            "value": "4",
            "label": "Noon Meal Ingredients"
          }, {
            "value": "5",
            "label": "Others"
          }];
          this.repair72 = [{
            "value": "1",
            "label": "Good"
          }, {
            "value": "2",
            "label": "Needs repair"
          }, // {
          //   "value": "3",
          //   "label": "To be Demolished"
          // },
          {
            "value": "4",
            "label": "Under Construction"
          }, {
            "value": "5",
            "label": "Under Renovation"
          }];
          this.repair57 = [{
            "value": "1",
            "label": "Inside"
          }, {
            "value": "2",
            "label": "Outside"
          }];
          this.repair58 = [{
            "value": "1",
            "label": "Running water"
          }, {
            "value": "2",
            "label": "Hand pump/ bucket"
          }, {
            "value": "3",
            "label": "Drums/ cement tanks/ plastic containers"
          }, {
            "value": "4",
            "label": "No water supplies available"
          }];
          this.repair65 = [{
            "value": "1",
            "label": "Low enrolment"
          }, {
            "value": "2",
            "label": "No furniture"
          }, {
            "value": "3",
            "label": "Due to room condition"
          }, {
            "value": "4",
            "label": "Other"
          }];
          this.storeDrop = [{
            "value": "1",
            "label": "Excess Furniture"
          }, {
            "value": "2",
            "label": "Excess Uniforms"
          }, {
            "value": "3",
            "label": "Books"
          }, {
            "value": "4",
            "label": "Noon Meal Ingredients"
          }, {
            "value": "5",
            "label": "Others"
          }];
          this.question14 = [{
            "value": "1",
            "label": "Physics"
          }, {
            "value": "2",
            "label": "Chemistry"
          }, {
            "value": "3",
            "label": "Biology"
          }, {
            "value": "4",
            "label": "Language"
          }, {
            "value": "5",
            "label": "Computer (Non Hi-Tech)"
          }, {
            "value": "6",
            "label": "Hi-Tech"
          }, {
            "value": "7",
            "label": "Math"
          }, {
            "value": "8",
            "label": "Integrated Science Lab"
          }, {
            "value": "9",
            "label": "Atal Tinkering"
          }, {
            "value": "10",
            "label": "Vocational"
          }, {
            "value": "11",
            "label": "Geography lab"
          }, {
            "value": "12",
            "label": "Home Science lab"
          }, {
            "value": "13",
            "label": "Psycology"
          }];
          this.question22 = [{
            "value": "1",
            "label": "Yes"
          }, {
            "value": "2",
            "label": "No"
          }, {
            "value": "3",
            "label": "Not required"
          }];
          this.question23 = [{
            "value": "1",
            "label": "Yes - Open drain"
          }, {
            "value": "2",
            "label": "Yes - Closed drain"
          }, {
            "value": "3",
            "label": "No"
          }];
          this.question31 = [{
            "value": "1",
            "label": "Male Staff"
          }, {
            "value": "2",
            "label": "Female Staff"
          }, {
            "value": "3",
            "label": "Both"
          }];
          this.question36 = [{
            "value": "1",
            "label": "LPG Connection"
          }, {
            "value": "2",
            "label": "Clean Water Supply"
          }, {
            "value": "3",
            "label": "Firewood Only"
          }];
          this.question43 = [{
            "value": "1",
            "label": "Girls Toilet"
          }, {
            "value": "2",
            "label": "Boys Toilet"
          }, {
            "value": "3",
            "label": "Common Toilet"
          }, {
            "value": "4",
            "label": "CWSN Boys Toilet"
          }, {
            "value": "5",
            "label": "CWSN Girls Toilet"
          }, {
            "value": "6",
            "label": "CWSN Common Toilet"
          }, {
            "value": "7",
            "label": "Male Staff Toilet"
          }, {
            "value": "8",
            "label": "Female Staff Toilet"
          }, {
            "value": "9",
            "label": "Common Staff Toilet"
          }]; // question44 = [
          //   {
          //     "value": "1",
          //     "label": "Running water"
          //   },
          //   {
          //     "value": "2",
          //     "label": "Hand pump/ bucket"
          //   },
          //   {
          //     "value": "3",
          //     "label": "Drums/ cement tanks/ plastic containers"
          //   },
          //   {
          //     "value": "4",
          //     "label": "No water supplies available"
          //   }
          // ];

          this.question45 = [{
            "value": "1",
            "label": "Running Water in all cubicles"
          }, {
            "value": "2",
            "label": "Buckets/Handpump"
          }, {
            "value": "3",
            "label": "Water Drum"
          }, {
            "value": "4",
            "label": "No Water Connection"
          }];
          this.question46 = [{
            "value": "1",
            "label": "No specific measure / sludge released in open"
          }, {
            "value": "2",
            "label": "Open drain"
          }, {
            "value": "3",
            "label": " Soak pits with sturdy and solid cover (prevents contact with flies/accidental overspill)"
          }, {
            "value": "4",
            "label": "Septic tank With cover"
          }, {
            "value": "5",
            "label": "sewer line with sturdy and solid cover"
          }, {
            "value": "6",
            "label": "Bio-Toilets"
          }, {
            "value": "7",
            "label": "Septic tank without cover"
          }, {
            "value": "8",
            "label": "Sewage Connection"
          }];
          this.question55 = [{
            "value": "1",
            "label": "Roof over cubicles and urinals"
          }, {
            "value": "2",
            "label": "Roof over cubicles only"
          }, {
            "value": "3",
            "label": "No Roof"
          }];
          this.question56 = [{
            "value": "1",
            "label": "Smokeless Incinerator"
          }, {
            "value": "2",
            "label": "Electric Incinerator"
          }, {
            "value": "3",
            "label": "Dustbins"
          }, {
            "value": "4",
            "label": "Burial Pit"
          }, {
            "value": "5",
            "label": "None"
          }, {
            "value": "6",
            "label": "Not Applicable"
          }];
          this.question37 = [{
            "value": "1",
            "label": "Borewell"
          }, {
            "value": "2",
            "label": "Piped Water Supply from Localbody"
          }, {
            "value": "3",
            "label": "Open Well"
          }, {
            "value": "4",
            "label": "Water Can"
          }, {
            "value": "5",
            "label": "RO Plant"
          }, {
            "value": "6",
            "label": "Hand Pump"
          }, {
            "value": "7",
            "label": "Others"
          }];
          this.question77 = [// {
          //   "value": "1",
          //   "label": "Replacement of Doors"
          // },
          // {
          //   "value": "2",
          //   "label": "Replacement of Ventilation Windows"
          // },
          // {
          //   "value": "3",
          //   "label": "Repairing of Doors"
          // },
          // {
          //   "value": "4",
          //   "label": "Repairing of Ventilation Windows"
          // },
          {
            "value": "5",
            "label": "Repainting of Doors"
          }, // {
          //   "value": "6",
          //   "label": "Minor Plumbing Repairs"
          // },
          // {
          //   "value": "7",
          //   "label": "Minor Electrical Repairs"
          // }
          {
            "value": "8",
            "label": "Repainting of windows"
          }, {
            "value": "9",
            "label": "Replacement of Wash Basin"
          }, {
            "value": "10",
            "label": "Replacement of taps"
          }, {
            "value": "12",
            "label": "Repair of Cupboards"
          }];
          this.repair78 = [{
            "value": "1",
            "label": "Ceiling plastering 1:3, 10mm tk"
          }, // {
          //   "value": "2",
          //   "label": "Exterior - White washing and Colour washing"
          // },
          {
            "value": "3",
            "label": "Interior - White washing and Colour washing"
          }, {
            "value": "4",
            "label": "Replastering, 20mm tk"
          }, {
            "value": "5",
            "label": "Roof Leakage"
          }, {
            "value": "6",
            "label": "Reflooring tiles"
          }, {
            "value": "7",
            "label": "Floor Patchwork"
          }, {
            "value": "8",
            "label": "Repair of Water Supply"
          }, {
            "value": "9",
            "label": "Repair of Drainage Facility"
          }, {
            "value": "10",
            "label": "Improvement in Ventilation"
          }, {
            "value": "11",
            "label": "Repair of Windows"
          }];
          this.repair79 = [{
            "value": "1",
            "label": "Replacement of Doors"
          }, {
            "value": "2",
            "label": "Replacement of Windows"
          }, {
            "value": "3",
            "label": "Repairing of Doors"
          }, {
            "value": "4",
            "label": "Repairing of Windows"
          }, {
            "value": "5",
            "label": "Repainting of Doors"
          }, {
            "value": "6",
            "label": "Repainting of Windows"
          }, {
            "value": "7",
            "label": "Minor Electrical Repairs"
          }, {
            "value": "8",
            "label": "Minor Plumbing Repairs"
          }, {
            "value": "9",
            "label": "Switches and Wires"
          }, {
            "value": "10",
            "label": "Replacement of Wash Basin"
          }, {
            "value": "11",
            "label": "Replacement of Taps"
          }, {
            "value": "12",
            "label": "Repair of Cupboards"
          }];
          this.question76 = [{
            "value": "1",
            "label": "Ceiling plastering 1:3, 10mm tk"
          }, // {
          //   "value": "2",
          //   "label": "Exterior - White washing and Colour washing"
          // },
          {
            "value": "3",
            "label": "Interior - White washing and Colour washing"
          }, {
            "value": "4",
            "label": "Replastering, 20mm tk"
          }, {
            "value": "5",
            "label": "Roof Leakage"
          }, {
            "value": "6",
            "label": "Reflooring tiles"
          }, {
            "value": "7",
            "label": "Floor Patchwork"
          }, {
            "value": "8",
            "label": "Replacement of Latrines"
          }, {
            "value": "9",
            "label": "Replacement of Urinals"
          }, {
            "value": "10",
            "label": "Repair of Water Supply"
          }, {
            "value": "11",
            "label": "Repair of Drainage Facility"
          }, {
            "value": "12",
            "label": "Improvement in Ventilation"
          }, {
            "value": "13",
            "label": "Repair of Windows"
          }];
          this.question761 = [{
            "value": "1",
            "label": "Ceiling plastering 1:3, 10mm tk"
          }, {
            "value": "2",
            "label": "Exterior - White washing and Colour washing"
          }, {
            "value": "3",
            "label": "Interior - White washing and Colour washing"
          }, {
            "value": "4",
            "label": "Replastering, 20mm tk"
          }, {
            "value": "5",
            "label": "Roof Leakage"
          }, {
            "value": "6",
            "label": "Reflooring tiles"
          }, {
            "value": "7",
            "label": "Floor Patchwork"
          }, {
            "value": "8",
            "label": "Replacement of Latrines"
          }, {
            "value": "9",
            "label": "Replacement of Urinals"
          }, {
            "value": "10",
            "label": "Repair of Water Supply"
          }, {
            "value": "11",
            "label": "Repair of Drainage Facility"
          }, {
            "value": "12",
            "label": "Improvement in Ventilation"
          }];
          this.question75 = [{
            "value": "1",
            "label": "Replacement of Doors"
          }, {
            "value": "2",
            "label": "Replacement of Windows"
          }, {
            "value": "3",
            "label": "Repairing of Doors"
          }, {
            "value": "4",
            "label": "Repairing of Windows"
          }, {
            "value": "5",
            "label": "Repainting of Doors"
          }, {
            "value": "6",
            "label": "Repainting of Windows"
          }, // {
          //   "value": "7",
          //   "label": "Minor Electrical Repairs"
          // }
          {
            "value": "8",
            "label": "Repainting of blackboard "
          }, {
            "value": "9",
            "label": "Switches and wires"
          }, {
            "value": "12",
            "label": "Repair of Cupboards"
          }];
          this.question74 = [{
            "value": "1",
            "label": "Ceiling plastering 1:3, 10mm tk"
          }, // {
          //   "value": "2",
          //   "label": "Exterior - White washing and Colour washing"
          // },
          {
            "value": "3",
            "label": "Interior - White washing and Colour washing"
          }, {
            "value": "4",
            "label": "Replastering, 20mm tk"
          }, {
            "value": "5",
            "label": "Roof Leakage"
          }, {
            "value": "6",
            "label": "Reflooring tiles"
          }, {
            "value": "7",
            "label": "Floor Patchwork"
          }, {
            "value": "8",
            "label": "Repair of Windows"
          }];
          this.question73 = [{
            "value": "1",
            "label": "Major Repair"
          }, {
            "value": "2",
            "label": "Minor Repair"
          }, {
            "value": "3",
            "label": "Both"
          }];
          this.question72 = [{
            "value": "1",
            "label": "Good"
          }, {
            "value": "2",
            "label": "Needs repair"
          }];
          this.statge = [{
            "value": "1",
            "label": "Increase in Height"
          }, {
            "value": "2",
            "label": "Levelling"
          }, {
            "value": "3",
            "label": "To be Demolished"
          }];
          this.HMStatusToilet = [{
            "value": "1",
            "label": "Functional"
          }, {
            "value": "2",
            "label": "Needs Repair"
          }];
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
            label: 'others'
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
            label: 'Hathaway'
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
          this.StatusStatge = [{
            value: "1",
            label: 'Functional'
          }, {
            value: "2",
            label: 'Needs Repair'
          }, {
            value: "3",
            label: 'To be demolished'
          }, {
            value: "4",
            label: 'Under construction'
          }, {
            value: "5",
            label: 'No stage'
          }];
          this.SanitaryPad = [{
            value: "1",
            label: 'Yes'
          }, {
            value: "2",
            label: 'No'
          }, {
            value: "3",
            label: 'Not Functional'
          }, {
            value: "4",
            label: 'No, Pads available with class teacher'
          }];
          this.dataList = [];
          this.ToiletCWSN = false;
          this.typeLab = true;
          this.tabsData = 0;
          this.RoomUse = "";
        }

        return _createClass(NewRoomquestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.vistId = this.routeData.queryParams.vistId;
            this.buildingId = this.routeData.queryParams.buildingId;
            this.floorId = this.routeData.queryParams.floorId;
            this.roomid = this.routeData.queryParams.roomId;
            this.status = this.routeData.queryParams.status;
            this.udiseCode = this.utilityService.udiseCode;
            this.buildName = this.routeData.queryParams.buildName;
            console.log(this.roomid, "room id"); // this.getbuilding();

            this.checkLocalDb();
            this.presentToastWithOptions(+this.buildingId - 100, this.buildName);
            this.checkLocalBuildDb();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.formBuilder.group({
              "IndxId": "",
              "SchlId": this.schoolId,
              "VistId": this.vistId,
              "BldgIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "BldgId": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "FloorIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "FloorId": this.floorId,
              "RoomId": this.roomid,
              "RoomCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "RoomConditionRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RepairType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RepairTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "MajorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "MajorRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "MinorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "MinorRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaReplasteringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaIntWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaIntWwRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaPlastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaPlasteringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaReflooringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaPatchwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AreaPatchworkRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorReplaceRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowReplaceRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DoorRepaintRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "WindowRepaintRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LatrinReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LatrinReplaceRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "UrinalReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "UrinalReplaceRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "PipeNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "PipeNeedRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DrainageNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DrainageNeedRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RoomLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "RoomLengthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RoomBreadth": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "RoomBreadthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "FloorType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "FloorTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NumBenchAvail": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "NumBenchAvailRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NumDesksAvail": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "NumDesksAvailRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "TubelightFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "TubelightFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "FansFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "FansFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Cupboard": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "CupboardRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NumCupboardReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "NumCupboardReqRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RoomArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "RoomAreaRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NumChairAvail": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "NumChairAvailRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NumTableAvail": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              "NumTableAvailRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "TeacherTableYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "TeacherTableYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "TelevisionFuncYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "TelevisionFuncYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartboardPrjtFuncYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SmartboardPrjtFuncYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ClassRoomProjYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "ClassRoomProjYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabComputerFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabComputerFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabComputerRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabComputerRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabWatersupplyYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "LabWatersupplyYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabDrainage": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "LabDrainageRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabInternetConn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "LabInternetConnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabInternetConnType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabInternetConnTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabBandwidth": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabBandwidthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabServiceProvider": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabServiceProviderRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabServiceProviderOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabServiceProviderOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabProjector": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabProjectorRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              // "LabPrinterWebcam": new FormControl('', null),
              "LabPrinter": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabPrinterRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabWebCamera": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabWebCameraRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabMic": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabMicRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabHeadphones": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', null),
              "LabHeadphonesRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabPhotoOne": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabPhotoOneRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabPhotoOneName": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabPhotoOneNameRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              // "LabPhotoTwo": new FormControl('', null),
              // "LabPhotoTwoName": new FormControl('', null),
              "LabLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabLatitudeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabLogitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LabLogitudeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "LibraryBooks": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "LibraryBooksRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "HmRoomToiletYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "HmRoomToiletYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "HmRoomToiletStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "HmRoomToiletStatusRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "StaffrmUsedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "StaffrmUsedByRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenWtrSrc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenWtrSrcRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenLPGConYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "KitchenLPGConYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenWtrSupply": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "KitchenWtrSupplyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenStorageYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "KitchenStorageYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenCleanYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "KitchenCleanYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "KitchenGardenYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "KitchenGardenYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningFunctionalYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "DiningFunctionalYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningSeatingCapacity": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningSeatingCapacityRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningSeatingWtrSupply": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "DiningSeatingWtrSupplyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningRoomHandwash": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "DiningRoomHandwashRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningNumTapFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "DiningNumTapFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "NoonmealStorageClean": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "NoonmealStorageCleanRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "StoreRoomPurpose": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "StoreRoomPurposeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "StrroomStorageClean": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "StrroomStorageCleanRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ReasonEmpty": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ReasonEmptyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              // need toilet
              "ToiletType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletWaterCon": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletWaterConRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletWasteDis": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletWasteDisRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Iwccubicles": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "IwccubiclesRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "IwccubiclesFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "IwccubiclesFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Ewccubicles": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "EwccubiclesRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Ewccubiclesfunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "EwccubiclesfuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletCubicSideHandRail": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletCubicSideHandRailRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Urinals": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "UrinalsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Urinalsfunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "UrinalsfuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletTapsFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletTapsFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletNeedTabs": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletNeedTabsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletBucket": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletBucketRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Toiletmugs": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletmugsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SizeSuitable": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SizeSuitableRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "Roof": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "RoofRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletSanitaryPad": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "ToiletSanitaryPadRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SanitWasteDisp": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SanitWasteDispRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "HwFacility": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "HwFacilityRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              // "HwFacilityLocation": new FormControl('', null),
              // "HwFacilityType": new FormControl('', null),
              // "PipingNeed": new FormControl(false, null),
              // "PipeLengthNeed": new FormControl('', null),
              // "TapsFunc": new FormControl('', null),
              // "TapsReq": new FormControl('', null),
              // "StorageFacilityClosed": new FormControl(false, null),
              // toilet end
              "AuditoriumYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "AuditoriumYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AudiStageStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AudiStageStatusRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AuditoriumLights": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AuditoriumLightsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AuditoriumFans": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AuditoriumFansRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "AuditoriumPrjtFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "AuditoriumPrjtFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomFacilityYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SmartRoomFacilityYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomDeviceFunYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SmartRoomDeviceFunYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomComputersYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SmartRoomComputersYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomFunComp": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomFunCompRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomFunCompRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartRoomFunCompRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartTabletFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartTabletFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartSpeakerFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartSpeakerFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartPaFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartPaFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartInternet": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, null),
              "SmartInternetRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartInternetConnType": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartInternetConnTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartInternetConnTypeOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartInternetConnTypeOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartBandwidth": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartBandwidthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartServiceProvider": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartServiceProviderRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartServiceProviderOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              "SmartServiceProviderOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null) // "AreaExtWw": new FormControl('', null),
              // "RoomHeight": new FormControl('', Validators.required),
              // "TelevisionYn": new FormControl(false, null),
              // "SmartboardPrjtYn": new FormControl(false, null),
              // "ClassRoomProjFuncYn": new FormControl(false, null),
              // "LabComputerYn": new FormControl(false, null),
              // "HmRoomTblYn": new FormControl(false, null),
              // "IwcToilet": new FormControl(false, null),
              // "EwcToilet": new FormControl(false, null),
              // "UrinalToilet": new FormControl(false, null),
              // "AuditoriumStageReqt": new FormControl('', null),
              // "AuditoriumStageArea": new FormControl('', null),
              // "AuditoriumStageHeight": new FormControl('', null),
              // "AuditoriumStageAreaLevel": new FormControl('', null),
              // "AuditoriumPrjtYn": new FormControl(false, null),

            });
          }
        }, {
          key: "getTabs",
          value: function getTabs(i) {
            if (this.RoomUse) {
              if (this.tabsData == i) {
                this.tabsData = 0;
              } else {
                this.tabsData = i;
              }
            } else {
              this.alertService.error("Please select room used for");
            }
          }
        }, {
          key: "onSelectedRoom",
          value: function onSelectedRoom() {
            if (+this.RoomUse == 1) {
              this.form.controls['TeacherTableYn'].setValue(false); // this.form.controls['TelevisionYn'].setValue(false);

              this.form.controls['TelevisionFuncYn'].setValue(false); // this.form.controls['SmartboardPrjtYn'].setValue(false);

              this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
              this.form.controls['ClassRoomProjYn'].setValue(false); // this.form.controls['ClassRoomProjFuncYn'].setValue(false);
            } else {
              this.form.controls['TeacherTableYn'].setValue(false); // this.form.controls['TelevisionYn'].setValue(false);

              this.form.controls['TelevisionFuncYn'].setValue(false); // this.form.controls['SmartboardPrjtYn'].setValue(false);

              this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
              this.form.controls['ClassRoomProjYn'].setValue(false); // this.form.controls['ClassRoomProjFuncYn'].setValue(false);
            }

            if (+this.RoomUse == 2) {
              this.form.controls['LabType'].setValue('');
              this.form.controls['LabInternetConn'].setValue('');
              this.form.controls['LabInternetConnType'].setValue('');
              this.form.controls['LabBandwidth'].setValue('');
              this.form.controls['LabServiceProvider'].setValue('');
              this.form.controls['LabServiceProviderOthers'].setValue('');
              this.form.controls['LabProjector'].setValue('0'); // this.form.controls['LabPrinterWebcam'].setValue('');

              this.form.controls['LabPrinter'].setValue('0');
              this.form.controls['LabWebCamera'].setValue('0');
              this.form.controls['LabMic'].setValue('0');
              this.form.controls['LabHeadphones'].setValue('0'); // this.form.controls['LabComputerYn'].setValue(false);

              this.form.controls['LabWatersupplyYn'].setValue(false);
              this.form.controls['LabDrainage'].setValue(false);
              this.form.controls['LabPhotoOne'].setValue(''); // this.form.controls['LabPhotoTwo'].setValue('');

              this.form.controls['LabPhotoOneName'].setValue(''); // this.form.controls['LabPhotoTwoName'].setValue('');

              this.form.controls['LabType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required); // this.form.controls['LabProjector'].setValidators(Validators.required);
              // this.form.controls['LabWebCamera'].setValidators(Validators.required);
              // this.form.controls['LabMic'].setValidators(Validators.required);
              // this.form.controls['LabHeadphones'].setValidators(Validators.required);

              this.form.controls['LabPhotoOne'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required); // this.form.controls['LabPhotoTwo'].setValidators(null);

              this.form.controls['LabComputerRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['LabComputerFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['LabType'].setValue('');
              this.form.controls['LabInternetConn'].setValue('');
              this.form.controls['LabInternetConnType'].setValue('');
              this.form.controls['LabBandwidth'].setValue('');
              this.form.controls['LabServiceProvider'].setValue('');
              this.form.controls['LabServiceProviderOthers'].setValue('');
              this.form.controls['LabProjector'].setValue('0'); // this.form.controls['LabPrinterWebcam'].setValue('');

              this.form.controls['LabPrinter'].setValue('0');
              this.form.controls['LabWebCamera'].setValue('0');
              this.form.controls['LabMic'].setValue('0');
              this.form.controls['LabHeadphones'].setValue('0');
              this.form.controls['LabPhotoOne'].setValue(''); // this.form.controls['LabPhotoTwo'].setValue('');

              this.form.controls['LabPhotoOneName'].setValue(''); // this.form.controls['LabPhotoTwoName'].setValue('');
              // this.form.controls['LabComputerYn'].setValue(false);

              this.form.controls['LabComputerFunc'].setValue('0');
              this.form.controls['LabComputerRepair'].setValue('0');
              this.form.controls['LabWatersupplyYn'].setValue(false);
              this.form.controls['LabDrainage'].setValue(false);
              this.form.controls['LabType'].setValidators(null);
              this.form.controls['LabInternetConn'].setValidators(null);
              this.form.controls['LabInternetConnType'].setValidators(null);
              this.form.controls['LabBandwidth'].setValidators(null);
              this.form.controls['LabServiceProvider'].setValidators(null);
              this.form.controls['LabServiceProviderOthers'].setValidators(null);
              this.form.controls['LabProjector'].setValidators(null); // this.form.controls['LabPrinterWebcam'].setValidators(null);

              this.form.controls['LabPrinter'].setValidators(null);
              this.form.controls['LabWebCamera'].setValidators(null);
              this.form.controls['LabMic'].setValidators(null);
              this.form.controls['LabHeadphones'].setValidators(null);
              this.form.controls['LabPhotoOne'].setValidators(null); // this.form.controls['LabPhotoTwo'].setValidators(null);

              this.form.controls['LabComputerFunc'].setValidators(null);
              this.form.controls['LabComputerRepair'].setValidators(null);
            }

            if (+this.RoomUse == 3) {
              this.form.controls['LibraryBooks'].setValue(false);
              this.form.controls['LibraryBooks'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['LibraryBooks'].setValue(false);
              this.form.controls['LibraryBooks'].setValidators(null);
            }

            if (+this.RoomUse == 4) {
              // this.form.controls['HmRoomTblYn'].setValue(false);
              // this.form.controls['HmRoomTblYn'].setValidators(Validators.required);
              this.form.controls['HmRoomToiletYn'].setValue(false);
              this.form.controls['HmRoomToiletYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['HmRoomToiletStatus'].setValue(false);
              this.form.controls['HmRoomToiletStatus'].setValidators(null);
            } else {
              // this.form.controls['HmRoomTblYn'].setValue(false);
              // this.form.controls['HmRoomTblYn'].setValidators(null);
              this.form.controls['HmRoomToiletYn'].setValue(false);
              this.form.controls['HmRoomToiletYn'].setValidators(null);
              this.form.controls['HmRoomToiletStatus'].setValue(false);
              this.form.controls['HmRoomToiletStatus'].setValidators(null);
            }

            if (+this.RoomUse == 6) {
              this.form.controls['StaffrmUsedBy'].setValue('');
              this.form.controls['StaffrmUsedBy'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['StaffrmUsedBy'].setValue('');
              this.form.controls['StaffrmUsedBy'].setValidators(null);
            }

            if (+this.RoomUse == 7) {
              this.form.controls['KitchenLPGConYn'].setValue(false);
              this.form.controls['KitchenWtrSrc'].setValue('');
              this.form.controls['KitchenWtrSupply'].setValue(false);
              this.form.controls['KitchenStorageYn'].setValue(false);
              this.form.controls['KitchenCleanYn'].setValue(false);
              this.form.controls['KitchenGardenYn'].setValue(false); // this.form.controls['KitchenWtrSrc'].setValidators(Validators.required);
            } else {
              this.form.controls['KitchenLPGConYn'].setValue(false);
              this.form.controls['KitchenWtrSrc'].setValue('');
              this.form.controls['KitchenWtrSupply'].setValue(false);
              this.form.controls['KitchenStorageYn'].setValue(false);
              this.form.controls['KitchenCleanYn'].setValue(false);
              this.form.controls['KitchenGardenYn'].setValue(false);
              this.form.controls['KitchenLPGConYn'].setValidators(null);
              this.form.controls['KitchenWtrSrc'].setValidators(null);
              this.form.controls['KitchenWtrSupply'].setValidators(null);
              this.form.controls['KitchenStorageYn'].setValidators(null);
              this.form.controls['KitchenCleanYn'].setValidators(null);
              this.form.controls['KitchenGardenYn'].setValidators(null);
            }

            if (+this.RoomUse == 8) {
              this.form.controls['NoonmealStorageClean'].setValue(false);
              this.form.controls['NoonmealStorageClean'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['NoonmealStorageClean'].setValue(false);
              this.form.controls['NoonmealStorageClean'].setValidators(null);
            }

            if (+this.RoomUse == 9) {
              this.form.controls['DiningFunctionalYn'].setValue(false);
              this.form.controls['DiningSeatingCapacity'].setValue('0');
              this.form.controls['DiningSeatingWtrSupply'].setValue(false);
              this.form.controls['DiningRoomHandwash'].setValue(false);
              this.form.controls['DiningNumTapFunc'].setValue('0');
              this.form.controls['DiningSeatingCapacity'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['DiningNumTapFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['DiningFunctionalYn'].setValue(false);
              this.form.controls['DiningSeatingCapacity'].setValue('0');
              this.form.controls['DiningSeatingWtrSupply'].setValue(false);
              this.form.controls['DiningRoomHandwash'].setValue(false);
              this.form.controls['DiningNumTapFunc'].setValue('0');
              this.form.controls['DiningFunctionalYn'].setValidators(null);
              this.form.controls['DiningSeatingCapacity'].setValidators(null);
              this.form.controls['DiningSeatingWtrSupply'].setValidators(null);
              this.form.controls['DiningRoomHandwash'].setValidators(null);
              this.form.controls['DiningNumTapFunc'].setValidators(null);
            }

            if (+this.RoomUse == 10) {
              this.form.controls['ToiletType'].setValue("");
              this.form.controls['ToiletWaterCon'].setValue("");
              this.form.controls['ToiletCubicSideHandRail'].setValue("0");
              this.form.controls['ToiletWasteDis'].setValue(""); // this.form.controls['IwcToilet'].setValue(false);

              this.form.controls['Iwccubicles'].setValue("0");
              this.form.controls['IwccubiclesFunc'].setValue("0"); // this.form.controls['EwcToilet'].setValue(false);

              this.form.controls['Ewccubicles'].setValue("0");
              this.form.controls['Ewccubiclesfunc'].setValue("0"); // this.form.controls['UrinalToilet'].setValue(false);

              this.form.controls['Urinals'].setValue("0");
              this.form.controls['Urinalsfunc'].setValue("0");
              this.form.controls['ToiletTapsFunc'].setValue("0");
              this.form.controls['ToiletNeedTabs'].setValue("0");
              this.form.controls['ToiletBucket'].setValue("0");
              this.form.controls['Toiletmugs'].setValue("0");
              this.form.controls['SizeSuitable'].setValue(false);
              this.form.controls['Roof'].setValue("");
              this.form.controls['ToiletSanitaryPad'].setValue("");
              this.form.controls['SanitWasteDisp'].setValue("");
              this.form.controls['HwFacility'].setValue(false); // this.form.controls['HwFacilityLocation'].setValue("");
              // this.form.controls['HwFacilityType'].setValue("");
              // this.form.controls['PipingNeed'].setValue(false);
              // this.form.controls['PipeLengthNeed'].setValue("");
              // this.form.controls['TapsFunc'].setValue("");
              // this.form.controls['TapsReq'].setValue("");
              // this.form.controls['StorageFacilityClosed'].setValue(false);

              this.form.controls['ToiletType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['ToiletWaterCon'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['ToiletCubicSideHandRail'].setValidators(null);
              this.form.controls['ToiletWasteDis'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['Iwccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['ToiletTapsFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['ToiletNeedTabs'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['ToiletBucket'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['Toiletmugs'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SizeSuitable'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['Roof'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['HwFacility'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SanitWasteDisp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);

              if (this.form.value.ToiletType == 4 || this.form.value.ToiletType == 5 || this.form.value.ToiletType == 6 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9) {
                // console.log("Array of Drop If", this.question76);
                this.question76 = this.question76.filter(function (dd) {
                  return dd.value != "9";
                });
              } else {
                this.question76 = [];
                this.question76 = this.question761; // console.log("Array of Drop Else", this.question76);
              }

              if (this.form.value.ToiletType == 4 || this.form.value.ToiletType == 5 || this.form.value.ToiletType == 6) {
                this.form.controls['Iwccubicles'].setValidators(null);
                this.form.controls['IwccubiclesFunc'].setValidators(null); // this.ToiletCWSN = true;
              } else {
                this.form.controls['Iwccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['IwccubiclesFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required); // this.ToiletCWSN = false;
              } // if(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 ||
              // this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9){
              //   this.form.controls['Ewccubicles'].setValidators(Validators.required);
              //   this.form.controls['Ewccubiclesfunc'].setValidators(Validators.required);
              // }else{
              //   this.form.controls['Ewccubicles'].setValidators(null);
              //   this.form.controls['Ewccubiclesfunc'].setValidators(null);
              // }
              // Toilet Ignore Bench, Desk, Fans and Cupboard..........


              this.form.controls['NumBenchAvail'].setValue("0");
              this.form.controls['NumDesksAvail'].setValue("0");
              this.form.controls['FansFunc'].setValue("0");
              this.form.controls['Cupboard'].setValue("0");
              this.form.controls['NumCupboardReq'].setValue("0");
              this.form.controls['NumChairAvail'].setValue("0");
              this.form.controls['NumTableAvail'].setValue("0");
              this.form.controls['NumBenchAvail'].setValidators(null);
              this.form.controls['NumDesksAvail'].setValidators(null);
              this.form.controls['FansFunc'].setValidators(null);
              this.form.controls['Cupboard'].setValidators(null);
              this.form.controls['NumCupboardReq'].setValidators(null);
              this.form.controls['NumChairAvail'].setValidators(null);
              this.form.controls['NumTableAvail'].setValidators(null);
            } else {
              this.form.controls['ToiletType'].setValue("");
              this.form.controls['ToiletWaterCon'].setValue("");
              this.form.controls['ToiletCubicSideHandRail'].setValue("0");
              this.form.controls['ToiletWasteDis'].setValue("");
              this.form.controls['Iwccubicles'].setValue("0");
              this.form.controls['IwccubiclesFunc'].setValue("0");
              this.form.controls['Ewccubicles'].setValue("0");
              this.form.controls['Ewccubiclesfunc'].setValue("0");
              this.form.controls['Urinals'].setValue("0");
              this.form.controls['Urinalsfunc'].setValue("0");
              this.form.controls['ToiletTapsFunc'].setValue("0");
              this.form.controls['ToiletNeedTabs'].setValue("0");
              this.form.controls['ToiletBucket'].setValue("0");
              this.form.controls['Toiletmugs'].setValue("0");
              this.form.controls['SizeSuitable'].setValue(false);
              this.form.controls['Roof'].setValue("");
              this.form.controls['ToiletSanitaryPad'].setValue("");
              this.form.controls['HwFacility'].setValue(false);
              this.form.controls['SanitWasteDisp'].setValue(""); // this.form.controls['HwFacilityLocation'].setValue("");
              // this.form.controls['HwFacilityType'].setValue("");
              // this.form.controls['PipingNeed'].setValue(false);
              // this.form.controls['PipeLengthNeed'].setValue("");
              // this.form.controls['TapsFunc'].setValue("");
              // this.form.controls['TapsReq'].setValue("");
              // this.form.controls['StorageFacilityClosed'].setValue(false);

              this.form.controls['ToiletType'].setValidators(null);
              this.form.controls['ToiletWaterCon'].setValidators(null);
              this.form.controls['ToiletCubicSideHandRail'].setValidators(null);
              this.form.controls['ToiletWasteDis'].setValidators(null);
              this.form.controls['Iwccubicles'].setValidators(null);
              this.form.controls['IwccubiclesFunc'].setValidators(null);
              this.form.controls['Ewccubicles'].setValidators(null);
              this.form.controls['Ewccubiclesfunc'].setValidators(null);
              this.form.controls['Urinals'].setValidators(null);
              this.form.controls['Urinalsfunc'].setValidators(null);
              this.form.controls['ToiletTapsFunc'].setValidators(null);
              this.form.controls['ToiletNeedTabs'].setValidators(null);
              this.form.controls['ToiletBucket'].setValidators(null);
              this.form.controls['Toiletmugs'].setValidators(null);
              this.form.controls['SizeSuitable'].setValidators(null);
              this.form.controls['Roof'].setValidators(null);
              this.form.controls['ToiletSanitaryPad'].setValidators(null);
              this.form.controls['HwFacility'].setValidators(null);
              this.form.controls['SanitWasteDisp'].setValidators(null); // this.form.controls['HwFacilityLocation'].setValidators(null);
              // this.form.controls['HwFacilityType'].setValidators(null);
              // this.form.controls['PipingNeed'].setValidators(null);
              // this.form.controls['PipeLengthNeed'].setValidators(null);
              // this.form.controls['TapsFunc'].setValidators(null);
              // this.form.controls['TapsReq'].setValidators(null);
              // this.form.controls['StorageFacilityClosed'].setValidators(null);
              // No Toilet To Add Bench, Desk, Fans and Cupboard..............

              if (this.dataList.length > 0) {} else {
                this.form.controls['NumBenchAvail'].setValue("0");
                this.form.controls['NumDesksAvail'].setValue("0");
                this.form.controls['FansFunc'].setValue("0");
                this.form.controls['Cupboard'].setValue("0");
                this.form.controls['NumCupboardReq'].setValue("0");
                this.form.controls['NumChairAvail'].setValue("0");
                this.form.controls['NumTableAvail'].setValue("0");
              } // if (+this.RoomUse == 7) {
              //   this.form.controls['NumBenchAvail'].setValidators(null);
              //   this.form.controls['NumDesksAvail'].setValidators(null);
              //   this.form.controls['FansFunc'].setValidators(null);
              //   this.form.controls['Cupboard'].setValidators(null);
              // }else{
              //   this.form.controls['NumBenchAvail'].setValidators(Validators.required);
              //   this.form.controls['NumDesksAvail'].setValidators(Validators.required);
              //   this.form.controls['FansFunc'].setValidators(Validators.required);
              //   this.form.controls['Cupboard'].setValidators(Validators.required);
              // }

            } // if(this.RoomUse == 11){
            //     // this.form.controls['LabComputerYn'].setValue(true);
            //     this.form.controls['LabType'].setValue('');
            //     this.form.controls['LabComputerFunc'].setValue('');
            //     this.form.controls['LabComputerRepair'].setValue('');
            //     this.form.controls['LabInternetConn'].setValue(false);
            //     this.form.controls['LabInternetConnType'].setValue('');
            //     this.form.controls['LabBandwidth'].setValue('');
            //     this.form.controls['LabServiceProvider'].setValue('');
            //     this.form.controls['LabProjector'].setValue('');
            //     this.form.controls['LabPrinterWebcam'].setValue('');
            //     this.form.controls['LabPhotoOne'].setValue('');
            //     this.form.controls['LabPhotoTwo'].setValue('');
            //     this.form.controls['LabComputerFunc'].setValue('');
            //     this.form.controls['LabComputerRepair'].setValue('');
            //     this.form.controls['LabType'].setValidators(Validators.required);
            //     this.form.controls['LabComputerFunc'].setValidators(Validators.required);
            //     this.form.controls['LabComputerRepair'].setValidators(Validators.required);
            //     this.form.controls['LabInternetConn'].setValidators(Validators.required);
            //     this.form.controls['LabProjector'].setValidators(Validators.required);
            //     this.form.controls['LabPrinterWebcam'].setValidators(Validators.required);
            //     this.form.controls['LabPhotoOne'].setValidators(Validators.required);
            //     // this.form.controls['LabComputerYn'].setValue(false);
            // }else{
            //   this.form.controls['LabType'].setValue('');
            //   this.form.controls['LabComputerFunc'].setValue('');
            //   this.form.controls['LabComputerRepair'].setValue('');
            //   this.form.controls['LabInternetConn'].setValue(false);
            //   this.form.controls['LabInternetConnType'].setValue('');
            //   this.form.controls['LabBandwidth'].setValue('');
            //   this.form.controls['LabServiceProvider'].setValue('');
            //   this.form.controls['LabProjector'].setValue('');
            //   this.form.controls['LabPrinterWebcam'].setValue('');
            //   this.form.controls['LabPhotoOne'].setValue('');
            //   this.form.controls['LabPhotoTwo'].setValue('');
            //   this.form.controls['LabType'].setValidators(null);
            //   this.form.controls['LabComputerFunc'].setValidators(null);
            //   this.form.controls['LabComputerRepair'].setValidators(null);
            //   this.form.controls['LabInternetConn'].setValidators(null);
            //   this.form.controls['LabInternetConnType'].setValidators(null);
            //   this.form.controls['LabBandwidth'].setValidators(null);
            //   this.form.controls['LabServiceProvider'].setValidators(null);
            //   this.form.controls['LabProjector'].setValidators(null);
            //   this.form.controls['LabPrinterWebcam'].setValidators(null);
            //   this.form.controls['LabPhotoOne'].setValidators(null);
            //   this.form.controls['LabPhotoTwo'].setValidators(null);
            // }


            if (+this.RoomUse == 12) {
              this.form.controls['StoreRoomPurpose'].setValue('');
              this.form.controls['StrroomStorageClean'].setValue(false);
              this.form.controls['StoreRoomPurpose'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['StrroomStorageClean'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['StoreRoomPurpose'].setValue('');
              this.form.controls['StrroomStorageClean'].setValue(false);
              this.form.controls['StoreRoomPurpose'].setValidators(null);
              this.form.controls['StrroomStorageClean'].setValidators(null);
            }

            if (+this.RoomUse == 14) {
              this.form.controls['ReasonEmpty'].setValue('');
              this.form.controls['ReasonEmpty'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['ReasonEmpty'].setValue('');
              this.form.controls['ReasonEmpty'].setValidators(null);
            }

            if (+this.RoomUse == 17) {
              this.form.controls['SmartRoomFacilityYn'].setValue(false);
              this.form.controls['SmartRoomFacilityYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartRoomComputersYn'].setValue(false);
              this.form.controls['SmartRoomComputersYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartTabletFunc'].setValue('0');
              this.form.controls['SmartTabletFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartSpeakerFunc'].setValue('0');
              this.form.controls['SmartSpeakerFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartPaFunc'].setValue('0');
              this.form.controls['SmartPaFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartInternet'].setValue(false);
              this.form.controls['SmartInternet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartInternetConnType'].setValue('');
              this.form.controls['SmartInternetConnType'].setValidators(null);
              this.form.controls['SmartBandwidth'].setValue('');
              this.form.controls['SmartBandwidth'].setValidators(null);
              this.form.controls['SmartServiceProvider'].setValue('');
              this.form.controls['SmartServiceProvider'].setValidators(null);
            } else {
              this.form.controls['SmartRoomFacilityYn'].setValue(false);
              this.form.controls['SmartRoomFacilityYn'].setValidators(null);
              this.form.controls['SmartRoomComputersYn'].setValue(false);
              this.form.controls['SmartRoomComputersYn'].setValidators(null);
              this.form.controls['SmartRoomDeviceFunYn'].setValue(false);
              this.form.controls['SmartRoomDeviceFunYn'].setValidators(null);
              this.form.controls['SmartRoomFunComp'].setValue('0');
              this.form.controls['SmartRoomFunComp'].setValidators(null);
              this.form.controls['SmartRoomFunCompRepair'].setValue('0');
              this.form.controls['SmartRoomFunCompRepair'].setValidators(null);
              this.form.controls['SmartTabletFunc'].setValue('0');
              this.form.controls['SmartTabletFunc'].setValidators(null);
              this.form.controls['SmartSpeakerFunc'].setValue('0');
              this.form.controls['SmartSpeakerFunc'].setValidators(null);
              this.form.controls['SmartPaFunc'].setValue('0');
              this.form.controls['SmartPaFunc'].setValidators(null);
              this.form.controls['SmartInternet'].setValue(false);
              this.form.controls['SmartInternet'].setValidators(null);
              this.form.controls['SmartInternetConnType'].setValue('');
              this.form.controls['SmartInternetConnType'].setValidators(null);
              this.form.controls['SmartInternetConnTypeOthers'].setValue('');
              this.form.controls['SmartInternetConnTypeOthers'].setValidators(null);
              this.form.controls['SmartBandwidth'].setValue('');
              this.form.controls['SmartBandwidth'].setValidators(null);
              this.form.controls['SmartServiceProvider'].setValue('');
              this.form.controls['SmartServiceProvider'].setValidators(null);
              this.form.controls['SmartServiceProviderOthers'].setValue('');
              this.form.controls['SmartServiceProviderOthers'].setValidators(null);
            }

            if (+this.RoomUse == 18) {
              this.form.controls['AuditoriumYn'].setValue(false);
              this.form.controls['AuditoriumYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['AuditoriumYn'].setValue(false);
              this.form.controls['AuditoriumYn'].setValidators(null);
              this.form.controls['AudiStageStatus'].setValue('');
              this.form.controls['AuditoriumLights'].setValue('0');
              this.form.controls['AuditoriumFans'].setValue('0');
              this.form.controls['AuditoriumPrjtFunc'].setValue(false);
              this.form.controls['AudiStageStatus'].setValidators(null);
              this.form.controls['AuditoriumLights'].setValidators(null);
              this.form.controls['AuditoriumFans'].setValidators(null);
              this.form.controls['AuditoriumPrjtFunc'].setValidators(null);
            }

            if (+this.RoomUse == 5 || +this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10 || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
              this.form.controls['NumBenchAvail'].setValue('0');
              this.form.controls['NumBenchAvail'].setValidators(null);
            } else {
              this.form.controls['NumBenchAvail'].setValue('0');
              this.form.controls['NumBenchAvail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            }

            if (+this.RoomUse == 5 || +this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10 || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
              this.form.controls['NumDesksAvail'].setValue('0');
              this.form.controls['NumDesksAvail'].setValidators(null);
              this.form.controls['NumChairAvail'].setValue('0');
              this.form.controls['NumChairAvail'].setValidators(null);
              this.form.controls['NumTableAvail'].setValue('0');
              this.form.controls['NumTableAvail'].setValidators(null);
            } else {
              this.form.controls['NumDesksAvail'].setValue('0');
              this.form.controls['NumDesksAvail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['NumChairAvail'].setValue('0');
              this.form.controls['NumChairAvail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['NumTableAvail'].setValue('0');
              this.form.controls['NumTableAvail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            }

            if (+this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10 || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
              this.form.controls['FansFunc'].setValue('0');
              this.form.controls['FansFunc'].setValidators(null);
            } else {
              this.form.controls['FansFunc'].setValue('0');
              this.form.controls['FansFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            }

            if (+this.RoomUse == 7 || +this.RoomUse == 10 || +this.RoomUse == 11 || +this.RoomUse == 14) {
              this.form.controls['Cupboard'].setValue('0');
              this.form.controls['Cupboard'].setValidators(null);
              this.form.controls['NumCupboardReq'].setValue('0');
              this.form.controls['NumCupboardReq'].setValidators(null);
            } else {
              this.form.controls['Cupboard'].setValue('0');
              this.form.controls['Cupboard'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['NumCupboardReq'].setValue('0');
              this.form.controls['NumCupboardReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            }

            this.form.controls['TubelightFunc'].setValue('0');
            this.form.controls['RoomLength'].setValue('');
            this.form.controls['RoomBreadth'].setValue(''); // this.form.controls['RoomHeight'].setValue('');

            this.form.controls['RoomArea'].setValue('');
            this.form.controls['FloorType'].setValue('');
            this.form.controls['RoomCondition'].setValue('');
            this.form.controls['RepairType'].setValue('');
            this.form.controls['MajorRepair'].setValue('');
            this.form.controls['MinorRepair'].setValue('');
            this.form.controls['AreaReplastering'].setValue(''); // this.form.controls['AreaExtWw'].setValue('');

            this.form.controls['AreaIntWw'].setValue('');
            this.form.controls['AreaPlastering'].setValue('');
            this.form.controls['AreaReflooring'].setValue('');
            this.form.controls['AreaPatchwork'].setValue('');
            this.form.controls['DoorReplace'].setValue('0');
            this.form.controls['WindowReplace'].setValue('0');
            this.form.controls['DoorRepair'].setValue('0');
            this.form.controls['WindowRepair'].setValue('0');
            this.form.controls['DoorRepaint'].setValue('');
            this.form.controls['WindowRepaint'].setValue('');
            this.form.controls['LatrinReplace'].setValue('0');
            this.form.controls['UrinalReplace'].setValue('0');
            this.form.controls['PipeNeed'].setValue('');
            this.form.controls['DrainageNeed'].setValue('');
            this.form.controls['RoomCondition'].updateValueAndValidity();
            this.form.controls['RepairType'].updateValueAndValidity();
            this.form.controls['MajorRepair'].updateValueAndValidity();
            this.form.controls['MinorRepair'].updateValueAndValidity();
            this.form.controls['AreaReplastering'].updateValueAndValidity(); // this.form.controls['AreaExtWw'].updateValueAndValidity();

            this.form.controls['AreaIntWw'].updateValueAndValidity();
            this.form.controls['AreaPlastering'].updateValueAndValidity();
            this.form.controls['AreaReflooring'].updateValueAndValidity();
            this.form.controls['AreaPatchwork'].updateValueAndValidity();
            this.form.controls['DoorReplace'].updateValueAndValidity();
            this.form.controls['WindowReplace'].updateValueAndValidity();
            this.form.controls['DoorRepair'].updateValueAndValidity();
            this.form.controls['WindowRepair'].updateValueAndValidity();
            this.form.controls['DoorRepaint'].updateValueAndValidity();
            this.form.controls['WindowRepaint'].updateValueAndValidity();
            this.form.controls['LatrinReplace'].updateValueAndValidity();
            this.form.controls['UrinalReplace'].updateValueAndValidity();
            this.form.controls['PipeNeed'].updateValueAndValidity();
            this.form.controls['DrainageNeed'].updateValueAndValidity();
            this.form.controls['RoomLength'].updateValueAndValidity();
            this.form.controls['RoomBreadth'].updateValueAndValidity(); // this.form.controls['RoomHeight'].updateValueAndValidity();

            this.form.controls['RoomArea'].updateValueAndValidity();
            this.form.controls['FloorType'].updateValueAndValidity();
            this.form.controls['NumBenchAvail'].updateValueAndValidity();
            this.form.controls['NumDesksAvail'].updateValueAndValidity();
            this.form.controls['TubelightFunc'].updateValueAndValidity();
            this.form.controls['FansFunc'].updateValueAndValidity();
            this.form.controls['Cupboard'].updateValueAndValidity();
            this.form.controls['NumCupboardReq'].updateValueAndValidity();
            this.form.controls['NumChairAvail'].updateValueAndValidity();
            this.form.controls['NumTableAvail'].updateValueAndValidity();
            this.form.controls['TeacherTableYn'].updateValueAndValidity(); // this.form.controls['TelevisionYn'].updateValueAndValidity();

            this.form.controls['TelevisionFuncYn'].updateValueAndValidity(); // this.form.controls['SmartboardPrjtYn'].updateValueAndValidity();

            this.form.controls['SmartboardPrjtFuncYn'].updateValueAndValidity();
            this.form.controls['ClassRoomProjYn'].updateValueAndValidity(); // this.form.controls['ClassRoomProjFuncYn'].updateValueAndValidity();

            this.form.controls['LabType'].updateValueAndValidity(); // this.form.controls['LabComputerYn'].updateValueAndValidity();

            this.form.controls['LabComputerFunc'].updateValueAndValidity();
            this.form.controls['LabComputerRepair'].updateValueAndValidity();
            this.form.controls['LabWatersupplyYn'].updateValueAndValidity();
            this.form.controls['LabDrainage'].updateValueAndValidity();
            this.form.controls['LabInternetConn'].updateValueAndValidity();
            this.form.controls['LabInternetConnType'].updateValueAndValidity();
            this.form.controls['LabBandwidth'].updateValueAndValidity();
            this.form.controls['LabServiceProvider'].updateValueAndValidity();
            this.form.controls['LabServiceProviderOthers'].updateValueAndValidity();
            this.form.controls['LabProjector'].updateValueAndValidity(); // this.form.controls['LabPrinterWebcam'].updateValueAndValidity();

            this.form.controls['LabPrinter'].updateValueAndValidity();
            this.form.controls['LabWebCamera'].updateValueAndValidity();
            this.form.controls['LabMic'].updateValueAndValidity();
            this.form.controls['LabHeadphones'].updateValueAndValidity();
            this.form.controls['LabPhotoOne'].updateValueAndValidity(); // this.form.controls['LabPhotoTwo'].updateValueAndValidity();

            this.form.controls['LabPhotoOneName'].updateValueAndValidity(); // this.form.controls['LabPhotoTwoName'].updateValueAndValidity();

            this.form.controls['LibraryBooks'].updateValueAndValidity(); // this.form.controls['HmRoomTblYn'].updateValueAndValidity();

            this.form.controls['StaffrmUsedBy'].updateValueAndValidity();
            this.form.controls['HmRoomToiletYn'].updateValueAndValidity();
            this.form.controls['HmRoomToiletStatus'].updateValueAndValidity();
            this.form.controls['KitchenWtrSrc'].updateValueAndValidity();
            this.form.controls['KitchenLPGConYn'].updateValueAndValidity();
            this.form.controls['KitchenWtrSupply'].updateValueAndValidity();
            this.form.controls['KitchenStorageYn'].updateValueAndValidity();
            this.form.controls['KitchenCleanYn'].updateValueAndValidity();
            this.form.controls['KitchenGardenYn'].updateValueAndValidity();
            this.form.controls['DiningFunctionalYn'].updateValueAndValidity();
            this.form.controls['DiningSeatingCapacity'].updateValueAndValidity();
            this.form.controls['DiningSeatingWtrSupply'].updateValueAndValidity();
            this.form.controls['DiningRoomHandwash'].updateValueAndValidity();
            this.form.controls['DiningNumTapFunc'].updateValueAndValidity();
            this.form.controls['NoonmealStorageClean'].updateValueAndValidity();
            this.form.controls['StoreRoomPurpose'].updateValueAndValidity();
            this.form.controls['StrroomStorageClean'].updateValueAndValidity();
            this.form.controls['ReasonEmpty'].updateValueAndValidity();
            this.form.controls['ToiletType'].updateValueAndValidity();
            this.form.controls['ToiletWaterCon'].updateValueAndValidity();
            this.form.controls['ToiletCubicSideHandRail'].updateValueAndValidity();
            this.form.controls['ToiletWasteDis'].updateValueAndValidity(); // this.form.controls['IwcToilet'].updateValueAndValidity();

            this.form.controls['Iwccubicles'].updateValueAndValidity();
            this.form.controls['IwccubiclesFunc'].updateValueAndValidity(); // this.form.controls['EwcToilet'].updateValueAndValidity();

            this.form.controls['Ewccubicles'].updateValueAndValidity();
            this.form.controls['Ewccubiclesfunc'].updateValueAndValidity(); // this.form.controls['UrinalToilet'].updateValueAndValidity();

            this.form.controls['Urinals'].updateValueAndValidity();
            this.form.controls['Urinalsfunc'].updateValueAndValidity();
            this.form.controls['ToiletTapsFunc'].updateValueAndValidity();
            this.form.controls['ToiletNeedTabs'].updateValueAndValidity();
            this.form.controls['ToiletBucket'].updateValueAndValidity();
            this.form.controls['Toiletmugs'].updateValueAndValidity();
            this.form.controls['SizeSuitable'].updateValueAndValidity();
            this.form.controls['Roof'].updateValueAndValidity();
            this.form.controls['ToiletSanitaryPad'].updateValueAndValidity();
            this.form.controls['SanitWasteDisp'].updateValueAndValidity();
            this.form.controls['HwFacility'].updateValueAndValidity(); // this.form.controls['HwFacilityLocation'].updateValueAndValidity();
            // this.form.controls['HwFacilityType'].updateValueAndValidity();
            // this.form.controls['PipingNeed'].updateValueAndValidity();
            // this.form.controls['PipeLengthNeed'].updateValueAndValidity();
            // this.form.controls['TapsFunc'].updateValueAndValidity();
            // this.form.controls['TapsReq'].updateValueAndValidity();
            // this.form.controls['StorageFacilityClosed'].updateValueAndValidity();

            this.form.controls['AuditoriumYn'].updateValueAndValidity();
            this.form.controls['AudiStageStatus'].updateValueAndValidity(); // this.form.controls['AuditoriumStageReqt'].updateValueAndValidity();
            // this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            // this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            // this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();

            this.form.controls['AuditoriumLights'].updateValueAndValidity();
            this.form.controls['AuditoriumFans'].updateValueAndValidity(); // this.form.controls['AuditoriumPrjtYn'].updateValueAndValidity();

            this.form.controls['AuditoriumPrjtFunc'].updateValueAndValidity();
            this.form.controls['SmartRoomFacilityYn'].updateValueAndValidity();
            this.form.controls['SmartRoomComputersYn'].updateValueAndValidity();
            this.form.controls['SmartRoomDeviceFunYn'].updateValueAndValidity();
            this.form.controls['SmartRoomFunComp'].updateValueAndValidity();
            this.form.controls['SmartRoomFunCompRepair'].updateValueAndValidity();
            this.form.controls['SmartTabletFunc'].updateValueAndValidity();
            this.form.controls['SmartSpeakerFunc'].updateValueAndValidity();
            this.form.controls['SmartPaFunc'].updateValueAndValidity();
            this.form.controls['SmartInternet'].updateValueAndValidity();
            this.form.controls['SmartInternetConnType'].updateValueAndValidity();
            this.form.controls['SmartInternetConnTypeOthers'].updateValueAndValidity();
            this.form.controls['SmartBandwidth'].updateValueAndValidity();
            this.form.controls['SmartServiceProvider'].updateValueAndValidity();
            this.form.controls['SmartServiceProviderOthers'].updateValueAndValidity();
          }
        }, {
          key: "onSelectChange",
          value: function onSelectChange(event, id) {
            if (id == 1) {
              this.form.controls['MajorRepair'].setValue("");
              this.form.controls['MinorRepair'].setValue("");
              this.form.controls['AreaReplastering'].setValue(""); // this.form.controls['AreaExtWw'].setValue("");

              this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaPlastering'].setValue("");
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaPatchwork'].setValue("");
              this.form.controls['DoorReplace'].setValue("0");
              this.form.controls['WindowReplace'].setValue("0");
              this.form.controls['DoorRepaint'].setValue("");
              this.form.controls['WindowRepaint'].setValue("");
              this.form.controls['LatrinReplace'].setValue("0");
              this.form.controls['UrinalReplace'].setValue("0");
              this.form.controls['PipeNeed'].setValue("");
              this.form.controls['DrainageNeed'].setValue("");
              this.form.controls['MajorRepair'].setValidators(null);
              this.form.controls['MinorRepair'].setValidators(null);
              this.form.controls['AreaReplastering'].setValidators(null); // this.form.controls['AreaExtWw'].setValidators(null);

              this.form.controls['AreaIntWw'].setValidators(null);
              this.form.controls['AreaPlastering'].setValidators(null);
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaPatchwork'].setValidators(null);
              this.form.controls['DoorReplace'].setValidators(null);
              this.form.controls['WindowReplace'].setValidators(null);
              this.form.controls['DoorRepaint'].setValidators(null);
              this.form.controls['LatrinReplace'].setValidators(null);
              this.form.controls['UrinalReplace'].setValidators(null);
              this.form.controls['PipeNeed'].setValidators(null);
              this.form.controls['DrainageNeed'].setValidators(null);

              if (+this.form.value.RoomCondition == 2) {
                this.form.controls['RepairType'].setValue("");
                this.form.controls['RepairType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['RepairType'].setValue("");
                this.form.controls['RepairType'].setValidators(null);
                this.onSelectMajorRepairChange(0, "all");
                this.onSelectMinorRepairChange(0, "all");
              }
            }

            if (id == 2) {
              if (this.form.value.RoomCondition == 2) {
                if (this.form.value.RepairType == 1) {
                  this.form.controls['MajorRepair'].setValue("");
                  this.form.controls['MajorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                  this.form.controls['MinorRepair'].setValue("");
                  this.form.controls['MinorRepair'].setValidators(null);
                  this.onSelectMinorRepairChange(0, "all");
                }

                if (this.form.value.RepairType == 2) {
                  this.form.controls['MinorRepair'].setValue("");
                  this.form.controls['MinorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                  this.form.controls['MajorRepair'].setValue("");
                  this.form.controls['MajorRepair'].setValidators(null);
                  this.onSelectMajorRepairChange(0, "all");
                }

                if (this.form.value.RepairType == 3) {
                  this.form.controls['MajorRepair'].setValue("");
                  this.form.controls['MajorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                  this.form.controls['MinorRepair'].setValue("");
                  this.form.controls['MinorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                }
              } else {
                this.form.controls['MinorRepair'].setValue("");
                this.form.controls['MinorRepair'].setValidators(null);
                this.form.controls['MajorRepair'].setValue("");
                this.form.controls['MajorRepair'].setValidators(null);
                this.onSelectMinorRepairChange(0, "all");
                this.onSelectMajorRepairChange(0, "all");
              }
            }

            if (id == 11) {
              // if((this.form.value.LabInternetConn && +this.form.value.LabType == 5 || +this.form.value.LabType == 6)){
              if (this.form.value.LabInternetConn && +this.form.value.LabType == 5) {
                this.form.controls['LabInternetConnType'].setValue('');
                this.form.controls['LabBandwidth'].setValue('0');
                this.form.controls['LabServiceProvider'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabInternetConnType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LabBandwidth'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LabServiceProvider'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['LabInternetConnType'].setValue('');
                this.form.controls['LabBandwidth'].setValue('0');
                this.form.controls['LabServiceProvider'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabInternetConnType'].setValidators(null);
                this.form.controls['LabBandwidth'].setValidators(null);
                this.form.controls['LabServiceProvider'].setValidators(null);
                this.form.controls['LabServiceProviderOthers'].setValidators(null);
              }

              this.form.controls['LabInternetConnType'].updateValueAndValidity();
              this.form.controls['LabBandwidth'].updateValueAndValidity();
              this.form.controls['LabServiceProvider'].updateValueAndValidity();
              this.form.controls['LabServiceProviderOthers'].updateValueAndValidity();
            }

            if (id == 12) {
              // if((this.form.value.LabInternetConn && +this.form.value.LabType == 5 || +this.form.value.LabType == 6)){
              if (this.form.value.LabType == 5) {
                this.form.controls['LabInternetConn'].setValue(false);
                this.form.controls['LabInternetConnType'].setValue('');
                this.form.controls['LabBandwidth'].setValue('0');
                this.form.controls['LabServiceProvider'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabInternetConnType'].setValidators(null);
                this.form.controls['LabBandwidth'].setValidators(null);
                this.form.controls['LabServiceProvider'].setValidators(null);
                this.form.controls['LabServiceProviderOthers'].setValidators(null);
              } else {
                this.form.controls['LabInternetConn'].setValue(false);
                this.form.controls['LabInternetConnType'].setValue('');
                this.form.controls['LabBandwidth'].setValue('0');
                this.form.controls['LabServiceProvider'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabInternetConnType'].setValidators(null);
                this.form.controls['LabBandwidth'].setValidators(null);
                this.form.controls['LabServiceProvider'].setValidators(null);
                this.form.controls['LabServiceProviderOthers'].setValidators(null);
              }

              if (this.form.value.LabType == 5 || this.form.value.LabType == 6) {
                this.form.controls['LabPrinter'].setValue('0');
                this.form.controls['LabWebCamera'].setValue('0');
                this.form.controls['LabMic'].setValue('0');
                this.form.controls['LabHeadphones'].setValue('0');
                this.form.controls['LabPrinter'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LabWebCamera'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LabMic'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LabHeadphones'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['LabPrinter'].setValue('0');
                this.form.controls['LabWebCamera'].setValue('0');
                this.form.controls['LabMic'].setValue('0');
                this.form.controls['LabHeadphones'].setValue('0');
                this.form.controls['LabPrinter'].setValidators(null);
                this.form.controls['LabWebCamera'].setValidators(null);
                this.form.controls['LabMic'].setValidators(null);
                this.form.controls['LabHeadphones'].setValidators(null);
              }

              this.form.controls['LabInternetConnType'].updateValueAndValidity();
              this.form.controls['LabBandwidth'].updateValueAndValidity();
              this.form.controls['LabServiceProvider'].updateValueAndValidity();
              this.form.controls['LabServiceProviderOthers'].updateValueAndValidity();
              this.form.controls['LabPrinter'].updateValueAndValidity();
              this.form.controls['LabWebCamera'].updateValueAndValidity();
              this.form.controls['LabMic'].updateValueAndValidity();
              this.form.controls['LabHeadphones'].updateValueAndValidity();
            }

            if (id == 13) {
              if (this.form.value.SmartInternet) {
                this.form.controls['SmartInternetConnType'].setValue('');
                this.form.controls['SmartInternetConnTypeOthers'].setValue('');
                this.form.controls['SmartBandwidth'].setValue('');
                this.form.controls['SmartServiceProvider'].setValue('');
                this.form.controls['SmartServiceProviderOthers'].setValue('');
                this.form.controls['SmartInternetConnType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['SmartInternetConnTypeOthers'].setValidators(null);
                this.form.controls['SmartBandwidth'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['SmartServiceProvider'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['SmartServiceProviderOthers'].setValidators(null);
              } else {
                this.form.controls['SmartInternetConnType'].setValue('');
                this.form.controls['SmartInternetConnTypeOthers'].setValue('');
                this.form.controls['SmartBandwidth'].setValue('');
                this.form.controls['SmartServiceProvider'].setValue('');
                this.form.controls['SmartServiceProviderOthers'].setValue('');
                this.form.controls['SmartInternetConnType'].setValidators(null);
                this.form.controls['SmartInternetConnTypeOthers'].setValidators(null);
                this.form.controls['SmartBandwidth'].setValidators(null);
                this.form.controls['SmartServiceProvider'].setValidators(null);
                this.form.controls['SmartServiceProviderOthers'].setValidators(null);
              }

              this.form.controls['SmartInternetConnType'].updateValueAndValidity();
              this.form.controls['SmartInternetConnTypeOthers'].updateValueAndValidity();
              this.form.controls['SmartBandwidth'].updateValueAndValidity();
              this.form.controls['SmartServiceProvider'].updateValueAndValidity();
              this.form.controls['SmartServiceProviderOthers'].updateValueAndValidity();
            }

            this.form.controls['MajorRepair'].updateValueAndValidity();
            this.form.controls['MinorRepair'].updateValueAndValidity();
            this.form.controls['AreaReplastering'].updateValueAndValidity(); // this.form.controls['AreaExtWw'].updateValueAndValidity();

            this.form.controls['AreaIntWw'].updateValueAndValidity();
            this.form.controls['AreaPlastering'].updateValueAndValidity();
            this.form.controls['AreaReflooring'].updateValueAndValidity();
            this.form.controls['AreaPatchwork'].updateValueAndValidity();
            this.form.controls['DoorReplace'].updateValueAndValidity();
            this.form.controls['WindowReplace'].updateValueAndValidity();
            this.form.controls['DoorRepaint'].updateValueAndValidity();
            this.form.controls['WindowRepaint'].updateValueAndValidity();
            this.form.controls['LatrinReplace'].updateValueAndValidity();
            this.form.controls['UrinalReplace'].updateValueAndValidity();
            this.form.controls['PipeNeed'].updateValueAndValidity();
            this.form.controls['DrainageNeed'].updateValueAndValidity(); // if(id == 3 && (+this.form.value.ToiletType == 10 || +this.form.value.ToiletType == 11|| +this.form.value.ToiletType == 5)){
            //   this.form.controls['SanitWasteDisp'].setValue("");
            //   this.form.controls['SanitWasteDisp'].setValidators(Validators.required);
            // }else{
            //   this.form.controls['SanitWasteDisp'].setValue("");
            //   this.form.controls['SanitWasteDisp'].setValidators(null);
            // }
            // this.form.controls['SanitWasteDisp'].updateValueAndValidity();

            if (id == 3) {
              // if(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 ||
              //   this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9){
              // this.form.controls['IwcToilet'].setValue(false);
              // this.form.controls['EwcToilet'].setValue(false);
              // this.form.controls['UrinalToilet'].setValue(false);
              if (this.RoomUse == 10 && (this.form.value.ToiletType == '4' || this.form.value.ToiletType == '5' || this.form.value.ToiletType == '6')) {
                this.form.controls['Iwccubicles'].setValidators(null);
              } else {
                this.form.controls['Iwccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              }

              if (this.RoomUse == 10 && (this.form.value.ToiletType == '1' || this.form.value.ToiletType == '2' || this.form.value.ToiletType == '3' || this.form.value.ToiletType == '4' || this.form.value.ToiletType == '5' || this.form.value.ToiletType == '6' || this.form.value.ToiletType == '7' || this.form.value.ToiletType == '8' || this.form.value.ToiletType == '9')) {
                this.form.controls['Ewccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['Ewccubicles'].setValidators(null);
              }

              if (this.RoomUse == 10 && (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7)) {
                this.form.controls['Urinals'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['Urinals'].setValidators(null);
              }

              if (this.RoomUse == 10 && this.form.value.Ewccubicles && (this.form.value.ToiletType == '1' || this.form.value.ToiletType == '2' || this.form.value.ToiletType == '3' || this.form.value.ToiletType == '4' || this.form.value.ToiletType == '5' || this.form.value.ToiletType == '6' || this.form.value.ToiletType == '7' || this.form.value.ToiletType == '8' || this.form.value.ToiletType == '9')) {
                this.form.controls['Ewccubiclesfunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['Ewccubiclesfunc'].setValidators(null);
              }

              if (this.RoomUse == 10 && (this.form.value.ToiletType == '4' || this.form.value.ToiletType == '5' || this.form.value.ToiletType == '6')) {
                this.form.controls['Iwccubicles'].setValidators(null);
                this.form.controls['IwccubiclesFunc'].setValidators(null);
              } else {
                if (+this.form.value.Iwccubicles > 0) {
                  this.form.controls['IwccubiclesFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                } else {
                  this.form.controls['IwccubiclesFunc'].setValidators(null);
                }

                this.form.controls['Iwccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              }

              if (this.RoomUse == 10 && this.form.value.Urinals && (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7)) {
                this.form.controls['Urinalsfunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['Urinalsfunc'].setValidators(null);
              }

              this.form.controls['Iwccubicles'].setValue("0");
              this.form.controls['IwccubiclesFunc'].setValue("0");
              this.form.controls['Ewccubicles'].setValue("0");
              this.form.controls['Ewccubiclesfunc'].setValue("0");
              this.form.controls['Urinals'].setValue("0");
              this.form.controls['Urinalsfunc'].setValue("0");
              this.form.controls['Iwccubicles'].updateValueAndValidity();
              this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
              this.form.controls['Ewccubicles'].updateValueAndValidity();
              this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
              this.form.controls['Urinals'].updateValueAndValidity();
              this.form.controls['Urinalsfunc'].updateValueAndValidity();

              if (+this.form.value.ToiletType == 4 || +this.form.value.ToiletType == 5 || +this.form.value.ToiletType == 6) {
                this.form.controls['ToiletCubicSideHandRail'].setValue("0");
                this.form.controls['ToiletCubicSideHandRail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['ToiletCubicSideHandRail'].setValue("0");
                this.form.controls['ToiletCubicSideHandRail'].setValidators(null);
              }

              this.form.controls['ToiletCubicSideHandRail'].updateValueAndValidity();

              if (+this.form.value.ToiletType == 1 || +this.form.value.ToiletType == 5 || +this.form.value.ToiletType == 8) {
                this.form.controls['ToiletSanitaryPad'].setValue("");
                this.form.controls['ToiletSanitaryPad'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['ToiletSanitaryPad'].setValue("");
                this.form.controls['ToiletSanitaryPad'].setValidators(null);
              }

              this.form.controls['ToiletSanitaryPad'].updateValueAndValidity();

              if (this.RoomUse == 10 && (this.form.value.ToiletType == 1 || +this.form.value.ToiletType == 5 || +this.form.value.ToiletType == 8)) {
                this.form.controls['SanitWasteDisp'].setValue("");
                this.form.controls['SanitWasteDisp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['SanitWasteDisp'].setValue("");
                this.form.controls['SanitWasteDisp'].setValidators(null);
              }

              this.form.controls['SanitWasteDisp'].updateValueAndValidity(); // }
            }
          }
        }, {
          key: "onSelectMajorRepairChange",
          value: function onSelectMajorRepairChange(event, item) {
            console.log(event, item);
            this.onActiveMajor1 = 0;
            this.onActiveMajor2 = 0;
            this.onActiveMajor3 = 0;
            this.onActiveMajor4 = 0;
            this.onActiveMajor5 = 0;
            this.onActiveMajor6 = 0;
            this.onActiveMajor7 = 0;
            this.onActiveMajor8 = 0;
            this.onActiveMajor9 = 0;
            this.onActiveMajor10 = 0;
            this.onActiveMajor11 = 0;
            this.onActiveMajor12 = 0;

            if (item == "all") {
              for (var i = 0; i <= event.length; i++) {
                console.log(event);

                if (event[i] == "1") {
                  this.onActiveMajor1 = 1;
                }

                if (event[i] == "2") {
                  this.onActiveMajor2 = 2;
                }

                if (event[i] == "3") {
                  this.onActiveMajor3 = 3;
                }

                if (event[i] == "4") {
                  this.onActiveMajor4 = 4;
                }

                if (event[i] == "5") {
                  this.onActiveMajor5 = 5;
                }

                if (event[i] == "6") {
                  this.onActiveMajor6 = 6;
                }

                if (event[i] == "7") {
                  this.onActiveMajor7 = 7;
                }

                if (event[i] == "8") {
                  this.onActiveMajor8 = 8;
                }

                if (event[i] == "9") {
                  this.onActiveMajor9 = 9;
                }
              }

              if (this.onActiveMajor1 == 1) {
                this.form.controls['AreaReplastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReplastering'].setValue("");
                this.form.controls['AreaReplastering'].setValidators(null);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              } // if (this.onActiveMajor2 == 2) {
              //   this.form.controls['AreaExtWw'].setValidators(Validators.required);
              //   this.form.controls['AreaExtWw'].updateValueAndValidity();
              // }else{
              //   this.form.controls['AreaExtWw'].setValue("");
              //   this.form.controls['AreaExtWw'].setValidators(null);
              //   this.form.controls['AreaExtWw'].updateValueAndValidity();
              // }


              if (this.onActiveMajor3 == 3) {
                this.form.controls['AreaIntWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['AreaIntWw'].updateValueAndValidity();
              } else {
                this.form.controls['AreaIntWw'].setValue("");
                this.form.controls['AreaIntWw'].setValidators(null);
                this.form.controls['AreaIntWw'].updateValueAndValidity();
              }

              if (this.onActiveMajor4 == 4) {
                this.form.controls['AreaPlastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['AreaPlastering'].updateValueAndValidity();
              } else {
                this.form.controls['AreaPlastering'].setValue("");
                this.form.controls['AreaPlastering'].setValidators(null);
                this.form.controls['AreaPlastering'].updateValueAndValidity();
              }

              if (this.onActiveMajor6 == 6) {
                this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReflooring'].setValue("");
                this.form.controls['AreaReflooring'].setValidators(null);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              }

              if (this.onActiveMajor7 == 7) {
                this.form.controls['AreaPatchwork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['AreaPatchwork'].updateValueAndValidity();
              } else {
                this.form.controls['AreaPatchwork'].setValue("");
                this.form.controls['AreaPatchwork'].setValidators(null);
                this.form.controls['AreaPatchwork'].updateValueAndValidity();
              }

              if (this.onActiveMajor8 == 8 && +this.form.value.RoomUse == 10) {
                this.form.controls['LatrinReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['LatrinReplace'].updateValueAndValidity();
              } else {
                this.form.controls['LatrinReplace'].setValue("0");
                this.form.controls['LatrinReplace'].setValidators(null);
                this.form.controls['LatrinReplace'].updateValueAndValidity();
              }

              if (this.onActiveMajor9 == 9 && +this.form.value.RoomUse == 10) {
                this.form.controls['UrinalReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['UrinalReplace'].updateValueAndValidity();
              } else {
                this.form.controls['UrinalReplace'].setValue("0");
                this.form.controls['UrinalReplace'].setValidators(null);
                this.form.controls['UrinalReplace'].updateValueAndValidity();
              }

              if (this.onActiveMajor10 == 10 && +this.form.value.RoomUse == 10) {
                this.form.controls['PipeNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['PipeNeed'].updateValueAndValidity();
              } else {
                this.form.controls['PipeNeed'].setValue("");
                this.form.controls['PipeNeed'].setValidators(null);
                this.form.controls['PipeNeed'].updateValueAndValidity();
              }

              if (this.onActiveMajor11 == 11 && +this.form.value.RoomUse == 10) {
                this.form.controls['DrainageNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['DrainageNeed'].updateValueAndValidity();
              } else {
                this.form.controls['DrainageNeed'].setValue("");
                this.form.controls['DrainageNeed'].setValidators(null);
                this.form.controls['DrainageNeed'].updateValueAndValidity();
              }
            }

            if (item == "toilet") {
              for (var _i = 0; _i <= event.length; _i++) {
                if (event[_i] == "1") {
                  this.onActiveMajor1 = 1;
                }

                if (event[_i] == "2") {
                  this.onActiveMajor2 = 2;
                }

                if (event[_i] == "3") {
                  this.onActiveMajor3 = 3;
                }

                if (event[_i] == "4") {
                  this.onActiveMajor4 = 4;
                }

                if (event[_i] == "5") {
                  this.onActiveMajor5 = 5;
                }

                if (event[_i] == "6") {
                  this.onActiveMajor6 = 6;
                }

                if (event[_i] == "7") {
                  this.onActiveMajor7 = 7;
                }

                if (event[_i] == "8") {
                  this.onActiveMajor8 = 8;
                }

                if (event[_i] == "9") {
                  this.onActiveMajor9 = 9;
                }

                if (event[_i] == "10") {
                  this.onActiveMajor10 = 10;
                }

                if (event[_i] == "11") {
                  this.onActiveMajor11 = 11;
                }

                if (event[_i] == "12") {
                  this.onActiveMajor12 = 12;
                }
              }
            }

            if (item == "labKitch") {
              for (var _i2 = 0; _i2 <= event.length; _i2++) {
                if (event[_i2] == "1") {
                  this.onActiveMajor1 = 1;
                }

                if (event[_i2] == "2") {
                  this.onActiveMajor2 = 2;
                }

                if (event[_i2] == "3") {
                  this.onActiveMajor3 = 3;
                }

                if (event[_i2] == "4") {
                  this.onActiveMajor4 = 4;
                }

                if (event[_i2] == "5") {
                  this.onActiveMajor5 = 5;
                }

                if (event[_i2] == "6") {
                  this.onActiveMajor6 = 6;
                }

                if (event[_i2] == "7") {
                  this.onActiveMajor7 = 7;
                }

                if (event[_i2] == "8") {
                  this.onActiveMajor8 = 8;
                }

                if (event[_i2] == "9") {
                  this.onActiveMajor9 = 9;
                }

                if (event[_i2] == "10") {
                  this.onActiveMajor10 = 10;
                }
              }
            }
          }
        }, {
          key: "onSelectMinorRepairChange",
          value: function onSelectMinorRepairChange(event, item) {
            console.log(event, item);
            this.onActiveMinor1 = 0;
            this.onActiveMinor2 = 0;
            this.onActiveMinor3 = 0;
            this.onActiveMinor4 = 0;
            this.onActiveMinor5 = 0;
            this.onActiveMinor6 = 0;
            this.onActiveMinor7 = 0;
            this.onActiveMinor8 = 0;
            this.onActiveMinor9 = 0;
            this.onActiveMinor10 = 0;
            this.onActiveMinor11 = 0;
            this.onActiveMinor12 = 0;

            if (item == "all") {
              for (var i = 0; i <= event.length; i++) {
                console.log(event, 'All');

                if (event[i] == "1") {
                  this.onActiveMinor1 = 1;
                }

                if (event[i] == "2") {
                  this.onActiveMinor2 = 2;
                }

                if (event[i] == "3") {
                  this.onActiveMinor3 = 3;
                }

                if (event[i] == "4") {
                  this.onActiveMinor4 = 4;
                }

                if (event[i] == "5") {
                  this.onActiveMinor5 = 5;
                }

                if (event[i] == "6") {
                  this.onActiveMinor6 = 6;
                }

                if (event[i] == "7") {
                  this.onActiveMinor7 = 7;
                }
              }

              if (this.onActiveMinor1 == 1) {
                this.form.controls['DoorReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              } else {
                this.form.controls['DoorReplace'].setValue("0");
                this.form.controls['DoorReplace'].setValidators(null);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              }

              if (this.onActiveMinor2 == 2) {
                this.form.controls['WindowReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['WindowReplace'].updateValueAndValidity();
              } else {
                this.form.controls['WindowReplace'].setValue("0");
                this.form.controls['WindowReplace'].setValidators(null);
                this.form.controls['WindowReplace'].updateValueAndValidity();
              }

              if (this.onActiveMinor3 == 3) {
                this.form.controls['DoorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepair'].setValue("0");
                this.form.controls['DoorRepair'].setValidators(null);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              }

              if (this.onActiveMinor4 == 4) {
                this.form.controls['WindowRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['WindowRepair'].updateValueAndValidity();
              } else {
                this.form.controls['WindowRepair'].setValue("0");
                this.form.controls['WindowRepair'].setValidators(null);
                this.form.controls['WindowRepair'].updateValueAndValidity();
              }

              if (this.onActiveMinor5 == 5) {
                this.form.controls['DoorRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepaint'].setValue("");
                this.form.controls['DoorRepaint'].setValidators(null);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              }

              if (this.onActiveMinor6 == 6) {
                this.form.controls['WindowRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                this.form.controls['WindowRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['WindowRepaint'].setValue("");
                this.form.controls['WindowRepaint'].setValidators(null);
                this.form.controls['WindowRepaint'].updateValueAndValidity();
              }
            }

            if (item == "toilet") {
              console.log(this.onActiveMinor1, "T12324");

              for (var _i3 = 0; _i3 <= event.length; _i3++) {
                if (event[_i3] == "1") {
                  this.onActiveMinor1 = 1;
                }

                if (event[_i3] == "2") {
                  this.onActiveMinor2 = 2;
                }

                if (event[_i3] == "3") {
                  this.onActiveMinor3 = 3;
                }

                if (event[_i3] == "4") {
                  this.onActiveMinor4 = 4;
                }

                if (event[_i3] == "5") {
                  this.onActiveMinor5 = 5;
                }

                if (event[_i3] == "6") {
                  this.onActiveMinor6 = 0;
                }

                if (event[_i3] == "7") {
                  this.onActiveMinor7 = 7;
                }
              }
            }

            if (item == "3") {
              console.log(this.onActiveMinor1, "12324");

              for (var _i4 = 0; _i4 <= event.length; _i4++) {
                if (event[_i4] == "1") {
                  this.onActiveMinor1 = 1;
                }

                if (event[_i4] == "2") {
                  this.onActiveMinor2 = 2;
                }

                if (event[_i4] == "3") {
                  this.onActiveMinor3 = 3;
                }

                if (event[_i4] == "4") {
                  this.onActiveMinor4 = 4;
                }

                if (event[_i4] == "5") {
                  this.onActiveMinor5 = 5;
                }

                if (event[_i4] == "6") {
                  this.onActiveMinor6 = 6;
                }

                if (event[_i4] == "7") {
                  this.onActiveMinor7 = 7;
                }
              }
            }

            console.log(this.onActiveMinor1, "onActiveMinor1");
          }
        }, {
          key: "onChangeBuildingData",
          value: function onChangeBuildingData(event, id) {
            if (id == 11) {
              console.log(event, 'len');

              if (this.form.value.RoomBreadth) {
                var area = this.form.value.RoomBreadth * event;
                this.form.controls['RoomArea'].setValue(area);
              }
            }

            if (id == 12) {
              var _area = this.form.value.RoomLength * event;

              this.form.controls['RoomArea'].setValue(_area);
            }

            if (id == 11 && this.form.value.RoomLength == 0) {
              this.form.controls['RoomLength'].setValue("");
            }

            if (id == 12 && this.form.value.RoomBreadth == 0) {
              this.form.controls['RoomBreadth'].setValue("");
            } // if(id == 13 && this.form.value.RoomHeight == 0){
            //   this.form.controls['RoomHeight'].setValue("");
            // }


            if (id == 13 && this.form.value.RoomArea == 0) {
              this.form.controls['RoomArea'].setValue("");
            }

            if (id == 14 && this.form.value.DiningSeatingCapacity == 0) {
              this.form.controls['DiningSeatingCapacity'].setValue("0");
            }

            this.form.controls['RoomLength'].updateValueAndValidity();
            this.form.controls['RoomBreadth'].updateValueAndValidity();
            this.form.controls['RoomArea'].updateValueAndValidity(); // this.form.controls['RoomHeight'].updateValueAndValidity();

            this.form.controls['DiningSeatingCapacity'].updateValueAndValidity();

            if (id == 1 && +this.form.value.LabComputerFunc > 25) {
              this.form.controls['LabComputerFunc'].setValue("0");
              this.form.controls['LabComputerFunc'].updateValueAndValidity();
            }

            if (id == 2) {
              if (+this.form.value.LabComputerRepair == 0 || +this.form.value.LabComputerRepair > 25) {
                this.form.controls['LabComputerRepair'].setValue("0");
                this.form.controls['LabComputerRepair'].updateValueAndValidity();
              }
            }

            if (id == 3 && +this.form.value.AuditoriumLights > 20) {
              this.form.controls['AuditoriumLights'].setValue("0");
              this.form.controls['AuditoriumLights'].updateValueAndValidity();
            }

            if (id == 4 && +this.form.value.AuditoriumFans > 20) {
              this.form.controls['AuditoriumFans'].setValue("0");
              this.form.controls['AuditoriumFans'].updateValueAndValidity();
            }

            if (id == 5 && +this.form.value.PipeNeed == 0) {
              this.form.controls['PipeNeed'].setValue("");
              this.form.controls['PipeNeed'].updateValueAndValidity();
            }

            if (id == 6 && +this.form.value.DrainageNeed == 0) {
              this.form.controls['DrainageNeed'].setValue("");
              this.form.controls['DrainageNeed'].updateValueAndValidity();
            }

            if (id == 7 && +this.form.value.AuditoriumStageArea == 0) {
              this.form.controls['AuditoriumStageArea'].setValue("");
              this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            }

            if (id == 8 && +this.form.value.AuditoriumStageHeight == 0) {
              this.form.controls['AuditoriumStageHeight'].setValue("");
              this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            }

            if (id == 9 && +this.form.value.AuditoriumStageAreaLevel == 0) {
              this.form.controls['AuditoriumStageAreaLevel'].setValue("");
              this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
            }

            if (id == 10) {
              if (+this.form.value.AuditoriumLights > 20) {
                this.form.controls['AuditoriumLights'].setValue("0");
              }
            }

            if (id == 11) {
              if (+this.form.value.AuditoriumFans > 20) {
                this.form.controls['AuditoriumFans'].setValue("0");
              }
            }

            if (id == 20 && +this.form.value.Ewccubicles == 0) {
              this.form.controls['Ewccubicles'].setValue("0");
            }

            if (id == 21 && +this.form.value.Iwccubicles == 0) {
              this.form.controls['IwccubiclesFunc'].setValue("0");
            }

            if (id == 22 && +this.form.value.Ewccubicles == 0) {
              this.form.controls['Ewccubiclesfunc'].setValue("0");
            }

            if (id == 23 && +this.form.value.Urinals == 0) {
              this.form.controls['Urinalsfunc'].setValue("0");
            }

            if (id == 24 && +this.form.value.ToiletCubicSideHandRail == 0) {
              this.form.controls['ToiletCubicSideHandRail'].setValue("0");
            }

            if (id == 25) {
              if (+this.form.value.LabServiceProvider == 7) {
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['LabServiceProviderOthers'].setValue('');
                this.form.controls['LabServiceProviderOthers'].setValidators(null);
              }

              this.form.controls['LabServiceProviderOthers'].updateValueAndValidity();
            }

            if (id == 26) {
              if (+this.form.value.SmartServiceProvider == 7) {
                this.form.controls['SmartServiceProviderOthers'].setValue('');
                this.form.controls['SmartServiceProviderOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['SmartServiceProviderOthers'].setValue('');
                this.form.controls['SmartServiceProviderOthers'].setValidators(null);
              }

              this.form.controls['SmartServiceProviderOthers'].updateValueAndValidity();
            }

            if (id == 27) {
              if (+this.form.value.SmartInternetConnType == 7) {
                this.form.controls['SmartInternetConnTypeOthers'].setValue('');
                this.form.controls['SmartInternetConnTypeOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              } else {
                this.form.controls['SmartInternetConnTypeOthers'].setValue('');
                this.form.controls['SmartInternetConnTypeOthers'].setValidators(null);
              }

              this.form.controls['SmartInternetConnTypeOthers'].updateValueAndValidity();
            }
          }
        }, {
          key: "onChangeValueData",
          value: function onChangeValueData(event, id) {
            if (id == 2 && +this.form.value.LabComputerRepair == 0 && +this.form.value.LabComputerRepair > 25) {
              this.form.controls['LabComputerRepair'].setValue("0");
              this.form.controls['LabComputerRepair'].updateValueAndValidity();
            }

            if (id == 3 && +this.form.value.SmartRoomFunComp > 25) {
              this.form.controls['SmartRoomFunComp'].setValue("0");
              this.form.controls['SmartRoomFunComp'].updateValueAndValidity();
            }

            if (id == 4 && +this.form.value.SmartRoomFunCompRepair > 25 && +this.form.value.SmartRoomFunCompRepair == 0) {
              this.form.controls['SmartRoomFunCompRepair'].setValue("0");
              this.form.controls['SmartRoomFunCompRepair'].updateValueAndValidity();
            }

            if (id == 6 && +this.form.value.LabBandwidth == 0 && +this.form.value.LabBandwidth > 25) {
              this.form.controls['LabBandwidth'].setValue("0");
              this.form.controls['LabBandwidth'].updateValueAndValidity();
            }

            if (id == 7 && +this.form.value.LabServiceProvider == 0 && +this.form.value.LabServiceProvider > 25) {
              this.form.controls['LabServiceProvider'].setValue("");
              this.form.controls['LabServiceProvider'].updateValueAndValidity();
            }

            if (id == 8 && +this.form.value.LabProjector == 0 && +this.form.value.LabProjector > 25) {
              this.form.controls['LabProjector'].setValue("0");
              this.form.controls['LabProjector'].updateValueAndValidity();
            }

            if (id == 9 && +this.form.value.LabPrinter == 0 && +this.form.value.LabPrinter > 25) {
              this.form.controls['LabPrinter'].setValue("0");
              this.form.controls['LabPrinter'].updateValueAndValidity();
            }

            if (id == 10 && +this.form.value.LabWebCamera == 0 && +this.form.value.LabWebCamera > 25) {
              this.form.controls['LabWebCamera'].setValue("0");
              this.form.controls['LabWebCamera'].updateValueAndValidity();
            }

            if (id == 11 && +this.form.value.LabMic == 0 && +this.form.value.LabMic > 25) {
              this.form.controls['LabMic'].setValue("0");
              this.form.controls['LabMic'].updateValueAndValidity();
            }

            if (id == 12 && +this.form.value.LabHeadphones == 0 && +this.form.value.LabHeadphones > 25) {
              this.form.controls['LabHeadphones'].setValue("0");
              this.form.controls['LabHeadphones'].updateValueAndValidity();
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            debugger;
            console.log("onSave", this.form, this.RoomName, this.RoomUse);

            if (this.RoomUse != '' && this.RoomName != '' && this.form.valid) {
              this.submitted = false;
              var query = 'DELETE FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And RoomId = "' + this.roomid + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query).then(function (data) {
                if (data.rows.length == 0) {
                  var insertRows = [];
                  insertRows.push(["INSERT INTO newRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, null, _this.schoolId, _this.vistId, "", _this.buildingId, "", _this.floorId, _this.roomid, _this.RoomUse, _this.RoomName, _this.form.value.RoomCondition, _this.form.value.RepairType, _this.form.value.MajorRepair, _this.form.value.MinorRepair, _this.form.value.AreaPlastering, // .this.form.value.AreaExtWw, 
                  _this.form.value.AreaIntWw, _this.form.value.AreaReplastering, _this.form.value.AreaReflooring, _this.form.value.AreaPatchwork, _this.form.value.DoorReplace, _this.form.value.WindowReplace, _this.form.value.DoorRepair, _this.form.value.WindowRepair, _this.form.value.DoorRepaint, _this.form.value.WindowRepaint, _this.form.value.LatrinReplace, _this.form.value.UrinalReplace, _this.form.value.PipeNeed, _this.form.value.DrainageNeed, _this.form.value.RoomLength, _this.form.value.RoomBreadth, // .this.form.value.RoomHeight,
                  _this.form.value.FloorType, _this.form.value.NumBenchAvail, _this.form.value.NumDesksAvail, _this.form.value.TubelightFunc, _this.form.value.FansFunc, _this.form.value.Cupboard, _this.form.value.NumCupboardReq, _this.form.value.TeacherTableYn, // .this.form.value.TelevisionYn, 
                  _this.form.value.TelevisionFuncYn, // .this.form.value.SmartboardPrjtYn, 
                  _this.form.value.SmartboardPrjtFuncYn, _this.form.value.ClassRoomProjYn, // .this.form.value.ClassRoomProjFuncYn,
                  _this.form.value.LabType, // .this.form.value.LabComputerYn, 
                  _this.form.value.LabComputerFunc, _this.form.value.LabComputerRepair, _this.form.value.LabWatersupplyYn, _this.form.value.LabDrainage, _this.form.value.LibraryBooks, // .this.form.value.HmRoomTblYn, 
                  _this.form.value.StaffrmUsedBy, _this.form.value.KitchenWtrSrc, _this.form.value.KitchenLPGConYn, _this.form.value.KitchenWtrSupply, _this.form.value.KitchenStorageYn, _this.form.value.KitchenCleanYn, _this.form.value.KitchenGardenYn, _this.form.value.DiningFunctionalYn, _this.form.value.DiningSeatingCapacity, _this.form.value.DiningSeatingWtrSupply, _this.form.value.NoonmealStorageClean, _this.form.value.StoreRoomPurpose, _this.form.value.StrroomStorageClean, _this.form.value.ReasonEmpty, _this.form.value.ToiletType, _this.form.value.ToiletWaterCon, _this.form.value.ToiletWasteDis, // .this.form.value.IwcToilet,
                  _this.form.value.Iwccubicles, _this.form.value.IwccubiclesFunc, // .this.form.value.EwcToilet,
                  _this.form.value.Ewccubicles, _this.form.value.Ewccubiclesfunc, // .this.form.value.UrinalToilet, 
                  _this.form.value.Urinals, _this.form.value.Urinalsfunc, _this.form.value.ToiletTapsFunc, _this.form.value.ToiletNeedTabs, _this.form.value.ToiletBucket, _this.form.value.Toiletmugs, _this.form.value.SizeSuitable, _this.form.value.Roof, _this.form.value.ToiletSanitaryPad, _this.form.value.SanitWasteDisp, _this.form.value.HwFacility, _this.form.value.AuditoriumYn, _this.form.value.AuditoriumStageYn, // .this.form.value.AuditoriumStageReqt,
                  // .this.form.value.AuditoriumStageArea, 
                  // .this.form.value.AuditoriumStageHeight, 
                  // .this.form.value.AuditoriumStageAreaLevel,
                  _this.form.value.AuditoriumLights, _this.form.value.AuditoriumFans, // .this.form.value.AuditoriumPrjtYn, 
                  _this.form.value.AuditoriumPrjtFunc, _this.form.value.SmartRoomFacilityYn, _this.form.value.SmartRoomDeviceFunYn, _this.form.value.SmartRoomComputersYn, _this.form.value.SmartRoomFunComp, _this.form.value.SmartRoomFunCompRepair, _this.form.value.RoomArea, _this.form.value.NumChairAvail, _this.form.value.NumTableAvail, _this.form.value.LabInternetConn, _this.form.value.LabInternetConnType, _this.form.value.LabBandwidth, _this.form.value.LabServiceProvider, _this.form.value.LabServiceProviderOthers, _this.form.value.LabProjector, _this.form.value.LabPrinter, _this.form.value.LabWebCamera, _this.form.value.LabMic, _this.form.value.LabHeadphones, _this.form.value.LabLatitude, _this.form.value.LabLogitude, _this.form.value.LabPhotoOne, _this.form.value.LabPhotoOneName, // this.form.value.LabPhotoTwo, this.form.value.LabPhotoTwoName,
                  _this.form.value.HmRoomToiletYn, _this.form.value.HmRoomToiletStatus, _this.form.value.DiningRoomHandwash, _this.form.value.DiningNumTapFunc, _this.form.value.ToiletCubicSideHandRail, _this.form.value.AudiStageStatus, _this.form.value.SmartTabletFunc, _this.form.value.SmartSpeakerFunc, _this.form.value.SmartPaFunc, _this.form.value.SmartInternet, _this.form.value.SmartInternetConnType, _this.form.value.SmartInternetConnTypeOthers, _this.form.value.SmartBandwidth, _this.form.value.SmartServiceProvider, _this.form.value.SmartServiceProviderOthers]]);

                  _this.sqliteDB.bulkInsert(insertRows).then(function (result) {
                    console.info("Room Details Stored Locally");
                    var id = parseInt(_this.buildingId) - 100;
                    var floor = parseInt(_this.floorId) - 1000;
                    var updateQuery = 'UPDATE sidsRoomSaves SET Status = 2 , RoomName="' + _this.RoomName + '"' + ' WHERE SclId = "' + _this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + _this.roomid + '"';
                    var flooor = 'UPDATE sidsFloorSaveDatas SET RoomCondition = 1 WHERE SclId = "' + _this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorId = "' + _this.floorId + '"';
                    return _this.sqliteDB.update(updateQuery).then(function (data) {
                      _this.alertService.success('Saved Successfully');

                      var build = parseInt(_this.buildingId) - 101;
                      var buildId = parseInt(_this.buildingId) - 100;
                      var floor = parseInt(_this.floorId) - 1001;
                      var floorId = parseInt(_this.floorId) - 1000;
                      var room = parseInt(_this.roomid) - 10001;
                      var roomId = parseInt(_this.roomid) - 10000;

                      if (_this.status == 3) {
                        _this.router.navigate(['/tabs/new-dashboard'], {
                          queryParams: {
                            'schoolId': _this.schoolId,
                            'vistId': _this.vistId,
                            'expanted': '3',
                            expIdBuild: build,
                            expBuildId: buildId,
                            expIdFloor: floorId,
                            expFloorId: floor,
                            expIdRoom: room,
                            expRoomId: roomId
                          },
                          skipLocationChange: false
                        });
                      }

                      if (_this.status != 3) {
                        _this.router.navigate(['/tabs/new-dashboard'], {
                          queryParams: {
                            'schoolId': _this.schoolId,
                            'vistId': _this.vistId,
                            'expanted': '2',
                            expIdBuild: build,
                            expBuildId: buildId,
                            expIdFloor: floorId,
                            expFloorId: floor,
                            expIdRoom: room,
                            expRoomId: roomId
                          },
                          skipLocationChange: false
                        });
                      }

                      return _this.sqliteDB.update(flooor).then(function (floooooor) {
                        console.log("floooooor", floooooor);
                      });
                    });
                  });
                } else {
                  console.log("newRoomscommons", data);
                }
              });
            } else {
              this.validateAllFormFields(this.form);
              this.submitted = true;
              this.alertService.error("Please enter the valid data"); // this.focusValidator();
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this2 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup) {
                _this2.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray) {
                _this2.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "onGoBack",
          value: function onGoBack() {
            var build = parseInt(this.buildingId) - 101;
            var buildId = parseInt(this.buildingId) - 100;
            var floor = parseInt(this.floorId) - 1001;
            var floorId = parseInt(this.floorId) - 1000;
            var room = parseInt(this.roomid) - 10001;
            var roomId = parseInt(this.roomid) - 10000;

            if (this.status == 1) {
              this.router.navigate(['/tabs/new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '1',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  expIdRoom: room,
                  expRoomId: roomId
                },
                skipLocationChange: false
              });
            }

            if (this.status == 2) {
              this.router.navigate(['/tabs/new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '2',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  expIdRoom: room,
                  expRoomId: roomId
                },
                skipLocationChange: false
              });
            }

            if (this.status == 3) {
              this.router.navigate(['/tabs/new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '3',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  expIdRoom: room,
                  expRoomId: roomId
                },
                skipLocationChange: false
              });
            } // this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': this.status,expIdBuild: build, expBuildId: buildId ,expIdFloor: floor, expFloorId: floorId ,expIdRoom: room, expRoomId: roomId }, skipLocationChange: false });
            // this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3' }, skipLocationChange: false });

          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this3 = this;

            var query = 'SELECT * FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And RoomId = "' + this.roomid + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              console.log(data);

              if (data.rows.length > 0) {
                _this3.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.dataList.push(data.rows.item(i));
                }

                console.log(_this3.dataList, "dataList");
                _this3.RoomName = _this3.dataList[0].RoomName;
                _this3.RoomUse = _this3.dataList[0].RoomUse;
                setTimeout(function () {
                  _this3.form.patchValue({
                    "IndxId": "",
                    "SchlId": _this3.schoolId,
                    "VistId": _this3.vistId,
                    "BldgIdxId": "",
                    "BldgId": _this3.buildingId,
                    "FloorIdxId": "",
                    "FloorId": _this3.floorId,
                    "RoomId": _this3.roomid,
                    "RoomCondition": _this3.dataList[0].RoomCondition,
                    "RepairType": _this3.dataList[0].RepairType,
                    "MajorRepair": _this3.dataList[0].MajorRepair ? Array.from(_this3.dataList[0].MajorRepair.split(",")) : "",
                    "MinorRepair": _this3.dataList[0].MinorRepair ? Array.from(_this3.dataList[0].MinorRepair.split(",")) : "",
                    "AreaReplastering": _this3.dataList[0].AreaReplastering,
                    // "AreaExtWw": this.dataList[0].AreaExtWw,
                    "AreaIntWw": _this3.dataList[0].AreaIntWw,
                    "AreaPlastering": _this3.dataList[0].AreaPlastering,
                    "AreaReflooring": _this3.dataList[0].AreaReflooring,
                    "AreaPatchwork": _this3.dataList[0].AreaPatchwork,
                    "DoorReplace": _this3.dataList[0].DoorReplace,
                    "WindowReplace": _this3.dataList[0].WindowReplace,
                    "DoorRepair": _this3.dataList[0].DoorRepair,
                    "WindowRepair": _this3.dataList[0].WindowRepair,
                    "DoorRepaint": _this3.dataList[0].DoorRepaint,
                    "WindowRepaint": _this3.dataList[0].WindowRepaint,
                    "LatrinReplace": _this3.dataList[0].LatrinReplace,
                    "UrinalReplace": _this3.dataList[0].UrinalReplace,
                    "PipeNeed": _this3.dataList[0].PipeNeed,
                    "DrainageNeed": _this3.dataList[0].DrainageNeed,
                    "RoomLength": _this3.dataList[0].RoomLength,
                    "RoomBreadth": _this3.dataList[0].RoomBreadth,
                    // "RoomHeight": this.dataList[0].RoomHeight,
                    "FloorType": _this3.dataList[0].FloorType ? Array.from(_this3.dataList[0].FloorType.split(",")) : _this3.dataList[0].FloorType,
                    // "FloorType": this.dataList[0].FloorType,
                    "NumBenchAvail": _this3.dataList[0].NumBenchAvail,
                    "NumDesksAvail": _this3.dataList[0].NumDesksAvail,
                    "TubelightFunc": _this3.dataList[0].TubelightFunc,
                    "FansFunc": _this3.dataList[0].FansFunc,
                    "Cupboard": _this3.dataList[0].Cupboard,
                    "NumCupboardReq": _this3.dataList[0].NumCupboardReq,
                    "RoomArea": _this3.dataList[0].RoomArea,
                    "NumChairAvail": _this3.dataList[0].NumChairAvail,
                    "NumTableAvail": _this3.dataList[0].NumTableAvail,
                    "TeacherTableYn": _this3.dataList[0].TeacherTableYn == "false" ? false : _this3.dataList[0].TeacherTableYn == "true" ? true : _this3.dataList[0].TeacherTableYn == true ? true : false,
                    // "TelevisionYn": this.dataList[0].TelevisionYn == "false" ? false : this.dataList[0].TelevisionYn == "true" ? true : this.dataList[0].TelevisionYn == true ? true : false,
                    "TelevisionFuncYn": _this3.dataList[0].TelevisionFuncYn == "false" ? false : _this3.dataList[0].TelevisionFuncYn == "true" ? true : _this3.dataList[0].TelevisionFuncYn == true ? true : false,
                    // "SmartboardPrjtYn": this.dataList[0].SmartboardPrjtYn == "false" ? false : this.dataList[0].SmartboardPrjtYn == "true" ? true : this.dataList[0].SmartboardPrjtYn == true ? true : false,
                    "SmartboardPrjtFuncYn": _this3.dataList[0].SmartboardPrjtFuncYn == "false" ? false : _this3.dataList[0].SmartboardPrjtFuncYn == "true" ? true : _this3.dataList[0].SmartboardPrjtFuncYn == true ? true : false,
                    "ClassRoomProjYn": _this3.dataList[0].ClassRoomProjYn == "false" ? false : _this3.dataList[0].ClassRoomProjYn == "true" ? true : _this3.dataList[0].ClassRoomProjYn == true ? true : false,
                    // "ClassRoomProjFuncYn": this.dataList[0].ClassRoomProjFuncYn == "false" ? false : this.dataList[0].ClassRoomProjFuncYn == "true" ? true : this.dataList[0].ClassRoomProjFuncYn == true ? true : false,
                    "LabType": _this3.dataList[0].LabType,
                    // "LabComputerYn": this.dataList[0].LabComputerYn == "false" ? false : this.dataList[0].LabComputerYn == "true" ? true : this.dataList[0].LabComputerYn == true ? true : false,
                    "LabComputerFunc": _this3.dataList[0].LabComputerFunc,
                    "LabComputerRepair": _this3.dataList[0].LabComputerRepair,
                    "LabWatersupplyYn": _this3.dataList[0].LabWatersupplyYn == "false" ? false : _this3.dataList[0].LabWatersupplyYn == "true" ? true : _this3.dataList[0].LabWatersupplyYn == true ? true : false,
                    "LabDrainage": _this3.dataList[0].LabDrainage == "false" ? false : _this3.dataList[0].LabDrainage == "true" ? true : _this3.dataList[0].LabDrainage == true ? true : false,
                    "LabInternetConn": _this3.dataList[0].LabInternetConn == "false" ? false : _this3.dataList[0].LabInternetConn == "true" ? true : _this3.dataList[0].LabInternetConn == true ? true : false,
                    "LabInternetConnType": _this3.dataList[0].LabInternetConnType,
                    "LabBandwidth": _this3.dataList[0].LabBandwidth,
                    "LabServiceProvider": _this3.dataList[0].LabServiceProvider,
                    "LabServiceProviderOthers": _this3.dataList[0].LabServiceProviderOthers,
                    "LabProjector": _this3.dataList[0].LabProjector,
                    // "LabPrinterWebcam": this.dataList[0].LabPrinterWebcam,
                    "LabPrinter": _this3.dataList[0].LabPrinter,
                    "LabWebCamera": _this3.dataList[0].LabWebCamera,
                    "LabMic": _this3.dataList[0].LabMic,
                    "LabHeadphones": _this3.dataList[0].LabHeadphones,
                    "LabPhotoOne": _this3.dataList[0].LabPhotoOne,
                    "LabPhotoOneName": _this3.dataList[0].LabPhotoOneName,
                    // "LabPhotoTwo": this.dataList[0].LabPhotoTwo,
                    // "LabPhotoTwoName": this.dataList[0].LabPhotoTwoName,
                    "LabLatitude": _this3.dataList[0].LabLatitude,
                    "LabLogitude": _this3.dataList[0].LabLogitude,
                    "LibraryBooks": _this3.dataList[0].LibraryBooks == "false" ? false : _this3.dataList[0].LibraryBooks == "true" ? true : _this3.dataList[0].LibraryBooks == true ? true : false,
                    // "HmRoomTblYn": this.dataList[0].HmRoomTblYn == "false" ? false : this.dataList[0].HmRoomTblYn == "true" ? true : this.dataList[0].HmRoomTblYn == true ? true : false,
                    "HmRoomToiletYn": _this3.dataList[0].HmRoomToiletYn == "false" ? false : _this3.dataList[0].HmRoomToiletYn == "true" ? true : _this3.dataList[0].HmRoomToiletYn == true ? true : false,
                    "HmRoomToiletStatus": _this3.dataList[0].HmRoomToiletStatus,
                    "StaffrmUsedBy": _this3.dataList[0].StaffrmUsedBy,
                    "KitchenWtrSrc": _this3.dataList[0].KitchenWtrSrc ? Array.from(_this3.dataList[0].KitchenWtrSrc.split(",")) : _this3.dataList[0].KitchenWtrSrc,
                    "KitchenLPGConYn": _this3.dataList[0].KitchenLPGConYn == "false" ? false : _this3.dataList[0].KitchenLPGConYn == "true" ? true : _this3.dataList[0].KitchenLPGConYn == true ? true : false,
                    "KitchenWtrSupply": _this3.dataList[0].KitchenWtrSupply == "false" ? false : _this3.dataList[0].KitchenWtrSupply == "true" ? true : _this3.dataList[0].KitchenWtrSupply == true ? true : false,
                    "KitchenStorageYn": _this3.dataList[0].KitchenStorageYn == "false" ? false : _this3.dataList[0].KitchenStorageYn == "true" ? true : _this3.dataList[0].KitchenStorageYn == true ? true : false,
                    "KitchenCleanYn": _this3.dataList[0].KitchenCleanYn == "false" ? false : _this3.dataList[0].KitchenCleanYn == "true" ? true : _this3.dataList[0].KitchenCleanYn == true ? true : false,
                    "KitchenGardenYn": _this3.dataList[0].KitchenGardenYn == "false" ? false : _this3.dataList[0].KitchenGardenYn == "true" ? true : _this3.dataList[0].KitchenGardenYn == true ? true : false,
                    "DiningFunctionalYn": _this3.dataList[0].DiningFunctionalYn == "false" ? false : _this3.dataList[0].DiningFunctionalYn == "true" ? true : _this3.dataList[0].DiningFunctionalYn == true ? true : false,
                    "DiningSeatingCapacity": _this3.dataList[0].DiningSeatingCapacity,
                    "DiningSeatingWtrSupply": _this3.dataList[0].DiningSeatingWtrSupply == "false" ? false : _this3.dataList[0].DiningSeatingWtrSupply == "true" ? true : _this3.dataList[0].DiningSeatingWtrSupply == true ? true : false,
                    "NoonmealStorageClean": _this3.dataList[0].NoonmealStorageClean == "false" ? false : _this3.dataList[0].NoonmealStorageClean == "true" ? true : _this3.dataList[0].NoonmealStorageClean == true ? true : false,
                    "StoreRoomPurpose": _this3.dataList[0].StoreRoomPurpose ? Array.from(_this3.dataList[0].StoreRoomPurpose.split(",")) : "",
                    "StrroomStorageClean": _this3.dataList[0].StrroomStorageClean == "false" ? false : _this3.dataList[0].StrroomStorageClean == "true" ? true : _this3.dataList[0].StrroomStorageClean == true ? true : false,
                    "ReasonEmpty": _this3.dataList[0].ReasonEmpty,
                    "ToiletType": _this3.dataList[0].ToiletType,
                    "ToiletWaterCon": _this3.dataList[0].ToiletWaterCon,
                    "ToiletCubicSideHandRail": _this3.dataList[0].ToiletCubicSideHandRail,
                    "ToiletWasteDis": _this3.dataList[0].ToiletWasteDis,
                    // "IwcToilet": this.dataList[0].IwcToilet == "false" ? false : this.dataList[0].IwcToilet == "true" ? true : this.dataList[0].IwcToilet == true ? true : false,
                    "Iwccubicles": _this3.dataList[0].Iwccubicles,
                    "IwccubiclesFunc": _this3.dataList[0].IwccubiclesFunc,
                    // "EwcToilet": this.dataList[0].EwcToilet == "false" ? false : this.dataList[0].EwcToilet == "true" ? true : this.dataList[0].EwcToilet == true ? true : false,
                    "Ewccubicles": _this3.dataList[0].Ewccubicles,
                    "Ewccubiclesfunc": _this3.dataList[0].Ewccubiclesfunc,
                    // "UrinalToilet": this.dataList[0].UrinalToilet == "false" ? false : this.dataList[0].UrinalToilet == "true" ? true : this.dataList[0].UrinalToilet == true ? true : false,
                    "Urinals": _this3.dataList[0].Urinals,
                    "Urinalsfunc": _this3.dataList[0].Urinalsfunc,
                    "ToiletTapsFunc": _this3.dataList[0].ToiletTapsFunc,
                    "ToiletNeedTabs": _this3.dataList[0].ToiletNeedTabs,
                    "ToiletBucket": _this3.dataList[0].ToiletBucket,
                    "Toiletmugs": _this3.dataList[0].Toiletmugs,
                    "SizeSuitable": _this3.dataList[0].SizeSuitable == "false" ? false : _this3.dataList[0].SizeSuitable == "true" ? true : _this3.dataList[0].SizeSuitable == true ? true : false,
                    "Roof": _this3.dataList[0].Roof,
                    "ToiletSanitaryPad": _this3.dataList[0].ToiletSanitaryPad,
                    "SanitWasteDisp": _this3.dataList[0].SanitWasteDisp,
                    "HwFacility": _this3.dataList[0].HwFacility == "false" ? false : _this3.dataList[0].HwFacility == "true" ? true : _this3.dataList[0].HwFacility == true ? true : false,
                    // "HwFacilityLocation": this.dataList[0].HwFacilityLocation,
                    // "HwFacilityType": this.dataList[0].HwFacilityType,
                    // "PipingNeed": this.dataList[0].PipingNeed == "false" ? false : this.dataList[0].PipingNeed == "true" ? true : this.dataList[0].PipingNeed == true ? true : false,
                    // "PipeLengthNeed": this.dataList[0].PipeLengthNeed,
                    // "TapsFunc": this.dataList[0].TapsFunc,
                    // "TapsReq":ToiletType this.dataList[0].TapsReq,
                    // "StorageFacilityClosed": this.dataList[0].StorageFacilityClosed == "false" ? false : this.dataList[0].StorageFacilityClosed == "true" ? true : this.dataList[0].StorageFacilityClosed == true ? true : false,
                    "AuditoriumYn": _this3.dataList[0].AuditoriumYn == "false" ? false : _this3.dataList[0].AuditoriumYn == "true" ? true : _this3.dataList[0].AuditoriumYn == true ? true : false,
                    "AudiStageStatus": _this3.dataList[0].AudiStageStatus,
                    // "AuditoriumStageReqt": this.dataList[0].AuditoriumStageReqt,
                    // "AuditoriumStageArea": this.dataList[0].AuditoriumStageArea,
                    // "AuditoriumStageHeight": this.dataList[0].AuditoriumStageHeight,
                    // "AuditoriumStageAreaLevel": this.dataList[0].AuditoriumStageAreaLevel,
                    "AuditoriumLights": _this3.dataList[0].AuditoriumLights,
                    "AuditoriumFans": _this3.dataList[0].AuditoriumFans,
                    "AuditoriumPrjtYn": _this3.dataList[0].AuditoriumPrjtYn == "false" ? false : _this3.dataList[0].AuditoriumPrjtYn == "true" ? true : _this3.dataList[0].AuditoriumPrjtYn == true ? true : false,
                    // "AuditoriumPrjtFunc": this.dataList[0].AuditoriumPrjtFunc == "false" ? false : this.dataList[0].AuditoriumPrjtFunc == "true" ? true : this.dataList[0].AuditoriumPrjtFunc == true ? true : false,
                    "SmartRoomFacilityYn": _this3.dataList[0].SmartRoomFacilityYn == "false" ? false : _this3.dataList[0].SmartRoomFacilityYn == "true" ? true : _this3.dataList[0].SmartRoomFacilityYn == true ? true : false,
                    "SmartRoomDeviceFunYn": _this3.dataList[0].SmartRoomDeviceFunYn == "false" ? false : _this3.dataList[0].SmartRoomDeviceFunYn == "true" ? true : _this3.dataList[0].SmartRoomDeviceFunYn == true ? true : false,
                    "SmartRoomComputersYn": _this3.dataList[0].SmartRoomComputersYn == "false" ? false : _this3.dataList[0].SmartRoomComputersYn == "true" ? true : _this3.dataList[0].SmartRoomComputersYn == true ? true : false,
                    "SmartRoomFunComp": _this3.dataList[0].SmartRoomFunComp,
                    "SmartRoomFunCompRepair": _this3.dataList[0].SmartRoomFunCompRepair,
                    "SmartTabletFunc": _this3.dataList[0].SmartTabletFunc,
                    "SmartSpeakerFunc": _this3.dataList[0].SmartSpeakerFunc,
                    "SmartPaFunc": _this3.dataList[0].SmartPaFunc,
                    "SmartInternet": _this3.dataList[0].SmartInternet == "false" ? false : _this3.dataList[0].SmartInternet == "true" ? true : _this3.dataList[0].SmartInternet == true ? true : false,
                    "SmartInternetConnType": _this3.dataList[0].SmartInternetConnType,
                    "SmartInternetConnTypeOthers": _this3.dataList[0].SmartInternetConnTypeOthers,
                    "SmartBandwidth": _this3.dataList[0].SmartBandwidth,
                    "SmartServiceProvider": _this3.dataList[0].SmartServiceProvider,
                    "SmartServiceProviderOthers": _this3.dataList[0].SmartServiceProviderOthers
                  });

                  if (_this3.dataList[0].RoomUse != '10' && _this3.dataList[0].RoomUse != 2 && _this3.dataList[0].RoomUse != 7) {
                    if (_this3.dataList[0].MajorRepair) {
                      _this3.onSelectMajorRepairChange(_this3.dataList[0].MajorRepair, "all");
                    }

                    if (_this3.dataList[0].MinorRepair) {
                      _this3.onSelectMinorRepairChange(_this3.dataList[0].MinorRepair, "all");
                    }
                  }

                  if (_this3.dataList[0].RoomUse == '10') {
                    if (_this3.dataList[0].MajorRepair) {
                      _this3.onSelectMajorRepairChange(_this3.dataList[0].MajorRepair, "toilet");
                    }

                    if (_this3.dataList[0].MinorRepair) {
                      _this3.onSelectMinorRepairChange(_this3.dataList[0].MinorRepair, "toilet");
                    }
                  }

                  if (_this3.dataList[0].RoomUse == 2 || _this3.dataList[0].RoomUse == 7) {
                    if (_this3.dataList[0].MajorRepair) {
                      _this3.onSelectMajorRepairChange(_this3.dataList[0].MajorRepair, "labKitch");
                    }

                    if (_this3.dataList[0].MinorRepair) {
                      _this3.onSelectMinorRepairChange(_this3.dataList[0].MinorRepair, "labKitch");
                    }
                  } // if(this.dataList[0].LabPhotoOne){
                  //   this.viewImage(1);
                  // }
                  // if(this.dataList[0].LabPhotoTwo){
                  //   setTimeout(()=>{
                  //     this.viewImage(2);
                  //   },1000)
                  // }

                }, 1000);
              } else {
                console.log("local data");
              }
            });
          }
        }, {
          key: "checkLocalBuildDb",
          value: function checkLocalBuildDb() {
            var _this4 = this;

            var query = 'SELECT * FROM sidsBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataList.push(data.rows.item(i));
                }

                console.log("Building Local", dataList);

                if (+dataList[0].BldgType == 3) {
                  _this4.repair1 = [{
                    "value": "10",
                    "label": "Toilet"
                  }, {
                    "value": "11",
                    "label": "Pump Room"
                  }, {
                    "value": "12",
                    "label": "Store Room"
                  }];
                  _this4.repair1 = _this4.repair1.filter(function (dd) {
                    return +dd.value != +dataList[0].BldgType;
                  });
                } else {
                  _this4.repair1 = [{
                    "value": "1",
                    "label": "Classroom"
                  }, {
                    "value": "2",
                    "label": "Lab"
                  }, {
                    "value": "3",
                    "label": "Library"
                  }, {
                    "value": "4",
                    "label": "HM Room"
                  }, {
                    "value": "5",
                    "label": "Record Room"
                  }, {
                    "value": "6",
                    "label": "Staff Room"
                  }, {
                    "value": "7",
                    "label": "Kitchen"
                  }, {
                    "value": "8",
                    "label": "Noon Meal Store Room"
                  }, {
                    "value": "9",
                    "label": "Dining"
                  }, {
                    "value": "10",
                    "label": "Toilet"
                  }, {
                    "value": "11",
                    "label": "Pump Room"
                  }, {
                    "value": "12",
                    "label": "Store Room"
                  }, {
                    "value": "13",
                    "label": "Anganwadi"
                  }, {
                    "value": "14",
                    "label": "Empty"
                  }, {
                    "value": "15",
                    "label": "Security Room "
                  }, {
                    "value": "16",
                    "label": "PET Room"
                  }, {
                    "value": "17",
                    "label": "SMART Classroom"
                  }, {
                    "value": "18",
                    "label": "Auditorium"
                  }];
                }
              }
            });
          }
        }, {
          key: "onMultiSelectChange",
          value: function onMultiSelectChange(event) {
            this.activeHeight = false;
            this.activeLevelling = false;

            for (var i = 0; i <= event.length; i++) {
              console.log(event[i], "121324", event);

              if (event[i] == "1") {
                this.activeHeight = true;
              }

              if (event[i] == "2") {
                this.activeLevelling = true;
              }
            }

            if (this.activeHeight) {
              this.form.controls['AuditoriumStageArea'].setValue("");
              this.form.controls['AuditoriumStageArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
              this.form.controls['AuditoriumStageHeight'].setValue("");
              this.form.controls['AuditoriumStageHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            } else {
              this.form.controls['AuditoriumStageArea'].setValue("");
              this.form.controls['AuditoriumStageArea'].setValidators(null);
              this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
              this.form.controls['AuditoriumStageHeight'].setValue("");
              this.form.controls['AuditoriumStageHeight'].setValidators(null);
              this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            }

            if (this.activeLevelling) {
              this.form.controls['AuditoriumStageAreaLevel'].setValue("");
              this.form.controls['AuditoriumStageAreaLevel'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
            } else {
              this.form.controls['AuditoriumStageAreaLevel'].setValue("");
              this.form.controls['AuditoriumStageAreaLevel'].setValidators(null);
              this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
            }
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(event, id) {
            if (id == 1 && !this.form.value.ClassRoomProjYn) {
              this.form.controls['ClassRoomProjFuncYn'].setValue(false);
              this.form.controls['ClassRoomProjFuncYn'].updateValueAndValidity();
            }

            if (id == 20 && this.form.value.HmRoomToiletYn) {
              this.form.controls['HmRoomToiletStatus'].setValue('');
              this.form.controls['HmRoomToiletStatus'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['HmRoomToiletStatus'].updateValueAndValidity();
            } else {
              this.form.controls['HmRoomToiletStatus'].setValidators(null);
              this.form.controls['HmRoomToiletStatus'].updateValueAndValidity();
            } // if(id == 2 && !this.form.value.SmartboardPrjtYn){
            //   this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
            //   this.form.controls['SmartboardPrjtFuncYn'].updateValueAndValidity();
            // }
            // if(id == 3 && !this.form.value.TelevisionYn){
            //   this.form.controls['TelevisionFuncYn'].setValue(false);
            //   this.form.controls['TelevisionFuncYn'].updateValueAndValidity();
            // }
            // if(id == 4 && this.form.value.IwcToilet){
            //   // this.form.controls['Iwccubicles'].setValue("");
            //   this.form.controls['Iwccubicles'].setValidators(Validators.required);
            //   this.form.controls['Iwccubicles'].updateValueAndValidity();
            //   this.form.controls['IwccubiclesFunc'].setValue("");
            //   this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
            // }else if(id == 4 && !this.form.value.IwcToilet){
            //   this.form.controls['Iwccubicles'].setValue("");
            //   this.form.controls['IwccubiclesFunc'].setValue("");
            //   this.form.controls['Iwccubicles'].setValidators(null);
            //   this.form.controls['Iwccubicles'].updateValueAndValidity();
            //   this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
            // }
            // if(id == 5 && this.form.value.EwcToilet){
            //   // this.form.controls['Ewccubicles'].setValue("");
            //   if(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 
            //     || this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9){
            //       this.form.controls['Ewccubicles'].setValidators(Validators.required);
            //     }else{
            //       this.form.controls['Ewccubicles'].setValidators(null);
            //     }
            //   this.form.controls['Ewccubicles'].updateValueAndValidity();
            //   this.form.controls['Ewccubiclesfunc'].setValue("");
            //   this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
            // }else if(id == 5 && !this.form.value.EwcToilet){
            //   this.form.controls['Ewccubicles'].setValue("");
            //   this.form.controls['Ewccubiclesfunc'].setValue("");
            //   this.form.controls['Ewccubicles'].setValidators(null);
            //   this.form.controls['Ewccubicles'].updateValueAndValidity();
            //   this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
            // }
            // if(id == 6 && this.form.value.UrinalToilet){
            //   // this.form.controls['Urinals'].setValue("");
            //   if(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7){
            //     this.form.controls['Urinals'].setValidators(Validators.required);
            //   }else{
            //     this.form.controls['Urinals'].setValidators(null);
            //   }
            //   this.form.controls['Urinals'].updateValueAndValidity();
            //   this.form.controls['Urinalsfunc'].setValue("");
            //   this.form.controls['Urinalsfunc'].updateValueAndValidity();
            // }else if(id == 6 && !this.form.value.UrinalToilet){
            //   this.form.controls['Urinals'].setValue("");
            //   this.form.controls['Urinalsfunc'].setValue("");
            //   this.form.controls['Urinals'].setValidators(null);
            //   this.form.controls['Urinals'].updateValueAndValidity();
            //   this.form.controls['Urinalsfunc'].updateValueAndValidity();
            // }


            if (id == 7 && this.form.value.KitchenWtrSupply) {
              this.form.controls['KitchenWtrSrc'].setValue("");
              this.form.controls['KitchenWtrSrc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['KitchenWtrSrc'].setValue("");
              this.form.controls['KitchenWtrSrc'].setValidators(null);
            }

            this.form.controls['KitchenWtrSrc'].updateValueAndValidity();

            if (id == 18 && this.form.value.SmartRoomComputersYn) {
              this.form.controls['SmartRoomFunComp'].setValue('0');
              this.form.controls['SmartRoomFunCompRepair'].setValue('0');
              this.form.controls['SmartRoomFunComp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['SmartRoomFunCompRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['SmartRoomFunComp'].setValue('0');
              this.form.controls['SmartRoomFunCompRepair'].setValue('0');
              this.form.controls['SmartRoomFunComp'].setValidators(null);
              this.form.controls['SmartRoomFunCompRepair'].setValidators(null);
            }

            this.form.controls['SmartRoomFunComp'].updateValueAndValidity();
            this.form.controls['SmartRoomFunCompRepair'].updateValueAndValidity();

            if (id == 19 && this.form.value.AuditoriumYn) {
              this.form.controls['AudiStageStatus'].setValue('');
              this.form.controls['AuditoriumLights'].setValue('0');
              this.form.controls['AuditoriumFans'].setValue('0');
              this.form.controls['AuditoriumPrjtFunc'].setValue(false);
              this.form.controls['AudiStageStatus'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumLights'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumFans'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
              this.form.controls['AuditoriumPrjtFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } else {
              this.form.controls['AudiStageStatus'].setValue('');
              this.form.controls['AuditoriumLights'].setValue('0');
              this.form.controls['AuditoriumFans'].setValue('0');
              this.form.controls['AuditoriumPrjtFunc'].setValue(false);
              this.form.controls['AudiStageStatus'].setValidators(null);
              this.form.controls['AuditoriumLights'].setValidators(null);
              this.form.controls['AuditoriumFans'].setValidators(null);
              this.form.controls['AuditoriumPrjtFunc'].setValidators(null);
            }

            this.form.controls['AudiStageStatus'].updateValueAndValidity();
            this.form.controls['AuditoriumLights'].updateValueAndValidity();
            this.form.controls['AuditoriumFans'].updateValueAndValidity();
            this.form.controls['AuditoriumPrjtFunc'].updateValueAndValidity();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.RoomName = "";
            this.RoomUse = "";
            this.tabsData = 0;
            this.submitted = false;
            this.initialValidator();

            if (this.toastinstance) {
              this.toastinstance.dismiss();
            }
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
          key: "presentToastWithOptions",
          value: function presentToastWithOptions(buildId, buildName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var text;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.toastinstance) {
                      this.toastinstance.dismiss();
                    }

                    text = 'B ' + buildId + ' ' + buildName + ' opened';
                    _context.n = 1;
                    return this.toastController.create({
                      header: text,
                      position: 'bottom',
                      cssClass: 'my-toast',
                      color: 'light',
                      buttons: [{
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 1:
                    this.toastinstance = _context.v;
                    this.toastinstance.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this5 = this;

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

              _this5.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 3145728) {
                    if (i == 1) {
                      _this5.form.controls['LabPhotoOne'].setValue(base64string);

                      _this5.form.controls['LabPhotoOneName'].setValue(splitedImage[0] + '.png');

                      _this5.getLatLong();
                    } // if(i == 2){
                    //   this.form.controls['LabPhotoTwo'].setValue(base64string);
                    //   this.form.controls['LabPhotoTwoName'].setValue(splitedImage[0]+'.png');
                    // }

                  } else {
                    _this5.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
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
            var _this6 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }, {
          key: "uploadImgDelete",
          value: function uploadImgDelete(id) {
            var _this7 = this;

            if (id == 1) {
              this.form.controls['LabPhotoOne'].setValue(null);
              this.form.controls['LabPhotoOneName'].setValue(null);
              this.form.get('LabPhotoOne').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
            } // if(id == 2){
            //   this.form.controls['LabPhotoTwo'].setValue(null);
            //   this.form.controls['LabPhotoTwoName'].setValue(null);
            //   this.form.get('LabPhotoTwo').setValidators(null);
            // }


            this.form.get('LabPhotoOne').updateValueAndValidity(); // this.form.get('LabPhotoTwo').updateValueAndValidity();

            this.form.controls['LabLatitude'].setValue(null);
            this.form.controls['LabLogitude'].setValue(null);
            this.form.get('LabLatitude').updateValueAndValidity();
            this.form.get('LabLogitude').updateValueAndValidity();
            setTimeout(function () {
              _this7.getLatLong();
            }, 1000);
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this8 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this8.locationCordinates = resp.coords;

              _this8.form.controls['LabLatitude'].setValue(_this8.locationCordinates.latitude);

              _this8.form.controls['LabLogitude'].setValue(_this8.locationCordinates.longitude);

              _this8.form.get('LabLatitude').updateValueAndValidity();

              _this8.form.get('LabLogitude').updateValueAndValidity();
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this8.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }]);
      }();

      _NewRoomquestionsPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__.UploadService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__.Geolocation
        }];
      };

      _NewRoomquestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-new-roomquestions',
        template: _raw_loader_new_roomquestions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_roomquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewRoomquestionsPage);
      /***/
    },

    /***/
    32416:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-roomquestions/new-roomquestions.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.commonMenu {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: var(--ion-color-primary);\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.rowColr {\n  background-color: #E8F2FF;\n}\n\n.btn-present {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.left-text {\n  text-align: left;\n}\n\n.normal {\n  border-bottom: 1px solid;\n}\n\n.error {\n  border-bottom: 1px solid;\n  opacity: 1;\n  border: 1px solid red;\n  box-shadow: 0px 1px 5px 2px red;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1yb29tcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBRUUsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBR0EsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUFBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7OztFQUdFLGVBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BOztFQUVFLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU9BLFNBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBV0EsT0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0FBVEY7O0FBYUEsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBZUEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWlCQSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxjQUFBO0FBZkY7O0FBbUJBLFFBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxjQUFBO0FBakJGOztBQXFCQSxPQUFBOztBQU1BO0VBQ0UsV0FBQTtBQXZCRjs7QUEwQkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXZCRjs7RUF5QkE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXRCRjs7RUF3QkE7O0lBRUUsZUFBQTtJQUNBLG1CQUFBO0VBckJGO0FBQ0Y7O0FBd0JBO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQXRCRjs7QUE4QkE7RUFDRSxVQUFBO0FBM0JGOztBQThCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBM0JGOztBQThCQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsVUFBQTtBQTNCRjs7QUFvQ0E7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBakNGOztBQXdDQTtFQUNFLDBCQUFBO0FBckNGOztBQXdDQTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBckNKOztBQXdDQTtFQUNHLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBckNIOztBQXdDRTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFyQ047O0FBd0NBO0VBQ0UsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBckNGOztBQXdDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBckNKOztBQXVDQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBcENGOztBQXNDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5DRjs7QUFxQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWxDRjs7QUFxQ0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQWxDRjs7QUFxQ0E7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBbENGOztBQW9DQTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNGOztBQW9DQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNGOztBQW1DQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFoQ0Y7O0FBa0NBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQS9CRjs7QUFpQ0E7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBOUJGOztBQWlDQTtFQUNFLHlCQUFBO0FBOUJGOztBQWdDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUE5Qko7O0FBZ0NBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUE5Qko7O0FBaUNBO0VBQ0UsZ0JBQUE7QUE5QkY7O0FBaUNBO0VBQ0Usd0JBQUE7QUE5QkY7O0FBaUNBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQTlCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBN0JGOztBQStCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE1QkYiLCJmaWxlIjoibmV3LXJvb21xdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkJvdHRvbTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3AwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZC1jb250YWluZXIge1xyXG4gIC8vIHdpZHRoOiA5MyU7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lVGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGltZWxpbmVJY29uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2QtYXV0aG9yIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI2NkLXRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gbWFyZ2luLXRvcDogMmVtO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAvKiB0aGlzIGlzIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaWNvbiBpIHtcclxuICBjb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLXBpY3R1cmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4OyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLXBpY3R1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gIGNvbG9yOiAjMzAzZTQ5O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBwLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICBtYXJnaW46IDFlbSAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLypDT0xPUlMqL1xyXG5cclxuXHJcbi8qUE9TSVRJVkUqL1xyXG5cclxuLnBvc2l0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbn1cclxuXHJcbi5wb3NpdGl2ZSBpIHtcclxuICBjb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuXHJcbi8qQ0FMTSovXHJcblxyXG4uY2FsbSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDNjZWU2O1xyXG59XHJcblxyXG4uY2FsbSBpIHtcclxuICBjb2xvcjogIzQzY2VlNjtcclxufVxyXG5cclxuXHJcbi8qQkFMQU5DRUQqL1xyXG5cclxuLmJhbGFuY2VkIHtcclxuICBib3JkZXItY29sb3I6ICM2NmNjMzM7XHJcbn1cclxuXHJcbi5iYWxhbmNlZCBpIHtcclxuICBjb2xvcjogIzY2Y2MzMztcclxufVxyXG5cclxuXHJcbi8qRU5FUkdJWkVEKi9cclxuXHJcbi5lbmVyZ2l6ZWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2YwYjg0MDtcclxufVxyXG5cclxuLmVuZXJnaXplZCBpIHtcclxuICBjb2xvcjogI2YwYjg0MDtcclxufVxyXG5cclxuXHJcbi8qQVNTRVJUSVZFKi9cclxuXHJcbi5hc3NlcnRpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2VmNGUzYTtcclxufVxyXG5cclxuLmFzc2VydGl2ZSBpIHtcclxuICBjb2xvcjogI2VmNGUzYTtcclxufVxyXG5cclxuXHJcbi8qUk9ZQUwqL1xyXG5cclxuLnJveWFsIHtcclxuICBib3JkZXItY29sb3I6ICM4YTZkZTk7XHJcbn1cclxuXHJcbi5yb3lhbCBpIHtcclxuICBjb2xvcjogIzhhNmRlOTtcclxufVxyXG5cclxuXHJcbi8qREFSSyovXHJcblxyXG4vLyAuZGFyayB7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjNDQ0O1xyXG4vLyB9XHJcblxyXG4uZGFyayBpIHtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWNvbmRhcnkge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi8vIGlvbi1sYWJlbCB7XHJcbiAgLy8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG5cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4ucXVlcy10eHQge1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxufVxyXG5cclxuaW9uLWlucHV0W3R5cGU9XCJkYXRlXCJdOm5vdCguaGFzLXZhbHVlKTpiZWZvcmV7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxufSBcclxuXHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6b29tOjEuMDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmdyaWQtcGFkZGluZyB7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLy8gaW9uLXNlbGVjdCB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuLy8gfVxyXG5cclxuLmlucHV0LWNsciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCkgMXB4IHNvbGlkOztcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4vLyBpb24taW5wdXQge1xyXG4vLyAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLW5vLXBhZGRpbmd7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW9uLW5vLXBhZGRpbmctcXVlc3Rpb257XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItc2F2ZSB7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG4uZm9vdGVyLW5vdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgcGFkZGluZzogMTBweDsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLnNpZHNWaWV3e1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5xdWVzQ29sb3J7XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGQTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYmdDaGVja3tcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLXRvZ2dsZXtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuLmNvbW1vbk1lbnV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0VBRUFFQTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgXHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hZGRCdXR0b257XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm93Q29sciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjJGRjtcclxufVxyXG4uYnRuLXByZXNlbnRcclxue1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNENBRjUwIWltcG9ydGFudDsgXHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1hYnNlbnRcclxue1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmODIzMzkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNmZmY7XHJcblxyXG59XHJcbi5sZWZ0LXRleHR7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5vcm1hbHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5lcnJvcntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMnB4IHJlZDtcclxufVxyXG4udXBsb2FkSW1hZ2V7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uY2xvc2VidG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    58585:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/building/new-roomquestions/new-roomquestions.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onGoBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Room Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; margin: 0px;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Room General Questions</ion-label>\r\n    </ion-card>\r\n\r\n    <ion-row style=\"background-color: aliceblue; margin: 10px auto;\">\r\n      <ion-col size=\"12\" style=\"padding-left: 10px; padding-top: 10px; color: rgb(165, 7, 7);font-weight: bold;\">\r\n        <ion-label>Notes : </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"padding-left: 10px;padding-bottom: 10px;color: rgb(139, 103, 179);\">\r\n        <ion-label style=\"font-size: 16px;\">Details of the room can be saved only after entering all the details\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row >\r\n    \r\n    <ion-row style=\"width: 100%; margin-bottom: 10px;\">\r\n      <ion-col size=\"12\" class=\"quesColor\">\r\n        <ion-label> What is the room used for?<span style=\"color:red\">*</span></ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n        (ionChange)=\"onSelectedRoom()\" style=\"max-width: 100% !important;\" [(ngModel)]=\"RoomUse\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair1\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row><p class=\"error-message\"*ngIf=\"!RoomUse && submitted\">Field is required</p></ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row style=\"width: 100%; margin-bottom: 10px;\">\r\n      <ion-col size=\"12\" class=\"quesColor\">\r\n        <ion-label> Enter the Room Name<span style=\"color:red\">*</span></ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n        <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n        [(ngModel)]=\"RoomName\" style=\"border-bottom: 1px solid;\" maxlength=\"15\">\r\n      </ion-input>\r\n        <ion-row><p class=\"error-message\"*ngIf=\"!RoomName && submitted\">Field is required</p></ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div class=\"commonMenu\" (click)=\"getTabs(1)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Condition</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 1\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 1\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    <div *ngIf=\"tabsData == 1\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                1\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Condition of the room<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RoomCondition\"\r\n                      style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 1)\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair72\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomCondition'].hasError('required') && (form.controls['RoomCondition'].dirty || form.controls['RoomCondition'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\" >\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Nature of Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RepairType\"\r\n                      style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 2)\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question73\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RepairType'].hasError('required') && (form.controls['RepairType'].dirty || form.controls['RepairType'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <!-- all room major -------------------------------------------------------------------------------------->\r\n  \r\n            <div ng-repeat=\"activity in timeline\"\r\n              *ngIf=\"this.form.value.RoomCondition == 2 && (this.form.value.RepairType == 1 || this.form.value.RepairType == 3)\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2A\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of Major Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse != '10' && this.RoomUse != 2 && this.RoomUse != 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'all')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question74\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\" *ngIf=\"(this.RoomUse == '10')\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'toilet')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question76\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse == 2 || this.RoomUse == 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'labKitch')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair78\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\"\r\n              *ngIf=\"this.form.value.RoomCondition == 2 && (this.form.value.RepairType == 2 || this.form.value.RepairType == 3)\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2B\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of Minor Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse != '10' && this.RoomUse != 2 && this.RoomUse != 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'all')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question75\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\" *ngIf=\"this.RoomUse == '10'\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'toilet')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question77\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse == 2 || this.RoomUse == 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'3')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair79\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n  \r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <!-- sub questions ----------------------------------------------------------------------------------------------->\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor1 == 1 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of ceiling plastering required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaReplastering\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaReplastering'].hasError('required') && (form.controls['AreaReplastering'].dirty || form.controls['AreaReplastering'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaReplastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor2 == 2 && form.value.RoomCondition == 2\">\r\n  \r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of exterior whitewashing required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaExtWw\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaExtWw'].hasError('required') && (form.controls['AreaExtWw'].dirty || form.controls['AreaExtWw'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaExtWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section> -->\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor3 == 3 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of interior whitewashing required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaIntWw\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaIntWw'].hasError('required') && (form.controls['AreaIntWw'].dirty || form.controls['AreaIntWw'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaIntWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor4 == 4 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of replastering required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaPlastering\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaPlastering'].hasError('required') && (form.controls['AreaPlastering'].dirty || form.controls['AreaPlastering'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPlastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor6 == 6) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of reflooring required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaReflooring\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaReflooring'].hasError('required') && (form.controls['AreaReflooring'].dirty || form.controls['AreaReflooring'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPlastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor7 == 7 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of floor patchwork required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaPatchwork\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaPatchwork'].hasError('required') && (form.controls['AreaPatchwork'].dirty || form.controls['AreaPatchwork'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPatchwork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor1 == 1 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of doors to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorReplace'].hasError('required') && (form.controls['DoorReplace'].dirty || form.controls['DoorReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor2 == 2 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of windows to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowReplace'].hasError('required') && (form.controls['WindowReplace'].dirty || form.controls['WindowReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.WindowReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"onActiveMinor3 == 3 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of doors requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorRepair'].hasError('required') && (form.controls['DoorRepair'].dirty || form.controls['DoorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepair.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"onActiveMinor4 == 4 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of windows requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowRepair'].hasError('required') && (form.controls['WindowRepair'].dirty || form.controls['WindowRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepair.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor5 == 5 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of Doors Requiring Repainting (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorRepaint\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorRepaint'].hasError('required') && (form.controls['DoorRepaint'].dirty || form.controls['DoorRepaint'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor6 == 6 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of Windows Requiring Repainting (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowRepaint\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowRepaint'].hasError('required') && (form.controls['WindowRepaint'].dirty || form.controls['WindowRepaint'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.WindowRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor8 == 8 && (this.RoomUse == '10')) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of Latrines to be Replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"LatrinReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['LatrinReplace'].hasError('required') && (form.controls['LatrinReplace'].dirty || form.controls['LatrinReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.LatrinReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor9 == 9 && (this.RoomUse == 10)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of Urinals to be Replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"UrinalReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['UrinalReplace'].hasError('required') && (form.controls['UrinalReplace'].dirty || form.controls['UrinalReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.UrinalReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"(onActiveMajor10 == '10' && this.RoomUse == 10) || (onActiveMajor9 == 9 && (this.RoomUse == 2 || this.RoomUse == 7)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of Pipe needed (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipeNeed\"\r\n                      style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 5)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['PipeNeed'].hasError('required') && (form.controls['PipeNeed'].dirty || form.controls['PipeNeed'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.PipeNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"(onActiveMajor11 == '11' && this.RoomUse == '10') || (onActiveMajor9 == 9 && (this.RoomUse == 2 || this.RoomUse == 7)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of drainage line to be repaired (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DrainageNeed\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 6)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DrainageNeed'].hasError('required') && (form.controls['DrainageNeed'].dirty || form.controls['DrainageNeed'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DrainageNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n  \r\n          </section>\r\n\r\n          <!-- <ion-row (click)=\"onSave()\">\r\n            <ion-col size=\"4\" class=\"addButton\">\r\n              <p style=\"text-align: center; margin:5px\">Save</p>\r\n            </ion-col>\r\n          </ion-row> -->\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    \r\n    <div class=\"commonMenu\" (click)=\"getTabs(2)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Basic Details</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 2\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 2\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    <div *ngIf=\"tabsData == 2\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div>\r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  1\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomLength\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 11)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomLength'].hasError('required') && (form.controls['RoomLength'].dirty || form.controls['RoomLength'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Breadth of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomBreadth\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 12)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomBreadth'].hasError('required') && (form.controls['RoomBreadth'].dirty || form.controls['RoomBreadth'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomBreadth.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  3\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of room (sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  placeholder=\"Please Enter your answer\" [disabled]=\"form.value.RoomBreadth\"\r\n                      formControlName=\"RoomArea\" style=\"border-bottom: 1px solid;\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 13)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomArea'].hasError('required') && (form.controls['RoomArea'].dirty || form.controls['RoomArea'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    \r\n          <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  3\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Height of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"4\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 13)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomHeight'].hasError('required') && (form.controls['RoomHeight'].dirty || form.controls['RoomBreadth'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section> -->\r\n    \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  4\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of flooring in the room<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n    \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorType\"\r\n                      style=\"max-width: 100% !important;\" multiple=\"true\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair69\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['FloorType'].hasError('required') && (form.controls['FloorType'].dirty || form.controls['FloorType'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-row size=\"12\" style=\"padding:10px; margin: 10px auto; background: #f3f4f9; width: 100%;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Material</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <div class=\"font-wB font-14\" style=\"text-align: center;\">Functional</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 5 && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">No. of Benches</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['NumBenchAvail'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"NumBenchAvail\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 5  && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">No. of Desks</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['NumDesksAvail'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"NumDesksAvail\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">No. of Tubelights</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['TubelightFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"TubelightFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">No. of Fans</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\" >\r\n                    <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['FansFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"FansFunc\"  style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n              <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 14\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <ion-col size=\"4\">\r\n                  <div class=\"font-14\">No. of Cupboards</div> \r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['Cupboard'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"Cupboard\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 14\" size=\"12\"class=\" cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <ion-col size=\"4\">\r\n                  <div class=\"font-14\">No. of Cupboards required</div> \r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['NumCupboardReq'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"NumCupboardReq\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 14\" size=\"12\"class=\" cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <ion-col size=\"4\">\r\n                  <div class=\"font-14\">No. of Chairs</div> \r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['NumChairAvail'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"NumChairAvail\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 14\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <ion-col size=\"4\">\r\n                  <div class=\"font-14\">No. of Tables</div> \r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" placeholder=\"Please enter\" [ngClass]=\"submitted && form.controls['NumTableAvail'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"NumTableAvail\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        </div>\r\n        <!-- <ion-row (click)=\"onSave()\">\r\n          <ion-col size=\"4\" class=\"addButton\">\r\n            <p style=\"text-align: center; margin:5px\">Save</p>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"RoomUse == 5 || RoomUse == 11 || RoomUse == 13 || RoomUse == 15 || RoomUse == 16\" class=\"commonMenu\" style=\"opacity: 0.5;\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Room Specific Questions</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n\r\n    <div *ngIf=\"RoomUse != 5 && RoomUse != 11 && RoomUse != 13 && RoomUse != 15 && RoomUse != 16\" class=\"commonMenu\" (click)=\"getTabs(3)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Room Specific Questions</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    \r\n    <div *ngIf=\"tabsData == 3\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n          <div>\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 1\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a teacher's table and chair?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TeacherTableYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TeacherTableYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TeacherTableYn?true:false}}\" formControlName=\"TeacherTableYn\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a TV?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TelevisionFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TelevisionFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TelevisionFuncYn?true:false}}\" formControlName=\"TelevisionFuncYn\"\r\n                            (ionChange)=\"onToggleChange($event,3)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.form.value.TelevisionYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TelevisionFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TelevisionFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TelevisionFuncYn?true:false}}\" formControlName=\"TelevisionFuncYn\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a smartboard facility?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartboardPrjtFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartboardPrjtFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SmartboardPrjtFuncYn?true:false}}\" formControlName=\"SmartboardPrjtFuncYn\"\r\n                            (ionChange)=\"onToggleChange($event,2)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"form.value.SmartboardPrjtYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartboardPrjtFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartboardPrjtFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SmartboardPrjtFuncYn?true:false}}\" \r\n                            formControlName=\"SmartboardPrjtFuncYn\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a projector facility?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.ClassRoomProjYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.ClassRoomProjYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.ClassRoomProjYn?true:false}}\" formControlName=\"ClassRoomProjYn\"\r\n                            (ionChange)=\"onToggleChange($event, 1)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1 && form.value.ClassRoomProjYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.ClassRoomProjFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.ClassRoomProjFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.ClassRoomProjFuncYn?true:false}}\" formControlName=\"ClassRoomProjFuncYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n  <!-- Lab ----------------------------------------------------------------------------------------------->\r\n      \r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of lab<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"LabType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 12)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question14\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabType'].hasError('required') && (form.controls['LabType'].dirty || form.controls['LabType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the lab have computers?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabComputerYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabComputerYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabComputerYn?true:false}}\" formControlName=\"LabComputerYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Functional Computers<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabComputerFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       (ionChange)=\"onChangeBuildingData($event, 1)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabComputerFunc'].hasError('required') && (form.controls['LabComputerFunc'].dirty || form.controls['LabComputerFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabComputerFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Computers requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabComputerRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 3)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabComputerRepair'].hasError('required') && (form.controls['LabComputerRepair'].dirty || form.controls['LabComputerRepair'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabComputerRepair.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2 && form.value.LabType == 5\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is there internet connection<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col  size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabInternetConn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabInternetConn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onSelectChange($event.target.value, 11)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabInternetConn?true:false}}\" formControlName=\"LabInternetConn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2 && form.value.LabType == 5 && form.value.LabInternetConn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of connection<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"LabInternetConnType\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ConnectionType\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabInternetConnType'].hasError('required') && (form.controls['LabInternetConnType'].dirty || form.controls['LabInternetConnType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && form.value.LabType == 5 && form.value.LabInternetConn\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Bandwidth<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabBandwidth\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 6)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabBandwidth'].hasError('required') && (form.controls['LabBandwidth'].dirty || form.controls['LabBandwidth'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabBandwidth.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && form.value.LabType == 5 && form.value.LabInternetConn\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Service provider<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <!-- <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabServiceProvider\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 7)\">\r\n                      </ion-input> -->\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"LabServiceProvider\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onChangeBuildingData($event, 25)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ProviderService\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabServiceProvider'].hasError('required') && (form.controls['LabServiceProvider'].dirty || form.controls['LabServiceProvider'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabServiceProvider.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && form.value.LabServiceProvider == '7'\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4C1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please Specify<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                        formControlName=\"LabServiceProviderOthers\"  \r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"20\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabServiceProviderOthers'].hasError('required') && (form.controls['LabServiceProviderOthers'].dirty || form.controls['LabServiceProviderOthers'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 \">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Projector<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabProjector\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 8)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabProjector'].hasError('required') && (form.controls['LabProjector'].dirty || form.controls['LabProjector'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabProjector.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (form.value.LabType == 5 || form.value.LabType == 6) \">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Printer<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabPrinter\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabPrinter'].hasError('required') && (form.controls['LabPrinter'].dirty || form.controls['LabPrinter'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabPrinter.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (form.value.LabType == 5 || form.value.LabType == 6) \">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    7\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Web Camera<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabWebCamera\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabWebCamera'].hasError('required') && (form.controls['LabWebCamera'].dirty || form.controls['LabWebCamera'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabWebCamera.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (form.value.LabType == 5 || form.value.LabType == 6) \">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    8\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Mic<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabMic\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabMic'].hasError('required') && (form.controls['LabMic'].dirty || form.controls['LabMic'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabMic.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (form.value.LabType == 5 || form.value.LabType == 6) \">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    9\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Headphones<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabHeadphones\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabHeadphones'].hasError('required') && (form.controls['LabHeadphones'].dirty || form.controls['LabHeadphones'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabHeadphones.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (this.form.value.LabType == 1 || this.form.value.LabType == 2 || this.form.value.LabType == 3 || this.form.value.LabType == 8\r\n            || this.form.value.LabType == 9 || this.form.value.LabType == 10)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    10\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have water supply<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabWatersupplyYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabWatersupplyYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabWatersupplyYn?true:false}}\" formControlName=\"LabWatersupplyYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && this.form.value.LabWatersupplyYn == 1 && (this.form.value.LabType == 1 || this.form.value.LabType == 2 || this.form.value.LabType == 3 || this.form.value.LabType == 8\r\n            || this.form.value.LabType == 9 || this.form.value.LabType == 10)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the lab have drainage facility?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabDrainage\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabDrainage\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabDrainage?true:false}}\" formControlName=\"LabDrainage\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    9\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please upload the image of the lab ( image must contain functional devices/instruments)\r\n                        <br>Photo Upload 1<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <div *ngIf=\"!form.value.LabPhotoOne \" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                        <ion-col size=\"1\" style=\"text-align: center;\">\r\n                          <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                            Click to Upload Image\r\n                          </label>\r\n                        </ion-col>\r\n                      </div>\r\n    \r\n                      <div *ngIf=\"form.value.LabPhotoOne\">\r\n                        <ion-col size=\"12\" style=\"float: left;\">\r\n                          <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.LabPhotoOne}}\"></div>\r\n                        </ion-col>\r\n                      </div>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['LabPhotoOne'].hasError('required') && (form.controls['LabPhotoOne'].dirty || form.controls['LabPhotoOne'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    10\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please upload the image of the lab ( image must contain functional devices/instruments)\r\n                        <br>Photo Upload 2</ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <div *ngIf=\"!form.value.LabPhotoTwo \" style=\"margin-top: 10px;\" (click)=\"openCamera(2)\">\r\n                        <ion-col size=\"1\" style=\"text-align: center;\">\r\n                          <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                            Click to Upload Image\r\n                          </label>\r\n                        </ion-col>\r\n                      </div>\r\n    \r\n                      <div *ngIf=\"form.value.LabPhotoTwo\">\r\n                        <ion-col size=\"12\" style=\"float: left;\">\r\n                          <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(2)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.LabPhotoTwo}}\"></div>\r\n                        </ion-col>\r\n                      </div>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['LabPhotoTwo'].hasError('required') && (form.controls['LabPhotoTwo'].dirty || form.controls['LabPhotoTwo'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n  <!-- Library ----------------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 3\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage adequate to store books?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LibraryBooks\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LibraryBooks\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LibraryBooks?true:false}}\" formControlName=\"LibraryBooks\"\r\n                          >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n<!-- HM room ---------------------------------------------------------------------------------------------------->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 4\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have a functional table and chair?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.HmRoomTblYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.HmRoomTblYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.HmRoomTblYn?true:false}}\" formControlName=\"HmRoomTblYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 4\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the HM room have a toilet?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.HmRoomToiletYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.HmRoomToiletYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.HmRoomToiletYn?true:false}}\" formControlName=\"HmRoomToiletYn\"\r\n                          (ionChange)=\"onToggleChange($event, 20)\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.HmRoomToiletYn\">\r\n      \r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1.1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Status of the Toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"HmRoomToiletStatus\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of HMStatusToilet\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['HmRoomToiletStatus'].hasError('required') && (form.controls['HmRoomToiletStatus'].dirty || form.controls['HmRoomToiletStatus'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n<!-- staff room ------------------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 6\">\r\n      \r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Who uses the Staff Room?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"StaffrmUsedBy\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question31\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['StaffrmUsedBy'].hasError('required') && (form.controls['StaffrmUsedBy'].dirty || form.controls['StaffrmUsedBy'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- kitchan --------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the kitchen have LPG Connection?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenLPGConYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenLPGConYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenLPGConYn?true:false}}\" formControlName=\"KitchenLPGConYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have water supply?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenWtrSupply\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenWtrSupply\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenWtrSupply?true:false}}\" formControlName=\"KitchenWtrSupply\"\r\n                          (ionChange)=\"onToggleChange($event, 7)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7 && form.value.KitchenWtrSupply\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the source of water used in the kitchen?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"KitchenWtrSrc\"\r\n                        multiple=\"true\" style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question37\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['KitchenWtrSrc'].hasError('required') && (form.controls['KitchenWtrSrc'].dirty || form.controls['KitchenWtrSrc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the kitchen used for storing groceries/food supplies?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenStorageYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenStorageYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenStorageYn?true:false}}\" formControlName=\"KitchenStorageYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 7 && this.form.value.KitchenStorageYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenCleanYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenCleanYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenCleanYn?true:false}}\" formControlName=\"KitchenCleanYn\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the kitchen have kitchen garden<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenGardenYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenGardenYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenGardenYn?true:false}}\" formControlName=\"KitchenGardenYn\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n  <!-- Dining ----------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 9\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the dining room functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.DiningFunctionalYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.DiningFunctionalYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DiningFunctionalYn?true:false}}\" formControlName=\"DiningFunctionalYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 9\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Seating capacity of the dining room?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"DiningSeatingCapacity\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 14)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['DiningSeatingCapacity'].hasError('required') && (form.controls['DiningSeatingCapacity'].dirty || form.controls['DiningSeatingCapacity'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.DiningSeatingCapacity.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"this.RoomUse == 9\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                 3\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Does the room have water supply?<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-row>\r\n                      <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                        <div *ngIf=\"form.value.DiningSeatingWtrSupply\"> Yes</div>\r\n                        <div *ngIf=\"!form.value.DiningSeatingWtrSupply\"> No</div>\r\n                      </ion-col>\r\n                      <ion-col size=\"3\">\r\n                        <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DiningSeatingWtrSupply?true:false}}\" formControlName=\"DiningSeatingWtrSupply\"\r\n                          >\r\n                        </ion-toggle>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"this.RoomUse == 9\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                 4\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Does the dining room have  handwash<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-row>\r\n                      <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                        <div *ngIf=\"form.value.DiningRoomHandwash\"> Yes</div>\r\n                        <div *ngIf=\"!form.value.DiningRoomHandwash\"> No</div>\r\n                      </ion-col>\r\n                      <ion-col size=\"3\">\r\n                        <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DiningRoomHandwash?true:false}}\" formControlName=\"DiningRoomHandwash\"\r\n                          >\r\n                        </ion-toggle>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 9\">\r\n            <div ng-repeat=\"activity in timeline\" >\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  5\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label>No of functional taps<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DiningNumTapFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      (ionChange)=\"onChangeValueData($event.detail.value, 2)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DiningNumTapFunc'].hasError('required') && (form.controls['DiningNumTapFunc'].dirty || form.controls['DiningNumTapFunc'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DiningNumTapFunc.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n      \r\n <!-- Noon Meal Store Room ---------------------------------------------------------------------------->\r\n            \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 8\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.NoonmealStorageClean\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.NoonmealStorageClean\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.NoonmealStorageClean?true:false}}\"\r\n                            formControlName=\"NoonmealStorageClean\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n      \r\n <!-- Store Room ---------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 12\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Purpose of Store Room <span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"StoreRoomPurpose\"\r\n                        multiple=\"true\" style=\"max-width: 100% !important;\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair63\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['StoreRoomPurpose'].hasError('required') && (form.controls['StoreRoomPurpose'].dirty || form.controls['StoreRoomPurpose'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 12\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.StrroomStorageClean\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.StrroomStorageClean\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.StrroomStorageClean?true:false}}\"\r\n                            formControlName=\"StrroomStorageClean\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n <!-- empty....................................................................................... -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 14\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Reason for room being empty<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ReasonEmpty\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair65\" > {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ReasonEmpty'].hasError('required') && (form.controls['ReasonEmpty'].dirty || form.controls['ReasonEmpty'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n  <!-- toilet ------------------------------------------------------------------------------------------------------------>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of Toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 3)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question43\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletType'].hasError('required') && (form.controls['ToiletType'].dirty || form.controls['ToiletType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have water connection?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletWaterCon\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question45\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletWaterCon'].hasError('required') && (form.controls['ToiletWaterCon'].dirty || form.controls['ToiletWaterCon'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the mode of toilet waste disposal?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletWasteDis\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question46\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletWasteDis'].hasError('required') && (form.controls['ToiletWasteDis'].dirty || form.controls['ToiletWasteDis'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && !ToiletCWSN\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have IWC?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.IwcToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.IwcToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 4)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.IwcToilet?true:false}}\" formControlName=\"IwcToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && (form.value.ToiletType == '1' || form.value.ToiletType == '2' || form.value.ToiletType == '3' || form.value.ToiletType == '7' || form.value.ToiletType == '8' || form.value.ToiletType == '9')\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of IWC Toilet cubicles (Indian Water Closet) <span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Iwccubicles\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 21)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Iwccubicles'].hasError('required') && (form.controls['Iwccubicles'].dirty || form.controls['Iwccubicles'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Iwccubicles.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && (form.value.ToiletType == '1' || form.value.ToiletType == '2' || form.value.ToiletType == '3' || form.value.ToiletType == '7' || form.value.ToiletType == '8' || form.value.ToiletType == '9') && form.value.Iwccubicles > 0\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Functional IWC Toilet cubicles (water available in toilet, no foul smell,\r\n                        unbroken seat, regularly cleaned dry, working drainage system, door with latch)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"IwccubiclesFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['IwccubiclesFunc'].hasError('required') && (form.controls['IwccubiclesFunc'].dirty || form.controls['IwccubiclesFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.IwccubiclesFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have EWC?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.EwcToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.EwcToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 5)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.EwcToilet?true:false}}\" formControlName=\"EwcToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of EWC Toilet cubicles<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Ewccubicles\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        (ionChange)=\"onChangeBuildingData($event, 22)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Ewccubicles'].hasError('required') && (form.controls['Ewccubicles'].dirty || form.controls['Ewccubicles'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Ewccubicles.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && form.value.Ewccubicles \">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Functional EWC Toilet cubicles (water available in toilet, no foul smell,\r\n                        unbroken seat, regularly cleaned dry, working drainage system, door with latch)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Ewccubiclesfunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Ewccubiclesfunc'].hasError('required') && (form.controls['Ewccubiclesfunc'].dirty || form.controls['Ewccubiclesfunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Ewccubiclesfunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"this.RoomUse == 10 && (this.form.value.ToiletType == '4' || this.form.value.ToiletType == '5' || this.form.value.ToiletType == '6')\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  6\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Number of cubicles with side handrails<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ToiletCubicSideHandRail\"\r\n                      style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      (ionChange)=\"onChangeBuildingData($event, 24)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['ToiletCubicSideHandRail'].hasError('required') && (form.controls['ToiletCubicSideHandRail'].dirty || form.controls['ToiletCubicSideHandRail'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.ToiletCubicSideHandRail.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet complex have urinals?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.UrinalToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.UrinalToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 6)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.UrinalToilet?true:false}}\" formControlName=\"UrinalToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7) \">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    7\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Urinals<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"Urinals\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 23)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Urinals'].hasError('required') && (form.controls['Urinals'].dirty || form.controls['Urinals'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Urinals.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.Urinals &&(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7) \">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    7A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of functional urinals (water available in toilet, no foul smell,\r\n                        unbroken seat, regularly cleaned dry, working drainage system)<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Urinalsfunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Urinalsfunc'].hasError('required') && (form.controls['Urinalsfunc'].dirty || form.controls['Urinalsfunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Urinalsfunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    8\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of functional taps in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletTapsFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletTapsFunc'].hasError('required') && (form.controls['ToiletTapsFunc'].dirty || form.controls['ToiletTapsFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletTapsFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    9\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of taps needed in the toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletNeedTabs\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletNeedTabs'].hasError('required') && (form.controls['ToiletNeedTabs'].dirty || form.controls['ToiletNeedTabs'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletNeedTabs.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    10\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of buckets needed in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletBucket\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletBucket'].hasError('required') && (form.controls['ToiletBucket'].dirty || form.controls['ToiletBucket'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletBucket.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    11\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of mugs needed in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Toiletmugs\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Toiletmugs'].hasError('required') && (form.controls['Toiletmugs'].dirty || form.controls['Toiletmugs'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Toiletmugs.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    12\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the height and size of toilet and urinal facility suitable for children of all age groups\r\n                        in the school?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SizeSuitable\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SizeSuitable\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SizeSuitable?true:false}}\" formControlName=\"SizeSuitable\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    13\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have a roof?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Roof\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question55\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Roof'].hasError('required') && (form.controls['Roof'].dirty || form.controls['Roof'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && (form.value.ToiletType == '1' || form.value.ToiletType == '5' || form.value.ToiletType == '8')\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have a sanitary pad vending machine<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletSanitaryPad\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of SanitaryPad\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletSanitaryPad'].hasError('required') && (form.controls['ToiletSanitaryPad'].dirty || form.controls['ToiletSanitaryPad'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container \" *ngIf=\"this.RoomUse == 10 && (form.value.ToiletType == '1' || form.value.ToiletType == '5' || form.value.ToiletType == '8')\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    15\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the mode of sanitary waste disposal?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SanitWasteDisp\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question56\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SanitWasteDisp'].hasError('required') && (form.controls['SanitWasteDisp'].dirty || form.controls['SanitWasteDisp'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   16\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have an attached handwash facility<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.HwFacility\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.HwFacility\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.HwFacility?true:false}}\" formControlName=\"HwFacility\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Location of Facility<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"HwFacilityLocation\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair57\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['HwFacilityLocation'].hasError('required') && (form.controls['HwFacilityLocation'].dirty || form.controls['HwFacilityLocation'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of Facility<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"HwFacilityType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair58\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['HwFacilityType'].hasError('required') && (form.controls['HwFacilityType'].dirty || form.controls['HwFacilityType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is new piping required?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.PipingNeed\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.PipingNeed\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"true\" formControlName=\"PipingNeed\"\r\n                            (ionChange)=\"onToggleToilet($event,3)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.PipingNeed\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    CA\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Length of Pipe needed<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"PipeLengthNeed\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['PipeLengthNeed'].hasError('required') && (form.controls['PipeLengthNeed'].dirty || form.controls['PipeLengthNeed'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.PipeLengthNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\"\r\n                *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.HwFacilityType == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14D\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Functional Taps<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"TapsFunc\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['TapsFunc'].hasError('required') && (form.controls['TapsFunc'].dirty || form.controls['TapsFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.TapsFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\"\r\n                *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.HwFacilityType == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14E\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Taps Required<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"TapsReq\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['TapsReq'].hasError('required') && (form.controls['TapsReq'].dirty || form.controls['TapsReq'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.TapsReq.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && (form.value.HwFacilityType == 2 || form.value.HwFacilityType == 3)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14F\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage facility closed? <span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.StorageFacilityClosed\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.StorageFacilityClosed\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.StorageFacilityClosed?true:false}}\"\r\n                            formControlName=\"StorageFacilityClosed\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is there an auditorium?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event,19)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumYn?true:false}}\" formControlName=\"AuditoriumYn\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['AuditoriumYn'].hasError('required') && (form.controls['AuditoriumYn'].dirty || form.controls['AuditoriumYn'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18 && form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1A\r\n                  </div>\r\n      \r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Status of the stage<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AudiStageStatus\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of StatusStatge\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AudiStageStatus'].hasError('required') && (form.controls['AudiStageStatus'].dirty || form.controls['AudiStageStatus'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n      \r\n                </div>\r\n              </div>\r\n            </section>\r\n    \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1A\r\n                  </div>\r\n      \r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Requirement for Stage<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AuditoriumStageReqt\"\r\n                        style=\"max-width: 100% !important;\" multiple=\"true\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of statge\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageReqt'].hasError('required') && (form.controls['AuditoriumStageReqt'].dirty || form.controls['AuditoriumStageReqt'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n      \r\n                </div>\r\n              </div>\r\n            </section>\r\n       -->\r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Area of Stage (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageArea\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 7)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageArea'].hasError('required') && (form.controls['AuditoriumStageArea'].dirty || form.controls['AuditoriumStageArea'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Height of Stage (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"3\" (ionChange)=\"onChangeBuildingData($event.detail.value, 8)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageHeight'].hasError('required') && (form.controls['AuditoriumStageHeight'].dirty || form.controls['AuditoriumStageHeight'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeLevelling\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Area of Levelling Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageAreaLevel\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageAreaLevel'].hasError('required') && (form.controls['AuditoriumStageAreaLevel'].dirty || form.controls['AuditoriumStageAreaLevel'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageAreaLevel.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18 && form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Lights in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumLights\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 10)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumLights'].hasError('required') && (form.controls['AuditoriumLights'].dirty || form.controls['AuditoriumLights'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumLights.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18 && form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Ceiling Fans in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumFans\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 11)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumFans'].hasError('required') && (form.controls['AuditoriumFans'].dirty || form.controls['AuditoriumFans'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumFans.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18 && form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1D\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Does the auditorium have a functional projector  other than in the HM room or classrooms? <span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumPrjtFunc\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumPrjtFunc\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtFunc?true:false}}\"\r\n                            formControlName=\"AuditoriumPrjtFunc\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && form.value.AuditoriumPrjtYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Is the unit functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumPrjtFunc\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumPrjtFunc\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtFunc?true:false}}\"\r\n                            formControlName=\"AuditoriumPrjtFunc\" (ionChange)=\"onToggleChange($event, 13)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n\r\n            <!-- Smart ClassRoom -->\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have a smartboard facility?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomFacilityYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomFacilityYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" formControlName=\"SmartRoomFacilityYn\"\r\n                          checked=\"{{form.value.SmartRoomFacilityYn?true:false}}\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartRoomFacilityYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomDeviceFunYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomDeviceFunYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" formControlName=\"SmartRoomDeviceFunYn\"\r\n                          checked=\"{{form.value.SmartRoomDeviceFunYn?true:false}}\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have computers?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomComputersYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomComputersYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\"  formControlName=\"SmartRoomComputersYn\"\r\n                          checked=\"{{form.value.SmartRoomComputersYn?true:false}}\" (ionChange)=\"onToggleChange($event,18)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.SmartRoomComputersYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Computers<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartRoomFunComp\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 3)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartRoomFunComp'].hasError('required') && (form.controls['SmartRoomFunComp'].dirty || form.controls['SmartRoomFunComp'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartRoomFunComp.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.SmartRoomComputersYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Computers requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartRoomFunCompRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 4)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartRoomFunCompRepair'].hasError('required') && (form.controls['SmartRoomFunCompRepair'].dirty || form.controls['SmartRoomFunCompRepair'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartRoomFunCompRepair.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Functional Tablet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartTabletFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 4)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartTabletFunc'].hasError('required') && (form.controls['SmartTabletFunc'].dirty || form.controls['SmartTabletFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartTabletFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Functional Speakers<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartSpeakerFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 4)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartSpeakerFunc'].hasError('required') && (form.controls['SmartSpeakerFunc'].dirty || form.controls['SmartSpeakerFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartSpeakerFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Functional PA System<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartPaFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 4)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartPaFunc'].hasError('required') && (form.controls['SmartPaFunc'].dirty || form.controls['SmartPaFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartPaFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Is there internet connection<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartInternet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartInternet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\"  formControlName=\"SmartInternet\"\r\n                          checked=\"{{form.value.SmartInternet?true:false}}\" (ionChange)=\"onSelectChange($event.target.value, 13)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 17 && form.value.SmartInternet\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of connection<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SmartInternetConnType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onChangeBuildingData($event, 27)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ConnectionType\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartInternetConnType'].hasError('required') && (form.controls['SmartInternetConnType'].dirty || form.controls['SmartInternetConnType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartInternet && form.value.SmartInternetConnType == '7'\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6A1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please Specify<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                        formControlName=\"SmartInternetConnTypeOthers\" style=\"border-bottom: 1px solid;\" maxlength=\"30\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartInternetConnTypeOthers'].hasError('required') && (form.controls['SmartInternetConnTypeOthers'].dirty || form.controls['SmartInternetConnTypeOthers'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartInternet\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Bandwidth<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartBandwidth\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartBandwidth'].hasError('required') && (form.controls['SmartBandwidth'].dirty || form.controls['SmartBandwidth'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartBandwidth.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartInternet\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Service provider<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SmartServiceProvider\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onChangeBuildingData($event, 26)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of ProviderService\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartServiceProvider'].hasError('required') && (form.controls['SmartServiceProvider'].dirty || form.controls['SmartServiceProvider'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartServiceProvider == '7'\">\r\n              <div ng-repeat=\"activity in timeline\" >\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6C1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please Specify<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                        formControlName=\"SmartServiceProviderOthers\"  \r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"20\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartServiceProviderOthers'].hasError('required') && (form.controls['SmartServiceProviderOthers'].dirty || form.controls['SmartServiceProviderOthers'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n\r\n          </div>\r\n         \r\n      </form>\r\n    </div>\r\n  </ion-row> \r\n\r\n</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"this.status != '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"this.status == '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onGoBack()\">\r\n      <ion-label> Already Synced to Server\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_building_new-roomquestions_new-roomquestions_module_ts-es5.js.map