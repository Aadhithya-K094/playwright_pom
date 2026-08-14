(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts"], {
    /***/
    80169:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/question-filter.pipe.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuestionFilterPipe": function QuestionFilterPipe() {
          return (
            /* binding */
            _QuestionFilterPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _QuestionFilterPipe = /*#__PURE__*/function () {
        function QuestionFilterPipe() {
          _classCallCheck(this, QuestionFilterPipe);

          this.element = [];
        }

        return _createClass(QuestionFilterPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var _this = this;

            if (value.length > 0) {
              // this.findduplicate(this.element, args)
              var argument = value.length;
              var argument2 = Number(args);
              this.generateUniqueRandom(argument, argument2);
              var newarr = value.filter(function (s, index) {
                var findinde = _this.element.some(function (v) {
                  return v == index;
                });

                if (findinde == true) {
                  return s;
                }
              });
              return newarr;
            } else {
              return value;
            }
          }
        }, {
          key: "generateUniqueRandom",
          value: function generateUniqueRandom(maxNr, arg) {
            //Generate random number
            this.random = Math.floor(Math.random() * maxNr); //Coerce to number by boxing

            this.random = Number(this.random);

            if (!this.element.includes(this.random)) {
              this.element.push(this.random);

              if (this.element.length < arg) {
                return this.generateUniqueRandom(maxNr, arg);
              } else {
                return this.random;
              }
            } else {
              if (this.element.length < arg) {
                //Recursively generate number
                return this.generateUniqueRandom(maxNr, arg);
              } else {
                return false;
              }
            }
          }
        }]);
      }();

      _QuestionFilterPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'questionFilter'
      })], _QuestionFilterPipe);
      /***/
    },

    /***/
    42304:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions-routing.module.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeQuestionsPageRoutingModule": function SummativeQuestionsPageRoutingModule() {
          return (
            /* binding */
            _SummativeQuestionsPageRoutingModule
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


      var _summative_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-questions.page */
      71490);

      var routes = [{
        path: '',
        component: _summative_questions_page__WEBPACK_IMPORTED_MODULE_0__.SummativeQuestionsPage
      }];

      var _SummativeQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function SummativeQuestionsPageRoutingModule() {
        _classCallCheck(this, SummativeQuestionsPageRoutingModule);
      });

      _SummativeQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SummativeQuestionsPageRoutingModule);
      /***/
    },

    /***/
    78066:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeQuestionsPageModule": function SummativeQuestionsPageModule() {
          return (
            /* binding */
            _SummativeQuestionsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _summative_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-questions-routing.module */
      42304);
      /* harmony import */


      var _summative_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-questions.page */
      71490);
      /* harmony import */


      var _question_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./question-filter.pipe */
      80169);

      var _SummativeQuestionsPageModule = /*#__PURE__*/_createClass(function SummativeQuestionsPageModule() {
        _classCallCheck(this, SummativeQuestionsPageModule);
      });

      _SummativeQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _summative_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeQuestionsPageRoutingModule],
        declarations: [_summative_questions_page__WEBPACK_IMPORTED_MODULE_1__.SummativeQuestionsPage, _question_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.QuestionFilterPipe]
      })], _SummativeQuestionsPageModule);
      /***/
    },

    /***/
    71490:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeQuestionsPage": function SummativeQuestionsPage() {
          return (
            /* binding */
            _SummativeQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summative_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summative-questions.page.html */
      74638);
      /* harmony import */


      var _summative_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-questions.page.scss */
      18858);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583); // import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


      var _SummativeQuestionsPage = /*#__PURE__*/function () {
        function SummativeQuestionsPage(alertController, route, apiService, router, ionicstorage, alertService, networkService, userSessionService, uploadService, modalCtrl, toast) {
          _classCallCheck(this, SummativeQuestionsPage);

          this.alertController = alertController;
          this.route = route;
          this.apiService = apiService;
          this.router = router;
          this.ionicstorage = ionicstorage;
          this.alertService = alertService;
          this.networkService = networkService;
          this.userSessionService = userSessionService;
          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl;
          this.toast = toast;
          this.showSkipModel = false;
          this.id = "";
          this.student = {
            name: "",
            user_id: ""
          };
          this.questionsData = [];
          this.answers = [];
          this.studentsList = [];
          this.SHOWMOTTU = false;
          this.SHOWMALAR = false;
          this.SHOWARUMU = false;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emis_usertype1 = this.userSessionService.emis_usertype1();
        }

        return _createClass(SummativeQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.startTime = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
            console.log(this.startTime, 'fsdsfsfsfsfsfsf'); // this.studetnList = []

            this.schId = this.route.snapshot.queryParamMap.get("schId");
            this.assYear = this.route.snapshot.queryParamMap.get("assYear");
            this.assType = this.route.snapshot.queryParamMap.get("assType");
            this.udiseCode = this.route.snapshot.queryParamMap.get("udiseCode");
            this.observation_id = this.route.snapshot.queryParamMap.get("observation_id");
            this.level = this.route.snapshot.queryParamMap.get("level");
            console.log(this.level);
            console.log(this.observation_id, 'iddddd');
            this.indexNum = this.route.snapshot.queryParamMap.get("i");
            console.log(this.schId, this.assYear, this.assType, this.indexNum, 'jksdlfj4wfhjw8rf'); // if (this.emis_usertype == '39' && this.emis_usertype1 == '1') {
            //   this.scrnNmbr = 'L1 - 4';
            // }
            // else if (this.emis_usertype == '6' && this.emis_usertype1 == '1') {
            //   this.scrnNmbr = 'L2 - 4';
            // }

            if (this.level == 'L1') {
              this.scrnNmbr = 'L1 - 3';
            } else if (this.level == 'L2') {
              this.scrnNmbr = 'L2 - 3';
            } else if (this.level == 'L3') {
              this.scrnNmbr = 'L3 - 3';
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/tabs/summative-class-selection'], {
              queryParams: {
                schId: this.schId,
                assYear: this.assYear,
                assType: this.assType,
                udiseCode: this.udiseCode,
                observation_id: this.observation_id,
                level: this.level
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.questions = [];
            this.findIndexVal = '';
            this.live_img_url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.ImgUrl;
            console.log(this.live_img_url, 'live_img_url');
            this.ionicstorage.getData('summativeAsseData').then(function (dataa) {
              console.log(dataa, '4783yfhuity87w4e');
              _this2["class"] = dataa.classdata;
              _this2.Medium = dataa.subject;
              _this2.subjectkey = dataa.subjectkey;
              _this2.term = dataa.term;
              _this2.viewassessmenbtn = dataa.viewassessment; // this.studentsList = this.studentOrder(dataa.studentlist);

              _this2.studentsList = dataa.studentlist;
              console.log(_this2.studentsList, 'studentsList');
              _this2.weekofyear = dataa.week_of_year; // this.studentsList = this.studentOrder(dataa.studentlist);

              _this2.route.params.subscribe(function (params) {
                _this2.id = params['id'];
                _this2.subId = params['sub'];
                console.log(_this2.id, '82ryf948ehrf', _this2.subId);

                var questionsData = _this2.studentsList.find(function (s) {
                  return s.id == _this2.id && s.subject_id == _this2.subId;
                });

                if (typeof questionsData['questionset'] == 'object') {
                  if (questionsData['questionset']['Arumbu'] != undefined) {
                    _this2.SHOWARUMU = true;
                    _this2.SHOWMOTTU = false;
                    _this2.SHOWMALAR = false;
                    questionsData['questionset']['Arumbu'].filter(function (val) {
                      val.passvalue_count = 0;
                      val.pass = false;
                      val.alloptioncheck = false;
                      return val;
                    });
                    questionsData['questionset']['Arumbu'].filter(function (val) {
                      return val.questions.filter(function (s) {
                        s.passvalue_boolean = false;
                        s.optioncheck = false;
                        s.selected_option = "";
                        return s;
                      });
                    });
                    _this2.questions = questionsData['questionset'];
                  } else if (questionsData['questionset']['Mottu'] != undefined) {
                    _this2.SHOWARUMU = false;
                    _this2.SHOWMOTTU = true;
                    _this2.SHOWMALAR = false;
                    questionsData['questionset']['Mottu'].filter(function (val) {
                      val.passvalue_count = 0;
                      val.pass = false;
                      val.alloptioncheck = false;
                      return val;
                    });
                    questionsData['questionset']['Mottu'].filter(function (val) {
                      return val.questions.filter(function (s) {
                        s.passvalue_boolean = false;
                        s.optioncheck = false;
                        s.selected_option = "";
                        return s;
                      });
                    });
                    _this2.questions = questionsData['questionset'];
                  } else if (questionsData['questionset']['Malar'] != undefined) {
                    _this2.SHOWARUMU = false;
                    _this2.SHOWMOTTU = false;
                    _this2.SHOWMALAR = true;
                    questionsData['questionset']['Malar'].filter(function (val) {
                      val.passvalue_count = 0;
                      val.pass = false;
                      val.alloptioncheck = false;
                      return val;
                    });
                    questionsData['questionset']['Malar'].filter(function (val) {
                      return val.questions.filter(function (s) {
                        s.passvalue_boolean = false;
                        s.optioncheck = false;
                        s.selected_option = "";
                        return s;
                      });
                    });
                    _this2.questions = questionsData['questionset'];
                  }
                } else {
                  _this2.questions = [];
                }
              });

              _this2.findIndexVal = _this2.studentsList.findIndex(function (e) {
                return e.id == _this2.id && e.subject_id == _this2.subId;
              });
              console.log(_this2.findIndexVal, 'find index value');

              if (_this2.findIndexVal !== -1) {
                _this2.student = _this2.studentsList[_this2.findIndexVal];
                _this2.class_name = _this2.studentsList[_this2.findIndexVal].assessment_name;

                var myArray = _this2.class_name.split('-');

                _this2.subject = myArray[1];
                _this2.class_num = myArray[0];
                console.log(_this2.class_name, 'class name ', _this2.class_num, '', _this2.subject);
                _this2.minimum_correct = _this2.student['minimum_correct'];
                _this2.student['g1_qa_count'] = 0;
                _this2.student['g1_score'] = 0;
                _this2.student['g2_qa_count'] = 0;
                _this2.student['g2_score'] = 0;
                _this2.student['g3_qa_count'] = 0;
                _this2.student['g3_score'] = 0;
              } else {
                _this2.router.navigate(['/tabs/menu']);
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this2.username = dataa.username;
              _this2.schoolid = dataa.school_id;
              _this2.token = dataa.token;
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "studentOrder",
          value: function studentOrder(data) {
            console.log(data, this.indexNum, 'okokokokokokok');
            this.singledatalist = [];
            var female = data.filter(function (v) {
              return v.gender == '2';
            });
            var ts = female.sort(function (a, b) {
              var fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

              if (fa < fb) {
                return -1;
              }

              if (fa > fb) {
                return 1;
              }

              return 0;
            });
            var male = data.filter(function (v) {
              return v.gender == '1';
            });
            male.sort(function (a, b) {
              var fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

              if (fa < fb) {
                return -1;
              }

              if (fa > fb) {
                return 1;
              }

              return 0;
            });
            var newll = female.concat(male);
            return newll; // for (let i = this.indexNum; i < this.indexNum + 1; i++) {
            //   this.singledatalist = [data[i]]
            // }    
            // console.log(this.singledatalist,'aitoooooooooooooo');
            // return this.singledatalist
          }
        }, {
          key: "changeModelStatusHandler",
          value: function changeModelStatusHandler() {
            this.showSkipModel = !this.showSkipModel;
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Skip student?',
                      message: "Select the reason for skipping the student ".concat(this.student.name, " (").concat(this.student.user_id, ")"),
                      inputs: [{
                        type: 'radio',
                        label: 'Absent today',
                        value: 'Absent_today'
                      }, {
                        type: 'radio',
                        label: 'Left school after marking attendance',
                        value: 'Left_school_after_marking_attendance'
                      }, {
                        type: 'radio',
                        label: 'Present in school but unwell',
                        value: 'Present_in_school_but_unwell'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        // id: 'cancel-button',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Submit',
                        cssClass: 'alertButton',
                        // id: 'confirm-button',
                        handler: function handler(data) {
                          if (data != undefined) {
                            _this3.skipStudent(data);
                          } else {
                            _this3.alertService.error('Please select options');
                          }
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
          key: "onAnswerSelect",
          value: function onAnswerSelect(question, answer) {
            var checkAlreadyExistingItemInArray = this.answers.findIndex(function (el) {
              return el.question == question;
            });

            if (checkAlreadyExistingItemInArray == -1) {
              this.answers.push({
                question: question,
                answer: answer
              });
            }
          }
        }, {
          key: "findQuestionWithANswer",
          value: function findQuestionWithANswer(title, answer) {
            return this.answers.findIndex(function (e) {
              return e.title === title && e.answer == answer;
            }) !== -1;
          }
        }, {
          key: "saveAndMove",
          value: function saveAndMove() {
            this.apiService.markAssessed(this.id);
            this.router.navigate(['/tabs/summative-student']);
          }
        }, {
          key: "findStudentToBeAssessed",
          value: function findStudentToBeAssessed() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this4 = this;

              var getarumbulenght, allQuestionchecked, getarumbupassedlogiclenght, getmottulenght, questionsData;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!(typeof this.questions == 'object')) {
                      _context2.n = 5;
                      break;
                    }

                    _context2.n = 1;
                    return this.questions['Arumbu'].length;

                  case 1:
                    getarumbulenght = _context2.v;

                    if (!(getarumbulenght > 0)) {
                      _context2.n = 5;
                      break;
                    }

                    _context2.n = 2;
                    return this.checkValidation(this.questions['Arumbu'], getarumbulenght);

                  case 2:
                    allQuestionchecked = _context2.v;

                    if (!(allQuestionchecked == true)) {
                      _context2.n = 4;
                      break;
                    }

                    _context2.n = 3;
                    return this.questions['Arumbu'].filter(function (n) {
                      return n.pass == true;
                    }).length;

                  case 3:
                    getarumbupassedlogiclenght = _context2.v;
                    this.questions['status'] = 1;

                    if (getarumbupassedlogiclenght >= this.minimum_correct) {
                      if (this.questions['Mottu'] != undefined) {
                        getmottulenght = this.questions['Mottu'].length;

                        if (getmottulenght > 0) {
                          questionsData = this.studentsList.find(function (s) {
                            return s.id == _this4.id && s.subject_id == _this4.subId;
                          });
                          questionsData['questionset']['Mottu'].filter(function (val) {
                            val.passvalue_count = 0;
                            val.pass = false;
                            val.alloptioncheck = false;
                            return val;
                          });
                          questionsData['questionset']['Mottu'].filter(function (val) {
                            return val.questions.filter(function (s) {
                              s.passvalue_boolean = false;
                              s.optioncheck = false;
                              s.selected_option = "";
                              return s;
                            });
                          });
                          this.questions = questionsData['questionset'];
                          this.SHOWMOTTU = true;
                          this.SHOWARUMU = false;
                          this.SHOWMALAR = false;
                        } else {
                          this.findNextStudentToBeAssessed();
                        }
                      } else {
                        this.findNextStudentToBeAssessed();
                      }
                    } else {
                      this.findNextStudentToBeAssessed();
                    }

                    _context2.n = 5;
                    break;

                  case 4:
                    this.presentAlert();

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "findNextStudentToBeAssessed",
          value: function findNextStudentToBeAssessed() {
            var _this5 = this;

            debugger;
            this.apiService.initializeNetworkEvents();
            this.studentsList.filter(function (s) {
              console.log(s.id, _this5.id, 's.id,this.id');

              if (s.id == _this5.id) {
                s.isAssessed = true;
              }
            });
            this.endTime = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
            console.log(this.endTime, 'endTime');
            var seperatestudent = this.studentsList.find(function (v) {
              return v.id == _this5.id && v.subject_id == _this5.subId;
            });
            console.log(seperatestudent, 'seperatestudent');
            seperatestudent.academic_id = seperatestudent['acad_id'];
            seperatestudent.teacher_id = this.username;
            seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
            seperatestudent.student_status = seperatestudent.questionset['status'];
            seperatestudent.status_of_assessed = 'Assessed';
            seperatestudent.start_time = this.startTime;
            seperatestudent.end_time = this.endTime;
            seperatestudent.assmnt_status = 'assessed';
            seperatestudent.observation_id = this.observation_id;

            if (seperatestudent['questionset']['Arumbu'] != undefined && seperatestudent['questionset']['Arumbu'].length > 0) {
              seperatestudent['g1_score'] = seperatestudent['questionset']['Arumbu'].filter(function (val) {
                return val.pass == true;
              }).length;
              seperatestudent['g1_qa_count'] = seperatestudent['questionset']['Arumbu'].length;
            }

            if (seperatestudent['questionset']['Mottu'] != undefined && seperatestudent['questionset']['Mottu'].length > 0) {
              seperatestudent['g2_score'] = seperatestudent['questionset']['Mottu'].filter(function (val) {
                return val.pass == true;
              }).length;
              seperatestudent['g2_qa_count'] = seperatestudent['questionset']['Mottu'].length;
            }

            if (seperatestudent['questionset']['Malar'] != undefined && seperatestudent['questionset']['Malar'].length > 0) {
              seperatestudent['g3_score'] = seperatestudent['questionset']['Malar'].filter(function (val) {
                return val.pass == true;
              }).length;
              seperatestudent['g3_qa_count'] = seperatestudent['questionset']['Malar'].length;
            }

            if (seperatestudent.class_studying_id == 1) {
              seperatestudent['questionset']['Mottu'] = '';
              seperatestudent['questionset']['Malar'] = '';
            } else if (seperatestudent.class_studying_id == 2) {
              seperatestudent['questionset']['Malar'] = '';

              if (seperatestudent['baseline_grade'] == 1 && seperatestudent['g1_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Mottu'] = '';
              }
            } else if (seperatestudent.class_studying_id == 3) {
              if (seperatestudent['baseline_grade'] == 1 && seperatestudent['g1_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Mottu'] = '';
                seperatestudent['questionset']['Malar'] = '';
              }

              if (seperatestudent['baseline_grade'] == 2 && seperatestudent['g2_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Malar'] = '';
              }
            }

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              //un command
              debugger;
              console.log(seperatestudent, 'seperatestudent');
              this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(function (data) {
                try {
                  if (data.status == 200 && data.dataStatus == true) {
                    _this5.commonAlert('Success', 'Assessment successfully Saved');

                    _this5.ionicstorage.insertData_Replace('summativeAsseData', {
                      studentlist: _this5.studentsList,
                      classdata: _this5["class"],
                      subject: _this5.Medium,
                      subjectkey: _this5.subjectkey,
                      term: _this5.term,
                      viewassessment: _this5.viewassessmenbtn,
                      week_of_year: _this5.weekofyear
                    }); // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                    // if (studentsToBeAssessed.length > 0) {
                    //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                    // } else {
                    //   this.alertService.success("All Students assessed!", false);
                    //   this.router.navigate(['/tabs/summative-student']);
                    // }


                    _this5.router.navigate(['/tabs/summative-class-selection'], {
                      queryParams: {
                        schId: _this5.schId,
                        assYear: _this5.assYear,
                        assType: _this5.assType,
                        udiseCode: _this5.udiseCode,
                        observation_id: _this5.observation_id,
                        level: _this5.level
                      }
                    });
                  } else {
                    // this.alertService.error(data.msg)
                    throw 'No data found in this student list';
                  }
                } catch (err) {
                  _this5.toast.presentToast(err, 'error');
                }
              });
            } else {
              // call functions on network offline, such as firebase.goOffline()
              // this.apiService.displayToast("Offline, Data stored in local!!", false);
              this.ionicstorage.insertData_Replace('summativeAsseData', {
                studentlist: this.studentsList,
                classdata: this["class"],
                subject: this.Medium,
                subjectkey: this.subjectkey,
                term: this.term,
                viewassessment: this.viewassessmenbtn,
                week_of_year: this.weekofyear
              });
              this.ionicstorage.getData('remaingusersummative').then(function (dataa) {
                var store;

                if (dataa == undefined || dataa == null) {
                  store = [];
                } else {
                  store = dataa.remainingdata;
                }

                store.push(seperatestudent);
                console.log(store, '309823wru832ru');

                _this5.ionicstorage.insertData_Replace('remaingusersummative', {
                  remainingdata: store
                });

                var studentsToBeAssessed = _this5.studentsList.filter(function (el) {
                  return el.isAssessed !== true && el.isSkipped == false;
                });

                if (studentsToBeAssessed.length > 0) {
                  // this.router.navigate(['/tabs/summative-class-selection', studentsToBeAssessed[0].id]);
                  _this5.router.navigate(['/tabs/summative-class-selection'], {
                    queryParams: {
                      schId: _this5.schId,
                      assYear: _this5.assYear,
                      assType: _this5.assType,
                      udiseCode: _this5.udiseCode,
                      observation_id: _this5.observation_id,
                      level: _this5.level
                    }
                  });
                } else {
                  _this5.commonAlert('All Students assessed!', 'Offline: Data stored in local.'); // this.apiService.displayToast("All Students assessed!", false)


                  _this5.router.navigate(['/tabs/summative-class-selection'], {
                    queryParams: {
                      schId: _this5.schId,
                      assYear: _this5.assYear,
                      assType: _this5.assType,
                      udiseCode: _this5.udiseCode,
                      observation_id: _this5.observation_id,
                      level: _this5.level
                    }
                  });
                }
              }, function (error) {
                return console.error(error);
              });
              this.offlinePopup();
            }
          }
        }, {
          key: "offlinePopup",
          value: function offlinePopup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Assessment Completed Successfully',
                      message: 'Offline: Data stored in local!!',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {}
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
          key: "errorLog",
          value: function errorLog(err, payload) {
            var record = {
              "observation_id": "",
              "school_id": this.schId,
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
          key: "findNextStudentForMottu",
          value: function findNextStudentForMottu() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this6 = this;

              var getmottulenght, allQuestioncheckedmottu, getmottupassedlogiclenght, getmalarlenght, questionsData;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.questions['Mottu'].length;

                  case 1:
                    getmottulenght = _context4.v;

                    if (!(getmottulenght > 0)) {
                      _context4.n = 5;
                      break;
                    }

                    _context4.n = 2;
                    return this.checkValidation(this.questions['Mottu'], getmottulenght);

                  case 2:
                    allQuestioncheckedmottu = _context4.v;

                    if (!(allQuestioncheckedmottu == true)) {
                      _context4.n = 4;
                      break;
                    }

                    _context4.n = 3;
                    return this.questions['Mottu'].filter(function (n) {
                      return n.pass == true;
                    }).length;

                  case 3:
                    getmottupassedlogiclenght = _context4.v;

                    if (getmottupassedlogiclenght >= this.minimum_correct) {
                      this.questions['status'] = 2;

                      if (this.questions['Malar'] != undefined) {
                        getmalarlenght = this.questions['Malar'].length;

                        if (getmalarlenght > 0) {
                          questionsData = this.studentsList.find(function (s) {
                            return s.id == _this6.id && s.subject_id == _this6.subId;
                          });
                          questionsData['questionset']['Malar'].filter(function (val) {
                            val.passvalue_count = 0;
                            val.pass = false;
                            val.alloptioncheck = false;
                            return val;
                          });
                          questionsData['questionset']['Malar'].filter(function (val) {
                            return val.questions.filter(function (s) {
                              s.passvalue_boolean = false;
                              s.optioncheck = false;
                              s.selected_option = "";
                              return s;
                            });
                          });
                          this.questions = questionsData['questionset'];
                          this.SHOWARUMU = false;
                          this.SHOWMOTTU = false;
                          this.SHOWMALAR = true;
                        } else {
                          this.findNextStudentToBeAssessed();
                        }
                      } else {
                        this.findNextStudentToBeAssessed();
                      }
                    } else {
                      this.findNextStudentToBeAssessed();
                    }

                    _context4.n = 5;
                    break;

                  case 4:
                    this.presentAlert();

                  case 5:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "findNextStudentForMalar",
          value: function findNextStudentForMalar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var getmalarlenght, allQuestioncheckedmalar, getmalarpassedlogiclenght;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.questions['Malar'].length;

                  case 1:
                    getmalarlenght = _context5.v;

                    if (!(getmalarlenght > 0)) {
                      _context5.n = 5;
                      break;
                    }

                    _context5.n = 2;
                    return this.checkValidation(this.questions['Malar'], getmalarlenght);

                  case 2:
                    allQuestioncheckedmalar = _context5.v;

                    if (!(allQuestioncheckedmalar == true)) {
                      _context5.n = 4;
                      break;
                    }

                    _context5.n = 3;
                    return this.questions['Malar'].filter(function (n) {
                      return n.pass == true;
                    }).length;

                  case 3:
                    getmalarpassedlogiclenght = _context5.v;
                    this.questions['status'] = 2;

                    if (getmalarpassedlogiclenght >= this.minimum_correct) {
                      this.questions['status'] = 3;
                      this.findNextStudentToBeAssessed();
                    } else {
                      this.findNextStudentToBeAssessed();
                    }

                    _context5.n = 5;
                    break;

                  case 4:
                    this.presentAlert();

                  case 5:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "checkValidation",
          value: function checkValidation(questionset, lengthof) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var getqustionsetchecked, checkstatus;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return questionset.filter(function (v) {
                      if (v.questions.length > 0) {
                        var singleoptioncheck = v.questions.filter(function (s) {
                          return s.optioncheck == true;
                        });

                        if (singleoptioncheck >= v.questions_to_display) {
                          v.alloptioncheck = true;
                          return v;
                        } else {
                          v.alloptioncheck = false;
                          return v;
                        }
                      } else {
                        v.alloptioncheck = true;
                        return v;
                      }
                    });

                  case 1:
                    getqustionsetchecked = _context6.v;
                    _context6.n = 2;
                    return getqustionsetchecked.filter(function (n) {
                      return n.alloptioncheck == true;
                    }).length;

                  case 2:
                    checkstatus = _context6.v;

                    if (!(checkstatus == lengthof)) {
                      _context6.n = 3;
                      break;
                    }

                    return _context6.a(2, true);

                  case 3:
                    return _context6.a(2, false);

                  case 4:
                    return _context6.a(2);
                }
              }, _callee6);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var alert, _yield$alert$onDidDis, role;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: '',
                      subHeader: '',
                      message: 'Please fill all answers',
                      buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: function handler(blah) {
                          alert.dismiss();
                        }
                      }]
                    });

                  case 1:
                    alert = _context7.v;
                    _context7.n = 2;
                    return alert.present();

                  case 2:
                    _context7.n = 3;
                    return alert.onDidDismiss();

                  case 3:
                    _yield$alert$onDidDis = _context7.v;
                    role = _yield$alert$onDidDis.role;

                  case 4:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "skipStudent",
          value: function skipStudent(reason) {
            var _this7 = this;

            debugger;
            console.log(this.studentsList, 'skip students');
            this.studentsList.filter(function (s) {
              if (s.id == _this7.id) {
                //&& s.subject_id == this.subId
                if (reason == 'Left_school_after_marking_attendance' || reason == 'Present_in_school_but_unwell') {
                  s.isSkipped = true;
                  s.skippedReason = reason;
                  s.assmnt_status = reason;
                } else {
                  s.isSkipped = true;
                  s.skippedReason = reason;
                  s.assmnt_status = reason;
                }
              }
            });
            var seperatestudent = this.studentsList.filter(function (v) {
              return v.id == _this7.id;
            }); //&& v.subject_id == this.subId

            seperatestudent.forEach(function (e) {
              e.academic_id = e.acad_id;
              e.teacher_id = _this7.username;
              e.assessment_type = _this7.apiService.getdataassessed_typeformativeid();
              e.status_of_assessed = reason;
              e.questionset = '';
              e.observation_id = _this7.observation_id;
            });
            this.ionicstorage.insertData_Replace('summativeAsseData', {
              studentlist: this.studentsList
            });
            console.log(seperatestudent, 'seperatestudent'); // seperatestudent.academic_id = "1";
            // seperatestudent.teacher_id = this.username;
            // seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
            // seperatestudent.status_of_assessed = reason;
            // this.alertService.success("Online!!", false);

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(function (data) {
                try {
                  if (data.status == 200 && data.dataStatus == true) {
                    _this7.commonAlert('Success', 'Student Skipped Successfully.');

                    _this7.ionicstorage.insertData_Replace('summativeAsseData', {
                      studentlist: _this7.studentsList,
                      classdata: _this7["class"],
                      subject: _this7.Medium,
                      subjectksy: _this7.subjectkey,
                      term: _this7.term,
                      viewassessment: _this7.viewassessmenbtn
                    }); // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed == false && el.isSkipped != true));
                    // if (studentsToBeAssessed.length > 0) {
                    //   this.apiService.markSkipped(studentsToBeAssessed[0].id, reason);
                    //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                    // } else {
                    //   this.alertService.success("All Students assessed!", false)
                    //   this.router.navigate(['/tabs/summative-student']);
                    // }
                    // this.alertService.success("All Students assessed!", false)


                    _this7.router.navigate(['/tabs/summative-class-selection'], {
                      queryParams: {
                        schId: _this7.schId,
                        assYear: _this7.assYear,
                        assType: _this7.assType,
                        udiseCode: _this7.udiseCode,
                        observation_id: _this7.observation_id,
                        level: _this7.level
                      }
                    }); //skipStuID : seperatestudent.id ,asstStatus : reason

                  } else {
                    // this.alertService.error(data.msg)
                    throw 'No data found in this student list';
                  }
                } catch (err) {
                  _this7.toast.presentToast(err, 'error');
                }
              });
            } else {
              // call functions on network offline, such as firebase.goOffline();
              this.ionicstorage.insertData_Replace('summativeAsseData', {
                studentlist: this.studentsList,
                classdata: this["class"],
                subject: this.Medium,
                subjectkey: this.subjectkey,
                term: this.term,
                viewassessment: this.viewassessmenbtn
              });
              this.commonAlert('Student Skipped Successfully', 'Offline: Data stored in local!!');
              debugger;
              this.ionicstorage.getData('remaingusersummative').then(function (dataa) {
                var store;

                if (dataa == undefined || dataa == null) {
                  store = [];
                } else {
                  store = dataa.remainingdata;
                }

                store.push(seperatestudent);
                console.log(store), 'sssssssssssssssssssssssss';

                var skipStu = _this7.studentsList.filter(function (e) {
                  return e.id == store[0].id;
                });

                console.log('skipstu...', skipStu);

                for (var i = 0; i < skipStu.length; i++) {
                  console.log(skipStu[i]);
                  skipStu[i].assmnt_status = reason;
                }

                console.log(skipStu, "afterrrrrrrrrrrrrrrr......");
                var skipPayload = store.flat();

                _this7.ionicstorage.insertData_Replace('remaingusersummative', {
                  remainingdata: skipPayload
                });

                console.log(skipPayload, 'skipPayload');

                var studentsToBeAssessed = _this7.studentsList.filter(function (el) {
                  return el.isAssessed == false && el.isSkipped != true;
                });

                if (studentsToBeAssessed.length > 0) {
                  _this7.apiService.markSkipped(studentsToBeAssessed[0].id, reason); // this.router.navigate(['/tabs/summative-class-selection', ]);


                  _this7.router.navigate(['/tabs/summative-class-selection', studentsToBeAssessed[0].id], {
                    queryParams: {
                      schId: _this7.schId,
                      assYear: _this7.assYear,
                      assType: _this7.assType,
                      udiseCode: _this7.udiseCode,
                      observation_id: _this7.observation_id,
                      level: _this7.level,
                      skipStuID: store[0].id,
                      asstStatus: reason
                    }
                  });
                } else {
                  _this7.commonAlert('All Students assessed!', 'Offline: Data stored in local.');

                  _this7.router.navigate(['/tabs/summative-class-selection'], {
                    queryParams: {
                      schId: _this7.schId,
                      assYear: _this7.assYear,
                      assType: _this7.assType,
                      udiseCode: _this7.udiseCode,
                      observation_id: _this7.observation_id,
                      level: _this7.level
                    }
                  });
                } //Shahul Code


                _this7.router.navigate(['/tabs/summative-class-selection'], {
                  queryParams: {
                    schId: _this7.schId,
                    assYear: _this7.assYear,
                    assType: _this7.assType,
                    udiseCode: _this7.udiseCode,
                    observation_id: _this7.observation_id,
                    level: _this7.level
                  }
                });
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "checkPassValue",
          value: function checkPassValue(answer, question, mainquestion) {
            question.optioncheck = true;
            question.selected_option = answer.value;
            var splitedanswer = question.correct_answer.split(' ');
            var answerdata = splitedanswer[0] + '_' + splitedanswer[1];

            if (question[answerdata] == answer.value) {
              question['passvalue_boolean'] = true;
              var getpassvalue = mainquestion['pass_logic'].split('/');
              var countofpassvalue = Number(getpassvalue[0]) / Number(getpassvalue[1]);
              var getpassvaluefromquestions = mainquestion['questions'].filter(function (s) {
                return s.passvalue_boolean == true;
              }).length;
              var countofquestionpassvalue = getpassvaluefromquestions / Number(mainquestion['questions_to_display']);

              if (countofquestionpassvalue >= countofpassvalue) {
                mainquestion['pass'] = true;
              } else {
                mainquestion['pass'] = false;
              }
            } else {
              question['passvalue_boolean'] = false;
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
          key: "viewImage",
          value: function viewImage(imageName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var modal;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    this.image = this.live_img_url.concat(imageName.toString());
                    console.log(this.image, 'imagagaga');
                    _context9.n = 1;
                    return this.modalCtrl.create({
                      component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__.ViewImagePage,
                      componentProps: {
                        image: this.image
                      },
                      cssClass: 'view-image-modal'
                    });

                  case 1:
                    modal = _context9.v;
                    _context9.n = 2;
                    return modal.present();

                  case 2:
                    return _context9.a(2);
                }
              }, _callee9, this);
            }));
          }
        }]);
      }();

      _SummativeQuestionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService
        }];
      };

      _SummativeQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-summative-questions',
        template: _raw_loader_summative_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summative_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummativeQuestionsPage);
      /***/
    },

    /***/
    18858:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.scss ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ion-title {\n  font-family: 'Ubuntu' !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n\n.skip-btn-box {\n  width: calc(100% - 10%);\n  margin: 10px auto;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nion-content{\nposition: relative;\n}\nion-content{\n  --background: url(\"/assets/images/ennum-ezhuthum/screen-back.png\") 0 0/100% 100% no-repeat\n}\n.center-align-flex{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card{\n  padding: 10px;\n}\n.font-weight-bold{\n  font-weight: bold;\n}\n\n\nion-header{\n  background: #27AE60;\n}\n\n.marginTop{\n  margin: 5px auto;\n} */\nion-title {\n  font-size: 15px;\n}\n.headeralign {\n  text-align: center;\n  font-size: large;\n}\nion-back-button {\n  color: #fff;\n}\n.questionnumber {\n  color: #2176b9;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5 !important;\n}\n::ng-deep.alertButton {\n  background: #e5e5e5 !important;\n}\n.back-icon {\n  color: white;\n  zoom: 1.5;\n  margin-left: 0px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUEwQ0E7RUFDRSxlQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLDhCQUFBO0FBRUY7QUFDQTtFQUNFLDhCQUFBO0FBRUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3VtbWF0aXZlLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuXHJcbi5za2lwLWJ0bi1ib3gge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9lbm51bS1lemh1dGh1bS9zY3JlZW4tYmFjay5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXRcclxufVxyXG4uY2VudGVyLWFsaWduLWZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9we1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn0gKi9cclxuXHJcbmlvbi10aXRsZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJhbGlnbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnF1ZXN0aW9ubnVtYmVye1xyXG4gIGNvbG9yOiAjMjE3NmI5O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5hbGVydEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206MS41O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    74638:
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.html ***!
      \*********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/summative-class-selection\"></ion-back-button> -->\r\n      <ion-icon name=\"arrow-back\" (click)=\"back()\">\r\n      </ion-icon>\r\n   </ion-buttons>\r\n    <ion-title>SUMMATIVE ASSESSMENT</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 5</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 5</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"content\">\r\n  <!-- <app-overlay-skip-modal [btnHit]=\"changeModelStatusHandler()\" [studentName]=\"student.name\" *ngIf=\"showSkipModel\">\r\n  </app-overlay-skip-modal> -->\r\n  <ion-card>\r\n    <!-- <ion-note>Note : Please enters the answers of the student</ion-note> -->\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-text color=\"primary\" class=\"ion-text-center\">\r\n            <h5>{{class_num}}<br>{{subject}}</h5>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-text color=\"dark ion-text-center\">\r\n            <h5>{{student.name}} ({{student.user_id}})</h5>\r\n          </ion-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button (click)=\"presentAlertConfirm()\" color=\"danger\">SKIP TO NEXT STUDENT &gt;&gt;</ion-button>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWARUMU\">\r\n      <!-- <div class=\"headeralign\">ARUMBU</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Arumbu; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div>\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <audio controls=\"false\">\r\n              <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n              Your browser does not support the audio element.\r\n            </audio>\r\n            <div>**************************</div>\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).</span><audio controls=\"false\">\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                  Your browser does not support the audio element.\r\n                </audio>\r\n              </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWMOTTU\">\r\n      <!-- <div class=\"headeralign\">MOTTU</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Mottu; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <span innerHTML=\"{{data.question}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span> <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                  alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <audio controls>\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mpeg\">\r\n                  Your browser does not support the audio element.\r\n                </audio> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWMALAR\">\r\n      <!-- <div class=\"headeralign\">MALAR</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Malar; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <span innerHTML=\"{{data.question}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span> <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                  alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\"  (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <audio controls>\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mpeg\">\r\n                  Your browser does not support the audio element.\r\n                </audio></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer collapse=\"fade\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <!-- <ion-col>\r\n          <ion-button (click)=\"check()\" class=\"btn-submit\" color=\"secondary\"  expand=\"block\">BACK</ion-button>\r\n        </ion-col> -->\r\n        <ion-col>\r\n          <ion-button *ngIf=\"!SHOWMALAR && !SHOWMOTTU\" (click)=\"findStudentToBeAssessed()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span>\r\n          </ion-button>\r\n          <ion-button *ngIf=\"SHOWMOTTU\" (click)=\"findNextStudentForMottu()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span></ion-button>\r\n          <ion-button *ngIf=\"SHOWMALAR\" (click)=\"findNextStudentForMalar()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span></ion-button>\r\n        </ion-col>\r\n      \r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts-es5.js.map