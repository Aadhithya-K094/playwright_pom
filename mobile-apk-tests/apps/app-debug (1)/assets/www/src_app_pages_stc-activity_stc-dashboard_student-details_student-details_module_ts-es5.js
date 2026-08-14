(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-dashboard_student-details_student-details_module_ts"], {
    /***/
    77132:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/student-details/student-details-routing.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentDetailsPageRoutingModule": function StudentDetailsPageRoutingModule() {
          return (
            /* binding */
            _StudentDetailsPageRoutingModule
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


      var _student_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-details.page */
      22018);

      var routes = [{
        path: '',
        component: _student_details_page__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPage
      }];

      var _StudentDetailsPageRoutingModule = /*#__PURE__*/_createClass(function StudentDetailsPageRoutingModule() {
        _classCallCheck(this, StudentDetailsPageRoutingModule);
      });

      _StudentDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StudentDetailsPageRoutingModule);
      /***/
    },

    /***/
    87493:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/student-details/student-details.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentDetailsPageModule": function StudentDetailsPageModule() {
          return (
            /* binding */
            _StudentDetailsPageModule
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


      var _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-details-routing.module */
      77132);
      /* harmony import */


      var _student_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-details.page */
      22018);

      var _StudentDetailsPageModule = /*#__PURE__*/_createClass(function StudentDetailsPageModule() {
        _classCallCheck(this, StudentDetailsPageModule);
      });

      _StudentDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_student_details_page__WEBPACK_IMPORTED_MODULE_1__.StudentDetailsPage]
      })], _StudentDetailsPageModule);
      /***/
    },

    /***/
    22018:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/student-details/student-details.page.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentDetailsPage": function StudentDetailsPage() {
          return (
            /* binding */
            _StudentDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-details.page.html */
      17843);
      /* harmony import */


      var _student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-details.page.scss */
      62431);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/json.service */
      77232);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _StudentDetailsPage = /*#__PURE__*/function () {
        function StudentDetailsPage(router, fb, ionStorage, alertService, emisService, userSesstion, geolocation, alertController, jsonService, route) {
          _classCallCheck(this, StudentDetailsPage);

          this.router = router;
          this.fb = fb;
          this.ionStorage = ionStorage;
          this.alertService = alertService;
          this.emisService = emisService;
          this.userSesstion = userSesstion;
          this.geolocation = geolocation;
          this.alertController = alertController;
          this.jsonService = jsonService;
          this.route = route;
          this.studMigrant = [{
            label: "Seasonal",
            value: "1"
          }, {
            label: "Permanent",
            value: "2"
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
          this.MotherTongue = [];
          this.studState = [];
          this.studentList = [];
          this.MigrateStudList = [];
          this.CenterDetailsList = [];
          this.schoolList = [];
          this.uniqueSchools = [];
        }

        return _createClass(StudentDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
            this.getLatLong();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              EmisSchool: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisSchoolId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              EmisNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              EmisAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              EmisAdmitted: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
              MotherToungeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
              StudyClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.getSchoolProfileList();
            this.getCenterDetails();
            this.route.queryParams.subscribe(function (params) {
              _this.Type = params['Type'];
            });
            this.ionStorage.getData('languageList').then(function (res) {
              if (res) {
                _this.MotherTongue = res;
              }
            });
          }
        }, {
          key: "getSchoolProfileList",
          value: function getSchoolProfileList() {
            var _this2 = this;

            this.ionStorage.getData('MigrateStudList').then(function (res) {
              if (res) {
                _this2.MigrateStudList = res.filter(function (dd) {
                  return dd.type == _this2.Type;
                });

                if (_this2.MigrateStudList.length == 0) {
                  _this2.emisService.StcMigrateStudList(_this2.userSesstion.emis_username(), _this2.Type).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this2.MigrateStudList = res.result;

                      _this2.ionStorage.removeKey('MigrateStudList').then(function (res) {
                        _this2.ionStorage.insertData_Replace('MigrateStudList', _this2.MigrateStudList);
                      });
                    }
                  });
                }
              } else {
                _this2.emisService.StcMigrateStudList(_this2.userSesstion.emis_username(), _this2.Type).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this2.MigrateStudList = res.result;

                    _this2.ionStorage.removeKey('MigrateStudList').then(function (res) {
                      _this2.ionStorage.insertData_Replace('MigrateStudList', _this2.MigrateStudList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "getCenterDetails",
          value: function getCenterDetails() {
            var _this3 = this;

            debugger;
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

                      _this3.getSchoolList();
                    }
                  });
                } else {
                  _this3.getSchoolList();
                }
              } else {
                _this3.emisService.StcCenterDetailsGet(_this3.userSesstion.emis_username(), _this3.Type).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this3.CenterDetailsList = res.result;

                    _this3.ionStorage.removeKey('CenterDetailsList').then(function (res) {
                      _this3.ionStorage.insertData_Replace('CenterDetailsList', _this3.CenterDetailsList);
                    });

                    _this3.getSchoolList();
                  }
                });
              }
            });
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this4 = this;

            debugger;

            if (this.Type == 2) {
              this.BRTEMappedSchlListEV();
            } else {
              this.uniqueSchools = Array.from(new Map(this.CenterDetailsList.map(function (school) {
                return [school.SchlId, school];
              })).values());
              this.form.controls['EmisSchool'].setValue(this.uniqueSchools[0].SchlName);
              this.form.controls['EmisSchoolId'].setValue(this.uniqueSchools[0].SchlId);

              if (this.studentList.length == 0) {
                this.ionStorage.getData('HmMappedStudList').then(function (res) {
                  if (res && res != null) {
                    _this4.studentList = res;
                  } else {
                    _this4.emisService.HmMappedStudList(_this4.uniqueSchools[0].SchlId).subscribe(function (responce) {
                      if (responce.dataStatus) {
                        _this4.studentList = responce.result;

                        _this4.ionStorage.removeKey('HmMappedStudList').then(function (res) {
                          _this4.ionStorage.insertData_Replace('HmMappedStudList', _this4.studentList);
                        });
                      } else {
                        _this4.alertService.error(responce.message);
                      }
                    });
                  }
                });
              } //  this.schoolList = [];
              //   this.uniqueSchools = Array.from(
              //     new Map(this.CenterDetailsList.map((school) => [school.SchlId, school])).values()
              //   );
              //   for(let i=0; i<this.uniqueSchools.length; i++){
              //     if(this.uniqueSchools[i].SchlId){
              //       let data = {
              //         schoolId: this.uniqueSchools[i].SchlId,
              //         schoolName: this.uniqueSchools[i].SchlName
              //       }
              //       this.schoolList.push(data);
              //     }
              //   }
              // this.emisService.getSchoolInfo(this.userSesstion.udise_code()).subscribe((res) => {
              //   if(res.result){
              //     this.form.controls['EmisSchool'].setValue(res.result[0].SclNam);
              //     this.studentList = [];
              //     this.emisService.HmMappedStudList(res.result[0].SclId).subscribe(responce =>{
              //       if(responce.dataStatus){
              //         this.studentList = responce.result;
              //       }
              //     })
              //   }
              // })

            }
          }
        }, {
          key: "BRTEMappedSchlListEV",
          value: function BRTEMappedSchlListEV() {
            var _this5 = this;

            debugger;
            this.ionStorage.getData('BRTEMappedSchlListEV').then(function (res) {
              if (res) {
                _this5.schoolList = res.filter(function (dd) {
                  return dd.teacher_id == _this5.userSesstion.emis_username();
                });

                if (_this5.schoolList.length == 0) {
                  _this5.emisService.BRTEMappedSchlListEV(_this5.userSesstion.emis_username()).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this5.schoolList = res.result;

                      _this5.ionStorage.removeKey('BRTEMappedSchlListEV').then(function (res) {
                        _this5.ionStorage.insertData_Replace('BRTEMappedSchlListEV', _this5.schoolList);
                      });
                    }
                  });
                }
              } else {
                _this5.emisService.BRTEMappedSchlListEV(_this5.userSesstion.emis_username()).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this5.schoolList = res.result;

                    _this5.ionStorage.removeKey('BRTEMappedSchlListEV').then(function (res) {
                      _this5.ionStorage.insertData_Replace('BRTEMappedSchlListEV', _this5.schoolList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "selectSchl",
          value: function selectSchl(event) {
            var _this6 = this;

            debugger;
            this.ionStorage.getData('BrteMappedStudList').then(function (res) {
              if (res) {
                var responce = res;
                var schoolData = res.filter(function (dd) {
                  return dd.schoolId == event;
                });

                if (schoolData.length > 0) {
                  _this6.studentList = [];
                  _this6.studentList = schoolData[0].studentList;
                } else {
                  _this6.emisService.BrteMappedStudList(event).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this6.studentList = [];
                      _this6.studentList = res.result;
                      var school = {
                        schoolId: event,
                        studentList: res.result
                      };
                      responce.push(school);

                      _this6.ionStorage.removeKey('BrteMappedStudList').then(function (res) {
                        _this6.ionStorage.insertData_Replace('BrteMappedStudList', responce);
                      });
                    } else {
                      _this6.studentList = [];

                      _this6.alertService.error(res.message);
                    }
                  });
                }

                _this6.form.controls['EmisNumber'].setValue(null);

                _this6.form.controls['EmisNumber'].updateValueAndValidity();
              } else {
                _this6.emisService.BrteMappedStudList(event).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this6.studentList = [];
                    _this6.studentList = res.result;

                    _this6.form.controls['EmisNumber'].setValue(null);

                    _this6.form.controls['EmisNumber'].updateValueAndValidity();

                    var school = [{
                      schoolId: event,
                      studentList: res.result
                    }];
                    var array = [];
                    array.push(school);

                    _this6.ionStorage.removeKey('BrteMappedStudList').then(function (res) {
                      _this6.ionStorage.insertData_Replace('BrteMappedStudList', school);
                    });
                  } else {
                    _this6.studentList = [];

                    _this6.alertService.error(res.message);
                  }
                });
              }
            }); // this.jsonService.studentList(event.detail.value).subscribe(res =>{
            //   console.log(res[0].studentlist);
            // })
          }
        }, {
          key: "selectStud",
          value: function selectStud(ev) {
            var stud = this.studentList.filter(function (dd) {
              return dd.user_id == ev;
            });
            var data = stud[0];
            this.studData = data;
            console.log("data", this.studData);
            this.form.controls['EmisAge'].setValue(data.age);
            this.form.controls['EmisName'].setValue(data.StudName);
            this.form.controls['EmisParent'].setValue(data.father_name + " " + data.mother_name);
            this.form.controls['EmisAddress'].setValue(data.house_address + ", " + data.street_name + ", " + data.area_village + ", " + data.block_name + ", " + data.district_name + ", " + data.State + ", " + data.pin_code);
            this.form.controls['EmisContact'].setValue(data.contact);
            this.form.controls['EmisAdmitted'].setValue(data.SchlName);
            this.form.controls['MotherToungeName'].setValue(data.MotherToungeName);
            this.form.controls['StudyClass'].setValue(data.class_studying_id + " - " + data.class_section);
            this.form.controls['EmisAge'].updateValueAndValidity();
            this.form.controls['EmisParent'].updateValueAndValidity();
            this.form.controls['EmisAddress'].updateValueAndValidity();
            this.form.controls['EmisContact'].updateValueAndValidity();
            this.form.controls['EmisAdmitted'].updateValueAndValidity();
            this.form.controls['MotherToungeName'].updateValueAndValidity();
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this7 = this;

            var _a, _b;

            if (this.form.valid) {
              this.submitted = false;
              this.submitted = false;
              var data = {
                "records": {
                  IndxId: this.form.value.IndxId,
                  Type: this.Type,
                  UserId: this.userSesstion.emis_username(),
                  EmisSchool: this.Type == 1 ? this.form.value.EmisSchoolId : this.form.value.EmisSchool,
                  EmisNumber: this.form.value.EmisNumber,
                  EmisName: this.form.value.EmisName,
                  EmisAge: this.form.value.EmisAge,
                  EmisParent: this.form.value.EmisParent,
                  EmisAddress: this.form.value.EmisAddress,
                  EmisContact: this.form.value.EmisContact,
                  EmisAdmitted: this.form.value.EmisAdmitted,
                  Latitude: (_a = this.locationCordinates) === null || _a === void 0 ? void 0 : _a.latitude,
                  Longitude: (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.longitude
                }
              };
              this.emisService.StcStudentMigrantSave(data).subscribe(function (res) {
                if (res.dataStatus) {
                  _this7.alertService.success(res.message);

                  _this7.initialValidator();

                  _this7.submitted = false;
                  _this7.addProfile = false;

                  _this7.emisService.StcMigrateStudList(_this7.userSesstion.emis_username(), _this7.Type).subscribe(function (res) {
                    if (res.dataStatus) {
                      _this7.MigrateStudList = res.result;

                      _this7.ionStorage.removeKey('MigrateStudList').then(function (res) {
                        _this7.ionStorage.insertData_Replace('MigrateStudList', _this7.MigrateStudList);
                      });
                    }
                  });
                } else {
                  _this7.alertService.error(res.message);
                }
              });
            } else {
              this.submitted = true;
              this.alertService.error("Please enter valid data");
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(data) {
            var _a, _b;

            this.addProfile = true;
            this.SchlId = data.school_id;
            this.studData = data;
            debugger;

            if (this.Type == 2) {
              // this.emisService.BrteMappedStudList(data.school_id).subscribe(res =>{
              //   if(res.dataStatus){
              //    let getSchoolData = res.result.filter(dd => dd.user_id == data.student_id);
              //    this.form.patchValue({
              //     EmisAdmitted: getSchoolData[0].SchlName
              //    })
              //   }else{
              this.form.patchValue({
                EmisAdmitted: data.admintted
              }); //   }
              // })
            } else {
              this.form.patchValue({
                EmisAdmitted: data.admintted
              });
            }

            console.log("data", this.studData);
            this.form.patchValue({
              IndxId: data.id,
              EmisSchool: data.school_id,
              EmisNumber: data.student_id,
              EmisName: data.name,
              EmisAge: data.age,
              EmisParent: data.parent,
              EmisAddress: data.address,
              EmisContact: data.contact,
              MotherToungeName: data.MotherToungeName,
              StudyClass: data.AdmittedClass,
              // EmisAdmitted: data.admintted,
              Latitude: (_a = this.locationCordinates) === null || _a === void 0 ? void 0 : _a.latitude,
              Longitude: (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.longitude
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this8 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this8.locationCordinates = resp.coords;
              _this8.locationCordinates.latitude;
              _this8.locationCordinates.longitude;
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this8.alertService.alertToTurnOnPermission('Location', 'Location');
              } // console.log('Error getting location', error);

            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            if (this.addProfile) {
              this.addProfile = false;
              this.initialValidator();
              this.submitted = false;
            } else {
              this.router.navigate(['/tabs/stc-activity'], {
                queryParams: {
                  Type: this.Type
                }
              });
            }
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.studentList = [];
            this.submitted = false;
            this.initialValidator();
            this.addProfile = false;
          }
        }, {
          key: "addStudentProfile",
          value: function addStudentProfile() {
            if (this.CenterDetailsList.length > 0) {
              this.addProfile = true;
              this.initialValidator();
              this.getCenterDetails();
            } else {
              this.presentAlertConfirmExit("Please add minimum one center profile before you want to map the staff profile to the designated center");
            }
          }
        }, {
          key: "presentAlertConfirmExit",
          value: function presentAlertConfirmExit(subheader) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: subheader,
                      cssClass: 'versionAlert',
                      buttons: [{
                        text: 'Okay',
                        handler: function handler() {}
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.MigrateStudList = [];
            this.schoolList = [];
            this.studentList = [];
          }
        }]);
      }();

      _StudentDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_6__.JsonService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }];
      };

      _StudentDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-student-details',
        template: _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentDetailsPage);
      /***/
    },

    /***/
    62431:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-dashboard/student-details/student-details.page.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 14px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 70%;\n  margin: 10px auto;\n  padding: 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.syncServer2 {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzdHVkZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5xdWVzdGlvbntcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzLWhlYWR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ucXVlc0lucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5jbG9zZWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN5bmNTZXJ2ZXIye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4QjY3QjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    17843:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-dashboard/student-details/student-details.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Student Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-row style=\"margin: 10px auto;\">\r\n    <ion-col size=\"12\" *ngFor=\"let item of MigrateStudList\">\r\n      <ion-row class=\"headerCss\">\r\n        <ion-col size=\"10\" style=\"padding: 10px;\">\r\n          <div class=\"nameCss\">{{item.StudName}}</div>\r\n          <ion-text class=\"numberCss\">{{item.SchlName}}</ion-text>\r\n          <!-- <ion-text class=\"numberCss\" style=\"padding: 0px 5px; border-left: 1px solid; margin: auto 5px;\">{{item.StudPhoneNo}}</ion-text> -->\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"MigrateStudList.length == 0\" style=\"text-align: center;\">\r\n      <p >No data found</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-row (click)=\"addStudentProfile()\" class=\"syncServer\">\r\n    <ion-col size=\"2\" class=\"add iconCss\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\" class=\"add\">\r\n      <ion-label style=\"font-size: 18px;\"> Add Student Profile </ion-label>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addStudentProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n      <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-col >\r\n      <ion-label class=\"bold\"> Add Student </ion-label>\r\n    </ion-col>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <div class=\"question\" *ngIf=\"!form.value.IndxId && Type == 2\">\r\n      <ion-row class=\"ques-head\"> Select school </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select (ionChange)=\"selectSchl($event.detail.value)\" formControlName=\"EmisSchool\" class=\"quesInput font-12\" placeholder=\"Select school\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of schoolList\" [value]=\"option.SchlId\">{{option.school_name}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisSchool.errors && (submitted || form.controls.EmisSchool.dirty || form.controls.EmisSchool.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisSchool.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"!form.value.IndxId && Type == 1\">\r\n      <ion-row class=\"ques-head\"> School Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <!-- <ion-select formControlName=\"EmisSchool\" class=\"quesInput font-12\" placeholder=\"Select school\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of schoolList\" [value]=\"option.schoolId\">{{option.schoolName}}</ion-select-option>\r\n            </ion-select> -->\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"EmisSchool\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.6;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisSchool.errors && (submitted || form.controls.EmisSchool.dirty || form.controls.EmisSchool.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisSchool.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"!form.value.IndxId && form.value.EmisSchool && studentList.length > 0\" >\r\n      <ion-row class=\"ques-head\"> Select Student Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select disabled=\"{{form.value.IndxId ?  true : false}}\" class=\"quesInput font-12\" (ionChange)=\"selectStud($event.detail.value)\" formControlName=\"EmisNumber\" placeholder=\"Select Emis Name\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of studentList\" [value]=\"option.user_id\">{{option.StudName}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisNumber.errors && (submitted || form.controls.EmisNumber.dirty || form.controls.EmisNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <!-- <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('minlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 8 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('maxlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 10 digits.\r\n          </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.IndxId\" >\r\n      <ion-row class=\"ques-head\"> Select Student Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\" formControlName=\"EmisName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.6;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisName.errors && (submitted || form.controls.EmisName.dirty || form.controls.EmisName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisName.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <!-- <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('minlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 8 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('maxlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 10 digits.\r\n          </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\">\r\n      <ion-row class=\"ques-head\"> Emis Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\" minlength=\"1\"\r\n            formControlName=\"EmisNumber\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisNumber.errors && (submitted || form.controls.EmisNumber.dirty || form.controls.EmisNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\">\r\n      <ion-row class=\"ques-head\"> Class </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\"\r\n            formControlName=\"StudyClass\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <!-- <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisAge.errors && (submitted || form.controls.EmisAge.dirty || form.controls.EmisAge.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisAge.errors?.required\">Field is Required</span>\r\n          </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\">\r\n      <ion-row class=\"ques-head\"> Age </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"{{studData.age ? true : false}}\" type=\"tel\"  maxlength=\"2\" minlength=\"1\"\r\n            formControlName=\"EmisAge\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisAge.errors && (submitted || form.controls.EmisAge.dirty || form.controls.EmisAge.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisAge.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\" >\r\n      <ion-row class=\"ques-head\"> Mother Tongue </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"false\" type=\"text\" formControlName=\"MotherToungeName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.MotherToungeName.errors && (submitted || form.controls.MotherToungeName.dirty || form.controls.MotherToungeName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.MotherToungeName.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\" >\r\n      <ion-row class=\"ques-head\"> Parent Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"{{studData.father_name ? true : false}}\" type=\"text\" formControlName=\"EmisParent\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisParent.errors && (submitted || form.controls.EmisParent.dirty || form.controls.EmisParent.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisParent.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\" >\r\n      <ion-row class=\"ques-head\"> Address </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-textarea type=\"text\" formControlName=\"EmisAddress\" placeholder=\"Please enter\" class=\"quesInput\" row=\"5\" ></ion-textarea>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisAddress.errors && (submitted || form.controls.EmisAddress.dirty || form.controls.EmisAddress.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisAddress.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\" >\r\n      <ion-row class=\"ques-head\"> Admitted School Name</ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"{{form.value.EmisAdmitted ?  true : false}}\" type=\"text\" style=\"opacity: 0.5;\" formControlName=\"EmisAdmitted\" placeholder=\"Please enter\" class=\"quesInput\" ></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisAdmitted.errors && (submitted || form.controls.EmisAdmitted.dirty || form.controls.EmisAdmitted.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisAdmitted.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EmisNumber\" >\r\n      <ion-row class=\"ques-head\"> Contact No </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"tel\" maxlength=\"10\" minlength=\"10\" pattern=\"^[6-9]{1}[0-9]{9}\"\r\n            formControlName=\"EmisContact\" placeholder=\"Please enter\" class=\"quesInput\" ></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisContact.errors && (submitted || form.controls.EmisContact.dirty || form.controls.EmisContact.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisContact.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.controls.EmisContact.hasError('maxlength') && form.controls.EmisContact.touched\">\r\n            Mobile Number must be at least 10 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.controls.EmisContact.errors?.pattern && form.controls.EmisContact.touched\">\r\n            Mobile number must start with 6.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer2\" *ngIf=\"form.value.EmisNumber\" (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stc-activity_stc-dashboard_student-details_student-details_module_ts-es5.js.map