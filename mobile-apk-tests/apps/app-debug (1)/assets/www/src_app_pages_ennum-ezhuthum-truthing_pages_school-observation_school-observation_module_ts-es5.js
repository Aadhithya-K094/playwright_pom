(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_school-observation_school-observation_module_ts"], {
    /***/
    57848:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation-routing.module.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservationPageRoutingModule": function SchoolObservationPageRoutingModule() {
          return (
            /* binding */
            _SchoolObservationPageRoutingModule
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


      var _school_observation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-observation.page */
      35365);

      var routes = [{
        path: '',
        component: _school_observation_page__WEBPACK_IMPORTED_MODULE_0__.SchoolObservationPage
      }];

      var _SchoolObservationPageRoutingModule = /*#__PURE__*/_createClass(function SchoolObservationPageRoutingModule() {
        _classCallCheck(this, SchoolObservationPageRoutingModule);
      });

      _SchoolObservationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolObservationPageRoutingModule);
      /***/
    },

    /***/
    49096:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservationPageModule": function SchoolObservationPageModule() {
          return (
            /* binding */
            _SchoolObservationPageModule
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


      var _school_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-observation-routing.module */
      57848);
      /* harmony import */


      var _school_observation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-observation.page */
      35365);

      var _SchoolObservationPageModule = /*#__PURE__*/_createClass(function SchoolObservationPageModule() {
        _classCallCheck(this, SchoolObservationPageModule);
      });

      _SchoolObservationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolObservationPageRoutingModule],
        declarations: [_school_observation_page__WEBPACK_IMPORTED_MODULE_1__.SchoolObservationPage]
      })], _SchoolObservationPageModule);
      /***/
    },

    /***/
    35365:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservationPage": function SchoolObservationPage() {
          return (
            /* binding */
            _SchoolObservationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_observation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-observation.page.html */
      31107);
      /* harmony import */


      var _school_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-observation.page.scss */
      46606);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/loader/ion-loader.service */
      21645);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _school_observ_modelpopup_school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../school-observ-modelpopup/school-observ-modelpopup.page */
      19584);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583); // import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


      var _SchoolObservationPage = /*#__PURE__*/function () {
        function SchoolObservationPage(cdRef, ionicstorage, apiService, ionLoaderService, zone, alertController, router, route, alertService, networkService, toast, userSessionService, modalCtrl, fb, datePipe) {
          _classCallCheck(this, SchoolObservationPage);

          this.cdRef = cdRef;
          this.ionicstorage = ionicstorage;
          this.apiService = apiService;
          this.ionLoaderService = ionLoaderService;
          this.zone = zone;
          this.alertController = alertController;
          this.router = router;
          this.route = route;
          this.alertService = alertService;
          this.networkService = networkService;
          this.toast = toast;
          this.userSessionService = userSessionService;
          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.datePipe = datePipe;
          this.classTypeArray = [];
          this.classes = [];
          this.subjects = [];
          this.mediumOfInstructionsArray = [];
          this.classType = '';
          this.classRadio = ""; // username: any;

          this.lastupdatedrecord = [];
          this.newmedumofinstruction = [];
          this.saving = false;
          this.nodata = false;
          this.obj = {};
          this.newmenus = [];
          this.beoSchl = false;
          this.user_name = '10300766';
          this.pass_word = '9442@1969';
          this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
          this.iterate = 0;
          this.udiseSrchSch = false;
          this.annimeBtn = true;
          this.schoolList = false;
          this.countinueCard = false;
          this.quatocard = false;
          this.notReadyStatusMsg = false;
          this.clusterTabel = true;
          this.inproperData = false;
          this.udisecountinueCard = false;
          this.beoSchlbtn = false;
          this.udiseInput = true;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
          this.studListl3 = [];
          this.ceoSchlbtn = false;
          this.getEetSchools = [];
          this.completedSchool = [];
          this.noVisitTodayMsg = false;
          this.pendDataDisabledBtn = false;
          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emis_usertype1 = this.userSessionService.emis_usertype1();
          this.user_id = this.userSessionService.emis_username();
          this.teacher_id = this.userSessionService.teacher_id();
          console.log(this.teacher_id, this.user_id, 'teacher id'); //  this.emis_username = this.userSessionService.emis_username();

          console.log(this.emis_usertype, 'this.emis_usertype');
          console.log(this.emis_usertype1, 'this.emis_usertype1');
        }

        return _createClass(SchoolObservationPage, [{
          key: "isJson",
          value: function isJson(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }

            return true;
          } // ionViewWillEnter() {
          //   this.classlenth = this.apiService.classes.length;
          //   let tamilobje = this.apiService.mediumOfInstructionsArray.find(tam => tam.medium == 'Tamil');
          //   let englishobje = this.apiService.mediumOfInstructionsArray.find(tam => tam.medium == 'English');
          //   const foundIdxtamil = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'Tamil');
          //   this.apiService.mediumOfInstructionsArray.splice(foundIdxtamil, 1);
          //   this.apiService.mediumOfInstructionsArray.unshift(tamilobje)
          //   const foundIdxenglish = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'English');
          //   this.apiService.mediumOfInstructionsArray.splice(foundIdxenglish, 1);
          //   this.apiService.mediumOfInstructionsArray.unshift(englishobje);
          //   const foundIdxnone = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'None');
          //   this.apiService.mediumOfInstructionsArray.splice(foundIdxnone, 1);
          //   this.mediumOfInstructionsArray = this.apiService.mediumOfInstructionsArray;
          //   this.classes = this.apiService.classes;
          //   this.subjects = this.apiService.subjects
          //   this.classTypeArray = this.apiService.classTypeArray
          //   this.classRadio = this.apiService.classRadio
          //   this.selectedClassChoiceArray = this.apiService.selectclassmultiplechoicearray;
          //   if (this.apiService.classroomDetails.length > 0) {
          //     this.classType = this.apiService.classroomDetails[0].class_type;
          //     if (this.isJson(this.apiService.classroomDetails[0].medium_instruction) == true) {
          //       JSON.parse(this.apiService.classroomDetails[0].medium_instruction).filter(s => {
          //         this.mediumOfInstructionsArray.filter(n => { if (n.medium_id == s) { n.isSelected = true; return n } })
          //       })
          //     }
          //     if (this.isJson(this.apiService.classroomDetails[0].class) == true) {
          //       JSON.parse(this.apiService.classroomDetails[0].class).filter(s => {
          //         this.classes.filter(n => {
          //           if (n.class == s.class) {
          //             n.isSelected = true;
          //             s.section.filter(v => { n.section.filter(t => { if (t.name == v.name) { t.isSelected = true; return t } }) });
          //             return n
          //           }
          //         })
          //       })
          //     }
          //     if (this.isJson(this.apiService.classroomDetails[0].subject) == true) {
          //       JSON.parse(this.apiService.classroomDetails[0].subject).filter(s => {
          //         this.subjects.filter(n => { if (n.id == s) { n.isSelected = true; return n } })
          //       })
          //     }
          //   }
          //   this.cdRef.detectChanges();
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.schoolListShuffel();
            this.beoSchl = false; // this.getSchoolList();

            this.udiseSearchForm = this.fb.group({
              udiseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.pendDataDisabledBtn = false;
            this.getIonicData(); //offline sync

            this.apiService.setdata(this.router.url);
            this.route.params.subscribe(function (val) {});

            if (this.level == 'L1') {
              this.scrnNmbr = 'L1 - 3';
            } else if (this.level == 'L2') {
              this.scrnNmbr = 'L2 - 3';
            } else if (this.level == 'L3') {
              this.scrnNmbr = 'L3 - 3';
            } // this.getSchoolList();


            this.getIonicSchlList();
          }
        }, {
          key: "offlineAlert",
          value: function offlineAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'You Are Offline Now!!',
                      message: "<ul class='offline-popup'>\n                  <li>1. Do Not Log Out</li>\n                  <li>2. Do Not Clear The RAM</li>\n                  <li>3. After Connecting to Internet Please Hit the Save Pending Data Button Below</li>\n                </ul>",
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {}
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
          key: "getIonicData",
          value: function getIonicData() {
            var _this = this;

            debugger;
            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this.username = dataa.username;
              _this.schoolid = dataa.school_id;
              _this.token = dataa.token;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('remaingusersummative').then(function (dataa) {
              if (dataa != null) {
                _this.remainguserdata = dataa.remainingdata.length;

                _this.saveRemainingDataSummative();
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('completedSchool').then(function (dataa) {
              _this.completedSchool = [];

              if (dataa != undefined || dataa != null) {
                _this.completedSchool = dataa;
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('todayDate').then(function (dataa) {
              _this.todayDate = dataa;
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "getIonicSchlList",
          value: function getIonicSchlList() {
            var _this2 = this;

            // console.log(this.level, 'this.level')
            // let tdate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
            // this.ionicstorage.getData('getEetSchools').then(
            //   (dataa) => {
            //     this.getEetSchools = dataa
            //     console.log(this.getEetSchools, 'this.getEetSchools')
            //     if((dataa != null || dataa != undefined) && (this.todayDate != null || this.todayDate != undefined) && this.todayDate == tdate){//&& dataa.level != 'L3'
            //       this.getOfflineSchlList(dataa);
            //       console.log(dataa, 'getOfflineSchlList')
            //     }
            //     else{
            //       this.getSchoolList();
            //     }
            //   },
            //   (error) => console.error(error)
            // );
            this.apiService.initializeNetworkEvents();

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.getSchoolList();
            } else {
              this.ionicstorage.getData('getEetSchools').then(function (dataa) {
                if (dataa != null || dataa != undefined) {
                  _this2.getOfflineSchlList(dataa);
                } else {
                  _this2.getSchoolList();
                }
              }, function (error) {
                return console.error(error);
              });
            }
          } //get School data for BRTE and BEO from API

        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this3 = this;

            debugger;
            this.apiService.eet_school_observation().subscribe(function (dataval) {
              //if observation id not created
              try {
                _this3.level = dataval.record.level;
                _this3.udiseflag = dataval.record.udise_flag;
                _this3.termId = dataval.record.term_id;
                _this3.end_date = _this3.datePipe.transform(dataval.record.end_date, 'dd-MM-yyyy');

                var comUdise = _this3.completedSchool.map(function (v) {
                  return v.udise_code;
                });

                console.log(comUdise, 'comUdise');

                if (_this3.level == 'L1') {
                  dataval.record.schools.forEach(function (x) {
                    if (comUdise.includes(x.udise_code)) {
                      dataval.record.schools.splice(dataval.record.schools.findIndex(function (i) {
                        return i.udise_code === x.udise_code;
                      }), 1);
                    }
                  });
                }

                if (Object.keys(dataval.record).length > 0 && dataval.status == 200) {
                  if (dataval.record.observation_status != true) {
                    if (dataval.record.observation_status != true && dataval.record.completed != true) {
                      _this3.annimeBtn = true;
                      _this3.udiseInput = true;
                      _this3.schoolList = false;
                      _this3.quatocard = false;
                      _this3.beoSchl = false;
                      _this3.inproperData = false;
                      _this3.beoSchlbtn = false;
                      _this3.ceoSchlbtn = false;
                      _this3.countinueCard = false;
                      _this3.udisecountinueCard = false;
                      _this3.schoolOverallData = dataval.record;
                      _this3.udiseflag = dataval.record.udise_flag;
                      _this3.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                      _this3.schoolDatalength = dataval.record.schools.length || [];
                      _this3.obserId = dataval.record.observation_id;
                      _this3.screen_level = dataval.record.level;
                      _this3.schoolId = dataval.record.school_id;
                      _this3.school_name = dataval.record.school_name;
                      _this3.accYear = dataval.record.academic_year;
                      console.log(_this3.accYear, 'lalalalalalalalala');
                      _this3.assesType = dataval.record.assessment_type;
                      _this3.udise_code = dataval.record.udise_code;

                      var notReadyChk = _this3.schoolData.filter(function (s) {
                        return s.status == 'not_ready';
                      });

                      console.log(_this3.schoolData, notReadyChk, 'mygodddd', notReadyChk.length, _this3.schoolData.length);

                      if (_this3.schoolData.length == notReadyChk.length) {
                        _this3.notReadyStatusMsg = true;
                        _this3.clusterTabel = false;
                      }
                    } else {
                      _this3.annimeBtn = false;
                      _this3.schoolList = false;
                      _this3.udiseInput = false;
                      _this3.beoSchl = false;
                      _this3.countinueCard = false;
                      _this3.udisecountinueCard = false;
                      _this3.inproperData = false;
                      _this3.quatocard = true;
                      _this3.beoSchlbtn = true;
                      _this3.ceoSchlbtn = false;
                      _this3.schoolOverallData = dataval.record;
                      _this3.udiseflag = dataval.record.udise_flag;
                      _this3.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                      _this3.obserId = dataval.record.observation_id;
                      _this3.screen_level = dataval.record.level;
                      _this3.schoolId = dataval.record.school_id;
                      _this3.school_name = dataval.record.school_name;
                      _this3.accYear = dataval.record.academic_year;
                      _this3.assesType = dataval.record.assessment_type;
                      _this3.udise_code = dataval.record.udise_code;
                    }
                  } //if observation id created
                  else {
                    _this3.obserId = dataval.record.observation_id;
                    _this3.screen_level = dataval.record.level;
                    _this3.schoolId = dataval.record.school_id;
                    _this3.school_name = dataval.record.school_name;
                    _this3.accYear = dataval.record.academic_year;
                    _this3.assesType = dataval.record.assessment_type;
                    _this3.udise_code = dataval.record.udise_code;
                    var observationdate = dataval.record.observation_date.split(" "); //json get date

                    var obserDate = observationdate[0]; //current get date

                    var todayDate = new Date().toISOString().slice(0, 10);
                    _this3.schoolOverallData = dataval.record;
                    _this3.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                    console.log("todayDate", todayDate);
                    console.log("obserDate", obserDate);

                    if (dataval.record.observation_id != '' && dataval.record.completed == false && obserDate == todayDate) {
                      _this3.annimeBtn = false;
                      _this3.schoolList = false;
                      _this3.beoSchl = false;
                      _this3.udiseInput = false;
                      _this3.beoSchlbtn = true;
                      _this3.udiseSrchSch = false;
                      _this3.countinueCard = true;
                      _this3.udisecountinueCard = true;
                      _this3.ceoSchlbtn = true;
                    } else {
                      console.log("Your data is inproper , can't be saved");
                      _this3.inproperData = true;

                      _this3.checkObservation();
                    }
                  }

                  _this3.historyTable = dataval.record.history ? dataval.record.history : [{}];

                  var novstTodatDate = _this3.pipe.transform(new Date(), 'dd MMM, yy');

                  var novisitToday = _this3.historyTable.find(function (x) {
                    return x.date == novstTodatDate;
                  });

                  console.log(novstTodatDate, 'novstTodatDate');
                  console.log(novisitToday, 'novisitToday');

                  if (typeof novisitToday != 'undefined' && novisitToday.status == "No Visit") {
                    _this3.noVisitTodayMsg = true;
                    _this3.beoSchl = false;
                    _this3.annimeBtn = false;
                    _this3.schoolList = false;
                  }

                  _this3.getEetSchools = dataval.record;

                  var tdate = _this3.pipe.transform(new Date(), 'dd-MM-yyyy');

                  _this3.ionicstorage.insertData_Replace('todayDate', tdate);

                  _this3.ionicstorage.insertData_Replace('getEetSchools', dataval.record);

                  console.log(dataval.record, 'dataval.record');
                } else {
                  if (Object.keys(dataval.record).length === 0) {
                    throw "No data found in this school";
                  } else if (dataval.status !== 200) {
                    throw "Server not found...Try again later";
                  } else if (typeof dataval.record == 'undefined' || typeof dataval.record == null) {
                    throw "Server not found...Try again later";
                  } else {
                    throw "Server not found...Try again later";
                  }
                }
              } catch (err) {
                // if(typeof err == 'undefined'){
                _this3.apiService.displayToast(err, true);

                _this3.errorLog(err, {}); // }


                console.log(err, 'error');
              }
            }, function (error) {
              _this3.errorLog(error === null || error === void 0 ? void 0 : error.message, {});

              _this3.apiService.displayToast(error === null || error === void 0 ? void 0 : error.message, true);
            });
          } //offline get school

        }, {
          key: "getOfflineSchlList",
          value: function getOfflineSchlList(apiData) {
            this.level = apiData.level;
            this.udiseflag = apiData.udise_flag;
            this.termId = apiData.term_id;

            if (Object.keys(apiData).length > 0) {
              if (apiData.observation_status != true) {
                if (apiData.observation_status != true && apiData.completed != true) {
                  this.annimeBtn = true;
                  this.udiseInput = true;
                  this.schoolList = false;
                  this.quatocard = false;
                  this.beoSchl = false;
                  this.inproperData = false;
                  this.beoSchlbtn = false;
                  this.ceoSchlbtn = false;
                  this.countinueCard = false;
                  this.udisecountinueCard = false;
                  this.schoolOverallData = apiData;
                  this.udiseflag = apiData.udise_flag;
                  this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";
                  this.schoolDatalength = apiData.schools.length || [];
                  this.obserId = apiData.observation_id;
                  this.screen_level = apiData.level;
                  this.schoolId = apiData.school_id;
                  this.school_name = apiData.school_name;
                  this.accYear = apiData.academic_year;
                  console.log(this.accYear, 'lalalalalalalalala');
                  this.assesType = apiData.assessment_type;
                  this.udise_code = apiData.udise_code;
                  var notReadyChk = this.schoolData.filter(function (s) {
                    return s.status == 'not_ready';
                  });
                  console.log(this.schoolData, notReadyChk, 'mygodddd', notReadyChk.length, this.schoolData.length);

                  if (this.schoolData.length == notReadyChk.length) {
                    this.notReadyStatusMsg = true;
                    this.clusterTabel = false;
                  }
                } else {
                  this.annimeBtn = false;
                  this.schoolList = false;
                  this.udiseInput = false;
                  this.beoSchl = false;
                  this.countinueCard = false;
                  this.udisecountinueCard = false;
                  this.inproperData = false;
                  this.quatocard = true;
                  this.beoSchlbtn = true;
                  this.ceoSchlbtn = false;
                  this.schoolOverallData = apiData;
                  this.udiseflag = apiData.udise_flag;
                  this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";
                  this.obserId = apiData.observation_id;
                  this.screen_level = apiData.level;
                  this.schoolId = apiData.school_id;
                  this.school_name = apiData.school_name;
                  this.accYear = apiData.academic_year;
                  console.log(this.accYear, 'lalalalalalalalala');
                  this.assesType = apiData.assessment_type;
                  this.udise_code = apiData.udise_code;
                }
              } //if observation id created
              else {
                this.obserId = apiData.observation_id;
                this.screen_level = apiData.level;
                this.schoolId = apiData.school_id;
                this.school_name = apiData.school_name;
                this.accYear = apiData.academic_year;
                console.log(this.accYear, 'lalalalalalalalala');
                this.assesType = apiData.assessment_type;
                this.udise_code = apiData.udise_code;
                var observationdate = apiData.observation_date.split(" "); //json get date

                var obserDate = observationdate[0]; //current get date

                var todayDate = new Date().toISOString().slice(0, 10);
                this.schoolOverallData = apiData;
                this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";

                if (apiData.observation_id != '' && apiData.completed == false && obserDate == todayDate) {
                  this.annimeBtn = false;
                  this.schoolList = false;
                  this.beoSchl = false;
                  this.udiseInput = false;
                  this.beoSchlbtn = true;
                  this.udiseSrchSch = false;
                  this.countinueCard = true;
                  this.udisecountinueCard = true;
                  this.ceoSchlbtn = true;
                  console.log('countinue school');
                } else {
                  console.log("Your data is inproper , can't be saved");
                  this.inproperData = true;
                  this.checkObservation();
                }
              }

              this.historyTable = apiData.history ? apiData.history : [{}];
            }
          } //brte click function school list card

        }, {
          key: "getschoolCard",
          value: function getschoolCard() {
            this.annimeBtn = false;
            this.schoolList = true;
            this.iterate = 0;
            this.brteSchoolList();
          } //brte school list display function

        }, {
          key: "brteSchoolList",
          value: function brteSchoolList() {
            var _this4 = this;

            if (this.iterate != this.schoolData.length) {
              for (var i = this.iterate; i < this.iterate + 1; i++) {
                this.currentSchList = this.schoolData[i];
              }
            } else {
              this.iterate = -1;
              setTimeout(function () {
                _this4.schoollistoverAlert(0);
              }, 50);
            }

            this.iterate++;
          }
        }, {
          key: "reasonForRejectSchool",
          value: function reasonForRejectSchool(reason, schID, Udise) {
            var _this5 = this;

            console.log(reason, 'aiyoooo');
            this.reasonData = [{
              teacher_id: this.user_id,
              school_id: schID,
              udise_code: Udise,
              schlskippedReason: reason,
              skippedReason: ''
            }];
            this.apiService.saveSummativeAssessmentDetails(this.reasonData, this.token).subscribe(function (data) {
              try {
                if (data.status == 200 && data.dataStatus == true) {
                  _this5.commonAlert('Success', 'Assessment successfully Saved.');
                } else {
                  // this.alertService.error(data.msg)
                  throw 'No data found in this student list';
                }
              } catch (err) {
                _this5.toast.presentToast(err, 'error');
              }
            });
          } //beo school list display function

        }, {
          key: "beoSchoolList",
          value: function beoSchoolList(id) {
            var _this6 = this;

            // if(this.countinueCard != true && this.inproperData !=true) {
            this.beoSchl = true;
            this.clusterIndexID = id;
            this.beoSchlbtn = true;
            var comUdise = this.completedSchool.map(function (v) {
              return v.udise_code;
            });
            this.schoolData[id].pending.forEach(function (x) {
              if (comUdise.includes(x.udise_code)) {
                _this6.schoolData[id].pending.splice(_this6.schoolData[id].pending.findIndex(function (i) {
                  return i.udise_code === x.udise_code;
                }), 1);
              }
            });

            if (this.iterate != this.schoolData[id].pending.length) {
              for (var i = this.iterate; i < this.iterate + 1; i++) {
                this.currentSchList = this.schoolData[id].pending[i];
              }

              console.log(this.currentSchList, 'cluster school data');
            } else {
              this.iterate = -1;
              setTimeout(function () {
                _this6.schoollistoverAlert(id);
              }, 50);
            }

            this.iterate++; // }
          } //deo school list display function

        }, {
          key: "deoSchoolList",
          value: function deoSchoolList(id) {
            var _this7 = this;

            this.ceoSchlbtn = true;
            this.beoSchl = true;
            this.clusterIndexID = id;
            console.log(this.schoolData[id].pending, 'this.schoolData[id].pending');
            var comUdise = this.completedSchool.map(function (v) {
              return v.udise_code;
            });
            this.schoolData[id].pending.forEach(function (x) {
              if (comUdise.includes(x.udise_code)) {
                _this7.schoolData[id].pending.splice(_this7.schoolData[id].pending.findIndex(function (i) {
                  return i.udise_code === x.udise_code;
                }), 1);
              }
            });

            if (this.schoolData[id].pending.length) {
              this.ionicstorage.insertData_Replace('clusterId', this.schoolData[id].id);
              this.studListl3 = this.schoolData[id].pending;
              console.log('ccccccccccccccc', this.studListl3);

              for (var i = 0; i < this.studListl3.length; i++) {
                this.currentSchList = this.schoolData[id].pending[i];
              }

              console.log(this.currentSchList, 'L333333333333333 cluster school data');
            } else {
              setTimeout(function () {
                _this7.schoollistoverAlert(id);
              }, 50);
            }
          }
        }, {
          key: "openModel",
          value: function openModel(id) {
            this.currentSchListModel = this.schoolData[id];
            console.log(this.currentSchListModel, 'model cluster school data');
            this.schoolAlert();
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalCtrl.create({
                      component: _school_observ_modelpopup_school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_8__.SchoolObservModelpopupPage,
                      componentProps: {
                        schoolClassData: this.currentSchListModel
                      },
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
          key: "onSelectedClassRadio",
          value: function onSelectedClassRadio(item) {
            this.classRadio = item;
            this.apiService.onSelectedClassRadio(item);
          }
        }, {
          key: "onClassTypeSelectionHandler",
          value: function onClassTypeSelectionHandler(item) {
            this.apiService.onClassTypeSelection(item.value);
            this.classType = item.value;

            if (this.classType == 'multigrade') {
              if (this.classes.length > 0) {
                this.classes.filter(function (el) {
                  el.section.map(function (s) {
                    return s.isSelected = false;
                  });
                  return el;
                });
              }
            }
          }
        }, {
          key: "onMediumOfInstructionSelection",
          value: function onMediumOfInstructionSelection(item) {
            this.apiService.onMediumOfInstructionSelection(item);
          }
        }, {
          key: "onClassSelection",
          value: function onClassSelection(item) {
            this.apiService.onClassSelection(item);
          }
        }, {
          key: "checkSection",
          value: function checkSection(value) {
            var getvalues = value.map(function (t) {
              if (t.isSelected == true) {
                return t.name;
              }
            });
            return getvalues;
          }
        }, {
          key: "onClassSelectionformongradeComp",
          value: function onClassSelectionformongradeComp(item) {
            this.selectedClass = item;
            this.apiService.onClassSelectionformongrade(item);
          }
        }, {
          key: "onClassSelectionChoices",
          value: function onClassSelectionChoices(item, choice) {
            this.apiService.selectedClassChoice(item, choice.value);
          }
        }, {
          key: "onSubjectSelectionHandler",
          value: function onSubjectSelectionHandler(item) {
            this.apiService.onSubjectSelection(item);
          }
        }, {
          key: "onSaveBtnPress",
          value: function onSaveBtnPress() {
            var _this8 = this;

            var classBoolError = this.classes.find(function (el) {
              return el.isSelected == true;
            });
            var subjects = this.subjects.find(function (el) {
              return el.isSelected == true;
            });
            var mediumOfInstructionsArrayError = this.mediumOfInstructionsArray.find(function (el) {
              return el.isSelected == true;
            });

            if (!classBoolError && this.classType !== 'monograde') {
              this.apiService.displayToast('Please select class !', true);
            } else if (!subjects) {
              this.apiService.displayToast('Please select subjects!', true);
            } else if (!mediumOfInstructionsArrayError) {
              this.apiService.displayToast('Please select medium of instructions!', true);
            } else if (this.classType === 'Monograde' && this.classRadio === "") {
              this.apiService.displayToast('Please select c lass!', true);
            } else {
              var username = null;
              this.ionicstorage.getData('userInfo').then(function (dataa) {
                username = dataa.username;
                var classtype_id = _this8.classType;
                var subject_id = [];
                var medium_instruction_id = [];
                var class_id = [];

                _this8.subjects.forEach(function (el) {
                  if (el.isSelected == true) {
                    subject_id.push(el.id);
                  }
                });

                _this8.mediumOfInstructionsArray.forEach(function (el) {
                  if (el.isSelected == true) {
                    medium_instruction_id.push(el.medium_id);
                  }
                });

                _this8.classes.forEach(function (el) {
                  if (el.isSelected == true) {
                    var obj = {
                      id: el.id,
                      "class": el["class"],
                      section: el.section.filter(function (n) {
                        return n.isSelected == true;
                      })
                    };
                    class_id.push(obj);
                  }
                });

                var data = {
                  username: username,
                  classtype_id: classtype_id,
                  medium_instruction_id: JSON.stringify(medium_instruction_id),
                  subject_id: JSON.stringify(subject_id),
                  class_id: JSON.stringify(class_id)
                };

                _this8.ionLoaderService.simpleLoader();

                _this8.apiService.saveClassRoomDetails(data, dataa.token).subscribe(function (response) {
                  if (response.status == 200 && response.dataStatus == true) {
                    _this8.zone.run(function () {
                      _this8.ionLoaderService.dismissLoader();

                      _this8.commonAlert('Success', 'Classroom Details saved successfully!!');
                    });
                  } else {
                    _this8.alertService.error(response.msg);
                  }
                });
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "navigateModule",
          value: function navigateModule(schId, assYear, assType, udiseCode, schlName) {
            var _this9 = this;

            debugger;
            console.log(schId + '--' + assYear + '--' + assType + '--' + udiseCode);
            var data = {
              user_id: this.user_id,
              school_id: schId,
              udise_code: udiseCode,
              screen_level: this.screen_level,
              term_id: this.termId
            };

            if (this.schoolOverallData.observation_id == '') {
              this.apiService.initializeNetworkEvents();

              if (this.networkService.getCurrentNetworkStatus() == 0) {
                this.apiService.createObservation(data).subscribe(function (dataval) {
                  try {
                    if (dataval && dataval.status == 200) {
                      console.log(dataval, 'createObservation id');
                      _this9.observation_id = dataval.record; // if(this.level == 'L3'){

                      var dateTime = _this9.pipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'); // this.getEetSchools['observation_status'] = true
                      // this.getEetSchools['observation_id'] = dataval.record
                      // this.getEetSchools['observation_date'] = dateTime,
                      // this.getEetSchools['completed'] = false
                      // this.getEetSchools['school_id'] = schId
                      // this.getEetSchools['udise_code'] = udiseCode
                      // this.getEetSchools['school_name'] = schlName
                      // this.ionicstorage.insertData_Replace('getEetSchools', this.getEetSchools)
                      // }


                      if (_this9.level == 'L2' && _this9.udiseSrchSch == true) {
                        _this9.getSchoolList();
                      }
                    } else {
                      if (!dataval) {
                        throw "No data found";
                      } else if (dataval.status !== 200) {
                        throw "Server not found...Try again later";
                      }
                    }
                  } catch (err) {
                    _this9.apiService.displayToast(err, true);

                    _this9.errorLog(err, data);
                  }

                  _this9.obser_id = _this9.observation_id ? _this9.observation_id : _this9.schoolOverallData.observation_id;

                  _this9.router.navigate(['tabs/summative-class-selection'], {
                    queryParams: {
                      schId: schId,
                      assYear: assYear,
                      assType: assType,
                      udiseCode: udiseCode,
                      observation_id: _this9.obser_id,
                      level: _this9.level,
                      udiseflag: _this9.udiseflag
                    }
                  });
                });
              } else {
                this.alertService.warning('Please Turn On Your Mobile Data');
              }
            } else {
              this.obser_id = this.observation_id ? this.observation_id : this.schoolOverallData.observation_id;
              this.router.navigate(['tabs/summative-class-selection'], {
                queryParams: {
                  schId: schId,
                  assYear: assYear,
                  assType: assType,
                  udiseCode: udiseCode,
                  observation_id: this.obser_id,
                  level: this.level,
                  udiseflag: this.udiseflag
                }
              });
            }
          }
        }, {
          key: "errorLog",
          value: function errorLog(err, payload) {
            debugger;
            var record = {
              "observation_id": "",
              "school_id": "",
              "student_id": "",
              "oberved_date": "",
              "oberved_by": this.username,
              "page": this.scrnNmbr,
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
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this0 = this;

            this.udiseSrchSch = true;

            if (this.udiseSearchForm.valid) {
              console.log(this.udiseSearchForm.value.udiseCode);
              this.apiService.getUdiseSchool(this.udiseSearchForm.value.udiseCode).subscribe(function (response) {
                try {
                  if (response.status == 200 && response.dataStatus == true) {
                    // console.log(response.result[0])
                    // this.udiseSrchSch = response.result[0]
                    _this0.extUdiseCode = response.result[0].udise_code;
                    _this0.extAccYear = response.result[0].academic_year;
                    _this0.extAssType = response.result[0].assessment_type;
                    _this0.extSchoolId = response.result[0].school_id;
                    _this0.extSchoolName = response.result[0].school_name; // console.log(this.udiseSrchSch,'1234567899')
                    // this.udiseSrchSch['academic_year'] = 1
                    // this.udiseSrchSch['assessment_type'] = 1
                  } else {
                    throw 'Enter Valid UDISE Code';
                  }
                } catch (error) {
                  _this0.alertService.error(error);
                }
              });
            }
          }
        }, {
          key: "SubmitAlert",
          value: function SubmitAlert(schId, assYear, assType, udiseCode, schlName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this1 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    console.log(schId, assYear, assType, udiseCode, 'hcdhsjhdjshnjhdjshn');
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Will you be able to visit this school today?',
                      cssClass: 'custom-alert',
                      buttons: [{
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: function handler() {
                          _this1.rejectAlert(_this1.clusterIndexID, schId, assYear, assType, udiseCode);
                        }
                      }, {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this1.ionicstorage.insertData_Replace('summativeAsseData', {
                            studentlist: []
                          });

                          _this1.navigateModule(schId, assYear, assType, udiseCode, schlName);
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
        }, {
          key: "l3StudentList",
          value: function l3StudentList(schId, assYear, assType, udiseCode, schlName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this10 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    console.log(schId, assYear, assType, udiseCode, 'hcdhsjhdjshnjhdjshn');
                    _context4.n = 1;
                    return this.alertController.create({
                      header: 'Will you be able to visit this school today?',
                      cssClass: 'custom-alert',
                      buttons: [{
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this10.ionicstorage.insertData_Replace('summativeAsseData', {
                            studentlist: []
                          });

                          _this10.navigateModule(schId, assYear, assType, udiseCode, schlName);
                        }
                      }]
                    });

                  case 1:
                    alert = _context4.v;
                    _context4.n = 2;
                    return alert.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "rejectAlert",
          value: function rejectAlert(clusterIndexID, schId, assYear, assType, udiseCode) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this11 = this;

              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: 'Reason For Reject',
                      cssClass: 'custom-alert',
                      inputs: [{
                        label: 'On Deputation duty',
                        type: 'radio',
                        value: 'deputation_duty',
                        name: "reasonData"
                      }, {
                        label: 'School holiday',
                        type: 'radio',
                        value: 'holiday',
                        name: "reasonData"
                      }, {
                        label: 'School is not part of my cluster',
                        type: 'radio',
                        value: 'other_cluster',
                        name: "reasonData"
                      }, {
                        label: 'All students left the school that day',
                        type: 'radio',
                        value: 'student_left',
                        name: "reasonData"
                      }, {
                        label: 'Today Leave',
                        type: 'radio',
                        value: 'today_leave',
                        name: "reasonData"
                      } // {
                      //   label: 'Reason is not listed',
                      //   type: 'radio',
                      //   value: 'Other',
                      //   name: 'reasonData',
                      //   handler: (alertData) => {
                      //     // this.otherReasonAlert();
                      //     alert.dismiss();
                      //   }
                      // }
                      ],
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          if (alertData != undefined) {
                            if (_this11.level == 'L1') {
                              _this11.brteSchoolList();

                              _this11.reasonForRejectSchool(alertData, schId, udiseCode);
                            } else if (_this11.level == 'L2') {
                              _this11.beoSchoolList(clusterIndexID);

                              _this11.reasonForRejectSchool(alertData, schId, udiseCode);
                            }
                          } else {
                            _this11.alertService.error('Please select any reason');
                          }
                        }
                      }]
                    });

                  case 1:
                    alert = _context5.v;
                    _context5.n = 2;
                    return alert.present();

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          } // async otherReasonAlert() {
          //   const alert = await this.alertController.create({
          //     header: 'Reason For Reject',
          //     cssClass: 'custom-alert',
          //     inputs: [
          //       {
          //         placeholder: 'Enter Other Reasons',
          //         type: 'text',
          //         name: 'reasonData',
          //       }
          //     ],
          //     buttons: [
          //       {
          //         text: 'Cancel',
          //         cssClass: 'alert-button-cancel',
          //       },
          //       {
          //         text: 'Ok',
          //         cssClass: 'alert-button-confirm',
          //         handler: (alertData) => {
          //           console.log(alertData.reasonData)
          //           if(this.emis_usertype == 39 && this.emis_usertype1 == 1){
          //             this.brteSchoolList();
          //           }
          //           else if(this.emis_usertype == 6 && this.emis_usertype1 == 1){
          //             this.beoSchoolList(id);
          //           }
          //         }
          //       },
          //     ],
          //   });
          //   await alert.present();
          // }

        }, {
          key: "schoollistoverAlert",
          value: function schoollistoverAlert(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this12 = this;

              var alert;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Important message',
                      message: 'No other school is available. You have to choose one of the schools from all the schools displayed.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          if (_this12.level == 'L1') {
                            _this12.brteSchoolList();
                          } else if (_this12.level == 'L2') {
                            _this12.beoSchoolList(id);
                          }
                        }
                      }]
                    });

                  case 1:
                    alert = _context6.v;
                    _context6.n = 2;
                    return alert.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "checkObservation",
          value: function checkObservation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this13 = this;

              var alert;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    debugger;
                    _context7.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Important message',
                      message: 'Your previous data is not saved properly, please proceed again.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this13.updateObservation();

                          _this13.ionViewDidEnter();
                        }
                      }]
                    });

                  case 1:
                    alert = _context7.v;
                    _context7.n = 2;
                    return alert.present();

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "updateObservation",
          value: function updateObservation() {
            debugger;
            var data = {
              observation_id: this.obserId,
              status: "cancelled"
            };
            this.apiService.eet_updateObservation(data).subscribe(function (dataval) {
              console.log(dataval, 'updateObservation id');
            });
          } //offline sync function

        }, {
          key: "saveRemainingDataSummative",
          value: function saveRemainingDataSummative() {
            var _this14 = this;

            this.pendDataDisabledBtn = true;

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.ionicstorage.getData('remaingusersummative').then(function (dataa) {
                console.log(dataa, "123");
                var v = dataa.remainingdata.length;

                if (v > 0) {
                  _this14.saving = true;
                  _this14.nodata = false;
                  var remaingusersummativecount = 0; // dataa.remainingdata.filter(val => {

                  console.log(dataa.remainingdata[0], "dataa.remainingdata[0]");
                  dataa.remainingdata.forEach(function (val) {
                    val.observation_id = _this14.observation_id ? _this14.observation_id : _this14.schoolOverallData.observation_id;
                  });

                  _this14.apiService.saveSummativeAssessmentDetails(dataa.remainingdata, _this14.token).subscribe(function (data) {
                    console.log(data, 'api');

                    if (data.status == 200 && data.dataStatus == true) {
                      _this14.commonAlert('Success', 'Assessment successfully Saved!!');

                      remaingusersummativecount = remaingusersummativecount + 1; // if (remaingusersummativecount == v) {

                      _this14.saving = false;

                      _this14.ionicstorage.insertData_Replace('remaingusersummative', {
                        remainingdata: []
                      }); // this.ionicstorage.insertData_Replace('getEetSchools', '')


                      _this14.remainguserdata = 0; // }

                      _this14.getSchoolList();

                      _this14.pendDataDisabledBtn = false;
                    } else {
                      _this14.pendDataDisabledBtn = false;

                      _this14.alertService.error(data.msg);
                    }
                  }); // })

                } else {
                  _this14.nodata = true;
                  _this14.pendDataDisabledBtn = false;
                }
              });
            } else {
              this.pendDataDisabledBtn = false;
              this.alertService.error("Offline!!");
            }
          }
        }, {
          key: "saveRemainingData",
          value: function saveRemainingData() {
            var _this15 = this;

            this.pendDataDisabledBtn = true;

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.ionicstorage.getData('remainguser').then(function (dataa) {
                console.log(dataa.remainingdata, "dataa.remainingdata", dataa);
                var v = dataa.remainingdata.length;

                if (v > 0) {
                  _this15.saving = true;
                  _this15.nodata = false;
                  var remaingusercount = 0;
                  dataa.remainingdata.filter(function (val) {
                    _this15.apiService.saveBaselineAssessmentDetails(val, _this15.token).subscribe(function (data) {
                      if (data.status == 200 && data.dataStatus == true) {
                        _this15.commonAlert('Success', 'Test successfully Saved!!');

                        remaingusercount = remaingusercount + 1;

                        if (remaingusercount == v) {
                          _this15.saving = false;

                          _this15.ionicstorage.insertData_Replace('remainguser', {
                            remainingdata: []
                          });

                          _this15.remainguserdata = 0;
                        }

                        _this15.getSchoolList();

                        _this15.pendDataDisabledBtn = false;
                      } else {
                        _this15.pendDataDisabledBtn = false;

                        _this15.alertService.error(data.msg);
                      }
                    });
                  });
                } else {
                  _this15.nodata = true;
                }
              });
            } else {
              this.pendDataDisabledBtn = false;
              this.alertService.error("Offline!!");
            }
          }
        }, {
          key: "commonAlert",
          value: function commonAlert(SubHeader, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var alert;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: SubHeader,
                      message: msg,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {}
                      }]
                    });

                  case 1:
                    alert = _context8.v;
                    _context8.n = 2;
                    return alert.present();

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "reportForl3",
          value: function reportForl3() {
            this.router.navigate(['tabs/l3-ee-report']);
          }
        }]);
      }();

      _SchoolObservationPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__.IonLoaderService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
        }];
      };

      _SchoolObservationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-school-observation',
        template: _raw_loader_school_observation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolObservationPage);
      /***/
    },

    /***/
    46606:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding-bottom: 5px;\n}\n\n.top-margin {\n  margin-top: 20px;\n}\n\n.fs-12 {\n  margin-top: 2px;\n}\n\nion-back-button {\n  color: #fff;\n}\n\nion-card {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n\n.tlt {\n  color: #000;\n  padding: 0px 13px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\n.srcl-tble {\n  height: 450px;\n  overflow-y: auto;\n}\n\n.srcl-tble table tr:first-child {\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n}\n\n.anim-btn {\n  background: #9162b0;\n  color: #fff;\n  padding: 12px 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.anim-btn .rit-icon {\n  position: absolute;\n  top: 24%;\n  right: 20px;\n  font-size: 25px;\n  animation: sclbtn-anim 2s infinite;\n}\n\n.anim-btn .lft-icon {\n  position: absolute;\n  top: 24%;\n  left: 20px;\n  font-size: 25px;\n  animation: sclbtn-anim1 2s infinite;\n}\n\n@keyframes sclbtn-anim {\n  0% {\n    right: 20px;\n  }\n  25% {\n    right: 3px;\n  }\n  50% {\n    right: 20px;\n  }\n  75% {\n    right: 3px;\n  }\n  100% {\n    right: 20px;\n  }\n}\n\n@keyframes sclbtn-anim1 {\n  0% {\n    left: 20px;\n  }\n  25% {\n    left: 3px;\n  }\n  50% {\n    left: 20px;\n  }\n  75% {\n    left: 3px;\n  }\n  100% {\n    left: 20px;\n  }\n}\n\n.img-schools {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0px auto;\n}\n\n.img-schools progress {\n  height: 10px;\n}\n\n.img-schools img {\n  border-radius: 50%;\n  width: 35px;\n  -o-object-fit: none;\n     object-fit: none;\n  background: #fff;\n  margin-left: 5px;\n  padding-bottom: 2px;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 0%);\n}\n\ntable .grey {\n  color: #888;\n}\n\ntable .success {\n  color: #28ba62;\n}\n\ntable .blue {\n  color: #8b67b3;\n}\n\nth {\n  background: #f7ecff;\n  font-size: 15px;\n  padding: 10px;\n  color: #333;\n}\n\ntd {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\nion-badge {\n  border-radius: 15px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 5px 10px 4px;\n}\n\n.search-bx {\n  text-align: center;\n  padding: 5px 10px;\n}\n\n.search-bx ion-button {\n  margin-bottom: 10px;\n}\n\n.anim-bx {\n  animation: schoolbx-anim 0.8s;\n}\n\n@keyframes schoolbx-anim {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.css-selector {\n  background: linear-gradient(89deg, #2e6624, #9df98d);\n  background-size: 400% 400%;\n  animation: AnimationName 30s ease infinite;\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: 0% 51%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 51%;\n  }\n}\n\nion-modal {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n\nion-modal ion-toolbar {\n  --background: rgb(14 116 144);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1vYnNlcnZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0kseUNBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhZO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUtoQjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUlSOztBQURBO0VBQ0k7SUFDSSxXQUFBO0VBSU47RUFGRTtJQUNJLFVBQUE7RUFJTjtFQUZFO0lBQ0ksV0FBQTtFQUlOO0VBRkU7SUFDSSxVQUFBO0VBSU47RUFGRTtJQUNJLFdBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0k7SUFDSSxVQUFBO0VBSU47RUFGRTtJQUNJLFNBQUE7RUFJTjtFQUZFO0lBQ0ksVUFBQTtFQUlOO0VBRkU7SUFDSSxTQUFBO0VBSU47RUFGRTtJQUNJLFVBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUhJO0VBQ0ksWUFBQTtBQUtSOztBQUhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtSOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUpJO0VBQ0ksV0FBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtBQU1SOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFSSTtFQUNJLG1CQUFBO0FBVVI7O0FBUEE7RUFDSSw2QkFBQTtBQVVKOztBQVJBO0VBQ0k7SUFBSSxtQkFBQTtFQVlOO0VBWEU7SUFBSyxxQkFBQTtFQWNQO0VBYkU7SUFBSyxtQkFBQTtFQWdCUDtFQWZFO0lBQUssc0JBQUE7RUFrQlA7RUFqQkU7SUFBTSxtQkFBQTtFQW9CUjtBQUNGOztBQWpCRTtFQUNFLG9EQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQ0FBQTtBQWtCSjs7QUFmQTtFQUNJO0lBQUcsMkJBQUE7RUFtQkw7RUFsQkU7SUFBSSw2QkFBQTtFQXFCTjtFQXBCRTtJQUFLLDJCQUFBO0VBdUJQO0FBQ0Y7O0FBckJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0ZBQUE7QUF1Qko7O0FBcEJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBdUJKOztBQXBCRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtBQXVCSiIsImZpbGUiOiJzY2hvb2wtb2JzZXJ2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRvcC1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZnMtMTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0gIFxyXG5pb24tY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnRsdHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMHB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxyXG59XHJcbi5zcmNsLXRibGV7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxle1xyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYW5pbS1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE2MmIwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnJpdC1pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI0JTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzY2xidG4tYW5pbSAycyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZnQtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNCU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzY2xidG4tYW5pbTEgMnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2xidG4tYW5pbSB7XHJcbiAgICAwJXtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICByaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgNzUle1xyXG4gICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NsYnRuLWFuaW0xIHtcclxuICAgIDAle1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAyNSV7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5pbWctc2Nob29sc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHByb2dyZXNze1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIH1cclxufVxyXG50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwJSk7XHJcbiAgICAuZ3JleXtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgIH1cclxuICAgIC5zdWNjZXNze1xyXG4gICAgICAgIGNvbG9yOiAjMjhiYTYyO1xyXG4gICAgfVxyXG4gICAgLmJsdWV7XHJcbiAgICAgICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICB9XHJcbn1cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdlY2ZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbnRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1iYWRnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDRweDtcclxufVxyXG4uc2VhcmNoLWJ4e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmFuaW0tYnh7XHJcbiAgICBhbmltYXRpb246IHNjaG9vbGJ4LWFuaW0gMC44cztcclxufVxyXG5Aa2V5ZnJhbWVzIHNjaG9vbGJ4LWFuaW0ge1xyXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG4gICAgMjUlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSk7fVxyXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgIDc1JSB7dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTt9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICB9XHJcblxyXG5cclxuICAuY3NzLXNlbGVjdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4OWRlZywgIzJlNjYyNCwgIzlkZjk4ZCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuXHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMzBzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUxJX1cclxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxyXG4gICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUxJX1cclxufVxyXG5cclxuaW9uLW1vZGFsIHtcclxuICAgIC0taGVpZ2h0OiA1MCU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsOjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE0IDExNiAxNDQpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    31107:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"header-style\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/menu\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 3</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 3</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"remainguserdata > 0\">\r\n    <div *ngIf=\"saving\" style=\"padding:5px;padding: 10px;\r\n    background: #c5c1c1;\">Saving...</div>\r\n    <div>\r\n      <ion-button *ngIf=\"remainguserdata > 0\" style=\"--background: #c34242;width: 90%;\r\n        margin: 20px\" (click)=\"saveRemainingData();saveRemainingDataSummative();\" [disabled]=\"pendDataDisabledBtn\">Save Pending Data</ion-button>\r\n    </div>\r\n  </ion-col>\r\n  <ion-row class=\"top-margin\">\r\n    <ion-col>\r\n      <div style=\"text-align: end; padding-right: 20px; display: flex;justify-content: end;\" *ngIf=\"this.level == 'L3'\">\r\n        <ion-button size=\"small\"\r\n        style=\"color:#fff;text-transform:capitalize;\"\r\n        (click)=\"reportForl3()\"><b>Report</b></ion-button>\r\n      </div>\r\n      <ion-text color=\"dark\" class=\"ion-text-center position-relative\">\r\n        <h2 class=\"color-dgrey mt-0\">\r\n          <b><span>Greetings!</span>!</b>\r\n        </h2>\r\n        <p class=\"color-dgrey fs-12\">\r\n          <b>Observation completed against target</b>\r\n        </p>\r\n        <div class=\"img-schools\">\r\n          <progress style=\"width: 100%;color:#333;\" max=\"{{schoolOverallData?.school_target}}\"\r\n            value=\"{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}}\"></progress>\r\n          <img src=\"assets/icons/icons-schools.png\" alt=\"\">\r\n        </div>\r\n        <p class=\"fs-12 width-70\">\r\n          <span>Number of Schools Visited</span>:\r\n          <b>{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}} /\r\n            {{schoolOverallData?.school_target ? schoolOverallData?.school_target : '1'}}</b>\r\n\r\n\r\n            <!-- <b *ngIf=\"this.level == 'L3'\">{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}} / 24</b> -->\r\n        </p>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-card class=\"card-content\" *ngIf=\"noVisitTodayMsg\">\r\n    <span class=\"css-selector\">\r\n      <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n        <ion-label>\r\n          You do not have any schools to visit today. Please login tomorrow to check</ion-label>\r\n      </div>\r\n    </span>\r\n  </ion-card>\r\n\r\n  <ng-container *ngIf=\"(this.level == 'L2' || this.level == 'L1') && this.udiseflag == '1'\"> <!--*ngIf=\"emis_usertype == '50' && (emis_usertype1 == '1' || emis_usertype1 == '2')\"-->\r\n    <ion-card *ngIf=\"udiseInput\" class=\"search-bx\">\r\n      <form [formGroup]=\"udiseSearchForm\">\r\n        <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n          onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n        <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n      </form>\r\n    </ion-card>\r\n    <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n    <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n      <span>\r\n        <ion-list>\r\n          <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode, extSchoolName)\">\r\n            <div>\r\n              <ion-label>{{extSchoolName}}</ion-label>\r\n              <ion-note>{{extUdiseCode}}</ion-note>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--countinue school card-->\r\n    <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n      <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n        <ion-list>\r\n          <ion-item button detail=\"true\"\r\n            (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n            <div>\r\n              <ion-label>Countinue Your Observation</ion-label>\r\n              <ion-note>{{this.school_name}}</ion-note>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n  <!--======================================================================================================================================-->\r\n  <!--======================================================================================================================================-->\r\n\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!--------------------------------------------------------BRTE usertype interface----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"(this.level == 'L1' && this.udiseflag == '0')\">\r\n    <!--Note info-->\r\n    <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\">\r\n      <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n      <ion-text color=\"dark\">Each school visit will take nearly one full day to complete. Please plan to visit one\r\n        school a day as per the Status Table below on Or before <b>{{this.schoolOverallData?.end_date}}</b></ion-text>\r\n    </ion-card>\r\n\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div> <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <div style=\"text-align:center;\">\r\n        <button class=\"anim-btn\" *ngIf=\"annimeBtn\" (click)=\"getschoolCard()\"><ion-icon name=\"arrow-forward-outline\"\r\n            class=\"lft-icon\"></ion-icon> Click To View Schools <ion-icon name=\"arrow-back-outline\"\r\n            class=\"rit-icon\"></ion-icon></button>\r\n      </div>\r\n\r\n      <!--school info card-->\r\n      <div *ngIf=\"schoolList\">\r\n        <ion-title class=\"tlt\">School to visit today</ion-title>\r\n        <ion-card class=\"card-content anim-bx\">\r\n          <span><!--*ngFor=\"let data of schoollist\"-->\r\n            <ion-list>\r\n              <ion-item button detail=\"true\"\r\n                (click)=\"SubmitAlert(currentSchList.school_id, accYear, 4, currentSchList.udise_code, currentSchList?.school_name)\">\r\n                <!--data.routerlink,data.assessment_type-->\r\n                <div>\r\n                  <ion-label>{{currentSchList?.school_name}}</ion-label>\r\n                  <ion-note>{{currentSchList?.udise_code}}</ion-note>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </span>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <!--=============================================================================================================================-->\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\">\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--log grid for school observation-->\r\n    <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\">Status table</ion-title>\r\n    <ion-card class=\"card-content srcl-tble\">\r\n      <table>\r\n        <tr>\r\n          <th style=\"width:95px;\">Date</th>\r\n          <th>Status</th>\r\n          <th>UDISE of school visited</th>\r\n        </tr>\r\n        <tr *ngFor=\"let data of historyTable\">\r\n          <td>{{data.date}}</td>\r\n          <td *ngIf=\"data.status == 'Submited'\"><ion-badge color=\"success\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Not Submited'\"><ion-badge color=\"warning\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'No Visit'\"><ion-badge color=\"danger\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Upcoming Visit'\"><ion-badge color=\"tertiary\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Yet to Visit'\"><ion-badge color=\"primary\"\r\n              style=\"color:#fff;\">{{data.status}}</ion-badge></td>\r\n          <td>{{data.udise ? data.udise : '-'}}</td>\r\n        </tr>\r\n      </table>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <!--======================================================================================================================================-->\r\n\r\n\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!---------------------------------------------------------BEO userType interface----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"this.level == 'L2' && this.udiseflag == '0'\">\r\n    <!--Note info-->\r\n    <!-- <ion-card class=\"msg-bx\">\r\n      <h5 color=\"dark\">Note:</h5>\r\n      <ion-text color=\"dark\">Will you be able to visit the school today</ion-text>\r\n    </ion-card> -->\r\n\r\n    <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\">\r\n      <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n      <ion-text color=\"dark\">Each school visit will take nearly one full day to complete. Please plan to visit one\r\n        school a day as per the Status Table below on Or before <b>{{this.schoolOverallData?.end_date}}</b></ion-text>\r\n    </ion-card>\r\n\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div>  <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <!--School Info Card-->\r\n      <ion-title class=\"tlt\" *ngIf=\"beoSchl\">School to visit today</ion-title>\r\n      <ion-card *ngIf=\"beoSchl\" class=\"anim-bx\">\r\n        <span><!--*ngFor=\"let data of newmenus\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"SubmitAlert(currentSchList.school_id, this.accYear,4, currentSchList.udise_code, currentSchList.school_name)\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>{{currentSchList.school_name}}</ion-label>\r\n                <ion-note>{{currentSchList.udise_code}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n  \r\n      <!--countinue school card-->\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\" *ngIf=\"clusterTabel\">\r\n        <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n        <ion-text color=\"dark\">1. Select the Cluster which shows Ready.</ion-text><br>\r\n        <ion-text color=\"dark\">2. Click the Cluster ID to get Cluster Details.</ion-text>\r\n      </ion-card>\r\n\r\n      <!--cluster type grid-->\r\n      <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\" *ngIf=\"clusterTabel\">Status table</ion-title>\r\n      <ion-card class=\"card-content\" style=\"overflow-x: auto;\" *ngIf=\"clusterTabel\">\r\n        <table>\r\n          <tr>\r\n            <th>Cluster</th>\r\n            <th>Done</th>\r\n            <th>Status</th>\r\n          </tr>\r\n          <tr *ngFor=\"let data of schoolData let i =index\"\r\n            [class]=\"data.status == 'ready' ? 'blue' : data.status == 'done' ? 'success' : 'grey'\">\r\n            <td (click)=\"openModel(i)\">{{data.id}}</td>\r\n            <td>{{data.completed?.length ? data.completed?.length : '0'}}/{{data.target}}</td>\r\n            <td>\r\n              <b *ngIf=\"data.status !== 'ready'\">{{data.status == 'not_ready' ? 'Not Ready' : 'Done'}}</b>\r\n              <ion-button *ngIf=\"data.status == 'ready'\" [disabled]=\"beoSchlbtn\" size=\"small\"\r\n                style=\"color:#fff;text-transform:capitalize;\"\r\n                (click)=\"beoSchoolList(i)\"><b>{{data.status}}</b></ion-button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </ion-card>\r\n    </div>\r\n    <!--=================================================================================================================================-->\r\n    <!--=================================================================================================================================-->\r\n\r\n\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\"> *ngFor=\"let data of schoollist\"\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"card-content\" *ngIf=\"notReadyStatusMsg\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>\r\n            You do not have any schools to visit today as teachers in your cluster have not yet done enough visits.\r\n            Please encourage the teachers to complete assessments in their schools. Please login tomorrow to\r\n            check</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!---------------------------------------------------------CEO, DEO, State Officials userType interface - L3----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"level == 'L3' && udiseflag == '0'\">\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div>  <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <!--School Info Card-->\r\n      <ion-title class=\"tlt\" *ngIf=\"beoSchl\">School to visit today (Select one school)</ion-title>\r\n      <div >\r\n        <ion-card *ngIf=\"beoSchl\" class=\"anim-bx\" >\r\n          <span *ngFor=\"let item of studListl3\"><!--*ngFor=\"let data of newmenus\"-->\r\n            <ion-list>\r\n              <ion-item button detail=\"true\"\r\n                (click)=\"l3StudentList(item.school_id, this.accYear,4, item.udise_code, item.school_name)\"><!--data.routerlink,data.assessment_type-->\r\n                <div>\r\n                  <ion-label>{{item.school_name}}</ion-label>\r\n                  <ion-note>{{item.udise_code}}</ion-note>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </span>\r\n        </ion-card>\r\n      </div>\r\n      \r\n\r\n      <!--countinue school card-->\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\" *ngIf=\"clusterTabel\">\r\n        <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n        <ion-text color=\"dark\">1. Select the Cluster which shows Ready.</ion-text><br>\r\n        <ion-text color=\"dark\">2. Click the Cluster ID to get Cluster Details.</ion-text><br>\r\n        <ion-text color=\"dark\">3. You will be able to visit more than 1 school per day till {{end_date}}.</ion-text><br>\r\n        <ion-text color=\"dark\">4. Click the REPORT button on top to see the school visit report.</ion-text>\r\n\r\n      </ion-card>\r\n\r\n      <!--cluster type grid-->\r\n      <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\" *ngIf=\"clusterTabel\">Status table</ion-title>\r\n      <ion-card class=\"card-content\" style=\"overflow-x: auto;\" *ngIf=\"clusterTabel\">\r\n        <table>\r\n          <tr>\r\n            <th>Cluster</th>\r\n            <th>Done</th>\r\n            <th>Status</th>\r\n          </tr>\r\n          <tr *ngFor=\"let data of schoolData let i =index\"\r\n            [class]=\"data.status == 'ready' ? 'blue' : data.status == 'done' ? 'success' : 'grey'\">\r\n            <td (click)=\"openModel(i)\">{{data.id}}</td>\r\n            <!-- <td>{{data.completed?.length ? data.completed?.length : '0'}}/{{data.target}}</td> -->\r\n            <td>{{data.completed?.length ? data.completed?.length : '0'}}</td>\r\n            <td>\r\n              <b *ngIf=\"data.status !== 'ready'\">{{data.status == 'not_ready' ? 'Not Ready' : 'Done'}}</b>\r\n              <ion-button *ngIf=\"data.status == 'ready'\" [disabled]=\"ceoSchlbtn\" size=\"small\"\r\n                style=\"color:#fff;text-transform:capitalize;\"\r\n                (click)=\"deoSchoolList(i)\"><b>{{data.status}}</b></ion-button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </ion-card>\r\n    </div>\r\n    <!--=================================================================================================================================-->\r\n    <!--=================================================================================================================================-->\r\n\r\n\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\"> *ngFor=\"let data of schoollist\"\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n    <!--Today's quato-->\r\n    <!-- <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card> -->\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"card-content\" *ngIf=\"notReadyStatusMsg\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>\r\n            You do not have any schools to visit today as teachers in your cluster have not yet done enough visits.\r\n            Please encourage the teachers to complete assessments in their schools. Please login tomorrow to\r\n            check</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n</ion-content>\r\n<!--======================================================================================================================================-->\r\n<!--======================================================================================================================================-->\r\n\r\n\r\n\r\n<!-- <ion-footer>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"onSaveBtnPress()\" class=\"btn-submit\" type=\"submit\" color=\"primary\" expand=\"block\">\r\n          Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_school-observation_school-observation_module_ts-es5.js.map