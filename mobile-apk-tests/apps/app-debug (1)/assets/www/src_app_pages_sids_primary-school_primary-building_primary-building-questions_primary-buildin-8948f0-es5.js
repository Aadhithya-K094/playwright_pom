(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-building-questions_primary-buildin-8948f0"], {
    /***/
    73536:
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-questions/primary-building-questions-routing.module.ts ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingQuestionsPageRoutingModule": function PrimaryBuildingQuestionsPageRoutingModule() {
          return (
            /* binding */
            _PrimaryBuildingQuestionsPageRoutingModule
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


      var _primary_building_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-building-questions.page */
      23266);

      var routes = [{
        path: '',
        component: _primary_building_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryBuildingQuestionsPage
      }];

      var _PrimaryBuildingQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryBuildingQuestionsPageRoutingModule() {
        _classCallCheck(this, PrimaryBuildingQuestionsPageRoutingModule);
      });

      _PrimaryBuildingQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryBuildingQuestionsPageRoutingModule);
      /***/
    },

    /***/
    97159:
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-questions/primary-building-questions.module.ts ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingQuestionsPageModule": function PrimaryBuildingQuestionsPageModule() {
          return (
            /* binding */
            _PrimaryBuildingQuestionsPageModule
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


      var _primary_building_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-building-questions-routing.module */
      73536);
      /* harmony import */


      var _primary_building_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-building-questions.page */
      23266);

      var _PrimaryBuildingQuestionsPageModule = /*#__PURE__*/_createClass(function PrimaryBuildingQuestionsPageModule() {
        _classCallCheck(this, PrimaryBuildingQuestionsPageModule);
      });

      _PrimaryBuildingQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_building_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryBuildingQuestionsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_building_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryBuildingQuestionsPage]
      })], _PrimaryBuildingQuestionsPageModule);
      /***/
    },

    /***/
    23266:
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-questions/primary-building-questions.page.ts ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryBuildingQuestionsPage": function PrimaryBuildingQuestionsPage() {
          return (
            /* binding */
            _PrimaryBuildingQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_building_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-building-questions.page.html */
      41875);
      /* harmony import */


      var _primary_building_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-building-questions.page.scss */
      36298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);

      var _PrimaryBuildingQuestionsPage = /*#__PURE__*/function () {
        function PrimaryBuildingQuestionsPage(router, formBuilder, route, networkService, alertController, androidPermissions, file, camera, sqliteDB, geolocation, utilityService, ionicStorage, userSessionService, alertService, el) {
          _classCallCheck(this, PrimaryBuildingQuestionsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.route = route;
          this.networkService = networkService;
          this.alertController = alertController;
          this.androidPermissions = androidPermissions;
          this.file = file;
          this.camera = camera;
          this.sqliteDB = sqliteDB;
          this.geolocation = geolocation;
          this.utilityService = utilityService;
          this.ionicStorage = ionicStorage;
          this.userSessionService = userSessionService;
          this.alertService = alertService;
          this.el = el;
          this.years = [{
            "value": "1",
            "label": "<5"
          }, {
            "value": "2",
            "label": "5-10"
          }, {
            "value": "3",
            "label": "10-15"
          }, {
            "value": "4",
            "label": "15-20"
          }, {
            "value": "5",
            "label": "20-25"
          }, {
            "value": "6",
            "label": "25-30"
          }, {
            "value": "7",
            "label": ">30"
          }];
          this.sourceData = [{
            "value": "1",
            "label": "Government"
          }, {
            "value": "2",
            "label": "CSR"
          }, {
            "value": "3",
            "label": "Community Contribution"
          }, {
            "value": "4",
            "label": "Individual Contribution"
          }, {
            "value": "5",
            "label": "Others"
          }];
          this.type = [{
            "value": "1",
            "label": "Administrative"
          }, {
            "value": "2",
            "label": "Academic"
          }, {
            "value": "3",
            "label": "Toilet Block"
          }, {
            "value": "4",
            "label": "Kitchen Shed"
          }, {
            "value": "5",
            "label": "Lab"
          }, {
            "value": "6",
            "label": "Dining"
          }, {
            "value": "7",
            "label": "Anganwadi"
          }, {
            "value": "8",
            "label": "IE Resource Building"
          }, {
            "value": "9",
            "label": "CRC Building"
          }, {
            "value": "10",
            "label": "Combination"
          }, {
            "value": "11",
            "label": "Indoor Auditorium"
          } // {
          //   "value": "12",
          //   "label": "Library"
          // }
          ];
          this.condition = [{
            "value": "1",
            "label": "Functional"
          }, {
            "value": "2",
            "label": "Under Construction"
          }, {
            "value": "3",
            "label": "Dilapitated - to be demolished"
          }, {
            "value": "4",
            "label": "Needs Repair"
          }, {
            "value": "5",
            "label": "Under Renovations"
          }];
          this.repair = [// {
          //   "value": "1",
          //   "label": "Weathering Course"
          // },
          // {
          //   "value": "2",
          //   "label": "Pressed Tiles"
          // },
          {
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
          this.fire = [{
            "value": "1",
            "label": "Functional"
          }, {
            "value": "2",
            "label": "Expired"
          }, {
            "value": "3",
            "label": "No Fire"
          }, {
            "value": "4",
            "label": "Extinguisher"
          }];
          this.firstAidKit = [{
            "value": "1",
            "label": "Usable"
          }, {
            "value": "2",
            "label": "Needs Refill"
          }, {
            "value": "3",
            "label": "No Kit"
          }];
          this.statge = [{
            "value": "1",
            "label": "Increase in Height"
          }, {
            "value": "2",
            "label": "Levelling"
          }, {
            "value": "3",
            "label": "To be Demolished"
          }, {
            "value": "4",
            "label": "None"
          }];
          this.dataList = [];
        }

        return _createClass(PrimaryBuildingQuestionsPage, [{
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
              "BldgName": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgFundSourceCons": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgType": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgBre": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaWeatheringReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaPressedTiles": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "PipeNeedHwDw": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "PipeNeedToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "WireLenElectrcty": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaWaterLeakage": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaExtWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaIntWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaReplasting": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AreaFlrPatchwrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              // "AuditoriumStageYn": new FormControl(false, null),
              "AuditoriumStageReqt": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumStageArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumStageHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumStageAreaLevel": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumLights": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumFans": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "AuditoriumPrjtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "AuditoriumPrjtFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "RampAvailYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "RampRepairYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "FireExtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "FirstAidKit": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "CCTVCameraYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "BuildTabsYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "BuildTabsNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "BuildReapairComArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
              "BldgFrontPhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              "BldgFrontPhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "BldgLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
              "BldgLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null)
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            debugger;
            console.log("Form", this.form);

            if (this.form.valid) {
              this.submitted = false;
              this.alertService.success("Saved Successfully");
              var query = 'DELETE FROM  sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query).then(function (data) {
                console.log(data, "delete");

                if (data.rowsAffected > 0) {
                  _this.insertLocalDB();
                }

                if (data.rowsAffected == 0) {
                  _this.insertLocalDB();
                }
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

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup) {
                _this2.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArray) {
                _this2.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB() {
            var _this3 = this;

            var insertRows = [];

            if (+this.form.value.BldgCondition == 2 || +this.form.value.BldgCondition == 3 || +this.form.value.BldgCondition == 5) {
              insertRows.push(["INSERT INTO sidsPrimaryBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, this.schoolId, this.vistId, this.buildingId, this.form.value.IndexId, this.form.value.BldgName, this.form.value.BldgAge, this.form.value.BldgFundSourceCons, this.form.value.BldgType, this.form.value.BldgLength, this.form.value.BldgBre, this.form.value.BldgCondition, '', '', '', '', '', '', '', '', '', '', '', '', this.form.value.AuditoriumYn, this.form.value.AuditoriumStageReqt, this.form.value.AuditoriumStageArea, this.form.value.AuditoriumStageHeight, this.form.value.AuditoriumStageAreaLevel, this.form.value.AuditoriumLights, this.form.value.AuditoriumFans, this.form.value.AuditoriumPrjtYn, this.form.value.AuditoriumPrjtFunc, '', 'false', 'false', 'false', 'false', 'false', '', '', this.form.value.BldgFrontPhoto, this.form.value.BldgFrontPhotoName, this.form.value.BldgLatitude, this.form.value.BldgLongitude]]);
            } else {
              insertRows.push(["INSERT INTO sidsPrimaryBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, this.schoolId, this.vistId, this.buildingId, this.form.value.IndexId, this.form.value.BldgName, this.form.value.BldgAge, this.form.value.BldgFundSourceCons, this.form.value.BldgType, this.form.value.BldgLength, this.form.value.BldgBre, this.form.value.BldgCondition, this.form.value.BldgRepair ? this.form.value.BldgRepair.toString() : this.form.value.BldgRepair, this.form.value.AreaWeatheringReq, this.form.value.AreaPressedTiles, this.form.value.PipeNeedHwDw, this.form.value.PipeNeedToilet, this.form.value.WireLenElectrcty, this.form.value.AreaWaterLeakage, this.form.value.AreaExtWw, this.form.value.AreaIntWw, this.form.value.AreaReplasting, this.form.value.AreaReflooring, this.form.value.AreaFlrPatchwrk, this.form.value.AuditoriumYn, this.form.value.AuditoriumStageReqt, this.form.value.AuditoriumStageArea, this.form.value.AuditoriumStageHeight, this.form.value.AuditoriumStageAreaLevel, this.form.value.AuditoriumLights, this.form.value.AuditoriumFans, this.form.value.AuditoriumPrjtYn, this.form.value.AuditoriumPrjtFunc, this.form.value.RampAvailYn, this.form.value.RampRepairYn, this.form.value.FireExtYn, this.form.value.FirstAidKit, this.form.value.CCTVCameraYn, this.form.value.BuildTabsYn, this.form.value.BuildTabsNumber, this.form.value.BuildReapairComArea, this.form.value.BldgFrontPhoto, this.form.value.BldgFrontPhotoName, this.form.value.BldgLatitude, this.form.value.BldgLongitude]]);
            }

            console.log("pludgeRepar", this.form.value.BldgRepair);
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              var _a, _b;

              console.info("Floor Details Stored Locally");

              _this3.alertService.success('Saved Successfully');

              var name = _this3.form.value.BldgName;
              var build = parseInt(_this3.buildingId) - 101;
              var buildId = parseInt(_this3.buildingId) - 100;

              if (+_this3.form.value.BldgCondition == 2 || +_this3.form.value.BldgCondition == 3 || +_this3.form.value.BldgCondition == 5) {
                _this3.deleteFloorandRoom();
              }

              var query = 'UPDATE sidsPrimaryBuildSavesDatas SET Status = 2 WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this3.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this3.buildingId + '" And sidsPrimaryBuildSavesDatas.VistId = "' + _this3.vistId + '"';
              var query1 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildName="' + name + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this3.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this3.buildingId + '" And sidsPrimaryBuildSavesDatas.VistId = "' + _this3.vistId + '"';
              var query2 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildCondi="' + _this3.form.value.BldgCondition + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this3.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this3.buildingId + '" And sidsPrimaryBuildSavesDatas.VistId = "' + _this3.vistId + '"';

              if (((_a = _this3.dataList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                if (((_b = _this3.dataList[0]) === null || _b === void 0 ? void 0 : _b.BldgCondition) == 2 || _this3.dataList[0].BldgCondition == 3 || _this3.dataList[0].BldgCondition == 5) {
                  var query3 = 'UPDATE sidsPrimaryBuildSavesDatas SET ClosingQuestions="' + 1 + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this3.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this3.buildingId + '" And sidsPrimaryBuildSavesDatas.VistId = "' + _this3.vistId + '"';

                  _this3.sqliteDB.update(query3).then(function (data) {});
                }
              }

              return _this3.sqliteDB.update(query).then(function (data) {
                return _this3.sqliteDB.update(query1).then(function (data) {
                  return _this3.sqliteDB.update(query2).then(function (data) {
                    console.log("update");

                    _this3.router.navigate(['/tabs/primary-new-dashboard'], {
                      queryParams: {
                        'schoolId': _this3.schoolId,
                        'vistId': _this3.vistId,
                        'expanted': '2',
                        expIdBuild: build,
                        expBuildId: buildId,
                        BldgCondition: +_this3.form.value.BldgCondition == 2 ? 2 : +_this3.form.value.BldgCondition == 1 ? 1 : null,
                        'visitstatus': _this3.visitstatus
                      },
                      skipLocationChange: false
                    });
                  });
                });
              });
            });
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this4 = this;

            var query = 'SELECT * FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                // this.dataActive =true;
                // this.dataTrue = true
                _this4.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.dataList.push(data.rows.item(i));
                }

                console.log('selectQuery', _this4.dataList);

                _this4.form.patchValue({
                  "IndexId": _this4.dataList[0].BuildingIndex,
                  "SchlId": _this4.schoolId,
                  "VistId": _this4.vistId,
                  "BldgId": _this4.buildingId,
                  "BldgName": _this4.dataList[0].BldgName,
                  "BldgAge": _this4.dataList[0].BldgAge,
                  "BldgFundSourceCons": _this4.dataList[0].BldgFundSourceCons,
                  "BldgType": _this4.dataList[0].BldgType,
                  "BldgLength": _this4.dataList[0].BldgLength,
                  "BldgBre": _this4.dataList[0].BldgBre,
                  "BldgCondition": _this4.dataList[0].BldgCondition,
                  "BldgRepair": _this4.dataList[0].BldgRepair ? Array.from(_this4.dataList[0].BldgRepair.split(",")) : "",
                  "AreaWeatheringReq": _this4.dataList[0].AreaWeatheringReq,
                  "AreaPressedTiles": _this4.dataList[0].AreaPressedTiles,
                  "PipeNeedHwDw": _this4.dataList[0].PipeNeedHwDw,
                  "PipeNeedToilet": _this4.dataList[0].PipeNeedToilet,
                  "WireLenElectrcty": _this4.dataList[0].WireLenElectrcty,
                  "AreaWaterLeakage": _this4.dataList[0].AreaWaterLeakage,
                  "AreaExtWw": _this4.dataList[0].AreaExtWw,
                  "AreaIntWw": _this4.dataList[0].AreaIntWw,
                  "AreaReplasting": _this4.dataList[0].AreaReplasting,
                  "AreaReflooring": _this4.dataList[0].AreaReflooring,
                  "AreaFlrPatchwrk": _this4.dataList[0].AreaFlrPatchwrk,
                  "AuditoriumYn": _this4.dataList[0].AuditoriumYn == "false" ? false : _this4.dataList[0].AuditoriumYn == "true" ? true : _this4.dataList[0].AuditoriumYn,
                  // "AuditoriumStageYn": this.dataList[0].AuditoriumStageYn == "false" ? false : this.dataList[0].AuditoriumStageYn == "true" ? true : this.dataList[0].AuditoriumStageYn,
                  "AuditoriumStageReqt": _this4.dataList[0].AuditoriumStageReqt ? Array.from(_this4.dataList[0].AuditoriumStageReqt.split(",")) : "",
                  "AuditoriumStageArea": _this4.dataList[0].AuditoriumStageArea,
                  "AuditoriumStageHeight": _this4.dataList[0].AuditoriumStageHeight,
                  "AuditoriumStageAreaLevel": _this4.dataList[0].AuditoriumStageAreaLevel,
                  "AuditoriumLights": _this4.dataList[0].AuditoriumLights,
                  "AuditoriumFans": _this4.dataList[0].AuditoriumFans,
                  "AuditoriumPrjtYn": _this4.dataList[0].AuditoriumPrjtYn == "false" ? false : _this4.dataList[0].AuditoriumPrjtYn == "true" ? true : _this4.dataList[0].AuditoriumPrjtYn,
                  "AuditoriumPrjtFunc": _this4.dataList[0].AuditoriumPrjtFunc == "false" ? false : _this4.dataList[0].AuditoriumPrjtFunc == "true" ? true : _this4.dataList[0].AuditoriumPrjtFunc,
                  "RampAvailYn": _this4.dataList[0].RampAvailYn,
                  "RampRepairYn": _this4.dataList[0].RampRepairYn == "false" ? false : _this4.dataList[0].RampRepairYn == "true" ? true : _this4.dataList[0].RampRepairYn,
                  "FireExtYn": _this4.dataList[0].FireExtYn == "false" ? false : _this4.dataList[0].FireExtYn == "true" ? true : _this4.dataList[0].FireExtYn,
                  "FirstAidKit": _this4.dataList[0].FirstAidKit == "false" ? false : _this4.dataList[0].FirstAidKit == "true" ? true : _this4.dataList[0].FirstAidKit,
                  "CCTVCameraYn": _this4.dataList[0].CCTVCameraYn == "false" ? false : _this4.dataList[0].CCTVCameraYn == "true" ? true : _this4.dataList[0].CCTVCameraYn,
                  "BuildTabsYn": _this4.dataList[0].BuildTabsYn == "false" ? false : _this4.dataList[0].BuildTabsYn == "true" ? true : _this4.dataList[0].BuildTabsYn,
                  "BuildTabsNumber": _this4.dataList[0].BuildTabsNumber,
                  "BuildReapairComArea": _this4.dataList[0].BuildReapairComArea == "false" ? false : _this4.dataList[0].BuildReapairComArea == "true" ? true : _this4.dataList[0].BuildReapairComArea,
                  "BldgFrontPhoto": _this4.dataList[0].BldgFrontPhoto,
                  "BldgFrontPhotoName": _this4.dataList[0].BldgFrontPhotoName,
                  "BldgLatitude": _this4.dataList[0].BldgLatitude,
                  "BldgLongitude": _this4.dataList[0].BldgLongitude
                });

                if (_this4.form.value.AuditoriumStageReqt) {
                  _this4.onMultiSelectChange(_this4.form.value.AuditoriumStageReqt);
                }
              } else {
                console.log("local data");

                _this4.initialValidator();
              }
            });
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
              this.form.controls['AreaWeatheringReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWeatheringReq'].setValue("");
              this.form.controls['AreaWeatheringReq'].setValidators(null);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            }

            if (this.repairActive2) {
              // this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['AreaPressedTiles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            } else {
              this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['AreaPressedTiles'].setValidators(null);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            }

            if (this.repairActive3) {
              // this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValidators(null);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            }

            if (this.repairActive4) {
              // this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['PipeNeedToilet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['PipeNeedToilet'].setValidators(null);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            }

            if (this.repairActive5) {
              // this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['WireLenElectrcty'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            } else {
              this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['WireLenElectrcty'].setValidators(null);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            }

            if (this.repairActive6) {
              // this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValidators(null);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            }

            if (this.repairActive7) {
              // this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaExtWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaExtWw'].setValidators(null);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            }

            if (this.repairActive8) {
              // this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaIntWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaIntWw'].setValidators(null);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            }

            if (this.repairActive9) {
              // this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReplasting'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReplasting'].setValidators(null);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            }

            if (this.repairActive10) {
              // this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            }

            if (this.repairActive11) {
              // this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            } else {
              this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValidators(null);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            }
          }
        }, {
          key: "onMultiSelectChange",
          value: function onMultiSelectChange(event) {
            this.activeHeight = false;
            this.activeLevelling = false;

            for (var i = 0; i <= event.length; i++) {
              console.log(event[i], "121324", event);

              if (event[i] == "1") {
                this.activeHeight = true;
              }

              if (event[i] == "2") {
                this.activeLevelling = true;
              }
            }

            if (this.activeHeight) {
              // this.form.controls['AuditoriumStageArea'].setValue("");
              this.form.controls['AuditoriumStageArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AuditoriumStageArea'].updateValueAndValidity(); // this.form.controls['AuditoriumStageHeight'].setValue("");

              this.form.controls['AuditoriumStageHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            } else {
              this.form.controls['AuditoriumStageArea'].setValue("");
              this.form.controls['AuditoriumStageArea'].setValidators(null);
              this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
              this.form.controls['AuditoriumStageHeight'].setValue("");
              this.form.controls['AuditoriumStageHeight'].setValidators(null);
              this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
            }

            if (this.activeLevelling) {
              // this.form.controls['AuditoriumStageAreaLevel'].setValue("");
              this.form.controls['AuditoriumStageAreaLevel'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
              this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
            } else {
              this.form.controls['AuditoriumStageAreaLevel'].setValue("");
              this.form.controls['AuditoriumStageAreaLevel'].setValidators(null);
              this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
            }
          }
        }, {
          key: "getOnFunRepair",
          value: function getOnFunRepair(event, id) {
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
              } // if (event[i] == "5") {
              //   this.repairActive5 = true
              // }


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
              this.form.controls['AreaWeatheringReq'].setValue(this.dataList[0].AreaWeatheringReq);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWeatheringReq'].setValue("");
              this.form.controls['AreaWeatheringReq'].setValidators(null);
              this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
            }

            if (this.repairActive2) {
              this.form.controls['AreaPressedTiles'].setValue(this.dataList[0].AreaPressedTiles);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            } else {
              this.form.controls['AreaPressedTiles'].setValue("");
              this.form.controls['AreaPressedTiles'].setValidators(null);
              this.form.controls['AreaPressedTiles'].updateValueAndValidity();
            }

            if (this.repairActive3) {
              this.form.controls['PipeNeedHwDw'].setValue(this.dataList[0].PipeNeedHwDw);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedHwDw'].setValue("");
              this.form.controls['PipeNeedHwDw'].setValidators(null);
              this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
            }

            if (this.repairActive4) {
              this.form.controls['PipeNeedToilet'].setValue(this.dataList[0].PipeNeedToilet);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            } else {
              this.form.controls['PipeNeedToilet'].setValue("");
              this.form.controls['PipeNeedToilet'].setValidators(null);
              this.form.controls['PipeNeedToilet'].updateValueAndValidity();
            }

            if (this.repairActive5) {
              this.form.controls['WireLenElectrcty'].setValue(this.dataList[0].WireLenElectrcty);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            } else {
              this.form.controls['WireLenElectrcty'].setValue("");
              this.form.controls['WireLenElectrcty'].setValidators(null);
              this.form.controls['WireLenElectrcty'].updateValueAndValidity();
            }

            if (this.repairActive6) {
              this.form.controls['AreaWaterLeakage'].setValue(this.dataList[0].AreaWaterLeakage);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            } else {
              this.form.controls['AreaWaterLeakage'].setValue("");
              this.form.controls['AreaWaterLeakage'].setValidators(null);
              this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
            }

            if (this.repairActive7) {
              this.form.controls['AreaExtWw'].setValue(this.dataList[0].AreaExtWw);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaExtWw'].setValue("");
              this.form.controls['AreaExtWw'].setValidators(null);
              this.form.controls['AreaExtWw'].updateValueAndValidity();
            }

            if (this.repairActive8) {
              this.form.controls['AreaIntWw'].setValue(this.dataList[0].AreaIntWw);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            } else {
              this.form.controls['AreaIntWw'].setValue("");
              this.form.controls['AreaIntWw'].setValidators(null);
              this.form.controls['AreaIntWw'].updateValueAndValidity();
            }

            if (this.repairActive9) {
              this.form.controls['AreaReplasting'].setValue(this.dataList[0].AreaReplasting);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReplasting'].setValue("");
              this.form.controls['AreaReplasting'].setValidators(null);
              this.form.controls['AreaReplasting'].updateValueAndValidity();
            }

            if (this.repairActive10) {
              this.form.controls['AreaReflooring'].setValue(this.dataList[0].AreaReflooring);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            } else {
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaReflooring'].updateValueAndValidity();
            }

            if (this.repairActive11) {
              this.form.controls['AreaFlrPatchwrk'].setValue(this.dataList[0].AreaFlrPatchwrk);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            } else {
              this.form.controls['AreaFlrPatchwrk'].setValue("");
              this.form.controls['AreaFlrPatchwrk'].setValidators(null);
              this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
            }
          }
        }, {
          key: "onChangeBuildingData",
          value: function onChangeBuildingData(event, id) {
            if (id == 1) {// this.form.controls['BldgName'].setValue("");
            }

            if (id == 7) {
              if (+this.form.value.AuditoriumLights > 20) {
                this.form.controls['AuditoriumLights'].setValue("");
              }
            }

            if (id == 10) {
              if (+this.form.value.AuditoriumFans > 20) {
                this.form.controls['AuditoriumFans'].setValue("");
              }
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

            if (this.form.value.AuditoriumStageArea == 0 && id == 22) {
              this.form.controls['AuditoriumStageArea'].setValue("");
            }

            if (this.form.value.AuditoriumStageHeight == 0 && id == 23) {
              this.form.controls['AuditoriumStageHeight'].setValue("");
            }

            if (this.form.value.AuditoriumStageAreaLevel == 0 && id == 24) {
              this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            }

            if (+this.form.value.BldgLength == 0 && id == 25) {
              this.form.controls['BldgLength'].setValue("");
            }

            if (+this.form.value.BldgBre == 0 && id == 26) {
              this.form.controls['BldgBre'].setValue("");
            }
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
          key: "deleteFloorandRoom",
          value: function deleteFloorandRoom() {
            var _this5 = this;

            var idbuild = parseInt(this.buildingId) - 100;
            var query1 = 'DELETE FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And VistId = "' + this.vistId + '"';
            var query3 = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And VistId = "' + this.vistId + '"';
            var query4 = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            var query5 = 'SELECT * FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query5).then(function (floorData) {
              var sidsFloor = [];

              for (var i = 0; i < floorData.rows.length; i++) {
                sidsFloor.push(floorData.rows.item(i));
              }

              return _this5.sqliteDB.getDataLocalDB(query1).then(function (data) {
                return _this5.sqliteDB.getDataLocalDB(query2).then(function (data) {
                  return _this5.sqliteDB.getDataLocalDB(query3).then(function (data) {
                    return _this5.sqliteDB.getDataLocalDB(query4).then(function (data) {
                      console.log("Floor and Room Deleted");

                      if (_this5.dataList[0].BuildingIndex) {
                        var params = {
                          "records": {
                            "IndexId": '',
                            "SchoolId": _this5.schoolId,
                            "VisitId": _this5.vistId,
                            "BuildId": _this5.buildingId,
                            "ToilBuildId": _this5.dataList[0].BuildingIndex // "No Delete Building"

                          }
                        };
                        var selectQuery = 'SELECT * FROM DeleteBuilding WHERE schoolId ="' + _this5.schoolId + '" And visitId ="' + _this5.vistId + '" And BuildId ="' + _this5.buildingId + '" And BuildIndxId ="' + _this5.dataList[0].BuildingIndex + '"';
                        return _this5.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
                          if (data.rows.length == 0) {
                            if (sidsFloor.length > 0 && sidsFloor[0].FloorIndx) {
                              var datainsert = "INSERT INTO DeleteBuilding VALUES (?,?,?,?,?,?,?)";

                              _this5.sqliteDB.insert(datainsert, [null, _this5.schoolId, _this5.vistId, _this5.buildingId, JSON.stringify(params), _this5.dataList[0].BuildingIndex, 2]).then(function (insertres) {});
                            }
                          }
                        });
                      }
                    });
                  });
                });
              });
            });
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
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this6 = this;

            this.androidPermission();
            debugger;
            var options = {
              quality: 60,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              cameraDirection: this.camera.Direction.BACK
            };
            this.camera.getPicture(options).then(function (imageData) {
              // console.log("CameraPicture",imageData)
              var bucketName = "renewalapplicationemis";
              var expiry = 1800;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this6.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_11__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 3145728) {
                    if (i == 1) {
                      _this6.form.get('BldgFrontPhoto').setValue(base64string);

                      _this6.form.get('BldgFrontPhotoName').setValue(splitedImage[0] + '.png');
                    }

                    _this6.getLatLong();
                  } else {
                    _this6.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          }
        }, {
          key: "androidPermission",
          value: function androidPermission() {
            var _this7 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this7.androidPermissions.requestPermission(_this7.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this7.androidPermissions.requestPermission(_this7.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }, {
          key: "uploadImgDelete",
          value: function uploadImgDelete(id) {
            var _this8 = this;

            if (id == 1) {
              this.form.controls['BldgFrontPhoto'].setValue(null);
              this.form.controls['BldgFrontPhotoName'].setValue(null);
              this.form.get('BldgFrontPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
            }

            this.form.get('BldgFrontPhoto').updateValueAndValidity();
            this.form.controls['BldgLatitude'].setValue(null);
            this.form.controls['BldgLongitude'].setValue(null);
            this.form.get('BldgLatitude').updateValueAndValidity();
            this.form.get('BldgLongitude').updateValueAndValidity();
            setTimeout(function () {
              _this8.getLatLong();
            }, 1000);
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this9 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this9.locationCordinates = resp.coords;

              _this9.form.controls['BldgLatitude'].setValue(_this9.locationCordinates.latitude);

              _this9.form.controls['BldgLongitude'].setValue(_this9.locationCordinates.longitude);

              _this9.form.controls['BldgLatitude'].updateValueAndValidity();

              _this9.form.controls['BldgLongitude'].updateValueAndValidity();
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this9.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }]);
      }();

      _PrimaryBuildingQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_12__.Camera
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_9__.SqlitedatabaseService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef
        }];
      };

      _PrimaryBuildingQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-primary-building-questions',
        template: _raw_loader_primary_building_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_building_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryBuildingQuestionsPage);
      /***/
    },

    /***/
    36298:
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-building-questions/primary-building-questions.page.scss ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktYnVpbGRpbmctcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUVFO0VBRUUsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBR0EsMkJBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUFBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7OztFQUdFLGVBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1FOztFQUVFLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU9FLFNBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBUEo7O0FBVUU7RUFDRSxjQUFBO0FBUEo7O0FBV0UsT0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVEo7O0FBYUUsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0FBWEo7O0FBZUUsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsY0FBQTtBQWJKOztBQWlCRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxjQUFBO0FBZko7O0FBbUJFLFFBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxjQUFBO0FBakJKOztBQXFCRSxPQUFBOztBQU1BO0VBQ0UsV0FBQTtBQXZCSjs7QUEwQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXZCSjs7RUF5QkU7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXRCSjs7RUF3QkU7O0lBRUUsZUFBQTtJQUNBLG1CQUFBO0VBckJKO0FBQ0Y7O0FBd0JFO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQXRCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBM0JKOztBQThCRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsVUFBQTtBQTNCSjs7QUFvQ0U7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBakNKOztBQXdDRTtFQUNFLDBCQUFBO0FBckNKOztBQXdDRTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBckNOOztBQXdDRTtFQUNHLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBckNMOztBQXdDSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFyQ1I7O0FBd0NFO0VBQ0UsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBckNKOztBQXdDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBckNOOztBQXVDRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBcENKOztBQXNDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5DSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBbENKOztBQXFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBbENKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW1DRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFoQ0o7O0FBbUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxhQUFBO0FBaENKIiwiZmlsZSI6InByaW1hcnktYnVpbGRpbmctcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Cb3R0b20wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW5Ub3AwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW5Ub3A1IHtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY2QtY29udGFpbmVyIHtcclxuICAgIC8vIHdpZHRoOiA5MyU7XHJcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2QtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZVRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmVJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLWF1dGhvciB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgI2NkLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xyXG4gICAgLyogdGhpcyBpcyB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDJlbSAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1pY29uIGkge1xyXG4gICAgY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1waWN0dXJlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1waWN0dXJlIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgICBjb2xvcjogIzMwM2U0OTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkNPTE9SUyovXHJcbiAgXHJcbiAgXHJcbiAgLypQT1NJVElWRSovXHJcbiAgXHJcbiAgLnBvc2l0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc2l0aXZlIGkge1xyXG4gICAgY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQ0FMTSovXHJcbiAgXHJcbiAgLmNhbG0ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDNjZWU2O1xyXG4gIH1cclxuICBcclxuICAuY2FsbSBpIHtcclxuICAgIGNvbG9yOiAjNDNjZWU2O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkJBTEFOQ0VEKi9cclxuICBcclxuICAuYmFsYW5jZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjZjYzMzO1xyXG4gIH1cclxuICBcclxuICAuYmFsYW5jZWQgaSB7XHJcbiAgICBjb2xvcjogIzY2Y2MzMztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypFTkVSR0laRUQqL1xyXG4gIFxyXG4gIC5lbmVyZ2l6ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBiODQwO1xyXG4gIH1cclxuICBcclxuICAuZW5lcmdpemVkIGkge1xyXG4gICAgY29sb3I6ICNmMGI4NDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQVNTRVJUSVZFKi9cclxuICBcclxuICAuYXNzZXJ0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2VmNGUzYTtcclxuICB9XHJcbiAgXHJcbiAgLmFzc2VydGl2ZSBpIHtcclxuICAgIGNvbG9yOiAjZWY0ZTNhO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKlJPWUFMKi9cclxuICBcclxuICAucm95YWwge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE2ZGU5O1xyXG4gIH1cclxuICBcclxuICAucm95YWwgaSB7XHJcbiAgICBjb2xvcjogIzhhNmRlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypEQVJLKi9cclxuICBcclxuICAvLyAuZGFyayB7XHJcbiAgLy8gICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5kYXJrIGkge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmRhcnkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24tbGFiZWwge1xyXG4gICAgLy8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LXdlaWdodDogNTAwO1xyXG4gIC8vIH1cclxuICBcclxuICAudmFsaWQtY2xyIHtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgXHJcbiAgLnF1ZXMtdHh0IHtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0W3R5cGU9XCJkYXRlXCJdOm5vdCguaGFzLXZhbHVlKTpiZWZvcmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgfSBcclxuICBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206MS4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXNlbGVjdCB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmlucHV0LWNsciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCkgMXB4IHNvbGlkOztcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWlucHV0IHtcclxuICAvLyAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbm8tcGFkZGluZ3tcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tbm8tcGFkZGluZy1xdWVzdGlvbntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICBcclxuICAuc2VsZWN0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gICAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hZGQge1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlOyBcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItc2F2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG4gIH1cclxuICAuZm9vdGVyLW5vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMyMzE1O1xyXG4gICAgcGFkZGluZzogMTBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICB9XHJcbiAgLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4ZjI2O1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuICBcclxuICAuc2lkc1ZpZXd7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZGFyayB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICB9XHJcbiAgXHJcbiAgLnF1ZXNDb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y0RkE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ0NoZWNre1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4QjY3QjM7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b2dnbGV7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIC5jbG9zZWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    41875:
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-building-questions/primary-building-questions.page.html ***!
      \******************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Building {{ buildingId - 100 }} Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; align-items: center;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Building General Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Name of the building<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"text\" formControlName=\"BldgName\" (ionChange)=\"onChangeBuildingData($event.detail.value, 1)\"\r\n                    maxlength=\"20\" style=\"border-bottom: 1px solid;\" >\r\n                    </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgName'].errors?.required && (form.controls['BldgName'].dirty || form.controls['BldgName'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Approximate age of the building, in years<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgAge\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of years\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgAge'].hasError('required') && (form.controls['BldgAge'].dirty || form.controls['BldgAge'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Building Type<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgType\"\r\n                  style=\"max-width: 100% !important;\" >\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of type\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgType'].hasError('required') && (form.controls['BldgType'].dirty || form.controls['BldgType'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Outer Length of Building (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"BldgLength\" (ionChange)=\"onChangeBuildingData($event.detail.value, 25)\"\r\n                    maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgLength'].hasError('required') && (form.controls['BldgLength'].dirty || form.controls['BldgLength'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.BldgLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Outer Breadth of building (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"BldgBre\" (ionChange)=\"onChangeBuildingData($event.detail.value, 26)\"\r\n                    maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgBre'].hasError('required') && (form.controls['BldgBre'].dirty || form.controls['BldgBre'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.BldgBre.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Building condition <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgCondition\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of condition\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgCondition'].hasError('required') && (form.controls['BldgCondition'].dirty || form.controls['BldgCondition'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      \r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                7\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Source of funds for construction of building<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgFundSourceCons\"\r\n                    style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of sourceData\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgFundSourceCons'].hasError('required') && (form.controls['BldgFundSourceCons'].dirty || form.controls['BldgFundSourceCons'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldgType == 11 && (form.value.BldgCondition == 1 || form.value.BldgCondition == 4)\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there an auditorium?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumYn?true:false}}\" formControlName=\"AuditoriumYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AuditoriumYn'].hasError('required') && (form.controls['AuditoriumYn'].dirty || form.controls['AuditoriumYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8A\r\n              </div>\r\n  \r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Requirement for Stage<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AuditoriumStageReqt\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of statge\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageReqt'].hasError('required') && (form.controls['AuditoriumStageReqt'].dirty || form.controls['AuditoriumStageReqt'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n  \r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Stage (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageArea\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 22)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageArea'].hasError('required') && (form.controls['AuditoriumStageArea'].dirty || form.controls['AuditoriumStageArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Height of Stage (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"3\" (ionChange)=\"onChangeBuildingData($event.detail.value, 23)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageHeight'].hasError('required') && (form.controls['AuditoriumStageHeight'].dirty || form.controls['AuditoriumStageHeight'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeLevelling\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Levelling Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageAreaLevel\" style=\"border-bottom: 1px solid;\" maxlength=\"6\" (ionChange)=\"onChangeBuildingData($event.detail.value, 24)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageAreaLevel'].hasError('required') && (form.controls['AuditoriumStageAreaLevel'].dirty || form.controls['AuditoriumStageAreaLevel'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageAreaLevel.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Lights in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumLights\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 7)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumLights'].hasError('required') && (form.controls['AuditoriumLights'].dirty || form.controls['AuditoriumLights'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumLights.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8C\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Ceiling Fans in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumFans\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 10)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumFans'].hasError('required') && (form.controls['AuditoriumFans'].dirty || form.controls['AuditoriumFans'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumFans.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8D\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Does the auditorium have a large screen/projector facility<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumPrjtYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumPrjtYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtYn?true:false}}\"\r\n                        formControlName=\"AuditoriumPrjtYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && form.value.AuditoriumPrjtYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Is the unit functional?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumPrjtFunc\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumPrjtFunc\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtFunc?true:false}}\"\r\n                        formControlName=\"AuditoriumPrjtFunc\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                10\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Building Front Side photo<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.BldgFrontPhoto\" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.BldgFrontPhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button *ngIf=\"visitstatus != 2 && visitstatus != 4\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.BldgFrontPhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgFrontPhoto'].hasError('required') && (form.controls['BldgFrontPhoto'].dirty || form.controls['BldgFrontPhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"this.status == '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"goToBack()\">\r\n      <ion-label> Already Synced to Server\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-building-questions_primary-buildin-8948f0-es5.js.map