(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts"], {
    /***/
    12748:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidsDemolishBuildPage": function SidsDemolishBuildPage() {
          return (
            /* binding */
            _SidsDemolishBuildPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_sids_demolish_build_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sids-demolish-build.page.html */
      64501);
      /* harmony import */


      var _sids_demolish_build_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sids-demolish-build.page.scss */
      83344);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102); // import { UploadService } from './services/emis/upload.service';


      var _SidsDemolishBuildPage = /*#__PURE__*/function () {
        function SidsDemolishBuildPage(fb, userService, route, NetworkService, router, alert, userSessionService, sqliteDB, modalCtrl, file, geolocation, loadService, sidsService, camera, networkService, alertController, platform, androidPermissions, uploadService) {
          _classCallCheck(this, SidsDemolishBuildPage);

          this.fb = fb;
          this.userService = userService;
          this.route = route;
          this.NetworkService = NetworkService;
          this.router = router;
          this.alert = alert;
          this.userSessionService = userSessionService;
          this.sqliteDB = sqliteDB;
          this.modalCtrl = modalCtrl;
          this.file = file;
          this.geolocation = geolocation;
          this.loadService = loadService;
          this.sidsService = sidsService;
          this.camera = camera;
          this.networkService = networkService;
          this.alertController = alertController;
          this.platform = platform;
          this.androidPermissions = androidPermissions;
          this.uploadService = uploadService;
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
            "label": "Compound Wall"
          } // {
          //   "value": "12",
          //   "label": "Library"
          // },
          // {
          //   "value": "13",
          //   "label": "Security Room"
          // }
          ];
          this.Severity = [{
            value: 1,
            label: 'Low'
          }, {
            value: 2,
            label: 'medium'
          }, {
            value: 3,
            label: 'high'
          }, {
            value: 4,
            label: 'critical'
          }];
        }

        return _createClass(SidsDemolishBuildPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeValidators(); // this.networkStatus();
          }
        }, {
          key: "initializeValidators",
          value: function initializeValidators() {
            this.form = this.fb.group({
              ques1: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              ques2: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques3: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques4: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques5: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques6: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques7: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques8: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              ques9: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null) // For description

            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.schoolId = this.userSessionService.school_key_id();
            this.cattyId = this.userSessionService.catty_id();
            this.emis_user_id = this.userSessionService.emis_username();
          }
        }, {
          key: "onRadioEvent",
          value: function onRadioEvent(event, id) {
            if (id === 1) {
              if (this.form.value.ques1 === true) {
                // Set validators for main fields when "Yes" is selected
                this.setMainFieldValidators(true); // Update conditional validators based on current severity

                this.updateConditionalValidators(this.form.value.ques6);
              } else {
                // Clear all validators when "No" is selected
                this.clearAllValidators();
                this.imageKey = "";
              }
            }
          }
        }, {
          key: "clearAllValidators",
          value: function clearAllValidators() {
            var _this = this;

            Object.keys(this.form.controls).forEach(function (key) {
              var control = _this.form.get(key);

              control.clearValidators();
              control.updateValueAndValidity();
              control.setValue('');
            });
          }
        }, {
          key: "setMainFieldValidators",
          value: function setMainFieldValidators(required) {
            var validators = required ? [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required] : [];
            this.form.get('ques2').setValidators(validators);
            this.form.get('ques3').setValidators(validators);
            this.form.get('ques4').setValidators(validators);
            this.form.get('ques5').setValidators(validators);
            this.form.get('ques6').setValidators(validators);
            this.form.get('ques2').updateValueAndValidity();
            this.form.get('ques3').updateValueAndValidity();
            this.form.get('ques4').updateValueAndValidity();
            this.form.get('ques5').updateValueAndValidity();
            this.form.get('ques6').updateValueAndValidity();
          } // updateConditionalValidators(severity: number) {
          //   const isHighSeverity = (severity === 3 || severity === 4);
          //   const fileControl = this.form.get('ques7');
          //   const fileNameControl = this.form.get('ques8');
          //   const descriptionControl = this.form.get('ques9');
          //   if (isHighSeverity) {
          //     // For high/critical severity: file and description are required
          //     fileControl.setValidators([
          //       Validators.required,
          //       this.fileSizeValidator.bind(this),
          //       this.fileTypeValidator.bind(this)
          //     ]);
          //     descriptionControl.setValidators([
          //       Validators.required,
          //       Validators.minLength(10),
          //       Validators.maxLength(500)
          //     ]);
          //   } else {
          //     // For low/medium severity: optional fields
          //     fileControl.clearValidators();
          //     descriptionControl.clearValidators();
          //     // Clear values if they exist
          //     if (fileControl.value) {
          //       this.removeFile();
          //     }
          //     if (descriptionControl.value) {
          //       descriptionControl.setValue('');
          //     }
          //   }
          //   fileControl.updateValueAndValidity({ onlySelf: true });
          //   descriptionControl.updateValueAndValidity({ onlySelf: true });
          // }
          // Add this method after the requiresFileUpload() method

        }, {
          key: "isSubmitDisabled",
          value: function isSubmitDisabled() {
            if (!this.form.valid) {
              return true;
            } // Check if ques1 (main question) is false - can submit


            if (!this.form.value.ques1) {
              return false;
            } // If ques1 is true, check severity-based conditions


            var severity = this.form.value.ques6;
            var isHighSeverity = severity === 3 || severity === 4;

            if (isHighSeverity) {
              var fileUploaded = this.form.value.ques7;
              var descriptionFilled = this.form.value.ques9 && this.form.value.ques9.trim().length > 0; // Disable if file or description is missing

              if (!fileUploaded || !descriptionFilled) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "updateConditionalValidators",
          value: function updateConditionalValidators(severity) {
            var previousSeverity = this.form.get('ques6').value;
            var currentSeverity = severity; // Clear file and description if changing from high/critical to low/medium

            if ((previousSeverity === 3 || previousSeverity === 4) && (currentSeverity === 1 || currentSeverity === 2)) {
              this.clearFileAndDescription();
            }

            var isHighSeverity = currentSeverity === 3 || currentSeverity === 4;
            var fileControl = this.form.get('ques7');
            var fileNameControl = this.form.get('ques8');
            var descriptionControl = this.form.get('ques9');

            if (isHighSeverity) {
              // For high/critical severity: file and description are required
              fileControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, this.fileSizeValidator.bind(this), this.fileTypeValidator.bind(this)]);
              descriptionControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(500)]);
            } else {
              // For low/medium severity: optional fields
              fileControl.clearValidators();
              descriptionControl.clearValidators(); // Clear values if they exist

              this.clearFileAndDescription();
            }

            fileControl.updateValueAndValidity({
              onlySelf: true
            });
            descriptionControl.updateValueAndValidity({
              onlySelf: true
            });
          }
        }, {
          key: "clearFileAndDescription",
          value: function clearFileAndDescription() {
            var fileControl = this.form.get('ques7');
            var fileNameControl = this.form.get('ques8');
            var descriptionControl = this.form.get('ques9'); // Clear the values

            fileControl.setValue('');
            fileNameControl.setValue('');
            descriptionControl.setValue(''); // Reset file input if it exists

            if (this.fileInput) {
              this.fileInput.nativeElement.value = '';
            } // Mark as untouched to clear validation errors


            fileControl.markAsUntouched();
            descriptionControl.markAsUntouched();
          }
        }, {
          key: "removeFile",
          value: function removeFile() {
            this.form.get('ques7').setValue('');
            this.form.get('ques8').setValue('');

            if (this.fileInput) {
              this.fileInput.nativeElement.value = '';
            }

            this.form.get('ques7').markAsUntouched();
          } // onRadioEvent(event, id) {
          //   if (id == 1) {
          //     if (+this.form.value.ques1) {
          //       this.form.get('ques2').setValue('');
          //       this.form.get('ques2').setValidators(Validators.required);
          //       this.form.get('ques2').updateValueAndValidity();
          //       this.form.get('ques3').setValue('');
          //       this.form.get('ques3').setValidators(Validators.required);
          //       this.form.get('ques3').updateValueAndValidity();
          //       this.form.get('ques4').setValue('');
          //       this.form.get('ques4').setValidators(Validators.required);
          //       this.form.get('ques4').updateValueAndValidity();
          //       this.form.get('ques6').setValue('');
          //       this.form.get('ques6').setValidators(Validators.required);
          //       this.form.get('ques6').updateValueAndValidity();
          //     } else {
          //       this.form.get('ques2').setValue('');
          //       this.form.get('ques2').setValidators(null);
          //       this.form.get('ques2').updateValueAndValidity();
          //       this.form.get('ques3').setValue('');
          //       this.form.get('ques3').setValidators(null);
          //       this.form.get('ques3').updateValueAndValidity();
          //       this.form.get('ques4').setValue('');
          //       this.form.get('ques4').setValidators(null);
          //       this.form.get('ques4').updateValueAndValidity();
          //       this.form.get('ques5').setValue('');
          //       this.form.get('ques5').setValidators(null);
          //       this.form.get('ques5').updateValueAndValidity();
          //       this.form.get('ques6').setValue('');
          //       this.form.get('ques6').setValidators(null);
          //       this.form.get('ques6').updateValueAndValidity();
          //       this.imageKey = "";
          //     }
          // }
          // Custom validator for file size (max 5MB)

        }, {
          key: "fileSizeValidator",
          value: function fileSizeValidator(control) {
            if (control.value) {
              // If it's a string key from S3, skip validation (already validated)
              if (typeof control.value === 'string' && !control.value.startsWith('data:')) {
                return null;
              } // Only validate base64 strings


              if (control.value.startsWith('data:')) {
                var base64String = control.value;
                var sizeInBytes = base64String.length * 3 / 4;
                var maxSize = 5 * 1024 * 1024; // 5MB

                if (sizeInBytes > maxSize) {
                  return {
                    fileSizeExceeded: true
                  };
                }
              }
            }

            return null;
          } // Custom validator for file type

        }, {
          key: "fileTypeValidator",
          value: function fileTypeValidator(control) {
            if (control.value) {
              // If it's a string key from S3, skip validation (already validated)
              if (typeof control.value === 'string' && !control.value.startsWith('data:')) {
                return null;
              } // Only validate base64 strings


              if (control.value.startsWith('data:')) {
                var base64String = control.value;
                var allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
                var mimeType = base64String.match(/^data:(.*);base64,/);

                if (mimeType && mimeType[1]) {
                  if (!allowedTypes.includes(mimeType[1])) {
                    return {
                      invalidFileType: true
                    };
                  }
                } else {
                  return {
                    invalidBase64Format: true
                  };
                }
              }
            }

            return null;
          } // Helper method to check if severity requires file upload

        }, {
          key: "requiresFileUpload",
          value: function requiresFileUpload() {
            var severity = this.form.value.ques6;
            return severity === 3 || severity === 4;
          }
        }, {
          key: "androidPermission",
          value: function androidPermission() {
            var _this2 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                console.log("no camera permission");

                _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.CAMERA);
            });
          }
        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this3 = this;

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

              _this3.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_11__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 3145728) {
                    _this3.imageKey = base64string;

                    _this3.form.controls['ques4'].setValue(splitedImage[0] + '.png');

                    _this3.getLatLong();
                  } else {
                    _this3.alert.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          }
        }, {
          key: "uploadImgDelete",
          value: function uploadImgDelete() {
            this.form.get('ques4').setValue(null);
            this.form.get('ques4').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
            this.form.get('ques4').updateValueAndValidity();
            this.imageKey = "";
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.initializeValidators();
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            if (this.form.valid) {
              if (+this.form.value.ques1) {
                var buildType = this.type.filter(function (dd) {
                  return +dd.value == +_this4.form.value.ques2;
                });
                var records = {
                  "records": {
                    "id": '',
                    "school_id": this.schoolId,
                    "user_id": this.emis_user_id,
                    "work": buildType[0].label,
                    "work_id": this.form.value.ques2,
                    "work_type_id": "3",
                    "construction_yr": this.form.value.ques3,
                    "severity": this.form.value.ques6,
                    "description": this.form.value.ques9 || '',
                    "building_image": this.form.value.ques7 || '',
                    "uploads": this.form.value.ques4,
                    "bldg_name": this.form.value.ques5,
                    "agency": +this.cattyId == 1 || +this.cattyId == 2 || +this.cattyId == 3 ? "RD" : "PWD",
                    "isactive": '1'
                  }
                };
                this.imagePost();
                this.sidsService.hm_demolitn_bldng_add(records).subscribe(function (res) {
                  if (res.dataStatus) {
                    // Simply close the modal - parent will refresh
                    _this4.modalCtrl.dismiss();

                    _this4.alert.success(res.message);
                  } else {
                    _this4.alert.error(res.message);
                  }
                }, function (error) {
                  _this4.alert.error("Error saving data");
                });
              } else {
                // For "No" option - just close modal
                this.modalCtrl.dismiss();
                this.alert.success("Data saved successfully");
              }
            } else {
              this.alert.error("Please enter valid data");
            }
          }
        }, {
          key: "onFileSelected",
          value: function onFileSelected(event) {
            var _this5 = this;

            var _a;

            if (!event.target.files || !event.target.files[0]) {
              return;
            }

            var file = event.target.files[0]; // Allowed file types (ONLY image & pdf)

            var allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

            if (!allowedTypes.includes(file.type)) {
              this.alert.error('Only JPG, PNG, and PDF files are allowed.');
              this.removeFile();
              return;
            }

            var maxSize = 5 * 1024 * 1024;

            if (file.size > maxSize) {
              this.alert.error("File size should not exceed 5MB. Your file is ".concat((file.size / (1024 * 1024)).toFixed(2), "MB"));
              this.removeFile();
              return;
            }

            this.loadService.show('Uploading file...');
            var splittedName = file.name.split('.');
            var ext = ((_a = splittedName.pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
            var baseName = splittedName.join('.');
            var bucketFolder;

            if (ext === 'pdf') {
              bucketFolder = 'pdf';
            } else {
              bucketFolder = 'images';
            }

            var bucketName = "emisapplication/sids_demolish/".concat(bucketFolder);
            var filename = "".concat(baseName, "_").concat(Date.now());
            var expiry = 300;
            this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
              if (!(result === null || result === void 0 ? void 0 : result.url) || !(result === null || result === void 0 ? void 0 : result.key)) {
                // this.loadService.hide();
                _this5.alert.error('Failed to get signed URL');

                _this5.removeFile();

                return;
              }

              _this5.uploadService.uploadFile(result.url, file).subscribe(function () {
                var _a, _b, _c, _d; // Save S3 key & original filename


                (_a = _this5.form.get('ques7')) === null || _a === void 0 ? void 0 : _a.setValue(result.key);
                (_b = _this5.form.get('ques8')) === null || _b === void 0 ? void 0 : _b.setValue(file.name);
                (_c = _this5.form.get('ques7')) === null || _c === void 0 ? void 0 : _c.markAsTouched();
                (_d = _this5.form.get('ques7')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity(); // this.loadService.hide();

                _this5.alert.success('File uploaded successfully');
              }, function () {
                // this.loadService.hide();
                _this5.alert.error('Error uploading file to S3');

                _this5.removeFile();
              });
            }, function () {
              // this.loadService.hide();
              _this5.alert.error('Error getting signed URL');

              _this5.removeFile();
            });
          } // from the above use as the bucket name emisapplication if image means           /sids_demolish/images/  and pdf means /sids_demolish/pdf/     
          // onFileSelected(event: any) {
          //   if (event.target.files && event.target.files[0]) {
          //     const file = event.target.files[0];
          //     // Check file type first (exclude videos)
          //     const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
          //     if (!allowedTypes.includes(file.type)) {
          //       this.alert.error('Only JPG, PNG, and PDF files are allowed. Videos are not supported.');
          //       this.removeFile();
          //       return;
          //     }
          //     // Check file size (max 5MB)
          //     const maxSizeInMB = 5;
          //     const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
          //     if (file.size > maxSizeInBytes) {
          //       this.alert.error(`File size should not exceed ${maxSizeInMB}MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
          //       this.removeFile();
          //       return;
          //     }
          //     // Show loading indicator
          //     this.loadService.show('Uploading file...');
          //     const reader = new FileReader();
          //     reader.onload = (e: any) => {
          //       const base64String = e.target.result;
          //       const splittedName = file.name.split(".");
          //       const fileName = splittedName[0];
          //       const fileExtension = splittedName[splittedName.length - 1].toLowerCase();
          //       const expiry: number = 300; // 5 minutes
          //       let bucketFolder = "";
          //       // Determine bucket folder based on file type
          //       if (fileExtension === 'pdf') {
          //         bucketFolder = "pdf";
          //       } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
          //         bucketFolder = "images";
          //       }
          //       const bucketName = `emisapplication/movie_screening/${bucketFolder}`;
          //       // Get signed URL from your upload service
          //       this.uploadService.getSignedUrl(bucketName, fileExtension, fileName, expiry).subscribe((result) => {
          //         if (result?.key) {
          //           // Upload the file to S3
          //           this.uploadService.uploadFile(result.url, file).subscribe((uploadRes) => {
          //             // Store the S3 key in ques7 and filename in ques8
          //             this.form.get('ques7').setValue(result.key);
          //             this.form.get('ques8').setValue(file.name);
          //             this.form.get('ques7').markAsTouched();
          //             this.form.get('ques7').updateValueAndValidity();
          //             // this.loadService.hide();
          //             this.alert.success('File uploaded successfully');
          //           }, (uploadError) => {
          //             // this.loadService.hide();
          //             this.alert.error('Error uploading file to S3');
          //             this.removeFile();
          //           });
          //         } else {
          //           // this.loadService.hide();
          //           this.alert.error('Error getting signed URL');
          //           this.removeFile();
          //         }
          //       }, (urlError) => {
          //         // this.loadService.hide();
          //         this.alert.error('Error getting signed URL');
          //         this.removeFile();
          //       });
          //     };
          //     reader.onerror = (error) => {
          //       // this.loadService.hide();
          //       this.alert.error('Error reading file');
          //       this.removeFile();
          //     };
          //     reader.readAsDataURL(file);
          //   }
          // }

        }, {
          key: "viewFile",
          value: function viewFile(fileKey, fileName) {
            var cloudfrontBaseUrl = 'https://d21mc000xink7q.cloudfront.net/';
            var fileExtension = fileName.split('.').pop().toLowerCase();
            var fileUrl = '';

            if (fileExtension === 'pdf') {
              fileUrl = "".concat(cloudfrontBaseUrl, "sids_demolish/pdf/").concat(fileKey);
            } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
              fileUrl = "".concat(cloudfrontBaseUrl, "sids_demolish/images/").concat(fileKey);
            } else {
              fileUrl = "".concat(cloudfrontBaseUrl).concat(fileKey);
            }

            console.log('Opening file:', fileUrl);
            window.open(fileUrl, '_blank');
          }
        }, {
          key: "imagePost",
          value: function imagePost() {
            var _this6 = this;

            var dataImage = [];
            dataImage = this.imageKey.split(',');

            if (dataImage.length == 2) {
              var data = {
                "records": {
                  "Photo": dataImage[1],
                  "PhotoName": this.form.value.ques4
                }
              };
              this.sidsService.S3ImageSave(data).subscribe(function (res) {
                if (res.dataStatus) {
                  _this6.alert.success('Saved Successfully');
                }
              });
            }
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
              _this7.latitude = resp.coords.latitude;
              _this7.longitude = resp.coords.longitude;
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this7.alert.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }, {
          key: "autoSync",
          value: function autoSync() {
            var _this8 = this;

            var buildType = this.type.filter(function (dd) {
              return +dd.value == +_this8.form.value.ques2;
            });
            var records = {
              "records": {
                "id": '',
                "school_id": this.schoolId,
                "user_id": this.emis_user_id,
                "work": buildType[0].label,
                "work_id": this.form.value.ques2,
                "work_type_id": "3",
                "construction_yr": this.form.value.ques3,
                "uploads": this.form.value.ques4,
                "bldg_name": this.form.value.ques5,
                "agency": +this.cattyId == 4 || +this.cattyId == 5 ? "PWD" : "RD",
                // "lat": this.latitude,
                // "log": this.longitude,
                "isactive": '1'
              }
            };
            var datainsert = "INSERT INTO TobeDemolish VALUES (?,?,?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.emis_user_id, records, this.imageKey, "2"]).then(function (insertres) {
              _this8.alert.warning("Saved Locally");
            });
          }
        }, {
          key: "networkStatus",
          value: function networkStatus() {
            var _this9 = this;

            this.NetworkService.onNetworkChange().subscribe(function (status) {
              if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.ConnectionStatus.Online) {
                console.log("To be Demolish Auto Sync");

                _this9.getDemolish();
              } else {
                console.log("AutoSync Stopped");
              }
            });
          }
        }, {
          key: "getDemolish",
          value: function getDemolish() {
            var _this0 = this;

            debugger;
            var query = 'SELECT * FROM TobeDemolish';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var demolishData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  demolishData.push(data.rows.item(i));
                }

                console.log('demolishData', demolishData);

                if (demolishData.length > 0) {
                  var _loop = function _loop(_i) {
                    if (+demolishData[_i].Status == 2) {
                      var dataImage = [];
                      dataImage = demolishData[_i].uploadFile.split(',');

                      _this0.sidsService.hm_demolitn_bldng_add(demolishData[_i].records).subscribe(function (res) {
                        if (res.dataStatus) {
                          if (dataImage.length == 2) {
                            var _data = {
                              "records": {
                                "Photo": dataImage[1],
                                "PhotoName": demolishData[_i].records.uploads
                              }
                            };

                            _this0.sidsService.S3ImageSave(_data).subscribe(function (res) {
                              if (res.dataStatus) {
                                var query2 = 'DELETE FROM TobeDemolish WHERE schoolId = "' + demolishData[_i].schoolId + '"' + ' And emisId = "' + demolishData[_i].emisId + '"';
                                return _this0.sqliteDB.update(query2).then(function (data) {
                                  _this0.alert.success(res.message);
                                });
                              }
                            });
                          }
                        } else {
                          _this0.alert.success(res.message);
                        }
                      });
                    }
                  };

                  for (var _i = 0; _i < demolishData.length; _i++) {
                    _loop(_i);
                  }
                }
              }
            });
          }
        }]);
      }();

      _SidsDemolishBuildPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__.Geolocation
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__.SidsService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_14__.UploadService
        }];
      };

      _SidsDemolishBuildPage.propDecorators = {
        jpgimage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild,
          args: ['jpgimage']
        }]
      };
      _SidsDemolishBuildPage = (0, tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-sids-demolish-build',
        template: _raw_loader_sids_demolish_build_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sids_demolish_build_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SidsDemolishBuildPage);
      /***/
    },

    /***/
    47224:
    /*!***********************************************************!*\
      !*** ./src/app/services/tnvn/services/loading.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(LoadingService, [{
          key: "present",
          value: function present(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this1 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.isLoading = true;
                    _context.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this1.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this10 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.isLoading = true;
                    _context2.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this10.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = false;
                    _context3.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    83344:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.scss ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\nion-content .header-text {\n  background: #f4f4f4;\n  padding: 15px;\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .middle-text {\n  border-radius: 0px 0px 10px 10px;\n}\nion-content .question {\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin: 10px auto;\n}\nion-content .question p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 20px;\n}\nion-content .question ion-select {\n  max-width: 100%;\n}\nion-content .question ion-item {\n  margin: 0px 0;\n  --padding-start: 0px ;\n}\nion-content ion-radio-group {\n  display: flex;\n}\nion-content ion-radio-group ion-item {\n  margin: 0 !important;\n}\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n.saveBtn {\n  --border-radius: 15px;\n  text-transform: capitalize;\n  color: #FFF;\n  display: flex;\n  margin: 10px auto;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZHMtZGVtb2xpc2gtYnVpbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFJO0VBRUksZ0NBQUE7QUFDUjtBQUNJO0VBQ0Usc0JBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFDTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBRU07RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBRU07RUFDRSxvQkFBQTtBQUFSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSiIsImZpbGUiOiJzaWRzLWRlbW9saXNoLWJ1aWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5oZWFkZXItdGV4dHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubWlkZGxlLXRleHR7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5xdWVzdGlvbiB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAvLyAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tcmFkaW8tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVwbG9hZEltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2F2ZUJ0bntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMzMTY4Nzk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    64501:
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.html ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">Add Demolish Building</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon style=\"font-size: 24px;\" class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n    <ion-note slot=\"start\"\r\n      style=\"font-size: 10px; text-align: left; color: var(--ion-color-primary); font-weight: bold;\">\r\n      குறிப்பு :\r\n      கீழ் உள்ள பட்டியலில் தங்கள் பள்ளியில் ஆபத்தான நிலையில் இடிக்க வேண்டிய கட்டிடம் மற்றும் சுற்றுச்சுவர் ஏதேனும்\r\n      விடுபட்டு இருப்பின் அதன் விபரங்களை இங்கே புதிதாக பதிவேற்றம் செய்யவும்.\r\n      அவ்வாறு எந்தக்கட்டிடமும் இல்லையென்றாலோ அல்லது விடுபடவில்லை என்றாலோ இதனை தவிர்க்கவும்.\r\n    </ion-note>\r\n    <div class=\"question\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.தங்கள் பள்ளியில் இடிக்கப்பட வேண்டிய கட்டிடம் ஏதேனும் உள்ளதா?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-radio-group (ionChange)=\"onRadioEvent($event, 1)\" [value]=\"true\" formControlName=\"ques1\">\r\n            <ion-item mode=\"md\" lines=\"none\">\r\n              <ion-label>ஆம்</ion-label>\r\n              <ion-radio slot=\"start\" [value]=\"true\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item mode=\"md\" lines=\"none\">\r\n              <ion-label>இல்லை</ion-label>\r\n              <ion-radio slot=\"start\" [value]=\"false\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.1 கட்டிடம் பெயர்<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-input type=\"text\" formControlName=\"ques5\" placeholder=\"Please enter\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.2 கட்டிடத்தின் வகை?<span style=\"color: red;\">*</span></p>\r\n            </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques2\" multiple=\"false\" placeholder=\"Please select\"\r\n              style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of type\" [value]=\"item.value\">{{item.label}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <!-- <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.3 கட்டிதத்தின் திவிரைன்மை </p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques6\" placeholder=\"Please select\" style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of Severity\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.3 கட்டிதத்தின் திவிரைன்மை<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques6\" (ionChange)=\"updateConditionalValidators($event)\"\r\n              placeholder=\"Please select\" style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of Severity\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- File Upload Section -->\r\n\r\n    </div>\r\n    <!-- <div class=\"question\" *ngIf=\"form.value.ques1  && (form.value.ques6 === 3 || form.value.ques6 === 4)\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Upload File</p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n\r\n            <input type=\"file\" (change)=\"onFileSelected($event)\" accept=\".jpg,.jpeg,.png,.pdf\" />\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"question\" *ngIf=\"form.value.ques1  && (form.value.ques6 === 3 || form.value.ques6 === 4)\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Description</p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-input type=\"text\" formControlName=\"ques9\" placeholder=\"Please enter\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n    <!-- File Upload Section -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1 && requiresFileUpload()\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Upload File <span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\"\r\n            [class.invalid]=\"form.get('ques7').invalid && form.get('ques7').touched\">\r\n            <input type=\"file\" (change)=\"onFileSelected($event)\"\r\n              accept=\"image/jpeg,image/jpg,image/png,application/pdf\" />\r\n              \r\n          </ion-item>\r\n          <ion-note \r\n            style=\"font-size: 10px; text-align: left; color: var(--ion-color-primary); font-weight: bold;\">\r\n            குறிப்பு : Only PDF and Image files (JPG, PNG) are allowed. Maximum file size: 5 MB\r\n          </ion-note>\r\n          <!-- Validation Messages -->\r\n          <div *ngIf=\"form.get('ques7').invalid && form.get('ques7').touched\" class=\"validation-error\">\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.required\">\r\n              File upload is required for high/critical severity\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.fileSizeExceeded\">\r\n              File size should not exceed 5 MB\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.invalidFileType\">\r\n              Only JPG, PNG and PDF files are allowed\r\n            </ion-text>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.value.ques8\" class=\"file-preview-section\">\r\n            <ion-note style=\"font-size: 12px; color: green;\">\r\n              Selected file: {{form.value.ques8}}\r\n            </ion-note>\r\n\r\n            <ion-button *ngIf=\"form.value.ques7\" size=\"small\" fill=\"clear\"\r\n              (click)=\"viewFile(form.value.ques7, form.value.ques8)\" style=\"margin-left: 10px;\">\r\n              <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\r\n              View File\r\n            </ion-button>\r\n          </div>\r\n\r\n          <!-- Optional: Add some CSS for better layout -->\r\n          <style>\r\n            .file-preview-section {\r\n              display: flex;\r\n              align-items: center;\r\n              margin-top: 5px;\r\n              flex-wrap: wrap;\r\n            }\r\n          </style>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1 && requiresFileUpload()\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Description <span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\"\r\n            [class.invalid]=\"form.get('ques9').invalid && form.get('ques9').touched\">\r\n            <ion-textarea type=\"text\" formControlName=\"ques9\" placeholder=\"Please enter description (10-500 characters)\"\r\n              rows=\"3\" required>\r\n            </ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Validation Messages -->\r\n          <div *ngIf=\"form.get('ques9').invalid && form.get('ques9').touched\" class=\"validation-error\">\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.required\">\r\n              Description is required for high/critical severity\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.minlength\">\r\n              Description must be at least 10 characters\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.maxlength\">\r\n              Description cannot exceed 500 characters\r\n            </ion-text>\r\n          </div>\r\n\r\n          <ion-note style=\"font-size: 10px;\">\r\n            Characters: {{form.get('ques9').value?.length || 0}}/500\r\n          </ion-note>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- Add to your SCSS file -->\r\n    <!-- .validation-error {\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n  padding-left: 16px;\r\n}\r\n\r\n.item-input.invalid {\r\n  border-color: var(--ion-color-danger) !important;\r\n} -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.4 கட்டிடம் கட்டப்பட்ட வருடம்?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-datetime placeholder=\"Please select date\" displayFormat=\"YYYY\" formControlName=\"ques3\"\r\n              presentation=\"year\" min=\"1850\" max=\"2026\" style=\"border-bottom: 1px solid; width: 100%;\"></ion-datetime>\r\n            <!-- <ion-input type=\"date\" inputmode=\"number\" formControlName=\"ques3\" placeholder=\"Please enter\" required ></ion-input> -->\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.5 கட்டிடத்தின் தற்போதைய புகைப்படம்?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\" *ngIf=\"!form.value.image\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" (click)=\"openCamera()\">\r\n            <ion-col size=\"1\" style=\"text-align: center;\">\r\n              <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                Click to Upload Image\r\n              </label>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"form.value.ques4\" class=\"middle-text\">\r\n        <ion-col size=\"12\" style=\"float: left;\">\r\n          <ion-button (click)=\"uploadImgDelete()\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n          </ion-button>\r\n          <div style=\"padding: 5px;\">\r\n            <img class=\"uploadImage\" src=\"{{imageKey}}\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n  <ion-button [disabled]=\"form.invalid || isSubmitDisabled()\" size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\">\r\n    சேமிக்கவும் </ion-button>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts-es5.js.map