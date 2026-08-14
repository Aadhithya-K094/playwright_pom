(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-stulist_tracking-stulist_module_ts"], {
    /***/
    4635:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-stulist/tracking-stulist-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStulistPageRoutingModule": function TrackingStulistPageRoutingModule() {
          return (
            /* binding */
            _TrackingStulistPageRoutingModule
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


      var _tracking_stulist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-stulist.page */
      27851);

      var routes = [{
        path: '',
        component: _tracking_stulist_page__WEBPACK_IMPORTED_MODULE_0__.TrackingStulistPage
      }];

      var _TrackingStulistPageRoutingModule = /*#__PURE__*/_createClass(function TrackingStulistPageRoutingModule() {
        _classCallCheck(this, TrackingStulistPageRoutingModule);
      });

      _TrackingStulistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TrackingStulistPageRoutingModule);
      /***/
    },

    /***/
    41800:
    /*!************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-stulist/tracking-stulist.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStulistPageModule": function TrackingStulistPageModule() {
          return (
            /* binding */
            _TrackingStulistPageModule
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


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ion2-calendar */
      18834);
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _tracking_stulist_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-stulist-routing.module */
      4635);
      /* harmony import */


      var _tracking_stulist_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tracking-stulist.page */
      27851);

      var _TrackingStulistPageModule = /*#__PURE__*/_createClass(function TrackingStulistPageModule() {
        _classCallCheck(this, TrackingStulistPageModule);
      });

      _TrackingStulistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _tracking_stulist_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrackingStulistPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarModule],
        declarations: [_tracking_stulist_page__WEBPACK_IMPORTED_MODULE_2__.TrackingStulistPage]
      })], _TrackingStulistPageModule);
      /***/
    },

    /***/
    27851:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-stulist/tracking-stulist.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingStulistPage": function TrackingStulistPage() {
          return (
            /* binding */
            _TrackingStulistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_tracking_stulist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tracking-stulist.page.html */
      7755);
      /* harmony import */


      var _tracking_stulist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-stulist.page.scss */
      18080);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cwsn_calendar_cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cwsn-calendar/cwsn-calendar.page */
      7414);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);

      var _TrackingStulistPage = /*#__PURE__*/function () {
        function TrackingStulistPage(router, modalCtrl, route, http, activatedRoute, uploadService, alertService, cwsnService, networkService, ionicstorage) {
          _classCallCheck(this, TrackingStulistPage);

          this.router = router;
          this.modalCtrl = modalCtrl;
          this.route = route;
          this.http = http;
          this.activatedRoute = activatedRoute;
          this.uploadService = uploadService;
          this.alertService = alertService;
          this.cwsnService = cwsnService;
          this.networkService = networkService;
          this.ionicstorage = ionicstorage;
          this.noData = 0;
          this.calendarOptions = {
            from: new Date(2015, 0, 1) // January 1, 2020

          };
          this.optionsRange = {
            pickMode: 'range',
            from: new Date(2015, 0, 1)
          };
          this.schFilter = [];
          this.totalStudents = 0;
          this.stuIds = [];
          this.currentMonth = (0, _angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(new Date(), 'MMMM', 'en-US');
          this.monchk = new Date().getMonth() + 1;
          this.currentYear = new Date().getFullYear();
          console.log(this.monchk);
        }

        return _createClass(TrackingStulistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this.studentdetail = JSON.parse(params['studentdata']);
              console.log('studentdetail', _this.studentdetail);
            });

            if (this.currNetWrkSts == 0) {
              this.ionicstorage.getData('studentlistGet').then(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                  var i, _i;

                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (!data) {
                          _context.n = 7;
                          break;
                        }

                        this.studentchkdata = data;
                        this.studentpending = [];

                        for (i = 0; i < data.length; i++) {
                          if (data[i].Status == 2) {
                            this.studentpending.push(data[i]);
                          }
                        }

                        if (!this.studentpending) {
                          _context.n = 6;
                          break;
                        }

                        this.finaldata = [];
                        _i = 0;

                      case 1:
                        if (!(_i < this.studentpending.length)) {
                          _context.n = 5;
                          break;
                        }

                        if (!this.studentpending[_i].before_screening_photo) {
                          _context.n = 4;
                          break;
                        }

                        _context.n = 2;
                        return this.uploadPhoto(this.studentpending[_i].before_screening_photo);

                      case 2:
                        this.studentpending[_i].before_screening_photo = _context.v;
                        _context.n = 3;
                        return this.uploadPhoto(this.studentpending[_i].after_screening_photo);

                      case 3:
                        this.studentpending[_i].after_screening_photo = _context.v;
                        this.finaldata.push(this.studentpending[_i]);

                      case 4:
                        _i++;
                        _context.n = 1;
                        break;

                      case 5:
                        if (this.finaldata) {
                          this.movelive();
                        }

                        if (this.finaldata) {
                          this.homeBasedjson();
                        }

                      case 6:
                        _context.n = 8;
                        break;

                      case 7:
                        this.homeBasedjson();

                      case 8:
                        return _context.a(2);
                    }
                  }, _callee, this);
                }));
              });
            } else {
              this.homeBasedjson();
            }
          } // ionViewDidEnter() {
          //   this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
          //     this.activatedRoute.queryParams.subscribe(params => {
          //     this.studentdetail = JSON.parse(params['studentdata']);
          //       console.log('studentdetail', this.studentdetail)
          //     })
          //     if(this.currNetWrkSts == 0){
          //       this.ionicstorage.getData('studentlistGet').then(
          //       async(data) => {
          //         if(data){
          //           this.studentchkdata = data;
          //           this.studentpending =[]
          //           for(let i=0;i<data.length;i++){
          //             if(data[i].Status == 2){
          //               this.studentpending.push(data[i]);
          //             }
          //           }
          //           if(this.studentpending){
          //             this.finaldata = []
          //             for(let i=0;i<this.studentpending.length;i++){
          //               if(this.studentpending[i].before_screening_photo){
          //                 this.studentpending[i].before_screening_photo = await this.uploadPhoto(this.studentpending[i].before_screening_photo);
          //                 this.studentpending[i].after_screening_photo = await this.uploadPhoto(this.studentpending[i].after_screening_photo);
          //                 // this.studentpending[i].Status = 1
          //                 this.finaldata.push(this.studentpending[i])
          //               }
          //             }
          //             if(this.finaldata){
          //               this.movelive()
          //             }
          //             if(this.finaldata){
          //               this.homeBasedjson();
          //             }
          //           }
          //         }
          //         else{
          //           this.homeBasedjson();
          //         }
          //       })
          //     }
          //     else{
          //       this.homeBasedjson();
          //     }
          // }

        }, {
          key: "uploadPhoto",
          value: function uploadPhoto(base64string) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var bucketName, expiry, base, blob;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    bucketName = "renewalapplicationemis";
                    expiry = 300;
                    base = base64string.split('base64,');
                    blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');

                    if (!(blob.size <= 3145728)) {
                      _context2.n = 1;
                      break;
                    }

                    if (!(this.currNetWrkSts == 0)) {
                      _context2.n = 1;
                      break;
                    }

                    console.log('1');
                    return _context2.a(2, this.uploadService.getSignedUrl(bucketName, 'jpg', 'jpg', expiry).toPromise().then(function (result) {
                      if (result) {
                        _this2.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                          console.log('3');
                        });

                        return result.key;
                      }
                    }));

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "movelive",
          value: function movelive() {
            var _this3 = this;

            this.dataobj = [];
            this.finaldata;

            for (var i = 0; i < this.finaldata.length; i++) {
              if (this.finaldata[i]) {
                var obj = {
                  IndxId: "",
                  SchlId: this.finaldata[i].school_id,
                  StdntId: this.finaldata[i].id,
                  DisableType: this.finaldata[i].differently_abled,
                  ScrnDate: this.finaldata[i].screening_date,
                  BeforePhoto: this.finaldata[i].before_screening_photo,
                  BeforeLong: this.finaldata[i].longitude_before_screening,
                  BeforeLati: this.finaldata[i].latitude_before_screening,
                  AfterPhoto: this.finaldata[i].after_screening_photo,
                  AfterLong: this.finaldata[i].longitude_after_screening,
                  AftereLati: this.finaldata[i].latitude_after_screening,
                  StartTime: this.finaldata[i].start_time,
                  EndTime: this.finaldata[i].end_time,
                  Duration: this.finaldata[i].duration_intervention,
                  Ques1: this.finaldata[i].question1,
                  Ques2: this.finaldata[i].question2,
                  Ques3: this.finaldata[i].question3
                };
                this.dataobj.push(obj);
              }
            }

            if (this.dataobj) {
              var data = {
                "records": this.dataobj
              };
              this.cwsnService.trackingQues(data).subscribe(function (data) {
                if (data.dataStatus == true) {
                  _this3.alertService.success(data.message);

                  _this3.ionicstorage.getData('studentlistGet').then(function (data) {
                    if (data) {
                      _this3.studupdate = [];

                      for (var _i2 = 0; _i2 < data.length; _i2++) {
                        data[_i2].Status = 1;

                        _this3.studupdate.push(data[_i2]);
                      }

                      if (_this3.studupdate) {
                        _this3.ionicstorage.insertData_Replace('studentlistGet', _this3.studupdate);
                      }
                    }
                  });

                  _this3.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                } else {// this.alertService.error(data.message);
                }
              });
            }
          }
        }, {
          key: "homeBasedjson",
          value: function homeBasedjson() {
            var _this4 = this;

            if (this.currNetWrkSts == 0) {
              var schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/Homebased_ie_studends_list.json';
              this.http.get(schemeJson).subscribe(function (data) {
                _this4.schoolType = data.Homebased_ie_studends_list;
                _this4.schFilter = [];

                for (var i = 0; i < _this4.schoolType.length; i++) {
                  if (_this4.studentdetail.school_id == _this4.schoolType[i].school_id) {
                    _this4.schFilter.push(_this4.schoolType[i]);
                  }

                  _this4.totalStudents = _this4.schFilter.length;
                }

                console.log(_this4.schFilter, _this4.schFilter);

                if (_this4.schFilter.length > 0) {
                  _this4.studentGet();
                } else {
                  var _schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/therapist_home_based_stud_list_json.json  ';

                  _this4.http.get(_schemeJson).subscribe(function (data) {
                    _this4.schoolType = data.therapist_home_based_stud_list;
                    _this4.schFilter = [];

                    for (var _i3 = 0; _i3 < _this4.schoolType.length; _i3++) {
                      if (_this4.studentdetail.school_id == _this4.schoolType[_i3].school_id) {
                        _this4.schFilter.push(_this4.schoolType[_i3]);
                      }

                      _this4.totalStudents = _this4.schFilter.length;
                    }

                    console.log(_this4.schFilter, _this4.schFilter);

                    if (_this4.schFilter.length > 0) {
                      _this4.studentGet();
                    }
                  });
                }
              });
            } else {
              console.log("test1");
              this.ionicstorage.getData('sclType').then(function (dataa1) {
                if (dataa1) {
                  _this4.schoolType = dataa1;
                  _this4.schFilter = [];

                  for (var i = 0; i < _this4.schoolType.length; i++) {
                    if (_this4.studentdetail.school_id == _this4.schoolType[i].school_id) {
                      _this4.schFilter.push(_this4.schoolType[i]);

                      console.log(_this4.schFilter, " this.schFilter");
                    }

                    _this4.totalStudents = _this4.schFilter.length;
                  }

                  if (_this4.schFilter.length > 0) {
                    _this4.studentGet();
                  }
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "studentGet",
          value: function studentGet() {
            var _this5 = this;

            this.datastatus = [];

            if (this.currNetWrkSts == 0) {
              this.datastatus = [];
              this.cwsnService.getStudetails(this.studentdetail.school_id).subscribe(function (res) {
                if (res.dataStatus == true) {
                  _this5.datastatus = res.result;
                  console.log(_this5.datastatus, "this.datastatus123");

                  if (_this5.datastatus) {
                    _this5.datastatus.forEach(function (element) {
                      element.Status = 1;
                    });

                    _this5.ionicstorage.insertData_Replace('studentlistGet', _this5.datastatus);

                    _this5.studetchk = [];
                    _this5.count = 0;

                    var _loop = function _loop(i) {
                      _this5.stuIds = _this5.datastatus.filter(function (tt) {
                        return tt.id == _this5.schFilter[i].id;
                      });

                      _this5.studetchk.push(_this5.stuIds);

                      _this5.count = 0;

                      for (var k = 0; k < _this5.stuIds.length; k++) {
                        var datechk = _this5.stuIds[k].screening_date.split('-');

                        console.log(datechk[1]);
                        var currentYear = datechk[0];
                        var currentMo = datechk[1];

                        if (_this5.monchk == parseInt(currentMo) && _this5.currentYear == parseInt(currentYear)) {
                          _this5.count = _this5.count + 1;
                        }
                      }

                      var count = _this5.count;
                      Object.assign(_this5.schFilter[i], {
                        count: count
                      }); // for(let k=0; k<this.datastatus.length; k++){
                      //   if(this.schFilter[i].id == this.datastatus[k].id){
                      //     this.schFilter[i].screening_date = this.datastatus[k].screening_date
                      //     let datechk = this.datastatus[k].screening_date.split('-');
                      //     let currentMo = datechk[1]
                      //     if(this.monchk == parseInt(currentMo)){
                      //       this.count = this.count + 1
                      //     }
                      //   }
                      // }
                    };

                    for (var i = 0; i < _this5.schFilter.length; i++) {
                      _loop(i);
                    }

                    _this5.stuGet = _this5.stuIds;
                  }
                }
              });
            } else {
              this.ionicstorage.getData('studentlistGet').then(function (dataa1) {
                if (dataa1) {
                  _this5.datastatus = dataa1;
                  console.log(_this5.datastatus, "this.datastatus");
                  _this5.studetchk = [];
                  _this5.count = 0;

                  var _loop2 = function _loop2(i) {
                    _this5.stuIds = _this5.datastatus.filter(function (tt) {
                      return tt.id == _this5.schFilter[i].id;
                    });

                    _this5.studetchk.push(_this5.stuIds);

                    _this5.count = 0;

                    for (var k = 0; k < _this5.stuIds.length; k++) {
                      var datechk = _this5.stuIds[k].screening_date.split('-');

                      var currentMo = datechk[1];

                      if (_this5.monchk == parseInt(currentMo)) {
                        _this5.count = _this5.count + 1;
                      }
                    }

                    var count = _this5.count;
                    Object.assign(_this5.schFilter[i], {
                      count: count
                    }); // for(let k=0; k<this.datastatus.length; k++){
                    //   if(this.schFilter[i].id == this.datastatus[k].id){
                    //     this.schFilter[i].screening_date = this.datastatus[k].screening_date
                    //     let datechk = this.datastatus[k].screening_date.split('-');
                    //     let currentMo = datechk[1]
                    //     if(this.monchk == parseInt(currentMo)){
                    //       this.count = this.count + 1
                    //     }
                    //   }
                    // }
                  };

                  for (var i = 0; i < _this5.schFilter.length; i++) {
                    _loop2(i);
                  }

                  _this5.stuGet = _this5.stuIds;
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "stuDetails",
          value: function stuDetails(j) {
            var selectedList = j;
            console.log(selectedList, "selectedList");
            console.log(this.studetchk, "this.studetchk");
            this.router.navigate(["/tabs/cwsn/tracking-studetails"], {
              queryParams: {
                'studentdata': JSON.stringify(selectedList),
                'getListDetails': JSON.stringify(this.studetchk)
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
          }
        }, {
          key: "getCalender",
          value: function getCalender(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var modal, _yield$modal$onWillDi, data, role;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    console.log("ppp", this.studetchk, val);
                    _context3.n = 1;
                    return this.modalCtrl.create({
                      component: _cwsn_calendar_cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_2__.CwsnCalendarPage,
                      componentProps: {
                        selectDate: this.studetchk,
                        userId: val
                      },
                      cssClass: 'fullscreen',
                      backdropDismiss: true
                    });

                  case 1:
                    modal = _context3.v;
                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    _context3.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context3.v;
                    data = _yield$modal$onWillDi.data;
                    role = _yield$modal$onWillDi.role;

                    if (role == 'success') {
                      console.log("sanjay", data);
                    }

                  case 4:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _TrackingStulistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__.UploadService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__.CWSNService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }];
      };

      _TrackingStulistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-tracking-stulist',
        template: _raw_loader_tracking_stulist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tracking_stulist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TrackingStulistPage);
      /***/
    },

    /***/
    18080:
    /*!************************************************************************!*\
      !*** ./src/app/pages/cwsn/tracking-stulist/tracking-stulist.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align-inner {\n  background: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n  margin: 10px 0;\n  border-radius: 10px;\n}\n\n.card-align-inner .card-align__body {\n  padding: 15px 20px;\n}\n\n.card-align-inner .card-align__body .student-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align-inner .card-align__body .student-data .student-data__name {\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design {\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.vertical-line {\n  border-left: 1px solid purple;\n  height: 15px;\n  margin: 5px 2px 5px -3px;\n}\n\n.heading {\n  text-align: start;\n  font-size: 12px;\n  font-weight: 700;\n  color: black;\n}\n\n.fontSize {\n  font-size: 15px;\n  font-weight: 500;\n  color: black;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  min-height: 94%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  border-left: 8px solid var(--border-color-left);\n  border-right: 1px solid #fff;\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 10px;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .card-text .borderclr {\n  font-size: 12px;\n  border: 1px solid #8B66B3;\n  padding: 5px;\n  border-top: 0px;\n}\n\n.card-align .cards .card-design .card-text .borderclrhead {\n  font-size: 12px;\n  border: 1px solid #8B66B3;\n  padding: 5px;\n  font-weight: bold;\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\nion-label {\n  white-space: nowrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXN0dWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFVRTtFQUVFLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFTSTtFQUNFLGtCQUFBO0FBUE47O0FBUU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5SOztBQU9RO0VBQ0UsZ0NBQUE7QUFMVjs7QUF3QlE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXRCVjs7QUF3QlU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUF0QmQ7O0FBdUJZO0VBQ0UsZUFBQTtBQXJCZDs7QUF3Qlk7RUFDRSxpQkFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXRCaEI7O0FBeUJVO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF2QmQ7O0FBd0JZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF0QmQ7O0FBMEJNO0VBQ0UsYUFBQTtFQUdBLHVDQUFBO0VBQ0EsMENBQUE7QUExQlI7O0FBZ0NFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBR0Msd0JBQUE7QUEvQkw7O0FBaUNFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBL0JKOztBQWlDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE5Qko7O0FBa0NFO0VBQ0UsbUJBQUE7QUEvQko7O0FBb0NFO0VBQ0Usa0NBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsK0JBQUE7QUFqQ0o7O0FBb0NFO0VBQ0Usd0NBQUE7QUFqQ0o7O0FBcUNFO0VBRUUsZUFBQTtBQW5DSjs7QUFzQ007RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBcENSOztBQXVDUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFyQ1Y7O0FBc0NVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFwQ1o7O0FBd0NRO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQXZDVjs7QUF3Q1U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQXRDWjs7QUEyQ007RUFDRSxnQkFBQTtBQXpDUjs7QUE0Q007RUFDRSxnQkFBQTtBQTFDUjs7QUFpREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBOUNKOztBQWlERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBOUNKOztBQWtFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDRixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQS9EVjs7QUFpRVU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUEvRGQ7O0FBZ0VZO0VBQ0UsZUFBQTtBQTlEZDs7QUFnRVk7RUFDRSxpQkFBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQTlEaEI7O0FBZ0VZO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE5RGQ7O0FBZ0VZO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBOURkOztBQWlFVTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBL0RkOztBQWdFWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBOURkOztBQWtFTTtFQUNFLGFBQUE7RUFFQSx1Q0FBQTtFQUNBLDBDQUFBO0FBakVSOztBQXNFRTtFQUNFLDhCQUFBO0FBbkVKIiwiZmlsZSI6InRyYWNraW5nLXN0dWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAlYmFzZS1sYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgJWNsYXNzLXNlY3Rpb24tY2FyZC1vdXRlci1kZXNpZ257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM4QjY2QjMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWxpZ24taW5uZXJ7XHJcbiAgICAvLyBtYXJnaW46IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmNhcmQtYWxpZ25fX2JvZHl7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgLnN0dWRlbnQtZGF0YXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5zdHVkZW50LWRhdGFfX25hbWV7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhZGlvbi1ncm91cHtcclxuICAgICAgICAgIC5yYWRpby1idG4tY2lyY2xle1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiBcclxuICBcclxuICBcclxuICAgIC5jYXJkLWFsaWdue1xyXG4gICAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgICAgLmNhcmRze1xyXG4gICAgICAgIC5jYXJkLWRlc2lnbntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgICAgICAgLmNhcmQtdGV4dHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC50b3RhbENvdW50TGFiZWx7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2Nob29sbmFtZXN7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWFnZS1vdXRlcntcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIHJnYigyMDMsOTcsMTMzKTtcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcHVycGxlO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbWFyZ2luOjVweCAycHggNXB4IC0zcHhcclxuICB9XHJcbiAgLmhlYWRpbmd7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjpzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5mb250U2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuXHJcbiAgJWNhcmQtbGF5b3V0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAvLyBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKVxyXG4gIH1cclxuICBcclxuICAuY2FyZC1hbGlnbntcclxuICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgbWluLWhlaWdodDogOTQlO1xyXG4gICAgLmNhcmRzIHtcclxuICAgICAgLy8gcGFkZGluZzogMTBweDsgc2Vjb25kYXktY29sb3JcclxuICAgICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWxlZnQpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50OyBcclxuICAgICAgICAvLyBtYXJnaW46IDEycHggMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTZweDtcclxuICAgICAgICAuY2x1c3Rlci10ZXh0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmljb24tb3V0ZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAuaWNvbi1pbm5lcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWNhcmQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gXHJcbiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAlYmFzZS1sYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgJWNsYXNzLXNlY3Rpb24tY2FyZC1vdXRlci1kZXNpZ257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM4QjY2QjMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICBcclxuICBcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgLmNhcmQtYWxpZ257XHJcbiAgICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgICAuY2FyZHN7XHJcbiAgICAgICAgLmNhcmQtZGVzaWdue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgICAgICAgLmNhcmQtdGV4dHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC50b3RhbENvdW50TGFiZWx7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zY2hvb2xuYW1lc3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm9yZGVyY2xye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzhCNjZCMztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3JkZXJjbHJoZWFke1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzhCNjZCMztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWFnZS1vdXRlcntcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZGFya2JsdWU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudFxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiBcclxuICBcclxuICBcclxuICAiXX0= */";
      /***/
    },

    /***/
    7755:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-stulist/tracking-stulist.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Students</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\" style=\"border-left: 6px solid  rgb(203,97,133);\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\" style=\"color:rgb(203,97,133);font-size:larger;font-weight: 700;\">{{totalStudents}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Students </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total Students.svg\" />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div class=\"cards\" style=\"padding-top: 10px\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <!-- <div class=\"card-text\"> -->\r\n          <ion-grid class=\"heading card-text\">\r\n            <!-- <ion-row class=\"card-align-outer schoolnames\">\r\n              <ion-col size=\"2\" class=\"text-center\">Sno </ion-col>\r\n              <ion-col size=\"4\" class=\"text-center\">Name</ion-col>\r\n              <ion-col size=\"4\" class=\"text-center\">{{currentMonth}} Visits</ion-col>\r\n              <ion-col size=\"2\" class=\"text-center\">View</ion-col>\r\n            </ion-row> -->\r\n            <ion-row class=\"card-align-outer schoolnames borderclrhead\" style=\"color:rgb(203,97,133);\">\r\n              <ion-col size=\"2\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>S.No</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>Name</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>{{currentMonth}} Visits</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>View</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"card-align-outer schoolnames borderclr\" *ngFor=\"let item of schFilter; let i=index;\">\r\n              <ion-col size=\"1.8\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>{{i+1}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"5.4\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label (click)=\"stuDetails(item)\">{{item.name}}</ion-label><br>\r\n                <ion-label (click)=\"stuDetails(item)\">{{item.user_id}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: center;align-self: center;\">\r\n                <ion-label>{{ item.count > 0 ? item.count : '-' }}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"1.8\" class=\"text-center\" (click)=getCalender(item.user_id)>\r\n                <ion-icon name=\"calendar\" size=\"small\" color=\"primary\" type=\"calendar\">\r\n                </ion-icon>\r\n                </ion-col>\r\n            </ion-row>\r\n           </ion-grid>\r\n        <!-- </div> -->\r\n      </ion-card>\r\n      \r\n      \r\n    </div>\r\n \r\n       \r\n   \r\n    <!-- <ion-card class=\"card-design ion-card-margin-top-bottom\" style=\"border-radius: 10px;\"  *ngFor=\"let item of schFilter ;let i = index\">\r\n      <ion-grid>\r\n        <ion-row  class=\"heading card-align-outer\" style=\"font-size: 12px;\r\n        font-weight: 500;\r\n        color: black;\"> -->\r\n\r\n        <!-- <div class=\"cards\" style=\"padding-top: 10px\">\r\n          <ion-card class=\"card-design ion-card-margin-top-bottom\" *ngFor=\"let item of schFilter ;let i = index\">\r\n              <ion-grid class=\"heading card-text\">\r\n                <ion-row class=\"card-align-outer schoolnames\">\r\n                  <ion-col size=\"1.5\" class=\"text-center\">{{i+1}}</ion-col>\r\n                  <ion-col size=\"5\" (click)=\"stuDetails(item)\" class=\"text-center\">{{item.name}} - {{item.user_id}}</ion-col>\r\n                  <ion-col size=\"4\" style=\"width:100%;\" class=\"text-center\" >{{ item.count > 0 ? item.count : '-' }}</ion-col>\r\n                  <ion-col size=\"1.5\" class=\"text-center\" (click)=getCalender(item.user_id)>\r\n                  <ion-icon name=\"calendar\" size=\"small\" color=\"primary\" type=\"calendar\">\r\n                  </ion-icon>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n          </ion-card>\r\n        </div> -->\r\n  </ion-card>\r\n \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_tracking-stulist_tracking-stulist_module_ts-es5.js.map