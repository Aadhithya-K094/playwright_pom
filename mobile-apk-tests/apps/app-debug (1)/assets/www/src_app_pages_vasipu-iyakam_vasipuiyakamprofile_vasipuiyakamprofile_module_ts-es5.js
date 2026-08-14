(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuiyakamprofile_vasipuiyakamprofile_module_ts"], {
    /***/
    44506:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamprofile/vasipuiyakamprofile-routing.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamprofilePageRoutingModule": function VasipuiyakamprofilePageRoutingModule() {
          return (
            /* binding */
            _VasipuiyakamprofilePageRoutingModule
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


      var _vasipuiyakamprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuiyakamprofile.page */
      47888);

      var routes = [{
        path: '',
        component: _vasipuiyakamprofile_page__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamprofilePage
      }];

      var _VasipuiyakamprofilePageRoutingModule = /*#__PURE__*/_createClass(function VasipuiyakamprofilePageRoutingModule() {
        _classCallCheck(this, VasipuiyakamprofilePageRoutingModule);
      });

      _VasipuiyakamprofilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VasipuiyakamprofilePageRoutingModule);
      /***/
    },

    /***/
    8681:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamprofile/vasipuiyakamprofile.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamprofilePageModule": function VasipuiyakamprofilePageModule() {
          return (
            /* binding */
            _VasipuiyakamprofilePageModule
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


      var _vasipuiyakamprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuiyakamprofile-routing.module */
      44506);
      /* harmony import */


      var _vasipuiyakamprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuiyakamprofile.page */
      47888);

      var _VasipuiyakamprofilePageModule = /*#__PURE__*/_createClass(function VasipuiyakamprofilePageModule() {
        _classCallCheck(this, VasipuiyakamprofilePageModule);
      });

      _VasipuiyakamprofilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _vasipuiyakamprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamprofilePageRoutingModule],
        declarations: [_vasipuiyakamprofile_page__WEBPACK_IMPORTED_MODULE_1__.VasipuiyakamprofilePage]
      })], _VasipuiyakamprofilePageModule);
      /***/
    },

    /***/
    47888:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamprofile/vasipuiyakamprofile.page.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamprofilePage": function VasipuiyakamprofilePage() {
          return (
            /* binding */
            _VasipuiyakamprofilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_vasipuiyakamprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vasipuiyakamprofile.page.html */
      23473);
      /* harmony import */


      var _vasipuiyakamprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuiyakamprofile.page.scss */
      93920);
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
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);

      var _VasipuiyakamprofilePage = /*#__PURE__*/function () {
        function VasipuiyakamprofilePage(router, userService, usersessionService, sqliteDB, NetworkService) {
          _classCallCheck(this, VasipuiyakamprofilePage);

          this.router = router;
          this.userService = userService;
          this.usersessionService = usersessionService;
          this.sqliteDB = sqliteDB;
          this.NetworkService = NetworkService;
          this.checkBox = true;
          this.dataList = [];
          this.isInputDisabled1 = false;
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(VasipuiyakamprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.filterActive = false;
            this.isInputDisabled = true; // this.getServerData()

            this.localData();
            this.localDataForBank();
          }
        }, {
          key: "localDataForBank",
          value: function localDataForBank() {
            var _this = this;

            var query = 'SELECT * FROM viBankDetails';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.dataList1 = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.dataList1.push(data.rows.item(i));
                }

                _this.allBankDetails = _this.dataList1;
                console.log('in Local Bank');
              } else {
                _this.getServerDataForBank();
              }
            });
          }
        }, {
          key: "getServerDataForBank",
          value: function getServerDataForBank() {
            var _this2 = this;

            fetch('https://d1wpyxz35bzzz4.cloudfront.net/bank_details_json.json').then(function (res) {
              return res.json();
            }).then(function (manage) {
              console.log("in Server Bank");
              _this2.allBankDetails = manage.bank_details;

              _this2.insertLocalDataForBank(_this2.allBankDetails);
            });
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this3 = this;

            this.ambastorListData = []; // this.userService.viProfileDetail(this.emis_username).subscribe((response) => {

            fetch('https://d1wpyxz35bzzz4.cloudfront.net/vi_user_bank_detail_json.json').then(function (res) {
              return res.json();
            }).then(function (manage) {
              if (manage) {
                _this3.ambastorListData = manage.filter(function (item) {
                  return item.UserId == _this3.emis_username;
                });

                _this3.insertLocalData(_this3.ambastorListData); // this.ambastorListData = response.result


                console.log('in server');
                _this3.userStatus = _this3.ambastorListData[0].Status;

                _this3.form.patchValue(_this3.ambastorListData[0]);

                _this3.userStatus == 0 ? _this3.form.enable() : _this3.form.disable(); // this.form.controls['Name'].disable();
                // this.form.controls['Dob'].disable();
                // this.form.controls['Phone'].disable();
                // this.form.controls['Branch'].disable();
                // this.form.controls['BankName'].disable();
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var insertRows = [];
            insertRows.push(["INSERT INTO vasipuIyakam VALUES (?,?,?,?,?,?,?,?,?,?,?)", [null, elementData[0].Status, elementData[0].Name, elementData[0].Dob, elementData[0].Phone, elementData[0].AadharNo, elementData[0].AccNo, elementData[0].IfscCode, elementData[0].Branch, elementData[0].BankName, elementData[0].UserId]]);
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }, {
          key: "insertLocalDataForBank",
          value: function insertLocalDataForBank(elementData) {
            var insertBank = [];
            insertBank.push(["INSERT INTO viBankDetails VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [null, elementData[0].bank, elementData[0].bank_dist_id, elementData[0].bank_id, elementData[0].bank_name, elementData[0].branch, elementData[0].branch_add, elementData[0].city, elementData[0].contact_no, elementData[0].district_name, elementData[0].ifsc_code, elementData[0].micr_code]]);
            this.sqliteDB.bulkInsert(insertBank).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }, {
          key: "localData",
          value: function localData() {
            var _this4 = this;

            var query = 'SELECT * FROM vasipuIyakam';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this4.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.dataList.push(data.rows.item(i));
                }

                _this4.ambastorListData = [];
                _this4.ambastorListData = _this4.dataList;
                console.log('in local', _this4.ambastorListData);
                _this4.userStatus = _this4.ambastorListData[0].Status;

                _this4.form.patchValue(_this4.ambastorListData[0]);

                _this4.userStatus == 0 ? _this4.form.enable() : _this4.form.disable(); // this.form.controls['Name'].disable();
                // this.form.controls['Dob'].disable();
                // this.form.controls['Phone'].disable();
                // this.form.controls['Branch'].disable();
                // this.form.controls['BankName'].disable();

                console.log(_this4.form);
              } else {
                _this4.getServerData();
              }
            });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
              Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              Dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              AadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$')]),
              AccNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              IfscCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              Branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              BankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/vasipu-iyakam']);
          }
        }, {
          key: "onEdit",
          value: function onEdit() {
            var _this5 = this;

            var phone = this.form.controls['Phone'].value.toString();

            if (phone.length != 10) {
              return this.form.controls['Phone'].setErrors({
                'PhoneNO': true
              });
            }

            if (this.form.valid) {
              this.form.value.Status = 1;
              this.form.value.UserId = this.emis_username;
              var data = {
                "records": {
                  Name: this.form.value.Name,
                  Phone: this.form.value.Phone,
                  AadharNo: this.form.value.AadharNo,
                  AccNo: this.form.value.AccNo,
                  Dob: this.form.value.Dob,
                  IfscCode: this.form.value.IfscCode,
                  Branch: this.form.value.Branch,
                  BankName: this.form.value.BankName,
                  UserId: this.emis_username,
                  Status: 1
                }
              };
              console.log(data, "data", this.form);
              this.userStatus = 1; // this.userStatus == 0 ? this.form.enable() : this.form.disable();

              this.userService.viProfileEdit(data).subscribe(function (response) {
                _this5.updateprofileData(); // this.router.navigate(['/tabs/vasipu-iyakam']);

              });
            } else {
              console.log("no insert");
            }
          }
        }, {
          key: "autoSync",
          value: function autoSync() {
            debugger;

            if (this.NetworkService.getCurrentNetworkStatus() == 0) {
              console.log("online");
              this.onEdit();
            } else {
              var phone = this.form.controls['Phone'].value.toString();

              if (phone.length != 10) {
                return this.form.controls['Phone'].setErrors({
                  'PhoneNO': true
                });
              }

              this.userStatus = 0; // this.userStatus == 0 ? this.form.enable() : this.form.disable();

              console.log("offline");
              this.updateprofileData();
            }
          }
        }, {
          key: "updateprofileData",
          value: function updateprofileData() {
            var _this6 = this;

            var query = 'UPDATE vasipuIyakam SET Status="' + this.userStatus + '", AadharNo="' + this.form.value.AadharNo + '", Name="' + this.form.value.Name + '",Dob="' + this.form.value.Dob + '", Phone="' + this.form.value.Phone + '", AccNo="' + this.form.value.AccNo + '", IfscCode="' + this.form.value.IfscCode + '", Branch="' + this.form.value.Branch + '", BankName="' + this.form.value.BankName + '" WHERE UserId = ' + this.emis_username;
            return this.sqliteDB.update(query).then(function (res) {
              _this6.router.navigate(['/tabs/vasipu-iyakam']);

              console.log("Updated In server");
            });
          }
        }, {
          key: "acceptNotes",
          value: function acceptNotes(event) {
            this.checkBox = event.target.checked;
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this7 = this;

            debugger;
            this.searchData = [];
            this.searchTerm = event.trim();

            if (this.searchTerm.length > 3) {
              if (this.searchTerm) {
                this.searchData = this.allBankDetails.filter(function (item) {
                  return item.ifsc_code.toLowerCase().includes(_this7.searchTerm.toLowerCase());
                });
                this.filterActive = true;
              } else {
                this.searchData = this.allBankDetails;
                this.filterActive = true;
              }
            }
          }
        }, {
          key: "patchItems",
          value: function patchItems(event) {
            var _this8 = this;

            this.searchData = [];
            this.filterActive = false;
            this.searchTerm = event.trim();

            if (this.searchTerm) {
              this.searchData = this.allBankDetails.filter(function (item) {
                return item.ifsc_code.toLowerCase().includes(_this8.searchTerm.toLowerCase());
              });
            }

            this.form.controls['IfscCode'].setValue(this.searchData[0].ifsc_code);
            this.form.controls['IfscCode'].updateValueAndValidity;

            if (this.searchData[0].ifsc_code == this.form.controls['IfscCode'].value) {
              this.form.controls['Branch'].setValue(null);
              this.form.controls['Branch'].setValue(this.searchData[0].branch);
              this.form.controls['Branch'].updateValueAndValidity;
              this.form.controls['BankName'].setValue(null);
              this.form.controls['BankName'].setValue(this.searchData[0].bank_name);
              this.form.controls['BankName'].updateValueAndValidity;
            }
          }
        }]);
      }();

      _VasipuiyakamprofilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }];
      };

      _VasipuiyakamprofilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vasipuiyakamprofile',
        template: _raw_loader_vasipuiyakamprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vasipuiyakamprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VasipuiyakamprofilePage);
      /***/
    },

    /***/
    93920:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamprofile/vasipuiyakamprofile.page.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".textCard {\n  padding: 3% !important;\n  margin: 0%;\n  border: solid 1px #134A54;\n  margin-top: 3%;\n}\n\n.card-row {\n  border-radius: 50px;\n  border-top: 1px solid #134A54;\n  background-color: #FFFFFF;\n  margin-top: 20%;\n  height: 100%;\n}\n\n.inputText {\n  margin: 0%;\n  border: solid 1px #134A54;\n  margin-top: 3%;\n}\n\n.cardText {\n  margin: 1%;\n  padding: 3%;\n}\n\n.newprimaryTex {\n  padding-top: 2%;\n}\n\nion-label {\n  font-weight: bold;\n  color: #114a53;\n}\n\n.textItem {\n  padding-left: 2%;\n  padding-right: 2%;\n  background-color: #F6F6F6;\n}\n\nion-input {\n  padding-left: 3% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdWl5YWthbXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBRUUsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGIiwiZmlsZSI6InZhc2lwdWl5YWthbXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAudGV4dENhcmQge1xyXG4gICAgcGFkZGluZzogMyUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMTM0QTU0O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1yb3cge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTM0QTU0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbnB1dFRleHQge1xyXG4gICAgLy8gcGFkZGluZzogMSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMTM0QTU0O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfVxyXG5cclxuICAuY2FyZFRleHQge1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuXHJcbiAgLm5ld3ByaW1hcnlUZXgge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMxMTRhNTM7XHJcbn1cclxuXHJcbi50ZXh0SXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    23473:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuiyakamprofile/vasipuiyakamprofile.page.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>கருத்தாளரின் விவரம்</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{emis_username}}</div>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n    <form [formGroup]=\"form\">\r\n      <ion-row class=\"cardText\">\r\n        <ion-col size=\"12\" class=\"newprimaryTex textItem\">\r\n          <P style=\"padding-top: 1.5rem;\">\r\n           ⦿ கீழே உள்ள படிவத்தை முழுமையாக பூர்த்தி செய்யவும். </P>\r\n          <P style=\"padding-top: 0.5rem;\">\r\n             ⦿ குறிப்பிடப்பட்ட தகவல்களில் ஏதேனும் தவறு இருப்பின் திருத்தம் செய்யவும். </P>\r\n          <P style=\"padding-top: 0.5rem;\">\r\n             ⦿ கீழே உள்ள படிவத்தை சமர்ப்பித்த பின்பு திருத்தம் செய்ய இயலாது. </P>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"this.userStatus == '0'\">\r\n          <ion-label> Please Update your profile </ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> கருத்தாளார் ஐடி </ion-label>\r\n          <ion-card class=\"textCard\">{{emis_username}}</ion-card>\r\n        </ion-col>\r\n          \r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> பெயர் </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"Name\" class=\"inputText\"></ion-input>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> பிறந்த தேதி </ion-label>\r\n          <ion-datetime  class=\"textCard\" formControlName=\"Dob\" ></ion-datetime>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> தொலைபேசி எண் </ion-label>\r\n          <ion-input class=\"inputText\" type=\"tel\" formControlName=\"Phone\"\r\n          maxlength='10'></ion-input>\r\n          <small style=\"color: red;\" *ngIf=\"(form.get('Phone').invalid && form.get('Phone').dirty)\">Invalid Phone number</small>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> ஆதார் எண்</ion-label>\r\n          <ion-input class=\"inputText\" type=\"number\" formControlName=\"AadharNo\"></ion-input>\r\n          <small style=\"color: red;\" *ngIf=\"(form.get('AadharNo').invalid && form.get('AadharNo').dirty)\">Invalid aadhaar number</small>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> வங்கி கணக்கு எண் </ion-label>\r\n          <ion-input class=\"inputText\" type=\"tel\" formControlName=\"AccNo\" maxlength=\"18\" minlength=\"9\"></ion-input>\r\n          <small style=\"color: red;\" *ngIf=\"(form.get('AccNo').invalid && form.get('AccNo').dirty)\">Invalid AccNumber</small>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\">\r\n          <ion-label> IFSC Code </ion-label>\r\n          <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"border: 1px solid;margin: 3%;\">\r\n              <ion-input type=\"text\" formControlName=\"IfscCode\" (ionChange)=\"getFilterItems($event.detail.value)\"></ion-input>\r\n              <small style=\"color: red;\" *ngIf=\"(form.get('IfscCode').invalid && form.get('IfscCode').dirty)\">Invalid IFSC Code</small>\r\n              <ion-icon name=\"search\" slot=\"end\" (click)=\"getFilterItems(form.value.IfscCode)\" style=\"color: #6B4DC9;\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n\r\n            <!-- <ion-col size=\"10\">\r\n              <ion-input class=\"inputText\" type=\"text\" formControlName=\"IfscCode\"></ion-input>\r\n              <small style=\"color: red;\" *ngIf=\"(form.get('IfscCode').invalid && form.get('IfscCode').dirty)\">Invalid IFSC Code</small>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <button (click)=\"getFilterItems($event.detail.value)\">\r\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n              </button>\r\n            </ion-col> -->\r\n          </ion-row>\r\n         </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\" *ngIf=\"filterActive\">\r\n          <ion-row style=\"margin: 5%;\">\r\n            <!-- <ion-col size=\"12\" style=\"background-color: #6B4DC9;color: white;text-align: center;\">வங்கி தகவல்\r\n            </ion-col> -->\r\n            <ion-col size=\"12\" class=\"newsecondaryTex\" style=\"padding-left: 5%; padding-right: 5%;\" \r\n            *ngFor=\"let item of searchData\">\r\n              <div (click)=\"patchItems(item.ifsc_code)\"> {{item.bank_name}} - {{item.branch}}</div>\r\n              <div (click)=\"patchItems(item.ifsc_code)\" style=\"border-bottom: 1px solid #ccc\"> {{item.ifsc_code}} - {{item.micr_code}}\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n\r\n        <ion-col size=\"12\" class=\"newsecondaryTex\" *ngIf=\"form.value.Branch\">\r\n          <ion-label> வங்கிக்கிளை </ion-label>\r\n          <ion-card class=\"textCard\">{{form.value.Branch}}</ion-card>\r\n          <!-- <ion-input formControlName=\"Branch\" [disabled]=\"isInputDisabled\"></ion-input> -->\r\n        </ion-col>\r\n        \r\n        <ion-col size=\"12\" class=\"newsecondaryTex\" *ngIf=\"form.value.BankName\">\r\n          <ion-label> வங்கி பெயர் </ion-label>\r\n          <ion-card class=\"textCard\">{{form.value.BankName}}</ion-card>\r\n          <!-- <ion-input formControlName=\"BankName\" [disabled]=\"isInputDisabled1\"></ion-input> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"background-color: transparent !important;\" *ngIf=\"form.valid && userStatus == 0\">\r\n  <ion-row>\r\n\r\n    <!-- <ion-col size=\"12\" style=\"padding-left:3%; font-weight: bold;\">\r\n      குறிப்பு :\r\n    </ion-col> -->\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-row style=\"padding-left:5%; padding-right:5%; text-align: justify; font-size: small;\">\r\n        <ion-col size=\"1\" style=\"display: flex; align-items: center;\">\r\n          <ion-checkbox labelPlacement=\"end\" (click)=\"acceptNotes($event)\"></ion-checkbox>\r\n        </ion-col>\r\n        <ion-col size=\"11\" class=\"newsecondaryTex\">\r\n          மேலே கொடுக்கப்பட்ட தகவல்கள் அனைத்தும் உண்மை.\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"6\" style=\"text-align: center;\" (click)=\"autoSync()\">\r\n      <button [disabled]=\"checkBox\" style=\"background: transparent;\"><img [ngClass]=\"{'btn-dbl' : checkBox == true}\" src=\"/assets/images/vasipuiyagam/savebutton.svg\" class=\"menuicon\"></button>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"6\" style=\"text-align: center;\" (click)=\"navigateBack()\">\r\n      <button style=\"background: transparent;\"><img src=\"/assets/images/vasipuiyagam/close.svg\" class=\"menuicon\"></button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuiyakamprofile_vasipuiyakamprofile_module_ts-es5.js.map