(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_page_ts"], {
    /***/
    86866:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/te-apply-exam/te-apply-exam.page.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeApplyExamPage": function TeApplyExamPage() {
          return (
            /* binding */
            _TeApplyExamPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_te_apply_exam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./te-apply-exam.page.html */
      98062);
      /* harmony import */


      var _te_apply_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./te-apply-exam.page.scss */
      63322);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _TeApplyExamPage = /*#__PURE__*/function () {
        function TeApplyExamPage(navParams, modalCtrl, fb, alert, userSession, datePipe, emisService) {
          _classCallCheck(this, TeApplyExamPage);

          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.alert = alert;
          this.userSession = userSession;
          this.datePipe = datePipe;
          this.emisService = emisService;
          this.examList = [];
          this.examLists = [];
          this.resultList = [{
            id: 1,
            name: "Cleared"
          }, {
            id: 2,
            name: "Not Cleared"
          }, {
            id: 3,
            name: "Not Attended"
          }, {
            id: 4,
            name: "Yet to Attended"
          }];
          this.StudRegisterList = [];
        }

        return _createClass(TeApplyExamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.isForm = this.fb.group({
              StemExam: this.fb.array([]),
              isExam: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
            });
          }
        }, {
          key: "getPiecesArray",
          get: function get() {
            return this.isForm.get('StemExam');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.studentData = this.navParams.get('data');
            this.examLists = this.navParams.get('exam');
            this.saveData = this.navParams.get('saveData');
            this.StudRegisterList = this.studentData.StudRegisterList;
            console.log("Student Data", this.studentData, this.saveData);

            if (this.saveData && this.saveData != undefined && this.saveData != null) {
              this.isDisabled = true;
              this.buttonOpen = true;
              this.isForm.controls['isExam'].setValue(this.saveData.exam_id);
              this.isForm.controls['isExam'].updateValueAndValidity(); // const piece = this.fb.group({
              //   IndxId: new FormControl(this.saveData.id, null),
              //   ExamId: new FormControl(this.saveData.exam_id, null),
              //   ExamName: new FormControl(this.saveData.exam, null),
              //   isOtherExam: new FormControl(this.saveData.exam_id, this.saveData.exam_id == 100 ? Validators.required : null),
              //   isOtherExamActive: new FormControl( this.saveData.exam_id == 100 ? true:false, null),
              //   isDate: new FormControl(this.saveData.exam_date, Validators.required),
              //   isRegisterNumber: new FormControl(this.saveData.register_no, Validators.required),
              //   isResult: new FormControl(+this.saveData.result_status, Validators.required)
              // });
              // this.getPiecesArray.push(piece);
            }

            if (this.StudRegisterList.length > 0 && !this.saveData) {
              for (var i = 0; i < this.examLists.length; i++) {
                var found = false;

                for (var j = 0; j < this.StudRegisterList.length; j++) {
                  if (this.examLists[i].id == this.StudRegisterList[j].exam_id && this.examLists[i].id != 100) {
                    found = true;
                    break;
                  }
                }

                if (!found) {
                  this.examList.push(this.examLists[i]);
                }
              }
            } else {
              this.examList = this.examLists;
            }
          }
        }, {
          key: "onExamSelect",
          value: function onExamSelect(res) {
            debugger;
            var data = typeof res === 'string' ? [res] : res;
            var control = this.isForm.controls['StemExam'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.submitted = false;

            for (var _i = 0; _i < data.length; _i++) {
              var piece = this.fb.group({
                IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', null),
                ExamId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[_i], null),
                ExamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', null),
                isOtherExam: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', data[_i] == 100 ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : null),
                isOtherExamActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[_i] == 100 ? true : false, null),
                isDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
                isRegisterNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
                isResult: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
              });
              this.getPiecesArray.push(piece);
            }

            this.buttonOpen = true;

            for (var _i2 = 0; _i2 < this.isForm.value.StemExam.length; _i2++) {
              for (var k = 0; k < this.examList.length; k++) {
                if (this.isForm.value.StemExam[_i2].ExamId == this.examList[k].id) {
                  this.isForm.controls['StemExam']['controls'][_i2].controls['ExamName'].setValue(this.examList[k].exam);
                }
              }

              if (this.isDisabled) {
                this.isForm.controls['StemExam']['controls'][_i2].controls['IndxId'].setValue(this.saveData.id);

                this.isForm.controls['StemExam']['controls'][_i2].controls['ExamId'].setValue(this.saveData.exam_id);

                this.isForm.controls['StemExam']['controls'][_i2].controls['ExamName'].setValue(this.saveData.exam);

                this.isForm.controls['StemExam']['controls'][_i2].controls['isOtherExam'].setValue(this.saveData.other_exam);

                this.isForm.controls['StemExam']['controls'][_i2].controls['isOtherExamActive'].setValue(this.saveData.exam_id == 100 ? true : false);

                this.isForm.controls['StemExam']['controls'][_i2].controls['isDate'].setValue(this.saveData.exam_date);

                this.isForm.controls['StemExam']['controls'][_i2].controls['isRegisterNumber'].setValue(this.saveData.register_no);

                this.isForm.controls['StemExam']['controls'][_i2].controls['isResult'].setValue(+this.saveData.result_status);
              }
            } // if(data == 100){
            //   this.isForm.controls['isOtherExam'].setValue('');
            //   this.isForm.controls['isOtherExam'].setValidators(Validators.required);
            //   this.isForm.controls['isOtherExam'].updateValueAndValidity();
            // }else{
            //   this.isForm.controls['isOtherExam'].setValue('');
            //   this.isForm.controls['isOtherExam'].setValidators(null);
            //   this.isForm.controls['isOtherExam'].updateValueAndValidity();
            // }

          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            if (this.isForm.valid) {
              this.submitted = false;
              var Exams = [];

              for (var i = 0; i < this.isForm.value.StemExam.length; i++) {
                var id = {
                  "id": this.isForm.value.StemExam[i].IndxId,
                  "school_id": this.studentData.school_id,
                  "student_id": this.studentData.StudId,
                  "class_id": this.studentData.class_studying_id,
                  "exam_id": this.isForm.value.StemExam[i].ExamId.toString(),
                  "exam_date": this.datePipe.transform(this.isForm.value.StemExam[i].isDate, 'yyyy-MM-dd'),
                  "other_exam": this.isForm.value.StemExam[i].isOtherExam,
                  "register_no": this.isForm.value.StemExam[i].isRegisterNumber,
                  "result_status": this.isForm.value.StemExam[i].isResult,
                  "user_id": this.userSession.emis_username()
                };
                Exams.push(id);
              }

              var params = {
                "records": Exams
              };
              this.emisService.StudWiseRegister(params).subscribe(function (res) {
                if (res.dataStatus) {
                  _this.modalCtrl.dismiss(1);

                  _this.alert.success(res.message);
                } else {
                  _this.alert.error(res.message);
                }
              });
            } else {
              this.submitted = true;
              this.alert.error("Please enter valid data");
            }
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(event, k) {
            if (this.isUpdating) return;
            var selectedDate = new Date(event.detail.value);
            var isActive = false;

            if (selectedDate && !isNaN(selectedDate.getTime())) {
              var selectedDateString = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
              var currentControl = this.isForm.controls['StemExam']['controls'][k].controls['isDate'];
              currentControl.setValue('');
              currentControl.updateValueAndValidity();

              for (var i = 0; i < this.isForm.value.StemExam.length; i++) {
                var element = this.isForm.value.StemExam[i];

                if (element.isDate) {
                  var oldDate = this.datePipe.transform(element.isDate, 'yyyy-MM-dd');

                  if (oldDate == selectedDateString) {
                    isActive = true;
                    this.alert.error("You cannot select this date. Already assigned this date of exam");
                    currentControl.setValue('');
                    currentControl.updateValueAndValidity();
                    break;
                  }
                }
              }
            }

            if (!isActive) {
              this.isUpdating = true;

              if (this.studentData.StudRegisterList.length == 0) {
                this.isForm.controls['StemExam']['controls'][k].controls['isDate'].setValue(event.detail.value);
                this.isForm.controls['StemExam']['controls'][k].controls['isDate'].updateValueAndValidity();
              } else {
                var isCheck = false;

                for (var p = 0; p < this.studentData.StudRegisterList.length; p++) {
                  var _element = this.studentData.StudRegisterList[p];

                  if (_element.exam_date) {
                    var _selectedDateString = this.datePipe.transform(event.detail.value, 'yyyy-MM-dd');

                    var _oldDate = this.datePipe.transform(_element.exam_date, 'yyyy-MM-dd');

                    if (_oldDate == _selectedDateString) {
                      isCheck = true;
                      this.alert.error("You cannot select this date. Already assigned this date of exam");
                      var _currentControl = this.isForm.controls['StemExam']['controls'][k].controls['isDate'];

                      _currentControl.setValue('');

                      _currentControl.updateValueAndValidity();

                      break;
                    }
                  }
                }

                if (!isCheck) {
                  this.isForm.controls['StemExam']['controls'][k].controls['isDate'].setValue(event.detail.value);
                  this.isForm.controls['StemExam']['controls'][k].controls['isDate'].updateValueAndValidity();
                }
              }

              this.isUpdating = false;
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.saveData = '';
            this.buttonOpen = false;
          }
        }]);
      }();

      _TeApplyExamPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }];
      };

      _TeApplyExamPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-te-apply-exam',
        template: _raw_loader_te_apply_exam_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_te_apply_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TeApplyExamPage);
      /***/
    },

    /***/
    63322:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/te-apply-exam/te-apply-exam.page.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-select::part(text) {\n  white-space: normal;\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\nion-content .header-text {\n  background: linear-gradient(-65deg, #8b67b3, #ffffff);\n  padding: 15px;\n  border-radius: 10px 10px 0px 0px;\n}\n\nion-content .middle-text {\n  border-radius: 0px 0px 10px 10px;\n}\n\nion-content .question {\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\nion-content .question p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nion-content .question ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\nion-content .question ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n\nion-content ion-radio-group {\n  display: flex;\n}\n\nion-content ion-radio-group ion-item {\n  margin: 0 !important;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.popUp {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n  z-index: 1000;\n}\n\n.popUp .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.popUp .img-card {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.popUp .img-card .popupStyle {\n  width: 100%;\n  height: 70%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.popUp .img-card img {\n  max-width: 90%;\n  max-height: 180px;\n  border-radius: 20px;\n  margin: 15px 0px 15px;\n}\n\n.popUp .img-card table {\n  text-align: left;\n  width: 90%;\n  margin: 0px auto 20px;\n  font-size: 15px;\n}\n\n.popUp .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #9162b0;\n  color: #9162b0;\n  font-size: 29px;\n  padding: 5px 5px;\n  position: absolute;\n  top: -15px;\n  right: -10px;\n  z-index: 1;\n}\n\n.popUp.open {\n  top: 0%;\n}\n\n.saveBtn {\n  --border-radius: 15px;\n  text-transform: capitalize;\n  color: #FFF;\n  display: flex;\n  margin: 10px auto;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 40%;\n}\n\n.error-message {\n  color: red !important;\n  margin: 0px 0px 0px 5px;\n}\n\n.questionSub {\n  border: 1.5px solid #480ca8;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\n.questionSub p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.questionSub ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\n.questionSub ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlLWFwcGx5LWV4YW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0EsbUJBQUE7QUFFRjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDSSxxREFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUdSOztBQURJO0VBRUksZ0NBQUE7QUFFUjs7QUFBSTtFQUNFLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUFNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDUjs7QUFDTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDUjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFDTTtFQUNFLG9CQUFBO0FBQ1I7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQURKOztBQUVJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQVI7O0FBQ1E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ1Y7O0FBQ1E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ1o7O0FBQ1E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDWjs7QUFDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNWOztBQUVJO0VBQ0ksT0FBQTtBQUFSOztBQUlFO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlFO0VBQ0UsMkJBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBR0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRE47O0FBSUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUZOOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZOIiwiZmlsZSI6InRlLWFwcGx5LWV4YW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsIDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmhlYWRlci10ZXh0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjVkZWcsICM4YjY3YjMsICNmZmZmZmYpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubWlkZGxlLXRleHR7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5xdWVzdGlvbiB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAvLyAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tcmFkaW8tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZEltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcFVwe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgLmJsYWNrZHJvcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNhcmR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5wb3B1cFN0eWxle1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzkxNjJiMDtcclxuICAgICAgICAgIGNvbG9yOiAjOTE2MmIwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYub3BlbntcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2F2ZUJ0bntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzdGlvblN1YiB7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0ODBjYTg7XHJcbiAgLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDBweCAwO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4vLyAgIDpob3N0KC5pdGVtLWRpc2FibGVkKXtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgfSJdfQ== */";
      /***/
    },

    /***/
    98062:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/te-apply-exam/te-apply-exam.page.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Apply Exam</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n    <form [formGroup]=\"isForm\">\r\n      <div class=\"question\" >\r\n        <ion-row class=\"header-text\">\r\n          <p>Talent Exam form<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n        </ion-row>\r\n        <ion-row class=\"middle-text\" >\r\n          <ion-col size=\"12\">\r\n            <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n              <ion-select (ionChange)=\"onExamSelect($event.detail.value)\" formControlName=\"isExam\" multiple=\"true\" \r\n              placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                <ion-select-option *ngFor=\"let option of examList \" [value]=\"option.id\" >{{ option.exam }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n          <p class=\"error-message\" *ngIf=\"(submitted && isForm.controls['isExam'].hasError('required')) && (submitted || isForm.controls['isExam'].dirty || isForm.controls['isExam'].touched)\">  Field is Required</p>\r\n        </ion-row>\r\n      </div>\r\n      <div formArrayName=\"StemExam\">\r\n        <div *ngFor=\"let item of isForm.get('StemExam')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n          <div style=\"width: 100%;\">\r\n            <ion-item *ngIf=\"!isDisabled\" class=\"bold\" style=\"text-align: center;--background: linear-gradient(0deg, #6952ff, #c758ff); color: white;\" lines=\"full\">\r\n              <ion-label style=\"text-transform: uppercase;\">{{item.value.ExamName}}</ion-label>\r\n            </ion-item>\r\n            <!-- <h4 *ngIf=\"!isDisabled\" style=\"text-align: center; font-weight: bold; font-size:16px\">{{item.value.ExamName}}</h4> -->\r\n            <div class=\"question\" *ngIf=\"item.value.isOtherExamActive\">\r\n              <ion-row class=\"header-text\">\r\n                <p>Other exams<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n              </ion-row>\r\n              <ion-row class=\"middle-text\">\r\n                <ion-col size=\"12\">\r\n                  <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n                    <ion-label></ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"isOtherExam\" placeholder=\"Please enter\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error-message\" style=\"font-style: normal; margin: 0px 0px 5px 5px;\"\r\n                  *ngIf=\"(submitted && item.controls['isOtherExam'].hasError('required')) && (submitted || item.controls['isOtherExam'].dirty || item.controls['isOtherExam'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </div>\r\n\r\n            <div class=\"question\" >\r\n              <ion-row class=\"header-text\">\r\n                <p>Date of the exam<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n              </ion-row>\r\n              <ion-row class=\"middle-text\" >\r\n                <ion-col size=\"12\">\r\n                  <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n                    <ion-datetime style=\"width: 100%;\" formControlName=\"isDate\" displayFormat=\"DD/MM/YYYY\" placeholder=\"Select Date\" max=\"2026-05-30\"></ion-datetime>\r\n                    <ion-icon name=\"calendar-outline\" ></ion-icon>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error-message\" style=\"font-style: normal; margin: 0px 0px 5px 5px;\"\r\n                  *ngIf=\"(submitted && item.controls['isDate'].hasError('required')) && (submitted || item.controls['isDate'].dirty || item.controls['isDate'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </div>\r\n  \r\n            <div class=\"question\" >\r\n              <ion-row class=\"header-text\">\r\n                <p>Application/ registration No<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n              </ion-row>\r\n              <ion-row class=\"middle-text\">\r\n                <ion-col size=\"12\">\r\n                  <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n                    <ion-label></ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"isRegisterNumber\" placeholder=\"Please enter\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error-message\" style=\"font-style: normal; margin: 0px 0px 5px 5px;\"\r\n                  *ngIf=\"(submitted && item.controls['isRegisterNumber'].hasError('required')) && (submitted || item.controls['isRegisterNumber'].dirty || item.controls['isRegisterNumber'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </div>\r\n      \r\n            <div class=\"question\" >\r\n              <ion-row class=\"header-text\">\r\n                <p>Result status<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n              </ion-row>\r\n              <ion-row class=\"middle-text\" >\r\n                <ion-col size=\"12\">\r\n                  <ion-item mode=\"md\" fill=\"outline\">\r\n                    <ion-select formControlName=\"isResult\" multiple=\"false\" \r\n                    placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                      <ion-select-option *ngFor=\"let option of resultList \" [value]=\"option.id\" >{{ option.name }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error-message\" style=\"font-style: normal; margin: 0px 0px 5px 5px;\"\r\n                  *ngIf=\"(submitted && item.controls['isResult'].hasError('required')) && (submitted || item.controls['isResult'].dirty || item.controls['isResult'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"question\" *ngIf=\"isForm.value.isExam == 100\">\r\n        \r\n        <ion-row class=\"header-text\">\r\n          <p>Other exams<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n        </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n              <ion-label></ion-label>\r\n              <ion-input type=\"text\" formControlName=\"isOtherExam\" placeholder=\"Please enter\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n          <p class=\"error-message\" *ngIf=\"(submitted && isForm.controls['isOtherExam'].hasError('required')) && (submitted || isForm.controls['isOtherExam'].dirty || isForm.controls['isOtherExam'].touched)\">  Field is Required</p>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        \r\n        <ion-row class=\"header-text\">\r\n          <p>Date of the exam<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n        </ion-row>\r\n        <ion-row class=\"middle-text\" >\r\n          <ion-col size=\"12\">\r\n            <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n              <ion-datetime style=\"width: 100%;\" formControlName=\"isDate\" displayFormat=\"DD/MM/YYYY\" placeholder=\"Select Date\"></ion-datetime>\r\n              <ion-icon name=\"calendar-outline\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n          <p class=\"error-message\" *ngIf=\"(submitted && isForm.controls['isDate'].hasError('required')) && (submitted || isForm.controls['isDate'].dirty || isForm.controls['isDate'].touched)\">  Field is Required</p>\r\n        </ion-row>\r\n      </div>\r\n      <div class=\"question\" >\r\n        \r\n        <ion-row class=\"header-text\">\r\n          <p>Application/ registration No<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n        </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{isDisabled ? true : false}}\">\r\n              <ion-label></ion-label>\r\n              <ion-input type=\"tel\" formControlName=\"isRegisterNumber\" placeholder=\"Please enter\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n          <p class=\"error-message\" *ngIf=\"(submitted && isForm.controls['isRegisterNumber'].hasError('required')) && (submitted || isForm.controls['isRegisterNumber'].dirty || isForm.controls['isRegisterNumber'].touched)\">  Field is Required</p>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"header-text\">\r\n          <p>Result status<span style=\"color: red;font-size: 25px;\">*</span></p>\r\n        </ion-row>\r\n        <ion-row class=\"middle-text\" >\r\n          <ion-col size=\"12\">\r\n            <ion-item mode=\"md\" fill=\"outline\">\r\n              <ion-select formControlName=\"isResult\" multiple=\"false\" \r\n              placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                <ion-select-option *ngFor=\"let option of resultList \" [value]=\"option.id\" >{{ option.name }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n          <p class=\"error-message\" *ngIf=\"(submitted && isForm.controls['isResult'].hasError('required')) && (submitted || isForm.controls['isResult'].dirty || isForm.controls['isResult'].touched)\">  Field is Required</p>\r\n        </ion-row>\r\n      </div> -->\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"buttonOpen\">\r\n  <ion-button size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\"> Submit </ion-button>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_page_ts-es5.js.map