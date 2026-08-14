(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_spectacel_student-list_student-list_module_ts"], {
    /***/
    77748:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/spectacle-view/spectacle-view.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpectacleViewComponent": function SpectacleViewComponent() {
          return (
            /* binding */
            _SpectacleViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_spectacle_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./spectacle-view.component.html */
      99455);
      /* harmony import */


      var _spectacle_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./spectacle-view.component.scss */
      2461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _SpectacleViewComponent = /*#__PURE__*/function () {
        function SpectacleViewComponent(modalController) {
          _classCallCheck(this, SpectacleViewComponent);

          this.modalController = modalController;
          this.value = {
            dpsh_value_left: '',
            dpsh_value_right: '',
            dycl_left: '',
            dycl_right: '',
            axis_left: '',
            axis_right: ''
          };
        }

        return _createClass(SpectacleViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.value;
            debugger;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);
      }();

      _SpectacleViewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _SpectacleViewComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _SpectacleViewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-spectacle-view',
        template: _raw_loader_spectacle_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_spectacle_view_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SpectacleViewComponent);
      /***/
    },

    /***/
    75262:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/student-list-routing.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPageRoutingModule": function StudentListPageRoutingModule() {
          return (
            /* binding */
            _StudentListPageRoutingModule
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


      var _student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-list.page */
      79261);

      var routes = [{
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage
      }];

      var _StudentListPageRoutingModule = /*#__PURE__*/_createClass(function StudentListPageRoutingModule() {
        _classCallCheck(this, StudentListPageRoutingModule);
      });

      _StudentListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StudentListPageRoutingModule);
      /***/
    },

    /***/
    76410:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/student-list.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPageModule": function StudentListPageModule() {
          return (
            /* binding */
            _StudentListPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-list-routing.module */
      75262);
      /* harmony import */


      var _student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-list.page */
      79261);
      /* harmony import */


      var _spectacle_view_spectacle_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spectacle-view/spectacle-view.component */
      77748);

      var _StudentListPageModule = /*#__PURE__*/_createClass(function StudentListPageModule() {
        _classCallCheck(this, StudentListPageModule);
      });

      _StudentListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentListPageRoutingModule],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_1__.StudentListPage, _spectacle_view_spectacle_view_component__WEBPACK_IMPORTED_MODULE_2__.SpectacleViewComponent]
      })], _StudentListPageModule);
      /***/
    },

    /***/
    79261:
    /*!************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/student-list.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPage": function StudentListPage() {
          return (
            /* binding */
            _StudentListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-list.page.html */
      12143);
      /* harmony import */


      var _student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-list.page.scss */
      25213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _spectacle_view_spectacle_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./spectacle-view/spectacle-view.component */
      77748);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);

      var _StudentListPage = /*#__PURE__*/function () {
        function StudentListPage(router, healthServices, route, alertService, modalController, uploadService, camera, platform, file, networkService, modalCtrl // private sqliteDB: SqlitedatabaseService,
        ) {
          _classCallCheck(this, StudentListPage);

          this.router = router;
          this.healthServices = healthServices;
          this.route = route;
          this.alertService = alertService;
          this.modalController = modalController;
          this.uploadService = uploadService;
          this.camera = camera;
          this.platform = platform;
          this.file = file;
          this.networkService = networkService;
          this.modalCtrl = modalCtrl;
          this.imageary = [];
          this.imageView = [];
          this.StudentData = [];
          this.searchData = [];
          this.StudentListData = [];
          this.showtable = false;
          this.totalData = [];
          this.totalstds = 0;
          this.notRec = 0;
          this.verifiedRecd = 0;
          this.defRet = 0;
          this.corVerifiedRecd = 0;
          this.doc1Uploaded = false;
          this.UploadDoc = [];
          this.finaldata = [];
          this.showdropdownvalule = false;
          this.documentupload = false;
          this.dataOption = [// {
          //   "name": "Verified By PMOA",
          //   "id": "1"
          // },
          {
            "name": "Defective",
            "id": "2"
          }, // {
          //   "name": "Not Received",
          //   "id":"3"
          // },
          {
            "name": "Verified And Received By Student",
            "id": "4"
          }];
          this.dataOption1 = [{
            "name": "Prescription incorrect",
            "id": "1"
          }, {
            "name": "Damaged",
            "id": "2"
          }, {
            "name": "Fit not ok",
            "id": "3"
          }];
        }

        return _createClass(StudentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (this.route.snapshot.queryParamMap.get("class_studying_id")) {
              this.class_studying_id = this.route.snapshot.queryParamMap.get("class_studying_id");
              this.class_section = this.route.snapshot.queryParamMap.get("class_section");
              this.SchoolId = this.route.snapshot.queryParamMap.get("SchoolId");
            }

            this.totalTeacher = 0;
            this.totalDoctor = 0;
            this.StudentData = [];
            this.searchData = []; // this.checkLocalExistStudentList()

            this.getstudentData();
            this.getTotalCount();
          }
        }, {
          key: "presentModal",
          value: function presentModal(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    debugger;
                    _context.n = 1;
                    return this.modalController.create({
                      component: _spectacle_view_spectacle_view_component__WEBPACK_IMPORTED_MODULE_4__.SpectacleViewComponent,
                      cssClass: 'my-custom-class',
                      componentProps: {
                        value: val
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openWide",
          value: function openWide(data) {
            if (data == this.showfull) {
              this.showfull = null;
            } else {
              this.showfull = data;
            }
          }
        }, {
          key: "getTotalCount",
          value: function getTotalCount() {
            var _this = this;

            //total screening data
            // this.healthServices.getTotalList(this.SchoolId).subscribe((response) => {
            //   debugger
            //   this.totalStudentData = response.result.TotalCount[0].TotalStudents
            //   this.totalDataScreen = response.result.TotalScrCount[0].TotalStudents
            // })
            var obj = {
              schId: this.SchoolId,
              Cls: this.class_studying_id,
              Sec: this.class_section
            };
            this.healthServices.StudRefSpecsCls(obj).subscribe(function (response) {
              _this.totalstds = response.result[0].total;
              _this.notRec = response.result[0].s1;
              _this.verifiedRecd = response.result[0].s2;
              _this.defRet = response.result[0].s3;
              _this.corVerifiedRecd = response.result[0].s4;
              _this.toBeVerified = Number(response.result[0].to_be_verified);
            });
          }
        }, {
          key: "getstudentData",
          value: function getstudentData() {
            var _this2 = this;

            var pmoaList = [];
            var NormalStudListRand = [];
            this.totalData = [];
            this.StudentData = [];
            this.searchData = [];
            this.StudentListData = []; //total student data

            this.healthServices.StudListByClasAndStudy(this.SchoolId, this.class_section, this.class_studying_id).subscribe(function (response) {
              if (response.dataStatus) {
                // console.log(response,"eeeee")
                _this2.idData = _this2.SchoolId;
                response.result.NormalStudListRand.forEach(function (element) {
                  if (element.HealthStatus === null) {
                    element.HealthStatus = '0';
                  }
                });
                response.result.PMOAList.forEach(function (element) {
                  if (element.HealthStatus === null) {
                    element.HealthStatus = '0';
                  }
                });
                NormalStudListRand = response.result.NormalStudListRand.filter(function (item) {
                  return item.HealthStatus === '3' || item.HealthStatus === '1';
                });
                pmoaList = response.result.PMOAList.filter(function (item) {
                  return item.HealthStatus === '1' || item.HealthStatus === '3';
                });

                _this2.totalData.push(NormalStudListRand);

                console.log(_this2.totalData, "]]]]]]]]]]]");

                _this2.totalData.push(pmoaList);

                console.log(_this2.totalData, "}}}}}"); // if(response.result.PMOAList.length != 0) {

                _this2.totalData[0].map(function (item) {
                  var data = {
                    "user_id": item.user_id,
                    "student_id": item.student_id,
                    "name": item.StudentName,
                    "Status": item.HealthStatus,
                    "schoolId": _this2.SchoolId,
                    "DefHudStatus": item.DefHudStatus,
                    "SpecsStatus": item.SpecsStatus,
                    "UploadDoc": item.UploadDoc,
                    "SpecsId": item.SpecsId,
                    "Defectivetype": item.Defectivetype,
                    "dpsh_value_left": item.dpsh_value_left,
                    "dpsh_value_right": item.dpsh_value_right,
                    "dycl_left": item.dycl_left,
                    "dycl_right": item.dycl_right,
                    "axis_left": item.axis_left,
                    "axis_right": item.axis_right
                  };

                  _this2.StudentData.push(data);

                  console.log();

                  _this2.searchData.push(data);

                  console.log(_this2.searchData, "searchdata111");

                  _this2.StudentListData.push(data);
                }); // }
                // if(response.result.NormalStudListRand.length != 0) {


                _this2.totalData[1].map(function (item) {
                  var datas = {
                    "user_id": item.user_id,
                    "student_id": item.student_id,
                    "name": item.StudentName,
                    "Status": item.HealthStatus,
                    "schoolId": _this2.SchoolId,
                    "DefHudStatus": item.DefHudStatus,
                    "SpecsStatus": item.SpecsStatus,
                    "UploadDoc": item.UploadDoc,
                    "Defectivetype": item.Defectivetype,
                    "SpecsId": item.SpecsId,
                    "dpsh_value_left": item.dpsh_value_left,
                    "dpsh_value_right": item.dpsh_value_right,
                    "dycl_left": item.dycl_left,
                    "dycl_right": item.dycl_right,
                    "axis_left": item.axis_left,
                    "axis_right": item.axis_right
                  };

                  _this2.StudentData.push(datas);

                  _this2.searchData.push(datas);

                  console.log(_this2.searchData, "searchdata");

                  _this2.StudentListData.push(datas);
                }); // }


                _this2.totalStudent = _this2.StudentListData.length;
              }
            });
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn(forData, i) {
            var _this3 = this;

            // this.checkCmaeraPermission();
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
                    var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');

                    if (blob.size <= 5242880) {
                      var obj = {
                        bucketName: bucketName,
                        ext: splitedImage[1],
                        filename: splitedImage[0],
                        expiry: expiry
                      };
                      var a = i;
                      debugger;

                      _this3.commonFileUpload(obj, forData, blob, base64string, a);
                    } else {
                      _this3.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                    }
                  }
                });
              });
            });
          }
        }, {
          key: "commonFileUpload",
          value: function commonFileUpload(obj, fileupload, uploadFile, base64, b) {
            var _this4 = this;

            debugger; // ======network status-(0,1)(in,out)==========

            this.uploadService.getSignedUrl(obj.bucketName, obj.ext, obj.filename, obj.expiry).subscribe(function (result) {
              if (result) {
                _this4.uploadService.uploadFile(result.url, uploadFile).subscribe(function () {
                  // this.std.controls.fileUploaded.setValue(result.key);
                  _this4.alertService.success('File Uploaded Successfully');

                  _this4.searchData[b]['UploadDoc'] = result.key;
                  console.log(_this4.searchData[b]['UploadDoc'], "ooooooo");
                  console.log(); // this.imageary[b] = result.key;
                  // console.log(this.imageary);

                  _this4.getUploadedFiles1(result.key, b);
                });
              } else {
                _this4.alertService.error('Error in Uploading File please try again');
              }
            });
          }
        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event, i) {
            var _this5 = this;

            debugger;

            if (event.target.files[0] != '' && event.target.files[0] != null && event.target.files[0] != undefined) {
              if (event.target.files && event.target.files[0]) {
                if (event.target.files[0].size <= 3145728) {
                  this.doc_file = event.target.files;
                  var fileName = event.target.files[0].name;
                  var splittedName = fileName.split(".");
                  this.fileType = splittedName[1];
                  var fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);

                  fileReader.onload = function (event) {
                    _this5.uploadUrl = fileReader.result;
                    var bucketName = "renewalapplicationemis";
                    var filename = splittedName[0];
                    var ext = splittedName[1];
                    var expiry = 300;

                    _this5.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                      if (result) {
                        var files = _this5.doc_file;
                        var file = files[0];

                        _this5.uploadService.uploadFile(result.url, file).subscribe(function (res) {
                          debugger;
                          _this5.searchData[i]['UploadDoc'] = result.key; // this.imageView[i] = result.url;
                          // this.imageary[i] = result.key;
                          // console.log(this.imageView[i],"pppppp")

                          _this5.image1 = '';
                          _this5.doc1Uploaded = true; // this.applyform.controls.StudNewPhoto.setValue(result.key);
                          // this.viewImage('renewalapplicationemis', result.key);
                        });

                        _this5.alertService.success('Uploaded Successfully');
                      } else {
                        _this5.alertService.error('Error in Uploading File please try again');
                      }
                    });
                  };
                } else {
                  this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                }
              }
            } else {
              this.image1 = '';
            }
          }
        }, {
          key: "getUploadedFiles1",
          value: function getUploadedFiles1(filename, x) {
            var _this6 = this;

            // ======network status-(0,1)(in,out)==========
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();

            if (this.currNetWrkSts == 0) {
              var bucketName = "renewalapplicationemis";
              var filename = filename;
              var expiry = 1800;
              this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                if (result) {
                  _this6.imageView[x] = result.url;
                } else {
                  _this6.alertService.error('Error in Uploading File please try again');
                }
              });
            } else {
              this.imageData = filename;
            }
          }
        }, {
          key: "showdropdown",
          value: function showdropdown(event, index) {
            this.searchData[index].UploadDoc = '';
            console.log(event.detail.value, "evnet");

            if (event == '2' || event == '4') {
              // this.dataOption(event);
              this.openCameraOn(event, index);
            }

            this.searchData[index].Defectivetype = "";
            console.log(event);

            if (this.searchData[index].DefHudStatus == 2) {
              this.showdropdownvalule = true;
            } else {
              this.showdropdownvalule = false;
            }
          }
        }, {
          key: "onSumbit",
          value: function onSumbit(searchData) {
            var _this7 = this;

            debugger; // debugger

            this.finaldata = []; // let spectacelScreening = {
            //   "IndexId": "",
            //   "SchoolId": this.SchoolId,
            //   "StudentId": "",
            //   "HealthStatus": "",
            //   "SpecsStatus": ""
            // }

            var count = true;
            searchData.map(function (item) {
              if (!item.DefHudStatus || item.DefHudStatus == 2 && !item.Defectivetype || item.DefHudStatus == 0) {// || ((item.DefHudStatus == 2 || item.DefHudStatus == 4 ) && !item.UploadDoc)
                // count= false;
              } else {
                var spectacelScreening = {
                  "IndexId": item.SpecsId ? item.SpecsId : "",
                  "SchoolId": _this7.SchoolId,
                  "StudentId": item.student_id,
                  "HealthStatus": item.Status,
                  "SpecsStatus": 6,
                  "DefHudStatus": item.DefHudStatus,
                  "Defectivetype": item.Defectivetype,
                  "UploadDoc": item.UploadDoc
                }; // if(spectacelScreening.SpecsStatus == '' || spectacelScreening.SpecsStatus == null || spectacelScreening.SpecsStatus == '0') {
                //   spectacelScreening.SpecsStatus = '1';
                // }

                _this7.finaldata.push(spectacelScreening);
              }
            });
            console.log(this.finaldata, " this.finaldata");

            if (this.finaldata.length > 0) {
              var data = {
                records: this.finaldata
              };
              this.healthServices.saveEyeScreeningSpectacel(data).subscribe(function (res) {
                if (res.dataStatus == true) {
                  _this7.alertService.alert("Saved Successfully");

                  _this7.getTotalCount();
                } else {
                  _this7.alertService.warning("Error");
                }

                _this7.getstudentData(); // window.location.reload();

              });
            } else {
              this.alertService.warning('Please fill the details');
            }
          }
        }, {
          key: "viewPic",
          value: function viewPic(fun, key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this8 = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    bucketName = "renewalapplicationemis";
                    filename = key;
                    expiry = 1800;
                    this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        var modal;
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              if (!result) {
                                _context2.n = 3;
                                break;
                              }

                              if (!(fun == 'modal')) {
                                _context2.n = 2;
                                break;
                              }

                              _context2.n = 1;
                              return this.modalCtrl.create({
                                component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__.ViewImagePage,
                                componentProps: {
                                  image: result.url
                                },
                                cssClass: 'view-image-modal'
                              });

                            case 1:
                              modal = _context2.v;
                              _context2.n = 2;
                              return modal.present();

                            case 2:
                              _context2.n = 4;
                              break;

                            case 3:
                              this.alertService.error('Error in getting image file');

                            case 4:
                              return _context2.a(2);
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this9 = this;

            this.searchData = [];
            this.searchTerm = event.detail.value.trim();
            debugger;
            console.log(this.searchTerm, "searchdata22");
            console.log(this.searchData, "searchData33");
            this.searchData = this.StudentData.filter(function (item) {
              return item.name.toLowerCase().indexOf(_this9.searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "questionsPage",
          value: function questionsPage(user_id, name, SchoolId) {
            this.router.navigate(['/tabs/pmoa-questions'], {
              queryParams: {
                user_id: user_id,
                SchoolId: SchoolId,
                name: name
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            // this.healthServices.SpecsNeedClsList(this.SchoolId).subscribe((response) => {
            // })
            this.router.navigate(['/tabs/spectacel-section-list']);
          }
        }, {
          key: "navigateToClassList",
          value: function navigateToClassList() {
            this.router.navigate(['/tabs/spectacel-class-list']);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss(null, 'cancel');
          }
        }]);
      }();

      _StudentListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_3__.PmoaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }];
      };

      _StudentListPage.propDecorators = {
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController]
        }]
      };
      _StudentListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-student-list',
        template: _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentListPage);
      /***/
    },

    /***/
    2461:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/spectacle-view/spectacle-view.component.scss ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n}\n\n.student-header {\n  background-color: var(--ion-color-primary);\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\n.student-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.student-name {\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.screening-col {\n  font-size: 17PX;\n  color: aliceblue;\n}\n\n.screening-report {\n  padding-left: 11PX;\n  color: aliceblue;\n  font-size: 18PX;\n  font-weight: bolder;\n}\n\n.radio-card {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.radio {\n  font-size: 16px !important;\n  padding-left: 5px;\n}\n\n.odd {\n  background-color: #eef8ff;\n  --background: #eef8ff;\n}\n\n.even {\n  background-color: #f9fcff;\n  --background: #f9fcff;\n}\n\n.header_details {\n  padding-left: 13px;\n  padding-right: 13px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.table-row {\n  background-color: var(--ion-color-primary);\n  padding-bottom: 10px;\n  color: aliceblue;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.sumbit-button {\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 0.5em;\n  color: white;\n}\n\n.eyeTableOdd {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #eef8ff;\n  text-align: center;\n}\n\n.eyeTableEven {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  background-color: #f9fcff;\n  text-align: center;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\n.dropDown {\n  padding-right: 15px;\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWN0YWNsZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFJRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsMENBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQUpFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQU9KOztBQUpFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUpFO0VBQ0Usb0JBQUE7QUFPSjs7QUFKRTtFQUNFLFlBQUE7QUFPSjs7QUFKRTtFQUVHLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUtMIiwiZmlsZSI6InNwZWN0YWNsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4uc3R1ZGVudC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTNweDtcclxufVxyXG4uc3R1ZGVudC1jb2wge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMVBYO1xyXG4gICAgZm9udC1zaXplOiAxN1BYO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4uc3R1ZGVudC1uYW1lIHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTFQWDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDE4UFg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5zY3JlZW5pbmctY29sIHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTFQWDtcclxuICAgIGZvbnQtc2l6ZTogMTdQWDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLnNjcmVlbmluZy1yZXBvcnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMVBYO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMThQWDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnJhZGlvLWNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLy8gLnJhZGlvLWJ1dG57XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIC8vIHdpZHRoOiAyM3B4O1xyXG4gICAgLy8gaGVpZ2h0OiAxNXB4O1xyXG4gIC8vIH1cclxuICAucmFkaW97XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIC5vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmOGZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVmOGZmO1xyXG4gIH1cclxuICAuZXZlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZjZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgfVxyXG4gIC5oZWFkZXJfZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmJ0bi1zY3JlZW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDM3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhYmxlLXJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuc3VtYml0LWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9IFxyXG4gIC5leWVUYWJsZU9kZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjhmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmV5ZVRhYmxlRXZlbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmNmZjs7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wdC0xNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4OztcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICB9XHJcblxyXG4gIC5kcm9wRG93bntcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2U2ZjNmZjtcclxuICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAvLyAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH0iXX0= */";
      /***/
    },

    /***/
    25213:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/student-list/student-list.page.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pt-10 {\n  padding-left: 5px;\n  zoom: 1.3;\n}\n\n.pt-15 {\n  font-size: 18px;\n  padding-left: 2%;\n}\n\n.table-row {\n  background-color: var(--ion-color-primary);\n  align-content: center;\n  height: 30px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.ion-filter-card {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.quiz-button {\n  font-size: 14px;\n  color: #eae6e2;\n}\n\n.img-student {\n  max-width: 54%;\n  border: 0;\n  height: 23px;\n}\n\n.col-content {\n  display: flex;\n  font-size: 12px;\n  justify-content: end;\n}\n\n.next-icon {\n  font-size: 23px;\n}\n\n.card-align {\n  background-color: white;\n  color: black;\n  padding-bottom: 25px;\n  margin-top: 25px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.back-icon {\n  color: white;\n}\n\n.grid-table {\n  color: black;\n  padding: 10px;\n}\n\n.odd {\n  background-color: #f1f4fc;\n  font-size: 14px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.even {\n  background-color: #d9e1ed;\n  font-size: 14px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.odds {\n  background-color: #f1f4fc;\n}\n\n.evens {\n  background-color: #d9e1ed;\n}\n\n.col-header {\n  font-size: 14px;\n  color: #eae6e2;\n}\n\n.col-table {\n  text-align: end;\n}\n\n.card-widget {\n  margin-top: 5%;\n}\n\n.content-text {\n  padding-left: 10px;\n}\n\n.select {\n  color: #2176b9;\n  white-space: pre-line !important;\n}\n\n.barTotal-container {\n  background-color: #8C66AF;\n}\n\n.labelTotal {\n  color: #8C66AF;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText {\n  color: #8C66AF;\n  font-size: 15px;\n}\n\n.labelScn {\n  color: #9D5716;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntext {\n  color: #9D5716;\n  font-size: 15px;\n}\n\n.labelScntext {\n  color: #9D5716;\n  font-size: 15px;\n}\n\n.labelScnToBeVerified {\n  color: #ff7b00;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReported {\n  color: #FF6E6E;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtext {\n  color: #FF6E6E;\n  font-size: 15px;\n}\n\n.bar-Scn {\n  background-color: #9D5716;\n}\n\n.bar-ScnMe {\n  background-color: #FF6E6E;\n}\n\n.bar-ScnMe-ToBeVerified {\n  background-color: #ff6200;\n}\n\n.labelPMOAtext {\n  color: #009045;\n  font-size: 15px;\n}\n\n.labelPMOA {\n  color: #009045;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.bar-PMOA {\n  background-color: #009045;\n}\n\n.labelCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtextCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 15px;\n}\n\n.bar-ScnMe-CorVerifiedRec {\n  background-color: #07D3B0;\n}\n\np {\n  white-space: pre-line;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.footer-btn {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.card-align {\n  padding: 10px !important;\n  background-color: white;\n  color: black;\n  margin: 15px;\n  margin-top: 25px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.text {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 40px;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n\n.cameraClick {\n  zoom: 3;\n}\n\n.btn-style {\n  padding-top: 7px;\n  padding-bottom: 8px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsMENBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLDJCQUFBO0FBRUo7O0FBZUE7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZUE7RUFHUSxlQUFBO0VBQ0EsY0FBQTtBQWRSOztBQWdCQTtFQUVRLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWRSOztBQWdCQTtFQUVNLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFkTjs7QUFpQkE7RUFFUSxlQUFBO0FBZlI7O0FBa0JBO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkU7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0FBZko7O0FBaUJBO0VBQ0ksK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBZEo7O0FBZ0JBO0VBQ0UsWUFBQTtBQWJGOztBQWVBO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFiSjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBZkY7O0FBa0JBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWZGOztBQWtCQTtFQUNFLHlCQUFBO0FBZkY7O0FBaUJBO0VBQ0UseUJBQUE7QUFkRjs7QUFnQkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQWRGOztBQXNCRTtFQUVFLGVBQUE7QUFwQko7O0FBc0JFO0VBSUUsY0FBQTtBQXRCSjs7QUF3QkU7RUFFSSxrQkFBQTtBQXRCTjs7QUF3QkU7RUFFRSxjQUFBO0VBQWUsZ0NBQ2Y7QUF0Qko7O0FBd0JFO0VBQ0UseUJBQUE7QUFyQko7O0FBdUJFO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF1QkU7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQXJCRjs7QUF1QkU7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBckJGOztBQXVCRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBckJGOztBQXVCRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBckJGOztBQXVCRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFyQkY7O0FBdUJFO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF1QkU7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQXJCRjs7QUF1QkU7RUFDQSx5QkFBQTtBQXBCRjs7QUFzQkU7RUFDQSx5QkFBQTtBQW5CRjs7QUFxQkU7RUFDRSx5QkFBQTtBQWxCSjs7QUFxQkE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQW5CQTs7QUFxQkE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBbkJBOztBQXFCQTtFQUNFLHlCQUFBO0FBbEJGOztBQXFCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFsQko7O0FBcUJFO0VBQ0UseUJBQUE7QUFsQko7O0FBdUJBO0VBQ0UscUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsbUJBQUE7QUFwQkY7O0FBdUJBO0VBRUUsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtBQXJCQTs7QUF3QkE7RUFDSSwrQkFBQTtFQUFnQyxnQ0FDcEM7QUFyQkE7O0FBd0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF1QkE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtBQXJCSjs7QUF1QkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBc0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBbkJKOztBQXVCRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFwQko7O0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxvQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxZQUFBO0FBcEJKOztBQXVCRTtFQUNFLGFBQUE7QUFwQko7O0FBdUJFO0VBQ0UsOEJBQUE7QUFwQko7O0FBc0JFO0VBQ0UsT0FBQTtBQW5CSjs7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsQkoiLCJmaWxlIjoic3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHpvb206IDEuMztcclxufVxyXG4ucHQtMTUge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlOyBcclxufVxyXG5cclxuICAudGFibGUtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbi5oZWFkZXIgLmNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxufVxyXG5cclxuLy8gLmNvbCB7XHJcbi8vICAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuLy8gICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XHJcbi8vIH1cclxuXHJcbi8vIC5yb3c6bGFzdC1jaGlsZCAuY29sIHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xyXG4vLyB9XHJcblxyXG4uaW9uLWZpbHRlci1jYXJke1xyXG4gICAgLy8gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4ucXVpei1idXR0b25cclxuICAgIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI2VhZTZlMjtcclxuICAgIH1cclxuLmltZy1zdHVkZW50XHJcbiAgICAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTQlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgIH0gICBcclxuLmNvbC1jb250ZW50IFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4ubmV4dC1pY29uXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgLy8gd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4XHJcbiAgfVxyXG4gIC5pdGVtLXN0eWxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOm5vbmUgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OmdyYXkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjpncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5zZWxlY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgICBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZ3JpZC10YWJsZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdhYmQ1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxMFBYO1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ub2Rke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZmM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogMzVweDtcclxufVxyXG4uZXZlbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMWVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAvLyBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLm9kZHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmYztcclxufVxyXG4uZXZlbnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTFlZDtcclxufVxyXG4uY29sLWhlYWRlciB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNlYWU2ZTI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuLy8gLnRvZGF5cy1xdWl6LWljb25cclxuICAvLyB7XHJcbiAgICAvLyBmb250LXNpemU6IDIzcHg7XHJcbiAgICAvLyB3aWR0aDogMzBweDtcclxuICAvLyB9XHJcbiAgLmNvbC10YWJsZVxyXG4gICB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmRcclxuICB9XHJcbiAgLmNhcmQtd2lkZ2V0XHJcbiAge1xyXG4gICAgLy8gd2lkdGg6IDg3JTsgXHJcbiAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgLmNvbnRlbnQtdGV4dCBcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnNlbGVjdCBcclxuICB7XHJcbiAgICBjb2xvcjogIzIxNzZiOTt3aGl0ZS1zcGFjZTogXHJcbiAgICBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmFyVG90YWwtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QzY2QUY7XHJcbiAgfVxyXG4gIC5sYWJlbFRvdGFsIFxyXG4gIHtcclxuICBjb2xvcjogIzhDNjZBRjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxhYmVsVG90YWxUZXh0IFxyXG4gIHtcclxuICBjb2xvcjogIzhDNjZBRjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbiBcclxuICB7XHJcbiAgY29sb3I6ICM5RDU3MTY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbnRleHQgXHJcbiAge1xyXG4gIGNvbG9yOiAjOUQ1NzE2O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmxhYmVsU2NudGV4dCBcclxuICB7XHJcbiAgY29sb3I6ICM5RDU3MTY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAubGFiZWxTY25Ub0JlVmVyaWZpZWQgXHJcbiAge1xyXG4gIGNvbG9yOiAjZmY3YjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICAubGFiZWxSZXBvcnRlZCBcclxuICB7XHJcbiAgY29sb3I6I0ZGNkU2RTs7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5sYWJlbFJlcG9ydGVkdGV4dCBcclxuICB7XHJcbiAgY29sb3I6I0ZGNkU2RTs7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuYmFyLVNjbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlENTcxNjtcclxuICB9XHJcbiAgLmJhci1TY25NZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU2RTtcclxuICB9XHJcbiAgLmJhci1TY25NZS1Ub0JlVmVyaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjIwMDtcclxuICAgIH1cclxuXHJcbi5sYWJlbFBNT0F0ZXh0IFxyXG57XHJcbmNvbG9yOiAjMDA5MDQ1O1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmxhYmVsUE1PQVxyXG57XHJcbmNvbG9yOiAjMDA5MDQ1O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmJhci1QTU9BIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MDQ1O1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsQ29yVmVyaWZpZWRSZWMge1xyXG4gICAgY29sb3I6IzA3RDNCMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbFJlcG9ydGVkdGV4dENvclZlcmlmaWVkUmVjIHtcclxuICAgIGNvbG9yOiMwN0QzQjA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXItU2NuTWUtQ29yVmVyaWZpZWRSZWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3RDNCMDtcclxuICB9XHJcblxyXG4vLyB0ZXN0XHJcblxyXG5wIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJ0blxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gIGNvbG9yOiNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIG1hcmdpbjoxNXB4O1xyXG4gIG1hcmdpbi10b3A6MjVweFxyXG59XHJcblxyXG4uaXRlbS1zdHlsZSB7XHJcbnBhZGRpbmctcmlnaHQ6IDIlO1xyXG4tLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6IDE1cHg7XHJcbnBhZGRpbmctbGVmdDogMiU7XHJcbi0taW9uLWNvbG9yLWJhc2U6bm9uZSAhaW1wb3J0YW50O1xyXG4tLWlvbi1jb2xvci1jb250cmFzdDpncmF5ICFpbXBvcnRhbnQ7XHJcbi0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjpncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbnByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4udG9kYXlzLXF1aXotaWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuICAuYnRuLXNjcmVlbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHQtMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgfVxyXG5cclxuICAuZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuY2FtZXJhQ2xpY2t7XHJcbiAgICB6b29tOiAzO1xyXG4gIH1cclxuICAuYnRuLXN0eWxle1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    99455:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/spectacel/student-list/spectacle-view/spectacle-view.component.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"dismiss()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Spectacle Adjustment</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"value!=''\">\r\n  <ion-row class=\"table-row\">\r\n    <ion-col size=\"3\" style=\"border-right: 1px solid;\">\r\n      <div class=\"quiz-button\">\r\n        <span> Eye</span>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4.5\">\r\n      <div class=\"quiz-button\">\r\n        <span>Right </span>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4.5\" style=\"border-right: 1px solid;\">\r\n      <div class=\"quiz-button\">\r\n        <span>Left </span>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n    <ion-row class=\"eyeTableOdd\">\r\n      <ion-col size=\"3\" style=\"padding-top: 10px;\">\r\n        D sph\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.dpsh_value_right}}\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.dpsh_value_left}}\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"eyeTableEven\">\r\n      <ion-col size=\"3\" style=\"padding-top: 10px;\">\r\n        D cyl\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.dycl_right}}\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.dycl_left}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"eyeTableOdd\">\r\n      <ion-col size=\"3\" style=\"padding-top: 10px;\">\r\n        Axis\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.axis_right}}\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        {{value.axis_left}}\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-content>";
      /***/
    },

    /***/
    12143:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/spectacel/student-list/student-list.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"class_studying_id == 99 ? navigateToClassList(): navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Student List</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid class=\"grid-padding\">\r\n    \r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"barTotal-container \" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelTotal\">{{totalstds}}</p>\r\n              <p class=\"labelTotalText\">Total Students</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/stdCount.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <!-- <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScn\">{{notRec}}</p>\r\n              <p class=\"labelScntext\">Verified By PMOA</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card> -->\r\n\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe-CorVerifiedRec\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelCorVerifiedRec\">{{corVerifiedRecd}}</p>\r\n              <p class=\"labelReportedtextCorVerifiedRec\">Verified And Received By Student</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speVerifiedRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScn\">{{verifiedRecd}}</p>\r\n              <p class=\"labelScntext\">Defective</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <!-- <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelReported\">{{defRet}}</p>\r\n              <p class=\"labelReportedtext\">Not Received</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/spcDefAndRet.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card> -->\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe-ToBeVerified\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScnToBeVerified\">{{toBeVerified}}</p>\r\n              <p class=\"labelScntextToBeVerified\">To be verified</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 20px; padding-left: 20px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/spectacle.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n\r\n    <div *ngIf=\"this.searchData.length >= 1\">\r\n    <ion-row>\r\n      <ion-searchbar style=\"padding: 10px;\" showCancelButton=\"never\" (ionChange)=\"getFilterItems($event)\">\r\n      </ion-searchbar>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"grid-table\">\r\n\r\n      <ion-row class=\"table-row\">\r\n        <ion-col size=\"1\">\r\n          <div class=\"quiz-button\">\r\n            ID\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <div class=\"quiz-button\">\r\n            Student Id\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"align-content: center;\">\r\n         <div class=\"quiz-button\">Student Name</div>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"11\">\r\n          <div class=\"quiz-button\">\r\n            <span style=\"padding-left: 15px; padding-right: 15px;\">Student Name</span> -->\r\n        <!-- <span>Health Status</span> -->\r\n        <!-- </div>\r\n        </ion-col> -->\r\n\r\n        <!-- <ion-col size=\"5\">\r\n          <div class=\"col-header\">\r\n            <span>Health Status</span>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n\r\n      <ion-row *ngFor=\"let item of searchData; let i = index;\">\r\n        <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"1\"\r\n          (click)=\"openWide(i)\"\r\n          style=\"align-content: center;padding-top: 15px;padding-bottom: 15px;\">\r\n            <ion-label (click)=\"openWide(i)\" style=\"font-size: 13px;color: black;padding-inline: 0px !important;padding-top: 6px;\"> {{i+1}}\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n        style=\"align-content: center;padding-top: 15px;padding-bottom: 15px;\">\r\n              <ion-label (click)=\"openWide(i)\">{{item.user_id}}</ion-label>\r\n        </ion-col>\r\n        <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"6\" \r\n        style=\"align-content: center;padding-top: 15px;padding-bottom: 15px;padding-right: 15px;\">\r\n              <div class=\"d-flex justify-content-between\">\r\n                <ion-label (click)=\"openWide(i)\">{{item.name}}</ion-label>\r\n                <ion-icon name=\"arrow-forward-outline\" (click)=\"presentModal(item)\"></ion-icon>\r\n              </div>\r\n        </ion-col>\r\n\r\n        <ion-col [ngClass]=\"(i % 2 == 0) ? 'odds' : 'evens'\" size=\"12\" *ngIf=\"this.showfull == i\">\r\n          <ion-list style=\"background: transparent;\">\r\n            <ion-item style=\"--background: transparent;\" lines=\"none\">\r\n              <ion-label position=\"stacked\" style=\"font-size: 1.2rem;\">\r\n                Spectacle Status\r\n              </ion-label>\r\n              <ion-select [disabled] = \"item.SpecsStatus >= 6\" class=\"select\" placeholder=\"Select\" [(ngModel)]=\"item.DefHudStatus\" (ionChange)=\"showdropdown($event,i)\">\r\n                <ion-select-option style=\"white-space: normal;\" *ngFor=\"let data of dataOption\" [value]=\"data.id\"> {{data.name}} </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n\r\n        <ion-col  *ngIf=\"item.DefHudStatus == 2 && this.showfull == i\" [ngClass]=\"(i % 2 == 0) ? 'odds' : 'evens'\" size=\"12\">\r\n          <ion-list style=\"background: transparent;\">\r\n            <ion-item style=\"--background: transparent;\" lines=\"none\">\r\n              <ion-select [disabled] = \"item.SpecsStatus >= 6\" class=\"select\" placeholder=\"Select Defective Type\" [(ngModel)]=\"item.Defectivetype\">\r\n                <ion-select-option style=\"white-space: normal;\" *ngFor=\"let data of dataOption1\" [value]=\"data.id\"> {{data.name}} </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      <ion-col *ngIf=\"(item.DefHudStatus == 2 || item.DefHudStatus == 4) && this.showfull == i\" [ngClass]=\"(i % 2 == 0) ? 'odds' : 'evens'\" style=\"margin: 3px\">\r\n      <div class=\"row\" style=\"justify-content: center;\" *ngIf=\"this.showfull == i && item.SpecsStatus < 6\">\r\n    <!-- <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\"  (change)=\"onSelectFile1($event,i)\"\r\n              accept=\"image/png,image/jpeg,image/jpg\" /> -->\r\n              <div class=\"col-2\">\r\n                <input type=\"file\" id=\"fileLoader\"   name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,i)\" #fileLoader name=\"files\"\r\n                title=\"Load File\" accept=\"image/png,image/jpeg,image/jpg\"  hidden />\r\n              <ion-icon slot=\"icon-only\" name='folder-outline' (click)='fileLoader.click()'\r\n                class=\"cameraClick\"></ion-icon>\r\n              </div>\r\n              <div class=\"col-2\" style=\"margin-top: 15px\">OR</div>\r\n             <div class=\"col-2\">\r\n              <ion-icon name='camera-outline' class=\"cameraClick\" (click)=\"openCameraOn('list',i)\"></ion-icon>\r\n             </div>\r\n      </div>\r\n   </ion-col>\r\n\r\n  <ion-col size=\"12\" *ngIf=\"this.showfull == i\">\r\n     <div *ngIf=\"this.searchData[i]['UploadDoc']\" class=\"btn-style\">\r\n    <ion-button size=\"small\" style=\"align-self: center;\" (click)=\"viewPic('modal',item.UploadDoc)\">view</ion-button>\r\n   </div>\r\n  </ion-col>\r\n       \r\n\r\n        \r\n        \r\n  \r\n<!-- \r\n        <ion-col size=\"12\">\r\n          <div class=\"viewImage\">\r\n            <img src=\"https://deka0egrc3bqo.cloudfront.net/{{item.UploadDoc}}\" *ngIf=\"item.UploadDoc\" class=\"img image\" width=\"50%\" height=\"50%\"\r\n              style=\"padding:0;margin:0\">\r\n          </div>\r\n        </ion-col> -->\r\n\r\n\r\n        <!-- <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" class=\"col-table\" size=\"5.5\"\r\n          (click)=\"questionsPage(item.user_id,item.name,item.schoolId)\">\r\n          <div class=\"col-content\" *ngIf=\"item.Status == ''\">\r\n            <ion-title\r\n              style=\"font-size: 12px;color: rgb(163, 18, 18);padding-inline: 0px !important;text-align: start;\">\r\n              Not received </ion-title>\r\n            <ion-icon (click)=\"questionsPage(item.user_id,item.name,item.schoolId)\" class=\"todays-quiz-icon\"\r\n              src=\"../../../../assets/icons/healthReport/right-arrow.svg\">\r\n            </ion-icon>\r\n          </div>\r\n          <div class=\"col-content\" *ngIf=\"item.Status != ''\">\r\n            <ion-title\r\n              style=\"font-size: 12px;color: rgb(25, 105, 25);padding-inline: 0px !important;text-align: start;\">\r\n              {{item.Status}}</ion-title>\r\n            <ion-icon (click)=\"questionsPage(item.user_id,item.name,iddata)\" class=\"todays-quiz-icon\"\r\n              src=\"../../../../assets/icons/healthReport/right-arrow.svg\">\r\n            </ion-icon>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"btn-screen\">\r\n          <ion-button (click)=\"onSumbit(searchData)\" style=\"color:white\">save \r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_spectacel_student-list_student-list_module_ts-es5.js.map