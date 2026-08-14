(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_assessment_module_ts"], {
    /***/
    82559:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssementPerformanceComponent": function AssementPerformanceComponent() {
          return (
            /* binding */
            _AssementPerformanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_assement_performance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./assement-performance.component.html */
      72712);
      /* harmony import */


      var _assement_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assement-performance.component.scss */
      18732);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/assessmentmodal/assessmentmodal.component */
      40036);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AssementPerformanceComponent = /*#__PURE__*/function () {
        function AssementPerformanceComponent(modalController, _storage, _apiService, _router, loading, ionicStore, _alertService, _translate, http) {
          _classCallCheck(this, AssementPerformanceComponent);

          this.modalController = modalController;
          this._storage = _storage;
          this._apiService = _apiService;
          this._router = _router;
          this.loading = loading;
          this.ionicStore = ionicStore;
          this._alertService = _alertService;
          this._translate = _translate;
          this.http = http;
          this.isMenuOpen = false;
          this.pageName = "page1";
          this.studentList = [];
          this.tempStudentList = [];
          this.studentCount = 0;
          this.score = 0;
          this.isQuestionsDisplayed = false;
          this.displayBtn = "NEXT";
          this.questionList = [];
          this.options = [];
          this.optionList = [];
          this.assessmentAnswers = [];
        }

        return _createClass(AssementPerformanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.progressValue = Math.round((9 - 2) / 12 * 100);
            this.appLanguage();
            this.loading.present();
            this.classInfo = localStorage.getItem("classInfo");
            this.classInfo = JSON.parse(this.classInfo); // this.ionicStore.getOffStorage().then((response) => {
            //   this.masterApiResponse = response;
            //   this.getRandomQuestions();
            //   if (this.storeDetail.pages.pageData[10] == undefined || this.storeDetail.pages.pageData[10] == null) {
            //     let apiData = {
            //       pageNo: "11",
            //       pageName: "stu_Assessment_questions",
            //       apiResponse: {
            //         records: {
            //           questionList: this.randomQuestionList,
            //           options: this.options,
            //           accessedStudents: this.studentList,
            //         },
            //       },
            //       correctedDetails: {
            //         question_data: [],
            //       },
            //     };
            //     this.storeDetail.pages.pageData[10] = apiData;
            //     this.ionicStore.setStoreData(this.storeDetail);
            //   }
            // });

            this.ionicStore.getStoreData().then(function (response) {
              _this.storeDetail = response;
              _this.storeDetail.pages.currentPage = "stu_Assessment_questions";

              _this.ionicStore.setStoreData(_this.storeDetail);

              if (_this.storeDetail.pages.pageData[9] != undefined) {
                var accessedStudents = _this.storeDetail.pages.pageData[9].correctedDetails.studentList.filter(function (data) {
                  return data.accessed == "yes";
                });

                _this.tempStudentList = accessedStudents;
              } else {
                var _accessedStudents = _this.storeDetail.pages.pageData[6].correctedDetails.filter(function (data) {
                  return data.accessed == "yes";
                });

                _this.tempStudentList = _accessedStudents;
              }

              var colorCodes = ["#FF5733", "#A99844", "#86D765", "#65D7B1", "#B865D7"];
              var contentCodes = ["#F9AD9C", "#D9C976", "#B0E899", "#99ECD0", "#CEAADB"];

              for (var i = 0; i < _this.tempStudentList.length; i++) {
                _this.tempStudentList[i].backgroundColor = colorCodes[i];
                _this.tempStudentList[i].contentColor = contentCodes[i];
              }

              _this.studentList = JSON.parse(JSON.stringify(_this.tempStudentList)); // this.unitInfo = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo;      
              // this.options = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.options;
              // this.questionList = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.questions;
              // this.learningOutcomeData = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo;
              // this.getRandomQuestions();

              _this.ionicStore.getOffStorage().then(function (response) {
                _this.masterApiResponse = response;

                _this.getRandomQuestions();

                if (_this.storeDetail.pages.pageData[10] == undefined || _this.storeDetail.pages.pageData[10] == null) {
                  var apiData = {
                    pageNo: "11",
                    pageName: "stu_Assessment_questions",
                    apiResponse: {
                      records: {
                        questionList: _this.randomQuestionList,
                        // options: this.options,
                        accessedStudents: _this.studentList
                      }
                    },
                    correctedDetails: {
                      question_data: []
                    }
                  };
                  _this.storeDetail.pages.pageData[10] = apiData;

                  _this.ionicStore.setStoreData(_this.storeDetail);
                }
              });

              _this.loading.dismiss(); // if (this.storeDetail.pages.pageData[10] == undefined || this.storeDetail.pages.pageData[10] == null) {
              //   let apiData = {
              //     pageNo: "11",
              //     pageName: "stu_Assessment_questions",
              //     apiResponse: {
              //       records: {
              //         questionList: this.questionList,
              //         options: this.options,
              //         accessedStudents: this.studentList,
              //       },
              //     },
              //     correctedDetails: {
              //       question_data: [],
              //     },
              //   };
              //   this.storeDetail.pages.pageData[10] = apiData;
              //   this.ionicStore.setStoreData(this.storeDetail);
              // }

            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this2 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this2.languageType = data;

              _this2._translate.use(_this2.languageType);

              _this2._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this3 = this;

            this._translate.get("studentAsessment").subscribe(function (res) {
              _this3.studentAsessment = res;
            });

            this._translate.get("learningOutcome").subscribe(function (res) {
              _this3.learningOutcome = res;
            });

            this._translate.get("grade").subscribe(function (res) {
              _this3.grade = res;
            });

            this._translate.get("subject").subscribe(function (res) {
              _this3.subject = res;
            });

            this._translate.get("referAnswer").subscribe(function (res) {
              _this3.referAnswer = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this3.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this3.back = res;
            });

            this._translate.get("submitAssessement").subscribe(function (res) {
              _this3.submitAssessement = res;
            });
          }
        }, {
          key: "toggleAccordion",
          value: function toggleAccordion(i) {
            this.isMenuOpen = !this.isMenuOpen;
            this.itemIndex = i;
          }
        }, {
          key: "openAssessmentModal",
          value: function openAssessmentModal(refer) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_6__.AssessmentmodalComponent,
                      componentProps: {
                        viewName: refer,
                        questionList: this.studentData.questions
                      },
                      cssClass: "my-custom-modal-assessment",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "moveNext",
          value: function moveNext(mainquestion) {
            var _this4 = this;

            debugger;

            if (!this.isQuestionsDisplayed) {
              var studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data.length;

              if (studentData != this.studentList.length) {
                var randomData = {
                  student_emisid: this.studentList[this.studentCount].id,
                  student_name: this.studentList[this.studentCount].name,
                  backgroundColor: this.studentList[this.studentCount].backgroundColor,
                  questions: this.randomQuestionList,
                  options: this.options
                };
                var tempQuestionDataSize = this.storeDetail.pages.pageData[10].correctedDetails.question_data.length;

                if (!tempQuestionDataSize) {
                  this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(randomData);
                  this.ionicStore.setStoreData(this.storeDetail);
                } else {
                  var studentIds = this.storeDetail.pages.pageData[10].correctedDetails.question_data.map(function (el) {
                    return el.student_emisid;
                  });

                  if (!studentIds.includes(randomData.student_emisid)) {
                    this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(randomData);
                    this.ionicStore.setStoreData(this.storeDetail);
                  }
                }
              }

              this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
              this.isQuestionsDisplayed = true;
              this.pageName = "page2";

              if (this.studentCount == this.studentList.length - 1) {
                this.displayBtn = "SUBMIT ASSESSMENT";
                this.studentCount = this.studentCount + 1;
              }
            } else if (this.displayBtn == "NEXT") {
              // localStorage.setItem('main_question',mainquestion['questions']);
              console.log('fnjnnnfnfnf', mainquestion);
              var index = mainquestion['questions'].length - 1; // const final_selected_option = mainquestion['questions'][index]['questions'].lastIndexOf("selected_option");

              this.final_selected_option = mainquestion['questions'][index]['questions'].find(function (obj) {
                return obj.selected_option != undefined;
              });
              console.log(this.final_selected_option, 'final_selected_option');

              if (this.final_selected_option != undefined && this.final_selected_option != "") {
                if (this.studentCount != this.studentList.length - 1) {
                  this.studentCount = this.studentCount + 1; // this.getRandomQuestions();          

                  var _studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data.length;
                  var _randomData = {
                    student_emisid: this.studentList[this.studentCount].id,
                    student_name: this.studentList[this.studentCount].name,
                    backgroundColor: this.studentList[this.studentCount].backgroundColor,
                    questions: this.randomQuestionList,
                    // options: this.options,
                    ans: ""
                  };

                  if (_studentData != this.studentList.length) {
                    if (this.storeDetail.pages.pageData[10].correctedDetails.question_data.some(function (person) {
                      return person.student_emisid == _randomData.student_emisid;
                    })) {} else {
                      this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(_randomData);
                      this.ionicStore.setStoreData(this.storeDetail);
                    }
                  }

                  this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];

                  if (this.studentCount == this.studentList.length - 1) {
                    this.displayBtn = "SUBMIT ASSESSMENT";
                  }
                }

                mainquestion['questions'].forEach(function (items) {
                  items.questions.forEach(function (item) {
                    if (item.correct_answer == item.option_1) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_2) {
                      if (item.selected_option == item.option_2) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_3) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_4) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }
                  });
                }); // this.score = this.score + 1;

                var assessStuList = {
                  student_emisid: this.studentData.student_emisid,
                  student_name: this.studentData.student_name,
                  questions: String(this.studentData.questions.length),
                  score: String(this.score) // grade: grade,
                  // ans: answer,

                };
                var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                stu_Assessment_Result.correctedDetails.assessed_StuList.push(assessStuList);
                stu_Assessment_Result.correctedDetails.assessed_StuList = stu_Assessment_Result.correctedDetails.assessed_StuList.filter(function (test, index, array) {
                  return index == array.findIndex(function (findTest) {
                    return findTest.student_emisid == test.student_emisid;
                  });
                });
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
              } else {
                var _stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));

                localStorage.setItem('stu_Assessment_Result', JSON.stringify(_stu_Assessment_Result));

                this._alertService.showAlert("Please Fill all Answers");
              }
            } else {
              var _index = mainquestion['questions'].length - 1; // const final_selected_option = mainquestion['questions'][index]['questions'].lastIndexOf("selected_option");  


              this.final_selected_option = mainquestion['questions'][_index]['questions'].find(function (obj) {
                return obj.selected_option != undefined;
              });

              if (this.final_selected_option != undefined && this.final_selected_option != "") {
                // this.storeDetail.pages.pageData[10][
                //   "pageDetails"
                // ] = this.assessmentAnswers;
                this.storeDetail.pages.currentProgress = this.progressValue;
                mainquestion['questions'].forEach(function (items) {
                  items.questions.forEach(function (item) {
                    if (item.correct_answer == item.option_1) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_2) {
                      if (item.selected_option == item.option_2) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_3) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }

                    if (item.correct_answer == item.option_4) {
                      if (item.selected_option == item.option_1) {
                        _this4.score++;
                      }
                    }
                  });
                });
                var _assessStuList = {
                  student_emisid: this.studentData.student_emisid,
                  student_name: this.studentData.student_name,
                  questions: String(this.studentData.questions.length),
                  score: String(this.score) // grade: grade,
                  // ans: answer,

                };

                var _stu_Assessment_Result2 = JSON.parse(localStorage.getItem('stu_Assessment_Result'));

                _stu_Assessment_Result2.correctedDetails.assessed_StuList.push(_assessStuList);

                _stu_Assessment_Result2.correctedDetails.assessed_StuList = _stu_Assessment_Result2.correctedDetails.assessed_StuList.filter(function (test, index, array) {
                  return index == array.findIndex(function (findTest) {
                    return findTest.student_emisid == test.student_emisid;
                  });
                });
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(_stu_Assessment_Result2));

                this._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                  }
                }); // if (this.storeDetail.pages.pageData[7]) {
                //   if(Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) <= 10 ){
                //     this._router.navigate(["/tnvntabs/page-route/notebook"]);
                //   } else{
                //     this._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                //   }          
                // } else {          
                //  if (this.storeDetail.pages.pageData[6] > 0) {
                //     this._router.navigate(["/tnvntabs/page-route/attendance/student-data"]);
                //   } else {
                //     this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                //   }
                // }

              } else {
                var _stu_Assessment_Result3 = JSON.parse(localStorage.getItem('stu_Assessment_Result'));

                localStorage.setItem('stu_Assessment_Result', JSON.stringify(_stu_Assessment_Result3));

                this._alertService.showAlert("Please Fill all Answers");
              }
            }
          }
        }, {
          key: "moveBack",
          value: function moveBack() {
            debugger;

            if (this.isQuestionsDisplayed) {
              if (this.displayBtn == "SUBMIT ASSESSMENT") {
                this.studentCount = this.studentCount - 1;

                if (this.studentCount == 0) {
                  this.isQuestionsDisplayed = false;
                  this.pageName = "page1";
                } else {
                  this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
                }

                this.displayBtn = "NEXT";
              } else if (this.studentCount != 0) {
                this.studentCount = this.studentCount - 1;
                this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
              } else {
                this.isQuestionsDisplayed = false;
                this.pageName = "page1";
              }

              var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
              localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            } else {
              var _stu_Assessment_Result4 = JSON.parse(localStorage.getItem('stu_Assessment_Result'));

              localStorage.setItem('stu_Assessment_Result', JSON.stringify(_stu_Assessment_Result4));

              this._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);
            }
          }
        }, {
          key: "getRandomInt",
          value: function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        }, {
          key: "getRandomQuestions",
          value: function getRandomQuestions() {
            var _this5 = this;

            this.randomQuestionList = []; // const noOfRandomQues = this.unitInfo.no_of_random_qus;

            var noOfRandomQues = 5;
            this.http.get("assets/tnvn/assess_qns.json").subscribe(function (data) {
              // this.questionList = data;
              _this5.randomQuestionList = data;
              console.log(_this5.randomQuestionList, 'ugdvuwadvhvqyfdy'); // for (let i = 0; i < noOfRandomQues; i++) {
              //   let idx;
              //   idx = this.getRandomInt(0, this.questionList.length);       
              //   const found = this.randomQuestionList.some(
              //     (el) => el == this.questionList[idx]
              //   );
              //   if (!found) {
              //     this.randomQuestionList.push(this.questionList[idx]);
              //   } else {
              //     idx = this.getRandomInt(0, this.questionList.length);
              //     this.randomQuestionList.push(this.questionList[idx]);
              //   }
              // }
            }, function (error) {});
          }
        }, {
          key: "getGrade",
          value: function getGrade(emisId) {
            var foundStudent = this.studentList.find(function (s) {
              return s.id == emisId;
            });

            if (foundStudent) {
              return foundStudent.class_section;
            } else {
              return null;
            }
          }
        }, {
          key: "selectedAnswer",
          value: function selectedAnswer(ans, grade) {
            var questionData = {
              student_emisid: this.studentData.student_emisid,
              student_name: this.studentData.student_name,
              questions: this.studentData.questions,
              grade: grade,
              ans: ans
            };
            this.assessmentAnswers[this.studentCount] = questionData;
          }
        }, {
          key: "rearrangeStudent",
          value: function rearrangeStudent(student, indexd) {
            var tempStudents = JSON.parse(JSON.stringify(this.studentList));
            var filterStudent = tempStudents.filter(function (data, index) {
              return index >= indexd;
            });
            var previousItems = tempStudents.filter(function (studentInfo) {
              return !filterStudent.includes(previousItems);
            });
            this.studentList = filterStudent.concat(previousItems); // this.moveNext();
          }
        }, {
          key: "checkPassValue",
          value: function checkPassValue(answer, question, mainquestion) {
            // console.log(answer, question, mainquestion,studentData,index)
            question.optioncheck = true;
            question.selected_option = answer.value;
            var splitedanswer = question.correct_answer.split(' ');
            var answerdata = splitedanswer[0] + '_' + splitedanswer[1];

            if (question[answerdata] == answer.value) {
              // this.score = this.score + 1;
              question['passvalue_boolean'] = true;
              var getpassvalue = mainquestion['pass_logic'].split('/');
              var countofpassvalue = Number(getpassvalue[0]) / Number(getpassvalue[1]);
              var getpassvaluefromquestions = mainquestion['questions'].filter(function (s) {
                return s.passvalue_boolean == true;
              }).length;
              var countofquestionpassvalue = getpassvaluefromquestions / Number(mainquestion['questions_to_display']); // console.log(countofquestionpassvalue >= countofpassvalue,countofquestionpassvalue,countofpassvalue)

              if (countofquestionpassvalue >= countofpassvalue) {
                console.log('pass');
                mainquestion['pass'] = true;
              } else {
                console.log('fail');
                mainquestion['pass'] = false;
              }
            } else {
              // if(this.score != 0) {
              //   this.score = this.score - 1;
              // }
              question['passvalue_boolean'] = false;

              var _getpassvalue = mainquestion['pass_logic'].split('/');

              var _countofpassvalue = Number(_getpassvalue[0]) / Number(_getpassvalue[1]);

              var _getpassvaluefromquestions = mainquestion['questions'].filter(function (s) {
                return s.passvalue_boolean == true;
              }).length;

              var _countofquestionpassvalue = _getpassvaluefromquestions / Number(mainquestion['questions_to_display']); // console.log(countofquestionpassvalue >= countofpassvalue,countofquestionpassvalue,countofpassvalue)


              if (_countofquestionpassvalue >= _countofpassvalue) {
                // console.log('pass')
                mainquestion['pass'] = true;
              } else {
                // console.log('fail')
                mainquestion['pass'] = false;
              }
            } //  console.log(this.questions)

          }
        }]);
      }();

      _AssementPerformanceComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
        }];
      };

      _AssementPerformanceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-assement-performance",
        template: _raw_loader_assement_performance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_assement_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AssementPerformanceComponent);
      /***/
    },

    /***/
    3425:
    /*!************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/assessment.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessmentPageModule": function AssessmentPageModule() {
          return (
            /* binding */
            _AssessmentPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _assessment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assessment.page */
      20683);
      /* harmony import */


      var _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-assessment/student-assessment.component */
      18182);
      /* harmony import */


      var _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assement-performance/assement-performance.component */
      82559);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _assessment_page__WEBPACK_IMPORTED_MODULE_0__.AssessmentPage
      }, {
        path: 's-assessment',
        component: _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__.StudentAssessmentComponent
      }, {
        path: 'student-performance',
        component: _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__.AssementPerformanceComponent
      }];

      var _AssessmentPageModule = /*#__PURE__*/_createClass(function AssessmentPageModule() {
        _classCallCheck(this, AssessmentPageModule);
      });

      _AssessmentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        declarations: [_assessment_page__WEBPACK_IMPORTED_MODULE_0__.AssessmentPage, _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__.StudentAssessmentComponent, _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__.AssementPerformanceComponent],
        exports: [],
        entryComponents: []
      })], _AssessmentPageModule);
      /***/
    },

    /***/
    20683:
    /*!**********************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/assessment.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessmentPage": function AssessmentPage() {
          return (
            /* binding */
            _AssessmentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_assessment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./assessment.page.html */
      10476);
      /* harmony import */


      var _assessment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assessment.page.scss */
      21295);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);

      var _AssessmentPage = /*#__PURE__*/function () {
        /*-- Language Variables Ends --*/
        function AssessmentPage(modalController, _storage, _router, apiService, _alertService, _translate, alertController, ionicStore, loading, toast) {
          var _this6 = this;

          _classCallCheck(this, AssessmentPage);

          this.modalController = modalController;
          this._storage = _storage;
          this._router = _router;
          this.apiService = apiService;
          this._alertService = _alertService;
          this._translate = _translate;
          this.alertController = alertController;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this.toast = toast;
          this.termList = [{
            id: 1,
            term: "Term 1"
          }, {
            id: 2,
            term: "Term 2"
          }, {
            id: 3,
            term: "Term 3"
          }];
          this.dummychapterList = [{
            chapter_id: 1,
            chapter_name: "Numbers"
          }];
          this.topicList = [{
            topic_id: 1,
            topic_name: "Place Value Chart"
          }];
          this.subtopicList = [{
            subtopic_id: 1,
            subtopic_name: "Recap of successesor and Predecessor"
          }];
          this.chapterList = [];
          this.showUnit = false;
          this.btnDisabled = true;
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.isMenuOpen = false;
          this.chapData = [];
          this.taxonObj = {};

          this.getTermList = function () {
            var records = {
              term: _this6.termList
            };
            _this6.termList = records.term;
            var apiData = {
              pageNo: "9",
              pageName: "stu_Assessment_term",
              apiResponse: {
                records: {
                  termList: _this6.termList
                }
              }
            };
            _this6.storeDetail.pages.pageData[8] = apiData;

            _this6.ionicStore.setStoreData(_this6.storeDetail);

            localStorage.setItem('storedDetails', JSON.stringify(_this6.storeDetail));
          };

          this.backPage = function () {
            if (Number(_this6.selectedClass) >= 1 && Number(_this6.selectedClass <= 2)) {
              debugger;
              var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
              localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            }

            var isRegularTeacher = true;

            if (isRegularTeacher) {
              var value = Number(localStorage.getItem("assessment_section_status"));

              if (value == 0) {
                // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                _this6._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    'assessment_section_status': localStorage.setItem('assessment_section_status', "0")
                  }
                });
              } else {
                _this6._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                  }
                });
              }
            } else {
              var _value = Number(localStorage.getItem("assessment_section_status"));

              if (_value == 0) {
                // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                _this6._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    'assessment_section_status': localStorage.setItem('assessment_section_status', "0")
                  }
                });
              } else {
                _this6._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                  }
                });
              }
            }
          };

          this.goToStudentAssessmentPage = function () {
            if (_this6.selectedChptr != undefined || _this6.selectedChptr != null) {
              if (Number(_this6.selectedClass) >= 3 && Number(_this6.selectedClass <= 12)) {
                _this6._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
              } else {
                debugger; // this._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);   

                var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));

                _this6._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);
              }
            } else {
              _this6.toast.presentToast('Please select chapter', 'error');
            } // if(Number(this.selectedClass) < 3 || 8 < (this.selectedClass)){      
            //   if(Number(this.selectedClass)>=3 && Number(this.selectedClass) <= 12){      
            //     this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
            //     this._router.navigate(["/tnvntabs/page-route/notebook"]) 
            //   }
            //   else{        
            //     this._router.navigate(["/tnvntabs/page-route/hodinspection"]) 
            //   }
            // }    
            // else{
            //   this._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
            // }

          };
        }

        return _createClass(AssessmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.loading.present();
            this.ionicStore.getStoreData().then(function (response) {
              _this7.loading.dismiss();

              _this7.storeDetail = response;

              if (_this7.storeDetail == null || _this7.storeDetail == undefined) {
                _this7.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
              }

              _this7.classDetail = _this7.storeDetail.pages.pageData[5].pageDetails;
              _this7.selectedClass = _this7.classDetail.selectedClass.class_id;

              if (Number(_this7.selectedClass) < 1 || Number(_this7.selectedClass) > 12) {
                _this7.showAlert();
              }

              _this7.selectedSection = _this7.classDetail.section;
              _this7.storeDetail.pages.currentPage = "stu_Assessment_term";

              _this7.ionicStore.setStoreData(_this7.storeDetail);

              localStorage.setItem('storedDetails', JSON.stringify(_this7.storeDetail));

              if (_this7.storeDetail.pages.pageData[8] == undefined || _this7.storeDetail.pages.pageData[8] == null) {
                _this7.getTermList();

                var pageDetails = {
                  subject: _this7.classDetail.subjectInfo.subject,
                  term: _this7.selectedTerm
                };
                _this7.storeDetail.pages.pageData[8]["pageDetails"] = pageDetails;
                _this7.storeDetail.pages.currentProgress = _this7.progressValue;

                _this7.ionicStore.setStoreData(_this7.storeDetail);

                localStorage.setItem('storedDetails', JSON.stringify(_this7.storeDetail));
              } else {
                if (_this7.storeDetail.pages.pageData[8].apiResponse.records.chapterList != undefined) {
                  _this7.chapterList = _this7.storeDetail.pages.pageData[8].apiResponse.records.chapterList;
                }

                if (_this7.storeDetail.pages.pageData[8].correctedDetails != undefined) {
                  _this7.selectedTerm = _this7.storeDetail.pages.pageData[8].correctedDetails.term_id;
                  _this7.selectedChapter = _this7.storeDetail.pages.pageData[8].correctedDetails.chapter_id;
                  _this7.unitInfo = _this7.storeDetail.pages.pageData[8].correctedDetails.unitInfo;
                  _this7.showUnit = _this7.storeDetail.pages.pageData[8].correctedDetails.showUnit;
                  _this7.btnDisabled = false;
                } else {}
              }
            });
            this.taxonObj = JSON.parse(localStorage.getItem('taxonObj'));
            this.progressValue = Math.round((7 - 2) / 12 * 100);
            this.appLanguage();
            this.classDetail = localStorage.getItem("classInfo");
            this.classDetail = this.classDetail.replace(/'/g, '"');
            this.classDetail = JSON.parse(this.classDetail);
            this.ionicStore.getOffStorage().then(function (response) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      this.masterApiResponse = response;
                      this.masterApiResponse.StuAssQuestion = response.StuAssQuestion;
                      this.masterApiResponse.OmrQuestionsData = response.OmrQuestionsData;
                      console.log(this.masterApiResponse.OmrQuestionsData, 'this.masterApiResponse.OmrQuestionsData');

                      if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                        this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                      }

                      this.chapterWiseData();

                    case 1:
                      return _context2.a(2);
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "chapterWiseData",
          value: function chapterWiseData() {
            var _this8 = this;

            debugger;
            console.log('aiuhbdibqbdiub', this.masterApiResponse.StuAssQuestion);

            if (this.masterApiResponse.StuAssQuestion != undefined || this.masterApiResponse.StuAssQuestion != null) {
              this.chapData = this.masterApiResponse.StuAssQuestion.filter(function (obj) {
                return obj.subject_id == _this8.taxonObj.subject && obj.class_studying_id == _this8.taxonObj.classId && obj.medium_id == _this8.taxonObj.mediumId;
              });
              console.log(this.chapData, 'chapDatachapData');
            } else {
              this.showImageAlert();
            }
          }
        }, {
          key: "chapterSelectHandler",
          value: function chapterSelectHandler(event) {
            var _this9 = this;

            debugger;

            if (event.target.value != undefined) {
              console.log(event.target.value.taxonomy_ids);
              var getRanArr = new Promise(function (resolve, reject) {
                var arrLength = event.target.value.taxonomy_ids;
                var randomArr = [];

                for (var i = 0; i < 2; i++) {
                  var random = Math.floor(Math.random() * arrLength.length);
                  randomArr.push(arrLength[random]);
                  arrLength.splice(random, 1);
                } // const random = Math.floor(Math.random() * arrLength.length);
                // const randomArr = []
                // randomArr.push(arrLength[random])
                // if(random == arrLength.length){
                //   randomArr.push(arrLength[random-1])
                // }
                // else{
                //   randomArr.push(arrLength[random+1])
                // }


                console.log(randomArr, 'randomArr');
                resolve(randomArr);
              });
              getRanArr.then(function (res) {
                var getRanArr2 = new Promise(function (resolve, reject) {
                  var filterTaxonomys = _this9.masterApiResponse.OmrQuestionsData.filter(function (obj) {
                    return obj.subject == _this9.taxonObj.subject && obj["class"] == _this9.taxonObj.classId && obj.medium == _this9.taxonObj.mediumId && (obj.taxonomy_id == res[0] || obj.taxonomy_id == res[1]);
                  });

                  console.log(filterTaxonomys, 'filterTaxonomys');
                  resolve(filterTaxonomys);
                });
                getRanArr2.then(function (res2) {
                  console.log(res2, 'filterTaxonomys');
                  _this9.masterApiResponse.OmrRandomQues = [];
                  var cunt = res2.length - 1;

                  if (res2.length >= 2) {
                    for (var i = 0; i < 2; i++) {
                      var index = Math.floor(Math.random() * res2.length);

                      _this9.masterApiResponse.OmrRandomQues.push(res2[index]);

                      res2.splice(index, 1);
                    } // const randomnum = Math.floor(Math.random() * res2.length);
                    // this.masterApiResponse.OmrRandomQues.push(res2[randomnum])
                    // if(randomnum < cunt){
                    //   this.masterApiResponse.OmrRandomQues.push(res2[randomnum+1])
                    // }
                    // else{
                    //   this.masterApiResponse.OmrRandomQues.push(res2[randomnum-1])
                    // }

                  }

                  _this9.ionicStore.setOffStorage(_this9.masterApiResponse);

                  console.log(_this9.masterApiResponse, 'this.masterApiResponse.OmrRandomQues');
                });
              }); // setTimeout(() => {
              //   let sdfsdf = this.masterApiResponse.OmrQuestionsData.filter(obj => obj.subject == this.taxonObj.subject && obj.class == this.taxonObj.classId && obj.medium == this.taxonObj.mediumId)
              //   console.log(sdfsdf, 'sdfsdf')
              //   setTimeout(() => {
              //     let filterTaxonomys = sdfsdf.filter(obj => obj.taxonomy_id == randomArr[0] || obj.taxonomy_id == randomArr[1])
              //     if(filterTaxonomys.length >= 2){
              //       console.log(filterTaxonomys, 'filterTaxonomys')
              //       this.masterApiResponse.OmrRandomQues = []
              //       const randomnum = Math.floor(Math.random() * filterTaxonomys.length);
              //       this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum])
              //       if(randomnum == filterTaxonomys.length){
              //         this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum-1])
              //       }
              //       else{
              //         this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum+1])
              //       }
              //       this.ionicStore.setOffStorage(this.masterApiResponse);
              //       console.log(this.masterApiResponse,'this.masterApiResponse.OmrRandomQues');
              //     }
              //     else{
              //       this.toast.presentToast('Please reselect this chapter', 'error');
              //     }
              //   }, 1000);
              // }, 500);
              // debugger
              // console.log('term1111111111',this.checkedChapter.chapter_name);
              // console.log('termddddd',this.chapterData.chapterDataList);
              // let gettax=[]
              //  gettax=this.chapterData.chapterDataList.filter((mf)=>mf.chapter_name==this.checkedChapter.chapter_name).map(role => role.taxonomy_id);
              // console.log(gettax,"ffffffffffffffff");
              // this.saveData = false;
            }
          }
        }, {
          key: "showImageAlert",
          value: function showImageAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this0 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: "This is an alert!",
                      cssClass: "my-custom-class",
                      subHeader: 'No Chapter Available',
                      buttons: [{
                        text: "Ok",
                        cssClass: "cancel_click",
                        handler: function handler() {
                          if (_this0.selectedClass >= 1 && _this0.selectedClass <= 12) {
                            // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
                            // this._router.navigate(["/tnvntabs/page-route/notebook"])
                            _this0._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          } else if (_this0.selectedClass < 3 || _this0.selectedClass <= 12) {
                            // this._router.navigate(["/tnvntabs/page-route/notebook"])
                            _this0._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          } else {
                            // this._router.navigate(["/tnvntabs/page-route/hodinspection"])
                            _this0._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          }
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
          key: "showAlert",
          value: function showAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this1 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      message: "No Questions available",
                      backdropDismiss: false,
                      buttons: [{
                        text: "ok",
                        handler: function handler() {
                          if (_this1.selectedClass >= 1 && _this1.selectedClass <= 12) {
                            // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
                            // this._router.navigate(["/tnvntabs/page-route/notebook"]) 
                            _this1._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          } else if (_this1.selectedClass < 3 || _this1.selectedClass <= 12) {
                            // this._router.navigate(["/tnvntabs/page-route/notebook"]) 
                            _this1._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          } else {
                            // this._router.navigate(["/tnvntabs/page-route/hodinspection"]) 
                            _this1._router.navigate(["/tnvntabs/page-route/index"], {
                              queryParams: {
                                'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                              }
                            });
                          }
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
          key: "appLanguage",
          value: function appLanguage() {
            var _this10 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this10.languageType = data;

              _this10._translate.use(_this10.languageType);

              _this10._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this11 = this;

            this._translate.get("studentAsessment").subscribe(function (res) {
              _this11.studentAsessment = res;
            });

            this._translate.get("assessment_Info").subscribe(function (res) {
              _this11.assessment_Info = res;
            });

            this._translate.get("proceedAssess").subscribe(function (res) {
              _this11.proceedAssess = res;
            });

            this._translate.get("standard").subscribe(function (res) {
              _this11.standard = res;
            });

            this._translate.get("subject").subscribe(function (res) {
              _this11.subject = res;
            });

            this._translate.get("selectTerm").subscribe(function (res) {
              _this11.selectTerm = res;
            });

            this._translate.get("SelectChapter").subscribe(function (res) {
              _this11.SelectChapter = res;
            });

            this._translate.get("SelectTopic").subscribe(function (res) {
              _this11.SelectTopic = res;
            });

            this._translate.get("SelectSubTopic").subscribe(function (res) {
              _this11.SelectSubTopic = res;
            });

            this._translate.get("SelectUnit").subscribe(function (res) {
              _this11.SelectUnit = res;
            });

            this._translate.get("testingStudents").subscribe(function (res) {
              _this11.testingStudents = res;
            });

            this._translate.get("noUnit").subscribe(function (res) {
              _this11.noUnit = res;
            });

            this._translate.get("Unit").subscribe(function (res) {
              _this11.Unit = res;
            });

            this._translate.get("learningOutcome").subscribe(function (res) {
              _this11.learningOutcome = res;
            });

            this._translate.get("noQuestions").subscribe(function (res) {
              _this11.noQuestions = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this11.next = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this11.save = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this11.back = res;
            });
          }
        }, {
          key: "ScanOmr",
          value: function ScanOmr() {
            this._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
          }
        }, {
          key: "toggleAccordion",
          value: function toggleAccordion(i) {
            this.isMenuOpen = !this.isMenuOpen;
            this.itemIndex = i;
          }
        }, {
          key: "broadcastName",
          value: function broadcastName(name) {
            this.change.emit(name);
          }
        }, {
          key: "mySelectHandlerChapter",
          value: function mySelectHandlerChapter(selectedValue) {
            this.selectedChapter = selectedValue;
            var chapterDetail = {
              chapter_id: selectedValue
            };
            var allChaptersList = this.masterApiResponse.learning_outcome;
            var allAssessmentQuestions = this.masterApiResponse.questions_ans;
            var selectedAssessementQuestions = [];
            var optionList = [];
            var termChapterList = allChaptersList.filter(function (data) {
              return data.chapter_id == chapterDetail.chapter_id;
            });
            var tempLearningOutcome = termChapterList[Math.floor(Math.random() * termChapterList.length)];
            selectedAssessementQuestions = allAssessmentQuestions.filter(function (data) {
              return data.lo_id == tempLearningOutcome.lo_id;
            });

            if (!selectedAssessementQuestions.length) {
              this._alertService.showAlert(this.noQuestions);
            }

            Object.entries(tempLearningOutcome).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              var keyName = key.split("_", 1);

              if (keyName.toString() == "option") {
                var keyid = key.split("_")[1];
                var optionData = {
                  id: keyid,
                  option: value
                };
                optionList.push(optionData);
              }
            });
            Object.entries(tempLearningOutcome).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              var keyName = key.split("_", 1);

              if (keyName.toString() == "grade") {
                var keyid = key.split("_")[2];
                optionList.forEach(function (data) {
                  var optionData = data;

                  if (optionData.id == keyid) {
                    data["grade"] = value;
                  }
                });
              }
            });
            var records = {
              chapter_no: tempLearningOutcome.chapter_no,
              learning_outcome: tempLearningOutcome.lo_name,
              learning_outcome_id: tempLearningOutcome.lo_id,
              options: optionList,
              no_of_random_qus: tempLearningOutcome.no_of_random_qus,
              questions: selectedAssessementQuestions
            };
            this.unitInfo = records;
            localStorage.setItem("chapterId", selectedValue);
            this.showUnit = true;

            if (selectedAssessementQuestions.length) {
              this.btnDisabled = false;
            } else {
              this.btnDisabled = false;
            }

            var correctedDetails = {
              term_id: this.selectedTerm,
              chapter_id: selectedValue,
              unitInfo: this.unitInfo,
              showUnit: true
            };
            this.storeDetail.pages.pageData[8]["correctedDetails"] = correctedDetails;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(selectedValue) {
            this.selectedTerm = selectedValue.target.value;
            var mediumIds = this.classDetail.mediumInfo.map(function (el) {
              return el.medium_id;
            });
            var termInfo = {
              class_id: this.classDetail.selectedClass.class_id,
              term_id: selectedValue.target.value,
              medium_id: mediumIds,
              subject_id: this.classDetail.subjectInfo.subject_id
            };
            var allChapterList = this.masterApiResponse.chapters;
            var tempChapterList = [];

            if (termInfo.subject_id == "7") {
              termInfo.subject_id = "1";
            }

            if (termInfo.subject_id == "2") {
              termInfo.subject_id = "8";
            }

            allChapterList.forEach(function (data) {
              if (Number(data["class"]) == Number(termInfo.class_id) && Number(data.subject_id) == Number(termInfo.subject_id) && Number(data.term) == Number(termInfo.term_id) && termInfo.medium_id.includes(data.medium_id)) {
                tempChapterList.push(data);
              }
            });
            var records = {
              chapters: tempChapterList
            };
            this.chapterList = records.chapters;
            this.storeDetail.pages.pageData[8].apiResponse.records["chapterList"] = this.chapterList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
          }
        }]);
      }();

      _AssessmentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
        }];
      };

      _AssessmentPage.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
        }]
      };
      _AssessmentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assessment",
        template: _raw_loader_assessment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_assessment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AssessmentPage);
      /***/
    },

    /***/
    18182:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentAssessmentComponent": function StudentAssessmentComponent() {
          return (
            /* binding */
            _StudentAssessmentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-assessment.component.html */
      17303);
      /* harmony import */


      var _student_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-assessment.component.scss */
      39524);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/assessmentmodal/assessmentmodal.component */
      40036);

      var _StudentAssessmentComponent = /*#__PURE__*/function () {
        function StudentAssessmentComponent(modalController, _apiService, _router, _postService, _alertService, loading, ionicStore, _translate) {
          var _this12 = this;

          _classCallCheck(this, StudentAssessmentComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._router = _router;
          this._postService = _postService;
          this._alertService = _alertService;
          this.loading = loading;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.attendanceList = [];
          this.randomStudentList = [];
          this.reasonList = [];
          this.mediumInfoList = [];
          this.studentReasons = [];

          this.getStudentAttendanceList = function (classMedium, schoolId) {
            classMedium["school_id"] = schoolId;
            var tempStudents = [];

            if (_this12.storeDetail.pages.pageData[5].pageDetails.section) {
              tempStudents = _this12.storeDetail.pages.pageData[6].correctedDetails.filter(function (data) {
                return data.status == 'active';
              });
            } else {
              tempStudents = _this12.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.filter(function (data) {
                return data.class_studying_id == classMedium.class_id;
              });
              tempStudents = tempStudents.filter(function (data) {
                return data.status == 'active';
              });
            }

            var records = {
              all: tempStudents
            };
            _this12.attendanceList = records.all;
            var tempAttendanceList = JSON.parse(JSON.stringify(records.all));
            var i;

            for (i = 0; i < 5; i++) {
              if (_this12.attendanceList.length) {
                var idx = void 0;
                idx = Math.floor(Math.random() * _this12.attendanceList.length);

                _this12.randomStudentList.push(_this12.attendanceList[idx]);

                _this12.randomStudentList[i]["accessed"] = "none";

                _this12.attendanceList.splice(idx, 1);
              }
            }

            _this12.loading.dismiss();

            var apiData = {
              pageNo: "10",
              pageName: "stu_Assessment_accessed",
              apiResponse: {
                records: {
                  attendanceList: tempAttendanceList
                }
              },
              correctedDetails: {
                studentList: _this12.randomStudentList
              }
            };
            _this12.storeDetail.pages.pageData[9] = apiData;

            _this12.ionicStore.setStoreData(_this12.storeDetail);

            _this12.getAssesmentReasons();
          };
        }

        return _createClass(StudentAssessmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.progressValue = Math.round((8 - 2) / 12 * 100);
            this.appLanguage();
            this.classMedium = localStorage.getItem("classInfo");
            this.classMedium = JSON.parse(this.classMedium);
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolInfo = JSON.parse(this.schoolInfo);
            this.ionicStore.getOffStorage().then(function (response) {
              _this13.masterApiResponse = response;

              _this13.ionicStore.getStoreData().then(function (response) {
                _this13.storeDetail = response;
                _this13.storeDetail.pages.currentPage = "stu_Assessment_accessed";

                _this13.ionicStore.setStoreData(_this13.storeDetail);

                _this13.mediumInfoList = _this13.storeDetail.pages.pageData[5].apiResponse.records.medium_info;

                if (_this13.storeDetail.pages.pageData[9] == undefined || _this13.storeDetail.pages.pageData[9] == null) {
                  _this13.getStudentAttendanceList(_this13.classMedium, _this13.schoolInfo.schoolId);
                } else {
                  var apiData = _this13.storeDetail.pages.pageData[9].apiResponse.records;
                  var correctedInfo = _this13.storeDetail.pages.pageData[9].correctedDetails;
                  _this13.reasonList = apiData.stu_reasonList;
                  _this13.randomStudentList = correctedInfo.studentList;
                  var get_randomStudentList = JSON.parse(localStorage.getItem('randomStudentList'));

                  if (get_randomStudentList.length == 0) {
                    _this13.randomStudentList = correctedInfo.studentList;
                  }
                }

                var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));

                if (stu_Assessment_Result == null || stu_Assessment_Result == undefined) {
                  var _apiData = {
                    pageNo: "21",
                    pageName: "stu_Assessment_Result",
                    correctedDetails: {
                      assessed_StuList: [],
                      Not_assessed_StuList: []
                    }
                  };
                  localStorage.setItem('stu_Assessment_Result', JSON.stringify(_apiData));
                }
              });
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this14 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this14.languageType = data;

              _this14._translate.use(_this14.languageType);

              _this14._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this15 = this;

            this._translate.get("studentAsessment").subscribe(function (res) {
              _this15.studentAsessment = res;
            });

            this._translate.get("access_Info").subscribe(function (res) {
              _this15.access_Info = res;
            });

            this._translate.get("canAssessed").subscribe(function (res) {
              _this15.canAssessed = res;
            });

            this._translate.get("ReasonAssessing").subscribe(function (res) {
              _this15.ReasonAssessing = res;
            });

            this._translate.get("yes").subscribe(function (res) {
              _this15.yes = res;
            });

            this._translate.get("no").subscribe(function (res) {
              _this15.no = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this15.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this15.back = res;
            });
          }
        }, {
          key: "openAssessmentModal",
          value: function openAssessmentModal(viewInfo, status, studentDetail, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this16 = this;

              var modal;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.modalController.create({
                      component: src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_7__.AssessmentmodalComponent,
                      componentProps: {
                        viewName: viewInfo,
                        studentDetail: studentDetail,
                        reasonList: this.reasonList,
                        mediumList: this.mediumInfoList
                      },
                      backdropDismiss: false,
                      cssClass: viewInfo == "view1" ? "my-custom-modal-s_assessment" : "my-custom-modal-assessment"
                    });

                  case 1:
                    modal = _context5.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data != "Cancel" && viewInfo == "view1") {
                        var found = _this16.studentReasons.filter(function (data) {
                          return data.student_emisid == response.data.student_emisid && data.reason == response.data.reason;
                        });

                        if (!_this16.studentReasons.length) {
                          _this16.studentReasons.push(response.data);
                        } else {
                          var studentIds = _this16.studentReasons.map(function (el) {
                            return el.student_emisid;
                          });

                          if (!studentIds.includes(response.data.student_emisid)) {
                            _this16.studentReasons.push(response.data);
                          } else {
                            var _found = _this16.studentReasons.find(function (data) {
                              return data.student_emisid == response.data.student_emisid;
                            });

                            if (_found.reason != response.data.reason) {
                              var findIndex = _this16.studentReasons.indexOf(_found);

                              _this16.studentReasons.splice(findIndex, 1);

                              _this16.studentReasons.push(response.data);
                            }
                          }
                        }

                        var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                        stu_Assessment_Result.correctedDetails.Not_assessed_StuList = _this16.studentReasons;
                        stu_Assessment_Result.correctedDetails.Not_assessed_StuList = stu_Assessment_Result.correctedDetails.Not_assessed_StuList.filter(function (test, index, array) {
                          return index == array.findIndex(function (findTest) {
                            return findTest.student_emisid == test.student_emisid;
                          });
                        });
                        localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));

                        _this16.addnewRandom(status, index, studentDetail);
                      } else if (response.data != "Cancel" && viewInfo == "view2") {
                        _this16.addnewRandom(status, index, studentDetail);
                      }
                    });

                    if (!(viewInfo == "view1")) {
                      _context5.n = 3;
                      break;
                    }

                    _context5.n = 2;
                    return modal.present();

                  case 2:
                    return _context5.a(2, _context5.v);

                  case 3:
                    this.addnewRandom(status, index, studentDetail);

                  case 4:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getAssesmentReasons",
          value: function getAssesmentReasons() {
            var stu_reasons = this.masterApiResponse.student_reasons;
            var records = {
              student_reasons: stu_reasons
            };
            this.reasonList = records.student_reasons;
            this.storeDetail.pages.pageData[9].apiResponse.records["stu_reasonList"] = this.reasonList;
            this.ionicStore.setStoreData(this.storeDetail);
          }
        }, {
          key: "addnewRandom",
          value: function addnewRandom(status, index, studentDetail) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var statusType, item;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    statusType = status;

                    if (statusType == "no") {
                      this.randomStudentList[index].accessed = "no";

                      if (this.attendanceList.length) {
                        item = this.attendanceList[Math.floor(Math.random() * this.attendanceList.length)];
                        this.randomStudentList.push(item);
                        this.attendanceList.splice(this.attendanceList.indexOf(item), 1);
                        studentDetail.addedStudent = item;
                      }
                    } else {
                      this.randomStudentList[index].accessed = "yes";

                      if (this.randomStudentList.length > 5 && studentDetail.addedStudent) {
                        this.randomStudentList.splice(this.randomStudentList.indexOf(studentDetail.addedStudent), 1);
                      }
                    }

                  case 1:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
            localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));

            this._router.navigate(["/tnvntabs/page-route/assessment"]);
          }
        }, {
          key: "goToStudentPerformance",
          value: function goToStudentPerformance() {
            debugger;
            var stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
            localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            var pageDetails = {
              studentReasonList: this.studentReasons
            };
            console.log(pageDetails, 'hbdjbddbdbdb');

            if (this.storeDetail.pages.pageData[9] != undefined) {
              this.storeDetail.pages.pageData[9]["pageDetails"] = pageDetails;
              this.storeDetail.pages.pageData[9].correctedDetails.studentList = this.randomStudentList;
            }

            this.storeDetail.pages.currentProgress = this.progressValue;
            this.ionicStore.setStoreData(this.storeDetail);

            if (this.storeDetail.pages.pageData[10] != undefined) {
              var questionAccessedStudents = this.storeDetail.pages.pageData[10].apiResponse.records.accessedStudents.map(function (el) {
                return el.id;
              });
              var currentAccessedStudents = this.storeDetail.pages.pageData[9].correctedDetails.studentList.map(function (el) {
                return el.id;
              });

              if (JSON.stringify(questionAccessedStudents) != JSON.stringify(currentAccessedStudents)) {
                this.storeDetail.pages.pageData.splice(8);
                this.ionicStore.setStoreData(this.storeDetail);
              }
            }

            var accessedStudents = this.randomStudentList.filter(function (data) {
              return data.accessed == "none" || !data.accessed;
            });
            console.log(accessedStudents, 'accessedStudents');

            if (accessedStudents.length > 0) {
              this._alertService.showAlert("Please Select Students");
            } else {
              this._router.navigate(["/tnvntabs/page-route/assessment/student-performance"]);
            }
          }
        }]);
      }();

      _StudentAssessmentComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
        }];
      };

      _StudentAssessmentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-student-assessment",
        template: _raw_loader_student_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentAssessmentComponent);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this17 = this;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    this.isLoading = true;
                    _context7.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this17.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context7.a(2, _context7.v);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this18 = this;

              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    this.isLoading = true;
                    _context8.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this18.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context8.a(2, _context8.v);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    this.isLoading = false;
                    _context9.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context9.a(2, _context9.v);
                }
              }, _callee9, this);
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
    18732:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.scss ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\n.header-accordion {\n  margin: 0;\n  background: #F2C94C;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px;\n  /* identical to box height */\n  color: #FFFFFF;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\n.questionnumber {\n  color: #2176b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VtZW50LXBlcmZvcm1hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVDO0VBQ0csYUFBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0osa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUE7O0FBQUE7RUFDSSx5Q0FBQTtBQUdKOztBQURBO0VBQ0kscUNBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJhc3NlbWVudC1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuIH1cclxuXHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuLmhlYWRlci1hY2NvcmRpb257XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJDOTRDO1xyXG5mb250LWZhbWlseTogQXJpYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMThweDtcclxubGluZS1oZWlnaHQ6IDIzcHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ucXVlc3Rpb25udW1iZXJ7XHJcbiAgICBjb2xvcjogIzIxNzZiOTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    21295:
    /*!************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/assessment.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.icon-check {\n  padding: 0px 100px 0px 100px;\n}\n.icon-success {\n  color: green;\n  font-size: 32px;\n}\n.icon-danger {\n  color: red;\n  font-size: 32px;\n}\n.radio-toggle {\n  display: flex;\n  justify-content: space-between;\n}\nion-item {\n  --background:transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2Vzc21lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDOztvQkFBQTtBQVVBO0VBQ0QsNEJBQUE7QUFOQTtBQVFDO0VBQ0csWUFBQTtFQUNBLGVBQUE7QUFMSjtBQU9DO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFKSjtBQVFDO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBTEg7QUFRQTtFQUNHLG1DQUFBO0FBTEgiLCJmaWxlIjoiYXNzZXNzbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbi8vICAuc2VsZWN0X2JveHtcclxuLy8gICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyB9XHJcbi8vIHNlbGVjdCBvcHRpb257XHJcbi8vICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gfVxyXG5cclxuIC5pY29uLWNoZWNre1xyXG5wYWRkaW5nOjBweCAxMDBweCAwcHggMTAwcHg7ICAgIFxyXG4gfVxyXG4gLmljb24tc3VjY2Vzc3tcclxuICAgIGNvbG9yOmdyZWVuIDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuIH1cclxuIC5pY29uLWRhbmdlcntcclxuICAgIGNvbG9yOnJlZCA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiB9XHJcblxyXG5cclxuIC5yYWRpby10b2dnbGV7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4gXHJcbmlvbi1pdGVte1xyXG4gICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    39524:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sc-ion-label-md-h {\n  padding-left: 1rem;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5Q0FBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7QUFHRiIsImZpbGUiOiJzdHVkZW50LWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZWQgIWltcG9ydGFudFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    72712:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title\r\n            class=\"ion-text-center fs-15\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n            ><b>{{ this.studentAsessment }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-text color=\"dark\">\r\n    <div class=\"\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"mb-0 color-lgrey\">\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.grade\r\n              }}</span>\r\n              : <b>{{ classInfo?.class_id }}</b>\r\n            </p>\r\n          </ion-col>\r\n          <ion-col>\r\n            <p class=\"mb-0 color-lgrey\">\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.subject\r\n              }}</span>\r\n              : <b>{{ classInfo?.subjectInfo.subject }}</b>\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div>\r\n      <p class=\"fs-12 pl-1 mb-0 color-lgrey\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.learningOutcome\r\n        }}</span>\r\n        : <b>{{ learningOutcomeData?.learning_outcome }}</b>\r\n      </p>\r\n    </div>\r\n  </ion-text>\r\n\r\n  <div *ngIf=\"pageName == 'page1'\">\r\n    <div *ngFor=\"let item of tempStudentList; let i = index\" class=\"mb-1\">\r\n      <h5\r\n        class=\"text-center header-accordion\"\r\n        (click)=\"rearrangeStudent(item, i)\"\r\n        [style.background]=\"item.backgroundColor\"\r\n      >\r\n        {{ item.name }}        \r\n      </h5>\r\n      <div [ngClass]=\"this.itemIndex == i ? 'active' : 'inactive'\">\r\n        <p class=\"text-italic px-3\">\r\n          Was the student able to respond to your question?\r\n        </p>\r\n        <div class=\"d-flex justify-content-around icon-check\">\r\n          <ion-icon name=\"checkmark\" class=\"icon-success\"></ion-icon>\r\n          <ion-icon name=\"close\" class=\"icon-danger\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"pageName == 'page2'\">\r\n    <h5 class=\"text-center header-accordion\" [style.background]=\"studentData?.backgroundColor\">\r\n      <b>{{ studentData?.student_name }}</b>\r\n    </h5>\r\n    <!-- <div>\r\n      <section class=\"p-4 list-ques\" [style.background]=\"studentData?.contentColor\">\r\n        <p *ngFor=\"let questionData of studentData.questions; let i = index\">\r\n          Q{{ i + 1 }} :{{ questionData.question }}\r\n        </p>\r\n        <ion-list lines=\"none\" class=\"bg-transparent\">\r\n          <ion-radio-group [(ngModel)]=\"studentData.ans\">\r\n            <ng-container\r\n              *ngFor=\"let optionData of studentData.options; let i = index\"\r\n            >\r\n              <ion-item class=\"bg-transparent\" *ngIf=\"optionData.option\">\r\n                <ion-label class=\"text-wrap\">\r\n                  {{ optionData.option }}</ion-label\r\n                >\r\n                <ion-radio\r\n                  slot=\"start\"\r\n                  color=\"favorite\"\r\n                  value=\"{{ optionData.option }}\"\r\n                  (click)=\"\r\n                    selectedAnswer(optionData.option, optionData.grade)\r\n                  \"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ng-container>\r\n          </ion-radio-group>\r\n        </ion-list>\r\n        <p\r\n          class=\"text-center text-primary\"\r\n          (click)=\"openAssessmentModal('refer')\"\r\n          [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n        >\r\n          {{ this.referAnswer }}\r\n        </p>\r\n      </section>\r\n    </div> -->\r\n\r\n    <!-- <div>\r\n      <ion-card *ngFor=\"let item of studentData.questions; let i = index\">\r\n            <div *ngIf=\"item.question_type == 'direct'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span><span\r\n                      innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div *ngFor=\"let data of item.questions| baselineQuestionFilter:item.questions_to_display; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                    <ion-item class=\"marginTop\"><img (click)=\"openViewer(live_img_url,data.question)\"\r\n                        src=\"{{live_img_url}}{{data.question}}\" alt=\"No Image Available\"\r\n                        style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span><span\r\n                      innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_1)\" src=\"{{live_img_url}}{{data.option_1}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_2)\"\r\n                            src=\"{{live_img_url}}{{data.option_2}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_3)\" src=\"{{live_img_url}}{{data.option_3}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_4)\"\r\n                            src=\"{{live_img_url}}{{data.option_4}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                    <ion-item class=\"marginTop\"><img (click)=\"openViewer(live_img_url,data.question)\"\r\n                        src=\"{{live_img_url}}{{data.question}}\" alt=\"No Image Available\"\r\n                        style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"> <img (click)=\"openViewer(live_img_url,data.option_1)\"\r\n                            src=\"{{live_img_url}}{{data.option_1}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_2)\"\r\n                            src=\"{{live_img_url}}{{data.option_2}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <img (click)=\"openViewer(live_img_url,data.option_3)\" src=\"{{live_img_url}}{{data.option_3}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_4)\" src=\"{{live_img_url}}{{data.option_4}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n\r\n\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n                <audio controls=\"false\">\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                  Your browser does not support the audio element.\r\n                </audio>\r\n\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).</span><audio controls=\"false\">\r\n                      <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                      Your browser does not support the audio element.\r\n                    </audio>\r\n                  </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n      </ion-card>\r\n    </div> -->\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"moveBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        [ngClass]=\"displayBtn != 'NEXT' ? 'submit' : ''\"\r\n        (click)=\"moveNext(studentData)\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{\r\n            displayBtn == \"NEXT\" ? this.next : this.submitAssessement\r\n          }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    10476:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/assessment.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAsessment}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <div class=\"content-wrapper\">    \r\n    <h5 class=\"color-dgrey\">\r\n      <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n        >{{this.proceedAssess}}</span\r\n      >:\r\n      <b\r\n        ><span\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.standard}}</span\r\n        >\r\n        {{selectedClass}} {{selectedSection}}</b\r\n      >\r\n    </h5>\r\n    <h5 class=\"color-dgrey\">\r\n      <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n        >{{subject}}</span\r\n      >: <b>{{classDetail?.subjectInfo.subject}}</b>\r\n    </h5>\r\n    <div >\r\n      <h5 class=\"color-dgrey\" style=\"margin-top: 2rem;\">\r\n        <span [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">Select Chapter:</span>\r\n      </h5>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Select Completed Chapter\" style=\"min-width: 100%;\" [(ngModel)]=\"selectedChptr\" (ionChange)=\"chapterSelectHandler($event)\">\r\n          <ion-select-option [value]=\"item\" *ngFor=\"let item of chapData\">{{item.chapter_name}}</ion-select-option>\r\n          <ion-label *ngIf=\"chapData == '' || chapData.length == 0\">No Data Found</ion-label>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>      \r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        \r\n        (click)=\"goToStudentAssessmentPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.save}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    17303:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAsessment}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-row\r\n    *ngFor=\"let randomStudent of randomStudentList; let i = index\"\r\n    class=\"mt-2\"\r\n    [ngClass]=\"\r\n      randomStudent.accessed == 'yes'\r\n        ? 'color-lgreen'\r\n        : randomStudent.accessed == 'no'\r\n        ? 'color-lpink'\r\n        : 'bg-grey '\r\n    \"\r\n  >\r\n    <ion-col [size]=\"8\">\r\n      <ion-label>\r\n        <b [ngClass]=\"{ 'fs-12': this.languageType == 'ta' }\">\r\n          {{ randomStudent.name }}</b\r\n        >\r\n        :<br />\r\n        <p\r\n          style=\"padding-left: 1rem;\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-10': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          {{ this.canAssessed }}?\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"my-auto\">\r\n      <ion-label\r\n        (click)=\"openAssessmentModal('view2', 'yes', randomStudent, i)\"\r\n      >\r\n        <p\r\n          class=\"text-white m-0 text-center bg-green br-radius-45\"\r\n          [ngClass]=\"{\r\n            opacity_one: this.randomStudentList[i].accessed == 'yes',\r\n            opacity_not_one: this.randomStudentList[i].accessed != 'yes',\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-11': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          <b>{{ this.yes }}</b>\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"my-auto\">\r\n      <ion-label (click)=\"openAssessmentModal('view1', 'no', randomStudent, i)\">\r\n        <p\r\n          class=\"text-white m-0 text-center bg-red br-radius-45\"\r\n          [ngClass]=\"{\r\n            opacity_one: this.randomStudentList[i].accessed == 'no',\r\n            opacity_not_one: this.randomStudentList[i].accessed != 'no',\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-11': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          <b>{{ this.no }}</b>\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n       (click)=\"goBack()\"\r\n      >\r\n      <!-- [routerLink]=\"['/tnvntabs/page-route/assessment']\" -->\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToStudentPerformance()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_assessment_assessment_module_ts-es5.js.map