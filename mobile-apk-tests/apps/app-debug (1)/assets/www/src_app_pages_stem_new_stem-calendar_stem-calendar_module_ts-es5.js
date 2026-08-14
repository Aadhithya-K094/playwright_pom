(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-calendar_stem-calendar_module_ts"], {
    /***/
    48455:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-calendar/stem-calendar-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCalendarPageRoutingModule": function StemCalendarPageRoutingModule() {
          return (
            /* binding */
            _StemCalendarPageRoutingModule
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


      var _stem_calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-calendar.page */
      73304);

      var routes = [{
        path: '',
        component: _stem_calendar_page__WEBPACK_IMPORTED_MODULE_0__.StemCalendarPage
      }];

      var _StemCalendarPageRoutingModule = /*#__PURE__*/_createClass(function StemCalendarPageRoutingModule() {
        _classCallCheck(this, StemCalendarPageRoutingModule);
      });

      _StemCalendarPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StemCalendarPageRoutingModule);
      /***/
    },

    /***/
    38256:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-calendar/stem-calendar.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCalendarPageModule": function StemCalendarPageModule() {
          return (
            /* binding */
            _StemCalendarPageModule
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


      var _stem_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stem-calendar-routing.module */
      48455);
      /* harmony import */


      var _stem_calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-calendar.page */
      73304);
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ion2-calendar */
      18834);
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic2-calendar */
      87732);

      var _StemCalendarPageModule = /*#__PURE__*/_createClass(function StemCalendarPageModule() {
        _classCallCheck(this, StemCalendarPageModule);
      });

      _StemCalendarPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _stem_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.StemCalendarPageRoutingModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__.NgCalendarModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__.NgCalendarModule],
        declarations: [_stem_calendar_page__WEBPACK_IMPORTED_MODULE_1__.StemCalendarPage]
      })], _StemCalendarPageModule);
      /***/
    },

    /***/
    73304:
    /*!********************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-calendar/stem-calendar.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StemCalendarPage": function StemCalendarPage() {
          return (
            /* binding */
            _StemCalendarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_stem_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stem-calendar.page.html */
      33372);
      /* harmony import */


      var _stem_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stem-calendar.page.scss */
      29392);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _auto_slot_auto_slot_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../auto-slot/auto-slot.page */
      463);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);

      var _StemCalendarPage = /*#__PURE__*/function () {
        function StemCalendarPage(alertCtrl, modalCtrl, userService, route, router, usersessionService, alertService) {
          _classCallCheck(this, StemCalendarPage);

          this.alertCtrl = alertCtrl;
          this.modalCtrl = modalCtrl;
          this.userService = userService;
          this.route = route;
          this.router = router;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.eventSource = [];
          this.calendar = {
            mode: 'month',
            step: 30,
            currentDate: new Date(),
            dateFormatter: {
              formatMonthViewDay: function formatMonthViewDay(date) {
                return date.getDate().toString();
              },
              formatMonthViewDayHeader: function formatMonthViewDayHeader(date) {
                return 'MonMH';
              },
              formatMonthViewTitle: function formatMonthViewTitle(date) {
                return 'testMT';
              },
              formatWeekViewDayHeader: function formatWeekViewDayHeader(date) {
                return 'MonWH';
              },
              formatWeekViewTitle: function formatWeekViewTitle(date) {
                return 'testWT';
              },
              formatWeekViewHourColumn: function formatWeekViewHourColumn(date) {
                return 'testWH';
              },
              formatDayViewHourColumn: function formatDayViewHourColumn(date) {
                return 'testDH';
              },
              formatDayViewTitle: function formatDayViewTitle(date) {
                return 'testDT';
              }
            }
          };
          this.filter = [];
          this.arrayFinal = [];
          this.date = new Date();
          this.schoolAvaData = [];
          this["final"] = [];
          this.username = this.usersessionService.emis_username();
        }

        return _createClass(StemCalendarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.slot = this.routeData.queryParams.slot;
            this.slotFinal = this.routeData.queryParams.slot;
            this.school_name = this.routeData.queryParams.school_name;
            this.item = this.routeData.queryParams.item;
            this.startdate = this.routeData.queryParams.startdate;
            this.enddate = this.routeData.queryParams.enddate;
            this.statusMode = this.routeData.queryParams.statusMode;
            this.cycle = this.routeData.queryParams.cycle;
            this.eventstartdate = this.routeData.queryParams.eventstartdate;
            this.eventenddate = this.routeData.queryParams.eventenddate;
            console.log(this.eventstartdate, "123", this.eventenddate);
            this.eventOn = false;
            this.holiday = false;
            this.clear();
            this.viewData();
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            this.tomorrow = tomorrow;
          } // Calendar event was clicked

        }, {
          key: "onEventSelected",
          value: function onEventSelected(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var start, end, alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    // Use Angular date pipe for conversion
                    start = (0, _angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(9, 'medium', '');
                    end = (0, _angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(1, 'medium', '');
                    _context.n = 1;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: 'From: ' + start + '<br><br>To: ' + end,
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context.v;
                    alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeEvents",
          value: function removeEvents() {
            this.eventSource = [];
          }
        }, {
          key: "viewData",
          value: function viewData() {
            var _this = this;

            this.holidayData = [];
            this.schoolAvaData = [];
            this.userService.getautoAssignSlot(this.schoolId, this.username).subscribe(function (response) {
              // this.userService.getschoolSlot(this.schoolId).subscribe((item2) => {
              // let response;
              // if(this.item == 'auto') {
              //   response = item1
              // } else {
              //   response = item2
              // }
              _this.arrayfinalFilter = response.result;
              var filter = response.result.filter(function (item) {
                return item.planning_date != null || item.holiday == 1 || item.session2 != null || item.session1 != null;
              });

              _this.holidayData.push(filter);

              var filter1 = response.result.filter(function (item) {
                return item.holiday == 0 && (item.session2 == null || item.session1 == null);
              });

              _this.schoolAvaData.push(filter1);

              _this.createEvents();
            }); // })
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/school-schedule'], {
              queryParams: {
                "item": this.item,
                "startdate": this.startdate,
                "enddate": this.enddate,
                "eventstartdate": this.eventstartdate,
                "eventenddate": this.eventenddate,
                'statusMode': this.statusMode,
                'cycle': this.cycle
              }
            });
          }
        }, {
          key: "onViewTitleChanged",
          value: function onViewTitleChanged(title) {
            this.viewTitle = title;
          }
        }, {
          key: "createEvents",
          value: function createEvents() {
            var events = [];

            for (var i = 0; i < this.holidayData[0].length; i += 1) {
              var array = this.holidayData[0];
              var titles1;

              if (array[i].session1 == null) {
                titles1 = 'Session 1 - No Event';
              } else {
                var tit1 = void 0;
                tit1 = array[i].Session1_program_type;
                titles1 = 'Session 1 - ' + tit1;
              }

              var titles2;

              if (array[i].session2 == null) {
                titles2 = 'Session 2 - No Event';
              } else {
                var tit2 = void 0;
                tit2 = array[i].Session2_program_type;
                titles2 = 'Session 2 - ' + tit2;
              }

              var titles;

              if (array[i].holiday == 0 && array[i].session1 == null && array[i].session2 == null) {
                titles = 'No Event';
              } else {
                titles = titles1 + '  ,  ' + titles2;
              }

              if (array[i].holiday == 1) {
                titles = 'Holiday';
              } else {
                titles = titles1 + '  ,  ' + titles2;
              }

              var date = new Date(array[i].date);
              var startTime;
              var endTime;
              startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, date.getHours(), date.getMinutes()));
              endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, date.getHours(), date.getMinutes()));
              events.push({
                title: titles,
                startTime: startTime,
                endTime: endTime,
                allDay: false,
                color: '#46c4f3'
              });
            }

            this.eventSource = events;
          }
        }, {
          key: "onCurrentDateChanged",
          value: function onCurrentDateChanged(event) {
            var today = new Date(this.eventstartdate);

            if (event < new Date(this.eventstartdate)) {
              this.notes = true;
            } else {
              // if (event < new Date(new Date().setDate(today.getDate() + 40))) {
              debugger;
              console.log(new Date(event), new Date(this.eventenddate));
              var mm;
              var dd;
              var eventend = new Date(this.eventenddate);
              var yyyy = eventend.getFullYear();
              mm = eventend.getMonth() + 1; // Months start at 0! 

              dd = eventend.getDate() + 1;

              if (dd < 10) {
                dd = '0' + dd;
              }

              if (mm < 10) {
                mm = '0' + mm;
              }

              var formattedToday = yyyy + '-' + mm + '-' + dd; // var mm1
              // var dd1
              // const eventend1 = new Date(event);
              // const yyyy1 = eventend.getFullYear();
              // mm1 = eventend.getMonth() + 1; // Months start at 0! 
              // dd1 = eventend.getDate() + 1;
              // if (dd1 < 10) { dd1 = '0' + dd1; }
              // if (mm1 < 10) { mm1 = '0' + mm1; }
              // const formattedToday1 = yyyy + '-' + mm1 + '-' + dd1;

              if (new Date(event) <= new Date(formattedToday)) {
                this.notes = false;
                this.notes1 = false;
              } else {
                this.notes = false;
                this.notes1 = true;
              }
            }

            this.slot1 = false;
            this.slot2 = false;
            this.filter = [];
            this.eventOn = true;
            this.holiday = true;
            this.colorOnchange = false;
            this.colorOnchange1 = false;
            this.finalDate = event;
            var date = new Date(event),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            var filter;
            filter = this.holidayData[0].filter(function (item) {
              return item.date == date.getFullYear() + '-' + mnth + '-' + day;
            });
            this.filter.push(filter[0]);

            if (this.filter.length != 0) {
              if (this.filter[0].holiday == 1) {
                this.holiday = false;
              } else {
                this.holiday = true;
              }

              if (this.filter[0].session1 == null) {
                this.slot1 = false;
              } else {
                this.slot1 = true;
              }

              if (this.filter[0].session2 == null) {
                this.slot2 = false;
              } else {
                this.slot2 = true;
              }

              if (this.filter[0].session1 == null && this.filter[0].session2 == null) {
                this.slot1 = false;
                this.slot2 = false;
              } else {}
            } else {// this.slot1 = false;
              // this.slot2 = false; 
            }
          }
        }, {
          key: "slot1On",
          value: function slot1On() {
            var data = {
              "date": this.finalDate,
              "holiday": '0',
              "program_type": '3',
              "user_id": this.username,
              "planning_date": this.finalDate,
              "session": '1'
            };
            this.arrayFinal.push(data);
            this.colorOnchange = true;
          }
        }, {
          key: "slot2On",
          value: function slot2On() {
            var data = {
              "date": this.finalDate,
              "holiday": '0',
              "program_type": '3',
              "user_id": this.username,
              "planning_date": this.finalDate,
              "session": '2'
            };
            this.arrayFinal.push(data);
            this.colorOnchange1 = true;
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this2 = this;

            for (var i = 0; i < this.arrayFinal.length; i++) {
              var data1 = {
                "IndexId": "",
                "ProgramType": "3",
                "UserId": this.username,
                "SchoolId": this.schoolId,
                "PlanningDate": this.arrayFinal[i].date,
                "Session": this.arrayFinal[i].session
              };
              var data = {
                "records": data1
              };
              this.userService.slotData(data).subscribe(function (response) {
                _this2.router.navigate(['/tabs/school-schedule'], {
                  queryParams: {
                    "item": _this2.item,
                    "startdate": _this2.startdate,
                    "enddate": _this2.enddate,
                    "eventstartdate": _this2.eventstartdate,
                    "eventenddate": _this2.eventenddate,
                    'statusMode': _this2.statusMode,
                    'cycle': _this2.cycle
                  }
                });
              });
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.arrayFinal = [];
          }
        }, {
          key: "autoslot",
          value: function autoslot() {
            this["final"] = [];
            this.arrayFinal = [];
            this.slot = this.slotFinal;

            if (this.slot == 1) {
              var date = new Date(this.finalDate),
                  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                  day = ("0" + date.getDate()).slice(-2);
              this.arrayFinal = [];
              var filter1 = this.schoolAvaData[0].filter(function (item) {
                return item.date == date.getFullYear() + '-' + mnth + '-' + day && item.session1 == null;
              });
              var data = {
                "date": this.finalDate,
                "holiday": '0',
                "program_type": '3',
                "user_id": this.username,
                "planning_date": date.getFullYear() + '-' + mnth + '-' + day,
                "session": '1'
              };
              this.arrayFinal.push(data);

              if (filter1.length == 0) {
                this.arrayFinal = [];
                var filter2 = this.schoolAvaData[0].filter(function (item) {
                  return item.date == date.getFullYear() + '-' + mnth + '-' + day && item.session2 == null;
                });
                console.log(filter2, "filter2");
                var _data = {
                  "date": this.finalDate,
                  "holiday": '0',
                  "program_type": '3',
                  "user_id": this.username,
                  "planning_date": date.getFullYear() + '-' + mnth + '-' + day,
                  "session": '2'
                };
                this.arrayFinal.push(_data);
              }
            } else {
              for (var i = 0; i < this.slot; i++) {
                var date1 = new Date(Date.UTC(this.finalDate.getUTCFullYear(), this.finalDate.getUTCMonth(), this.finalDate.getUTCDate() + i, 0, this.finalDate.getHours(), this.finalDate.getMinutes()));
                var date = new Date(date1),
                    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                    day = ("0" + date.getDate()).slice(-2);

                if (parseInt(day) == 32) {
                  mnth = ("0" + (date.getMonth() + 2)).slice(-2), date.setDate(date.getDate() + 1);
                }

                if (parseInt(day) == 33) {
                  mnth = ("0" + (date.getMonth() + 2)).slice(-2), date.setDate(date.getDate() + 2);
                }

                if (parseInt(day) == 34) {
                  mnth = ("0" + (date.getMonth() + 2)).slice(-2), date.setDate(date.getDate() + 3);
                }

                if (parseInt(day) == 35) {
                  mnth = ("0" + (date.getMonth() + 2)).slice(-2), date.setDate(date.getDate() + 4);
                } // 


                var _filter = this.schoolAvaData[0].filter(function (item) {
                  return item.date == date.getFullYear() + '-' + mnth + '-' + day && item.session1 == null && item.holiday == 0;
                });

                var _filter2 = this.schoolAvaData[0].filter(function (item) {
                  return item.date == date.getFullYear() + '-' + mnth + '-' + day && item.session2 == null && item.holiday == 0;
                });

                var filter3 = this.arrayfinalFilter.filter(function (item) {
                  return item.date == date.getFullYear() + '-' + mnth + '-' + day && (item.session1 != null && item.session2 != null && item.holiday == 0 || (item.session1 != null || item.session2 != null) && item.holiday == 0 || item.holiday == 1);
                });

                if (_filter.length == 0 && _filter2.length == 0) {
                  this.slot = parseInt(this.slot) + 1;
                } else {
                  if (_filter.length == 0 && filter3.length != 0) {
                    this.slot = parseInt(this.slot) + 0.5;
                  } else {
                    if (this["final"].length < parseInt(this.slotFinal)) {
                      var _data2 = {
                        "date": date,
                        "holiday": '0',
                        "program_type": '3',
                        "user_id": this.username,
                        "planning_date": date.getFullYear() + '-' + mnth + '-' + day,
                        "session": '1'
                      };
                      this.arrayFinal.push(_data2);
                      this["final"].push(_filter);
                    }
                  }

                  if (_filter2.length == 0 && filter3.length != 0) {
                    this.slot = parseInt(this.slot) + 0.5;
                  } else {
                    if (this["final"].length < parseInt(this.slotFinal)) {
                      var _data3 = {
                        "date": date,
                        "holiday": '0',
                        "program_type": '3',
                        "user_id": this.username,
                        "planning_date": date.getFullYear() + '-' + mnth + '-' + day,
                        "session": '2'
                      };
                      this.arrayFinal.push(_data3);
                      this["final"].push(_filter2);
                    }
                  }
                }
              }
            }

            this.slotview();
          }
        }, {
          key: "slotview",
          value: function slotview() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!(this.slot2 && !this.colorOnchange1 && this.slot1 && !this.colorOnchange)) {
                      _context2.n = 1;
                      break;
                    }

                    this.alertService.alert("Already booked Slot");
                    _context2.n = 5;
                    break;

                  case 1:
                    if (!(this.eventOn && this.holiday && !this.notes && !this.notes1)) {
                      _context2.n = 4;
                      break;
                    }

                    _context2.n = 2;
                    return this.modalCtrl.create({
                      component: _auto_slot_auto_slot_page__WEBPACK_IMPORTED_MODULE_4__.AutoSlotPage,
                      componentProps: {
                        schoolClassData: this.arrayFinal,
                        school_name: this.school_name,
                        slot: this.slotFinal,
                        school_id: this.schoolId,
                        item: this.item,
                        "startdate": this.startdate,
                        "enddate": this.enddate,
                        "eventstartdate": this.eventstartdate,
                        "eventenddate": this.eventenddate,
                        'statusMode': this.statusMode,
                        'cycle': this.cycle
                      },
                      cssClass: 'view-image-modal'
                    });

                  case 2:
                    modal = _context2.v;
                    _context2.n = 3;
                    return modal.present();

                  case 3:
                    _context2.n = 5;
                    break;

                  case 4:
                    this.alertService.alert("Couldn't book Slot");

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }();

      _StemCalendarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }];
      };

      _StemCalendarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-stem-calendar',
        template: _raw_loader_stem_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stem_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StemCalendarPage);
      /***/
    },

    /***/
    29392:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-calendar/stem-calendar.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.notslot {\n  --background: #e39999;\n  color: #dc3545;\n}\n\n.slot {\n  --background: #A1FFB7;\n  color: #1e662e;\n}\n\n.avaslot {\n  --background: #A1FFB7;\n  color: #1e662e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZW0tY2FsZW5kYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InN0ZW0tY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJne1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxufSBcclxuXHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6b29tOjIuMDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjg1N2ZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSBcclxuXHJcbi5ub3RzbG90IHtcclxuICAtLWJhY2tncm91bmQ6ICNlMzk5OTk7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5zbG90IHtcclxuICAtLWJhY2tncm91bmQ6ICNBMUZGQjc7XHJcbiAgY29sb3I6ICMxZTY2MmU7XHJcbn1cclxuXHJcbi5hdmFzbG90IHtcclxuICAtLWJhY2tncm91bmQ6ICNBMUZGQjc7XHJcbiAgY29sb3I6ICMxZTY2MmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    33372:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-calendar/stem-calendar.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"login-bg\">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"back-icon\">\r\n        <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n        <ion-title style=\"margin-top: 2%;font-size: 11px;\">Calendar</ion-title>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"padding-top: 10%;\">\r\n        <div style=\"padding-left: 7%;color: #707070;\">Please pick the school visit date</div>\r\n       \r\n        <div class=\"schedule\" style=\"padding-top: 10%;\">\r\n\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n              <!-- <ion-button fill=\"clear\" (click)=\"back()\">\r\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button> -->\r\n            </ion-col>\r\n\r\n            <ion-col size=\"8\" class=\"ion-text-center\">\r\n              <h2>{{ viewTitle }}</h2>\r\n            </ion-col>\r\n\r\n            <!-- Move forward one screen of the slides -->\r\n            <ion-col size=\"2\">\r\n              <!-- <ion-button fill=\"clear\" (click)=\"next()\">\r\n                <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button> -->\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n            (onCurrentDateChanged)=\"onCurrentDateChanged($event)\" (onEventSelected)=\"onEventSelected($event)\"\r\n            (onTitleChanged)=\"onViewTitleChanged($event)\" [step]=\"calendar.step\" (click)=\"autoslot()\">\r\n          </calendar>\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding: 3%;\r\n      color: #8b67b3;\r\n      font-weight: bold;padding-top: 10%;\" *ngIf=\"notes\">\r\n        Notes: You can pick a slot only from {{tomorrow | date:\"dd/MM/YYYY\"}}\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding: 3%;\r\n      color: #8b67b3;\r\n      font-weight: bold;padding-top: 10%;\" *ngIf=\"notes1\">\r\n        Notes: You can schedule only for two months from {{tomorrow | date:\"dd/MM/YYYY\"}}\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding-top: 10%;\" *ngIf=\"!notes && !notes1 && eventOn && holiday\">\r\n        <ion-row>\r\n          <!-- <ion-col size=\"12\">\r\n            Please Select the slot\r\n          </ion-col> -->\r\n          <ion-col size=\"4\">\r\n            <ion-button class=\"notslot\" *ngIf=\"slot1 && !colorOnchange\" [disabled]=slot1> Slot 1 </ion-button>\r\n            <ion-button class=\"avaslot\" *ngIf=\"!slot1 && !colorOnchange\" [disabled]=slot1> Slot 1 </ion-button>\r\n            <ion-button class=\"slot\" *ngIf=\"!slot1 && colorOnchange\"> Slot 1 </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button class=\"notslot\" *ngIf=\"slot2 && !colorOnchange1\" [disabled]=slot2> Slot 2 </ion-button>\r\n            <ion-button class=\"avaslot\" *ngIf=\"!slot2 && !colorOnchange1\" [disabled]=slot2> Slot 2 </ion-button>\r\n            <ion-button class=\"slot\" *ngIf=\"!slot2 && colorOnchange1\"> Slot 2</ion-button> \r\n          </ion-col> \r\n\r\n          <ion-col size=\"4\">\r\n            <ion-row style=\"padding-top:3%;\">\r\n            <span size=\"1\" style=\"background-color: #e39999;\r\n              padding-left: 5%;\r\n              padding-right: 5%;\r\n              margin-right: 5%;\">  \r\n              </span> Slot Booked \r\n            </ion-row>\r\n\r\n            <ion-row style=\"padding-top:3%;\">\r\n             <span size=\"1\" style=\"background-color: #aae9aa; padding-left: 5%;\r\n              padding-right: 5%;\r\n              margin-right: 5%;\">  \r\n              </span> Not Booked\r\n            </ion-row>\r\n\r\n            <!-- <ion-row style=\"padding-top:3%;\">\r\n             <span size=\"1\" style=\"background-color: #FFF6A3; padding-left: 5%;\r\n              padding-right: 5%;\r\n              margin-right: 5%;\"> \r\n              </span> Slot Select  \r\n            </ion-row> -->\r\n\r\n          </ion-col> \r\n          <!-- <ion-col size=\"12\" style=\"text-align: center; color: white;\" *ngIf=\"(!slot1 && !slot2) || (!slot1 && slot2) || (slot1 && !slot2)\">\r\n            <ion-button style=\"color: white;\" (click)=\"onSave()\"> Save </ion-button>  \r\n          </ion-col> -->\r\n        </ion-row>  \r\n       \r\n      </ion-col>\r\n \r\n    </ion-row>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_stem-calendar_stem-calendar_module_ts-es5.js.map