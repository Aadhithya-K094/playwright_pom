(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_grievance_staff-grievance_staff-grievance_module_ts"], {
    /***/
    96425:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/grievance/staff-grievance/staff-grievance-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffGrievancePageRoutingModule": function StaffGrievancePageRoutingModule() {
          return (
            /* binding */
            _StaffGrievancePageRoutingModule
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


      var _staff_grievance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-grievance.page */
      48161);

      var routes = [{
        path: '',
        component: _staff_grievance_page__WEBPACK_IMPORTED_MODULE_0__.StaffGrievancePage
      }];

      var _StaffGrievancePageRoutingModule = /*#__PURE__*/_createClass(function StaffGrievancePageRoutingModule() {
        _classCallCheck(this, StaffGrievancePageRoutingModule);
      });

      _StaffGrievancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StaffGrievancePageRoutingModule);
      /***/
    },

    /***/
    79384:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/grievance/staff-grievance/staff-grievance.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffGrievancePageModule": function StaffGrievancePageModule() {
          return (
            /* binding */
            _StaffGrievancePageModule
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


      var _staff_grievance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-grievance-routing.module */
      96425);
      /* harmony import */


      var _staff_grievance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./staff-grievance.page */
      48161);

      var _StaffGrievancePageModule = /*#__PURE__*/_createClass(function StaffGrievancePageModule() {
        _classCallCheck(this, StaffGrievancePageModule);
      });

      _StaffGrievancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _staff_grievance_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffGrievancePageRoutingModule],
        declarations: [_staff_grievance_page__WEBPACK_IMPORTED_MODULE_1__.StaffGrievancePage]
      })], _StaffGrievancePageModule);
      /***/
    },

    /***/
    48161:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/grievance/staff-grievance/staff-grievance.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffGrievancePage": function StaffGrievancePage() {
          return (
            /* binding */
            _StaffGrievancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_staff_grievance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./staff-grievance.page.html */
      41804);
      /* harmony import */


      var _staff_grievance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./staff-grievance.page.scss */
      42502);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_grievance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/grievance.service */
      48578);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/shared.service */
      7386);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

      var _StaffGrievancePage = /*#__PURE__*/function () {
        function StaffGrievancePage(router, fb, route, alertService, grievanceService, usersessionService, alertController, uploadService, sharedService) {
          _classCallCheck(this, StaffGrievancePage);

          this.router = router;
          this.fb = fb;
          this.route = route;
          this.alertService = alertService;
          this.grievanceService = grievanceService;
          this.usersessionService = usersessionService;
          this.alertController = alertController;
          this.uploadService = uploadService;
          this.sharedService = sharedService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US');
          this.date = this.pipe.transform(new Date(), 'yyyy-MM-dd');
          this.documentArr = ['GrievanceDoc1'];
          this.language = 'தமிழ்';
          this.minDate = "2018-01-01";
          this.grievanceList = [];
          this.grievanceListCopy = [];
          this.langToggleActive = true;
        }

        return _createClass(StaffGrievancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.staffInfoForm = this.fb.group({
              staffName: [''],
              staffId: [''],
              staffMobile: [''],
              staffDist: [''],
              staffBlock: [''],
              staffDesign: [''],
              staffSchool: [''],
              staffStatus: [''],
              Archive: ['']
            });
            this.grievanceForm = this.fb.group({
              IndexId: [''],
              GrNo: [''],
              TeacherId: [''],
              SchoolKeyId: [''],
              MblNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              ActiveStatus: [''],
              GrievanceStatus: ['1'],
              GrievanceUpdatedBy: [''],
              GrievanceUpdatedDate: [''],
              UpdatedRemarks: [''],
              BlkId: [''],
              Department: [''],
              GrievanceLevel: [''],
              GrievanceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              GrievanceCategory: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              GrievanceDate: [''],
              grievancePendays: [''],
              GrievanceDoc1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              GrievanceDoc2: [''],
              GrievanceDoc3: [''],
              GrievanceDoc4: [''],
              GrievanceDoc5: [''],
              Remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              FileNumber: [''],
              Issue: [''],
              OtherIssue: ['']
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.grievanceList = [];
            this.pageid = this.route.snapshot.queryParams.pageid;
            this.teacherId = this.usersessionService.teacher_id();
            this.school_id = this.usersessionService.school_key_id();
            this.blockid = this.usersessionService.district_id() ? this.usersessionService.district_id() : '00';
            this.Lists = this.grievanceService.Lists;
            this.langJson = this.grievanceService.langJson;
            this.langJsonChange();
            this.formChange(1);
            this.getTeacherInfo();

            if (this.pageid == 1) {
              this.getSavedGrievanceData();
            }
          }
        }, {
          key: "langJsonChange",
          value: function langJsonChange() {
            var _this = this;

            if (this.language == 'தமிழ்') {
              this.langToggleActive = true;
              this.jsonData = this.langJson.tamil;
            } else {
              this.langToggleActive = false;
              this.jsonData = this.langJson.english;
            }

            this.grievanceTypeLists = this.language == 'English' ? this.Lists.grievanceTypeList : this.Lists.grievanceTypeTamilList;
            this.grievanceCategoryLists = this.language == 'English' ? this.Lists.grievanceCategoryList : this.Lists.grievanceCategoryTamilList;
            var issueList = this.language == 'English' ? this.Lists.issues : this.Lists.issuesTamilList;
            this.issuesList = issueList.filter(function (i) {
              return i.type == _this.grievanceForm.value.GrievanceCategory;
            });
            this.statusList = this.language == 'English' ? this.Lists.grievanceStatus : this.Lists.grievanceStatusTamil;
          }
        }, {
          key: "formChange",
          value: function formChange(id) {
            if (id == 1) {
              this.grievanceForm.controls['Issue'].setValidators(null);
              this.grievanceForm.controls['OtherIssue'].setValidators(null);
              this.grievanceForm.controls['FileNumber'].setValidators(null);
              this.grievanceForm.controls['GrievanceDate'].setValidators(null);
              this.grievanceForm.controls['GrievanceCategory'].setValue('1');
            }
          }
        }, {
          key: "getTeacherInfo",
          value: function getTeacherInfo() {
            var _this2 = this;

            this.grievanceService.TeacherDetailsGet(this.teacherId).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.grievanceForm.patchValue(res.result[0]);

                _this2.staffInfoForm.patchValue(res.result[0]);
              }
            });
          }
        }, {
          key: "calculatePendingDays",
          value: function calculatePendingDays(event) {
            var date1 = new Date(moment__WEBPACK_IMPORTED_MODULE_7___default()(event).format('yyyy-MM-DD'));
            var date2 = new Date(moment__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).format('yyyy-MM-DD'));
            var diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
            this.grievanceForm.controls.grievancePendays.setValue(diffDays);
          }
        }, {
          key: "onSearch",
          value: function onSearch(list, event) {
            var searchTerm = event.detail.value.trim();
            this.grievanceList = this.grievanceListCopy[0].filter(function (item) {
              return item.GrievanceDate.toLowerCase().includes(searchTerm.toLowerCase()) || item.GrNo.toLowerCase().includes(searchTerm.toLowerCase()) || item.dateFormat.toLowerCase().includes(searchTerm.toLowerCase()) || item.GrievanceTypeText.toLowerCase().includes(searchTerm.toLowerCase()) || item.GrievanceCategoryText.toLowerCase().includes(searchTerm.toLowerCase()) || item.GrievanceStatusText.toLowerCase().includes(searchTerm.toLowerCase());
            });
          }
        }, {
          key: "onFileNumberUppercase",
          value: function onFileNumberUppercase() {
            var fileno = this.grievanceForm.value.FileNumber.toUpperCase();
            this.grievanceForm.controls['FileNumber'].setValue(fileno);
          }
        }, {
          key: "onChange",
          value: function onChange(id) {
            var _this3 = this;

            if (id == 1) {
              if (this.grievanceForm.value.GrievanceType) {
                if (this.grievanceForm.value.GrievanceType == 1) {
                  this.typeActive = true;
                  this.grievanceForm.controls['GrievanceDate'].setValue(this.date);
                  this.grievanceForm.controls['grievancePendays'].setValue('');
                  this.grievanceForm.controls['FileNumber'].setValue('');
                } else {
                  this.typeActive = false;
                  this.grievanceForm.controls['GrievanceDate'].setValue('');
                  this.grievanceForm.controls['grievancePendays'].setValue('');
                  this.grievanceForm.controls['GrievanceDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
                }

                this.grievanceForm.controls['GrievanceDate'].updateValueAndValidity();
              }
            }

            if (id == 2) {
              var issueList = this.language == 'English' ? this.Lists.issues : this.Lists.issuesTamilList;
              this.issuesList = issueList.filter(function (i) {
                return i.type == _this3.grievanceForm.value.GrievanceCategory;
              });
              this.grievanceForm.controls['Issue'].setValue('');
              this.grievanceForm.controls['OtherIssue'].setValue('');

              if (this.grievanceForm.value.GrievanceCategory == 1 || this.grievanceForm.value.GrievanceCategory == 2) {
                this.grievanceForm.controls['Issue'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              } else {
                this.grievanceForm.controls['Issue'].setValidators(null);
              }

              this.grievanceForm.controls['Issue'].updateValueAndValidity();
            }

            if (id == 3) {
              if (this.grievanceForm.value.Issue == 99) {
                this.grievanceForm.controls['OtherIssue'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              } else {
                this.grievanceForm.controls['OtherIssue'].setValue('');
                this.grievanceForm.controls['OtherIssue'].setValidators(null);
              }

              this.grievanceForm.controls['OtherIssue'].updateValueAndValidity();
            }
          } //--------------- Document Upload Code ----------------//

        }, {
          key: "onSelectFiles",
          value: function onSelectFiles(event, string) {
            var _this4 = this;

            if (event.target.files && event.target.files[0]) {
              var doc_file = event.target.files;
              var fileName = event.target.files[0].name;
              var splittedName = fileName.split(".");
              var fileType = splittedName[splittedName.length - 1];

              if (fileType == 'jpeg' || fileType == 'jpg' || fileType == 'png' || fileType == 'pdf') {
                if (event.target.files[0].size <= 5000000) {
                  var bucketName = "renewalapplicationemis";
                  var filename = splittedName[0];
                  var ext = splittedName[1];
                  var expiry = 300;
                  this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                    if (result) {
                      var files = doc_file;
                      var file = files[0];

                      _this4.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                        _this4.grievanceForm.controls[string].setValue(result.key);
                      });
                    }
                  });
                } else {
                  this.alertService.error('File can`t uploaded because file size should not exceed 5MB');

                  if (string != 'GrievanceDoc1') {
                    var documentArr = this.documentArr.filter(function (e) {
                      return e !== string;
                    });
                    this.documentArr = documentArr;
                  }
                }
              } else {
                this.alertService.error('File must be a valid format');
                this.grievanceForm.controls[string].setValue(null);

                if (string != 'GrievanceDoc1') {
                  var _documentArr = this.documentArr.filter(function (e) {
                    return e !== string;
                  });

                  this.documentArr = _documentArr;
                }
              }
            }
          }
        }, {
          key: "getUploadedFiles",
          value: function getUploadedFiles(id, filename) {
            var arr = filename.split(".");
            var url = "https://deka0egrc3bqo.cloudfront.net/" + filename;

            if (id == 1) {
              // this.sharedService.onDownload('Grievance_Document','https://deka0egrc3bqo.cloudfront.net/',filename)
              window.open(url);
            } else {
              if (arr[1] == 'pdf') {
                this.sharedService.onView(2, 2, url);
              } else {
                this.sharedService.onView(1, 2, url);
              }
            }
          }
        }, {
          key: "addDocument",
          value: function addDocument() {
            var docs = ['GrievanceDoc1', 'GrievanceDoc2', 'GrievanceDoc3', 'GrievanceDoc4', 'GrievanceDoc5'];

            for (var i = 0; i < docs.length; i++) {
              if (!this.documentArr.includes(docs[i])) {
                this.documentArr.push(docs[i]);
                this.grievanceForm.controls[docs[i]].setValue('');
                break;
              }
            }
          }
        }, {
          key: "deleteDocumet",
          value: function deleteDocumet(formControl) {
            this.documentArr = this.documentArr.filter(function (item) {
              return item !== formControl;
            });
            this.grievanceForm.controls[formControl].setValue('');
          } // ------ Raise New Grievance ----------//

        }, {
          key: "onRaiseNewGrievance",
          value: function onRaiseNewGrievance() {
            var _this5 = this;

            this.editId = 2;
            this.pageid = 2;
            var issueList = this.language == 'English' ? this.Lists.issues : this.Lists.issuesTamilList;
            this.issuesList = issueList.filter(function (i) {
              return i.type == _this5.grievanceForm.value.GrievanceCategory;
            });
            this.grievanceForm.reset();
            this.documentArr = ['GrievanceDoc1'];
            this.grievanceForm.controls['GrievanceCategory'].setValue('1');
            this.grievanceForm.controls['GrievanceStatus'].setValue(1);
            this.grievanceForm.controls['MblNo'].setValue(this.staffInfoForm.value.staffMobile);
            this.onChange(2);
          } // ------ Save Grievance details ----------//

        }, {
          key: "onValidateGrievanceForm",
          value: function onValidateGrievanceForm() {
            this.submitted = true;
            this.grievanceForm.controls['IndexId'].setValue(this.editActive ? this.IndexId : "");
            this.grievanceForm.controls['GrNo'].setValue(this.editActive ? this.GrNo : "");
            this.grievanceForm.controls['TeacherId'].setValue(this.staffInfoForm.value.staffId);
            this.grievanceForm.controls['SchoolKeyId'].setValue(this.school_id);
            this.grievanceForm.controls['BlkId'].setValue(this.blockid);
            var grievanceDateFormat = this.pipe.transform(this.grievanceForm.value.GrievanceDate, 'yyyy-MM-dd');
            this.grievanceForm.controls['GrievanceDate'].setValue(grievanceDateFormat);

            if (this.grievanceForm.valid) {
              if (this.editActive) {
                this.onSave();
              } else {
                this.onAlert(1, '');
              }
            } else {
              this.sharedService.validateAllFormFields(this.grievanceForm);
              this.alertService.error('Please Fill all the Required Fields');
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this6 = this;

            var data = {
              "records": this.grievanceForm.value
            };
            this.grievanceService.saveStaffGrievance(data).subscribe(function (res) {
              if (res.dataStatus) {
                if (_this6.editActive) {
                  _this6.pageid = 1;

                  _this6.ionViewDidEnter();

                  _this6.alertService.success(res.message);
                } else {
                  if (res.Grno) {
                    var grNo = "GR/" + "B" + (_this6.blockid.length == 3 ? _this6.blockid + '/' : _this6.blockid.length == 2 ? '0' + _this6.blockid + '/' : '00' + _this6.blockid + '/') + res.Grno;

                    _this6.onAlert(2, grNo);

                    _this6.grievanceService.sendOTP(grNo, _this6.grievanceForm.value.MblNo);
                  } else {
                    _this6.onValidateGrievanceForm();
                  }
                }
              } else {
                _this6.alertService.error(res.message);
              }
            });
          }
        }, {
          key: "onAlert",
          value: function onAlert(id, GrNo) {
            var _this7 = this;

            this.grievanceService.onAlert(id, this.language, GrNo).then(function (data) {
              debugger;

              if (data.data.values) {
                if (data.data.values.length > 0) {
                  _this7.onSave();
                } else {
                  _this7.onAlert(1, '');

                  _this7.alertService.error('Please Select Checkbox');
                }
              } else {
                _this7.pageid = 1;

                _this7.ionViewDidEnter();
              }
            });
          } // ------ Update Grievance Status ----------//

        }, {
          key: "updateGrievanceStatus",
          value: function updateGrievanceStatus(id, item) {
            var _this8 = this;

            var data = {
              "records": {
                "IndexId": item.IndexId,
                "GrievanceStatus": id,
                "Flag": 1
              }
            };
            this.grievanceService.saveStaffGrievance(data).subscribe(function (res) {
              if (res.dataStatus) {
                _this8.ionViewDidEnter();
              }
            });
          } // --------Saved Grievance Data -----------//

        }, {
          key: "getSavedGrievanceData",
          value: function getSavedGrievanceData() {
            var _this9 = this;

            this.grievanceList = [];
            this.grievanceListCopy = [];
            this.grievanceService.getStaffGrievance(this.teacherId).subscribe(function (res) {
              if (res.dataStatus) {
                _this9.noData = false;

                if (res.result.length > 0) {
                  res.result.sort(function (a, b) {
                    return Date.parse(b.GrievanceDate) - Date.parse(a.GrievanceDate);
                  });
                  res.result.map(function (x, i) {
                    _this9.grievanceList.push(x);

                    _this9.grievanceList[i].GrievanceTypeText = _this9.grievanceTypeLists.filter(function (a) {
                      return a.value == x.GrievanceType;
                    })[0].label;
                    _this9.grievanceList[i].GrievanceCategoryText = _this9.grievanceCategoryLists.filter(function (a) {
                      return a.value == x.GrievanceCategory;
                    })[0].label;
                    _this9.grievanceList[i].GrievanceStatusText = _this9.statusList.filter(function (a) {
                      return a.value == x.GrievanceStatus;
                    })[0].label;
                    _this9.grievanceList[i].GrNo = "GR/" + "B" + (_this9.blockid.length == 3 ? _this9.blockid + '/' : _this9.blockid.length == 2 ? '0' + _this9.blockid + '/' : '00' + _this9.blockid + '/') + x.GrNo;
                    _this9.grievanceList[i].dateFormat = _this9.pipe.transform(_this9.grievanceList[i].GrievanceDate, 'dd-MM-yyyy');
                  });
                  _this9.grievanceListCopy = [];

                  _this9.grievanceList.filter(function (a) {
                    return a.grievanceStatus != '';
                  });

                  _this9.sharedService.unique(_this9.grievanceList, ['GrNo']);

                  _this9.grievanceListCopy.push(_this9.grievanceList);
                }
              } else {
                _this9.noData = true;
                _this9.pageid == 2;
              }
            });
          } // ----- Edit Icon ----------------//

        }, {
          key: "onEdit",
          value: function onEdit(list, index, id) {
            var _this0 = this;

            this.viewDoc1 = list[index].ResolveDoc1;
            this.viewDoc2 = list[index].ResolveDoc2;
            this.viewDoc3 = list[index].ResolveDoc3;
            this.grievanceStatusValue = list[index].GrievanceStatus;
            this.editId = id;
            this.IndexId = list[index].IndexId;
            this.GrNo = list[index].GrNo;

            if (list[index].MblNo) {
              this.grievanceForm.controls['MblNo'].setValue(list[index].MblNo);
            }

            this.editActive = true;
            this.staffInfoForm.patchValue(list[index]);
            this.grievanceForm.patchValue(list[index]);
            this.documentArr = [];
            this.grievanceForm.value.GrievanceDoc1 ? this.documentArr.push('GrievanceDoc1') : '';
            this.grievanceForm.value.GrievanceDoc2 ? this.documentArr.push('GrievanceDoc2') : '';
            this.grievanceForm.value.GrievanceDoc3 ? this.documentArr.push('GrievanceDoc3') : '';
            this.grievanceForm.value.GrievanceDoc4 ? this.documentArr.push('GrievanceDoc4') : '';
            this.grievanceForm.value.GrievanceDoc5 ? this.documentArr.push('GrievanceDoc5') : '';
            var issueList = this.language == 'English' ? this.Lists.issues : this.Lists.issuesTamilList;
            this.issuesList = issueList.filter(function (i) {
              return i.type == _this0.grievanceForm.value.GrievanceCategory;
            });
            this.pageid = 2;
            this.calculatePendingDays(this.grievanceForm.value.GrievanceDate);
          } // ----- Language Toggle Change ---------//

        }, {
          key: "onToggle",
          value: function onToggle(event) {
            var _this1 = this;

            this.language = event ? 'தமிழ்' : 'English';
            this.langJsonChange();
            var uniquegrievanceList = this.sharedService.unique(this.grievanceList, ['GrNo']);
            this.grievanceList = [];

            if (uniquegrievanceList.length > 0) {
              uniquegrievanceList.sort(function (a, b) {
                return Date.parse(b.GrievanceDate) - Date.parse(a.GrievanceDate);
              });
              uniquegrievanceList.map(function (x, i) {
                _this1.grievanceList.push(x);

                _this1.grievanceList[i].GrievanceTypeText = _this1.grievanceTypeLists.filter(function (a) {
                  return a.value == x.GrievanceType;
                })[0].label;
                _this1.grievanceList[i].GrievanceCategoryText = _this1.grievanceCategoryLists.filter(function (a) {
                  return a.value == x.GrievanceCategory;
                })[0].label;
                _this1.grievanceList[i].GrievanceStatusText = _this1.statusList.filter(function (a) {
                  return a.value == x.GrievanceStatus;
                })[0].label;
              });
              this.grievanceListCopy = [];
              this.grievanceListCopy.push(this.grievanceList);
            }
          }
        }, {
          key: "onNavigateBack",
          value: function onNavigateBack() {
            this.editActive = false;

            if (this.pageid == 2) {
              this.pageid = 1;
              this.ionViewDidEnter();
            } else {
              this.onToggle(true);
              this.router.navigate(['tabs/dashboard']);
            }
          }
        }]);
      }();

      _StaffGrievancePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_grievance_service__WEBPACK_IMPORTED_MODULE_4__.GrievanceService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService
        }];
      };

      _StaffGrievancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-staff-grievance',
        template: _raw_loader_staff_grievance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_staff_grievance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StaffGrievancePage);
      /***/
    },

    /***/
    42502:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/grievance/staff-grievance/staff-grievance.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background-clr {\n  --background: #f9f3fa;\n}\n\n.search {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 22px;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n  border-radius: 10px;\n  padding: 3px;\n  margin: 15px;\n}\n\n.ion-card-list {\n  border-left: 5px solid;\n}\n\n.ion-col-date {\n  color: #2176b9;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.ion-col-edit {\n  text-align: right;\n  padding-right: 20px;\n}\n\n.icon-eye {\n  color: green;\n  margin-top: 0px;\n  margin-left: 0px;\n  font-size: 2em;\n}\n\n.footer-clr {\n  background-color: #8B67B3;\n}\n\n.sub-title1 {\n  color: #8B67B3;\n  padding-left: 15px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.sub-title2 {\n  color: #8B67B3;\n  padding-left: 15px;\n  font-weight: bold;\n  padding-top: 25px;\n  padding-bottom: 15px;\n}\n\n.sub-title3 {\n  color: #8B67B3;\n  padding-left: 15px;\n  font-weight: bold;\n  padding-top: 20px;\n}\n\n.note-div1 {\n  border-radius: 5px;\n  margin: 15px;\n  padding: 10px;\n  background: white;\n  font-style: italic;\n}\n\n.note-div2 {\n  color: red;\n  font-style: italic;\n  font-weight: 600;\n}\n\n.note-div3 {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.note-div4 {\n  font-weight: 600;\n}\n\n.doc-div1 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.doc-div2 {\n  margin-left: 15px !important;\n  margin-bottom: 25px !important;\n  text-align: left;\n}\n\n.doc-col1 {\n  padding: 0px;\n  background: white;\n  border-bottom: 0px !important;\n}\n\n.icon-aln {\n  text-align: center;\n}\n\n.icon-eye1 {\n  color: green;\n  margin-top: 0px;\n  margin-left: 0px;\n  font-size: 1.5em;\n}\n\n.icon-del {\n  color: red;\n  margin-top: 0px;\n  margin-left: 0px;\n  font-size: 1.5em;\n}\n\n.p-lr-15 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.bold {\n  color: black;\n}\n\n.ion-col {\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.label-div1 {\n  padding-bottom: 10px;\n}\n\n.label-div2 {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.pb-10 {\n  padding-bottom: 10px;\n}\n\n.pt-25 {\n  padding-top: 25px !important;\n}\n\n.day-bckgrd {\n  background: #e8e8e8 !important;\n}\n\n.ml-25 {\n  margin-top: 25px;\n}\n\n.label-div3 {\n  padding-bottom: 2px;\n}\n\n.text-clr-red {\n  color: red;\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 5px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.error {\n  font-size: 14px;\n  padding-top: 5px;\n  color: red;\n  padding-left: 15px;\n}\n\n.save {\n  text-align: center;\n  margin-bottom: 25px !important;\n  margin-top: 25px !important;\n}\n\n.date {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 5px;\n  background: white;\n  padding: 4px;\n}\n\ninput {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n  border-radius: 5px !important;\n  padding-left: 20px !important;\n}\n\n.padd_aln {\n  padding-left: 5px !important;\n}\n\n.save-btn {\n  border-radius: 5px !important;\n  color: white !important;\n  padding: 10px !important;\n  font-size: 18px !important;\n  background: #8B67B3 !important;\n}\n\n.save-btns {\n  border-radius: 5px !important;\n  color: white !important;\n  padding: 10px !important;\n  font-size: 15px !important;\n  background: #3d9861 !important;\n}\n\n.file-input {\n  padding-top: 15px !important;\n  padding-bottom: 15px !important;\n  border-radius: 5px !important;\n  padding-left: 10px !important;\n}\n\n.main-select {\n  width: 100%;\n}\n\n.main-list {\n  border-radius: 5px;\n  padding: 0;\n  border: 1px solid var(--primary-text-color);\n}\n\nion-item {\n  --background: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  font-weight: 500 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWdyaWV2YW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFERjs7QUFJQTtFQUNFLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQURGIiwiZmlsZSI6InN0YWZmLWdyaWV2YW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1jbHIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZjNmYTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDIycHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmlvbi1jYXJkLWxpc3Qge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWRcclxufVxyXG5cclxuLmlvbi1jb2wtZGF0ZSB7XHJcbiAgY29sb3I6ICMyMTc2Yjk7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uaW9uLWNvbC1lZGl0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbi1leWUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDIuMGVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWNsciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMztcclxufVxyXG5cclxuLnN1Yi10aXRsZTEge1xyXG4gIGNvbG9yOiAjOEI2N0IzOztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUyIHtcclxuICBjb2xvcjogIzhCNjdCMztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUzIHtcclxuICBjb2xvcjogIzhCNjdCMztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3RlLWRpdjEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5ub3RlLWRpdjIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5ub3RlLWRpdjMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm90ZS1kaXY0IHtcclxuICBmb250LXdlaWdodDogNjAwXHJcbn1cclxuXHJcbi5kb2MtZGl2MSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kb2MtZGl2MiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRvYy1jb2wxIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uLWFsbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1leWUxIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmljb24tZGVsIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5wLWxyLTE1IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmlvbi1jb2wge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtZGl2MSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJlbC1kaXYyIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5wYi0xMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wdC0yNSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRheS1iY2tncmQge1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tbC0yNSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmxhYmVsLWRpdjMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi50ZXh0LWNsci1yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sLTEyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNhdmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZF9hbG4ge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM4QjY3QjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNhdmUtYnRucyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMzZDk4NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5maWxlLWlucHV0IHtcclxuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLWxpc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5jb2wtNiB7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gLnAtNXAge1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAuZC1mbGV4IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmxleC13YXJwIHtcclxuLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vIH1cclxuXHJcbi8vIC5nYXAtMyB7XHJcbi8vICAgZ2FwOiAzJTtcclxuLy8gfVxyXG5cclxuLy8gLm1yLTE1cCB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYWxpZ24taXRlbXMtY2VudGVyIHtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4vLyAuY3VzSW5wdXQge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuLy8gICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tdC04cCB7XHJcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    41804:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grievance/staff-grievance/staff-grievance.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"onNavigateBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"editActive || pageid\">\r\n      <div class=\"ion-text-wrap\">{{editActive ? jsonData.ViewGrievance : pageid == 1 ? jsonData.StaffGrievance : jsonData.RaiseNewGrievance}}</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background-clr\" *ngIf=\"pageid == 1 && noData\">\r\n\r\n  <div>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"margin: auto;\r\n      padding-left: 15px\">\r\n        <ion-label>{{jsonData.Language}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: right;\">\r\n        <ion-toggle \r\n        (ionChange)=\"onToggle($event.detail.checked)\" checked=\"{{langToggleActive}}\"></ion-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"margin:auto\">\r\n        <ion-label>{{language}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-card >\r\n    <ion-row style=\"margin:5px;text-align:center\">\r\n      <ion-col size=\"12\" class=\"bold ion-col-date\" style=\"color:#2176b9\">\r\n        <ion-label>{{jsonData.NoData}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-content class=\"background-clr\" *ngIf=\"pageid == 1 && !noData \">\r\n\r\n  <div>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"margin: auto;\r\n      padding-left: 15px\">\r\n        <ion-label>{{jsonData.Language}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: right;\">\r\n        <ion-toggle \r\n        (ionChange)=\"onToggle($event.detail.checked)\" checked=\"{{langToggleActive}}\"></ion-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"margin:auto\">\r\n        <ion-label>{{language}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n\r\n  <ion-searchbar class=\"search\" placeholder=\"{{jsonData.Search}}\" (ionChange)=\"onSearch(grievanceList,$event)\"></ion-searchbar>\r\n\r\n  <ion-card *ngFor=\"let item of grievanceList;index as i\" class=\"ion-card-list\" >\r\n    <ion-row style=\"margin-bottom:8px;margin-left: 5px;\">\r\n\r\n      <ion-col size=\"6\" class=\"bold ion-col-date\" style=\"color:#2176b9\">\r\n        <ion-label>{{item.GrievanceDate | date:'dd-MM-yyyy'}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"ion-col-edit\" (click)=\"onEdit(grievanceList,i,1)\" *ngIf=\"item.GrievanceStatus != 1\">\r\n        <ion-icon name=\"eye\" class=\"icon-eye\" ></ion-icon>\r\n        <!-- <ion-icon name=\"create-outline\" style=\"color: green;\r\n        font-size: 23px;\" size=\"1.5\" *ngIf=\"item.GrievanceStatus == 1\"></ion-icon> -->\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"ion-col-edit\" (click)=\"onEdit(grievanceList,i,2)\" *ngIf=\"item.GrievanceStatus == 1\">\r\n        <!-- <ion-icon name=\"eye\" class=\"icon-eye\" *ngIf=\"item.GrievanceStatus != 1\"></ion-icon> -->\r\n        <ion-icon name=\"create-outline\" style=\"color: green;\r\n        font-size: 23px;\" size=\"1.5\" ></ion-icon>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>{{jsonData.Grno}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" >\r\n        <ion-label>{{item.GrNo}}</ion-label>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>Department</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label>{{item.DepartmentText}}</ion-label>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>{{jsonData.TypeofGrievance}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label>{{item.GrievanceTypeText}}</ion-label>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>Level</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label>{{item.GrievanceLevelText}}</ion-label>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>{{jsonData.GrievanceCategory}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label>{{item.GrievanceCategoryText}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"bold\">\r\n        <ion-label>{{jsonData.GrievanceStatus}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"color:#2176b9\" *ngIf=\"item.GrievanceStatus == 4 || item.GrievanceStatus == 6\">\r\n        {{item.GrievanceStatusText}}\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"item.GrievanceStatus != 4 && item.GrievanceStatus != 6\">\r\n        {{item.GrievanceStatusText}}\r\n      </ion-col>\r\n\r\n    \r\n\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"item.GrievanceStatus == 4\">\r\n      <ion-col size=\"6\" class=\"btn-red\" (click)=\"updateGrievanceStatus(5,item)\">\r\n       <ion-label>{{language == 'English' ? \"Not Resolved\" : \"சரிசெய்யப்படவில்லை\"}}</ion-label>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\" class=\"btn-green\" (click)=\"updateGrievanceStatus(6,item)\">\r\n        <ion-label>{{language == 'English' ? \"Closed\" : \"தீர்க்கப்பட்டது\"}}</ion-label>\r\n       </ion-col>\r\n\r\n       <!-- <ion-col size=\"12\" class=\"btn-green\" (click)=\"updateGrievanceStatus(6,item)\"  *ngIf=\"item.GrievanceStatus == 5\">\r\n        <ion-label>Closed</ion-label>\r\n       </ion-col> -->\r\n    </ion-row>\r\n\r\n    \r\n\r\n\r\n    <!-- <ion-row style=\"border-top: 1px solid gray;margin-top: 10px;padding-top:5px;padding-bottom:5px\">\r\n      <ion-col size=\"12\">\r\n        <div style=\"text-align: center ;\">\r\n          <button class=\"btn btn-red\">Not Resolved</button>\r\n          <button class=\"btn save-btns\" style=\"margin-left: 20px;\">Closed</button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-bckclr footer-clr\" *ngIf=\"pageid == 1\" (click)=\"onRaiseNewGrievance()\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\">\r\n      {{jsonData.RaiseNewGrievance}}\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>\r\n\r\n<ion-content class=\"background-clr\" *ngIf=\"pageid == 2\">\r\n  <form [formGroup]=\"grievanceForm\">\r\n\r\n  \r\n   \r\n\r\n    <div class=\"sub-title1\">\r\n      <ion-label>{{jsonData.PERSONALINFORMATION}}</ion-label>\r\n    </div>\r\n\r\n\r\n    <div class=\"note-div1 fontsize\" *ngIf=\"language == 'தமிழ்'\">\r\n      <div class=\"note-div2\">குறிப்பு:</div>\r\n      <div class=\"note-div3\">விண்ணப்பம் தொடர்பான தகவல்கள் கொடுக்கப்பட்ட கைப்பேசி எண்ணுக்கு குறுஞ்செய்தி  மூலம் அனுப்பப்படும், ஆகையால் கொடுக்கப்பட்ட கைப்பேசி எண் சரியானதா என்பதை உறுதி செய்து கொள்ளவும்.</div>\r\n    </div>\r\n  \r\n      <div class=\"note-div1 fontsize\" *ngIf=\"language == 'English'\">\r\n        <div class=\"note-div2\">Note:</div>\r\n        <div class=\"note-div3\">Application related information will be sent through SMS to given mobile number. Please confirm that the given mobile number is correct.</div>\r\n      </div>\r\n      <form [formGroup]=\"staffInfoForm\">\r\n    <ion-card>\r\n\r\n      <!-- <div class=\"label-div2\">\r\n        <div class=\"label-div3\">\r\n          <ion-label class=\"bold\">\r\n            Language<span class=\"text-clr-red\"></span>\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"save\">\r\n          <button class=\"btn save-btn\">Tamil</button>\r\n        </div>\r\n      </div>\r\n      <ion -->\r\n\r\n        \r\n       \r\n      <ion-row>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffId}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffId}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffName}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffDistrict}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffDist}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffBlock}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffBlock}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffDesignation}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffDesign}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.CurrentlyWorkingIn}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          {{staffInfoForm.value.staffSchool}}\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"bold ion-col\">\r\n          <ion-label>{{jsonData.StaffStatus}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-col\">\r\n          <ion-label>{{staffInfoForm.value.staffStatus}}</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n        \r\n    </ion-card>\r\n    </form>\r\n\r\n    <div class=\"p-lr-15\">\r\n      <div class=\"label-div1\">\r\n        <ion-label class=\"bold\"> {{jsonData.StaffMobile}} <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <input class=\"mt-2 customInput p-3 col-12\" type=\"tel\" pattern=\"^[6-9]{1}[0-9]{9}\" minLength=\"10\" maxLength=\"10\"\r\n          formControlName=\"MblNo\" placeholder=\"{{jsonData.PleaseEnter}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('MblNo').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.controls.MblNo.hasError('pattern')\">\r\n      {{jsonData.VaildMobileNo}}\r\n    </div>\r\n\r\n    <div class=\"sub-title2\">\r\n      <ion-label>{{jsonData.GRIEVANCEDETAILS}}</ion-label>\r\n    </div>\r\n\r\n\r\n    <div class=\"note-div1 fontsize\" *ngIf=\"language == 'தமிழ்'\">\r\n      <div class=\"note-div2\">குறிப்பு:</div>\r\n      <div class=\"note-div3\">தாங்கள் விண்ணப்பித்து அது சார்ந்த பலன் துறையின் மூலம் பெறாமல் இருப்பின் \"நிலுவையிலுள்ள விண்ணப்பத்தை\" தேர்வு செய்யவும்.</div>\r\n    </div>\r\n  \r\n      <div class=\"note-div1 fontsize\" *ngIf=\"language == 'English'\">\r\n        <div class=\"note-div2\">Note:</div>\r\n        <div class=\"note-div3\">Select \"Existing Application\" if you have applied and have not received the relevant resolution from the department.</div>\r\n      </div>\r\n\r\n    <!-- <div class=\"label-div2\">\r\n      <div class=\"label-div3\">\r\n        <ion-label class=\"bold\">\r\n          Level where Grievance is to be submitted <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-list class=\"main-list mt-8p\">\r\n          <ion-item class=\"main-item\">\r\n            <ion-select class=\"main-select\" placeholder=\"Select\" formControlName=\"GrievanceLevel\">\r\n              <ion-select-option *ngFor=\"let item of grievanceLevelList\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('GrievanceLevel').hasError('required') && submitted\">\r\n      Field is Required\r\n    </div>\r\n\r\n    <div class=\"label-div2 pt-25\">\r\n      <div class=\"label-div3\">\r\n        <ion-label class=\"bold\">\r\n          Department <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-list class=\"main-list mt-8p\">\r\n          <ion-item class=\"main-item\">\r\n            <ion-select class=\"main-select\" placeholder=\"Select\" formControlName=\"Department\">\r\n              <ion-select-option *ngFor=\"let item of grievanceDeptList\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('Department').hasError('required') && submitted\">\r\n      Field is Required\r\n    </div> -->\r\n\r\n\r\n   \r\n    \r\n\r\n\r\n\r\n    \r\n    <div class=\"label-div2\">\r\n      <div class=\"label-div3\">\r\n        <ion-label class=\"bold\">\r\n          {{jsonData.GrievanceCategory}} <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-list class=\"main-list mt-8p\">\r\n          <ion-item class=\"main-item\">\r\n            <ion-select class=\"main-select\" placeholder={{jsonData.SelectText}} formControlName=\"GrievanceCategory\"\r\n              (ionChange)=\"onChange(2)\">\r\n              <ion-select-option *ngFor=\"let item of grievanceCategoryLists\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('GrievanceCategory').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n    <div class=\"label-div2 pt-25\"\r\n      *ngIf=\"grievanceForm.value.GrievanceCategory == 1 || grievanceForm.value.GrievanceCategory == 2\">\r\n      <div class=\"label-div3\">\r\n        <ion-label class=\"bold\">\r\n          {{jsonData.Issue}}<span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-list class=\"main-list mt-8p\">\r\n          <ion-item class=\"main-item\">\r\n            <ion-select class=\"main-select\" placeholder=\"{{jsonData.SelectText}}\" formControlName=\"Issue\"  (ionChange)=\"onChange(3)\">\r\n              <ion-select-option *ngFor=\"let item of issuesList\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('Issue').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n    <div class=\"p-lr-15 pt-25\" *ngIf=\"grievanceForm.value.Issue == 99\">\r\n      <div class=\"pb-10\">\r\n        <ion-label class=\"bold\"> {{jsonData.OtherIssue}}<span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <ion-textarea placeholder=\"{{jsonData.PleaseEnter}}\" formControlName=\"OtherIssue\" maxlength=\"100\"\r\n        class=\"mt-2 customInput p-3 col-12\"></ion-textarea>\r\n        <!-- <input class=\"mt-2 customInput p-3 col-12\" type=\"text\" formControlName=\"OtherIssue\" placeholder=\"{{jsonData.PleaseEnter}}\"> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('OtherIssue').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"p-lr-15 pt-25\" *ngIf=\"grievanceForm.value.GrievanceCategory == 3\">\r\n      <div class=\"pb-10\">\r\n        <ion-label class=\"bold\"> {{jsonData.OtherIssue}}<span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <input class=\"mt-2 customInput p-3 col-12\" type=\"text\" formControlName=\"OtherIssue\" placeholder=\"{{jsonData.PleaseEnter}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('OtherIssue').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div> -->\r\n\r\n\r\n    <div class=\"label-div2 ml-25\">\r\n      <div class=\"label-div3\">\r\n        <ion-label class=\"bold\">\r\n          {{jsonData.TypeofGrievance}} <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-list class=\"main-list mt-8p\">\r\n          <ion-item class=\"main-item\">\r\n            <ion-select class=\"main-select\" placeholder=\"{{jsonData.SelectText}}\" formControlName=\"GrievanceType\"\r\n              (ionChange)=\"onChange(1)\" >\r\n              <ion-select-option *ngFor=\"let item of grievanceTypeLists\" [value]=\"item.value\" style=\"background:red !important;\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('GrievanceType').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n\r\n    <div class=\"p-lr-15 pt-25\" *ngIf=\"grievanceForm.value.GrievanceType == 2\">\r\n      <div class=\"pb-10\">\r\n        <ion-label class=\"bold\"> {{jsonData.GrievanceFileNo}}\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <input class=\"mt-2 customInput p-3 col-12\" type=\"text\" pattern=\"^[a-zA-Z0-9/-]*$\" (keyup)=\"onFileNumberUppercase()\" formControlName=\"FileNumber\" placeholder=\"{{jsonData.PleaseEnter}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.controls.FileNumber.hasError('pattern')\">\r\n    <ion-label>{{ language == 'English' ? \"Invalid Format\" : \"தவறான வடிவம்\" }}</ion-label>\r\n    </div>\r\n\r\n    <div class=\"p-lr-15 pt-25\" *ngIf=\"grievanceForm.value.GrievanceType\">\r\n      <div class=\"pb-10\">\r\n        <ion-label class=\"bold\"> {{grievanceForm.value.GrievanceType == 1 ? jsonData.GrievanceFileSubmittedDate : jsonData.GrievanceFileSubmittedDate1 }} <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2 date\">\r\n        <ion-datetime [max]=\"date\" [min]=\"minDate\" displayFormat=\"DD-MM-YYYY\" placeholder=\"{{jsonData.SelectDate}}\"\r\n          formControlName=\"GrievanceDate\" (ionChange)=\"calculatePendingDays($event.detail.value)\" [readonly]=\"typeActive\">\r\n        </ion-datetime>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('GrievanceDate').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n    <div class=\"p-lr-15 pt-25\" *ngIf=\"grievanceForm.value.GrievanceDate && grievanceForm.value.GrievanceType == 2\">\r\n      <div class=\"pb-10\">\r\n        <ion-label class=\"bold\"> {{ jsonData.PendingDays}}\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <input class=\"mt-2 customInput p-3 col-12\" style=\"background: #e8e8e8 !important;\" type=\"text\" [readonly]=\"true\"\r\n          formControlName=\"grievancePendays\">\r\n      </div>\r\n    </div>\r\n   \r\n\r\n    \r\n\r\n    <div class=\"sub-title3\">\r\n      <ion-label>{{jsonData.ISSUEDETAILS}}</ion-label>\r\n    </div>\r\n\r\n  <div class=\"note-div1 fontsize\" *ngIf=\"language == 'தமிழ்'\">\r\n    <div class=\"note-div2\">குறிப்பு:</div>\r\n    <div class=\"note-div3\">1. தங்கள் விண்ணப்பம் சார்ந்த ஆவணங்களின் நகல்களை கீழே பதிவேற்றம் செய்யவும்.</div>\r\n    <div class=\"note-div3\">2. அனுமதிக்கப்பட்ட கோப்பு வடிவங்கள் : PNG,JPEG,JPG,PDF | கோப்பின் அளவு : அதிகபட்சம் 5MB.</div>\r\n    <div class=\"note-div3\">3. + button ஐ தேர்வு செய்வதன் மூலம் அதிகபட்சம் 5 ஆவணங்களை பதிவேற்றம் செய்ய இயலும்.</div>\r\n    <div class=\"note-div3\">4. விண்ணப்பம் சார்ந்த விவரத்தை 1000 எழுத்துக்களுக்கு மிகாமல் குறிப்பிடவும்.</div>\r\n  </div>\r\n\r\n    <div class=\"note-div1 fontsize\" *ngIf=\"language == 'English'\">\r\n      <div class=\"note-div2\">Note:</div>\r\n      <div class=\"note-div3\">1. Upload documents relevant to this application.</div>\r\n      <div class=\"note-div3\">2. Only PNG, JPEG, JPG, PDF files with a maximum size of 5MB.</div>\r\n      <div class=\"note-div3\">3. Use + button to add upto 5 additional files.</div>\r\n      <div class=\"note-div3\">4. Explain the Issue in max 1000 characters.</div>\r\n      <!-- <div class=\"note-div3\">1.Only PNG, JPEG, JPG, PDF files with a maximum size of 5MB. Use <span class=\"note-div4\">+</span> to add upto 5 additional files.</div>\r\n      <div class=\"note-div3\">2. Explain the Issue in <span class=\"note-div4\">max 500 characters.</span></div> -->\r\n    </div>\r\n\r\n    <ion-row *ngFor=\"let doc of documentArr;index as i\" class=\"doc-div1\">\r\n\r\n      <ion-col size=\"8\">\r\n        <ion-label class=\"bold\">{{jsonData.Uploadproof}} <span *ngIf=\"i+1 == 1\" class=\"text-clr-red\">*</span> </ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"icon-aln\" (click)=\"getUploadedFiles(2,this.grievanceForm.value[doc])\"\r\n        *ngIf=\"this.grievanceForm.value[doc]\">\r\n        <ion-icon name=\"eye\" class=\"icon-eye1\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"icon-aln\" (click)=\"deleteDocumet(doc)\" *ngIf=\"doc != 'GrievanceDoc1'\">\r\n        <ion-icon name=\"close\" class=\"icon-del\"></ion-icon>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"doc-col1\">\r\n        <input class=\"form-control file-input\" type='file' (change)=\"onSelectFiles($event, doc)\">\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"error\" style=\"padding-left:0px;\"\r\n          *ngIf=\"grievanceForm.controls[doc].errors  && (submitted || grievanceForm.controls[doc].dirty || grievanceForm.controls[doc].touched)\">\r\n          {{jsonData.Required}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <div class=\"doc-div2\" (click)=\"addDocument()\" *ngIf=\"documentArr.length < 5\">\r\n      <button class=\"btn save-btns\">Add Upload Proof</button>\r\n    </div> -->\r\n\r\n    <div class=\"doc-div2\" (click)=\"addDocument()\" *ngIf=\"documentArr.length < 5\">\r\n      <button class=\"btn save-btns\"> + </button>\r\n    </div>\r\n\r\n    <div class=\"p-lr-15\" style=\"padding-top:0px !important;padding-bottom:20px\">\r\n      <div style=\"padding-bottom: 10px;\">\r\n        <ion-label class=\"bold\"> {{jsonData.ExplaintheIssue}} <span class=\"text-clr-red\">*</span>\r\n        </ion-label>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <ion-textarea placeholder=\"{{jsonData.Remark}}\" formControlName=\"Remarks\" maxlength=\"1000\"\r\n          class=\"mt-2 customInput p-3 col-12\"></ion-textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"error\" *ngIf=\"grievanceForm.get('Remarks').hasError('required') && submitted\">\r\n      {{jsonData.Required}}\r\n    </div>\r\n\r\n <ion-row *ngIf=\"(grievanceStatusValue == 4 || grievanceStatusValue == 6) && editId == 1\" class=\"view1\">\r\n  <ion-col size=\"12\" class=\"bold\" style=\"padding-left:0px\">\r\n    <ion-label>{{ language == 'English' ? \"Updated Documents\" : \"புதுப்பிக்கப்பட்ட ஆவணங்கள்\" }}</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"4\" *ngIf=\"viewDoc1\" class=\"view4\">\r\n   <!-- Image / Pdf 1  -->\r\n   <ion-icon name=\"images-outline\"></ion-icon> \r\n   <!-- <span> (or) </span>\r\n   <ion-icon name=\"document-outline\"></ion-icon> -->\r\n  </ion-col> \r\n  <ion-col size=\"4\" class=\"view2\" (click)=\"getUploadedFiles(2,viewDoc1)\" *ngIf=\"viewDoc1\">\r\n    <ion-icon name=\"eye-outline\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"4\" class=\"view3\" (click)=\"getUploadedFiles(1,viewDoc1)\" *ngIf=\"viewDoc1\">\r\n    <ion-icon name=\"download-outline\"></ion-icon>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"4\" *ngIf=\"viewDoc2\" class=\"view4\">\r\n    <!-- Image / Pdf 2 -->\r\n    <ion-icon name=\"images-outline\"></ion-icon>\r\n   </ion-col> \r\n   <ion-col size=\"4\" class=\"view2\" (click)=\"getUploadedFiles(2,viewDoc2)\" *ngIf=\"viewDoc2\">\r\n     <ion-icon name=\"eye-outline\"></ion-icon>\r\n   </ion-col>\r\n   <ion-col size=\"4\" class=\"view3\" (click)=\"getUploadedFiles(1,viewDoc2)\" *ngIf=\"viewDoc2\">\r\n     <ion-icon name=\"download-outline\"></ion-icon>\r\n   </ion-col>\r\n\r\n   <ion-col size=\"6\" *ngIf=\"viewDoc3\" class=\"view4\">\r\n    <!-- Image / Pdf 3 -->\r\n    <ion-icon name=\"images-outline\"></ion-icon>\r\n   </ion-col> \r\n   <ion-col size=\"4\" class=\"view2\" (click)=\"getUploadedFiles(2,viewDoc3)\" *ngIf=\"viewDoc3\">\r\n     <ion-icon name=\"eye-outline\"></ion-icon>\r\n   </ion-col>\r\n   <ion-col size=\"4\" class=\"view3\" (click)=\"getUploadedFiles(1,viewDoc3)\" *ngIf=\"viewDoc3\">\r\n     <ion-icon name=\"download-outline\"></ion-icon>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n    <div class=\"save\" (click)=\"onValidateGrievanceForm()\" *ngIf=\"editId != 1\">\r\n      <button class=\"btn save-btn\">{{ editActive  ? jsonData.Update : jsonData.Submit }}</button>\r\n    </div>\r\n\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_grievance_staff-grievance_staff-grievance_module_ts-es5.js.map