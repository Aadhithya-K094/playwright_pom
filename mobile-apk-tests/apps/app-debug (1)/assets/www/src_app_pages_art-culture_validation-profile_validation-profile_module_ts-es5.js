(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_validation-profile_validation-profile_module_ts"], {
    /***/
    36285:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/art-culture/validation-profile/validation-profile-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationProfilePageRoutingModule": function ValidationProfilePageRoutingModule() {
          return (
            /* binding */
            _ValidationProfilePageRoutingModule
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


      var _validation_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validation-profile.page */
      77621);

      var routes = [{
        path: '',
        component: _validation_profile_page__WEBPACK_IMPORTED_MODULE_0__.ValidationProfilePage
      }];

      var _ValidationProfilePageRoutingModule = /*#__PURE__*/_createClass(function ValidationProfilePageRoutingModule() {
        _classCallCheck(this, ValidationProfilePageRoutingModule);
      });

      _ValidationProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ValidationProfilePageRoutingModule);
      /***/
    },

    /***/
    94221:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/art-culture/validation-profile/validation-profile.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationProfilePageModule": function ValidationProfilePageModule() {
          return (
            /* binding */
            _ValidationProfilePageModule
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


      var _validation_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validation-profile-routing.module */
      36285);
      /* harmony import */


      var _validation_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./validation-profile.page */
      77621);

      var _ValidationProfilePageModule = /*#__PURE__*/_createClass(function ValidationProfilePageModule() {
        _classCallCheck(this, ValidationProfilePageModule);
      });

      _ValidationProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _validation_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ValidationProfilePageRoutingModule],
        declarations: [_validation_profile_page__WEBPACK_IMPORTED_MODULE_1__.ValidationProfilePage]
      })], _ValidationProfilePageModule);
      /***/
    },

    /***/
    77621:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/art-culture/validation-profile/validation-profile.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationProfilePage": function ValidationProfilePage() {
          return (
            /* binding */
            _ValidationProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_validation_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./validation-profile.page.html */
      84704);
      /* harmony import */


      var _validation_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./validation-profile.page.scss */
      64309);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _ValidationProfilePage = /*#__PURE__*/function () {
        function ValidationProfilePage(userService, alertService, router, route, emisservice, usersessionService, uploadService, modalCtrl) {
          _classCallCheck(this, ValidationProfilePage);

          this.userService = userService;
          this.alertService = alertService;
          this.router = router;
          this.route = route;
          this.emisservice = emisservice;
          this.usersessionService = usersessionService;
          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl; // validatingPersonalFields = {};

          this.artName = "";
          this.validationStatus = ""; // public msg: string;
          // resourceId = "";
          // previousPageFilteredStatus = ""
          // paramData: any;
          // routeData: any;
          // name: any;
          // gender: any;
          // dob: any;
          // contact_no: any;
          // email: any;
          // doorno: any;
          // street: any;
          // area: any;
          // pincode: any;
          // image: any;
          // key_art_form: any;
          // brte_status: number;
          // list: any;
          // BlkId: any;
          // resourcePersonDump: any[];

          this.tabsData = 1;
          this.onholdreason = false;
          this.showreason = false;
          this.BlkId = this.usersessionService.block_id(); // this.route.queryParams.subscribe((blockId) => {
          //   var string = blockId['persondetails'];
          //   var obj = JSON.parse(string)
          //     this.BlkId =  obj['block_id']
          //   })
        }

        return _createClass(ValidationProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.eventId = null; // this.BlkId = this.usersessionService.block_id();
                    // this.getarpverification();
                    // this.doorno = this.routeData.queryParams.doorno;
                    // this.doorno = this.routeData.queryParams.doorno;
                    // this.resourceInfo = JSON.parse(this.getRequiredId("list"));
                    // this.artName = this.getRequiredId("artName");
                    // this.previousPageFilteredStatus = this.getRequiredId("currentFilterdStatus");
                    // this.validationStatus = this.getRequiredId("status");
                    // this.profileImageUrl = this.getRequiredId("list");

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.tabsData = 1;
            this.route.queryParams.subscribe(function (params) {
              var routeData = JSON.parse(params['persondetails']);
              _this.details = routeData;
            }); // this.getstatus()
          } // getRequiredId(parameter: string) {
          //   return this.route.snapshot.paramMap.get(parameter);
          // }

        }, {
          key: "reasonChange",
          value: function reasonChange(event) {
            this.reason = event.target.defaultValue;
          }
        }, {
          key: "initializeValidators",
          value: function initializeValidators() {// let PersonalvalidationKeys = this.resourceInfo["personal"];
            // this.routeData = this.route.snapshot;
            // this.name = this.routeData.queryParams.name;
            // this.gender = this.routeData.queryParams.gender;
            // this.dob = this.routeData.queryParams.dob;
            // this.contact_no = this.routeData.queryParams.contact_no;
            // this.email = this.routeData.queryParams.email;
            // this.doorno = this.routeData.queryParams.doorno;
            // this.street = this.routeData.queryParams.street;
            // this.area = this.routeData.queryParams.area;
            // this.pincode = this.routeData.queryParams.pincode;
            // this.image = this.routeData.queryParams.image;
            // this.key_art_form = this.routeData.queryParams.key_art_form;
            // this.brte_status = this.routeData.queryParams.brte_status;
            // console.log(this.name,this.gender,this.dob,this.contact_no,this.email,this.doorno,this.street,this.area,this.pincode,this.image,this.key_art_form,this.brte_status,"ppp");
            // let newPersonalObject = {};
            // Object.keys(PersonalvalidationKeys).forEach(function (key) {
            //   // if (!(key in newPersonalObject)) {
            //   //   newPersonalObject[key] = new FormControl(PersonalvalidationKeys[key], [
            //   //    key === "age" ? ValidatationService.age : key === "emailId" ? ValidatationService.EmailId : key === "contactNumber" ? ValidatationService.contactNumber : key === "dob" ? ValidatationService.date : Validators.nullValidator,
            //   //   ]);
            //   // }
            // });
            // this.personalForm = new FormGroup({
            //   ...newPersonalObject,
            // });
            // this.personalForm.controls['age'].disable();
            // this.msg = "";
          } // getUploadedFiles(filename) {
          //   var bucketName = "renewalapplicationemis";
          //   var filename = filename;
          //   let expiry: number = 1800;
          //   this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
          //     if (result) {
          //       this.imageUrl = result.url;
          // this.viewImage('renewalapplicationemis', result.url);
          //     }
          //     else {
          //       this.alertService.error('Error in Uploading File please try again');
          //     }
          //   });
          // }

        }, {
          key: "viewImage",
          value: function viewImage(url, fun) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this2 = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    bucketName = "renewalapplicationemis";
                    filename = url;
                    expiry = 1800;
                    this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        var imageUrl, modal;
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              if (!result) {
                                _context2.n = 4;
                                break;
                              }

                              imageUrl = result.url;

                              if (!(fun == 'model')) {
                                _context2.n = 3;
                                break;
                              }

                              _context2.n = 1;
                              return this.modalCtrl.create({
                                component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_6__.ViewImagePage,
                                componentProps: {
                                  image: imageUrl
                                },
                                cssClass: 'view-image-modal'
                              });

                            case 1:
                              modal = _context2.v;
                              _context2.n = 2;
                              return modal.present();

                            case 2:
                              _context2.n = 4;
                              break;

                            case 3:
                              Object.assign(this.details, {
                                imageUrl: result.url
                              });

                            case 4:
                              return _context2.a(2);
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "brtestatus",
          value: function brtestatus(status) {
            if (status == '1') {
              this.details[status].brte_status = 'Onhold';
              this.onholdreason = true;
            } else if (status == '2') {
              this.details[status].brte_status = 'Verified';
              this.onholdreason = false;
            } else if (status == '3') {
              this.details[status].brte_status = 'Rejected';
              this.onholdreason = true;
            } else {
              this.details[status].brte_status = 'Unverfied';
              this.onholdreason = false;
            }
          }
        }, {
          key: "getTabs",
          value: function getTabs(event) {
            this.tabsData = event.target.value;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.showreason = false; // this.router.navigate(["/tabs/arpenrollmentverification"], { queryParams: { blockId: this.blockId } });

            this.router.navigate(["/tabs/arpenrollmentverification"]);
          }
        }, {
          key: "onholdReject",
          value: function onholdReject(event) {
            this.eventId = event;
            this.showreason = true;
          }
        }, {
          key: "brteverification",
          value: function brteverification(event) {
            var _this3 = this;

            debugger;

            if (event == '2') {
              this.eventId = '2';
              this.details.brte_status = event;
              var obj = {
                records: {
                  IndxId: this.details.id,
                  BrteStatus: event
                }
              };
              this.userService.brtestatus(obj).subscribe(function (res) {
                if (res.dataStatus == true) {
                  _this3.reason = '';

                  _this3.alertService.success(res.message);
                } else {
                  _this3.alertService.warning(res.message);
                }
              });
              var data = {
                records: {
                  "TemplateId": "1707168967518871308",
                  "MobileNo": this.details.contact_no,
                  "TemplateMsg": "நீங்கள் பள்ளிகளில் கலைவள நபராக தன்னார்வப்பணி மேற்கொள்ள உங்கள் Playstoreஇல் TNSED Administrators APPஐ install செய்து கொள்ளவும்.உங்களது Username :{#var#} மற்றும் Password: {#var#} பயன்படுத்தி login செய்யவும்.- TNSED" // "var": {
                  //     "var1":"test@123",
                  //     "var2":"test@123"
                  // }

                }
              };
              this.emisservice.getverifeidsms(data).subscribe(function (res) {});
            } else {
              var isValid = false;

              if (this.eventId == '3' || this.eventId == '1') {
                if (this.reason) {
                  isValid = true;
                } else {
                  this.alertService.error("Please fill reason");
                  isValid = false;
                }
              } else {
                isValid = true;
              }

              if (isValid) {
                this.details.brte_status = this.eventId;
                var _obj = {
                  records: {
                    IndxId: this.details.id,
                    BrteStatus: this.eventId,
                    Reason: this.reason
                  }
                };
                this.userService.brtestatus(_obj).subscribe(function (res) {
                  if (res.dataStatus == true) {
                    _this3.reason = '';

                    _this3.alertService.success(res.message);
                  } else {
                    _this3.alertService.warning(res.message);
                  }
                });
              }
            }
          }
        }]);
      }();

      _ValidationProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }];
      };

      _ValidationProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-validation-profile',
        template: _raw_loader_validation_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_validation_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ValidationProfilePage);
      /***/
    },

    /***/
    64309:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/art-culture/validation-profile/validation-profile.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #F1624A;\n}\n\nion-card {\n  padding: 6px;\n  border: 2px solid salmon;\n}\n\nion-label {\n  padding-bottom: 10px;\n}\n\n.onholdbtn {\n  --background: gray !important;\n  --color: white;\n  margin-left: 20px;\n  font-size: 12px;\n  font-family: \"Times New Roman\";\n}\n\n.rejectedbtn {\n  --background: red !important;\n  --color: white;\n  font-size: 12px;\n  font-family: \"Times New Roman\";\n}\n\n.verifiedbtn {\n  --background: green !important;\n  --color: white;\n  font-size: 12px;\n  font-family: \"Times New Roman\";\n}\n\n.text-align {\n  text-align: center;\n  justify-items: center;\n}\n\n.imageColumn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.verifeild {\n  margin-right: -28px;\n  background-color: green;\n  color: white;\n  font-size: 12px;\n  padding: 6px;\n  border-radius: 10px;\n  font-family: \"Times New Roman\";\n}\n\n.Rejected {\n  padding: 6px;\n  border-radius: 13px;\n  font-size: 12px;\n  margin-right: -16px;\n  font-family: \"Times New Roman\";\n}\n\n.Onhold {\n  background-color: gray;\n  color: white;\n  padding: 6px;\n  border-radius: 12px;\n  font-family: \"Times New Roman\";\n}\n\n.Unverifeild {\n  background-color: orange;\n  color: white;\n  padding: 6px;\n  border-radius: 12px;\n  font-family: \"Times New Roman\";\n}\n\n.submit {\n  --background: green !important;\n  --color:white;\n  font-size: 12px;\n  --border-radius: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlBBO0VBQ0UscUJBQUE7QUE1UEY7O0FBa1FBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBL1BGOztBQWlRQTtFQUNFLG9CQUFBO0FBOVBGOztBQXNRQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBblFGOztBQXVRQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQXBRRjs7QUF3UUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFyUUY7O0FBeVFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQXRRRjs7QUF3UUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJRRjs7QUF3UUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXJRRjs7QUF3UUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXJRRjs7QUF3UUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXRRRjs7QUF3UUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXRRRjs7QUF3UUE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFyUUYiLCJmaWxlIjoidmFsaWRhdGlvbi1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zdGF0dXMtc3BhbiB7XHJcbi8vICAgICBmb250LWZhbWlseTogbmVvTm90ZXM7XHJcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbi8vICAgfVxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIHtcclxuLy8gICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4vLyAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGZsZXg6IDMwJTtcclxuLy8gICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4vLyAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuYm9keSB7XHJcbi8vICAgICAgIGZsZXg6IDYwJTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5mb290ZXIge1xyXG4vLyAgICAgICBmbGV4OiAxMCU7XHJcbi8vICAgICAgIC5hc3NpZ24tZm9vdGVyIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgXHJcbi8vICAgICAgICAgLnNldC1yZWplY3Qge1xyXG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zZXQtdmVyaWZ5IHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuLy8gICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4vLyAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGZsZXg6IDM1JTtcclxuLy8gICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4vLyAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuYm9keSB7XHJcbi8vICAgICAgIGZsZXg6IDU1JTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5mb290ZXIge1xyXG4vLyAgICAgICBmbGV4OiAxMCU7XHJcbi8vICAgICAgIC5hc3NpZ24tZm9vdGVyIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgXHJcbi8vICAgICAgICAgLnNldC1yZWplY3Qge1xyXG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zZXQtdmVyaWZ5IHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuLy8gICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4vLyAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGZsZXg6IDM1JTtcclxuLy8gICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4vLyAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuYm9keSB7XHJcbi8vICAgICAgIGZsZXg6IDU1JTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5mb290ZXIge1xyXG4vLyAgICAgICBmbGV4OiAxMCU7XHJcbi8vICAgICAgIC5hc3NpZ24tZm9vdGVyIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgXHJcbi8vICAgICAgICAgLnNldC1yZWplY3Qge1xyXG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zZXQtdmVyaWZ5IHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuLy8gICAgIC8vIGRvIHNvbWV0aGluZyBhZ2FpblxyXG4vLyAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGZsZXg6IDQ1JTtcclxuLy8gICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4vLyAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuYm9keSB7XHJcbi8vICAgICAgIGZsZXg6IDQ1JTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5mb290ZXIge1xyXG4vLyAgICAgICBmbGV4OiAxMCU7XHJcbi8vICAgICAgIC5hc3NpZ24tZm9vdGVyIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgXHJcbi8vICAgICAgICAgLnNldC1yZWplY3Qge1xyXG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE7XHJcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLnNldC12ZXJpZnkge1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm5lb05vdGVzXCI7XHJcbi8vICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTtcclxuLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbi8vICAgICAvLyBkbyBzb21ldGhpbmcgYWdhaW5cclxuLy8gICAgIC5oZWFkZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICBmbGV4OiAzNSU7XHJcbi8vICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4vLyAgICAgICAgIGhlaWdodDogNnJlbTtcclxuLy8gICAgICAgICB3aWR0aDogNnJlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJvZHkge1xyXG4vLyAgICAgICBmbGV4OiA1NSU7XHJcbi8vICAgICB9XHJcbi8vICAgICAuZm9vdGVyIHtcclxuLy8gICAgICAgZmxleDogMTAlO1xyXG4vLyAgICAgICAuYXNzaWduLWZvb3RlciB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICAgIGJvdHRvbTogMDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIFxyXG4vLyAgICAgICAgIC5zZXQtcmVqZWN0IHtcclxuLy8gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibmVvTm90ZXNcIjtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zZXQtdmVyaWZ5IHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbi8vICAgICAgICAgICBmb250LWZhbWlseTogXCJuZW9Ob3Rlc1wiO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE7XHJcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbmlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogI0YxNjI0QTtcclxufVxyXG5cclxuLy8gLnByb2ZpbGV7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbmlvbi1jYXJke1xyXG4gIHBhZGRpbmc6NnB4O1xyXG4gIGJvcmRlcjoycHggc29saWQgc2FsbW9uO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuIFxyXG4gXHJcbn0gXHJcbi8vICBhe1xyXG4vLyBjb2xvcjogYmx1ZTtcclxuLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vIH1cclxuLm9uaG9sZGJ0bntcclxuICAtLWJhY2tncm91bmQ6IGdyYXkgIWltcG9ydGFudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG4gIC8vIHBhZGRpbmc6IDZweDtcclxuICAvLyAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnJlamVjdGVkYnRue1xyXG4gIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxuICAvLyBwYWRkaW5nOiA2cHg7XHJcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi52ZXJpZmllZGJ0bntcclxuICAtLWJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxuICAvLyBwYWRkaW5nOiA2cHg7XHJcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi50ZXh0LWFsaWdue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlQ29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuLnZlcmlmZWlsZHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59XHJcblxyXG4uUmVqZWN0ZWR7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59XHJcblxyXG4uT25ob2xke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbi1yaWdodDogLTVweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbn1cclxuLlVudmVyaWZlaWxke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG4uc3VibWl0e1xyXG4gIC0tYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuICAtLWNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgXHJcblxyXG5cclxufSJdfQ== */";
      /***/
    },

    /***/
    84704:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/validation-profile/validation-profile.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Validation - Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content>\r\n  <ion-content>\r\n    <div\r\n      style=\"\r\n        height: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        overflow-y: hidden;\r\n      \"\r\n    >\r\n      <div class=\"header\" style=\"display: flex; flex-direction: column\">\r\n        <ion-icon\r\n          name=\"arrow-back-outline\"\r\n          size=\"large\"\r\n          style=\"font-size: 25px; position: absolute; top: 10px; z-index: 1000\"\r\n          (click)=\"back()\"\r\n        ></ion-icon>\r\n     \r\n        <div\r\n        *ngIf=\"validationStatus === 'verified'\"\r\n          style=\"\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            min-height: 23px;\r\n            height: auto;\r\n            width: auto;\r\n            min-width: 30%;\r\n            border-radius: 15px;\r\n            padding: 2px;\r\n            background-color: #2f983a;\r\n            position: absolute;\r\n            top: 15px;\r\n            right: 3%;\r\n            z-index: 1000;\r\n          \"\r\n        >\r\n          <span class=\"status-span\">{{validationStatus}}</span>\r\n        </div>\r\n        <div style=\"flex: 3\">\r\n          <app-profile-details\r\n            [personal]=\"resourceInfo['personal']\"\r\n            [artName]=\"brte_status\"\r\n            [profileImageUrl]=\"image\"\r\n          ></app-profile-details>\r\n        </div>\r\n        <div style=\"flex: 0.5\">\r\n          <app-tab-bar\r\n            [menuList]=\"menuList\"\r\n            [selected]=\"selected\"\r\n            (onTabChange)=\"selectMenu($event)\"\r\n          ></app-tab-bar>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"body\"\r\n        style=\"\r\n          display: flex;\r\n          background-color: #f1f3f4;\r\n          overflow-y: scroll;\r\n          padding-bottom: 5px;\r\n        \"\r\n      >\r\n     \r\n        <ion-grid>\r\n          <app-tab-personal\r\n          *ngIf=\"selected ==='Personal'\"\r\n            [personalInfo]=\"resourceInfo['personal']\"\r\n            [socialMediaInfo]=\"resourceInfo['socialMedia']\"\r\n            [validationResult]=\"validatingPersonalFields\"\r\n            [formPersonal]=\"personalForm\"\r\n            (setFormValue)=\"setFormValue($event)\"\r\n            (getValue)=\"getFieldValue($event)\"\r\n            [status]=\"validationStatus\"\r\n            (submit)=\"onSubmit($event)\"\r\n          ></app-tab-personal>\r\n          <app-resource-professional\r\n            [professionalInfo]=\"resourceInfo['professional']\"\r\n            [status]=\"validationStatus\"\r\n            style=\"width: 95%; margin: 2.5%\"\r\n            *ngIf=\"selected==='Professional'\"\r\n          ></app-resource-professional>\r\n          <app-resource-documents\r\n            [documentsInfo]=\"resourceInfo['documents']\"\r\n            [status]=\"validationStatus\"\r\n            style=\"width: 95%; margin: 2.5%\"\r\n            *ngIf=\"selected==='Documents'\"\r\n          ></app-resource-documents>\r\n        </ion-grid>\r\n      </div>\r\n      <div\r\n        class=\"footer\"\r\n        style=\"display: flex; background-color: #eeeeee\"\r\n        *ngIf=\"validationStatus!=='verified' && validationStatus!=='rejected'\"\r\n      >\r\n        <ion-row *ngIf=\"selected ==='Personal'\" class=\"assign-footer\">\r\n          <ion-col size=\"12\" size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n            <button type=\"submit\" class=\"set-verify\" (click)=\"onSubmit()\">\r\n              Next\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"selected !=='Personal'\" class=\"assign-footer\">\r\n          <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n            <button class=\"set-reject\" (click)=\"previousMenu()\">Previous</button>\r\n          </ion-col>\r\n          <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n            <button class=\"set-verify\" (click)=\"showSchoolSuggestion()\">\r\n              Next\r\n            </button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n </ion-content> -->\r\n<!-- style=\"background-color: salmon;color: white;\" -->\r\n<ion-content>\r\n  <!-- <div class=\"profile\"> -->\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: end;\">\r\n      <ion-col size=\"2\"> <ion-badge class=\"verifeild\" *ngIf=\"this.details?.brte_status == '2'\"\r\n          (Change)=\"brtestatus($event)\">VERIFIED</ion-badge></ion-col>\r\n      <ion-col size=\"2\"> <ion-badge class=\"Rejected\" *ngIf=\"this.details?.brte_status == '3'\" color=\"danger\"\r\n          (Change)=\"brtestatus($event)\">REJECTED</ion-badge></ion-col>\r\n      <ion-col size=\"2\"> <ion-badge class=\"Onhold\" *ngIf=\"this.details?.brte_status == '1'\"\r\n          (Change)=\"brtestatus($event)\">ONHOLD</ion-badge></ion-col>\r\n      <ion-col size=\"2\"> <ion-badge class=\"Unverifeild\" *ngIf=\"this.details?.brte_status == null\"\r\n          (Change)=\"brtestatus($event)\">UNVERIFIED</ion-badge></ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"imageColumn\">\r\n      <ion-img src=\"{{this.details?.imageUrl}}\" style=\"height:80px;width: 80px;border-radius: 70px;\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n  <div style=\"text-align: center;font-family: 'Times New Roman';\">\r\n\r\n    <ion-label>{{this.details?.name}}</ion-label>\r\n  </div><br>\r\n  <div style=\"text-align: center;font-family: 'Times New Roman'\">\r\n    <ion-label style=\"background-color: salmon;color: white;padding: 8px;border-radius: 14px;font-size: 12px;\">\r\n      {{this.details?.key_art_form}} - {{this.details?.arts_specialization}}</ion-label>\r\n  </div>\r\n  <!-- </div> -->\r\n  <ion-segment color=\"danger\" value=\"danger\" (click)=\"getTabs($event)\" [(ngModel)]=\"tabsData\" style=\"padding-top: 5px;\">\r\n    <ion-segment-button value=\"1\">\r\n      <ion-label>Personal</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"2\">\r\n      <ion-label>Professional</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"3\">\r\n      <ion-label>Documents</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <div *ngIf=\"tabsData == 1\">\r\n    <ion-col size=\"12\">\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;\">Name</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify; font-family: 'Times New Roman';\">{{this.details?.name}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;\">Gender</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify;font-family: 'Times New Roman';\">{{this.details?.gender == '1' ? 'Male' : this.details?.gender == '2' ?\r\n              'Female' : 'Transgender' }}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;;\">Dob</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify;font-family: 'Times New Roman';\">{{this.details?.dob}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <!-- <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <div style=\"text-align: left;color: black;;\">Age</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: right;\">{{this.details?.name}}</div>\r\n          </ion-col>\r\n        </ion-row> \r\n      </ion-card> -->\r\n      <!-- <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <div style=\"text-align: left;font-weight: bold;\">Special Privilege</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: right;\">{{this.details?.name}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-card> -->\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;\">Contact Number</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify;font-family: 'Times New Roman';\">{{this.details?.contact_no}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;\">Email Id</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify;font-family: 'Times New Roman';\">{{this.details?.email}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: left;color: black;\">Permanent Address</div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div style=\"text-align: justify;font-family: 'Times New Roman';\">\r\n              {{this.details?.doorno}},{{this.details?.street}},{{this.details?.area}},{{this.details?.pincode}}</div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-col>\r\n  </div>\r\n  <div *ngIf=\"tabsData == 2\">\r\n    <ion-card><ion-label style=\"text-align: left;font-weight: bold;color:black\">Experience</ion-label><br>\r\n      <ion-label style=\"text-align: right;font-family: 'Times New Roman';\">{{this.details?.experi_certi_text}}</ion-label>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-label style=\"text-align: left;font-weight: bold;color:black\">Experience Certificate</ion-label><br>\r\n      <a *ngIf=\"this.details?.experience_certi\" (click)=\"viewImage(this.details?.experience_certi,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.experience_certi}}\r\n      </a><br>\r\n    </ion-card>\r\n\r\n\r\n    <!-- <ion-img src=\"{{imageUrl}}\" class=\"img image\"\r\n      width=\"50%\" height=\"50%\" style=\"padding:0;margin:0;\"></ion-img> -->\r\n    <ion-label style=\"text-align: left;font-weight: bold;color:black;margin-left: 10px;\">Education</ion-label><br>\r\n    <ion-card>\r\n\r\n      <ion-label style=\"text-align: left;font-weight: bold;color:black\">10<sup>th</sup>Certificate</ion-label><br>\r\n      <a *ngIf=\"this.details?.edu_certi_10\" (click)=\"viewImage(this.details?.edu_certi_10,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.edu_certi_10}}\r\n      </a></ion-card>\r\n    <ion-card>\r\n      <ion-label style=\"text-align: left;font-weight: bold;color:black\">12<sup>th</sup>Certificate</ion-label><br>\r\n      <a *ngIf=\"this.details?.edu_certi_12\" (click)=\"viewImage(this.details?.edu_certi_12,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.edu_certi_12}}\r\n      </a></ion-card>\r\n    <ion-card>\r\n      <ion-label style=\"text-align: left;font-weight: bold;color:black\">PG Certificate</ion-label><br>\r\n      <a *ngIf=\"this.details?.edu_certi_PG\" (click)=\"viewImage(this.details?.edu_certi_PG,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.edu_certi_PG}}\r\n      </a></ion-card>\r\n    <ion-card>\r\n      <ion-label style=\"text-align: left;font-weight: bold;color:black\">UG Certificate</ion-label><br>\r\n      <a *ngIf=\"this.details?.edu_certi_UG\" (click)=\"viewImage(this.details?.edu_certi_UG,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.edu_certi_UG}}\r\n      </a>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"tabsData == 3\">\r\n    <ion-card><ion-label style=\"text-align: left;font-weight: bold;color:black\">Passbook Details</ion-label><br>\r\n      <a *ngIf=\"this.details?.UploadPassbook\" style=\"text-decoration: underline;font-family: 'Times New Roman';\"\r\n        (click)=\"viewImage(this.details?.UploadPassbook,'model')\" style=\"padding-bottom: 10px;color: blue;\">\r\n        {{this.details?.UploadPassbook}}\r\n      </a>\r\n    </ion-card>\r\n    <ion-card><ion-label style=\"text-align: left;font-weight: bold;color:black\">Aadhaar Details</ion-label><br>\r\n      <a *ngIf=\"this.details?.aadhaar_proof\" style=\"text-decoration: underline;font-family: 'Times New Roman';\"\r\n        (click)=\"viewImage(this.details?.aadhaar_proof,'model')\" style=\"padding-bottom: 10px;color: blue;\">\r\n        {{this.details?.aadhaar_proof}}\r\n      </a>\r\n    </ion-card>\r\n    <ion-card><ion-label style=\"text-align: left;font-weight: bold;color:black\">Voter Id</ion-label><br>\r\n      <a *ngIf=\"this.details?.voterid_proof\" (click)=\"viewImage(this.details?.voterid_proof,'model')\"\r\n        style=\"padding-bottom: 10px;color: blue;font-family: 'Times New Roman';\">\r\n        {{this.details?.voterid_proof}}\r\n      </a>\r\n    </ion-card>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-row>\r\n          <ion-col size=\"4\"\r\n            *ngIf=\"this.details?.brte_status == '3' || this.details?.brte_status == null || this.details?.brte_status == '1'\"\r\n            style=\"text-align: center;\">\r\n            <ion-button class=\"verifiedbtn\" (click)=\"brteverification('2')\">Verified</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\"  *ngIf=\"this.details?.brte_status == '2' || this.details?.brte_status == null || this.details?.brte_status == '3'\">\r\n            <ion-button class=\"onholdbtn\" (click)=\"onholdReject('1')\">Onhold</ion-button>\r\n           \r\n          </ion-col>\r\n          <ion-col size=\"4\"\r\n            *ngIf=\"this.details?.brte_status == '2' || this.details?.brte_status == null || this.details?.brte_status == '1'\"\r\n            style=\"text-align: center;\">\r\n            <ion-button class=\"rejectedbtn\" (click)=\"onholdReject('3')\">Rejected</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row  *ngIf=\"this.eventId == '3' || this.eventId == '1'\">\r\n      <ion-col size=\"12\" *ngIf=\"showreason\">\r\n        <ion-label style=\"margin-left:10px\"><b>Reason</b></ion-label>\r\n        <ion-card>\r\n          <ion-textarea label=\"Reason\" [value]=\"this.reason\" (keyup)=\"reasonChange($event)\"  placeholder=\"Type something here\" >\r\n          </ion-textarea>\r\n        </ion-card>\r\n      </ion-col>  \r\n  </ion-row>\r\n  <ion-row  *ngIf=\"(this.details?.brte_status == '3' || this.details?.brte_status == '1') && !showreason\">\r\n    <ion-col size=\"12\">\r\n      <ion-label style=\"margin-left:10px\"><b>Reason: </b>{{this.details?.Reason}}</ion-label>\r\n      <!-- <ion-card>\r\n        <ion-textarea label=\"Reason\" (keyup)=\"reasonChange($event)\"  placeholder=\"Type something here\">\r\n        </ion-textarea>\r\n      </ion-card> -->\r\n    </ion-col>  \r\n</ion-row>\r\n  <ion-row style=\"text-align: center;\" *ngIf=\"this.eventId == '3' || this.eventId == '1'\">\r\n    <ion-col size=\"12\" *ngIf=\"showreason\">\r\n      <ion-button class=\"verifiedbtn\" (click)=\"brteverification(1)\">SUBMIT</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"4\"></ion-col>\r\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"this.details?.brte_status == '1'\">\r\n        <ion-button class=\"submit\">Resubmit</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </div>\r\n</ion-content>\r\n<!-- *ngFor=\"let list of resourcePersonDump;let i of index\" -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_art-culture_validation-profile_validation-profile_module_ts-es5.js.map