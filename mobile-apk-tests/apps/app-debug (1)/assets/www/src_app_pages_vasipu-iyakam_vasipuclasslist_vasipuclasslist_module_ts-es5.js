(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts"], {
    /***/
    13421:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuclasslistPageRoutingModule": function VasipuclasslistPageRoutingModule() {
          return (
            /* binding */
            _VasipuclasslistPageRoutingModule
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


      var _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuclasslist.page */
      96350);

      var routes = [{
        path: '',
        component: _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_0__.VasipuclasslistPage
      }];

      var _VasipuclasslistPageRoutingModule = /*#__PURE__*/_createClass(function VasipuclasslistPageRoutingModule() {
        _classCallCheck(this, VasipuclasslistPageRoutingModule);
      });

      _VasipuclasslistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VasipuclasslistPageRoutingModule);
      /***/
    },

    /***/
    32055:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuclasslistPageModule": function VasipuclasslistPageModule() {
          return (
            /* binding */
            _VasipuclasslistPageModule
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


      var _vasipuclasslist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuclasslist-routing.module */
      13421);
      /* harmony import */


      var _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuclasslist.page */
      96350);

      var _VasipuclasslistPageModule = /*#__PURE__*/_createClass(function VasipuclasslistPageModule() {
        _classCallCheck(this, VasipuclasslistPageModule);
      });

      _VasipuclasslistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _vasipuclasslist_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuclasslistPageRoutingModule],
        declarations: [_vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_1__.VasipuclasslistPage]
      })], _VasipuclasslistPageModule);
      /***/
    },

    /***/
    96350:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuclasslistPage": function VasipuclasslistPage() {
          return (
            /* binding */
            _VasipuclasslistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_vasipuclasslist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vasipuclasslist.page.html */
      76872);
      /* harmony import */


      var _vasipuclasslist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuclasslist.page.scss */
      15861);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _VasipuclasslistPage = /*#__PURE__*/function () {
        function VasipuclasslistPage(modalCtrl, navParams, userService, usersessionService, sqliteDB) {
          _classCallCheck(this, VasipuclasslistPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.userService = userService;
          this.usersessionService = usersessionService;
          this.sqliteDB = sqliteDB;
          this.fourth = false;
          this.sixth = false;
          this.username = this.usersessionService.emis_username();
          this.schoolClassData = this.navParams.get('schoolListData');
        }

        return _createClass(VasipuclasslistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log(this.schoolClassData);
            this.localData();
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "localData",
          value: function localData() {
            var _this = this;

            debugger;
            this.schoolRecord = [];
            this.dataList = [];
            this.fourTotal = 0;
            this.fiveTotal = 0;
            this.sixTotal = 0;
            this.sevenTotal = 0;
            this.eightTotal = 0;
            this.nineTotal = 0;
            var query = 'SELECT * FROM VISchool' + ' WHERE RP_Id = ' + this.username + ' AND schoolId = ' + this.schoolClassData[0].SchlId;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this.dataList.push(data.rows.item(i));
                }

                _this.schoolRecord = _this.dataList;
                console.log(_this.schoolRecord, "in local");
                _this.fourTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 4;
                }).length;
                _this.fiveTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 5;
                }).length;
                _this.sixTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 6;
                }).length;
                _this.sevenTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 7;
                }).length;
                _this.eightTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 8;
                }).length;
                _this.nineTotal = _this.dataList.filter(function (x) {
                  return x.class_studying_id == 9;
                }).length;
                console.log("in local");
              } else {
                _this.getSchoolDetails();
              }
            });
          }
        }, {
          key: "getSchoolDetails",
          value: function getSchoolDetails() {
            var _this2 = this;

            this.schoolRecord = [];
            this.fourTotal = 0;
            this.fiveTotal = 0;
            this.sixTotal = 0;
            this.sevenTotal = 0;
            this.eightTotal = 0;
            this.nineTotal = 0;
            fetch('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + this.schoolClassData[0].SchlId + '_1.json').then(function (res) {
              return res.json();
            }).then(function (manage) {
              console.log("in Server");
              _this2.schoolRecord = manage.studentlist;
              console.log(_this2.schoolRecord, "in Server");
              _this2.fourTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 4;
              }).length;
              _this2.fiveTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 5;
              }).length;
              _this2.sixTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 6;
              }).length;
              _this2.sevenTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 7;
              }).length;
              _this2.eightTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 8;
              }).length;
              _this2.nineTotal = manage.studentlist.filter(function (x) {
                return x.class_studying_id == 9;
              }).length;

              _this2.insertLocalData(manage.studentlist);
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var _this3 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO VISchool VALUES (?,?,?,?,?,?,?,?,?,?,?)", [null, element.class_section, element.class_studying_id, element.dob, element.gender, element.name, element.phone_number, element.unique_id_no, element.user_id, _this3.username, _this3.schoolClassData[0].SchlId]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }]);
      }();

      _VasipuclasslistPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }];
      };

      _VasipuclasslistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vasipuclasslist',
        template: _raw_loader_vasipuclasslist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vasipuclasslist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VasipuclasslistPage);
      /***/
    },

    /***/
    15861:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXNpcHVjbGFzc2xpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    76872:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">மாணவர்களின் எண்ணிக்கை</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"card-item\" style=\"border: 1px solid; text-align: center;\">\r\n        <ion-col size=\"1.5\"> 4th </ion-col>\r\n        <ion-col size=\"1.5\"> 5th </ion-col>\r\n        <ion-col size=\"1.5\"> 6th </ion-col>\r\n        <ion-col size=\"1.5\"> 7th </ion-col>\r\n        <ion-col size=\"1.5\"> 8th </ion-col>\r\n        <ion-col size=\"1.5\"> 9th </ion-col>\r\n        <ion-col size=\"3\"> Total </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"card-item\" style=\"border: 1px solid; text-align: center;\">\r\n        <ion-col size=\"1.5\"> {{fourTotal}} </ion-col>   \r\n        <ion-col size=\"1.5\"> {{fiveTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{sixTotal }}</ion-col>\r\n        <ion-col size=\"1.5\"> {{sevenTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{eightTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{nineTotal}} </ion-col>\r\n        <ion-col size=\"3\"> {{fourTotal + fiveTotal + sixTotal + sevenTotal + eightTotal + nineTotal}} </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts-es5.js.map