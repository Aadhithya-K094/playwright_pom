(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil-evaluation_primary-questions_primary-questions_module_ts"], {
    /***/
    44421:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/civil/civil-evaluation/primary-questions/primary-questions-routing.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryQuestionsPageRoutingModule": function PrimaryQuestionsPageRoutingModule() {
          return (
            /* binding */
            _PrimaryQuestionsPageRoutingModule
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


      var _primary_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-questions.page */
      99577);

      var routes = [{
        path: '',
        component: _primary_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryQuestionsPage
      }];

      var _PrimaryQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryQuestionsPageRoutingModule() {
        _classCallCheck(this, PrimaryQuestionsPageRoutingModule);
      });

      _PrimaryQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryQuestionsPageRoutingModule);
      /***/
    },

    /***/
    93596:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/civil/civil-evaluation/primary-questions/primary-questions.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryQuestionsPageModule": function PrimaryQuestionsPageModule() {
          return (
            /* binding */
            _PrimaryQuestionsPageModule
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


      var _primary_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-questions-routing.module */
      44421);
      /* harmony import */


      var _primary_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-questions.page */
      99577);

      var _PrimaryQuestionsPageModule = /*#__PURE__*/_createClass(function PrimaryQuestionsPageModule() {
        _classCallCheck(this, PrimaryQuestionsPageModule);
      });

      _PrimaryQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryQuestionsPageRoutingModule],
        declarations: [_primary_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryQuestionsPage]
      })], _PrimaryQuestionsPageModule);
      /***/
    },

    /***/
    99577:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/civil/civil-evaluation/primary-questions/primary-questions.page.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryQuestionsPage": function PrimaryQuestionsPage() {
          return (
            /* binding */
            _PrimaryQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-questions.page.html */
      1535);
      /* harmony import */


      var _primary_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-questions.page.scss */
      64930);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/aws.service */
      56263);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _PrimaryQuestionsPage = /*#__PURE__*/function () {
        function PrimaryQuestionsPage(router, fb, geolocation, alertService, userSessionService, userService, route, uploadService, awsService) {
          _classCallCheck(this, PrimaryQuestionsPage);

          this.router = router;
          this.fb = fb;
          this.geolocation = geolocation;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.userService = userService;
          this.route = route;
          this.uploadService = uploadService;
          this.awsService = awsService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US');
          this.saveActive = false;
          this.today = new Date();
          this.todayDate = this.pipe.transform(this.today, 'yyyy-MM-dd');
          this.routeData = this.route.snapshot;
          this.yearList = [{
            value: '2019-20',
            label: "2019-20"
          }, {
            value: '2020-21',
            label: "2020-21"
          }, {
            value: '2021-22',
            label: "2021-22"
          }];
          this.surveyId = this.routeData.queryParams.surveyId;
          this.Title = this.routeData.queryParams.title; // this.Id = this.routeData.queryParams.id;

          this.routeData = this.route.snapshot;
          this.Id = this.routeData.queryParams.Id;
          this.schoolId = this.routeData.queryParams.schoolId;
          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emis_user_id = this.userSessionService.emis_user_id();
          this.emis_username = this.userSessionService.emis_username();
        }

        return _createClass(PrimaryQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
            this.getLatLong();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.saveActive = false;
            this.getSurveyQuestionsbyId();
          }
        }, {
          key: "getDate",
          value: function getDate() {
            var weekdate = new Date(this.todayDate);
            weekdate.setDate(weekdate.getDate() + parseInt('7'));
            var monthdate = new Date(this.todayDate);
            monthdate.setMonth(monthdate.getMonth() + 1);
            var yeardate = new Date(this.todayDate);
            yeardate.setFullYear(yeardate.getFullYear() + 1);
            this.addWeek = this.pipe.transform(weekdate, 'yyyy-MM-dd');
            this.addMonth = this.pipe.transform(monthdate, 'yyyy-MM-dd');
            this.addYear = this.pipe.transform(yeardate, 'yyyy-MM-dd'); // console.log('week----' + this.addWeek)
            // console.log('month---' + this.addMonth)
            // console.log('year----' + this.addYear)
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              survey_question: this.fb.array([])
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this.locationCordinates = resp.coords;
              _this.lat = _this.locationCordinates.latitude;
              _this["long"] = _this.locationCordinates.longitude;
            })["catch"](function (error) {// console.log('Error getting location', error);
            });
          }
        }, {
          key: "getSurveyQuestionsbyId",
          value: function getSurveyQuestionsbyId() {
            var _this2 = this;

            //debugger
            this.data = [];
            this.finaldata = [];
            this.awsService.getSurveyQuestions(1007).subscribe(function (res) {
              if (res) {
                _this2.data = res;

                if (_this2.data.length > 0) {
                  _this2.noDataFound = false;
                } else {
                  _this2.noDataFound = true;
                } // this.headingList = Array.from(new Set(this.data.map(s => s.Q_GtropTxt)))
                //   .map(ClsID => {
                //     return {
                //       Q_GtropTxt: ClsID,
                //     }
                //   });


                _this2.headingList = _this2.data.map(function (item) {
                  return item.Q_GtropTxt;
                }).filter(function (value, index, self) {
                  return self.indexOf(value) === index;
                });
                _this2.headingListIndex = _this2.headingList[0];

                for (var i = 0; i < _this2.data.length; i++) {
                  if (_this2.data[i].UserTyp.indexOf(',') != -1) {
                    _this2.valuedata = _this2.data[i];

                    var users = _this2.data[i].UserTyp.split(',');

                    for (var j = 0; j < users.length; j++) {
                      _this2.quesdata = {
                        "QuestID": _this2.valuedata.QuestID,
                        "Quest": _this2.valuedata.Quest,
                        "QuestTyp": _this2.valuedata.QuestTyp,
                        "Q_Group": _this2.valuedata.Q_Group,
                        "Q_GtropTxt": _this2.valuedata.Q_GtropTxt,
                        "UserTyp": users[j],
                        "SchoolTypeID": _this2.valuedata.SchoolTypeID,
                        "SchoolCattyID": _this2.valuedata.SchoolCattyID,
                        "minlength": _this2.valuedata.minlength,
                        "maxlength": _this2.valuedata.maxlength,
                        "survey_id": _this2.valuedata.survey_id,
                        "required": _this2.valuedata.required
                      };

                      _this2.finaldata.push(_this2.quesdata);
                    }
                  } else {
                    _this2.finaldata.push(_this2.data[i]);
                  }

                  _this2.getLibrarySurveyQuestions();
                } // console.log(this.finaldata);

              } else {
                _this2.noDataFound = true;
              }
            });
          }
        }, {
          key: "getLibrarySurveyQuestions",
          value: function getLibrarySurveyQuestions() {
            this.filterData = this.finaldata;
            this.onFundList(this.filterData);
          }
        }, {
          key: "onFundList",
          value: function onFundList(item) {
            this.username = window.localStorage.getItem('username'); // this.surveyDate = this.pipe.transform(this.form.value.date, 'yyyy-MM-dd');

            var control = this.form.controls['survey_question'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = this.form.controls.survey_question;

            if (item.length > 0) {
              for (var _i = 0; _i < item.length; _i++) {
                this.queslist.push(this.fb.group({
                  IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.schoolId, null),
                  AllotYr: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  SurId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].survey_id, null),
                  SurDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.todayDate, null),
                  QId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].QuestID, null),
                  ResInt: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  ResChar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.lat, null),
                  Long: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this["long"], null),
                  ActSts: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(1, null),
                  CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.emis_username, null),
                  EmisUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.emis_user_id, null),
                  EmisUserTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.emis_usertype, null),
                  Requirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Area: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Length: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Images: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  Q_Group: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].Q_Group, null),
                  Q_GtropTxt: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].Q_GtropTxt, null),
                  Quest: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].Quest, null),
                  QuestTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].QuestTyp, null),
                  min: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].minlength, null),
                  max: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].maxlength, null),
                  value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  UserTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i].UserTyp, null)
                })); // if (this.queslist.value[i]['ResInt'] == null || this.queslist.value[i]['ResInt'] == 1 || this.queslist.value[i]['ResInt'] == "") {
                //   this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('1');
                //   this.form.controls['survey_question']['controls'][i].controls['value'].setValue('Yes');
                //   this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValue('0');
                // }
                // else {
                //   this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('2');
                //   this.form.controls['survey_question']['controls'][i].controls['value'].setValue('No');
                //   this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValue('0');
                // }

                if (this.queslist.value[_i]['ResInt'] == null || this.queslist.value[_i]['ResInt'] == 2 || this.queslist.value[_i]['ResInt'] == "") {
                  this.form.controls['survey_question']['controls'][_i].controls['ResInt'].setValue('2');
                }

                if (this.queslist.value[_i]['QuestTyp'] == 2 || this.queslist.value[_i]['QuestTyp'] == 3 || this.queslist.value[_i]['QuestTyp'] == 7 || this.queslist.value[_i]['QuestTyp'] == 4) {
                  this.form.controls['survey_question']['controls'][_i].controls['ResInt'].setValue('0');

                  this.form.controls['survey_question']['controls'][_i].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
                } else {
                  this.form.controls['survey_question']['controls'][_i].controls['ResChar'].setValidators(null);
                }

                this.form.controls['survey_question']['controls'][_i].controls['ResChar'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['tab/dashboard'], {
              queryParams: {
                'title': this.Title,
                'id': this.Id
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onFundClickFunc",
          value: function onFundClickFunc(e, index) {
            //debugger
            this.isCheck = e.detail.value;

            if (this.isCheck == 1) {
              // this.form.controls['survey_question']['controls'][index].controls['value'].setValue('Yes');
              // this.form.controls['survey_question']['controls'][index].controls['ResInt'].setValue(1);
              this.form.controls['survey_question']['controls'][index].controls['Requirement'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls['survey_question']['controls'][index].controls['Quantity'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls['survey_question']['controls'][index].controls['Area'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls['survey_question']['controls'][index].controls['Description'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls['survey_question']['controls'][index].controls['Images'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            } else {
              // this.form.controls['survey_question']['controls'][index].controls['value'].setValue('No');
              // this.form.controls['survey_question']['controls'][index].controls['ResInt'].setValue(2);
              this.form.controls['survey_question']['controls'][index].controls['Requirement'].setValidators(null);
              this.form.controls['survey_question']['controls'][index].controls['Requirement'].setValue("");
              this.form.controls['survey_question']['controls'][index].controls['Quantity'].setValidators(null);
              this.form.controls['survey_question']['controls'][index].controls['Quantity'].setValue("");
              this.form.controls['survey_question']['controls'][index].controls['Area'].setValidators(null);
              this.form.controls['survey_question']['controls'][index].controls['Area'].setValue("");
              this.form.controls['survey_question']['controls'][index].controls['Description'].setValidators(null);
              this.form.controls['survey_question']['controls'][index].controls['Description'].setValue("");
              this.form.controls['survey_question']['controls'][index].controls['Images'].setValidators(null);
              this.form.controls['survey_question']['controls'][index].controls['Images'].setValue("");
            }

            this.form.controls['survey_question']['controls'][index].controls['Requirement'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index].controls['Quantity'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index].controls['Area'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index].controls['Description'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index].controls['Images'].updateValueAndValidity();
          }
        }, {
          key: "onFinalSave",
          value: function onFinalSave() {
            var _this3 = this;

            //debugger
            this.submitted = true;
            var resdata = {
              "records": this.form.value.survey_question
            };

            if (this.form.valid) {
              this.userService.saveCivilEvaluationSurvey(resdata).subscribe(function (res) {
                if (res.dataStatus) {
                  _this3.alertService.success(res.message);

                  _this3.router.navigate(['/tabs/school-info']);
                } else {
                  _this3.alertService.error(res.message);

                  _this3.router.navigate(['/tabs/school-info']);
                }
              });
            } else {
              this.validateAllFormFields(this.form);
              this.saveActive = false;
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this4 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup) {
                _this4.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray) {
                _this4.validateAllFormFields(control);
              }
            });
          } // goToBack() {
          //   this.router.navigate(['/tabs/home']);
          // }

        }, {
          key: "onNext",
          value: function onNext(heading) {
            if (heading == 'Primary Civil Evaluation') {
              this.headingListIndex = this.headingList[1];
            } else if (heading == 'Major Repair') {
              this.headingListIndex = this.headingList[2];
            } else if (heading == 'Minor Repair') {
              this.headingListIndex = this.headingList[3];
            } else if (heading == 'Electrical Equipment') {
              this.headingListIndex = this.headingList[4];
            } else if (heading == 'Drinking Water Supply') {
              this.headingListIndex = this.headingList[5];
            } else if (heading == 'Plumbing Equipment') {
              this.headingListIndex = this.headingList[6];
              this.saveActive = true;
            } // else {
            //   this.headingListIndex = this.headingList[0];
            // }

          }
        }, {
          key: "goToBack",
          value: function goToBack(heading) {
            //debugger
            this.router.navigate(['/tabs/school-info']); // if (heading == 'Requirements') {
            //   this.router.navigate(['/tabs/school-info']);
            // }
            // else if (heading == 'Major Repair') {
            //   this.headingListIndex = this.headingList[0];
            // }
            // else if (heading == 'Minor Repair') {
            //   this.headingListIndex = this.headingList[1];
            // }
            // else if (heading == 'Electrical Equipment') {
            //   this.headingListIndex = this.headingList[2];
            // }
            // else if (heading == 'Drinking Water Supply') {
            //   this.headingListIndex = this.headingList[3];
            // }
            // else if (heading == 'Plumbing Equipment') {
            //   this.headingListIndex = this.headingList[4];
            // }
            // else if (heading == 'Demolition of Building - Safety') {
            //   this.headingListIndex = this.headingList[5];
            //   this.saveActive = true;
            // }
            // else {
            //   this.headingListIndex = this.headingList[0];
            // }
          } //photo1

        }, {
          key: "onSelectFile",
          value: function onSelectFile(event, i, QId) {
            //debugger
            this.onSelectFile1(event, i);
          }
        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event, i) {
            var _this5 = this;

            //debugger;
            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].size <= 1000000000) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(event.target.files[0]);

                fileReader.onload = function (event) {
                  // //debugger;
                  _this5.uploadUrl = fileReader.result;
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;

                  _this5.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      // const formData = new FormData();
                      // formData.append('file', this.doc_file);
                      var files = _this5.doc_file;
                      var file = files[0];

                      _this5.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                        _this5.form.controls['survey_question']['controls'][i].controls['Images'].setValue(result.key);

                        _this5.getUploadedFiles1(result.key, i);

                        console.log(result.key);
                      });

                      _this5.alertService.success('File Uploaded Successfully');
                    } else {
                      _this5.alertService.error('Error in Uploading File please try again');
                    }
                  });
                };
              } else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
              }
            }
          }
        }, {
          key: "getUploadedFiles1",
          value: function getUploadedFiles1(filename, i) {
            var _this6 = this;

            var bucketName = "renewalapplicationemis";
            var filename = filename;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this6.image1 = result.url;

                _this6.form.controls['survey_question']['controls'][i].controls['Photo'].setValue(result.url); // this.form.controls['survey_question']['controls'][i].controls['Images'].setValue(filename);

              } else {
                _this6.alertService.error('Error in Uploading File please try again');
              }
            });
          }
        }]);
      }();

      _PrimaryQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService
        }, {
          type: src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_4__.AwsService
        }];
      };

      _PrimaryQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-primary-questions',
        template: _raw_loader_primary_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryQuestionsPage);
      /***/
    },

    /***/
    64930:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/civil/civil-evaluation/primary-questions/primary-questions.page.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: #e6ccff;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\n.ion-item {\n  border-top: 5px solid #8B67B3;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUtKOztBQUhFO0VBQ0UsbUJBQUE7QUFNSjs7QUFKRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBU0o7O0FBUEU7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEU7RUFDRSwrQkFBQTtBQVlKOztBQVZFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQWFKIiwiZmlsZSI6InByaW1hcnktcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZhbGlkLWNsciB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci10eHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nLXR4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZjY2ZmO1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuaXRlbS1zdHlsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gIH1cclxuICAucXVlcy10eHQge1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIC5idC0xMCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHBcclxuICB9XHJcbiAgLmxpc3Qge1xyXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MHB4XHJcbiAgfVxyXG4gIC5yYWRpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4XHJcbiAgfVxyXG4gIC5sYmwge1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIC5pbnB1dC1jbHIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pb24taXRlbSB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAvLyAuZmlsZUlucHV0IHtcclxuICAvLyAgIHdpZHRoOiAwLjFweDtcclxuICAvLyAgIGhlaWdodDogMC4xcHg7XHJcbiAgLy8gICBvcGFjaXR5OiAwO1xyXG4gIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHotaW5kZXg6IC0xO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLmZpbGVJbnB1dCAgIGxhYmVsIHtcclxuICAvLyAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gICBwYWRkaW5nOiAuNWVtIDFlbTtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gICB9Il19 */";
      /***/
    },

    /***/
    1535:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil-evaluation/primary-questions/primary-questions.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack(headingListIndex)\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <!-- <ion-title class=\"pt-15\">HOD Inspection</ion-title> -->\r\n    <ion-title class=\"pt-15\">{{headingListIndex}}</ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"noDataFound\" style=\"padding-top:30%;color: #8B67B3;\">\r\n      <ion-row class=\"text-message\">\r\n        <ion-col size=\"12\" style=\"text-align: center !important;\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n      <!-- <div size=\"12\" class=\"header\" *ngFor=\"let data of headingListIndex\">\r\n        <ion-row class=\"heading-txt\">\r\n        <ion-label>{{data}}</ion-label>\r\n      </ion-row> -->\r\n      <div size=\"12\" class=\"header\">\r\n        <!-- <ion-row class=\"heading-txt\">\r\n        <ion-label>{{headingListIndex}}</ion-label>\r\n      </ion-row> -->\r\n        <div formArrayName=\"survey_question\">\r\n          <ion-row *ngFor=\"let item of form.get('survey_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n            <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"headingListIndex === item.value.Q_GtropTxt\">\r\n              <ion-item lines=\"none\" class=\"item-style ion-item\">\r\n                <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '1'\" class=\"txtspace background\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span>\r\n                    {{item.value.Quest}} Land Availability?<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <!-- <ion-label class=\"ques-txt\">\r\n                    <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\"></span>\r\n                    Land Availability?\r\n                    </ion-label> -->\r\n                  <ion-row class=bt-10>\r\n                    <ion-list class=\"list\">\r\n                      <ion-radio-group formControlName=\"ResInt\">\r\n                        <ion-item lines=\"none\">\r\n                          <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\">\r\n                          <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                        </ion-item>\r\n                        <!-- <ion-item lines=\"none\">\r\n                          <ion-radio value=\"3\"></ion-radio><span class=\"radio\">Not Applicable</span>\r\n                        </ion-item> -->\r\n                      </ion-radio-group>\r\n                    </ion-list>\r\n                    <!-- <ion-toggle (ionChange)=\"onFundClickFunc($event,i)\"\r\n                      [checked]=\"item.value.RespInt == '1'? true : false\"\r\n                      style=\"float: right;--handle-background-checked: snow;\"> </ion-toggle> -->\r\n                  </ion-row>\r\n                  <ion-row *ngIf=\"item.value.ResInt == '1'\">\r\n                    <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                      <ion-label class=\"ques-txt\">\r\n                        <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(i).</span>\r\n                        Requirement needed?<span class=\"valid-clr\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                    <ion-list class=\"list\" >\r\n                      <ion-radio-group formControlName=\"Requirement\" >\r\n                        <ion-item lines=\"none\">\r\n                          <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\">\r\n                          <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                        </ion-item>\r\n                        <!-- <ion-item lines=\"none\">\r\n                          <ion-radio value=\"3\"></ion-radio><span class=\"radio\">Not Applicable</span>\r\n                        </ion-item> -->\r\n                      </ion-radio-group>\r\n                    </ion-list>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"(submitted && item.controls['Requirement'].hasError('required')) && (submitted || item.controls['Requirement'].dirty || item.controls['Requirement'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                      <ion-label class=\"ques-txt\">\r\n                        <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(ii).</span>\r\n                        Quantity<span class=\"valid-clr\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                      <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\"\r\n                      formControlName=\"Quantity\" class=\"input-clr\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"(submitted && item.controls['Quantity'].hasError('required')) && (submitted || item.controls['Quantity'].dirty || item.controls['Quantity'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                      </ion-col>\r\n\r\n                      <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                        <ion-label class=\"ques-txt\">\r\n                          <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(iii).</span>\r\n                          Area (sq. m.) / length (m)<span class=\"valid-clr\">*</span>\r\n                        </ion-label>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\"\r\n                        formControlName=\"Area\" class=\"input-clr\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"(submitted && item.controls['Area'].hasError('required')) && (submitted || item.controls['Area'].dirty || item.controls['Area'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                          <ion-label class=\"ques-txt\">\r\n                            <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(iv).</span>\r\n                            Description<span class=\"valid-clr\">*</span>\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                          <ion-input type=\"text\" pattern=\"^[a-zA-Z \\b]+$\" placeholder=\"Please Enter Your Answer\"\r\n                          formControlName=\"Description\" class=\"input-clr\">\r\n                        </ion-input>\r\n                        <ion-row>\r\n                          <p class=\"error-message\"\r\n                            *ngIf=\"(submitted && item.controls['Description'].hasError('required')) && (submitted || item.controls['Description'].dirty || item.controls['Description'].touched)\">\r\n                            Field is required</p>\r\n                        </ion-row>\r\n                          </ion-col>\r\n\r\n\r\n                            <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                            <ion-label class=\"ques-txt\">\r\n                              <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(v).</span>\r\n                              Add photos<span class=\"valid-clr\">*</span>\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                            <input type=\"file\" name=\"file\" class=\"fileInput\"  (change)=\"onSelectFile1($event,i)\"/>\r\n\r\n                            <!-- <ion-row class=\"upload-btn\">\r\n                              <ion-col size=\"1\" style=\"text-align: center;padding-left:0px;color: var(--ion-color-primary, #388);\">\r\n                                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                              </ion-col>\r\n                              <ion-col size=\"11\">\r\n                                <label for=\"file\" class=\"upload-txt\" style=\"color: var(--ion-color-primary, #388);\">\r\n                                  Click to Upload / Update Photo 1\r\n                                </label><br>\r\n                              </ion-col>\r\n                            </ion-row>  -->\r\n                            <img src=\"{{item.value.Photo}}\" class=\"img image\"><br>\r\n                            <ion-row>\r\n                              <p class=\"error-message\"\r\n                                *ngIf=\"(submitted && item.controls['Images'].hasError('required')) && (submitted || item.controls['Images'].dirty || item.controls['Images'].touched)\">\r\n                                Field is required</p>\r\n                            </ion-row>\r\n                            </ion-col><br>\r\n\r\n                          <!-- <ion-col size=\"12\" style=\"padding-bottom: 0px;padding-left:0px\">\r\n                            <ion-label class=\"ques-txt\">\r\n                              <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(v).</span>\r\n                              Add photos<span class=\"valid-clr\">*</span>\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\" style=\"padding-top: 0px;padding-left:0px\">\r\n                            <input type=\"file\"  name=\"file\" class=\"fileInput\" formControlName=\"Images\" (change)=\"onSelectFile1($event,i)\"/> -->\r\n                            <!-- <input type=\"file\"  name=\"file\" id=\"file\" class=\"fileInput\" formControlName=\"Images\" (change)=\"onSelectFile1($event,i)\" multiple=\"multiple\"/> -->\r\n\r\n                            <!-- <ion-row class=\"upload-btn\">\r\n                              <ion-col size=\"1\" style=\"text-align: center;padding-left:0px;color: var(--ion-color-primary, #388);\">\r\n                                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                              </ion-col>\r\n                              <ion-col size=\"11\">\r\n                                <label for=\"file\" class=\"upload-txt\" style=\"color: var(--ion-color-primary, #388);\">\r\n                                  Click to Upload / Update Photo 1\r\n                                </label><br>\r\n                              </ion-col>\r\n                            </ion-row> -->\r\n                            <!-- <img src=\"{{item.value.Photo}}\" class=\"img image\"><br>\r\n                            <ion-row>\r\n                              <p class=\"error-message\"\r\n                                *ngIf=\"(submitted && item.controls['Images'].hasError('required')) && (submitted || item.controls['Images'].dirty || item.controls['Images'].touched)\">\r\n                                Field is required</p>\r\n                            </ion-row>\r\n                            </ion-col><br> -->\r\n\r\n\r\n\r\n\r\n                  </ion-row>\r\n                </ion-col><br>\r\n                <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '2'\" class=\"txtspace\">\r\n                  <ion-label class=\"lbl\">\r\n                    <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span>\r\n                    {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\"\r\n                    formControlName=\"ResChar\" class=\"input-clr\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '3'\" class=\"txtspace\">\r\n                  <ion-label class=\"lbl\">   <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span>{{item.value.Quest}}<span class=\"valid-clr\">*</span></ion-label>\r\n                  <ion-input type=\"text\" pattern=\"^[a-zA-Z \\b]+$\" placeholder=\"Please Enter Your Answer\"\r\n                    formControlName=\"ResChar\" class=\"input-clr\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '4'\" class=\"txtspace\">\r\n                  <ion-label class=\"lbl\">   <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span>{{item.value.Quest}}<ion-icon name=\"calendar\" color=\"primary\">\r\n                    </ion-icon><span class=\"valid-clr\">*</span></ion-label>\r\n                  <ion-datetime display-timezone=\"utc\" displayFormat=\"DD/MM/YYYY\" formControlName=\"ResChar\"\r\n                    style=\"padding-bottom: 10px;padding-top:0px;padding-left:6px\" max=\"{{todayDate}}\">\r\n                  </ion-datetime>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"onNext(headingListIndex)\" *ngIf=\"!noDataFound && !saveActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Next</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"onFinalSave()\" *ngIf=\"!noDataFound && saveActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil-evaluation_primary-questions_primary-questions_module_ts-es5.js.map