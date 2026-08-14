(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_page_ts"], {
    /***/
    313:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/my-patient-list/my-patient-view-modal/my-patient-view-modal.page.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyPatientViewModalPage": function MyPatientViewModalPage() {
          return (
            /* binding */
            _MyPatientViewModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_my_patient_view_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-patient-view-modal.page.html */
      42675);
      /* harmony import */


      var _my_patient_view_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-patient-view-modal.page.scss */
      40190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/diagnosis.service */
      10293);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _MyPatientViewModalPage = /*#__PURE__*/function () {
        function MyPatientViewModalPage(usersessionService, http, alert, router, navParams, modalCtrl, alertService, diagnosisService) {
          _classCallCheck(this, MyPatientViewModalPage);

          this.usersessionService = usersessionService;
          this.http = http;
          this.alert = alert;
          this.router = router;
          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.diagnosisService = diagnosisService;
          this.diagnoses = [];
          this.fltDiagnosis = [];
          this.disabledItems = [];
          this.UserName = this.usersessionService.emis_username();
        }

        return _createClass(MyPatientViewModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            debugger;
            this.mhtOrAwc = this.navParams.get('mhtOrAwc');
            this.diagnoses = [];

            if (this.mhtOrAwc === 'mht') {
              console.log('here');
              this.diagnoses = this.diagnosisService.getDiagnoses();
              var checkMyPatientViewType = localStorage.getItem('myPatientViewType');
              console.log(checkMyPatientViewType);
              this.jsonData = '';

              if (checkMyPatientViewType && checkMyPatientViewType != undefined) {
                this.jsonData = JSON.parse(checkMyPatientViewType);
                this.filterBy = this.jsonData.type;
                this.filterDiagnosis = this.jsonData.diagnosis;

                if (this.filterBy != '2') {
                  if (this.filterBy == '1') {
                    this.fltDiagnosis = [{
                      type: this.filterBy,
                      value: 'All',
                      label: "All",
                      selected: false
                    }].concat(_toConsumableArray(this.diagnoses));

                    if (this.filterDiagnosis.length == 0) {
                      this.filterDiagnosis.push({
                        type: this.filterBy,
                        value: 'All',
                        label: "All"
                      });
                    }
                  } else {
                    this.fltDiagnosis = [{
                      type: this.filterBy,
                      value: 'All',
                      label: "All"
                    }].concat(_toConsumableArray(this.diagnoses.filter(function (item) {
                      return item.type === _this.filterBy;
                    })));

                    if (this.filterDiagnosis.length == 0) {
                      this.filterDiagnosis.push({
                        type: this.filterBy,
                        value: 'All',
                        label: "All"
                      });
                    }
                  }

                  this.onSelectionChange2();
                } else {
                  this.fltDiagnosis = [];
                }
              }
            } else {
              console.log('there');
              var awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_production.json';
              this.diagnoses = [];
              this.http.get(awcQues).subscribe(function (data) {
                var result = [];

                for (var i in data) {
                  result.push([i, data[i]]);
                }

                var optioning = _this.jsonParse(data.options.data, data.options.columns);

                var questioning = _this.jsonParse(data.questions.data, data.questions.columns);

                questioning = questioning.filter(function (item) {
                  return item.controlName == 63;
                });

                if (questioning.length > 0) {
                  var ageYearsArray = questioning[0].options.split(',');
                  var filteredOptions = optioning.filter(function (option) {
                    return ageYearsArray.includes(String(option.id));
                  });
                  _this.diagnoses = filteredOptions;
                }

                var checkAwcViewType = localStorage.getItem('myPatientViewType');
                _this.jsonData = '';

                if (checkAwcViewType && checkAwcViewType != undefined) {
                  _this.jsonData = JSON.parse(checkAwcViewType);
                  _this.filterBy = _this.jsonData.type;
                  _this.filterDiagnosis = _this.jsonData.diagnosis;

                  if (_this.filterBy != '2') {
                    if (_this.filterBy == '1') {
                      _this.fltDiagnosis = [{
                        type: _this.filterBy,
                        value: 'All',
                        label: "All",
                        selected: false
                      }].concat(_toConsumableArray(_this.diagnoses));

                      if (_this.filterDiagnosis.length == 0) {
                        _this.filterDiagnosis.push({
                          type: _this.filterBy,
                          value: 'All',
                          label: "All"
                        });
                      }
                    } else {
                      console.log(_this.diagnoses);
                      _this.fltDiagnosis = [{
                        type: _this.filterBy,
                        value: 'All',
                        label: "All"
                      }].concat(_toConsumableArray(_this.diagnoses.filter(function (item) {
                        return item.opt_type === _this.filterBy;
                      })));

                      if (_this.filterDiagnosis.length == 0) {
                        _this.filterDiagnosis.push({
                          type: _this.filterBy,
                          value: 'All',
                          label: "All"
                        });
                      }
                    }

                    _this.onSelectionChange2();
                  } else {
                    _this.fltDiagnosis = [];
                  }
                }
              }, function (error) {
                _this.alertService.warning("Error While getting Questions");
              });
            }
          }
        }, {
          key: "jsonParse",
          value: function jsonParse(data, column) {
            var arr = [];

            for (var i = 0; i < data.length; i++) {
              var obj = {};

              for (var j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
              }

              obj.subques = [];
              obj.isMapped = false;
              arr.push(obj);
            }

            ;
            return arr;
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.modalCtrl.dismiss();

            if (this.jsonData && this.jsonData != undefined) {
              this.router.navigate(['/tabs/deic-referred']);
            } else {
              this.router.navigate(['/tabs/home']);
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            var obj = {};

            if (this.filterBy) {
              if (this.filterBy != '2') {
                if (this.filterDiagnosis[0].value === 'All') {
                  obj = {
                    type: this.filterBy,
                    diagnosis: []
                  };
                } else {
                  obj = {
                    type: this.filterBy,
                    diagnosis: this.filterDiagnosis
                  };
                }

                this.modalCtrl.dismiss(obj); // Dismiss the modal
              } else if (this.filterBy == '2') {
                obj = {
                  type: this.filterBy,
                  diagnosis: []
                };
                this.modalCtrl.dismiss(obj); // Dismiss the modal
              } else {
                this.alertService.warning("Please select the diagnosis");
              }
            } else {
              this.alertService.warning("Please select the field");
            }
          }
        }, {
          key: "selectFilterBy",
          value: function selectFilterBy() {
            var _this2 = this;

            debugger;
            this.filterDiagnosis = [];
            this.fltDiagnosis = [];
            console.log(this.filterBy);

            if (this.filterBy != 1) {
              if (this.mhtOrAwc === 'mht') {
                this.fltDiagnosis = [{
                  type: this.filterBy,
                  value: 'All',
                  label: "All"
                }].concat(_toConsumableArray(this.diagnoses.filter(function (item) {
                  return item.type === _this2.filterBy;
                })));
              } else {
                this.fltDiagnosis = [{
                  type: this.filterBy,
                  value: 'All',
                  label: "All"
                }].concat(_toConsumableArray(this.diagnoses.filter(function (item) {
                  return item.opt_type === _this2.filterBy;
                })));
              }
            } else {
              this.fltDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }].concat(_toConsumableArray(this.diagnoses));
            }

            this.onSelectionChange2();
          }
        }, {
          key: "onSelectionChange",
          value: function onSelectionChange(event, ionicSelectable) {
            debugger;

            if (event.isSelected === true && event.item.value === 'All') {
              this.filterDiagnosis = [];
              this.filterDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }];
              this.disabledItems = this.fltDiagnosis.filter(function (item) {
                return item.value !== 'All';
              });
              ionicSelectable.close();
            } else {
              this.disabledItems = [];
            }
          }
        }, {
          key: "onSelectionChange2",
          value: function onSelectionChange2() {
            if (this.filterDiagnosis.some(function (item) {
              return item.value === 'All';
            })) {
              this.filterDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }]; // Reset selection to only "All"

              this.disabledItems = this.fltDiagnosis.filter(function (item) {
                return item.value !== 'All';
              });
            } else {
              this.disabledItems = [];
            }
          }
        }]);
      }();

      _MyPatientViewModalPage.ctorParameters = function () {
        return [{
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_3__.DiagnosisService
        }];
      };

      _MyPatientViewModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-patient-view-modal',
        template: _raw_loader_my_patient_view_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_patient_view_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyPatientViewModalPage);
      /***/
    },

    /***/
    40190:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/my-patient-list/my-patient-view-modal/my-patient-view-modal.page.scss ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wYXRpZW50LXZpZXctbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    42675:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-patient-list/my-patient-view-modal/my-patient-view-modal.page.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">My patient List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon name=\"close-outline\" size=\"large\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;\">\r\n      <ion-label>Filter by <span style=\"color: red;\"> *</span></ion-label>\r\n      <ion-select label-placement=\"stacked\" [(ngModel)]=\"filterBy\" placeholder=\"Select Filter by\"\r\n      (ngModelChange)=\"selectFilterBy()\">\r\n        <ion-select-option value=\"D1\">D1</ion-select-option>\r\n        <ion-select-option value=\"D2\">D2</ion-select-option>\r\n        <ion-select-option value=\"D3\">D3</ion-select-option>\r\n        <ion-select-option value=\"D4\">D4</ion-select-option>\r\n        <ion-select-option value=\"1\">All Diagnosis</ion-select-option>\r\n        <ion-select-option value=\"2\">No filter</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"filterBy == 'D1' || filterBy == 'D2' || filterBy == 'D3' || filterBy == 'D4' || filterBy == '1'\" >\r\n    <h5 style=\"text-align: center;\">\r\n      {{filterBy == 'D1' ? 'D1' : filterBy == 'D2' ? 'D2' : filterBy == 'D3' ? 'D3' : filterBy == 'D4' ? 'D4' : filterBy == '1' ? 'All Diagnosis' : null}}<span style=\"color: red;\"> *</span>\r\n    </h5>\r\n    <ion-item style=\"background-color: white;margin-bottom: 20px;border-radius: 18px;font-size: 20px;\r\n    margin-top: 10px; margin-left: 20px; margin-right: 20px;\">\r\n      <ionic-selectable \r\n        #ionicSelectable\r\n        placeholder=\"Select Diagnosis\"\r\n        item-content\r\n        itemValueField=\"value\" \r\n        itemTextField=\"label\" \r\n        [items]=\"fltDiagnosis\"\r\n        [(ngModel)]=\"filterDiagnosis\"\r\n        [canSearch]=\"true\"\r\n        [isMultiple]=\"true\"\r\n        (onSelect)=\"onSelectionChange($event,ionicSelectable)\"\r\n        [disabledItems]=\"disabledItems\"\r\n        >\r\n      </ionic-selectable>\r\n    </ion-item>\r\n  </div>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button style=\"color: white\" (click)=\"closeModal()\">Submit</ion-button>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_page_ts-es5.js.map