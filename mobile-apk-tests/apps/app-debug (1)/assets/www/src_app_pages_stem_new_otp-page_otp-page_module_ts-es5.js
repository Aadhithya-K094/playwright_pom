(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_otp-page_otp-page_module_ts"], {
    /***/
    58925:
    /*!********************************************************************!*\
      !*** ./src/app/pages/stem_new/otp-page/otp-page-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPagePageRoutingModule": function OtpPagePageRoutingModule() {
          return (
            /* binding */
            _OtpPagePageRoutingModule
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


      var _otp_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otp-page.page */
      67506);

      var routes = [{
        path: '',
        component: _otp_page_page__WEBPACK_IMPORTED_MODULE_0__.OtpPagePage
      }];

      var _OtpPagePageRoutingModule = /*#__PURE__*/_createClass(function OtpPagePageRoutingModule() {
        _classCallCheck(this, OtpPagePageRoutingModule);
      });

      _OtpPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtpPagePageRoutingModule);
      /***/
    },

    /***/
    86442:
    /*!************************************************************!*\
      !*** ./src/app/pages/stem_new/otp-page/otp-page.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPagePageModule": function OtpPagePageModule() {
          return (
            /* binding */
            _OtpPagePageModule
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


      var _otp_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otp-page-routing.module */
      58925);
      /* harmony import */


      var _otp_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp-page.page */
      67506);

      var _OtpPagePageModule = /*#__PURE__*/_createClass(function OtpPagePageModule() {
        _classCallCheck(this, OtpPagePageModule);
      });

      _OtpPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otp_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPagePageRoutingModule],
        declarations: [_otp_page_page__WEBPACK_IMPORTED_MODULE_1__.OtpPagePage]
      })], _OtpPagePageModule);
      /***/
    },

    /***/
    67506:
    /*!**********************************************************!*\
      !*** ./src/app/pages/stem_new/otp-page/otp-page.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpPagePage": function OtpPagePage() {
          return (
            /* binding */
            _OtpPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_otp_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otp-page.page.html */
      67685);
      /* harmony import */


      var _otp_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp-page.page.scss */
      80286);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
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
      92275); // import { AlertController } from '@ionic/angular';


      var _OtpPagePage = /*#__PURE__*/function () {
        function OtpPagePage(router, alertService, route, userService) {
          _classCallCheck(this, OtpPagePage);

          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.userService = userService;
          this.isImageHidden = false;
          this.isHeaderHidden = true;
        }

        return _createClass(OtpPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.isImageHidden = false;
            this.isHeaderHidden = true;
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.local = this.routeData.queryParams.local;
            this.form.reset(); // if(this.local == 2){

            setTimeout(function () {
              _this.isImageHidden = true;
              _this.isHeaderHidden = false;
            }, 1000); // }
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              one: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              two: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              three: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              four: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              five: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
              six: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
            });
          }
        }, {
          key: "gotoNextField",
          value: function gotoNextField(item, nextElement, id) {
            if (id == '1') {
              if (parseInt(this.form.value.one) <= 9) {
                nextElement.setFocus();
              } else {
                this.form.controls['one'].setValue('');
                this.form.controls['one'].updateValueAndValidity();
              }
            }

            if (id == '2') {
              if (parseInt(this.form.value.two) <= 9) {
                nextElement.setFocus();
              } else {
                this.form.controls['two'].setValue('');
                this.form.controls['two'].updateValueAndValidity();
              }
            }

            if (id == '3') {
              if (parseInt(this.form.value.three) <= 9) {
                nextElement.setFocus();
              } else {
                this.form.controls['three'].setValue('');
                this.form.controls['three'].updateValueAndValidity();
              }
            }

            if (id == '4') {
              if (parseInt(this.form.value.four) <= 9) {
                nextElement.setFocus();
              } else {
                this.form.controls['four'].setValue('');
                this.form.controls['four'].updateValueAndValidity();
              }
            }

            if (id == '5') {
              if (parseInt(this.form.value.five) <= 9) {
                nextElement.setFocus();
              } else {
                this.form.controls['five'].setValue('');
                this.form.controls['five'].updateValueAndValidity();
              }
            }

            if (id == '6') {
              if (parseInt(this.form.value.six) <= 9) {} else {
                this.form.controls['six'].setValue('');
                this.form.controls['six'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "onPage",
          value: function onPage() {
            var _this2 = this;

            if (this.form.valid) {
              var value = this.form.value.one.toString() + this.form.value.two.toString();
              var value1 = value.toString() + this.form.value.three.toString();
              var value2 = value1.toString() + this.form.value.four.toString();
              var value3 = value2.toString() + this.form.value.five.toString();
              var value4 = value3.toString() + this.form.value.six.toString();
              this.userService.getOTP(value4, this.schoolId).subscribe(function (response) {
                if (response.dataStatus == true) {
                  _this2.alertService.success('OTP valid');

                  _this2.router.navigate(['/tabs/student-curiosity'], {
                    queryParams: {
                      "schoolId": _this2.schoolId,
                      "batch": _this2.form.value.batch,
                      otp: value4
                    }
                  });
                } else {
                  _this2.alertService.error('OTP invalid');
                }
              });
            } else {
              this.validateAllFormFields(this.form);
              this.alertService.error('Please Fill all the Fields');
            }
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/school-zone']);
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this3 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup) {
                _this3.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray) {
                _this3.validateAllFormFields(control);
              }
            });
          }
        }]);
      }();

      _OtpPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }];
      };

      _OtpPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otp-page',
        template: _raw_loader_otp_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otp_page_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtpPagePage);
      /***/
    },

    /***/
    80286:
    /*!************************************************************!*\
      !*** ./src/app/pages/stem_new/otp-page/otp-page.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.header-image {\n  background: url(\"/assets/images/connect.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid white;\n  background-color: #FFFFFF;\n  margin-top: 55%;\n  height: 100%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 5px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.otpEnter {\n  border: 2px solid #707070;\n  border-radius: 10%;\n}\n\nion-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwyRUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6Im90cC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5oZWFkZXItaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Nvbm5lY3QucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9IFxyXG4gIFxyXG4gIC5jYXJkLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiA1NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSBcclxuXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAub3RwRW50ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    67685:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/otp-page/otp-page.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <div class=\"content login-bg\" [hidden]=\"isImageHidden\" *ngIf=\"local == 2\">\r\n    <!-- <ion-buttons slot=\"start\" class=\"back-icon\">\r\n     <ion-title style=\"margin-top: 3%;font-size: 11px;margin-left: 3%;\">Downloading School Data</ion-title> \r\n    </ion-buttons>  -->\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"text-align:center;margin-top: 50%;\">\r\n        <div> <img src=\"/assets/images/loadingimage.png\"> </div>\r\n        <div style=\"margin-top: 5%;color: white;font-size: 30px;\"> Downloading... </div>\r\n        <div style=\"margin-top: 3%;color: white;font-size: 20px;\"> School Data </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"header-image\" [hidden]=\"isHeaderHidden\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n      <ion-title style=\"margin-top: 3%;font-size: 11px;margin-left: 3%;\">Connect with school</ion-title>\r\n    </ion-buttons>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"margin-top: 7%;padding-top: 15%;\">\r\n        <form [formGroup]=\"form\">\r\n          <ion-row>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field1 type=\"number\" maxlength=\"1\" formControlName=\"one\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field2,'1')\">\r\n              </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field2 type=\"number\" maxlength=\"1\" formControlName=\"two\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field3,'2')\"> </ion-input>\r\n            </ion-col>\r\n            `\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field3 type=\"number\" maxlength=\"1\" formControlName=\"three\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field4,'3')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field4 type=\"number\" maxlength=\"1\" formControlName=\"four\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field5,'4')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field5 type=\"number\" maxlength=\"1\" formControlName=\"five\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field6,'5')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field6 type=\"number\" maxlength=\"1\" formControlName=\"six\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field7,'6')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"text-align:center;color:#6C6C6C;font-weight: 900;margin-top: 5%;\">\r\n              Please enter the OTP\r\n              <ion-row style=\"text-align:center;padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(form.controls.one.hasError('required') && (form.controls.one.dirty || form.controls.one.touched)) && (form.controls.two.hasError('required') && (form.controls.two.dirty || form.controls.two.touched)) && (form.controls.three.hasError('required')&& (form.controls.three.dirty || form.controls.three.touched)) && (form.controls.four.hasError('required')&& (form.controls.four.dirty || form.controls.four.touched)) && (form.controls.five.hasError('required')&& (form.controls.five.dirty || form.controls.five.touched)) && (form.controls.six.hasError('required')&& (form.controls.six.dirty || form.controls.six.touched))\">\r\n                  Please Fill the all Fields</p>\r\n              </ion-row>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onPage()\">\r\n        <img src=\"/assets/images/Submitbutton.png\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_otp-page_otp-page_module_ts-es5.js.map