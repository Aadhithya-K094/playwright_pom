(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_list-of-awc_list-of-awc_module_ts"], {
    /***/
    25152:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/awc/list-of-awc/list-of-awc-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListOfAwcPageRoutingModule": function ListOfAwcPageRoutingModule() {
          return (
            /* binding */
            _ListOfAwcPageRoutingModule
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


      var _list_of_awc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-of-awc.page */
      31857);

      var routes = [{
        path: '',
        component: _list_of_awc_page__WEBPACK_IMPORTED_MODULE_0__.ListOfAwcPage
      }];

      var _ListOfAwcPageRoutingModule = /*#__PURE__*/_createClass(function ListOfAwcPageRoutingModule() {
        _classCallCheck(this, ListOfAwcPageRoutingModule);
      });

      _ListOfAwcPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ListOfAwcPageRoutingModule);
      /***/
    },

    /***/
    89256:
    /*!*************************************************************!*\
      !*** ./src/app/pages/awc/list-of-awc/list-of-awc.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListOfAwcPageModule": function ListOfAwcPageModule() {
          return (
            /* binding */
            _ListOfAwcPageModule
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


      var _list_of_awc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-of-awc-routing.module */
      25152);
      /* harmony import */


      var _list_of_awc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-of-awc.page */
      31857);

      var _ListOfAwcPageModule = /*#__PURE__*/_createClass(function ListOfAwcPageModule() {
        _classCallCheck(this, ListOfAwcPageModule);
      });

      _ListOfAwcPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _list_of_awc_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListOfAwcPageRoutingModule],
        declarations: [_list_of_awc_page__WEBPACK_IMPORTED_MODULE_1__.ListOfAwcPage]
      })], _ListOfAwcPageModule);
      /***/
    },

    /***/
    31857:
    /*!***********************************************************!*\
      !*** ./src/app/pages/awc/list-of-awc/list-of-awc.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListOfAwcPage": function ListOfAwcPage() {
          return (
            /* binding */
            _ListOfAwcPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_list_of_awc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./list-of-awc.page.html */
      21990);
      /* harmony import */


      var _list_of_awc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-of-awc.page.scss */
      40713);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_pages_awc_awc_view_modal_awc_view_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/awc/awc-view-modal/awc-view-modal.page */
      75390);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../commonpages/summarypopuppage/summarypopuppage.page */
      74352);

      var _ListOfAwcPage = /*#__PURE__*/function () {
        function ListOfAwcPage(router, http, userService, alert, route, usersessionService, alertService, modalCtrl) {
          _classCallCheck(this, ListOfAwcPage);

          this.router = router;
          this.http = http;
          this.userService = userService;
          this.alert = alert;
          this.route = route;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.modalCtrl = modalCtrl;
          this.awcList = [];
          this.searchData = [];
          this.parScreenedCnt = 0;
          this.screenedCnt = 0;
          this.currUser = '';
        }

        return _createClass(ListOfAwcPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.routeData = this.route.snapshot;
            this.phase_id = this.routeData.queryParams.id;
            this.viewstatus = this.routeData.queryParams.viewstatus;
            this.phaseName = this.routeData.queryParams.phaseName;
            this.AcYears = this.routeData.queryParams.AcYears;
            this.blkId = this.usersessionService.mht_block_id();
            this.currUser = this.usersessionService.emis_username();
            var checkViewType = localStorage.getItem('awcViewType');
            this.UserName = this.usersessionService.emis_username();

            if (checkViewType && checkViewType != undefined) {
              this.awcViewType = JSON.parse(checkViewType);
              this.awcAnganvadiGet();
            } else {
              this.schoolAlert();
            }
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/design-page']);
          }
        }, {
          key: "studentList",
          value: function studentList(data) {
            console.log(data);
            localStorage.setItem('awcLatt', data.Latt);
            localStorage.setItem('awcLongg', data.Longg);
            this.router.navigate(['/tabs/awc-student-list'], {
              queryParams: {
                data: JSON.stringify(data),
                id: this.phase_id,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears
              }
            }); // this.router.navigate(['/tabs/awc-student-list'],{
            //   queryParams: { id: this.phase_id}
            //   });
          }
        }, {
          key: "openModal",
          value: function openModal(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    console.log(item);
                    this.userService.getGetAWCSummaryOfVisit(this.UserName, item.AwcCode).subscribe(function (res) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this2 = this;

                        var modal;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              console.log(res);

                              if (!res.result) {
                                _context.n = 3;
                                break;
                              }

                              _context.n = 1;
                              return this.modalCtrl.create({
                                component: _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_6__.SummarypopuppagePage,
                                componentProps: {
                                  schoolname: item.school_name,
                                  reportname: 'Summary report',
                                  items: res.result.map(function (item) {
                                    return {
                                      date: item.update_date,
                                      date_ts: _this2.addTimeOffset(item.updationts),
                                      count: parseInt(item.ScreenedCount, 10),
                                      image: item.visit_photo
                                    };
                                  })
                                },
                                cssClass: 'view-image-modal_capturedimage',
                                backdropDismiss: true
                              });

                            case 1:
                              modal = _context.v;
                              _context.n = 2;
                              return modal.present();

                            case 2:
                              _context.n = 4;
                              break;

                            case 3:
                              this.alert.error('No data found');

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
          key: "addTimeOffset",
          value: function addTimeOffset(dateString) {
            if (!dateString) return "Invalid Date";
            var date = new Date(dateString.replace(" ", "T"));
            if (isNaN(date.getTime())) return "Invalid Date";
            date.setHours(date.getHours() + 5);
            date.setMinutes(date.getMinutes() + 30);
            var year = date.getFullYear();
            var month = String(date.getMonth() + 1).padStart(2, "0");
            var day = String(date.getDate()).padStart(2, "0");
            var hours = String(date.getHours()).padStart(2, "0");
            var minutes = String(date.getMinutes()).padStart(2, "0");
            var seconds = String(date.getSeconds()).padStart(2, "0");
            console.log("".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds));
            return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
          }
        }, {
          key: "awcAnganvadiGet",
          value: function awcAnganvadiGet() {
            var _this3 = this;

            var _a, _b, _c, _d, _e, _f, _g;

            this.searchData = [];
            this.awcList = [];
            this.parScreenedCnt = 0;
            this.screenedCnt = 0;

            if (((_a = this.awcViewType) === null || _a === void 0 ? void 0 : _a.type) != 2 && ((_c = (_b = this.awcViewType) === null || _b === void 0 ? void 0 : _b.diagnosis) === null || _c === void 0 ? void 0 : _c.length) === 0) {
              var diagnosis = []; // let awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_staging.json';

              var awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_production.json';
              this.http.get(awcQues).subscribe(function (data) {
                var _a;

                var result = [];

                for (var i in data) {
                  result.push([i, data[i]]);
                }

                var optioning = _this3.jsonParse(data.options.data, data.options.columns);

                if (_this3.awcViewType.type != 1) {
                  diagnosis = optioning.filter(function (item) {
                    var _a;

                    return item.opt_type == ((_a = _this3.awcViewType) === null || _a === void 0 ? void 0 : _a.type);
                  }).map(function (item) {
                    return item.value;
                  });
                } else {
                  diagnosis = optioning.filter(function (item) {
                    return item.opt_type != null;
                  }).map(function (item) {
                    return item.value;
                  });
                }

                var datas = {
                  records: {
                    "type": (_a = _this3.awcViewType) === null || _a === void 0 ? void 0 : _a.type,
                    "BlockId": _this3.blkId,
                    "diagnosis": diagnosis,
                    "PhaseId": _this3.phase_id
                  }
                };

                _this3.userService.getAwcAnganvadiDiagnosisList(datas).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this3.awcList = res.result;

                    for (var _i = 0; _i < _this3.awcList.length; _i++) {
                      _this3.searchData.push(_this3.awcList[_i]);

                      if (_this3.awcList[_i].screen_status == 1) {
                        _this3.screenedCnt = +_this3.screenedCnt + 1;
                      } else if (_this3.awcList[_i].screen_status == 2) {
                        _this3.parScreenedCnt = +_this3.parScreenedCnt + 1;
                      }
                    }
                  } else {
                    _this3.alert.error("No students were found in any AWC center for this diagnosis");
                  }
                });
              });
            } else {
              if (((_d = this.awcViewType) === null || _d === void 0 ? void 0 : _d.type) != 2) {
                var data = {
                  records: {
                    "type": (_e = this.awcViewType) === null || _e === void 0 ? void 0 : _e.type,
                    "BlockId": this.blkId,
                    "diagnosis": (_g = (_f = this.awcViewType) === null || _f === void 0 ? void 0 : _f.diagnosis) === null || _g === void 0 ? void 0 : _g.map(function (item) {
                      return item.value;
                    }),
                    "PhaseId": this.phase_id
                  }
                };
                this.userService.getAwcAnganvadiDiagnosisList(data).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this3.awcList = res.result;

                    for (var i = 0; i < _this3.awcList.length; i++) {
                      _this3.searchData.push(_this3.awcList[i]);

                      if (_this3.awcList[i].screen_status == 1) {
                        _this3.screenedCnt = +_this3.screenedCnt + 1;
                      } else if (_this3.awcList[i].screen_status == 2) {
                        _this3.parScreenedCnt = +_this3.parScreenedCnt + 1;
                      }
                    }
                  } else {
                    _this3.alert.error("No students were found in any AWC center for this diagnosis");
                  }
                });
              } else {
                this.userService.getAwcAnganvadiList(this.blkId, this.phase_id).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this3.awcList = res.result;

                    for (var i = 0; i < _this3.awcList.length; i++) {
                      _this3.searchData.push(_this3.awcList[i]);

                      if (_this3.awcList[i].screen_status == 1) {
                        _this3.screenedCnt = +_this3.screenedCnt + 1;
                      } else if (_this3.awcList[i].screen_status == 2) {
                        _this3.parScreenedCnt = +_this3.parScreenedCnt + 1;
                      }
                    }
                  } else {
                    _this3.alertService.warning(res.message);
                  }
                }, function (error) {
                  _this3.alertService.warning('Error While getting Awc List');
                });
              }

              ;
            }
          }
        }, {
          key: "jsonParse",
          value: function jsonParse(data, column) {
            var arr = [];

            for (var i = 0; i < data.length; i++) {
              var obj = {};

              for (var j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
              }

              obj.subques = [];
              obj.isMapped = false;
              arr.push(obj);
            }

            ;
            return arr;
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            this.searchData = [];
            var sData = event.detail.value.trim();
            this.searchData = this.awcList.filter(function (item) {
              return item.AwcName.toLowerCase().indexOf(sData.toLowerCase()) > -1;
            });
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var modal, _yield$modal$onDidDis, data;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.modalCtrl.create({
                      component: src_app_pages_awc_awc_view_modal_awc_view_modal_page__WEBPACK_IMPORTED_MODULE_2__.AwcViewModalPage,
                      // componentProps: { schoolClassData: this.currentSchListModel },
                      cssClass: 'fullscreen'
                    });

                  case 1:
                    modal = _context3.v;
                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    _context3.n = 3;
                    return modal.onDidDismiss();

                  case 3:
                    _yield$modal$onDidDis = _context3.v;
                    data = _yield$modal$onDidDis.data;
                    this.handleModalClose(data);

                  case 4:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "handleModalClose",
          value: function handleModalClose(data) {
            if (data && data != undefined) {
              this.awcViewType = data;
              localStorage.removeItem('awcViewType');
              localStorage.setItem('awcViewType', JSON.stringify(data));
              this.awcAnganvadiGet();
            }
          }
        }]);
      }();

      _ListOfAwcPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }];
      };

      _ListOfAwcPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-list-of-awc',
        template: _raw_loader_list_of_awc_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_of_awc_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ListOfAwcPage);
      /***/
    },

    /***/
    40713:
    /*!*************************************************************!*\
      !*** ./src/app/pages/awc/list-of-awc/list-of-awc.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tlAwc {\n  background-color: #FFF1F3;\n  border-radius: 12px;\n  padding: 5px;\n  margin-bottom: 15px;\n  border-left: 6px solid #F96C94;\n}\n\n.tlAwc4 {\n  background-color: #ffffff;\n  border: 1px solid black !important;\n  border-radius: 12px;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n\n.tlNo {\n  background-color: #F96C94;\n  color: white;\n  border-radius: 22px;\n  padding: 5px;\n}\n\n.tlAwc2 {\n  background-color: #FDFFE7;\n  border-radius: 12px;\n  padding: 5px;\n  margin-bottom: 15px;\n  border-left: 6px solid #AFB474;\n}\n\n.tl {\n  background-color: #AFB474;\n  color: white;\n  border-radius: 22px;\n  padding: 5px;\n}\n\n.tldiv {\n  background-color: #AFB474;\n  color: white;\n  border-radius: 22px;\n  padding: 5px;\n}\n\n.tlcom {\n  background-color: #E1FCFF;\n  border-radius: 12px;\n  padding: 5px;\n  margin-bottom: 15px;\n  border-left: 6px solid #0FA8B8;\n}\n\n.comNo {\n  background-color: #0FA8B8;\n  color: white;\n  border-radius: 22px;\n  padding: 5px;\n}\n\n.label {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n}\n\n.namelabel {\n  background-color: #F7F7F7;\n  border-radius: 12px;\n  box-shadow: 0px 2px 4px -2px grey;\n}\n\n.arrow {\n  background-color: #F96C94;\n  padding: 6px;\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px -2px grey;\n}\n\n.nameDiv {\n  font-size: 12px;\n  padding: 5px;\n  align-self: center;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.userlabel {\n  zoom: 1.5;\n}\n\n.floatLabel {\n  font-size: 12px;\n  display: flex;\n  grid-gap: 3px;\n  gap: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb2YtYXdjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQyxpQ0FBQTtBQU1MOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFKOztBQUxBO0VBQ0ksbUJBQUE7QUFRSjs7QUFMQTtFQUNDLGtCQUFBO0FBUUQ7O0FBTEE7RUFDSSxTQUFBO0FBUUo7O0FBTEE7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBT0oiLCJmaWxlIjoibGlzdC1vZi1hd2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRsQXdje1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjFGMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjRjk2Qzk0O1xyXG59XHJcblxyXG4udGxBd2M0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRsTm97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2Qzk0O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udGxBd2Mye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkZFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjQUZCNDc0O1xyXG59XHJcbi50bHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRkI0NzQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRsZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGQjQ3NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRsY29te1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRkNGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMEZBOEI4O1xyXG59XHJcbi5jb21Ob3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGQThCODtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubmFtZWxhYmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTJweCBncmV5O1xyXG59XHJcbi5hcnJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Y5NkM5NDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMnB4IGdyZXk7XHJcbn1cclxuLm5hbWVEaXZ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGFsaWduLXNlbGY6Y2VudGVyXHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyICB7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VybGFiZWwge1xyXG4gICAgem9vbTogMS41O1xyXG59XHJcblxyXG4uZmxvYXRMYWJlbCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogM3B4O1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcclxuICAgIC8vIHRvcDogLTFweDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gei1pbmRleDogNTtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIHdpZHRoOiBmaXQtY29udGVudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    21990:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/list-of-awc/list-of-awc.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Anganwadi Centers </div>\r\n      <div class=\"ion-text-wrap floatLabel\">\r\n        <ion-icon name=\"person-circle-outline\" class=\"userlabel\"></ion-icon>\r\n        {{currUser}} &nbsp; &nbsp;( {{AcYears}} - {{phaseName}} )\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin: 20px;\">\r\n    <ion-row class=\"tlAwc4\" style=\"width: 100%;\">\r\n      <ion-col size=\"6\">\r\n        <ion-label>Filter by</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"display: flex; align-items: center; justify-content: end;\" (click)=\"schoolAlert()\">\r\n        <ion-label>{{(awcViewType?.type == 'D1' || awcViewType?.type == 'D2' || awcViewType?.type == 'D3' || awcViewType?.type == 'D4') ? (awcViewType?.type + ' filter') : awcViewType?.type == '1' ? ('All Diagnosis filter') : 'No filter'}}</ion-label>\r\n        <ion-icon name=\"caret-down-outline\" style=\"font-size: 12px; color: #808080ba; margin-left: 3px;\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row\r\n      class=\"tlAwc\">\r\n      <ion-col size=\"10\" style=\"align-self: center;\">\r\n        <div style=\"font-size: 12px;\">\r\n          <ion-label>Total AWC</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tl\">\r\n          <ion-label>{{awcList.length}}</ion-label>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row\r\n      class=\"tlAwc2\" *ngIf=\"awcViewType?.type == 2\">\r\n      <ion-col size=\"10\" style=\"align-self: center;\">\r\n        <div style=\"font-size: 12px;\">\r\n          <ion-label>AWC Partially Completed</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tldiv\">\r\n          <ion-label>{{parScreenedCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row\r\n      class=\"tlcom\">\r\n      <ion-col size=\"10\" style=\"align-self: center;\">\r\n        <div style=\"font-size: 12px;\">\r\n          <ion-label>AWC Fully Completed</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"comNo\">\r\n          <ion-label>{{screenedCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div\r\n      class=\"label\">\r\n      <ion-label>List Of AWC</ion-label>\r\n    </div>\r\n    <ion-searchbar class=\"mtb-8p\" *ngIf=\"studentList?.length != 0\" debounce=\"500\" (ionChange)=\"getFilterItems($event)\" placeholder=\"Search\">\r\n    </ion-searchbar>\r\n\r\n    <ion-row (click)=\"studentList(data)\" *ngFor=\"let data of searchData; let i = index\">\r\n      <ion-col size=\"10\">\r\n        <ion-row class=\"namelabel align-items-center\">\r\n          <ion-col [size]=\"data.screen_status == 1 ? '10': data.screen_status == 2 ? '10' : '11'\">\r\n            <div class=\"nameDiv\">\r\n              <ion-label>\r\n                {{ i + 1 }}. {{data.AwcName}}\r\n              </ion-label>\r\n            </div>\r\n            <div>\r\n              \r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" *ngIf=\"data.screen_status == 1\" class=\"text-center\">\r\n            <img src=\"../../../../assets/icons/awc/awcTick.svg\" style=\"width:48%\">\r\n          </ion-col>\r\n          <ion-col size=\"2\" *ngIf=\"data.screen_status == 2\" class=\"text-center\">\r\n            <img src=\"../../../../assets/icons/awc/awc-info.svg\" style=\"width:48%\">\r\n          </ion-col>\r\n          <!-- <ion-col *ngIf=\"data.screen_status == 1 || data.screen_status == 2\" (click)=\"openModal(data);$event.stopPropagation()\" size=\"1\" class=\"icon-col\" style=\"display: flex; justify-content: flex-end; align-items: center;\">\r\n            <ion-icon name=\"eye\" style=\"font-size: 20px; color: #8b67b3;\"></ion-icon>\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;color: white;\">\r\n        <ion-button style=\"color: white;\">{{ (data.tot != 0) ? (((data.tot1 / data.tot) * 100) | number : '1.2-2') : '0.00' }}%</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_awc_list-of-awc_list-of-awc_module_ts-es5.js.map