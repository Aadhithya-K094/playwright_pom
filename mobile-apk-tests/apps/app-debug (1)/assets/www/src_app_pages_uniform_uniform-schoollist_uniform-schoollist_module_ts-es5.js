(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_uniform_uniform-schoollist_uniform-schoollist_module_ts"], {
    /***/
    41393:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-schoollist/uniform-schoollist-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformSchoollistPageRoutingModule": function UniformSchoollistPageRoutingModule() {
          return (
            /* binding */
            _UniformSchoollistPageRoutingModule
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


      var _uniform_schoollist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-schoollist.page */
      23539);

      var routes = [{
        path: '',
        component: _uniform_schoollist_page__WEBPACK_IMPORTED_MODULE_0__.UniformSchoollistPage
      }];

      var _UniformSchoollistPageRoutingModule = /*#__PURE__*/_createClass(function UniformSchoollistPageRoutingModule() {
        _classCallCheck(this, UniformSchoollistPageRoutingModule);
      });

      _UniformSchoollistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UniformSchoollistPageRoutingModule);
      /***/
    },

    /***/
    34370:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-schoollist/uniform-schoollist.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformSchoollistPageModule": function UniformSchoollistPageModule() {
          return (
            /* binding */
            _UniformSchoollistPageModule
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


      var _uniform_schoollist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-schoollist-routing.module */
      41393);
      /* harmony import */


      var _uniform_schoollist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-schoollist.page */
      23539);

      var _UniformSchoollistPageModule = /*#__PURE__*/_createClass(function UniformSchoollistPageModule() {
        _classCallCheck(this, UniformSchoollistPageModule);
      });

      _UniformSchoollistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _uniform_schoollist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniformSchoollistPageRoutingModule],
        declarations: [_uniform_schoollist_page__WEBPACK_IMPORTED_MODULE_1__.UniformSchoollistPage]
      })], _UniformSchoollistPageModule);
      /***/
    },

    /***/
    23539:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-schoollist/uniform-schoollist.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformSchoollistPage": function UniformSchoollistPage() {
          return (
            /* binding */
            _UniformSchoollistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_uniform_schoollist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./uniform-schoollist.page.html */
      34958);
      /* harmony import */


      var _uniform_schoollist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-schoollist.page.scss */
      66273);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _UniformSchoollistPage = /*#__PURE__*/function () {
        function UniformSchoollistPage(router, route, usersessionService, sqliteDB) {
          _classCallCheck(this, UniformSchoollistPage);

          this.router = router;
          this.route = route;
          this.usersessionService = usersessionService;
          this.sqliteDB = sqliteDB;
          this.schoolListData = [];
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(UniformSchoollistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.onSelectTotalSec();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this = this;

            this.schoolListData = []; // fetch('https://d1wpyxz35bzzz4.cloudfront.net/Uniform_schemes_volu_map_'+this.emis_username+'_stage.json').then(res => res.json()).then(manage => {

            fetch('https://d1wpyxz35bzzz4.cloudfront.net/Uniform_schemes_volu_map_' + this.emis_username + '.json').then(function (res) {
              return res.json();
            }).then(function (manage) {
              if (manage.length > 0) {
                var _final = manage;
                _this.schoolListData = [];
                _this.schoolListData = _final;

                _this.insertLocalData(_final);
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var _this2 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO uniformschoollists VALUES (?,?,?,?,?,?,?,?)", [null, element.school_id, element.school_name, element.udise_code, element.region, element.total_students, element.Meals_eating, element.measurement_completed]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              _this2.onSelectTotalSec();

              console.info("school list LocalData Stored Locally");
            });
          }
        }, {
          key: "onSelectTotalSec",
          value: function onSelectTotalSec() {
            var _this3 = this;

            this.schoolListData = [];
            var manage = [];
            var query = 'SELECT * FROM uniformschoollists';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  manage.push(data.rows.item(i));
                }

                _this3.schoolListData = manage;

                _this3.schoolListData.sort(function (a, b) {
                  var nameA = a.school_name.toLowerCase();
                  var nameB = b.school_name.toLowerCase();

                  if (nameA < nameB) {
                    return -1; // Name A comes before Name B
                  }

                  if (nameA > nameB) {
                    return 1; // Name A comes after Name B
                  }

                  return 0; // Names are equal
                });
              } else {
                console.log("in server");

                _this3.getServerData();
              }
            });
          }
        }, {
          key: "navigateNext",
          value: function navigateNext(schoolName, schoolId, region, item) {
            var measurement_completed = item.measurement_completed;
            this.router.navigate(['/tabs/uniform-classlist'], {
              queryParams: {
                "schoolName": schoolName,
                "schoolId": schoolId,
                "region": region,
                "measurement_completed": measurement_completed
              }
            });
          }
        }, {
          key: "handleRefresh",
          value: function handleRefresh(event) {
            var _this4 = this;

            var query = 'DELETE FROM uniformschoollists';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              fetch('https://d1wpyxz35bzzz4.cloudfront.net/Uniform_schemes_volu_map_' + _this4.emis_username + '.json').then(function (res) {
                return res.json();
              }).then(function (manage) {
                if (manage.length > 0) {
                  _this4.schoolListData = [];
                  var _final2 = manage;
                  _this4.schoolListData = _final2;
                  event.target.complete();

                  _this4.insertLocalData(_final2);
                }
              });
            });
          }
        }]);
      }();

      _UniformSchoollistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_2__.SqlitedatabaseService
        }];
      };

      _UniformSchoollistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-uniform-schoollist',
        template: _raw_loader_uniform_schoollist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_uniform_schoollist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UniformSchoollistPage);
      /***/
    },

    /***/
    66273:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-schoollist/uniform-schoollist.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-bg {\n  background: url(\"/assets/images/vasipuiyagam/inraiyavaasipuiyakkam_banner_image.svg\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 35%;\n}\n\nion-col {\n  text-align: center;\n}\n\n.corner {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-right: 1px solid;\n  align-self: center;\n}\n\n.cardhead {\n  padding: 7px;\n}\n\n.corner-head {\n  border-right: 1px solid;\n}\n\n.centerFlex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaWZvcm0tc2Nob29sbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtSEFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InVuaWZvcm0tc2Nob29sbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy92YXNpcHVpeWFnYW0vaW5yYWl5YXZhYXNpcHVpeWFra2FtX2Jhbm5lcl9pbWFnZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH0gXHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvcm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZGhlYWQge1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvcm5lci1oZWFkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlckZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    34958:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uniform/uniform-schoollist/uniform-schoollist.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title> \r\n      <div>School list</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{emis_username}}</div>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-card class=\"newsecondary cardhead\">\r\n    <ion-row>\r\n      <ion-col class=\"corner-head\" size=\"2\"> SNo\r\n      </ion-col>\r\n      <ion-col class=\"corner-head\" size=\"6\">\r\n        <div> School Name </div> \r\n        <div> Udise </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\"> \r\n       <div>Measured | Total</div> \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> \r\n \r\n  <ion-card *ngFor=\"let item of schoolListData;let i = index\">\r\n    <ion-row (click)=\"navigateNext(item.school_name,item.school_id,item.region,item)\">\r\n      <ion-col size=\"2\" class=\"corner newsecondaryTex\"> {{i+1}}\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"corner newsecondaryTex\">\r\n        <div> {{item.school_name}} </div>\r\n        <div>{{item.udise_code}} </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"newsecondaryTex centerFlex\">\r\n        <div>{{item.measurement_completed}} | {{item.Meals_eating}}</div> \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_uniform_uniform-schoollist_uniform-schoollist_module_ts-es5.js.map