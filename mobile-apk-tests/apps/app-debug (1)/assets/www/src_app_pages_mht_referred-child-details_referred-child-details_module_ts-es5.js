(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_referred-child-details_referred-child-details_module_ts"], {
    /***/
    37295:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/mht/referred-child-details/referred-child-details-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredChildDetailsPageRoutingModule": function ReferredChildDetailsPageRoutingModule() {
          return (
            /* binding */
            _ReferredChildDetailsPageRoutingModule
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


      var _referred_child_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./referred-child-details.page */
      14158);

      var routes = [{
        path: '',
        component: _referred_child_details_page__WEBPACK_IMPORTED_MODULE_0__.ReferredChildDetailsPage
      }];

      var _ReferredChildDetailsPageRoutingModule = /*#__PURE__*/_createClass(function ReferredChildDetailsPageRoutingModule() {
        _classCallCheck(this, ReferredChildDetailsPageRoutingModule);
      });

      _ReferredChildDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReferredChildDetailsPageRoutingModule);
      /***/
    },

    /***/
    7719:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mht/referred-child-details/referred-child-details.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredChildDetailsPageModule": function ReferredChildDetailsPageModule() {
          return (
            /* binding */
            _ReferredChildDetailsPageModule
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


      var _referred_child_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./referred-child-details-routing.module */
      37295);
      /* harmony import */


      var _referred_child_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./referred-child-details.page */
      14158);

      var _ReferredChildDetailsPageModule = /*#__PURE__*/_createClass(function ReferredChildDetailsPageModule() {
        _classCallCheck(this, ReferredChildDetailsPageModule);
      });

      _ReferredChildDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _referred_child_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferredChildDetailsPageRoutingModule],
        declarations: [_referred_child_details_page__WEBPACK_IMPORTED_MODULE_1__.ReferredChildDetailsPage]
      })], _ReferredChildDetailsPageModule);
      /***/
    },

    /***/
    14158:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/mht/referred-child-details/referred-child-details.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredChildDetailsPage": function ReferredChildDetailsPage() {
          return (
            /* binding */
            _ReferredChildDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_referred_child_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./referred-child-details.page.html */
      99231);
      /* harmony import */


      var _referred_child_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./referred-child-details.page.scss */
      16522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      37961);

      var _ReferredChildDetailsPage = /*#__PURE__*/function () {
        function ReferredChildDetailsPage(alertController, usersessionService, pdfGenerator, router, userService, alert, alertService) {
          _classCallCheck(this, ReferredChildDetailsPage);

          this.alertController = alertController;
          this.usersessionService = usersessionService;
          this.pdfGenerator = pdfGenerator;
          this.router = router;
          this.userService = userService;
          this.alert = alert;
          this.alertService = alertService;
          this.hideDiv = true;
          this.schList = [];
          this.studList = [];
          this.actknarry = [];
          this.schListSearch = [];
          this.studList2 = [];
          this.conformCard = false;
          this.getdatafollow = [];
          this.submitted = false;
          this.currentDate = new Date().toISOString();
          this.isactive = 1;
          this.Action_taken = [{
            value: "1",
            label: "Treatment given during camp"
          }, {
            value: "2",
            label: "Referred to PHC / CHC / Sub-district hospital"
          }, {
            value: "3",
            label: "Referred to DEIC"
          }, {
            value: "4",
            label: "No action required"
          }, {
            value: "5",
            label: "Child already under treatment"
          }];
        }

        return _createClass(ReferredChildDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.UserName = this.usersessionService.emis_username();
            this.DistrictId = this.usersessionService.user_id();
            this.getReferredChildSchList();
            this.hiddenRecords = null;
            this.newDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('DD-MM-YYYY'); // this.getdatafollow()
          }
        }, {
          key: "getReferredChildSchList",
          value: function getReferredChildSchList() {
            var _this = this;

            this.userService.MhtReferredSchs(this.UserName).subscribe(function (res) {
              if (res.dataStatus) {
                _this.schList = res.result;
                _this.schListSearch = _this.schList;
              } else {
                _this.alert.error("No Data Found");
              }
            });
          }
        }, {
          key: "showbutton",
          value: function showbutton(schId, stdID) {
            this.indx = null;
            this.remarks = null;
            this.disease = null;
            this.date = null;
            this.isactive = 1;
            this.conformCard = true;
            this.studId = stdID;
            this.SchoolId = schId;
          }
        }, {
          key: "close",
          value: function close() {
            this.popData = '';
            this.conformCard = false;
          }
        }, {
          key: "schBtn",
          value: function schBtn(item) {
            var _this2 = this;

            this.studList2 = [];
            this.studList = [];
            this.labelSelct = null;
            this.hideDiv = false;
            this.schId = item.school_id;
            var alert;
            this.userService.MhtReferredStudentList(this.UserName, this.schId).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                var _this3 = this;

                var i, actkn;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      if (res.dataStatus) {
                        this.studList2 = res.result;
                        this.studList = res.result;

                        for (i = 0; i < this.studList.length; i++) {
                          actkn = this.Action_taken.find(function (j) {
                            return j.value === _this3.studList[i].act_tkn;
                          });

                          if (this.studList[i].act_tkn = actkn.value) {
                            Object.assign(this.studList[i], {
                              acktnlabel: actkn.label
                            });
                          }
                        }
                      } else {
                        this.alert.error("No Data Found");
                        this.presentAlert();
                      }

                    case 1:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "detailsget",
          value: function detailsget(item, stdId) {
            console.log('details', item);

            if (this.hiddenRecords == item) {
              this.hiddenRecords = null;
            } else {
              this.hiddenRecords = item;
            } // this.getfollowup(stdId)


            this.studt_id = stdId;
            this.getfollowup();
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this4 = this;

            this.searchTerm = event.detail.value.trim();
            var data = this.schListSearch.filter(function (item) {
              return item.school_name.toLowerCase().indexOf(_this4.searchTerm.toLowerCase()) > -1;
            });
            this.schList = data;
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "onGoButton2",
          value: function onGoButton2() {
            this.hideDiv = true;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: 'Alert!',
                      subHeader: 'No referred students in this school',
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          _this5.hideDiv = true;
                        }
                      }]
                    });

                  case 1:
                    alert = _context2.v;
                    _context2.n = 2;
                    return alert.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "sortAlert",
          value: function sortAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var previousValue, alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    previousValue = this.value;
                    this.data = this.value;
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Select your status that you need',
                      inputs: [{
                        type: 'radio',
                        value: "1",
                        label: "Treatment given during camp",
                        checked: this.data === "1"
                      }, {
                        type: 'radio',
                        value: "2",
                        label: "Referred to PHC / CHC / Sub-district hospital",
                        checked: this.data === "2"
                      }, {
                        type: 'radio',
                        value: "3",
                        label: "Referred to DEIC",
                        checked: this.data === "3"
                      }, {
                        type: 'radio',
                        value: "4",
                        label: "No action required",
                        checked: this.data === "4"
                      }, {
                        type: 'radio',
                        value: "5",
                        label: "Child already under treatment",
                        checked: this.data === "5"
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(item) {
                          console.log('item', item);
                          _this6.value = item;

                          var label = _this6.Action_taken.find(function (j) {
                            return j.value === _this6.value;
                          });

                          _this6.labelSelct = label.label;
                          console.log('labelSelct', _this6.labelSelct);

                          var sortStudentList = _this6.studList2.filter(function (tt) {
                            return tt.act_tkn == _this6.value;
                          });

                          if (sortStudentList.length > 0) {
                            _this6.studList = sortStudentList;
                          } else {
                            _this6.studList = sortStudentList;

                            _this6.alert.error("No Data Found");
                          }
                        }
                      }]
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    this.value = previousValue;

                  case 3:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "schoolSort",
          value: function schoolSort() {
            this.sortAlert();
          }
        }, {
          key: "getStudListInSearch",
          value: function getStudListInSearch(event) {
            var _this7 = this;

            this.searchTerm = event.detail.value.trim();
            this.studList = this.studList2.filter(function (item) {
              return item.name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "editoption",
          value: function editoption(i, data) {
            console.log(i);
            console.log(data);
            this.conformCard = true;
            this.isactive = 1;
            this.indx = data.IndxId;
            this.remarks = data.Remarks;
            this.disease = data.Referral;
            this.date = data.Date;
            this.student_id = data.StdntId;
            this.schooll_id = data.SchoolId;
          }
        }, {
          key: "presentAlert1",
          value: function presentAlert1(i) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this8 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      message: ' Are you sure you want to delete this message?',
                      buttons: [{
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alert) {
                          _this8.deletefuntn(i);
                        }
                      }]
                    });

                  case 1:
                    alert = _context4.v;
                    _context4.n = 2;
                    return alert.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deletefuntn",
          value: function deletefuntn(i) {
            this.getdatafollow.splice(i, -1);
            this.indx = this.getdatafollow[i].IndxId;
            this.remarks = this.getdatafollow[i].Remarks;
            this.disease = this.getdatafollow[i].Referral;
            this.date = this.getdatafollow[i].Date;
            this.student_id = this.getdatafollow[i].StdntId;
            this.schooll_id = this.getdatafollow[i].SchoolId;
            this.isactive = 0;
            this.onSumbit();
          }
        }, {
          key: "selectedOption",
          value: function selectedOption() {
            console.log('Selected Disease:', this.disease);
          }
        }, {
          key: "onSumbit",
          value: function onSumbit() {
            var _this9 = this;

            this.submitted = true;

            if (this.remarks != null && this.remarks.trim() !== "" && this.disease !== null && this.disease.trim() !== "" && this.date !== null && this.date.trim() !== "") {
              var formattedDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY-MM-DD');
              this.finaldata = {
                "records": {
                  "IndxId": this.indx ? this.indx : "",
                  "SchoolId": this.schooll_id ? this.schooll_id : this.SchoolId,
                  "StdntId": this.student_id ? this.student_id : this.studId,
                  "Referral": this.disease ? this.disease : this.disease,
                  "Remarks": this.remarks ? this.remarks : this.remarks,
                  "Date": this.date ? this.date : formattedDate,
                  "isactive": this.isactive
                }
              };
              this.userService.mhtfollowup(this.finaldata).subscribe(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.n) {
                      case 0:
                        if (res.dataStatus == true) {
                          this.alertService.alert(res.message);
                          this.getfollowup();
                          this.conformCard = false;
                          this.submitted = false;
                        } else {
                          this.alertService.warning("Error");
                          this.submitted = true;
                        }

                      case 1:
                        return _context5.a(2);
                    }
                  }, _callee5, this);
                }));
              });
            } else {
              this.alert.warning('Please Select field ');
            }
          }
        }, {
          key: "getfollowup",
          value: function getfollowup() {
            var _this0 = this;

            this.getdatafollow = [];
            this.userService.getfollowupdatamht(this.studt_id).subscribe(function (res) {
              if (res.dataStatus) {
                _this0.getdatafollow = res.result; // this.getdatafollow.Referral ? "1" : "PHC"
              }
            });
          }
        }, {
          key: "exportTopdf",
          value: function exportTopdf() {
            // if(this.getdatafollow.length == 0){
            //   this.pdfvaluedownlod = false
            //   this.getdatafollow.push({
            //     Date:"",
            //     IndxId:"",
            //     Referral:"",
            //     Remarks:"",
            //     SchoolId:"",
            //     StdntId:"",
            //   })
            // } else {
            //   this.pdfvaluedownlod = true
            // }
            var content = document.getElementById("printPageButton").innerHTML;
            var options = {
              documentSize: 'A4',
              type: 'share',
              fileName: 'MHT_copy.pdf'
            };
            this.pdfGenerator.fromData(content, options).then(function (base64) {
              console.log('OK', base64); // this.router.navigate(["/tabs/referred-student"])
            })["catch"](function (error) {
              console.log('error', error);
            });
            history.back();
          }
        }]);
      }();

      _ReferredChildDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__.PDFGenerator
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _ReferredChildDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-referred-child-details',
        template: _raw_loader_referred_child_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_referred_child_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReferredChildDetailsPage);
      /***/
    },

    /***/
    16522:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mht/referred-child-details/referred-child-details.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".schdiv {\n  margin-top: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  border-radius: 16px;\n  background-color: white;\n  justify-content: space-between;\n  display: flex;\n  border-left: 6px solid #68529c;\n  box-shadow: 2px 4px 3px grey;\n}\n\n.nameDiv {\n  margin-left: 5px;\n  align-self: center;\n  font-size: 13px;\n}\n\n.iconArrow {\n  margin-right: 5px;\n  color: #68529c;\n}\n\n.schdiv2 {\n  margin-top: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  border-radius: 16px;\n  background-color: white;\n  justify-content: space-between;\n  display: flex;\n  border-left: 6px solid #68529c;\n  border-right: 6px solid #68529c;\n  box-shadow: 4px 4px 7px grey;\n}\n\n.nameDiv2 {\n  margin-left: 5px;\n  font-size: 15px;\n}\n\n.margin-align {\n  margin-top: 5px;\n}\n\n.maindiv {\n  background-color: #ffefef;\n  margin: 15px;\n  border-radius: 15px;\n}\n\n.firstrow {\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 0px 2px 4px grey;\n}\n\n.colBorder {\n  border-bottom: 1px solid grey;\n}\n\n.personicon {\n  width: 24px;\n  vertical-align: text-top;\n  font-size: 22px;\n  color: #68529c;\n}\n\n.icondiv {\n  font-size: 13px;\n  padding-bottom: 4px;\n  color: #68529c;\n  font-weight: 700;\n}\n\n.morebtn {\n  text-align: center;\n  background-color: #efefef;\n  padding: 5px;\n  border-radius: 10px;\n  font-size: 10px;\n  box-shadow: 0px 2px 3px grey;\n}\n\n.labelDiv {\n  font-size: 11px;\n  margin-left: 6px;\n}\n\n.labeldiv2 {\n  font-size: 9px;\n  font-weight: 500;\n  margin-right: 40px;\n  color: #68529c;\n}\n\n.studRow {\n  background-color: white;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.refDiv {\n  font-size: 10px;\n  font-weight: 400;\n  margin-left: 6px;\n}\n\n.reflabel {\n  font-weight: 500;\n  color: #68529c;\n}\n\n.callDiv {\n  text-align: center;\n  color: green;\n  background: lightgreen;\n  border-radius: 9px;\n  zoom: 1.3;\n}\n\n.filterDiv {\n  width: 15%;\n  text-align: center;\n  align-self: center;\n  padding: 14px;\n  background-color: #f0e8e8;\n  border-radius: 10px;\n  box-shadow: 2px 3px grey;\n}\n\n.headingDiv {\n  font-size: 15px;\n  font-weight: 500;\n  margin-left: 20px;\n  margin-top: 20px;\n  color: darkslategrey;\n}\n\n.nodata {\n  font-size: 15px;\n  text-align: center;\n  color: darkslategrey;\n  margin-top: 20px;\n}\n\n.user {\n  width: 24px;\n  vertical-align: text-top;\n  font-size: 17px;\n}\n\n.secondary {\n  font-size: 12px;\n}\n\n.pop-up {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.pop-up .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.pop-up .img-card {\n  position: relative;\n  width: 80%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.pop-up .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #ef666a;\n  color: #ef666a;\n  font-size: 29px;\n  padding: 3px 5px;\n  position: absolute;\n  top: -27px;\n  right: -25px;\n}\n\n.pop-up.open {\n  top: 0%;\n}\n\n#class {\n  margin-left: 65px;\n}\n\n#class1 {\n  margin-left: 59px;\n}\n\n#class2 {\n  margin-top: 31px;\n  /* margin-right: 46px; */\n  /* margin-right: 52px; */\n  /* margin: 20px; */\n  margin-left: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmVkLWNoaWxkLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEU7RUFDRSw2QkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQVNKOztBQVBFO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0FBU0o7O0FBUEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFjSjs7QUFWRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWFKOztBQVhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBY0o7O0FBWkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkU7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBZ0JKOztBQWRFO0VBQ0UsZUFBQTtBQWlCSjs7QUFmRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQWtCSjs7QUFqQkk7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW1CUjs7QUFqQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbUJSOztBQWxCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBb0JaOztBQWpCSTtFQUNJLE9BQUE7QUFtQlI7O0FBZkU7RUFDRSxpQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSxpQkFBQTtBQW1CSjs7QUFqQkU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBb0JKIiwiZmlsZSI6InJlZmVycmVkLWNoaWxkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zY2hkaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDNweCBncmV5O1xyXG59XHJcbi5uYW1lRGl2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmljb25BcnJvd3tcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAxNTYpO1xyXG59XHJcblxyXG4uc2NoZGl2MntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA3cHggZ3JleTtcclxufVxyXG4ubmFtZURpdjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5tYXJnaW4tYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5tYWluZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZlZjtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5maXJzdHJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IGdyZXk7XHJcbiAgfVxyXG4gIC5jb2xCb3JkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICB9XHJcbiAgLnBlcnNvbmljb257XHJcbiAgICB3aWR0aDoyNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gIH1cclxuICAuaWNvbmRpdntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAubW9yZWJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggZ3JleTtcclxuICB9XHJcbiAgLmxhYmVsRGl2e1xyXG4gICAgZm9udC1zaXplOiAxMXB4OyBcclxuICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG4gIC5sYWJlbGRpdjJ7XHJcbiAgICBmb250LXNpemU6IDlweDsgXHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gIH1cclxuICAuc3R1ZFJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICAucmVmRGl2e1xyXG4gICAgZm9udC1zaXplOiAxMHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIH1cclxuICAucmVmbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6cmdiKDEwNCwgODIsIDE1NilcclxuICB9XHJcbiAgLmNhbGxEaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgem9vbTogMS4zO1xyXG4gIH1cclxuXHJcblxyXG4gIC5maWx0ZXJEaXZ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGU4ZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCBncmV5O1xyXG4gIH1cclxuICAuaGVhZGluZ0RpdntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIH1cclxuICAubm9kYXRhe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC51c2Vye1xyXG4gICAgd2lkdGg6MjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLnNlY29uZGFyeXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnBvcC11cHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLmJsYWNrZHJvcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNhcmR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZWY2NjZhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTI3cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm9wZW57XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gIH1cclxuICAjY2xhc3Mxe1xyXG4gICAgbWFyZ2luLWxlZnQ6NTlweFxyXG4gIH1cclxuICAjY2xhc3Mye1xyXG4gICAgbWFyZ2luLXRvcDogMzFweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogNDZweDsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogNTJweDsgKi9cclxuICAgIC8qIG1hcmdpbjogMjBweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAtNTdweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    99231:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/referred-child-details/referred-child-details.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" *ngIf=\"hideDiv\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" *ngIf=\"!hideDiv\" (click)=\"onGoButton2()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" *ngIf=\"hideDiv\">School List</div>\r\n      <div class=\"ion-text-wrap\" *ngIf=\"!hideDiv\">Students List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"hideDiv\">\r\n  <ion-grid>\r\n    <div class=\"margin-align\">\r\n      <ion-searchbar (ionChange)=\"getFilterItems($event)\">\r\n      </ion-searchbar>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <div style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n    <div class=\"schdiv\" (click)=\"schBtn(list)\" *ngFor=\"let list of schList\">\r\n      <div class=\"nameDiv\">\r\n        <ion-label>{{list.school_name}}</ion-label>\r\n      </div>\r\n      <div class=\"iconArrow\">\r\n        <ion-icon name='chevron-forward'></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"!hideDiv\">\r\n  <div style=\"margin-top: 20px;\">\r\n    <ion-row style=\"margin-right: 15px;margin-left: 10px;\">\r\n      <div style=\"width: 85%;\">\r\n        <ion-searchbar (ionChange)=\"getStudListInSearch($event)\"></ion-searchbar>\r\n      </div>\r\n      <div class=\"filterDiv\"\r\n        (click)=\"schoolSort()\">\r\n        <img src=\"../../../../../assets/icons/filters.svg\" style=\"width: 48%;\">\r\n      </div>\r\n    </ion-row>\r\n    <div class=\"headingDiv\" *ngIf=\"this.labelSelct != null\">\r\n      <ion-label>{{this.labelSelct}}:</ion-label>\r\n    </div>\r\n\r\n    <div class=\"nodata\" *ngIf=\"this.studList == ''\">\r\n      <ion-label>No Data</ion-label>\r\n    </div>\r\n\r\n    <div class=\"maindiv\" *ngFor=\"let item of studList;let i = index\">\r\n      <ion-row class=\"firstrow\">\r\n        <ion-col size=\"10\" class=\"colBorder\">\r\n          <ion-row class=\"studRow\">\r\n            <ion-icon name=\"person-circle-outline\" class=\"personicon\"> </ion-icon>\r\n            <div class=\"icondiv\">\r\n              <ion-label>{{item.name}}</ion-label>\r\n            </div>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"colBorder\">\r\n          <a href=\"tel:{{item.Phone_Num}}\" class=\"call-icon\">\r\n            <div class=\"callDiv\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n            </div>\r\n          </a>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3.5\">\r\n          <div class=\"labelDiv\">\r\n            <ion-label>Class : <span style=\"font-weight: 500;color: rgb(104, 82, 156);\">{{item.Class}}</span><span\r\n                style=\"font-weight: 500;color: rgb(104, 82, 156);\">-{{item.Section}}</span> </ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6.5\" style=\"text-align: end;\">\r\n          <div class=\"labelDiv\">\r\n            <ion-label>Screened Doctor:  <span class=\"labeldiv2\" >{{item.dr_name}}</span></ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <!-- <ion-col size=\"3.5\">\r\n          <div class=\"labeldiv2\">\r\n            <ion-label>{{item.dr_name}} </ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"2\" style=\"text-align: center;\">\r\n          <div (click)=\"detailsget(i,item.student_id)\">\r\n            <ion-icon name='chevron-up' style=\"zoom: 1.3;color: rgb(104, 82, 156);\" *ngIf=\"hiddenRecords == i\">\r\n            </ion-icon>\r\n            <ion-icon name='chevron-down' style=\"zoom: 1.3;color: rgb(104, 82, 156);\" *ngIf=\"hiddenRecords != i\">\r\n            </ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row *ngIf=\"hiddenRecords == i\" style=\"padding-top: 8px;\">\r\n        <ion-col size=\"6\" *ngIf=\"item.act_tkn != null\">\r\n          <div class=\"refDiv\">\r\n            <ion-label>\r\n              ACTION TAKEN: <span class=\"reflabel\">{{item.acktnlabel}}</span>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\" *ngIf=\"item.student_id != null\"  style=\"text-align: center;color:rgb(104, 82, 156);zoom: 2.3;\">\r\n        <div class=\"refDiv\" >\r\n          <ion-icon name=\"bag-add-outline\" (click)=\"showbutton(item.school_id,item.student_id)\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"3\">\r\n        <ion-button (click)=\"exportTopdf()\" class=\"refDiv\" style=\"color: white\">PDF</ion-button>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.dgnsd_cndn != null\">\r\n          <div class=\"refDiv\">\r\n            <ion-label style=\"margin-top: -22px;\">\r\n              DIAGNOSIS: <span class=\"reflabel\">{{item.dgnsd_cndn}}</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.dgnsd_cndn_oth != null\">\r\n          <div class=\"refDiv\">\r\n            <ion-label>\r\n              OTHER DIAGNOSIS: <span class=\"reflabel\">{{item.dgnsd_cndn_oth}}</span>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.tab_presc != ''\">\r\n          <div class=\"refDiv\">\r\n            <ion-label>\r\n              TABLET PRESCRIPTION: <span class=\"reflabel\">{{item.tab_presc}}</span>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.tab_presc_othr != null \">\r\n          <div class=\"refDiv\">\r\n            <ion-label>\r\n              OTHER PRESCRIPTION: <span class=\"reflabel\">{{item.tab_presc_othr}}</span>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.flw_req_date != null\">\r\n          <div class=\"refDiv\">\r\n            <ion-label>\r\n              FOLLOW-UP DATE: <span class=\"reflabel\">{{item.flw_req_date}}</span>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <div id=\"printPageButton\" *ngIf=\"hiddenRecords == i\" hidden>\r\n          <div style=\"text-align: end;\">Date:\r\n            {{ this.newDate }}\r\n          </div>\r\n        <table style=\"margin: 40px;\r\n        border-collapse: collapse\">\r\n          <tr>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Name</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Class</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Section</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">School Name</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Screened Doctor</th>\r\n          </tr>\r\n          <tr>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\">{{item.name}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\">{{item.Class}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\">{{item.Section}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\">{{item.school_name}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\">{{item.dr_name}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th colspan=\"3\"style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">ACTION TAKEN:</th>\r\n            <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\"><span>{{ item.acktnlabel }}</span></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"3\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">DIAGNOSIS:</th>\r\n              <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\"><span>{{  item.dgnsd_cndn  }}</span></th>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"3\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">OTHER DIAGNOSIS:</th>\r\n                <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\"><span>{{  item.dgnsd_cndn_oth }}</span></th>\r\n                </tr>\r\n                <tr>\r\n                  <th colspan=\"3\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">FOLLOW-UP DATE:</th>\r\n                  <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;text-align: center;\"><span>{{ item.flw_req_date }}</span></th>\r\n                  </tr>\r\n                  <tr *ngIf=\"getdatafollow.length > 0\">\r\n                    <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Date</th>\r\n                    <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Remarks</th>\r\n                    <th colspan=\"5\"style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Referral</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item of getdatafollow; let i = index\">\r\n                    <span *ngIf=\"item.Date != ''\">\r\n                    <td colspan=\"2\" class=\"text-center\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">{{ item.Date | date: 'dd/MM/yyyy'  }}</td>\r\n                    <td colspan=\"2\" class=\"text-center\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;word-break: break-all;\">{{ item.Remarks }}</td>\r\n                    <td colspan=\"5\" class=\"text-center\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">{{item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : item.Referral == '5' ? 'DMHP' : ''}}</td>\r\n                  </span>\r\n                  </tr>\r\n        </table>\r\n        </div>\r\n\r\n       \r\n\r\n\r\n        <div  *ngIf=\"hiddenRecords == i\" style=\"padding-top: 8px;\" hidden>\r\n          <table style=\"margin-left: 50px; margin-top: 50px;\">\r\n            <tr>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">School Name:</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.school_name}}</span></th>\r\n            </tr>\r\n            <tr>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">Name:</th>\r\n            <th colspan=\"2\" style=\"padding: 5px;\"><span>{{item.name}}</span></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"2\" style=\"padding: 10px;\">Class:</th>\r\n              <th colspan=\"2\" style=\"padding: 5px;\"><span>{{item.Class}}</span></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"2\" style=\"padding: 10px;\">Section:</th>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.Section}}</span></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"2\" style=\"padding: 10px;\">Screened Doctor:</th>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.dr_name}}</span></th>\r\n            </tr>\r\n\r\n            <tr>\r\n              <th *ngIf=\"item.act_tkn != null\" colspan=\"2\" style=\"padding: 10px;\"> ACTION TAKEN</th>\r\n              <th *ngIf=\"item.dgnsd_cndn != null\" colspan=\"2\" style=\"padding: 10px;\"> DIAGNOSIS</th>\r\n              <th *ngIf=\"item.dgnsd_cndn_oth != null\" colspan=\"2\" style=\"padding: 10px;\"> OTHER DIAGNOSIS</th>\r\n              <th *ngIf=\"item.flw_req_date != null\" colspan=\"2\" style=\"padding: 10px;\"> FOLLOW-UP DATE</th>\r\n             \r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{ item.acktnlabel }}</span></th>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{ item.dgnsd_cndn }}</span></th>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{ item.dgnsd_cndn_oth }}</span></th>\r\n              <th colspan=\"2\" style=\"padding: 10px;\"><span>{{ item.flw_req_date }}</span></th>\r\n\r\n\r\n            </tr>\r\n            <!-- <tr *ngIf=\"item.dgnsd_cndn != null\">\r\n              <td colspan=\"4\">\r\n                <div class=\"refDiv\">\r\n                  <ion-label style=\"margin-top: -22px;\">\r\n                    DIAGNOSIS: <span class=\"reflabel\">{{ item.dgnsd_cndn }}</span>\r\n                  </ion-label>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"item.dgnsd_cndn_oth != null\">\r\n              <td colspan=\"4\">\r\n                <div class=\"refDiv\">\r\n                  <ion-label>\r\n                    OTHER DIAGNOSIS: <span class=\"reflabel\">{{ item.dgnsd_cndn_oth }}</span>\r\n                  </ion-label>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"item.flw_req_date != null && hiddenRecords == i && getdatafollow.length > 0\">\r\n              <td colspan=\"4\">\r\n                <div class=\"refDiv\">\r\n                  <ion-label>\r\n                    FOLLOW-UP DATE: <span class=\"reflabel\">{{ item.flw_req_date }}</span>\r\n                  </ion-label>\r\n                </div>\r\n              </td>\r\n            </tr> -->\r\n\r\n            <tr>\r\n              <th colspan=\"2\" style=\"font-size: 20px;\">Date</th>\r\n              <th colspan=\"5\" style=\"font-size: 20px;\">Remarks</th>\r\n              <th colspan=\"5\" style=\"position: absolute;margin-left: 130px;font-size: 20px;\">Referral</th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of getdatafollow; let i = index\">\r\n              <span *ngIf=\"item.Date != ''\">\r\n              <td colspan=\"2\" class=\"text-center\" style=\"padding: 20px; margin-left: 10px;\">{{ item.Date  }}</td>\r\n              <td colspan=\"5\" class=\"text-center\" style=\"padding: 13px;   position: absolute;margin-top: -5px;margin-left: 10px; width: 248px;height: 300px; display: flex;word-break: break-all;\">{{ item.Remarks }}</td>\r\n              <td colspan=\"5\" class=\"text-center\" style=\"padding: 10px; position: absolute;margin-top: -5px;margin-left: 300px;\">{{item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : item.Referral == '5' ? 'DMHP' : ''}}</td>\r\n            </span>\r\n            </tr>\r\n            <!-- Add a row for Remarks, Referral, and Date -->\r\n          </table>\r\n        </div>\r\n\r\n      </ion-row>\r\n\r\n\r\n      <div *ngIf=\"hiddenRecords == i && getdatafollow.length > 0 \">\r\n        <ion-row>\r\n          <ion-col size=\"3\" style=\"text-align: center;font-size: 12px\">Date</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: center;font-size: 12px\">Remarks</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: center;font-size: 12px\">Referral</ion-col>\r\n          <ion-col size=\"1.5\"style=\"text-align: center;font-size: 12px\">Edit</ion-col>\r\n          <ion-col size=\"1.5\" style=\"text-align: center;font-size: 12px\">Delete</ion-col>\r\n        </ion-row>\r\n  \r\n        <ion-row *ngFor=\"let item of getdatafollow; let i = index\">\r\n          <ion-col size=\"3\" style=\"text-align: center;\">\r\n            <ion-label>{{ item.Date | date: 'dd/MM/yyyy' }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: center;\">\r\n            <ion-label>{{ item.Remarks }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: center;\">\r\n            <ion-label>{{ item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : item.Referral == '5' ? 'DMHP' : '' }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"1.5\" style=\"text-align: center;\">\r\n            <ion-icon size=\"1.5\" name=\"create-outline\" (click)=\"editoption(i,item)\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"1.5\" style=\"text-align: center;\">\r\n            <ion-icon size=\"1.5\" name=\"trash-outline\" (click)=\"presentAlert1(i)\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n  \r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"pop-up\" [class.open]=\"conformCard\">\r\n    <div class=\"blackdrop\" (click)=\"close()\"></div>\r\n    <div class=\"img-card\">\r\n      <div style=\"padding: 35px;\">\r\n        <h5 style=\"color:rgb(104, 82, 156)\">FOLLOW-UP</h5>\r\n      <div class=\"row\">\r\n        <ion-label>Remarks:</ion-label>&nbsp;&nbsp;\r\n        <input required=\"true\" size=\"12\" type=\"text\" [(ngModel)]=\"remarks\" maxlength=\"100\" placeholder=\"Enter text\"/>\r\n        <p *ngIf=\"(remarks == '' && submitted == true) || (remarks == null && submitted == true)\" class=\"error-message\" id=\"class\">Remarks is required</p>\r\n        <!-- <div *ngIf=\"remarks.errors.required\">Username is required.</div> -->\r\n        <!-- </div> -->\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <ion-label>Referral:</ion-label>\r\n        <ion-item>\r\n          <ion-select label=\"Default label\" [(ngModel)]=\"disease\" placeholder=\"Select Dropdown\" style=\"margin-top:-7px;\" (ionChange)=\"selectedOption()\">\r\n            <ion-select-option value=\"1\">PHC</ion-select-option>\r\n            <ion-select-option value=\"2\">SDC</ion-select-option>\r\n            <ion-select-option value=\"3\">DH</ion-select-option>\r\n            <ion-select-option value=\"4\">DEIC</ion-select-option>\r\n            <ion-select-option value=\"5\">DMHP</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <p *ngIf=\"(disease == '' && submitted == true )|| (disease == null && submitted == true)\" class=\"error-message\" id=\"class1\">Referral is required</p>\r\n        <!-- <div *ngIf=\"!disease\" class=\"error-message\">Referral is required</div> -->\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <ion-label>Date:</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" [(ngModel)]=\"date\" min=\"{{ currentDate }}\" style=\"margin-top: -7px;\"></ion-datetime>\r\n        <p *ngIf=\"(date == '' && submitted == true) || (date == null && submitted == true)\" class=\"error-message\" id=\"class2\">Date is required</p>\r\n        <!-- <div *ngIf=\"!date\" class=\"error-message\">Date is required</div> -->\r\n      </div>\r\n      <br>\r\n      <div class=\"btn-row\">\r\n        <ion-button (click)=\"onSumbit()\" style=\"color:white\">save</ion-button>\r\n      </div>\r\n      <button (click)=\"close()\"><ion-icon name=\"close-outline\"></ion-icon></button>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mht_referred-child-details_referred-child-details_module_ts-es5.js.map