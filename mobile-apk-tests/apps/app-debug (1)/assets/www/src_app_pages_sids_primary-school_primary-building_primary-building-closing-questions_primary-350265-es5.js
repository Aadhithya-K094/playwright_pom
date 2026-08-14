(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-building-closing-questions_primary-350265"], {
    /***/
    90251:
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions-routing.module.ts ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingClosingQuestionsPageRoutingModule": function PrimaryBuildingClosingQuestionsPageRoutingModule() {
          return (
            /* binding */
            _PrimaryBuildingClosingQuestionsPageRoutingModule
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


      var _primary_building_closing_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-building-closing-questions.page */
      84458);

      var routes = [{
        path: '',
        component: _primary_building_closing_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryBuildingClosingQuestionsPage
      }];

      var _PrimaryBuildingClosingQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryBuildingClosingQuestionsPageRoutingModule() {
        _classCallCheck(this, PrimaryBuildingClosingQuestionsPageRoutingModule);
      });

      _PrimaryBuildingClosingQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryBuildingClosingQuestionsPageRoutingModule);
      /***/
    },

    /***/
    83784:
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions.module.ts ***!
      \********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingClosingQuestionsPageModule": function PrimaryBuildingClosingQuestionsPageModule() {
          return (
            /* binding */
            _PrimaryBuildingClosingQuestionsPageModule
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


      var _primary_building_closing_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-building-closing-questions-routing.module */
      90251);
      /* harmony import */


      var _primary_building_closing_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-building-closing-questions.page */
      84458);

      var _PrimaryBuildingClosingQuestionsPageModule = /*#__PURE__*/_createClass(function PrimaryBuildingClosingQuestionsPageModule() {
        _classCallCheck(this, PrimaryBuildingClosingQuestionsPageModule);
      });

      _PrimaryBuildingClosingQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_building_closing_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryBuildingClosingQuestionsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_building_closing_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryBuildingClosingQuestionsPage]
      })], _PrimaryBuildingClosingQuestionsPageModule);
      /***/
    },

    /***/
    84458:
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions.page.ts ***!
      \******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingClosingQuestionsPage": function PrimaryBuildingClosingQuestionsPage() {
          return (
            /* binding */
            _PrimaryBuildingClosingQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_building_closing_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-building-closing-questions.page.html */
      17612);
      /* harmony import */


      var _primary_building_closing_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-building-closing-questions.page.scss */
      39633);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _PrimaryBuildingClosingQuestionsPage = /*#__PURE__*/function () {
        function PrimaryBuildingClosingQuestionsPage(router, formBuilder, route, alertController, sqliteDB, utilityService, userSessionService, alertService, el) {
          _classCallCheck(this, PrimaryBuildingClosingQuestionsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.route = route;
          this.alertController = alertController;
          this.sqliteDB = sqliteDB;
          this.utilityService = utilityService;
          this.userSessionService = userSessionService;
          this.alertService = alertService;
          this.el = el;
          this.electricity = [{
            "value": "1",
            "label": "All Rooms"
          }, {
            "value": "2",
            "label": "Most Rooms"
          }, {
            "value": "3",
            "label": "Few Rooms"
          }, {
            "value": "4",
            "label": "No Rooms"
          }];
          this.ramp = [{
            "value": "1",
            "label": "Ramp for the ground floor only"
          }, {
            "value": "2",
            "label": "Ramp for all floors "
          }, {
            "value": "3",
            "label": "No Ramp"
          }];
          this.repair = [{
            "value": "1",
            "label": "Weathering Course"
          }, {
            "value": "2",
            "label": "Pressed Tiles"
          }, {
            "value": "3",
            "label": "Renewing the overall plumbing works for Handwash and Drinking Water"
          }, {
            "value": "4",
            "label": "Renewing the plumbing works for toilet"
          }, {
            "value": "5",
            "label": "Repair of inner electrical lines"
          }, {
            "value": "6",
            "label": "Overall Water Seepage and Leakage"
          }, {
            "value": "7",
            "label": "Exterior Whitewashing and Painting for building"
          }, {
            "value": "8",
            "label": "Interior Whitewashing and Painting of Building Common Spaces"
          }, {
            "value": "9",
            "label": "Replastering of Building Extertior and Interior Common Spaces"
          }, {
            "value": "10",
            "label": "Reflooring of Building Common Spaces"
          }, {
            "value": "11",
            "label": "Floor Patchwork - Building Common Spaces"
          }];
        }

        return _createClass(PrimaryBuildingClosingQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.username = this.userSessionService.emis_username();
            console.log(this.username);
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.vistId = this.routeData.queryParams.vistId;
            this.buildingId = this.routeData.queryParams.buildingId;
            this.status = this.routeData.queryParams.status;
            console.log(this.schoolId, this.vistId, this.buildingId, this.status);
            this.udiseCode = this.utilityService.udiseCode;
            this.visitstatus = this.routeData.queryParams.visitstatus;
            this.checkLocalDb();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.formBuilder.group({
              "IndexId": "",
              "SchlId": this.schoolId,
              "VistId": this.vistId,
              "BldgId": this.buildingId,
              "RampAvailYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              "RampRepairYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "FireExtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "FirstAidKit": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "CCTVCameraYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "BuildTabsYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "BuildTabsNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "BuildReapairComArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "BldgRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "PipeNeedHwDw": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "PipeNeedToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "WireLenElectrcty": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaWaterLeakage": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaExtWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaIntWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaReplasting": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaFlrPatchwrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "BldgType": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaWeatheringReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaPressedTiles": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
            });
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(event, id) {
            if (id == 1 && +this.form.value.BuildTabsNumber == 0) {
              this.form.controls['BuildTabsNumber'].setValue("");
              this.form.controls['BuildTabsNumber'].updateValueAndValidity();
            }

            if (this.form.value.PipeNeedHwDw == 0 && id == 13) {
              this.form.controls['PipeNeedHwDw'].setValue("");
            }

            if (this.form.value.PipeNeedToilet == 0 && id == 14) {
              this.form.controls['PipeNeedToilet'].setValue("");
            }

            if (this.form.value.WireLenElectrcty == 0 && id == 15) {
              this.form.controls['WireLenElectrcty'].setValue("");
            }

            if (this.form.value.AreaWaterLeakage == 0 && id == 16) {
              this.form.controls['AreaWaterLeakage'].setValue("");
            }

            if (this.form.value.AreaExtWw == 0 && id == 17) {
              this.form.controls['AreaExtWw'].setValue("");
            }

            if (this.form.value.AreaIntWw == 0 && id == 18) {
              this.form.controls['AreaIntWw'].setValue("");
            }

            if (this.form.value.AreaReplasting == 0 && id == 19) {
              this.form.controls['AreaReplasting'].setValue("");
            }

            if (this.form.value.AreaReflooring == 0 && id == 20) {
              this.form.controls['AreaReflooring'].setValue("");
            }

            if (this.form.value.AreaFlrPatchwrk == 0 && id == 21) {
              this.form.controls['AreaFlrPatchwrk'].setValue("");
            }

            if (this.form.value.AreaWeatheringReq == 0 && id == 22) {
              this.form.controls['AreaWeatheringReq'].setValue("");
            }

            if (this.form.value.AreaPressedTiles == 0 && id == 23) {
              this.form.controls['AreaPressedTiles'].setValue("");
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            debugger;
            console.log("Form", this.form);

            if (this.form.valid) {
              this.submitted = false;
              var build = parseInt(this.buildingId) - 101;
              var buildId = parseInt(this.buildingId) - 100;
              var query = 'UPDATE sidsPrimaryBuildingQuestion SET RampAvailYn ="' + this.form.value.RampAvailYn + '", RampRepairYn = "' + this.form.value.RampRepairYn + '", FireExtYn = "' + this.form.value.FireExtYn + '", FirstAidKit = "' + this.form.value.FirstAidKit + '", CCTVCameraYn = "' + this.form.value.CCTVCameraYn + '", BuildTabsYn = "' + this.form.value.BuildTabsYn + '", BuildTabsNumber = "' + this.form.value.BuildTabsNumber + '", BuildReapairComArea = "' + this.form.value.BuildReapairComArea + '", BldgRepair = "' + this.form.value.BldgRepair + '", AreaWeatheringReq = "' + this.form.value.AreaWeatheringReq + '", AreaPressedTiles = "' + this.form.value.AreaPressedTiles + '", PipeNeedHwDw = "' + this.form.value.PipeNeedHwDw + '", PipeNeedToilet = "' + this.form.value.PipeNeedToilet + '", WireLenElectrcty = "' + this.form.value.WireLenElectrcty + '", AreaWaterLeakage = "' + this.form.value.AreaWaterLeakage + '", AreaExtWw = "' + this.form.value.AreaExtWw + '", AreaIntWw = "' + this.form.value.AreaIntWw + '", AreaReplasting = "' + this.form.value.AreaReplasting + '", AreaReflooring = "' + this.form.value.AreaReflooring + '", AreaFlrPatchwrk = "' + this.form.value.AreaFlrPatchwrk + '" WHERE sidsPrimaryBuildingQuestion.SclId = "' + this.schoolId + '" And sidsPrimaryBuildingQuestion.BuildingId = "' + this.buildingId + '" And sidsPrimaryBuildingQuestion.VistId = "' + this.vistId + '"';
              var query2 = 'UPDATE sidsPrimaryBuildSavesDatas SET ClosingQuestions = 2, Status = 2 WHERE sidsPrimaryBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + this.buildingId + '"';
              return this.sqliteDB.update(query).then(function (data) {
                return _this.sqliteDB.update(query2).then(function (data) {
                  _this.alertService.success("Saved Successfully");

                  _this.router.navigate(['/tabs/primary-new-dashboard'], {
                    queryParams: {
                      'schoolId': _this.schoolId,
                      'vistId': _this.vistId,
                      'expanted': '2',
                      expIdBuild: build,
                      expBuildId: buildId,
                      'visitstatus': _this.visitstatus
                    },
                    skipLocationChange: false
                  });
                });
              });
            } else {
              this.validateAllFormFields(this.form);
              this.alertService.error('Please Fill all the Required Fields'); // this.alertService.error("Please enter valid data");

              this.submitted = true;
              this.focusValidator();
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this2 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
                _this2.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray) {
                _this2.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this3 = this;

            var query = 'SELECT * FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                // this.dataActive =true;
                // this.dataTrue = true
                _this3.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.dataList.push(data.rows.item(i));
                }

                console.log('selectQuery', _this3.dataList);

                _this3.form.patchValue({
                  "IndexId": _this3.dataList[0].IndexId,
                  "SchlId": _this3.schoolId,
                  "VistId": _this3.vistId,
                  "BldgId": _this3.buildingId,
                  "RampAvailYn": _this3.dataList[0].RampAvailYn,
                  "RampRepairYn": _this3.dataList[0].RampRepairYn == "false" ? false : _this3.dataList[0].RampRepairYn == "true" ? true : _this3.dataList[0].RampRepairYn,
                  "FireExtYn": _this3.dataList[0].FireExtYn == "false" ? false : _this3.dataList[0].FireExtYn == "true" ? true : _this3.dataList[0].FireExtYn,
                  "FirstAidKit": _this3.dataList[0].FirstAidKit == "false" ? false : _this3.dataList[0].FirstAidKit == "true" ? true : _this3.dataList[0].FirstAidKit,
                  "CCTVCameraYn": _this3.dataList[0].CCTVCameraYn == "false" ? false : _this3.dataList[0].CCTVCameraYn == "true" ? true : _this3.dataList[0].CCTVCameraYn,
                  "BuildTabsYn": _this3.dataList[0].BuildTabsYn == "false" ? false : _this3.dataList[0].BuildTabsYn == "true" ? true : _this3.dataList[0].BuildTabsYn,
                  "BuildTabsNumber": _this3.dataList[0].BuildTabsNumber,
                  "BuildReapairComArea": _this3.dataList[0].BuildReapairComArea == "false" ? false : _this3.dataList[0].BuildReapairComArea == "true" ? true : _this3.dataList[0].BuildReapairComArea,
                  "BldgRepair": _this3.dataList[0].BldgRepair ? Array.from(_this3.dataList[0].BldgRepair.split(",")) : "",
                  "PipeNeedHwDw": _this3.dataList[0].PipeNeedHwDw,
                  "PipeNeedToilet": _this3.dataList[0].PipeNeedToilet,
                  "WireLenElectrcty": _this3.dataList[0].WireLenElectrcty,
                  "AreaWaterLeakage": _this3.dataList[0].AreaWaterLeakage,
                  "AreaExtWw": _this3.dataList[0].AreaExtWw,
                  "AreaIntWw": _this3.dataList[0].AreaIntWw,
                  "AreaReplasting": _this3.dataList[0].AreaReplasting,
                  "AreaReflooring": _this3.dataList[0].AreaReflooring,
                  "AreaFlrPatchwrk": _this3.dataList[0].AreaFlrPatchwrk,
                  "BldgType": _this3.dataList[0].BldgType,
                  "AreaWeatheringReq": _this3.dataList[0].AreaWeatheringReq,
                  "AreaPressedTiles": _this3.dataList[0].AreaPressedTiles
                });

                if (_this3.form.value.BldgRepair) {
                  _this3.onFunRepair(_this3.form.value.BldgRepair, 1);
                }
              } else {
                console.log("local data");
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            var build = parseInt(this.buildingId) - 101;
            var buildId = parseInt(this.buildingId) - 100;
            console.log(this.status);

            if (this.status == 3) {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '3',
                  expIdBuild: build,
                  expBuildId: buildId,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            }

            if (this.status == 1) {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '1',
                  expIdBuild: build,
                  expBuildId: buildId,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            }

            if (this.status == 2) {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '2',
                  expIdBuild: build,
                  expBuildId: buildId,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            }
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(event, id) {
            if (id == 1) {
              this.form.controls['BldgRepair'].setValue("");
              this.form.controls['AreaWeatheringReq'].setValue("");
              this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['BldgRepair'].setValidators(null);
              this.form.controls['AreaWeatheringReq'].setValidators(null);
              this.form.controls['AreaPressedTiles'].setValidators(null);
              this.form.controls['PipeNeedHwDw'].setValidators(null);
              this.form.controls['PipeNeedToilet'].setValidators(null);
              this.form.controls['WireLenElectrcty'].setValidators(null);
              this.form.controls['AreaWaterLeakage'].setValidators(null);
              this.form.controls['AreaExtWw'].setValidators(null);
              this.form.controls['AreaIntWw'].setValidators(null);
              this.form.controls['AreaReplasting'].setValidators(null);
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaFlrPatchwrk'].setValidators(null);
              this.form.controls['BldgRepair'].updateValueAndValidity();
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
              this.form.controls['AreaExtWw'].updateValueAndValidity();
              this.form.controls['AreaIntWw'].updateValueAndValidity();
              this.form.controls['AreaReplasting'].updateValueAndValidity();
              this.form.controls['AreaReflooring'].updateValueAndValidity();
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            }
          }
        }, {
          key: "onFunRepair",
          value: function onFunRepair(event, id) {
            console.log(event);
            this.repairActive1 = false;
            this.repairActive2 = false;
            this.repairActive3 = false;
            this.repairActive4 = false;
            this.repairActive5 = false;
            this.repairActive6 = false;
            this.repairActive7 = false;
            this.repairActive8 = false;
            this.repairActive9 = false;
            this.repairActive10 = false;
            this.repairActive11 = false;

            for (var i = 0; i <= event.length; i++) {
              if (event[i] == "1") {
                this.repairActive1 = true;
              }

              if (event[i] == "2") {
                this.repairActive2 = true;
              }

              if (event[i] == "3") {
                this.repairActive3 = true;
              }

              if (event[i] == "4") {
                this.repairActive4 = true;
              }

              if (event[i] == "5") {
                this.repairActive5 = true;
              }

              if (event[i] == "6") {
                this.repairActive6 = true;
              }

              if (event[i] == "7") {
                this.repairActive7 = true;
              }

              if (event[i] == "8") {
                this.repairActive8 = true;
              }

              if (event[i] == "9") {
                this.repairActive9 = true;
              }

              if (event[i] == "10") {
                this.repairActive10 = true;
              }

              if (event[i] == "11") {
                this.repairActive11 = true;
              }
            }

            if (this.repairActive1) {
              // this.form.controls['AreaWeatheringReq'].setValue("");
              this.form.controls['AreaWeatheringReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWeatheringReq'].setValue("");
              this.form.controls['AreaWeatheringReq'].setValidators(null);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            }

            if (this.repairActive2) {
              // this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['AreaPressedTiles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            } else {
              this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['AreaPressedTiles'].setValidators(null);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            }

            if (this.repairActive3) {
              // this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValidators(null);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            }

            if (this.repairActive4) {
              // this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['PipeNeedToilet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['PipeNeedToilet'].setValidators(null);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            }

            if (this.repairActive5) {
              // this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['WireLenElectrcty'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            } else {
              this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['WireLenElectrcty'].setValidators(null);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            }

            if (this.repairActive6) {
              // this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValidators(null);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            }

            if (this.repairActive7) {
              // this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaExtWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaExtWw'].setValidators(null);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            }

            if (this.repairActive8) {
              // this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaIntWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaIntWw'].setValidators(null);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            }

            if (this.repairActive9) {
              // this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReplasting'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReplasting'].setValidators(null);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            }

            if (this.repairActive10) {
              // this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            }

            if (this.repairActive11) {
              // this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            } else {
              this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValidators(null);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.form.reset();
            this.initialValidator();
          }
        }, {
          key: "focusValidator",
          value: function focusValidator() {
            var invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
            invalidControl.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            }); // invalidControl.scrollTo(50, 0);

            invalidControl.focus();
          }
        }]);
      }();

      _PrimaryBuildingClosingQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
        }];
      };

      _PrimaryBuildingClosingQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-primary-building-closing-questions',
        template: _raw_loader_primary_building_closing_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_building_closing_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryBuildingClosingQuestionsPage);
      /***/
    },

    /***/
    39633:
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions.page.scss ***!
      \********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktYnVpbGRpbmctY2xvc2luZy1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0FBQ0o7O0FBRUU7RUFFRSxpQkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFHQSwyQkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQUEsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTs7O0VBR0UsZUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUU7O0VBRUUscUJBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBT0UsU0FBQTs7QUFHQSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFQSjs7QUFVRTtFQUNFLGNBQUE7QUFQSjs7QUFXRSxPQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7QUFUSjs7QUFhRSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFYSjs7QUFjRTtFQUNFLGNBQUE7QUFYSjs7QUFlRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFiSjs7QUFnQkU7RUFDRSxjQUFBO0FBYko7O0FBaUJFLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWZKOztBQWtCRTtFQUNFLGNBQUE7QUFmSjs7QUFtQkUsUUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBakJKOztBQW9CRTtFQUNFLGNBQUE7QUFqQko7O0FBcUJFLE9BQUE7O0FBTUE7RUFDRSxXQUFBO0FBdkJKOztBQTBCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBdkJKOztFQXlCRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBdEJKOztFQXdCRTs7SUFFRSxlQUFBO0lBQ0EsbUJBQUE7RUFyQko7QUFDRjs7QUF3QkU7RUFDRSx3Q0FBQTtFQUNBLDRDQUFBO0FBdEJKOztBQThCRTtFQUNFLFVBQUE7QUEzQko7O0FBOEJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQW9DRTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSx1REFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFqQ0o7O0FBd0NFO0VBQ0UsMEJBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFyQ047O0FBd0NFO0VBQ0csb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyQ0w7O0FBd0NJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQXJDUjs7QUF3Q0U7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFyQ0o7O0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQ047O0FBdUNFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQUEsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwQ0o7O0FBc0NFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbkNKOztBQXFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBbENKOztBQXFDRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBbENKOztBQXFDRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFsQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBbUNFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWhDSjs7QUFrQ0U7RUFDRSxhQUFBO0FBL0JKIiwiZmlsZSI6InByaW1hcnktYnVpbGRpbmctY2xvc2luZy1xdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkJvdHRvbTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXIge1xyXG4gICAgLy8gd2lkdGg6IDkzJTtcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lVGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZUljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2QtYXV0aG9yIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAvKiB0aGlzIGlzIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWljb24gaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiAjMzAzZTQ5O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQ09MT1JTKi9cclxuICBcclxuICBcclxuICAvKlBPU0lUSVZFKi9cclxuICBcclxuICAucG9zaXRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICAucG9zaXRpdmUgaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypDQUxNKi9cclxuICBcclxuICAuY2FsbSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxtIGkge1xyXG4gICAgY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQkFMQU5DRUQqL1xyXG4gIFxyXG4gIC5iYWxhbmNlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NmNjMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWxhbmNlZCBpIHtcclxuICAgIGNvbG9yOiAjNjZjYzMzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkVORVJHSVpFRCovXHJcbiAgXHJcbiAgLmVuZXJnaXplZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGI4NDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmVyZ2l6ZWQgaSB7XHJcbiAgICBjb2xvcjogI2YwYjg0MDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypBU1NFUlRJVkUqL1xyXG4gIFxyXG4gIC5hc3NlcnRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG4gIH1cclxuICBcclxuICAuYXNzZXJ0aXZlIGkge1xyXG4gICAgY29sb3I6ICNlZjRlM2E7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qUk9ZQUwqL1xyXG4gIFxyXG4gIC5yb3lhbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4YTZkZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3lhbCBpIHtcclxuICAgIGNvbG9yOiAjOGE2ZGU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkRBUksqL1xyXG4gIFxyXG4gIC8vIC5kYXJrIHtcclxuICAvLyAgIGJvcmRlci1jb2xvcjogIzQ0NDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmRhcmsgaSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlY29uZGFyeSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAucXVlcy10eHQge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxuICB9IFxyXG4gIFxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToxLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtcGFkZGluZyB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24tc2VsZWN0IHtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIC8vIH1cclxuICBcclxuICAuaW5wdXQtY2xyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24taW5wdXQge1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi1uby1wYWRkaW5ne1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RkE7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1uby1wYWRkaW5nLXF1ZXN0aW9ue1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURERUZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIC5zZWxlY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgICBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFkZCB7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1zYXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbiAgfVxyXG4gIC5mb290ZXItbm90IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gIH1cclxuICAuZm9vdGVyLXZlcmlmaWVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRzVmlld3tcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzhCNjdCMztcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gIH1cclxuICBcclxuICAucXVlc0NvbG9ye1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjRGQTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJnQ2hlY2t7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxuICB9XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTQlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXRvZ2dsZXtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjRkZGRkZGO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    17612:
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions.page.html ***!
      \**********************************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Building Closing Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; align-items: center;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Building Closing Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the the building have a ramp?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RampAvailYn\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of ramp\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['RampAvailYn'].hasError('required') && (form.controls['RampAvailYn'].dirty || form.controls['RampAvailYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.RampAvailYn == 1 || form.value.RampAvailYn == 2\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the ramp require any repair?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.RampRepairYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.RampRepairYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.RampRepairYn?true:false}}\" formControlName=\"RampRepairYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['RampRepairYn'].hasError('required') && (form.controls['RampRepairYn'].dirty || form.controls['RampRepairYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" \r\n        *ngIf=\"form.value.BldgType != 3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the building have a functional fire extinguisher?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.FireExtYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.FireExtYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.FireExtYn?true:false}}\" formControlName=\"FireExtYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['FireExtYn'].hasError('required') && (form.controls['FireExtYn'].dirty || form.controls['FireExtYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\"\r\n         *ngIf=\"form.value.BldgType != 3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Does the building have a usable first aid kit?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.FirstAidKit\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.FirstAidKit\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.FirstAidKit?true:false}}\" formControlName=\"FirstAidKit\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['FirstAidKit'].hasError('required') && (form.controls['FirstAidKit'].dirty || form.controls['FirstAidKit'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" \r\n        *ngIf=\"form.value.BldgType != 3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the building have CCTV cameras?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.CCTVCameraYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.CCTVCameraYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.CCTVCameraYn?true:false}}\" formControlName=\"CCTVCameraYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['CCTVCameraYn'].hasError('required') && (form.controls['CCTVCameraYn'].dirty || form.controls['CCTVCameraYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the building have any taps?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.BuildTabsYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.BuildTabsYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.BuildTabsYn?true:false}}\" formControlName=\"BuildTabsYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BuildTabsYn'].hasError('required') && (form.controls['BuildTabsYn'].dirty || form.controls['BuildTabsYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BuildTabsYn\"> \r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of taps<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BuildTabsNumber\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,1)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['BuildTabsNumber'].hasError('required') && (form.controls['BuildTabsNumber'].dirty || form.controls['BuildTabsNumber'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.BuildTabsNumber.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the building have any repairs in common areas?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.BuildReapairComArea\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.BuildReapairComArea\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle (ionChange)=\"onToggleChange($event, 1)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.BuildReapairComArea?true:false}}\" formControlName=\"BuildReapairComArea\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BuildReapairComArea'].hasError('required') && (form.controls['BuildReapairComArea'].dirty || form.controls['BuildReapairComArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BuildReapairComArea\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Type of repair <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" multiple=\"true\" formControlName=\"BldgRepair\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onFunRepair($event.detail.value, 1)\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of repair\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgRepair'].hasError('required') && (form.controls['BldgRepair'].dirty || form.controls['BldgRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive1\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of weathering course required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaWeatheringReq\" (ionChange)=\"onInputChange($event.detail.value, 23)\"\r\n                    maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaWeatheringReq'].hasError('required') && (form.controls['AreaWeatheringReq'].dirty || form.controls['AreaWeatheringReq'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaWeatheringReq.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive2\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of pressed tiles required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaPressedTiles\" (ionChange)=\"onInputChange($event.detail.value, 22)\"\r\n                    maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaPressedTiles'].hasError('required') && (form.controls['AreaPressedTiles'].dirty || form.controls['AreaPressedTiles'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaPressedTiles.errors?.pattern\">PPlease enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Length of Pipe needed for Handwash and Drinking Water (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipeNeedHwDw\" (ionChange)=\"onInputChange($event.detail.value, 13)\"\r\n                    maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['PipeNeedHwDw'].hasError('required') && (form.controls['PipeNeedHwDw'].dirty || form.controls['PipeNeedHwDw'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.PipeNeedHwDw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive4\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Length of Pipe needed for Toilets (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipeNeedToilet\" (ionChange)=\"onInputChange($event.detail.value, 14)\"\r\n                    maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['PipeNeedToilet'].hasError('required') && (form.controls['PipeNeedToilet'].dirty || form.controls['PipeNeedToilet'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.PipeNeedToilet.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive5\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Length of Electrical Lines (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"WireLenElectrcty\" (ionChange)=\"onInputChange($event.detail.value, 15)\"\r\n                    maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['WireLenElectrcty'].hasError('required') && (form.controls['WireLenElectrcty'].dirty || form.controls['WireLenElectrcty'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.WireLenElectrcty.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive6\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Repair for Water Leakage and Seepage<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaWaterLeakage\" (ionChange)=\"onInputChange($event.detail.value, 16)\"\r\n                    maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaWaterLeakage'].hasError('required') && (form.controls['AreaWaterLeakage'].dirty || form.controls['AreaWaterLeakage'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaWaterLeakage.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive7\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Exterior Whitewashing and Painting Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                 <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaExtWw\" (ionChange)=\"onInputChange($event.detail.value, 17)\"\r\n                    maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaExtWw'].hasError('required') && (form.controls['AreaExtWw'].dirty || form.controls['AreaExtWw'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaExtWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive8\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Interior Whitewashing and Painting Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaIntWw\" (ionChange)=\"onInputChange($event.detail.value, 18)\"\r\n                  maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaIntWw'].hasError('required') && (form.controls['AreaIntWw'].dirty || form.controls['AreaIntWw'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaIntWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive9\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>  Area of Replastering Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReplasting\" (ionChange)=\"onInputChange($event.detail.value, 19)\"\r\n                  maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaReplasting'].hasError('required') && (form.controls['AreaReplasting'].dirty || form.controls['AreaReplasting'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaReplasting.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive10\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Reflooring Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReflooring\" (ionChange)=\"onInputChange($event.detail.value, 20)\"\r\n                  maxlength=\"8\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaReflooring'].hasError('required') && (form.controls['AreaReflooring'].dirty || form.controls['AreaReflooring'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaReflooring.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive11\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>  Area of Floor Patchwork Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaFlrPatchwrk\" (ionChange)=\"onInputChange($event.detail.value, 21)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AreaFlrPatchwrk'].hasError('required') && (form.controls['AreaFlrPatchwrk'].dirty || form.controls['AreaFlrPatchwrk'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaFlrPatchwrk.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n\r\n    </div>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-building-closing-questions_primary-350265-es5.js.map