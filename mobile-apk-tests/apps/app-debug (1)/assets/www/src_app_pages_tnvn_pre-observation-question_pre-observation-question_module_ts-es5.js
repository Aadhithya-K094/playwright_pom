(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_pre-observation-question_pre-observation-question_module_ts"], {
    /***/
    10310:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreObservationQuestionComponent": function PreObservationQuestionComponent() {
          return (
            /* binding */
            _PreObservationQuestionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_pre_observation_question_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pre-observation-question.component.html */
      28930);
      /* harmony import */


      var _pre_observation_question_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-observation-question.component.scss */
      57408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_components_observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/observerremark/observationremark.component */
      75946);

      var _PreObservationQuestionComponent = /*#__PURE__*/function () {
        function PreObservationQuestionComponent(_router, apiService, _translate, _alertService, ionicStore, loading, el, alertController, modalController) {
          var _this = this;

          _classCallCheck(this, PreObservationQuestionComponent);

          this._router = _router;
          this.apiService = apiService;
          this._translate = _translate;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this.el = el;
          this.alertController = alertController;
          this.modalController = modalController;
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
          this.headerClicked = true;
          this.currentIndex = 0;
          this.question_no = 0;
          this.hideKeyboard = false;
          this.methodologyQuestions = [];
          this.sectionList = [];
          this.questionList = [];
          this.tempQuestions = [];
          this.finalAnswerdList = {};
          this.subQuestionNo = 0;
          this.methodologyData = [];

          this.displayCounter = function (selectedAnswerDetail) {
            var answerDetail = selectedAnswerDetail;
            var currentSectionId = _this.sectionList[_this.selectedSection].sec_id;
            var answerdQuestion_SectionId = answerDetail.question.sec_id;

            if (currentSectionId == answerdQuestion_SectionId) {
              var answerType = answerDetail.question.type_of_ans;

              switch (answerType) {
                case "6":
                  {
                    _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    break;
                  }

                case "5":
                  {
                    _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    break;
                  }

                case "1":
                  {
                    var selectedAnswer = {
                      answer_id: answerDetail.answer.id,
                      answer: answerDetail.answer.ans
                    };

                    if (selectedAnswer.answer.toLowerCase() == "other" || selectedAnswer.answer == "மற்றவை") {
                      selectedAnswer["otherAns"] = answerDetail.otherAnswer;
                    }

                    if (_this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex] != undefined) {
                      _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = selectedAnswer;
                    }

                    break;
                  }

                case "2":
                  {
                    var _selectedAnswer = {
                      answer_id: answerDetail.answer.id,
                      answer: answerDetail.answer.ans
                    };

                    var answerInfo = _selectedAnswer.answer.split(" ").join("").toLowerCase();

                    var selectedAnswerList = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer;

                    if (!selectedAnswerList.length) {
                      _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);

                      _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                    } else {
                      var answerIds = selectedAnswerList.map(function (el) {
                        return el.answer_id;
                      });
                      var found = answerIds.includes(_selectedAnswer.answer_id);

                      if (found) {
                        var indexInfo = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.findIndex(function (answer) {
                          return answer.answer_id == _selectedAnswer.answer_id;
                        });

                        _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = false;

                        _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.splice(indexInfo, 1);
                      } else {
                        if (answerInfo == "noneoftheabove" || answerInfo == "none" || answerInfo == "எதுவுமில்லை" || answerInfo == "மேற்கூறியஎதுவும்இல்லை" || answerInfo.toLowerCase() == "other" || answerInfo == "மற்றவை") {
                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (element) {
                            element.checked = false;
                          });

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        } else {
                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (ansData, index) {
                            var listanswer = ansData.ans.split(" ").join("").toLowerCase();

                            if (listanswer == "noneoftheabove" || listanswer == "none" || listanswer == "எதுவுமில்லை" || listanswer == "மேற்கூறியஎதுவும்இல்லை" || listanswer.toLowerCase() == "other" || listanswer == "மற்றவை") {
                              _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[index].checked = false;
                            }
                          });

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        }
                      }
                    }

                    break;
                  }

                case "3":
                  {
                    _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    break;
                  }

                case "4":
                  {
                    _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this.sectionList;

              _this.ionicStore.setStoreData(_this.storeDetail);

              localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));

              if (answerDetail.question.type_of_ans != "2") {
                _this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
              } else {
                var status1 = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                if (status1) {
                  if (_this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                    _this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
                  }
                } else {
                  var childQus = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].child_qus;
                  var questionindexlength = [];

                  for (var i = 0; i < childQus.length; i++) {
                    _this.sectionList[_this.selectedSection].questionList.forEach(function (question, childquestionIndex) {
                      if (Number(childQus[i]) == question.ob_qus_id) {
                        questionindexlength.push(childquestionIndex);
                        _this.subQuestionNo--;

                        _this.sectionList[_this.selectedSection].questionList.splice(childquestionIndex, 1);
                      }
                    });

                    _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this.sectionList;

                    _this.ionicStore.setStoreData(_this.storeDetail);

                    localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
                  }

                  _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this.sectionList;

                  _this.ionicStore.setStoreData(_this.storeDetail);

                  localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
                }
              }

              if (answerDetail.answer.child_qus != undefined) {
                if (answerDetail.answer.child_qus.length > 0) {
                  if (answerDetail.question.type_of_ans != "2") {
                    _this.subQuestionNo = 0;
                    answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var newQuestion;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              _context.n = 1;
                              return this.methodologyQuestions.find(function (data1, index) {
                                return data1.ob_qus_id == datad.toString();
                              });

                            case 1:
                              newQuestion = _context.v;

                              if (!(newQuestion != undefined)) {
                                _context.n = 2;
                                break;
                              }

                              _context.n = 2;
                              return this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);

                            case 2:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });
                  } else {
                    var status = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                    if (_this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                      _this.subQuestionNo = 0;
                    }

                    _this.previousQuestion_id = answerDetail.question.ob_qus_id;

                    if (status) {
                      answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                          var newQuestion;
                          return _regenerator().w(function (_context2) {
                            while (1) switch (_context2.n) {
                              case 0:
                                _context2.n = 1;
                                return this.methodologyQuestions.find(function (data1, index) {
                                  return data1.ob_qus_id == datad.toString();
                                });

                              case 1:
                                newQuestion = _context2.v;

                                if (!(newQuestion != undefined)) {
                                  _context2.n = 2;
                                  break;
                                }

                                _context2.n = 2;
                                return this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);

                              case 2:
                                return _context2.a(2);
                            }
                          }, _callee2, this);
                        }));
                      });
                    }
                  }
                }
              }
            }

            _this.pageDetail = _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
            var questionList = _this.pageDetail[_this.selectedSection].questionList;
            var sum = 0;

            for (var i = 0; i < questionList.length; i++) {
              var _answerType = questionList[i].type_of_ans;

              if (_answerType == "1") {
                if (questionList[i].selectedAnswer.answer_id != undefined && questionList[i].selectedAnswer.answer_id != '') {
                  sum += 1;
                }
              } else if (_answerType == "2") {
                if (questionList[i].selectedAnswer.length > 0) {
                  sum += 1;
                }

                var otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(questionList[i].selectedAnswer, function (sa) {
                  return sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை";
                });
              } else {
                if (questionList[i].selectedAnswer != "") {
                  sum += 1;
                }
              }
            }

            if (sum) {
              _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[_this.selectedSection].count = sum;
            }

            var statusCheckData = questionList.every(_this.checkValid);

            if (statusCheckData) {
              _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[_this.selectedSection].isAnswerd = true;
            }

            var statusCheck;
            var sectionList = _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
            var statusCheckArray = [];

            for (var i = 0; i < sectionList.length; i++) {
              questionList = sectionList[i].questionList;
              statusCheck = questionList.every(_this.checkValid);

              if (statusCheck == true) {
                statusCheckArray.push(statusCheck);
              }
            }

            if (statusCheckArray.length == sectionList.length) {
              _this.statusCheck = statusCheck;
            }
          };

          this.addSubQuestions = function (newQuestion, questionIndex, parentQuestion) {
            var answerIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

            var questionexist = _this.sectionList[_this.selectedSection].questionList.some(function (el) {
              return el.ob_qus_id == newQuestion.ob_qus_id;
            });

            _this.sectionList[_this.selectedSection].questionList.forEach(function () {});

            if (questionexist != true) {
              var i = 0;
              var temp_Questions = JSON.parse(JSON.stringify(newQuestion));

              if (temp_Questions.ans != null && temp_Questions.ans) {
                // temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                // let removeSpace = temp_Questions.ans.replace(/\s/g, '')
                // let rmoveQute = removeSpace.replace('"{"', '{"')
                temp_Questions.ans = JSON.parse(temp_Questions.ans);
              }

              if ((Number(_this.classType) == Number(temp_Questions.classtype) || temp_Questions.classtype == "3") && (_this.isClassPresent(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true || _this.isNonSelectedClass_present(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true)) {
                _this.subQuestionNo++;
                var questionNo = _this.subQuestionNo;
                temp_Questions["question_no"] = _this.sectionList[_this.selectedSection].questionList[questionIndex].question_no + "." + questionNo;

                _this.sectionList[_this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);

                _this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this.sectionList;

                _this.ionicStore.setStoreData(_this.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
              }
            }
          };

          this.isClassPresent = function (classList, classroomSelection_ClassList_Ids) {
            var Ques_ClassList = classList.split(",");
            var status = Ques_ClassList.includes(_this.selectedClass);
            return status;
          };
        }

        return _createClass(PreObservationQuestionComponent, [{
          key: "myVar",
          get: function get() {
            return this.languageType;
          },
          set: function set(value) {
            if (value != this.languageType) {
              this.languageType = value;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            debugger;
            this.progressValue = 84;
            this.loading.present();
            this.ionicStore.getOffStorage().then(function (response) {
              _this2.masterApiResponse = response;

              if (_this2.masterApiResponse == null || _this2.masterApiResponse == undefined) {
                _this2.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
              }

              _this2.loading.dismiss();

              _this2.ionicStore.getStoreData().then(function (response) {
                _this2.storeDetail = response;

                if (_this2.storeDetail == null || _this2.storeDetail == undefined) {
                  _this2.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }

                _this2.loading.dismiss();

                _this2.storeDetail.pages.currentPage = "preObservationQuestion";

                _this2.ionicStore.setStoreData(_this2.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this2.storeDetail));
                console.log(_this2.storeDetail, 'this.storeDetail');
                _this2.classType = 3;
                _this2.selectedSubject = _this2.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                _this2.selectedClass = _this2.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id.toString();
                _this2.classroomSelection_ClassList = _this2.storeDetail.pages.pageData[5].correctedDetails;
                _this2.classroomSelection_ClassList_Ids = _this2.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
                var classDetail = _this2.storeDetail.pages.pageData[5].pageDetails;

                if (_this2.storeDetail.pages.pageData[16] == undefined || _this2.storeDetail.pages.pageData[16] == null) {
                  _this2.getMethodology(3, classDetail.selectedClass.class_id, _this2.classroomSelection_ClassList_Ids, _this2.classroomSelection_ClassList);
                } else {
                  _this2.sectionList = _this2.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
                  _this2.methodologyQuestions = _this2.storeDetail.pages.pageData[16].correctedDetails.methodologyQuestions;
                  _this2.selectedSection = _this2.storeDetail.pages.pageData[16].correctedDetails.selectedSection;
                  _this2.headerClicked = _this2.storeDetail.pages.pageData[16].correctedDetails.headerClicked;
                  _this2.currentIndex = _this2.storeDetail.pages.pageData[16].correctedDetails.currentIndex;
                  var statusCheckArray = [];
                  var statusCheck;

                  for (var i = 0; i < _this2.sectionList.length; i++) {
                    var questionList = _this2.sectionList[i].questionList;
                    statusCheck = questionList.every(_this2.checkValid);

                    if (statusCheck == true) {
                      statusCheckArray.push(statusCheck);
                    }
                  }

                  if (statusCheckArray.length == _this2.sectionList.length) {
                    _this2.statusCheck = true;
                  }
                }
              });
            });
            this.appLanguage();
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var alertText1, alertText2, alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    alertText1 = "Kindly fill these sections by silently observing the teacher.<br>";
                    alertText2 = "\Kindly fill the Pre-observation section at the end by asking the teacher";
                    _context3.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      message: alertText1 + " " + " " + alertText2,
                      backdropDismiss: false,
                      buttons: [{
                        text: "ok",
                        handler: function handler() {}
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
          key: "appLanguage",
          value: function appLanguage() {
            var _this3 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this3.languageType = data;
              _this3.previouslanguage = data;

              _this3._translate.use(_this3.languageType);

              _this3._initialiseTranslation(); // if(this.storeDetail){
              //   this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;        
              //   this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
              //   let classDetail = this.storeDetail.pages.pageData[5].pageDetails;      
              //   this.getMethodology(
              //     3,
              //     classDetail.selectedClass.class_id,
              //     this.classroomSelection_ClassList_Ids,
              //     this.classroomSelection_ClassList
              //   );
              // }

            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this4 = this;

            this._translate.get("classroom").subscribe(function (res) {
              _this4.classroom = res;
            });

            this._translate.get("Practices").subscribe(function (res) {
              _this4.Practices = res;
            });

            this._translate.get("teaching").subscribe(function (res) {
              _this4.teaching = res;
            });

            this._translate.get("methodology").subscribe(function (res) {
              _this4.methodology = res;
            });

            this._translate.get("postObservation").subscribe(function (res) {
              _this4.postObservation = res;
            });

            this._translate.get("questions").subscribe(function (res) {
              _this4.questions = res;
            });

            this._translate.get("preObservationReport").subscribe(function (res) {
              _this4.preObservationReport = res;
            });

            this._translate.get("fillAnswer").subscribe(function (res) {
              _this4.fillAnswer = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this4.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this4.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this4.save = res;
            });
          }
        }, {
          key: "getMethodology",
          value: function getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
            var _this5 = this;

            var classDetail = {
              class_id: classId,
              classtype: 3
            };
            var tempsectionList = [];
            var tempQuestionList = [];
            tempsectionList = this.masterApiResponse.methodologys;
            tempQuestionList = this.masterApiResponse.methodology_questions_lang; // if (this.languageType == "en") {      
            //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
            //     if(data.lang == this.languageType){
            //       return data
            //     }
            //   });    
            //   let tempQuesEN;      
            //   tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
            //     if(data.lang == this.languageType){
            //       return data
            //     }
            //   });        
            // } else if (this.languageType == "ta") {
            //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
            //     if(data.lang == this.languageType){
            //       return data
            //     }
            // });
            // let tempQuesEN;    
            // tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
            //   if(data.lang == this.languageType){
            //     return data
            //   }
            // });            
            // } else {
            // }    

            var methodologyQuesList = [];
            tempQuestionList.forEach(function (data) {
              var quesClassList = data["class"].split(",");
              var allSelectionClassList = classroomSelection_ClassList;
              var allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
              var status = quesClassList.includes(_this5.selectedClass);
              var isNon_SelectedPresent;

              if (allSelectionClassList_Ids.length && quesClassList.length) {
                isNon_SelectedPresent = quesClassList.includes(_this5.selectedClass);

                if (isNon_SelectedPresent.length > 0 || status) {
                  isNon_SelectedPresent = true;
                } else {
                  isNon_SelectedPresent = false;
                }
              } else {
                isNon_SelectedPresent = false;
              }

              if (isNon_SelectedPresent == true && (Number(data.classtype) == Number(classType) || Number(data.classtype) == 3 || Number(data.classtype) == 2 || Number(data.classtype) == 1)) {
                if (data.sec_id == "8" || data.sec_id == "15") {
                  if (status) {
                    methodologyQuesList.push(data);
                  }
                } else if (data.sec_id == "3" || data.sec_id == "10") {
                  if (status) {
                    methodologyQuesList.push(data);
                  }
                } else {
                  methodologyQuesList.push(data);
                }
              }
            });
            var records = {
              methodology: tempsectionList,
              methodology_questions: methodologyQuesList
            };
            var a = JSON.parse(JSON.stringify(records.methodology));
            this.methodologyQuestions = records.methodology_questions;
            this.methodologyQuestions.forEach(function (data) {
              var selectedAnswer;
              var answerType = data.type_of_ans;

              switch (answerType) {
                case "6":
                  {
                    selectedAnswer = "";
                    break;
                  }

                case "5":
                  {
                    selectedAnswer = "";
                    break;
                  }

                case "1":
                  {
                    selectedAnswer = {
                      answer_id: "",
                      answer: ""
                    };
                    break;
                  }

                case "2":
                  {
                    selectedAnswer = [];
                    break;
                  }

                case "3":
                  {
                    selectedAnswer = "";
                    break;
                  }

                case "4":
                  {
                    selectedAnswer = "";
                    break;
                  }

                default:
                  {
                    break;
                  }
              }

              data["selectedAnswer"] = selectedAnswer;
            });
            this.sectionList = records.methodology;
            this.methodologyQuestions = this.methodologyQuestions.sort(function (a, b) {
              return Number(a.priority) > Number(b.priority) ? 1 : Number(b.priority) > Number(a.priority) ? -1 : 0;
            });
            this.sectionList.forEach(function (data, index) {
              _this5.question_no = 0;

              var questions = _this5.methodologyQuestions.filter(function (data1, index1) {
                var _a;

                if (Number(data.sec_id) == Number(data1.sec_id) && data1.parent_id == "-1") {
                  delete data.score;
                  var answer = data1;

                  if (answer.ans) {
                    // answer.ans = data1.ans
                    // .replace(/^\s+|\s+$/g, "")
                    // .replace(/\n/g, "");
                    // answer.ans = JSON.parse(answer.ans);
                    if (typeof data1.ans != "string") {
                      answer.ans = data1.ans;
                    } else {
                      answer.ans = data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                    }

                    if (typeof answer.ans == "string") {
                      // let removeSpace = answer.ans.replace(/\s/g, '')
                      // let rmoveQute = removeSpace.replace('"{"', '{"')
                      answer.ans = JSON.parse(answer.ans);
                      console.log(answer.ans, 'answer.ans');
                    } else {
                      answer.ans = answer.ans;
                    }

                    (_a = answer.ans) === null || _a === void 0 ? void 0 : _a.ans.forEach(function (element) {
                      element["checked"] = false;
                    });
                  }

                  _this5.question_no = _this5.question_no + 1;
                  answer.question_no = _this5.question_no;
                  return answer;
                }
              });

              if (_this5.storeDetail.pages.pageData[5].correctedDetails.class_id.toString()) {
                questions = questions.filter(function (data) {
                  return data["class"].includes(_this5.storeDetail.pages.pageData[5].correctedDetails.class_id.toString());
                });
              }

              _this5.sectionList[index]["status"] = "inactive";
              _this5.sectionList[index]["questionList"] = questions;
              _this5.sectionList[index]["isAnswerd"] = false;
            });
            this.loading.dismiss(); // this.sectionList.forEach((data)=>{      
            //   let removedata = []
            //   data.questionList.filter((question,index)=>{        
            //     if(Number(question.subject_id)!=0){
            //         let subjects = question.subject_id.split(",");            
            //         if(subjects.includes(this.selectedSubject)){                          
            //           return question;
            //         }            
            //         else{                            
            //           removedata.push(index)              
            //         }
            //       }
            //   })
            //   for (var i = removedata.length -1; i >= 0; i--){
            //         data.questionList.splice(removedata[i], 1);
            //     } 
            // });       
            // this.sectionList = this.sectionList.filter((data)=>{
            //     if(data.questionList.length>0){
            //       return data
            //     }
            //   });  

            var apiData = {
              pageNo: "17",
              pageName: "preObservationQuestion",
              apiResponse: {
                records: {
                  sectionList: a,
                  methodologyQuestions: this.methodologyQuestions,
                  customizeSectionList: this.sectionList
                }
              },
              correctedDetails: {
                methodologyQuestions: this.methodologyQuestions,
                customizeSectionList: this.sectionList,
                headerClicked: false,
                currentIndex: 0,
                selectedSection: ""
              }
            };
            this.storeDetail.pages.pageData[16] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            this.headerClicked = true;
            this.currentIndex = 0;
            this.selectedSection = this.currentIndex;
            this.sectionList = this.sectionList.filter(function (data) {
              return Number(data.sec_id) == 3;
            });
            this.sectionList[this.currentIndex].status = "active";
            this.sectionName = this.sectionList[this.currentIndex].sec_name;
            this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
            this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
            this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
            this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
          }
        }, {
          key: "toggleAccordion1",
          value: function toggleAccordion1(name, sectionIndex, index) {
            var _this6 = this;

            this.sectionName = name;
            this.selectedSection = sectionIndex;
            this.sectionList.forEach(function (data, currentindex) {
              if (currentindex == index) {
                _this6.sectionList[index]["status"] = "active";
                _this6.currentIndex = index;
                _this6.storeDetail.pages.pageData[16].correctedDetails.selectedSection = _this6.selectedSection;
                _this6.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this6.sectionList;
                _this6.storeDetail.pages.pageData[16].correctedDetails.headerClicked = _this6.headerClicked;
                _this6.storeDetail.pages.pageData[16].correctedDetails.currentIndex = _this6.currentIndex;

                _this6.ionicStore.setStoreData(_this6.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this6.storeDetail));
              } else {
                _this6.sectionList[currentindex]["status"] = "inactive";
                _this6.storeDetail.pages.pageData[16].correctedDetails.selectedSection = _this6.selectedSection;
                _this6.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = _this6.sectionList;
                _this6.storeDetail.pages.pageData[16].correctedDetails.headerClicked = _this6.headerClicked;
                _this6.storeDetail.pages.pageData[16].correctedDetails.currentIndex = _this6.currentIndex;

                _this6.ionicStore.setStoreData(_this6.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this6.storeDetail));
              }
            });
          }
        }, {
          key: "broadcastName",
          value: function broadcastName(name) {
            this.change.emit(name);
          }
        }, {
          key: "removeSubQuestions",
          value: function removeSubQuestions(question_RefId, question_Id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this7 = this;

              var temp;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    temp = [];
                    _context6.n = 1;
                    return this.sectionList[this.selectedSection].questionList.forEach(function (question, questionIndex) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
                        return _regenerator().w(function (_context4) {
                          while (1) switch (_context4.n) {
                            case 0:
                              if (!(question.parent_id == question_Id)) {
                                _context4.n = 1;
                                break;
                              }

                              temp.splice(0, 0, questionIndex);
                              _context4.n = 1;
                              return this.removeSubQuestions(question.ob_qus_id, question.ob_qus_id);

                            case 1:
                              return _context4.a(2);
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 1:
                    temp.forEach(function (questionIndex, arrayIndex) {
                      _this7.sectionList[_this7.selectedSection].questionList.splice(questionIndex, 1);
                    });
                    _context6.n = 2;
                    return this.sectionList.forEach(function (section, index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                        return _regenerator().w(function (_context5) {
                          while (1) switch (_context5.n) {
                            case 0:
                              if (section.questionList.length == 0) {
                                this.sectionList.splice(index);
                              }

                            case 1:
                              return _context5.a(2);
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 2:
                    this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                  case 3:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "isNonSelectedClass_present",
          value: function isNonSelectedClass_present(classList, classroomSelection_ClassList_Ids) {
            var Ques_ClassList = classList.split(",");
            var allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
            var getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass);
            if (getIndex != -1) allSelectionClassList_Ids.splice(getIndex, 1);
            var isNon_SelectedPresent;

            if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
              isNon_SelectedPresent = allSelectionClassList_Ids.includes(Ques_ClassList[0]);
            } else {
              isNon_SelectedPresent = false;
            }

            return isNon_SelectedPresent;
          }
        }, {
          key: "moveIndex",
          value: function moveIndex() {
            this.pageDetail = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
            var questionList = this.pageDetail[this.selectedSection].questionList;
            var statusCheck = questionList.every(this.checkValid);

            if (statusCheck) {
              this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
              this.ionicStore.setStoreData(this.storeDetail);
              localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

              if (this.currentIndex <= this.sectionList.length - 2) {
                this.sectionList[this.currentIndex].status = "inactive";
                this.currentIndex = this.currentIndex + 1;
                this.sectionList[this.currentIndex].status = "active";
                this.selectedSection = this.currentIndex;
                this.sectionName = this.sectionList[this.currentIndex].sec_name;
                this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
              } else {
                this.hideKeyboard = true;
                this.openDiscussModal();
              }
            } else {
              this._alertService.showAlert(this.fillAnswer);
            }
          }
        }, {
          key: "openDiscussModal",
          value: function openDiscussModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this8 = this;

              var modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_7__.ObservationremarkComponent,
                      cssClass: "",
                      componentProps: {},
                      showBackdrop: false,
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context8.v;
                    modal.onDidDismiss().then(function (dataReturned) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                        var level;
                        return _regenerator().w(function (_context7) {
                          while (1) switch (_context7.n) {
                            case 0:
                              this.hideKeyboard = false;
                              level = localStorage.getItem("selectedlevel");
                              _context7.n = 1;
                              return localStorage.setItem("remarks", dataReturned.data);

                            case 1:
                              // this._router.navigate(["/tnvntabs/page-route/observation"]);  
                              this._router.navigate(["/tnvntabs/page-route/index"], {
                                queryParams: {
                                  "pre_obs_qns_section_status": localStorage.setItem("pre_obs_qns_section_status", "1")
                                }
                              });

                            case 2:
                              return _context7.a(2);
                          }
                        }, _callee7, this);
                      }));
                    });
                    this.apiService.name.subscribe(function (response) {
                      if (response == "showText") {
                        var body = document.getElementsByTagName("ion-modal")[0];
                        body.classList.add("new-info");
                      }
                    });
                    _context8.n = 2;
                    return modal.present();

                  case 2:
                    return _context8.a(2, _context8.v);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "backIndex",
          value: function backIndex() {
            if (this.currentIndex == 0) {
              this.headerClicked = false;
            }

            if (this.headerClicked == true) {
              if (this.currentIndex < this.sectionList.length) {
                if (this.currentIndex != 0) {
                  this.sectionList[this.currentIndex].status = "inactive";
                  this.currentIndex = this.currentIndex - 1;
                  this.sectionList[this.currentIndex].status = "active";
                  this.selectedSection = this.currentIndex;
                  this.sectionName = this.sectionList[this.currentIndex].sec_name;
                  this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                  this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                } else {
                  this.headerClicked = false;
                  this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
                  this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                  this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.currentProgress = this.progressValue;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
              }
            } else {
              var selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;
              this.pageDetail = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
              var questionList = this.pageDetail[this.selectedSection].questionList;
              var statusCheck = questionList.every(this.checkValid);

              if (statusCheck) {
                this._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    "pre_obs_qns_section_status": localStorage.getItem("pre_obs_qns_section_status")
                  }
                });
              } else {
                this._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    "pre_obs_qns_section_status": localStorage.getItem("pre_obs_qns_section_status")
                  }
                });
              }
            }
          }
        }, {
          key: "checkValid",
          value: function checkValid(element, index, array) {
            var status = true;
            var answerType = element.type_of_ans;

            if (answerType == "1") {
              if (element.selectedAnswer.answer_id == undefined) {
                status = false;
              } else {
                if (element.selectedAnswer.answer == "") {
                  status = false;
                }
              }
            } else if (answerType == "2") {
              if (!element.selectedAnswer.length) {
                status = false;
              }

              var otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(element.selectedAnswer, function (sa) {
                return sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை";
              });
            } else {
              if (element.selectedAnswer == "") {
                status = false;
              }
            }

            return status;
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "just",
          value: function just() {}
        }]);
      }();

      _PreObservationQuestionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }];
      };

      _PreObservationQuestionComponent.propDecorators = {
        headersize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ["headersize", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
          }]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
        }]
      };
      _PreObservationQuestionComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-pre-observation-question",
        template: _raw_loader_pre_observation_question_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pre_observation_question_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PreObservationQuestionComponent);
      /***/
    },

    /***/
    57026:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreObservationQuestionModule": function PreObservationQuestionModule() {
          return (
            /* binding */
            _PreObservationQuestionModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pre-observation-question.component */
      10310);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__.PreObservationQuestionComponent
      }];

      var _PreObservationQuestionModule = /*#__PURE__*/_createClass(function PreObservationQuestionModule() {
        _classCallCheck(this, PreObservationQuestionModule);
      });

      _PreObservationQuestionModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__.PreObservationQuestionComponent]
      })], _PreObservationQuestionModule);
      /***/
    },

    /***/
    57408:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.scss ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZS1vYnNlcnZhdGlvbi1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0FBQ0o7QUFBSTtFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUVQO0FBRUE7RUFDRyxrQkFBQTtBQUNIO0FBQ0M7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRUg7QUFFQyx1REFBQTtBQUNBO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FBQ1A7QUFHQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURKO0FBSUk7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlA7QUFPQzs7b0JBQUE7QUFHQTtFQUNHLGNBQUE7QUFKSjtBQU1DO0VBQ0csYUFBQTtBQUhKO0FBS0M7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFJQztFQUNBLGVBQUE7QUFERDtBQUdDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQURIO0FBSUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFLQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQU1DO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUpIO0FBT0M7RUFDRyxhQUFBO0FBSko7QUFPQzs7Ozs7RUFLRSxrQkFBQTtBQUpIO0FBT0E7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUpIO0FBUUE7RUFDRyxXQUFBO0VBQ0EsUUFBQTtBQUxIIiwiZmlsZSI6InByZS1vYnNlcnZhdGlvbi1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjM1ZW07XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLDIxMCwyMTAsMSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiBEZWZpbmUgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgJ2Fycm93IGljb25zJyAqL1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICByaWdodDogMWVtO1xyXG4gICAgICAgdG9wOiAxLjJlbTtcclxuICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuc2VjdGlvbntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiBzZWN0aW9uIGgye1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gfVxyXG5cclxuXHJcbiAvKiBIZXJlIHdlIGRlZmluZSB0aGUgYWN0dWFsICdtZW51JyBhbmQgaXRzICdvcHRpb25zJyAqL1xyXG4gLmltYWdlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuIH1cclxuIFxyXG4gcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gfVxyXG5cclxuXHJcbiBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpO1xyXG5cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuIH1cclxuXHJcbiAvKiBGb2xsb3dpbmcgY2xhc3NlcyBkaXNwbGF5L2hpZGUgdGhlICdtZW51J1xyXG4gLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXHJcbiAvLyBjb21wb25lbnQgY2xhc3MgKi9cclxuIC5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuIH1cclxuIC5pbmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItb25le1xyXG4gICBiYWNrZ3JvdW5kOiAjQkI2QkQ5O1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcbiB9XHJcbiAuaW5hY3R7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAubWV0aG9kLWhlYWRlci10d297XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNTZDQ0YyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdGhyZWV7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjRjI5OTRBO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZm91cntcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM3OTg1RjI7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWhlYWRlci1maXZle1xyXG5cclxuICAgYmFja2dyb3VuZDogIzRBRjJDMDtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtYm9keXtcclxuICAgIHBhZGRpbmc6MTJweDtcclxuIH1cclxuXHJcbiAuc2VjdGlvbi0xIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tMiBpb24taWNvbixcclxuIC5zZWN0aW9uLTMgaW9uLWljb24sXHJcbiAuc2VjdGlvbi00IGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNSBpb24taWNvbnsgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbn0gXHJcblxyXG4uaW9uLWNoZWNrLWltZy5hY3RpdmV7XHJcbiAgIHdpZHRoOiAxNXB4O1xyXG4gICBoZWlnaHQ6IDE1cHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0b3A6IDRweDtcclxuICAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbmlvbi1pY29uICB7IFxyXG4gICB6LWluZGV4OiAyMjtcclxuICAgdG9wOiA0cHg7XHJcblxyXG59IFxyXG4gIl19 */";
      /***/
    },

    /***/
    28930:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{postObservation }} <br />{{questions}} </b>\r\n          </ion-title>\r\n        </ion-col>               \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 color-lgrey\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-12': this.languageType == 'ta'}\"\r\n      style=\"background-color:#e6deed;margin-bottom:0px\"\r\n    >\r\n      {{this.preObservationReport}}\r\n    </p>\r\n  </ion-text>  \r\n  <div class=\"p-0\">\r\n    <section\r\n      class=\"p-0 section-1 border\"\r\n      *ngFor=\"let methodology of sectionList; let i = index\" style=\"overflow-y: scroll !important;background-color:#e6deed!important;\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">          \r\n          <div\r\n            [ngClass]=\"methodology.status\"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_color}\"\r\n            class=\"method-body h-100\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"hideKeyboard==false\" style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_pre-observation-question_pre-observation-question_module_ts-es5.js.map