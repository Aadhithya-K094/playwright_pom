(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_flhmethodology_flhmethodology_module_ts"], {
    /***/
    51061:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FlhMethodologyComponent": function FlhMethodologyComponent() {
          return (
            /* binding */
            _FlhMethodologyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_flhmethodology_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./flhmethodology.component.html */
      54471);
      /* harmony import */


      var _flhmethodology_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./flhmethodology.component.scss */
      84959);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);

      var _FlhMethodologyComponent = /*#__PURE__*/function () {
        function FlhMethodologyComponent(_router, apiService, _translate, _alertService, ionicStore, loading, el) {
          var _this = this;

          _classCallCheck(this, FlhMethodologyComponent);

          this._router = _router;
          this.apiService = apiService;
          this._translate = _translate;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this.el = el;
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.headerClicked = false;
          this.currentIndex = 0;
          this.question_no = 0;
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
                case "0":
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

                default:
                  {
                    break;
                  }
              }

              _this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this.sectionList;

              _this.ionicStore.setStoreData(_this.storeDetail);

              if (answerDetail.question.type_of_ans != "2") {
                _this.removeSubQuestions(answerDetail.question.ref_id, answerDetail.question.ob_qus_id);
              } else {
                var status1 = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                if (status1) {
                  _this.removeSubQuestions(answerDetail.question.ref_id, answerDetail.question.ob_qus_id);
                }
              }

              if (answerDetail.answer.child_qus != undefined) {
                if (answerDetail.answer.child_qus.length > 0) {
                  _this.subQuestionNo = 0;
                  var status = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                  if (answerDetail.question.type_of_ans) {
                    answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var newQuestion;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              _context.n = 1;
                              return this.methodologyQuestions.find(function (data1, index) {
                                return data1.ref_id == datad.toString();
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
                    var _status = _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                    if (_status) {
                      answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                          var newQuestion;
                          return _regenerator().w(function (_context2) {
                            while (1) switch (_context2.n) {
                              case 0:
                                _context2.n = 1;
                                return this.methodologyQuestions.find(function (data1, index) {
                                  return data1.ref_id == datad.toString();
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
          };

          this.addSubQuestions = function (newQuestion, questionIndex, parentQuestion) {
            var answerIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var i = 0;
            var temp_Questions = JSON.parse(JSON.stringify(newQuestion));

            if (temp_Questions.ans != null) {
              temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
              temp_Questions.ans = JSON.parse(temp_Questions.ans);
            }

            if ((_this.classType == temp_Questions.classtype || temp_Questions.classtype == "3") && (_this.isClassPresent(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true || _this.isNonSelectedClass_present(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true)) {
              _this.subQuestionNo++;
              var questionNo = _this.subQuestionNo;
              temp_Questions["question_no"] = _this.sectionList[_this.selectedSection].questionList[questionIndex].question_no + "." + questionNo;

              _this.sectionList[_this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);

              _this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this.sectionList;

              _this.ionicStore.setStoreData(_this.storeDetail);
            }
          };

          this.isClassPresent = function (classList, classroomSelection_ClassList_Ids) {
            var Ques_ClassList = classList.split(",");
            var status = Ques_ClassList.includes(_this.selectedClass);
            return status;
          };
        }

        return _createClass(FlhMethodologyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.progressValue = Math.round((6 - 2) / 12 * 100);
            this.appLanguage();
            this.loading.present();
            this.ionicStore.getOffStorage().then(function (response) {
              _this2.masterApiResponse = response;

              _this2.ionicStore.getStoreData().then(function (response) {
                _this2.storeDetail = response;
                _this2.storeDetail.pages.currentPage = "teachingMethodology";

                _this2.ionicStore.setStoreData(_this2.storeDetail);

                _this2.classType = _this2.storeDetail.pages.pageData[5].pageDetails.classType;
                _this2.selectedClass = _this2.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id;
                _this2.classroomSelection_ClassList = _this2.storeDetail.pages.pageData[5].correctedDetails;
                _this2.classroomSelection_ClassList_Ids = _this2.storeDetail.pages.pageData[5].correctedDetails.map(function (data) {
                  return data.class_id;
                });
                var classDetail = _this2.storeDetail.pages.pageData[5].pageDetails;

                if (_this2.storeDetail.pages.pageData[7] == undefined) {
                  _this2.getMethodology(classDetail.classType, classDetail.selectedClass[0].class_id, _this2.classroomSelection_ClassList_Ids, _this2.classroomSelection_ClassList);
                } else {
                  _this2.sectionList = _this2.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                  _this2.methodologyQuestions = _this2.storeDetail.pages.pageData[7].correctedDetails.methodologyQuestions;
                  _this2.selectedSection = _this2.storeDetail.pages.pageData[7].correctedDetails.selectedSection;
                  _this2.headerClicked = _this2.storeDetail.pages.pageData[7].correctedDetails.headerClicked;
                  _this2.currentIndex = _this2.storeDetail.pages.pageData[7].correctedDetails.currentIndex;

                  _this2.loading.dismiss();
                }
              });
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this3 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this3.languageType = data;

              _this3._translate.use(_this3.languageType);

              _this3._initialiseTranslation();
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

            this._translate.get("fillAnswer").subscribe(function (res) {
              _this4.fillAnswer = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this4.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this4.back = res;
            });
          }
        }, {
          key: "getMethodology",
          value: function getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
            var _this5 = this;

            var classDetail = {
              class_id: classId,
              classtype: classType
            };
            var tempsectionList = [];
            var tempQuestionList = [];

            if (this.languageType == "en") {
              tempsectionList = this.masterApiResponse.methodologys.filter(function (data) {
                if (data.lang == _this5.languageType) {
                  return data;
                }
              });
              var tempQuesEN;
              tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter(function (data) {
                if (data.lang == _this5.languageType) {
                  return data;
                }
              });
            } else if (this.languageType == "ta") {
              tempsectionList = this.masterApiResponse.methodologys.filter(function (data) {
                if (data.lang == _this5.languageType) {
                  return data;
                }
              });

              var _tempQuesEN;

              tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter(function (data) {
                if (data.lang == _this5.languageType) {
                  return data;
                }
              });
            } else {}

            var methodologyQuesList = [];
            tempQuestionList.forEach(function (data) {
              var quesClassList = data["class"].split(",");
              var allSelectionClassList = classroomSelection_ClassList;
              var allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
              var status = quesClassList.includes(_this5.selectedClass);
              var isNon_SelectedPresent;

              if (allSelectionClassList_Ids.length && quesClassList.length) {
                isNon_SelectedPresent = allSelectionClassList_Ids.filter(function (ac) {
                  return quesClassList.includes(ac);
                });

                if (isNon_SelectedPresent.length > 0 || status) {
                  isNon_SelectedPresent = true;
                } else {
                  isNon_SelectedPresent = false;
                }
              } else {
                isNon_SelectedPresent = false;
              }

              if (isNon_SelectedPresent == true && (data.classtype == classType || data.classtype == "3")) {
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
                case "0":
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

                default:
                  {
                    break;
                  }
              }

              data["selectedAnswer"] = selectedAnswer;
            });
            this.sectionList = records.methodology;
            this.sectionList.forEach(function (data, index) {
              _this5.question_no = 0;

              var questions = _this5.methodologyQuestions.filter(function (data1, index1) {
                if (data.sec_id == data1.sec_id && data1.parent_id == "-1") {
                  var answer = data1;

                  if (data1.sec_id == "7" || data1.sec_id == "14") {
                    if (data1["class"].includes(classId)) {
                      if (data1.ans != null) {
                        answer.ans = data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                        answer.ans = JSON.parse(answer.ans);
                        answer.ans.ans.forEach(function (element) {
                          element["checked"] = false;
                        });
                      }

                      _this5.question_no = _this5.question_no + 1;
                      answer.question_no = _this5.question_no;
                      return answer;
                    }
                  } else {
                    if (data1.ans != null) {
                      answer.ans = typeof data1.ans != "string" ? data1.ans : data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                      answer.ans = typeof answer.ans == "string" ? JSON.parse(answer.ans) : answer.ans;
                      answer.ans.ans.forEach(function (element) {
                        element["checked"] = false;
                      });
                    }

                    _this5.question_no = _this5.question_no + 1;
                    answer.question_no = _this5.question_no;
                    return answer;
                  }
                }
              });

              _this5.sectionList[index]["status"] = "inactive";
              _this5.sectionList[index]["questionList"] = questions;
              _this5.sectionList[index]["isAnswerd"] = false;
            });
            this.loading.dismiss();
            var apiData = {
              pageNo: "8",
              pageName: "teachingMethodology",
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
            this.storeDetail.pages.pageData[7] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
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
                _this6.storeDetail.pages.pageData[7].correctedDetails.selectedSection = _this6.selectedSection;
                _this6.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this6.sectionList;
                _this6.storeDetail.pages.pageData[7].correctedDetails.headerClicked = _this6.headerClicked;
                _this6.storeDetail.pages.pageData[7].correctedDetails.currentIndex = _this6.currentIndex;

                _this6.ionicStore.setStoreData(_this6.storeDetail);
              } else {
                _this6.sectionList[currentindex]["status"] = "inactive";
                _this6.storeDetail.pages.pageData[7].correctedDetails.selectedSection = _this6.selectedSection;
                _this6.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this6.sectionList;
                _this6.storeDetail.pages.pageData[7].correctedDetails.headerClicked = _this6.headerClicked;
                _this6.storeDetail.pages.pageData[7].correctedDetails.currentIndex = _this6.currentIndex;

                _this6.ionicStore.setStoreData(_this6.storeDetail);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this7 = this;

              var temp;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    temp = [];
                    _context4.n = 1;
                    return this.sectionList[this.selectedSection].questionList.forEach(function (question, questionIndex) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              if (!(question.parent_id == question_Id)) {
                                _context3.n = 1;
                                break;
                              }

                              temp.splice(0, 0, questionIndex);
                              _context3.n = 1;
                              return this.removeSubQuestions(question.ref_id, question.ob_qus_id);

                            case 1:
                              return _context3.a(2);
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 1:
                    temp.forEach(function (questionIndex, arrayIndex) {
                      _this7.sectionList[_this7.selectedSection].questionList.splice(questionIndex, 1);
                    });
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
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
            if (this.headerClicked == false) {
              this.headerClicked = true;
              this.currentIndex = 0;
              this.selectedSection = this.currentIndex;
              this.sectionList[this.currentIndex].status = "active";
              this.sectionName = this.sectionList[this.currentIndex].sec_name;
              this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
              this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
              this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
              this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
              this.ionicStore.setStoreData(this.storeDetail);
            } else {
              this.pageDetail = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
              var questionList = this.pageDetail[this.selectedSection].questionList;
              var statusCheck = questionList.every(this.checkValid);

              if (statusCheck) {
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
                this.ionicStore.setStoreData(this.storeDetail);

                if (this.currentIndex <= this.sectionList.length - 2) {
                  this.sectionList[this.currentIndex].status = "inactive";
                  this.currentIndex = this.currentIndex + 1;
                  this.sectionList[this.currentIndex].status = "active";
                  this.selectedSection = this.currentIndex;
                  this.sectionName = this.sectionList[this.currentIndex].sec_name;
                  this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                  this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                  this.ionicStore.setStoreData(this.storeDetail);
                } else {
                  this._router.navigate(["/tnvntabs/page-route/assessment"]);
                }
              } else {
                this._alertService.showAlert(this.fillAnswer);
              }
            }
          }
        }, {
          key: "backIndex",
          value: function backIndex() {
            if (this.headerClicked == true) {
              if (this.currentIndex < this.sectionList.length) {
                if (this.currentIndex != 0) {
                  this.sectionList[this.currentIndex].status = "inactive";
                  this.currentIndex = this.currentIndex - 1;
                  this.sectionList[this.currentIndex].status = "active";
                  this.selectedSection = this.currentIndex;
                  this.sectionName = this.sectionList[this.currentIndex].sec_name;
                  this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                  this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                  this.ionicStore.setStoreData(this.storeDetail);
                } else {
                  this.headerClicked = false;

                  for (var sectionIndex in this.sectionList) {
                    this.sectionList[sectionIndex].status = "inactive";
                  }

                  this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
                  this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                  this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.currentProgress = this.progressValue;
                  this.ionicStore.setStoreData(this.storeDetail);
                }
              }
            } else {
              var selectedClass = this.storeDetail.pages.pageData[6].correctedDetails;

              if (selectedClass.length == 1) {
                this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
              } else {
                this._router.navigate(["/tnvntabs/page-route/observation/observationTeaching"]);
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
              }

              if (element.selectedAnswer.answer.toLowerCase() == "other" || element.selectedAnswer.answer == "மற்றவை") {
                if (!element.selectedAnswer.otherAns || element.selectedAnswer.otherAns == "") {
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

              if (otherFound) {
                if (!otherFound.otherAns || otherFound.otherAns == "") {
                  status = false;
                }
              }
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

      _FlhMethodologyComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
        }];
      };

      _FlhMethodologyComponent.propDecorators = {
        headersize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ["headersize", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
          }]
        }],
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
      _FlhMethodologyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-flh-methodology",
        template: _raw_loader_flhmethodology_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_flhmethodology_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FlhMethodologyComponent);
      /***/
    },

    /***/
    3015:
    /*!********************************************************************!*\
      !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FlhMethodologyModule": function FlhMethodologyModule() {
          return (
            /* binding */
            _FlhMethodologyModule
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


      var _flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./flhmethodology.component */
      51061);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__.FlhMethodologyComponent
      }];

      var _FlhMethodologyModule = /*#__PURE__*/_createClass(function FlhMethodologyModule() {
        _classCallCheck(this, FlhMethodologyModule);
      });

      _FlhMethodologyModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__.FlhMethodologyComponent]
      })], _FlhMethodologyModule);
      /***/
    },

    /***/
    84959:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaG1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7QUFDQztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQUVDLHVEQUFBO0FBQ0E7RUFDRyx1QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFDUDtBQUlDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQURKO0FBS0M7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRko7QUFLSTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIUDtBQVFDOztvQkFBQTtBQUdBO0VBQ0csY0FBQTtBQUxKO0FBT0M7RUFDRyxhQUFBO0FBSko7QUFNQztFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQUtDO0VBQ0EsZUFBQTtBQUZEO0FBSUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFLQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQU1DO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUpIO0FBT0M7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBTEg7QUFRQztFQUNHLGFBQUE7QUFMSjtBQVFDOzs7OztFQUtFLGtCQUFBO0FBTEg7QUFRQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBTEg7QUFTQTtFQUNHLFdBQUE7RUFDQSxRQUFBO0FBTkgiLCJmaWxlIjoiZmxobWV0aG9kb2xvZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjM1ZW07XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMCwyMTAsMjEwLDEpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogRGVmaW5lIHRoZSBzdHlsZSBydWxlcyBmb3IgdGhlICdhcnJvdyBpY29ucycgKi9cclxuICAgIHNwYW4ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgcmlnaHQ6IDFlbTtcclxuICAgICAgIHRvcDogMS4yZW07XHJcbiAgICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIH1cclxuIH1cclxuXHJcbnNlY3Rpb257XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gc2VjdGlvbiBoMntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuIH1cclxuXHJcblxyXG4gLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cclxuIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuIH1cclxuXHJcblxyXG4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcclxuXHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG4gLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLW9uZXtcclxuICAgYmFja2dyb3VuZDogI0JCNkJEOTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG4gfVxyXG4gLmluYWN0e1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdHdve1xyXG5cclxuICAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLXRocmVle1xyXG5cclxuICAgYmFja2dyb3VuZDogI0YyOTk0QTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNzk4NUYyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZml2ZXtcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM0QUYyQzA7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tMSBpb24taWNvbixcclxuIC5zZWN0aW9uLTIgaW9uLWljb24sXHJcbiAuc2VjdGlvbi0zIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNCBpb24taWNvbixcclxuIC5zZWN0aW9uLTUgaW9uLWljb257IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG5cclxuLmlvbi1jaGVjay1pbWcuYWN0aXZle1xyXG4gICB3aWR0aDogMTVweDtcclxuICAgaGVpZ2h0OiAxNXB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdG9wOiA0cHg7XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbiAgeyBcclxuICAgei1pbmRleDogMjI7XHJcbiAgIHRvcDogNHB4O1xyXG5cclxufSBcclxuICJdfQ== */";
      /***/
    },

    /***/
    54471:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/flhmethodology/flhmethodology.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>FLH<br />{{ this.methodology }} <br /> </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n  <div class=\"p-0\">\r\n    <section\r\n      class=\"p-0 section-1 border\"\r\n      *ngFor=\"let methodology of sectionList; let i = index\"\r\n    >\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">\r\n          <ion-img\r\n            class=\"ion-check-img\"\r\n            [ngClass]=\"\r\n              this.headerClicked && methodology.isAnswerd\r\n                ? 'active'\r\n                : 'inactive'\r\n            \"\r\n            src=\"./assets/img/checkmark.png\"\r\n          ></ion-img>\r\n          <h2\r\n            id=\"sectionHeight\"\r\n            [ngClass]=\"\r\n              this.headerClicked && methodology.status != 'active'\r\n                ? 'inact'\r\n                : ''\r\n            \"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_header_color }\"\r\n            class=\"method-header-one text-white text-center\"\r\n          >\r\n            {{ methodology.sec_name }}\r\n          </h2>\r\n\r\n          <div\r\n            [ngClass]=\"methodology.status\"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_color }\"\r\n            class=\"method-body h-100\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_flhmethodology_flhmethodology_module_ts-es5.js.map