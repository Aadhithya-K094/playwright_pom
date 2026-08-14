(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_olirum-vagupparai_olirum-vagupparai_module_ts"], {
    /***/
    23657:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlirumVagupparaiPageRoutingModule": function OlirumVagupparaiPageRoutingModule() {
          return (
            /* binding */
            _OlirumVagupparaiPageRoutingModule
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


      var _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./olirum-vagupparai.page */
      80784);

      var routes = [{
        path: '',
        component: _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_0__.OlirumVagupparaiPage
      }];

      var _OlirumVagupparaiPageRoutingModule = /*#__PURE__*/_createClass(function OlirumVagupparaiPageRoutingModule() {
        _classCallCheck(this, OlirumVagupparaiPageRoutingModule);
      });

      _OlirumVagupparaiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OlirumVagupparaiPageRoutingModule);
      /***/
    },

    /***/
    58468:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlirumVagupparaiPageModule": function OlirumVagupparaiPageModule() {
          return (
            /* binding */
            _OlirumVagupparaiPageModule
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


      var _olirum_vagupparai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./olirum-vagupparai-routing.module */
      23657);
      /* harmony import */


      var _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./olirum-vagupparai.page */
      80784);

      var _OlirumVagupparaiPageModule = /*#__PURE__*/_createClass(function OlirumVagupparaiPageModule() {
        _classCallCheck(this, OlirumVagupparaiPageModule);
      });

      _OlirumVagupparaiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _olirum_vagupparai_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlirumVagupparaiPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_1__.OlirumVagupparaiPage]
      })], _OlirumVagupparaiPageModule);
      /***/
    },

    /***/
    80784:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlirumVagupparaiPage": function OlirumVagupparaiPage() {
          return (
            /* binding */
            _OlirumVagupparaiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_olirum_vagupparai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./olirum-vagupparai.page.html */
      68218);
      /* harmony import */


      var _olirum_vagupparai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./olirum-vagupparai.page.scss */
      73634);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/json.service */
      77232);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */
      90110);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);

      var _OlirumVagupparaiPage = /*#__PURE__*/function () {
        function OlirumVagupparaiPage(fb, alertService, geolocation, loader, usersessionService, networkService, emisService, modalCtrl, camera, sqlLite, file, jsonService, router, sidsService) {
          _classCallCheck(this, OlirumVagupparaiPage);

          this.fb = fb;
          this.alertService = alertService;
          this.geolocation = geolocation;
          this.loader = loader;
          this.usersessionService = usersessionService;
          this.networkService = networkService;
          this.emisService = emisService;
          this.modalCtrl = modalCtrl;
          this.camera = camera;
          this.sqlLite = sqlLite;
          this.file = file;
          this.jsonService = jsonService;
          this.router = router;
          this.sidsService = sidsService;
          this.schoolList = [];
          this.getSchool = [];
        }

        return _createClass(OlirumVagupparaiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              "PhotoUpload1": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "PhotoUploadName1": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
              "PhotoUpload2": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "PhotoUploadName2": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "PhotoUpload3": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "PhotoUploadName3": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
              "Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.emis_username = this.usersessionService.emis_username();
            this.generalServerData(); // this.getSchoolList();
          }
        }, {
          key: "generalServerData",
          value: function generalServerData() {
            var _this = this;

            this.loader.presentLoading();
            var query = 'SELECT * FROM OlirumVaguparai';
            return this.sqlLite.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.schoolList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.schoolList.push(data.rows.item(i));
                }

                console.log("schoolList", _this.schoolList);
              } else {
                _this.getSchoolList();
              }
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this2 = this;

            this.loader.presentLoading();
            this.jsonService.SchoolList().subscribe(function (res) {
              if (res[0].udise_skl_det) {
                _this2.schoolList = [];
                _this2.schoolList = res[0].udise_skl_det; // console.log("schoolList",this.schoolList);

                var query = 'DELETE FROM OlirumVaguparai';

                _this2.sqlLite.getDataLocalDB(query).then(function (data) {
                  // const dataList = "INSERT INTO OlirumVaguparai VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                  // this.schoolList.forEach(element => {
                  //   this.sqlLite.insert(dataList, [null, element.SclId, element.SclNam, element.Udise, "", "", "1", "", "", "1", "", "", "1", "", "", "", "1"])
                  // })
                  var sqlArray = [];

                  _this2.schoolList.forEach(function (element) {
                    sqlArray.push(['INSERT INTO OlirumVaguparai VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.SclId, element.SclNam, element.Udise, _this2.emis_username, "", "", "1", "", "", "1", "", "", "1", "", "", "", "1"]]);
                  });

                  _this2.sqlLite.bulkInsert(sqlArray).then(function (insertres) {
                    _this2.loader.dismissLoader();
                  });
                });
              } else {
                _this2.loader.dismissLoader();
              }
            });
          }
        }, {
          key: "searchUdise",
          value: function searchUdise() {
            var _this3 = this;

            debugger;
            this.getSchool = [];
            this.getSchool = this.schoolList.find(function (x) {
              return x.Udise == _this3.udiseCode;
            });
            this.initialValidator();

            if (this.getSchool) {
              this.formOpen = true;

              if (this.getSchool.PhotoUpload1) {
                this.form.controls['PhotoUpload1'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload1);
                this.form.controls['PhotoUploadName1'].setValue(this.getSchool.PhotoUploadName1);
              }

              if (this.getSchool.PhotoUpload2) {
                this.form.controls['PhotoUpload2'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload2);
                this.form.controls['PhotoUploadName2'].setValue(this.getSchool.PhotoUploadName2);
              }

              if (this.getSchool.PhotoUpload3) {
                this.form.controls['PhotoUpload3'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload3);
                this.form.controls['PhotoUploadName3'].setValue(this.getSchool.PhotoUploadName3);
              }

              if (this.getSchool.Remarks) {
                this.form.controls['Remarks'].setValue(this.getSchool.Remarks);
              }

              if (!this.getSchool.PhotoUploadName1 || !this.getSchool.PhotoUploadName2 || !this.getSchool.PhotoUploadName3) {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                  this.apiDataGet(this.getSchool.SclId, this.emis_username);
                }
              }
            } else {
              this.formOpen = false;
              this.alertService.error("Enter Correct UDISE Code");
            }
          }
        }, {
          key: "apiDataGet",
          value: function apiDataGet(schlId, ObsrvId) {
            var _this4 = this;

            this.emisService.PPOlirumVagupariGet(schlId, ObsrvId).subscribe(function (res) {
              if (res.status == 200 && res.dataStatus == true) {
                var getData = res.result[0];
                _this4.getIndexId = res.result[0].IndxId;

                if (!_this4.getSchool.PhotoUploadName1) {
                  if (getData.BeforePaint) {
                    _this4.form.controls['PhotoUpload1'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.BeforePaint);

                    _this4.form.controls['PhotoUploadName1'].setValue(getData.BeforePaint);
                  }
                }

                if (!_this4.getSchool.PhotoUploadName2) {
                  if (getData.PaintOnProcess) {
                    _this4.form.controls['PhotoUpload2'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.PaintOnProcess);

                    _this4.form.controls['PhotoUploadName2'].setValue(getData.PaintOnProcess);
                  }
                }

                if (!_this4.getSchool.PhotoUploadName2) {
                  if (getData.AfterPaint) {
                    _this4.form.controls['PhotoUpload3'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.AfterPaint);

                    _this4.form.controls['PhotoUploadName3'].setValue(getData.AfterPaint);
                  }
                }

                _this4.form.controls['Remarks'].setValue(getData.Remarks);
              } else {// this.alertService.error(res.message);
              }
            });
          }
        }, {
          key: "openCamera",
          value: function openCamera(id) {
            var _this5 = this;

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
              var bucketName = "renewalapplicationemis";
              var expiry = 1800;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this5.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 10485760) {
                    if (id == 1) {
                      _this5.form.controls['PhotoUpload1'].setValue('data:image/jpeg;base64,' + base[1]);

                      _this5.form.controls['PhotoUploadName1'].setValue(filename);
                    }

                    if (id == 2) {
                      _this5.form.controls['PhotoUpload2'].setValue('data:image/jpeg;base64,' + base[1]);

                      _this5.form.controls['PhotoUploadName2'].setValue(filename);
                    }

                    if (id == 3) {
                      _this5.form.controls['PhotoUpload3'].setValue('data:image/jpeg;base64,' + base[1]);

                      _this5.form.controls['PhotoUploadName3'].setValue(filename);
                    }

                    _this5.getGeolocation();

                    var imgObj = {
                      "Photo": base[1],
                      "PhotoName": filename
                    }; // this.imageUpload(id, imgObj);

                    _this5.S3ImageSave(id, imgObj);
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
          key: "getGeolocation",
          value: function getGeolocation() {
            var _this6 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              // resp.coords.latitude and resp.coords.longitude are the latitude and longitude values
              var latitude = resp.coords.latitude;
              var longitude = resp.coords.longitude;
              _this6.offlinelat = latitude;
              _this6.offlinelone = longitude; // Now you can use latitude and longitude as needed

              console.log('this.offlinelone: ', _this6.offlinelat);
              console.log('this.offlinelone: ', _this6.offlinelone);
            })["catch"](function (error) {
              console.error('Error getting location', error);
            });
          }
        }, {
          key: "S3ImageSave",
          value: function S3ImageSave(id, imgObj) {
            var _this7 = this;

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              var s3ImgObj = {
                "records": imgObj
              };
              this.emisService.S3ImageSave(s3ImgObj).subscribe(function (res) {
                if (res.status == 200 && res.dataStatus == true) {
                  if (id == 1) {
                    var query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 3,PhotoUpload1 ="' + imgObj.Photo + '", PhotoUploadName1 ="' + imgObj.PhotoName + '"' + 'WHERE OlirumVaguparai.SclId = "' + _this7.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + _this7.getSchool.Udise + '"';
                    return _this7.sqlLite.update(query).then(function (data) {
                      _this7.alertService.success('File Uploaded Successfully');
                    });
                  }

                  if (id == 2) {
                    var _query = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 3, PhotoUpload2 ="' + imgObj.Photo + '", PhotoUploadName2 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + _this7.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + _this7.getSchool.Udise + '"';

                    return _this7.sqlLite.update(_query).then(function (data) {
                      _this7.alertService.success('File Uploaded Successfully');
                    });
                  }

                  if (id == 3) {
                    var _query2 = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 3, PhotoUpload3 ="' + imgObj.Photo + '", PhotoUploadName3 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + _this7.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + _this7.getSchool.Udise + '"';

                    return _this7.sqlLite.update(_query2).then(function (data) {
                      _this7.alertService.success('File Uploaded Successfully');
                    });
                  }

                  _this7.alertService.success('File Uploaded Successfully');
                } else {
                  _this7.imageUpload(id, imgObj);
                }
              });
            } else {
              this.imageUpload(id, imgObj);
            }
          }
        }, {
          key: "imageUpload",
          value: function imageUpload(id, imgObj) {
            var _this8 = this;

            debugger;

            if (id == 1) {
              var query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 2,PhotoUpload1 ="' + imgObj.Photo + '", PhotoUploadName1 ="' + imgObj.PhotoName + '"' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
              return this.sqlLite.update(query).then(function (data) {
                _this8.alertService.success('File Uploaded Successfully');
              });
            }

            if (id == 2) {
              var _query3 = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 2, PhotoUpload2 ="' + imgObj.Photo + '", PhotoUploadName2 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';

              return this.sqlLite.update(_query3).then(function (data) {
                _this8.alertService.success('File Uploaded Successfully');
              });
            }

            if (id == 3) {
              var _query4 = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 2, PhotoUpload3 ="' + imgObj.Photo + '", PhotoUploadName3 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';

              return this.sqlLite.update(_query4).then(function (data) {
                _this8.alertService.success('File Uploaded Successfully');
              });
            }
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(i) {
            var empty = "";

            if (i == 1) {
              this.form.controls['PhotoUpload1'].setValue("");
              this.form.controls['PhotoUploadName1'].setValue("");
              this.form.controls['PhotoUpload1'].updateValueAndValidity();
              this.form.controls['PhotoUploadName1'].updateValueAndValidity();
              var query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 1,PhotoUpload1 ="' + empty + '", PhotoUploadName1 ="' + empty + '"' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
              return this.sqlLite.update(query).then(function (data) {// this.alertService.success('File Uploaded Successfully');
              });
            } else if (i == 2) {
              this.form.controls['PhotoUpload2'].setValue("");
              this.form.controls['PhotoUploadName2'].setValue("");
              this.form.controls['PhotoUpload2'].updateValueAndValidity();
              this.form.controls['PhotoUploadName2'].updateValueAndValidity();

              var _query5 = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 1, PhotoUpload2 ="' + empty + '", PhotoUploadName2 ="' + empty + '" ' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';

              return this.sqlLite.update(_query5).then(function (data) {// this.alertService.success('File Uploaded Successfully');
              });
            } else if (i == 3) {
              this.form.controls['PhotoUpload3'].setValue("");
              this.form.controls['PhotoUploadName3'].setValue("");
              this.form.controls['PhotoUpload3'].updateValueAndValidity();
              this.form.controls['PhotoUploadName3'].updateValueAndValidity();

              var _query6 = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 1, PhotoUpload3 ="' + empty + '", PhotoUploadName3 ="' + empty + '" ' + 'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';

              return this.sqlLite.update(_query6).then(function (data) {// this.alertService.success('File Uploaded Successfully');
              });
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            debugger;

            if (this.form.valid) {
              var finalArr = [];
              var obj = {
                // "IndexId": (this.getIndexId == undefined && this.getIndexId == null) ? "" : this.getIndexId,
                "IndexId": "",
                "SchlId": this.getSchool.SclId,
                "ObservedBy": this.emis_username,
                "BeforePaint": this.form.value.PhotoUploadName1 == undefined || this.form.value.PhotoUploadName1 == null ? '' : this.form.value.PhotoUploadName1,
                "PaintOnProcess": this.form.value.PhotoUploadName2 == undefined || this.form.value.PhotoUploadName2 == null ? '' : this.form.value.PhotoUploadName2,
                "AfterPaint": this.form.value.PhotoUploadName3 == undefined || this.form.value.PhotoUploadName3 == null ? '' : this.form.value.PhotoUploadName3,
                "Remarks": this.form.value.Remarks,
                "Latitude": this.offlinelat,
                "Longitude": this.offlinelone
              };
              finalArr.push(obj);

              if (this.networkService.getCurrentNetworkStatus() == 0) {
                var aruData = {
                  "records": finalArr
                };
                this.emisService.PPOlirumVagupari(aruData).subscribe(function (res) {
                  if (res.dataStatus) {
                    var query = 'UPDATE OlirumVaguparai SET Status = 3, Remarks ="' + _this9.form.value.Remarks + '", Latitude ="' + _this9.offlinelat + '", Longitude ="' + _this9.offlinelone + '"' + ' WHERE OlirumVaguparai.SclId = "' + _this9.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + _this9.getSchool.Udise + '"';

                    _this9.sqlLite.update(query).then(function (data) {
                      _this9.alertService.success(res.message);

                      _this9.initialValidator();

                      _this9.udiseCode = "";
                      _this9.getSchool = [];
                      _this9.formOpen = false;
                    });
                  }
                });
              } else {
                var query = 'UPDATE OlirumVaguparai SET Status = 2, Remarks ="' + this.form.value.Remarks + '", Latitude ="' + this.offlinelat + '", Longitude ="' + this.offlinelone + '"' + ' WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                return this.sqlLite.update(query).then(function (data) {
                  _this9.alertService.success("Data Stored in offline");

                  _this9.initialValidator();

                  _this9.udiseCode = "";
                  _this9.getSchool = [];
                  _this9.formOpen = false;
                });
              }
            } else {
              this.alertService.error('Please enter mandatory fields');
            }
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "viewImage",
          value: function viewImage(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var url, modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    debugger;

                    if (id == 1) {
                      url = this.form.value.PhotoUpload1;
                    }

                    if (id == 2) {
                      url = this.form.value.PhotoUpload2;
                    }

                    if (id == 3) {
                      url = this.form.value.PhotoUpload3;
                    }

                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_13__.ViewImagePage,
                      componentProps: {
                        image: url
                      },
                      cssClass: 'view-image-modal'
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.initialValidator();
            this.getSchool = [];
            this.udiseCode = "";
            this.formOpen = false;
          }
        }]);
      }();

      _OlirumVagupparaiPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
        }, {
          type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__.LoaderServiceService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__.EmisService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_7__.Camera
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
        }, {
          type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_10__.JsonService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_14__.SidsService
        }];
      };

      _OlirumVagupparaiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-olirum-vagupparai',
        template: _raw_loader_olirum_vagupparai_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_olirum_vagupparai_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OlirumVagupparaiPage);
      /***/
    },

    /***/
    73634:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-content {\n  background: #f3f4fa;\n  height: 100%;\n  padding: 20px 0px 20px;\n  overflow-y: scroll;\n}\n.ion-content .uide-bx {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.ion-content .uide-bx input {\n  border-radius: 5px;\n  padding: 5px 7px;\n  border: 1px solid #888;\n  margin-right: 10px;\n  width: 73%;\n}\n.ion-content .uide-bx ion-button {\n  margin: 0px;\n}\n.ion-content h6 {\n  font-size: 15px;\n  font-weight: 600;\n  padding-top: 10px;\n}\n.ion-content .upld-bx {\n  display: block;\n  background: #fff;\n  width: 90%;\n  margin: 10px auto 18px;\n  padding: 25px 20px;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  position: relative;\n  text-align: center;\n}\n.ion-content .upld-bx:before {\n  content: \"\";\n  position: absolute;\n  border: 2px dashed #e4d9eb;\n  left: 10px;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 10px;\n}\n.ion-content .upld-bx ion-icon {\n  color: #e0b4fc;\n  font-size: 50px;\n}\n.ion-content .upld-bx.img-bx {\n  height: 140px;\n  padding: 12px 12px;\n}\n.ion-content .upld-bx.img-bx img {\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 1000;\n  position: relative;\n}\n.ion-content .upld-bx.img-bx span {\n  background: #a34040;\n  display: inline-block;\n  padding: 4px 6px 0px;\n  border-radius: 8px;\n  position: absolute;\n  right: 13px;\n  height: 27px;\n}\n.ion-content .upld-bx.img-bx span ion-icon {\n  font-size: 16px;\n  color: #fff;\n}\n.ion-content input[type=text] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 10px;\n  width: 90%;\n  margin: 0px auto 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXJ1bS12YWd1cHBhcmFpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR1o7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSWhCO0FBRlk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJaEI7QUFIZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUtwQjtBQUFJO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRVIiLCJmaWxlIjoib2xpcnVtLXZhZ3VwcGFyYWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjRmYTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAudWlkZS1ieHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC51cGxkLWJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0byAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNlNGQ5ZWI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBiNGZjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaW1nLWJ4e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTM0MDQwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDZweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    68218:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Olirum Vagupparai</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-content\">\r\n    <div class=\"uide-bx\">\r\n      <input type=\"tel\" maxlength=\"11\" [(ngModel)]=\"udiseCode\" placeholder=\"Enter UDISE Code\">\r\n      <ion-button (click)=\"searchUdise()\"><ion-icon name=\"search-outline\" style=\"color:#fff;\"></ion-icon></ion-button>\r\n    </div>\r\n    <div *ngIf=\"getSchool?.Udise\" >\r\n      <h6 style=\"color:#9162b0;padding:5px 20px;\">{{getSchool?.SclNam}} ({{getSchool?.Udise}})</h6>\r\n    </div>\r\n    <form [formGroup]=\"form\" *ngIf=\"formOpen\">\r\n      \r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload1 == ''\" (click)=\"openCamera(1)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 1 <span style=\"color: red;\">*</span></h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload1 != ''\">\r\n        <span (click)=\"deleteFile(1)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload1}}\" alt=\"\" (click)=\"viewImage(1)\" >\r\n      </div>\r\n\r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload2 == ''\" (click)=\"openCamera(2)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 2 </h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload2 != ''\">\r\n        <span (click)=\"deleteFile(2)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload2}}\" alt=\"\" (click)=\"viewImage(2)\" >\r\n      </div>\r\n\r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload3 == ''\" (click)=\"openCamera(3)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 3 </h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload3 != ''\">\r\n        <span (click)=\"deleteFile(3)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload3}}\" alt=\"\" (click)=\"viewImage(3)\" >\r\n      </div>\r\n\r\n      <h6 style=\"padding:7px 23px 3px;\">Remarks</h6>\r\n      <input type=\"text\" placeholder=\"Enter Remarks\" formControlName=\"Remarks\">\r\n\r\n      <div style=\"text-align: center;\">\r\n        <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Submit</span></ion-button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_olirum-vagupparai_olirum-vagupparai_module_ts-es5.js.map