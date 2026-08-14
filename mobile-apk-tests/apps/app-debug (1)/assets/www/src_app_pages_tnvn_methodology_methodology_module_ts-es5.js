(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_methodology_methodology_module_ts"], {
    /***/
    28841:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/tnvn/methodology/methodology.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethodologyComponent": function MethodologyComponent() {
          return (
            /* binding */
            _MethodologyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_methodology_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./methodology.component.html */
      92241);
      /* harmony import */


      var _methodology_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./methodology.component.scss */
      19026);
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


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _MethodologyComponent = /*#__PURE__*/function () {
        function MethodologyComponent(_router, userSessionService, apiService, _translate, _alertService, ionicStore, loading, el, alertController) {
          var _this = this;

          _classCallCheck(this, MethodologyComponent);

          this._router = _router;
          this.userSessionService = userSessionService;
          this.apiService = apiService;
          this._translate = _translate;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this.el = el;
          this.alertController = alertController;
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
          this.headerClicked = true;
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this2 = this;

              var answerDetail, currentSectionId, answerdQuestion_SectionId, answerType, selectedAnswer, _selectedAnswer, answerInfo, selectedAnswerList, answerIds, found, indexInfo, status1, childQus, questionindexlength, i, status, questionList, sum, _answerType, otherFound, statusCheckData, statusCheck, sectionList, statusCheckArray, _t;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    debugger;
                    answerDetail = selectedAnswerDetail;
                    currentSectionId = this.sectionList[this.selectedSection].sec_id;
                    answerdQuestion_SectionId = answerDetail.question.sec_id;

                    if (!(currentSectionId == answerdQuestion_SectionId)) {
                      _context3.n = 14;
                      break;
                    }

                    answerType = answerDetail.question.type_of_ans;
                    _t = answerType;
                    _context3.n = _t === "6" ? 1 : _t === "5" ? 2 : _t === "1" ? 3 : _t === "2" ? 4 : _t === "3" ? 5 : _t === "4" ? 6 : 7;
                    break;

                  case 1:
                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    return _context3.a(3, 8);

                  case 2:
                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    return _context3.a(3, 8);

                  case 3:
                    selectedAnswer = {
                      answer_id: answerDetail.answer.id,
                      answer: answerDetail.answer.ans
                    };

                    if (selectedAnswer.answer.toLowerCase() == "other" || selectedAnswer.answer == "மற்றவை") {
                      selectedAnswer["otherAns"] = answerDetail.otherAnswer;
                    }

                    if (this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex] != undefined) {
                      this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = selectedAnswer;
                    }

                    return _context3.a(3, 8);

                  case 4:
                    _selectedAnswer = {
                      answer_id: answerDetail.answer.id,
                      answer: answerDetail.answer.ans
                    };
                    answerInfo = _selectedAnswer.answer.split(" ").join("").toLowerCase();
                    selectedAnswerList = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer;

                    if (!selectedAnswerList.length) {
                      this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);
                      this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                    } else {
                      answerIds = selectedAnswerList.map(function (el) {
                        return el.answer_id;
                      });
                      found = answerIds.includes(_selectedAnswer.answer_id);

                      if (found) {
                        indexInfo = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.findIndex(function (answer) {
                          return answer.answer_id == _selectedAnswer.answer_id;
                        });
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = false;
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.splice(indexInfo, 1);
                      } else {
                        if (answerInfo == "noneoftheabove" || answerInfo.toLowerCase() == "no" || answerInfo == "none" || answerInfo == "இல்லை" || answerInfo == "எதுவுமில்லை" || answerInfo == "மேற்கூறியஎதுவும்இல்லை" || answerInfo.toLowerCase() == "other" || answerInfo == "மற்றவை") {
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (element) {
                            element.checked = false;
                          });
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        } else {
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (ansData, index) {
                            var listanswer = ansData.ans.split(" ").join("").toLowerCase();

                            if (listanswer == "noneoftheabove" || listanswer == "none" || answerInfo.toLowerCase() == "no" || answerInfo == "இல்லை" || listanswer == "எதுவுமில்லை" || listanswer == "மேற்கூறியஎதுவும்இல்லை" || listanswer.toLowerCase() == "other" || listanswer == "மற்றவை") {
                              _this2.sectionList[_this2.selectedSection].questionList[answerDetail.questionIndex].ans.ans[index].checked = false;
                            }
                          });
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);
                          this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        }
                      }
                    }

                    return _context3.a(3, 8);

                  case 5:
                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    return _context3.a(3, 8);

                  case 6:
                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    return _context3.a(3, 8);

                  case 7:
                    return _context3.a(3, 8);

                  case 8:
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));

                    if (!(answerDetail.question.type_of_ans != "2")) {
                      _context3.n = 10;
                      break;
                    }

                    _context3.n = 9;
                    return this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);

                  case 9:
                    _context3.n = 13;
                    break;

                  case 10:
                    status1 = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                    if (!status1) {
                      _context3.n = 12;
                      break;
                    }

                    if (!(this.previousQuestion_id != answerDetail.question.ob_qus_id)) {
                      _context3.n = 11;
                      break;
                    }

                    _context3.n = 11;
                    return this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);

                  case 11:
                    _context3.n = 13;
                    break;

                  case 12:
                    childQus = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].child_qus;
                    questionindexlength = [];

                    for (i = 0; i < childQus.length; i++) {
                      this.sectionList[this.selectedSection].questionList.forEach(function (question, childquestionIndex) {
                        if (Number(childQus[i]) == question.ob_qus_id) {
                          questionindexlength.push(childquestionIndex);
                          _this2.subQuestionNo--;

                          _this2.sectionList[_this2.selectedSection].questionList.splice(childquestionIndex, 1);
                        }
                      });
                      this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                      this.ionicStore.setStoreData(this.storeDetail);
                      localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                    }

                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));

                  case 13:
                    if (answerDetail.answer.child_qus != undefined) {
                      if (answerDetail.answer.child_qus.length > 0) {
                        if (answerDetail.question.type_of_ans != "2") {
                          this.subQuestionNo = 0;
                          answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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
                          status = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;

                          if (this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                            this.subQuestionNo = 0;
                          }

                          this.previousQuestion_id = answerDetail.question.ob_qus_id;

                          if (status) {
                            answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                              return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
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

                  case 14:
                    this.pageDetail = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                    questionList = this.pageDetail[this.selectedSection].questionList;
                    sum = 0;

                    for (i = 0; i < questionList.length; i++) {
                      _answerType = questionList[i].type_of_ans;

                      if (_answerType == "1") {
                        if (questionList[i].selectedAnswer.answer_id != undefined && questionList[i].selectedAnswer.answer_id != '') {
                          sum += 1;
                        }
                      } else if (_answerType == "2") {
                        if (questionList[i].selectedAnswer.length > 0) {
                          sum += 1;
                        }

                        otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(questionList[i].selectedAnswer, function (sa) {
                          return sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை";
                        });
                      } else {
                        if (questionList[i].selectedAnswer != "") {
                          sum += 1;
                        }
                      }
                    }

                    if (sum) {
                      this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].count = sum;
                    }

                    statusCheckData = questionList.every(this.checkValid);

                    if (statusCheckData) {
                      this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
                    }

                    sectionList = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                    statusCheckArray = [];

                    for (i = 0; i < sectionList.length; i++) {
                      questionList = sectionList[i].questionList;
                      statusCheck = questionList.every(this.checkValid);

                      if (statusCheck == true) {
                        statusCheckArray.push(statusCheck);
                      }
                    }

                    if (statusCheckArray.length == sectionList.length) {
                      this.statusCheck = statusCheck;
                    }

                  case 15:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
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

              if (temp_Questions.ans != null) {
                temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                temp_Questions.ans = JSON.parse(temp_Questions.ans);
              }

              if ((Number(_this.classType) == Number(temp_Questions.classtype) || temp_Questions.classtype == "3" || Number(_this.classType) == 3) && (_this.isClassPresent(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true || _this.isNonSelectedClass_present(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true)) {
                _this.subQuestionNo++;
                var questionNo = _this.subQuestionNo;
                temp_Questions["question_no"] = _this.sectionList[_this.selectedSection].questionList[questionIndex].question_no + "." + questionNo;

                _this.sectionList[_this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);

                _this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this.sectionList;

                _this.ionicStore.setStoreData(_this.storeDetail);

                localStorage.setItem('storedDetails', JSON.stringify(_this.storeDetail));
              }
            }
          };

          this.isClassPresent = function (classList, classroomSelection_ClassList_Ids) {
            var Ques_ClassList = classList.split(",");
            var status = Ques_ClassList.includes(_this.selectedClass);
            return status;
          };
        }

        return _createClass(MethodologyComponent, [{
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            debugger;
            this.checkedAssessments = localStorage.getItem("checkedAssessments");
            this.teachertype = this.userSessionService.teacher_type();
            this.ionicStore.getStoreData().then(function (response) {
              debugger;
              _this3.storeDetail = response;
              _this3.storeDetail.pages.currentPage = "teachingMethodology";

              _this3.ionicStore.setStoreData(_this3.storeDetail);

              localStorage.setItem('storedDetails', JSON.stringify(_this3.storeDetail));
              console.log('storeDetailstoreDetail', _this3.storeDetail);
              _this3.classType = 3;
              _this3.selectedSubject = _this3.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
              _this3.selectedClass = _this3.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id.toString();
              _this3.classroomSelection_ClassList = _this3.storeDetail.pages.pageData[5].correctedDetails;
              _this3.classroomSelection_ClassList_Ids = _this3.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
              var classDetail = _this3.storeDetail.pages.pageData[5].pageDetails;

              if (_this3.storeDetail.pages.pageData[7] == undefined || _this3.storeDetail.pages.pageData[7] == null) {
                debugger;

                _this3.getMethodology(3, classDetail.selectedClass.class_id, _this3.classroomSelection_ClassList_Ids, _this3.classroomSelection_ClassList);
              } else {
                debugger;
                _this3.sectionList = _this3.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                _this3.methodologyQuestions = _this3.storeDetail.pages.pageData[7].correctedDetails.methodologyQuestions;
                _this3.selectedSection = _this3.storeDetail.pages.pageData[7].correctedDetails.selectedSection;
                _this3.headerClicked = _this3.storeDetail.pages.pageData[7].correctedDetails.headerClicked;
                _this3.currentIndex = _this3.storeDetail.pages.pageData[7].correctedDetails.currentIndex;
                var statusCheckArray = [];
                var statusCheck;

                for (var i = 0; i < _this3.sectionList.length; i++) {
                  var questionList = _this3.sectionList[i].questionList;
                  statusCheck = questionList.every(_this3.checkValid);

                  if (statusCheck == true) {
                    statusCheckArray.push(statusCheck);
                  }
                }

                if (statusCheckArray.length == _this3.sectionList.length) {
                  _this3.statusCheck = true;
                }

                console.log(_this3.sectionList, 'this.sectionList');
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this4 = this;

              var alertText1, alertText2;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    debugger;
                    this.appLanguage();
                    this.showAlert(this.observationNote1);
                    alertText1 = "You are expected not to ask or talk to the teacher till the end of the questions.";
                    alertText2 = "Please remain silent and observe the class and fill in the questions.";
                    this.progressValue = Math.round((5 - 2) / 15 * 100);
                    this.loading.present();
                    _context5.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
                        var _this5 = this;

                        return _regenerator().w(function (_context4) {
                          while (1) switch (_context4.n) {
                            case 0:
                              _context4.n = 1;
                              return response;

                            case 1:
                              this.masterApiResponse = _context4.v;
                              this.ionicStore.getStoreData().then(function (response) {
                                _this5.storeDetail = response;
                                _this5.storeDetail.pages.currentPage = "teachingMethodology";

                                _this5.ionicStore.setStoreData(_this5.storeDetail);

                                localStorage.setItem('storedDetails', JSON.stringify(_this5.storeDetail));
                                debugger;
                                _this5.classType = 3;
                                _this5.selectedSubject = _this5.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                                _this5.selectedClass = _this5.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id.toString();
                                _this5.classroomSelection_ClassList = _this5.storeDetail.pages.pageData[5].correctedDetails;
                                _this5.classroomSelection_ClassList_Ids = _this5.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
                                var classDetail = _this5.storeDetail.pages.pageData[5].pageDetails;

                                if (_this5.storeDetail.pages.pageData[7] == undefined || _this5.storeDetail.pages.pageData[7] == null) {
                                  _this5.getMethodology(3, classDetail.selectedClass.class_id, _this5.classroomSelection_ClassList_Ids, _this5.classroomSelection_ClassList);
                                } else {
                                  debugger;
                                  console.log(_this5.sectionList, 'this.sectionList');
                                  _this5.sectionList = _this5.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                                  _this5.methodologyQuestions = _this5.storeDetail.pages.pageData[7].correctedDetails.methodologyQuestions;
                                  _this5.selectedSection = _this5.storeDetail.pages.pageData[7].correctedDetails.selectedSection;
                                  _this5.headerClicked = _this5.storeDetail.pages.pageData[7].correctedDetails.headerClicked;
                                  _this5.currentIndex = _this5.storeDetail.pages.pageData[7].correctedDetails.currentIndex;
                                  var statusCheckArray = [];
                                  var statusCheck;

                                  _this5.loading.dismiss();

                                  for (var i = 0; i < _this5.sectionList.length; i++) {
                                    var questionList = _this5.sectionList[i].questionList;
                                    statusCheck = questionList.every(_this5.checkValid);

                                    if (statusCheck == true) {
                                      statusCheckArray.push(statusCheck);
                                    }
                                  }

                                  if (statusCheckArray.length == _this5.sectionList.length) {
                                    _this5.statusCheck = true;
                                  }
                                }

                                console.log(_this5.sectionList, 'this.sectionList');
                              });

                            case 2:
                              return _context4.a(2);
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 1:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var alertText1, alertText2, alert;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    alertText1 = this.observationNote1;
                    alertText2 = this.observationNote2;
                    _context6.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      backdropDismiss: false,
                      message: this.observationNote1 + "<br> " + " " + this.observationNote2,
                      buttons: [{
                        text: "ok",
                        handler: function handler() {}
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
          key: "appLanguage",
          value: function appLanguage() {
            var _this6 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this6.languageType = data;
              _this6.previouslanguage = data;

              _this6._translate.use(_this6.languageType);

              _this6._initialiseTranslation();

              if (_this6.storeDetail) {
                _this6.classroomSelection_ClassList = _this6.storeDetail.pages.pageData[5].correctedDetails;
                _this6.classroomSelection_ClassList_Ids = _this6.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
                var classDetail = _this6.storeDetail.pages.pageData[5].pageDetails; // this.getMethodology(
                //   3,
                //   classDetail.selectedClass.class_id,
                //   this.classroomSelection_ClassList_Ids,
                //   this.classroomSelection_ClassList
                // );
              }
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this7 = this;

            this._translate.get("classroom").subscribe(function (res) {
              _this7.classroom = res;
            });

            this._translate.get("Practices").subscribe(function (res) {
              _this7.Practices = res;
            });

            this._translate.get("teaching").subscribe(function (res) {
              _this7.teaching = res;
            });

            this._translate.get("methodology").subscribe(function (res) {
              _this7.methodology = res;
            });

            this._translate.get("fillAnswer").subscribe(function (res) {
              _this7.fillAnswer = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this7.next = res;
            });

            this._translate.get("observationNote1").subscribe(function (res) {
              _this7.observationNote1 = res;
            });

            this._translate.get("observationNote2").subscribe(function (res) {
              _this7.observationNote2 = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this7.Note = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this7.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this7.save = res;
            });
          }
        }, {
          key: "getMethodology",
          value: function getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
            var _this8 = this;

            var _a, _b, _c;

            debugger;
            var classDetail = {
              class_id: classId.toString(),
              classtype: 3
            };
            var tempsectionList = [];
            var tempQuestionList = [];
            this.ionicStore.getOffStorage().then(function (response) {
              _this8.loading.dismiss();

              _this8.masterApiResponse = response;
              console.log('masterApiResponsemasterApiResponse', _this8.masterApiResponse);
            });
            tempsectionList = (_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.methodologys;
            tempQuestionList = (_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.methodology_questions_lang; // if (this.languageType == "en") {      
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
            // } 
            // else if (this.languageType == "ta") {
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
            // } 
            // else {
            // }    

            var methodologyQuesList = [];
            tempQuestionList === null || tempQuestionList === void 0 ? void 0 : tempQuestionList.forEach(function (data) {
              var quesClassList = data["class"].split(",");
              var allSelectionClassList = classroomSelection_ClassList;
              var allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
              var status = quesClassList.includes(_this8.selectedClass);
              var isNon_SelectedPresent;

              if (allSelectionClassList_Ids.length && quesClassList.length) {
                isNon_SelectedPresent = quesClassList.includes(_this8.selectedClass);

                if (isNon_SelectedPresent.length > 0 || status) {
                  isNon_SelectedPresent = true;
                } else {
                  isNon_SelectedPresent = false;
                }
              } else {
                isNon_SelectedPresent = false;
              }

              if (isNon_SelectedPresent == true && (Number(data.classtype) == 1 || data.classtype == "3" || Number(data.classtype) == 2)) {
                if (data.sec_id == 8 || data.sec_id == 15) {
                  if (status) {
                    methodologyQuesList.push(data);
                  }
                } else if (data.sec_id == 3 || data.sec_id == 10) {
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
            debugger; // let a = JSON.parse(JSON.stringify(records?.methodology));    

            var a = records === null || records === void 0 ? void 0 : records.methodology;
            this.methodologyQuestions = records === null || records === void 0 ? void 0 : records.methodology_questions;
            (_c = this.methodologyQuestions) === null || _c === void 0 ? void 0 : _c.forEach(function (data) {
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
            console.log(this.sectionList, 'this.sectionList');
            debugger;
            this.sectionList = records === null || records === void 0 ? void 0 : records.methodology;

            if (this.checkedAssessments == 'Assessments') {
              this.sectionList = this.sectionList.filter(function (data) {
                return Number(data.sec_id) == 29;
              });
            } else {
              this.sectionList = this.sectionList.filter(function (data) {
                return Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) != 3 && Number(data.sec_id) != 10 && Number(data.sec_id) != 19 && Number(data.sec_id) != 20 && Number(data.sec_id) != 21 && Number(data.sec_id) != 22 && Number(data.sec_id) != 23 && Number(data.sec_id) != 24 && Number(data.sec_id) != 26 && Number(data.sec_id) != 27 && Number(data.sec_id) != 29 && Number(data.sec_id) != 30 && Number(data.sec_id) != 31 && Number(data.sec_id) != 32 && Number(data.sec_id) != 33;
              });
            }

            console.log(this.sectionList);
            this.sectionList.forEach(function (data, index) {
              _this8.question_no = 0;
              _this8.methodologyQuestions = _this8.methodologyQuestions.sort(function (a, b) {
                return Number(a.priority) > Number(b.priority) ? 1 : Number(b.priority) > Number(a.priority) ? -1 : 0;
              });
              console.log(_this8.methodologyQuestions, 'this.methodologyQuestions');

              var questions = _this8.methodologyQuestions.filter(function (data1, index1) {
                delete data1.score;

                if (data.sec_id == data1.sec_id && data1.parent_id == "-1") {
                  debugger;
                  var answer = data1;

                  if (data1.sec_id == "7" || data1.sec_id == "14" || Number(data1.sec_id) == 3 || Number(data1.sec_id) == 10 || Number(data1.sec_id) == 19 || Number(data1.sec_id) == 20 || Number(data1.sec_id) == 21 || Number(data1.sec_id) == 22 || Number(data1.sec_id) == 23 || Number(data1.sec_id) == 24) {
                    if (data1["class"].includes(classId)) {
                      if (data1.ans != null && data1.ans) {
                        if (data1.ans.ans) {} else {
                          answer.ans = data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                          answer.ans = JSON.parse(answer.ans);
                          answer.ans.ans.forEach(function (element) {
                            element["checked"] = false;
                          });
                        }
                      }

                      return answer;
                    }
                  } else {
                    if (data1.ans != null && data1.ans != '') {
                      if (Number(data1.type_of_ans) != 5 && Number(data1.type_of_ans) != 5) {
                        answer.ans = typeof data1.ans != "string" ? data1.ans : data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                        answer.ans = typeof answer.ans == "string" ? JSON.parse(answer.ans) : answer.ans;
                        answer.ans.ans.forEach(function (element) {
                          element["checked"] = false;
                        });
                      }
                    }

                    return answer;
                  }
                }
              });

              _this8.sectionList[index]["status"] = "inactive";
              _this8.sectionList[index]["questionList"] = questions;
              _this8.sectionList[index]["isAnswerd"] = false;
              _this8.sectionList[index]["count"] = 0;
            });
            console.log(this.sectionList);
            this.loading.dismiss();
            this.sectionList.forEach(function (data) {
              _this8.question_no = 0;
              var removedata = [];
              debugger;
              data.questionList.filter(function (question, index) {
                if (Number(question.subject_id) != 0) {
                  var subjects = question.subject_id.split(",").map(function (i) {
                    return Number(i);
                  });

                  if (subjects.includes(_this8.selectedSubject)) {
                    _this8.question_no = _this8.question_no + 1;
                    question.question_no = _this8.question_no;
                    return question;
                  } else {
                    removedata.push(index);
                  }
                } else if (Number(question.subject_id) == 0) {
                  _this8.question_no = _this8.question_no + 1;
                  question.question_no = _this8.question_no;
                  return question;
                }
              });

              for (var i = removedata.length - 1; i >= 0; i--) {
                data.questionList.splice(removedata[i], 1);
              }
            });
            this.sectionList = this.sectionList.filter(function (data) {
              if (data.questionList.length > 0) {
                data.questionList = data.questionList.sort(function (a, b) {
                  return Number(a.priority) > Number(b.priority) ? 1 : Number(b.priority) > Number(a.priority) ? -1 : 0;
                });
                return data;
              }
            });
            console.log(this.sectionList, 'this.sectionList');
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
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            this.headerClicked = true;
            this.currentIndex = 0;
            this.selectedSection = this.currentIndex;

            if (this.checkedAssessments == 'Assessments') {
              this.sectionList = this.sectionList.filter(function (data) {
                return Number(data.sec_id) == 29;
              });
            } else {
              this.sectionList = this.sectionList.filter(function (data) {
                return Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) != 3 && Number(data.sec_id) != 10 && Number(data.sec_id) != 19 && Number(data.sec_id) != 20 && Number(data.sec_id) != 21 && Number(data.sec_id) != 22 && Number(data.sec_id) != 23 && Number(data.sec_id) != 24 && Number(data.sec_id) != 26 && Number(data.sec_id) != 27 && Number(data.sec_id) != 29 && Number(data.sec_id) != 30 && Number(data.sec_id) != 31 && Number(data.sec_id) != 32 && Number(data.sec_id) != 33;
              });
            }

            this.sectionList[this.currentIndex].status = "active";
            this.sectionName = this.sectionList[this.currentIndex].sec_name;
            this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
            this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
            this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
            this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
          }
        }, {
          key: "toggleAccordion1",
          value: function toggleAccordion1(name, sectionIndex, index) {
            var _this9 = this;

            this.sectionName = name;
            this.selectedSection = sectionIndex;
            this.sectionList.forEach(function (data, currentindex) {
              if (currentindex == index) {
                _this9.sectionList[index]["status"] = "active";
                _this9.currentIndex = index;
                _this9.storeDetail.pages.pageData[7].correctedDetails.selectedSection = _this9.selectedSection;
                _this9.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this9.sectionList;
                _this9.storeDetail.pages.pageData[7].correctedDetails.headerClicked = _this9.headerClicked;
                _this9.storeDetail.pages.pageData[7].correctedDetails.currentIndex = _this9.currentIndex;

                _this9.ionicStore.setStoreData(_this9.storeDetail);

                localStorage.setItem('storedDetails', JSON.stringify(_this9.storeDetail));
              } else {
                _this9.sectionList[currentindex]["status"] = "inactive";
                _this9.storeDetail.pages.pageData[7].correctedDetails.selectedSection = _this9.selectedSection;
                _this9.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = _this9.sectionList;
                _this9.storeDetail.pages.pageData[7].correctedDetails.headerClicked = _this9.headerClicked;
                _this9.storeDetail.pages.pageData[7].correctedDetails.currentIndex = _this9.currentIndex;

                _this9.ionicStore.setStoreData(_this9.storeDetail);

                localStorage.setItem('storedDetails', JSON.stringify(_this9.storeDetail));
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var _this0 = this;

              var temp;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    temp = [];
                    _context9.n = 1;
                    return this.sectionList[this.selectedSection].questionList.forEach(function (question, questionIndex) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                        return _regenerator().w(function (_context7) {
                          while (1) switch (_context7.n) {
                            case 0:
                              if (!(question.parent_id == question_Id)) {
                                _context7.n = 1;
                                break;
                              }

                              debugger;
                              temp.splice(0, 0, questionIndex);
                              _context7.n = 1;
                              return this.removeSubQuestions(question.ob_qus_id, question.ob_qus_id);

                            case 1:
                              return _context7.a(2);
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 1:
                    temp.forEach(function (questionIndex, arrayIndex) {
                      _this0.sectionList[_this0.selectedSection].questionList.splice(questionIndex, 1);
                    });
                    _context9.n = 2;
                    return this.sectionList.forEach(function (section, index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
                        return _regenerator().w(function (_context8) {
                          while (1) switch (_context8.n) {
                            case 0:
                              if (section.questionList.length == 0) {
                                this.sectionList.splice(index);
                              }

                            case 1:
                              return _context8.a(2);
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 2:
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));

                  case 3:
                    return _context9.a(2);
                }
              }, _callee9, this);
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
            var _this1 = this;

            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "Class room observation L" + this.currentIndex,
              action_name: "next & back",
              data: "Next Section",
              completion_percentage: this.progressValue
            };
            this.apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this1._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this.pageDetail = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
            var questionList = this.pageDetail[this.selectedSection].questionList;
            var statusCheck = questionList.every(this.checkValid);

            if (statusCheck) {
              this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
              this.ionicStore.setStoreData(this.storeDetail);
              localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));

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
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
              } else {
                var level = localStorage.getItem("selectedlevel");

                if (Number(level) > 1) {
                  var _level = localStorage.getItem("selectedlevel");

                  var getfinaldata = localStorage.getItem("finaldata");
                  var getteacherlength = localStorage.getItem("teacherlength");

                  if (_level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "metho_section_status": localStorage.setItem("metho_section_status", "1")
                      }
                    });
                  } else if (_level == '1' && !getfinaldata) {
                    // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);    
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "metho_section_status": localStorage.setItem("metho_section_status", "1")
                      }
                    });
                  } else {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "metho_section_status": localStorage.setItem("metho_section_status", "1")
                      }
                    });
                  }
                } else {
                  if (this.storeDetail.pages.pageData[5].correctedDetails.class_id == '9' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '10' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '11' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '12') {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "metho_section_status": localStorage.setItem("metho_section_status", "1")
                      }
                    });
                  } else {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "metho_section_status": localStorage.setItem("metho_section_status", "1")
                      }
                    });
                  }
                }
              }
            } else {
              this._alertService.showAlert(this.fillAnswer);
            }
          }
        }, {
          key: "backIndex",
          value: function backIndex() {
            var _this10 = this;

            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "Class room observation L" + this.currentIndex,
              action_name: "next & back",
              data: "Back Section",
              completion_percentage: this.progressValue
            };
            this.apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this10._alertService.showAlert("SOMETHING WENT WRONG");
            });

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
                  this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                  this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                } else {
                  this.headerClicked = false;
                  this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
                  this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                  this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.currentProgress = this.progressValue;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                }
              }
            } else {
              var selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;

              if (this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd == true) {
                // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "metho_section_status": localStorage.setItem("metho_section_status", "1")}});  
                var value = Number(localStorage.getItem("metho_section_status"));

                if (value == 0) {
                  this._router.navigate(["/tnvntabs/page-route/index"], {
                    queryParams: {
                      "metho_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                    }
                  });
                } else {
                  this._router.navigate(["/tnvntabs/page-route/index"], {
                    queryParams: {
                      "metho_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                    }
                  });
                }
              } else {
                this._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    "metho_section_status": localStorage.setItem("metho_section_status", "0")
                  }
                });
              }
            }
          }
        }, {
          key: "getCount",
          value: function getCount(element, index, array) {
            var sum = 0;
            var answerType = element.type_of_ans;

            if (answerType == "1") {
              if (element.selectedAnswer.answer_id != undefined) {
                sum += 1;
              }

              if (element.selectedAnswer.answer.toLowerCase() == "other" || element.selectedAnswer.answer == "மற்றவை") {
                if (!element.selectedAnswer.otherAns || element.selectedAnswer.otherAns != "") {
                  sum += 1;
                }
              } else {
                if (element.selectedAnswer.answer != "") {
                  sum += 1;
                }
              }
            } else if (answerType == "2") {
              if (element.selectedAnswer.length > 0) {
                sum += 1;
              }

              var otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(element.selectedAnswer, function (sa) {
                return sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை";
              });

              if (otherFound) {
                if (!otherFound.otherAns || otherFound.otherAns != "") {
                  sum += 1;
                }
              }
            } else {
              if (element.selectedAnswer != "") {
                sum += 1;
              }
            }

            return sum;
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
                if (element.selectedAnswer.answer_id == "") {
                  status = false;
                }
              }
            } else if (answerType == "2") {
              if (!element.selectedAnswer.length) {
                status = false;
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

      _MethodologyComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
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
        }];
      };

      _MethodologyComponent.propDecorators = {
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
      _MethodologyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-methodology",
        template: _raw_loader_methodology_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_methodology_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MethodologyComponent);
      /***/
    },

    /***/
    55873:
    /*!**************************************************************!*\
      !*** ./src/app/pages/tnvn/methodology/methodology.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MethodologyModule": function MethodologyModule() {
          return (
            /* binding */
            _MethodologyModule
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


      var _methodology_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./methodology.component */
      28841);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _methodology_component__WEBPACK_IMPORTED_MODULE_0__.MethodologyComponent
      }];

      var _MethodologyModule = /*#__PURE__*/_createClass(function MethodologyModule() {
        _classCallCheck(this, MethodologyModule);
      });

      _MethodologyModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_methodology_component__WEBPACK_IMPORTED_MODULE_0__.MethodologyComponent]
      })], _MethodologyModule);
      /***/
    },

    /***/
    19026:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/tnvn/methodology/methodology.component.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n.list-md-lines-none .item {\n  --background: none ;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n  padding-left: 2px;\n}\n.inactive {\n  display: none;\n}\n.inScroll {\n  height: 0px;\n}\n.Scroll {\n  height: calc(100% - 80px) !important;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n  font-weight: 300px;\n  border-radius: 10px;\n  margin: 10px;\n  color: #000000;\n}\n.act {\n  font-size: 12px;\n  font-weight: 300px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #8B67B3;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: auto;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  color: #ffffff;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7QUFDQztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQUVDLHVEQUFBO0FBQ0E7RUFDRyx1QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFDUDtBQUdDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFJSTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGUDtBQU9DO0VBQ0UsbUJBQUE7QUFKSDtBQU9DOztvQkFBQTtBQUdBO0VBQ0csY0FBQTtFQUNBLGlCQUFBO0FBSko7QUFNQztFQUNHLGFBQUE7QUFISjtBQUtDO0VBQ0UsV0FBQTtBQUZIO0FBSUM7RUFDQyxvQ0FBQTtBQURGO0FBR0M7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFFQztFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRDtBQUNDO0VBQ0UsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSDtBQUNDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUNIO0FBRUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFHQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFESDtBQUlDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUZIO0FBS0M7RUFDRyxhQUFBO0FBRko7QUFLQzs7Ozs7RUFLRSxrQkFBQTtBQUZIO0FBS0E7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkg7QUFNQTtFQUNHLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhIIiwiZmlsZSI6Im1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMWVtIDAuMzVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsMjEwLDIxMCwxKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcblxyXG5zZWN0aW9ue1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIHNlY3Rpb24gaDJ7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LWZhbWlseTogQXJpYWw7XHJcbiB9XHJcblxyXG5cclxuIC8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXHJcbiAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gfVxyXG4gXHJcbiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiB9XHJcblxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSk7XHJcblxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuIC5saXN0LW1kLWxpbmVzLW5vbmUgLml0ZW17XHJcbiAgIC0tYmFja2dyb3VuZDogbm9uZVxyXG4gfVxyXG5cclxuIC8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xyXG4gLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gfVxyXG4gLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAuaW5TY3JvbGx7XHJcbiAgIGhlaWdodDogMHB4OyAgXHJcbiB9XHJcbiAuU2Nyb2xse1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDsgIFxyXG59XHJcbiAubWV0aG9kLWhlYWRlci1vbmV7XHJcbiAgIGJhY2tncm91bmQ6ICNCQjZCRDk7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuIH1cclxuIC5pbmFjdHtcclxuIGZvbnQtc2l6ZTogMTJweDsgXHJcbiBmb250LXdlaWdodDogMzAwcHg7XHJcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gbWFyZ2luOiAxMHB4O1xyXG4gY29sb3I6ICMwMDAwMDA7IFxyXG4gfVxyXG4gLmFjdHtcclxuICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgLy8gbWluLXdpZHRoOiA3MCU7ICAgXHJcbiAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI2N0IzOyAgIFxyXG4gICB9XHJcbiAubWV0aG9kLWhlYWRlci10d297XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNTZDQ0YyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdGhyZWV7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjRjI5OTRBO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZm91cntcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM3OTg1RjI7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWhlYWRlci1maXZle1xyXG5cclxuICAgYmFja2dyb3VuZDogIzRBRjJDMDtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtYm9keXtcclxuICAgIHBhZGRpbmc6MTJweDtcclxuIH1cclxuXHJcbiAuc2VjdGlvbi0xIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tMiBpb24taWNvbixcclxuIC5zZWN0aW9uLTMgaW9uLWljb24sXHJcbiAuc2VjdGlvbi00IGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNSBpb24taWNvbnsgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbn0gXHJcblxyXG4uaW9uLWNoZWNrLWltZy5hY3RpdmV7XHJcbiAgIHdpZHRoOiAxNXB4OyAgIFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgIHRvcDogYXV0bztcclxuICAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbmlvbi1pY29uICB7IFxyXG4gICB6LWluZGV4OiAyMjsgICBcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgIGZvbnQtc2l6ZTogMzBweDtcclxufSBcclxuIFxyXG5cclxuXHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    92241:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/methodology/methodology.component.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ this.teaching }}<br />{{ this.methodology }} <br /> </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\" scrollX=\"false\" scrollY=\"false\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>  \r\n\r\n  <div style=\"border:none;background-color:none\">\r\n      <ion-tabs >          \r\n        <ion-tab-bar style=\"background-color:#e6deed;overflow-x:scroll;border:none;justify-content: start;\" slot=\"bottom\" >             \r\n          <ion-tab-button [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inact': 'act'\" *ngFor=\"let methodology of sectionList; let i = index\"  (click)=\"this.headerClicked = true;toggleAccordion1(methodology?.sec_name,i,i)\" >  \r\n            <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology?.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='en'\">{{methodology?.sec_name}} ({{methodology?.count}}/{{methodology?.questionList.length}})</ion-label>  \r\n            <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology?.status == 'active'  &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='ta'\">{{methodology?.sec_name_tamil}} ({{methodology?.count}}/{{methodology?.questionList.length}})</ion-label>  \r\n            \r\n          </ion-tab-button>    \r\n                                                                              \r\n        </ion-tab-bar>  \r\n      </ion-tabs>   \r\n    </div>      \r\n   \r\n      <section      \r\n      *ngFor=\"let methodology of sectionList; let i = index\" [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inScroll': 'Scroll'\" style=\"overflow-y: scroll !important;background-color:#e6deed!important\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology?.questionList\">\r\n        <ng-container *ngIf=\"methodology?.questionList.length > 0\">                 \r\n        \r\n          <div\r\n            [ngClass]=\"methodology?.status\"            \r\n            class=\"method-body h-100\"\r\n            style=\"border:none;background:#e6deed\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology?.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>            \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_methodology_methodology_module_ts-es5.js.map