(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_profile_profile_profile_module_ts"], {
    /***/
    44802:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/leave/profile/profile/profile-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageRoutingModule": function ProfilePageRoutingModule() {
          return (
            /* binding */
            _ProfilePageRoutingModule
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.page */
      61640);

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
      }];

      var _ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      });

      _ProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePageRoutingModule);
      /***/
    },

    /***/
    25804:
    /*!***************************************************************!*\
      !*** ./src/app/pages/leave/profile/profile/profile.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageModule": function ProfilePageModule() {
          return (
            /* binding */
            _ProfilePageModule
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-routing.module */
      44802);
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page */
      61640);

      var _ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      });

      _ProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
      })], _ProfilePageModule);
      /***/
    },

    /***/
    61640:
    /*!*************************************************************!*\
      !*** ./src/app/pages/leave/profile/profile/profile.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      83112);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      85567);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, activatedroute, emisService, sqliteDB, usersessionService, alert) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.activatedroute = activatedroute;
          this.emisService = emisService;
          this.sqliteDB = sqliteDB;
          this.usersessionService = usersessionService;
          this.alert = alert;
          this.TchrPersonalDetails = [];
          this.TchrAcadamicDetails = [];
          this.TchrJoiningDetails = [];
          this.TchrContactDetails = [];
          this.TchrTrainingDetails = [];
          this.TchrMainSubDetails = [];
          this.TchrBankDetails = [];
          this.sessionTeacherId = this.usersessionService.teacher_id();
        }

        return _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.subscribeData();
          } // subscribe data recieved from setting page

        }, {
          key: "subscribeData",
          value: function subscribeData() {
            var _this = this;

            this.sub = this.activatedroute.queryParams.subscribe(function (params) {
              // Defaults to 0 if no query param provided.
              _this.id = +params['export'] || 0;
            });

            if (this.id == "1") {
              this.checkLocalExistTchrPerDetList();
            }

            if (this.id == "2") {
              this.checkLocalExistAcadamicList();
            }

            if (this.id == "3") {
              this.checkLocalExistJoiningList();
            }

            if (this.id == "4") {
              this.checkLocalContactInfo();
            }

            if (this.id == "5") {
              this.checkLocalTrainingInfo();
            }

            if (this.id == "6") {
              this.checkLocalMainSubInfo();
            }

            if (this.id == "7") {
              this.checkLocalBankDetInfo();
            }
          } // navigate to user details page

        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['tabs/settings']);
          } //user personal details get api

        }, {
          key: "getTchrPersonlInfo",
          value: function getTchrPersonlInfo() {
            var _this2 = this;

            var params = {};
            this.emisService.getTeachrPerslDetails(params).subscribe(function (res) {
              _this2.TchrPersonalDetails = res.result;

              _this2.insertTchrPersonalDetailsLocalDB();

              if (_this2.TchrPersonalDetails < 0) {
                _this2.nodata = true;
              } else {
                _this2.nodata = false;
              }
            }, function (error) {
              _this2.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user exit academic details get api

        }, {
          key: "getTechrAcadamicInfo",
          value: function getTechrAcadamicInfo() {
            var _this3 = this;

            var params = {};
            this.emisService.getTechrAcadamicDetails(params).subscribe(function (res) {
              _this3.TchrAcadamicDetails = res.result;

              _this3.insertAcadamicDetailsLocalDB();
            }, function (error) {
              _this3.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user joining details get api

        }, {
          key: "getTechrJoiningInfo",
          value: function getTechrJoiningInfo() {
            var _this4 = this;

            var params = {};
            this.emisService.getTechrJoiningDetails(params).subscribe(function (data) {
              _this4.TchrJoiningDetails = data.result;

              _this4.insertTchrJoiningDetailsLocalDB();
            }, function (error) {
              _this4.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user contact details get api

        }, {
          key: "getTeachrContactInfo",
          value: function getTeachrContactInfo() {
            var _this5 = this;

            var params = {};
            this.emisService.getTechrCommunicationDetails(params).subscribe(function (data) {
              _this5.TchrContactDetails = data.result;

              _this5.insertTchrContactInfoDB();
            }, function (error) {
              _this5.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user training details get api

        }, {
          key: "getTechrTrainingInfo",
          value: function getTechrTrainingInfo() {
            var _this6 = this;

            var params = {};
            this.emisService.getTechrTrainingDetails(params).subscribe(function (data) {
              _this6.TchrTrainingDetails = data.result;

              _this6.insertTchrTrainingInfo();
            }, function (error) {
              _this6.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user subject details get api

        }, {
          key: "getTechrMainsubjectInfo",
          value: function getTechrMainsubjectInfo() {
            var _this7 = this;

            var params = {};
            this.emisService.getTechrMainSubtaught(params).subscribe(function (data) {
              _this7.TchrMainSubDetails = data.incenfac;

              _this7.insertTchrMainSubInfo();
            }, function (error) {
              _this7.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //user bank details get api

        }, {
          key: "getTechrBankDetInfo",
          value: function getTechrBankDetInfo() {
            var _this8 = this;

            var params = {};
            this.emisService.getTechrBankDetails(params).subscribe(function (data) {
              _this8.TchrBankDetails = data.result;

              _this8.insertBankDetInfo();
            }, function (error) {
              _this8.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //check user academic details from local db

        }, {
          key: "checkLocalExistTchrPerDetList",
          value: function checkLocalExistTchrPerDetList() {
            var _this9 = this;

            this.sqliteDB.checkDataExists("TchrPersonalDetailsDb").then(function (res) {
              if (res == true) {
                _this9.getTchrPersonalDetailsLocalDB();
              } else {
                _this9.getTchrPersonlInfo();
              }
            }, function (error) {
              _this9.alert.error("Something went wrong.");
            });
          } //insert user personal details to local db

        }, {
          key: "insertTchrPersonalDetailsLocalDB",
          value: function insertTchrPersonalDetailsLocalDB() {
            var datainsert = "INSERT INTO TchrPersonalDetailsDb VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            for (var i = 0; i < this.TchrPersonalDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrPersonalDetails[i].aadhar_no, this.TchrPersonalDetails[i].disability_type, this.TchrPersonalDetails[i].e_blood_grp, this.TchrPersonalDetails[i].e_prnts_nme, this.TchrPersonalDetails[i].gender, this.TchrPersonalDetails[i].group, this.TchrPersonalDetails[i].school_key_id, this.TchrPersonalDetails[i].social_cat, this.TchrPersonalDetails[i].social_category, this.TchrPersonalDetails[i].staff_dob, this.TchrPersonalDetails[i].teacher_id, this.TchrPersonalDetails[i].teacher_mother_name, this.TchrPersonalDetails[i].teacher_name, this.TchrPersonalDetails[i].teacher_name_tamil, this.TchrPersonalDetails[i].teacher_spouse_name]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //get user personal details from local db

        }, {
          key: "getTchrPersonalDetailsLocalDB",
          value: function getTchrPersonalDetailsLocalDB() {
            var _this0 = this;

            var query = "SELECT * FROM TchrPersonalDetailsDb ";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this0.TchrPersonalDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this0.TchrPersonalDetails.push(data.rows.item(i));
                }
              }
            }, function (error) {
              _this0.alert.error("Something went wrong.");
            });
          } //check user exit academic details from local db

        }, {
          key: "checkLocalExistAcadamicList",
          value: function checkLocalExistAcadamicList() {
            var _this1 = this;

            this.sqliteDB.checkDataExists("TchrAcadamicDetailsDb").then(function (res) {
              if (res == true) {
                _this1.getTchrAcadamicLocalDB();
              } else {
                _this1.getTechrAcadamicInfo();
              }
            }, function (error) {
              _this1.alert.error("Something went wrong.");
            });
          } //get user exit academic details from local db

        }, {
          key: "getTchrAcadamicLocalDB",
          value: function getTchrAcadamicLocalDB() {
            var _this10 = this;

            var query = "SELECT * FROM TchrAcadamicDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this10.TchrAcadamicDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this10.TchrAcadamicDetails.push(data.rows.item(i));
                }
              }
            }, function (error) {
              _this10.alert.error("Something went wrong.");
            });
          } //insert user academic details to local db

        }, {
          key: "insertAcadamicDetailsLocalDB",
          value: function insertAcadamicDetailsLocalDB() {
            var datainsert = "INSERT INTO TchrAcadamicDetailsDb VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            for (var i = 0; i < this.TchrAcadamicDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrAcadamicDetails[i].academic, this.TchrAcadamicDetails[i].academicQualify, this.TchrAcadamicDetails[i].english_upto, this.TchrAcadamicDetails[i].lang_study_upto, this.TchrAcadamicDetails[i].math_upto, this.TchrAcadamicDetails[i].pasdDeptExam, this.TchrAcadamicDetails[i].pgMonthPass, this.TchrAcadamicDetails[i].pgYearPass, this.TchrAcadamicDetails[i].presentBlock, this.TchrAcadamicDetails[i].prevBlock, this.TchrAcadamicDetails[i].prevDistrict, this.TchrAcadamicDetails[i].profQualify, this.TchrAcadamicDetails[i].professional, this.TchrAcadamicDetails[i].science_upto, this.TchrAcadamicDetails[i].soc_study_upto, this.TchrAcadamicDetails[i].u_id, this.TchrAcadamicDetails[i].ugMonthPass, this.TchrAcadamicDetails[i].ugYearPass]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //check user joining details from local db

        }, {
          key: "checkLocalExistJoiningList",
          value: function checkLocalExistJoiningList() {
            var _this11 = this;

            this.sqliteDB.checkDataExists("TchrJoiningDetailsDb").then(function (data) {
              if (data == true) {
                _this11.getTchrJoiningLocalDB();
              } else {
                _this11.getTechrJoiningInfo();
              }
            }, function (error) {
              _this11.alert.error("Something went wrong.");
            });
          } //get user joining details from local db

        }, {
          key: "getTchrJoiningLocalDB",
          value: function getTchrJoiningLocalDB() {
            var _this12 = this;

            var query = "SELECT * FROM TchrJoiningDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this12.TchrJoiningDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this12.TchrJoiningDetails.push(data.rows.item(i));
                }
              }
            });
          } //insert user joining details to local db

        }, {
          key: "insertTchrJoiningDetailsLocalDB",
          value: function insertTchrJoiningDetailsLocalDB() {
            var datainsert = "INSERT INTO TchrJoiningDetailsDb VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

            for (var i = 0; i < this.TchrJoiningDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrJoiningDetails[i].designation, this.TchrJoiningDetails[i].appointedSub, this.TchrJoiningDetails[i].doj, this.TchrJoiningDetails[i].staff_pjoin, this.TchrJoiningDetails[i].doj_presentSchool, this.TchrJoiningDetails[i].doj_service, this.TchrJoiningDetails[i].doj_presentPostServc, this.TchrJoiningDetails[i].doj_presentStation, this.TchrJoiningDetails[i].cps_gps_details, this.TchrJoiningDetails[i].mode_frstApntmnt, this.TchrJoiningDetails[i].appointment_nature]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //check user contact details from local db

        }, {
          key: "checkLocalContactInfo",
          value: function checkLocalContactInfo() {
            var _this13 = this;

            this.sqliteDB.checkDataExists("TchrContactDetailsDb").then(function (data) {
              if (data == true) {
                _this13.getTchrCommuniLocalDB();
              } else {
                _this13.getTeachrContactInfo();
              }
            }, function (error) {
              _this13.alert.error("Something went wrong.");
            });
          } //get user communication details from local db

        }, {
          key: "getTchrCommuniLocalDB",
          value: function getTchrCommuniLocalDB() {
            var _this14 = this;

            var query = "SELECT * FROM TchrContactDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this14.TchrContactDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this14.TchrContactDetails.push(data.rows.item(i));
                }
              }
            }, function (error) {
              _this14.alert.error("Something went wrong.");
            });
          } //insert user contact details to local db

        }, {
          key: "insertTchrContactInfoDB",
          value: function insertTchrContactInfoDB() {
            var datainsert = "INSERT INTO TchrContactDetailsDb VALUES (?,?,?,?,?,?,?,?,?)";

            for (var i = 0; i < this.TchrContactDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrContactDetails[i].cityName, this.TchrContactDetails[i].district, this.TchrContactDetails[i].doorNo, this.TchrContactDetails[i].e_prsnt_distrct, this.TchrContactDetails[i].email_id, this.TchrContactDetails[i].mbl_nmbr, this.TchrContactDetails[i].pincode, this.TchrContactDetails[i].streetName]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //check user training details from local db

        }, {
          key: "checkLocalTrainingInfo",
          value: function checkLocalTrainingInfo() {
            var _this15 = this;

            this.sqliteDB.checkDataExists("TchrTrainingDetailsDb").then(function (data) {
              if (data == true) {
                _this15.getTchrTrainingDetLocal();
              } else {
                _this15.getTechrTrainingInfo();
              }
            }, function (error) {
              _this15.alert.error("Something went wrong.");
            });
          } //get user training details from local db

        }, {
          key: "getTchrTrainingDetLocal",
          value: function getTchrTrainingDetLocal() {
            var _this16 = this;

            var query = "SELECT * FROM TchrTrainingDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this16.TchrTrainingDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this16.TchrTrainingDetails.push(data.rows.item(i));
                }
              }
            }, function (error) {
              _this16.alert.error("Something went wrong.");
            });
          } //insert user training details to local db

        }, {
          key: "insertTchrTrainingInfo",
          value: function insertTchrTrainingInfo() {
            var datainsert = "INSERT INTO TchrTrainingDetailsDb VALUES (?,?,?,?,?,?,?)";

            for (var i = 0; i < this.TchrTrainingDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrTrainingDetails[i].trng_received, this.TchrTrainingDetails[i].trng_needed, this.TchrTrainingDetails[i].trained_comp, this.TchrTrainingDetails[i].trained_cwsn, this.TchrTrainingDetails[i].class_taught, this.TchrTrainingDetails[i].nonTeachingDays]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //check user subject details from local db

        }, {
          key: "checkLocalMainSubInfo",
          value: function checkLocalMainSubInfo() {
            var _this17 = this;

            this.sqliteDB.checkDataExists("TchrMainSubDetailDb").then(function (data) {
              if (data == true) {
                _this17.getTchrMainSubLocal();
              } else {
                _this17.getTechrMainsubjectInfo();
              }
            }, function (error) {
              _this17.alert.error("Something went wrong.");
            });
          } //get user subject details from local db

        }, {
          key: "getTchrMainSubLocal",
          value: function getTchrMainSubLocal() {
            var _this18 = this;

            var query = "SELECT * FROM TchrMainSubDetailDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this18.TchrMainSubDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this18.TchrMainSubDetails.push(data.rows.item(i));
                }
              }
            }, function (error) {
              _this18.alert.error("Something went wrong.");
            });
          } //insert user sub details to local db

        }, {
          key: "insertTchrMainSubInfo",
          value: function insertTchrMainSubInfo() {
            var datainsert = "INSERT INTO TchrMainSubDetailDb VALUES (?,?,?,?,?)";

            for (var i = 0; i < this.TchrMainSubDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrMainSubDetails[i].class_taught, this.TchrMainSubDetails[i].subject1_name, this.TchrMainSubDetails[i].subject2_name, this.TchrMainSubDetails[i].subject3_name]).then(function (insertres) {
                if (insertres) {}
              });
            }
          } //check user bank details from local db

        }, {
          key: "checkLocalBankDetInfo",
          value: function checkLocalBankDetInfo() {
            var _this19 = this;

            this.sqliteDB.checkDataExists(" TchrBankDetDb").then(function (data) {
              if (data == true) {
                _this19.getTchrBankDetLocal();
              } else {
                _this19.getTechrBankDetInfo();
              }
            }, function (error) {
              _this19.alert.error("Something went wrong.");
            });
          } //get user bank details from local db

        }, {
          key: "getTchrBankDetLocal",
          value: function getTchrBankDetLocal() {
            var _this20 = this;

            var query = "SELECT * FROM  TchrBankDetDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this20.TchrBankDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this20.TchrBankDetails.push(data.rows.item(i));
                }
              }
            });
          } //insert user back details to local db

        }, {
          key: "insertBankDetInfo",
          value: function insertBankDetInfo() {
            var datainsert = "INSERT INTO TchrBankDetDb VALUES (?,?,?,?,?)";

            for (var i = 0; i < this.TchrBankDetails.length; i++) {
              this.sqliteDB.insert(datainsert, [null, this.TchrBankDetails[i].ifscCode, this.TchrBankDetails[i].bankBranch, this.TchrBankDetails[i].bankName, this.TchrBankDetails[i].bankAcc]).then(function (insertres) {});
            }
          }
        }]);
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePage);
      /***/
    },

    /***/
    85567:
    /*!***************************************************************!*\
      !*** ./src/app/pages/leave/profile/profile/profile.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\n.bold {\n  color: black;\n}\n\nion-col {\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 5px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtMTAge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnVzZXItaWNvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    83112:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/profile/profile/profile.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">{{\r\n        (this.id == \"1\") ? \"Personal Information\" :\r\n        (this.id == \"2\") ? \"Acadamic Qualification\" :\r\n        (this.id == \"3\") ? \"Joining Details\" :\r\n        (this.id == \"4\") ? \"Communication Details\" :\r\n        (this.id == \"5\") ? \"Training Details\":\r\n        (this.id == \"6\") ? \"Main subjects Taught\" : \"Bank Details\"\r\n        }}</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"leave-container\">\r\n    <ion-card *ngIf=\"this.id =='1'\">\r\n      <ion-row *ngFor=\"let item of TchrPersonalDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.teacher_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Name of the staff</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.teacher_name_tamil}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Aadhaar Number</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.aadhar_no}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Gender</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.gender == '1' ? 'Male' : 'Female' }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Blood Group</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.group) || (item.Grup)}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Birth</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.staff_dob}}</ion-label> -->\r\n          {{(item.staff_dob == \"0\") ? \"-\" : item.staff_dob | date:'dd/MMM/y'}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Social Category</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.social_cat}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Father's Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.e_prnts_nme}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Mother's Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.teacher_mother_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Spouse Name,If appilcable</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.teacher_spouse_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Differently abled type,If any</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.disability_type}}</ion-label> -->\r\n          <label>{{\r\n            (item.disability_type == \"1\") ? \"Not Applicable\" :\r\n            (item.disability_type == \"2\") ? \"Physically Challenged\" :\r\n            (item.disability_type == \"3\") ? \"Visually Impaired\" :\r\n            (item.disability_type == \"4\") ? \"Hearing Impaired\" :\r\n            (item.disability_type == \"5\") ? \"others\" : \"Loco motor\"\r\n            }}</label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n\r\n    <!-- have to refer website emis code -->\r\n    <ion-card *ngIf=\"this.id =='2'\">\r\n      <ion-row *ngFor=\"let item of TchrAcadamicDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Academic</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.academicQualify}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Professional</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>{{item.profQualify}} </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>UG Month of Passing</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.ugMonthPass}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>UG Year of Passing</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.ugYearPass}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>PG Month of Passing</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.pgMonthPass}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>PG Year of Passing</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.pgYearPass}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Present Block / Zone</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.presentBlock}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Previous District</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.prevDistrict}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Previous Block / Zone</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.prevBlock}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Passed Departmental Exam</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.pasdDeptExam}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Science Studied upto</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.science_upto}}</ion-label> -->\r\n          {{\r\n          (item.science_upto == \"1\") ? \"Below secondary\" :\r\n          (item.science_upto == \"2\") ? \"Secondary\" :\r\n          (item.science_upto == \"3\") ? \"Higher secondary\" :\r\n          (item.science_upto == \"4\") ? \"Graduate\" :\r\n          (item.science_upto == \"5\") ? \"Post graduate\" :\r\n          (item.science_upto == \"6\") ? \"M.Phil.\" :\r\n          (item.science_upto == \"7\") ? \"Ph.D.\" : \"Post-Doctoral\"\r\n          }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Maths Studied Upto</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.math_upto}}</ion-label> -->\r\n          {{\r\n          (item.math_upto == \"1\") ? \"Below secondary\" :\r\n          (item.math_upto == \"2\") ? \"Secondary\" :\r\n          (item.math_upto == \"3\") ? \"Higher secondary\" :\r\n          (item.math_upto == \"4\") ? \"Graduate\" :\r\n          (item.math_upto == \"5\") ? \"Post graduate\" :\r\n          (item.math_upto == \"6\") ? \"M.Phil.\" :\r\n          (item.math_upto == \"7\") ? \"Ph.D.\" : \"Post-Doctoral\"\r\n          }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>English Studied Upto</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.english_upto}}</ion-label> -->\r\n          <ion-label>{{\r\n            (item.english_upto == \"1\") ? \"Below secondary\" :\r\n            (item.english_upto == \"2\") ? \"Secondary\" :\r\n            (item.english_upto == \"3\") ? \"Higher secondary\" :\r\n            (item.english_upto == \"4\") ? \"Graduate\" :\r\n            (item.english_upto == \"5\") ? \"Post graduate\" :\r\n            (item.english_upto == \"6\") ? \"M.Phil.\" :\r\n            (item.english_upto == \"7\") ? \"Ph.D.\" : \"Post-Doctoral\"\r\n            }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Social Studied Studied Upto</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.soc_study_upto}}</ion-label> -->\r\n          {{\r\n          (item.soc_study_upto == \"1\") ? \"Below secondary\" :\r\n          (item.soc_study_upto == \"2\") ? \"Secondary\" :\r\n          (item.soc_study_upto == \"3\") ? \"Higher secondary\" :\r\n          (item.soc_study_upto == \"4\") ? \"Graduate\" :\r\n          (item.soc_study_upto == \"5\") ? \"Post graduate\" :\r\n          (item.soc_study_upto == \"6\") ? \"M.Phil.\" :\r\n          (item.soc_study_upto == \"7\") ? \"Ph.D.\" : \"Post-Doctoral\"\r\n          }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Language (as per Schedule VIII) studied up to</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label>{{item.lang_study_upto}}</ion-label> -->\r\n          <ion-label>{{\r\n            (item.lang_study_upto == \"1\") ? \"Below secondary\" :\r\n            (item.lang_study_upto == \"2\") ? \"Secondary\" :\r\n            (item.lang_study_upto == \"3\") ? \"Higher secondary\" :\r\n            (item.lang_study_upto == \"4\") ? \"Graduate\" :\r\n            (item.lang_study_upto == \"5\") ? \"Post graduate\" :\r\n            (item.lang_study_upto == \"6\") ? \"M.Phil.\" :\r\n            (item.lang_study_upto == \"7\") ? \"Ph.D.\" : \"Post-Doctoral\"\r\n            }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.id =='3'\">\r\n      <ion-row *ngFor=\"let item of TchrJoiningDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Designation of Staff</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.designation}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Appointed for the Subject</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.appointedSub}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.doj == \"0\") ? \"-\" : item.doj | date:'dd/MMM/y'}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining in Present Post</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.staff_pjoin == \"0\") ? \"-\" : item.staff_pjoin | date:'dd/MMM/y'}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining in Present School/Institution</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.staff_pjoin == \"0\") ? \"-\" : item.staff_pjoin | date:'dd/MMM/y'}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining in Service</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.doj_service == \"0\") ? \"-\" : item.doj_service | date:'dd/MMM/y'}}</ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\">\r\n          <ion-label>Date of Joining in Service</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>xxxx</ion-label>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining in Present Post Service</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.doj_presentPostServc == \"0\") ? \"-\" : item.doj_presentPostServc | date:'dd/MMM/y'}}\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Date of Joining in Present Station</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label> {{item.doj_presentStation | date}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>GPF/CPS/EPF Details</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.cps_gps_details}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Mode of First Appointment</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.mode_frstApntmnt}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Nature of appointment</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{\r\n            (item.appointment_nature == \"1\") ? \"Regular\" :\r\n            (item.appointment_nature == \"2\") ? \"Contract\" : \"Part-Time\"\r\n            }}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.id =='4'\">\r\n      <ion-row *ngFor=\"let item of TchrContactDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Mobile Number </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.mbl_nmbr}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>E-Mail ID</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label> {{item.email_id}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Door no/Building Name </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.doorNo}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Street Name/Area name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.streetName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>City name/ Village name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.cityName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>District </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.district}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Pincode</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.pincode}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.id =='5'\">\r\n      <ion-row *ngFor=\"let item of TchrTrainingDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Training Received</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label> {{\r\n            (item.trng_received == \"0\") ? \"Not required\" :\r\n            (item.trng_received == \"1\") ? \"Subject knowledge\" :\r\n            (item.trng_received == \"2\") ? \"Pedagogical Issues\" :\r\n            (item.trng_received == \"3\") ? \"ICT Skills\" :\r\n            (item.trng_received == \"4\") ? \"Knowledge and skills to engage with CWSN\" :\r\n            (item.trng_received == \"5\") ? \"Leadership and management skills\" :\r\n            (item.trng_received == \"6\") ? \"Sanitation & Hygiene\" : \"Others\"\r\n            }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Training Need</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{\r\n            (item.trng_needed == \"0\") ? \"Not required\" :\r\n            (item.trng_needed == \"1\") ? \"Subject knowledge\" :\r\n            (item.trng_needed == \"2\") ? \"Pedagogical Issues\" :\r\n            (item.trng_needed == \"3\") ? \"ICT Skills\" :\r\n            (item.trng_needed == \"4\") ? \"Knowledge and skills to engage with CWSN\" :\r\n            (item.trng_needed == \"5\") ? \"Leadership and management skills\" :\r\n            (item.trng_needed == \"6\") ? \"Sanitation & Hygiene\" : \"Others\"\r\n            }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Trained In Computers for Teaching Class Taught</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.trained_comp == \"1\") ? \"Yes\" : \"No\"}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Trained to Teach CWSN Students</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{(item.trained_cwsn == \"1\") ? \"Yes\" : \"No\"}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Class Taught</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{\r\n            (item.class_taught == \"1\") ? \"Primary only\" :\r\n            (item.class_taught == \"2\") ? \"Upper primary only\" :\r\n            (item.class_taught == \"3\") ? \"Primary and Upper Primary\" :\r\n            (item.class_taught == \"4\") ? \"Secondary only\" :\r\n            (item.class_taught == \"5\") ? \"Higher Secondary only\" :\r\n            (item.class_taught == \"6\") ? \"Upper primary and Secondary\" :\r\n            (item.class_taught == \"7\") ? \"Secondary and Higher Secondary\" :\r\n            (item.class_taught == \"8\") ? \"Pre-Primary only\" : \"Pre-Primary and Primary\"\r\n            }}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Non teachning assignments in Last Academic Year</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.nonTeachingDays}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.id =='6'\">\r\n      <ion-row *ngFor=\"let item of TchrMainSubDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Main subject taught</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.class_taught}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Subject 1</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.subject1_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Subject 2</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.subject2_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Subject 3</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.subject3_name}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.id =='7'\">\r\n      <ion-row *ngFor=\"let item of TchrBankDetails\">\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Indian Finacial System Code </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.ifscCode}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Branch Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.bankBranch}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Bank Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.bankName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"bold\">\r\n          <ion-label>Account Number</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-label>{{item.bankAcc}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_leave_profile_profile_profile_module_ts-es5.js.map