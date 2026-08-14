(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ezhutharivu-thittam_learner_learner_module_ts"], {
    /***/
    40095:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/learner/learner-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnerPageRoutingModule": function LearnerPageRoutingModule() {
          return (
            /* binding */
            _LearnerPageRoutingModule
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


      var _learner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./learner.page */
      65585);

      var routes = [{
        path: '',
        component: _learner_page__WEBPACK_IMPORTED_MODULE_0__.LearnerPage
      }];

      var _LearnerPageRoutingModule = /*#__PURE__*/_createClass(function LearnerPageRoutingModule() {
        _classCallCheck(this, LearnerPageRoutingModule);
      });

      _LearnerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LearnerPageRoutingModule);
      /***/
    },

    /***/
    76311:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/learner/learner.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnerPageModule": function LearnerPageModule() {
          return (
            /* binding */
            _LearnerPageModule
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


      var _learner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./learner-routing.module */
      40095);
      /* harmony import */


      var _learner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./learner.page */
      65585);

      var _LearnerPageModule = /*#__PURE__*/_createClass(function LearnerPageModule() {
        _classCallCheck(this, LearnerPageModule);
      });

      _LearnerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _learner_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearnerPageRoutingModule],
        declarations: [_learner_page__WEBPACK_IMPORTED_MODULE_1__.LearnerPage]
      })], _LearnerPageModule);
      /***/
    },

    /***/
    65585:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/learner/learner.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnerPage": function LearnerPage() {
          return (
            /* binding */
            _LearnerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_learner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./learner.page.html */
      59890);
      /* harmony import */


      var _learner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./learner.page.scss */
      27297);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/shared.service */
      7386);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461); // import { SharedService } from 'src/app/services/emis/shared.service';


      var _LearnerPage = /*#__PURE__*/function () {
        function LearnerPage(activeRoute, router, fb, sharedService, http, emisService, alertService, ionicstorage, usersessionService) {
          _classCallCheck(this, LearnerPage);

          this.activeRoute = activeRoute;
          this.router = router;
          this.fb = fb;
          this.sharedService = sharedService;
          this.http = http;
          this.emisService = emisService;
          this.alertService = alertService;
          this.ionicstorage = ionicstorage;
          this.usersessionService = usersessionService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
          this.summitted = false;
          this.formData = [];
          this.today = new Date().toJSON().split('T')[0];
          var menuData = this.activeRoute.snapshot.queryParams.menudata;
          var schoolData = this.activeRoute.snapshot.queryParams.schooldata;
          this.menuData = JSON.parse(menuData);
          this.schoolData = JSON.parse(schoolData);
          console.log('this.schoolData', this.schoolData);
          this.segment = 'learner';
          var d = new Date();
          var yd = d.setDate(d.getDate() - 1);
          this.yesterday = this.pipe.transform(yd, 'yyyy-MM-dd');
          console.log('this.yesterday', this.yesterday, yd);
        }

        return _createClass(LearnerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.date = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            this.initialValidator(); // (this.menuData.id == 1 || this.menuData.id == 2) ? this.dropdownList() : this.savedList();
            // this.viewLearner = false;
            // this.viewVolunteer = false;

            this.dropdownList();

            if (this.menuData.id == 3) {
              this.savedList();
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.TamilChange();
          }
        }, {
          key: "savedList",
          value: function savedList() {
            this.SchoolId = this.schoolData.school_id;
            this.savedId = 1;

            if (this.savedId == 1) {
              this.learnersDetails();
            }
          }
        }, {
          key: "dropdownList",
          value: function dropdownList() {
            var _this = this;

            this.gender = [{
              value: "1",
              label: "Male"
            }, {
              value: "2",
              label: "Female"
            }, {
              value: "3",
              label: "Transgender"
            }]; // if (this.menuData.id == 1) {

            this.MarritalSts = [{
              value: "1",
              label: "Married"
            }, {
              value: "2",
              label: "Unmarried"
            }];
            this.GuardianType = [{
              value: "1",
              label: "Father"
            }, {
              value: "2",
              label: "Mother"
            }, {
              value: "3",
              label: "Husband"
            }, {
              value: "4",
              label: "Son"
            }, {
              value: "5",
              label: "Daughter"
            }];
            this.Occupation = [{
              value: "1",
              label: "Farmer"
            }, {
              value: "2",
              label: "NREGA"
            }, {
              value: "3",
              label: "Self Help Group"
            }, {
              value: "4",
              label: "Daily wages"
            }, {
              value: "5",
              label: "Factory"
            }, {
              value: "6",
              label: "Mills"
            }, {
              value: "7",
              label: "House wife"
            }, {
              value: "8",
              label: "Others"
            }];
            this.Differentlyabled = [{
              value: "1",
              label: "Yes"
            }, {
              value: "2",
              label: "No"
            }];
            this.SocialCategory = [{
              value: "1",
              label: "SC"
            }, {
              value: "2",
              label: "ST"
            }, {
              value: "3",
              label: "BC"
            }, {
              value: "4",
              label: "MBC"
            }, {
              value: "5",
              label: "MINORITIES"
            }, {
              value: "6",
              label: "OTHERS"
            }];
            this.WhetherLearner = [{
              value: "1",
              label: "Never Enrolled"
            }, {
              value: "2",
              label: "Dropout"
            }];
            this.LastStudiedClass = [{
              value: "1",
              label: "I"
            }, {
              value: "2",
              label: "II"
            }, {
              value: "3",
              label: "III"
            }, {
              value: "4",
              label: "IV"
            }, {
              value: "5",
              label: "V"
            }]; // this.http.get<any>('https://d1wpyxz35bzzz4.cloudfront.net/base_app_dist_master.json').subscribe((data) => {
            //   let allDistBlockList = data.base_app;

            this.ionicstorage.getData('district').then(function (data) {
              if (data) {
                var allDistBlockList = data.result;
                _this.districtList = [];
                _this.districtList = _this.sharedService.unique(allDistBlockList, ['district_id']);

                _this.districtList.sort(_this.sharedService.compareValues('district_name', 'asc'));
              }
            }); // this.http.get<any>('https://d1wpyxz35bzzz4.cloudfront.net/statewise.json').subscribe((data) => {
            //   let stateList = data.state;

            this.ionicstorage.getData('state').then(function (data) {
              if (data) {
                var stateList = data.result;
                _this.stateList = [];
                _this.stateList = _this.sharedService.unique(stateList, ['state_code']);

                _this.stateList.sort(_this.sharedService.compareValues('state_name', 'asc'));
              }
            }); // this.http.get<any>('https://d1wpyxz35bzzz4.cloudfront.net/cognates_language_wise.json').subscribe((data) => {

            this.ionicstorage.getData('language').then(function (data) {
              if (data) {
                var removeLng = ["English", "Undefined"];
                debugger;
                var languageList = data.result.filter(function (obj) {
                  return obj.language_name && !removeLng.includes(obj.language_name);
                }); // let languageList = data.language;

                _this.languageList = [];
                _this.languageList = _this.sharedService.unique(languageList, ['id']);

                _this.languageList.sort(_this.sharedService.compareValues('language_name', 'asc'));
              }
            }); // } else {

            this.MotherTongue = [{
              value: "1",
              label: "Tamil"
            }, {
              value: "2",
              label: "English"
            }, {
              value: "3",
              label: "Telegu"
            }, {
              value: "4",
              label: "Hindi"
            }, {
              value: "5",
              label: "Urdu"
            }, {
              value: "6",
              label: "Malayam"
            }];
            this.VlntrType = [{
              value: "1",
              label: "Teachers"
            }, {
              value: "2",
              label: "ITK"
            }, {
              value: "3",
              label: "School Students"
            }, {
              value: "4",
              label: "College Students"
            }, {
              value: "5",
              label: "Others"
            }]; // }

            this.accadList = [{
              value: "1",
              label: "SSLC"
            }, {
              value: "2",
              label: "Higher Secondary"
            }, {
              value: "3",
              label: "Graduate "
            }, {
              value: "4",
              label: "PG"
            }, {
              value: "5",
              label: "Mphil"
            }, {
              value: "6",
              label: "Phd"
            }, {
              value: "7",
              label: "Post Doctoral"
            }, {
              value: "8",
              label: "Others"
            }]; // this.http.get<any>('https://d1wpyxz35bzzz4.cloudfront.net/govt_aided_and_partial_aided.json').subscribe((data) => {
            //     let schoolList = data.govt_aided;
            //     this.schoolList = [];
            //     this.schoolList = this.sharedService.unique(schoolList, ['school_id']);
            //     this.schoolList.sort(this.sharedService.compareValues('school_name', 'asc'));
            //   });
            // this.ionLoaderService.simpleLoader();
            // this.ionicstorage.getData('volnteerSchool').then(
            //   (data) => {
            // this.ionLoaderService.dismissLoader();
            //     if (data) {
            //       let schoolList = data.result;
            //       this.schoolList = [];
            //       this.schoolList = this.sharedService.unique(schoolList, ['school_id']);
            //       this.schoolList.sort(this.sharedService.compareValues('school_name', 'asc'));
            //     }
            //   });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            // this.learnerForm.reset();
            // this.volunteerForm.reset();
            this.udise = this.schoolData.udise_code;
            this.SchoolId = this.schoolData.school_id;
            debugger;
            this.learnerForm = this.fb.group({
              'IndexId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              'SchoolId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchoolId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Udise': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.udise),
              'LearnerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'LearnerNameTamil': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Age': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'MarritalSts': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'GuardianType': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'GuardianName': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'GuardianNameTamil': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'LearnerAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'CurrentDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.usersessionService.district_id()),
              'Pincode': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'ContactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'OtherState': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'MotherTongue': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Occupation': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Differentlyabled': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'SocialCategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'EnrollmentDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'WhetherLearner': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'LastStudiedClass': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              'SpecialStudied': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
            });
            this.volunteerForm = this.fb.group({
              'IndexId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              'SchoolId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchoolId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'VlntrName': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'VlntrNameTamil': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'MotherTongue': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'MblNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Email': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Doj': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              'Qualification': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              // 'vlntrSchoolId ': new FormControl('', Validators.required),
              'VlntrType': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
            });
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            if (this.learnerForm.value.WhetherLearner == 1) {
              this.learnerForm.controls['LastStudiedClass'].setValue('');
              this.learnerForm.controls['LastStudiedClass'].setValidators(null);
            } else {
              this.learnerForm.controls['LastStudiedClass'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }

            this.learnerForm.controls['LastStudiedClass'].updateValueAndValidity();
          }
        }, {
          key: "onSave",
          value: function onSave(id) {
            debugger;

            if (id == 1) {
              var dob = this.pipe.transform(this.learnerForm.value.Dob, 'yyyy-MM-dd');
              var enrollmentDate = this.pipe.transform(this.learnerForm.value.EnrollmentDate, 'yyyy-MM-dd');
              this.learnerForm.controls['Dob'].setValue(dob);
              this.learnerForm.controls['EnrollmentDate'].setValue(enrollmentDate);
              var GuardianNameTamil = this.learnerForm.value.GuardianNameTamil.trim();
              this.learnerForm.controls['GuardianNameTamil'].setValue(GuardianNameTamil);
              this.learnerForm.controls['GuardianNameTamil'].updateValueAndValidity();
              var LearnerNameTamil = this.learnerForm.value.LearnerNameTamil.trim();
              this.learnerForm.controls['LearnerNameTamil'].setValue(LearnerNameTamil);
              this.learnerForm.controls['LearnerNameTamil'].updateValueAndValidity();
              var LearnerAddress = this.learnerForm.value.LearnerAddress.trim();
              this.learnerForm.controls['LearnerAddress'].setValue(LearnerAddress);
              this.learnerForm.controls['LearnerAddress'].updateValueAndValidity();
              var SpecialStudied = this.learnerForm.value.SpecialStudied.trim();
              this.learnerForm.controls['SpecialStudied'].setValue(SpecialStudied);
              this.learnerForm.controls['SpecialStudied'].updateValueAndValidity();
              console.log(this.learnerForm.valid, this.learnerForm.value);

              if (!this.learnerPincode && !this.learnerContact) {
                this.onFormSubmit(id);
                console.log('success');
              } else if (!this.learnerPincode || this.learnerContact) {
                var msg = this.learnerPincode && this.learnerContact ? 'Please Fill Valid Pincode and Contact Number' : this.learnerPincode ? 'Please Fill Valid Pincode' : 'Please Fill Valid Contact Number';
                this.alertService.error(msg);
              }
            } else {
              var _dob = this.pipe.transform(this.volunteerForm.value.Dob, 'yyyy-MM-dd');

              var Doj = this.pipe.transform(this.volunteerForm.value.Doj, 'yyyy-MM-dd');
              this.volunteerForm.controls['Dob'].setValue(_dob);
              this.volunteerForm.controls['Doj'].setValue(Doj);
              var VlntrNameTamil = this.volunteerForm.value.VlntrNameTamil.trim();
              this.volunteerForm.controls['VlntrNameTamil'].setValue(VlntrNameTamil);
              this.volunteerForm.controls['VlntrNameTamil'].updateValueAndValidity();

              if (!this.volContact) {
                this.onFormSubmit(id);
                console.log('success');
              } else {
                var _msg = 'Please Fill Valid Mobile Number';
                this.alertService.error(_msg);
              }
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(id) {
            var _this2 = this;

            // console.log(this.learnerForm.value)
            this.summitted = true;

            if (id == 1 ? this.learnerForm.valid : this.volunteerForm.valid) {
              this.emisService.learnersSave(id, {
                "records": id == 1 ? this.learnerForm.value : this.volunteerForm.value
              }).subscribe(function (res) {
                if (res.dataStatus) {
                  _this2.alertService.success(res.message);

                  _this2.navigationBack();
                } else {
                  _this2.alertService.error(res.message);
                }
              });
            } else {
              this.sharedService.validateAllFormFields(id == 1 ? this.learnerForm : this.volunteerForm);
            }
          }
        }, {
          key: "navigationBack",
          value: function navigationBack() {
            this.router.navigate(['tabs/ezhutharivu-thittam/dashboard']);
          } // Saved Details

        }, {
          key: "learnersDetails",
          value: function learnersDetails() {
            var _this3 = this;

            this.learnersList = [];
            this.emisService.learnerGet(this.SchoolId).subscribe(function (res) {
              if (res.dataStatus) {
                if (res.result.length > 0) {
                  _this3.learnersList = res.result;
                  _this3.noData = false;
                } else {
                  _this3.noData = true;
                }
              } else {
                _this3.noData = true;
              }
            });
          }
        }, {
          key: "volunteersDetails",
          value: function volunteersDetails() {
            var _this4 = this;

            this.volunteersList = [];
            this.emisService.volunteersGet(this.SchoolId).subscribe(function (res) {
              if (res.dataStatus) {
                if (res.result.length > 0) {
                  _this4.volunteersList = res.result;
                  _this4.noData = false;
                } else {
                  _this4.noData = true;
                }
              } else {
                _this4.noData = true;
              }
            });
          }
        }, {
          key: "onLearners",
          value: function onLearners() {
            debugger; // this.viewLearner = true;

            this.savedId = 1;
            this.learnersDetails();
          }
        }, {
          key: "onVolunteers",
          value: function onVolunteers() {
            // this.viewVolunteer = true;
            this.savedId = 2;
            this.volunteersDetails();
          }
        }, {
          key: "patchForm",
          value: function patchForm(id, data) {
            debugger;
            var MotherTongue = this.languageList.filter(function (obj) {
              return obj.id == data.MotherTongue;
            });
            var OtherState = this.stateList.filter(function (obj) {
              return obj.state_code == data.OtherState;
            });

            if (id == 1) {
              this.viewLearner = true;
              this.viewVolunteer = false;
              this.learnerForm.patchValue(data);
              this.learnerForm.controls['OtherState'].setValue(OtherState[0].value);
              this.learnerForm.controls['MotherTongue'].setValue(MotherTongue[0].id);
            } else {
              this.viewVolunteer = true;
              this.viewLearner = false;
              this.volunteerForm.patchValue(data);
            }
          }
        }, {
          key: "AgeCalc",
          value: function AgeCalc(formName) {
            var calcage = 0;
            var dob = new Date(this[formName].value.Dob);
            var currDate = new Date();
            var diff = currDate.getTime() - dob.getTime();
            calcage = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // if(calcage<15 || 40<calcage) {
            //   calcage = '';
            //   this.alertService.warning('Age between 15 to 40 years');
            // }

            this[formName].patchValue({
              Age: calcage
            });
          }
        }, {
          key: "TamilChange",
          value: function TamilChange() {
            $(document).ready(function () {
              $('input,textarea,ion-input').on('keydown', function (event) {
                if (event.which == 121) {
                  $(this).toggleClass('tamil');
                  return false;
                }

                if ($(this).hasClass('tamil')) {
                  toggleKBMode(event);
                } else {
                  return true;
                }
              });
              $('input,textarea,ion-input').on('keypress', function (event) {
                if ($(this).hasClass('tamil')) {
                  convertThis(event);
                }
              });
            });
          }
        }, {
          key: "tamilPatchVal",
          value: function tamilPatchVal(event, form, field) {
            debugger;

            if (event.target.value == " " && this.learnerForm.value.LearnerNameTamil == "") {
              this.learnerForm.controls['LearnerNameTamil'].setValue(null);
            } else {
              event.target.value;
              this[form].patchValue(_defineProperty({}, field, event.target.value));
            }
          }
        }, {
          key: "AllSameDigits",
          value: function AllSameDigits(str) {
            return /^(\d)\1+$/.test(str.replace(/[^\d]/g, ''));
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(id, key, value, len) {
            debugger;

            if (value.length < len) {
              var concatValue = key + value;
              var splitValue = concatValue.split('');

              if (concatValue.length == len) {
                var allEqual = function allEqual(arr) {
                  return arr.every(function (val) {
                    return val === arr[0];
                  });
                };

                var result = allEqual(splitValue);

                if (result) {
                  id == 1 ? this.onPincode(1) : id == 2 ? this.onContact(1, concatValue.length) : id == 3 ? this.volMobile(1) : '';
                } else {
                  id == 1 ? this.onPincode(2) : id == 2 ? this.onContact(2, concatValue.length) : id == 3 ? this.volMobile(2) : '';
                }
              } else {
                id == 1 ? this.onPincode(2) : id == 2 ? this.onContact(3, concatValue.length) : id == 3 ? this.volMobile(2) : '';
              }
            }
          }
        }, {
          key: "volMobile",
          value: function volMobile(id) {
            if (id == 1) {
              this.volContact = true;
              this.volunteerForm.controls['MblNumber'].setValue('');
              this.volunteerForm.controls['MblNumber'].updateValueAndValidity();
            } else {
              this.volContact = false;
            }
          }
        }, {
          key: "onContact",
          value: function onContact(id, length) {
            this.learnerMobileLength = '';

            if (id == 1) {
              this.learnerContact = true;
              this.learnerForm.controls['ContactNumber'].setValue('');
              this.learnerForm.controls['ContactNumber'].updateValueAndValidity();
            } else {
              this.learnerContact = false;
            }
          }
        }, {
          key: "onPincode",
          value: function onPincode(id) {
            if (id == 1) {
              this.learnerPincode = true;
              this.learnerForm.controls['Pincode'].setValue('');
              this.learnerForm.controls['Pincode'].updateValueAndValidity();
            } else {
              this.learnerPincode = false;
            }
          }
        }]);
      }();

      _LearnerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }];
      };

      _LearnerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-learner',
        template: _raw_loader_learner_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_learner_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LearnerPage);
      /***/
    },

    /***/
    27297:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/learner/learner.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  max-width: 100% !important;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  color: #8B67B3 !important;\n}\n\nion-datetime {\n  max-width: 100% !important;\n}\n\nion-select {\n  max-width: 100% !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  font-size: 13px;\n}\n\nion-input {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding-left: 3px !important;\n  padding-right: 10px !important;\n  font-size: 13px;\n}\n\nion-datetime {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  font-size: 13px;\n}\n\nion-textarea {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding-right: 10px !important;\n  font-size: 13px;\n}\n\n.color-red {\n  color: red;\n}\n\n.native-input.sc-ion-input-md {\n  padding-left: 10px !important;\n}\n\n.error {\n  font-size: 12px !important;\n  color: red !important;\n  font-family: \"Ubuntu\" !important;\n}\n\n.save-btn {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\nion-card {\n  margin: auto;\n  margin: 17px;\n  border-radius: 15px;\n  --background: white;\n  box-shadow: 0 4px 8px 0 #b0d4ef, 0 6px 20px 0 #e5eef5;\n}\n\n.lbl2 {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 12px;\n  color: #595c5e;\n}\n\n.lbl1 {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 12px;\n  color: black;\n}\n\n.icon-lbl {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  zoom: 1.7;\n  color: green;\n}\n\n.lblname {\n  font-size: 17px;\n  color: #8B67B3;\n  padding-bottom: 0px;\n}\n\n.ion-row {\n  padding: 15px;\n}\n\n.age-bck {\n  background: lightgray;\n  color: black;\n  font-weight: 800;\n}\n\nion-button {\n  --ion-color-contrast:white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFFQSw4QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFHQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFBOztBQUlBO0VBQ0ksWUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVFBO0VBQ0ksYUFBQTtBQUxKOztBQVlBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLHFDQUFBO0FBVEoiLCJmaWxlIjoibGVhcm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xyXG4gICAgbWF4LXdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICAgIG1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDsgICAgXHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY29sb3ItcmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYXZlLWJ0bntcclxucGFkZGluZy10b3A6MTBweDtcclxucGFkZGluZy1ib3R0b206MTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBzYXZlZCBkZXRhaWxzXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vIGNvbG9yOiAjNTk1YzVlO1xyXG4gICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjYjBkNGVmLCAwIDZweCAyMHB4IDAgI2U1ZWVmNTtcclxufVxyXG5cclxuXHJcbi5sYmwyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM1OTVjNWU7XHJcbn1cclxuLmxibDF7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24tbGJse1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHpvb206IDEuNztcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmxibG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxufVxyXG5cclxuXHJcbi5pb24tcm93IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi8vIC5wdDZ7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4vLyB9XHJcblxyXG4uYWdlLWJjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OndoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    59890:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ezhutharivu-thittam/learner/learner.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigationBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"padding-bottom: 0px;\">\r\n          {{menuData.menu}}\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"padding-top: 0px;\">\r\n          <span style=\"font-size: 14px;\">{{this.schoolData.school_name}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-title>\r\n      <!-- {{menuData.menu}}<br><span style=\"font-size: 14px;\">{{this.schoolData.school_name}}</span></ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"menuData.id == 1 || viewLearner\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <form [formGroup]=\"learnerForm\">\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>1.</span>Learner Name (in English)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"^([a-zA-Z]+ )*[a-zA-Z]+$\" maxLength=\"100\" placeholder=\"Please Enter\"\r\n                formControlName=\"LearnerName\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['LearnerName'].hasError('required') && (learnerForm.controls['LearnerName'].dirty || learnerForm.controls['LearnerName'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['LearnerName'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>2.</span>Learner Name (in Tamil)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input class=\"tamil\" type=\"text\" pattern=\"^[\\u0D80-\\u0DFF \\u0B80-\\u0BFF \\b]+$\" maxLength=\"100\"\r\n                placeholder=\"Please Enter\" formControlName=\"LearnerNameTamil\"\r\n                (keyup)=\"tamilPatchVal($event,'learnerForm','LearnerNameTamil')\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['LearnerNameTamil'].hasError('required') && (learnerForm.controls['LearnerNameTamil'].dirty || learnerForm.controls['LearnerNameTamil'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['LearnerNameTamil'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>3.</span>Gender<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Gender\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of gender\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Gender'].hasError('required') && (learnerForm.controls['Gender'].dirty || learnerForm.controls['Gender'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>4.</span>Date of Birth<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-datetime placeholder=\"DD/MM/YYYY\" displayFormat=\"DD/MM/YYYY\" formControlName=\"Dob\"\r\n                (ionChange)=\"AgeCalc('learnerForm')\" [max]=\"yesterday\"></ion-datetime>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Dob'].hasError('required') && (learnerForm.controls['Dob'].dirty || learnerForm.controls['Dob'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>5.</span>Age<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"tel\" maxLength=\"3\" formControlName=\"Age\" disabled=\"true\" class=\"age-bck\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Age'].hasError('required') && (learnerForm.controls['Age'].dirty || learnerForm.controls['Age'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['Age'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>6.</span>Marital status<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MarritalSts\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of MarritalSts\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['MarritalSts'].hasError('required') && (learnerForm.controls['MarritalSts'].dirty || learnerForm.controls['MarritalSts'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>7.</span>Guardian Type<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"GuardianType\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of GuardianType\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['GuardianType'].hasError('required') && (learnerForm.controls['GuardianType'].dirty || learnerForm.controls['GuardianType'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>8.</span>Guardian Name (in English)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"^([a-zA-Z]+ )*[a-zA-Z]+$\" maxLength=\"100\" placeholder=\"Please Enter\"\r\n                formControlName=\"GuardianName\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['GuardianName'].hasError('required') && (learnerForm.controls['GuardianName'].dirty || learnerForm.controls['GuardianName'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['GuardianName'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>9.</span>Guardian Name (in Tamil)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input class=\"tamil\" type=\"text\" pattern=\"^[\\u0D80-\\u0DFF \\u0B80-\\u0BFF \\b]+$\" maxLength=\"100\"\r\n                placeholder=\"Please Enter\" formControlName=\"GuardianNameTamil\"\r\n                (keyup)=\"tamilPatchVal($event,'learnerForm','GuardianNameTamil')\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['GuardianNameTamil'].hasError('required') && (learnerForm.controls['GuardianNameTamil'].dirty || learnerForm.controls['GuardianNameTamil'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['GuardianNameTamil'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>10.</span>Learners Current Address<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-textarea maxlength=\"500\" placeholder=\"Please Enter\" formControlName=\"LearnerAddress\"\r\n                rows=\"5\"></ion-textarea>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['LearnerAddress'].hasError('required') && (learnerForm.controls['LearnerAddress'].dirty || learnerForm.controls['LearnerAddress'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>11.</span>Current District<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CurrentDistrict\">\r\n                <ion-select-option [value]=\"list.district_id\" *ngFor=\"let list of districtList\">{{list.district_name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['CurrentDistrict'].hasError('required') && (learnerForm.controls['CurrentDistrict'].dirty || learnerForm.controls['CurrentDistrict'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>11.</span>Pincode<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"tel\" pattern=\"[0-9]{6,6}$\" maxLength=\"6\" placeholder=\"Please Enter\"\r\n                formControlName=\"Pincode\"\r\n                (keydown)=\"onKeydown(1,$event.key,this.learnerForm.value.Pincode,6)\"></ion-input>\r\n\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Pincode'].hasError('required') && (learnerForm.controls['Pincode'].dirty || learnerForm.controls['Pincode'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row >\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['Pincode'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerPincode\">\r\n                  Please Enter Valid Pincode</p>\r\n              </ion-row>\r\n\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>12.</span>Contact Number<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"tel\" pattern=\"[6-9][0-9]{9,9}$\" maxLength=\"10\" placeholder=\"Please Enter\"\r\n                formControlName=\"ContactNumber\"\r\n                (keydown)=\"onKeydown(2,$event.key,this.learnerForm.value.ContactNumber,10)\"></ion-input>\r\n              <ion-row>\r\n                <P class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['ContactNumber'].hasError('required') && (learnerForm.controls['ContactNumber'].dirty || learnerForm.controls['ContactNumber'].touched))\">\r\n                  Field is required</P>\r\n              </ion-row>\r\n              <ion-row>\r\n                <P class=\"error\" *ngIf=\"learnerForm.controls['ContactNumber'].errors?.pattern\">\r\n                  Invaild Format</P>\r\n              </ion-row>\r\n              <ion-row>\r\n                <P class=\"error\" *ngIf=\"learnerContact\">Please Enter Valid Contact Number</P>\r\n              </ion-row>\r\n      </ion-col>\r\n      </ion-item>\r\n      </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>13.</span>If belongs to other State(Please mention the name of the State)<span\r\n                  class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"OtherState\">\r\n                <ion-select-option [value]=\"list.state_code\" *ngFor=\"let list of stateList\">{{list.state_name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['OtherState'].hasError('required') && (learnerForm.controls['OtherState'].dirty || learnerForm.controls['OtherState'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>14.</span>Mother Tongue<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MotherTongue\">\r\n                <ion-select-option [value]=\"list.id\" *ngFor=\"let list of languageList\">{{list.language_name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['MotherTongue'].hasError('required') && (learnerForm.controls['MotherTongue'].dirty || learnerForm.controls['MotherTongue'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>15.</span>Occupation<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Occupation\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of Occupation\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Occupation'].hasError('required') && (learnerForm.controls['Occupation'].dirty || learnerForm.controls['Occupation'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>16.</span>Whether Differently abled<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Differentlyabled\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of Differentlyabled\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['Differentlyabled'].hasError('required') && (learnerForm.controls['Differentlyabled'].dirty || learnerForm.controls['Differentlyabled'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>17.</span>Social Category<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SocialCategory\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of SocialCategory\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['SocialCategory'].hasError('required') && (learnerForm.controls['SocialCategory'].dirty || learnerForm.controls['SocialCategory'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>18.</span>Date of Enrollment<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-datetime display-timezone=\"utc\" placeholder=\"DD/MM/YYYY\" displayFormat=\"DD/MM/YYYY\"\r\n                formControlName=\"EnrollmentDate\" [max]='today'></ion-datetime>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['EnrollmentDate'].hasError('required') && (learnerForm.controls['EnrollmentDate'].dirty || learnerForm.controls['EnrollmentDate'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>19.</span>Whether the learner Never Enrolled or Dropout<span class=\"color-red\">\r\n                  *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WhetherLearner\"\r\n                (ionChange)=\"onChange($event)\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of WhetherLearner\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['WhetherLearner'].hasError('required') && (learnerForm.controls['WhetherLearner'].dirty || learnerForm.controls['WhetherLearner'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"learnerForm.value.WhetherLearner == 2\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>19(a).</span>If Dropout, Mention the class last studied<span class=\"color-red\">\r\n                  *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"LastStudiedClass\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of LastStudiedClass\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['LastStudiedClass'].hasError('required') && (learnerForm.controls['LastStudiedClass'].dirty || learnerForm.controls['LastStudiedClass'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>20.</span>Any Special Mention about the Learner if any such as Vocational Skills,\r\n                Additional Languages Known,any other unique skills and etc<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"[a-zA-Z0-9 \\b]+$\" placeholder=\"Please Enter\"\r\n                formControlName=\"SpecialStudied\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(learnerForm.controls['SpecialStudied'].hasError('required') && (learnerForm.controls['SpecialStudied'].dirty || learnerForm.controls['SpecialStudied'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"learnerForm.controls['SpecialStudied'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"save-btn\">\r\n        <ion-button color=\"primary\" (click)=\"onSave(1)\">Save</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"menuData.id == 2 || viewVolunteer\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <form [formGroup]=\"volunteerForm\">\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>1.</span>Name of the Volunteer (in English)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"^([a-zA-Z]+ )*[a-zA-Z]+$\" maxLength=\"100\" placeholder=\"Please Enter\"\r\n                formControlName=\"VlntrName\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['VlntrName'].hasError('required') && (volunteerForm.controls['VlntrName'].dirty || volunteerForm.controls['VlntrName'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"volunteerForm.controls['VlntrName'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>2.</span>Name of the Volunteer (in Tamil)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input class=\"tamil\" type=\"text\" pattern=\"^[\\u0D80-\\u0DFF \\u0B80-\\u0BFF \\b]+$\" maxLength=\"100\"\r\n                placeholder=\"Please Enter\" formControlName=\"VlntrNameTamil\"\r\n                (keyup)=\"tamilPatchVal($event,'volunteerForm','VlntrNameTamil')\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['VlntrNameTamil'].hasError('required') && (volunteerForm.controls['VlntrNameTamil'].dirty || volunteerForm.controls['VlntrNameTamil'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"volunteerForm.controls['VlntrNameTamil'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>3.</span>Gender<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Gender\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of gender\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['Gender'].hasError('required') && (volunteerForm.controls['Gender'].dirty || volunteerForm.controls['Gender'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>4.</span>Date of Birth<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-datetime display-timezone=\"utc\" placeholder=\"DD/MM/YYYY\" displayFormat=\"DD/MM/YYYY\"\r\n                formControlName=\"Dob\" [max]=\"yesterday\"></ion-datetime>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['Dob'].hasError('required') && (volunteerForm.controls['Dob'].dirty || volunteerForm.controls['Dob'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>5.</span>Mother Tongue<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MotherTongue\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of MotherTongue\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['MotherTongue'].hasError('required') && (volunteerForm.controls['MotherTongue'].dirty || volunteerForm.controls['MotherTongue'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>6.</span>Mobile Number<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"tel\" pattern=\"[6-9][0-9]{9,9}$\" maxLength=\"10\" placeholder=\"Please Enter\"\r\n                formControlName=\"MblNumber\"   (keydown)=\"onKeydown(3,$event.key,this.volunteerForm.value.MblNumber,10)\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['MblNumber'].hasError('required') && (volunteerForm.controls['MblNumber'].dirty || volunteerForm.controls['MblNumber'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"volunteerForm.controls['MblNumber'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <P class=\"error\" *ngIf=\"volContact\">Please Enter Valid Contact Number</P>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>7.</span>Email Address<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\" placeholder=\"Please Enter\"\r\n                formControlName=\"Email\"></ion-input>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['Email'].hasError('required') && (volunteerForm.controls['Email'].dirty || volunteerForm.controls['Email'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p class=\"error\" *ngIf=\"volunteerForm.controls['Email'].errors?.pattern\">\r\n                  Invaild Format</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>8.</span>Date of Joining<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-datetime display-timezone=\"utc\" placeholder=\"DD/MM/YYYY\" displayFormat=\"DD/MM/YYYY\"\r\n                formControlName=\"Doj\" [max]='today'></ion-datetime>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['Doj'].hasError('required') && (volunteerForm.controls['Doj'].dirty || volunteerForm.controls['Doj'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>9.</span>Academic Qualifications<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Qualification\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of accadList\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['Qualification'].hasError('required') && (volunteerForm.controls['Qualification'].dirty || volunteerForm.controls['Qualification'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>10.</span>Literacy Center (School Name)<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"vlntrSchoolId \">\r\n                <ion-select-option [value]=\"list.school_id\" *ngFor=\"let list of schoolList\">{{list.school_name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['vlntrSchoolId '].hasError('required') && (volunteerForm.controls['vlntrSchoolId '].dirty || volunteerForm.controls['vlntrSchoolId '].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-col size=\"12\">\r\n              <ion-label><span>10.</span>Volunteer Type<span class=\"color-red\"> *</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"VlntrType\">\r\n                <ion-select-option [value]=\"list.value\" *ngFor=\"let list of VlntrType\">{{list.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row>\r\n                <p class=\"error\"\r\n                  *ngIf=\"(volunteerForm.controls['VlntrType'].hasError('required') && (volunteerForm.controls['VlntrType'].dirty || volunteerForm.controls['VlntrType'].touched))\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"save-btn\">\r\n        <ion-button color=\"primary\" (click)=\"onSave(2)\">Save</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"menuData.id == 3 && !viewLearner && !viewVolunteer\">\r\n  <ion-segment [value]=\"segment\">\r\n    <ion-segment-button value=\"learner\" (click)=\"onLearners()\">\r\n      <ion-label>Learners</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"volunteer\" (click)=\"onVolunteers()\">\r\n      <ion-label>Volunteers</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div *ngIf=\"noData\">\r\n    <ion-card>\r\n      <ion-row class=\"ion-row\">\r\n        <ion-col size=\"12\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"savedId == 1 && learnersList.length > 0\">\r\n    <ion-card *ngFor=\"let item of learnersList\">\r\n\r\n      <ion-row class=\"ion-row\">\r\n\r\n        <ion-col size=\"10\">\r\n          <ion-label class=\"lblname\">{{item.LearnerName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"text-align: end;padding-bottom:0px;\" (click)=\"patchForm(1,item)\">\r\n          <ion-label class=\"icon-lbl\" style=\"color:green !important;\">\r\n            <!-- <ion-icon name=\"eye\"></ion-icon> -->\r\n            <ion-icon name=\"create\"></ion-icon>\r\n          </ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Date of Birth</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.Dob | date:'dd-MM-yyyy' }}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Date of Enrollment</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.EnrollmentDate | date:'dd-MM-yyyy'}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Contact Number</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.ContactNumber}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"savedId == 2 && volunteersList.length > 0\">\r\n    <ion-card *ngFor=\"let item of volunteersList\">\r\n\r\n      <ion-row class=\"ion-row\">\r\n\r\n        <ion-col size=\"10\">\r\n          <ion-label class=\"lblname\">{{item.VlntrName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"text-align: end;padding-bottom:0px;\" (click)=\"patchForm(2,item)\">\r\n          <ion-label class=\"icon-lbl\" style=\"color:green !important;\">\r\n            <!-- <ion-icon name=\"eye\"></ion-icon> -->\r\n            <ion-icon name=\"create\"></ion-icon>\r\n          </ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"2\" style=\"text-align: end;padding-bottom:0px;\">\r\n          <ion-label class=\"icon-lbl\">\r\n            <ion-icon name=\"eye\"></ion-icon>\r\n          </ion-label>\r\n        </ion-col> -->\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Date of Birth</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.Dob | date:'dd-MM-yyyy' }}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Date of Joining</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.Doj | date:'dd-MM-yyyy'}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl1\">Mobile Number</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"pt\">\r\n          <ion-label class=\"lbl2\">{{item.MblNumber}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ezhutharivu-thittam_learner_learner_module_ts-es5.js.map