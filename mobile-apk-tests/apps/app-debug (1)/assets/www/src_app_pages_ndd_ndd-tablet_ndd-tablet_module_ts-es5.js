(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_ndd-tablet_ndd-tablet_module_ts"], {
    /***/
    64157:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NddTabletPageRoutingModule": function NddTabletPageRoutingModule() {
          return (
            /* binding */
            _NddTabletPageRoutingModule
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


      var _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ndd-tablet.page */
      42753);

      var routes = [{
        path: '',
        component: _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_0__.NddTabletPage
      }];

      var _NddTabletPageRoutingModule = /*#__PURE__*/_createClass(function NddTabletPageRoutingModule() {
        _classCallCheck(this, NddTabletPageRoutingModule);
      });

      _NddTabletPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NddTabletPageRoutingModule);
      /***/
    },

    /***/
    61312:
    /*!***********************************************************!*\
      !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NddTabletPageModule": function NddTabletPageModule() {
          return (
            /* binding */
            _NddTabletPageModule
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


      var _ndd_tablet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ndd-tablet-routing.module */
      64157);
      /* harmony import */


      var _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ndd-tablet.page */
      42753);

      var _NddTabletPageModule = /*#__PURE__*/_createClass(function NddTabletPageModule() {
        _classCallCheck(this, NddTabletPageModule);
      });

      _NddTabletPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ndd_tablet_routing_module__WEBPACK_IMPORTED_MODULE_0__.NddTabletPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_ndd_tablet_page__WEBPACK_IMPORTED_MODULE_1__.NddTabletPage]
      })], _NddTabletPageModule);
      /***/
    },

    /***/
    42753:
    /*!*********************************************************!*\
      !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NddTabletPage": function NddTabletPage() {
          return (
            /* binding */
            _NddTabletPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ndd_tablet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ndd-tablet.page.html */
      21714);
      /* harmony import */


      var _ndd_tablet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ndd-tablet.page.scss */
      77374);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);

      var _NddTabletPage = /*#__PURE__*/function () {
        function NddTabletPage(router, usersessionService, fb, alert, userService, cdref, pmoaService, route, alertService) {
          _classCallCheck(this, NddTabletPage);

          this.router = router;
          this.usersessionService = usersessionService;
          this.fb = fb;
          this.alert = alert;
          this.userService = userService;
          this.cdref = cdref;
          this.pmoaService = pmoaService;
          this.route = route;
          this.alertService = alertService;
          this.toggleValue = '2';
          this.selected = true;
          this.class1 = [];
        }

        return _createClass(NddTabletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
            this.myForm = this.fb.group({
              isChecked: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
              toggleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
              isChecked1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
              toggleValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
              date1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
            });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              NddArray: this.fb.array([])
            });
          }
        }, {
          key: "checkbox",
          value: function checkbox() {
            if (this.myForm.value.isChecked1) {
              for (var i = 0; i < this.form.value.NddArray.length; i++) {
                this.form.controls['NddArray']['controls'][i].controls['isChecked'].setValue(true);
              }
            } else {
              this.myForm.controls.isChecked.setValue(false);

              for (var _i = 0; _i < this.form.value.NddArray.length; _i++) {
                this.form.controls['NddArray']['controls'][_i].controls['isChecked'].setValue(false);
              }
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD'); // Get current date in 'YYYY-MM-DD' format

            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
            this.routeData = this.route.snapshot;
            this.bloack_id = this.routeData.queryParams.id;
            this.schol_id = this.routeData.queryParams.school_id;
            this.schol_name = this.routeData.queryParams.school_name;
            this["class"] = this.routeData.queryParams["class"];
            this.section = this.routeData.queryParams.section;
            this.UserName = this.usersessionService.emis_username();
            this.useriddata = this.usersessionService.user_id();
            this.getstudentlist();
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/ndd/section-list'], {
              queryParams: {
                id: this.bloack_id,
                school_id: this.schol_id,
                school_name: this.schol_name,
                "class": this["class"],
                section: this.section
              }
            });
          }
        }, {
          key: "toggleChanged",
          value: function toggleChanged(event) {
            this.toggleValue = event.detail.checked ? '1' : '2';

            if (this.myForm.value.toggleValue1) {
              for (var i = 0; i < this.form.value.NddArray.length; i++) {
                if (this.form.controls['NddArray']['controls'][i].value['AlbendaStatus'] != 1) {
                  this.form.controls['NddArray']['controls'][i].controls['toggleValue'].setValue(true);
                }
              }
            } else {
              for (var _i2 = 0; _i2 < this.form.value.NddArray.length; _i2++) {
                if (this.form.controls['NddArray']['controls'][_i2].value['AlbendaStatus'] != 1) {
                  this.form.controls['NddArray']['controls'][_i2].controls['toggleValue'].setValue(false);
                }
              }
            }
          }
        }, {
          key: "toggleChangedDate",
          value: function toggleChangedDate(event) {
            if (this.myForm.value.date1) {
              this.myForm.controls.date.setValue(this.myForm.value.date1);

              for (var i = 0; i < this.form.value.NddArray.length; i++) {
                if (!this.form.value.NddArray[i].date) {
                  this.form.controls['NddArray']['controls'][i].controls['date'].setValue(this.myForm.value.date1);
                }
              }
            }
          }
        }, {
          key: "getstudentlist",
          value: function getstudentlist() {
            var _this = this;

            this.pmoaService.studentlist(this.schol_id).subscribe(function (res) {
              _this.stutlist = res.result.filter(function (y) {
                return y["class"] == _this["class"] && y.sections == _this.section;
              });

              for (var i = 0; i < _this.stutlist.length; i++) {
                _this.tabelt = _this.stutlist[i].AlbendaStatus;
                _this.stutlist[i].checked = "2";
                _this.stutlist[i].toggle = "2";
                _this.stutlist[i].date = "";
              } // this.getpatch()


              var filterSchoolList = _this.stutlist.filter(function (dd) {
                return +dd.AlbendaStatus == 1 && dd.AlbendaTabDate;
              });

              if (filterSchoolList.length == _this.stutlist.length) {
                _this.buttonOpen = true;
              } else {
                _this.buttonOpen = false;
              }

              _this.loadQuestion(_this.stutlist);
            });
          }
        }, {
          key: "loadQuestion",
          value: function loadQuestion(data) {
            var control = this.form.controls['NddArray'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = this.form.controls.NddArray;

            for (var _i3 = 0; _i3 < data.length; _i3++) {
              this.queslist.push(this.fb.group({
                indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].IndexId),
                StudId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].studid),
                StudName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].studname),
                isChecked: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].isChecked),
                toggleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].toggleValue),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].AlbendaTabDate, null),
                AlbendaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[_i3].AlbendaStatus, null)
              })); // this.queslist.controls[i]['controls'].StudId
            }

            this.cdref.detectChanges();
          }
        }, {
          key: "changeindex",
          value: function changeindex(id) {
            console.log(id, "p");
          }
        }, {
          key: "onSumbit",
          value: function onSumbit() {
            var _this2 = this;

            var finaldata = [];

            for (var i = 0; i < this.form.value.NddArray.length; i++) {
              if (this.form.value.NddArray[i].toggleValue && this.form.value.NddArray[i].date != null) {
                // this.form.value.NddArray[i].isChecked!= null && 
                finaldata.push({
                  "IndexId": this.form.value.NddArray[i].indexid ? this.form.value.NddArray[i].indexid : '',
                  "studid": this.form.value.NddArray[i].StudId,
                  "AlbendaStatus": this.form.value.NddArray[i].toggleValue == true ? 1 : 2,
                  "AlbendaTabDate": moment__WEBPACK_IMPORTED_MODULE_4___default()(this.form.value.NddArray[i].date).format("yyyy-MM-DD")
                });
              }
            }

            if (finaldata.length > 0) {
              var data = {
                "records": finaldata
              };
              this.pmoaService.tabeltpost(data).subscribe(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (res.dataStatus) {
                          this.alertService.alert(res.message); // this.initialValidator();

                          this.getstudentlist(); // this.submitted = false
                        } else {
                          this.alertService.warning(res.message); // this.submitted = true
                        }

                      case 1:
                        return _context.a(2);
                    }
                  }, _callee, this);
                }));
              });
            } else {
              this.alert.warning('Please Select field ');
            }
          }
        }]);
      }();

      _NddTabletPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_5__.PmoaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
        }];
      };

      _NddTabletPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ndd-tablet',
        template: _raw_loader_ndd_tablet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ndd_tablet_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NddTabletPage);
      /***/
    },

    /***/
    77374:
    /*!***********************************************************!*\
      !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maindiv {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.ion-checkbox {\n  --size: 20px;\n  --checkbox-background-checked: #6815ec;\n}\n\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid #6815ec;\n}\n\n.style {\n  font-size: 16px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5kZC10YWJsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoibmRkLXRhYmxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmlvbi1jaGVja2JveHtcclxuICAgIC0tc2l6ZTogMjBweDtcclxuICAgIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjNjgxNWVjO1xyXG59XHJcbmlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ODE1ZWM7XHJcbiAgfVxyXG4gIC5zdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */";
      /***/
    },

    /***/
    21714:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">NDD</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content>\r\n<div>\r\n    <form [formGroup]=\"myForm\">\r\n\r\n      <ion-card style=\"margin: 20px;\">\r\n        <ion-row style=\"margin: 20px;\"> \r\n          <ion-col size=\"6\" style=\"text-align: center;\">\r\n            <!-- <ion-checkbox class=\"ion-checkbox\" formControlName=\"isChecked1\" (ionChange)=\"checkbox()\">Themed checkbox</ion-checkbox>\r\n           <ion-label style=\"padding: 10px;\" class=\"style\">Common Select</ion-label> -->\r\n           <ion-label class=\"style\" style=\"font-size: large;font-weight: 600;text-align: center;\">Common Select</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label class=\"style\"></ion-label>\r\n            <ion-toggle [checked]=\"toggleValue == '1'\"  (ionChange)=\"toggleChanged($event)\" formControlName=\"toggleValue1\" ></ion-toggle>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n             <ion-label class=\"style\" style=\"margin-left: 20px;\" >Date</ion-label>\r\n            <ion-datetime  (ionChange)=\"toggleChangedDate($event)\" placeholder=\"Select Date\" [min]=\"currentDate\" \r\n            [max]=\"maxDate\" formControlName=\"date1\"></ion-datetime>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div formArrayName=\"NddArray\" style=\"margin: 20px;font-size: smaller;font-weight: 500;text-align: center;\">\r\n          <ion-row  *ngFor=\"let i = index ; let item of form.get('NddArray')['controls'];\" [formGroupName]=\"i\" style=\"background-color: aliceblue;margin-bottom: 10px\">\r\n            <!-- <ion-col size=\"2\">\r\n              <ion-checkbox class=\"ion-checkbox\" formControlName=\"isChecked\" (click)=\"changeindex(i)\"></ion-checkbox>\r\n            </ion-col> -->\r\n            <ion-col size=\"6\" style=\"    text-align: left;\r\n            align-self: center;\">\r\n              <ion-label>{{ item.value.StudName }}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-toggle *ngIf=\"item.value.AlbendaStatus == 1\" [disabled]=\"true\" [checked]=\"true\" ></ion-toggle>\r\n              <ion-toggle *ngIf=\"item.value.AlbendaStatus != 1\" [disabled]=\"false\" formControlName=\"toggleValue\"></ion-toggle>\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf=\"item.value.AlbendaStatus != 1\">\r\n              <ion-datetime placeholder=\"Select Date\" [min]=\"currentDate\" \r\n              [max]=\"maxDate\"  formControlName=\"date\"></ion-datetime>\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf=\"item.value.AlbendaStatus == 1\" style=\"color: grey;text-align: right;\r\n            align-self: center;\">\r\n              <ion-label>{{ item.value.date | date: 'dd/MM/yyyy' }}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n\r\n    \r\n      <div *ngIf=\"!buttonOpen\" class=\"btn-row\" size=\"12\" style=\"text-align: center;\">\r\n        <ion-button (click)=\"onSumbit()\" style=\"color:white;\">save</ion-button>\r\n      </div>\r\n    </form>\r\n    </div>\r\n  </ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ndd_ndd-tablet_ndd-tablet_module_ts-es5.js.map