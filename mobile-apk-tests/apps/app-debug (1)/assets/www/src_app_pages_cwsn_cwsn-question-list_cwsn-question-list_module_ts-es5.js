(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-question-list_cwsn-question-list_module_ts"], {
    /***/
    71168:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-question-list/cwsn-question-list-routing.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnQuestionListPageRoutingModule": function CwsnQuestionListPageRoutingModule() {
          return (
            /* binding */
            _CwsnQuestionListPageRoutingModule
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


      var _cwsn_question_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-question-list.page */
      28392);

      var routes = [{
        path: '',
        component: _cwsn_question_list_page__WEBPACK_IMPORTED_MODULE_0__.CwsnQuestionListPage
      }];

      var _CwsnQuestionListPageRoutingModule = /*#__PURE__*/_createClass(function CwsnQuestionListPageRoutingModule() {
        _classCallCheck(this, CwsnQuestionListPageRoutingModule);
      });

      _CwsnQuestionListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CwsnQuestionListPageRoutingModule);
      /***/
    },

    /***/
    81751:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-question-list/cwsn-question-list.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnQuestionListPageModule": function CwsnQuestionListPageModule() {
          return (
            /* binding */
            _CwsnQuestionListPageModule
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


      var _cwsn_question_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-question-list-routing.module */
      71168);
      /* harmony import */


      var _cwsn_question_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-question-list.page */
      28392);

      var _CwsnQuestionListPageModule = /*#__PURE__*/_createClass(function CwsnQuestionListPageModule() {
        _classCallCheck(this, CwsnQuestionListPageModule);
      });

      _CwsnQuestionListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cwsn_question_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnQuestionListPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_cwsn_question_list_page__WEBPACK_IMPORTED_MODULE_1__.CwsnQuestionListPage]
      })], _CwsnQuestionListPageModule);
      /***/
    },

    /***/
    28392:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-question-list/cwsn-question-list.page.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnQuestionListPage": function CwsnQuestionListPage() {
          return (
            /* binding */
            _CwsnQuestionListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cwsn_question_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cwsn-question-list.page.html */
      54295);
      /* harmony import */


      var _cwsn_question_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-question-list.page.scss */
      80315);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var _CwsnQuestionListPage = /*#__PURE__*/function () {
        function CwsnQuestionListPage(router, alertService, fb, userSessionService, route, cWSNService, _translate, apiService) {
          _classCallCheck(this, CwsnQuestionListPage);

          this.router = router;
          this.alertService = alertService;
          this.fb = fb;
          this.userSessionService = userSessionService;
          this.route = route;
          this.cWSNService = cWSNService;
          this._translate = _translate;
          this.apiService = apiService;
        }

        return _createClass(CwsnQuestionListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onInForm();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.routeData = this.route.snapshot;
            this.school_name = this.routeData.queryParams.school_name;
            this.school_id = this.routeData.queryParams.school_id;
            this.class_id = this.routeData.queryParams.class_id;
            this.section_id = this.routeData.queryParams.section_id; // this.schoolList = this.routeData.queryParams.school_list;

            this.route.queryParams.subscribe(function (params) {
              _this.schoolList = JSON.parse(params['school_list']);
            });

            this._translate.get("postObservation").subscribe(function (res) {
              _this.postObservation = res;
            });

            this._translate.get("questions").subscribe(function (res) {
              _this.questions = res;
            });

            this.apiService.languageInfo.subscribe(function (data) {
              _this.languageType = data;
            });
            console.log(this.languageType, "this.languageType");
            this.activesave = true; // this.getdata()

            this.getquestiondata();
          }
        }, {
          key: "getquestiondata",
          value: function getquestiondata() {
            var _this2 = this;

            fetch('https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_ques_master.json').then(function (res) {
              return res.json();
            }).then(function (manage) {
              if (manage) {
                var _final = manage.cwsn_ques_mas; // console.log(manage.cwsn_ques_mas, "manage");
                // this.questionJson(manage.cwsn_ques_mas)

                _this2.filteredData = Array.from(new Set(manage.cwsn_ques_mas.map(function (item) {
                  return item.section_name;
                }))).map(function (section_name) {
                  return manage.cwsn_ques_mas.find(function (item) {
                    return item.section_name === section_name;
                  });
                });
                console.log(_this2.filteredData, "filteredData");

                if (manage.cwsn_ques_mas) {
                  _this2.finalValue = [];

                  for (var i = 0; i < _final.length; i++) {
                    var parsedObject1 = _final[i].class_applicable;
                    var samp = parsedObject1.split(",");

                    for (var j = 0; j < samp.length; j++) {
                      if (samp[j] == _this2.class_id) {
                        _this2.finalValue.push(_final[i]);
                      }
                    }
                  }

                  if (_this2.finalValue) {
                    if (_this2.schoolList) {
                      _this2.allowquestion = false;
                      _this2.visualImpairment = 0;

                      for (var _i = 0; _i < _this2.schoolList.length; _i++) {
                        if (_this2.schoolList[_i].differently_abled == 2 || _this2.schoolList[_i].differently_abled == 5 || _this2.schoolList[_i].differently_abled == 8) {
                          _this2.allowquestion = true;

                          if (_this2.schoolList[_i].differently_abled == 2) {
                            _this2.visualImpairment = 1;
                          }
                        }
                      }

                      _this2.finaldata = [];

                      for (var _i2 = 0; _i2 < _this2.finalValue.length; _i2++) {
                        if (!_this2.allowquestion && _this2.finalValue[_i2].id != 28 && _this2.finalValue[_i2].id != 30 && _this2.finalValue[_i2].id != 32) {
                          _this2.finaldata.push(_this2.finalValue[_i2]);
                        }
                      }

                      if (_this2.allowquestion) {
                        _this2.finaldata = _this2.finalValue;
                      }

                      if (_this2.finaldata) {
                        _this2.questionJson(_this2.finaldata);
                      }

                      console.log(_this2.finalValue, "this.finalValue");
                    } // this.questionJson(this.finalValue)

                  }
                }
              }
            });
          }
        }, {
          key: "onInForm",
          value: function onInForm() {
            this.formGroupList = this.fb.group({
              general_question: this.fb.array([])
            });
          }
        }, {
          key: "questionJson",
          value: function questionJson(item) {
            var _this3 = this;

            console.log(item, "item data");
            var control = this.formGroupList.controls['general_question'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = this.formGroupList.controls.general_question;

            if (item.length > 0) {
              for (var _i3 = 0; _i3 < item.length; _i3++) {
                // let qid;
                // if(item[i].sub_quest_id == 0){
                //   if(item[i - 1].sub_quest_id != 0) {
                //     qid = i
                //   } else {
                //     qid = i + 1
                //   }
                // } else {
                //  qid = (i) + 'A'
                // }
                this.queslist.push(this.fb.group({
                  qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(_i3 + 1),
                  qidsubid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                  indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                  id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].id),
                  sub_quest_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].sub_quest_id),
                  section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].section_id),
                  section_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].section_name),
                  question_tamil_version: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].question_tamil_version),
                  question_english_version: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].question_english_version),
                  mark: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].mark),
                  score: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].score),
                  class_applicable: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].class_applicable),
                  disability: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[_i3].disability),
                  response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                  response1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
                }));

                if (item[_i3].sub_quest_id != 0) {
                  this.formGroupList.controls['general_question']['controls'][_i3].controls['response'].setValidators(null);

                  this.formGroupList.controls['general_question']['controls'][_i3].controls['response'].updateValueAndValidity();
                }
              }

              setTimeout(function () {
                _this3.getdata();
              }, 2000);
            }

            console.log(this.formGroupList, "this.formGroupList");
          }
        }, {
          key: "onselect",
          value: function onselect(item, i, id) {
            console.log(item.detail.value, i);
            var sub_quest_id = this.formGroupList.controls['general_question']['controls'][i + 1].controls['sub_quest_id'];

            if (item.detail.value == 1 && sub_quest_id.value != 0 && sub_quest_id.value == id) {
              this.formGroupList.controls['general_question']['controls'][i + 1].controls['response'].setValue('1');
              this.formGroupList.controls['general_question']['controls'][i + 1].controls['response1'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
              this.formGroupList.controls['general_question']['controls'][i + 1].controls['response'].updateValueAndValidity();
              this.formGroupList.controls['general_question']['controls'][i + 1].controls['response1'].updateValueAndValidity();
            } else {
              if (sub_quest_id.value == id) {
                this.formGroupList.controls['general_question']['controls'][i + 1].controls['response'].setValue('');
                this.formGroupList.controls['general_question']['controls'][i + 1].controls['response1'].setValidators(null);
                this.formGroupList.controls['general_question']['controls'][i + 1].controls['response'].updateValueAndValidity();
                this.formGroupList.controls['general_question']['controls'][i + 1].controls['response1'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
            console.log(this.currentDate, "this.currentDate");

            if (this.formGroupList.valid) {
              var data = [];

              for (var i = 0; i < this.formGroupList.controls.general_question.value.length; i++) {
                data.push({
                  "id": this.formGroupList.controls.general_question.value[i].indexid,
                  "screening_date": this.currentDate,
                  "school_id": this.school_id,
                  "class": this.class_id,
                  "section": this.section_id,
                  "question_id": this.formGroupList.controls.general_question.value[i].id,
                  "response1": this.formGroupList.controls.general_question.value[i].response,
                  "response2_date": this.formGroupList.controls.general_question.value[i].response1
                });
              }

              console.log("valid", data);
              var alldata = {
                "records": data
              };
              console.log(alldata, "alldata");
              this.cWSNService.CWSNResponseStore(alldata).subscribe(function (res) {
                _this4.alertService.success('Saved Successfully');

                _this4.goBack();
              });
            } else {
              console.log("invalid");
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/cwsn-school-list']);
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this5 = this;

            this.activesave = true;
            var data = {
              "SchlID": this.school_id,
              "classId": this.class_id,
              "sectionId": this.section_id
            };
            this.getdatalist = [];
            this.cWSNService.CWSNgetQues(data).subscribe(function (res) {
              console.log(res, "res");

              if (res.dataStatus) {
                _this5.getdatalist = res.result;

                if (res.result.length != 0) {
                  _this5.activesave = false;
                }

                if (_this5.getdatalist != undefined && _this5.getdatalist.length != 0) {
                  _this5.questionJson1(_this5.getdatalist);
                }
              }
            });
          }
        }, {
          key: "questionJson1",
          value: function questionJson1(item) {
            for (var i = 0; i < item.length; i++) {
              var ans = void 0;

              if (item[i].response1 == "yes") {
                ans = "1";
              } else {
                ans = "2";
              } // item[i].id == "yes" ? 1 : 2;


              this.formGroupList.controls['general_question']['controls'][i].controls['indexid'].setValue(item[i].id);
              this.formGroupList.controls['general_question']['controls'][i].controls['indexid'].updateValueAndValidity();
              this.formGroupList.controls['general_question']['controls'][i].controls['response'].setValue(ans);
              this.formGroupList.controls['general_question']['controls'][i].controls['response'].updateValueAndValidity();
              this.formGroupList.controls['general_question']['controls'][i].controls['response1'].setValue(item[i].response2_date);
              this.formGroupList.controls['general_question']['controls'][i].controls['response1'].updateValueAndValidity();
            }

            console.log(item, "item data");
          }
        }]);
      }();

      _CwsnQuestionListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }];
      };

      _CwsnQuestionListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-cwsn-question-list',
        template: _raw_loader_cwsn_question_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cwsn_question_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CwsnQuestionListPage);
      /***/
    },

    /***/
    80315:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-question-list/cwsn-question-list.page.scss ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\nion-input {\n  background-color: white;\n  padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tcXVlc3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURFO0VBQ0UsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUtKOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBTUoiLCJmaWxlIjoiY3dzbi1xdWVzdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4XHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHBhZGRpbmctdG9wOjBweFxyXG4gIH1cclxuICAucmFkaW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweFxyXG4gIH1cclxuICAuYnQtMTAge1xyXG4gICAgcGFkZGluZy1ib3R0b206MTBwXHJcbiAgfVxyXG4gIC5sYmwge1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    54295:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cwsn-question-list/cwsn-question-list.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"title\">\r\n        <div class=\"page-title\">Screening Questions</div>\r\n        <div class=\"stuName\">{{ school_name }}</div>\r\n      </div>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n       </ion-icon>\r\n   </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-card class=\"card-align ion-card-margin\"> -->\r\n  <div class=\"staffList_Content bg_lightBlue mt-3\">\r\n    <div class=\"container\">\r\n      <form [formGroup]=\"formGroupList\" class=\"form-horizontal\"\r\n        style=\"margin: 2%;background-color: aliceblue;padding: 2%;\">\r\n        <div formArrayName=\"general_question\">\r\n          <div *ngFor=\"let data of filteredData\">\r\n              <ion-card *ngIf=\"data.section_name\" style=\"padding: 3%;text-align: center;background-color: cadetblue;color: white;\">\r\n                {{data.section_name}}\r\n              </ion-card>\r\n\r\n            <div *ngFor=\"let item of formGroupList.get('general_question')['controls']; let i = index;\"\r\n              [formGroupName]=\"i\">\r\n              <ion-col size=\"12\" class=\"text-aln\"\r\n                *ngIf=\"item.value.sub_quest_id == 0 && data.section_name == item.value.section_name\">\r\n                <ion-label class=\"ques-txt\" *ngIf=\"this.languageType == 'en'\">\r\n                  {{item.value.qid}} . {{item.value.question_english_version}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-label class=\"ques-txt\" *ngIf=\"this.languageType != 'en'\">\r\n                  {{item.value.qid}} . {{item.value.question_tamil_version}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-list class=\"list\">\r\n                  <ion-radio-group formControlName=\"response\" (ionChange)=\"onselect($event,i,item.value.id)\">\r\n                    <ion-item lines=\"none\">\r\n                      <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['response'].hasError('required')) && (item.controls['response'].dirty || item.controls['response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\"\r\n                *ngIf=\"item.value.sub_quest_id != 0 && item.value.response == 1 && data.section_name == item.value.section_name\">\r\n                <ion-label class=\"ques-txt\" *ngIf=\"this.languageType == 'en'\">\r\n                  {{item.value.qid}} . {{item.value.question_english_version}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-label class=\"ques-txt\" *ngIf=\"this.languageType != 'en'\">\r\n                  {{item.value.qid}} . {{item.value.question_tamil_version}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"date\" placeholder=\"Please Enter Your Answer\" formControlName=\"response1\"\r\n                  class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['response'].hasError('required')) && (item.controls['response1'].dirty || item.controls['response1'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-card> -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"activesave\" class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_cwsn-question-list_cwsn-question-list_module_ts-es5.js.map