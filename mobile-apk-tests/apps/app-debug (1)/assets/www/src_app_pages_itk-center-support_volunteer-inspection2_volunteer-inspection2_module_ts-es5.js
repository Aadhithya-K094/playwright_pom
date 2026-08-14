(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-inspection2_volunteer-inspection2_module_ts"], {
    /***/
    74737:
    /*!********************************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2-routing.module.ts ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspection2PageRoutingModule": function VolunteerInspection2PageRoutingModule() {
          return (
            /* binding */
            _VolunteerInspection2PageRoutingModule
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


      var _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-inspection2.page */
      66053);

      var routes = [{
        path: '',
        component: _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspection2Page
      }];

      var _VolunteerInspection2PageRoutingModule = /*#__PURE__*/_createClass(function VolunteerInspection2PageRoutingModule() {
        _classCallCheck(this, VolunteerInspection2PageRoutingModule);
      });

      _VolunteerInspection2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VolunteerInspection2PageRoutingModule);
      /***/
    },

    /***/
    54398:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.module.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspection2PageModule": function VolunteerInspection2PageModule() {
          return (
            /* binding */
            _VolunteerInspection2PageModule
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


      var _volunteer_inspection2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volunteer-inspection2-routing.module */
      74737);
      /* harmony import */


      var _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection2.page */
      66053);

      var _VolunteerInspection2PageModule = /*#__PURE__*/_createClass(function VolunteerInspection2PageModule() {
        _classCallCheck(this, VolunteerInspection2PageModule);
      });

      _VolunteerInspection2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _volunteer_inspection2_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspection2PageRoutingModule],
        declarations: [_volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerInspection2Page]
      })], _VolunteerInspection2PageModule);
      /***/
    },

    /***/
    66053:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolunteerInspection2Page": function VolunteerInspection2Page() {
          return (
            /* binding */
            _VolunteerInspection2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_volunteer_inspection2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./volunteer-inspection2.page.html */
      58742);
      /* harmony import */


      var _volunteer_inspection2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volunteer-inspection2.page.scss */
      8382);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _VolunteerInspection2Page = /*#__PURE__*/function () {
        function VolunteerInspection2Page(fb, router, ActRoute, alertService, camera, androidPermissions, file, uploadService, emisService, usersessionService, modalCtrl) {
          _classCallCheck(this, VolunteerInspection2Page);

          this.fb = fb;
          this.router = router;
          this.ActRoute = ActRoute;
          this.alertService = alertService;
          this.camera = camera;
          this.androidPermissions = androidPermissions;
          this.file = file;
          this.uploadService = uploadService;
          this.emisService = emisService;
          this.usersessionService = usersessionService;
          this.modalCtrl = modalCtrl;
          this.questionArray = [];
          this.questionList = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe("en-US");
          this.resultData = [];
        }

        return _createClass(VolunteerInspection2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeValidator();
            this.todayDate = this.pipe.transform(new Date(), "yyyy-MM-dd");
            this.month = this.pipe.transform(new Date(), 'MM');
            this.teacherId = this.usersessionService.teacher_id();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.noData = true;
            this.submitted = false;
            this.getQuestionFromServer();
            this.ActRoute.queryParams.subscribe(function (params) {
              _this.volId = params.volunteerId, _this.searchTxt = params.searchTxt;
            }); // console.log("check constructor datas",'currentMonth=>', this.month, "volId=>",this.volId,"searchText",this.searchTxt, "todayDate",this.todayDate,"teacherId", this.teacherId);   
          }
        }, {
          key: "initializeValidator",
          value: function initializeValidator() {
            this.form = this.fb.group({
              Answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
              questions: this.fb.array([])
            });
          }
        }, {
          key: "getQuestionFromServer",
          value: function getQuestionFromServer() {
            var _this2 = this;

            this.emisService.getItkCentrObsrQuetions().subscribe(function (res) {
              _this2.questionArray = [];
              _this2.questionArray = res.result;

              if (_this2.questionArray.length > 0) {
                _this2.noData = true;

                for (var i = 0; i < _this2.questionArray.length; i++) {
                  _this2.questionArray[i].validation = "required";
                  _this2.questionArray[i].Answer = "";
                  _this2.questionArray[i].OptId = "";
                }

                _this2.addQuestValidation(_this2.questionArray); // console.log("check validation field added in this.questionList",this.questionArray);

              } else {
                _this2.noData = false;

                _this2.alertService.error(res.messgae || 'No data Found');
              }
            });
          }
        }, {
          key: "addQuestValidation",
          value: function addQuestValidation(questionArray) {
            var control = this.form.controls["questions"];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.questionList = this.form.controls.questions;

            for (var _i = 0; _i < questionArray.length; _i++) {
              this.questionList.push(this.fb.group({
                Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].Qid, null),
                QtypId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].QtypId, null),
                Qtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].Qtype, null),
                Qst: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].Qst, null),
                Options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].Options, null),
                validation: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].validation, null),
                OptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].OptId, null),
                Answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[_i].Answer, questionArray[_i].validation == 'required' ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null)
              }));
            } // console.log("CHECK Form Control Question Array are displayed", this.questionList); 

          }
        }, {
          key: "openCamera",
          value: function openCamera(i) {
            var _this3 = this;

            // for test
            // this.imageKey = "image Key Dummy Name"
            // this.form.controls['questions']['controls'][i].controls['Answer'].setValue(this.imageKey);   
            // debugger
            this.androidPermission();
            var options = {
              quality: 100,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var bucketName = "renewalapplicationemis";
              var expiry = 300;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this3.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_2__.base64StringToBlob)(base[1], 'image/jpg');
                  console.log(blob);

                  if (blob.size <= 3145728) {
                    _this3.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                      if (result) {
                        _this3.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                          _this3.imageKey = result.key;
                          _this3.doc1Uploaded = true;

                          _this3.form.controls['questions']['controls'][i].controls['Answer'].setValue(_this3.imageKey);

                          _this3.alertService.success('File Uploaded Successfully');
                        });
                      }
                    });
                  } else {
                    _this3.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          }
        }, {
          key: "onEventValidation",
          value: function onEventValidation(event, i) {
            this.form.controls['questions']['controls'][i].controls['OptId'].setValue(event.detail.value.OptId);
            this.form.controls['questions']['controls'][i].controls['OptId'].updateValueAndValidity();
            this.form.controls['questions']['controls'][i].controls['Answer'].setValue(event.detail.value.Options);
            this.form.controls['questions']['controls'][i].controls['Answer'].updateValueAndValidity();
          }
        }, {
          key: "androidPermission",
          value: function androidPermission() {
            var _this4 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
              if (!result.hasPermission) {
                // console.log("Camera permission request");
                _this4.androidPermissions.requestPermission(_this4.androidPermissions.PERMISSION.CAMERA);
              }
            }, function (err) {
              return _this4.androidPermissions.requestPermission(_this4.androidPermissions.PERMISSION.CAMERA);
            }); //  console.log("Camera permission denied");
          }
        }, {
          key: "viewImage",
          value: function viewImage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    bucketName = "renewalapplicationemis"; // Dummy image
                    // this.imageKey ='a926d470-6fc8-11ed-a171-2700209804e4.jpg'

                    filename = this.imageKey;
                    expiry = 1800;
                    this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var modal;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (!result) {
                                _context.n = 3;
                                break;
                              }

                              this.image = result.url;
                              _context.n = 1;
                              return this.modalCtrl.create({
                                component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__.ViewImagePage,
                                componentProps: {
                                  image: this.image
                                },
                                cssClass: 'view-image-modal'
                              });

                            case 1:
                              modal = _context.v;
                              _context.n = 2;
                              return modal.present();

                            case 2:
                              _context.n = 4;
                              break;

                            case 3:
                              this.alertService.error('Error in getting image file');

                            case 4:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "saveSurvey",
          value: function saveSurvey() {
            var _this6 = this;

            if (this.form.valid) {
              // record set survery answers     
              var arrayData = [];
              var forData = this.form.value.questions; // console.log("check form value",forData);

              for (var i = 0; i < forData.length; i++) {
                var _data = {
                  "IndxID": "",
                  "QueId": forData[i].Qid,
                  "RespInt": forData[i].OptId,
                  "RespChar": forData[i].Answer
                };
                arrayData.push(_data);
              } // console.log("array data",arrayData)


              var data = {
                "ItkVolunteer": [{
                  "IndxID": "",
                  "TeacherId": this.teacherId,
                  "volunteer_Id": this.volId,
                  "SurveyMonth": this.month,
                  "surveyDate": this.todayDate
                }],
                "ItkQuestDetails": arrayData
              }; // console.log("check data array",data);
              // post method 

              this.emisService.saveITKInspectionDetails(data).subscribe(function (res) {
                if (res.dataStatus = true) {
                  _this6.alertService.success(res.message);

                  _this6.router.navigate(['tabs/itk-center-dashboard']);
                } else {
                  _this6.alertService.error(res.message);
                }
              });
            } else {
              this.submitted = true;
              this.alertService.error('Field Required'); // console.log("form invalid");
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/teacher/volunteer-search', {
              volunId: this.searchTxt
            }]);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.submitted = false;
            this.form.reset();
            this.addQuestValidation(this.questionArray);
          }
        }]);
      }();

      _VolunteerInspection2Page.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__.AndroidPermissions
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }];
      };

      _VolunteerInspection2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-volunteer-inspection2',
        template: _raw_loader_volunteer_inspection2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_volunteer_inspection2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VolunteerInspection2Page);
      /***/
    },

    /***/
    8382:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.scss ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-grid {\n  margin: 3%;\n}\n\n.error-message {\n  padding-left: 5%;\n  color: red;\n  padding-top: 4%;\n}\n\n.border {\n  border: #9a9fcd 1px solid;\n  margin-top: 3%;\n}\n\n.cardNoData {\n  padding: 15px;\n  font-size: 15px;\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1pbnNwZWN0aW9uMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InZvbHVudGVlci1pbnNwZWN0aW9uMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBtYXJnaW46IDMlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAjOWE5ZmNkIDFweCBzb2xpZDtcclxuICBtYXJnaW4tdG9wOiAzJVxyXG59XHJcblxyXG4uY2FyZE5vRGF0YSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiA1JTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    58742:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n\t\t\t<ion-button><ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>ITK Center Questions</ion-title>   \r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> ITK Center Questions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"!noData\" class=\"cardNoData\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-label>No data found</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" *ngIf=\"noData\">\r\n    <ion-grid formArrayName=\"questions\">\r\n      <div *ngFor=\"let item of form.get('questions')['controls']; let i=index;\" [formGroupName]=\"i\" style=\"margin-bottom: 3%;\">\r\n        <ion-list class=\"graybackgrond\">\r\n          <ion-row>\r\n            <ion-col size=\"12\"><ion-label>{{i+1}}. {{item.value.Qst}}</ion-label></ion-col>            \r\n          </ion-row>\r\n        </ion-list>\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 4\">\r\n          <ion-select style=\"width:90%\" placeholder=\"Select option\" (ionChange)=\"onEventValidation($event, i)\">\r\n            <ion-select-option [value]=\"item\" *ngFor=\"let item of item.value.Options\">{{item.Options}}</ion-select-option>           \r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 9\">\r\n          <ion-textarea formControlName=\"Answer\" Placeholder=\"Enter Remarks\"></ion-textarea>\r\n        </ion-item> \r\n\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 6\">\r\n          <ion-input type=\"tel\"  formControlName=\"Answer\"  maxlength=\"2\" Placeholder=\"Enter No of students\"></ion-input>\r\n        </ion-item> \r\n\r\n        <ion-card style=\"width: 100%;margin-left: 0%;\" *ngIf=\"item.value.QtypId == 1\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"text-align:center\">\r\n              <ion-button (click)=\"openCamera(i)\" style=\"text-transform:none\"><ion-icon name=\"camera-outline\"></ion-icon>&nbsp;Camera</ion-button>\r\n              <!-- <ion-button (click)='viewImage()' style=\"text-transform:none\"><ion-icon name=\"image-outline\"></ion-icon>&nbsp;View image</ion-button> -->\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"text-align:center\">\r\n              <ion-label style=\"font-size: 12px;\"> 'Tap camera button to take and upload center photo' </ion-label>\r\n            </ion-col>\r\n            <ion-col>              \r\n              <ion-label>{{item.value.Answer}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        \r\n       <div *ngIf=\"item.value.QtypId == 7\">\r\n        <ion-radio-group (ionChange)=\"onEventValidation($event, i)\">          \r\n              <ion-item lines=\"none\" *ngFor=\"let item of item.value.Options\">\r\n                <ion-label>{{item.Options}}</ion-label>\r\n                <ion-radio slot=\"start\" [value]=\"item\"></ion-radio>\r\n              </ion-item>         \r\n        </ion-radio-group>       \r\n      </div>\r\n         <div class=\"error-message\" *ngIf=\"(item.controls['Answer'].hasError('required')) && (submitted || item.controls['Answer'].dirty || item.controls['Answer'].touched)\" text-wrap>\r\n                <ion-label>Field Required</ion-label>\r\n            </div>            \r\n      </div>      \r\n    </ion-grid>  \r\n  </form>\r\n  </ion-content>\r\n\r\n\r\n \r\n  <ion-footer style=\"text-align:center; background:#2176b9;\">\r\n      <ion-button expand=\"full\" style=\"box-shadow:none;--box-shadow:none;\" (click)=\"saveSurvey()\" >Save</ion-button>\r\n  </ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-inspection2_volunteer-inspection2_module_ts-es5.js.map