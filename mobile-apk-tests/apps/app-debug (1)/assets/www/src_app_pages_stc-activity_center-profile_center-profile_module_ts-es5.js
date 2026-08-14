(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_center-profile_center-profile_module_ts"], {
    /***/
    66609:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/center-profile/center-profile-routing.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterProfilePageRoutingModule": function CenterProfilePageRoutingModule() {
          return (
            /* binding */
            _CenterProfilePageRoutingModule
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


      var _center_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./center-profile.page */
      23393);

      var routes = [{
        path: '',
        component: _center_profile_page__WEBPACK_IMPORTED_MODULE_0__.CenterProfilePage
      }];

      var _CenterProfilePageRoutingModule = /*#__PURE__*/_createClass(function CenterProfilePageRoutingModule() {
        _classCallCheck(this, CenterProfilePageRoutingModule);
      });

      _CenterProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CenterProfilePageRoutingModule);
      /***/
    },

    /***/
    77662:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/stc-activity/center-profile/center-profile.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterProfilePageModule": function CenterProfilePageModule() {
          return (
            /* binding */
            _CenterProfilePageModule
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


      var _center_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./center-profile-routing.module */
      66609);
      /* harmony import */


      var _center_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./center-profile.page */
      23393);

      var _CenterProfilePageModule = /*#__PURE__*/_createClass(function CenterProfilePageModule() {
        _classCallCheck(this, CenterProfilePageModule);
      });

      _CenterProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _center_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CenterProfilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_center_profile_page__WEBPACK_IMPORTED_MODULE_1__.CenterProfilePage]
      })], _CenterProfilePageModule);
      /***/
    },

    /***/
    23393:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/stc-activity/center-profile/center-profile.page.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CenterProfilePage": function CenterProfilePage() {
          return (
            /* binding */
            _CenterProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_center_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./center-profile.page.html */
      76875);
      /* harmony import */


      var _center_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./center-profile.page.scss */
      74656);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var blob_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _CenterProfilePage = /*#__PURE__*/function () {
        function CenterProfilePage(router, fb, alertService, camera, androidPermissions, file, geolocation, emisService, userSesstion, el, ionStorage, route) {
          _classCallCheck(this, CenterProfilePage);

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
          this.arrayList = [{
            name: "STC01",
            mobile: "8946066138"
          }, {
            name: "STC02",
            mobile: "8946066138"
          }, {
            name: "STC03",
            mobile: "8946066138"
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
          }, {
            "value": "12",
            "label": "Library"
          }, {
            "value": "13",
            "label": "Security Room"
          }];
          this.centerType = [{
            "value": "1",
            "label": "NRSTC"
          }, {
            "value": "2",
            "label": "RSTC"
          }, {
            "value": "3",
            "label": "TMK"
          }];
          this.centerPlace = [{
            "value": "1",
            "label": "School Campus"
          }, {
            "value": "2",
            "label": "Outside School Campus"
          }];
          this.centerConduct = [{
            "value": "1",
            "label": "Rented"
          }, {
            "value": "2",
            "label": "Owned"
          }];
          this.centerStatus = [{
            "value": "1",
            "label": "Active"
          }, {
            "value": "2",
            "label": "Inactive"
          }];
          this.headerText = {
            header: 'Select Udisecode',
            translucent: true
          };
          this.selectedSchool = [];
          this.CenterDetailsList = [];
        }

        return _createClass(CenterProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              CenterUdide: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterBlock: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              // CenterStcId: new FormControl('', Validators.required),
              // CenterStcName: new FormControl('', Validators.required),
              CenterType: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              CenterOwned: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              BuildType: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterRent: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterPhoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              CenterPhotoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              // CenterCapturePhoto: new FormControl('', Validators.required),
              // CenterCapturePhotoName: new FormControl('', Validators.required),
              CenterStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.BRTEMappedSchlListEV();
            this.getEvDetailsStore();
            this.route.queryParams.subscribe(function (params) {
              _this.Type = params['Type'];
            });
          }
        }, {
          key: "BRTEMappedSchlListEV",
          value: function BRTEMappedSchlListEV() {
            var _this2 = this;

            this.ionStorage.getData('BRTEMappedSchlListEV').then(function (res) {
              if (res) {
                _this2.schoolList = res;
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
                _this3.CenterDetailsList = res;
              } else {
                _this3.emisService.EVDetailsStoreGet(_this3.userSesstion.emis_username(), 2).subscribe(function (res) {
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
              this.form.controls['CenterDistrict'].setValue(this.selectedSchool[0].district_name);
              this.form.controls['CenterBlock'].setValue(this.selectedSchool[0].block_name);
              this.form.controls['CenterDistrict'].updateValueAndValidity();
              this.form.controls['CenterBlock'].updateValueAndValidity();
              this.form.controls['CenterType'].setValue("");
              this.form.controls['CenterPlace'].setValue("");
              this.form.controls['CenterAddress'].setValue("");
              this.form.controls['CenterOwned'].setValue("");
              this.form.controls['CenterContact'].setValue("");
              this.form.controls['BuildType'].setValue("");
              this.form.controls['CenterRent'].setValue("");
              this.form.controls['CenterPhoto'].setValue("");
              this.form.controls['CenterPhotoName'].setValue("");
              this.form.controls['CenterStatus'].setValue("");
              this.form.controls['CenterType'].updateValueAndValidity();
              this.form.controls['CenterPlace'].updateValueAndValidity();
              this.form.controls['CenterAddress'].updateValueAndValidity();
              this.form.controls['CenterOwned'].updateValueAndValidity();
              this.form.controls['CenterContact'].updateValueAndValidity();
              this.form.controls['BuildType'].updateValueAndValidity();
              this.form.controls['CenterRent'].updateValueAndValidity();
              this.form.controls['CenterPhoto'].updateValueAndValidity();
              this.form.controls['CenterPhotoName'].updateValueAndValidity();
              this.form.controls['CenterStatus'].updateValueAndValidity();
            }
          }
        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event, id) {
            var _this4 = this;

            debugger;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg" || event.target.files[0].type == "image/png") {
                if (event.target.files[0].size <= 5242880) {
                  var fileName = event.target.files[0].name;
                  var splittedName = fileName.split(".");
                  var fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);

                  fileReader.onload = function (event) {
                    // //debugger;
                    _this4.imageActive = true;

                    if (id == 1) {
                      _this4.form.controls['CenterPhotoName'].setValue(fileName);

                      _this4.form.controls['CenterPhoto'].setValue(fileReader.result);

                      _this4.getLatLong();
                    }

                    if (id == 2) {
                      _this4.form.controls['CenterCapturePhotoName'].setValue(fileName);

                      _this4.form.controls['CenterCapturePhoto'].setValue(fileReader.result);
                    }

                    _this4.alertService.success('File Uploaded Successfully'); // this.alertPopup("File Uploaded Successfully")

                  };
                } else {
                  this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
                  this.jpgimage.nativeElement.value = "";
                  this.form.controls['CenterPhotoName'].setValue("");
                  this.form.controls['CenterPhoto'].setValue("");
                }
              } else {
                this.alertService.error('Please upload only JPG / JPEG / PNG image format');
                this.jpgimage.nativeElement.value = "";
                this.form.controls['CenterPhotoName'].setValue("");
                this.form.controls['CenterPhoto'].setValue("");
              }
            }
          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this5 = this;

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

              _this5.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_6__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 3145728) {
                    if (i == 2) {
                      _this5.form.controls['CenterCapturePhoto'].setValue(base64string);

                      _this5.form.controls['CenterCapturePhotoName'].setValue(splitedImage[0] + '.png');

                      _this5.getLatLong();
                    }
                  } else {
                    _this5.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
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
            var _this6 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this7 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this7.locationCordinates = resp.coords;
              _this7.locationCordinates.latitude;
              _this7.locationCordinates.longitude;
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this7.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }, {
          key: "deleteImg",
          value: function deleteImg(id) {
            this.imageActive = true;

            if (id == 1) {
              this.form.controls['CenterPhotoName'].setValue(null);
              this.form.controls['CenterPhoto'].setValue(null);
              this.form.controls['CenterPhotoName'].updateValueAndValidity();
              this.form.controls['CenterPhoto'].updateValueAndValidity();
            }

            if (id == 2) {
              this.form.controls['CenterCapturePhotoName'].setValue(null);
              this.form.controls['CenterCapturePhoto'].setValue(null);
              this.form.controls['CenterCapturePhotoName'].updateValueAndValidity();
              this.form.controls['CenterCapturePhoto'].updateValueAndValidity();
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this8 = this;

            var _a, _b;

            debugger;

            if (this.form.valid) {
              this.submitted = false;
              var data = {
                "records": {
                  "id": this.form.value.IndxId,
                  "user_id": this.userSesstion.emis_username(),
                  "school_id": this.selectedSchool[0].SchlId,
                  "udise_code": this.form.value.CenterUdide,
                  "name": this.selectedSchool[0].school_name,
                  "DistId": this.selectedSchool[0].district_id,
                  "BlkId": this.selectedSchool[0].block_id,
                  "type": this.form.value.CenterType,
                  "center_placed": this.form.value.CenterPlace,
                  "address": this.form.value.CenterAddress,
                  "owner": this.form.value.CenterOwned,
                  "contact": this.form.value.CenterContact,
                  "building_type": this.form.value.BuildType,
                  "rent_owned": this.form.value.CenterRent,
                  "photo": this.form.value.CenterPhotoName,
                  "status": this.form.value.CenterStatus,
                  "lat": (_a = this.locationCordinates) === null || _a === void 0 ? void 0 : _a.latitude,
                  "long": (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.longitude
                }
              };
              this.emisService.EVCenterDetailsSave(data).subscribe(function (res) {
                if (res.dataStatus) {
                  if (_this8.imageActive) {
                    _this8.S3ImgaeSave();
                  } else {
                    _this8.imageActive = false;
                    _this8.addProfile = false;

                    _this8.initialValidator();
                  }

                  _this8.alertService.success(res.message);

                  _this8.emisService.EVDetailsStoreGet(_this8.userSesstion.emis_username(), 2).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this8.CenterDetailsList = res.result;

                      _this8.ionStorage.removeKey('CenterDetailsList').then(function (res) {
                        _this8.ionStorage.insertData_Replace('CenterDetailsList', _this8.CenterDetailsList);
                      });
                    }
                  });

                  if (_this8.form.value.IndxId) {
                    _this8.emisService.MigrateStudList(_this8.userSesstion.emis_username()).subscribe(function (res) {
                      if (res.dataStatus) {
                        _this8.MigrateStudList = res.result;

                        _this8.ionStorage.removeKey('MigrateStudList').then(function (res) {
                          _this8.ionStorage.insertData_Replace('MigrateStudList', _this8.MigrateStudList);
                        });
                      } else {
                        _this8.ionStorage.removeKey('MigrateStudList').then(function (res) {});
                      }
                    });
                  }
                } else {
                  _this8.alertService.error(res.message);
                }
              });
            } else {
              this.submitted = true;
              this.focusValidator();
            }
          }
        }, {
          key: "S3ImgaeSave",
          value: function S3ImgaeSave() {
            var _this9 = this;

            var base = this.form.value.CenterPhoto.split('base64,');
            var imgObj = {
              "Photo": base[1],
              "PhotoName": this.form.value.CenterPhotoName
            };
            var s3ImgObj = {
              "records": imgObj
            };
            this.emisService.S3ImageSave(s3ImgObj).subscribe(function (res) {
              if (res.dataStatus) {
                _this9.imageActive = false;
                _this9.addProfile = false;

                _this9.initialValidator();
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(data) {
            var _a, _b;

            console.log("data", data);
            this.addProfile = true;
            this.selectedSchool = this.schoolList.filter(function (dd) {
              return dd.school_udise == +data.udiseCode;
            });
            this.form.patchValue({
              CenterUdide: data.udiseCode,
              IndxId: data.IndxId,
              CenterDistrict: (_a = this.selectedSchool[0]) === null || _a === void 0 ? void 0 : _a.district_name,
              CenterBlock: (_b = this.selectedSchool[0]) === null || _b === void 0 ? void 0 : _b.block_name,
              CenterStcId: data.CenterId,
              CenterStcName: data.SchlName,
              CenterType: data.Type,
              CenterPlace: data.center_placed,
              CenterOwned: data.Owner,
              CenterContact: data.Contact,
              BuildType: data.BuildingType,
              CenterRent: data.RentOwned,
              CenterPhoto: 'https://deka0egrc3bqo.cloudfront.net/' + data.photo,
              CenterPhotoName: data.photo,
              CenterStatus: data.Status
            });
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
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.submitted = false;
            this.initialValidator();
            this.CenterDetailsList = [];
          }
        }]);
      }();

      _CenterProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_8__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__.UserSessionService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }];
      };

      _CenterProfilePage.propDecorators = {
        jpgimage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['jpgimage']
        }]
      };
      _CenterProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-center-profile',
        template: _raw_loader_center_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_center_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CenterProfilePage);
      /***/
    },

    /***/
    74656:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/stc-activity/center-profile/center-profile.page.scss ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQURJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFHUjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoiY2VudGVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbntcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzLWhlYWR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ucXVlc0lucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5jbG9zZWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    76875:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/center-profile/center-profile.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'Center Profile' : 'Staff Details'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-row style=\"margin: 10px auto;\">\r\n    <ion-col size=\"12\" *ngFor=\"let item of CenterDetailsList\">\r\n      <ion-row class=\"headerCss\">\r\n        <ion-col size=\"10\" style=\"padding: 10px;\">\r\n          <div class=\"nameCss\">{{item.CenterCode}}</div>\r\n          <div class=\"numberCss\">{{item.udiseCode}}</div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"CenterDetailsList.length == 0\" style=\"text-align: center;\">\r\n      <p >No data found</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-row (click)=\"addCenterProfile()\" class=\"syncServer\">\r\n    <ion-col size=\"2\" class=\"add iconCss\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\" class=\"add\">\r\n      <ion-label style=\"font-size: 18px;\"> Add Center Profile </ion-label>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addCenterProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n      <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-col >\r\n      <ion-label class=\"bold\"> Center Profile</ion-label>\r\n    </ion-col>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Udise Code </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select disabled=\"{{form.value.IndxId ? true : false}}\" [interfaceOptions]=\"headerText\"  class=\"quesInput font-12\" (ionChange)=\"selectSchool($event.detail.value)\" placeholder=\"Select udisecode\" formControlName=\"CenterUdide\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of schoolList\" [value]=\"option.school_udise\">{{option.school_name}} - {{option.school_udise}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterUdide.errors && (submitted || form.controls.CenterUdide.dirty || form.controls.CenterUdide.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterUdide.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> District </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"CenterDistrict\" placeholder=\"Please select district\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterDistrict.errors && (submitted || form.controls.CenterDistrict.dirty || form.controls.CenterDistrict.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterDistrict.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Block </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"CenterBlock\" placeholder=\"Please select block\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterBlock.errors && (submitted || form.controls.CenterBlock.dirty || form.controls.CenterBlock.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterBlock.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC Center ID </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"CenterStcId\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterStcId.errors && (submitted || form.controls.CenterStcId.dirty || form.controls.CenterStcId.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterStcId.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"CenterStcName\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterStcName.errors && (submitted || form.controls.CenterStcName.dirty || form.controls.CenterStcName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterStcName.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Center Type </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select select center\" formControlName=\"CenterType\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of centerType\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterType.errors && (submitted || form.controls.CenterType.dirty || form.controls.CenterType.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterType.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Center Placed In </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select center placed\" formControlName=\"CenterPlace\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of centerPlace\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterPlace.errors && (submitted || form.controls.CenterPlace.dirty || form.controls.CenterPlace.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterPlace.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.CenterPlace == 2\" >\r\n      <ion-row class=\"ques-head\"> Center Address </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"CenterAddress\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterAddress.errors && (submitted || form.controls.CenterAddress.dirty || form.controls.CenterAddress.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterAddress.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Center Owned by </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"CenterOwned\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterOwned.errors && (submitted || form.controls.CenterOwned.dirty || form.controls.CenterOwned.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterOwned.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Owner Contact Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"tel\" pattern=\"^[6-9]{1}[0-9]{9}\" minlength=\"10\" maxlength=\"10\" formControlName=\"CenterContact\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterContact.errors && (submitted || form.controls.CenterContact.dirty || form.controls.CenterContact.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterContact.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"(form.controls['CenterContact'].hasError('minlength') || form.controls['CenterContact'].hasError('maxlength')) && form.controls.CenterContact.touched\">\r\n            Phone number must be at least 10 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.controls['CenterContact'].errors?.pattern && form.controls.CenterContact.touched\">\r\n            Mobile number must start with 6.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Type of Building or Room </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select building or room\" formControlName=\"BuildType\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of type\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.BuildType.errors && (submitted || form.controls.BuildType.dirty || form.controls.BuildType.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.BuildType.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Center conducted in Rented or Owned place </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select place\" formControlName=\"CenterRent\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of centerConduct\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterRent.errors && (submitted || form.controls.CenterRent.dirty || form.controls.CenterRent.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterRent.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Upload Photo </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input *ngIf=\"!form.value.CenterPhoto\" type=\"file\" (change)=\"onSelectFile1($event, 1)\" formControlName=\"CenterPhoto\" placeholder=\"Choose File\" class=\"quesInput\"></ion-input>\r\n            <ion-item *ngIf=\"form.value.CenterPhoto\" mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n              <ion-button (click)=\"deleteImg(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n              </ion-button>\r\n              <img src=\"{{form.value.CenterPhoto}}\" class=\"uploadImage\">\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterPhoto.errors && (submitted || form.controls.CenterPhoto.dirty || form.controls.CenterPhoto.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterPhoto.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Capture Photo </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <div class=\"quesInput\" *ngIf=\"!form.value.CenterCapturePhoto\" style=\"padding: 15px 10px !important;\" (click)=\"openCamera(2)\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                  Click to Capture Image\r\n                </label>\r\n              </ion-col>\r\n            </div>\r\n            <ion-item *ngIf=\"form.value.CenterCapturePhoto\" mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n              <ion-button (click)=\"deleteImg(2)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n              </ion-button>\r\n              <img src=\"{{form.value.CenterCapturePhoto}}\" class=\"uploadImage\">\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterCapturePhoto.errors && (submitted || form.controls.CenterCapturePhoto.dirty || form.controls.CenterCapturePhoto.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterCapturePhoto.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Center Status </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select center status\" formControlName=\"CenterStatus\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of centerStatus\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n            </ion-select>\r\n            <!-- <ion-input type=\"text\" formControlName=\"CenterStatus\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input> -->\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterStatus.errors && (submitted || form.controls.CenterStatus.dirty || form.controls.CenterStatus.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.CenterStatus.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer\" (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stc-activity_center-profile_center-profile_module_ts-es5.js.map