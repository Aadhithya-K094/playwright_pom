(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_student-list_student-list_module_ts"], {
    /***/
    6256:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-list/student-list.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPageModule": function StudentListPageModule() {
          return (
            /* binding */
            _StudentListPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-list.page */
      29062);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var routes = [{
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage
      }];

      var _StudentListPageModule = /*#__PURE__*/_createClass(function StudentListPageModule() {
        _classCallCheck(this, StudentListPageModule);
      });

      _StudentListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage]
      })], _StudentListPageModule);
      /***/
    },

    /***/
    29062:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-list/student-list.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPage": function StudentListPage() {
          return (
            /* binding */
            _StudentListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-list.page.html */
      37860);
      /* harmony import */


      var _student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-list.page.scss */
      37437);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      var _StudentListPage = /*#__PURE__*/function () {
        function StudentListPage(api, fb, activateRoute, modalCtrl, navCtrl, toastService, ionicStorageService, ionicStorage, authService, platform) {
          var _this = this;

          _classCallCheck(this, StudentListPage);

          this.api = api;
          this.fb = fb;
          this.activateRoute = activateRoute;
          this.modalCtrl = modalCtrl;
          this.navCtrl = navCtrl;
          this.toastService = toastService;
          this.ionicStorageService = ionicStorageService;
          this.ionicStorage = ionicStorage;
          this.authService = authService;
          this.platform = platform;
          this.Expanded = false;
          this.students_list = [];
          this.loadView = false;
          this.students_data = [{
            name: "Naveen",
            "class": 'I'
          }, {
            name: 'Kumar',
            "class": 'I'
          }, {
            name: 'Rajesh',
            "class": 'I'
          }, {
            name: 'Prakash',
            "class": 'I'
          }, {
            name: 'Anandharaj',
            "class": 'I'
          }];
          this.class_medium = ["Tamil", "English", "Maths", "Science", "Social Science"];
          this.disabledValue = [];
          this.GradeDataValue = [];
          this.ratingDescription = [];
          this.gradeListValue = [];
          this.outcomeListValue = [];
          this.unitListValue = [];
          this.templateQues = [];
          this.all_class_medium = [];
          this.all_unitListValue = [];
          this.all_outcomeListValue = [];
          this.all_template_ques = [];
          this.dynamic_template = false;
          this.editIndex = '';
          this.ionicStorageService.getData('student-list').then(function (result) {
            if (result) {
              _this.student_count_chip = result.student_list;
              _this.GradeDataValue = result.student_list;
            }
          });
          this.activateRoute.queryParams.subscribe(function (params) {
            if (params.template_list) {
              _this.template_id = JSON.parse(params.template_list);
            }
          });
        }

        return _createClass(StudentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.takeDecision();
            this.studentGrade = this.fb.group({
              student_emis_id: [''],
              student: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              medium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              learning_outcome_updated: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
            });
          }
        }, {
          key: "takeDecision",
          value: function takeDecision() {
            var _this2 = this;

            this.ionicStorageService.getData('learning_outcome').then(function (outcome_value) {
              if (outcome_value) {
                if (outcome_value.toUpperCase() == 'YES') {
                  _this2.getLearningOutcomeFromStorage();

                  _this2.ionicStorageService.getData('learningoutcomeques').then(function (res) {
                    if (res) {
                      _this2.ionicStorageService.getData('classroom-type').then(function (class_value) {
                        class_value = class_value.classroom_type;

                        if (class_value.hasOwnProperty('class')) {
                          class_value = class_value["class"];
                        } else {
                          class_value = class_value.class_observed;
                        }

                        _this2.templateQues = res;
                        _this2.templateQues = _this2.templateQues.filter(function (ques_filter) {
                          return ques_filter.grade == class_value;
                        });
                        _this2.all_template_ques = _this2.templateQues;

                        if (_this2.templateQues.length > 0) {
                          _this2.dynamic_template = true;
                        } else {
                          _this2.dynamicTemplate('no');

                          _this2.dynamic_template = false;
                        }
                      });
                    }
                  });
                } else {
                  _this2.dynamicTemplate('no');

                  _this2.dynamic_template = false;
                }
              } else {
                _this2.dynamicTemplate('no');

                _this2.dynamic_template = false;
              }
            });
          }
        }, {
          key: "getLearningOutcomeFromStorage",
          value: function getLearningOutcomeFromStorage() {
            var _this3 = this;

            this.ionicStorageService.getData('learningoutcomeques').then(function (res) {
              if (res) {
                _this3.templateQues = res;
                _this3.gradeListValue = res.map(function (val) {
                  return val.grade;
                });
                _this3.gradeListValue = _this3.gradeListValue.filter(function (elem, i, arr) {
                  if (arr.indexOf(elem) == i) {
                    return elem;
                  }
                });
                var temp = _this3.gradeListValue;
                _this3.gradeListValue = [];
                temp.forEach(function (val, index) {
                  _this3.gradeListValue.push({
                    id: index + 1,
                    name: val
                  });
                });
                res.forEach(function (val, index) {});
              }
            });
          }
        }, {
          key: "createArrayValue",
          value: function createArrayValue(value) {
            return this.fb.group({
              name: [value.name],
              expanded: [true],
              roll: [value.roll],
              subject: ['e']
            });
          }
        }, {
          key: "ExpandItem",
          value: function ExpandItem() {
            this.Expanded = !this.Expanded;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.GradeDataValue.length == 0 || !this.GradeDataValue) {
              this.toastService.presentToast("Atleast One Assessment is required", "warning");
              return;
            }

            this.ionicStorageService.insertData_Replace("student-list", {
              student_list: this.GradeDataValue
            });
            var navigationExtras = {
              queryParams: {
                template_list: this.template_id
              }
            };
            this.navCtrl.navigateBack(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
          }
        }, {
          key: "continue",
          value: function _continue() {
            if (this.studentGrade.invalid) {
              if (this.platform.is('cordova')) {
                this.toastService.presentToast("Some Data is missing", 'error');
                return;
              }
            }

            if (this.GradeDataValue.length >= 5 && this.students_data.length >= 5) {
              this.toastService.presentToast("You have already taken the assessment for 5 Student. Kindly Submit the Records", 'danger');
              return;
            } else if (this.students_data.length == this.GradeDataValue.length) {
              this.toastService.presentToast("You have finished all the Students Assessment in a class. Submit the Records", 'secondary.tint');
              return;
            }

            if (this.GradeDataValue.length > 0) {
              if (this.editIndex == '') {
                this.GradeDataValue.push(this.studentGrade.value);
                this.disabledValue.push(this.studentGrade.value.student);
              } else {
                this.GradeDataValue[this.editIndex] = this.studentGrade.value;
                this.disabledValue[this.editIndex] = this.studentGrade.value.student;
              }
            } else {
              this.GradeDataValue = [this.studentGrade.value];
              this.disabledValue = [this.studentGrade.value.student];
            }

            if (this.editIndex != '') {
              this.toastService.presentToast("Updated Successfully", '');
            } else {
              this.toastService.presentToast(this.GradeDataValue.length + " Student assessment completed", '');
            }

            if (this.GradeDataValue.length == 5) {
              this.onSubmit();
            } else {
              this.studentGrade.removeControl('questions');
              this.studentGrade.reset();
              this.ratingDescription = [];
              this.ngOnInit();
            }

            this.editIndex = '';
          }
        }, {
          key: "onRateChange",
          value: function onRateChange(value) {
            switch (value) {
              case 1:
                this.ratingDescription.value = 'Poor';
                this.ratingDescription.color = '#f04141';
                break;

              case 2:
                this.ratingDescription.value = 'Below Average';
                this.ratingDescription.color = '#fc886b';
                break;

              case 3:
                this.ratingDescription.value = 'Average';
                this.ratingDescription.color = '#ff9100';
                break;

              case 4:
                this.ratingDescription.value = 'Good';
                this.ratingDescription.color = '#0bb8cc';
                break;

              case 5:
                this.ratingDescription.value = 'Excellent';
                this.ratingDescription.color = '#0ec254';
            }
          }
        }, {
          key: "dynamicTemplate",
          value: function dynamicTemplate(option) {
            if (option == 'no') {
              this.studentGrade.removeControl('questions');
              this.studentGrade.addControl('questions', this.fb.array([]));
              this.studentGrade.updateValueAndValidity();
              var control = this.studentGrade.get('questions');
              control.push(this.createNoTemplate());
              this.studentGrade.controls['learning_outcome_updated'].setValue('no');
            }
          }
        }, {
          key: "dynamicControlGeneration",
          value: function dynamicControlGeneration() {
            var outcome = this.studentGrade.value.outcome;
            var unit = this.studentGrade.value.unit;
            var subject = this.studentGrade.value.medium;

            if (outcome != '' && unit != '' && subject != '') {
              this.curr_template_ques = [];
              this.curr_template_ques = this.templateQues.filter(function (val) {
                return val.learning_outcome == outcome && val.unit == unit && val.subject == subject;
              });

              if (this.curr_template_ques.length > 0) {
                this.studentGrade.removeControl('questions');
                this.studentGrade.addControl('questions', this.fb.array([]));
                this.assignDataAndControl();
              }
            }
          }
        }, {
          key: "assignDataAndControl",
          value: function assignDataAndControl() {
            var _this4 = this;

            this.studentGrade.controls['learning_outcome_updated'].setValue('yes');
            var temp = this.curr_template_ques;
            this.curr_template_ques = temp[0].questions;
            this.curr_template_ques.forEach(function (res) {
              if (typeof res.ques_ans_json == 'string') {
                var _temp = JSON.parse(res.ques_ans_json);

                res.ques_ans_json = _temp;
              }
            });
            this.curr_template_ques.forEach(function (res, index) {
              var answer_only = [];

              if (res.ques_ans_json.type != '5') {
                res.ques_ans_json.answers.forEach(function (val) {
                  answer_only.push({
                    'ans': val.ans
                  });
                });
                var control = _this4.studentGrade.controls['questions'];
                control.push(_this4.createValue(res.ques_ans_json, answer_only));
              } else {
                var _control = _this4.studentGrade.controls['questions'];

                _control.push(_this4.checkBoxArray(res.ques_ans_json));
              }
            });
          }
        }, {
          key: "createValue",
          value: function createValue(res, answer_only) {
            if (res.hasOwnProperty('showcount')) {
              var temp = res.question;
              res.question = [];
              var ques_length = temp.length;

              for (var i = 0; i < res.showcount; i++) {
                var random_num = Math.floor(Math.random() * (ques_length - 1)) + 0;
                res.question.push(temp[random_num]);
              }
            }

            return this.fb.group({
              ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              ques: [res.question],
              answer_only: [answer_only],
              type: [res.type],
              answer_key: [res.answers],
              showcount: [res.hasOwnProperty('showcount') ? res.showcount : ''],
              title: [res.hasOwnProperty('title') ? res.title : '']
            });
          }
        }, {
          key: "checkBoxArray",
          value: function checkBoxArray(res) {
            return this.fb.group({
              ques: [res.question],
              type: [res.type],
              answer_key: [res.answers],
              ans: this.fb.array([])
            });
          }
        }, {
          key: "changeOptions",
          value: function changeOptions(option, value) {
            var _this5 = this;

            if (option == 'medium') {
              if (this.dynamic_template) {
                var check_category = this.templateQues.filter(function (result) {
                  return result.subject.toUpperCase() == value.toUpperCase();
                });

                if (check_category.length > 0) {
                  this.studentGrade.removeControl('questions');
                  this.studentGrade.addControl('questions', this.fb.array([]));
                  this.studentGrade.addControl('unit', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''));
                  this.studentGrade.addControl('outcome', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''));
                } else {
                  this.studentGrade.removeControl('questions');
                  this.studentGrade.removeControl('unit');
                  this.studentGrade.removeControl('outcome');
                  this.dynamicTemplate('no');
                  return;
                }

                this.outcomeListValue = [];
                this.unitListValue = [];
                this.outcomeListValue.length = 0;
                this.templateQues.forEach(function (val, index) {
                  if (val.subject == value) {
                    _this5.unitListValue.filter(function (result) {
                      return result == val.unit;
                    }).length > 0 ? '' : _this5.unitListValue.push(val.unit);
                  }
                });
              }
            }

            if (option == 'outcome') {
              this.unitListValue = [];
              this.templateQues.forEach(function (val, index) {
                if (val.learning_outcome == value) {
                  _this5.unitListValue.filter(function (result) {
                    return result == val.unit;
                  }).length > 0 ? '' : _this5.unitListValue.push(val.unit);
                }
              });
            }

            if (option == 'unit') {
              this.outcomeListValue = [];
              this.templateQues.forEach(function (val, index) {
                if (val.unit == value) {
                  _this5.outcomeListValue.filter(function (result) {
                    return result == val.learning_outcome;
                  }).length > 0 ? '' : _this5.outcomeListValue.push(val.learning_outcome);
                }
              });
            }
          }
        }, {
          key: "createNoTemplate",
          value: function createNoTemplate() {
            return this.fb.group({
              topic_record: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              question_asked1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              answered_correctly1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              question_asked2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              answered_correctly2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              question_asked3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              answered_correctly3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
            });
          }
        }, {
          key: "SelectedOption",
          value: function SelectedOption(value, i) {
            var _this6 = this;

            this.editIndex = i;
            var current_array = this.student_count_chip[i];
            this.student_count_chip[i].is_selected = true;

            if (current_array.learning_outcome_updated == 'no') {
              this.studentGrade.patchValue(current_array);
            } else {
              this.studentGrade.controls['medium'].setValue(current_array.medium);
              this.changeOptions('medium', current_array.medium);
              this.studentGrade.controls['unit'].setValue(current_array.unit);
              this.changeOptions('unit', current_array.unit);
              this.studentGrade.controls['outcome'].setValue(current_array.outcome);
              this.changeOptions('outcome', current_array.outcome);
              this.dynamicControlGeneration();
              setTimeout(function () {
                _this6.studentGrade.patchValue(current_array);
              });
            }
          }
        }, {
          key: "onChange",
          value: function onChange(data, event, i) {}
        }, {
          key: "valueChanges",
          value: function valueChanges(event, data, i) {}
        }]);
      }();

      _StudentListPage.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }];
      };

      _StudentListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-student-list',
        template: _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentListPage);
      /***/
    },

    /***/
    37437:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/student-list/student-list.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".expand-wrapper {\n  height: 60px;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.head_label {\n  background: #d8e8fd;\n  height: 40px;\n  border: 0px solid;\n  border-radius: 10px;\n}\n\nion-card {\n  background-color: #fff;\n  padding: 7px 16px !important;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.ion-contentbg {\n  --background: #eeeeee91;\n}\n\nion-radio {\n  --color-checked:darkturquoise;\n}\n\n.rating_label {\n  font-weight: bold;\n  font-size: 140%;\n  text-align: right;\n  float: right;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.select {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  color: black;\n  font-size: 16px;\n}\n\n.input {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  font-size: 16px;\n  color: black;\n}\n\nion-label {\n  font-size: 16px;\n}\n\n.list-header {\n  color: black;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0lBQUE7QUFHSjs7QUFBQTtFQUNJLHVCQUFBO0FBR0o7O0FBREE7RUFDRSw2QkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7QUFJRjs7QUFEQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUdBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJzdHVkZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gIH0gIFxyXG4gIFxyXG4gIC5jb2xsYXBzZWQge1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5oZWFkX2xhYmVse1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjE2LCAyMzIsIDI1Myk7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlcjowcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbnRlbnRiZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI2VlZWVlZTkxO1xyXG59XHJcbmlvbi1yYWRpb3tcclxuICAtLWNvbG9yLWNoZWNrZWQ6ZGFya3R1cnF1b2lzZTtcclxuICAvLyBjb2xvcjpkYXJrdHVycXVvaXNlXHJcbn1cclxuLnJhdGluZ19sYWJlbHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0MCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4uc2VsZWN0e1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci10b3A6MXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyBib3JkZXItYmxvY2stc3RhcnQtY29sb3I6IGFxdWE7XHJcbiBcclxufVxyXG4uaW5wdXR7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBib3JkZXItYmxvY2stc3RhcnQtY29sb3I6IGFxdWE7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gXHJcbn1cclxuaW9uLWxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubGlzdC1oZWFkZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    37860:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/student-list/student-list.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar  class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Student Assessment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  >\r\n  \r\n<form [formGroup]=\"studentGrade\">\r\n<ion-card text-wrap>\r\n    <span *ngFor=\"let item of student_count_chip;let i=index\" >\r\n        <ion-chip (click)=\"SelectedOption($event.target.innerText,i)\" color=\"tertiary\" >\r\n         <ion-label name=\"lab\" color=\"tertiary\">S-{{i+1}}</ion-label>\r\n       </ion-chip>\r\n     </span><br/>\r\n\r\n<ion-list  *ngIf=\"studentGrade.controls['medium']\">\r\n    <ion-radio-group  formControlName=\"medium\" (ionChange)=\"changeOptions('medium',$event.target.value);dynamicControlGeneration()\">\r\n      <ion-list-header>\r\n        <ion-label >Select the Subject</ion-label>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let ans of class_medium\" lines=\"none\">\r\n        <ion-label>{{ans}}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{ans}}\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    <p class=\"error-message\" *ngIf=\"studentGrade.controls['medium'].hasError('required') && (studentGrade.controls['medium'].dirty || studentGrade.controls['medium'].touched)\">Subject is Required</p>\r\n    </ion-list>\r\n\r\n\r\n    <div *ngIf=\"studentGrade.controls['unit']\">\r\n      <ion-label class=\"label\" position=\"stacked\">Unit\r\n      </ion-label><br/>\r\n    <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\"  formControlName=\"unit\" (ionChange)=\"changeOptions('unit',$event.target.value);dynamicControlGeneration()\">\r\n      <ion-select-option *ngFor=\"let value of unitListValue\"  [value]=\"value\">{{value}}</ion-select-option>\r\n    </ion-select>\r\n    <p class=\"error-message\" *ngIf=\"studentGrade.controls['unit'].hasError('required') && (studentGrade.controls['unit'].dirty || studentGrade.controls['unit'].touched)\">Unit is Required</p>\r\n    <br/>\r\n  </div>  \r\n\r\n    <div *ngIf=\"studentGrade.controls['outcome']\">\r\n      {{outcomeListValue | json}}\r\n    <ion-label class=\"label\" position=\"stacked\">Learning Outcome\r\n      </ion-label><br/>\r\n    <ion-select  class=\"select\" placeholder=\"Select\" interface=\"popover\"  formControlName=\"outcome\" (ionChange)=\"changeOptions('outcome',$event.target.value);dynamicControlGeneration()\">\r\n        <span>  <ion-select-option  text-wrap *ngFor=\"let value of outcomeListValue\"  [value]=\"value\">{{value}}</ion-select-option></span>\r\n    </ion-select>\r\n    <p class=\"error-message\" *ngIf=\"studentGrade.controls['outcome'].hasError('required') && (studentGrade.controls['outcome'].dirty || studentGrade.controls['outcome'].touched)\">Learning Outcome is Required</p>\r\n    <br/>\r\n  </div>\r\n\r\n \r\n\r\n  <ion-label>Student Name</ion-label>\r\n    <ion-input class=\"input\" type=\"text\"  formControlName=\"student\"></ion-input>\r\n    <p class=\"error-message\" *ngIf=\"studentGrade.controls['student'].hasError('required') && (studentGrade.controls['student'].dirty || studentGrade.controls['student'].touched)\">Student name is Required</p><br/>\r\n  \r\n<div formArrayName=\"questions\" *ngIf=\"studentGrade.controls['questions'] && studentGrade.value.learning_outcome_updated =='no'\">\r\n  <div *ngFor=\"let ques of studentGrade.controls.questions['controls'];let index=index\" >\r\n    <div [formGroupName]=\"index\">\r\n      <ion-label>Record the topic previously taught by the teacher for the subject selected</ion-label>\r\n      <ion-input class=\"input\" formControlName=\"topic_record\" type=\"text\" ></ion-input><br/>\r\n  \r\n      <ion-card-subtitle><h6>Question 1</h6></ion-card-subtitle>\r\n      <ion-label>Enter the Question asked</ion-label>\r\n      <ion-input class=\"input\" type=\"text\" formControlName=\"question_asked1\"></ion-input><br/>\r\n            <ion-label class=\"label\" position=\"stacked\">Did the Student answered correctly\r\n              </ion-label><br/>\r\n            <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\"  formControlName=\"answered_correctly1\">\r\n                <ion-select-option  value=\"yes\">Yes</ion-select-option>\r\n                <ion-select-option  value=\"no\">No</ion-select-option>\r\n            </ion-select><br/>\r\n     <hr/>\r\n     <ion-card-subtitle><h6>Question 2</h6></ion-card-subtitle>\r\n     <ion-label>Enter the Question asked</ion-label>\r\n     <ion-input class=\"input\" type=\"text\" formControlName=\"question_asked2\"></ion-input><br/>\r\n           <ion-label class=\"label\" position=\"stacked\">Did the Student answered correctly\r\n             </ion-label><br/>\r\n           <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\" formControlName=\"answered_correctly2\">\r\n               <ion-select-option  value=\"yes\">Yes</ion-select-option>\r\n               <ion-select-option  value=\"no\">No</ion-select-option>\r\n           </ion-select><br/>\r\n           <hr/>\r\n           <ion-card-subtitle><h6>Question 3</h6></ion-card-subtitle>\r\n           <ion-label>Enter the Question asked</ion-label>\r\n           <ion-input class=\"input\" type=\"text\" formControlName=\"question_asked3\"></ion-input><br/>\r\n                 <ion-label class=\"label\" position=\"stacked\">Did the Student answered correctly\r\n                   </ion-label><br/>\r\n                 <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\" formControlName=\"answered_correctly3\">\r\n                     <ion-select-option  value=\"yes\">Yes</ion-select-option>\r\n                     <ion-select-option  value=\"no\">No</ion-select-option>\r\n                 </ion-select><br/>\r\n              </div>\r\n              </div>\r\n              </div>\r\n\r\n              <div formArrayName=\"questions\" *ngIf=\"studentGrade.controls['questions'] && studentGrade.value.learning_outcome_updated =='yes'\">\r\n                  <div *ngFor=\"let radio of studentGrade.controls.questions['controls'];let i=index\" [formGroupName]=\"i\">\r\n                    <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n                          <ion-label text-wrap  position=\"floating\">{{radio.get('ques').value}}</ion-label><br/>\r\n                             <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n                        </ion-item>\r\n                 \r\n                   <ion-list  *ngIf=\"radio.get('type').value== '2'\" >\r\n                   \r\n                     <ion-radio-group formControlName=\"ans\"  (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n                       <div class=\"list-header\">\r\n                         <div *ngIf=\"radio.get('showcount').value != ''\">\r\n                            <ion-label  *ngIf=\"radio.get('title').value != ''\"><h2 style=\"margin-bottom: 10px;\"><b>{{radio.get('title').value}}</b></h2></ion-label>\r\n                           <div *ngFor=\"let question of radio.get('ques').value;let qIndex=index\" style=\"margin-bottom:5px;\">\r\n                         <ion-label >Qn {{qIndex +1}} - {{question.qn}}</ion-label>\r\n                        </div>\r\n                        </div>\r\n                        <div *ngIf=\"radio.get('showcount').value == ''\">\r\n                            <ion-label >{{radio.get('ques').value}}</ion-label>\r\n                        </div>\r\n                      </div>\r\n                       <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                       <span>{{ans.ans}}</span>\r\n                         <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n                       </ion-item>\r\n                     </ion-radio-group>\r\n                     </ion-list>\r\n                     \r\n                     <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n                         <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                         <ionic-selectable\r\n                      formControlName=\"ans\"\r\n                      itemValueField=\"ans\"\r\n                      itemTextField=\"ans\"\r\n                     [items]=\"radio.get('answer_only').value\"\r\n                     [canSearch]=\"true\"\r\n                     (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n                   \r\n                   </ionic-selectable>\r\n               \r\n                       </ion-item>\r\n                 \r\n                       <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n                           <ion-label text-wrap >{{radio.get('ques').value}}</ion-label><br/>\r\n                           <ionic-selectable \r\n                           formControlName=\"ans\"\r\n                           [items]=\"radio.get('answer_only').value\"\r\n                           itemValueField=\"ans\"\r\n                           itemTextField=\"ans\"\r\n                           [isMultiple]=\"true\"\r\n                           [canSearch]=\"true\"\r\n                          (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n                         </ionic-selectable>\r\n                        \r\n                         </ion-item>\r\n                        \r\n                         <div *ngIf=\"radio.get('type').value == '5'\">\r\n                             <ion-list  formArrayName=\"ans\">\r\n                               <ion-item-group>\r\n                             \r\n                                     <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                                   <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                                     <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                                     <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\" value=\"{{ans.ans}}\"></ion-checkbox>\r\n                                   </ion-item>\r\n                                 </ion-item-group>\r\n                              \r\n                               </ion-list>\r\n                             </div>\r\n                             <p class=\"error-message\" *ngIf=\"radio.controls['ans'].hasError('required') && (radio.controls['ans'].dirty || radio.controls['ans'].touched)\">Field is Required</p>\r\n                   \r\n                    </div>\r\n                    </div>\r\n               \r\n\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"onSubmit()\">Save </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"continue()\">Next Student</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-data_student-list_student-list_module_ts-es5.js.map