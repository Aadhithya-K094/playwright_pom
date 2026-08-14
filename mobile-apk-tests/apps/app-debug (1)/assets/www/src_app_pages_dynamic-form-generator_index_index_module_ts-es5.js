(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_dynamic-form-generator_index_index_module_ts"], {
    /***/
    7636:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/index/index-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexPageRoutingModule": function IndexPageRoutingModule() {
          return (
            /* binding */
            _IndexPageRoutingModule
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


      var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index.page */
      72899);

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
      }];

      var _IndexPageRoutingModule = /*#__PURE__*/_createClass(function IndexPageRoutingModule() {
        _classCallCheck(this, IndexPageRoutingModule);
      });

      _IndexPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IndexPageRoutingModule);
      /***/
    },

    /***/
    86374:
    /*!********************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/index/index.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexPageModule": function IndexPageModule() {
          return (
            /* binding */
            _IndexPageModule
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


      var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-routing.module */
      7636);
      /* harmony import */


      var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index.page */
      72899);

      var _IndexPageModule = /*#__PURE__*/_createClass(function IndexPageModule() {
        _classCallCheck(this, IndexPageModule);
      });

      _IndexPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
      })], _IndexPageModule);
      /***/
    },

    /***/
    72899:
    /*!******************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/index/index.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexPage": function IndexPage() {
          return (
            /* binding */
            _IndexPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./index.page.html */
      49524);
      /* harmony import */


      var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index.page.scss */
      25508);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/dynamicform.service */
      42966);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _IndexPage = /*#__PURE__*/function () {
        function IndexPage(cd, router, route, ionicstorage, userSessionService, dynamicFromService, toast) {
          _classCallCheck(this, IndexPage);

          this.cd = cd;
          this.router = router;
          this.route = route;
          this.ionicstorage = ionicstorage;
          this.userSessionService = userSessionService;
          this.dynamicFromService = dynamicFromService;
          this.toast = toast;
          this.section = [];
          this.submitBtnDisabled = true;
          this.thankyouSection = false;
          this.showFullDesc = false;
          this.param1 = '';
          this.param2 = '';
          this.naviBackUrl = '';
          this.emis_userid = this.userSessionService.emis_user_id();
          console.log(this.emis_userid, 'emis_userid');
        }

        return _createClass(IndexPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            // this.statusChange();
            // this.urlGetApi();
            this.param1 = this.route.snapshot.queryParamMap.get("param1");
            this.param2 = this.route.snapshot.queryParamMap.get("param2");
            this.naviBackUrl = this.route.snapshot.queryParamMap.get("naviBackUrl");
            this.section = [];
            this.ionicStorageGet();
          }
        }, {
          key: "ionicStorageGet",
          value: function ionicStorageGet() {
            var _this = this;

            this.ionicstorage.getData('qryfromId').then(function (dataa) {
              _this.qryfromId = dataa != null ? dataa : '';
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('apiJson').then(function (dataa) {
              _this.apiJson = dataa != null ? JSON.parse(dataa) : '';

              if (_this.apiJson) {
                _this.ionicstorage.getData('conCol').then(function (dataa) {
                  _this.conCol = JSON.parse(dataa);

                  _this.fetchJson(_this.apiJson.form_url);
                }, function (error) {
                  return console.error(error);
                });
              } else {
                _this.toast.presentToast('Data not found', 'error');
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('languageValue').then(function (dataa) {
              _this.langstatus = dataa != null ? dataa : 1;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('fromId').then(function (dataa) {
              _this.fromId = dataa;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('dbPk').then(function (dataa) {
              _this.dbPk = dataa;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('dbPkList').then(function (dataa) {
              _this.dbPkList = dataa;
            }, function (error) {
              return console.error(error);
            });
          } // urlGetApi() {
          //   debugger
          //   this.dynamicFromService.jsonFetch(169).subscribe(
          //     (res) => {
          //       console.log(res, 'resresrtes')
          //       try {
          //         if (res.status == 200 && res.dataStatus == true) {
          //           console.log(res.url.form_url, 'res.url.form_url')
          //           this.fetchJson(res.url.form_url);
          //         } else {
          //           throw res.message
          //         }
          //       } catch (err) {
          //         this.toast.presentToast(err, 'error');
          //       }
          //     },
          //     (error) => {
          //       this.toast.presentToast(error?.message, 'error');
          //     }
          //   )
          // }

        }, {
          key: "fetchJson",
          value: function fetchJson(url) {
            var _this2 = this;

            this.section = [];
            fetch(url).then(function (res) {
              return res.json();
            }).then(function (res) {
              debugger;
              var data = res[0].section;
              _this2.section = [];

              for (var i in data) {
                if (data[i].applicable_for !== "" && data[i].applicable_value !== "") {
                  var app_for = data[i].applicable_for;

                  for (var j in _this2.conCol) {
                    if (app_for == j && data[i].applicable_value == _this2.conCol[j]) {
                      _this2.section.push(data[i]);
                    }
                  }
                } else {
                  _this2.section.push(data[i]);
                }
              }
            }).then(function () {
              if (_this2.section.length == 0) {
                _this2.ionicstorage.removeKey('dbPk').then(function (dataa) {
                  console.log(dataa, 'conCol data removed');
                }, function (error) {
                  return console.error(error);
                });

                _this2.ionicstorage.removeKey('conCol').then(function (dataa) {
                  console.log(dataa, 'conCol data removed');
                }, function (error) {
                  return console.error(error);
                });

                _this2.toast.presentToast('Section list is empty..!', 'error');

                _this2.router.navigate(['/tabs/dynamic-table-list'], {
                  queryParams: {
                    'formId': _this2.qryfromId,
                    'secLength': _this2.section.length,
                    param1: _this2.param1,
                    param2: _this2.param2,
                    naviBackUrl: _this2.naviBackUrl
                  }
                });
              } else {
                console.log(_this2.section, 'this.section');

                _this2.onStatus();
              }
            });
          }
        }, {
          key: "onStatus",
          value: function onStatus() {
            debugger;

            if (this.secStatus == null) {
              this.secStatus = [];
            }

            this.secId = this.route.snapshot.queryParamMap.get("secId");
            this.statusChange(); // if(this.secId !== null){
            // if(!this.getIonSecId.includes(this.secId)){
            //   this.secStatus.push(this.secId)
            // }
            // this.ionicstorage.insertData_Replace('sectionStatus', this.secStatus)
            // this.statusChange();
            // }  
          }
        }, {
          key: "statusChange",
          value: function statusChange() {
            var _this3 = this;

            debugger;
            this.ionicstorage.getData('sectionStatus').then(function (dataa) {
              if (dataa != null) {
                // if (typeof dataa == 'string') {
                //   dataa = [dataa]
                // }
                _this3.getIonSecId = dataa;
                console.log(_this3.getIonSecId, 'this.getIonSecId');

                if (_this3.getIonSecId[_this3.dbPk] != undefined) {
                  for (var i = 0; i < _this3.section.length; i++) {
                    for (var j = 0; j < _this3.getIonSecId[_this3.dbPk].length; j++) {
                      if (_this3.section[i].sec_id == _this3.getIonSecId[_this3.dbPk][j]) {
                        _this3.section[i].section_status = 1;
                      }
                    }
                  }
                }

                var checkStatus = _this3.section.map(function (x) {
                  return x.section_status;
                });

                console.log(checkStatus, 'checkStatus');
                debugger;

                if (!checkStatus.includes(0) && !checkStatus.includes(undefined)) {
                  _this3.submitBtnDisabled = false;
                }
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "gotoDynamicForm",
          value: function gotoDynamicForm(item) {
            this.router.navigate(['/tabs/dynamic-form'], {
              queryParams: {
                'secId': item.sec_id,
                formId: this.fromId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl
              }
            });
          }
        }, {
          key: "changeEnglish",
          value: function changeEnglish() {
            this.langstatus = 1;
            this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
          }
        }, {
          key: "changeTamil",
          value: function changeTamil() {
            this.langstatus = 2;
            this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/dynamic-table-list'], {
              queryParams: {
                formId: this.fromId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl
              }
            });
          }
        }, {
          key: "removeIonicStorage",
          value: function removeIonicStorage() {
            this.ionicstorage.removeKey('dynamicFromSecData').then(function (dataa) {
              console.log(dataa, 'dynamicFromSecData data removed');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.removeKey('conCol').then(function (dataa) {
              console.log(dataa, 'conCol data removed');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.removeKey('dbPk').then(function (dataa) {
              console.log(dataa, 'dbPk data removed');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.removeKey('fromId').then(function (dataa) {
              console.log(dataa, 'fromId data removed');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.removeKey('sectionStatus').then(function (dataa) {
              console.log(dataa, 'sectionStatus data removed');
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit() {
            var _this4 = this;

            debugger;
            this.ionicstorage.getData('dynamicFromSecData').then(function (dataa) {
              dataa = dataa ? JSON.parse(dataa) : {};

              if (dataa && dataa[_this4.dbPk]) {
                _this4.objectValId = Object.values(dataa[_this4.dbPk]);
                console.log(_this4.objectValId, 'dataa');
                _this4.finalObject = _this4.objectValId.reduce(function (result, current) {
                  return Object.assign(result, current);
                }, {});
                console.log(_this4.finalObject, 'this.finalObject'); // for demo use

                var obj = {
                  "records": {
                    "user_id": _this4.emis_userid,
                    "form_id": _this4.fromId,
                    "db_pk": _this4.dbPk,
                    "Answer": _this4.finalObject
                  }
                };
                console.log(obj, 'obj');

                _this4.dynamicFromService.DynmcFrmAnswrSave(obj).subscribe(function (res) {
                  try {
                    if (res.status == 200 && res.dataStatus == true) {
                      console.log(res);

                      _this4.toast.presentToast(res.success, 'success');

                      delete _this4.dbPkList[_this4.dbPkList.findIndex(function (x) {
                        return x == _this4.dbPk;
                      })];
                      delete dataa[_this4.dbPk];
                      delete _this4.getIonSecId[_this4.dbPk];

                      _this4.ionicstorage.insertData_Replace('dbPkList', _this4.dbPkList);

                      _this4.ionicstorage.insertData_Replace('dynamicFromSecData', JSON.stringify(dataa));

                      _this4.ionicstorage.insertData_Replace('sectionStatus', _this4.getIonSecId);

                      _this4.thankyouSection = true;
                      setTimeout(function () {
                        _this4.thankyouSection = false;

                        _this4.navigateBack();
                      }, 3000);
                    } else {
                      throw res.message;
                    }
                  } catch (err) {
                    _this4.toast.presentToast(err, 'error');
                  }
                }, function (error) {
                  _this4.toast.presentToast(error === null || error === void 0 ? void 0 : error.message, 'error');
                });
              } else {
                _this4.toast.presentToast("No data found", 'warning');
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "handleRefresh",
          value: function handleRefresh(event) {
            var _this5 = this;

            setTimeout(function () {
              _this5.fetchJson(_this5.apiJson.form_url);

              event.target.complete();
            }, 1000);
          }
        }, {
          key: "toggleDescription",
          value: function toggleDescription(i) {
            this.indexVal = i;
            this.showFullDesc = !this.showFullDesc;
            this.showFullDesc ? this.indexVal = i : this.indexVal = null;
          }
        }]);
      }();

      _IndexPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_3__.DynamicformService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
        }];
      };

      _IndexPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IndexPage);
      /***/
    },

    /***/
    25508:
    /*!********************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/index/index.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n  zoom: 1.7;\n  margin-left: 0px;\n  padding: 4px 0px 4px 5px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\nion-content {\n  background: #e7ddec;\n}\n\nion-content ion-card {\n  border: 1px solid #d9d9d9;\n}\n\nion-content ion-card ion-item {\n  --border-color: transparent;\n}\n\nion-content ion-card ion-item .tlt {\n  display: flex;\n  align-items: center;\n}\n\nion-content ion-card ion-item .tlt ion-icon {\n  margin-right: 10px;\n  font-size: 20px;\n  width: 20px;\n  min-width: 20px;\n}\n\nion-content ion-card ion-item .nxtbtn {\n  background: #9162b0;\n  color: #fff;\n  border-radius: 10px;\n  padding: 6px 10px 0px;\n}\n\nion-content ion-card ion-item ion-label {\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\nion-content ion-card ion-item p {\n  margin: 5px 0px 10px;\n}\n\nion-content .thankyou-box {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n\nion-content .thankyou-box video {\n  width: 150px;\n}\n\nion-content .thankyou-box ion-icon {\n  color: #12a700;\n  font-size: 60px;\n  border: 3px solid #12a700;\n  border-radius: 50%;\n  padding: 20px;\n}\n\nion-content .thankyou-box h1 {\n  font-size: 33px;\n  font-weight: 700;\n  padding: 15px 0px 10px;\n}\n\nion-content .thankyou-box p {\n  font-size: 20px;\n  color: #888;\n}\n\n.rdmr {\n  color: #9162b0;\n  margin-left: 5px;\n  font-weight: 600;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.textaling .lang-btn {\n  border-radius: 5px;\n  background-color: #d5b2ed;\n  color: var(--ion-color-primary);\n  margin: 0px 6px;\n  padding: 8px 12px;\n}\n\n.textaling .lang-btn.lan_active {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBRkk7RUFDSSx5QkFBQTtBQUlSOztBQUhRO0VBQ0ksMkJBQUE7QUFLWjs7QUFIWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUtoQjs7QUFKZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU1wQjs7QUFIWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFLaEI7O0FBSFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUtoQjs7QUFIWTtFQUNJLG9CQUFBO0FBS2hCOztBQURJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdSOztBQUZRO0VBQ0ksWUFBQTtBQUlaOztBQUZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFJWjs7QUFGUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSVY7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUhJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBS1I7O0FBSlE7RUFDSSxnQkFBQTtBQU1aIiwiZmlsZSI6ImluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbTogMS43O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDRweCAwcHggNHB4IDVweDtcclxufVxyXG4uaW9uLXRleHQtd3JhcHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZGRlYztcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgIC50bHR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ueHRidG57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTE2MmIwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGhhbmt5b3UtYm94e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgdmlkZW97XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTJhNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMmE3MDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmRtcntcclxuICAgIGNvbG9yOiM5MTYyYjA7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0YWxpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAubGFuZy1idG57XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWIyZWQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgJi5sYW5fYWN0aXZle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    49524:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-form-generator/index/index.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-col size=\"8\">\r\n        <ion-row>\r\n          <ion-buttons class=\"back-icon\">\r\n            <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n            </ion-icon>\r\n          </ion-buttons>\r\n          <!-- <ion-title class=\"ion-text-wrap\">{{dynamicJson?.name}}</ion-title> -->\r\n          <ion-title class=\"ion-text-wrap\">Section List</ion-title>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div class=\"textaling\">\r\n          <ion-label class=\"lang-btn\" (click)=\"changeEnglish()\" [class.lan_active]=\"langstatus == 1\">E</ion-label>\r\n          <ion-label class=\"lang-btn\" (click)=\"changeTamil()\" [class.lan_active]=\"langstatus == 2\">த</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"section.length>0\">\r\n  <div *ngFor=\"let item of section; let i = index;\">\r\n    <ion-card style=\"position: relative;\">\r\n      <ion-item (click)=\"gotoDynamicForm(item)\" >\r\n        <div style=\"display: flex;justify-content: space-between;align-items: center; width: 100%;padding: 2px 0px 7px;border-bottom: 1px solid rgba(0,0,0,0.30);\">\r\n          <div class=\"tlt\">\r\n            <ion-icon [style.color]=\"item.section_status == 1 ? '#12a700' : '#f00'\" name=\"{{item.section_status == 1 ? 'checkmark-outline' : 'close-circle-outline'}}\"></ion-icon>\r\n            <ion-label *ngIf=\"langstatus == 1\" class=\"secname\">{{item.section_name}}</ion-label>\r\n            <ion-label *ngIf=\"langstatus == 2\" class=\"secname\">{{item.section_name_t}}</ion-label>\r\n          </div>\r\n          <button class=\"nxtbtn\"><ion-icon name=\"arrow-forward-outline\"></ion-icon></button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"item.section_descrip != null && item.section_descrip_t != null\">\r\n        <p *ngIf=\"langstatus == 1\">{{indexVal == i || item.section_descrip.length < 60 ? item.section_descrip : (item.section_descrip | slice:0:60)+'...'}} <span *ngIf=\"item.section_descrip.length > 60\" class=\"rdmr\" (click)=\"toggleDescription(i)\">{{ indexVal == i ? 'Read Less' : 'Read More' }}</span></p>\r\n        <p *ngIf=\"langstatus == 2\">{{indexVal == i || item.section_descrip.length < 60 ? item.section_descrip_t : (item.section_descrip_t | slice:0:60)+'...'}} <span *ngIf=\"item.section_descrip.length > 60\" class=\"rdmr\" (click)=\"toggleDescription(i)\">{{ indexVal == i ? 'Read Less' : 'Read More' }}</span></p>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n  <div style=\"text-align:center;padding:10px 0px 20px;\">\r\n    <ion-button (click)=\"finalSubmit()\" [disabled]=\"submitBtnDisabled\"><span style=\"color:#fff;\">Submit</span></ion-button>\r\n  </div>\r\n\r\n  <div class=\"thankyou-box\" *ngIf=\"thankyouSection\">\r\n    <div style=\"text-align: center;\">\r\n      <!-- <ion-icon name=\"checkmark-outline\"></ion-icon> -->\r\n      <video autoplay>\r\n        <source src=\"assets/images/tick-video.mp4\" type=\"video/mp4\">\r\n      </video>\r\n      <h1>Thank You</h1>\r\n      <p>Your form has been submitted successfully..!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dynamic-form-generator_index_index_module_ts-es5.js.map