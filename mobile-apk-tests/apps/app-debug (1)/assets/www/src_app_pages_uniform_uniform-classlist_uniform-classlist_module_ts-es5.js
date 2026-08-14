(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_uniform_uniform-classlist_uniform-classlist_module_ts"], {
    /***/
    33324:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformClasslistPageRoutingModule": function UniformClasslistPageRoutingModule() {
          return (
            /* binding */
            _UniformClasslistPageRoutingModule
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


      var _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-classlist.page */
      38172);

      var routes = [{
        path: '',
        component: _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_0__.UniformClasslistPage
      }];

      var _UniformClasslistPageRoutingModule = /*#__PURE__*/_createClass(function UniformClasslistPageRoutingModule() {
        _classCallCheck(this, UniformClasslistPageRoutingModule);
      });

      _UniformClasslistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UniformClasslistPageRoutingModule);
      /***/
    },

    /***/
    36161:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformClasslistPageModule": function UniformClasslistPageModule() {
          return (
            /* binding */
            _UniformClasslistPageModule
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


      var _uniform_classlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-classlist-routing.module */
      33324);
      /* harmony import */


      var _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-classlist.page */
      38172);

      var _UniformClasslistPageModule = /*#__PURE__*/_createClass(function UniformClasslistPageModule() {
        _classCallCheck(this, UniformClasslistPageModule);
      });

      _UniformClasslistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _uniform_classlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniformClasslistPageRoutingModule],
        declarations: [_uniform_classlist_page__WEBPACK_IMPORTED_MODULE_1__.UniformClasslistPage]
      })], _UniformClasslistPageModule);
      /***/
    },

    /***/
    38172:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformClasslistPage": function UniformClasslistPage() {
          return (
            /* binding */
            _UniformClasslistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_uniform_classlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./uniform-classlist.page.html */
      26798);
      /* harmony import */


      var _uniform_classlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-classlist.page.scss */
      81883);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);

      var _UniformClasslistPage = /*#__PURE__*/function () {
        function UniformClasslistPage(router, route, sqliteDB, userService, alert) {
          _classCallCheck(this, UniformClasslistPage);

          this.router = router;
          this.route = route;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.alert = alert;
          this.classList = [];
        }

        return _createClass(UniformClasslistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolName = this.routeData.queryParams.schoolName;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.region = this.routeData.queryParams.region;
            this.measurement_completed = this.routeData.queryParams.measurement_completed;
            this.sectionActive = false;
            this.class_studying_id = '';
            this.onSelectTotalStudent();
          }
        }, {
          key: "studentData",
          value: function studentData() {
            var _this = this;

            this.classList = [];
            var data;
            var datas = {
              "school_id": this.schoolId
            }; // fetch('https://d1wpyxz35bzzz4.cloudfront.net/noon_meals_stu_list_stage_'+this.schoolId+'_json.json').then(res => res.json()).then(manage => {
            //   if(manage){
            //     this.insertLocalData(manage)
            //     data = manage
            // this.studentlist = manage

            this.userService.studentlistData(datas).subscribe(function (res) {
              if (res.dataStatus) {
                res.result.forEach(function (element) {
                  if (element.status === null || element.status === '') {
                    element.status = '0';
                  }
                });
                _this.studentlist = res.result;

                var result = _this.studentlist.filter(function (a) {
                  var key = a.class_studying_id + '|' + a.class_section;

                  if (!this[key]) {
                    this[key] = true;
                    return true;
                  }
                }, Object.create(null));

                var _final = [];
                result.forEach(function (element) {
                  var id = element.class_studying_id;

                  if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 1 || id == 2 || id == 3) {
                    _final.push(element);
                  }
                });

                var cls = _toConsumableArray(new Set(_final.map(function (x) {
                  return x.class_studying_id;
                })));

                cls.forEach(function (val) {
                  for (var i = 0; i < _final.length; i++) {
                    if (val == _final[i].class_studying_id) {
                      var obj = {
                        'class': _final[i].class_studying_id,
                        'sec': _final[i].class_section
                      };

                      _this.classList.push(obj);
                    }
                  }
                });
                var uniqueAddresses1 = Array.from(new Set(_this.classList.map(function (a) {
                  return a["class"];
                }))).map(function (class_studying_id) {
                  return _this.classList.find(function (a) {
                    return a["class"] === class_studying_id;
                  });
                });
                uniqueAddresses1.sort(function (a, b) {
                  return a["class"] - b["class"];
                });
                _this.uniqueclass = uniqueAddresses1;
              } else {
                _this.alert.error(res.message);
              }
            });
          }
        }, {
          key: "selectSection",
          value: function selectSection(class_studying_id) {
            this.class_studying_id = class_studying_id;
            this.sectionActive = true;
            this.studentSeclist = this.classList.filter(function (item) {
              return item["class"] == class_studying_id;
            }).sort(function (a, b) {
              // Assuming you want to sort alphabetically by a property called 'name'
              var nameA = a.sec.toUpperCase(); // Convert to uppercase to ensure case-insensitive sorting

              var nameB = b.sec.toUpperCase();

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0; // If names are equal
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/uniform-schoollist']);
          }
        }, {
          key: "navigateNext",
          value: function navigateNext(class_studying_id, sec) {
            this.router.navigate(['/tabs/uniform-studentlist'], {
              queryParams: {
                class_studying_id: class_studying_id,
                sec: sec,
                schoolId: this.schoolId,
                schoolName: this.schoolName,
                region: this.region,
                measurement_completed: this.measurement_completed
              }
            });
          }
        }, {
          key: "onSelectTotalStudent",
          value: function onSelectTotalStudent() {
            var _this2 = this;

            this.studentDatalist = [];
            this.classList = [];
            var manage = [];
            var query = 'SELECT * FROM uniformStudentlistData' + ' WHERE school_id = "' + this.schoolId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  manage.push(data.rows.item(i));
                }

                _this2.studentlist = manage;

                var result = _this2.studentlist.filter(function (a) {
                  var key = a.class_studying_id + '|' + a.class_section;

                  if (!this[key]) {
                    this[key] = true;
                    return true;
                  }
                }, Object.create(null));

                var _final2 = [];
                result.forEach(function (element) {
                  var id = element.class_studying_id;

                  if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 1 || id == 2 || id == 3) {
                    _final2.push(element);
                  }
                });

                var cls = _toConsumableArray(new Set(_final2.map(function (x) {
                  return x.class_studying_id;
                })));

                cls.forEach(function (val) {
                  for (var _i = 0; _i < _final2.length; _i++) {
                    if (val == _final2[_i].class_studying_id) {
                      var obj = {
                        'class': _final2[_i].class_studying_id,
                        'sec': _final2[_i].class_section
                      };

                      _this2.classList.push(obj);
                    }
                  }
                });
                var uniqueAddresses1 = Array.from(new Set(_this2.classList.map(function (a) {
                  return a["class"];
                }))).map(function (class_studying_id) {
                  return _this2.classList.find(function (a) {
                    return a["class"] === class_studying_id;
                  });
                });
                uniqueAddresses1.sort(function (a, b) {
                  return a["class"] - b["class"];
                });
                _this2.uniqueclass = uniqueAddresses1;
              } else {
                _this2.studentData();
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO uniformStudentlistData VALUES (?,?,?,?,?,?,?,?,?,?)", [null, element.school_id, element.school_name, element.user_id, element.name, element.class_studying_id, element.class_section, element.gender, element.phone_number, element.status]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Student data", result); // this.onSelectTotalStudent()
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.uniqueclass = [];
            this.studentSeclist = [];
            this.sectionActive = false;
          }
        }]);
      }();

      _UniformClasslistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _UniformClasslistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-uniform-classlist',
        template: _raw_loader_uniform_classlist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_uniform_classlist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UniformClasslistPage);
      /***/
    },

    /***/
    81883:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classcard {\n  padding: 10%;\n  font-size: medium;\n  font-weight: bold;\n  border: 1px solid red;\n  border-radius: 5px;\n  color: #114a53;\n}\n\n.classcardSelect {\n  padding: 10%;\n  font-size: medium;\n  font-weight: bold;\n  border: 1px solid red;\n  border-radius: 5px;\n  background-color: #114a53;\n  color: white;\n}\n\n.rowclass {\n  padding: 5%;\n  background-color: #c5cbd0;\n  margin: 3%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaWZvcm0tY2xhc3NsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoidW5pZm9ybS1jbGFzc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICMxMTRhNTM7XHJcbn1cclxuXHJcbi5jbGFzc2NhcmRTZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTRhNTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvd2NsYXNzIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2JkMDtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    26798:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title> {{schoolName}}\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-row class=\"rowclass\">\r\n      <ion-col size=\"12\">\r\n        <div> Class</div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngFor=\"let data of uniqueclass\" style=\"text-align: center;\">\r\n       <div (click)=\"selectSection(data.class)\" *ngIf=\"class_studying_id == data.class\">\r\n          <ion-card class=\"classcardSelect\"> {{data.class}} </ion-card>\r\n       </div> \r\n       <div (click)=\"selectSection(data.class)\" *ngIf=\"class_studying_id != data.class\">\r\n        <ion-card class=\"classcard\"> {{data.class}} </ion-card>\r\n       </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"rowclass\" *ngIf=\"sectionActive\">\r\n      <ion-col size=\"12\">\r\n        <div> Section </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngFor=\"let data of studentSeclist\" style=\"text-align: center;\">\r\n        <ion-card class=\"classcard\" (click)=\"navigateNext(data.class,data.sec)\"> {{data.sec}} </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_uniform_uniform-classlist_uniform-classlist_module_ts-es5.js.map