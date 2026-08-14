(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_hod-inspection_hodinpection_module_ts"], {
    /***/
    87694:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HodInspectionComponent": function HodInspectionComponent() {
          return (
            /* binding */
            _HodInspectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_hod_inspection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./hod-inspection.component.html */
      7992);
      /* harmony import */


      var _hod_inspection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hod-inspection.component.scss */
      86791);
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

      var _HodInspectionComponent = /*#__PURE__*/function () {
        /*-- Language Variables Ends --*/
        function HodInspectionComponent(_router, apiService, _translate, _alertService, ionicStore, loading, el) {
          var _this = this;

          _classCallCheck(this, HodInspectionComponent);

          this._router = _router;
          this.apiService = apiService;
          this._translate = _translate;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this.el = el;
          this.myDate = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay();
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.headerClicked = true;
          this.currentIndex = 0;
          this.question_no = 0;
          this.methodologyQuestions = [];
          this.sectionList = [];
          this.questionList = [];
          this.tempQuestions = [];
          this.finalAnswerdList = {};
          this.subQuestionNo = 0;
          /* subQuestion Number .....*/

          this.methodologyData = [];
          this.progressValue = 65;

          this.displayCounter = function (selectedAnswerDetail) {
            debugger;
            var answerDetail = selectedAnswerDetail;
            var currentSectionId = _this.sectionList[_this.selectedSection].sec_id;
            var answerdQuestion_SectionId = answerDetail.question.sec_id;

            if (currentSectionId == answerdQuestion_SectionId) {
              var answerType = answerDetail.question.type_of_ans;

              switch (answerType) {
                case "5":
                  {
                    _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                    break;
                  }

                case "6":
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
                        if (answerInfo == "noneoftheabove" || answerInfo == "none" || answerInfo.toLowerCase() == "no" || answerInfo == "இல்லை" || answerInfo == "எதுவுமில்லை" || answerInfo == "மேற்கூறியஎதுவும்இல்லை" || answerInfo.toLowerCase() == "other" || answerInfo == "மற்றவை") {
                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (element) {
                            element.checked = false;
                          });

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(_selectedAnswer);

                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        } else {
                          _this.sectionList[_this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach(function (ansData, index) {
                            var listanswer = ansData.ans.split(" ").join("").toLowerCase();

                            if (listanswer == "noneoftheabove" || listanswer == "none" || answerInfo.toLowerCase() == "no" || answerInfo == "இல்லை" || listanswer == "எதுவுமில்லை" || listanswer == "மேற்கூறியஎதுவும்இல்லை" || listanswer.toLowerCase() == "other" || listanswer == "மற்றவை") {
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

              _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this.sectionList;

              _this.ionicStore.setStoreData(_this.storeDetail);

              localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
              /*  Check Question type here ...*/

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

                    _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this.sectionList;

                    _this.ionicStore.setStoreData(_this.storeDetail);

                    localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
                  }

                  _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this.sectionList;

                  _this.ionicStore.setStoreData(_this.storeDetail);

                  localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
                }
              }

              if (answerDetail.answer.child_qus != undefined) {
                /*  Check Child is present or not for current Quesiton ....*/
                if (answerDetail.answer.child_qus.length > 0) {
                  /*  Check Question type here ...*/
                  if (answerDetail.question.type_of_ans != "2") {
                    _this.subQuestionNo = 0;
                    answerDetail.answer.child_qus.forEach(function (datad, childQuestion_Index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
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

            _this.pageDetail = _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
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
                if (questionList[i].selectedAnswer != "" && questionList[i].selectedAnswer != undefined) {
                  sum += 1;
                }
              }
            }

            if (sum) {
              _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[_this.selectedSection].count = sum;
            }

            var statusCheckData = questionList.every(_this.checkValid);

            if (statusCheckData) {
              _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[_this.selectedSection].isAnswerd = true;
            }

            var statusCheck;
            var sectionList = _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
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
                temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                temp_Questions.ans = JSON.parse(temp_Questions.ans);
              }

              if ((Number(_this.classType) == Number(temp_Questions.classtype) || temp_Questions.classtype == "3") && (_this.isClassPresent(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true || _this.isNonSelectedClass_present(temp_Questions["class"], _this.classroomSelection_ClassList_Ids) == true)) {
                _this.subQuestionNo++;
                /* subQuestion Number .....*/

                var questionNo = _this.subQuestionNo;
                temp_Questions["question_no"] = _this.sectionList[_this.selectedSection].questionList[questionIndex].question_no + "." + questionNo;

                _this.sectionList[_this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);

                _this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this.sectionList;

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

        return _createClass(HodInspectionComponent, [{
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this2 = this;

              var value;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.loading.present();
                    this.appLanguage();
                    value = localStorage.getItem("hod_inspect_section_status");

                    if (Number(value) == 0) {
                      this._alertService.showAlert(this.schoolInspectionNote);
                    }

                    _context4.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        var _this3 = this;

                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              this.masterApiResponse = response;

                              if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                                this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                              }

                              this.loading.dismiss();
                              _context3.n = 1;
                              return this.ionicStore.getStoreData().then(function (response) {
                                _this3.storeDetail = response;

                                if (_this3.storeDetail == null || _this3.storeDetail == undefined) {
                                  _this3.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                                }

                                _this3.storeDetail.pages.currentPage = "hodInspection";

                                _this3.ionicStore.setStoreData(_this3.storeDetail);

                                localStorage.setItem("storedDetails", JSON.stringify(_this3.storeDetail));
                                _this3.classType = _this3.storeDetail.pages.pageData[5].pageDetails.classType;

                                if (_this3.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                                  _this3.selectedSubject = _this3.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                                  _this3.selectedClass = _this3.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                                  _this3.classroomSelection_ClassList = _this3.storeDetail.pages.pageData[5].correctedDetails;
                                  _this3.classroomSelection_ClassList_Ids = _this3.storeDetail.pages.pageData[5].correctedDetails.class_id;
                                }

                                var classDetail = _this3.storeDetail.pages.pageData[5].pageDetails; // this.getMethodology(
                                //   classDetail.classType,            
                                //   this.classroomSelection_ClassList_Ids,
                                //   this.classroomSelection_ClassList
                                // );

                                /*  Check This Page is Registered or Not, If 'Registered' move to 'else' part...  */

                                if (_this3.storeDetail.pages.pageData[15] == undefined || _this3.storeDetail.pages.pageData[15] == null) {
                                  _this3.getMethodology(classDetail.classType, _this3.classroomSelection_ClassList_Ids, _this3.classroomSelection_ClassList);
                                } else {
                                  _this3.sectionList = _this3.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
                                  _this3.methodologyQuestions = _this3.storeDetail.pages.pageData[15].correctedDetails.methodologyQuestions;
                                  _this3.selectedSection = _this3.storeDetail.pages.pageData[15].correctedDetails.selectedSection;
                                  _this3.headerClicked = _this3.storeDetail.pages.pageData[15].correctedDetails.headerClicked;
                                  _this3.currentIndex = _this3.storeDetail.pages.pageData[15].correctedDetails.currentIndex;
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
                                }
                              });

                            case 1:
                              return _context3.a(2);
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this4 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this4.languageType = data;
              _this4.previouslanguage = data;

              _this4._translate.use(_this4.languageType);

              _this4._initialiseTranslation(); //this._alertService.showAlert(this.schoolInspectionNote)


              if (_this4.storeDetail) {
                _this4.classroomSelection_ClassList = _this4.storeDetail.pages.pageData[5].correctedDetails;
                _this4.classroomSelection_ClassList_Ids = _this4.storeDetail.pages.pageData[5].correctedDetails.class_id;
                var classDetail = _this4.storeDetail.pages.pageData[5].pageDetails; // this.getMethodology(
                //   classDetail.classType,          
                //   this.classroomSelection_ClassList_Ids,
                //   this.classroomSelection_ClassList
                // );
              }
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this5 = this;

            this._translate.get("classroom").subscribe(function (res) {
              _this5.classroom = res;
            });

            this._translate.get("Practices").subscribe(function (res) {
              _this5.Practices = res;
            });

            this._translate.get("teaching").subscribe(function (res) {
              _this5.teaching = res;
            });

            this._translate.get("schoolInspection").subscribe(function (res) {
              _this5.schoolInspection = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this5.school = res;
            });

            this._translate.get("schoolInspectionNote").subscribe(function (res) {
              _this5.schoolInspectionNote = res;
            });

            this._translate.get("methodology").subscribe(function (res) {
              _this5.methodology = res;
            });

            this._translate.get("fillAnswer").subscribe(function (res) {
              _this5.fillAnswer = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this5.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this5.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this5.save = res;
            });
          }
        }, {
          key: "getMethodology",
          value: function getMethodology(classType, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
            var _this6 = this;

            var classDetail = {
              classtype: classType
            };
            var tempsectionList = [];
            var tempQuestionList = []; // if (this.languageType == "en") {      
            //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
            //     if(data.lang == this.languageType&& Number(data.sec_id) == 19 || Number(data.sec_id) == 20 || Number(data.sec_id) == 21){
            //       return data
            //     }
            //   });
            //   let tempQuesEN;      
            //   tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
            //     if(data.lang == "en"){
            //       return data
            //     }
            //   });        
            // } else if (this.languageType == "ta") {
            //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
            //     if(data.lang == this.languageType&& Number(data.sec_id) == 22 || Number(data.sec_id) == 23 || Number(data.sec_id) == 24){
            //       return data
            //     }
            //   });
            // let tempQuesEN;    
            // tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
            //   if(data.lang == "ta"){
            //     return data
            //   }
            // });      
            // }        

            tempsectionList = this.masterApiResponse.methodologys.filter(function (data) {
              if (Number(data.sec_id) == 19 || Number(data.sec_id) == 20 || Number(data.sec_id) == 21) {
                return data;
              }
            });
            tempQuestionList = this.masterApiResponse.methodology_questions_lang;
            var methodologyQuesList = [];
            methodologyQuesList = tempQuestionList;
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
            this.sectionList.forEach(function (data, index) {
              _this6.question_no = 0;
              _this6.methodologyQuestions = _this6.methodologyQuestions.sort(function (a, b) {
                return Number(a.priority) > Number(b.priority) ? 1 : Number(b.priority) > Number(a.priority) ? -1 : 0;
              });

              var questions = _this6.methodologyQuestions.filter(function (data1, index1) {
                var _a;

                if (Number(data.sec_id) == Number(data1.sec_id) && data1.parent_id == "-1") {
                  delete data.score;
                  var answer = data1;

                  if (answer.ans) {
                    answer.ans = data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                    answer.ans = JSON.parse(answer.ans);
                    (_a = answer.ans) === null || _a === void 0 ? void 0 : _a.ans.forEach(function (element) {
                      element["checked"] = false;
                    });
                  }

                  _this6.question_no = _this6.question_no + 1;
                  answer.question_no = _this6.question_no;
                  return answer;
                }
              });

              if (_this6.storeDetail.pages.pageData[5].correctedDetails.class_id) {
                questions = questions.filter(function (data) {
                  return data["class"].includes(_this6.storeDetail.pages.pageData[5].correctedDetails.class_id);
                });
              }

              _this6.sectionList[index]["status"] = "inactive";
              _this6.sectionList[index]["questionList"] = questions;
              _this6.sectionList[index]["isAnswerd"] = false;
              _this6.sectionList[index]["count"] = 0;
            });
            var apiData = {
              pageNo: "16",
              pageName: "hodInspection",
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
            this.storeDetail.pages.pageData[15] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            this.headerClicked = true;
            this.currentIndex = 0;
            this.selectedSection = this.currentIndex;
            this.sectionList[this.currentIndex].status = "active";
            this.sectionName = this.sectionList[this.currentIndex].sec_name;
            this.sectionList.filter(function (data) {
              return Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) == 19 && Number(data.sec_id) == 20 && Number(data.sec_id) == 21;
            });
            this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
            this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
            this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
            this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
          }
          /*  Toggle section active or inactive .....*/

        }, {
          key: "toggleAccordion1",
          value: function toggleAccordion1(name, sectionIndex, index) {
            var _this7 = this;

            this.sectionName = name;
            this.selectedSection = sectionIndex;
            this.sectionList.forEach(function (data, currentindex) {
              if (currentindex == index) {
                _this7.sectionList[index]["status"] = "active";
                _this7.currentIndex = index;
                _this7.storeDetail.pages.pageData[15].correctedDetails.selectedSection = _this7.selectedSection;
                _this7.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this7.sectionList;
                _this7.storeDetail.pages.pageData[15].correctedDetails.headerClicked = _this7.headerClicked;
                _this7.storeDetail.pages.pageData[15].correctedDetails.currentIndex = _this7.currentIndex;

                _this7.ionicStore.setStoreData(_this7.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this7.storeDetail));
              } else {
                _this7.sectionList[currentindex]["status"] = "inactive";
                _this7.storeDetail.pages.pageData[15].correctedDetails.selectedSection = _this7.selectedSection;
                _this7.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = _this7.sectionList;
                _this7.storeDetail.pages.pageData[15].correctedDetails.headerClicked = _this7.headerClicked;
                _this7.storeDetail.pages.pageData[15].correctedDetails.currentIndex = _this7.currentIndex;

                _this7.ionicStore.setStoreData(_this7.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this7.storeDetail));
              }
            });
          }
        }, {
          key: "broadcastName",
          value: function broadcastName(name) {
            this.change.emit(name);
          }
          /*  Removing SubQuestions here...... */

        }, {
          key: "removeSubQuestions",
          value: function removeSubQuestions(question_RefId, question_Id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this8 = this;

              var temp;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    temp = [];
                    _context7.n = 1;
                    return this.sectionList[this.selectedSection].questionList.forEach(function (question, questionIndex) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                        return _regenerator().w(function (_context5) {
                          while (1) switch (_context5.n) {
                            case 0:
                              if (!(question.parent_id == question_Id)) {
                                _context5.n = 1;
                                break;
                              }

                              temp.splice(0, 0, questionIndex);
                              _context5.n = 1;
                              return this.removeSubQuestions(question.ob_qus_id, question.ob_qus_id);

                            case 1:
                              return _context5.a(2);
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 1:
                    temp.forEach(function (questionIndex, arrayIndex) {
                      _this8.sectionList[_this8.selectedSection].questionList.splice(questionIndex, 1);
                    });
                    _context7.n = 2;
                    return this.sectionList.forEach(function (section, index) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                        return _regenerator().w(function (_context6) {
                          while (1) switch (_context6.n) {
                            case 0:
                              if (section.questionList.length == 0) {
                                this.sectionList.splice(index);
                              }

                            case 1:
                              return _context6.a(2);
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 2:
                    this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                  case 3:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "isNonSelectedClass_present",
          value: function isNonSelectedClass_present(classList, classroomSelection_ClassList_Ids) {
            if (this.selectedClass) {
              var Ques_ClassList = classList.split(","); // let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
              // let getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass);
              // if (getIndex != -1) allSelectionClassList_Ids.splice(getIndex, 1);
              // let isNon_SelectedPresent;
              // if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
              //   isNon_SelectedPresent = allSelectionClassList_Ids.includes(
              //     Ques_ClassList[0]
              //   );
              // } else {
              //   isNon_SelectedPresent = false;
              // }

              var allSelectionClassList_Ids = classroomSelection_ClassList_Ids.toString();
              var getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass.toString()); // if (getIndex != -1) allSelectionClassList_Ids.splice(getIndex, 1);

              var isNon_SelectedPresent;

              if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
                isNon_SelectedPresent = allSelectionClassList_Ids.includes(Ques_ClassList[0]);
              } else {
                isNon_SelectedPresent = false;
              }

              return isNon_SelectedPresent;
            }

            return true;
          }
          /* Move to Next Section or Page ....*/

        }, {
          key: "moveIndex",
          value: function moveIndex() {
            var _this9 = this;

            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "School room observation L" + this.currentIndex,
              action_name: "next",
              data: "Moving to next section",
              completion_percentage: this.progressValue
            };
            this.apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this9._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this.pageDetail = this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
            var questionList = this.pageDetail[this.selectedSection].questionList;
            var statusCheck = questionList.every(this.checkValid);

            if (statusCheck) {
              this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
              this.ionicStore.setStoreData(this.storeDetail);
              localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

              if (this.currentIndex <= this.sectionList.length - 2) {
                this.sectionList[this.currentIndex].status = "inactive";
                this.currentIndex = this.currentIndex + 1;
                this.sectionList[this.currentIndex].status = "active";
                this.selectedSection = this.currentIndex;
                this.sectionName = this.sectionList[this.currentIndex].sec_name;
                this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
              } else {
                var level = localStorage.getItem("selectedlevel");

                if (Number(level) > 1) {
                  var _level = localStorage.getItem("selectedlevel");

                  var getfinaldata = localStorage.getItem("finaldata");
                  var getteacherlength = localStorage.getItem("teacherlength");

                  if (_level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                    if (this.storeDetail.pages.pageData[2]) {
                      if (this.storeDetail.pages.pageData[2].correctedDetails) {
                        // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      }
                    } else {
                      // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                      this.ionicStore.setStoreData(this.storeDetail);
                      localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  } else if (_level == '1' && !getfinaldata) {
                    if (this.storeDetail.pages.pageData[2]) {
                      if (this.storeDetail.pages.pageData[2].correctedDetails) {
                        // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      }
                    } else {
                      // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                      this.ionicStore.setStoreData(this.storeDetail);
                      localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  } else {
                    // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                      }
                    });
                  }
                } else {
                  if (this.storeDetail.pages.pageData[5].correctedDetails.class_id == '9' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '10' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '11' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '12') {
                    if (this.storeDetail.pages.pageData[2]) {
                      if (this.storeDetail.pages.pageData[2].correctedDetails) {
                        // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);   
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      }
                    } else {
                      // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);  
                      this.ionicStore.setStoreData(this.storeDetail);
                      localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  } else {
                    if (this.storeDetail.pages.pageData[2]) {
                      if (this.storeDetail.pages.pageData[2].correctedDetails) {
                        // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                          }
                        });
                      }
                    } else {
                      // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);  
                      this.ionicStore.setStoreData(this.storeDetail);
                      localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  }
                }
              }
            } else {
              var value = localStorage.getItem("hod_inspect_section_status");

              if (Number(value) == 0) {
                this._alertService.showAlert(this.fillAnswer);
              }
            }
          }
          /* Move to Previous Section or Page ....*/

        }, {
          key: "backIndex",
          value: function backIndex() {
            var _this0 = this;

            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "School room observation L" + this.currentIndex,
              action_name: "back",
              data: "Moving to back section",
              completion_percentage: this.progressValue
            };
            this.apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this0._alertService.showAlert("SOMETHING WENT WRONG");
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
                  this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                  this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                } else {
                  this.headerClicked = false;
                  this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
                  this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                  this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                  this.storeDetail.pages.currentProgress = this.progressValue;
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
              }
            } else {
              var selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;

              if (selectedClass.length == 1) {
                var level = localStorage.getItem("selectedlevel");
                var isRegularTeacher = this.storeDetail.pages.pageData[4].correctedDetails.regularTeacher;

                if (Number(level) > 1) {
                  // this._router.navigate(["/tnvntabs/page-route/classroom"]);
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                  var value = Number(localStorage.getItem("hod_inspect_section_status"));

                  if (value == 0) {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                      }
                    });
                  } else {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                      }
                    });
                  }
                } else {
                  if (this.storeDetail.pages.pageData[2] != null) {
                    // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    var _value = Number(localStorage.getItem("hod_inspect_section_status"));

                    if (_value == 0) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  } else {
                    // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);   
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    var _value2 = Number(localStorage.getItem("hod_inspect_section_status"));

                    if (_value2 == 0) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  }
                }
              } else {
                if (this.selectedClass) {
                  if (Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) < 3 || Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) > 8) {
                    // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    var _value3 = Number(localStorage.getItem("hod_inspect_section_status"));

                    if (_value3 == 0) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  } else {
                    // this._router.navigate(["/tnvntabs/page-route/observation"]);
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    var _value4 = Number(localStorage.getItem("hod_inspect_section_status"));

                    if (_value4 == 0) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                        }
                      });
                    }
                  }
                } else {
                  // this._router.navigate(["/tnvntabs/page-route/dashboardc"]); 
                  this.ionicStore.setStoreData(this.storeDetail);
                  localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                  var _value5 = Number(localStorage.getItem("hod_inspect_section_status"));

                  if (_value5 == 0) {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0")
                      }
                    });
                  } else {
                    this._router.navigate(["/tnvntabs/page-route/index"], {
                      queryParams: {
                        "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1")
                      }
                    });
                  }
                }
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
                if (element.selectedAnswer.answer == "" && element.selectedAnswer.answer_id == "") {
                  status = false;
                }
              }
            } else if (answerType == "2") {
              if (!element.selectedAnswer.length) {
                status = false;
              }
            } else {
              if (element.selectedAnswer == "" && element.selectedAnswer != 0) {
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

      _HodInspectionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
        }];
      };

      _HodInspectionComponent.propDecorators = {
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
      _HodInspectionComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-hod-inspection",
        template: _raw_loader_hod_inspection_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hod_inspection_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HodInspectionComponent);
      /***/
    },

    /***/
    5184:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/hod-inspection/hodinpection.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HodInspectionModule": function HodInspectionModule() {
          return (
            /* binding */
            _HodInspectionModule
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


      var _hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hod-inspection.component */
      87694);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__.HodInspectionComponent
      }];

      var _HodInspectionModule = /*#__PURE__*/_createClass(function HodInspectionModule() {
        _classCallCheck(this, HodInspectionModule);
      });

      _HodInspectionModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__.HodInspectionComponent]
      })], _HodInspectionModule);
      /***/
    },

    /***/
    86791:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n.inScroll {\n  height: 0px;\n}\n.Scroll {\n  height: calc(100% - 110px) !important;\n}\n.inact {\n  font-size: 12px;\n  font-weight: 300px;\n  border-radius: 10px;\n  margin: 10px;\n  color: #000000;\n}\n.act {\n  font-size: 12px;\n  font-weight: 300px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #8B67B3;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZC1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFDQztFQUNFLFdBQUE7QUFFSDtBQUFDO0VBQ0UscUNBQUE7QUFHSDtBQURDO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlIO0FBRkc7RUFDRSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlMO0FBRkE7RUFDRyxrQkFBQTtBQUtIO0FBSEM7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTUg7QUFGQyx1REFBQTtBQUNBO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FBS0o7QUFISTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FBS1A7QUFBQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUNDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQ0k7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1A7QUFJQzs7b0JBQUE7QUFHQTtFQUNHLGNBQUE7QUFESjtBQUdDO0VBQ0csYUFBQTtBQUFKO0FBRUM7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFDQztFQUNBLGVBQUE7QUFFRDtBQUFDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUVIO0FBQ0M7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSDtBQUdDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQURIO0FBSUM7RUFDRyxhQUFBO0FBREo7QUFJQzs7Ozs7RUFLRSxrQkFBQTtBQURIO0FBSUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQURIO0FBS0E7RUFDRyxXQUFBO0VBQ0EsUUFBQTtBQUZIIiwiZmlsZSI6ImhvZC1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMWVtIDAuMzVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsMjEwLDIxMCwxKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcbiAuaW5TY3JvbGx7XHJcbiAgIGhlaWdodDogMHB4OyAgXHJcbiB9XHJcbiAuU2Nyb2xse1xyXG4gICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KSAhaW1wb3J0YW50OyBcclxufVxyXG4gLmluYWN0e1xyXG4gICBmb250LXNpemU6IDEycHg7IFxyXG4gICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIG1hcmdpbjogMTBweDtcclxuICAgY29sb3I6ICMwMDAwMDA7IFxyXG4gICB9XHJcbiAgIC5hY3R7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAvLyBtaW4td2lkdGg6IDcwJTsgICBcclxuICAgICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMzsgICBcclxuICAgICB9XHJcbnNlY3Rpb257XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gc2VjdGlvbiBoMntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuIH1cclxuXHJcblxyXG4gLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cclxuIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuIH1cclxuXHJcblxyXG4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcclxuXHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG4gLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLW9uZXtcclxuICAgYmFja2dyb3VuZDogI0JCNkJEOTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG4gfVxyXG4gLmluYWN0e1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdHdve1xyXG5cclxuICAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLXRocmVle1xyXG5cclxuICAgYmFja2dyb3VuZDogI0YyOTk0QTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNzk4NUYyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZml2ZXtcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM0QUYyQzA7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tMSBpb24taWNvbixcclxuIC5zZWN0aW9uLTIgaW9uLWljb24sXHJcbiAuc2VjdGlvbi0zIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNCBpb24taWNvbixcclxuIC5zZWN0aW9uLTUgaW9uLWljb257IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG5cclxuLmlvbi1jaGVjay1pbWcuYWN0aXZle1xyXG4gICB3aWR0aDogMTVweDtcclxuICAgaGVpZ2h0OiAxNXB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdG9wOiA0cHg7XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbiAgeyBcclxuICAgei1pbmRleDogMjI7XHJcbiAgIHRvcDogNHB4O1xyXG5cclxufSBcclxuICJdfQ== */";
      /***/
    },

    /***/
    7992:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{schoolInspection}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\" scrollX=\"false\" scrollY=\"false\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n    <ion-text color=\"dark\" class=\"text-italic\">\r\n      <p class=\"fs-12 p-2\" style=\"background-color:#e6deed !important;margin-bottom:0px\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.schoolInspectionNote}}</span>.</p>         \r\n      </ion-text>  \r\n      <div style=\"border:none\">\r\n        <ion-tabs >          \r\n          <ion-tab-bar style=\"background-color:#e6deed;overflow-x:scroll;border:none\" slot=\"bottom\" >             \r\n            <ion-tab-button [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inact': 'act'\" *ngFor=\"let methodology of sectionList; let i = index\"  (click)=\"this.headerClicked = true;toggleAccordion1(methodology.sec_name,i,i)\" >  \r\n              <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='en'\">{{methodology.sec_name}} ({{methodology.count}}/{{methodology.questionList.length}})</ion-label>  \r\n              <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='ta'\" style=\"font-size: 9px !important;\">{{methodology.sec_name_tamil}} ({{methodology.count}}/{{methodology.questionList.length}})</ion-label>  \r\n            </ion-tab-button>    \r\n                                                                                \r\n          </ion-tab-bar>  \r\n        </ion-tabs>   \r\n      </div>           \r\n      <section      \r\n      *ngFor=\"let methodology of sectionList; let i = index\" [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inScroll': 'Scroll'\" style=\"overflow-y: scroll !important;background-color:#e6deed\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">                 \r\n        \r\n          <div\r\n            [ngClass]=\"methodology.status\"            \r\n            class=\"method-body h-100\"\r\n            style=\"border:none;background:#e6deed\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>            \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_assessment_hod-inspection_hodinpection_module_ts-es5.js.map