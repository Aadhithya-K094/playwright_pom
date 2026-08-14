(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_civilbuildinglist_civilbuildinglist_module_ts"], {
    /***/
    23751:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/civil/civil/civilbuildinglist/civilbuildinglist-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CivilbuildinglistPageRoutingModule": function CivilbuildinglistPageRoutingModule() {
          return (
            /* binding */
            _CivilbuildinglistPageRoutingModule
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


      var _civilbuildinglist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./civilbuildinglist.page */
      62421);

      var routes = [{
        path: '',
        component: _civilbuildinglist_page__WEBPACK_IMPORTED_MODULE_0__.CivilbuildinglistPage
      }];

      var _CivilbuildinglistPageRoutingModule = /*#__PURE__*/_createClass(function CivilbuildinglistPageRoutingModule() {
        _classCallCheck(this, CivilbuildinglistPageRoutingModule);
      });

      _CivilbuildinglistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CivilbuildinglistPageRoutingModule);
      /***/
    },

    /***/
    54703:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/civilbuildinglist/civilbuildinglist.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CivilbuildinglistPageModule": function CivilbuildinglistPageModule() {
          return (
            /* binding */
            _CivilbuildinglistPageModule
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


      var _civilbuildinglist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./civilbuildinglist-routing.module */
      23751);
      /* harmony import */


      var _civilbuildinglist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./civilbuildinglist.page */
      62421);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _CivilbuildinglistPageModule = /*#__PURE__*/_createClass(function CivilbuildinglistPageModule() {
        _classCallCheck(this, CivilbuildinglistPageModule);
      });

      _CivilbuildinglistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _civilbuildinglist_routing_module__WEBPACK_IMPORTED_MODULE_0__.CivilbuildinglistPageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_civilbuildinglist_page__WEBPACK_IMPORTED_MODULE_1__.CivilbuildinglistPage]
      })], _CivilbuildinglistPageModule);
      /***/
    },

    /***/
    62421:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/civil/civil/civilbuildinglist/civilbuildinglist.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CivilbuildinglistPage": function CivilbuildinglistPage() {
          return (
            /* binding */
            _CivilbuildinglistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_civilbuildinglist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./civilbuildinglist.page.html */
      79592);
      /* harmony import */


      var _civilbuildinglist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./civilbuildinglist.page.scss */
      81365);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/aws.service */
      56263);

      var _CivilbuildinglistPage = /*#__PURE__*/function () {
        function CivilbuildinglistPage(router, awsService, fb, geolocation, route, alertService) {
          _classCallCheck(this, CivilbuildinglistPage);

          this.router = router;
          this.awsService = awsService;
          this.fb = fb;
          this.geolocation = geolocation;
          this.route = route;
          this.alertService = alertService;
        }

        return _createClass(CivilbuildinglistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.Id = this.routeData.queryParams.Id;
            this.getBlockList();
            this.getLatLong();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              'district': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', null),
              'block': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              'school': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', null)
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this.locationCordinates = resp.coords;
              _this.lat = _this.locationCordinates.latitude;
              _this["long"] = _this.locationCordinates.longitude;
            })["catch"](function (error) {});
          }
        }, {
          key: "getBlockList",
          value: function getBlockList() {
            var _this2 = this;

            this.yearList = [{
              value: '2018-19',
              label: "2018-19"
            }, {
              value: '2019-20',
              label: "2019-20"
            }, {
              value: '2020-21',
              label: "2020-21"
            }];
            var userName = window.localStorage.getItem('username');
            this.awsService.getDistrictByUsername(userName).subscribe(function (res) {
              console.log(res, "res");

              if (res) {
                _this2.dist = res[0].district_id;

                _this2.form.controls['district'].setValue(_this2.dist);

                _this2.awsService.getBlockByDistId(_this2.form.value.district).subscribe(function (res) {
                  console.log(res, "res id", _this2.form.value);

                  if (res) {
                    var data = res;
                    _this2.blockList = data.map(function (l) {
                      return {
                        label: l.block_name,
                        value: l.id
                      };
                    });

                    _this2.blockList.sort(function (a, b) {
                      if (a.label < b.label) return -1;
                      if (a.label > b.label) return 1;
                      return 0;
                    });
                  }
                });
              }
            });

            if (this.form.valid) {
              this.getCivilConstructionList();
            }
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.form.controls.school.setValue('');

            if (this.form.valid) {
              this.getCivilConstructionList();
            }
          }
        }, {
          key: "getCivilConstructionList",
          value: function getCivilConstructionList() {
            var _this3 = this;

            this.schoolList = [];
            this.awsService.getCivilAllocateConst(this.form.value).subscribe(function (res) {
              if (res) {
                if (res[1].length > 0) {
                  _this3.NoStuData = false;
                  _this3.schoolList = res[1];
                } else {
                  _this3.NoStuData = true;
                }

                _this3.civilListData = [];
                _this3.civilListData = res[0];
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/dashboard']);
          }
        }, {
          key: "goToCivilQuestions",
          value: function goToCivilQuestions(construct) {
            var _this4 = this;

            //debugger
            if (this.form.valid) {
              if (this.lat && this["long"]) {
                var data = {
                  schId: construct.school_id,
                  bldtype: construct.building_type_id,
                  acyear: this.form.value.year
                };
                this.awsService.getEntryStatus(data).subscribe(function (res) {
                  _this4.router.navigate(['tabs/inspectiondetails'], {
                    queryParams: {
                      'surveyId': 4001,
                      'schoolId': _this4.form.value.school,
                      'constId': construct.building_type_id,
                      lat: _this4.lat,
                      "long": _this4["long"],
                      acyear: _this4.form.value.year,
                      Id: _this4.Id
                    },
                    skipLocationChange: false
                  }); // if (res.length > 0 && res[0].remaining != 0) {
                  //   this.router.navigate(['tabs/inspectiondetails'], { queryParams: { 'surveyId': 4001, 'schoolId': this.form.value.school, 'constId': construct.building_type_id, lat: this.lat, long: this.long, acyear: this.form.value.year, Id: this.Id }, skipLocationChange: false });
                  // }
                  // else {
                  //   this.alertService.error('Already Submitted for Today');
                  // }

                });
              } else {
                this.getLatLong();
                this.alertService.error('Please Enable Your Mobile Location');
              }
            }
          }
        }]);
      }();

      _CivilbuildinglistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_4__.AwsService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }];
      };

      _CivilbuildinglistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-civilbuildinglist',
        template: _raw_loader_civilbuildinglist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_civilbuildinglist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CivilbuildinglistPage);
      /***/
    },

    /***/
    81365:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/civil/civil/civilbuildinglist/civilbuildinglist.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  background-color: #8b67b3;\n  color: aliceblue;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.card-header {\n  padding-top: 0px;\n  padding-bottom: 13px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.add-row {\n  color: aliceblue;\n  font-weight: bold;\n}\n\n.add-card {\n  background-color: #8b67b3;\n  text-align: center;\n}\n\n.card-title {\n  background-color: #8b67b3;\n  color: aliceblue;\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n\n.back-icon {\n  color: aliceblue;\n}\n\n.imageAdd {\n  padding-left: 22px;\n  padding-bottom: 10px;\n}\n\n.list-build {\n  padding-top: 0.5px;\n  color: black;\n}\n\n.valid-clr {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdmlsYnVpbGRpbmdsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtBQU9KIiwiZmlsZSI6ImNpdmlsYnVpbGRpbmdsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjY3YjM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgLy8gaGVpZ2h0OiAzM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYWRkLXJvdyB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFkZC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjY3YjM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI2N2IzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi5pbWFnZUFkZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubGlzdC1idWlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnZhbGlkLWNsciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
      /***/
    },

    /***/
    79592:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/civilbuildinglist/civilbuildinglist.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Civil Inspection</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"padding-top:15px;padding-left:15px;padding-right:15px\">\r\n        <ion-item class=\"ion-margin-bottom\" lines=\"none\" style=\"margin-bottom: 0px;border-radius: 10px;\">\r\n          <ion-label position=\"floating\" class=\"ionlbl\"><span>\r\n              <img src=\"/assets/icons/Block.svg\">\r\n            </span> Block<span class=\"valid-clr\"> *</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"block\"\r\n            (ionChange)=\"onChange()\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of blockList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-label position=\"floating\" class=\"ionlbl\">\r\n            <img src=\"/assets/icons/year.svg\">\r\n            Year<span class=\"valid-clr\"> *</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"year\"\r\n            (ionChange)=\"onChange()\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of yearList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <div *ngIf=\"NoStuData || NoData\" style=\"padding:10%;color:#8B67B3\">\r\n    <ion-row class=\"text-message\">\r\n      <ion-col size=\"12\" style=\"text-align: center !important;\">\r\n        <ion-label>No Data Found</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <img class=\"loginLogo center\" src=\"assets/imgs/logo/nodata.png\" width=\"50%\" /> -->\r\n  </div>\r\n\r\n  <div *ngIf=\"!NoData && !NoStuData\" style=\"margin-bottom: 15px;\">\r\n    <div *ngFor=\"let data of schoolList\" style=\"background-color: white;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: 15px;border-radius: 5px;\">\r\n    <ion-row style=\"padding-bottom:10px\">\r\n      <ion-col size=\"12\" class=\"header\" style=\"padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;border-radius: 5px;\">\r\n        <ion-label>{{data.school_name}}</ion-label>\r\n      </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let item of civilListData\" style=\"padding-right: 5px;\r\n      padding-left: 5px;\">\r\n      <ion-col size=\"12\" class=\"list-build\"  *ngIf=\"data.school_id == item.school_id\" (click)=\"goToCivilQuestions(item)\">\r\n        <ion-row style=\"padding-top: 5px;\r\n        padding-bottom: 5px;\">\r\n          <ion-col size=\"10\">\r\n            {{item.building_type}}</ion-col>\r\n          <ion-col size=\"1\">\r\n            {{item.building_count}}</ion-col>\r\n          <ion-col size=\"1\">\r\n            <span><img src=\"assets/icons/slider-arrow.svg\" width=\"16px\"></span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_civil_civil_civilbuildinglist_civilbuildinglist_module_ts-es5.js.map