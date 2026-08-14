(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_spectacel_school-list_school-list_module_ts"], {
    /***/
    63655:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/school-list/school-list-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageRoutingModule": function SchoolListPageRoutingModule() {
          return (
            /* binding */
            _SchoolListPageRoutingModule
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


      var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list.page */
      96190);

      var routes = [{
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SchoolListPage
      }];

      var _SchoolListPageRoutingModule = /*#__PURE__*/_createClass(function SchoolListPageRoutingModule() {
        _classCallCheck(this, SchoolListPageRoutingModule);
      });

      _SchoolListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolListPageRoutingModule);
      /***/
    },

    /***/
    85981:
    /*!************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/school-list/school-list.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageModule": function SchoolListPageModule() {
          return (
            /* binding */
            _SchoolListPageModule
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


      var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list-routing.module */
      63655);
      /* harmony import */


      var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page */
      96190);

      var _SchoolListPageModule = /*#__PURE__*/_createClass(function SchoolListPageModule() {
        _classCallCheck(this, SchoolListPageModule);
      });

      _SchoolListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolListPageRoutingModule],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SchoolListPage]
      })], _SchoolListPageModule);
      /***/
    },

    /***/
    96190:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/school-list/school-list.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPage": function SchoolListPage() {
          return (
            /* binding */
            _SchoolListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-list.page.html */
      18404);
      /* harmony import */


      var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page.scss */
      60835);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970); // import { SqlitedatabaseService } from 'src/app/services/sqlitedatabase.service';


      var _SchoolListPage = /*#__PURE__*/function () {
        function SchoolListPage(router, fb, healthServices, usersessionService, alertController, modalController, sqliteDB, alertService) {
          _classCallCheck(this, SchoolListPage);

          this.router = router;
          this.fb = fb;
          this.healthServices = healthServices;
          this.usersessionService = usersessionService;
          this.alertController = alertController;
          this.modalController = modalController;
          this.sqliteDB = sqliteDB;
          this.alertService = alertService;
          this.widgetsCard = false;
          this.totalstds = 0;
          this.notRec = 0;
          this.verifiedRecd = 0;
          this.defRet = 0;
          this.corVerifiedRecd = 0;
          this.toBeVerified = 0;
          this.userId = this.usersessionService.usertype();
          this.username = this.usersessionService.username();
          this.useriddata = this.usersessionService.user_id();
          debugger;
        }

        return _createClass(SchoolListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            // this.checkLocalExistSchoolList();
            this.getSchoolData(); // From Server
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              district: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.useriddata),
              block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
            });
          } //back

        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/home']);
          } //next

        }, {
          key: "nextPage",
          value: function nextPage(SchoolId, SchoolName) {
            this.router.navigate(['/tabs/spectacel-class-list'], {
              queryParams: {
                SchoolId: SchoolId,
                SchoolName: SchoolName
              }
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this = this;

            var query = 'DELETE FROM SchoolLists' + ' WHERE BlockId = "' + this.useriddata + '"';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res) {
                _this.getSchoolData();
              }
            });
          } // Check Local Data Exist Method_________________________________________________________________________________*

        }, {
          key: "checkLocalExistSchoolList",
          value: function checkLocalExistSchoolList() {
            var _this2 = this;

            this.blockData = this.userId;
            this.sqliteDB.checkDataExistsWithConditions('SchoolLists', "BlockId", this.useriddata).then(function (res) {
              if (res == true) {
                console.log("local"); // this.getSchoolLocalDB(); // Local Data

                _this2.getSchoolData(); // From Server

              } else {
                _this2.getSchoolData(); // From Server


                console.log("server");
              }
            });
          } //school data

        }, {
          key: "getSchoolData",
          value: function getSchoolData() {
            var _this3 = this;

            this.widgetsCard = true;
            this.healthServices.PMOASchlListByBlkId().subscribe(function (response) {
              if (response.dataStatus) {
                _this3.schoolList = [];
                _this3.searchData = [];
                _this3.schoolList = response.result;
                _this3.searchData = response.result;
                _this3.schoolData = true;

                if (response.result.length > 0) {// response.result.forEach(element => {
                  //   this.saveSchoolLocalDB(element);
                  // });
                  // this.getSchoolLocalDB();
                }

                _this3.calcSchSpectacles();

                _this3.totalBlocklist = 0;
                _this3.totalBlocklist = response.result.length;
              } else {
                _this3.alertService.warning(response.message);
              } // this.getSchoolCount(this.totalBlocklist)

            });
          }
        }, {
          key: "calcSchSpectacles",
          value: function calcSchSpectacles() {
            this.totalstds = 0;
            this.notRec = 0;
            this.verifiedRecd = 0;
            this.defRet = 0;
            this.corVerifiedRecd = 0;
            this.toBeVerified = 0;

            for (var i = 0; i < this.schoolList.length; i++) {
              this.totalstds = this.totalstds + parseInt(this.schoolList[i].total_students);
              this.notRec = this.notRec + Number(this.schoolList[i].status1);
              this.verifiedRecd = this.verifiedRecd + Number(this.schoolList[i].status2);
              this.defRet = this.defRet + Number(this.schoolList[i].status3);
              this.corVerifiedRecd = this.corVerifiedRecd + Number(this.schoolList[i].status4);
              this.toBeVerified = this.toBeVerified + Number(this.schoolList[i].to_be_verified);
            }
          }
        }, {
          key: "saveSchoolLocalDB",
          value: function saveSchoolLocalDB(element) {
            var datainsert = 'INSERT INTO SchoolLists VALUES (?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, element.BlockId, element.CompletedByDr, element.SchoolId, element.SchoolName]).then(function (insertres) {
              if (insertres) {
                console.log('School data info inserted');
              }
            });
          }
        }, {
          key: "getSchoolLocalDB",
          value: function getSchoolLocalDB() {
            var _this4 = this;

            this.widgetsCard = true;
            var query = 'SELECT * FROM SchoolLists' + ' WHERE BlockId = "' + this.useriddata + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this4.schoolList = [];
                _this4.searchData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.schoolList.push(data.rows.item(i));

                  _this4.searchData.push(data.rows.item(i));

                  _this4.schoolData = true;
                }

                _this4.totalBlocklist = 0;
                _this4.totalBlocklist = data.rows.length; // this.getSchoolCount(this.totalBlocklist)
              }
            });
          } // widget count

        }, {
          key: "getSchoolCount",
          value: function getSchoolCount(schCount) {
            var _this5 = this;

            this.healthServices.getTotalCont(this.useriddata).subscribe(function (response) {
              _this5.completedschool = response.result[0].Count;
              _this5.completeTeacher = schCount - _this5.completedschool;
            });
          } // searching data 

        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this6 = this;

            this.searchData = [];
            this.searchTerm = event.detail.value.trim();
            this.searchData = this.schoolList.filter(function (item) {
              return item.SchoolName.toLowerCase().indexOf(_this6.searchTerm.toLowerCase()) > -1;
            });
          }
        }]);
      }();

      _SchoolListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_4__.PmoaService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }];
      };

      _SchoolListPage.propDecorators = {
        selectRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['mySelect', {
            "static": false
          }]
        }]
      };
      _SchoolListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-school-list',
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolListPage);
      /***/
    },

    /***/
    60835:
    /*!************************************************************************!*\
      !*** ./src/app/pages/pmoa/spectacel/school-list/school-list.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  white-space: pre-line;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.footer-btn {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.card-align {\n  background-color: white;\n  color: black;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 30px;\n}\n\n.barTotal-container1 {\n  background-color: #6968d9;\n}\n\n.labelTotal1 {\n  color: #6968d9;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText1 {\n  color: #6968d9;\n  font-size: 15px;\n}\n\n.barTotal-container {\n  background-color: #8C66AF;\n}\n\n.labelTotal {\n  color: #8C66AF;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText {\n  color: #8C66AF;\n  font-size: 15px;\n}\n\n.labelScn {\n  color: #9D5716;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntext {\n  color: #9D5716;\n  font-size: 15px;\n}\n\n.labelScnToBeVerified {\n  color: #ff7b00;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntextToBeVerified {\n  color: #ff7b00;\n  font-size: 15px;\n}\n\n.labelReported {\n  color: #FF6E6E;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtext {\n  color: #FF6E6E;\n  font-size: 15px;\n}\n\n.bar-Scn {\n  background-color: #9D5716;\n}\n\n.bar-ScnMe {\n  background-color: #FF6E6E;\n}\n\n.bar-ScnMe-ToBeVerified {\n  background-color: #ff6200;\n}\n\n.labelPMOAtext {\n  color: #009045;\n  font-size: 15px;\n}\n\n.labelPMOA {\n  color: #009045;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.bar-PMOA {\n  background-color: #009045;\n}\n\n.labelCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtextCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 15px;\n}\n\n.bar-ScnMe-CorVerifiedRec {\n  background-color: #07D3B0;\n}\n\n.student-list {\n  padding: 20px;\n  font-size: 16px;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\n.card-header-2 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.icon-end {\n  font-size: 0.5rem;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxtQkFBQTtBQUhKOztBQU1FO0VBRUUsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUVFLHVCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVNFO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtBQU5GOztBQVNFO0VBQ0EsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBTkY7O0FBU0U7RUFFRSxlQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVNFO0VBQ0UseUJBQUE7QUFOSjs7QUFRRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBTkY7O0FBVUU7RUFDRSx5QkFBQTtBQVBKOztBQVNFO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVNFO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFQRjs7QUFTRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFTRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBUEY7O0FBU0U7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0U7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVNFO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVNFO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFQRjs7QUFTRTtFQUNBLHlCQUFBO0FBTkY7O0FBUUU7RUFDQSx5QkFBQTtBQUxGOztBQU9FO0VBQ0UseUJBQUE7QUFKSjs7QUFPQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBTEE7O0FBT0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTEE7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPRTtFQUNFLHlCQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBSUU7RUFDRSxvQkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJzY2hvb2wtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIHRlc3RcclxuXHJcbnAge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFsaWduIHtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tc3R5bGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgLS1pb24tY29sb3ItYmFzZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6Z3JheSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjpncmF5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudG9kYXlzLXF1aXotaWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICAuYmFyVG90YWwtY29udGFpbmVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OGQ5O1xyXG4gIH1cclxuICAubGFiZWxUb3RhbDEgXHJcbiAge1xyXG4gIGNvbG9yOiAjNjk2OGQ5O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICAubGFiZWxUb3RhbFRleHQxXHJcbiAge1xyXG4gIGNvbG9yOiAjNjk2OGQ5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG5cclxuICAuYmFyVG90YWwtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QzY2QUY7XHJcbiAgfVxyXG4gIC5sYWJlbFRvdGFsIFxyXG4gIHtcclxuICBjb2xvcjogIzhDNjZBRjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxhYmVsVG90YWxUZXh0IFxyXG4gIHtcclxuICBjb2xvcjogIzhDNjZBRjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbiBcclxuICB7XHJcbiAgY29sb3I6ICM5RDU3MTY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbnRleHQgXHJcbiAge1xyXG4gIGNvbG9yOiAjOUQ1NzE2O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmxhYmVsU2NuVG9CZVZlcmlmaWVkIFxyXG4gIHtcclxuICBjb2xvcjogI2ZmN2IwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxhYmVsU2NudGV4dFRvQmVWZXJpZmllZCAgXHJcbiAge1xyXG4gIGNvbG9yOiAjZmY3YjAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmxhYmVsUmVwb3J0ZWQgXHJcbiAge1xyXG4gIGNvbG9yOiNGRjZFNkU7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICAubGFiZWxSZXBvcnRlZHRleHQgXHJcbiAge1xyXG4gIGNvbG9yOiNGRjZFNkU7O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmJhci1TY24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RDU3MTY7XHJcbiAgfVxyXG4gIC5iYXItU2NuTWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNkU7XHJcbiAgfVxyXG4gIC5iYXItU2NuTWUtVG9CZVZlcmlmaWVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYyMDA7XHJcbiAgICB9XHJcblxyXG4ubGFiZWxQTU9BdGV4dCBcclxue1xyXG5jb2xvcjogIzAwOTA0NTtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5sYWJlbFBNT0Fcclxue1xyXG5jb2xvcjogIzAwOTA0NTtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5iYXItUE1PQSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTA0NTtcclxuICB9XHJcblxyXG4gIC5sYWJlbENvclZlcmlmaWVkUmVjIHtcclxuICAgIGNvbG9yOiMwN0QzQjA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICBcclxuICAubGFiZWxSZXBvcnRlZHRleHRDb3JWZXJpZmllZFJlYyB7XHJcbiAgICBjb2xvcjojMDdEM0IwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmFyLVNjbk1lLUNvclZlcmlmaWVkUmVjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN0QzQjA7XHJcbiAgfVxyXG5cclxuICAuc3R1ZGVudC1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5wdC0xNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfSBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9IFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH0gXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4OztcclxuICB9IFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXItMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLmljb24tZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    18404:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/spectacel/school-list/school-list.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">School List</div>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" style=\"color:white\" (click)=\"onSync()\">\r\n      <ion-icon name=\"sync-outline\" style=\"zoom:2.0\"></ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n\r\n  <ion-card class=\"card-widget\" *ngIf=\"widgetsCard\">\r\n    <ion-row>\r\n      <ion-col class=\"barTotal-container1\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelTotal1\">{{totalBlocklist}}</p>\r\n            <p class=\"labelTotalText1\">Total School</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/Total_School.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"barTotal-container \" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelTotal\">{{totalstds}}</p>\r\n            <p class=\"labelTotalText\">Total Students</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/stdCount.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <!-- <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelScn\">{{notRec}}</p>\r\n            <p class=\"labelScntext\">Verified By PMOA</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> -->\r\n\r\n\r\n  <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-ScnMe-CorVerifiedRec\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelCorVerifiedRec\">{{corVerifiedRecd}}</p>\r\n            <p class=\"labelReportedtextCorVerifiedRec\">Verified And Received By Student</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/speVerifiedRec.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n   <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelScn\">{{verifiedRecd}}</p>\r\n            <p class=\"labelScntext\">Defective</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <!-- <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-PMOA\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelPMOA\"> {{verifiedRecd}} </p>\r\n            <p class=\"labelPMOAtext\">Defective</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/speRec.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> -->\r\n\r\n  <!-- <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-ScnMe\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelReported\">{{defRet}}</p>\r\n            <p class=\"labelReportedtext\">Not Received</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/spcDefAndRet.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> -->\r\n\r\n  <ion-card class=\"card-widget\">\r\n    <ion-row>\r\n      <ion-col class=\"bar-ScnMe-ToBeVerified\" size=\"0.1\"></ion-col>\r\n      <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n        <div class=\"content-text content\">\r\n          <ion-label>\r\n            <p class=\"labelScnToBeVerified\">{{toBeVerified}}</p>\r\n            <p class=\"labelScntextToBeVerified\">To be verified</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  style=\"padding-top: 20px; padding-left: 20px;\">\r\n        <div> <img src=\"../../../../assets/icons/pmoa/spectacle.svg\" /><br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n  <ion-searchbar class=\"search_Css\" debounce=\"500\" (ionChange)=\"getFilterItems($event)\" placeholder=\"Search\" style=\"padding-left: 12px;\r\n    padding-right: 12px;line-height:32px\"></ion-searchbar>\r\n  <ion-grid class=\"grid-padding\" style=\"background-color: #e6f3ff\" *ngIf=\"schoolData\">\r\n    <ion-card class=\"card-align\" *ngFor=\"let item of searchData;let i = index;\" style=\"color: var(--ion-color-primary);\">\r\n      <ion-row style=\"padding-top: 5px;padding-left: 5px;padding-right: 5px;\">\r\n        <ion-col size=\"2\">\r\n          <img src=\"../../../../assets/icons/pmoa/Total_School.svg\" />\r\n        </ion-col>\r\n        <ion-col (click)=\"nextPage(item.SchoolId,item.SchoolName)\" size=\"8\" class=\"student-list\">\r\n          <ion-label >{{i+1}} . {{item.SchoolName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngIf=\"item.HudAcknowledged == item.verified\" class=\"text-center\">\r\n          <ion-icon name=\"checkmark-circle\" style=\"color: green; font-size: 2rem; padding-top:10px;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngIf=\"item.verified == 0\" class=\"text-center\">\r\n          <ion-icon name=\"alert-circle\" style=\"font-size: 2rem; padding-top:10px;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngIf=\"(item.HudAcknowledged > item.verified) && (item.verified > 0)\"  class=\"text-center\">\r\n          <ion-icon name=\"alert-circle\" style=\"color: orange; font-size: 2rem; padding-top:10px;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_spectacel_school-list_school-list_module_ts-es5.js.map