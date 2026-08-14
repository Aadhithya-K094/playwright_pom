(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-dashboard_center-details_center-details_module_ts"], {
    /***/
    9533:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/center-details/center-details-routing.module.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterDetailsPageRoutingModule": function CenterDetailsPageRoutingModule() {
          return (
            /* binding */
            _CenterDetailsPageRoutingModule
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


      var _center_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./center-details.page */
      591);

      var routes = [{
        path: '',
        component: _center_details_page__WEBPACK_IMPORTED_MODULE_0__.CenterDetailsPage
      }];

      var _CenterDetailsPageRoutingModule = /*#__PURE__*/_createClass(function CenterDetailsPageRoutingModule() {
        _classCallCheck(this, CenterDetailsPageRoutingModule);
      });

      _CenterDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CenterDetailsPageRoutingModule);
      /***/
    },

    /***/
    54785:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/center-details/center-details.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterDetailsPageModule": function CenterDetailsPageModule() {
          return (
            /* binding */
            _CenterDetailsPageModule
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


      var _center_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./center-details-routing.module */
      9533);
      /* harmony import */


      var _center_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./center-details.page */
      591);

      var _CenterDetailsPageModule = /*#__PURE__*/_createClass(function CenterDetailsPageModule() {
        _classCallCheck(this, CenterDetailsPageModule);
      });

      _CenterDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _center_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CenterDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_center_details_page__WEBPACK_IMPORTED_MODULE_1__.CenterDetailsPage]
      })], _CenterDetailsPageModule);
      /***/
    },

    /***/
    591:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/center-details/center-details.page.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterDetailsPage": function CenterDetailsPage() {
          return (
            /* binding */
            _CenterDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_center_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./center-details.page.html */
      27070);
      /* harmony import */


      var _center_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./center-details.page.scss */
      63183);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _CenterDetailsPage = /*#__PURE__*/function () {
        function CenterDetailsPage(router, fb, alertService, camera, androidPermissions, file, geolocation, emisService, userSesstion, el, ionStorage, route) {
          _classCallCheck(this, CenterDetailsPage);

          this.router = router;
          this.fb = fb;
          this.alertService = alertService;
          this.camera = camera;
          this.androidPermissions = androidPermissions;
          this.file = file;
          this.geolocation = geolocation;
          this.emisService = emisService;
          this.userSesstion = userSesstion;
          this.el = el;
          this.ionStorage = ionStorage;
          this.route = route;
          this.headerText = {
            header: 'Select Udisecode',
            translucent: true
          };
          this.selectedSchool = [];
          this.CenterDetailsList = [];
        }

        return _createClass(CenterDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              UdiseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              HmName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              HmMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              CenterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              NgoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              DarpanId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              MouStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              MouEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              NoOfEv: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              FreshCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              ContinueCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
              TotalCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // this.BRTEMappedSchlListEV();
            this.getEvDetailsStore();
            this.route.queryParams.subscribe(function (params) {
              _this.Type = params['Type'];
            });
          }
        }, {
          key: "BRTEMappedSchlListEV",
          value: function BRTEMappedSchlListEV() {
            var _this2 = this;

            debugger;
            this.ionStorage.getData('BRTEMappedSchlListEV').then(function (res) {
              if (res) {
                _this2.schoolList = res.filter(function (dd) {
                  return dd.teacher_id == _this2.userSesstion.emis_username();
                });

                if (_this2.schoolList.length == 0) {
                  _this2.emisService.BRTEMappedSchlListEV(_this2.userSesstion.emis_username()).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this2.schoolList = res.result;

                      _this2.ionStorage.removeKey('BRTEMappedSchlListEV').then(function (res) {
                        _this2.ionStorage.insertData_Replace('BRTEMappedSchlListEV', _this2.schoolList);
                      });
                    }
                  });
                }
              } else {
                _this2.emisService.BRTEMappedSchlListEV(_this2.userSesstion.emis_username()).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this2.schoolList = res.result;

                    _this2.ionStorage.removeKey('BRTEMappedSchlListEV').then(function (res) {
                      _this2.ionStorage.insertData_Replace('BRTEMappedSchlListEV', _this2.schoolList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "getEvDetailsStore",
          value: function getEvDetailsStore() {
            var _this3 = this;

            this.ionStorage.getData('CenterDetailsList').then(function (res) {
              if (res) {
                _this3.CenterDetailsList = res.filter(function (dd) {
                  return dd.Type == _this3.Type;
                });

                if (_this3.CenterDetailsList.length == 0) {
                  _this3.emisService.StcCenterDetailsGet(_this3.userSesstion.emis_username(), _this3.Type).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this3.CenterDetailsList = res.result;

                      _this3.ionStorage.removeKey('CenterDetailsList').then(function (res) {
                        _this3.ionStorage.insertData_Replace('CenterDetailsList', _this3.CenterDetailsList);
                      });
                    }
                  });
                }
              } else {
                _this3.emisService.StcCenterDetailsGet(_this3.userSesstion.emis_username(), _this3.Type).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this3.CenterDetailsList = res.result;

                    _this3.ionStorage.removeKey('CenterDetailsList').then(function (res) {
                      _this3.ionStorage.insertData_Replace('CenterDetailsList', _this3.CenterDetailsList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "selectSchool",
          value: function selectSchool(event) {
            debugger;
            this.selectedSchool = this.schoolList.filter(function (dd) {
              return dd.school_udise == event;
            });

            if (this.selectedSchool.length > 0) {
              console.log(this.selectedSchool);
            }
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this4 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this4.locationCordinates = resp.coords;
              _this4.locationCordinates.latitude;
              _this4.locationCordinates.longitude;
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this4.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this5 = this;

            var _a, _b;

            debugger;

            if (this.form.valid) {
              this.submitted = false;
              var data = {
                "records": {
                  IndxId: this.form.value.IndxId,
                  UserId: this.userSesstion.emis_username(),
                  UdiseCode: this.form.value.UdiseCode,
                  HmName: this.form.value.HmName,
                  HmMobileNo: this.form.value.HmMobileNo,
                  CenterName: this.form.value.CenterName,
                  NgoName: this.form.value.NgoName,
                  DarpanId: this.form.value.DarpanId,
                  MouStartDate: this.form.value.MouStartDate,
                  MouEndDate: this.form.value.MouEndDate,
                  NoOfEv: this.form.value.NoOfEv,
                  FreshCount: this.form.value.FreshCount,
                  ContinueCount: this.form.value.ContinueCount,
                  TotalCount: this.form.value.TotalCount,
                  Type: this.Type,
                  Lat: (_a = this.locationCordinates) === null || _a === void 0 ? void 0 : _a.latitude,
                  Long: (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.longitude
                }
              };
              this.emisService.StcCenterDetailsSave(data).subscribe(function (res) {
                if (res.dataStatus) {
                  _this5.addProfile = false;

                  _this5.initialValidator();

                  _this5.alertService.success(res.message);

                  _this5.emisService.StcCenterDetailsGet(_this5.userSesstion.emis_username(), _this5.Type).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this5.CenterDetailsList = res.result;

                      _this5.ionStorage.removeKey('CenterDetailsList').then(function (res) {
                        _this5.ionStorage.insertData_Replace('CenterDetailsList', _this5.CenterDetailsList);
                      });
                    }
                  });

                  if (_this5.form.value.IndxId) {
                    _this5.emisService.MigrateStudList(_this5.userSesstion.emis_username()).subscribe(function (res) {
                      if (res.dataStatus) {
                        _this5.MigrateStudList = res.result;

                        _this5.ionStorage.removeKey('MigrateStudList').then(function (res) {
                          _this5.ionStorage.insertData_Replace('MigrateStudList', _this5.MigrateStudList);
                        });
                      } else {
                        _this5.ionStorage.removeKey('MigrateStudList').then(function (res) {});
                      }
                    });
                  }
                } else {
                  _this5.alertService.error(res.message);
                }
              });
            } else {
              this.submitted = true;
              this.focusValidator();
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(data) {
            var _a, _b;

            console.log("data", data);
            this.addProfile = true; // this.selectedSchool = this.schoolList.filter(dd => dd.school_udise == +data.udiseCode);

            this.form.patchValue({
              IndxId: data.IndxId,
              UdiseCode: data.UdiseCode,
              HmName: data.HmName,
              HmMobileNo: data.HmMobileNo,
              CenterName: data.CenterName,
              NgoName: data.NgoName,
              DarpanId: data.DarpanId,
              MouStartDate: data.MouStartDate,
              MouEndDate: data.MouEndDate,
              NoOfEv: data.NoOfEv,
              FreshCount: data.FreshCount,
              ContinueCount: data.ContinueCount,
              TotalCount: data.TotalCount,
              Type: data.Type,
              Lat: (_a = this.locationCordinates) === null || _a === void 0 ? void 0 : _a.latitude,
              Long: (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.longitude
            });

            if (this.Type == 1) {
              this.form.controls['UdiseCode'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['HmName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['HmMobileNo'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['UdiseCode'].updateValueAndValidity();
              this.form.controls['HmName'].updateValueAndValidity();
              this.form.controls['HmMobileNo'].updateValueAndValidity();
            }

            if (this.Type == 2) {
              this.form.controls['CenterName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['NgoName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['DarpanId'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['MouStartDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['MouEndDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['NoOfEv'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['FreshCount'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['ContinueCount'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['CenterName'].updateValueAndValidity();
              this.form.controls['NgoName'].updateValueAndValidity();
              this.form.controls['DarpanId'].updateValueAndValidity();
              this.form.controls['MouStartDate'].updateValueAndValidity();
              this.form.controls['MouEndDate'].updateValueAndValidity();
              this.form.controls['NoOfEv'].updateValueAndValidity();
              this.form.controls['FreshCount'].updateValueAndValidity();
              this.form.controls['ContinueCount'].updateValueAndValidity();
            }
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
          key: "navigateBack",
          value: function navigateBack() {
            if (this.addProfile) {
              this.addProfile = false;
              this.submitted = false;
              this.initialValidator();
            } else {
              this.router.navigate(['/tabs/stc-activity'], {
                queryParams: {
                  Type: this.Type
                }
              });
            }
          }
        }, {
          key: "addCenterProfile",
          value: function addCenterProfile() {
            this.initialValidator();
            this.addProfile = true;

            if (this.Type == 1) {
              this.form.controls['UdiseCode'].setValue(this.userSesstion.udise_code());
              this.form.controls['HmName'].setValue(this.userSesstion.teacher_name());
              this.form.controls['HmMobileNo'].setValue("");
              this.form.controls['UdiseCode'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['HmName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['HmMobileNo'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['UdiseCode'].updateValueAndValidity();
              this.form.controls['HmName'].updateValueAndValidity();
              this.form.controls['HmMobileNo'].updateValueAndValidity();
            }

            if (this.Type == 2) {
              this.form.controls['CenterName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['NgoName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['DarpanId'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['MouStartDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['MouEndDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['NoOfEv'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['FreshCount'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['ContinueCount'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['TotalCount'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
              this.form.controls['CenterName'].updateValueAndValidity();
              this.form.controls['NgoName'].updateValueAndValidity();
              this.form.controls['DarpanId'].updateValueAndValidity();
              this.form.controls['MouStartDate'].updateValueAndValidity();
              this.form.controls['MouEndDate'].updateValueAndValidity();
              this.form.controls['NoOfEv'].updateValueAndValidity();
              this.form.controls['FreshCount'].updateValueAndValidity();
              this.form.controls['ContinueCount'].updateValueAndValidity();
              this.form.controls['TotalCount'].updateValueAndValidity();
            }
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.submitted = false;
            this.initialValidator();
            this.CenterDetailsList = [];
          }
        }, {
          key: "onEventNum",
          value: function onEventNum(ev) {
            var fresh = this.form.value.FreshCount ? parseInt(this.form.value.FreshCount) : 0;
            var continues = this.form.value.ContinueCount ? parseInt(this.form.value.ContinueCount) : 0;
            console.log(fresh + continues);
            this.form.controls['TotalCount'].setValue(fresh + continues);
            this.form.controls['TotalCount'].updateValueAndValidity();
          }
        }, {
          key: "onEventDate",
          value: function onEventDate(id) {
            this.form.controls['MouEndDate'].setValue("");
            this.form.controls['MouEndDate'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['MouEndDate'].updateValueAndValidity();
          }
        }]);
      }();

      _CenterDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_9__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }];
      };

      _CenterDetailsPage.propDecorators = {
        jpgimage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: ['jpgimage']
        }]
      };
      _CenterDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-center-details',
        template: _raw_loader_center_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_center_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CenterDetailsPage);
      /***/
    },

    /***/
    63183:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/center-details/center-details.page.scss ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQURJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFHUjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoiY2VudGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbntcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzLWhlYWR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ucXVlc0lucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5jbG9zZWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    27070:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-dashboard/center-details/center-details.page.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'Center Name' : 'Special Training Centre details '}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-row style=\"margin: 10px auto;\">\r\n    <ion-col size=\"12\" *ngFor=\"let item of CenterDetailsList\">\r\n      <ion-row class=\"headerCss\">\r\n        <ion-col size=\"10\" style=\"padding: 10px;\">\r\n          <div class=\"nameCss\">{{item.CenterCode}}</div>\r\n          <div class=\"numberCss\">{{item.HmName ? item.HmName : item.CenterName}}</div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"CenterDetailsList.length == 0\" style=\"text-align: center;\">\r\n      <p >No data found</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-row (click)=\"addCenterProfile()\" class=\"syncServer\">\r\n    <ion-col size=\"2\" class=\"add iconCss\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\" class=\"add\">\r\n      <ion-label style=\"font-size: 18px;\"> Add Center Profile </ion-label>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-fab *ngIf=\"Type == 2\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addCenterProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n      <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-col >\r\n      <ion-label class=\"bold\"> Add Center</ion-label>\r\n    </ion-col>\r\n  </ion-fab>\r\n\r\n  <ion-fab *ngIf=\"Type == 1 && CenterDetailsList.length == 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\" addCenterProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n      <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-col >\r\n      <ion-label class=\"bold\"> Add Center</ion-label>\r\n    </ion-col>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n    <div *ngIf=\"Type == 1\" style=\"width: 100%;\">\r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> Udise Code </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"text\" formControlName=\"UdiseCode\" disabled=\"true\"\r\n              placeholder=\"Please enter udeisecode\" class=\"quesInput\" \r\n              ></ion-input>\r\n              <!-- <ion-select disabled=\"{{form.value.IndxId ? true : false}}\" [interfaceOptions]=\"headerText\"  class=\"quesInput font-12\" (ionChange)=\"selectSchool($event.detail.value)\" placeholder=\"Select udisecode\" formControlName=\"UdiseCode\" style=\"padding: 15px; height: 59px;\">\r\n                <ion-select-option *ngFor=\"let option of schoolList\" [value]=\"option.school_udise\">{{option.school_name}} - {{option.school_udise}}</ion-select-option>\r\n              </ion-select> -->\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.UdiseCode.errors && (submitted || form.controls.UdiseCode.dirty || form.controls.UdiseCode.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.UdiseCode.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n  \r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> HM Name </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"text\" formControlName=\"HmName\" disabled=\"true\"\r\n              placeholder=\"Please select district\" class=\"quesInput\" \r\n              ></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.HmName.errors && (submitted || form.controls.HmName.dirty || form.controls.HmName.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.HmName.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n  \r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> HM Mobile No </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"tel\" minlength=\"10\" maxlength=\"10\" pattern=\"^[6-9]{1}[0-9]{9}\"\r\n              formControlName=\"HmMobileNo\" placeholder=\"Please enter\" class=\"quesInput\" \r\n              ></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.HmMobileNo.errors && (submitted || form.controls.HmMobileNo.dirty || form.controls.HmMobileNo.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.HmMobileNo.errors?.required\">Field is Required</span>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"form.controls.HmMobileNo.hasError('maxlength') && form.controls.HmMobileNo.touched\">\r\n              Mobile Number must be at least 10 digits.\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"form.controls.HmMobileNo.errors?.pattern && form.controls.HmMobileNo.touched\">\r\n              Mobile number must start with 6.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"Type == 2\" style=\"width: 100%;\">\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> Center Name </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"text\" formControlName=\"CenterName\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterName.errors && (submitted || form.controls.CenterName.dirty || form.controls.CenterName.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.CenterName.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> Name of NGO </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"text\" formControlName=\"NgoName\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.NgoName.errors && (submitted || form.controls.NgoName.dirty || form.controls.NgoName.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.NgoName.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> Darpan ID</ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"text\" formControlName=\"DarpanId\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.DarpanId.errors && (submitted || form.controls.DarpanId.dirty || form.controls.DarpanId.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.DarpanId.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> MoU Start Date </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"date\" (ionChange)=\"onEventDate(1)\" formControlName=\"MouStartDate\" placeholder=\"Please select\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.MouStartDate.errors && (submitted || form.controls.MouStartDate.dirty || form.controls.MouStartDate.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.MouStartDate.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> MoU End Date </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"date\" min=\"{{form.value.MouStartDate}}\" formControlName=\"MouEndDate\" placeholder=\"Please select\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.MouEndDate.errors && (submitted || form.controls.MouEndDate.dirty || form.controls.MouEndDate.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.MouEndDate.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> No of EV's</ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"tel\" formControlName=\"NoOfEv\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.NoOfEv.errors && (submitted || form.controls.NoOfEv.dirty || form.controls.NoOfEv.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.NoOfEv.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> {{Type == 2 ? 'New Student': 'Fresh Count'}} </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"tel\" (ionChange)=\"onEventNum($event)\" formControlName=\"FreshCount\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.FreshCount.errors && (submitted || form.controls.FreshCount.dirty || form.controls.FreshCount.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.FreshCount.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" >\r\n        <ion-row class=\"ques-head\"> Continue {{Type == 2 ? 'Student': 'Count'}} </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"tel\" (ionChange)=\"onEventNum($event)\" formControlName=\"ContinueCount\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.ContinueCount.errors && (submitted || form.controls.ContinueCount.dirty || form.controls.ContinueCount.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.ContinueCount.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" *ngIf=\"form.value.FreshCount && form.value.ContinueCount\">\r\n        <ion-row class=\"ques-head\"> Total {{Type == 2 ? 'Student': 'Count'}} </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-input type=\"tel\" disabled=\"true\" formControlName=\"TotalCount\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            </div>\r\n            <!-- <div class=\"valid-error\" *ngIf=\"submitted && form.controls.ContinueCount.errors && (submitted || form.controls.ContinueCount.dirty || form.controls.ContinueCount.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.ContinueCount.errors?.required\">Field is Required</span>\r\n            </div> -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer\" (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stc-activity_stc-dashboard_center-details_center-details_module_ts-es5.js.map