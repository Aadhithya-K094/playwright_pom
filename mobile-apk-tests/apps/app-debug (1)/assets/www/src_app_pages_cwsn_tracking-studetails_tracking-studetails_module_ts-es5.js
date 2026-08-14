(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-studetails_tracking-studetails_module_ts"], {
    /***/
    48674:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails-routing.module.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStudetailsPageRoutingModule": function TrackingStudetailsPageRoutingModule() {
          return (
            /* binding */
            _TrackingStudetailsPageRoutingModule
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


      var _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-studetails.page */
      201);

      var routes = [{
        path: '',
        component: _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_0__.TrackingStudetailsPage
      }];

      var _TrackingStudetailsPageRoutingModule = /*#__PURE__*/_createClass(function TrackingStudetailsPageRoutingModule() {
        _classCallCheck(this, TrackingStudetailsPageRoutingModule);
      });

      _TrackingStudetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TrackingStudetailsPageRoutingModule);
      /***/
    },

    /***/
    96846:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStudetailsPageModule": function TrackingStudetailsPageModule() {
          return (
            /* binding */
            _TrackingStudetailsPageModule
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


      var _tracking_studetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-studetails-routing.module */
      48674);
      /* harmony import */


      var _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-studetails.page */
      201);

      var _TrackingStudetailsPageModule = /*#__PURE__*/_createClass(function TrackingStudetailsPageModule() {
        _classCallCheck(this, TrackingStudetailsPageModule);
      });

      _TrackingStudetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tracking_studetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingStudetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_tracking_studetails_page__WEBPACK_IMPORTED_MODULE_1__.TrackingStudetailsPage]
      })], _TrackingStudetailsPageModule);
      /***/
    },

    /***/
    201:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStudetailsPage": function TrackingStudetailsPage() {
          return (
            /* binding */
            _TrackingStudetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_tracking_studetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tracking-studetails.page.html */
      6436);
      /* harmony import */


      var _tracking_studetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-studetails.page.scss */
      94777);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);

      var _TrackingStudetailsPage = /*#__PURE__*/function () {
        function TrackingStudetailsPage(router, formBuilder, platform, modalCtrl, activatedRoute, uploadService, camera, alertService, file, networkService, ionicstorage, sqliteDB, geolocation) {
          _classCallCheck(this, TrackingStudetailsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.modalCtrl = modalCtrl;
          this.activatedRoute = activatedRoute;
          this.uploadService = uploadService;
          this.camera = camera;
          this.alertService = alertService;
          this.file = file;
          this.networkService = networkService;
          this.ionicstorage = ionicstorage;
          this.sqliteDB = sqliteDB;
          this.geolocation = geolocation;
          this.studentdetail = [];
          this.imageData = "";
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe('en-US');
          this.getDetails = [];
          this.getFormattedTime();
        }

        return _createClass(TrackingStudetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this.studentdetail = JSON.parse(params['studentdata']);
              _this.getDetails = JSON.parse(params['getListDetails']);
              console.log(_this.getDetails, "this.getDetails", _this.studentdetail);
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
              _this2.getDetails = JSON.parse(params['getListDetails']);
              console.log(_this2.getDetails, "this.getDetails", _this2.studentdetail);
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.options = {
                maximumAge: 3000,
                enableHighAccuracy: true
              };

              _this3.geolocation.getCurrentPosition(_this3.options).then(function (pos) {
                _this3.currentPos = pos;
                var location = {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                  time: new Date()
                };
                _this3.lat = location.lat;
                _this3["long"] = location.lng;
                resolve(pos);
              }, function (err) {
                reject(err.message);
              });
            });
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn() {
            var _this4 = this;

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
              _this4.camera.getPicture(options).then(function (imageData) {
                var bucketName = "renewalapplicationemis";
                var expiry = 300;
                var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");

                _this4.file.readAsDataURL(imagename, filename).then(function (base64string) {
                  if (base64string) {
                    var base = base64string.split('base64,');
                    var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_6__.base64StringToBlob)(base[1], 'image/jpg');

                    if (blob.size <= 3145728) {
                      if (_this4.currNetWrkSts == 0) {
                        _this4.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                          if (result) {
                            _this4.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                              _this4.cameraKey = result.key;

                              _this4.viewPic('show', base64string);

                              _this4.alertService.success('File Uploaded Successfully');
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
                        _this4.imageData = base;
                        _this4.test = obj;
                        _this4.beforephoto = base64string;

                        _this4.ionicstorage.insertData_Replace('beforephotolol', base64string);

                        _this4.viewPic('show', base64string);
                      }
                    } else {
                      _this4.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
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
            var _this5 = this;

            if (this.currNetWrkSts == 0) {
              var bucketName = "renewalapplicationemis";
              var filename = this.cameraKey;
              var expiry = 1800;
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

                        this.imageData = result.url;

                        if (this.currNetWrkSts == 0) {
                          this.getFormattedTime();
                        }

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
            this.todayDate = this.pipe.transform(day, 'dd/MM/yyyy');
            ;
            this.currentTime = {
              hours: day.getHours(),
              minutes: day.getMinutes(),
              seconds: day.getSeconds()
            };
            this.formattedTime = "".concat(this.currentTime.hours.toString().padStart(2, '0'), ":") + "".concat(this.currentTime.minutes.toString().padStart(2, '0'), ":") + "".concat(this.currentTime.seconds.toString().padStart(2, '0'));
            this.getLatLong();
          }
        }, {
          key: "validateFields",
          value: function validateFields() {
            return this.imageData !== '' && this.imageData !== null && this.imageData !== undefined && this.todayDate !== '' && this.todayDate !== null && this.todayDate !== undefined && this.formattedTime !== '' && this.formattedTime !== null && this.formattedTime !== undefined;
          }
        }, {
          key: "question",
          value: function question() {
            var _this6 = this;

            if (this.currNetWrkSts == 0) {
              // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
              this.router.navigate(["/tabs/cwsn/tracking-question"], {
                queryParams: {
                  'studentdata': JSON.stringify(this.studentdetail),
                  'startTime': JSON.stringify(this.formattedTime),
                  'getdetails': JSON.stringify(this.getDetails),
                  // 'beforeImage':JSON.stringify(this.cameraKey),
                  'prev_lat': this.lat,
                  'prev_long': this["long"]
                }
              }); // }
              // else{
              //   this.alertService.error('Please Take Photo Its Required');
              // }
            } else {
              this.notAllow = false;
              this.ionicstorage.getData('studentlistGet').then(function (dataa1) {
                if (dataa1) {
                  _this6.studentchk = dataa1;
                  var day = new Date();
                  _this6.todayDate = _this6.pipe.transform(day, 'yyyy-MM-dd');

                  if (_this6.studentchk.length > 0) {
                    for (var i = 0; i < _this6.studentchk.length; i++) {
                      if (_this6.studentchk[i].id == _this6.studentdetail.id && _this6.studentchk[i].screening_date == _this6.todayDate) {
                        _this6.notAllow = true;
                      }
                    }

                    if (_this6.notAllow == true) {
                      _this6.alertService.error('Already Exists For This Date');
                    } else {
                      // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
                      _this6.router.navigate(["/tabs/cwsn/tracking-question"], {
                        queryParams: {
                          'studentdata': JSON.stringify(_this6.studentdetail),
                          'startTime': JSON.stringify(_this6.formattedTime),
                          'getdetails': JSON.stringify(_this6.getDetails),
                          // 'beforeImage':JSON.stringify(this.cameraKey),
                          'prev_lat': _this6.lat,
                          'prev_long': _this6["long"]
                        }
                      }); // }
                      // else{
                      //   this.alertService.error('Please Take Photo Its Required');
                      // }

                    }
                  }

                  console.log(_this6.studentdetail.id, "oppo");
                  console.log(_this6.studentchk, "chk daa", _this6.todayDate);
                } else {
                  // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
                  _this6.router.navigate(["/tabs/cwsn/tracking-question"], {
                    queryParams: {
                      'studentdata': JSON.stringify(_this6.studentdetail),
                      'startTime': JSON.stringify(_this6.formattedTime),
                      'getdetails': JSON.stringify(_this6.getDetails),
                      // 'beforeImage':JSON.stringify(this.cameraKey),
                      'prev_lat': _this6.lat,
                      'prev_long': _this6["long"]
                    }
                  }); // }
                  // else{
                  //   this.alertService.error('Please Take Photo Its Required');
                  // }

                }
              });
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/cwsn/tracking-stulist"]);
          }
        }]);
      }();

      _TrackingStudetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation
        }];
      };

      _TrackingStudetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-tracking-studetails',
        template: _raw_loader_tracking_studetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tracking_studetails_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TrackingStudetailsPage);
      /***/
    },

    /***/
    94777:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.scss ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  padding: 10px;\n  background: var(--seconday-color-change);\n  margin-inline: 0px;\n  border-radius: 10px;\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.backGround {\n  background-color: #f9f9f9;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXN0dWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0Usa0NBQUE7QUFORjs7QUFTQTtFQUNFLCtCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBVUE7RUFDRSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUEY7O0FBVUE7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQWhEUztFQWlEVCxpQkFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBWUE7RUFDRSxhQUFBO0VBQ0Usc0JBQUE7QUFUSjs7QUFXRTtFQUNFLGlCQUFBO0FBVEo7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBY0U7RUFHRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZEo7O0FBbUJBO0VBQ0UsNEJBQUE7QUFoQkY7O0FBeUJJO0VBQ0UsY0FBQTtFQUNBLGdCQWhHTztFQWlHUCxnQ0FwR087QUE4RWI7O0FBOEJLO0VBQ0UsY0FBQTtFQUNBLGdCQTNHTTtFQTRHTixnQ0FBQTtBQTVCUDs7QUFvQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBbENKOztBQW1DSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWpDTjs7QUFrQ007RUFDRSxnQkE3SEs7RUE4SEwsZ0NBaklLO0FBaUdiOztBQWtDTTtFQUVFLGdDQXJJSztBQW9HYjs7QUFxQ0k7RUFDRSxxQkFBQTtBQW5DTjs7QUFvQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFsQ1I7O0FBbUNRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBakNWOztBQXVDRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBcENKOztBQXVDRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFwQ0o7O0FBc0NFO0VBQ0UseUJBQUE7QUFuQ0o7O0FBcUNFO0VBRUUsWUFBQTtFQUNBLFVBQUE7QUFuQ0oiLCJmaWxlIjoidHJhY2tpbmctc3R1ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXJpYWJsZXNcclxuXHJcbiR0ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4kYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4kYXJyb3ctaWNvbi1jb2xvcjp2YXIoLS1pY29uLWNvbG9yKTtcclxuJGZvbnQtd2VpZ2h0OjUwMDtcclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgbWFyZ2luLWlubGluZTogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiBcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuJWNhcmQtbGF5b3V0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxOHB4O1xyXG59XHJcblxyXG4lbGFiZWwtZGVzaWdue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tZGVzaWdue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuXHJcbi8vIGhlYWRlclxyXG4udGl0bGV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAuc3R1TmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNjcmVlbi1kYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgLnRleHQtY29sb3J7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLXByaW1hcnkpO1xyXG4gIH1cclxuICAuZGF0ZXBpY2tlcntcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgfVxyXG4gfVxyXG5cclxuLy8gIGlvbi1pbnB1dCBwYWRkaW5nXHJcbi5wYWRkaW5nLWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbiAgLy8gY2xhc3MgYW5kIHNlY3Rpb25cclxuICAuY2FyZC1hbGlnbiB7XHJcbiAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAuY2xhc3N7XHJcbiAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgIC5jbGFzcy10aXRsZXtcclxuICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIH1cclxuICAgIC5jbGFzc19fdmFsdWV7XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnNlY3Rpb257XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi1kZXNpZ247XHJcbiAgICAgLnNlY3Rpb24tdGl0bGV7XHJcbiAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICB9XHJcbiAgICAgLnNlY3Rpb25fX3ZhbHVle1xyXG4gICAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG4gIC8vIGZvcm1cclxuICAuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLmZvcm0tZ3JvdXBfX3RpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWdyb3VwX192YWx1ZXtcclxuICAgICAgICBAZXh0ZW5kICVsYWJlbC1kZXNpZ247XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAuaWNvbi1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgICAgIC5hcnJvdy1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5jdXN0b21JY29uQmcge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDBweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmFja0dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksMjQ5LDI0OSk7XHJcbiAgfVxyXG4gIC5pbWFnZVxyXG4gIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiJdfQ== */";
      /***/
    },

    /***/
    6436:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studentdetail.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n \r\n  <ion-content>\r\n    <!-- <ion-grid> -->\r\n      <ion-card class=\"card-align form\">\r\n        <div class=\"form-group form-groupBtn\"> </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">EMIS ID</ion-label>\r\n \r\n          <ion-card class=\"backGround\">\r\n            <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.id}}</ion-label>\r\n          </ion-card>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"form-group__title\">Class</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.class_studying_id}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"form-group__title\">Section</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.class_section}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">Disability Type</ion-label>\r\n \r\n          <ion-card class=\"backGround\">\r\n            <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.da_name}}</ion-label>\r\n          </ion-card>\r\n        </div>\r\n        <!-- <div class=\"mt-3 text-center pb-3\">\r\n          <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"openCameraOn()\">Take photo</ion-button>\r\n        </div> -->\r\n\r\n        <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-label class=\"form-group__title\">Visited date</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{todayDate }}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-label class=\"form-group__title\">Start time</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{formattedTime}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n       \r\n         <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"5\" class=\"image\">\r\n              <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" >\r\n            </ion-col>\r\n            <!-- <ion-col size=\"7\">\r\n              <div>\r\n               <ion-label>Visited date:{{todayDate }}</ion-label>\r\n            </div>\r\n              <div>\r\n                <ion-label >Start time  :{{formattedTime}}</ion-label>\r\n              </div>\r\n            </ion-col> -->\r\n          </ion-row>\r\n         </div>\r\n      </ion-card>\r\n      <div class=\"mt-5 text-center pb-3\">\r\n        <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"question()\">Next</ion-button>\r\n\r\n        <!-- [disabled]=\"!validateFields()\" -->\r\n      </div>\r\n \r\n    <!-- </ion-grid> -->\r\n  </ion-content>\r\n \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_tracking-studetails_tracking-studetails_module_ts-es5.js.map