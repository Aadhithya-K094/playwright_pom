(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_ooscquestions_ooscquestions_module_ts"], {
    /***/
    26401:
    /*!******************************************************************!*\
      !*** ./src/app/pages/oosc/ooscquestions/ooscquestions.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OoscquestionsPageModule": function OoscquestionsPageModule() {
          return (
            /* binding */
            _OoscquestionsPageModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ooscquestions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ooscquestions.page */
      97039);

      var routes = [{
        path: '',
        component: _ooscquestions_page__WEBPACK_IMPORTED_MODULE_1__.OoscquestionsPage
      }];

      var _OoscquestionsPageModule = /*#__PURE__*/_createClass(function OoscquestionsPageModule() {
        _classCallCheck(this, OoscquestionsPageModule);
      });

      _OoscquestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        declarations: [_ooscquestions_page__WEBPACK_IMPORTED_MODULE_1__.OoscquestionsPage],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation]
      })], _OoscquestionsPageModule);
      /***/
    },

    /***/
    97039:
    /*!****************************************************************!*\
      !*** ./src/app/pages/oosc/ooscquestions/ooscquestions.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OoscquestionsPage": function OoscquestionsPage() {
          return (
            /* binding */
            _OoscquestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ooscquestions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ooscquestions.page.html */
      60779);
      /* harmony import */


      var _ooscquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ooscquestions.page.scss */
      82903);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      16030);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442); // import { Geolocation } from '@ionic-native/geolocation/ngx';
      // import { Coordinates , Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


      var _OoscquestionsPage = /*#__PURE__*/function () {
        function OoscquestionsPage(fb, router, uploadService, http, geolocation, emisService, platform, userSessionService, route, camera, alertService, modalCtrl, file, androidPermissions, locationAccuracy, alertController, sqliteDB, networkService) {
          _classCallCheck(this, OoscquestionsPage);

          this.fb = fb;
          this.router = router;
          this.uploadService = uploadService;
          this.http = http;
          this.geolocation = geolocation;
          this.emisService = emisService;
          this.platform = platform;
          this.userSessionService = userSessionService;
          this.route = route;
          this.camera = camera;
          this.alertService = alertService;
          this.modalCtrl = modalCtrl;
          this.file = file;
          this.androidPermissions = androidPermissions;
          this.locationAccuracy = locationAccuracy;
          this.alertController = alertController;
          this.sqliteDB = sqliteDB;
          this.networkService = networkService;
          this.udise = "[0-9]*";
          this.emisNo = "^[0-9]{10}";
          this.noSpecial = "^[a-zA-Z \b]+$";
          this.mobileNo = "^[6-9]{1}[0-9]{9}";
          this.pinNo = "^[0-9]{6}";
          this.aadhar = "^[0-9]{12}";
          this.rollNum = "[a-zA-Z0-9]*";
          this.rationHolderName = "^[a-zA-Z. \b]+$";
          this.instituteName = "[a-zA-Z ,.'-_&]*";
          this.addrFormat = "[a-zA-Z0-9. !@#$%^&*/;:,_`~'-]*";
          this.uidNoFormat = "[a-zA-Z0-9]*";
          this.nidNoFormat = "[a-zA-Z0-9/]*";
          this.doc1Uploaded = false;
          this.changeDrop = false;
          this.imageData = "";
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe('en-US');
          this.noData = 0;
          this.surveydataAllow = 0;
          this.differentlyAbledList = [{
            label: 'Acid Attack victims',
            value: '1'
          }, {
            label: 'Autism',
            value: '2'
          }, {
            label: 'Cerebral Palsy',
            value: '3'
          }, {
            label: 'Chronic Neurological conditsions',
            value: '4'
          }, {
            label: 'Dwarfism',
            value: '5'
          }, {
            label: 'Hearing Impairment',
            value: '6'
          }, {
            label: 'Hemophilia',
            value: '7'
          }, {
            label: 'Intellectual Disability',
            value: '8'
          }, {
            label: 'Leprosy Cured',
            value: '9'
          }, {
            label: 'Locomotor Impairment/Handicap',
            value: '10'
          }, {
            label: 'Mental Illness',
            value: '11'
          }, {
            label: 'Multiple disability',
            value: '12'
          }, {
            label: 'Multiple Sclerosis',
            value: '13'
          }, {
            label: 'Muscular dystrophy',
            value: '14'
          }, {
            label: 'Parkinsons disease',
            value: '15'
          }, {
            label: 'Sickle cell disease',
            value: '16'
          }, {
            label: 'Specific Learning disability',
            value: '17'
          }, {
            label: 'Speech Impairment',
            value: '18'
          }, {
            label: 'Thalassemia',
            value: '19'
          }, {
            label: 'Visual Impairment (Blindness)',
            value: '20'
          }, {
            label: 'Visual Impairment (Low-vision)',
            value: '21'
          }, {
            label: 'Others',
            value: '22'
          }];
          this.covidList = [{
            label: 'Father',
            value: '1'
          }, {
            label: 'Mother',
            value: '2'
          }, {
            label: 'Both',
            value: '3'
          }];
          this.newlyIdentifyList = [{
            label: 'Newly identified',
            value: '1'
          }, {
            label: 'Existing',
            value: '2'
          }];
          this.reason = [{
            label: 'Identified the student and initiated contact',
            value: '101'
          }, {
            label: 'Student coming back to school normally',
            value: '102'
          }, {
            label: 'Student to be moved to common pool',
            value: '103'
          }];
          this.specialNeedTypes = [{
            label: 'Home-based care',
            value: '1'
          }, {
            label: 'School Readiness Programme centres',
            value: '2'
          }];
          this.nomadTypes = [{
            label: 'Boom boom maatu karar',
            value: '1'
          }, {
            label: 'Kazhai koothadigal',
            value: '2'
          }, {
            label: 'Kudu kuduppai karar',
            value: '3'
          }, {
            label: 'Narikuravars',
            value: '4'
          }, {
            label: 'Other types of nomads',
            value: '5'
          }];
          this.reasonfordropoutList = [// { label: 'Boom Boom Maatu Karar (children of Nomads / Gypsies)', value: '23' },
          {
            label: 'HIV infected',
            value: '28'
          }, {
            label: 'Children of Leprosy Affected Parents / Leprosy Affected Children',
            value: '29'
          }, {
            label: 'Children of Migrant Parents',
            value: '20'
          }, {
            label: 'Children of Drug Addicts',
            value: '16'
          }, {
            label: 'Children of Sex Workers',
            value: '17'
          }, {
            label: 'Informal/ Unorganised labourers',
            value: '18'
          }, {
            label: 'Children Affected by Natural Calamity (Tsunami, Cyclone etc)',
            value: '7'
          }, {
            label: 'Children who are Begging',
            value: '11'
          }, {
            label: 'Conflict With Law (Student in Juvenile Home, Observation Home)',
            value: '8'
          }, {
            label: 'Children in Slums',
            value: '9'
          }, {
            label: 'Children Affected by Child Marriages',
            value: '34'
          }, {
            label: 'Children in Difficult Terrain',
            value: '59'
          }, {
            label: 'Child labour - Below 14 years',
            value: '6'
          }, {
            label: 'Gender issue (Girl child, Third gender)',
            value: '60'
          }, {
            label: 'Homeless/ Street Children/ Children Without Shelter/ Children in Bus Stand/ Railway Station',
            value: '61'
          }, {
            label: 'Health Related Issues',
            value: '33'
          }, // { label: 'Kazhai Koothadigal (Children of Nomads / Gypsies)', value: '22' },
          // { label: 'Kudu Kuduppai Karar (Children of Nomads / Gypsies)', value: '24' },
          {
            label: 'Lack of Interest in Coming to School',
            value: '1'
          }, {
            label: 'Lack of awareness of Parents',
            value: '3'
          }, // { label: 'Narikuravars (Children of Nomads / Gypsies)', value: '21' },
          {
            label: 'Orphans',
            value: '26'
          }, // { label: 'Other Types of Nomads (Children of Nomads / Gypsies)', value: '25' },
          {
            label: 'Parents health issues',
            value: '62'
          }, {
            label: 'Rag Pickers',
            value: '12'
          }, {
            label: 'Sibling Care',
            value: '5'
          }, {
            label: 'Social and Cultural issues',
            value: '32'
          }, {
            label: 'Semi-Orphans (Single Parent Child)',
            value: '27'
          }, {
            label: 'Children in Settlement Colony',
            value: '79'
          }, {
            label: 'Children of Nomads / Gypsies',
            value: '80'
          }];
          this.reasonfordropoutListoosc = [{
            label: 'Admitted in Unrecognized Schools',
            value: '77'
          }, {
            label: 'Admitted in Unrecognized Classes (Partially Recognized Schools)',
            value: '78'
          }, {
            label: 'Adolescent Labour (14-18 years)',
            value: '67'
          }, // { label: 'Boom Boom Maatu Karar (children of Nomads / Gypsies)', value: '23' },
          {
            label: 'Bogus Profile',
            value: '48'
          }, {
            label: 'Children Affected by Natural Calamity (Tsunami, Cyclone etc)',
            value: '7'
          }, {
            label: 'Children in Slums',
            value: '9'
          }, {
            label: 'Children who are Begging',
            value: '11'
          }, {
            label: 'Children of Drug Addicts',
            value: '16'
          }, {
            label: 'Children of Sex Workers',
            value: '17'
          }, {
            label: 'Informal/ Unorganised labourers',
            value: '18'
          }, {
            label: 'Children of Migrant Parents',
            value: '20'
          }, {
            label: 'HIV infected',
            value: '28'
          }, {
            label: 'Children of Leprosy Affected Parents / Leprosy Affected Children',
            value: '29'
          }, {
            label: 'Children With Special Needs',
            value: '30'
          }, //{ label: 'Children With Special Needs', value: '31' },
          {
            label: 'Children Affected by Child Marriages',
            value: '34'
          }, {
            label: 'Children in Difficult Terrain',
            value: '59'
          }, {
            label: 'Conflict With Law (Student in Juvenile Home, Observation Home)',
            value: '8'
          }, {
            label: 'Duplicate Entry',
            value: '36'
          }, {
            label: 'Child labour - Below 14 years',
            value: '6'
          }, {
            label: 'Failed in Class XI',
            value: '63'
          }, {
            label: 'Failed in Class X',
            value: '54'
          }, {
            label: 'Fee Not Paid',
            value: '50'
          }, {
            label: 'Gender issue (Girl child, Third gender)',
            value: '60'
          }, {
            label: 'Health Related Issues',
            value: '33'
          }, // { label: 'Homeless / Street children', value: '10' },
          {
            label: 'Homeless/ Street Children/ Children Without Shelter/ Children in Bus Stand/ Railway Station',
            value: '61'
          }, {
            label: 'Home Schooling',
            value: '58'
          }, // { label: 'Kazhai Koothadigal (Children of Nomads / Gypsies)', value: '22' },
          // { label: 'Kudu Kuduppai Karar (Children of Nomads / Gypsies)', value: '24' },
          {
            label: 'Lack of Interest in Coming to School',
            value: '1'
          }, {
            label: 'Lack of awareness of Parents',
            value: '3'
          }, // { label: 'Lack of support from Parents', value: '71' }, // no
          {
            label: 'Migrated to other Block',
            value: '55'
          }, {
            label: 'Migrated to Other Districts',
            value: '53'
          }, {
            label: 'Migrated to Other State',
            value: '51'
          }, {
            label: 'Migrated to Other Country',
            value: '56'
          }, // { label: 'Narikuravars (Children of Nomads / Gypsies)', value: '21' },
          {
            label: 'Open Schooling',
            value: '64'
          }, // { label: 'Other Types of Nomads (Children of Nomads / Gypsies)', value: '25' },
          {
            label: 'Orphans',
            value: '26'
          }, {
            label: 'Parents health issues',
            value: '62'
          }, {
            label: 'Rag Pickers',
            value: '12'
          }, {
            label: 'Semi-Orphans (Single Parent Child)',
            value: '27'
          }, {
            label: 'Social and Cultural issues',
            value: '32'
          }, {
            label: 'Sibling Care',
            value: '5'
          }, {
            label: 'Student Expired',
            value: '37'
          }, {
            label: 'Student Studying in ITI',
            value: '38'
          }, {
            label: 'Student Studying in Polytechnic',
            value: '39'
          }, {
            label: 'Student Studying in Industrial Schools',
            value: '40'
          }, // { label: 'Studying in Catering college', value: '72' }, //no
          // { label: 'Studying courses like Tailoring, Beautician etc', value: '73' }, //no
          // { label: 'Studying in Private vocational course', value: '74' }, //no
          // { label: 'Studying in school but not admitted in EMIS', value: '75' }, // no
          {
            label: 'Student Studying in Private Tutorials / Tuition Centres',
            value: '41'
          }, {
            label: 'Studying in school in neighbouring states',
            value: '68'
          }, {
            label: 'Seasonal Migration',
            value: '69'
          }, {
            label: 'Substance Abuse',
            value: '70'
          }, {
            label: 'Student studying Diploma in Nursing',
            value: '65'
          }, {
            label: 'Student studying Diploma in Medical Laboratory Technology (DMLT)course',
            value: '66'
          }, {
            label: 'Student Over Age',
            value: '46'
          }, {
            label: 'Student Under Age',
            value: '57'
          }, {
            label: 'Students studying in Madrassa',
            value: '76'
          }, {
            label: 'Students Studying in Madapalli/Other Religious Schools',
            value: '49'
          }, {
            label: 'Untraceable/Unable to Contact',
            value: '44'
          }, {
            label: 'XII Completed',
            value: '47'
          }, {
            label: 'Children in Settlement Colony',
            value: '79'
          }, {
            label: 'Children of Nomads / Gypsies',
            value: '80'
          }];
          this.reasonfordropoutListooscadd = [{
            label: 'Admitted in Unrecognized Schools',
            value: '77'
          }, {
            label: 'Admitted in Unrecognized Classes (Partially Recognized Schools)',
            value: '78'
          }, {
            label: 'Adolescent Labour (14-18 years)',
            value: '67'
          }, {
            label: 'Bogus Profile',
            value: '48'
          }, // { label: 'Boom Boom Maatu Karar (children of Nomads / Gypsies)', value: '23' },
          {
            label: 'Children of Drug Addicts',
            value: '16'
          }, {
            label: 'Children of Sex Workers',
            value: '17'
          }, {
            label: 'Informal/ Unorganised labourers',
            value: '18'
          }, {
            label: 'Children who are Begging',
            value: '11'
          }, {
            label: 'Children Affected by Natural Calamity (Tsunami, Cyclone etc)',
            value: '7'
          }, {
            label: 'Conflict With Law (Student in Juvenile Home, Observation Home)',
            value: '8'
          }, {
            label: 'Children in Slums',
            value: '9'
          }, {
            label: 'Children of Migrant Parents',
            value: '20'
          }, {
            label: 'HIV infected',
            value: '28'
          }, {
            label: 'Children of Leprosy Affected Parents / Leprosy Affected Children',
            value: '29'
          }, {
            label: 'Children in Difficult Terrain',
            value: '59'
          }, {
            label: 'Children With Special Needs',
            value: '30'
          }, //{ label: 'Children With Special Needs', value: '31' },
          {
            label: 'Children Affected by Child Marriages',
            value: '34'
          }, {
            label: 'Duplicate Entry',
            value: '36'
          }, {
            label: 'Child labour - Below 14 years',
            value: '6'
          }, {
            label: 'Failed in Class XI',
            value: '63'
          }, {
            label: 'Failed in Class X',
            value: '54'
          }, {
            label: 'Fee Not Paid',
            value: '50'
          }, {
            label: 'Gender issue (Girl child, Third gender)',
            value: '60'
          }, {
            label: 'Home Schooling',
            value: '58'
          }, // { label: 'Homeless / Street children', value: '10' }, // one
          {
            label: 'Health Related Issues',
            value: '33'
          }, {
            label: 'Homeless/ Street Children/ Children Without Shelter/ Children in Bus Stand/ Railway Station',
            value: '61'
          }, // { label: 'Kazhai Koothadigal (Children of Nomads / Gypsies)', value: '22' },
          // { label: 'Kudu Kuduppai Karar (Children of Nomads / Gypsies)', value: '24' },
          {
            label: 'Lack of Interest in Coming to School',
            value: '1'
          }, {
            label: 'Lack of awareness of Parents',
            value: '3'
          }, // { label: 'Lack of support from Parents', value: '71' },
          {
            label: 'Migrated to other Block',
            value: '55'
          }, {
            label: 'Migrated to Other Districts',
            value: '53'
          }, {
            label: 'Migrated to Other State',
            value: '51'
          }, {
            label: 'Migrated to Other Country',
            value: '56'
          }, // { label: 'Narikuravars (Children of Nomads / Gypsies)', value: '21' },
          // { label: 'Other Types of Nomads (Children of Nomads / Gypsies)', value: '25' },
          {
            label: 'Orphans',
            value: '26'
          }, {
            label: 'Open Schooling',
            value: '64'
          }, {
            label: 'Parents health issues',
            value: '62'
          }, {
            label: 'Rag Pickers',
            value: '12'
          }, {
            label: 'Semi-Orphans (Single Parent Child)',
            value: '27'
          }, {
            label: 'Social and Cultural issues',
            value: '32'
          }, {
            label: 'Sibling Care',
            value: '5'
          }, {
            label: 'Seasonal Migration',
            value: '69'
          }, {
            label: 'Substance Abuse',
            value: '70'
          }, {
            label: 'Student Expired',
            value: '37'
          }, {
            label: 'Student Studying in ITI',
            value: '38'
          }, {
            label: 'Student Studying in Polytechnic',
            value: '39'
          }, {
            label: 'Student Studying in Industrial Schools',
            value: '40'
          }, {
            label: 'Student Studying in Private Tutorials / Tuition Centres',
            value: '41'
          }, // { label: 'Studying in Catering college', value: '72' },
          // { label: 'Studying courses like Tailoring, Beautician etc', value: '73' },
          // { label: 'Studying in Private vocational course', value: '74' },
          // { label: 'Studying in school but not admitted in EMIS', value: '75' },
          {
            label: 'Student Over Age',
            value: '46'
          }, {
            label: 'Students studying in Madrassa',
            value: '76'
          }, {
            label: 'Students Studying in Madapalli/Other Religious Schools',
            value: '49'
          }, {
            label: 'Student Under Age',
            value: '57'
          }, {
            label: 'Student studying Diploma in Nursing',
            value: '65'
          }, {
            label: 'Student studying Diploma in Medical Laboratory Technology (DMLT)course',
            value: '66'
          }, {
            label: 'Studying in school in neighbouring states',
            value: '68'
          }, {
            label: 'Untraceable/Unable to Contact',
            value: '44'
          }, {
            label: 'XII Completed',
            value: '47'
          }, {
            label: 'Children in Settlement Colony',
            value: '79'
          }, {
            label: 'Children of Nomads / Gypsies',
            value: '80'
          }];
          this.presentStatusList = [{
            label: 'Continuing in special training ',
            value: '1'
          }, {
            label: 'Dropped out again',
            value: '2'
          }]; // Child labour - Below 14 years: Array<{ 'label': any, 'value': any }> = [
          //   { label: 'Earning compulsion', value: '1' },
          //   { label: 'Domestic Labour', value: '2' }
          // ];

          this.formalSchoolList = [{
            label: 'Direct Enrolment',
            value: '1'
          }, {
            label: 'Special Training Centre',
            value: '2'
          }];
          this.specialTrainingList = [{
            label: 'NRSTC/RSTC',
            value: '1'
          }, {
            label: 'KGBV',
            value: '2'
          }, {
            label: 'ARS',
            value: '3'
          }];
          this.genderList = [{
            label: 'Boy',
            value: '1'
          }, {
            label: 'Girl',
            value: '2'
          }, {
            label: 'NA',
            value: '3'
          }];
          this.communityList = [{
            label: 'SC',
            value: '1'
          }, {
            label: 'ST ',
            value: '2'
          }, {
            label: 'MBC',
            value: '3'
          }, {
            label: 'BC',
            value: '4'
          }, {
            label: 'BC-M',
            value: '5'
          }, {
            label: 'OC',
            value: '6'
          }];
          this.religionList = [{
            label: 'Hindu',
            value: '1'
          }, {
            label: 'Christian ',
            value: '2'
          }, {
            label: 'Muslim',
            value: '3'
          }, {
            label: 'Others',
            value: '4'
          }];
          this.RationCardCategoryList = [{
            label: 'PHHRICE',
            value: '1'
          }, {
            label: 'PHHA ',
            value: '2'
          }, {
            label: 'NPHA or NPHHL',
            value: '3'
          }, {
            label: 'NPHHS',
            value: '4'
          }, {
            label: 'NPHHNC',
            value: '5'
          }];
          this.classList = [{
            label: "I",
            value: 'I'
          }, {
            label: "II",
            value: 'II'
          }, {
            label: "III",
            value: 'III'
          }, {
            label: "IV",
            value: 'IV'
          }, {
            label: "V",
            value: 'V'
          }, {
            label: "VI",
            value: 'VI'
          }, {
            label: "VII",
            value: 'VII'
          }, {
            label: "VIII",
            value: 'VIII'
          }, {
            label: "IX",
            value: 'IX'
          }, {
            label: "X",
            value: 'X'
          }, {
            label: "XI",
            value: 'XI'
          }, {
            label: "XII",
            value: 'XII'
          }, {
            label: "LKG",
            value: 'LKG'
          }, {
            label: "UKG",
            value: 'UKG'
          }, {
            label: "PREKG",
            value: 'PREKG'
          }]; // imageActive: boolean;

          this.mobile_error = false;
          this.emisCheck = false;
          this.cnfmBtn = true;
          this.releventDepartments = [];
        }

        return _createClass(OoscquestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.surveydataAllow = 0;
            this.initialValidator();
            this.getDeptMasterDetailsJson(); // this.checkDepartmentListLocalDB();

            this.checkCountryLocalDB(); // this.getLatLong();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.isBtnDisabled = false;
            this.imageData = "";
            this.active = true;
            this.form.reset();
            this.studentName = '';
            this.studentAddress = '';
            this.studentId = '';
            this.teacherId = '';
            this.schoolId = '';
            this.Id = '';
            this.today = new Date();
            this.todayDate = this.pipe.transform(this.today, 'yyyy-MM-dd');
            this.routeData = this.route.snapshot;
            this.pageId = this.routeData.queryParams.page;
            this.schoolId = this.routeData.queryParams.school;
            this.blockId = this.routeData.queryParams.block;
            this.Id = this.routeData.queryParams.Id;
            this.distId = this.routeData.queryParams.distId;

            if (this.Id == '2') {
              this.pagefun = this.routeData.queryParams.fun;

              if (this.pagefun == 'edit') {
                this.indexID = this.routeData.queryParams.IndxID;
                this.route.queryParams.subscribe(function (params) {
                  _this.studentData = JSON.parse(params['studentDetails']);
                  console.log('this.studentData', _this.studentData);
                  _this.cwsn_student = _this.studentData.cwsn_student;
                  _this.disabilityType = _this.studentData.differently_abled;
                  _this.disabilityName = _this.studentData.diff_abled_reason;
                  _this.ac_year = _this.studentData.ac_year;
                  _this.schoolname = _this.studentData.school_name;
                  _this.studentName = _this.studentData.student_name;
                  _this.fatherName = _this.studentData.father_name;
                  _this.motherName = _this.studentData.mother_name;
                  _this.studEmisNo = _this.studentData.new_emis_id;
                  _this.studentAddress = _this.studentData.Address;
                  _this.studentId = _this.studentData.stud_id;
                  _this.studentId = _this.studentData.school_name;
                  _this.stuClsId = _this.studentData.class_studying_id; // this.removeItinerary('54');
                });
              } else {
                this.indexID = '';
              }
            } else {
              this.route.queryParams.subscribe(function (params) {
                _this.studentData = JSON.parse(params['studentDetails']);
                console.log('this.studentData', _this.studentData);
                _this.cwsn_student = _this.studentData.cwsn_student;
                _this.disabilityType = _this.studentData.differently_abled;
                _this.disabilityName = _this.studentData.diff_abled_reason;
                _this.ac_year = _this.studentData.ac_year;
                _this.schoolname = _this.studentData.school_name;
                _this.studentName = _this.studentData.student_name;
                _this.fatherName = _this.studentData.father_name;
                _this.motherName = _this.studentData.mother_name;
                _this.studEmisNo = _this.studentData.new_emis_id;
                _this.studOldEmisNo = _this.studentData.old_emis_no;
                _this.studentAddress = _this.studentData.Address;
                _this.studentId = _this.studentData.stud_id;
                _this.stuClsId = _this.studentData.class_studying_id;
              });
            }

            if (this.stuClsId) {
              if (this.stuClsId < 10) {
                var res = this.reasonfordropoutListoosc.filter(function (obj) {
                  return obj.value != 54 && obj.value != 63;
                });
                this.reasonfordropoutListoosc = res;
              } else {
                this.reasonfordropoutListoosc = this.reasonfordropoutListooscadd;
              }
            }

            if (this.studentName) {
              if (this.pageId == 1) {
                this.surveydataAllow = 3;
              } else {
                this.surveydataAllow = 2;
              }
            } else {
              this.surveydataAllow = 0;
            }

            this.teacher_id = this.userSessionService.teacher_id();
            this.checkGPSPermission();
          }
        }, {
          key: "surveyCheck",
          value: function surveyCheck() {
            this.surveydataAllow = 1;
          }
        }, {
          key: "goToOoscSurvey",
          value: function goToOoscSurvey() {
            this.isBtnDisabled = false;
            this.surveydataAllow = 2;
          }
        }, {
          key: "onSurveyChange",
          value: function onSurveyChange(event) {
            this.surveyOtherQuestion = event;

            if (this.surveyOtherQuestion == 2) {
              this.surveyform.controls["survey_district"].setValue('');
              this.surveyform.controls["survey_block"].setValue('');
              this.surveyform.controls["survey_local_body"].setValue('');
              this.surveyform.controls["survey_habitation"].setValue('');
              this.surveyform.controls["survey_NEC"].setValue('');
              this.surveyform.controls['survey_district'].updateValueAndValidity();
              this.surveyform.controls['survey_block'].updateValueAndValidity();
              this.surveyform.controls['survey_local_body'].updateValueAndValidity();
              this.surveyform.controls['survey_habitation'].updateValueAndValidity();
              this.surveyform.controls['survey_NEC'].updateValueAndValidity();
              this.isBtnDisabled = true;
              this.alertService.error("You didn't go for the survey today");
              this.surveydataAllow = 0;
            } else {
              this.isBtnDisabled = false;
            }
          }
        }, {
          key: "setFormValues",
          value: function setFormValues() {
            this.form.controls['Latitude'].setValue('');
            this.form.controls['Longitude'].setValue('');
            this.form.controls['DrpOutRsn'].setValue('');
            this.surveyform.controls["survey_district"].setValue('');
            this.surveyform.controls["survey_block"].setValue('');
            this.surveyform.controls["survey_local_body"].setValue('');
            this.surveyform.controls["survey_habitation"].setValue('');
            this.form.controls['dropOutFile'].setValue('0');
            this.form.controls['CameraFile'].setValue('');
            this.form.controls['DAyn'].setValue('');
            this.form.controls['DATyp'].setValue('');
            this.form.controls['parentLive'].setValue(''); // this.form.controls['MigratCountry'].setValue('');
            // this.form.controls['MigratState'].setValue('');
            // this.form.controls['MigratDist'].setValue('');
            // this.form.controls['MigratBlock'].setValue('');

            this.form.controls['DirctSpcl'].setValue('');
            this.form.controls['SplSchl'].setValue('');
            this.form.controls['SplSchlUdise'].setValue('');
            this.form.controls['TeachID'].setValue(this.teacher_id);
            this.form.controls['student_name'].setValue(this.studentName);
            this.form.controls['father_name'].setValue(this.fatherName);
            this.form.controls['mother_name'].setValue(this.motherName);
            this.form.controls['student_emis_no'].setValue(this.studEmisNo);
            this.form.controls['StudID'].setValue(this.studentId);
            this.form.controls['SchlID'].setValue(this.schoolId);
            this.form.controls['ChildLabrYN'].setValue('1');
            this.form.controls['ActSts'].setValue('1'); // this.getAcYr();

            this.form.controls['Type'].setValue(this.Id);

            if (this.Id == 1 || this.Id == 4 || this.Id == 5) {
              this.form.controls['MigrntYN'].setValue('');
              this.form.controls['MigrntYN'].setValidators(null);
              this.form.controls['MigratBound'].setValue('');
              this.form.controls['MigratBound'].setValidators(null);
              this.form.controls['crctAddrYN'].setValue('');
              this.form.controls['crctAddrYN'].setValidators(null);
              this.form.controls['currentAddr'].setValue('');
              this.form.controls['currentAddr'].setValidators(null);
              this.form.controls['parentLive'].setValue('');
              this.form.controls['parentLive'].setValidators(null);
              this.form.controls['MigrntIncmAddrs'].setValidators(null);
              this.form.controls['MigrntIncmAddrs'].setValue("");
              this.form.controls['MobilenoParent'].setValidators(null);
              this.form.controls['MobilenoParent'].setValue("");
              this.form.controls['Class'].setValidators(null);
              this.form.controls['Class'].setValue("");
              this.form.controls['NeverEnrollDistrict'].setValue(this.distId);
              this.form.controls['StudentType'].setValue(1);
              this.form.controls['DAyn'].setValue(this.cwsn_student);
              this.form.controls['DAyn'].setValidators(null);
              this.form.controls['DATyp'].setValue(this.disabilityType);
              this.form.controls['DATypNam'].setValue(this.disabilityName);
              this.form.controls['DATypNam'].setValue(this.disabilityName);
              this.form.controls['AdmsnNo'].setValidators(null);
              this.form.controls['MigratInsti'].setValue('');
            }

            if (this.Id == 2) {
              this.form.controls['MigrntIncmAddrs'].updateValueAndValidity();
              this.form.controls['DAyn'].setValue('');
              this.form.controls['DAyn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
              this.form.controls['DATyp'].setValue('');
              this.form.controls['StudentName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]);
              this.form.controls['Address'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
              this.form.controls['Gender'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
              this.form.controls['MobilenoParent'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]);
              this.form.controls['Class'].setValidators(null);
              this.form.controls['Class'].setValue("");
              this.form.controls['NeverEnrollDistrict'].setValue(this.distId);
              this.form.controls['StudentType'].setValue(2);
              this.form.controls['AdmsnNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.emisNo)]);
            } else {
              this.form.controls['StudentName'].setValidators(null);
              this.form.controls['StudentName'].setValue("");
              this.form.controls['Address'].setValidators(null);
              this.form.controls['Address'].setValue(this.studentAddress);
              this.form.controls['Gender'].setValidators(null);
              this.form.controls['Gender'].setValue("");
              this.form.controls['MobilenoParent'].setValidators(null);
              this.form.controls['MobilenoParent'].setValue("");
              this.form.controls['Class'].setValidators(null);
              this.form.controls['Class'].setValue("");
              this.form.controls['NeverEnrollDistrict'].setValue(this.distId);
              this.form.controls['StudentType'].setValue(1);
              this.form.controls['AdmsnNo'].setValidators(null);
            }

            this.form.controls['help'].setValue('');
            this.form.controls['help'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['relDprt'].setValue('');
            this.form.controls['nomadTyp'].setValue('');
            this.form.controls['DAyn'].updateValueAndValidity();
            this.form.controls['DATyp'].updateValueAndValidity();
            this.form.controls['DATypNam'].updateValueAndValidity();
            this.form.controls['help'].updateValueAndValidity();
            this.form.controls['relDprt'].updateValueAndValidity();
            this.form.controls['StudentName'].updateValueAndValidity();
            this.form.controls['Address'].updateValueAndValidity();
            this.form.controls['Gender'].updateValueAndValidity();
            this.form.controls['MigratInsti'].updateValueAndValidity();
            this.form.controls['MobilenoParent'].updateValueAndValidity();
            this.form.controls['Class'].updateValueAndValidity();
            this.form.controls['NeverEnrollDistrict'].updateValueAndValidity();
            this.form.controls['StudentType'].updateValueAndValidity();
            this.form.controls['AdmsnNo'].updateValueAndValidity();
            this.form.controls['DrpOutRsn'].updateValueAndValidity();
            this.form.controls['nomadTyp'].updateValueAndValidity();

            if (this.Id == 2) {
              this.getBRTEStudentDetails();
            } else {
              this.getStudentData();
            }
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              'flag': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'student_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentName, null),
              'father_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.fatherName, null),
              'mother_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.motherName, null),
              'student_emis_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studEmisNo, null),
              'IndxID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ACYr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'TeachID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.teacher_id, null),
              'SchlID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.schoolId, null),
              'StudID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentId, null),
              'DAyn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.cwsn_student, null),
              'DATyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.disabilityType, null),
              'DATypNam': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.disabilityName, null),
              'DrpOutRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'RatnCrdNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RatnCrdHldrNam': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RatnCardCat': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'splNeedTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'nomadTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'slumCaty': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'OSCclass': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlAddre': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlContact': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dropOutFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('0', null),
              'DropOutDob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'OSCPrsntSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigrntYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratBound': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'crctAddrYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'currentAddr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'parentLive': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratCountry': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratState': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratDist': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratInsti': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'InstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RollNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Department': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'OSCPanchayat': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)),
              'OSCHabitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)),
              'GuardName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'GardAddr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SchlDetl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'EmisNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupStudName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupFatherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupMotherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupDOB': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupAadhar': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dupConfirm': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'NidNO': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UidNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SplSchl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SplSchlUdise': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigrntAddrs': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigrntIncmAddrs': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]),
              'ChildLabrYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ChillabrRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'NeverEnrollDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.distId, null),
              'StudentType': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'PrsntSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'AdmitSchlID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]),
              'AdmsnNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'DirctSpcl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SpclTrngTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ActSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'help': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'relDprt': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Remrks': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]),
              'Latitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Longitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'AdmitSchool': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'DistrictId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Type': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'StudentName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
              'Address': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentAddress, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]),
              'Corporation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)),
              'Habitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)),
              'AadharNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.aadhar)]),
              'Gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'Dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'CommunityId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ReligionId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'FatherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
              'MotherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
              'GuardianName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
              'PhoneNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
              'MobilenoParent': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
              'AlternativeMobileno': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
              'Class': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
              'MigratBlockName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'CameraFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'Status': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null)
            });
            this.surveyform = this.fb.group({
              'student_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'father_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'mother_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'student_emis_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'IndxID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ACYr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'TeachID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.userSessionService.teacher_id()),
              'SchlID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'StudID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'DAyn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'DATyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'DrpOutRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'RatnCrdNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RatnCrdHldrNam': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RatnCardCat': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'slumCaty': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'splNeedTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'nomadTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'OSCclass': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlAddre': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UrSchlContact': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'dropOutFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('0', null),
              'DropOutDob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'OSCPrsntSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigrntYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratBound': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'crctAddrYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'currentAddr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'parentLive': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigratCountry': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'MigratState': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'MigratDist': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'MigratBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'MigratInsti': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'InstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'RollNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Department': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'GuardName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'GardAddr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SchlDetl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'EmisNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'NidNO': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'UidNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SplSchl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'SplSchlUdise': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'MigrntAddrs': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'MigrntIncmAddrs': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'ChildLabrYN': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ChillabrRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'NeverEnrollDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.distId, null),
              'StudentType': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'PrsntSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'AdmitSchlID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'AdmsnNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'DirctSpcl': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'SpclTrngTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'ActSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'help': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'relDprt': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Remrks': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Latitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'Longitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'AdmitSchool': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'DistrictId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'Type': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'StudentName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Address': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              'Corporation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Habitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'OSCPanchayat': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'OSCHabitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'AadharNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'CommunityId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'ReligionId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0),
              'FatherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'MotherName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'GuardianName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'PhoneNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'MobilenoParent': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'AlternativeMobileno': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Class': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'MigratBlockName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'CameraFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
              'Status': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
              'survey_today': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'survey_district': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'survey_block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'survey_local_body': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'survey_habitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
              'survey_NEC': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required)
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    return _context.a(2, new Promise(function (resolve, reject) {
                      _this2.options = {
                        maximumAge: 3000,
                        enableHighAccuracy: true
                      };

                      _this2.geolocation.getCurrentPosition(_this2.options).then(function (pos) {
                        _this2.currentPos = pos;
                        var location = {
                          lat: pos.coords.latitude,
                          lng: pos.coords.longitude,
                          time: new Date()
                        };
                        _this2.lat = location.lat;
                        _this2["long"] = location.lng;
                        resolve(pos);
                      }, function (err) {
                        reject(err.message);
                      });
                    }));
                }
              }, _callee);
            }));
          }
        }, {
          key: "dropdownList",
          value: function dropdownList(distdata) {
            var _this3 = this;

            if (distdata.length > 0) {
              var distDeleteQuery = 'DELETE FROM allDistrictDetails';
              return this.sqliteDB.getDataLocalDB(distDeleteQuery).then(function (data) {
                var sqlArray = [];
                distdata.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allDistrictDetails VALUES (?,?,?,?)', [null, element.disid, element.district_name, element.district_name_tamil]]);
                });

                _this3.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {// this.checkDistrictLocalDB();
                });
              });
            }
          }
        }, {
          key: "onOoscDistrictChange",
          value: function onOoscDistrictChange(fun, eventval, funNam) {
            var _a;

            this.surveyform.controls["survey_block"].setValue('');
            this.surveyform.controls["survey_block"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.surveyform.controls['survey_block'].updateValueAndValidity();
            var block;

            if (fun == 'change') {
              this.changeDrop = true;
              this.form.controls["MigratBlock"].setValue('');

              if (funNam == 'present') {
                this.form.controls["block"].setValue('');
                this.form.controls["AdmitSchool"].setValue('');
                this.form.controls["AdmitSchlID"].setValue(0);
                this.form.controls["AdmsnNo"].setValue('');

                if (this.surveydataAllow == 1 || ((_a = this.form.value.DrpOutRsn) === null || _a === void 0 ? void 0 : _a.value) != '' && this.form.value.DrpOutRsn.value == '75') {
                  if (this.surveydataAllow == 1) {
                    this.form.controls["AdmitSchool"].setValidators(null);
                    this.form.controls["block"].setValidators(null);
                  } else {
                    this.form.controls["AdmitSchool"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                    this.form.controls["block"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  }

                  this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
                  this.form.controls["AdmsnNo"].setValidators(null);
                } else {
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
                  this.form.controls["AdmsnNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.emisNo)]);
                }
              } else {
                if (this.form.value.DrpOutRsn.value != 20) {
                  this.form.controls["MigrntAddrs"].setValue('');
                  this.form.controls["MigrntAddrs"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                } else {
                  if (this.form.value.MigrntYN == 4) {
                    this.form.controls["MigratBlock"].setValue('');
                    this.form.controls["MigratBlock"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  }
                }
              }

              this.checkBlockLocalDB(eventval); // block = this.masterBlockList.filter(tt => tt.district_id == eventval);
            } else {
              this.changeDrop = false;
              eventval = eventval;

              if (funNam == 'present') {
                if (this.form.value.DistrictId != '' && this.form.value.DistrictId != null && this.form.value.DistrictId != undefined) {
                  if (this.form.value.DrpOutRsn.value == '75') {
                    this.form.controls["block"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                    this.form.controls["AdmitSchool"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                    this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
                  } else {
                    this.form.controls["block"].setValidators(null);
                    this.form.controls["AdmitSchool"].setValidators(null);
                    this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
                  }

                  this.checkBlockLocalDB(eventval);
                }
              } else {
                this.checkBlockLocalDB(eventval);
              }
            }

            this.surveyform.controls['survey_block'].updateValueAndValidity();
            this.form.controls['block'].updateValueAndValidity();
            this.form.controls['MigrntAddrs'].updateValueAndValidity();
            this.form.controls['AdmitSchool'].updateValueAndValidity();
            this.form.controls['AdmitSchlID'].updateValueAndValidity();
            this.form.controls['AdmsnNo'].updateValueAndValidity();
          }
        }, {
          key: "onBlockChange",
          value: function onBlockChange(event) {
            var _this4 = this;

            this.surveyform.controls["survey_local_body"].setValue('');
            this.surveyform.controls["survey_local_body"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.surveyform.controls['survey_local_body'].updateValueAndValidity();
            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_habitation.json';
            this.http.get(json_name).subscribe(function (data) {
              _this4.masterBlockList = data.block;
              _this4.masterHabitationList = data.habitation;
              _this4.masterLocalityList = data.localbodycode;

              if (_this4.masterLocalityList.length > 0) {
                var locality = _this4.masterLocalityList.filter(function (tt) {
                  return tt.BlkId == event;
                });

                locality.push({
                  BlkId: "",
                  DistId: "",
                  IndxId: "",
                  LoclBodyCode: "13298",
                  Name: "Other",
                  TamilName: "",
                  ZoneTypId: ""
                });
                _this4.localBodyList;
                _this4.localBodyList = locality.map(function (lb) {
                  return {
                    label: lb.Name,
                    value: lb.LoclBodyCode
                  };
                });

                _this4.localBodyList.sort(function (a, b) {
                  if (a.label < b.label) return -1;
                  if (a.label > b.label) return 1;
                  return 0;
                });
              }
            }); // this.emisService.localbodyListGet(event).subscribe(res => {
            //     if (res.dataStatus == true) {
            //       this.localBodyList = res.result;
            //       this.localBodyList.push({BlkId:"",DistId:"",IndxId: "",LoclBodyCode: "13298",Name:"Other",TamilName:"",ZoneTypId: ""});
            //     }
            //   });
          }
        }, {
          key: "onLocalBodyChange",
          value: function onLocalBodyChange(event) {
            this.localBdy = event;
            this.surveyform.controls["survey_habitation"].setValue('');
            this.surveyform.controls["survey_habitation"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.surveyform.controls['survey_habitation'].updateValueAndValidity();

            if (event == '13298') {
              this.habitationHide = false;
              this.surveyform.controls["survey_habitation"].setValue('92298');
              this.surveyform.controls["survey_habitation"].setValidators(null);
              this.surveyform.controls['survey_habitation'].updateValueAndValidity();
            } else {
              this.habitationHide = true;
            }

            if (this.masterHabitationList.length > 0) {
              var habitation = this.masterHabitationList.filter(function (tt) {
                return tt.LocalBodyId == event;
              });
              habitation.push({
                BlkId: "",
                DistId: "",
                IndxId: "92298",
                LoclBodyCode: "13298",
                Name: "Other",
                TamilName: "",
                ZoneTypId: "92298"
              });
              this.habitationList = habitation.map(function (l) {
                return {
                  label: l.Name,
                  value: l.HabitCode
                };
              });
              this.habitationList.sort(function (a, b) {
                if (a.label < b.label) return -1;
                if (a.label > b.label) return 1;
                return 0;
              });
            }
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            var _this5 = this;

            this.emisService.getStudentData(this.studentId, this.schoolId).subscribe(function (res) {
              var _a, _b;

              if (res.dataStatus == true) {
                _this5.studentData = res.result[0];

                _this5.form.patchValue(_this5.studentData); // nomadTyp


                _this5.myBlock = _this5.studentData.MigratBlock;

                if (((_a = _this5.form.value.DrpOutRsn) === null || _a === void 0 ? void 0 : _a.value) != '' && ((_b = _this5.form.value.DrpOutRsn) === null || _b === void 0 ? void 0 : _b.value) != null && _this5.studentData.MigratDist && (_this5.form.value.DrpOutRsn.value == 55 || _this5.form.value.DrpOutRsn.value == 41 || _this5.form.value.DrpOutRsn.value == 66)) {
                  _this5.onOoscDistrictChange('load', _this5.studentData.MigratDist, 'drop');
                }

                debugger;

                _this5.form.controls['IndxID'].setValue(_this5.studentData.IndxID);

                _this5.form.controls['Address'].setValue(_this5.studentAddress);

                var dropOutIndex = _this5.reasonfordropoutListoosc.find(function (o) {
                  return o.value == _this5.studentData.DrpOutRsn;
                });

                _this5.form.controls['DAyn'].setValue(_this5.cwsn_student);

                _this5.form.controls['DATyp'].setValue(_this5.disabilityType);

                _this5.form.controls['DATypNam'].setValue(_this5.disabilityName);

                _this5.form.controls['help'].setValue(_this5.studentData.help); // this.form.controls['relDprt'].setValue(this.studentData.relDprt);


                _this5.form.controls['DrpOutRsn'].setValue(dropOutIndex);

                debugger;

                _this5.dropOutEventChange(dropOutIndex, 'load');

                _this5.form.controls['MigrntAddrs'].setValue(_this5.studentData.MigrntAddrs);

                var instiIndex = _this5.reasonfordropoutListoosc.find(function (o) {
                  return o.value == _this5.studentData.MigratInsti;
                });

                if (_this5.studentData.DistrictId != '' && _this5.studentData.DistrictId != null && _this5.studentData.DistrictId != 0) {
                  _this5.form.controls['DistrictId'].setValue({
                    value: _this5.studentData.DistrictId,
                    label: _this5.studentData.PresentDistrictName
                  });

                  _this5.onOoscDistrictChange('load', _this5.studentData.DistrictId, 'present');
                }

                if (_this5.studentData.PresentBlckId != '' && _this5.studentData.PresentBlckId != null) {
                  _this5.form.controls['block'].setValue({
                    value: _this5.studentData.PresentBlckId,
                    label: _this5.studentData.PresentBlckName
                  });

                  _this5.onOoscBlockChange(_this5.studentData.PresentBlckId, 'load');
                }

                if (_this5.studentData.PresentSchoolId != '' && _this5.studentData.PresentSchoolId != null) {
                  _this5.form.controls['AdmitSchool'].setValue({
                    value: _this5.studentData.PresentSchoolId,
                    label: _this5.studentData.PresentSchoolName
                  });
                } else {
                  _this5.form.controls['AdmitSchool'].setValue('');
                }

                if (_this5.studentData.help != '' && _this5.studentData.help != null && _this5.studentData.help != undefined && _this5.studentData.help != 0) {
                  _this5.onHelpChange(_this5.studentData.help, 'load');
                }

                if (_this5.studentData.dropOutFile != '' && _this5.studentData.dropOutFile != null && _this5.studentData.dropOutFile != undefined && _this5.studentData.dropOutFile != 0) {
                  _this5.form.controls["dropOutFile"].setValue(_this5.studentData.dropOutFile);

                  _this5.form.controls['dropOutFile'].updateValueAndValidity();

                  _this5.imageKey = _this5.studentData.dropOutFile;
                  _this5.doc1Uploaded = true;

                  _this5.viewDoc('show');
                }

                if (_this5.studentData.CameraFile != '' && _this5.studentData.CameraFile != null && _this5.studentData.CameraFile != undefined) {
                  _this5.form.controls["CameraFile"].setValue(_this5.studentData.CameraFile);

                  _this5.form.controls['CameraFile'].updateValueAndValidity();

                  _this5.cameraKey = _this5.studentData.CameraFile;

                  _this5.viewPic('show');
                } else {
                  _this5.imageData = '';
                } // this.myBlock = this.studentData.MigratBlock;


                _this5.form.updateValueAndValidity();
              } else {
                _this5.active = true;
              }
            });
          }
        }, {
          key: "onOoscInstiChange",
          value: function onOoscInstiChange(event, fun) {
            if (event.value.value != '' && event.value.value != null && event.value.value != undefined) {
              this.form.controls["RollNum"].setValue('');
              this.form.controls["Department"].setValue('');
              this.form.controls["RollNum"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.rollNum)]);
              this.form.controls["Department"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);
            } else {
              this.form.controls["RollNum"].setValue('');
              this.form.controls["RollNum"].setValidators(null);
              this.form.controls["Department"].setValue('');
              this.form.controls["Department"].setValidators(null);
            }

            this.form.controls['RollNum'].updateValueAndValidity();
            this.form.controls['Department'].updateValueAndValidity();
          }
        }, {
          key: "dropOutEventChange",
          value: function dropOutEventChange(eventValue, fun) {
            var _this6 = this;

            // this.releventDepartments = 
            var deptFilter = this.deptList.filter(function (tt) {
              return tt.key == eventValue.value;
            });

            if (deptFilter.length > 0) {
              this.releventDepartments = deptFilter[0].value;

              if (this.releventDepartments.length == 1 && this.releventDepartments[0].related_dept == '') {
                this.releventDepartments = [];
              } else {
                this.releventDepartments = deptFilter[0].value;
              }
            } else {
              this.releventDepartments = [];
            }

            this.onHelpChange(this.studentData.help, 'change'); // console.log('releventDepartments', this.releventDepartments) //   const key = 'reason_id';
            // console.log('dropOutEventChange', eventValue, 'fun', fun)

            if (eventValue != undefined) {
              console.log('inside not undefined'); // if (eventValue.value == 6 || eventValue.value == 7 || eventValue.value == 9 || eventValue.value == 11 || eventValue.value == 17 || eventValue.value == 18 || eventValue.value == 21 || eventValue.value == 22 || eventValue.value == 23 || eventValue.value == 24 || eventValue.value == 25 || eventValue.value == 26 || eventValue.value == 27 || eventValue.value == 28 || eventValue.value == 29 || eventValue.value == 30 || eventValue.value == 50) {

              if (eventValue.value == 6 || eventValue.value == 7 || eventValue.value == 9 || eventValue.value == 11 || eventValue.value == 17 || eventValue.value == 18 || eventValue.value == 26 || eventValue.value == 27 || eventValue.value == 28 || eventValue.value == 29 || eventValue.value == 30 || eventValue.value == 50 || eventValue.value == 62 || eventValue.value == 79) {
                console.log('inside eventValue 30,31', eventValue);

                if (fun == 'change') {
                  this.form.controls["splNeedTyp"].setValue(''); // this.form.controls["nomadTyp"].setValue('');          

                  this.form.controls["RatnCrdNum"].setValue('');
                  this.form.controls["RatnCrdHldrNam"].setValue('');
                  this.form.controls["RatnCardCat"].setValue('');
                }

                if (eventValue.value == 30 || eventValue.value == 31) {
                  this.form.controls["splNeedTyp"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]);
                } else {
                  this.form.controls["splNeedTyp"].setValidators(null);
                } // if (fun == 'change') {
                //   this.form.controls["slumCaty"].setValue('');
                // }
                // this.form.controls["slumCaty"].setValidators([Validators.required]);


                this.form.controls["RatnCrdNum"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.aadhar)]);
                this.form.controls["RatnCrdHldrNam"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[a-zA-Z. ]*')]);
                this.form.controls["RatnCardCat"].setValidators(null);

                if (eventValue.value == 26) {
                  console.log('inside condition 26');

                  if (fun == 'change') {
                    this.form.controls["GuardName"].setValue('');
                    this.form.controls["GardAddr"].setValue('');
                  } else {
                    this.form.controls['GuardName'].setValue(this.studentData.GuardName);
                    this.form.controls['GardAddr'].setValue(this.studentData.GardAddr);
                  }

                  this.form.controls["GuardName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[a-zA-Z. ]*')]);
                  this.form.controls["GardAddr"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                } else {
                  this.form.controls["GuardName"].setValue('');
                  this.form.controls["GuardName"].setValidators(null);
                  this.form.controls["GardAddr"].setValue('');
                  this.form.controls["GardAddr"].setValidators(null);
                }

                if (eventValue.value == 27) {
                  console.log('inside condition 27');

                  if (fun == 'change') {
                    this.form.controls["parentLive"].setValue('');
                  } else {
                    this.form.controls['parentLive'].setValue(this.studentData.parentLive);
                  }

                  this.form.controls["parentLive"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                } else {
                  this.form.controls["parentLive"].setValidators(null);
                }

                if (eventValue.value == 79) {
                  console.log('inside condition 79');
                  this.form.controls["slumCaty"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]);

                  if (fun == 'change') {
                    this.form.controls["slumCaty"].setValue('');
                  } else {
                    this.form.controls['slumCaty'].setValue(this.studentData.slumCaty);
                  }
                } else {
                  this.form.controls["slumCaty"].setValidators(null);
                } // if(eventValue.value == 30 || eventValue.value == 31) {
                //   this.form.controls["splNeedTyp"].setValidators([Validators.required]);
                // } else {
                //   this.form.controls["splNeedTyp"].setValidators(null);
                // }


                if (this.form.value.DAyn == '2') {
                  // this.form.controls['NidNO'].setValue('');
                  // this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                this.form.controls['relDprt'].setValue('');

                if (this.form.value.help == '2') {
                  // this.form.controls['NidNO'].setValue('');
                  // this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['relDprt'].setValidators(null);
                } else {
                  this.form.controls['relDprt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                }

                if (this.form.value.DAyn == '1' && this.Id == '2' || eventValue.value == 30) {
                  console.log('inside condition 30');

                  if (fun == 'change') {
                    this.form.controls["NidNO"].setValue('');
                    this.form.controls["UidNo"].setValue('');
                  } else {
                    this.form.controls['NidNO'].setValue(this.studentData.NidNO);
                    this.form.controls['UidNo'].setValue(this.studentData.UidNo);
                  }

                  this.form.controls["NidNO"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.nidNoFormat)]);
                  this.form.controls["UidNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)]);
                } else {
                  console.log('inside condition else 30');
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required); // this.form.controls["slumCaty"].setValidators(null);
                // this.form.controls['slumCaty'].setValue('');

                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 36) {
                console.log('inside 36');
                this.image1 = '';
                this.imgext = '';

                if (fun == 'change') {
                  this.form.controls["SchlDetl"].setValue('');
                  this.form.controls["EmisNo"].setValue('');
                } else {
                  if (this.form.value.EmisNo != '' && this.form.value.EmisNo != null) {
                    this.checkEmisNo();
                  }

                  this.form.controls['SchlDetl'].setValue(this.studentData.SchlDetl);
                  this.form.controls['EmisNo'].setValue(this.studentData.EmisNo);
                }

                this.form.controls["SchlDetl"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["EmisNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.emisNo)]);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 37 || eventValue.value == 47) {
                console.log('inside 37, 47');
                this.image1 = '';
                this.imgext = '';

                if (eventValue.value == 37) {
                  this.form.controls["CameraFile"].setValidators(null);
                } else {
                  this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                }

                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 38 || eventValue.value == 39) {
                console.log('inside 38,39');

                if (eventValue.value == 38) {
                  this.type = 2;
                } else if (eventValue.value == 39) {
                  this.type = 1;
                } else {
                  this.type = 3;
                } // this.getInstitute(this.type, fun);


                this.checkInstiLocalDB(this.type, fun);
                this.form.controls["MigratInsti"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 40 || eventValue.value == 65 || eventValue.value == 76) {
                console.log('inside 40');
                this.form.controls["InstName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);

                if (eventValue.value == 40) {
                  this.form.controls["RollNum"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.rollNum)]);
                  this.form.controls["Department"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);
                } else {
                  this.form.controls["RollNum"].setValidators(null);
                  this.form.controls["Department"].setValidators(null);
                }

                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 20) {
                console.log('inside 20');
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigrntYN"].setValue('');

                if (fun == 'change') {// this.form.controls["MigrntYN"].setValue('');
                } else {
                  this.form.controls['MigrntYN'].setValue(this.studentData.MigrntYN);
                }

                this.form.controls["MigrntYN"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }

                this.onMigrantChange(this.studentData.MigrntYN, 'load');
              } else if (eventValue.value == 56) {
                console.log('inside 56');

                if (fun == 'change') {
                  this.form.controls["MigratCountry"].setValue('');
                  this.form.controls["MigrntAddrs"].setValue('');
                } else {
                  this.form.controls['MigratCountry'].setValue({
                    value: this.studentData.MigratCountry,
                    label: this.studentData.MigratCountryName
                  });
                }

                this.checkCountryLocalDB();
                this.form.controls["MigratCountry"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 51) {
                console.log('inside condition 51', fun);
                this.checkStateLocalDB();

                if (fun == 'change') {
                  console.log('inside change 51');
                  this.form.controls["MigratState"].setValue('');
                  this.form.controls["MigrntAddrs"].setValue('');
                } else {
                  console.log('inside load 51');
                  this.form.controls['MigratState'].setValue({
                    value: this.studentData.MigratState,
                    label: this.studentData.MigratStateName
                  });
                }

                this.form.controls["MigratState"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigrntAddrs"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 53) {
                console.log('inside 53');
                this.checkDistrictLocalDB();

                if (fun == 'change') {
                  this.form.controls["MigratDist"].setValue('');
                  this.form.controls["MigrntAddrs"].setValue('');
                } else {
                  this.form.controls['MigratDist'].setValue({
                    value: this.studentData.MigratDist,
                    label: this.studentData.MigratDistName
                  });
                }

                this.form.controls["MigratDist"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigrntAddrs"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 55) {
                console.log('inside 55');

                if (fun == 'change') {
                  this.form.controls["MigratDist"].setValue('');
                  this.form.controls["MigratBlock"].setValue('');
                  this.form.controls["MigrntAddrs"].setValue('');
                } else {
                  this.form.controls['MigratDist'].setValue({
                    value: this.studentData.MigratDist,
                    label: this.studentData.MigratDistName
                  });
                  this.form.controls['MigratBlock'].setValue({
                    value: this.studentData.MigratBlock,
                    label: this.studentData.MigratBlockName
                  });
                }

                this.form.controls["MigratDist"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigratBlock"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigrntAddrs"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 41 || eventValue.value == 66) {
                console.log('inside 55');

                if (fun == 'change') {
                  this.form.controls["MigratDist"].setValue('');
                  this.form.controls["MigratBlock"].setValue('');
                  this.form.controls["InstName"].setValue('');
                } else {
                  this.form.controls['MigratDist'].setValue({
                    value: this.studentData.MigratDist,
                    label: this.studentData.MigratDistName
                  });
                  this.form.controls['MigratBlock'].setValue({
                    value: this.studentData.MigratBlock,
                    label: this.studentData.MigratBlockName
                  });
                }

                this.form.controls["MigratDist"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigratBlock"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["InstName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 46 || eventValue.value == 57) {
                console.log('inside 46,57');
                this.image1 = '';
                this.imgext = '';
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["DropOutDob"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 58) {
                console.log('inside 58');

                if (fun == 'change') {
                  console.log('Inside change 58');
                  this.form.controls["crctAddrYN"].setValue('');
                } else {
                  console.log('Inside load 58');
                  this.form.controls['crctAddrYN'].setValue(this.studentData.crctAddrYN);
                  this.onCrctAddrChange(this.studentData.crctAddrYN, fun);
                }

                this.form.controls["crctAddrYN"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required); // this.form.controls["currentAddr"].setValue('');
                // this.form.controls["currentAddr"].setValidators(null);

                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 68) {
                console.log('inside 68');

                if (fun == 'change') {
                  this.form.controls["UrSchlName"].setValue('');
                  this.form.controls["OSCclass"].setValue('');
                  this.form.controls["MigratState"].setValue('');
                } else {
                  this.form.controls['MigratState'].setValue({
                    value: this.studentData.MigratState,
                    label: this.studentData.MigratStateName
                  });
                }

                this.form.controls["UrSchlName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);
                this.form.controls["OSCclass"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigratState"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null); // this.form.controls["MigratState"].setValue('');
                // this.form.controls["MigratState"].setValidators(null);

                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);
                // this.form.controls["UrSchlName"].setValue('');
                // this.form.controls["UrSchlName"].setValidators(null);
                // this.form.controls["OSCclass"].setValue('');
                // this.form.controls["OSCclass"].setValidators(null);

                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 75) {
                console.log('inside 75');

                if (fun == 'change') {
                  this.form.controls["DistrictId"].setValue('');
                  this.form.controls["block"].setValue('');
                  this.form.controls["AdmitSchool"].setValue('');
                  this.form.controls["AdmitSchlID"].setValue(0);
                } else {
                  this.form.controls['DistrictId'].setValue({
                    value: this.studentData.DistrictId,
                    label: this.studentData.PresentDistrictName
                  });
                  this.form.controls['block'].setValue({
                    value: this.studentData.PresentBlckId,
                    label: this.studentData.PresentBlckId
                  });
                  this.form.controls['AdmitSchool'].setValue({
                    value: this.studentData.PresentSchoolId,
                    label: this.studentData.PresentSchoolId
                  });
                  this.form.controls['AdmitSchlID'].setValue(this.studentData.AdmitSchlID);
                }

                this.form.controls["DistrictId"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["block"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["AdmitSchool"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["AdmitSchlID"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }
              } else if (eventValue.value == 77 || eventValue.value == 78) {
                console.log('inside 77,78');

                if (fun == 'change') {
                  this.form.controls["UrSchlName"].setValue('');
                  this.form.controls["UrSchlAddre"].setValue('');
                  this.form.controls["UrSchlContact"].setValue('');
                }

                this.form.controls["UrSchlName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.instituteName)]);
                this.form.controls["UrSchlAddre"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
                this.form.controls["UrSchlContact"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 59) {
                console.log('inside 59');

                if (fun == 'change') {
                  this.form.controls["OSCPanchayat"].setValue('');
                  this.form.controls["OSCHabitation"].setValue('');
                }

                this.form.controls["OSCPanchayat"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)]);
                this.form.controls["OSCHabitation"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)]);
                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["RatnCrdNum"].setValue(''); // this.form.controls["RatnCrdNum"].setValidators(null);

                this.form.controls["RatnCrdHldrNam"].setValue(''); // this.form.controls["RatnCrdHldrNam"].setValidators(null);

                this.form.controls["RatnCardCat"].setValue(''); // this.form.controls["RatnCardCat"].setValidators(null);

                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["slumCaty"].setValue('');
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["nomadTyp"].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else if (eventValue.value == 80) {
                console.log('inside 80');

                if (fun == 'change') {
                  this.form.controls["nomadTyp"].setValue('');
                  this.form.controls["RatnCrdNum"].setValue('');
                  this.form.controls["RatnCrdHldrNam"].setValue('');
                  this.form.controls["RatnCardCat"].setValue('');
                } else {
                  console.log('load 80');
                  var nomadIndex = this.nomadTypes.find(function (o) {
                    return o.value == _this6.studentData.nomadTyp;
                  });
                  console.log('nomadIndex', nomadIndex);
                  this.form.controls['nomadTyp'].setValue(nomadIndex); // this.form.controls['nomadTyp'].setValue({ value: this.studentData.nomadTyp, label: this.studentData.MigratDistName });
                }

                this.form.controls["RatnCrdNum"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.aadhar)]);
                this.form.controls["RatnCrdHldrNam"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[a-zA-Z. ]*')]);
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["nomadTyp"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                this.form.controls["MigratDist"].setValue('');
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null); // this.form.controls["RatnCrdNum"].setValue('');
                // this.form.controls["RatnCrdNum"].setValidators(null);
                // this.form.controls["RatnCrdHldrNam"].setValue('');
                // this.form.controls["RatnCrdHldrNam"].setValidators(null);
                // this.form.controls["RatnCardCat"].setValue('');
                // this.form.controls["RatnCardCat"].setValidators(null);

                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              } else {
                console.log('inside else');
                this.form.controls["RatnCrdNum"].setValue('');
                this.form.controls["RatnCrdNum"].setValidators(null);
                this.form.controls["RatnCrdHldrNam"].setValue('');
                this.form.controls["RatnCrdHldrNam"].setValidators(null);
                this.form.controls["RatnCardCat"].setValue('');
                this.form.controls["RatnCardCat"].setValidators(null);
                this.form.controls["splNeedTyp"].setValue('');
                this.form.controls["splNeedTyp"].setValidators(null);
                this.form.controls["dropOutFile"].setValue('');
                this.form.controls["dropOutFile"].setValidators(null);
                this.form.controls["DropOutDob"].setValue('');
                this.form.controls["DropOutDob"].setValidators(null);
                this.form.controls["MigratCountry"].setValue('');
                this.form.controls["MigratCountry"].setValidators(null);
                this.form.controls["MigratState"].setValue('');
                this.form.controls["MigratState"].setValidators(null);
                this.form.controls["MigratInsti"].setValue('');
                this.form.controls["MigratInsti"].setValidators(null);
                this.form.controls["MigratDist"].setValue('');
                ;
                this.form.controls["MigratDist"].setValidators(null);
                this.form.controls["MigratBlock"].setValue('');
                this.form.controls["MigratBlock"].setValidators(null);
                this.form.controls["InstName"].setValue('');
                this.form.controls["InstName"].setValidators(null);
                this.form.controls["RollNum"].setValue('');
                this.form.controls["RollNum"].setValidators(null);
                this.form.controls["OSCPanchayat"].setValue('');
                this.form.controls["OSCPanchayat"].setValidators(null);
                this.form.controls["OSCHabitation"].setValue('');
                this.form.controls["OSCHabitation"].setValidators(null);
                this.form.controls["Department"].setValue('');
                this.form.controls["Department"].setValidators(null);
                this.form.controls["MigrntAddrs"].setValue('');
                this.form.controls["MigrntAddrs"].setValidators(null);
                this.form.controls["GuardName"].setValue('');
                this.form.controls["GuardName"].setValidators(null);
                this.form.controls["GardAddr"].setValue('');
                this.form.controls["GardAddr"].setValidators(null);
                this.form.controls["SchlDetl"].setValue('');
                this.form.controls["SchlDetl"].setValidators(null);
                this.form.controls["EmisNo"].setValue('');
                this.form.controls["EmisNo"].setValidators(null);
                this.form.controls["MigrntYN"].setValue('');
                this.form.controls["MigrntYN"].setValidators(null);
                this.form.controls["MigratBound"].setValue('');
                this.form.controls["MigratBound"].setValidators(null);
                this.form.controls["crctAddrYN"].setValue('');
                this.form.controls["crctAddrYN"].setValidators(null);
                this.form.controls["currentAddr"].setValue('');
                this.form.controls["currentAddr"].setValidators(null);
                this.form.controls["parentLive"].setValue('');
                this.form.controls["parentLive"].setValidators(null);
                this.form.controls["CameraFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["UrSchlName"].setValue('');
                this.form.controls["UrSchlName"].setValidators(null);
                this.form.controls["OSCclass"].setValue('');
                this.form.controls["OSCclass"].setValidators(null);
                this.form.controls["UrSchlAddre"].setValue('');
                this.form.controls["UrSchlAddre"].setValidators(null);
                this.form.controls["UrSchlContact"].setValue('');
                this.form.controls["UrSchlContact"].setValidators(null);
                this.form.controls["slumCaty"].setValidators(null);
                this.form.controls['slumCaty'].setValue('');
                this.form.controls['nomadTyp'].setValue('');
                this.form.controls["nomadTyp"].setValidators(null);
                this.form.controls['relDprt'].setValue(''); // this.form.controls['relDprt'].setValidators(null);

                if (this.form.value.DAyn == '2') {
                  this.form.controls['NidNO'].setValue('');
                  this.form.controls['NidNO'].setValidators(null);
                  this.form.controls['UidNo'].setValue('');
                  this.form.controls['UidNo'].setValidators(null);
                }

                if (this.Id == 1) {
                  this.form.controls["DistrictId"].setValidators(null);
                  this.form.controls["block"].setValidators(null);
                  this.form.controls["AdmitSchool"].setValidators(null);
                  this.form.controls["AdmitSchlID"].setValidators(null);
                }
              }
            }

            this.form.controls["RatnCrdNum"].updateValueAndValidity();
            this.form.controls["RatnCrdHldrNam"].updateValueAndValidity();
            this.form.controls["RatnCardCat"].updateValueAndValidity();
            this.form.controls["splNeedTyp"].updateValueAndValidity();
            this.form.controls["dropOutFile"].updateValueAndValidity();
            this.form.controls["DropOutDob"].updateValueAndValidity();
            this.form.controls["MigratCountry"].updateValueAndValidity();
            this.form.controls["MigratState"].updateValueAndValidity();
            this.form.controls["MigratInsti"].updateValueAndValidity();
            this.form.controls["MigratDist"].updateValueAndValidity();
            this.form.controls["MigratBlock"].updateValueAndValidity();
            this.form.controls["RollNum"].updateValueAndValidity();
            this.form.controls["OSCPanchayat"].updateValueAndValidity();
            this.form.controls["OSCHabitation"].updateValueAndValidity();
            this.form.controls["Department"].updateValueAndValidity();
            this.form.controls["MigrntAddrs"].updateValueAndValidity();
            this.form.controls["InstName"].updateValueAndValidity();
            this.form.controls["GuardName"].updateValueAndValidity();
            this.form.controls["GardAddr"].updateValueAndValidity();
            this.form.controls["EmisNo"].updateValueAndValidity();
            this.form.controls["MigrntYN"].updateValueAndValidity();
            this.form.controls["MigratBound"].updateValueAndValidity();
            this.form.controls["crctAddrYN"].updateValueAndValidity();
            this.form.controls["currentAddr"].updateValueAndValidity();
            this.form.controls["parentLive"].updateValueAndValidity();
            this.form.controls["SchlDetl"].updateValueAndValidity();
            this.form.controls["NidNO"].updateValueAndValidity();
            this.form.controls["UidNo"].updateValueAndValidity();
            this.form.controls["CameraFile"].updateValueAndValidity();
            this.form.controls["DistrictId"].updateValueAndValidity();
            this.form.controls["block"].updateValueAndValidity();
            this.form.controls["AdmitSchool"].updateValueAndValidity();
            this.form.controls["AdmitSchlID"].updateValueAndValidity();
            this.form.controls["AdmitSchlID"].updateValueAndValidity(); // this.form.controls["AdmitSchool"].updateValueAndValidity();

            this.form.controls["UrSchlName"].updateValueAndValidity();
            this.form.controls["OSCclass"].updateValueAndValidity();
            this.form.controls["UrSchlAddre"].updateValueAndValidity();
            this.form.controls["UrSchlContact"].updateValueAndValidity();
            this.form.controls["slumCaty"].updateValueAndValidity();
            this.form.controls["nomadTyp"].updateValueAndValidity();
            this.form.controls["relDprt"].updateValueAndValidity();
          }
        }, {
          key: "onOoscBlockChange",
          value: function onOoscBlockChange(eventval, fun) {
            var _this7 = this;

            if (fun == 'change') {
              this.form.controls['AdmitSchool'].setValue('');
              this.form.controls['AdmitSchlID'].setValue(0);

              if (this.form.value.DrpOutRsn.value == '75') {
                this.form.controls["AdmitSchool"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
              } else {
                this.form.controls["AdmitSchool"].setValidators(null);
                this.form.controls["AdmitSchlID"].setValidators(null);
              }
            } else {
              if (this.form.value.DrpOutRsn.value == '75') {
                this.form.controls['AdmitSchool'].setValue({
                  value: this.studentData.PresentSchoolId,
                  label: this.studentData.PresentSchoolName
                });
                this.form.controls['AdmitSchlID'].setValue(this.studentData.AdmitSchlID);
                this.form.controls["AdmitSchool"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
              } else {
                this.form.controls["AdmitSchool"].setValidators(null);
                this.form.controls["AdmitSchlID"].setValidators(null);
              }
            }

            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/master_json/' + this.form.value.block.value + '-blkwise_school.json';
            this.http.get(json_name).subscribe(function (data) {
              if (data) {
                _this7.masterSchoolList = data;

                if (_this7.masterSchoolList.length > 0) {
                  if (_this7.form.value.block != '' && _this7.form.value.block != null && _this7.form.value.block != undefined) {
                    school = _this7.masterSchoolList.filter(function (tt) {
                      return tt.block_id == eventval;
                    });
                  }

                  var school;

                  if (_this7.masterSchoolList) {
                    if (_this7.masterSchoolList.length > 0) {
                      if (_this7.form.value.block != '' && _this7.form.value.block != null && _this7.form.value.block != undefined) {
                        school = _this7.masterSchoolList.filter(function (tt) {
                          return tt.block_id == eventval;
                        });
                      } else {
                        school = _this7.masterSchoolList;
                      }

                      _this7.ooscSchoolList = school.map(function (l) {
                        return {
                          label: l.school_name,
                          value: l.school_id,
                          udise: l.udise_code
                        };
                      });

                      _this7.ooscSchoolList.sort(function (a, b) {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                      });
                    }
                  }
                }
              }
            });
            this.form.controls["AdmitSchool"].updateValueAndValidity();
            this.form.controls["AdmitSchlID"].updateValueAndValidity();
          }
        }, {
          key: "onOoscSchoolChange",
          value: function onOoscSchoolChange(event) {
            console.log('event', event);

            if (this.form.value.block.value) {
              var udise = event.value.udise;

              if (event != '') {
                this.form.controls['AdmitSchlID'].setValue(udise);
              } else {
                this.form.controls['AdmitSchlID'].setValue(0);
              }
            }

            this.form.controls["AdmitSchlID"].updateValueAndValidity();
          }
        }, {
          key: "onMigratBoundChange",
          value: function onMigratBoundChange(eventVal, fun) {
            if (eventVal != '' && eventVal != null && eventVal == 1) {
              if (fun == 'change') {
                this.form.controls['MigrntYN'].setValue('');
              } else {
                this.form.controls['MigrntYN'].setValue({
                  value: this.studentData.MigrntYN,
                  label: this.studentData.MigrntYN
                });
              }
            } else {
              this.form.controls['MigrntYN'].setValue('');
            }
          }
        }, {
          key: "onCrctAddrChange",
          value: function onCrctAddrChange(eventVal, fun) {
            console.log('onCrctAddrChange', eventVal, fun);

            if (eventVal != '' && eventVal != null && eventVal == 2) {
              console.log('inside eventVal 2');
              this.form.controls["currentAddr"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);

              if (fun == 'change') {
                console.log('inside eventVal change');
                this.form.controls['currentAddr'].setValue('');
              } else {
                console.log('inside eventVal load');
                this.form.controls['currentAddr'].setValue(this.studentData.currentAddr);
              }
            } else {
              console.log('inside eventVal 1');
              this.form.controls["currentAddr"].setValidators(null);
              this.form.controls['currentAddr'].setValue('');
            }
          }
        }, {
          key: "onDiffAbleChange",
          value: function onDiffAbleChange(eventVal, fun) {
            var _this8 = this;

            var _a, _b;

            if (eventVal != '' && eventVal != null && eventVal == 1) {
              if (fun == 'change') {
                this.form.controls['DATyp'].setValue('');
              } else {
                if (this.studentData.DATyp != '' && this.studentData.DATyp != null) {
                  var daTypIndex = this.differentlyAbledList.find(function (o) {
                    return o.value == _this8.studentData.DATyp;
                  });
                  this.form.controls['DATyp'].setValue(daTypIndex);
                } else {
                  this.form.controls['DATyp'].setValue('');
                }
              }

              this.form.controls['DATyp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            } else {
              this.form.controls['DATyp'].setValue('');
              this.form.controls['DATyp'].setValidators(null);
            }

            if (eventVal == 1 || ((_a = this.form.value.DrpOutRsn) === null || _a === void 0 ? void 0 : _a.value) == '' && ((_b = this.form.value.DrpOutRsn) === null || _b === void 0 ? void 0 : _b.value) == null && (this.form.value.DrpOutRsn.value == 30 || this.form.value.DrpOutRsn.value == 31)) {
              this.form.controls["NidNO"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.nidNoFormat)]);
              this.form.controls["UidNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)]);
            } else {
              this.form.controls['NidNO'].setValue('');
              this.form.controls['NidNO'].setValidators(null);
              this.form.controls['UidNo'].setValue('');
              this.form.controls['UidNo'].setValidators(null);
            }

            this.form.controls['DATyp'].updateValueAndValidity();
            this.form.controls['NidNO'].updateValueAndValidity();
            this.form.controls['UidNo'].updateValueAndValidity();
          }
        }, {
          key: "onHelpChange",
          value: function onHelpChange(eventVal, fun) {
            var _this9 = this;

            console.log('onHelpChange', eventVal, fun, 'length', this.releventDepartments.length);

            if (this.releventDepartments.length > 0) {
              console.log('releventDepartments', this.releventDepartments);
              this.form.controls['relDprt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);

              if (eventVal != '' && eventVal != null && eventVal == 1) {
                if (fun == 'change') {
                  console.log('change');
                  this.form.controls['relDprt'].setValue('');
                } else {
                  console.log('load help', this.studentData.relDprt);

                  if (this.studentData.relDprt != '' && this.studentData.relDprt != null) {
                    console.log('Inside If');
                    var helpIndex = this.releventDepartments.find(function (o) {
                      return o.id == _this9.studentData.relDprt;
                    });
                    console.log('helpIndex', helpIndex);
                    this.form.controls['relDprt'].setValue(helpIndex);
                  } else {
                    console.log('Inside If');
                    this.form.controls['relDprt'].setValue('');
                  }
                }
              } else {
                this.form.controls['relDprt'].setValue('');
                this.form.controls['relDprt'].setValidators(null);
              }
            } else {
              this.form.controls['help'].setValue('2'); // this.form.controls['relDprt'].setValue('');

              this.form.controls['relDprt'].setValidators(null);
            }

            if (eventVal != '' && eventVal != null && eventVal == 1) {
              if (this.releventDepartments.length > 0) {
                console.log('releventDepartments', this.releventDepartments); // this.form.controls['help'].setValue('2');

                this.form.controls['relDprt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
              } else {
                this.form.controls['relDprt'].setValidators(null);
              }

              if (fun == 'change') {
                console.log('change');
                this.form.controls['relDprt'].setValue('');
              } else {
                console.log('load help', this.studentData.relDprt);

                if (this.studentData.relDprt != '' && this.studentData.relDprt != null) {
                  console.log('Inside If');

                  var _helpIndex = this.releventDepartments.find(function (o) {
                    return o.id == _this9.studentData.relDprt;
                  });

                  console.log('helpIndex', _helpIndex);
                  this.form.controls['relDprt'].setValue(_helpIndex);
                } else {
                  console.log('Inside If');
                  this.form.controls['relDprt'].setValue('');
                }
              } // if (this.releventDepartments.length > 0) {
              //   this.form.controls['relDprt'].setValidators(Validators.required);
              // } else {
              //   this.form.controls['relDprt'].setValidators(null);
              // }

            } else {
              this.form.controls['relDprt'].setValue('');
              this.form.controls['relDprt'].setValidators(null);
            }

            this.form.controls['relDprt'].updateValueAndValidity();
          }
        }, {
          key: "onMigrantChange",
          value: function onMigrantChange(eventVal, fun) {
            console.log('onMigrantChange eventVal', eventVal); // this.allCountryState = eventVal;

            console.log('onMigrantChange');

            if (eventVal != '' && eventVal != null) {
              // this.form.controls['MigratBound'].setValidators(Validators.required);
              // this.form.controls['MigratBound'].setValidators(null);
              if (fun == 'change') {
                console.log('onMigrantChange change', eventVal); // this.form.controls['MigratBound'].setValue("");

                this.form.controls['MigratCountry'].setValue("");
                this.form.controls['MigratState'].setValue("");
                this.form.controls['MigratDist'].setValue("");
                this.form.controls['MigratBlock'].setValue("");

                if (eventVal == 1) {
                  this.form.controls['MigratCountry'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 3) {
                  this.form.controls['MigratState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 2) {
                  this.form.controls['MigratDist'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 4) {
                  this.form.controls['MigratDist'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValidators(null);
                } else {
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValidators(null);
                }
              } else {
                console.log('onMigrantChange load', eventVal); // this.form.controls['MigratBound'].setValue({ value: this.studentData.MigratMigratBound, label: this.studentData.MigratBound });
                // this.form.controls['MigratBound'].setValidators(Validators.required);

                if (eventVal == 1) {
                  this.form.controls['MigratCountry'].setValue({
                    value: this.studentData.MigratCountry,
                    label: this.studentData.MigratCountryName
                  });
                  this.form.controls['MigratCountry'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratState'].setValue("");
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratDist'].setValue("");
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValue("");
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 3) {
                  this.form.controls['MigratState'].setValue({
                    value: this.studentData.MigratState,
                    label: this.studentData.MigratStateName
                  });
                  this.form.controls['MigratState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValue("");
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratDist'].setValue("");
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValue("");
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 2) {
                  this.form.controls['MigratDist'].setValue({
                    value: this.studentData.MigratDist,
                    label: this.studentData.MigratDistName
                  });
                  this.form.controls['MigratDist'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValue("");
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValue("");
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratBlock'].setValue("");
                  this.form.controls['MigratBlock'].setValidators(null);
                } else if (eventVal == 4) {
                  this.form.controls['MigratDist'].setValue({
                    value: this.studentData.MigratDist,
                    label: this.studentData.MigratDistName
                  });
                  this.form.controls['MigratDist'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratBlock'].setValue({
                    value: this.studentData.MigratBlock,
                    label: this.studentData.MigratBlockName
                  });
                  this.form.controls['MigratBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['MigratCountry'].setValue("");
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValue("");
                  this.form.controls['MigratState'].setValidators(null);
                } else {
                  this.form.controls['MigratCountry'].setValue("");
                  this.form.controls['MigratCountry'].setValidators(null);
                  this.form.controls['MigratState'].setValue("");
                  this.form.controls['MigratState'].setValidators(null);
                  this.form.controls['MigratDist'].setValue("");
                  this.form.controls['MigratDist'].setValidators(null);
                  this.form.controls['MigratBlock'].setValue("");
                  this.form.controls['MigratBlock'].setValidators(null);
                }
              }
            } // this.form.controls['MigratBound'].updateValueAndValidity();


            this.form.controls['MigratCountry'].updateValueAndValidity();
            this.form.controls['MigratState'].updateValueAndValidity();
            this.form.controls['MigratDist'].updateValueAndValidity();
            this.form.controls['MigratBlock'].updateValueAndValidity();
          }
        }, {
          key: "onSurveyNECChange",
          value: function onSurveyNECChange() {
            if (this.surveyOtherQuestion == 1) {
              this.isBtnDisabled = false;
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this0 = this;

            console.log('relDprt', this.form.value.relDprt);

            if (this.Id == 2) {
              this.form.controls['flag'].setValue(1);
            } else {
              this.form.controls['flag'].setValue('');
            }

            this.isBtnDisabled = true;
            this.getLatLong();
            setTimeout(function () {
              // if (this.lat != '' && this.lat != null && this.lat != undefined && this.long != '' && this.long != null && this.long != undefined) {
              _this0.form.controls['Latitude'].setValue(_this0.lat);

              _this0.form.controls['Longitude'].setValue(_this0["long"]);

              _this0.form.controls['ACYr'].setValue(_this0.acyear);

              _this0.dateformat = _this0.form.value.Dob;
              _this0.datevalue = _this0.pipe.transform(_this0.dateformat, 'yyyy-MM-dd');

              _this0.form.controls['Dob'].setValue(_this0.datevalue);

              _this0.form.controls['Latitude'].setValue(_this0.lat);

              _this0.form.controls['Longitude'].setValue(_this0["long"]);

              var udise_code;

              if (_this0.Id == 1 || _this0.Id == 5) {
                _this0.form.controls['Status'].setValue('1');
              }

              if (_this0.Id == 4) {
                _this0.form.controls['Status'].setValue('2');
              }

              if (_this0.form.value.AdmitSchlID == '') {
                _this0.form.controls['AdmitSchlID'].setValue('0');
              }

              if (_this0.form.value.SpclTrngTyp == '2' || _this0.form.value.SpclTrngTyp == '3') {
                if (_this0.form.value.SplSchlUdise != '' && _this0.form.value.SplSchlUdise != null && _this0.form.value.SplSchlUdise != 0 && _this0.form.value.AdmitSchlID != '' && _this0.form.value.AdmitSchlID != null && _this0.form.value.AdmitSchlID != 0) {
                  if (_this0.form.value.SplSchlUdise == _this0.form.value.AdmitSchlID) {
                    udise_code = true;
                  } else {
                    udise_code = false;
                  }
                } else {
                  udise_code = true;
                }
              } else {
                udise_code = true;
              }

              console.log('oosc form', _this0.form);

              if (udise_code == true) {
                if (_this0.form.value.IndxID != null && _this0.form.value.IndxID != '' && _this0.form.value.IndxID != undefined) {
                  for (var Obj in _this0.form.value) {
                    _this0.form.controls[Obj].valid;
                  }

                  if (_this0.form.valid) {
                    if (_this0.cnfmBtn == true || _this0.form.value.DrpOutRsn.value != 36) {
                      if (_this0.form.value.DATyp == '' || _this0.form.value.DATyp == null || _this0.form.value.DATyp == 0) {
                        _this0.form.controls['DATyp'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.DrpOutRsn == '' || _this0.form.value.DrpOutRsn == null || _this0.form.value.DrpOutRsn == 0) {
                        _this0.form.controls['DrpOutRsn'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratCountry == '' || _this0.form.value.MigratCountry == null || _this0.form.value.MigratCountry == 0) {
                        _this0.form.controls['MigratCountry'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratState == '' || _this0.form.value.MigratState == null || _this0.form.value.MigratState == 0) {
                        _this0.form.controls['MigratState'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratDist == '' || _this0.form.value.MigratDist == null || _this0.form.value.MigratDist == 0) {
                        _this0.form.controls['MigratDist'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratBlock == '' || _this0.form.value.MigratBlock == null || _this0.form.value.MigratBlock == 0) {
                        _this0.form.controls['MigratBlock'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratInsti == '' || _this0.form.value.MigratInsti == null || _this0.form.value.MigratInsti == 0) {
                        _this0.form.controls['MigratInsti'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.DistrictId == '' || _this0.form.value.DistrictId == null || _this0.form.value.DistrictId == 0) {
                        _this0.form.controls['DistrictId'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.relDprt == '' || _this0.form.value.relDprt == null || _this0.form.value.relDprt == 0) {
                        _this0.form.controls['relDprt'].setValue({
                          id: '',
                          related_dept: ''
                        });
                      }

                      if (_this0.form.value.nomadTyp == '' || _this0.form.value.nomadTyp == null || _this0.form.value.nomadTyp == 0) {
                        _this0.form.controls['nomadTyp'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.SplSchl == '' || _this0.form.value.SplSchl == null || _this0.form.value.SplSchl == 0) {
                        _this0.form.controls['SplSchl'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      var data = _this0.form.value;
                      console.log('data', data);

                      _this0.emisService.saveOoscData(data, true).subscribe(function (res) {
                        if (res.dataStatus == true) {
                          _this0.nesFormAllow = false;

                          _this0.ooscStudLocalUpdate(_this0.form.value.DrpOutRsn.value);

                          _this0.alertService.success(res.message);

                          _this0.isBtnDisabled = false;
                        } else {
                          _this0.isBtnDisabled = false;

                          _this0.alertService.error(res.message);
                        }
                      });
                    } else {
                      _this0.alertService.error('Please confirm duplicate student details');

                      _this0.isBtnDisabled = false;
                    }
                  } else {
                    _this0.validateAllFormFields(_this0.form);

                    _this0.alertService.error('Please fill all the required fields');

                    _this0.isBtnDisabled = false;
                  }
                } else {
                  if (_this0.form.valid) {
                    if (_this0.cnfmBtn == true || _this0.form.value.DrpOutRsn.value != 36) {
                      if (_this0.form.value.DATyp == '' || _this0.form.value.DATyp == null || _this0.form.value.DATyp == 0) {
                        _this0.form.controls['DATyp'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.DrpOutRsn == '' || _this0.form.value.DrpOutRsn == null || _this0.form.value.DrpOutRsn == 0) {
                        _this0.form.controls['DrpOutRsn'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratCountry == '' || _this0.form.value.MigratCountry == null || _this0.form.value.MigratCountry == 0) {
                        _this0.form.controls['MigratCountry'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratState == '' || _this0.form.value.MigratState == null || _this0.form.value.MigratState == 0) {
                        _this0.form.controls['MigratState'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratDist == '' || _this0.form.value.MigratDist == null || _this0.form.value.MigratDist == 0) {
                        _this0.form.controls['MigratDist'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratBlock == '' || _this0.form.value.MigratBlock == null || _this0.form.value.MigratBlock == 0) {
                        _this0.form.controls['MigratBlock'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.MigratInsti == '' || _this0.form.value.MigratInsti == null || _this0.form.value.MigratInsti == 0) {
                        _this0.form.controls['MigratInsti'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.DistrictId == '' || _this0.form.value.DistrictId == null || _this0.form.value.DistrictId == 0) {
                        _this0.form.controls['DistrictId'].setValue({
                          value: '',
                          label: ''
                        });
                      } // if (this.form.value.relDprt == '' || this.form.value.relDprt == null || this.form.value.relDprt == 0) {
                      //   this.form.controls['relDprt'].setValue({ id: '', related_dept: '' });
                      // }


                      if (_this0.form.value.nomadTyp == '' || _this0.form.value.nomadTyp == null || _this0.form.value.nomadTyp == 0) {
                        _this0.form.controls['nomadTyp'].setValue({
                          value: '',
                          label: ''
                        });
                      }

                      if (_this0.form.value.SplSchl == '' || _this0.form.value.SplSchl == null || _this0.form.value.SplSchl == 0) {
                        _this0.form.controls['SplSchl'].setValue({
                          value: '',
                          label: ''
                        });
                      } // console.log('this.surveyform.value.relDprt',this.surveyform.value.relDprt)


                      if (_this0.form.value.relDprt == '' || _this0.form.value.relDprt == null || _this0.form.value.relDprt == 0) {
                        _this0.form.controls['relDprt'].setValue({
                          id: '',
                          related_dept: ''
                        });
                      }

                      var data = _this0.form.value;
                      console.log('data', data);

                      _this0.emisService.saveOoscData(data, true).subscribe(function (res) {
                        if (res.dataStatus == true) {
                          _this0.alertService.success(res.message);

                          _this0.ooscStudLocalUpdate(_this0.form.value.DrpOutRsn.value); // this.goToHome();
                          // if (this.Id == 1) {
                          //   this.router.navigate(['/tabs/ooscsurvey'], { queryParams: { 'school': this.schoolId, 'block': this.block, 'Id': this.Id }, skipLocationChange: false });
                          // } if (this.Id == 4) {
                          //   this.router.navigate(['/tabs/other-district-survey'], { queryParams: { 'school': this.schoolId, 'block': this.block, 'Id': this.Id }, skipLocationChange: false });
                          // } else {
                          //   this.router.navigate(['/tabs/oosctype']);
                          // }


                          _this0.isBtnDisabled = false;
                        } else {
                          _this0.isBtnDisabled = false;

                          _this0.alertService.error(res.message);
                        }
                      });
                    } else {
                      _this0.alertService.error('Please confirm duplicate student details');

                      _this0.isBtnDisabled = false;
                    }
                  } else {
                    _this0.isBtnDisabled = false;

                    _this0.validateAllFormFields(_this0.form);

                    _this0.alertService.error('Please fill all the required fields');
                  }
                }
              } else {
                _this0.alertService.error('UDISE Code not matching');

                _this0.isBtnDisabled = false;
              } // } else {
              //   this.alertService.error('Please enable your mobile location and app location permission');
              //   this.getLatLong();
              //   this.isBtnDisabled = false;
              // }

            }, 10000);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.surveyform.controls["survey_today"].setValue('');
            this.surveyform.controls["survey_NEC"].setValue('');
            this.surveyform.reset();

            if (this.Id == 1) {
              this.router.navigate(['/tabs/ooscsurvey'], {
                queryParams: {
                  'school': this.schoolId,
                  'schoolname': this.schoolname,
                  'block': this.blockId,
                  'Id': this.Id,
                  'year': this.ac_year
                },
                skipLocationChange: false
              });
            } else if (this.Id == 4) {
              this.router.navigate(['/tabs/other-district-survey'], {
                queryParams: {
                  'school': this.schoolId,
                  'block': this.block,
                  'Id': this.Id
                },
                skipLocationChange: false
              });
            } else if (this.Id == 2) {
              if (this.surveydataAllow == 1) {
                this.surveydataAllow = 0;
              } else {
                this.router.navigate(['/tabs/never-enrollment-stu-list'], {
                  queryParams: {
                    'id': '0'
                  },
                  skipLocationChange: false
                });
              }
            } else if (this.Id == 5) {
              this.router.navigate(['/tabs/survey-by-me']);
            } else {
              this.router.navigate(['/tabs/oosctype']);
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this1 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup) {
                _this1.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormArray) {
                _this1.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "checkMobileNo",
          value: function checkMobileNo() {
            if (this.form.value.MobilenoParent != '' && this.form.value.MobilenoParent != null && this.form.value.MobilenoParent != undefined && this.form.value.AlternativeMobileno != '' && this.form.value.AlternativeMobileno != null && this.form.value.AlternativeMobileno != undefined) {
              if (this.form.value.MobilenoParent == this.form.value.AlternativeMobileno) {
                this.mobile_error = true;
              } else {
                this.mobile_error = false;
              }
            } else {
              this.mobile_error = false;
            }
          }
        }, {
          key: "getCountryList",
          value: function getCountryList(countryData) {
            var _this10 = this;

            if (this.totalCountries.length > 0) {
              var countrydeleteQuery = 'DELETE FROM allCountryDetails';
              return this.sqliteDB.getDataLocalDB(countrydeleteQuery).then(function (data) {
                var sqlArray = [];
                countryData.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allCountryDetails VALUES (?,?,?,?)', [null, element.id, element.country_code, element.country_name]]);
                });

                _this10.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {});
              });
            }
          }
        }, {
          key: "getStateList",
          value: function getStateList(stateData) {
            var _this11 = this;

            if (stateData.length > 0) {
              var statedeleteQuery = 'DELETE FROM allStateDetails';
              return this.sqliteDB.getDataLocalDB(statedeleteQuery).then(function (data) {
                var sqlArray = [];
                stateData.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allStateDetails VALUES (?,?,?,?)', [null, element.id, element.state_code, element.state_name]]);
                });

                _this11.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {// this.checkStateLocalDB();
                });
              });
            }
          }
        }, {
          key: "getInstitute",
          value: function getInstitute(type, fun) {
            var _this12 = this;

            // let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_institute.json';
            // this.http.get<any>(json_name).subscribe((data) => {
            //   if (data) {
            var connectionStatus = this.networkService.getCurrentNetworkStatus();

            if (connectionStatus !== 1) {
              var insti_json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_institute.json';
              this.http.get(insti_json_name).subscribe(function (data) {
                _this12.masterInstList = data.institute;

                if (_this12.masterInstList) {
                  if (_this12.masterInstList.length > 0) {
                    var instiDeleteQuery = 'DELETE FROM instituteList';
                    return _this12.sqliteDB.getDataLocalDB(instiDeleteQuery).then(function (instidata) {
                      var sqlArray = [];

                      _this12.masterInstList.forEach(function (element) {
                        sqlArray.push(['INSERT INTO instituteList VALUES (?,?,?,?)', [null, element.id, element.institute_id, element.institute_name_address]]);
                      });

                      _this12.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                        _this12.checkInstiLocalDB(type, fun);
                      });
                    });
                  }
                }
              });
            }
          }
        }, {
          key: "onUploadFile",
          value: function onUploadFile(event) {
            var _this13 = this;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].size <= 10485760) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];

                if (this.fileType == 'jpeg' || this.fileType == 'jpg' || this.fileType == 'png') {
                  var fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);

                  fileReader.onload = function (event) {
                    _this13.uploadUrl = fileReader.result;
                    var bucketName = "renewalapplicationemis";
                    var filename = splittedName[0];
                    var ext = splittedName[1];
                    var expiry = 300;

                    _this13.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                      if (result) {
                        var files = _this13.doc_file;
                        var file = files[0];

                        _this13.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                          // this.imageActive = true;
                          _this13.form.controls.CameraFile.setValue(result.key);

                          _this13.cameraKey = result.key;

                          _this13.viewPic(result.key);
                        });

                        _this13.alertService.success('File Uploaded Successfully');
                      } else {
                        _this13.alertService.error('Error in Uploading File please try again');
                      }
                    });
                  };
                } else {
                  this.alertService.error('File Type Not Valid.');
                }
              } else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 10 MB');
              }
            }
          } // file upload for Age proof

        }, {
          key: "ondropoutUpload",
          value: function ondropoutUpload(event) {
            var _this14 = this;

            if (event.target.files[0] != '' && event.target.files[0] != null && event.target.files[0] != undefined) {
              if (event.target.files && event.target.files[0]) {
                if (event.target.files[0].size <= 1000000000) {
                  this.doc_file = event.target.files;
                  var fileName = event.target.files[0].name;
                  var splittedName = fileName.split(".");
                  this.fileType = splittedName[1];

                  if (this.fileType == 'jpeg' || this.fileType == 'jpg' || this.fileType == 'png' || this.fileType == 'pdf') {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);

                    fileReader.onload = function (event) {
                      _this14.uploadUrl = fileReader.result;
                      var bucketName = "renewalapplicationemis";
                      var filename = splittedName[0];
                      var ext = splittedName[1];
                      var expiry = 300;

                      _this14.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                        if (result) {
                          var files = _this14.doc_file;
                          var file = files[0];

                          _this14.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                            _this14.imageKey = result.key;
                            _this14.image1 = '';
                            _this14.imgext = '';
                            _this14.doc1Uploaded = true;

                            _this14.form.controls.dropOutFile.setValue(result.key);

                            _this14.viewDoc(result.key);
                          });

                          _this14.alertService.success('File Uploaded Successfully');
                        } else {
                          _this14.alertService.error('Error in Uploading File please try again');
                        }
                      });
                    };
                  } else {
                    this.alertService.error('File Type Not Valid.');
                  }
                } else {
                  this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
                }
              }
            } else {
              this.form.controls["dropOutFile"].setValue('');
              this.form.controls["dropOutFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            }

            this.form.controls["dropOutFile"].updateValueAndValidity();
          }
        }, {
          key: "viewDoc",
          value: function viewDoc(fun) {
            var _this15 = this;

            var bucketName = "renewalapplicationemis";
            var filename = this.imageKey;
            var expiry = 1800;
            var ext = '';
            ext = this.imageKey.split(".");
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                var modal;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      if (!result) {
                        _context2.n = 4;
                        break;
                      }

                      this.image1 = result.url;
                      this.imgext = ext[1];
                      this.doc1Uploaded = true;

                      if (!(fun == 'modal')) {
                        _context2.n = 3;
                        break;
                      }

                      if (!(this.imgext == 'pdf')) {
                        _context2.n = 1;
                        break;
                      }

                      this.uploadService.viewPdf(this.image1);
                      _context2.n = 3;
                      break;

                    case 1:
                      _context2.n = 2;
                      return this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__.ViewImagePage,
                        componentProps: {
                          image: this.image1
                        },
                        cssClass: 'view-image-modal'
                      });

                    case 2:
                      modal = _context2.v;
                      _context2.n = 3;
                      return modal.present();

                    case 3:
                      _context2.n = 5;
                      break;

                    case 4:
                      this.alertService.error('Error in getting image file');

                    case 5:
                      return _context2.a(2);
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "viewPic",
          value: function viewPic(fun) {
            var _this16 = this;

            var bucketName = "renewalapplicationemis";
            var filename = this.cameraKey;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                var modal;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      if (!result) {
                        _context3.n = 3;
                        break;
                      }

                      this.imageData = result.url;

                      if (!(fun == 'modal')) {
                        _context3.n = 2;
                        break;
                      }

                      _context3.n = 1;
                      return this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__.ViewImagePage,
                        componentProps: {
                          image: this.imageData
                        },
                        cssClass: 'view-image-modal'
                      });

                    case 1:
                      modal = _context3.v;
                      _context3.n = 2;
                      return modal.present();

                    case 2:
                      _context3.n = 4;
                      break;

                    case 3:
                      this.alertService.error('Error in getting image file');

                    case 4:
                      return _context3.a(2);
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "checkGPSPermission",
          value: function checkGPSPermission() {
            var _this17 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
              if (result.hasPermission) {
                _this17.askToTurnOnGPS();
              } else {
                _this17.requestGPSPermission();
              }
            }, function (err) {
              console.log("err=", err); // alert(err);
            });
          }
        }, {
          key: "requestGPSPermission",
          value: function requestGPSPermission() {
            var _this18 = this;

            this.locationAccuracy.canRequest().then(function (canRequest) {
              if (canRequest) {} else {
                _this18.androidPermissions.requestPermission(_this18.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (i) {
                  _this18.askToTurnOnGPS();
                }, function (error) {
                  _this18.alertService.alertWhite('To get current location please turn on device location');
                });
              }
            });
          }
        }, {
          key: "askToTurnOnGPS",
          value: function askToTurnOnGPS() {
            var _this19 = this;

            this.setFormValues(); // current working

            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (i) {
              // this.setFormValues();// current working
              _this19.noData = 1;
            }, function (error) {
              _this19.alertService.alertToTurnOnPermission('Location', 'Location');

              _this19.checkGPSPermission();
            });
          }
        }, {
          key: "checkCmaeraPermission",
          value: function checkCmaeraPermission() {
            var _this20 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                _this20.askToTurnOnGPS();
              } else {
                _this20.androidPermissions.requestPermission(_this20.androidPermissions.PERMISSION.CAMERA).then(function (i) {// call method to turn on GPS
                }, function (error) {
                  // Show alert if user click on 'No Thanks'
                  _this20.alertService.alertWhite('To get current location please turn on device location');
                });
              }
            }, function (err) {
              console.log("err=", err); // alert(err);
            });
          }
          /*  Opening Camera here.....   */

        }, {
          key: "openCameraOn",
          value: function openCameraOn() {
            var _this21 = this;

            var options = {
              quality: 100,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              allowEdit: false
            };
            this.platform.ready().then(function () {
              _this21.camera.getPicture(options).then(function (imageData) {
                var bucketName = "renewalapplicationemis";
                var expiry = 300;
                var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");

                _this21.file.readAsDataURL(imagename, filename).then(function (base64string) {
                  if (base64string) {
                    var base = base64string.split('base64,');
                    var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_12__.base64StringToBlob)(base[1], 'image/jpg');

                    if (blob.size <= 3145728) {
                      _this21.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                        if (result) {
                          _this21.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                            _this21.form.controls.CameraFile.setValue(result.key);

                            _this21.cameraKey = result.key;

                            _this21.viewPic('show');

                            _this21.alertService.success('File Uploaded Successfully');
                          });
                        }
                      });
                    } else {
                      _this21.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                  }
                });
              }, function (err) {
                // Handle error
                console.log("LOG", err);
                alert("error " + JSON.stringify(err));
              });
            });
          } // migratStateChange(event) {
          //   this.MigratState = event.value;
          //   this.form.controls.MigratState.setValue(event.value);
          // }

        }, {
          key: "getResdSchoolList",
          value: function getResdSchoolList(event, fun) {
            var _this22 = this;

            if (event != '' && event != null && event != undefined && event != 0) {
              if (fun == 'load') {
                if (this.studentData.SplSchl != '' && this.studentData.SplSchl != null && this.studentData.SplSchl != undefined && this.studentData.SplSchl != 0) {
                  if (this.studentData.SpclTrngTyp == 1) {
                    this.form.controls['SplSchl'].setValue({
                      value: this.studentData.ResdSchlID,
                      label: this.studentData.ResdCenterLoca
                    });
                    this.form.controls["SplSchl"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                    this.form.controls['SplSchlUdise'].setValue('');
                  } else {
                    this.form.controls['SplSchl'].setValue({
                      value: this.studentData.SplSchlID,
                      label: this.studentData.SplSchlName
                    });
                    this.form.controls["SplSchl"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                    this.form.controls['SplSchlUdise'].setValue(this.studentData.SplSchlUdise);
                  }
                } else {
                  this.form.controls['SplSchl'].setValue('');
                  this.form.controls["SplSchl"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                  this.form.controls['SplSchlUdise'].setValue('');
                }
              } else {
                this.form.controls['SplSchl'].setValue('');
                this.form.controls["SplSchl"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls['SplSchlUdise'].setValue('');
              }

              var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_udise.json';
              this.http.get(json_name).subscribe(function (data) {
                if (data) {
                  var school;

                  if (event == 1) {
                    school = data.rstclocation;
                    _this22.resiSchlList = school.map(function (l) {
                      return {
                        label: l.rstc_location,
                        value: l.id
                      };
                    });
                  } else if (event == 2) {
                    school = data.spltrainingcenter;
                    _this22.resiSchlList = school.map(function (l) {
                      return {
                        label: l.school_name,
                        value: l.school_id,
                        udise: l.udise_code
                      };
                    });
                  } else {
                    school = data.udise_36;
                    _this22.resiSchlList = school.map(function (l) {
                      return {
                        label: l.school_name,
                        value: l.school_id,
                        udise: l.udise_code
                      };
                    });
                  }

                  _this22.resiSchlList.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });
                }
              });
            } else {
              this.form.controls['SplSchl'].setValue('');
              this.form.controls['SplSchlUdise'].setValue('');
              this.form.controls["SplSchl"].setValidators(null);
            }

            this.form.controls["SplSchl"].updateValueAndValidity();
          }
        }, {
          key: "loadingPortChange",
          value: function loadingPortChange(event) {
            this.disabledDischargingPorts = this.ooscStateList;
          }
        }, {
          key: "onSplSchlChange",
          value: function onSplSchlChange(event) {
            if (event.value) {
              var udise = event.value.udise;
              this.form.controls['SplSchlUdise'].setValue(udise);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.loadingPortsComponent.clear();
            this.dischargingPortsComponent.clear();
            this.disabledDischargingPorts = [];
          }
        }, {
          key: "updateNidNo",
          value: function updateNidNo(event) {
            this.form.controls['NidNO'].setValue(event.target.value);
            this.form.controls["NidNO"].updateValueAndValidity();
          }
        }, {
          key: "updateUidNo",
          value: function updateUidNo(event) {
            this.form.controls['UidNo'].setValue(event.target.value);
            this.form.controls["UidNo"].updateValueAndValidity();
          }
        }, {
          key: "formalSchlChange",
          value: function formalSchlChange(eventVal, fun) {
            if (eventVal != '' && eventVal != null && eventVal == '2') {
              if (fun == 'change') {
                this.form.controls['SpclTrngTyp'].setValue('');
                this.form.controls['SplSchl'].setValue('');
                this.form.controls['SplSchlUdise'].setValue('');
              } else {
                if (this.studentData.SpclTrngTyp != '' && this.studentData.SpclTrngTyp != null && this.studentData.SpclTrngTyp != undefined && this.studentData.SpclTrngTyp != '0') {
                  this.form.controls['SpclTrngTyp'].setValue(this.studentData.SpclTrngTyp);
                  this.getResdSchoolList(this.studentData.SpclTrngTyp, 'load');
                } else {
                  this.form.controls['SpclTrngTyp'].setValue('');
                  this.form.controls['SplSchl'].setValue('');
                  this.form.controls['SplSchlUdise'].setValue('');
                }
              }

              this.form.controls['SpclTrngTyp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
              this.form.controls['SplSchl'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            } else {
              this.form.controls['SpclTrngTyp'].setValue('');
              this.form.controls['SpclTrngTyp'].setValidators(null);
              this.form.controls['SplSchl'].setValue('');
              this.form.controls['SplSchl'].setValidators(null);
              this.form.controls['SplSchlUdise'].setValue('');
              this.form.controls["SplSchlUdise"].setValidators(null);
            }

            this.form.controls['SpclTrngTyp'].updateValueAndValidity();
            this.form.controls['SplSchl'].updateValueAndValidity();
            this.form.controls['SplSchlUdise'].updateValueAndValidity();
          }
        }, {
          key: "onOoscClearAddr",
          value: function onOoscClearAddr(event, fun) {
            if (fun == 'change') {
              this.form.controls['MigrntAddrs'].setValue('');

              if (this.form.value.DrpOutRsn.value != 20 && this.form.value.DrpOutRsn.value != 41 && this.form.value.DrpOutRsn.value != 66 && this.form.value.DrpOutRsn.value != 68) {
                this.form.controls["MigrntAddrs"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]);
              } else {
                this.form.controls['MigrntAddrs'].setValidators(null);
              }
            }

            this.form.controls['MigrntAddrs'].updateValueAndValidity();
          }
        }, {
          key: "getBRTEStudentDetails",
          value: function getBRTEStudentDetails() {
            var _this23 = this;

            if (this.indexID) {
              this.emisService.getBRTEStudntDetails(this.indexID).subscribe(function (res) {
                var _a, _b;

                if (res.dataStatus == true) {
                  _this23.studentData = res.result[0];

                  _this23.form.patchValue(_this23.studentData);

                  _this23.myBlock = _this23.studentData.MigratBlock;

                  if (((_a = _this23.form.value.DrpOutRsn) === null || _a === void 0 ? void 0 : _a.value) != '' && ((_b = _this23.form.value.DrpOutRsn) === null || _b === void 0 ? void 0 : _b.value) != null && _this23.studentData.MigratDist && _this23.form.value.DrpOutRsn.value == 55) {
                    _this23.onOoscDistrictChange('load', _this23.studentData.MigratDist, 'drop');
                  }

                  _this23.form.controls['Address'].setValue(_this23.studentData.Address);

                  var dropOutIndex = _this23.reasonfordropoutListoosc.find(function (o) {
                    return o.value == _this23.studentData.DrpOutRsn;
                  });

                  _this23.form.controls['DrpOutRsn'].setValue(dropOutIndex);

                  _this23.dropOutEventChange(dropOutIndex, 'load');

                  if (_this23.studentData.DAyn != '' && _this23.studentData.DAyn != null && _this23.studentData.DAyn != undefined && _this23.studentData.DAyn != 0) {
                    _this23.onDiffAbleChange(_this23.studentData.DAyn, 'load');
                  }

                  if (_this23.studentData.help != '' && _this23.studentData.help != null && _this23.studentData.help != undefined && _this23.studentData.help != 0) {
                    _this23.onHelpChange(_this23.studentData.help, 'load');
                  }

                  if (_this23.studentData.DistrictId != '' && _this23.studentData.DistrictId != null && _this23.studentData.DistrictId != 0) {
                    _this23.form.controls['DistrictId'].setValue({
                      value: _this23.studentData.DistrictId,
                      label: _this23.studentData.PresentDistrictName
                    });

                    _this23.onOoscDistrictChange('load', _this23.studentData.DistrictId, 'present');
                  }

                  if (_this23.studentData.PresentBlckId != '' && _this23.studentData.PresentBlckId != null) {
                    _this23.form.controls['block'].setValue({
                      value: _this23.studentData.PresentBlckId,
                      label: _this23.studentData.PresentBlckName
                    });

                    _this23.onOoscBlockChange(_this23.studentData.PresentBlckId, 'load');
                  }

                  if (_this23.studentData.PresentSchoolId != '' && _this23.studentData.PresentSchoolId != null) {
                    _this23.form.controls['AdmitSchool'].setValue({
                      value: _this23.studentData.PresentSchoolId,
                      label: _this23.studentData.PresentSchoolName
                    });
                  } else {
                    _this23.form.controls['AdmitSchool'].setValue('');
                  }

                  _this23.form.controls['MigrntAddrs'].setValue(_this23.studentData.MigrntAddrs);

                  if (_this23.studentData.DirctSpcl == '2') {
                    _this23.formalSchlChange(_this23.studentData.DirctSpcl, 'load');
                  }

                  if (_this23.studentData.AdmsnNo == 0) {
                    _this23.form.controls["AdmsnNo"].setValue('');

                    _this23.form.controls['AdmsnNo'].updateValueAndValidity();
                  }

                  if (_this23.studentData.dropOutFile != '' && _this23.studentData.dropOutFile != null && _this23.studentData.dropOutFile != undefined && _this23.studentData.dropOutFile != 0) {
                    _this23.form.controls["dropOutFile"].setValue(_this23.studentData.dropOutFile);

                    _this23.form.controls['dropOutFile'].updateValueAndValidity();

                    _this23.imageKey = _this23.studentData.dropOutFile;
                    _this23.doc1Uploaded = true;

                    _this23.viewDoc('show');
                  }

                  if (_this23.studentData.CameraFile != '' && _this23.studentData.CameraFile != null && _this23.studentData.CameraFile != undefined) {
                    _this23.form.controls["CameraFile"].setValue(_this23.studentData.CameraFile);

                    _this23.form.controls['CameraFile'].updateValueAndValidity();

                    _this23.cameraKey = _this23.studentData.CameraFile;

                    _this23.viewPic('show');
                  } else {
                    _this23.imageData = '';
                  }

                  _this23.myBlock = _this23.studentData.MigratBlock;

                  _this23.form.updateValueAndValidity();
                } else {
                  _this23.active = true;
                }
              });
            }
          }
        }, {
          key: "ooscStudLocalUpdate",
          value: function ooscStudLocalUpdate(reason) {
            var _this24 = this;

            this.emisService.OoscReasonType().subscribe(function (res) {
              if (res.dataStatus == true) {
                var reasonData = res.result;
                var reasonFilter = reasonData.filter(function (tt) {
                  return tt.dropout_code == reason;
                });

                if (reasonFilter.length > 0) {
                  var query1 = 'UPDATE ooscStudentsDetail SET Reason="' + reasonFilter[0].dropout_reason + '",' + 'reason_type="' + reasonFilter[0].reason_type + '", Status= 1 WHERE stud_id = "' + _this24.studentId + '"';

                  _this24.sqliteDB.update(query1).then(function (res) {
                    _this24.goToHome();
                  });
                }
              }
            });
          }
        }, {
          key: "onSurveySave",
          value: function onSurveySave() {
            var _this25 = this;

            this.isBtnDisabled = true;

            if (this.surveyform.valid) {
              if (this.surveyform.value.IndxID != null && this.surveyform.value.IndxID != '' && this.surveyform.value.IndxID != undefined) {
                this.surveyform.value.IndxID = "";
              }

              if (this.surveyform.value.survey_district != '' && this.surveyform.value.survey_district != null && this.surveyform.value.survey_district != 0) {
                this.surveyform.value.survey_district = this.surveyform.value.survey_district.value;
              }

              if (this.surveyform.value.survey_block != '' || this.surveyform.value.survey_block != null && this.surveyform.value.survey_block != 0) {
                this.surveyform.value.survey_block = this.surveyform.value.survey_block.value;
              }

              if (this.localBdy == 13298) {
                this.surveyform.value.survey_habitation = '92298';
              } else {
                if (this.surveyform.value.survey_habitation != '' || this.surveyform.value.survey_habitation != null && this.surveyform.value.survey_habitation != 0) {
                  this.surveyform.value.survey_habitation = this.surveyform.value.survey_habitation.HabitCode;
                } // console.log('this.surveyform.value.survey_habitation.HabitCode',this.surveyform.value.survey_habitation.HabitCode)

              }

              if (this.surveyform.value.survey_local_body != '' || this.surveyform.value.survey_local_body != null && this.surveyform.value.survey_local_body != 0) {
                this.surveyform.value.survey_local_body = this.surveyform.value.survey_local_body.LoclBodyCode;
              } // if (this.studentData.help != '' && this.studentData.help != null && this.studentData.help != undefined && this.studentData.help != 0) {
              //   this.onHelpChange(this.studentData.help, 'load');
              // }


              if (this.surveyform.value.relDprt == '' || this.surveyform.value.relDprt == null || this.surveyform.value.relDprt == 0) {
                this.surveyform.controls['relDprt'].setValue({
                  id: '',
                  related_dept: ''
                });
              }

              if (this.surveyform.value.nomadTyp == '' || this.surveyform.value.nomadTyp == null || this.surveyform.value.nomadTyp == 0) {
                this.surveyform.controls['nomadTyp'].setValue({
                  value: '',
                  label: ''
                });
              }

              var data = this.surveyform.value;
              this.emisService.saveOoscData(data, true).subscribe(function (res) {
                if (res.dataStatus) {
                  _this25.alertService.success(res.message);

                  _this25.emisService.OoscSurveyData(_this25.userSessionService.teacher_id(), true).subscribe(function (res) {
                    if (res.result[0].survey_NEC == 1) {
                      _this25.IndxID = res.result[0].id;

                      _this25.form.controls['IndxID'].setValue(_this25.IndxID);

                      _this25.survey_NEC = res.result[0].survey_NEC;
                      _this25.nesFormAllow = true;
                      _this25.surveydataAllow = 0;
                    } else {
                      _this25.survey_NEC = 0;
                      _this25.nesFormAllow = false;
                      _this25.surveydataAllow = 0;
                    }
                  });
                } else {
                  _this25.isBtnDisabled = false;
                }
              });
            } else {
              this.isBtnDisabled = false;
              this.alertService.error("Please fill the above fields");
            }
          }
        }, {
          key: "getAcYr",
          value: function getAcYr() {
            this.current_month = new Date().getMonth() + 1; // console.log(new Date(),'this.current_year',this.current_year,'month',this.current_month)

            if (this.current_month >= 6 && this.current_month <= 12) {
              this.acyear = this.current_year + '-' + (this.current_year + 1);
            } else {
              this.acyear = this.current_year - 1 + '-' + this.current_year;
            }
          }
        }, {
          key: "getOOSCMasterDetailsJson",
          value: function getOOSCMasterDetailsJson() {
            var _this26 = this;

            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
            this.http.get(json_name).subscribe(function (data) {
              if (data) {
                _this26.totalCountries = data.country;
                _this26.totalStates = data.state;
                _this26.totalDistricts = data.district;

                _this26.getCountryList(_this26.totalCountries);

                _this26.getStateList(_this26.totalStates);

                _this26.dropdownList(_this26.totalDistricts);
              }
            });
          }
        }, {
          key: "getDeptMasterDetailsJson",
          value: function getDeptMasterDetailsJson() {
            var _this27 = this;

            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/drop_out_dept_list.json';
            this.http.get(json_name).subscribe(function (data) {
              // console.log('json data')
              if (data) {
                var releventDepartments = data.oosc_department_mapping;
                _this27.deptList = _this27.transformArray(releventDepartments, 'reason_id');
              }
            });
          }
        }, {
          key: "transformArray",
          value: function transformArray(array, field) {
            if (array) {
              var groupedObj = array.reduce(function (prev, cur) {
                if (!prev[cur[field]]) {
                  prev[cur[field]] = [cur];
                } else {
                  prev[cur[field]].push(cur);
                }

                return prev;
              }, {});
              return Object.keys(groupedObj).map(function (key) {
                return {
                  key: key,
                  value: groupedObj[key]
                };
              });
            }

            return [];
          }
        }, {
          key: "checkEmisNo",
          value: function checkEmisNo() {
            var _this28 = this;

            this.cnfmBtn = false;

            if (this.form.controls.EmisNo.valid) {
              this.emisService.OoscDupliVerfi(this.form.value.EmisNo).subscribe(function (res) {
                if (res.dataStatus == true) {
                  var OoscDupliVerfi = res.result[0];

                  _this28.form.controls['dupStudName'].setValue(OoscDupliVerfi.name);

                  _this28.form.controls['dupFatherName'].setValue(OoscDupliVerfi.father_name);

                  _this28.form.controls['dupMotherName'].setValue(OoscDupliVerfi.mother_name);

                  _this28.form.controls['dupDOB'].setValue(OoscDupliVerfi.dob);

                  _this28.form.controls['dupAadhar'].setValue(OoscDupliVerfi.aadhaar_uid_number);
                } else {
                  _this28.form.controls['dupStudName'].setValue('');

                  _this28.form.controls['dupFatherName'].setValue('');

                  _this28.form.controls['dupMotherName'].setValue('');

                  _this28.form.controls['dupDOB'].setValue('');

                  _this28.form.controls['dupAadhar'].setValue('');
                }
              });
            } else {
              this.form.controls["EmisNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.emisNo)]);
            }
          }
        }, {
          key: "duplicateConfirmation",
          value: function duplicateConfirmation() {
            var _this29 = this;

            this.cnfmBtn = false;

            if (this.form.value.dupStudName != '' && this.form.value.dupStudName != null && this.form.value.dupStudName != undefined) {
              var data = {
                "records": {
                  "IndexId": "",
                  "OldUserId": this.form.value.student_emis_no,
                  'NewUserId': this.form.value.EmisNo,
                  'Name': this.form.value.dupStudName,
                  'MotherName': this.form.value.dupMotherName,
                  'FatherName': this.form.value.dupFatherName,
                  'DOB': this.form.value.dupDOB,
                  'Aadhaar': this.form.value.dupAadhar
                }
              };
              this.emisService.OoscDupliVerfiSave(data).subscribe(function (res) {
                if (res.dataStatus == true) {
                  _this29.cnfmBtn = true;

                  _this29.alertService.success("Inserted Successfully");
                } else {
                  _this29.cnfmBtn = false;

                  _this29.alertService.error(res.message);
                }
              });
            } else {
              this.cnfmBtn = false;
              this.alertService.error("No Data Found in this Emis Id");
            }
          }
        }, {
          key: "checkDepartmentListLocalDB",
          value: function checkDepartmentListLocalDB() {
            var _this30 = this;

            this.masterCountryList = [];
            var query = 'SELECT * FROM allCountryDetails';
            return this.sqliteDB.getDataLocalDB(query).then(function (country) {
              if (country.rows.length > 0) {
                var temp = [];

                for (var i = 0; i < country.rows.length; i++) {
                  temp.push(country.rows.item(i));
                }

                ;
                _this30.masterCountryList = temp;
                var key = 'country_id';

                var unique_list = _toConsumableArray(new Map(_this30.masterCountryList.map(function (item) {
                  return [item[key], item];
                })).values());

                if (_this30.masterCountryList.length > 0) {
                  _this30.ooscCountryList = unique_list.map(function (l) {
                    return {
                      label: l.country_name,
                      value: l.country_id
                    };
                  });

                  _this30.ooscCountryList.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });
                }

                _this30.checkStateLocalDB();
              } else {
                _this30.getOOSCMasterDetailsJson();
              }
            });
          }
        }, {
          key: "checkCountryLocalDB",
          value: function checkCountryLocalDB() {
            var _this31 = this;

            this.masterCountryList = [];
            var query = 'SELECT * FROM allCountryDetails';
            return this.sqliteDB.getDataLocalDB(query).then(function (country) {
              if (country.rows.length > 0) {
                var temp = [];

                for (var i = 0; i < country.rows.length; i++) {
                  temp.push(country.rows.item(i));
                }

                ;
                _this31.masterCountryList = temp;
                var key = 'country_id';

                var unique_list = _toConsumableArray(new Map(_this31.masterCountryList.map(function (item) {
                  return [item[key], item];
                })).values());

                if (_this31.masterCountryList.length > 0) {
                  _this31.ooscCountryList = unique_list.map(function (l) {
                    return {
                      label: l.country_name,
                      value: l.country_id
                    };
                  });

                  _this31.ooscCountryList.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });
                }

                _this31.checkStateLocalDB();
              } else {
                _this31.getOOSCMasterDetailsJson();
              }
            });
          }
        }, {
          key: "checkStateLocalDB",
          value: function checkStateLocalDB() {
            var _this32 = this;

            var statequery = 'SELECT * FROM allStateDetails';
            return this.sqliteDB.getDataLocalDB(statequery).then(function (state) {
              if (state.rows.length > 0) {
                var list = [];

                for (var i = 0; i < state.rows.length; i++) {
                  list.push(state.rows.item(i));
                }

                ;
                var key = 'state_id';

                var unique_list = _toConsumableArray(new Map(list.map(function (item) {
                  return [item[key], item];
                })).values());

                if (list.length > 0) {
                  _this32.ooscStateList = [];
                  _this32.ooscStateList = unique_list.map(function (l) {
                    return {
                      label: l.state_name,
                      value: l.state_id
                    };
                  });

                  _this32.ooscStateList.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });
                }

                _this32.checkDistrictLocalDB(); // this.alertService.success("General Checkup Stored Successfully...!");

              } else {
                // if (this.totalStates?.length == 0) {
                _this32.getOOSCMasterDetailsJson(); // }

              }
            });
          }
        }, {
          key: "checkDistrictLocalDB",
          value: function checkDistrictLocalDB() {
            var _this33 = this;

            this.masterDistrictList = [];
            var districtquery = 'SELECT * FROM allDistrictDetails';
            return this.sqliteDB.getDataLocalDB(districtquery).then(function (district) {
              var temp = [];

              if (district.rows.length > 0) {
                for (var i = 0; i < district.rows.length; i++) {
                  temp.push(district.rows.item(i));
                }

                ;
                _this33.masterDistrictList = temp;
                var key = 'disid';

                var unique_list = _toConsumableArray(new Map(_this33.masterDistrictList.map(function (item) {
                  return [item[key], item];
                })).values());

                if (_this33.masterDistrictList.length > 0) {
                  _this33.ooscDistrictList = unique_list.map(function (l) {
                    return {
                      label: l.district_name,
                      value: l.disid
                    };
                  });

                  _this33.ooscDistrictList.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });
                }
              } else {
                // if (this.totalDistricts?.length == 0) {
                _this33.getOOSCMasterDetailsJson(); // }

              }
            });
          }
        }, {
          key: "checkBlockLocalDB",
          value: function checkBlockLocalDB(eventval) {
            var _this34 = this;

            this.masterBlockList = [];
            var query = 'SELECT * FROM allBlockDetails';
            return this.sqliteDB.getDataLocalDB(query).then(function (block) {
              if (block.rows.length > 0) {
                var blockTemp = [];

                for (var i = 0; i < block.rows.length; i++) {
                  blockTemp.push(block.rows.item(i));
                }

                ;
                _this34.masterBlockList = blockTemp;
                block = _this34.masterBlockList.filter(function (tt) {
                  return tt.district_id == eventval;
                });
                var key = 'blkid';

                var black_unique_list = _toConsumableArray(new Map(block.map(function (item) {
                  return [item[key], item];
                })).values());

                if (_this34.masterBlockList) {
                  if (_this34.masterBlockList.length > 0) {
                    _this34.ooscBlockList = black_unique_list.map(function (l) {
                      return {
                        label: l.block_name,
                        value: l.blkid
                      };
                    });

                    _this34.ooscBlockList.sort(function (a, b) {
                      if (a.label < b.label) return -1;
                      if (a.label > b.label) return 1;
                      return 0;
                    });
                  }
                }
              } else {
                _this34.getBlockList(eventval);
              }
            });
          }
        }, {
          key: "getBlockList",
          value: function getBlockList(eventval) {
            var _this35 = this;

            var connectionStatus = this.networkService.getCurrentNetworkStatus();

            if (connectionStatus !== 1) {
              var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_habitation.json';
              this.http.get(json_name).subscribe(function (data) {
                _this35.masterBlockList = data.block;
                _this35.masterHabitationList = data.habitation;
                _this35.masterLocalityList = data.localbodycode;

                if (_this35.masterBlockList) {
                  if (_this35.masterBlockList.length > 0) {
                    var blkDeleteQuery = 'DELETE FROM allBlockDetails';
                    return _this35.sqliteDB.getDataLocalDB(blkDeleteQuery).then(function (blockdata) {
                      var sqlArray = [];

                      _this35.masterBlockList.forEach(function (element) {
                        sqlArray.push(['INSERT INTO allBlockDetails VALUES (?,?,?,?)', [null, element.district_id, element.blkid, element.block_name]]);
                      });

                      _this35.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                        _this35.checkBlockLocalDB(eventval);
                      });
                    });
                  }
                }
              });
            }
          }
        }, {
          key: "checkInstiLocalDB",
          value: function checkInstiLocalDB(type, fun) {
            var _this36 = this;

            this.masterInstList = [];
            var query = 'SELECT * FROM instituteList';
            return this.sqliteDB.getDataLocalDB(query).then(function (insti) {
              if (insti.rows.length > 0) {
                var instiTemp = [];

                for (var i = 0; i < insti.rows.length; i++) {
                  instiTemp.push(insti.rows.item(i));
                }

                ;
                _this36.masterInstList = instiTemp;
                var key = 'insti_id';

                var insti_unique_list = _toConsumableArray(new Map(_this36.masterInstList.map(function (item) {
                  return [item[key], item];
                })).values());

                if (insti_unique_list) {
                  if (insti_unique_list.length > 0) {
                    var insti;

                    if (type == 1) {
                      insti = insti_unique_list.filter(function (tt) {
                        return tt.institute_id == 1;
                      });
                    } else if (type == 2) {
                      insti = insti_unique_list.filter(function (tt) {
                        return tt.institute_id == 2;
                      });
                    } else {
                      insti = insti_unique_list.filter(function (tt) {
                        return tt.institute_id == 2;
                      });
                    }

                    _this36.ooscInstiList = insti.map(function (l) {
                      return {
                        label: l.institute_name_address,
                        value: l.insti_id
                      };
                    });

                    _this36.ooscInstiList.sort(function (a, b) {
                      if (a.label < b.label) return -1;
                      if (a.label > b.label) return 1;
                      return 0;
                    });
                  }
                }

                if (fun == 'change') {
                  _this36.form.controls['MigratInsti'].setValue('');
                } else {
                  if (_this36.studentData.MigratInsti != '' && _this36.studentData.MigratInsti != null && _this36.studentData.MigratInsti != 0) {
                    _this36.form.controls['MigratInsti'].setValue({
                      value: _this36.studentData.MigratInsti,
                      label: _this36.studentData.InstituteName
                    });
                  } else {
                    _this36.form.controls['MigratInsti'].setValue('');
                  }
                }

                _this36.form.controls["MigratInsti"].updateValueAndValidity();
              } else {
                _this36.getInstitute(type, fun);
              }
            });
          }
        }]);
      }();

      _OoscquestionsPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__.UploadService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__.EmisService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationAccuracy
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_13__.SqlitedatabaseService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_14__.NetworkService
        }];
      };

      _OoscquestionsPage.propDecorators = {
        loadingPortsComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['loadingPortsComponent']
        }],
        dischargingPortsComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
          args: ['dischargingPortsComponent']
        }]
      };
      _OoscquestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-ooscquestions',
        template: _raw_loader_ooscquestions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ooscquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OoscquestionsPage);
      /***/
    },

    /***/
    82903:
    /*!******************************************************************!*\
      !*** ./src/app/pages/oosc/ooscquestions/ooscquestions.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-background-color {\n  --ion-item-background: #015f01d5;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 6px;\n  margin-right: 18px;\n  margin-left: 18px;\n}\n\n.card-align {\n  padding: 10px !important;\n  background-color: white;\n  color: black;\n}\n\n.lbl-style {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: crimson;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.item .sc-ion-label-md-h {\n  white-space: none;\n}\n\n.lbl-style1 {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.btn-style {\n  --background: crimson;\n  color: white;\n  font-weight: 800;\n  float: right;\n}\n\n.lbl-style-black {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: black;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.center {\n  margin: auto;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 34px;\n  padding-inline-end: 26px;\n}\n\nion-toggle {\n  zoom: 0.7;\n}\n\n.qus-txt {\n  font-size: 17px;\n  padding-left: 15px;\n}\n\n.index-aln {\n  padding-right: 5px;\n  color: firebrick;\n}\n\n.toggle-aln {\n  text-align: center;\n  margin-top: 4px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2.2%;\n}\n\n.area-item-style {\n  padding-left: 2%;\n}\n\n.btn-style {\n  background-color: #ff3300;\n}\n\nion-header {\n  background-color: #397ffc !important;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\nion-label {\n  font-size: 17px;\n}\n\n.radio-yn {\n  padding-right: 60px;\n  padding-left: 5px;\n}\n\n.lbl-color {\n  color: red;\n}\n\n.calendar-icon {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.error-message {\n  padding: 5px !important;\n  color: red;\n}\n\n.total {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-list {\n  background: white !important;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.upload-btn {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 16px;\n  padding-left: 15px;\n  background: #f2e6ff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 5px;\n}\n\n.upload-icon {\n  color: #8B67B3;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\nion-button {\n  --color: white !important;\n}\n\na:not([href]):not([class]) {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9vc2NxdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrREFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsMEJBQUE7RUFFQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxxQ0FBQTtBQURGIiwiZmlsZSI6Im9vc2NxdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDE1ZjAxZDU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxibC1zdHlsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNGcmVlLU5ldC1Qcm94aW1hTm92YUFsdFJlZ3VsYXJcIjtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjAxMjVlbTtcclxufVxyXG5cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICB3aGl0ZS1zcGFjZTogbm9uZTtcclxufVxyXG5cclxuLmxibC1zdHlsZTEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzRnJlZS1OZXQtUHJveGltYU5vdmFBbHRSZWd1bGFyXCI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDEyNWVtO1xyXG59XHJcblxyXG4uYnRuLXN0eWxlIHtcclxuICAtLWJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubGJsLXN0eWxlLWJsYWNrIHtcclxuICBmb250LWZhbWlseTogXCJGb250c0ZyZWUtTmV0LVByb3hpbWFOb3ZhQWx0UmVndWxhclwiO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjAxMjVlbTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTJweDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMzRweDtcclxuICAtd2Via2l0LXBhZGRpbmctZW5kOiAyNnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgem9vbTogMC43O1xyXG59XHJcblxyXG4ucXVzLXR4dCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmluZGV4LWFsbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGNvbG9yOiBmaXJlYnJpY2s7XHJcbn1cclxuXHJcbi50b2dnbGUtYWxuIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uaXRlbS1zdHlsZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjIlO1xyXG59XHJcblxyXG4uYXJlYS1pdGVtLXN0eWxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIlXHJcbn1cclxuXHJcbi5idG4tc3R5bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjMzMDA7XHJcbiAgO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3ZmZjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnJhZGlvLXluIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4ubGJsLWNvbG9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY2FsZW5kYXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweFxyXG59XHJcblxyXG4udG90YWwtdHh0IHtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG90YWwtc3VidHh0IHtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlSW5wdXQge1xyXG4gIHdpZHRoOiAwLjFweDtcclxuICBoZWlnaHQ6IDAuMXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5maWxlSW5wdXQgbGFiZWwge1xyXG4gIGNvbG9yOiAjNzE3MTcxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMmU2ZmY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi51cGxvYWQtaWNvbiB7XHJcbiAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udXNlci1pY29uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW2NsYXNzXSkge1xyXG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    60779:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/ooscquestions/ooscquestions.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\"\r\n        *ngIf=\"Id == 2 && (surveydataAllow == 1 || surveydataAllow == 0)\">OOSC Survey Questions\r\n      </div>\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\" *ngIf=\"Id == 2 && surveydataAllow == 2\">Never Enrolled Survey\r\n        Questions</div>\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\" *ngIf=\"Id == 1 || Id == 5\">OOSC Survey</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div style=\"font-size: 13px;\" class=\"user-icon-label\">\r\n          <ion-label class=\"user-icon-label\">{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\" *ngIf=\"surveydataAllow == 0\">\r\n  <ion-grid>\r\n    <div style=\"margin: 20px;\" *ngIf=\"!nesFormAllow\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:#2176b9; padding-left: 30px !important\">Survey Check</p>\r\n          </ion-label>\r\n          <div class=\"button\">\r\n            <ion-button class=\"btn-present\" (click)=\"surveyCheck()\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div style=\"margin: 20px;\" *ngIf=\"nesFormAllow\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\" class=\"item-background-color\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:white; padding-left: 30px !important\">Survey Check</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div style=\"margin: 20px;\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:#2176b9; padding-left: 30px !important\">Never Enrolled Survey Form</p>\r\n          </ion-label>\r\n          <div class=\"button\" *ngIf=\"nesFormAllow\">\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey()\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n    <form [formGroup]=\"surveyform\" *ngIf=\"surveydataAllow == 1\">\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">1. Have you gone for the survey today? <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"survey_today\" (ionChange)=\"onSurveyChange($event.detail.value)\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"surveyOtherQuestion == 1\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                  (I). If Yes, Please select the district <span class=\"lbl-color\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"survey_district\" itemValueField=\"value\" value=\"value\" itemTextField=\"label\"\r\n                  [items]=\"ooscDistrictList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onOoscDistrictChange('change',$event.value.value,'present')\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                  (II). If Yes, Please select the block <span class=\"lbl-color\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"survey_block\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscBlockList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onBlockChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                  (III). If Yes, Please select the local body <span class=\"lbl-color\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"survey_local_body\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"localBodyList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onLocalBodyChange($event.value.LoclBodyCode)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"habitationHide\">\r\n          <ion-item>\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                  (IV). If Yes, Please select the habitation <span class=\"lbl-color\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"survey_habitation\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"habitationList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">2. Have you identified a Never Enrolled child? <span\r\n                class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"survey_NEC\" (ionChange)=\"onSurveyNECChange()\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <div class=\"sumbit-button\">\r\n          <ion-button expand=\"block\" color=\"primary\" style=\"color:white\" (click)=\"onSurveySave()\"\r\n            [disabled]=\"isBtnDisabled\">Submit</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <form [formGroup]=\"form\" *ngIf=\"noData == 1 && (surveydataAllow == 2 || surveydataAllow == 3)\">\r\n      <!-- <form [formGroup]=\"form\"> -->\r\n      <!----------------------------------------- Basic Data for Type 1 ----------------------------------------------->\r\n\r\n      <ion-row class=\"total\" style=\"padding-top: 15px;\r\n        padding-bottom: 5px;\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label>Basic Data</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Question 1 -->\r\n\r\n      <ion-card *ngIf=\"Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">1.</span>Student name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"student_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"Id == '1' || Id == '4' || Id == '5'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">2.</span>Father Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"father_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"Id == '1' || Id == '4' || Id == '5'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">3.</span>Mother Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"mother_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"Id == '1'|| Id == '4' || this.Id == '5' || this.Id == '6'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">4.</span>Student Emis No</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"student_emis_no\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 2 -->\r\n      <ion-card *ngIf=\"Id == '1'|| Id == '4' || this.Id == '5' || this.Id == '6'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">5.</span>Address of the child</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-textarea formControlName=\"Address\" maxlength=\"200\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-textarea>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 -->\r\n\r\n      <ion-card *ngIf=\"Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">6.</span>Whether the child is differently\r\n              abled</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-item lines=\"none\" *ngIf=\"this.cwsn_student == 1\">\r\n              <ion-input type=\"text\" style=\"color: var(--ion-color-primary,#388);\" readonly=true>Yes</ion-input>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" *ngIf=\"this.cwsn_student == 2\">\r\n              <ion-input type=\"text\" style=\"color: var(--ion-color-primary,#388);\" readonly=true>No</ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DAyn'].hasError('required') && (form.controls['DAyn'].dirty || form.controls['DAyn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 if yes 3(i) -->\r\n      <ion-card *ngIf=\"this.form.value.DAyn == '1' && (Id == '1'|| Id == '4' || Id == '5')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">(i).</span>Disability Type</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea formControlName=\"DATypNam\" maxlength=\"200\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true disabled=\"true\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!----------------------------------------- Basic Data for Type 2----------------------------------------------->\r\n\r\n      <!-- Question 1 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">1.</span>Student name<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"StudentName\"\r\n            style=\"color: var(--ion-color-primary,#388);\" pattern=\"^[a-zA-Z \\b]+$\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['StudentName'].hasError('required') && (form.controls['StudentName'].dirty || form.controls['StudentName'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.StudentName.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 2 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">2.</span>Address of the child<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter Address\" formControlName=\"Address\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['Address'].hasError('required') && (form.controls['Address'].dirty || form.controls['Address'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3.</span>Name of the Panchayat / Municipality /\r\n              Town Panchayat / Corporation</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"Corporation\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.Corporation.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 5 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">4.</span>Aadhaar Number of the child</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"AadharNo\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"12\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.AadharNo.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 6 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\">5.</span>Gender<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Gender\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of genderList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['Gender'].hasError('required') && (form.controls['Gender'].dirty || form.controls['Gender'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 7 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">6.</span>Date of Birth</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\r\n          <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"Dob\"\r\n            style=\"padding-left:6px\" max=\"{{todayDate}}\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n\r\n      <!-- Question 8 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">7.</span>Community</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CommunityId\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of communityList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 9 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">8.</span>Religion</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ReligionId\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of religionList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 10 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">9.</span>Father Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"FatherName\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.FatherName.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 11 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">10.</span>Mother Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"MotherName\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.MotherName.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 12 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">11.</span>Guardian Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"GuardianName\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.GuardianName.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 13 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">12.</span>Residence Contact / Neighbour contact\r\n              number</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"PhoneNo\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.PhoneNo.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 14 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">13.</span>Mobile number of parent / guardian<span\r\n                class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"MobilenoParent\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" (keydown)=\"checkMobileNo()\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.MobilenoParent.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 15 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">14.</span>Alternative Mobile No <span\r\n                class=\"lbl-color\">(optional)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Alternative Mobile No\" formControlName=\"AlternativeMobileno\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" (keydown)=\"checkMobileNo()\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.AlternativeMobileno.errors?.pattern\">Invalid Format\r\n          </p>\r\n          <!-- {{mobile_error}} : mobile_error -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"mobile_error == true\">Mobile No Same With Parent / Guardian Mobile No\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 15 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">15.</span>Whether the child is differently\r\n              abled?<span class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"DAyn\" value=\"{{this.form.value.DAyn}}\"\r\n                (ionChange)=\"onDiffAbleChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DAyn'].hasError('required') && (form.controls['DAyn'].dirty || form.controls['DAyn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 15 if yes 15(i) -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.DAyn == '1' && Id == '2'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>If\r\n                yes, please choose\r\n                the category<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"DATyp\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"differentlyAbledList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DATyp'].hasError('required') && (form.controls['DATyp'].dirty || form.controls['DATyp'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ CWSN NO Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"(this.form.value.DAyn == '1' && Id == '2' && this.form.value.NidNO != '' && this.form.value.NidNO != null) || (this.form.value.DAyn == '1' && Id == '2')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>National Identity (NID) No <span\r\n                class=\"lbl-color\">(Eg:TNTLRHI40477/2019)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter National Identity (NID) No\" formControlName=\"NidNO\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,#388);\" (keyup)=\"updateNidNo($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['NidNO'].hasError('required') && (form.controls['NidNO'].dirty || form.controls['NidNO'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['NidNO'].hasError('pattern') && (form.controls['NidNO'].dirty || form.controls['NidNO'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"(this.form.value.DAyn == '1' && Id == '2' && this.form.value.NidNO != '' && this.form.value.NidNO != null) || (this.form.value.DAyn == '1' && Id == '2')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iii).</span>Unique Disability Identity(UDID)\r\n              No<span class=\"lbl-color\"> (Eg:TN0120420100090662)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Unique Disability Identity(UDID) No\" formControlName=\"UidNo\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,#388);\" (keyup)=\"updateUidNo($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>DATyp\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UidNo'].hasError('required') && (form.controls['UidNo'].dirty || form.controls['UidNo'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UidNo'].hasError('pattern') && (form.controls['UidNo'].dirty || form.controls['UidNo'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-------------------------------------------- OOSC Data Type 1 ----------------------------------------------->\r\n\r\n      <ion-row class=\"total\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label *ngIf=\"Id == '1' || Id == '5'\" class=\"ion-text-wrap\">OOSC Data</ion-label>\r\n          <ion-label *ngIf=\"Id == '2'\" class=\"ion-text-wrap\">Never Enrolled Data</ion-label>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Question 2 -->\r\n      <ion-card *ngIf=\"Id == '1' || Id == '5'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">1.</span>Reason for drop out<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutRsn\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonfordropoutListoosc\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutEventChange($event.value,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsn'].hasError('required') && (form.controls['DrpOutRsn'].dirty || form.controls['DrpOutRsn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">1.</span>Reason for never enrolled<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutRsn\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonfordropoutList\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutEventChange($event.value,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsn'].hasError('required') && (form.controls['DrpOutRsn'].dirty || form.controls['DrpOutRsn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Special Type------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '30' || this.form.value.DrpOutRsn.value == '31')\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\">2.</span>Type\r\n                of Special Needs<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"splNeedTyp\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"specialNeedTypes\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                  padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsn'].hasError('required') && (form.controls['DrpOutRsn'].dirty || form.controls['DrpOutRsn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Nomads Type------------------->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '80'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\">2.</span>Type\r\n                of Nomads<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"nomadTyp\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"nomadTypes\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                padding-right: 10px;\"\r\n            *ngIf=\"form.controls['nomadTyp'].hasError('required') && (form.controls['nomadTyp'].dirty || form.controls['nomadTyp'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Ration Card Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '6' || this.form.value.DrpOutRsn.value =='7'|| this.form.value.DrpOutRsn.value =='9' || this.form.value.DrpOutRsn.value =='11' || this.form.value.DrpOutRsn.value =='17' || this.form.value.DrpOutRsn.value =='18' || this.form.value.DrpOutRsn.value =='80' || this.form.value.DrpOutRsn.value =='27'|| this.form.value.DrpOutRsn.value =='28'|| this.form.value.DrpOutRsn.value =='29'|| this.form.value.DrpOutRsn.value =='30'|| this.form.value.DrpOutRsn.value =='31'|| this.form.value.DrpOutRsn.value =='50' || this.form.value.DrpOutRsn.value =='62' || this.form.value.DrpOutRsn.value =='79')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>Ration Card Number\r\n              <!-- <span class=\"lbl-color\">*</span>  -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Ration Card Number\" formControlName=\"RatnCrdNum\"\r\n            maxlength=\"12\" style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <!-- <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RatnCrdNum'].hasError('required') && (form.controls['RatnCrdNum'].dirty || form.controls['RatnCrdNum'].touched)\">\r\n            Field is required</p> -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RatnCrdNum'].hasError('pattern') && (form.controls['RatnCrdNum'].dirty || form.controls['RatnCrdNum'].touched)\">\r\n            Invalid card Number</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '6' || this.form.value.DrpOutRsn.value =='7'|| this.form.value.DrpOutRsn.value =='9' || this.form.value.DrpOutRsn.value =='11' || this.form.value.DrpOutRsn.value =='17' || this.form.value.DrpOutRsn.value =='18' || this.form.value.DrpOutRsn.value =='80' || this.form.value.DrpOutRsn.value =='27'|| this.form.value.DrpOutRsn.value =='28'|| this.form.value.DrpOutRsn.value =='29'|| this.form.value.DrpOutRsn.value =='30'|| this.form.value.DrpOutRsn.value =='31' || this.form.value.DrpOutRsn.value =='50' || this.form.value.DrpOutRsn.value =='62' || this.form.value.DrpOutRsn.value =='79')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Ration Card Holder Name\r\n              <!-- <span class=\"lbl-color\">*</span> -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Ration Card Holder Name\" formControlName=\"RatnCrdHldrNam\"\r\n            maxlength=\"50\" style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <!-- <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RatnCrdHldrNam'].hasError('required') && (form.controls['RatnCrdHldrNam'].dirty || form.controls['RatnCrdHldrNam'].touched)\">\r\n            Field is required</p> -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RatnCrdHldrNam'].hasError('pattern') && (form.controls['RatnCrdHldrNam'].dirty || form.controls['RatnCrdHldrNam'].touched)\">\r\n            Invalid Name</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '6' || this.form.value.DrpOutRsn.value =='7'|| this.form.value.DrpOutRsn.value =='9' || this.form.value.DrpOutRsn.value =='11' || this.form.value.DrpOutRsn.value =='17' || this.form.value.DrpOutRsn.value =='18' || this.form.value.DrpOutRsn.value =='80' || this.form.value.DrpOutRsn.value =='27'|| this.form.value.DrpOutRsn.value =='28'|| this.form.value.DrpOutRsn.value =='29'|| this.form.value.DrpOutRsn.value =='30'|| this.form.value.DrpOutRsn.value =='31' || this.form.value.DrpOutRsn.value =='50' || this.form.value.DrpOutRsn.value =='62' || this.form.value.DrpOutRsn.value =='79')\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                <span class=\"index-aln\">(iii).</span>Category\r\n                <!-- <span class=\"lbl-color\">*</span> -->\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RatnCardCat\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"carditem.value\" *ngFor=\"let carditem of RationCardCategoryList\">\r\n                {{carditem.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n        <!-- <ion-row> -->\r\n        <!-- <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RatnCardCat'].hasError('required') && (form.controls['RatnCardCat'].dirty || form.controls['RatnCardCat'].touched)\">\r\n            Field is required</p> -->\r\n        <!-- </ion-row> -->\r\n      </ion-card>\r\n\r\n      <!-- {{this.form.value.crctAddrYN}} : Correct Address -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '58'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\">(i).</span>Is the address correct?<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"crctAddrYN\" value=\"{{this.form.value.crctAddrYN}}\"\r\n                (ionChange)=\"onCrctAddrChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['crctAddrYN'].hasError('required') && (form.controls['crctAddrYN'].dirty || form.controls['crctAddrYN'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '27'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\">(iv).</span>Is the Earning parent alive?<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"parentLive\" value=\"{{this.form.value.parentLive}}\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n        padding-right: 10px;\"\r\n            *ngIf=\"form.controls['parentLive'].hasError('required') && (form.controls['parentLive'].dirty || form.controls['parentLive'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '79'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\">(iv).</span>Category<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"slumCaty\" value=\"{{this.form.value.slumCaty}}\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Evicted</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">Relocated</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['slumCaty'].hasError('required') && (form.controls['slumCaty'].dirty || form.controls['slumCaty'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- {{this.form.value.MigrntYN}} : Migrnt parents -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN != null)\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\">(i).</span>Type of Migration<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"MigratBound\" value=\"{{this.form.value.MigratBound}}\"\r\n                (ionChange)=\"onMigratBoundChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Inbound</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">Outbound</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratBound'].hasError('required') && (form.controls['MigratBound'].dirty || form.controls['MigratBound'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- {{this.form.value.MigratBound}} : MigratBound -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '20' && (this.form.value.MigratBound == '1' || this.form.value.MigratBound == '2')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Migration status of the student<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"MigrntYN\" value=\"{{this.form.value.MigrntYN}}\"\r\n                (ionChange)=\"onMigrantChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 1\">Migrated from other country</span> <span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 2\">Migrated to other country</span>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"3\"></ion-radio><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 1\">Migrated from other state</span><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 2\">Migrated to other state</span>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 1\">Migrated from other district</span><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 2\">Migrated to other district</span>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"4\"></ion-radio><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 1\">Migrated from other block</span><span class=\"radio-yn\"\r\n                    *ngIf=\"this.form.value.MigratBound == 2\">Migrated to other block</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigrntYN'].hasError('required') && (form.controls['MigrntYN'].dirty || form.controls['MigrntYN'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && ((this.form.value.DrpOutRsn.value == '56') || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigratBound != '' && this.form.value.MigrntYN == '1'))\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN == '1'\">(iii).</span>\r\n                <span class=\"index-aln\" *ngIf=\"this.form.value.DrpOutRsn.value == '56'\">(i).</span>\r\n                Country<span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"MigratCountry\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscCountryList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratCountry'].hasError('required') && (form.controls['MigratCountry'].dirty || form.controls['MigratCountry'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n      *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value =='68' || this.form.value.DrpOutRsn.value =='77' || this.form.value.DrpOutRsn.value =='78')\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n          <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>School Name\r\n            <span class=\"lbl-color\">*</span>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item lines=\"none\" class=\"item-style\">\r\n        <ion-input type=\"text\" placeholder=\"Please Enter School Name\" formControlName=\"UrSchlName\" maxlength=\"150\"\r\n          style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n        padding-right: 10px;\"\r\n          *ngIf=\"form.controls['UrSchlName'].hasError('required') && (form.controls['UrSchlName'].dirty || form.controls['UrSchlName'].touched)\">\r\n          Field is required</p>\r\n        <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n          *ngIf=\"form.controls['UrSchlName'].hasError('pattern') && (form.controls['UrSchlName'].dirty || form.controls['UrSchlName'].touched)\">\r\n          Invalid school name</p>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <!------------------ Class ------------------->\r\n    <ion-card\r\n    *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value =='68'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n        <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Class\r\n          <span class=\"lbl-color\">*</span>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item lines=\"none\" class=\"item-style\">\r\n      <ion-input type=\"text\" placeholder=\"Please Enter School Name\" formControlName=\"OSCclass\" maxlength=\"3\"\r\n        style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n      padding-right: 10px;\"\r\n        *ngIf=\"form.controls['OSCclass'].hasError('required') && (form.controls['OSCclass'].dirty || form.controls['OSCclass'].touched)\">\r\n        Field is required</p>\r\n      <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n        padding-right: 10px;\"\r\n        *ngIf=\"form.controls['OSCclass'].hasError('pattern') && (form.controls['OSCclass'].dirty || form.controls['OSCclass'].touched)\">\r\n        Invalid Class</p>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n      <!-- State Dropdown -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '51' || this.form.value.DrpOutRsn.value == '68' || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigratBound != '' && this.form.value.MigrntYN == '3'))\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"(this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN == '3') || this.form.value.DrpOutRsn.value == '68'\">(iii).</span>\r\n                <span class=\"index-aln\" *ngIf=\"this.form.value.DrpOutRsn.value == '51'\">(i).</span>\r\n                State<span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"MigratState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscStateList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscClearAddr($event,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratState'].hasError('required') && (form.controls['MigratState'].dirty || form.controls['MigratState'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- District Dropdown -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '53' || this.form.value.DrpOutRsn.value == '55' || this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66') || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigratBound != '' && (this.form.value.MigrntYN == '2' || this.form.value.MigrntYN == '4'))\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"this.form.value.DrpOutRsn.value == '20' && (this.form.value.MigrntYN == '2' || this.form.value.MigrntYN == '4')\">(iii).</span>\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"this.form.value.DrpOutRsn.value == '53' || this.form.value.DrpOutRsn.value == '55' || this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66'\">(i).</span>\r\n                District<span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"MigratDist\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscDistrictList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscDistrictChange('change',$event.value.value,'drop')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratDist'].hasError('required') && (form.controls['MigratDist'].dirty || form.controls['MigratDist'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- <ion-card *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '55' || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN == '4'))\"> -->\r\n      <!-- <div *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '55' || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN == '4'))\"> -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '55' || this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66' || (this.form.value.DrpOutRsn.value == '20' && this.form.value.MigratBound != '' && this.form.value.MigrntYN == '4'))\">\r\n\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"this.form.value.DrpOutRsn.value == '20' && this.form.value.MigrntYN == '4'\">(iv).</span>\r\n                <span class=\"index-aln\"\r\n                  *ngIf=\"this.form.value.DrpOutRsn.value == '55' || this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66'\">(ii).</span>\r\n                Block<span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable\r\n                *ngIf=\"this.form.value.MigratDist?.value != '' && this.form.value.MigratDist?.value != null && this.form.value.MigratDist?.value != undefined\"\r\n                style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\" formControlName=\"MigratBlock\"\r\n                itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscBlockList\" [canSearch]=\"true\"\r\n                closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onOoscClearAddr($event,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratBlock'].hasError('required') && (form.controls['MigratBlock'].dirty || form.controls['MigratBlock'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n      <!-- </div> -->\r\n\r\n\r\n      <!-- Question 4 if Outgoing Student 4(ii) -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '51' || this.form.value.DrpOutRsn.value == '53' || this.form.value.DrpOutRsn.value == '55') && (Id == '1' || Id == '5')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value != '55'\">(ii).</span>\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '55'\">(iii).</span>\r\n              Outgoing Address (including state, district)<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-textarea placeholder=\"Please Enter Outgoing Address\" formControlName=\"MigrntAddrs\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigrntAddrs'].hasError('required') && (form.controls['MigrntAddrs'].dirty || form.controls['MigrntAddrs'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"padding-left:0px\"\r\n            *ngIf=\"this.form.controls['MigrntAddrs'].hasError('pattern')\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Institute Dropdown -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '38' || this.form.value.DrpOutRsn.value == '39')\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span\r\n                  class=\"index-aln\">(i).</span>Institute\r\n                <span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable #portComponent style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"MigratInsti\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscInstiList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"onOoscInstiChange($event,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['MigratInsti'].hasError('required') && (form.controls['MigratInsti'].dirty || form.controls['MigratInsti'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Industrial Schools Name -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '40' || this.form.value.DrpOutRsn.value == '41' ||this.form.value.DrpOutRsn.value == '65' || this.form.value.DrpOutRsn.value == '66' || this.form.value.DrpOutRsn.value == '76')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn.value != '41' && this.form.value.DrpOutRsn.value != '66'\">(i).</span>\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66'\">(iii).</span>\r\n              institution Name\r\n              <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"InstName\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['InstName'].hasError('required') && (form.controls['InstName'].dirty || form.controls['InstName'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"padding-left:0px\" *ngIf=\"this.form.controls['InstName'].hasError('pattern')\">\r\n            Invalid Institute Name\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- roll number -->\r\n      <ion-card\r\n        *ngIf=\"(this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '40') || (this.form.value.MigratInsti?.value != '' && this.form.value.MigratInsti?.value != null && this.form.value.MigratInsti?.value != undefined)\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Roll Number\r\n              <!-- <span class=\"lbl-color\">*</span> -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Roll Number\" formControlName=\"RollNum\" maxlength=\"15\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <!-- <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RollNum'].hasError('required') && (form.controls['RollNum'].dirty || form.controls['RollNum'].touched)\">\r\n            Field is required</p> -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['RollNum'].hasError('pattern') && (form.controls['RollNum'].dirty || form.controls['RollNum'].touched)\">\r\n            Invalid Roll Number</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Department -->\r\n      <ion-card\r\n        *ngIf=\"(this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '40') || (this.form.value.MigratInsti?.value != '' && this.form.value.MigratInsti?.value != null && this.form.value.MigratInsti?.value != undefined)\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iii).</span>Department\r\n              <!-- <span class=\"lbl-color\">*</span> -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Roll Number\" formControlName=\"Department\" maxlength=\"30\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <!-- <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                padding-right: 10px;\"\r\n                *ngIf=\"form.controls['RollNum'].hasError('required') && (form.controls['RollNum'].dirty || form.controls['RollNum'].touched)\">\r\n                Field is required</p> -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                  padding-right: 10px;\"\r\n            *ngIf=\"form.controls['Department'].hasError('pattern') && (form.controls['Department'].dirty || form.controls['Department'].touched)\">\r\n            Invalid Department</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- panchayat Name -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '59'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>Panchayat Name\r\n              <!-- <span class=\"lbl-color\">*</span> -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Panchayat Name\" formControlName=\"OSCPanchayat\" maxlength=\"100\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n          *ngIf=\"form.controls['OSCPanchayat'].hasError('required') && (form.controls['OSCPanchayat'].dirty || form.controls['OSCPanchayat'].touched)\">\r\n          Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['OSCPanchayat'].hasError('pattern') && (form.controls['OSCPanchayat'].dirty || form.controls['OSCPanchayat'].touched)\">\r\n            Invalid Panchayat Name</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Habitation Name -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '59'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Habitation Name\r\n              <!-- <span class=\"lbl-color\">*</span> -->\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Habitation Name\" formControlName=\"OSCHabitation\" maxlength=\"100\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n          *ngIf=\"form.controls['OSCHabitation'].hasError('required') && (form.controls['OSCHabitation'].dirty || form.controls['OSCHabitation'].touched)\">\r\n          Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['OSCHabitation'].hasError('pattern') && (form.controls['OSCHabitation'].dirty || form.controls['OSCHabitation'].touched)\">\r\n            Invalid Habitation Name</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Industrial Schools Name -->\r\n      <!-- <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '40' || this.form.value.DrpOutRsn.value == '41' ||this.form.value.DrpOutRsn.value == '65' || this.form.value.DrpOutRsn.value == '66' || this.form.value.DrpOutRsn.value == '76')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn.value != '41' && this.form.value.DrpOutRsn.value != '66'\">(i).</span>\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"this.form.value.DrpOutRsn.value == '41' || this.form.value.DrpOutRsn.value == '66'\">(iii).</span>\r\n              institution Name\r\n              <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"InstName\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                padding-right: 10px;\"\r\n            *ngIf=\"form.controls['InstName'].hasError('required') && (form.controls['InstName'].dirty || form.controls['InstName'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"padding-left:0px\" *ngIf=\"this.form.controls['InstName'].hasError('pattern')\">\r\n            Invalid Institute Name\r\n          </p>\r\n        </ion-row>\r\n      </ion-card> -->\r\n\r\n      <!-- image Upload -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '37' || this.form.value.DrpOutRsn.value == '46' || this.form.value.DrpOutRsn.value == '47' || this.form.value.DrpOutRsn.value == '57')\">\r\n        <ion-row class=\"bck\">\r\n          <ion-col size=\"12\" class=\"txtspace\">\r\n            <div style=\"padding: 15px;\">\r\n              <ion-label class=\"ion-text-wrap\" class=\"lbl\"\r\n                *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '37'\">\r\n                <span class=\"index-aln\">(i).</span>Upload Death Certificate/Authenticated letter from HM/SMC\r\n                Members”<span class=\"lbl-color\">(Allow only pdf and\r\n                  image)*</span>\r\n              </ion-label>\r\n              <ion-label class=\"ion-text-wrap\" class=\"lbl\"\r\n                *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '47'\">\r\n                <span class=\"index-aln\">(i).</span>Upload MarkSheet<span class=\"lbl-color\">(Allow only pdf and\r\n                  image)*</span>\r\n              </ion-label>\r\n              <ion-label class=\"ion-text-wrap\" class=\"lbl\"\r\n                *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '46' || this.form.value.DrpOutRsn.value == '57')\">\r\n                <span class=\"index-aln\">(i).</span>Upload Aadhaar, Age proof, Birth certificate<span\r\n                  class=\"lbl-color\">(Allow only pdf and image)*</span>\r\n              </ion-label><br><br>\r\n              <input type=\"file\" name=\"file\" id=\"file\" accept=\"image/*, application/pdf\" class=\"fileInput\"\r\n                (change)=\"ondropoutUpload($event)\" />\r\n            </div>\r\n\r\n            <ion-row class=\"upload-btn txtspace\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\">\r\n                <label for=\"file\" class=\"upload-txt\">\r\n                  Click to Upload\r\n                </label><br>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"12\" style=\"text-align: center;\">\r\n\r\n                <img *ngIf=\"image1 != '' && image1 != null && image1 != undefined && imgext != 'pdf'\" src=\"{{image1}}\"\r\n                  class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewDoc('modal')\">\r\n                <a *ngIf=\"image1 != '' && image1 != null && image1 != undefined && imgext == 'pdf'\"\r\n                  (click)=\"viewDoc('modal')\">{{imageKey}}</a>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['dropOutFile'].hasError('required') && (form.controls['dropOutFile'].dirty || form.controls['dropOutFile'].touched || form.controls['dropOutFile'].value == 0)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- DOB -->\r\n\r\n      <ion-card\r\n        *ngIf=\"(Id == '1' || Id == '5') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null) && (this.form.value.DrpOutRsn.value == '46' || this.form.value.DrpOutRsn.value == '57')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Date of Birth<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\r\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"DropOutDob\" style=\"padding-left:6px\"\r\n            max=\"{{todayDate}}\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DropOutDob'].hasError('required') && (form.controls['DropOutDob'].dirty || form.controls['DropOutDob'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Home School Address ------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '58' && this.form.value.crctAddrYN == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Current Address<span\r\n                class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter Current Address\" formControlName=\"currentAddr\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['currentAddr'].hasError('required') && (form.controls['currentAddr'].dirty || form.controls['currentAddr'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['currentAddr'].hasError('pattern') && (form.controls['currentAddr'].dirty || form.controls['currentAddr'].touched)\">\r\n            Invalid Address</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <!------------------ Present Guardian Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '26'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>Guardian Name<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Guardian Name\" formControlName=\"GuardName\" maxlength=\"50\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['GuardName'].hasError('required') && (form.controls['GuardName'].dirty || form.controls['GuardName'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['GuardName'].hasError('pattern') && (form.controls['GuardName'].dirty || form.controls['GuardName'].touched)\">\r\n            Invalid Name</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '26'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Address<span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter Address\" formControlName=\"GardAddr\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['GardAddr'].hasError('required') && (form.controls['GardAddr'].dirty || form.controls['GardAddr'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['GardAddr'].hasError('pattern') && (form.controls['GardAddr'].dirty || form.controls['GardAddr'].touched)\">\r\n            Invalid Address</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Duplicate Entry Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '36'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>If the student studying same\r\n              school?<span class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"SchlDetl\" value=\"{{this.form.value.SchlDetl}}\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['SchlDetl'].hasError('required') && (form.controls['SchlDetl'].dirty || form.controls['SchlDetl'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '36'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>Actual EMIS No<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Actual EMIS No\" formControlName=\"EmisNo\" maxlength=\"10\"\r\n            (ionChange)=\"checkEmisNo()\" style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['EmisNo'].hasError('required') && (form.controls['EmisNo'].dirty || form.controls['EmisNo'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['EmisNo'].hasError('pattern') && (form.controls['EmisNo'].dirty || form.controls['EmisNo'].touched)\">\r\n            Invalid EMIS No</p>\r\n\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ Duplicate Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iii).</span>StudentName</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"dupStudName\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iv).</span>FatherName</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"dupFatherName\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(v).</span>MotherName</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"dupMotherName\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(vi).</span>Aadhaar No</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"dupAadhar\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(vi).</span>DOB\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"dupDOB\" style=\"color: var(--ion-color-primary,#388);\" readonly=true>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-row\r\n        *ngIf=\"this.form.value.EmisNo != '' && this.form.value.EmisNo != null && this.form.controls.EmisNo.valid == true && cnfmBtn == false\">\r\n        <ion-col size=\"small\" (click)=\"duplicateConfirmation()\" size=\"1\" class=\"qus-txt\" style=\"padding-bottom:0px;\"\r\n          float-right>\r\n          <ion-badge color=\"success\" style=\"padding-right:10px;padding-left:10px;\">Confirm</ion-badge>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!------------------ CWSN NO Details------------------->\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '30' || this.form.value.DrpOutRsn.value == '31')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iv).</span>National Identity (NID) No<span\r\n                class=\"lbl-color\"> (Eg:TNTLRHI40477/2019)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter National Identity (NID)  No\" formControlName=\"NidNO\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,#388);\" (keyup)=\"updateNidNo($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['NidNO'].hasError('required') && (form.controls['NidNO'].dirty || form.controls['NidNO'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['NidNO'].hasError('pattern') && (form.controls['NidNO'].dirty || form.controls['NidNO'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '30' || this.form.value.DrpOutRsn.value == '31')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(v).</span>Unique Disability Identity(UDID) No<span\r\n                class=\"lbl-color\"> (Eg:TN0120420100090662)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Unique Disability Identity(UDID) No\" formControlName=\"UidNo\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,rgb(13, 18, 18));\" (keyup)=\"updateUidNo($event)\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UidNo'].hasError('required') && (form.controls['UidNo'].dirty || form.controls['UidNo'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UidNo'].hasError('pattern') && (form.controls['UidNo'].dirty || form.controls['UidNo'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <!-- Question 3 -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.OSCTyp == '2' && (Id == '1' || Id == '5')\">\r\n        <ion-item>\r\n          <ion-row>\r\n\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\">3.</span>If\r\n                Existing, Present\r\n                status of the child <span class=\"index-aln\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"OSCPrsntSts\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of presentStatusList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['OSCPrsntSts'].hasError('required') && (form.controls['OSCPrsntSts'].dirty || form.controls['OSCPrsntSts'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n    <!------------------ School Address ------------------->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value =='77'|| this.form.value.DrpOutRsn.value =='78')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>School Address\r\n              <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter School Address\" formControlName=\"UrSchlAddre\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UrSchlAddre'].hasError('required') && (form.controls['UrSchlAddre'].dirty || form.controls['UrSchlAddre'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UrSchlAddre'].hasError('pattern') && (form.controls['UrSchlAddre'].dirty || form.controls['UrSchlAddre'].touched)\">\r\n            Invalid school address</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------ School Contact Number ------------------->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value =='77'|| this.form.value.DrpOutRsn.value =='78')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iii).</span>School Contact Number\r\n              <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter School Contact Number\" formControlName=\"UrSchlContact\"\r\n            maxlength=\"10\" style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n        padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UrSchlContact'].hasError('required') && (form.controls['UrSchlContact'].dirty || form.controls['UrSchlContact'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['UrSchlContact'].hasError('pattern') && (form.controls['UrSchlContact'].dirty || form.controls['UrSchlContact'].touched)\">\r\n            Invalid card Number</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!------------------------------------------ Present status of the child ------------------------------------------->\r\n\r\n      <ion-row class=\"total\" *ngIf=\"Id == '2'\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label class=\"ion-text-wrap\">Present status of the child</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Question 1 -->\r\n\r\n      <ion-card\r\n        *ngIf=\"active && (Id == '2' || (Id == '1' && this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '75'))\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span *ngIf=\"Id == '2'\" class=\"index-aln\">1.</span>\r\n                <span *ngIf=\"Id == '1'\" class=\"index-aln\">(i).</span>\r\n                District<span *ngIf=\"Id == '1'\" class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"DistrictId\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscDistrictList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscDistrictChange('change',$event.value.value,'present')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px; padding-right: 10px;\"\r\n            *ngIf=\"Id == '1' && form.controls['DistrictId'].hasError('required') && (form.controls['DistrictId'].dirty || form.controls['DistrictId'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 2 -->\r\n\r\n      <ion-card\r\n        *ngIf=\"active && (Id == '2' || (Id == '1' && this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '75'))\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span *ngIf=\"Id == '2'\" class=\"index-aln\">2.</span>\r\n                <span *ngIf=\"Id == '1'\" class=\"index-aln\">(ii).</span>\r\n                Block<span *ngIf=\"Id == '1'\" class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"block\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscBlockList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscBlockChange($event.value.value,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px; padding-right: 10px;\"\r\n            *ngIf=\"Id == '1' && form.controls['block'].hasError('required') && (form.controls['block'].dirty || form.controls['block'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 -->\r\n\r\n      <ion-card\r\n        *ngIf=\"active && (Id == '2'  || (Id == '1' && this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '75'))\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span *ngIf=\"Id == '2'\" class=\"index-aln\">3.</span>\r\n                <span *ngIf=\"Id == '1'\" class=\"index-aln\">(iii).</span>\r\n                Name of the school where the child is enrolled after identification<span *ngIf=\"Id == '1'\"\r\n                  class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"AdmitSchool\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscSchoolList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onOoscSchoolChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"Id == '1' && form.controls['AdmitSchool'].hasError('required') && (form.controls['AdmitSchool'].dirty || form.controls['AdmitSchool'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 4 -->\r\n\r\n      <ion-card\r\n        *ngIf=\"Id == '2' || (Id == '1' && this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value == '75')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <!-- <span class=\"index-aln\" *ngIf=\"active\">4.</span>\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"!active\">2.</span> -->\r\n\r\n              <span *ngIf=\"Id == '2'\" class=\"index-aln\">4.</span>\r\n              <span *ngIf=\"Id == '1'\" class=\"index-aln\">(iv).</span>\r\n              UDISE Code of the school\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"AdmitSchlID\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.AdmitSchlID.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 5 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\" *ngIf=\"active\">5.</span><span class=\"index-aln\"\r\n                *ngIf=\"!active\">3.</span>Emis Number</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"AdmsnNo\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.AdmsnNo.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 6 -->\r\n\r\n      <ion-card *ngIf=\"Id == '2'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span class=\"index-aln\"\r\n                  *ngIf=\"active\">6.</span><span class=\"index-aln\" *ngIf=\"!active\">4.</span>Whether the child is\r\n                studying in formal school through Direct Enrolment or Special Training Centre</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"DirctSpcl\"\r\n              style=\"max-width: 100% !important;padding-left:0px\"\r\n              (ionChange)=\"formalSchlChange($event.detail.value,'change')\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of formalSchoolList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"this.form.value.DirctSpcl == '2' && Id == '2'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\"\r\n                  *ngIf=\"active\">(i).</span><span class=\"index-aln\" *ngIf=\"!active\">5.</span>Location of the Special\r\n                Training Centre (NRSTC/RSTC/KGBV/ARS)<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SpclTrngTyp\"\r\n              style=\"max-width: 100% !important;padding-left:0px\"\r\n              (ionChange)=\"getResdSchoolList($event.detail.value,'change')\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of specialTrainingList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['SpclTrngTyp'].hasError('required') && (form.controls['SpclTrngTyp'].dirty || form.controls['SpclTrngTyp'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Institute Dropdown -->\r\n      <ion-card\r\n        *ngIf=\"this.form.value.DirctSpcl == '2' && this.form.value.SpclTrngTyp != '' && this.form.value.SpclTrngTyp != null && this.form.value.SpclTrngTyp != 0 && this.form.value.SpclTrngTyp != 'undefined'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span\r\n                  class=\"index-aln\">(ii).</span>Special Training centers<span class=\"index-aln\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"SplSchl\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"resiSchlList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"onSplSchlChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['SplSchl'].hasError('required') && (form.controls['SplSchl'].dirty || form.controls['SplSchl'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"this.form.value.SplSchl?.value != '' && this.form.value.SplSchl?.value != null && this.form.value.SpclTrngTyp != '1' && this.form.value.DirctSpcl == '2'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\" *ngIf=\"active\">(iii).</span>UDISE Code of the\r\n              school <span class=\"index-aln\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"SplSchlUdise\"\r\n            style=\"color: var(--ion-color-primary,#388);\" readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 8 -->\r\n\r\n      <!-- </div> -->\r\n\r\n      <!-- Help -->\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <!-- {{this.form.value.DrpOutRsn.value}} : DrpOutRsn -->\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value == '' || this.form.value.DrpOutRsn?.value == null)\">2.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value != '80' && this.form.value.DrpOutRsn.value != '30'))\">2.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '80' || this.form.value.DrpOutRsn.value == '30'))\">3.</span>\r\n\r\n              <span class=\"index-aln\" *ngIf=\"Id == '2'\">6.</span>Do you need any Department’s help? <span\r\n                class=\"index-aln\">*</span>\r\n            </ion-label>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"help\" value=\"{{this.form.value.help}}\"\r\n                (ionChange)=\"onHelpChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\" disabled=\"{{this.releventDepartments.length > 0 ? 'false' : 'true'}}\"> \r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['help'].hasError('required') && (form.controls['help'].dirty || form.controls['help'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- {{this.form.value.help}} : help {{releventDepartments.length}} : releventDepartments -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.help == '1'&& releventDepartments.length > 0\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span\r\n                  class=\"index-aln\">(i).</span>Relevant Department<span class=\"lbl-color\"\r\n                  *ngIf=\"this.releventDepartments.length > 0\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"relDprt\" itemValueField=\"id\" itemTextField=\"related_dept\" [items]=\"releventDepartments\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['relDprt'].hasError('required') && (form.controls['relDprt'].dirty || form.controls['relDprt'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Remarks -->\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <!-- <span class=\"index-aln\" *ngIf=\"Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6'\">3.</span>                \r\n              <span class=\"index-aln\" *ngIf=\"Id == '2'\">7.</span> -->\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value == '' || this.form.value.DrpOutRsn?.value == null)\">3.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value != '80' && this.form.value.DrpOutRsn.value != '30'))\">3.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '80' || this.form.value.DrpOutRsn.value == '30'))\">4.</span>\r\n              Remarks\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-textarea placeholder=\"Please Enter Your Remarks\" formControlName=\"Remrks\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.Remrks.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <!-- image Upload -->\r\n      <ion-card>\r\n        <ion-row class=\"bck\">\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <!-- <span class=\"index-aln\" *ngIf=\"Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6'\">4.</span>\r\n              <span class=\"index-aln\" *ngIf=\"Id == '2'\">8.</span> -->\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value == '' || this.form.value.DrpOutRsn?.value == null)\">4.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value != '80' && this.form.value.DrpOutRsn.value != '30'))\">4.</span>\r\n\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"(Id == '1' || Id == '4' || this.Id == '5' || this.Id == '6') && (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && (this.form.value.DrpOutRsn.value == '80' || this.form.value.DrpOutRsn.value == '30'))\">8.</span>\r\n\r\n              Take Photo\r\n              <span class=\"lbl-color\"\r\n                *ngIf=\"(this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value != '37') || (this.form.value.DrpOutRsn?.value == '' || this.form.value.DrpOutRsn?.value == null || this.form.value.DrpOutRsn?.value == undefined)\">\r\n                (Please Include Survey Photo)*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <ion-icon name=\"camera\" style=\"font-size: 70px;padding-top: 12px;color: #343232;\" width=\"600\" height=\"100\"\r\n                (click)=\"openCameraOn()\"></ion-icon>\r\n            </div><br>\r\n            <ion-label style=\"text-align: center;\">Camera</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div style=\"text-align: center;\">\r\n              <p style=\"font-size: 12px;\">(Or)</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"align-self: end;text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <input type=\"file\" name=\"file1\" id=\"file1\" accept=\"image/*\" class=\"fileInput\"\r\n                (change)=\"onUploadFile($event)\" />\r\n              <label for=\"file1\" class=\"upload-txt\">\r\n                <div style=\"align-self: center;\">\r\n                  <img src=\"../../assets/icons/images.png\" style=\"height: 30%;width: 65%;\">\r\n                </div>\r\n              </label>\r\n            </div><br>\r\n\r\n            <ion-label style=\"text-align: center;\">Gallery</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" style=\"text-align: center;\">\r\n            <div>\r\n              <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n                class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewPic('modal')\">\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['CameraFile'].hasError('required') && (form.controls['CameraFile'].dirty || form.controls['CameraFile'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <div class=\"sumbit-button\">\r\n          <ion-button expand=\"block\" (click)=\"onSave()\" [disabled]=\"isBtnDisabled || this.mobile_error == true\">\r\n            Submit</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_ooscquestions_ooscquestions_module_ts-es5.js.map