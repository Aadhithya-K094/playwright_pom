(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_question-template-list_question-template-list_module_ts"], {
    /***/
    51828:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/question-template-list/question-template-list.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuestionTemplateListPageModule": function QuestionTemplateListPageModule() {
          return (
            /* binding */
            _QuestionTemplateListPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _question_template_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question-template-list.page */
      67095);

      var routes = [{
        path: '',
        component: _question_template_list_page__WEBPACK_IMPORTED_MODULE_0__.QuestionTemplateListPage
      }];

      var _QuestionTemplateListPageModule = /*#__PURE__*/_createClass(function QuestionTemplateListPageModule() {
        _classCallCheck(this, QuestionTemplateListPageModule);
      });

      _QuestionTemplateListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_question_template_list_page__WEBPACK_IMPORTED_MODULE_0__.QuestionTemplateListPage]
      })], _QuestionTemplateListPageModule);
      /***/
    },

    /***/
    67095:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/question-template-list/question-template-list.page.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuestionTemplateListPage": function QuestionTemplateListPage() {
          return (
            /* binding */
            _QuestionTemplateListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_question_template_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./question-template-list.page.html */
      94520);
      /* harmony import */


      var _question_template_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-template-list.page.scss */
      22293);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);

      var _QuestionTemplateListPage = /*#__PURE__*/function () {
        function QuestionTemplateListPage(activateRoute, router, ionicStorage, toastService, appVersion, networkService, api, authService) {
          _classCallCheck(this, QuestionTemplateListPage);

          this.activateRoute = activateRoute;
          this.router = router;
          this.ionicStorage = ionicStorage;
          this.toastService = toastService;
          this.appVersion = appVersion;
          this.networkService = networkService;
          this.api = api;
          this.authService = authService;
          this.template_list = [{
            id: 1,
            name: "Topic and Learning Outcome",
            url: 'learning-outcome',
            storage_id: '5',
            is_answered: false,
            color: 'red'
          }, {
            id: 2,
            name: "Pedagogy Info",
            url: 'tntp-content',
            storage_id: '2',
            is_answered: false,
            color: 'red'
          }, {
            id: 3,
            name: "Diksha / TNTP Content",
            url: 'pedagogy-info',
            storage_id: '4',
            is_answered: false,
            color: 'red'
          }, {
            id: 4,
            name: "Classroom Management",
            url: 'questions',
            storage_id: '6',
            is_answered: false,
            color: 'red'
          }, {
            id: 6,
            name: "Record Verification",
            url: 'record-verification',
            storage_id: '8',
            is_answered: false,
            color: 'red'
          }, {
            id: 7,
            name: "Student Assessment",
            url: "student-list",
            storage_id: '3',
            is_answered: false,
            color: 'red'
          }, {
            id: 8,
            name: "Final Remarks",
            url: 'student-assesment',
            storage_id: '7',
            is_answered: false,
            color: 'red'
          }];
          this.storage_keys = [{
            id: 2,
            name: 'pedagogy_info'
          }, {
            id: 3,
            name: 'student_list_form'
          }, {
            id: 4,
            name: 'tntp_content_form'
          }, {
            id: 5,
            name: "learning_outcome_form"
          }, {
            id: 6,
            name: 'classroom_observation_form'
          }, {
            id: 7,
            name: 'final_remarks'
          }, {
            id: 8,
            name: 'record_verification_form'
          }];
        }

        return _createClass(QuestionTemplateListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activateRoute.queryParams.subscribe(function (params) {
              if (params.template_list) {
                _this.template_id = JSON.parse(params.template_list);
              }

              _this.getDataFromStorage();
            });
          }
        }, {
          key: "getDataFromStorage",
          value: function getDataFromStorage() {
            var _this2 = this;

            var keys_from_storage;
            this.ionicStorage.keys().then(function (keys) {
              keys_from_storage = keys;

              _this2.storage_keys.forEach(function (result) {
                keys_from_storage.forEach(function (value) {
                  if (value == result.name) {
                    _this2.template_list.filter(function (val) {
                      return parseInt(val.storage_id) == result.id;
                    }).map(function (res) {
                      res.is_answered = true;
                      res.color = 'green';
                    });
                  }
                });
              });
            });
          }
        }, {
          key: "choose_question",
          value: function choose_question(choosen_template) {
            if (choosen_template != '') {
              var navigationExtras = {
                queryParams: {
                  template_list: this.template_id
                }
              };
              this.router.navigate(['/tnvntabs/page-route', choosen_template.url], navigationExtras);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.toastService.presentAlertConfirm("Confirm", "Are you sure you want to submit").then(function (toast_res) {
              if (toast_res.role == 'cancel') {
                return;
              } else {
                var appVersionNumber;

                _this3.appVersion.getVersionNumber().then(function (version_number) {
                  appVersionNumber = version_number;
                });

                var records = [];

                var tokenData = _this3.authService.getTokenDetails();

                var emis_username = tokenData.emis_username;
                var form_values = [];

                _this3.ionicStorage.forEach(function (value, key, index) {
                  if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                    form_values.push(value);
                  }

                  _this3.ionicStorage.length().then(function (storage_length) {
                    if (index == storage_length) {
                      records = {
                        emis_username: emis_username,
                        form_values: form_values,
                        app_version: appVersionNumber
                      };

                      _this3.api.saveObservation(records).subscribe(function (res) {
                        if (res['dataStatus']) {
                          _this3.ionicStorage.forEach(function (value, key, index) {
                            if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                              _this3.ionicStorage.remove(key);

                              console.log("r", key);
                            }

                            _this3.toastService.presentToast("Record Saved Successfully", "success");

                            _this3.router.navigate(['/tnvntabs/page-route']);
                          });
                        } else {
                          if (_this3.networkService.getCurrentNetworkStatus() == src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__.ConnectionStatus.Offline) {
                            _this3.ionicStorage.forEach(function (value, key, index) {
                              if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                                _this3.ionicStorage.remove(key);
                              }

                              _this3.router.navigate(['/tnvntabs/page-route']);
                            });
                          } else {
                            _this3.toastService.presentToast("Something went wrong", "error");
                          }
                        }
                      }, function (err) {
                        _this3.ionicStorage.forEach(function (value, key, index) {
                          if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                            _this3.ionicStorage.remove(key);
                          }

                          _this3.router.navigate(['/tnvntabs/page-route'], {
                            replaceUrl: true
                          });
                        });
                      });
                    }
                  });
                });
              }
            });
          }
        }]);
      }();

      _QuestionTemplateListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService
        }];
      };

      _QuestionTemplateListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-question-template-list',
        template: _raw_loader_question_template_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_template_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _QuestionTemplateListPage);
      /***/
    },

    /***/
    22293:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/question-template-list/question-template-list.page.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".temp_name {\n  font-size: 97%;\n  font-style: inherit;\n  font-weight: 550;\n  color: black;\n}\n\n.temp_status {\n  float: right;\n}\n\n.icon_end {\n  font-size: 22px;\n}\n\nion-card {\n  border: 1px solid #f1eded;\n  box-shadow: 2px 4px #d6d4d4;\n}\n\n.content_root {\n  background: #f0eaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLXRlbXBsYXRlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFLRyxZQUFBO0FBRkg7O0FBSUE7RUFFSSxlQUFBO0FBRko7O0FBSUE7RUFDSSx5QkFBQTtFQUVBLDJCQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtBQUhKIiwiZmlsZSI6InF1ZXN0aW9uLXRlbXBsYXRlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXBfbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogOTclO1xyXG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OjU1MDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi50ZW1wX3N0YXR1c3tcclxuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4vLyAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi5pY29uX2VuZHtcclxuICAgIC8vIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQxLCAyMzcsIDIzNyk7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAjZDZkNGQ0O1xyXG4gICAgLy8gYm9yZGVyLWxlZnQ6IGJsdWU7XHJcbiAgIFxyXG59XHJcbi5jb250ZW50X3Jvb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyMzQsIDIzNClcclxufSJdfQ== */";
      /***/
    },

    /***/
    94520:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/question-template-list/question-template-list.page.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar  class=\"new-background-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Question Templates</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content_root\">\r\n<ion-card *ngFor=\"let template of template_list;let i=index\" (click)=\"choose_question(template)\">\r\n  <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-card-content>\r\n            <ion-col size=\"2\" class=\"temp_id\">{{i+1}}</ion-col>\r\n            <ion-col size=\"20\" class=\"temp_name\"> <ion-label>{{template.name}}</ion-label></ion-col>\r\n            <ion-col *ngIf=\"template.color== 'green'\"   size=\"1\"  class=\"temp_status\"><ion-icon class=\"icon_end\"[ngStyle]=\"{'color': template.color}\" [name]=\"template.is_answered ? 'done-all' : 'close'\"></ion-icon></ion-col>          \r\n    </ion-card-content>\r\n \r\n</ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" color=\"primary\" shape=\"round\" (click)=\"onSubmit()\">Complete <ion-icon name=\"checkmark-circle-outline\"></ion-icon></ion-button>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-data_question-template-list_question-template-list_module_ts-es5.js.map