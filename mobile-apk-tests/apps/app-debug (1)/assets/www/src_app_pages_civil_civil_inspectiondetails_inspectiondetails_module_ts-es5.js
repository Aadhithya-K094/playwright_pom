(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_inspectiondetails_inspectiondetails_module_ts"], {
    /***/
    13389:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/inspectiondetails/inspectiondetails-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectiondetailsPageRoutingModule": function InspectiondetailsPageRoutingModule() {
          return (
            /* binding */
            _InspectiondetailsPageRoutingModule
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


      var _inspectiondetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspectiondetails.page */
      73901);

      var routes = [{
        path: '',
        component: _inspectiondetails_page__WEBPACK_IMPORTED_MODULE_0__.InspectiondetailsPage
      }];

      var _InspectiondetailsPageRoutingModule = /*#__PURE__*/_createClass(function InspectiondetailsPageRoutingModule() {
        _classCallCheck(this, InspectiondetailsPageRoutingModule);
      });

      _InspectiondetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InspectiondetailsPageRoutingModule);
      /***/
    },

    /***/
    5144:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/inspectiondetails/inspectiondetails.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectiondetailsPageModule": function InspectiondetailsPageModule() {
          return (
            /* binding */
            _InspectiondetailsPageModule
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


      var _inspectiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspectiondetails-routing.module */
      13389);
      /* harmony import */


      var _inspectiondetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspectiondetails.page */
      73901);

      var _InspectiondetailsPageModule = /*#__PURE__*/_createClass(function InspectiondetailsPageModule() {
        _classCallCheck(this, InspectiondetailsPageModule);
      });

      _InspectiondetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inspectiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectiondetailsPageRoutingModule],
        declarations: [_inspectiondetails_page__WEBPACK_IMPORTED_MODULE_1__.InspectiondetailsPage]
      })], _InspectiondetailsPageModule);
      /***/
    },

    /***/
    73901:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/civil/civil/inspectiondetails/inspectiondetails.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectiondetailsPage": function InspectiondetailsPage() {
          return (
            /* binding */
            _InspectiondetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_inspectiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inspectiondetails.page.html */
      17739);
      /* harmony import */


      var _inspectiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspectiondetails.page.scss */
      89160);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/aws.service */
      56263);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _InspectiondetailsPage = /*#__PURE__*/function () {
        function InspectiondetailsPage(router, fb, uploadService, geolocation, alertService, userService, awsService, route) {
          _classCallCheck(this, InspectiondetailsPage);

          this.router = router;
          this.fb = fb;
          this.uploadService = uploadService;
          this.geolocation = geolocation;
          this.alertService = alertService;
          this.userService = userService;
          this.awsService = awsService;
          this.route = route;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
          this.isCheck = true;
          this.value = 'yes';
          this.kayvalue = [];
        }

        return _createClass(InspectiondetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.kayvalue = [];
            this.form.reset();
            this.image1 = "";
            this.image2 = "";
            this.image3 = "";
            this.photoActive = false;
            this.activeremark = false;
            this.today = new Date();
            this.todayDate = this.pipe.transform(this.today, 'yyyy-MM-dd');
            this.routeData = this.route.snapshot;
            this.surveyId = this.routeData.queryParams.surveyId;
            this.SchoolId = this.routeData.queryParams.schoolId;
            this.ConstId = this.routeData.queryParams.constId;
            this.Latitude = this.routeData.queryParams.lat;
            this.Logitude = this.routeData.queryParams["long"];
            this.alotYear = this.routeData.queryParams.acyear;
            this.Id = this.routeData.queryParams.Id;
            this.getSurveyQuestions();
            this.getdDropdownList();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              survey_details: this.fb.array([]),
              'Pht1': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              'Pht2': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              'Pht3': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null)
            });
          }
        }, {
          key: "getdDropdownList",
          value: function getdDropdownList() {
            this.construct_stage = [{
              value: '1',
              label: "Marking"
            }, {
              value: '2',
              label: "Earth Work"
            }, {
              value: '3',
              label: "Foundation Concrete"
            }, {
              value: '4',
              label: "Grade beam / Plinth Beam"
            }, {
              value: '5',
              label: "Basement"
            }, {
              value: '6',
              label: "Lintel level"
            }, {
              value: '7',
              label: "Roof level"
            }, {
              value: '8',
              label: "Roof Centering"
            }, {
              value: '9',
              label: "Roof concrete laid"
            }, {
              value: '10',
              label: "Plastering"
            }, {
              value: '11',
              label: "Flooring"
            }, {
              value: '12',
              label: "Weathering course"
            }, {
              value: '13',
              label: "Finishing level"
            }, {
              value: '14',
              label: "Completed"
            }, {
              value: '15',
              label: "Stages"
            }, {
              value: '16',
              label: "Tender stage"
            }, {
              value: '17',
              label: "Tender under scrutiny"
            }, {
              value: '18',
              label: "Estimate stage"
            }, {
              value: '19',
              label: "Site not handed over to PWD"
            }, {
              value: '20',
              label: "Site handed over but work not started"
            }];
            this.status = [{
              value: '1',
              label: "Completed"
            }, {
              value: '2',
              label: "In Progress"
            }, {
              value: '3',
              label: "Not yet constructed"
            }];
            this.quality = [{
              value: '1',
              label: "Satisfactory"
            }, {
              value: '2',
              label: "Requires Improvement"
            }];
            this.fund = [{
              value: '1',
              label: "Fund released"
            }, {
              value: '2',
              label: "Not yet released"
            }];
          }
        }, {
          key: "getSurveyQuestions",
          value: function getSurveyQuestions() {
            var _this = this;

            this.awsService.getSurveyQuestions(this.surveyId).subscribe(function (res) {
              if (res) {
                //debugger
                _this.data = res.filter(function (val) {
                  return val.QuestTyp != '6';
                });
                _this.photoData = res.filter(function (val) {
                  return val.QuestTyp == '6';
                });

                _this.onSurveyList(_this.data);
              }
            });
          }
        }, {
          key: "onSurveyList",
          value: function onSurveyList(item) {
            this.username = window.localStorage.getItem('username');
            var control = this.form.controls['survey_details'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = [];
            this.queslist = this.form.controls.survey_details;

            if (item.length > 0) {
              for (var _i = 0; _i < item.length; _i++) {
                this.queslist.push(this.fb.group({
                  IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                  SchlID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchoolId, null),
                  AllotmentYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.alotYear, null),
                  BuildingType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.ConstId, null),
                  SrvyID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].survey_id, null),
                  QuestID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].QuestID, null),
                  QuestTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].QuestTyp, null),
                  RespInt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].ResponseInt, null),
                  RespChar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].ResponseChar, null),
                  Lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.Latitude, null),
                  Long: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.Logitude, null),
                  CreatrUsrNam: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.username, null),
                  RespStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(1, null),
                  Quest: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].Quest, null),
                  min: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].minlength, null),
                  max: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[_i].maxlength, null),
                  value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null)
                }));

                if (this.queslist.value[_i]['SrvyID'] == 5001 && this.queslist.value[_i]['RespInt'] == 1) {
                  this.form.controls['survey_details']['controls'][_i].controls['value'].setValue('Yes');
                } else {
                  this.form.controls['survey_details']['controls'][_i].controls['value'].setValue('No');
                }

                if (this.queslist.value[_i]['QuestTyp'] == 5) {
                  this.form.controls['survey_details']['controls'][_i].controls['RespInt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                } else {
                  this.form.controls['survey_details']['controls'][_i].controls['RespInt'].setValidators(null);
                }

                this.form.controls['survey_details']['controls'][_i].controls['RespInt'].updateValueAndValidity();

                if (this.queslist.value[_i]['Quest'] == 'Remarks' || this.queslist.value[_i]['QuestTyp'] == 4) {
                  this.form.controls['survey_details']['controls'][_i].controls['RespChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                } else {
                  this.form.controls['survey_details']['controls'][_i].controls['RespChar'].setValidators(null);
                }

                this.form.controls['survey_details']['controls'][_i].controls['RespChar'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "photoList",
          value: function photoList(item) {
            this.queslist = this.form.controls.survey_details;

            if (item.length > 0) {
              for (var i = 0; i < item.length; i++) {
                this.queslist.push(this.fb.group({
                  IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                  SchlID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchoolId, null),
                  AllotmentYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.alotYear, null),
                  BuildingType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.ConstId, null),
                  SrvyID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].survey_id, null),
                  QuestID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].QuestID, null),
                  QuestTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].QuestTyp, null),
                  RespInt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].ResponseInt, null),
                  RespChar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].ResponseChar, null),
                  Lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.Latitude, null),
                  Long: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.Logitude, null),
                  CreatrUsrNam: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.username, null),
                  RespStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(1, null),
                  Quest: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].Quest, null),
                  min: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].minlength, null),
                  max: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].maxlength, null)
                }));
              }
            }
          }
        }, {
          key: "goToSurveyList",
          value: function goToSurveyList() {
            this.router.navigate(['tabs/civilbuildinglist'], {
              queryParams: {
                'Id': this.Id
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['tabs/home']);
          }
        }, {
          key: "onConstructionChange",
          value: function onConstructionChange(e, i) {
            if (e.detail.value == 2) {
              this.activeremark = true;
              this.form.controls['survey_details']['controls'][i].controls['RespChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            } else {
              this.activeremark = false;
              this.form.controls['survey_details']['controls'][i].controls['RespChar'].setValidators(null);
            }

            this.form.controls['survey_details']['controls'][i].controls['RespChar'].updateValueAndValidity();
          }
        }, {
          key: "onItemClickFunc",
          value: function onItemClickFunc(e, index) {
            this.isCheck = e.detail.checked;

            if (this.isCheck) {
              this.form.controls['survey_details']['controls'][index].controls['value'].setValue('Yes');
            } else {
              this.form.controls['survey_details']['controls'][index].controls['value'].setValue('No');
            }
          }
        }, {
          key: "goToCivil",
          value: function goToCivil() {
            this.photoActive = false;
          }
        }, {
          key: "onFinalSave",
          value: function onFinalSave() {
            var _this2 = this;

            //debugger
            this.submitted = true;
            this.photoList(this.photoData);

            if (this.form.value.Pht1) {
              this.kayvalue.push(this.form.value.Pht1);
            }

            if (this.form.value.Pht2) {
              this.kayvalue.push(this.form.value.Pht2);
            }

            if (this.form.value.Pht3) {
              this.kayvalue.push(this.form.value.Pht3);
            }

            var surveyList = this.form.value.survey_details;
            this.formData = surveyList.forEach(function (a) {
              if (a.QuestTyp == "6" && a.RespChar == null) {
                a.RespChar = _this2.kayvalue;
              }

              if (a.QuestTyp == "4") {
                a.RespChar = _this2.pipe.transform(a.RespChar, 'yyyy-MM-dd');
              }
            });
            var resdata = {
              "survey_resp": surveyList
            };
            console.log(resdata, "resdata", surveyList);

            if (this.form.valid) {
              if (this.form.value.Pht1 || this.form.value.Pht2 || this.form.value.Pht3) {
                this.userService.saveCivilSurvey(resdata).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this2.alertService.success(res.message);

                    _this2.router.navigate(['tabs/civilbuildinglist'], {
                      queryParams: {
                        'Id': _this2.Id
                      },
                      skipLocationChange: false
                    });
                  } else {
                    _this2.alertService.error(res.message);
                  }
                });
              } else {
                this.alertService.error('Please Choose Atleast One Photo');
              }
            } else {
              this.validateAllFormFields(this.form);
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            // //debugger
            this.submitted = true;

            if (this.form.valid) {
              this.photoActive = true;
            } else {
              this.validateAllFormFields(this.form);
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this3 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup) {
                _this3.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray) {
                _this3.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/civilbuildinglist']);
          } //Photo Upoload

        }, {
          key: "onchange",
          value: function onchange() {
            this.active = true;
          } // Photoupload
          //photo1

        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event) {
            var _this4 = this;

            // //debugger;
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
                  _this4.uploadUrl = fileReader.result;
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;

                  _this4.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      // const formData = new FormData();
                      // formData.append('file', this.doc_file);
                      var files = _this4.doc_file;
                      var file = files[0];

                      _this4.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                        _this4.form.controls.Pht1.setValue(result.key); //   this.kayvalue.push(this.form.value.Pht1);


                        _this4.getUploadedFiles1(result.key);

                        console.log(result.key);
                      });

                      _this4.alertService.success('File Uploaded Successfully');
                    } else {
                      _this4.alertService.error('Error in Uploading File please try again');
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
          value: function getUploadedFiles1(filename) {
            var _this5 = this;

            var bucketName = "renewalapplicationemis";
            var filename = filename;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this5.image1 = result.url;
              } else {
                _this5.alertService.error('Error in Uploading File please try again');
              }
            });
          } //photo2

        }, {
          key: "onSelectFile2",
          value: function onSelectFile2(event) {
            var _this6 = this;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].size <= 1000000000) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(event.target.files[0]);

                fileReader.onload = function (event) {
                  _this6.uploadUrl = fileReader.result;
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;

                  _this6.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      // const formData = new FormData();
                      // formData.append('file', this.doc_file);
                      var files = _this6.doc_file;
                      var file = files[0];

                      _this6.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                        _this6.form.controls.Pht2.setValue(result.key); //  this.kayvalue.push(this.form.value.Pht2);


                        _this6.getUploadedFiles2(result.key);
                      });

                      _this6.alertService.success('File Uploaded Successfully');
                    } else {
                      _this6.alertService.error('Error in Uploading File please try again');
                    }
                  });
                };
              } else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
              }
            }
          }
        }, {
          key: "getUploadedFiles2",
          value: function getUploadedFiles2(filename) {
            var _this7 = this;

            var bucketName = "renewalapplicationemis";
            var filename = filename;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this7.image2 = result.url;
              } else {
                _this7.alertService.error('Error in Uploading File please try again');
              }
            });
          } //photo3

        }, {
          key: "onSelectFile3",
          value: function onSelectFile3(event) {
            var _this8 = this;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].size <= 1000000000) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                var fileReader = new FileReader();
                fileReader.readAsDataURL(event.target.files[0]);

                fileReader.onload = function (event) {
                  _this8.uploadUrl = fileReader.result;
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;

                  _this8.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      // const formData = new FormData();
                      // formData.append('file', this.doc_file);
                      var files = _this8.doc_file;
                      var file = files[0];

                      _this8.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                        _this8.form.controls.Pht3.setValue(result.key); // this.kayvalue.push(this.form.value.Pht3);


                        _this8.getUploadedFiles3(result.key);
                      });

                      _this8.alertService.success('File Uploaded Successfully');
                    } else {
                      _this8.alertService.error('Error in Uploading File please try again');
                    }
                  });
                };
              } else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
              }
            }
          }
        }, {
          key: "getUploadedFiles3",
          value: function getUploadedFiles3(filename) {
            var _this9 = this;

            var bucketName = "renewalapplicationemis";
            var filename = filename;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this9.image3 = result.url;
              } else {
                _this9.alertService.error('Error in Uploading File please try again');
              }
            });
          }
        }]);
      }();

      _InspectiondetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
        }, {
          type: src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_5__.AwsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }];
      };

      _InspectiondetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-inspectiondetails',
        template: _raw_loader_inspectiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inspectiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InspectiondetailsPage);
      /***/
    },

    /***/
    89160:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/inspectiondetails/inspectiondetails.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.upload-btn {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 16px;\n  padding-left: 15px;\n  background: #f2e6ff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 5px;\n}\n\n.upload-icon {\n  color: #8B67B3;\n}\n\n.image {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.upload-txt {\n  padding-left: 5px;\n  padding-bottom: 10px;\n}\n\n.bck {\n  background-color: white;\n  margin: 15px;\n  border-radius: 5px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.txt-bck {\n  background-color: white;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 15px;\n  border-radius: 5px;\n}\n\nion-select {\n  --padding-start: 0px;\n  padding-top: 10px;\n}\n\nion-input {\n  --padding-start: 0px ;\n}\n\n.pad {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n}\n\n.header {\n  background-color: #8b67b3;\n  color: aliceblue;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.card-header {\n  padding-top: 0px;\n  padding-bottom: 13px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.add-row {\n  color: aliceblue;\n  font-weight: bold;\n}\n\n.add-card {\n  background-color: #8b67b3;\n  text-align: center;\n}\n\n.card-title {\n  background-color: #8b67b3;\n  color: aliceblue;\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n\n.back-icon {\n  color: aliceblue;\n}\n\n.imageAdd {\n  padding-left: 22px;\n  padding-bottom: 10px;\n}\n\n.list-build {\n  padding-top: 0.5px;\n  color: black;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ion-label {\n  color: rebeccapurple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb25kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREE7O0FBR0E7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFBOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUFtQixpQkFBQTtFQUNuQixrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFPRjs7QUFMQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFRQTs7QUFOQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUFTRjs7QUFQQTtFQUNFLHFCQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFSQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUEE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVdGOztBQVRBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWFGOztBQVhBO0VBQ0UsZ0JBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFkQTtFQUNFLFVBQUE7QUFpQkY7O0FBZkE7RUFDRSxvQkFBQTtBQWtCRiIsImZpbGUiOiJpbnNwZWN0aW9uZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Bob3RvIHVwbG9hZCBjc3NcclxuXHJcbi5maWxlSW5wdXQge1xyXG53aWR0aDogMC4xcHg7XHJcbmhlaWdodDogMC4xcHg7XHJcbm9wYWNpdHk6IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuei1pbmRleDogLTE7XHJcbn1cclxuLmZpbGVJbnB1dCAgIGxhYmVsIHtcclxuY29sb3I6ICM3MTcxNzE7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxucGFkZGluZzogLjVlbSAxZW07XHJcbmJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi51cGxvYWQtYnRuIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZTZmZjtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDttYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnVwbG9hZC1pY29uIHtcclxuICBjb2xvcjojOEI2N0IzO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHhcclxufVxyXG4udXBsb2FkLXR4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxufVxyXG4uYmNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46MTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxibCB7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4XHJcbn1cclxuLnR4dC1iY2sge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxubWFyZ2luLWxlZnQ6IDE1cHg7XHJcbm1hcmdpbi1yaWdodDogMTVweDtcclxubWFyZ2luLXRvcDogMTVweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHhcclxufVxyXG4ucGFke1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNjdiMztcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIC8vIGhlaWdodDogMzNweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmFkZC1yb3cge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFkZC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI2N2IzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI2N2IzO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLmltYWdlQWRkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxpc3QtYnVpbGQge1xyXG4gIHBhZGRpbmctdG9wOiAwLjVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uaW9uLWxhYmVsIHtcclxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    17739:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/inspectiondetails/inspectiondetails.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Civil Questions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"noData\">\r\n    <ion-row class=\"text-message\">\r\n      <ion-col size=\"12\" style=\"text-align: center !important;\">\r\n        <ion-label>No Data Found</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!noData\">\r\n    <form [formGroup]=\"form\">\r\n      <div formArrayName=\"survey_details\" style=\"padding-top: 5px;\">\r\n        <ion-row class=\"txt-bck\" *ngFor=\"let item of form.get('survey_details')['controls']; let i = index;\"\r\n          [formGroupName]=\"i\">\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '1'\" class=\"txtspace\">\r\n            <div class=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n              <ion-row style=\"padding-bottom:10px\">\r\n                <ion-label style=\"margin-right: auto;margin-top: auto;margin-bottom: auto;\">{{item.value.value}}\r\n                </ion-label>\r\n                <ion-toggle [value]=\"1\" (ionChange)=\"onItemClickFunc($event,i)\" [checked]=\"true\" style=\"float: right;\">\r\n                </ion-toggle>\r\n              </ion-row>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '2'\" class=\"txtspace\">\r\n            <div class=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n              <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" formControlName=\"RespInt\"\r\n                style=\"color: var(--ion-color-primary,#388);\" maxlength=\"{{item.value.MinLength}}\"\r\n                style=\"padding-left: 0px;\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '3'\" class=\"txtspace\">\r\n            <div class=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n              <ion-input type=\"text\" pattern=\"^[a-zA-Z \\b]+$\" placeholder=\"Please Enter Your Answer\"\r\n                formControlName=\"RespChar\" style=\"color: var(--ion-color-primary,#388);\">\r\n              </ion-input>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '4'\" class=\"txtspace\">\r\n            <div class=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<ion-icon\r\n                  name=\"calendar\" color=\"primary\">\r\n                </ion-icon><span class=\"valid-clr\">*</span></ion-label>\r\n              <ion-datetime display-timezone=\"utc\" displayFormat=\"DD/MM/YYYY\" formControlName=\"RespChar\"\r\n                style=\"    padding-bottom: 10px;\r\n                padding-top: 12px;\r\n                padding-left: 0px;\" min=\"2018\" max=\"{{todayDate}}\">\r\n              </ion-datetime>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '5' && item.value.Quest == 'Stage of the construction'\"\r\n            class=\"txtspace\">\r\n            <!-- <div class=\"pad\"> -->\r\n              <ion-item class=\"ion-margin-bottom\" lines=\"none\" style=\"margin-bottom: 10px;border-radius: 10px;\">\r\n                <ion-label position=\"floating\" class=\"lbl\" style=\"font-size: 22px;padding-top:0px\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of construct_stage\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                </ion-item>\r\n\r\n              <!-- <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n                  \r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of construct_stage\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select> -->\r\n            <!-- </div> -->\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '5' && item.value.Quest == 'Status of the work'\"\r\n            class=\"txtspace\">\r\n            <ion-item class=\"ion-margin-bottom\" lines=\"none\" style=\"margin-bottom: 10px;border-radius: 10px;\">\r\n              <ion-label position=\"floating\" class=\"lbl\" style=\"font-size: 22px;padding-top:0px\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                class=\"valid-clr\">*</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of status\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              </ion-item>\r\n            <!-- <div class=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of status\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div> -->\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '5' && item.value.Quest == 'Quality of the work'\"\r\n            class=\"txtspace\">\r\n            <!-- <div class=\"pad\"> -->\r\n              <ion-item class=\"ion-margin-bottom\" lines=\"none\" style=\"margin-bottom: 10px;border-radius: 10px;\">\r\n                <ion-label position=\"floating\" class=\"lbl\" style=\"font-size: 22px;padding-top:0px\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\" (ionChange)=\"onConstructionChange($event,i)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of quality\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                </ion-item>\r\n              <!-- <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\"\r\n                style=\"max-width: 100% !important;\" (ionChange)=\"onConstructionChange($event,i)\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of quality\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select> -->\r\n              <ion-col size=\"12\" *ngIf=\"activeremark\" style=\"padding-left:15px\">\r\n                <div class=\"pad\" style=\"padding-top:0px !important;\">\r\n                  <ion-label class=\"lbl\"><span class=\"index-aln\"></span>Remarks<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" pattern=\"^[a-zA-Z \\b]+$\" placeholder=\"Please Enter Your Answer\"\r\n                    formControlName=\"RespChar\" style=\"color: var(--ion-color-primary,#388);\">\r\n                  </ion-input>\r\n                </div>\r\n              </ion-col>\r\n            <!-- </div> -->\r\n          </ion-col>\r\n\r\n          <!-- <ion-col size=\"12\" *ngIf=\"item.value.QuestTyp == '5' && item.value.Quest == 'Status of the fund released'\"\r\n            class=\"txtspace\">\r\n            <div sclass=\"pad\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">{{i+1}}.</span>{{item.value.Quest}}<span\r\n                  class=\"valid-clr\">*</span></ion-label>\r\n                  <ion-item>\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RespInt\"\r\n                    style=\"max-width: 100% !important;\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of fund\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  </ion-item>\r\n              \r\n            </div>\r\n          </ion-col> -->\r\n          <ion-row style=\"padding-left: 15px;color: red;padding-bottom: 15px;\"  *ngIf=\"(submitted && item.controls['RespInt'].hasError('required')) && (submitted || item.controls['RespInt'].dirty || item.controls['RespInt'].touched)\">\r\n            <ion-label class=\"error-message\"\r\n             >\r\n              Field is required</ion-label>\r\n          </ion-row>\r\n          <ion-row style=\"color: red;padding-bottom: 15px;padding-left: 15px;\"  *ngIf=\"(submitted && item.controls['RespChar'].hasError('required')) && (submitted || item.controls['RespChar'].dirty || item.controls['RespChar'].touched)\">\r\n            <ion-label class=\"error-message\"\r\n             >\r\n              Field is required</ion-label>\r\n          </ion-row>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"bck\">\r\n          <ion-col size=\"12\" class=\"txtspace\">\r\n            <div style=\"padding: 15px;\">\r\n              <ion-label class=\"lbl\"><span class=\"index-aln\">6.</span>Images<span class=\"valid-clr\">*</span></ion-label><br><br>\r\n              <ion-label class=\"lbl\" style=\"color:gray;font-style: italic;\"> <span style=\"color:red\">Note:</span> Please Choose Atleast One Photo</ion-label>\r\n            </div>\r\n            <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event)\" />\r\n            <ion-row class=\"upload-btn\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\">\r\n                <label for=\"file\" class=\"upload-txt\">\r\n                  Click to Upload / Update Photo 1\r\n                </label><br>\r\n              </ion-col>\r\n            </ion-row>\r\n            <img src=\"{{image1}}\" class=\"img image\"><br>\r\n            <input type=\"file\" name=\"file\" id=\"file1\" class=\"fileInput\" (change)=\"onSelectFile2($event)\" />\r\n            <ion-row class=\"upload-btn\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\">\r\n                <label for=\"file1\" class=\"upload-txt\">\r\n                  Click to Upload / Update Photo 2\r\n                </label><br>\r\n              </ion-col>\r\n            </ion-row>\r\n            <img src=\"{{image2}}\" class=\"img image\"><br>\r\n            <input type=\"file\" name=\"file\" id=\"file2\" class=\"fileInput\" (change)=\"onSelectFile3($event)\" />\r\n            <ion-row class=\"upload-btn\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\">\r\n                <label for=\"file2\" class=\"upload-txt\">\r\n                  Click to Upload / Update Photo 3\r\n                </label><br>\r\n              </ion-col>\r\n            </ion-row>\r\n            <img src=\"{{image3}}\" class=\"img image\"><br>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"onFinalSave()\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_inspectiondetails_inspectiondetails_module_ts-es5.js.map