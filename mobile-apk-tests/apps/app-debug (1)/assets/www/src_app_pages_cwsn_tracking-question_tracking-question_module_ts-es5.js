(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-question_tracking-question_module_ts"], {
    /***/
    89029:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-question/tracking-question-routing.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingQuestionPageRoutingModule": function TrackingQuestionPageRoutingModule() {
          return (
            /* binding */
            _TrackingQuestionPageRoutingModule
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


      var _tracking_question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-question.page */
      52549);

      var routes = [{
        path: '',
        component: _tracking_question_page__WEBPACK_IMPORTED_MODULE_0__.TrackingQuestionPage
      }];

      var _TrackingQuestionPageRoutingModule = /*#__PURE__*/_createClass(function TrackingQuestionPageRoutingModule() {
        _classCallCheck(this, TrackingQuestionPageRoutingModule);
      });

      _TrackingQuestionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TrackingQuestionPageRoutingModule);
      /***/
    },

    /***/
    36653:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-question/tracking-question.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingQuestionPageModule": function TrackingQuestionPageModule() {
          return (
            /* binding */
            _TrackingQuestionPageModule
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


      var _tracking_question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-question-routing.module */
      89029);
      /* harmony import */


      var _tracking_question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-question.page */
      52549);

      var _TrackingQuestionPageModule = /*#__PURE__*/_createClass(function TrackingQuestionPageModule() {
        _classCallCheck(this, TrackingQuestionPageModule);
      });

      _TrackingQuestionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tracking_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingQuestionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tracking_question_page__WEBPACK_IMPORTED_MODULE_1__.TrackingQuestionPage]
      })], _TrackingQuestionPageModule);
      /***/
    },

    /***/
    52549:
    /*!************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-question/tracking-question.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingQuestionPage": function TrackingQuestionPage() {
          return (
            /* binding */
            _TrackingQuestionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_tracking_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tracking-question.page.html */
      15504);
      /* harmony import */


      var _tracking_question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-question.page.scss */
      11557);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);

      var _TrackingQuestionPage = /*#__PURE__*/function () {
        function TrackingQuestionPage(router, activatedRoute, cwsnService, uploadService, modalCtrl, alertService, platform, formBuilder, camera, file, geolocation, ionicstorage, networkService) {
          _classCallCheck(this, TrackingQuestionPage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.cwsnService = cwsnService;
          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.platform = platform;
          this.formBuilder = formBuilder;
          this.camera = camera;
          this.file = file;
          this.geolocation = geolocation;
          this.ionicstorage = ionicstorage;
          this.networkService = networkService;
          this.imageData = "";
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe('en-US');
        }

        return _createClass(TrackingQuestionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this.studentdetail = JSON.parse(params['studentdata']);
              _this.startTime = JSON.parse(params['startTime']);
              _this.getDetails = JSON.parse(params['getdetails']);
              _this.prev_lat = JSON.parse(params['prev_lat']);
              _this.prev_long = JSON.parse(params['prev_long']);

              if (_this.currNetWrkSts == 0) {
                _this.beforeImg = JSON.parse(params['beforeImage']);
              } else {
                _this.ionicstorage.getData('beforephotolol').then(function (dataa1) {
                  if (dataa1) {
                    _this.beforeImglocal = dataa1;
                  }
                });
              }
            });
            this.form = this.formBuilder.group({
              trackQue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
              trackQue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
              trackQue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')])
            });

            if (this.startTime) {
              this.getFormattedTime();
            }

            this.ionicstorage.getData('studentlistGet').then(function (dataa1) {
              if (dataa1) {
                console.log(dataa1, "final");
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.getFormattedTime();
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this2.studentdetail = JSON.parse(params['studentdata']);
              _this2.startTime = JSON.parse(params['startTime']);
              _this2.getDetails = JSON.parse(params['getdetails']);
              _this2.prev_lat = JSON.parse(params['prev_lat']);
              _this2.prev_long = JSON.parse(params['prev_long']);

              if (_this2.currNetWrkSts == 0) {
                _this2.beforeImg = JSON.parse(params['beforeImage']);
              } else {
                _this2.ionicstorage.getData('beforephotolol').then(function (dataa1) {
                  if (dataa1) {
                    _this2.beforeImglocal = dataa1;
                  }
                });
              }
            });
            this.form = this.formBuilder.group({
              trackQue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
              trackQue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
              trackQue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')])
            });

            if (this.startTime) {
              this.getFormattedTime();
            }

            this.ionicstorage.getData('studentlistGet').then(function (dataa1) {
              if (dataa1) {
                console.log(dataa1, "final");
              }
            });
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn() {
            var _this3 = this;

            var options = {
              quality: 100,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              allowEdit: false
            };
            this.platform.ready().then(function () {
              _this3.camera.getPicture(options).then(function (imageData) {
                var bucketName = "renewalapplicationemis";
                var expiry = 300;
                var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");

                _this3.file.readAsDataURL(imagename, filename).then(function (base64string) {
                  if (base64string) {
                    var base = base64string.split('base64,');
                    var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_6__.base64StringToBlob)(base[1], 'image/jpg');

                    if (blob.size <= 3145728) {
                      if (_this3.currNetWrkSts == 0) {
                        _this3.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                          if (result) {
                            _this3.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                              _this3.cameraKey = result.key;

                              _this3.viewPic('show', base64string);

                              _this3.alertService.success('File Uploaded Successfully');
                            });
                          }
                        });
                      } else {
                        var obj = {
                          bucketName: bucketName,
                          ext: splitedImage[1],
                          filename: splitedImage[0],
                          expiry: expiry
                        };
                        _this3.imageData = base;
                        _this3.test = obj;
                        _this3.afterphoto = base64string;

                        _this3.viewPic('show', base64string);
                      }
                    } else {
                      _this3.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                  }
                });
              }, function (err) {
                // Handle error
                console.log("LOG", err);
                alert("error " + JSON.stringify(err));
              });
            });
          }
        }, {
          key: "viewPic",
          value: function viewPic(fun, val) {
            var _this4 = this;

            if (this.currNetWrkSts == 0) {
              var bucketName = "renewalapplicationemis";
              var filename = this.cameraKey;
              var expiry = 1800;
              this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                  var modal;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (!result) {
                          _context.n = 3;
                          break;
                        }

                        this.imageData = result.url;
                        this.getFormattedTime();
                        console.log(this.imageData, "test2", result);

                        if (!(fun == 'modal')) {
                          _context.n = 2;
                          break;
                        }

                        _context.n = 1;
                        return this.modalCtrl.create({
                          component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__.ViewImagePage,
                          componentProps: {
                            image: this.imageData
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
            } else {
              this.imageData = val;
              this.getFormattedTime();
            }
          }
        }, {
          key: "getFormattedTime",
          value: function getFormattedTime() {
            var day = new Date();
            this.todayDate = this.pipe.transform(day, 'yyyy-MM-dd');
            ;
            this.currentTime = {
              hours: day.getHours(),
              minutes: day.getMinutes(),
              seconds: day.getSeconds()
            };
            this.formattedTime = "".concat(this.currentTime.hours.toString().padStart(2, '0'), ":") + "".concat(this.currentTime.minutes.toString().padStart(2, '0'), ":") + "".concat(this.currentTime.seconds.toString().padStart(2, '0'));

            if (this.formattedTime) {
              var data = this.formattedTime - this.startTime;
              var diff = moment__WEBPACK_IMPORTED_MODULE_9___default()(this.formattedTime, 'HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_9___default()(this.startTime, 'HH:mm:ss'));
              var d = moment__WEBPACK_IMPORTED_MODULE_9___default().duration(diff);
              var hours = Math.floor(d.asHours());
              var minutes = moment__WEBPACK_IMPORTED_MODULE_9___default().utc(diff).format("mm");
              var sec = moment__WEBPACK_IMPORTED_MODULE_9___default().utc(diff).format("ss");
              this.durationCal = hours + ":" + minutes + ":" + sec;
              console.log(this.durationCal, "iiii");
            }

            this.getLatLong();
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.options = {
                maximumAge: 3000,
                enableHighAccuracy: true
              };

              _this5.geolocation.getCurrentPosition(_this5.options).then(function (pos) {
                _this5.currentPos = pos;
                var location = {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                  time: new Date()
                };
                _this5.lat = location.lat;
                _this5["long"] = location.lng;
                resolve(pos);
              }, function (err) {
                reject(err.message);
              });
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/cwsn/tracking-studetails"]);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this6 = this;

            if (this.form.value.trackQue1 == '' && this.form.value.trackQue2 == '' && this.form.value.trackQue3 == '') {
              this.alertService.error('Please enter anyone of the fields');
            } else {
              if (this.currNetWrkSts == 0) {
                this.dataobj = [];
                var obj = {
                  IndxId: "",
                  SchlId: this.studentdetail.school_id,
                  StdntId: this.studentdetail.id,
                  DisableType: this.studentdetail.differently_abled,
                  ScrnDate: this.todayDate,
                  BeforePhoto: this.beforeImg,
                  BeforeLong: this.prev_long,
                  BeforeLati: this.prev_lat,
                  AfterPhoto: this.cameraKey,
                  AfterLong: this.lat,
                  AftereLati: this["long"],
                  StartTime: this.startTime,
                  EndTime: this.formattedTime,
                  Duration: this.durationCal,
                  Ques1: this.form.value.trackQue1,
                  Ques2: this.form.value.trackQue2,
                  Ques3: this.form.value.trackQue3
                }; // if(this.imageData != '' && this.imageData != null && this.imageData != undefined){

                this.dataobj.push(obj);
                var data = {
                  "records": this.dataobj
                };
                this.cwsnService.trackingQues(data).subscribe(function (data) {
                  if (data.dataStatus == true) {
                    _this6.alertService.success(data.message);

                    _this6.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                  } else {
                    _this6.alertService.error(data.message);
                  }
                }); // }
                // else{
                //   this.alertService.error('Please Take Photo Its Required')
                // }
              } else {
                this.studentList = [];
                this.ionicstorage.getData('studentlistGet').then(function (dataa1) {
                  if (dataa1) {
                    _this6.studentList = dataa1;

                    if (_this6.studentList.length > 0) {
                      var indx = _this6.studentList.length + 1;
                      var _obj = {
                        id: _this6.studentdetail.id,
                        school_id: _this6.studentdetail.school_id,
                        user_id: _this6.studentdetail.user_id,
                        differently_abled: _this6.studentdetail.differently_abled,
                        screening_date: _this6.todayDate,
                        before_screening_photo: _this6.beforeImglocal,
                        longitude_before_screening: "",
                        latitude_before_screening: "",
                        after_screening_photo: _this6.afterphoto,
                        longitude_after_screening: "",
                        latitude_after_screening: "",
                        start_time: _this6.startTime,
                        end_time: _this6.formattedTime,
                        duration_intervention: _this6.durationCal,
                        question1: _this6.form.value.trackQue1,
                        question2: _this6.form.value.trackQue2,
                        question3: _this6.form.value.trackQue3,
                        school_name: _this6.studentdetail.school_name,
                        school_type_id: _this6.studentdetail.school_type_id,
                        udise_code: _this6.studentdetail.udise_code,
                        Status: 2
                      }; // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){

                      _this6.studentList.push(_obj);

                      _this6.ionicstorage.insertData_Replace('studentlistGet', _this6.studentList);

                      console.log(_this6.studentList, "finn");

                      _this6.alertService.success('Data Stored Locally');

                      _this6.router.navigate(["/tabs/cwsn/tracking-school-list"]); // }
                      // else{
                      //   this.alertService.error('Please Take Photo Its Required')
                      // }

                    } else {
                      var _obj2 = {
                        id: _this6.studentdetail.id,
                        school_id: _this6.studentdetail.school_id,
                        user_id: _this6.studentdetail.user_id,
                        differently_abled: _this6.studentdetail.differently_abled,
                        screening_date: _this6.todayDate,
                        before_screening_photo: _this6.beforeImglocal,
                        longitude_before_screening: "",
                        latitude_before_screening: "",
                        after_screening_photo: _this6.afterphoto,
                        longitude_after_screening: "",
                        latitude_after_screening: "",
                        start_time: _this6.startTime,
                        end_time: _this6.formattedTime,
                        duration_intervention: _this6.durationCal,
                        question1: _this6.form.value.trackQue1,
                        question2: _this6.form.value.trackQue2,
                        question3: _this6.form.value.trackQue3,
                        school_name: _this6.studentdetail.school_name,
                        school_type_id: _this6.studentdetail.school_type_id,
                        udise_code: _this6.studentdetail.udise_code,
                        Status: 2
                      }; // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){

                      _this6.studentList.push(_obj2);

                      _this6.ionicstorage.insertData_Replace('studentlistGet', _this6.studentList);

                      console.log(_this6.studentList, "finn2");

                      _this6.alertService.success('Data Stored Locally');

                      _this6.router.navigate(["/tabs/cwsn/tracking-school-list"]); // }
                      // else{
                      //   this.alertService.error('Please Take Photo Its Required')
                      // }

                    }
                  } else {
                    var _obj3 = {
                      id: _this6.studentdetail.id,
                      school_id: _this6.studentdetail.school_id,
                      user_id: _this6.studentdetail.user_id,
                      differently_abled: _this6.studentdetail.differently_abled,
                      screening_date: _this6.todayDate,
                      before_screening_photo: _this6.beforeImglocal,
                      longitude_before_screening: "",
                      latitude_before_screening: "",
                      after_screening_photo: _this6.afterphoto,
                      longitude_after_screening: "",
                      latitude_after_screening: "",
                      start_time: _this6.startTime,
                      end_time: _this6.formattedTime,
                      duration_intervention: _this6.durationCal,
                      question1: _this6.form.value.trackQue1,
                      question2: _this6.form.value.trackQue2,
                      question3: _this6.form.value.trackQue3,
                      school_name: _this6.studentdetail.school_name,
                      school_type_id: _this6.studentdetail.school_type_id,
                      udise_code: _this6.studentdetail.udise_code,
                      Status: 2
                    }; // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){

                    _this6.studentList.push(_obj3);

                    _this6.ionicstorage.insertData_Replace('studentlistGet', _this6.studentList);

                    console.log(_this6.studentList, "finn2");

                    _this6.alertService.success('Data Stored Locally');

                    _this6.router.navigate(["/tabs/cwsn/tracking-school-list"]); // }
                    // else{
                    //   this.alertService.error('Please Take Photo Its Required')
                    // }

                  }
                });
              }
            }
          }
        }]);
      }();

      _TrackingQuestionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_8__.CWSNService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__.Geolocation
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_11__.IonicStorageService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService
        }];
      };

      _TrackingQuestionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-tracking-question',
        template: _raw_loader_tracking_question_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tracking_question_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TrackingQuestionPage);
      /***/
    },

    /***/
    11557:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-question/tracking-question.page.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  width: 90%;\n  margin-left: 20px;\n  border-radius: 20px;\n}\n\n.content {\n  font-size: smaller;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group {\n  padding: -1px 10px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.number {\n  margin-top: 20px;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n\n.text {\n  font-size: small;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  padding: 10px;\n  background: var(--seconday-color-change);\n  margin-inline: 0px;\n  border-radius: 10px;\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .class, .card-align .section {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .class .class__value, .card-align .section .section__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.backGround {\n  background-color: #f9f9f9;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXF1ZXN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFVBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQWNBO0VBQ0Usa0NBQUE7QUFYRjs7QUFjQTtFQUNFLCtCQUFBO0FBWEY7O0FBY0E7RUFDRSx3Q0FBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWNBO0VBQ0ksMkNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0E1Q1M7RUE2Q1QsaUJBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWdCQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtBQWJKOztBQWdCRTtFQUNFLGlCQUFBO0FBZEo7O0FBc0JBO0VBQ0UsNEJBQUE7QUFuQkY7O0FBMkJJO0VBQ0UsY0FBQTtFQUNBLGdCQXpFTztFQTBFUCxnQ0E3RU87QUFxRGI7O0FBZ0NLO0VBQ0UsY0FBQTtFQUNBLGdCQXBGTTtFQXFGTixnQ0FBQTtBQTlCUDs7QUF5Q0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUF2Q047O0FBd0NNO0VBQ0UsZ0JBdEdLO0VBdUdMLGdDQTFHSztBQW9FYjs7QUF3Q007RUFFRSxnQ0E5R0s7QUF1RWI7O0FBMkNJO0VBQ0UscUJBQUE7QUF6Q047O0FBMENNO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBeENSOztBQXlDUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQXZDVjs7QUE2Q0U7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQTFDSjs7QUE2Q0U7RUFDRSwwQ0FBQTtFQUNBLDhDQUFBO0FBMUNKOztBQTRDQTtFQUNJLGdCQUFBO0FBekNKOztBQTJDQTtFQUVFLFlBQUE7RUFDQSxVQUFBO0FBekNGOztBQTJDQTtFQUNFLGdCQUFBO0FBeENGOztBQW1EQTtFQUNFLGtDQUFBO0FBaERGOztBQW1EQTtFQUNFLCtCQUFBO0FBaERGOztBQW1EQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFoREY7O0FBb0RBO0VBQ0UsVUFBQTtBQWpERjs7QUFvREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFqREY7O0FBb0RBO0VBQ0UsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBakRGOztBQW9EQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWpERjs7QUFvREE7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQWhEUztFQWlEVCxpQkFBQTtFQUNBLGlCQUFBO0FBakRKOztBQXNEQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtBQW5ESjs7QUFxREU7RUFDRSxpQkFBQTtBQW5ESjs7QUF3REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFyREo7O0FBdURFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFyREo7O0FBd0RFO0VBR0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQXhESjs7QUE2REE7RUFDRSw0QkFBQTtBQTFERjs7QUFtRUk7RUFDRSxjQUFBO0VBQ0EsZ0JBaEdPO0VBaUdQLGdDQXBHTztBQW9DYjs7QUF3RUs7RUFDRSxjQUFBO0VBQ0EsZ0JBM0dNO0VBNEdOLGdDQUFBO0FBdEVQOztBQWlGSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQS9FTjs7QUFnRk07RUFDRSxnQkE3SEs7RUE4SEwsZ0NBaklLO0FBbURiOztBQWdGTTtFQUVFLGdDQXJJSztBQXNEYjs7QUFtRkk7RUFDRSxxQkFBQTtBQWpGTjs7QUFrRk07RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFoRlI7O0FBaUZRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBL0VWOztBQXFGRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBbEZKOztBQXFGRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFsRko7O0FBb0ZFO0VBQ0UseUJBQUE7QUFqRko7O0FBbUZFO0VBRUUsWUFBQTtFQUNBLFVBQUE7QUFqRkoiLCJmaWxlIjoidHJhY2tpbmctcXVlc3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcclxue1xyXG4gICAgLy8gaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHggO1xyXG5cclxufVxyXG4uY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gdmFyaWFibGVzXHJcblxyXG4kdGV4dC1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuJGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuJGFycm93LWljb24tY29sb3I6dmFyKC0taWNvbi1jb2xvcik7XHJcbiRmb250LXdlaWdodDo1MDA7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiVjYXJkLWxheW91dHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG5cclxuJWxhYmVsLWRlc2lnbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWRlc2lnbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWdue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcblxyXG4vLyBoZWFkZXJcclxuLnRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5wYWdlLXRpdGxle1xyXG4gIH1cclxuICAuc3R1TmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAgaW9uLWlucHV0IHBhZGRpbmdcclxuLnBhZGRpbmctbGVmdHtcclxuICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIC8vIGNsYXNzIGFuZCBzZWN0aW9uXHJcbiAgLmNhcmQtYWxpZ24ge1xyXG4gICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgLmNsYXNze1xyXG4gICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi1kZXNpZ247XHJcbiAgICAuY2xhc3MtdGl0bGV7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xyXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICB9XHJcbiAgICAuY2xhc3NfX3ZhbHVle1xyXG4gICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWduO1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5zZWN0aW9ue1xyXG4gICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tZGVzaWduO1xyXG4gICAgIC5zZWN0aW9uLXRpdGxle1xyXG4gICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xyXG4gICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgfVxyXG4gICAgIC5zZWN0aW9uX192YWx1ZXtcclxuICAgICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWduO1xyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxuICAvLyBmb3JtXHJcbiAgLmZvcm17XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgIHBhZGRpbmc6IC0xcHggMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAuZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVle1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLmN1c3RvbUljb25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHggMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ubnVtYmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW1hZ2Vcclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDo5MCU7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuXHJcbi8vIHZhcmlhYmxlc1xyXG5cclxuJHRleHQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRhcnJvdy1pY29uLWNvbG9yOnZhcigtLWljb24tY29sb3IpO1xyXG4kZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBtYXJnaW4taW5saW5lOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIFxyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbiVsYWJlbC1kZXNpZ257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1kZXNpZ257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG5cclxuLy8gaGVhZGVyXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIFxyXG4gIC5zdHVOYW1le1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc2NyZWVuLWRhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZDtcclxuICAudGV4dC1jb2xvcntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tcHJpbWFyeSk7XHJcbiAgfVxyXG4gIC5kYXRlcGlja2Vye1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiB9XHJcblxyXG4vLyAgaW9uLWlucHV0IHBhZGRpbmdcclxuLnBhZGRpbmctbGVmdHtcclxuICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuICAvLyBjbGFzcyBhbmQgc2VjdGlvblxyXG4gIC5jYXJkLWFsaWduIHtcclxuICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgIC5jbGFzc3tcclxuICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tZGVzaWduO1xyXG4gICAgLmNsYXNzLXRpdGxle1xyXG4gICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLmNsYXNzX192YWx1ZXtcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgIH1cclxuICAgfVxyXG4gICAuc2VjdGlvbntcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgICAuc2VjdGlvbi10aXRsZXtcclxuICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgIH1cclxuICAgICAuc2VjdGlvbl9fdmFsdWV7XHJcbiAgICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgLy8gZm9ybVxyXG4gIC5mb3Jte1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAuZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVle1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLmN1c3RvbUljb25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHggMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iYWNrR3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwyNDksMjQ5KTtcclxuICB9XHJcbiAgLmltYWdlXHJcbiAge1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */";
      /***/
    },

    /***/
    15504:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-question/tracking-question.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n   \r\n      <ion-title class=\"pt-15\">{{studentdetail.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-card class=\"card\">\r\n  <ion-card-content class=\"content\">\r\n    <!-- <div  class=\"label\">\r\n    <ion-label><b>Intervention given during visit:</b></ion-label>\r\n  </div> -->\r\n    <form class=\"form\" [formGroup]=\"form\">\r\n      <div class=\"form-group form-groupBtn\"> \r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\" style=\"margin-left: -50%;\">Intervention given during visit</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n       </div>\r\n     <div class=\"form-group\">\r\n        <ion-row>\r\n        <ion-col size=\"0.5\" class=\"number\">\r\n        <ion-label class=\"form-group__title\">1</ion-label>\r\n        </ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue1\" maxlemgth=\"50\"></ion-input>\r\n        <!-- <p class=\"error-message\" style=\"color: red;\"\r\n        *ngIf=\"(form.controls['trackQue1'].hasError('pattern')) && (submitted || form.controls['trackQue1'].dirty || form.controls['trackQue1'].touched)\">\r\n         pattern required </p> -->\r\n      </ion-col>\r\n      </ion-row>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"0.5\" class=\"number\">\r\n          <ion-label class=\"form-group__title\">2</ion-label>\r\n          </ion-col>\r\n        <ion-col size=\"10\">\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue2\"  maxlemgth=\"50\"></ion-input>\r\n          <!-- <p class=\"error-message\" style=\"color: red;\"\r\n          *ngIf=\"(form.controls['trackQue2'].hasError('pattern')) && (submitted || form.controls['trackQue2'].dirty || form.controls['trackQue2'].touched)\">\r\n           pattern required </p> -->\r\n        </ion-col>\r\n        </ion-row>\r\n    </div>\r\n      <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"0.5\" class=\"number\" >\r\n          <ion-label class=\"form-group__title\">3</ion-label>\r\n          </ion-col>\r\n        <ion-col size=\"10\">\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue3\"  maxlemgth=\"50\" ></ion-input>\r\n           <!-- <p class=\"error-message\" style=\"color: red;\"\r\n          *ngIf=\"(form.controls['trackQue3'].hasError('pattern')) && (submitted || form.controls['trackQue3'].dirty || form.controls['trackQue3'].touched)\">\r\n           pattern required </p> -->\r\n        </ion-col>\r\n        </ion-row>\r\n      </div>\r\n   \r\n        <!-- <div class=\"mt-3 text-center pb-3\">\r\n            <ion-button  class=\"btn_lightRed border-0 rounded-0\" (click)=\"openCameraOn()\">Take photo</ion-button>\r\n       </div> -->\r\n\r\n       <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Visited date</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{todayDate | date: 'dd/MM/yyyy'}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Start time</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{startTime}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">End time</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{formattedTime}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Duration</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{durationCal}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n       <div class=\"form-group\">\r\n        <ion-row>\r\n          <!-- <ion-col size=\"5\" class=\"image\">\r\n            <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" >\r\n      </ion-col> -->\r\n      <!-- <ion-col size=\"7\" class=\"text\">\r\n        <div >\r\n       <ion-label>Visited date:{{todayDate }}</ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-label>Start time  :{{startTime}}</ion-label>\r\n       </div>\r\n      <div>\r\n       <ion-label>End time     :{{formattedTime}}</ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-label>Duration    :{{durationCal}}</ion-label>\r\n       </div>\r\n      </ion-col> -->\r\n      </ion-row>\r\n        </div>\r\n   \r\n   </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n<div class=\"mt-5 text-center pb-3\">\r\n  <ion-button  class=\"btn_lightRed border-0 rounded-0\" (click)=\"submit()\">submit</ion-button>\r\n </div>\r\n</ion-content>\r\n ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_tracking-question_tracking-question_module_ts-es5.js.map