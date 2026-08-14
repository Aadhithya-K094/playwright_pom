(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-inspection_module_ts"], {
    /***/
    45448:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection-routing.module.ts ***!
      \*********************************************************************************/

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
      28719);

      var routes = [{
        path: '',
        component: _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPage
      }, {
        path: 'my-inspections',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_itk-center-support_my-inspections_my-inspections_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./my-inspections/my-inspections.module */
          32381)).then(function (m) {
            return m.MyInspectionsPageModule;
          });
        }
      }, {
        path: 'student-attendance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_itk-center-support_student-attendance_student-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./student-attendance/student-attendance.module */
          88203)).then(function (m) {
            return m.StudentAttendancePageModule;
          });
        }
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
    18667:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection.module.ts ***!
      \*************************************************************************/

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
      45448);
      /* harmony import */


      var _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection.page */
      28719);

      var _VolunteerInspectionPageModule = /*#__PURE__*/_createClass(function VolunteerInspectionPageModule() {
        _classCallCheck(this, VolunteerInspectionPageModule);
      });

      _VolunteerInspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _volunteer_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPageRoutingModule],
        declarations: [_volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerInspectionPage]
      })], _VolunteerInspectionPageModule);
      /***/
    },

    /***/
    28719:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection.page.ts ***!
      \***********************************************************************/

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


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./volunteer-inspection.page.html */
      95419);
      /* harmony import */


      var _volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection.page.scss */
      19256);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../commonpages/view-image/view-image.page */
      29535);

      var _VolunteerInspectionPage = /*#__PURE__*/function () {
        function VolunteerInspectionPage(route, navCtrl, fb, alertService, userSessionService, emisService, router, uploadService, modalCtrl, geolocation, androidPermissions, locationAccuracy, camera, file) {
          _classCallCheck(this, VolunteerInspectionPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.router = router;
          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl;
          this.geolocation = geolocation;
          this.androidPermissions = androidPermissions;
          this.locationAccuracy = locationAccuracy;
          this.camera = camera;
          this.file = file;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe('en-US');
          this.queslist = [];
          this.doc1Uploaded = false;
          this.showSave = true;

          if (this.route.snapshot.paramMap.get('details') == 'volunteer') {
            this.pageId = 1;
            this.volunteerDetails = JSON.parse(this.route.snapshot.paramMap.get('data'));
          } else {
            this.pageId = 2;
            this.inspectionDetails = JSON.parse(this.route.snapshot.paramMap.get('data'));
          }
        }

        return _createClass(VolunteerInspectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.paramsVolunteerId = this.routeData.params.volunteerId;
            this.paramsSearchTxt = this.routeData.params.searchTxt;
            this.paramsPageid = this.routeData.params.pageid;
            this.userId = this.userSessionService.emis_user_id();
            this.today = this.pipe.transform(new Date(), 'yyyy-MM-dd');

            if (this.inspectionDetails) {
              this.loadQuestions(this.inspectionDetails);
              this.showSave = false;
            } else {
              this.getQuestions();
              this.showSave = true;
            }

            this.checkGPSPermission();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              formId: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', null),
              form_questions: this.fb.array([])
            });
          }
        }, {
          key: "getQuestions",
          value: function getQuestions() {
            var quesJson = [// {
            //   "id": 1,
            //   "qid": 1,
            //   "question": "தன்னார்வலரின் அலைபேசி எண்",
            //   "type": 2,
            //   "validation": ["required", "mobile"]
            // },
            {
              "id": 1,
              "qid": 1,
              "question": "பார்வையின் போது நடைபெற்ற கற்றல் செயல்பாடு",
              "type": 5,
              "options": ["மனமகிழ் செயல்பாடுகள்- பாட்டு, விளையாட்டு ", "தமிழ்", "ஆங்கிலம்", "கணிதம்", "EVS", "சமூக அறிவியல்", "அறிவியல்"],
              "validation": ["required", ""]
            }, // {
            //   "id": 3,
            //   "qid": 3,
            //   "question": "பார்வையின் போது வருகை புரிந்த மாணவர்களின் எண்ணிக்கை?",
            //   "type": 2,
            //   "validation": ["required", "number"]
            // },
            // {
            //   "id": 4,
            //   "qid": 4,
            //   "question": "வகுப்பில் மொத்த மாணவர்களின் எண்ணிக்கை?",
            //   "type": 2,
            //   "validation": ["required", "number"]
            // },
            {
              "id": 2,
              "qid": 2,
              "question": "கற்றல் உபகரணம் பயன்படுத்தப்பட்டதா?",
              "type": 1,
              "validation": ["required", ""],
              "subquestions": [{
                "id": 3,
                "qid": "2.1",
                "question": "கற்றல் உபகரணம் விவரம்",
                "type": 7,
                "condition": "ஆம்",
                "options": ["ITK TLM", "பள்ளியின் TLM", "தன்னார்வலர் உருவாக்கிய TLM", "பிற TLM"]
              }]
            }, // {
            //   "id": 4,
            //   "qid": 3,
            //   "question": "தன்னார்வலர்கள் வகுப்பில் குழந்தைகளைத் தொடர்ந்து பாராட்டுகிறாரா?",
            //   "type": 1,
            //   "validation": ["required", ""]
            // },
            // {
            //   "id": 8,
            //   "qid": 7,
            //   "question": "தன்னார்வலர்களுடன் குழந்தைகள் நன்றாக பேசுகிறார்களா?",
            //   "type": 5,
            //   "options": [
            //     "ஓரளவு",
            //     "நன்றாக",
            //     "மிகநன்றாக"
            //   ],
            //   "validation": ["required", ""]
            // },
            // {
            //   "id": 4,
            //   "qid": 3,
            //   "question": "மையத்திற்கு தொடர்ச்சியாக வருகை தராத மாணவர்கள் எண்ணிக்கை",
            //   "type": 2,
            //   "validation": ["required", "number"]
            // },
            {
              "id": 4,
              "qid": 3,
              "question": "மையத்தில்  மாணவர்களின்  தனித்திறன்  செயல்பாடுகள்  நடைபெறுகிறதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 5,
              "qid": 4,
              "question": "பள்ளி மேலாண்மை குழு மையத்தை  பார்வையிடுகிறதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 6,
              "qid": 5,
              "question": "தன்னார்வலர் - பெற்றோர்  whatsapp குழு  உருவாக்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 7,
              "qid": 6,
              "question": "தன்னார்வலர் - பெற்றோர் நேரடி  சந்திப்பு  நடைபெறுகிறதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 8,
              "qid": 7,
              "question": "மையத்தில்  விழாக்கள் கொண்டாடப்படுகிறதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 9,
              "qid": 8,
              "question": "இம்மாத்திற்கான  கையேடு  வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 10,
              "qid": 9,
              "question": "ITK - TLM வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 11,
              "qid": 10,
              "question": "இணைப்பு பள்ளியிலிருந்து English kit வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 12,
              "qid": 11,
              "question": " இணைப்பு பள்ளியிலிருந்து Maths kit வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 13,
              "qid": 12,
              "question": " இணைப்பு பள்ளியிலிருந்து Science kit வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 14,
              "qid": 13,
              "question": "இணைப்பு பள்ளியிலிருந்து புத்தக பூங்கொத்து நூல்கள் வழங்கப்பட்டுள்ளனவா?",
              "type": 1,
              "validation": ["required", ""]
            }, {
              "id": 15,
              "qid": 14,
              "question": "சென்ற மாதத்திற்கான  ஊக்கத்தொகை  வழங்கப்பட்டுள்ளதா?",
              "type": 1,
              "validation": ["required", ""]
            }, // {
            //    "id":20,
            //    "qid":19,
            //    "question":"குறிப்புரை",
            //    "type":3,
            //    "validation":["required",""]
            // },
            {
              "id": 16,
              "qid": 15,
              "question": "மையத்தின் புகைப்படம் எடுத்து பதிவேற்றம் செய்யவும்",
              "type": 6,
              "validation": ["required", ""]
            }];
            this.loadQuestions(quesJson);
          }
        }, {
          key: "loadQuestions",
          value: function loadQuestions(data) {
            this.queslist = this.form.controls.form_questions;
            var control = this.form.controls['form_questions'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            if (data.length > 0) {
              for (var _i = 0; _i < data.length; _i++) {
                this.queslist.push(this.fb.group({
                  id: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].id, null),
                  qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].qid, null),
                  question: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].question, null),
                  type: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].type, null),
                  options: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].options, null),
                  result: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].result, data[_i].validation[0] == "required" ? _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required : null),
                  subquestions: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].subquestions, null),
                  min_result: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].min_result, null),
                  validation: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(data[_i].validation, null)
                }));

                if (data[_i].type == 6) {
                  this.imageKey = data[_i].result;
                  this.doc1Uploaded = true;
                }
              }
            }
          }
        }, {
          key: "appBack",
          value: function appBack() {
            this.navCtrl.back();
          }
        }, {
          key: "onSumbit",
          value: function onSumbit() {
            var _this = this;

            debugger;

            if (this.form.valid) {
              var data = {
                "records": [{
                  "VolId": this.volunteerDetails.VolunteerId,
                  "CentrId": this.volunteerDetails.CentreId ? this.volunteerDetails.CentreId : this.volunteerDetails.CenterId,
                  "UsrId": this.userId,
                  "DistId": this.volunteerDetails.DistId ? this.volunteerDetails.DistId : this.volunteerDetails.DistrictId,
                  "BlkId": this.volunteerDetails.BlockId ? this.volunteerDetails.BlockId : this.volunteerDetails.VolBlockId,
                  "InspDate": this.today,
                  "Latitude": this.usrLat,
                  "Longitude": this.usrLong,
                  "resultData": this.queslist.value
                }]
              };
              this.emisService.saveInspectionDetails(data).subscribe(function (res) {
                if (res.dataStatus == true) {
                  _this.alertService.success(res.message);

                  if (res.message == 'Inserted successfully') {
                    _this.router.navigate(['/tabs/teacher/student-attendance', {
                      searchTxt: _this.paramsSearchTxt,
                      volunteerId: _this.paramsVolunteerId,
                      details: "volunteer"
                    }]); //    localStorage.setItem("refreshInspections","true");
                    //    this.router.navigate(['/tabs/teacher/my-inspections']);

                  }
                }
              });
            } else {
              this.submitted = true;
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "onRadioEvent",
          value: function onRadioEvent(event, i) {
            if (this.form.controls['form_questions'].value[i].subquestions != null) {
              var subQuestionsData = this.form.controls['form_questions'].value[i].subquestions;

              for (var j = 0; j < subQuestionsData.length; j++) {
                if (subQuestionsData[j].condition != this.form.controls['form_questions'].value[i].result) {
                  this.form.controls['form_questions']['controls'][i].controls['min_result'].setValidators(null);
                  this.form.controls['form_questions']['controls'][i].controls['min_result'].updateValueAndValidity();
                } else {
                  this.form.controls['form_questions']['controls'][i].controls['min_result'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required);
                  this.form.controls['form_questions']['controls'][i].controls['min_result'].updateValueAndValidity();
                }
              }
            }
          }
        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event, i) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].size <= 3145728) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(event.target.files[0]);

                fileReader.onload = function (event) {
                  // debugger;
                  _this2.uploadUrl = fileReader.result;
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;

                  _this2.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      var files = _this2.doc_file; // const filedata :  File = files[0]
                      // let file: File = files[0];
                      // this.uploadService.uploadFile(result.url, file).subscribe((res) => {
                      //   this.imageKey = result.key;
                      //   this.doc1Uploaded = true;
                      //   this.form.controls['form_questions']['controls'][i].controls['result'].value = this.imageKey;
                      //   this.form.controls['form_questions']['controls'][i].controls['result'].updateValueAndValidity();
                      // });

                      _this2.alertService.success('File Uploaded Successfully');
                    } else {
                      _this2.alertService.error('Error in Uploading File please try again');
                    }
                  });
                };
              } else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
              }
            }
          }
        }, {
          key: "viewImage",
          value: function viewImage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    bucketName = "renewalapplicationemis";
                    filename = this.imageKey;
                    expiry = 1800;
                    this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var modal;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (!result) {
                                _context.n = 3;
                                break;
                              }

                              this.image = result.url;
                              _context.n = 1;
                              return this.modalCtrl.create({
                                component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_12__.ViewImagePage,
                                componentProps: {
                                  image: this.image
                                },
                                cssClass: 'view-image-modal'
                              });

                            case 1:
                              modal = _context.v;
                              _context.n = 2;
                              return modal.present();

                            case 2:
                              _context.n = 4;
                              break;

                            case 3:
                              this.alertService.error('Error in getting image file');

                            case 4:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onEventValidation",
          value: function onEventValidation(e, i) {
            if (this.form.controls['form_questions']['controls'][i].controls['validation'].value[1] == "mobile") {
              this.form.controls['form_questions']['controls'][i].controls['result'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/));
              this.form.controls['form_questions']['controls'][i].controls['result'].updateValueAndValidity();
            }
          }
        }, {
          key: "askToTurnOnGPS",
          value: function askToTurnOnGPS() {
            var _this4 = this;

            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
              _this4.getLatLong();
            }, function (error) {
              _this4.alertService.alertToTurnOnPermission('Location', 'Location');
            });
          }
        }, {
          key: "checkGPSPermission",
          value: function checkGPSPermission() {
            var _this5 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
              if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                _this5.askToTurnOnGPS();
              } else {
                _this5.requestGPSPermission();
              }
            }, function (err) {// alert(err);
            });
          }
        }, {
          key: "requestGPSPermission",
          value: function requestGPSPermission() {
            var _this6 = this;

            this.locationAccuracy.canRequest().then(function (canRequest) {
              if (canRequest) {} else {
                // Show 'GPS Permission Request' dialogue
                _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                  // call method to turn on GPS
                  _this6.askToTurnOnGPS();
                }, function (error) {
                  // Show alert if user click on 'No Thanks'
                  _this6.alertService.alertWhite('To get current location please turn on device location');
                });
              }
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this7 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this7.usrLat = resp.coords.latitude.toString();
              _this7.usrLong = resp.coords.longitude.toString();
            })["catch"](function (error) {
              // console.log('Error getting current lat long ', error);
              if (error.message === 'Illegal Access') {
                _this7.alertService.alertToTurnOnPermission('Location', 'Location');
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            if (this.paramsPageid == 1) {
              this.router.navigate(['/tabs/teacher/my-inspections']);
            } else {
              this.router.navigate(['/tabs/teacher/volunteer-search', {
                volunId: this.paramsSearchTxt
              }]);
            }
          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this8 = this;

            debugger;
            var options = {
              quality: 100,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var bucketName = "renewalapplicationemis";
              var expiry = 300;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this8.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');
                  console.log(blob);

                  if (blob.size <= 3145728) {
                    _this8.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                      if (result) {
                        _this8.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                          _this8.imageKey = result.key;
                          _this8.doc1Uploaded = true;

                          _this8.form.controls['form_questions']['controls'][i].controls['result'].setValue(_this8.imageKey);

                          _this8.alertService.success('File Uploaded Successfully');
                        });
                      }
                    });
                  } else {
                    _this8.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          }
        }]);
      }();

      _VolunteerInspectionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_11__.EmisService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationAccuracy
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
        }];
      };

      _VolunteerInspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-volunteer-inspection',
        template: _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VolunteerInspectionPage);
      /***/
    },

    /***/
    19256:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dash-grid {\n  padding-bottom: 0px;\n  margin-bottom: 5px;\n}\n\n.top-10 {\n  margin-top: 15px;\n}\n\n.bottom-10 {\n  margin-bottom: 15px;\n}\n\n.themecolor {\n  color: var(--ion-color-primary);\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n}\n\n.loginButton {\n  --color: black ;\n  align-self: center;\n  width: 40%;\n  margin: 0px auto 20px auto;\n  height: 40px !important;\n  text-transform: capitalize;\n  --border-radius: 20px;\n  --background: var(--ion-color-primary);\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n\n.input-clr {\n  border: 1px solid var(--ion-color-primary);\n  color: black;\n  --color: black;\n  --padding-start: 15px !important;\n  --padding-end: 15px !important;\n  min-width: 100%;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.item-border {\n  border-radius: 10px;\n}\n\n.btom-border {\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, -0))));\n  --border-style: none;\n  --padding-start:0px;\n  --inner-padding-end:0px ;\n}\n\n.valid-clr {\n  color: red !important;\n}\n\n.error-message {\n  color: red !important;\n  margin: 0px 0px 0px 5px;\n}\n\n.my-cat {\n  background: #EDEDED;\n  font-weight: bold;\n  font-size: 18px;\n  margin: 0px;\n  padding: 15px;\n}\n\n.unwanted-padd {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  margin-bottom: 10px;\n}\n\n.sub-menu {\n  --padding-start: 15px;\n  --padding-end: 0px;\n  border: 1px solid var(--ion-color-primary);\n  margin: 10px 20px 15px 20px;\n  border-radius: 15px;\n  --inner-padding-end:0px;\n}\n\n.menu-icon {\n  margin: 10px auto 0px auto;\n  border: 4px solid #FFFFFF;\n  border: 4px solid var(--cs-background-secondary, #FFFFFF);\n  overflow: visible;\n  border-radius: 6px;\n}\n\n.menu-text {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 0px;\n  margin-bottom: 10px;\n}\n\n.lbl-text {\n  font-size: 14px;\n}\n\n.title {\n  color: black;\n  font-weight: 700;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.upload-btn {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 16px;\n  padding-left: 15px;\n  background: #f2e6ff;\n  margin: 10px;\n  border-radius: 5px;\n}\n\n.upload-icon {\n  color: var(--ion-color-primary);\n}\n\n.image {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10%;\n}\n\n.upload-txt {\n  padding-left: 5px;\n  padding-bottom: 10px;\n}\n\n.footer {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 19px;\n}\n\nion-footer.footer-md::before {\n  background-image: none;\n}\n\np {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksK0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpFO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEM7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFRTDs7QUFOQztFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFTTDs7QUFQQztFQUNJLG1CQUFBO0FBVUw7O0FBUEM7RUFDSSxtSEFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQVVMOztBQVJDO0VBQ0kscUJBQUE7QUFXTDs7QUFUQztFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUFZTDs7QUFWQztFQUNHLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFhSjs7QUFYQTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZUo7O0FBYkE7RUFFSSwwQkFBQTtFQUNBLHlCQUFBO0VBQUEseURBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFlSjs7QUFiRTtFQUNFLGVBQUE7QUFnQko7O0FBZEU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFpQko7O0FBZkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWtCSjs7QUFoQkk7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDTSxvQkFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFvQlI7O0FBbEJJO0VBQ0UsK0JBQUE7QUFxQk47O0FBbkJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXNCTjs7QUFwQkk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBdUJOOztBQXJCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUF3Qko7O0FBbkJLO0VBQ0ksc0JBQUE7QUFzQlQ7O0FBakJHO0VBQ0MsZUFBQTtBQW9CSiIsImZpbGUiOiJ2b2x1bnRlZXItaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaC1ncmlke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4udG9wLTEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uYm90dG9tLTEwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udGhlbWVjb2xvcntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLnF1ZXMtdHh0IHtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICB9XHJcbiAgLmxvZ2luQnV0dG9uIHtcclxuICAgIC0tY29sb3I6IGJsYWNrIDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuaW5wdXQtY2xyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAucXVlcy10eHQge1xyXG4gICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gfVxyXG4gLml0ZW0tc3R5bGUge1xyXG4gICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiB9XHJcbiAuaXRlbS1ib3JkZXIge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgLy8gICBib3JkZXItdG9wOiA1cHggc29saWQgIzhiNjdiMztcclxuIH1cclxuIC5idG9tLWJvcmRlcntcclxuICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgLTApKSkpO1xyXG4gICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgIC0tcGFkZGluZy1zdGFydDowcHg7XHJcbiAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDowcHhcclxuIH1cclxuIC52YWxpZC1jbHJ7XHJcbiAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmVycm9yLW1lc3NhZ2V7XHJcbiAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG4gfVxyXG4gLm15LWNhdHtcclxuICAgIGJhY2tncm91bmQ6ICNFREVERUQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG59XHJcbi51bndhbnRlZC1wYWRke1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWItbWVudXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjBweDtcclxufVxyXG4ubWVudS1pY29uIHtcclxuICAgIC8vd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvOyBcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNzLWJhY2tncm91bmQtc2Vjb25kYXJ5LCAjRkZGRkZGKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgLm1lbnUtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5sYmwtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5maWxlSW5wdXQge1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICAuZmlsZUlucHV0ICAgbGFiZWwge1xyXG4gICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuLnVwbG9hZC1idG4ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmU2ZmY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC51cGxvYWQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjEwJTtcclxuICAgIH1cclxuICAgIC51cGxvYWQtdHh0IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgLmZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgXHJcbiAgIH1cclxuICAgXHJcbiAgIGlvbi1mb290ZXIge1xyXG4gICAgICYuZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgfVxyXG4gIFxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    95419:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-inspection.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar class=\"toolbar\" text-wrap>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Questions</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goToBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Questions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow: auto;\">\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 5%;\">\r\n    <div formArrayName=\"form_questions\">\r\n      <div class=\"header\">\r\n\r\n        <ion-row *ngFor=\"let item of form.get('form_questions')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n\r\n            <ion-list>\r\n              <div>\r\n\r\n                <ion-item class=\"back-clr radio-btn btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\">\r\n                    <ion-label class=\"ques-txt\"> {{item.value.qid}}. {{item.value.question}}<span\r\n                        class=\"valid-clr\">*</span></ion-label>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"item.value.type == 1\" class=\"btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                    <ion-radio-group formControlName=\"result\" (ionChange)=\"onRadioEvent($event.detail.value, i)\">\r\n                      <ion-item lines=\"none\" style=\"--padding-start: 0px\">\r\n                        <ion-radio value=\"ஆம்\"></ion-radio>\r\n                        <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> ஆம் </span>\r\n                        <ion-radio class=\"radio-butn\" value=\"இல்லை\"></ion-radio>\r\n                        <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> இல்லை </span>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"item.value.type == 2\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\"\r\n                    (ionChange)=\"onEventValidation($event.detail.value, i)\">\r\n                    <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"தயவுசெய்து உங்கள் பதிலை உள்ளிடவும்\"\r\n                      formControlName=\"result\" class=\"input-clr\"> </ion-input>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"item.value.type == 3\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                    <ion-textarea type=\"text\" placeholder=\"தயவுசெய்து உங்கள் பதிலை உள்ளிடவும்\" formControlName=\"result\"\r\n                      class=\"input-clr\"> </ion-textarea>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"item.value.type == 5\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                    <ion-select style=\"max-width: 100% !important;\" placeholder=\"Select One\" formControlName=\"result\"\r\n                      class=\"input-clr\">\r\n                      <ion-select-option *ngFor=\"let option of item.value.options\">{{option}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"item.value.type == 7\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                  <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                    <ion-select style=\"max-width: 100% !important;\" placeholder=\"Select One\" formControlName=\"result\"\r\n                      class=\"input-clr\" multiple=\"true\">\r\n                      <ion-select-option *ngFor=\"let option of item.value.options\">{{option}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"row-clr\" *ngIf=\"item.value.type == 6\">\r\n                  <div *ngIf=\"!imageKey\" style=\"margin-top: 10px;\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                    <ion-icon\r\n                    name=\"camera\"\r\n                    class=\"upload-icon\"\r\n                    (click)=\"openCamera(i)\"\r\n                  ></ion-icon>\r\n                  </ion-col>\r\n                    <!-- <input type=\"file\" formControlName=\"result\" name=\"file\" id=\"file\" class=\"fileInput\"\r\n                      (change)=\"onSelectFile1($event, i)\" /> -->\r\n                    <!-- <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col> -->\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Centre Photo\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n                  <div *ngIf=\"imageKey\">\r\n                    <ion-col size=\"8\" style=\"float: left;\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        {{item.value.result}}\r\n                      </label>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"doc1Uploaded\" size=\"2\" style=\"text-align: center; float: right;\">\r\n                      <ion-icon name=\"checkmark\" class=\"upload-icon\" style=\"font-size: 25px; color: #42ba96;\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"doc1Uploaded\" size=\"2\" style=\"text-align: center; float: right;\">\r\n                      <ion-icon (click)=\"viewImage()\" name=\"eye-off-outline\" class=\"upload-icon themecolor\"\r\n                        style=\"font-size: 25px;\"></ion-icon>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                </ion-item>\r\n\r\n\r\n\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['result'].hasError('required')) && (submitted || item.controls['result'].dirty || item.controls['result'].touched)\">\r\n                    Field is required\r\n                  </p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['result'].hasError('pattern') \">Invalid Format</p>\r\n                </ion-row>\r\n              </div>\r\n\r\n              <div *ngIf=\"item.value.subquestions != null \">\r\n                <div *ngFor=\"let data of item.value.subquestions \">\r\n                  <div *ngIf=\"item.value.result == data.condition\">\r\n                    <ion-item class=\"back-clr radio-btn btom-border\">\r\n                      <ion-col size=\"12\" class=\"txtspace\">\r\n                        <ion-label class=\"ques-txt\"> {{data.qid}}. {{data.question}}<span class=\"valid-clr\">*</span>\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.type == 2\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                      <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"தயவுசெய்து உங்கள் பதிலை உள்ளிடவும்\"\r\n                          formControlName=\"min_result\" class=\"input-clr\"> </ion-input>\r\n                      </ion-col>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.type == 1\" class=\"btom-border\">\r\n                      <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                        <ion-radio-group formControlName=\"min_result\">\r\n                          <ion-item lines=\"none\" style=\"--padding-start: 0px\">\r\n                            <ion-radio value=\"ஆம்\"></ion-radio>\r\n                            <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> ஆம் </span>\r\n                            <ion-radio class=\"radio-butn\" value=\"இல்லை\"></ion-radio>\r\n                            <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> இல்லை </span>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.type == 5\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                      <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                        <ion-select placeholder=\"Select One\" formControlName=\"min_result\" class=\"input-clr\">\r\n                          <ion-select-option *ngFor=\"let option of data.options\">{{option}}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.type == 7\" lines=\"none\" class=\"item-style item-border btom-border\">\r\n                      <ion-col size=\"12\" class=\"txtspace\" style=\"padding: 5px 2px 2px 2px\">\r\n                        <ion-select placeholder=\"Select One\" formControlName=\"min_result\" class=\"input-clr\" multiple=\"true\">\r\n                          <ion-select-option *ngFor=\"let option of data.options\">{{option}}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-item>\r\n\r\n                    <ion-row>\r\n                      <p class=\"error-message\">\r\n                        {{(item.controls['min_result'].errors ? 'Field is required' : '')}}\r\n                      </p>\r\n                    </ion-row>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-bckclr\" *ngIf=\"showSave\" (click)=\"onSumbit()\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\" style=\"font-size: 19px !important;\">\r\n      Save\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"graybackgrond\" *ngIf=\"showSave\">\r\n  <div class=\"footer\">\r\n    <ion-button color=\"primary\" (click)=\"onSumbit()\">Save</ion-button>\r\n  </div>\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-inspection_module_ts-es5.js.map