(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_student-list_student-list_module_ts"], {
    /***/
    75727:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/student-list/student-list-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPageRoutingModule": function StudentListPageRoutingModule() {
          return (
            /* binding */
            _StudentListPageRoutingModule
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


      var _student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-list.page */
      10130);

      var routes = [{
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage
      }];

      var _StudentListPageRoutingModule = /*#__PURE__*/_createClass(function StudentListPageRoutingModule() {
        _classCallCheck(this, StudentListPageRoutingModule);
      });

      _StudentListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StudentListPageRoutingModule);
      /***/
    },

    /***/
    62317:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/student-list/student-list.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPageModule": function StudentListPageModule() {
          return (
            /* binding */
            _StudentListPageModule
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


      var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-list-routing.module */
      75727);
      /* harmony import */


      var _student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-list.page */
      10130);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _StudentListPageModule = /*#__PURE__*/_createClass(function StudentListPageModule() {
        _classCallCheck(this, StudentListPageModule);
      });

      _StudentListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentListPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_1__.StudentListPage]
      })], _StudentListPageModule);
      /***/
    },

    /***/
    10130:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/student-list/student-list.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentListPage": function StudentListPage() {
          return (
            /* binding */
            _StudentListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-list.page.html */
      77640);
      /* harmony import */


      var _student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-list.page.scss */
      66105);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var _StudentListPage = /*#__PURE__*/function () {
        function StudentListPage(router, pmoaService, route, sqliteDB, usersessionService, alertService) {
          _classCallCheck(this, StudentListPage);

          this.router = router;
          this.pmoaService = pmoaService;
          this.route = route;
          this.sqliteDB = sqliteDB;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.StudentData = [];
          this.searchData = [];
          this.StudentListData = [];
          this.AddStudents = [];
          this.sdntList = '';
        }

        return _createClass(StudentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sessionUserName = this.usersessionService.emis_username();

            if (this.route.snapshot.queryParamMap.get("class_studying_id")) {
              this.class_studying_id = this.route.snapshot.queryParamMap.get("class_studying_id");
              this.class_section = this.route.snapshot.queryParamMap.get("class_section");
              this.SchoolId = this.route.snapshot.queryParamMap.get("SchoolId");
              this.dataForm = this.route.snapshot.queryParamMap.get("data");
            }

            this.totalStudent = 0;
            this.totalTeacher = 0;
            this.totalDoctor = 0;
            this.StudentData = [];
            this.getTotalCount();
            this.sdntList = '';
            this.AddStudents = [];
            this.searchData = [];
            debugger; // if (this.dataForm == 'added') {
            //   this.getStudentLocalDB();
            // } else {
            // this.onSync();
            // };

            this.getstudentData();
          }
        }, {
          key: "getAddStudentsList",
          value: function getAddStudentsList() {
            var _this = this;

            this.pmoaService.getPmoaAddNewStudents(this.SchoolId, this.class_studying_id, this.class_section).subscribe(function (response) {
              if (response.dataStatus) {
                _this.AddStudents = [];

                var _loop = function _loop() {
                  var sdntId = _this.searchData[i].student_id;
                  index = response.result.findIndex(function (o) {
                    return o.student_id == sdntId;
                  });
                  if (index !== -1) response.result.splice(index, 1);
                },
                    index;

                for (var i = 0; i < _this.searchData.length; i++) {
                  _loop();
                }

                debugger;
                _this.AddStudents = response.result;
                _this.sdntList = '';
              }
            });
          } // Check Local Data Exist Method_________________________________________________________________________________*

        }, {
          key: "checkLocalExistStudentList",
          value: function checkLocalExistStudentList() {
            // this.sqliteDB.checkDataExistsWithConditions('Studentlist', "SchoolId", this.SchoolId).then((res) => {
            //   if (res == true) {
            //     this.getStudentLocalDB(); // Local Data
            //   }
            //   else {
            //     this.getstudentData();  // From Server
            //   }
            // });
            this.getstudentData();
          }
        }, {
          key: "getStudentLocalDB",
          value: function getStudentLocalDB() {
            var _this2 = this;

            var query = 'SELECT UserId as student_id, Name as name,Status as HealthSts FROM Studentlist' + ' WHERE SchoolId = "' + this.SchoolId + '"' + ' And Classstudyingid = "' + this.class_studying_id + '"' + ' And ClassSection = "' + this.class_section + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this2.StudentData = [];
                _this2.searchData = [];
                _this2.totalStudent = 0;
                _this2.sclid = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this2.searchData.push(data.rows.item(i));

                  _this2.StudentData.push(data.rows.item(i));
                }

                _this2.sclid = _this2.SchoolId;
                _this2.filterDatByTeacher = _this2.StudentData.filter(function (item) {
                  return item.Status === "2";
                });
                _this2.filterDatByDoctor = _this2.StudentData.filter(function (item) {
                  return item.Status === "1";
                });
                _this2.totalStudent = _this2.StudentData.length;
                _this2.totalDoctor = _this2.filterDatByDoctor.length;
                _this2.totalTeacher = _this2.filterDatByTeacher.length;

                _this2.getAddStudentsList();
              } else {
                _this2.getstudentData();
              }
            });
          }
        }, {
          key: "getTotalCount",
          value: function getTotalCount() {
            var _this3 = this;

            this.pmoaService.getSchoolCountData(this.SchoolId, this.class_studying_id, this.class_section).subscribe(function (response) {
              if (response.dataStatus == true) {
                _this3.totalSchool = response.result.TotStuCountClsSec[0].Count;
                _this3.totalScnTech = response.result.TotStuScrndCountClsSec[0].Count;
                _this3.totalrefPmoa = response.result.TotStuRefrdPmoaClsSec[0].Count;
                _this3.totalscnPmoa = response.result.TotStuScrndByPmoaClsSec[0].Count;
              }
            });
          }
        }, {
          key: "getstudentData",
          value: function getstudentData() {
            var _this4 = this;

            this.StudentData = [];
            this.searchData = [];
            this.StudentListData = [];
            this.sclid = this.SchoolId;
            this.pmoaService.getTotalStudentData(this.SchoolId, this.class_section, this.class_studying_id).subscribe(function (response) {
              if (response.dataStatus) {
                response.result.map(function (item) {
                  // let data = {
                  //   "student_id": item.student_id,
                  //   "name": item.name,
                  //   "HealthSts": item.HealthSts,
                  //   UserId:item.UserId
                  // }
                  _this4.StudentData.push(item);

                  _this4.searchData.push(item);

                  _this4.StudentListData.push(item);
                }); // this.StudentListData.forEach(key => {
                //   this.saveStudentLocalDB(key);
                // });
                // this.getStudentLocalDB();  
              } else {
                _this4.alertService.error(response.message);
              }

              _this4.getAddStudentsList();
            });
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this5 = this;

            this.searchData = [];
            this.searchTerm = event.detail.value.trim();
            this.searchData = this.StudentData.filter(function (item) {
              return item.name.toLowerCase().indexOf(_this5.searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "questionsPage",
          value: function questionsPage(student_id, name, SchoolId, data) {
            this.router.navigate(['/tabs/pmoa-questions'], {
              queryParams: {
                student_id: student_id,
                name: name,
                SchoolId: SchoolId,
                "class_studying_id": this.class_studying_id,
                "class_section": this.class_section,
                UserId: data.UserId,
                SpecsId: data.SpecsId,
                SpecsStatus: data.SpecsStatus,
                pmoa: data.pmoa
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/section-list']);
          }
        }, {
          key: "saveStudentLocalDB",
          value: function saveStudentLocalDB(element) {
            var datainsert = 'INSERT INTO Studentlist VALUES (?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, element.student_id, element.name, element.HealthSts, this.class_studying_id, this.class_section, this.SchoolId]).then(function (insertres) {
              console.log('blockListData inserted successfully', insertres);

              if (insertres) {}
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {// let query = 'DELETE FROM Studentlist' +
            // ' WHERE SchoolId = "' + this.SchoolId + '"' + 
            // ' And Classstudyingid = "' + this.class_studying_id+ '"' +
            // ' And ClassSection = "' + this.class_section + '"';
            // return this.sqliteDB.getDataLocalDB(query).then(data => {
            //     this.getstudentData();  // From Server
            // });
          }
        }, {
          key: "addSdntChange",
          value: function addSdntChange(event) {
            var _this6 = this;

            console.log("add sdnt event=", event); //   component: IonicSelectableComponent,
            //   value: any
            // }) {

            console.log(event.value.length);
            var sdntarraylist = [];
            var newDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('YYYY-MM-DD');

            for (var i = 0; i < event.value.length; i++) {
              var sdntarray = {
                "IndxID": event.value[i].HlthIndexId,
                "ScreeningDate": newDate,
                "ScrenerId": this.usersessionService.emis_username(),
                "StuId": event.value[i].student_id,
                "pmoa": 2,
                "rbsk": 0,
                "mentalHealth": 0,
                "dentalSpeciallist": 0,
                "cwsn": 0,
                "AcYear": "2023-24",
                "AddedStud": event.value[i].HlthIndexId ? 2 : 1
              };
              this.searchData.push(sdntarray);
              sdntarraylist.push(sdntarray);
            }

            var obj = {
              "StudDetails": sdntarraylist,
              "HealthDetails": []
            };
            this.pmoaService.HealthScrnSave(obj).subscribe(function (res) {
              _this6.getstudentData();
            }, function (error) {
              _this6.alertService.warning("Unable to add students");
            }); // return
            // sdntarraylist.forEach(key => {
            //   this.saveStudentLocalDB(key);
            // });
            // setTimeout(() => {
            //   this.getAddStudentsList();
            // }, 100)
          }
        }, {
          key: "answerPageNavigate",
          value: function answerPageNavigate(data) {
            var obj = {
              "class_studying_id": this.class_studying_id,
              "class_section": this.class_section,
              "SchoolId": this.SchoolId,
              "data": "added"
            };

            if (data.pmoa == 1) {
              this.router.navigate(['/tabs/health-check-up-answer'], {
                queryParams: {
                  'SchlId': data.school_id,
                  'studentid': data.student_id,
                  'Sectn': data.class_section,
                  'ClsID': data.class_studying_id,
                  'pageId': 1,
                  "Gender": data.Gender ? data.Gender : 1,
                  "studentname": data.name,
                  "UniqId": data.UserId,
                  "module": 'PMOA',
                  navigate: JSON.stringify(obj),
                  navigateUrl: '/tabs/student-list'
                },
                skipLocationChange: false
              });
            } else {
              this.alertService.warning('Not a referred student');
            }
          }
        }]);
      }();

      _StudentListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_3__.PmoaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _StudentListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-student-list',
        template: _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentListPage);
      /***/
    },

    /***/
    66105:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/student-list/student-list.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pt-10 {\n  padding-left: 5px;\n  zoom: 1.3;\n}\n\n.pt-15 {\n  font-size: 18px;\n  padding-left: 2%;\n}\n\n.table-row {\n  align-content: center;\n  height: 30px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.labelPMOAtext {\n  color: #b18504;\n  font-size: 15px;\n}\n\n.labelPMOA {\n  color: #b18504;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.bar-PMOA {\n  background-color: #b18504;\n}\n\n.ion-filter-card {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.quiz-button {\n  font-weight: 700;\n  display: flex;\n  font-size: 14px;\n  color: white;\n}\n\n.img-student {\n  max-width: 54%;\n  border: 0;\n  height: 23px;\n}\n\n.col-content {\n  display: flex;\n  font-size: 12px;\n  justify-content: end;\n}\n\n.next-icon {\n  font-size: 23px;\n}\n\n.card-align {\n  background-color: white;\n  color: black;\n  padding-bottom: 25px;\n  margin-top: 25px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: #8b67b3;\n  white-space: pre-line !important;\n}\n\n.back-icon {\n  color: white;\n}\n\n.grid-table {\n  color: black;\n  padding: 10px;\n}\n\n.odd {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.even {\n  font-size: 12px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.col-header {\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n}\n\n.card-widget {\n  margin-top: 5%;\n}\n\n.content-text {\n  padding-left: 10px;\n}\n\n.select {\n  color: #2176b9;\n  white-space: pre-line !important;\n}\n\n.barTotal-container {\n  background-color: #439de3;\n}\n\n.labelTotal {\n  color: #439de3;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText {\n  color: #439de3;\n  font-size: 15px;\n}\n\n.labelScn {\n  color: #3dcd8f;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntext {\n  color: #3dcd8f;\n  font-size: 15px;\n}\n\n.labelReported {\n  color: #d39494;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtext {\n  color: #d39494;\n  font-size: 15px;\n}\n\n.bar-Scn {\n  background-color: #3dcd8f;\n}\n\n.bar-ScnMe {\n  background-color: #d39494;\n}\n\np {\n  white-space: pre-line;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.footer-btn {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.card-align {\n  padding: 10px !important;\n  background-color: white;\n  color: black;\n  margin: 15px;\n  margin-top: 25px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.text {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 40px;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\n.text-title {\n  font-size: 13px;\n  color: #000000b3;\n  padding-inline: 0px !important;\n  text-align: start;\n  padding-top: 6px;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.refStd {\n  background-color: rgba(255, 166, 0, 0.405) !important;\n}\n\n.bg-clr-white {\n  background-color: white;\n}\n\n.p5p {\n  padding: 5px;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.mb-10p {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBRUUscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFDQTs7QUFDQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDQTs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBY0E7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBY0E7RUFFTSxnQkFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBRUQsWUFBQTtBQWJQOztBQWVBO0VBRVEsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBYlI7O0FBZUE7RUFFTSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBYk47O0FBZ0JBO0VBRVEsZUFBQTtBQWRSOztBQWlCQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksY0FBQTtFQUFnQixnQ0FDaEI7QUFiSjs7QUFlQTtFQUNFLFlBQUE7QUFaRjs7QUFjQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBWko7O0FBaUJBO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFmRjs7QUFrQkE7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWhCRjs7QUFtQkE7RUFFRSxlQUFBO0VBRUQsZ0JBQUE7RUFDQSxZQUFBO0FBbEJEOztBQThCRTtFQUlFLGNBQUE7QUE5Qko7O0FBZ0NFO0VBRUksa0JBQUE7QUE5Qk47O0FBZ0NFO0VBRUUsY0FBQTtFQUFlLGdDQUNmO0FBOUJKOztBQWdDRTtFQUNFLHlCQUFBO0FBN0JKOztBQStCRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE3QkY7O0FBK0JBO0VBRUUsY0FBQTtFQUNBLGVBQUE7QUE3QkY7O0FBK0JBO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQTdCRjs7QUErQkE7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQTdCRjs7QUErQkE7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBN0JGOztBQStCQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0FBN0JGOztBQStCQTtFQUNFLHlCQUFBO0FBNUJGOztBQThCQTtFQUNFLHlCQUFBO0FBM0JGOztBQWtDQTtFQUNFLHFCQUFBO0FBL0JGOztBQWtDQTtFQUNFLG1CQUFBO0FBL0JGOztBQWtDQTtFQUVFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBaENGOztBQW1DQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBaENGOztBQW1DQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7QUFoQ0E7O0FBbUNBO0VBQ0EsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBaENBOztBQW1DQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQ0Y7O0FBa0NBO0VBRUksZUFBQTtFQUNBLFdBQUE7QUFoQ0o7O0FBa0NFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBL0JKOztBQWlDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQTlCSjs7QUFrQ0U7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBL0JKOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FBa0NFO0VBQ0Usb0JBQUE7QUEvQko7O0FBa0NFO0VBQ0UsWUFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUEvQko7O0FBa0NFO0VBQ0UscURBQUE7QUEvQko7O0FBa0NFO0VBQ0EsdUJBQUE7QUEvQkY7O0FBa0NFO0VBQ0UsWUFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxtQkFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxtQkFBQTtBQS9CSiIsImZpbGUiOiJzdHVkZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgem9vbTogMS4zO1xyXG59XHJcbi5wdC0xNSB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7IFxyXG59XHJcblxyXG4gIC50YWJsZS1yb3cge1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbi5oZWFkZXIgLmNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxufVxyXG4ubGFiZWxQTU9BdGV4dCBcclxue1xyXG5jb2xvcjogI2IxODUwNDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5sYWJlbFBNT0Fcclxue1xyXG5jb2xvcjogI2IxODUwNDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5iYXItUE1PQSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxODUwNDtcclxuICB9XHJcbi8vIC5jb2wge1xyXG4vLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbi8vICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5jb2w6bGFzdC1jaGlsZCB7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xyXG4vLyB9XHJcblxyXG4vLyAucm93Omxhc3QtY2hpbGQgLmNvbCB7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcclxuLy8gfVxyXG5cclxuLmlvbi1maWx0ZXItY2FyZHtcclxuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuLnF1aXotYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAvLyBjb2xvcjogI2VhZTZlMjtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuLmltZy1zdHVkZW50XHJcbiAgICAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTQlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgIH0gICBcclxuLmNvbC1jb250ZW50IFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4ubmV4dC1pY29uXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgLy8gd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4XHJcbiAgfVxyXG4gIC5pdGVtLXN0eWxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOm5vbmUgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OmdyYXkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjpncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5zZWxlY3Qge1xyXG4gICAgY29sb3I6ICAjOGI2N2IzO3doaXRlLXNwYWNlOiBcclxuICAgIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ncmlkLXRhYmxlIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM1N2FiZDU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwUFg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5vZGR7XHJcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNkOWYyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAvLyBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmV2ZW57XHJcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMWZjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAvLyBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLmNvbC1oZWFkZXIge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gLy8gY29sb3I6ICNlYWU2ZTI7XHJcbiBmb250LXdlaWdodDogNzAwO1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi8vIC50b2RheXMtcXVpei1pY29uXHJcbi8vICAge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4vLyAgICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgIH1cclxuICAvLyAuY29sLXRhYmxlXHJcbiAgLy8gIHtcclxuICAvLyAgIHRleHQtYWxpZ246IGVuZFxyXG4gIC8vIH1cclxuICAuY2FyZC13aWRnZXRcclxuICB7XHJcbiAgICAvLyB3aWR0aDogODclOyBcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuICAuY29udGVudC10ZXh0IFxyXG4gIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAuc2VsZWN0IFxyXG4gIHtcclxuICAgIGNvbG9yOiAjMjE3NmI5O3doaXRlLXNwYWNlOiBcclxuICAgIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iYXJUb3RhbC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzOWRlMztcclxuICB9XHJcbiAgLmxhYmVsVG90YWwgXHJcbntcclxuICBjb2xvcjogIzQzOWRlMztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubGFiZWxUb3RhbFRleHQgXHJcbntcclxuICBjb2xvcjogIzQzOWRlMztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmxhYmVsU2NuIFxyXG57XHJcbiAgY29sb3I6ICMzZGNkOGY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmxhYmVsU2NudGV4dCBcclxue1xyXG4gIGNvbG9yOiAjM2RjZDhmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubGFiZWxSZXBvcnRlZCBcclxue1xyXG4gIGNvbG9yOiNkMzk0OTQ7O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sYWJlbFJlcG9ydGVkdGV4dCBcclxue1xyXG4gIGNvbG9yOiNkMzk0OTQ7O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYmFyLVNjbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkY2Q4ZjtcclxufVxyXG4uYmFyLVNjbk1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5NDk0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIHRlc3RcclxuXHJcbnAge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItYnRuXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgY29sb3I6I2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgbWFyZ2luOjE1cHg7XHJcbiAgbWFyZ2luLXRvcDoyNXB4XHJcbn1cclxuXHJcbi5pdGVtLXN0eWxlIHtcclxucGFkZGluZy1yaWdodDogMiU7XHJcbi0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxucGFkZGluZy1sZWZ0OiAyJTtcclxuLS1pb24tY29sb3ItYmFzZTpub25lICFpbXBvcnRhbnQ7XHJcbi0taW9uLWNvbG9yLWNvbnRyYXN0OmdyYXkgIWltcG9ydGFudDtcclxuLS1pb24tY29sb3ItY29udHJhc3QtcmdiOmdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbmNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG5wcmUtbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLXRvcDphdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLnRvZGF5cy1xdWl6LWljb25cclxuICB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcbiAgLmJ0bi1zY3JlZW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDM3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnB0LTE1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBiMztcclxuICAgIHBhZGRpbmctaW5saW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmVmU3RkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNDA1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLWNsci13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucDVwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYi0xMHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    77640:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/student-list/student-list.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Student List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{sessionUserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" style=\"color:white\" (click)=\"onSync()\">\r\n      <ion-icon name=\"sync-outline\" style=\"zoom:2.0\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid class=\"grid-padding\">\r\n    <!-- <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"barTotal-container \" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelTotal\">{{totalSchool}}</p>\r\n              <p class=\"labelTotalText\">Total Students</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/total-students.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScn\">{{totalScnTech}}</p>\r\n              <p class=\"labelScntext\">Total Students Screened by teacher</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 10px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/Total_Screened_by_teacher.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-PMOA\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelPMOA\"> {{totalrefPmoa}} </p>\r\n              <p class=\"labelPMOAtext\">Total Students referred to PMOA</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/pmoaicon.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-widget\"> \r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelReported\">{{totalscnPmoa}}</p>\r\n              <p class=\"labelReportedtext\">Total Students Screened by me</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/Total_Screened_by_me.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card> -->\r\n\r\n    <div>\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #D9688B;margin: 10px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalSchool}}\r\n          </ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Students </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../assets/icons/pmoa/total-students.svg\" />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #E9A069;margin: 10px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalScnTech}}\r\n          </ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\"> Students Screened by teacher </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../assets/icons/pmoa/Total_Screened_by_teacher.svg\" />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #4CAF50;margin: 10px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalrefPmoa}}\r\n          </ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\"> Students referred to PMOA</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../assets/icons/pmoa/pmoaicon.svg\" />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #4CAF50;margin: 10px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalscnPmoa}}\r\n          </ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\"> Students Screened by me</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../assets/icons/pmoa/Total_Screened_by_me.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-row *ngIf=\"StudentData?.length != 0\">\r\n      <ion-searchbar style=\"padding: 10px;\" showCancelButton=\"never\" (ionChange)=\"getFilterItems($event)\">\r\n      </ion-searchbar>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"grid-table\" *ngIf=\"searchData?.length != 0\">\r\n\r\n      <ion-row class=\"table-row\" style=\"margin-bottom: 10px;padding: 10px;background-color: rgb(104, 82, 156);\">\r\n        <ion-col size=\"1\">\r\n          <div class=\"quiz-button\">\r\n            <span>ID</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"4.5\">\r\n          <div class=\"quiz-button\">\r\n            <span>Student Name</span>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <div class=\"col-header\">\r\n            <span>Health Status</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngFor=\"let item of searchData; let i = index;\" class=\"mb-10p\">\r\n        <ion-col size=\"1.8\" style=\"align-self: center;\">\r\n          <div class=\"bg-clr-white\"\r\n            style=\"text-align: center;border-radius: 10px;box-shadow: 0px 1px 3px grey; border-left: 4px solid rgb(104, 82, 156)\"\r\n            (click)=\"answerPageNavigate(item)\">\r\n            <img src=\"../../../../../assets/icons/Student_exam.svg\"\r\n              style=\"margin-top: 4px; margin-right: 4px; margin-bottom: 4px;\">\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"10\" (click)=\"questionsPage(item.student_id,item.name,sclid,item)\">\r\n          <ion-row class=\"p5p align-items-center\" style=\"background-color: white;box-shadow: 0px 0px 10px #3300e726;border-radius: 10px;\"\r\n          [class.refStd]=\"item.pmoa==1\">\r\n          <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"1\">\r\n            <div style=\"min-width: 48px;\">\r\n              <ion-title style=\"font-size: 13px;color: black;padding-inline: 0px !important;padding-top: 6px;\">\r\n                {{i+1}}\r\n              </ion-title>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" class=\"col-table\" size=\"4.5\">\r\n            <div class=\"col-content\">\r\n              <ion-title class=\"text-title\">\r\n                {{item.name}} </ion-title>\r\n            </div>\r\n            <div class=\"text-title\">\r\n              {{item.UserId}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"item.HealthSts == '0'\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n            style=\"font-size: 13px;color:black;align-self: center;\">\r\n            Not screened yet\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"item.HealthSts == '1'\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n            style=\"font-size: 13px;color:black;align-self: center;\">\r\n            Spectacle Needed<span>\r\n              <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/Tick.svg\">\r\n            </span>\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"item.HealthSts == '2'\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n            style=\"font-size: 13px;color:black;align-self: center;\">\r\n            Visit to DEIC<span>\r\n              <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/Tick.svg\">\r\n            </span>\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"item.HealthSts == '3'\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n            style=\"font-size: 13px;color:black;align-self: center;\">\r\n            Spectacle Needed And Visit to DEIC<span>\r\n              <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/Tick.svg\">\r\n            </span>\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"item.HealthSts == '4'\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"5\"\r\n            style=\"font-size: 13px;color:black;align-self: center;\">\r\n            Screening completed <span>\r\n              <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/Tick.svg\">\r\n            </span>\r\n          </ion-col>\r\n\r\n          <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" class=\"col-table\" size=\"1.5\">\r\n            <ion-icon class=\"todays-quiz-icon\" src=\"../../../../assets/icons/pmoa/right-arrow.svg\">\r\n            </ion-icon>\r\n          </ion-col>\r\n        \r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <div style=\"margin: 15px;background-color: white;border-radius: 10px;padding-bottom: 5px;\">\r\n      <div\r\n        style=\"padding: 5px;text-align: center;background-color: rgb(104, 82, 156);color: white;font-weight: bold;border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n        <ion-label>\r\n          Add Students\r\n        </ion-label>\r\n      </div>\r\n      <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n        <ionic-selectable [(ngModel)]=\"sdntList\" placeholder=\"Select Students\" item-content\r\n          (onChange)=\"addSdntChange($event)\" itemValueField=\"student_id\" itemTextField=\"name\" [items]=\"AddStudents\"\r\n          [isMultiple]=\"true\" [canSearch]=\"true\">\r\n        </ionic-selectable>\r\n      </ion-item>\r\n      <!-- <div style=\"text-align: center;background-color: red;padding: 10px;\">\r\n       <ion-label>Add Students</ion-label>\r\n       <ion-icon name=\"add\"></ion-icon>\r\n  \r\n      </div> -->\r\n\r\n      <!-- <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <ion-label class=\"footer-aln\" style=\"font-size:15px\">\r\n          Add Students\r\n       \r\n        </ion-label>\r\n      </div> -->\r\n\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_student-list_student-list_module_ts-es5.js.map