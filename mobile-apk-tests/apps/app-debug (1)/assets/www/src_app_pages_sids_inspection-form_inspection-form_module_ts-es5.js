(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_inspection-form_inspection-form_module_ts"], {
    /***/
    94385:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/sids/inspection-form/inspection-form-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectionFormPageRoutingModule": function InspectionFormPageRoutingModule() {
          return (
            /* binding */
            _InspectionFormPageRoutingModule
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


      var _inspection_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspection-form.page */
      33857);

      var routes = [{
        path: '',
        component: _inspection_form_page__WEBPACK_IMPORTED_MODULE_0__.InspectionFormPage
      }];

      var _InspectionFormPageRoutingModule = /*#__PURE__*/_createClass(function InspectionFormPageRoutingModule() {
        _classCallCheck(this, InspectionFormPageRoutingModule);
      });

      _InspectionFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InspectionFormPageRoutingModule);
      /***/
    },

    /***/
    25221:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/sids/inspection-form/inspection-form.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectionFormPageModule": function InspectionFormPageModule() {
          return (
            /* binding */
            _InspectionFormPageModule
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


      var _inspection_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspection-form-routing.module */
      94385);
      /* harmony import */


      var _inspection_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspection-form.page */
      33857);

      var _InspectionFormPageModule = /*#__PURE__*/_createClass(function InspectionFormPageModule() {
        _classCallCheck(this, InspectionFormPageModule);
      });

      _InspectionFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inspection_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectionFormPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_inspection_form_page__WEBPACK_IMPORTED_MODULE_1__.InspectionFormPage]
      })], _InspectionFormPageModule);
      /***/
    },

    /***/
    33857:
    /*!********************************************************************!*\
      !*** ./src/app/pages/sids/inspection-form/inspection-form.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InspectionFormPage": function InspectionFormPage() {
          return (
            /* binding */
            _InspectionFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_inspection_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inspection-form.page.html */
      72346);
      /* harmony import */


      var _inspection_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspection-form.page.scss */
      9701);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);

      var _InspectionFormPage = /*#__PURE__*/function () {
        function InspectionFormPage(router, SidsService, fb, route, uploadService, alertService, usersessionService, camera, platform, networkService, file, ionicstorage, location, geolocation) {
          _classCallCheck(this, InspectionFormPage);

          this.router = router;
          this.SidsService = SidsService;
          this.fb = fb;
          this.route = route;
          this.uploadService = uploadService;
          this.alertService = alertService;
          this.usersessionService = usersessionService;
          this.camera = camera;
          this.platform = platform;
          this.networkService = networkService;
          this.file = file;
          this.ionicstorage = ionicstorage;
          this.location = location;
          this.geolocation = geolocation;
          this.currNetWrkSts = '';
          this.imageData = "";
          this.myFiles = [];
          this.StageList = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe('en-US');
          this.Recordvalue = [];
          this.stages = [];
          this.minMax = {}; //this.currentDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');

          this.initialValidator();
        }

        return _createClass(InspectionFormPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.getLatLong();
            this.currentDate = this.pipe.transform(new Date(), 'yyyy-MM-dd'); // this.currentDate = "2024-01-20";

            this.currentDate1 = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            this.user_id = this.usersessionService.emis_username();
            this.school_id = this.route.snapshot.queryParams.school_id;
            this.list_id = this.route.snapshot.queryParams.list_id;
            this.curr_stage = this.route.snapshot.queryParams.curr_stage;
            this.work_type_id = this.route.snapshot.queryParams.work_type_id;
            this.editStage = this.route.snapshot.queryParams.editStage;
            this.datevalue = false;

            if (this.editStage == 1) {
              this.patchData();
              this.ionicstorage.getData('Records').then(function (dataa1) {
                if (dataa1) {
                  _this.Recordvalue = dataa1;
                }
              }, function (error) {
                return console.error(error);
              });
            } else {
              this.matchOptions.clear();
              this.ionicDataGet();
              this.ionicstorage.getData('Records').then(function (dataa1) {
                if (dataa1) {
                  _this.Recordvalue = dataa1;
                }
              }, function (error) {
                return console.error(error);
              });

              if (this.route.snapshot.queryParams.id == 1) {
                this.showInput = false;
                this.matchOptions.clear();
                this.addMatchOPtions();
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionicDataGet",
          value: function ionicDataGet() {
            var _this2 = this;

            debugger;
            this.ionicstorage.getData('StageList').then(function (dataa) {
              _this2.noFromIds = dataa.filter(function (x) {
                return x.no_form == 1;
              }).map(function (y) {
                return y.id;
              });
              _this2.showAllFlg = dataa.filter(function (x) {
                return x.show_all == 1;
              }).map(function (y) {
                return y.id;
              });
              console.log(_this2.noFromIds, 'this.noFromIds');
              _this2.stageworktype = dataa;

              if (_this2.curr_stage != 0) {
                _this2.StageList = dataa.filter(function (x) {
                  return x.no_form != 1;
                });
              } else {
                _this2.StageList = dataa;
              }

              _this2.stages = dataa;
              console.log(_this2.StageList, 'this.StageList');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('date').then(function (dataa) {
              var date = dataa;

              if (date != _this2.currentDate) {
                _this2.ionicstorage.removeKey('CurrendateSchl');
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('inspectionData').then(function (dataa) {
              debugger;
              _this2.inspecList = dataa;
              console.log(_this2.inspecList, "this.inspecList"); // this.schoolIndex = this.route.snapshot.queryParams.school_id

              debugger;
              _this2.schoolIndex = _this2.inspecList.findIndex(function (x) {
                return x.school_id == _this2.route.snapshot.queryParams.school_id && x.id == _this2.list_id;
              });

              var listarray = _this2.inspecList.filter(function (x) {
                return x.school_id == _this2.route.snapshot.queryParams.school_id && x.id == _this2.list_id;
              });

              _this2.listarray = listarray[0];

              var checkDate = _this2.listarray.stages.map(function (x) {
                return x.date_of_completion;
              });

              if (checkDate.includes(_this2.currentDate)) {
                _this2.datevalue = true;
              } else {
                _this2.datevalue = false; // this.addMatchOPtions();
              } //  this.StageList = this.stages.filter( y => y.work_type_id == this.inspecList[this.schoolIndex].work_type_id)


              _this2.StageList = [];
              debugger;

              _this2.inspecList[_this2.schoolIndex].stages.forEach(function (element) {
                if (element.status == "pending") {
                  // let check = this.stages.filter( y => y.id == element.stage_id)
                  // if(check.length > 0){
                  if (_this2.curr_stage != 0 && !_this2.noFromIds.includes(element.stage_id)) {
                    // && !this.showAllFlg.includes(element.stage_id)
                    _this2.StageList.push(element);
                  } else if (_this2.curr_stage == 0) {
                    _this2.StageList.push(element);
                  }

                  if (_this2.curr_stage != 0 && _this2.noFromIds.includes(element.stage_id) && element.stage_id == 19) {
                    // && !this.showAllFlg.includes(element.stage_id)
                    _this2.StageList.push(element);
                  } // if(this.curr_stage != 0 && this.noFromIds.includes(element.stage_id)){
                  //   this.StageList.push(element)
                  // }
                  // if(this.curr_stage != 0 && this.showAllFlg.includes(element.stage_id)){
                  //   this.StageList.push(element)
                  // }
                  // this.StageList.push(element)
                  // }

                } else if (element.status == "completed" && (_this2.curr_stage == 20 || _this2.curr_stage == 21) && element.date_of_completion != 0) {
                  // && !this.showAllFlg.includes(element.stage_id)
                  var gtIndx = _this2.inspecList[_this2.schoolIndex].stages.findIndex(function (x) {
                    return x.stage_id == 19;
                  });

                  var splt = _this2.inspecList[_this2.schoolIndex].stages.splice(gtIndx, 1);

                  var gtIndx1 = _this2.inspecList[_this2.schoolIndex].stages.findIndex(function (x) {
                    return x.stage_id == 25;
                  });

                  var splt1 = _this2.inspecList[_this2.schoolIndex].stages.splice(gtIndx1, 1); // this.StageList.push(element)

                } // else if(element.status == "completed" && this.showAllFlg.includes(element.stage_id)){
                //   this.StageList.push(element)
                // }

              });

              if (_this2.curr_stage != 0) {
                var filet = _this2.stageworktype.filter(function (y) {
                  return y.work_type_id == _this2.work_type_id && y.show_all == 1;
                });

                var obj = {
                  "stage_id": filet[0].id,
                  "stage": filet[0].stage,
                  "date_of_completion": 0,
                  "image": 0,
                  "uploads": 0,
                  "lat": 0,
                  "long": 0,
                  "status": "pending",
                  "visit_id": "",
                  "user_id": "",
                  "eng_name": "",
                  "no_form": 1,
                  "show_all": 1
                };

                _this2.StageList.push(obj); // this.inspecList[this.schoolIndex].stages.push(obj)

              }

              _this2.StageList.reverse();

              console.log(_this2.StageList, 'this.chkkkk');
              console.log(_this2.stageworktype, 'this.chkkkk');
            }, function (error) {
              return console.error(error);
            });
            debugger; // this.ionicstorage.getData('CurrendateSchl').then(
            //   (dataa) => {
            //     if(dataa){
            //       this.CurrendateSchl = dataa
            //       let schoolchek = this.CurrendateSchl.filter( y => y.School_id == this.school_id)
            //       if(schoolchek.length > 0){
            //       this.datevalue = true
            //       }else{
            //       this.datevalue = false
            //       }
            //     }
            //   },
            //   (error) => console.error(error)
            // );
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.inspectionForm = this.fb.group({
              matchOptions: this.fb.array([])
            });
          }
        }, {
          key: "matchOptions",
          get: function get() {
            return this.inspectionForm.controls["matchOptions"];
          }
        }, {
          key: "addMatchOPtions",
          value: function addMatchOPtions() {
            var matchOpt = this.fb.group({
              StageName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
              uploaddimage: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
              upload: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
              uploadMandotory: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
              stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
              dateMinMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('')
            });
            this.matchOptions.push(matchOpt);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            if (this.showInput) {
              this.showInput = false;
              this.matchOptions.clear();
              this.addMatchOPtions();
            } else {
              // this.location.back();
              this.router.navigate(['/tabs/work-inspection']);
            }
          }
        }, {
          key: "goToBackedit",
          value: function goToBackedit() {
            this.router.navigate(['/tabs/work-inspection']);
          }
        }, {
          key: "onChangeStage",
          value: function onChangeStage(arg) {
            var _this3 = this;

            debugger;

            if (arg.target.value != undefined && arg.target.value != null) {
              var valueid = +this.matchOptions.value[0].StageName;
              this.StageList;
              this.matchOptions.clear();
              var i = 0;
              var Index = this.StageList.findIndex(function (x) {
                return x.stage_id == valueid;
              });
              var Indexform = this.StageList.filter(function (x) {
                return x.stage_id == valueid;
              });
              var noform = this.stages.filter(function (x) {
                return x.id == valueid;
              });
              this.noForm = noform[0].no_form;

              if (noform[0].no_form == 1) {
                if (noform[0].id == 19 && noform[0].work_type_id == 3) {
                  var _loop = function _loop(k) {
                    // if( k < valueid){
                    var mandatory = _this3.stages.filter(function (y) {
                      return y.id == _this3.StageList[k].stage_id;
                    });

                    debugger; // if(valueid == 20 || valueid==21){

                    if (_this3.StageList[k].stage_id != 26 && mandatory[0].id != 24) {
                      _this3.uploadImg = true;

                      _this3.addMatchOPtions();

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(_this3.StageList[k].stage_id);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(_this3.StageList[k].stage);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);

                      if (mandatory[0].mandatory_upload == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);

                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                      }

                      i = i + 1; // }

                      if (i == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(_this3.currentDate);

                        _this3.minMax[_this3.StageList[k].stage_id] = {
                          min: "",
                          max: _this3.currentDate1
                        };
                      } else {
                        _this3.minMax[_this3.StageList[k].stage_id] = {
                          min: "",
                          max: ""
                        };
                      } //this.setMinMaxNew(this.StageList[k].id)
                      // } 

                    }
                  };

                  for (var k = Index; k >= 1; k--) {
                    _loop(k);
                  }
                } else {
                  this.addMatchOPtions();
                  this.inspectionForm.controls["matchOptions"]["controls"][0].controls["StageName"].setValue(Indexform[0].stage_id);
                  this.inspectionForm.controls["matchOptions"]["controls"][0].controls["stage"].setValue(Indexform[0].stage);
                  this.inspectionForm.controls["matchOptions"]["controls"][0].controls["uploadMandotory"].setValue(Indexform[0].mandatory_upload == 1 ? true : false);
                  this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate);
                  this.uploadImg = true;
                }
              } else {
                this.uploadImg = true;
                debugger;

                var _loop2 = function _loop2(_k) {
                  // if( k < valueid){
                  var mandatory = _this3.stages.filter(function (y) {
                    return y.id == _this3.StageList[_k].stage_id;
                  });

                  if (valueid == 20 || valueid == 21) {
                    debugger;

                    if (mandatory[0].no_form != 1 && _this3.StageList[_k].stage_id != 25) {
                      // if(){
                      _this3.addMatchOPtions();

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(_this3.StageList[_k].stage_id);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(_this3.StageList[_k].stage);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);

                      if (mandatory[0].mandatory_upload == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);

                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                      }

                      i = i + 1; // }

                      if (i == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(_this3.currentDate);

                        _this3.minMax[_this3.StageList[_k].stage_id] = {
                          min: "",
                          max: _this3.currentDate1
                        };
                      } else {
                        _this3.minMax[_this3.StageList[_k].stage_id] = {
                          min: "",
                          max: ""
                        };
                      } //this.setMinMaxNew(this.StageList[k].id)

                    }

                    _this3.matchOptions;
                    debugger;
                  } else {
                    if (mandatory[0].no_form != 1) {
                      _this3.addMatchOPtions();

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(_this3.StageList[_k].stage_id);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(_this3.StageList[_k].stage);

                      _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);

                      if (mandatory[0].mandatory_upload == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);

                        _this3.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                      }

                      i = i + 1; // }

                      if (i == 1) {
                        _this3.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(_this3.currentDate);

                        _this3.minMax[_this3.StageList[_k].stage_id] = {
                          min: "",
                          max: _this3.currentDate1
                        };
                      } else {
                        _this3.minMax[_this3.StageList[_k].stage_id] = {
                          min: "",
                          max: ""
                        };
                      } //this.setMinMaxNew(this.StageList[k].id)

                    }
                  }
                };

                for (var _k = Index; _k >= 1; _k--) {
                  _loop2(_k);
                }

                this.setMinMax();
              } // for (let k = Index; k >= 1; k--) {
              // // if( k < valueid){
              //   this.addMatchOPtions()
              //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue( this.StageList[k].stage_id)
              //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue( this.StageList[k].stage)
              //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(this.StageList[k].mandatory_upload == 1 ? true : false )
              //   i = i+1
              //   // }
              //   if(i == 1){
              //     this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate)
              //     this.minMax[this.StageList[k].stage_id]={ min:"",max:this.currentDate1 }
              //   } else {
              //     this.minMax[this.StageList[k].stage_id]={ min:"",max:"" }
              //   }
              //   //this.setMinMaxNew(this.StageList[k].id)
              // }


              this.showInput = true;
            }

            if (arg.target.value == 21) {
              this.inspectionForm.controls["matchOptions"]["controls"].splice(1, 1);
            }

            if (arg.target.value == 26) {
              this.curStage = 26;
            } else {
              this.curStage = '';
            }
          }
        }, {
          key: "getStageList",
          value: function getStageList() {
            var _this4 = this;

            this.matchOptions.clear();
            var workid = this.inspecList.filter(function (y) {
              return y.school_id == _this4.route.snapshot.queryParams.school_id;
            }); // this.StageList =workid[0].stages

            var getdata = workid[0].stages;
            var getcheckdata = [];
            this.showInput = true;
            var j = 0;

            var _loop3 = function _loop3(i) {
              if (getdata[i].status == "pending") {
                _this4.addMatchOPtions();

                var mandCheck = _this4.StageList.find(function (x) {
                  return x.id == getdata[i].stage_id;
                });

                getcheckdata.push(getdata[i]);

                _this4.inspectionForm.controls["matchOptions"]["controls"][j].controls["StageName"].setValue(getdata[i].stage_id);

                _this4.inspectionForm.controls["matchOptions"]["controls"][j].controls["uploadMandotory"].setValue(mandCheck.mandatory_upload == 1 ? true : false);

                if (getdata[i].stage == _this4.route.snapshot.queryParams.stage) {
                  _this4.inspectionForm.controls["matchOptions"]["controls"][j].controls["date"].setValue(_this4.currentDate);

                  return 1; // break
                }

                j = j + 1; //this.setMinMaxNew(getdata[i].stage_id)
              }
            };

            for (var i = 0; i < getdata.length; i++) {
              if (_loop3(i)) break;
            }
          }
        }, {
          key: "getUploadedFiles",
          value: function getUploadedFiles(key) {
            var _this5 = this;

            var bucketName = "renewalapplicationemis";
            var filename = key;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                // return result.url  
                _this5.image = result.url;
              } else {
                _this5.alertService.error('Error in Uploading File please try again');
              }
            });
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn(i) {
            var _this6 = this;

            debugger;
            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(null);
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

              _this6.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 10485760) {
                    _this6.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(base64string);

                    _this6.alertService.success('File Uploaded Successfully'); // this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                    //   if (result) {
                    //     this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                    //       this.imageKey = result.key;
                    //       this.viewImage();
                    //       // this.getLocation();
                    //       // this.doc1Uploaded = true;
                    //       // this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue( this.imageKey)
                    //       this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(base64string)
                    //       this.alertService.success('File Uploaded Successfully');
                    //     });
                    //   }
                    // });

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
          key: "viewImage",
          value: function viewImage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this7 = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    debugger;
                    bucketName = "renewalapplicationemis";
                    filename = this.imageKey;
                    expiry = 1800;
                    this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (result) {
                                this.imageURL = result.url;
                              } else {
                                this.alertService.error('Error in getting image file');
                              }

                            case 1:
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
          key: "onSelectFile2",
          value: function onSelectFile2(event, field) {
            var _this8 = this;

            debugger;

            if (event != '' && event != null && event != undefined) {
              var fileName = event.name;
              var splittedName = fileName.split(".");

              if (splittedName[1] == 'pdf' || splittedName[1] == 'png' || splittedName[1] == 'jpg' || splittedName[1] == 'jpeg' || splittedName[1] == 'gif') {
                if (event.type == "application/pdf" && event.size <= 10145728 || (event.type == "image/png" || event.type == "image/jpg" || event.type == "image/jpeg" || event.type == "image/gif") && event.size <= 10485760) {
                  var reader = new FileReader();

                  reader.onload = function (event) {
                    // this.dataURL = event.target.result;
                    var filebase64 = event.target.result;
                    _this8.dataURL = filebase64.split('base64,')[1]; // const base64String = dataURL.split(',')[1];

                    if (field == 1) {
                      _this8.myImgUpload = filebase64;

                      _this8.inspectionForm.controls["matchOptions"]["controls"][_this8.indexvalue].controls["uploaddimage"].setValue(_this8.myImgUpload);

                      console.log(_this8.inspectionForm.controls["matchOptions"]["controls"][_this8.indexvalue].controls["uploaddimage"], '["controls"]');
                    } else if (field == 2) {
                      var obj = {
                        fileName: splittedName[1] != 'pdf' ? splittedName[0] + '.png' : fileName,
                        fileKey: _this8.dataURL
                      };

                      _this8.myFiles.push(obj);

                      _this8.inspectionForm.controls["matchOptions"]["controls"][_this8.indexvalue].controls["upload"].setValue(_this8.myFiles);
                    }

                    _this8.alertService.success("File upload Successfully");
                  };

                  reader.readAsDataURL(event); // const fileReader: FileReader = new FileReader();
                  // this.uploadUrl = fileReader.result;
                  // var bucketName = "renewalapplicationemis";
                  // var filename = splittedName[0];
                  // var ext = splittedName[1];
                  // let expiry: number = 300;
                  // this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                  //   if (result) {
                  //     let files: FileList = event
                  //     // let file : File = files[0];  
                  //     this.uploadService.uploadFile(result.url, files).subscribe((res) => {
                  //       let obj = {
                  //         fileName : fileName,
                  //         fileKey : result.key,
                  //       }
                  //       this.myFiles.push(obj);
                  //       this.alertService.success("File upload Successfully")
                  //     })
                  //   }
                  //   else {
                  //     this.alertService.warning("Image Not Available")
                  //   }
                  // });
                } else {
                  this.alertService.error('File Can`t uploaded because Image size should not exceed 10 MB');
                }
              } else {
                this.alertService.error('Only upload PDF files');
              }
            }
          }
        }, {
          key: "getivalue",
          value: function getivalue(i) {
            this.indexvalue = i;
          }
        }, {
          key: "handleMultiFile",
          value: function handleMultiFile(event, field) {
            debugger;
            this.myFiles = [];
            this.myImgUpload = '';

            for (var i = 0; i < event.target.files.length; i++) {
              this.onSelectFile2(event.target.files[i], field);
            }

            if (field == 1) {
              this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"].setValue(this.myImgUpload);
              console.log(this.myImgUpload, 'this.myImgUpload');
              console.log(this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"], 'sdffsf');
            } else if (field == 2) {
              this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["upload"].setValue(this.myFiles);
            }
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this9 = this;

            debugger;
            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this9.locationCordinates = resp.coords;
              _this9.lat = _this9.locationCordinates.latitude;
              _this9["long"] = _this9.locationCordinates.longitude;
              console.log(_this9["long"] + '----' + _this9["long"]);
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this0 = this;

            debugger;

            if (this.inspectionForm.valid) {
              var currentvalue = [];
              this.Recordvalue;
              var imagecheck = 0;
              var workid = this.inspecList.filter(function (y) {
                return y.school_id == _this0.route.snapshot.queryParams.school_id && y.id == _this0.list_id;
              });
              console.log(this.matchOptions.value, 'this.matchOptions.value');
              this.matchOptions.value.forEach(function (element, i) {
                var camPicbase64 = element.uploaddimage.split('base64,');
                currentvalue.push({
                  "user_id": _this0.user_id,
                  "school_id": _this0.school_id,
                  "list_id": workid[0].id,
                  "work_type": workid[0].work_type_id,
                  "stage": element.StageName,
                  "date_of_completion": element.date,
                  "image": camPicbase64[1] ? camPicbase64[1] : null,
                  "uploads": element.upload || element.upload != '' ? JSON.stringify(element.upload) : null,
                  "lat": _this0.lat,
                  "long": _this0["long"],
                  "visit": element.date == _this0.currentDate ? 1 : 0,
                  "cur_stage": element.date == _this0.currentDate ? element.StageName : ""
                });

                if ((_this0.matchOptions.value[0].uploaddimage == "" || !_this0.matchOptions.value[0].uploaddimage) && _this0.matchOptions.value[0].StageName != 25) {
                  imagecheck = 1;
                }
              }); // All capture img are mandatory
              // if( this.noForm == 1){
              //   imagecheck = 0
              // }

              if (imagecheck == 0) {
                //  let matchstatus = this.StageList.filter(y => y.id == this.matchOptions.value[this.matchOptions.value.length -1].StageName)
                this.matchOptions.value.forEach(function (element) {
                  if (element.StageName == 27 || element.StageName == 28 || element.StageName == 29) {
                    var obj = {
                      "stage_id": _this0.matchOptions.value[0].StageName,
                      "stage": _this0.matchOptions.value[0].stage,
                      "date_of_completion": element.date,
                      "image": 0,
                      "uploads": element.upload,
                      "lat": 0,
                      "long": 0,
                      "status": "completed",
                      "visit_id": "",
                      "user_id": "",
                      "eng_name": "",
                      "no_form": 1,
                      "show_all": 1
                    };
                    _this0.inspecList[_this0.schoolIndex].cur_stage_name = _this0.matchOptions.value[0].stage;
                    _this0.inspecList[_this0.schoolIndex].cur_stage = _this0.matchOptions.value[0].StageName;

                    _this0.inspecList[_this0.schoolIndex].stages.push(obj);
                  } else {
                    var staindex = _this0.inspecList[_this0.schoolIndex].stages.findIndex(function (y) {
                      return y.stage_id == element.StageName;
                    });

                    _this0.inspecList[_this0.schoolIndex].stages[staindex].date_of_completion = element.date;
                    _this0.inspecList[_this0.schoolIndex].stages[staindex].image = element.uploaddimage;
                    _this0.inspecList[_this0.schoolIndex].stages[staindex].uploads = element.upload;
                    _this0.inspecList[_this0.schoolIndex].stages[staindex].status = "completed";
                    _this0.inspecList[_this0.schoolIndex].cur_stage_name = _this0.matchOptions.value[0].stage;
                    _this0.inspecList[_this0.schoolIndex].cur_stage = _this0.matchOptions.value[0].StageName;
                  }
                });
                var records = {
                  "json": currentvalue
                };

                if (this.networkService.getCurrentNetworkStatus() == 0) {
                  console.log('sdfsdfsdf');
                  this.SidsService.PostinsWorkForm(records).subscribe(function (res) {
                    if (res.dataStatus == true && res.status == 200) {
                      _this0.alertService.success("Data Insert Successfully");

                      _this0.refreshInspectionList();

                      _this0.router.navigate(['/tabs/work-inspection-stage'], {
                        queryParams: {
                          'school_id': _this0.route.snapshot.queryParams.school_id,
                          'list_id': _this0.list_id,
                          'curr_stage': _this0.curStage
                        }
                      });

                      _this0.ionicstorage.removeKey('Records');

                      _this0.ionicstorage.insertData_Replace('inspectionData', _this0.inspecList); // this.CurrendateSchl.push({
                      // "School_id":this.school_id,
                      // "date":this.currentDate,
                      // })  
                      // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)

                    } else {
                      _this0.alertService.error(res.message);
                    }
                  });
                } else {
                  currentvalue.forEach(function (ele) {
                    _this0.Recordvalue.push(ele);
                  });
                  this.alertService.success("Data Insert Successfully");
                  this.router.navigate(['/tabs/work-inspection-stage'], {
                    queryParams: {
                      'school_id': this.route.snapshot.queryParams.school_id,
                      'list_id': this.list_id,
                      'curr_stage': this.curStage
                    }
                  });
                  this.ionicstorage.insertData_Replace('Records', this.Recordvalue);
                  this.ionicstorage.insertData_Replace('inspectionData', this.inspecList); // this.CurrendateSchl.push({
                  // "School_id":this.school_id,
                  // "date":this.currentDate,
                  // })  
                  // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)
                }
              } else {
                this.alertService.error('Please Upload Current Date Image');
              }
            } else {
              this.alertService.error('Please Fill All Mandatory Field');
            }
          }
        }, {
          key: "refreshInspectionList",
          value: function refreshInspectionList() {
            var _this1 = this;

            // Check network status first
            if (this.networkService.getCurrentNetworkStatus() == 0) {
              // Online - call API
              this.SidsService.HMinspection_list(this.user_id).subscribe(function (response) {
                var _a;

                var list = ((_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.list) || (response === null || response === void 0 ? void 0 : response.list) || (response === null || response === void 0 ? void 0 : response.data) || response || []; // Filter based on user type

                if (_this1.emis_usertype == 8) {
                  // HM user - show only their school's demolition work
                  var filteredList = list.filter(function (x) {
                    return String(x.work_type_id) === '3' && String(x.school_id) === String(_this1.schoolKeyId);
                  }); // Update the inspection data in storage

                  _this1.ionicstorage.insertData_Replace('inspectionData', filteredList);
                } else {
                  // Other users - show all
                  _this1.ionicstorage.insertData_Replace('inspectionData', list);
                }

                console.log('Inspection list refreshed via API');
              }, function (error) {
                console.error('Error refreshing inspection list:', error);
              });
            } else {
              // Offline - just update local storage with current data
              this.refreshLocalInspectionList();
            }
          }
        }, {
          key: "schoolKeyId",
          value: function schoolKeyId(_schoolKeyId) {
            throw new Error('Method not implemented.');
          } // ✅ Method to refresh local inspection list

        }, {
          key: "refreshLocalInspectionList",
          value: function refreshLocalInspectionList() {
            var _this10 = this;

            this.ionicstorage.getData('inspectionData').then(function (data) {
              if (data) {
                // Update the specific school's data in the list
                var index = data.findIndex(function (item) {
                  return item.school_id === _this10.school_id && item.id === _this10.list_id;
                });

                if (index !== -1) {
                  // Update the specific item with new stage data
                  data[index] = _this10.inspecList[_this10.schoolIndex];

                  _this10.ionicstorage.insertData_Replace('inspectionData', data);
                }
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "updateForm",
          value: function updateForm() {
            var _this11 = this;

            debugger;

            if (this.inspectionForm.valid) {
              var currentvalue = [];
              this.Recordvalue;
              var imagecheck = 0;
              var workid = this.inspecList.filter(function (y) {
                return y.school_id == _this11.route.snapshot.queryParams.school_id && y.id == _this11.list_id;
              });
              console.log(this.matchOptions.value, 'this.matchOptions.value');
              this.matchOptions.value.forEach(function (element, i) {
                var chkPng = element.uploaddimage.split('.');
                var camPicbase64;

                if (chkPng[1] == 'png') {
                  camPicbase64 = element.uploaddimage;
                } else {
                  var baseSplit = element.uploaddimage.split('base64,');
                  camPicbase64 = baseSplit[1];
                }

                currentvalue.push({
                  "user_id": _this11.user_id,
                  "school_id": _this11.school_id,
                  "list_id": workid[0].id,
                  "work_type": workid[0].work_type_id,
                  "stage": element.StageName,
                  "image": camPicbase64 ? camPicbase64 : null
                });

                if ((_this11.matchOptions.value[0].uploaddimage == "" || !_this11.matchOptions.value[0].uploaddimage) && _this11.matchOptions.value[0].StageName != 25) {
                  imagecheck = 1;
                }
              });

              if (imagecheck == 0) {
                this.matchOptions.value.forEach(function (element) {
                  if (element.StageName == 27 || element.StageName == 28 || element.StageName == 29) {
                    var obj = {
                      "stage_id": _this11.matchOptions.value[0].StageName,
                      "stage": _this11.matchOptions.value[0].stage,
                      "date_of_completion": element.date,
                      "image": 0,
                      "uploads": element.upload,
                      "lat": 0,
                      "long": 0,
                      "status": "completed",
                      "visit_id": "",
                      "user_id": "",
                      "eng_name": "",
                      "no_form": 1,
                      "show_all": 1
                    };
                    _this11.inspecList[_this11.schoolIndex].cur_stage_name = _this11.matchOptions.value[0].stage;
                    _this11.inspecList[_this11.schoolIndex].cur_stage = _this11.matchOptions.value[0].StageName;

                    _this11.inspecList[_this11.schoolIndex].stages.push(obj);
                  } else {
                    var staindex = _this11.inspecList[_this11.schoolIndex].stages.findIndex(function (y) {
                      return y.stage_id == element.StageName;
                    });

                    _this11.inspecList[_this11.schoolIndex].stages[staindex].date_of_completion = element.date;
                    _this11.inspecList[_this11.schoolIndex].stages[staindex].image = element.uploaddimage;
                    _this11.inspecList[_this11.schoolIndex].stages[staindex].uploads = element.upload;
                    _this11.inspecList[_this11.schoolIndex].stages[staindex].status = "completed";
                    _this11.inspecList[_this11.schoolIndex].cur_stage_name = _this11.matchOptions.value[0].stage;
                    _this11.inspecList[_this11.schoolIndex].cur_stage = _this11.matchOptions.value[0].StageName;
                  }
                });
                var records = {
                  "json": currentvalue
                };

                if (this.networkService.getCurrentNetworkStatus() == 0) {
                  this.SidsService.PostinsWorkForm(records).subscribe(function (res) {
                    if (res.dataStatus == true && res.status == 200) {
                      _this11.alertService.success("Data Insert Successfully");

                      _this11.router.navigate(['/tabs/work-inspection-stage'], {
                        queryParams: {
                          'school_id': _this11.route.snapshot.queryParams.school_id,
                          'list_id': _this11.list_id,
                          'curr_stage': _this11.curr_stage
                        }
                      });

                      _this11.ionicstorage.removeKey('Records');

                      _this11.ionicstorage.insertData_Replace('inspectionData', _this11.inspecList); // this.CurrendateSchl.push({
                      // "School_id":this.school_id,
                      // "date":this.currentDate,
                      // })  
                      // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)

                    } else {
                      _this11.alertService.error(res.message);
                    }
                  });
                } else {
                  currentvalue.forEach(function (ele) {
                    _this11.Recordvalue.push(ele);
                  });
                  this.alertService.success("Data Insert Successfully");
                  this.router.navigate(['/tabs/work-inspection-stage'], {
                    queryParams: {
                      'school_id': this.route.snapshot.queryParams.school_id,
                      'list_id': this.list_id
                    }
                  });
                  this.ionicstorage.insertData_Replace('Records', this.Recordvalue);
                  this.ionicstorage.insertData_Replace('inspectionData', this.inspecList);
                }
              } else {
                this.alertService.error('Please Upload Current Date Image');
              }
            } else {
              this.alertService.error('Please Fill All Mandatory Field');
            }
          }
        }, {
          key: "setMinMax",
          value: function setMinMax() {
            var _this12 = this;

            this.matchOptions.value.forEach(function (e) {
              if (e != 'undefined') {
                _this12.setMinMaxNew(e.stage);
              }
            });
          }
        }, {
          key: "setMinMaxNew",
          value: function setMinMaxNew(idx) {
            var _this13 = this;

            debugger;
            var stage = this.listarray.stages.find(function (x) {
              return x.stage == idx;
            }).stage_id;
            var end = this.matchOptions.value[this.matchOptions.value.length - 1].StageName;
            var first = this.matchOptions.value[0].StageName;
            var top = first;
            var bottom = end;

            if (end < stage) {
              end = stage - 1;
            }

            var min = '';
            var max = '';

            if (stage == top) {
              var _idx = this.matchOptions.value.findIndex(function (y) {
                return y.StageName == top;
              });

              var e = this.matchOptions.value[_idx];
              max = e.date;
            } else {
              var _loop4 = function _loop4(i) {
                var idx = _this13.matchOptions.value.findIndex(function (y) {
                  return y.StageName == i;
                });

                var e = _this13.matchOptions.value[idx];

                if (e != undefined) {
                  if (e.date != 'undefined' && e.date != '') {
                    max = e.date;
                    return 1; // break
                  }
                }
              };

              for (var i = stage; i <= top; i++) {
                if (_loop4(i)) break;
              }
            }

            if (stage == bottom) {
              var _idx2 = this.matchOptions.value.findIndex(function (y) {
                return y.StageName == bottom;
              });

              var _e = this.matchOptions.value[_idx2];
              min = _e.date;
            } else {
              var _loop5 = function _loop5(_i) {
                var idx = _this13.matchOptions.value.findIndex(function (y) {
                  return y.StageName == _i;
                });

                var e = _this13.matchOptions.value[idx];

                if (e != undefined) {
                  if (e.date != 'undefined' && e.date != '') {
                    min = e.date;
                    return 1; // break
                  }
                }
              };

              for (var _i = stage; _i >= bottom; _i--) {
                if (_loop5(_i)) break;
              }
            }
            /*this.matchOptions.value.forEach((e) => {
              if(e != 'undefined'){
                if(e.StageName==end)
                  min=(e.date != 'undefined' && e.date!='')? e.date : '';
                      if(e.StageName==first){
                  max=(e.date != 'undefined' && e.date!='')? e.date : '';
                }
              }
            })*/
            //min = min.split("-").reverse().join("-");
            //max = max.split("-").reverse().join("-");


            this.minMax[stage].min = min;
            this.minMax[stage].max = max;
            console.log(this.minMax, 'this.minMax');
          }
        }, {
          key: "patchData",
          value: function patchData() {
            var _this14 = this;

            this.ionicstorage.getData('StageList').then(function (dataa1) {
              if (dataa1 != null && dataa1 != undefined) {
                _this14.stages = dataa1;
                console.log(_this14.stages, 'this.stages');

                _this14.matchOptions.clear();

                _this14.showInput = true;

                _this14.ionicstorage.getData('inspectionData').then(function (dataa) {
                  debugger; // this.editStage = 

                  _this14.inspecList = dataa;

                  var listarray = _this14.inspecList.filter(function (x) {
                    return x.school_id == _this14.route.snapshot.queryParams.school_id && x.id == _this14.list_id;
                  });

                  _this14.listarray = listarray[0];
                  _this14.schoolIndex = _this14.inspecList.findIndex(function (x) {
                    return x.school_id == _this14.route.snapshot.queryParams.school_id && x.id == _this14.list_id;
                  });

                  var stgeLst = _this14.inspecList[_this14.schoolIndex].stages.filter(function (x) {
                    return x.status == "completed";
                  });

                  console.log(stgeLst, 'stgeLst');

                  var _loop6 = function _loop6(i) {
                    var mandatory = _this14.stages.filter(function (y) {
                      return y.id == stgeLst[i].stage_id;
                    });

                    var uploadParse = typeof stgeLst[i].uploads == 'string' && stgeLst[i].uploads != '' ? JSON.parse(stgeLst[i].uploads) : stgeLst[i].uploads;

                    _this14.addMatchOPtions();

                    console.log(typeof stgeLst[i].uploads);
                    console.log(stgeLst[i]);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["date"].setValue(stgeLst[i].date_of_completion);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(stgeLst[i].image);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(stgeLst[i].stage_id);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(stgeLst[i].stage);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValue(uploadParse);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["date"].updateValueAndValidity();

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].updateValueAndValidity();

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].updateValueAndValidity();

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].updateValueAndValidity();

                    _this14.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].updateValueAndValidity();
                  };

                  for (var i = 0; i < stgeLst.length; i++) {
                    _loop6(i);
                  }

                  _this14.uploadImg = true;
                  console.log(_this14.inspectionForm.controls["matchOptions"]["controls"]);
                }, function (error) {
                  return console.error(error);
                });

                console.log(_this14.inspectionForm.controls);
              } else {}
            }, function (error) {
              return console.error(error);
            });
          }
        }]);
      }();

      _InspectionFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__.SidsService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.Geolocation
        }];
      };

      _InspectionFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-inspection-form',
        template: _raw_loader_inspection_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inspection_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InspectionFormPage);
      /***/
    },

    /***/
    9701:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/sids/inspection-form/inspection-form.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  background: #f3f4fa;\n}\nion-content .card {\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  background: #fff;\n  margin: 12px;\n}\nform {\n  background: #e9e9e9;\n  padding: 2px 0px 10px;\n}\n.butnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n}\n.submitLabel {\n  color: white;\n}\n.uploadImage {\n  max-width: 60px;\n  max-height: 60px;\n  margin-left: 10px;\n}\n.info-alert {\n  background: #e7daf0;\n  width: 95%;\n  margin: 20px auto 0px;\n  border: 1px solid #b593cb;\n  border-radius: 10px;\n  padding: 10px;\n}\n.info-alert h5 {\n  color: #9162b0;\n  font-size: 14px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb24tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDQTtFQUNRLHlCQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFVjtBQUNJO0VBQ0ksWUFBQTtBQUVSO0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGO0FBQUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJSiIsImZpbGUiOiJpbnNwZWN0aW9uLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZDogI2YzZjRmYTtcclxuICAuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgfVxyXG4gXHJcbn1cclxuZm9ybXtcclxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIHBhZGRpbmc6IDJweCAwcHggMTBweDtcclxufVxyXG4uYnV0bkRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI2N0IzO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdExhYmVse1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuLnVwbG9hZEltYWdle1xyXG4gIG1heC13aWR0aDogNjBweDtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5mby1hbGVydHtcclxuICBiYWNrZ3JvdW5kOiAjZTdkYWYwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNTkzY2I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGg1e1xyXG4gICAgY29sb3I6ICM5MTYyYjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    72346:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/inspection-form/inspection-form.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" *ngIf=\"editStage != 1\" (click)=\"goToBack()\"></ion-icon>\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" *ngIf=\"editStage == 1\" (click)=\"goToBackedit()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size:14px;\">{{listarray?.school_name}} ({{listarray?.udise_code}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <form [formGroup]=\"inspectionForm\"> -->\r\n  <div *ngIf=\"!datevalue\"> \r\n    <form [formGroup]=\"inspectionForm\">\r\n      <div formArrayName=\"matchOptions\" class=\"flex-gap-bottom\"\r\n        *ngFor=\"let options of inspectionForm.get('matchOptions')['controls']; let i = index\">\r\n        <div [formGroupName]=\"i\"  class=\"card\" style=\"box-shadow: 0px 10px 10px rgba(0,0,0,0.08);\">\r\n          <div *ngIf=\"showInput\"> \r\n            <ion-item style=\"border-style:none\"><ion-label><b>{{matchOptions.value[i].stage.split('-')[0]}}</b></ion-label></ion-item>\r\n            <!-- <ion-item>\r\n              <ion-select placeholder=\"Select Stage Name\" formControlName=\"StageName\" hidden >\r\n                <ion-select-option [value]=\"item.id\" *ngFor=\"let item of StageList\"> {{item.stage}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> -->\r\n          </div>\r\n          <div *ngIf=\"!showInput\">\r\n            <ion-item style=\"border-style:none\"><ion-label><b>Select The Stage</b></ion-label></ion-item>\r\n            <ion-item>\r\n              <ion-select placeholder=\"Select Stage Name\" formControlName=\"StageName\" (ionChange)=\"onChangeStage($event)\">\r\n                <ion-select-option [value]=\"item.stage_id\" *ngFor=\"let item of StageList\"> {{item.stage}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <div *ngIf=\"showInput\">\r\n            <div class=\"card\" *ngIf=\"editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i != 0\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"date\" formControlName=\"date\" [min]=\"minMax[matchOptions.value[i].StageName].min\" [max]=\"minMax[matchOptions.value[i].StageName].max\" (change)=\"setMinMax()\">\r\n              </div>\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i == 0\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"text\" formControlName=\"date\" item-end disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"editStage == 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"text\" formControlName=\"date\" item-end disabled>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card\" *ngIf=\"uploadImg && matchOptions.value[i].StageName !=25 && editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i == 0\">\r\n                <ion-label><b>Capture The Image <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName=\"uploaddimage\"></ion-input>\r\n                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i)\"></ion-icon>\r\n              </div>\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i != 0\">\r\n                <ion-label><b>Upload The Image</b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" id=\"cloud-upload\" (change)=\"handleMultiFile($event,1)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n\r\n                <!-- <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName=\"uploaddimage\"></ion-input>\r\n                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i)\"></ion-icon> -->\r\n              </div>\r\n              <!-- <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage\" src=\"https://deka0egrc3bqo.cloudfront.net/{{matchOptions.value[i].uploaddimage}}\"> -->\r\n              <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage\" src=\"{{matchOptions.value[i].uploaddimage}}\">\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"uploadImg && matchOptions.value[i].StageName !=25 && editStage == 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"!matchOptions.value[i].uploaddimage\">\r\n                <ion-label><b>Upload The Image <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" id=\"cloud-upload\" (change)=\"handleMultiFile($event,1)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n              </div>\r\n              <div *ngIf=\"matchOptions.value[i].uploaddimage\">\r\n                <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage.split('.')[1] == 'png'\" src=\"https://deka0egrc3bqo.cloudfront.net/{{matchOptions.value[i].uploaddimage}}\">\r\n                <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage.split('.')[1] != 'png'\" src=\"{{matchOptions.value[i].uploaddimage}}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card\" *ngIf=\"matchOptions.value[i].uploadMandotory && editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\">\r\n                <ion-label><b>Upload the Documents <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" multiple id=\"cloud-upload\" (change)=\"handleMultiFile($event,2)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n              </div>\r\n              <div *ngIf=\"matchOptions.value[i].upload.length > 0\">\r\n                <div *ngFor=\"let data of matchOptions.value[i].upload\">\r\n                  <ion-badge color=\"primary\" style=\"color: #fff;\">{{data.fileName}}</ion-badge>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"matchOptions.value[i].uploadMandotory && editStage == 1\">\r\n              <ion-label><b>Upload the Documents</b></ion-label>\r\n              <div *ngIf=\"matchOptions.value[i].upload.length > 0\">\r\n                <div *ngFor=\"let data of matchOptions.value[i].upload\">\r\n                  <ion-badge color=\"primary\" style=\"color: #fff;\">{{data.fileName}}</ion-badge>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"text-align: center;\" *ngIf=\"uploadImg\">\r\n              <p style=\"color: red;font-size: 14px;\">Note:File should be Below 10MB</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showInput && editStage != 1\" style=\" text-align: center;\" (click)=\"submitForm()\">\r\n        <div class=\"butnDiv\">\r\n          <ion-label class=\"submitLabel\">Submit</ion-label>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showInput && editStage == 1\" style=\" text-align: center;\" (click)=\"updateForm()\">\r\n        <div class=\"butnDiv\">\r\n          <ion-label class=\"submitLabel\">Update</ion-label>\r\n        </div>\r\n      </div>\r\n  </form>\r\n  </div>\r\n  <div *ngIf=\"datevalue\">\r\n \r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n     <div class=\"card text-center\" style=\"width: 18rem;  background-color: #8B67B3;color: #ffffff;\">\r\n      <div class=\"card-body\" >\r\n        <h5 class=\"card-title\" style=\"margin:0px;\">You have already visited this school</h5>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"info-alert\">\r\n    <h4 style=\"font-size: 18px;\"><b style=\"text-decoration:underline\">Note</b></h4>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Work Not Started</b> - Please select <b>“Work Not Started”</b> if HM has not sent the request letter.</h5>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Yet To Be Demolished</b> - Please select <b>Yet To Be Demolished</b> if HM has sent the request letter , but the building is Not Demolished.</h5>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Demolition Not Required</b> - If this building is in good condition or there is only minor repair please choose <b>\"Demolition not required\"</b> option</h5>\r\n    <h5 class=\"card-title\"><b style=\"color:#775090;font-size: 16px;\">Current Stage</b> - Please update the current stage of the project on the day of your visit and capture the live photography by using camera.</h5>\r\n    <h5 class=\"card-title\" style=\"margin:0px;\"><b style=\"color:#775090;font-size: 16px;\">Completed Stages</b> - For previously completed stages, Please upload the image which is already captured by the school staffs.</h5>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_inspection-form_inspection-form_module_ts-es5.js.map