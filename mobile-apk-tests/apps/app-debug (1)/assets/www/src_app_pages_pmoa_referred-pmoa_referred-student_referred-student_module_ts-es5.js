(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_referred-pmoa_referred-student_referred-student_module_ts"], {
    /***/
    87569:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/pmoa/referred-pmoa/referred-student/referred-student-routing.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredStudentPageRoutingModule": function ReferredStudentPageRoutingModule() {
          return (
            /* binding */
            _ReferredStudentPageRoutingModule
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


      var _referred_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./referred-student.page */
      9983);

      var routes = [{
        path: '',
        component: _referred_student_page__WEBPACK_IMPORTED_MODULE_0__.ReferredStudentPage
      }];

      var _ReferredStudentPageRoutingModule = /*#__PURE__*/_createClass(function ReferredStudentPageRoutingModule() {
        _classCallCheck(this, ReferredStudentPageRoutingModule);
      });

      _ReferredStudentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReferredStudentPageRoutingModule);
      /***/
    },

    /***/
    54414:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/pmoa/referred-pmoa/referred-student/referred-student.module.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredStudentPageModule": function ReferredStudentPageModule() {
          return (
            /* binding */
            _ReferredStudentPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _referred_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./referred-student-routing.module */
      87569);
      /* harmony import */


      var _referred_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./referred-student.page */
      9983);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      18752);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ReferredStudentPageModule = /*#__PURE__*/_createClass(function ReferredStudentPageModule() {
        _classCallCheck(this, ReferredStudentPageModule);
      });

      _ReferredStudentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _referred_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferredStudentPageRoutingModule],
        declarations: [_referred_student_page__WEBPACK_IMPORTED_MODULE_1__.ReferredStudentPage],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File, _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
        }]
      })], _ReferredStudentPageModule);
      /***/
    },

    /***/
    9983:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/pmoa/referred-pmoa/referred-student/referred-student.page.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferredStudentPage": function ReferredStudentPage() {
          return (
            /* binding */
            _ReferredStudentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_referred_student_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./referred-student.page.html */
      83749);
      /* harmony import */


      var _referred_student_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./referred-student.page.scss */
      60895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! xlsx */
      46351);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      37961); // import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
      // import { File } from '@ionic-native/file/ngx';
      // import { ToastController } from '@ionic/angular';
      // import { FileOpener } from '@ionic-native/file-opener/ngx';
      // import { File } from '@awesome-cordova-plugins/file/ngx';


      var _ReferredStudentPage = /*#__PURE__*/function () {
        // finaldata: {
        //   // IndxId: string; SchoolId: any;
        //   // "StdntId": StdntId,
        //   Referral: any; Remarks: any; Date: any;
        // };
        function ReferredStudentPage(platform, alertController, router, pdfGenerator, usersessionService, userService, alert, alertService) {
          _classCallCheck(this, ReferredStudentPage);

          //    this.platform.backButton.subscribeWithPriority(10, () => {
          //   console.log('Handler was called!');
          //   console.log('div',this.div);
          this.platform = platform;
          this.alertController = alertController;
          this.router = router;
          this.pdfGenerator = pdfGenerator;
          this.usersessionService = usersessionService;
          this.userService = userService;
          this.alert = alert;
          this.alertService = alertService;
          this.hideDiv = true;
          this.studList2 = [];
          this.imgPopup = false;
          this.conformCard = false;
          this.submitted = false;
          this.getdatafollow = [];
          this.showbutton123 = false;
          this.currentDate = new Date().toISOString();
          this.isactive = 1;
          this.remarksExceedsLimit = false;
          this.pmoaHealthStatus = [{
            value: "1",
            label: "Spectacle Needed"
          }, {
            value: "2",
            label: "Visit to DEIC"
          }, {
            value: "3",
            label: "Spectacle Needed and Visit To DEIC"
          }, {
            value: "4",
            label: "Normal"
          }];
          this.spectacalStatus = [{
            value: "1",
            label: "Not received"
          }, {
            value: "2",
            label: "Verified and received by student"
          }, {
            value: "3",
            label: "Defective and returned"
          }, {
            value: "4",
            label: "Correction verified and received"
          }]; //   if (this.div == 2){
          //   console.log('if');
          //     this.hideDiv = true;
          //   }else if(this.div == 3){
          //   console.log('else if');
          // this.router.navigate(['/tabs/home']);
          //   }
          // });

          this.platform.ready().then(function () {// Your code here, including the use of PdfGenerator
          });
        }

        return _createClass(ReferredStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // this.getfollowup();
            this.UserName = this.usersessionService.emis_username();
            this.DistrictId = this.usersessionService.user_id(); // this.SchoolId = this.usersessionService.rsa_school_id();
            // console.log( this.SchoolId," this.SchoolId")

            this.getReferredChildSchList();
            this.hiddenRecords = null;
            this.newDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('DD-MM-YYYY'); // this.exportToExcel("printPageButton")
          }
        }, {
          key: "getReferredChildSchList",
          value: function getReferredChildSchList() {
            var _this = this;

            this.div = 1;
            this.userService.PmoaReferredSchs(this.UserName).subscribe(function (res) {
              if (res.dataStatus) {
                _this.schList = res.result;
                _this.schListSearch = _this.schList;
              } else {
                _this.alert.error("No Data Found");
              }
            });
          }
        }, {
          key: "getfollowup",
          value: function getfollowup() {
            var _this2 = this;

            // this.studentid = item.
            this.getdatafollow = [];
            this.userService.getfollowupdata(this.stdent_id).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.getdatafollow = res.result; // this.getdatafollow.Referral ? "1" : "PHC"
              }
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
            this.school_id = data.SchoolId;
          }
        }, {
          key: "schBtn",
          value: function schBtn(item) {
            var _this3 = this;

            this.pdflistrue = item;
            this.div = 2;
            console.log('sss', this.div);
            this.labelSelct = null;
            this.hideDiv = false;
            this.schId = item.SchlId; // this.studentid = item.StdntId

            this.userService.PmoaReferredStudentList(this.schId, this.UserName).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                var _this4 = this;

                var i, healthsts;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      if (res.dataStatus) {
                        this.studList = res.result;
                        this.studList2 = res.result; // this.studentid = this.studList.StdntId

                        console.log('stuList', this.studList);

                        for (i = 0; i < this.studList.length; i++) {
                          console.log(this.studList[i].health_status, "health data");
                          console.log(this.studList[i].specs_status, "specse data");
                          healthsts = this.pmoaHealthStatus.find(function (j) {
                            return j.value === _this4.studList[i].health_status;
                          });

                          if (this.studList[i].health_status === healthsts.value) {
                            Object.assign(this.studList[i], {
                              pmoalabel: healthsts.label
                            });
                          } // let spectacalsts = this.spectacalStatus.find(j => j.value === this.studList[i].specs_status);
                          // if (this.studList[i].specs_status ===   spectacalsts.value) {
                          //   Object.assign(this.studList[i], { spectacalStatus: spectacalsts.label });
                          // }

                        }
                      } else {
                        this.alert.error("No Data Found");
                      }

                    case 1:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.popData = '';
            this.conformCard = false;
          }
        }, {
          key: "onSumbit",
          value: function onSumbit() {
            var _this5 = this;

            // valueisact = this.isactive
            this.submitted = true; // console.log(i,"i value")

            if (this.remarks != null && this.remarks.trim() !== "" && this.disease !== null && this.disease.trim() !== "" && this.date !== null && this.date.trim() !== "") {
              var formattedDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY-MM-DD'); // for(let i=0 ; i<this.getdatafollow.length; i++){
              // if(this.getdatafollow && this.getdatafollow[i].StdntId == this.student_id){
              //   this.finaldata = {
              //     "records":{
              //     "IndxId": this.getdatafollow[i].IndxId ? this.getdatafollow[i].IndxId: "",
              //     "SchoolId":this.getdatafollow[i].SchoolId ? this.getdatafollow[i].SchoolId : this.SchoolId ,
              //     "StdntId": this.getdatafollow[i].StdntId ? this.getdatafollow[i].StdntId: this.studId,
              //     "Referral":this.getdatafollow[i].Referral ? this.getdatafollow[i].Referral : this.disease,
              //     "Remarks": this.getdatafollow[i].Remarks ? this.getdatafollow[i].Remarks : this.remarks,
              //     "Date": this.getdatafollow[i].Date? this.getdatafollow[i].Date : formattedDate 
              //     }
              //   };
              // }else{

              this.finaldata = {
                "records": {
                  "IndxId": this.indx ? this.indx : "",
                  "SchoolId": this.school_id ? this.school_id : this.SchoolId,
                  "StdntId": this.student_id ? this.student_id : this.studId,
                  "Referral": this.disease ? this.disease : this.disease,
                  "Remarks": this.remarks ? this.remarks : this.remarks,
                  "Date": this.date ? this.date : formattedDate,
                  "isactive": this.isactive
                } // };
                // }

              };
              this.userService.pmoafollowup(this.finaldata).subscribe(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        if (res.dataStatus == true) {
                          this.alertService.alert(res.message); //  this.getfollowup(this.studId);

                          this.getfollowup();
                          this.conformCard = false;
                          this.submitted = false;
                        } else {
                          this.alertService.warning("Error");
                          this.submitted = true;
                        }

                      case 1:
                        return _context2.a(2);
                    }
                  }, _callee2, this);
                }));
              });
            } else {
              this.alert.warning('Please Select field ');
            }
          }
        }, {
          key: "selectedOption",
          value: function selectedOption() {
            console.log('Selected Disease:', this.disease);
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this6 = this;

            this.searchTerm = event.detail.value.trim();
            var data = this.schListSearch.filter(function (item) {
              return item.SchlName.toLowerCase().indexOf(_this6.searchTerm.toLowerCase()) > -1;
            });
            this.schList = data;
          }
        }, {
          key: "getStudListInSearch",
          value: function getStudListInSearch(event) {
            var _this7 = this;

            this.searchTerm2 = event.detail.value.trim();
            this.studList = this.studList2.filter(function (item) {
              return item.name.toLowerCase().indexOf(_this7.searchTerm2.toLowerCase()) > -1;
            });
          }
        }, {
          key: "detailsget",
          value: function detailsget(item, stdId) {
            this.showbutton123 = true;
            '';
            console.log('details', item);

            if (this.hiddenRecords == item) {
              this.hiddenRecords = null;
            } else {
              this.hiddenRecords = item;
            }

            this.stdent_id = stdId;
            this.getfollowup(); // this.getfollowup(this.stdent_id);
          }
        }, {
          key: "onGoButton2",
          value: function onGoButton2() {
            this.hideDiv = true;
            this.hiddenRecords = null;
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "sortAlert",
          value: function sortAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this8 = this;

              var previousValue, alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    // let radioValueToSelect = "1";
                    // this.data = '';
                    // this.data = this.value
                    previousValue = this.value;
                    this.data = this.value;
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Select your status that you need',
                      inputs: [{
                        type: 'radio',
                        value: "1",
                        label: "Spectacle Needed",
                        checked: this.data === "1" // checked: this.data == false 

                      }, {
                        type: 'radio',
                        value: "2",
                        label: "Visit to DEIC",
                        checked: this.data === "2" // checked: this.data == false 

                      }, {
                        type: 'radio',
                        value: "3",
                        label: "Spectacle Needed and Visit To DEIC",
                        checked: this.data === "3" // checked: this.data == false 

                      }, {
                        type: 'radio',
                        value: "4",
                        label: "Normal",
                        checked: this.data === "4" // checked: this.data == false 

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
                          _this8.value = item;

                          var label = _this8.pmoaHealthStatus.find(function (j) {
                            return j.value === _this8.value;
                          });

                          _this8.labelSelct = label.label;
                          console.log('labelSelct', _this8.labelSelct);

                          var sortStudentList = _this8.studList2.filter(function (tt) {
                            return tt.health_status == _this8.value;
                          });

                          if (sortStudentList.length > 0) {
                            _this8.studList = sortStudentList;
                          } else {
                            _this8.studList = sortStudentList;

                            _this8.alert.error("No Data Found");
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
          key: "studSort",
          value: function studSort() {
            this.sortAlert();
          }
        }, {
          key: "exportToExcel11",
          value: function exportToExcel11() {
            var header = ['Date', 'Remarks', 'Referral']; // Add more headers if needed

            var data = this.getdatafollow.map(function (item) {
              return [item.Date, item.Remarks, item.Referral];
            });
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.aoa_to_sheet([header].concat(_toConsumableArray(data)));
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_append_sheet(wb, ws, 'Sheet1'); // Save the Excel file

            xlsx__WEBPACK_IMPORTED_MODULE_8__.writeFile(wb, 'exported_data.xlsx');
          }
        }, {
          key: "exportToExcel1",
          value: function exportToExcel1() {
            var excelData = [];
            this.getdatafollow.map(function (item) {
              var obj = {
                'DATE': item.Date,
                'REMARKS': item.Remarks,
                'REFERRAL': item.Referral
              };
              excelData.push(obj);
            });
            return excelData;
          }
        }, {
          key: "exportTopdf",
          value: function exportTopdf() {
            var _this9 = this;

            if (this.getdatafollow.length == 0) {
              this.pdfvaluedownlod = false;
              this.getdatafollow.push({
                Date: "",
                IndxId: "",
                Referral: "",
                Remarks: "",
                SchoolId: "",
                StdntId: ""
              });
            } else {
              this.pdfvaluedownlod = true;
            }

            setTimeout(function (item) {
              var content = document.getElementById("printPageButton").innerHTML;
              var options = {
                documentSize: 'A4',
                type: 'share',
                fileName: 'PMOA_copy.pdf'
              };

              _this9.pdfGenerator.fromData(content, options).then(function (base64) {
                // this.schBtn(this.pdflistrue)
                console.log('OK', base64);

                _this9.router.navigate(["/tabs/referred-student"]);
              })["catch"](function (error) {
                console.log('error', error);
              });

              history.back();
            }, 1000);
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(i) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this0 = this;

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
                          _this0.deletefuntn(i);
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
            this.school_id = this.getdatafollow[i].SchoolId;
            this.isactive = 0;
            this.onSumbit();
          }
        }]);
      }();

      _ReferredStudentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__.PDFGenerator
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _ReferredStudentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-referred-student',
        template: _raw_loader_referred_student_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_referred_student_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReferredStudentPage);
      /***/
    },

    /***/
    60895:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/pmoa/referred-pmoa/referred-student/referred-student.page.scss ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".schdiv {\n  margin-top: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  border-radius: 16px;\n  background-color: white;\n  justify-content: space-between;\n  display: flex;\n  border-left: 6px solid #68529c;\n  box-shadow: 2px 4px 3px grey;\n}\n\n.nameDiv {\n  margin-left: 5px;\n  align-self: center;\n  font-size: 13px;\n}\n\n.iconArrow {\n  margin-right: 5px;\n  color: #68529c;\n}\n\n.schdiv2 {\n  margin-top: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  border-radius: 16px;\n  background-color: white;\n  justify-content: space-between;\n  display: flex;\n  border-left: 6px solid #68529c;\n  border-right: 6px solid #68529c;\n  box-shadow: 4px 4px 7px grey;\n}\n\n.nameDiv2 {\n  margin-left: 5px;\n  font-size: 15px;\n}\n\n.margin-align {\n  margin-top: 5px;\n}\n\n.maindiv {\n  background-color: #ffefef;\n  margin: 15px;\n  border-radius: 15px;\n}\n\n.firstrow {\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 0px 2px 4px grey;\n}\n\n.colBorder {\n  border-bottom: 1px solid grey;\n}\n\n.personicon {\n  width: 24px;\n  vertical-align: text-top;\n  font-size: 22px;\n  color: #68529c;\n}\n\n.icondiv {\n  font-size: 13px;\n  padding-bottom: 3px;\n  color: #68529c;\n  font-weight: 700;\n  margin-top: 4px;\n  margin-left: 2px;\n}\n\n.morebtn {\n  text-align: center;\n  background-color: #efefef;\n  padding: 5px;\n  border-radius: 10px;\n  font-size: 10px;\n  box-shadow: 0px 2px 3px grey;\n}\n\n.labelDiv {\n  font-size: 11px;\n  margin-left: 6px;\n}\n\n.labeldiv2 {\n  font-size: 11px;\n  font-weight: 500;\n  margin-right: 10px;\n  color: #68529c;\n}\n\n.studRow {\n  background-color: white;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.refDiv {\n  font-size: 10px;\n  font-weight: 400;\n  margin-left: 6px;\n}\n\n.reflabel {\n  font-weight: 500;\n  color: #68529c;\n}\n\n.callDiv {\n  text-align: center;\n  color: green;\n  background: lightgreen;\n  border-radius: 9px;\n  zoom: 1.2;\n}\n\n.filterDiv {\n  width: 15%;\n  text-align: center;\n  align-self: center;\n  padding: 10px;\n  background-color: #f0e8e8;\n  border-radius: 10px;\n  box-shadow: 2px 3px grey;\n}\n\n.headingDiv {\n  font-size: 15px;\n  font-weight: 500;\n  margin-left: 20px;\n  margin-top: 20px;\n  color: darkslategrey;\n}\n\n.nodata {\n  font-size: 15px;\n  text-align: center;\n  color: darkslategrey;\n  margin-top: 20px;\n}\n\n.user {\n  width: 24px;\n  vertical-align: text-top;\n  font-size: 17px;\n}\n\n.pop-up {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.pop-up .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.pop-up .img-card {\n  position: relative;\n  width: 80%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.pop-up .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #ef666a;\n  color: #ef666a;\n  font-size: 29px;\n  padding: 3px 5px;\n  position: absolute;\n  top: -27px;\n  right: -25px;\n}\n\n.pop-up.open {\n  top: 0%;\n}\n\n.labeldiv {\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  font-size: 12pt;\n  text-align: center;\n  /* Add other global styles here */\n}\n\n.table-container {\n  margin: 20px;\n  /* Add space around the table */\n}\n\n.table-cell {\n  padding: 10px;\n  /* Add padding to each cell */\n}\n\n#class {\n  margin-left: 87px;\n}\n\n#class1 {\n  margin-left: 80px;\n}\n\n#class2 {\n  margin-top: 31px;\n  /* margin-right: 46px; */\n  /* margin-right: 52px; */\n  /* margin: 20px; */\n  margin-left: -69px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmVkLXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEU7RUFDRSw2QkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQVNKOztBQVBFO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0FBU0o7O0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFjSjs7QUFaRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWVKOztBQWJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBZ0JKOztBQWRFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWlCSjs7QUFmRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFrQko7O0FBNEVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBekVGOztBQTBFRTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeEVOOztBQTBFRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF4RU47O0FBeUVNO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUF2RVY7O0FBMEVFO0VBQ0ksT0FBQTtBQXhFTjs7QUEyRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUF4RUY7O0FBZ0dBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUE3RkY7O0FBZ0dBO0VBQ0UsWUFBQTtFQUFjLCtCQUFBO0FBNUZoQjs7QUErRkE7RUFDRSxhQUFBO0VBQWUsNkJBQUE7QUEzRmpCOztBQTZGQTtFQUNFLGlCQUFBO0FBMUZGOztBQTRGQTtFQUNFLGlCQUFBO0FBekZGOztBQTJGQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF4RkYiLCJmaWxlIjoicmVmZXJyZWQtc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNjaGRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggM3B4IGdyZXk7XHJcbn1cclxuLm5hbWVEaXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaWNvbkFycm93e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwNCwgODIsIDE1Nik7XHJcbn1cclxuXHJcbi5zY2hkaXYye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDdweCBncmV5O1xyXG59XHJcbi5uYW1lRGl2MntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLm1hcmdpbi1hbGlnbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgLm1haW5kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZmVmO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLmZpcnN0cm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggZ3JleTtcclxuICB9XHJcbiAgLmNvbEJvcmRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuICAucGVyc29uaWNvbntcclxuICAgIHdpZHRoOjI0cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgfVxyXG4gIC5pY29uZGl2e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIH1cclxuICAubW9yZWJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggZ3JleTtcclxuICB9XHJcbiAgLmxhYmVsRGl2e1xyXG4gICAgZm9udC1zaXplOiAxMXB4OyBcclxuICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG4gIC5sYWJlbGRpdjJ7XHJcbiAgICBmb250LXNpemU6IDExcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICB9XHJcbiAgLnN0dWRSb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLnJlZkRpdntcclxuICAgIGZvbnQtc2l6ZTogMTBweDsgXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICB9XHJcbiAgLnJlZmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOnJnYigxMDQsIDgyLCAxNTYpXHJcbiAgfVxyXG4gIC5jYWxsRGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHpvb206IDEuMjtcclxuICB9XHJcbiAgLmZpbHRlckRpdntcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZThlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IGdyZXk7XHJcbiAgfVxyXG4gIC5oZWFkaW5nRGl2e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgfVxyXG4gIC5ub2RhdGF7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLnVzZXJ7XHJcbiAgICB3aWR0aDoyNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbi8vICAgI3N0YWdle1xyXG4vLyAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzkxNjJiMDtcclxuLy8gICAgIC5saW5le1xyXG4vLyAgICAgICAgIGhlaWdodDogOTYlO1xyXG4vLyAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkICM5MTYyYjA7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGxlZnQ6IDMzJTtcclxuLy8gICAgICAgICB6LWluZGV4OiAtMTtcclxuLy8gICAgICAgICB0b3A6IDElO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmluZm8tYnh7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuLy8gICAgICAgICAuc3RnZXtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHggMHB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmNpcmNsZXtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4vLyAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNWZiNTg3O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzVmYjU4NztcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLnRvb2xib3h7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA1NiU7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWYxZmU7XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MTYyYjA7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gICAgICAgICAgICAgJjpiZWZvcmV7XHJcbi8vICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbGVmdDogLTdweDtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjFmZTtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzkxNjJiMDtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTE2MmIwO1xyXG4vLyAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGltZ3tcclxuLy8gICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcclxuLy8gICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBwe1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweDtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGI1ZTk7XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgICYucGVuZGluZ3tcclxuLy8gICAgICAgICAgICAgLmNpcmNsZXtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmNjY2YTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjZWY2NjZhO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC50b29sYm94e1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgLnVwbG9hZHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOTE2MmIwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDBweCAxMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE2MmIwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLnBvcC11cHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC5ibGFja2Ryb3B7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaW1nLWNhcmR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZjY2NmE7XHJcbiAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0yN3B4O1xyXG4gICAgICAgICAgcmlnaHQ6IC0yNXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICYub3BlbntcclxuICAgICAgdG9wOiAwJTtcclxuICB9XHJcbn1cclxuLmxhYmVsZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLy8gI3ByaW50UGFnZUJ1dHRvbiB7XHJcbi8vICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcblxyXG4vLyB0YWJsZSB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbi8vIH1cclxuXHJcbi8vIHRoLCB0ZCB7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuLy8gICBwYWRkaW5nOiA4cHg7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gfVxyXG5cclxuLy8gdGgge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbi8vIH1cclxuXHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIEFkZCBvdGhlciBnbG9iYWwgc3R5bGVzIGhlcmUgKi9cclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4OyAvKiBBZGQgc3BhY2UgYXJvdW5kIHRoZSB0YWJsZSAqL1xyXG59XHJcblxyXG4udGFibGUtY2VsbCB7XHJcbiAgcGFkZGluZzogMTBweDsgLyogQWRkIHBhZGRpbmcgdG8gZWFjaCBjZWxsICovXHJcbn1cclxuI2NsYXNze1xyXG4gIG1hcmdpbi1sZWZ0OiA4N3B4O1xyXG59XHJcbiNjbGFzczF7XHJcbiAgbWFyZ2luLWxlZnQ6ODBweFxyXG59XHJcbiNjbGFzczJ7XHJcbiAgbWFyZ2luLXRvcDogMzFweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDQ2cHg7ICovXHJcbiAgLyogbWFyZ2luLXJpZ2h0OiA1MnB4OyAqL1xyXG4gIC8qIG1hcmdpbjogMjBweDsgKi9cclxuICBtYXJnaW4tbGVmdDogLTY5cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    83749:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/referred-pmoa/referred-student/referred-student.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" *ngIf=\"hideDiv\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" *ngIf=\"!hideDiv\" (click)=\"onGoButton2()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" *ngIf=\"hideDiv\">School List</div>\r\n      <div class=\"ion-text-wrap\" *ngIf=\"!hideDiv\">Students List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"hideDiv\">\r\n  <ion-grid>\r\n    <div class=\"margin-align\">\r\n      <ion-searchbar (ionChange)=\"getFilterItems($event)\">\r\n      </ion-searchbar>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <div style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n    <div class=\"schdiv\" (click)=\"schBtn(list)\" *ngFor=\"let list of schList\">\r\n      <div class=\"nameDiv\">\r\n        <ion-label>{{list.SchlName}}</ion-label>\r\n      </div>\r\n      <div class=\"iconArrow\">\r\n        <ion-icon name='chevron-forward'></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"!hideDiv\">\r\n\r\n\r\n  <ion-row style=\"margin-right: 15px;margin-left: 10px;\">\r\n    <div style=\"width: 85%;\">\r\n      <ion-searchbar  (ionChange)=\"getStudListInSearch($event)\"></ion-searchbar>\r\n    </div>\r\n    <div\r\n      class=\"filterDiv\"\r\n      (click)=\"studSort()\">\r\n      <img src=\"../../../../../assets/icons/filters.svg\" style=\"width: 48%;\">\r\n    </div>\r\n  </ion-row>\r\n\r\n\r\n  <div class=\"headingDiv\" *ngIf=\"this.labelSelct != null\">\r\n    <ion-label>{{this.labelSelct}}:</ion-label>\r\n  </div>\r\n\r\n  <div class=\"nodata\" *ngIf=\"this.studList == ''\">\r\n    <ion-label>No Data</ion-label>\r\n  </div>\r\n\r\n\r\n  <div class=\"maindiv\" *ngFor=\"let item of studList;let i = index\">\r\n    <ion-row class=\"firstrow\">\r\n      <ion-col size=\"10\" class=\"colBorder\">\r\n        <ion-row class=\"studRow\">\r\n          <ion-icon name=\"person-circle-outline\" class=\"personicon\"> </ion-icon>\r\n          <div class=\"icondiv\">\r\n            <ion-label><b>{{i+1}}.</b> {{item.name}}</ion-label>\r\n          </div>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"colBorder\">\r\n        <a href=\"tel:{{item.phone_number}}\" class=\"call-icon\">\r\n          <div class=\"callDiv\">\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n          </div>\r\n        </a>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.5\">\r\n        <div class=\"labelDiv\">\r\n          <ion-label>Class : <span style=\"font-weight: 500;color: rgb(104, 82, 156);\">{{item.class_studying_id}}</span>\r\n            <span style=\"font-weight: 500;color: rgb(104, 82, 156);\">-{{item.class_section}}</span> </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6.5\" style=\"text-align: end;\">\r\n        <div class=\"labelDiv\">\r\n          <ion-label>Screened Date: <span class=\"labeldiv2\">{{item.screening_date}}</span></ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"4\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>{{item.screening_date}} </ion-label>\r\n        </div>\r\n      </ion-col> -->\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div (click)=\"detailsget(i,item.StdntId)\">\r\n          <ion-icon name='chevron-up' style=\"zoom: 1.3;color: rgb(104, 82, 156);\" *ngIf=\"hiddenRecords == i\"></ion-icon>\r\n          <ion-icon name='chevron-down' style=\"zoom: 1.3;color: rgb(104, 82, 156);\" *ngIf=\"hiddenRecords != i\">\r\n          </ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row *ngIf=\"hiddenRecords == i\" style=\"padding-top: 8px;\">\r\n      <ion-col size=\"6\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            HEALTH STATUS: <span class=\"reflabel\">{{item.pmoalabel}}</span>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;color:rgb(104, 82, 156);zoom: 2.3;\">\r\n        <div class=\"refDiv\" >\r\n          <ion-icon name=\"bag-add-outline\" (click)=\"showbutton(item.SchoolId,item.StdntId)\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"3\">\r\n        <ion-button (click)=\"exportTopdf()\" class=\"refDiv\" style=\"color: white\">PDF</ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\" border-bottom: 1px solid #c1c1c1;\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            SPECTACLE NEED: <span class=\"reflabel\">{{item.specs_status}}</span>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;color:rgb(104, 82, 156);zoom: 1.3;\">\r\n        <div class=\"refDiv\" >\r\n          <ion-icon name=\"eye-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    \r\n\r\n      <!-- <ion-col size=\"2.5\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Dpsh\r\n          </ion-label>\r\n        </div>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Dsph\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Dcyl\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Axis\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Right Eye\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dpsh_value_right}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dsph_sign_right}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col> -->\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dycl_right}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.axis_right}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Left Eye\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dpsh_value_left}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dsph_sign_left}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col> -->\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.dycl_left}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.axis_left}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\" border-bottom: 1px solid #c1c1c1;\">\r\n      </ion-col>\r\n\r\n      <!-- f---------------------------------------------new card---------------------------------------------- -->\r\n\r\n      \r\n\r\n   \r\n\r\n      <!-- <div *ngFor=\"let item of getdatafollow;let i = index\" style=\" border-bottom: 1px solid #c1c1c1;padding-left: 20px;\">\r\n        \r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv\">\r\n          <ion-label>\r\n            {{item.Date}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n    \r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.Referral}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"labeldiv2\">\r\n          <ion-label>\r\n            {{item.Remarks}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      </div> -->\r\n\r\n    </ion-row>\r\n\r\n    \r\n    <div *ngIf=\"hiddenRecords == i && getdatafollow.length > 0 \">\r\n      <!-- <ion-grid>\r\n        <ion-row>\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\" style=\"text-align: center;\">Date</ion-col>\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\" style=\"text-align: center;\">Remarks</ion-col>\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\">Referral</ion-col>\r\n          <ion-col size-sm=\"1.5\" size-md=\"2\" size-lg=\"2\">Edit</ion-col>\r\n          <ion-col size-sm=\"1.5\" size-md=\"2\" size-lg=\"2\">Delete</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row *ngFor=\"let item of getdatafollow; let i = index\">\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\">{{ item.Date }}</ion-col>\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\">{{ item.Remarks }}</ion-col>\r\n          <ion-col size-sm=\"3\" size-md=\"2\" size-lg=\"2\">{{ item.Referral }}</ion-col>\r\n          <ion-icon size-sm=\"1.5\" size-md=\"2\" size-lg=\"2\" name=\"create-outline\" (click)=\"editoption(i,item)\"></ion-icon>\r\n          <ion-icon size-sm=\"1.5\" size-md=\"2\" size-lg=\"2\" name=\"trash-outline\" (click)=\"presentAlert(i)\"></ion-icon>\r\n\r\n        </ion-row>\r\n      </ion-grid> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"text-align: center;font-size: 12px;\">Date</ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center;font-size: 12px;\">Remarks</ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center; font-size: 12px;\">Referral</ion-col>\r\n        <ion-col size=\"1.5\"style=\"text-align: center;font-size: 12px;\">Edit</ion-col>\r\n        <ion-col size=\"1.5\" style=\"text-align: center;font-size: 12px;\">Delete</ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngFor=\"let item of getdatafollow; let i = index\">\r\n        <ion-col size=\"3\" style=\"text-align: center; font-size: 11px; \r\n        font-weight: 500;\">\r\n          <ion-label>{{ item.Date | date: 'dd/MM/yyyy'}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center; font-size: 11px; \r\n        font-weight: 500;\">\r\n          <ion-label>{{ item.Remarks }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: center; font-size: 11px; \r\n        font-weight: 500;\">\r\n          <ion-label>{{ item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : '' }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" style=\"text-align: center;\">\r\n          <ion-icon size=\"1.5\" name=\"create-outline\" (click)=\"editoption(i,item)\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" style=\"text-align: center;\">\r\n          <ion-icon size=\"1.5\" name=\"trash-outline\" (click)=\"presentAlert(i)\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    \r\n      <!-- <div id=\"printPageButton\" style=\"margin: 20px;\" >\r\n        <div class=\"row\">\r\n          <div style=\"font-size: 2rem;\">\r\n            <label>HEALTH STATUS : <span>{{item.pmoalabel}}</span></label>\r\n          </div>\r\n          <div style=\"font-size: 2rem;\">\r\n            <label>SPECTACAL NEED : <span>{{item.spectacalStatus}}</span></label>\r\n          </div>\r\n        \r\n        </div>\r\n\r\n      </div> -->\r\n\r\n\r\n\r\n\r\n\r\n     <!-- <table>\r\n        <ion-row>\r\n        <tr>\r\n          <th style=\"width: 20%;\">\r\n          <ion-col class=\"refDiv\">Date</ion-col>\r\n          </th>\r\n          <th style=\"width: 20%;\">\r\n            <ion-col class=\"refDiv\">Remarks</ion-col>\r\n          </th>\r\n          <th style=\"width: 20%;\">\r\n            <ion-col class=\"refDiv\">Referral</ion-col>\r\n          </th>\r\n          <th style=\"width: 20%;\">\r\n            <ion-col class=\"refDiv\">Edit</ion-col>\r\n          </th>\r\n          <th >\r\n            <ion-col class=\"refDiv\">Delete</ion-col>\r\n          </th>\r\n        </tr>\r\n        </ion-row>\r\n    \r\n        <ion-row *ngFor=\"let item of getdatafollow; let i = index\">\r\n          <tr>\r\n            <td size=\"3\">\r\n              <ion-col class=\"refDiv\">{{ item.Date }}</ion-col>\r\n            </td>\r\n            <td size=\"3\">\r\n              <ion-col class=\"refDiv\">{{ item.Remarks }}</ion-col>\r\n            </td>\r\n            <td size=\"3\">\r\n              <ion-col class=\"refDiv\">{{ item.Referral }}</ion-col>\r\n            </td>\r\n            <td size=\"1.5\">\r\n              <ion-icon name=\"create-outline\" (click)=\"editoption(i,item)\"></ion-icon>\r\n            </td>\r\n            <td size=\"1.5\">\r\n               <ion-icon name=\"trash-outline\" (click)=\"presentAlert(i)\"></ion-icon>\r\n            </td>\r\n          </tr>\r\n        </ion-row>\r\n      </table>\r\n      -->\r\n\r\n\r\n<!-- \r\n      <ion-col size=\"3\" style=\"align-self: center;\">\r\n        <div class=\"refDiv\">\r\n            <ion-button (click)=\"exportToExcel(getdatafollow)\" style=\"color:white\">save</ion-button>\r\n        </div>\r\n      </ion-col> -->\r\n\r\n      <!-- <ion-col size=\"1.5\" style=\"align-self: center;\">\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"6\">\r\n              <ion-label>\r\n                <ion-icon name=\"create-outline\"></ion-icon>\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col>\r\n      -->\r\n\r\n      <!-- <ion-col size=\"1.5\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n           Edit\r\n          </ion-label>\r\n        </div>\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"6\" style=\"color:rgb(104, 82, 156);\">\r\n              <ion-label>\r\n                <ion-icon name=\"create-outline\" (click)=\"editoption(i,item)\"></ion-icon>\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.5\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n         Delete\r\n          </ion-label>\r\n        </div>\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"6\" style=\"color:rgb(104, 82, 156);\">\r\n              <ion-label>\r\n                <ion-icon name=\"trash-outline\" (click)=\"presentAlert(i)\"></ion-icon>\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col> -->\r\n\r\n\r\n\r\n\r\n      <!-- <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n           Remarks\r\n          </ion-label>\r\n        </div>\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"12\">\r\n              <ion-label class=\"labeldiv2\">\r\n                {{item.Remarks}}\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n            Referral\r\n          </ion-label>\r\n        </div>\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"12\">\r\n              <ion-label class=\"labeldiv2\">\r\n                {{item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : ''}}\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\">\r\n        <div class=\"refDiv\">\r\n          <ion-label>\r\n           Date\r\n          </ion-label>\r\n        </div>\r\n        <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n          <ion-col size=\"12\">\r\n              <ion-label class=\"labeldiv2\">\r\n                {{item.Date}}\r\n              </ion-label>\r\n          </ion-col>\r\n        </div>\r\n      </ion-col> -->\r\n    <!-- </ion-row> -->\r\n<!-- <ion-row>\r\n      <ion-col *ngFor=\"let item of getdatafollow;let i = index\">\r\n      <div size=\"3\">\r\n        <ion-label class=\"labeldiv2\">\r\n          {{item.Remarks}}\r\n        </ion-label>\r\n      </div>\r\n      <div size=\"3\">\r\n        <ion-label class=\"labeldiv2\">\r\n          {{item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : ''}}\r\n        </ion-label>\r\n      </div>\r\n      <div size=\"3\">\r\n        <ion-label class=\"labeldiv2\">\r\n          {{item.Date}}\r\n        </ion-label>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n   \r\n\r\n    \r\n      <div id=\"printPageButton\" hidden>\r\n        <div style=\"text-align: end;\">Date:\r\n          {{ this.newDate }}\r\n        </div>\r\n        <table style=\"margin: 40px;\r\n        border-collapse: collapse\">\r\n          <tr>\r\n            <th colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Name</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Class</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Section</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">School Name</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Screened Date</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Health Status</th>\r\n            <th style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Spectacle Need</th>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.name}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.class_studying_id}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.class_section}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.school_name}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.screening_date | date: 'dd/MM/yyyy'}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.pmoalabel}}</td>\r\n            <td style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 15px;text-align: center;\">{{item.specs_status}}</td>\r\n    \r\n          </tr>\r\n          \r\n          <!-- <tr>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">School Name</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.school_name}}</span></th>\r\n          </tr>\r\n          <tr>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">Name</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">Class</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">Section</th>\r\n          </tr>\r\n          <tr>\r\n            <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.name}}</span></th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.class_studying_id}}</span></th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\"><span>{{item.class_section}}</span></th>\r\n          </tr>\r\n          <tr>\r\n            <th colspan=\"2\"style=\"padding: 10px;\">Screened Date</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">HEALTH STATUS</th>\r\n            <th colspan=\"2\" style=\"padding: 10px;\">SPECTACAL NEED</th>\r\n          </tr>\r\n          <tr>\r\n            <th colspan=\"2\"style=\"padding: 10px;\"><span>{{item.screening_date}}</span></th>\r\n            <th colspan=\"2\"><span style=\"padding: 10px;\" >{{item.specs_status}}</span></th>\r\n            <th colspan=\"2\"><span style=\"padding: 10px;\" style=\"margin-left: -5px;\">{{item.pmoalabel}}</span></th>\r\n          </tr> -->\r\n          <tr>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\"></td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">Dsph</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">Dcyl</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">Axis</td>\r\n           \r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">Right Eye</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.dpsh_value_right}}</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.dycl_right}}</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.axis_right}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">Left Eye</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.dpsh_value_left}}</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.dycl_left}}</td>\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;\">{{item.axis_left}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"pdfvaluedownlod\" style=\"padding: 10px;\">\r\n            <th colspan=\"2\"style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Date</th>\r\n            <th colspan=\"5\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Remarks</th>\r\n            <th colspan=\"5\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 18px;\">Referral</th>\r\n          </tr>\r\n          <tr *ngFor=\"let item of getdatafollow; let i = index\" > \r\n            <span *ngIf=\"item.Date != ''\">\r\n            <td colspan=\"2\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;text-align: center;\">{{ item.Date | date: 'dd/MM/yyyy'}}</td>\r\n            <td colspan=\"5\" style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;text-align: center;word-break: break-all;\">{{ item.Remarks }}</td>\r\n            <td colspan=\"5\"style=\" border: 1px solid black;border-collapse: collapse;padding: 5px;font-size: 25px;text-align: center;\">{{item.Referral == '1' ? 'PHC' : item.Referral == '2' ? 'SDC' : item.Referral == '3' ? 'DH' : item.Referral == '4' ? 'DEIC' : ''}}</td>\r\n          </span>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- for fake -->\r\n    \r\n\r\n\r\n\r\n      <!-- <div id=\"printPageButton\" >\r\n       <div size=\"row\">\r\n        <div size=\"6\">\r\n        <div>\r\n            HEALTH STATUS: <span class=\"reflabel\">{{item.pmoalabel}}</span>\r\n          </div>\r\n        </div>\r\n        <div size=\"6\">\r\n        <div>\r\n            SPECTACAL NEED: <span class=\"reflabel\">{{item.spectacalStatus}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n        <div size=\"12\">\r\n          <div class=\"row\">\r\n            <div class=\"4\"> Dsph</div>\r\n            <div class=\"4\"> Dcyl</div>\r\n            <div class=\"4\"> Axis</div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              Dcyl\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              Axis\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              Right Eye\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.dpsh_value_right}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.dycl_right}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.axis_right}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n  \r\n  \r\n        <ion-col size=\"3\">\r\n          <div class=\"refDiv\">\r\n            <div>\r\n              Left Eye\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.dpsh_value_left}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.dycl_left}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <div>\r\n            <div>\r\n              {{item.axis_left}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n\r\n\r\n        <div size=\"3\">\r\n          <div class=\"refDiv\">\r\n            <div>\r\n             Date\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n            <div size=\"12\">\r\n                <div>\r\n                  {{item.Date}}\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div size=\"3\">\r\n          <div class=\"refDiv\">\r\n            <div>\r\n             Remarks\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n            <div size=\"12\">\r\n                <div>\r\n                  {{item.Remarks}}\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div size=\"3\">\r\n          <div class=\"refDiv\">\r\n            <div>\r\n              Referral\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let item of getdatafollow;let i = index\">\r\n            <div size=\"12\">\r\n                <div>\r\n                  {{item.Referral}}\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n  <!-- <div *ngFor=\"let item of getdatafollow;let i = index\" style=\" border-bottom: 1px solid #c1c1c1;\">\r\n    <ion-col size=\"4\">\r\n      <div class=\"refDiv\">\r\n        <ion-label>\r\n          Date\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <div class=\"refDiv\">\r\n        <ion-label>\r\n        Remarks\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <div class=\"refDiv\">\r\n        <ion-label>\r\n          Referral\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <div class=\"labeldiv2\">\r\n        <ion-label>\r\n          {{item.Date}}\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <div class=\"labeldiv2\">\r\n        <ion-label>\r\n          {{item.Referral}}\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <div class=\"labeldiv2\">\r\n        <ion-label>\r\n          {{item.Remarks}}\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n\r\n  </div> -->\r\n\r\n\r\n\r\n<div class=\"pop-up\" [class.open]=\"conformCard\">\r\n  <div class=\"blackdrop\" (click)=\"close()\"></div>\r\n  <div class=\"img-card\">\r\n    <div style=\"padding: 35px;\">\r\n      <h5 style=\"color:rgb(104, 82, 156)\">FOLLOW-UP</h5>\r\n    <div class=\"row\">\r\n      <ion-label>Remarks:</ion-label>\r\n      <input size=\"12\" required=\"true\" type=\"text\" [(ngModel)]=\"remarks\" maxlength=\"100\" placeholder=\"Enter text\" style=\"margin: 2px;\"/>\r\n      <p *ngIf=\"(remarks == '' && submitted == true) || (remarks == null && submitted == true)\" class=\"error-message\" id=\"class\">Remarks is required</p>\r\n      <!-- <div *ngIf=\"remarks.errors.required\">Username is required.</div> -->\r\n      <!-- </div> -->\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <ion-label>Referral:</ion-label>\r\n      <ion-item>\r\n        <ion-select label=\"Default label\" [(ngModel)]=\"disease\" placeholder=\"Select Dropdown\" style=\"margin-top:-7px;\" (ionChange)=\"selectedOption()\">\r\n          <ion-select-option value=\"1\">PHC</ion-select-option>\r\n          <ion-select-option value=\"2\">SDC</ion-select-option>\r\n          <ion-select-option value=\"3\">DH</ion-select-option>\r\n          <ion-select-option value=\"4\">DEIC</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <p *ngIf=\"(disease == '' && submitted == true )|| (disease == null && submitted == true)\" class=\"error-message\" id=\"class1\">Referral is required</p>\r\n      <!-- <div *ngIf=\"!disease\" class=\"error-message\">Referral is required</div> -->\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <ion-label>Date:</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" [(ngModel)]=\"date\" min=\"{{ currentDate }}\" style=\"margin-top: -7px;\"></ion-datetime>\r\n      <p *ngIf=\"(date == '' && submitted == true) || (date == null && submitted == true)\" class=\"error-message\" id=\"class2\">Date is required</p>\r\n      <!-- <div *ngIf=\"!date\" class=\"error-message\">Date is required</div> -->\r\n    </div>\r\n    <br>\r\n    <div class=\"btn-row\" >\r\n      <ion-button (click)=\"onSumbit()\" style=\"color:white\">save</ion-button>\r\n    </div>\r\n    <button (click)=\"close()\"><ion-icon name=\"close-outline\"></ion-icon></button>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div id=\"printPageButton\" *ngIf=\"hiddenRecords == i && getdatafollow.length > 0 \">\r\n  <ion-row> -->\r\n    <!-- <table>\r\n      <ion-row>\r\n      <tr>\r\n        <th>\r\n        <ion-col class=\"refDiv\">Date</ion-col>\r\n        </th>\r\n        <th>\r\n          <ion-col class=\"refDiv\">Remarks</ion-col>\r\n        </th>\r\n        <th>\r\n          <ion-col class=\"refDiv\">Referral</ion-col>\r\n        </th>\r\n      </tr>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngFor=\"let item of getdatafollow; let i = index\">\r\n        <tr>\r\n          <td>\r\n            <ion-col class=\"refDiv\">{{ item.Date }}</ion-col>\r\n          </td>\r\n          <td>\r\n            <ion-col class=\"refDiv\">{{ item.Remarks }}</ion-col>\r\n          </td>\r\n          <td>\r\n            <ion-col class=\"refDiv\">{{ item.Referral }}</ion-col>\r\n          </td>\r\n        </tr>\r\n      </ion-row>\r\n    </table>\r\n   -->\r\n\r\n\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_referred-pmoa_referred-student_referred-student_module_ts-es5.js.map