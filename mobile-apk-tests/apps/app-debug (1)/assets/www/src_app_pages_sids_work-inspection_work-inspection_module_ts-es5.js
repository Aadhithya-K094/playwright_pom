(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_work-inspection_work-inspection_module_ts"], {
    /***/
    377:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/work-inspection-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkInspectionPageRoutingModule": function WorkInspectionPageRoutingModule() {
          return (
            /* binding */
            _WorkInspectionPageRoutingModule
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


      var _work_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./work-inspection.page */
      41836);

      var routes = [{
        path: '',
        component: _work_inspection_page__WEBPACK_IMPORTED_MODULE_0__.WorkInspectionPage
      }];

      var _WorkInspectionPageRoutingModule = /*#__PURE__*/_createClass(function WorkInspectionPageRoutingModule() {
        _classCallCheck(this, WorkInspectionPageRoutingModule);
      });

      _WorkInspectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WorkInspectionPageRoutingModule);
      /***/
    },

    /***/
    74680:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/work-inspection.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkInspectionPageModule": function WorkInspectionPageModule() {
          return (
            /* binding */
            _WorkInspectionPageModule
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


      var _work_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./work-inspection-routing.module */
      377);
      /* harmony import */


      var _work_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work-inspection.page */
      41836);

      var _WorkInspectionPageModule = /*#__PURE__*/_createClass(function WorkInspectionPageModule() {
        _classCallCheck(this, WorkInspectionPageModule);
      });

      _WorkInspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _work_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkInspectionPageRoutingModule],
        declarations: [_work_inspection_page__WEBPACK_IMPORTED_MODULE_1__.WorkInspectionPage]
      })], _WorkInspectionPageModule);
      /***/
    },

    /***/
    41836:
    /*!********************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/work-inspection.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkInspectionPage": function WorkInspectionPage() {
          return (
            /* binding */
            _WorkInspectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_work_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./work-inspection.page.html */
      73660);
      /* harmony import */


      var _work_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work-inspection.page.scss */
      62448);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _sids_demolish_build_sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sids-demolish-build/sids-demolish-build.page */
      12748);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476); // import { v4 as uuidv4 } from 'uuid';


      var _WorkInspectionPage = /*#__PURE__*/function () {
        function WorkInspectionPage(router, http, usersessionService, ionicstorage, location, modalCtrl, alertService, networkService, alertController, SidsService) {
          _classCallCheck(this, WorkInspectionPage);

          this.router = router;
          this.http = http;
          this.usersessionService = usersessionService;
          this.ionicstorage = ionicstorage;
          this.location = location;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.networkService = networkService;
          this.alertController = alertController;
          this.SidsService = SidsService;
          this.inspectionList = [];
          this.dataNotSave = false;
          this.selectVal = '';
          this.user_id = this.usersessionService.emis_username();
          this.emis_usertype = this.usersessionService.emis_usertype();
          this.district_id = this.usersessionService.district_id();
          this.dist_id = this.usersessionService.dist_id();
          this.schoolKeyId = this.usersessionService.school_key_id(); // this.generatedUuid = uuidv4();
          // this.dublicakt = uuidv4();

          console.log(this.emis_usertype, 'this.district_id');
          console.log(this.schoolKeyId, 'this.schoolKeyId');
        }

        return _createClass(WorkInspectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.localstoragecheck();
            console.log(this.district_id, 'this.district_id');
            console.log(this.dist_id, 'this.dist_id');
            console.log(this.schoolKeyId, 'this.schoolKeyId');
            this.selectVal = '';
            this.dataNotSave = false;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.mod = this.usersessionService.mod1();
            var index = this.mod.indexOf('20');

            if (0 <= index) {
              this.homeActive = true;
            } else {
              this.homeActive = false;
            }

            console.log(this.homeActive, index);
          }
        }, {
          key: "onBack",
          value: function onBack() {
            // this.location.back();
            if (this.homeActive == true) {
              this.router.navigate(['/tabs/home']);
            }

            if (this.homeActive == false) {
              this.router.navigate(['/tabs/dashboard']);
            }
          }
        }, {
          key: "localstoragecheck",
          value: function localstoragecheck() {
            var _this = this;

            this.ionicstorage.getData('date').then(function (dataa1) {
              _this.datecheck = dataa1;

              _this.getlocalstorage();
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('Records').then(function (data) {
              if (data && data.length > 0) {
                _this.dataNotSave = true;
                var records = {
                  "json": data
                };

                if (_this.networkService.getCurrentNetworkStatus() == 0) {
                  _this.SidsService.PostinsWorkForm(records).subscribe(function (res) {
                    if (res.dataStatus == true && res.status == 200) {
                      // this.alertService.success("Data Insert Successfully")
                      _this.ionicstorage.removeKey('Records');

                      _this.dataNotSave = false;
                    }
                  });
                }
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('StageList').then(function (dataa1) {
              _this.StageList = dataa1;
              _this.StageListdrp = dataa1;

              _this.StageListdrp.forEach(function (x) {
                if (x.id == 27 || x.id == 28 || x.id == 29) {
                  x.stage = x.stage + '-' + x.work_desc;
                } else if (x.stage == 'Work not started') {
                  x.stage = x.stage + '-' + x.work_desc;
                }
              });

              if (_this.emis_usertype == 8) {
                _this.StageListdrp = _this.StageListdrp.filter(function (x) {
                  return x.work_type_id == 3;
                });
              }

              console.log(_this.StageList, 'this.StageList');
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "getlocalstorage",
          value: function getlocalstorage() {
            var _this2 = this;

            debugger;
            var checkdata = new Date().toISOString().split('T')[0];

            if (checkdata != this.datecheck) {
              this.getJsonData();
            } else {
              this.ionicstorage.getData('inspectionData').then(function (dataas) {
                if (_this2.emis_usertype == 8) {
                  // this.inspectionList = dataas.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
                  // this.datasaveList = dataas.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
                  _this2.inspectionList = dataas.filter(function (x) {
                    return x.work_type_id == 3 && x.school_id == _this2.schoolKeyId;
                  });
                  _this2.datasaveList = dataas.filter(function (x) {
                    return x.work_type_id == 3 && x.school_id == _this2.schoolKeyId;
                  });
                } else {
                  // this.inspectionList = dataas.filter(x => x.cur_stage_name != "Demolition not required");
                  // this.datasaveList = dataas.filter(x => x.cur_stage_name != "Demolition not required");
                  _this2.inspectionList = dataas;
                  _this2.datasaveList = dataas;
                }

                _this2.checkRowEdit();

                console.log(_this2.inspectionList, 'local call');
              }, function (error) {
                return console.error(error);
              });
            }
          } // getJsonData() {
          //   // var url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_list_json_"+this.user_id+".json"
          //   // this.http.get<any>(url).subscribe((data) => {
          //   //     var columns  =data.columns
          //   //     var data  = data.data
          //   //     const jsonData = data.map(row => {
          //   //       const obj = {};
          //   //       columns.forEach((column, index) => {
          //   //         obj[column] = row[index]== null  ? "" :  row[index].toString();
          //   //       });
          //   //       return obj;
          //   //     });
          //   //     // Now `jsonData` is an array of objects, each representing a row of data with named properties.
          //   //     this.inspectionList = jsonData
          //   //     this.datasaveList = jsonData
          //   //     this.ionicstorage.insertData_Replace('datasaveList', this.datasaveList)
          //   //     let date = new Date().toISOString().split('T')[0]
          //   //     this.ionicstorage.insertData_Replace('date', date)
          //   // });
          //   let url2 = '';
          //   //production
          //   if(this.emis_usertype == 8){
          //     url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_json_"+this.dist_id+".json"
          //   }
          //   else{
          //     url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_json_"+this.district_id+".json"
          //   }
          //   //stagging
          //   // if(this.emis_usertype == 8){
          //   //   url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.dist_id+".json"
          //   // }
          //   // else{
          //   //   url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.district_id+".json"
          //   // }
          //   // let url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.district_id+".json"
          //   this.http.get<any>(url2).subscribe((data) => {
          //     if(this.emis_usertype == 8){
          //       // this.inspectionList = data.list.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
          //       // this.datasaveList = data.list.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
          //       this.inspectionList = data.list.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
          //       this.datasaveList = data.list.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
          //     }
          //     else{
          //       // this.inspectionList = data.list.filter(x => x.cur_stage_name != "Demolition not required");
          //       // this.datasaveList = data.list.filter(x => x.cur_stage_name != "Demolition not required");
          //       this.inspectionList = data.list;
          //       this.datasaveList = data.list;
          //     }
          //     this.checkRowEdit();
          //     // this.inspectionList = data.list
          //     // this.datasaveList  = data.list
          //     console.log(this.inspectionList, 'json call')
          //     this.ionicstorage.insertData_Replace('inspectionData', this.inspectionList)
          //     let date = new Date().toISOString().split('T')[0]
          //     this.ionicstorage.insertData_Replace('date', date)
          //   });
          //   let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master.json"
          //   // let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master_stage.json"
          //   this.http.get<any>(url).subscribe((data) => {
          //     this.StageList = data.stages
          //     console.log(this.StageList, 'this.stageList')
          //     this.ionicstorage.insertData_Replace('StageList', this.StageList)
          //     this.StageListdrp = data.stages
          //     this.StageListdrp.forEach(x => {
          //       if(x.id == 27 || x.id == 28 || x.id == 29){
          //         x.stage = x.stage+'-'+x.work_desc
          //       }
          //       else if(x.stage == 'Work not started'){
          //         x.stage = x.stage+'-'+x.work_desc
          //       }
          //     })
          //     this.StageListdrp.push({
          //       "id":0,
          //       "stage":"All"
          //     })
          //     if(this.emis_usertype == 8){
          //       this.StageListdrp = this.StageListdrp.filter(x => x.work_type_id == 3)
          //     }
          //     console.log(this.StageListdrp, 'this.StageListdrp')
          //   });
          // }

        }, {
          key: "getJsonData",
          value: function getJsonData() {
            var _this3 = this;

            // var url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_list_json_"+this.user_id+".json"
            // this.http.get<any>(url).subscribe((data) => {
            //     var columns  =data.columns
            //     var data  = data.data
            //     const jsonData = data.map(row => {
            //       const obj = {};
            //       columns.forEach((column, index) => {
            //         obj[column] = row[index]== null  ? "" :  row[index].toString();
            //       });
            //       return obj;
            //     });
            //     // Now `jsonData` is an array of objects, each representing a row of data with named properties.
            //     this.inspectionList = jsonData
            //     this.datasaveList = jsonData
            //     this.ionicstorage.insertData_Replace('datasaveList', this.datasaveList)
            //     let date = new Date().toISOString().split('T')[0]
            //     this.ionicstorage.insertData_Replace('date', date)
            // });
            // Use backend API instead of static CloudFront JSON
            this.SidsService.HMinspection_list(this.user_id).subscribe(function (res) {
              var _a, _b, _c, _d, _e;

              var list = (_e = (_d = (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : res === null || res === void 0 ? void 0 : res.list) !== null && _c !== void 0 ? _c : res === null || res === void 0 ? void 0 : res.data) !== null && _d !== void 0 ? _d : res) !== null && _e !== void 0 ? _e : [];

              if (_this3.emis_usertype == 8) {
                _this3.inspectionList = list.filter(function (x) {
                  return String(x.work_type_id) === '3' && String(x.school_id) === String(_this3.schoolKeyId);
                });
                _this3.datasaveList = list.filter(function (x) {
                  return String(x.work_type_id) === '3' && String(x.school_id) === String(_this3.schoolKeyId);
                });
              } else {
                _this3.inspectionList = Array.isArray(list) ? list : [];
                _this3.datasaveList = Array.isArray(list) ? list : [];
              }

              _this3.checkRowEdit();

              console.log(_this3.inspectionList, 'api call');

              _this3.ionicstorage.insertData_Replace('inspectionData', _this3.inspectionList);

              var date = new Date().toISOString().split('T')[0];

              _this3.ionicstorage.insertData_Replace('date', date);
            }, function (err) {
              console.error('HMinspection_list error', err);
            });
            var url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master.json"; // let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master_stage.json"

            this.http.get(url).subscribe(function (data) {
              _this3.StageList = data.stages;
              console.log(_this3.StageList, 'this.stageList');

              _this3.ionicstorage.insertData_Replace('StageList', _this3.StageList);

              _this3.StageListdrp = data.stages;

              _this3.StageListdrp.forEach(function (x) {
                if (x.id == 27 || x.id == 28 || x.id == 29) {
                  x.stage = x.stage + '-' + x.work_desc;
                } else if (x.stage == 'Work not started') {
                  x.stage = x.stage + '-' + x.work_desc;
                }
              });

              _this3.StageListdrp.push({
                "id": 0,
                "stage": "All"
              });

              if (_this3.emis_usertype == 8) {
                _this3.StageListdrp = _this3.StageListdrp.filter(function (x) {
                  return x.work_type_id == 3;
                });
              }

              console.log(_this3.StageListdrp, 'this.StageListdrp');
            });
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this4 = this;

            console.log(this.selectVal, 'selectVal');
            this.inspectionList = [];
            var sData = event.detail.value.trim();
            console.log(this.inspectionList, 'this.inspectionList');

            if (sData) {
              var searchKeyword = String(sData);
              this.inspectionList = this.datasaveList.filter(function (item) {
                return _this4.rowContainsKeyword(item, searchKeyword);
              });
            } else {
              this.inspectionList = this.datasaveList;
            }
          }
        }, {
          key: "rowContainsKeyword",
          value: function rowContainsKeyword(row, keyword) {
            for (var key in row) {
              if (row.hasOwnProperty(key)) {
                var cellValue = String(row[key]);

                if (cellValue.includes(keyword)) {
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "getfilterstge",
          value: function getfilterstge(event) {
            this.inspectionList = [];
            var sData = event.detail.value;
            debugger;

            if (sData == "0") {
              this.inspectionList = this.datasaveList;
            } else if (sData == "") {
              debugger;
              this.inspectionList = this.datasaveList.filter(function (item) {
                return item.cur_stage == "";
              });
            } else {
              this.inspectionList = this.datasaveList.filter(function (item) {
                return item.cur_stage == sData;
              });
            }
          }
        }, {
          key: "gotoStageForm",
          value: function gotoStageForm(params) {
            debugger;

            if (params.cur_stage != 21 && params.cur_stage != 11 && params.cur_stage != 16 && params.cur_stage != 26) {
              var checkdata = new Date().toISOString().split('T')[0]; // if (checkdata != this.datecheck) {

              this.router.navigate(['/tabs/my-inspection-from'], {
                queryParams: {
                  'id': 1,
                  'school_id': params.school_id,
                  'list_id': params.id,
                  'curr_stage': params.cur_stage,
                  'work_type_id': params.work_type_id
                }
              }); // }
            } else if (params.cur_stage == 26) {
              this.alertService.error('Please upload the photo for the given status');
            } else {
              this.alertPopUp();
            }
          }
        }, {
          key: "viewTimeline",
          value: function viewTimeline(data) {
            debugger;
            console.log(data);
            this.router.navigate(['/tabs/work-inspection-stage'], {
              queryParams: {
                'school_id': data.school_id,
                'list_id': data.id,
                'curr_stage': data.cur_stage
              }
            });
          }
        }, {
          key: "alertPopUp",
          value: function alertPopUp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: '',
                      subHeader: 'Work Completed ',
                      // message: `<ul class='offline-popup'>
                      //             <li>1. Do Not Log Out</li>
                      //             <li>2. Do Not Clear The RAM</li>
                      //             <li>3. After Connecting to Internet Please Hit the Save Pending Data Button Below</li>
                      //           </ul>`,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {}
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addBuilding",
          value: function addBuilding() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalCtrl.create({
                      component: _sids_demolish_build_sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_7__.SidsDemolishBuildPage
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    _context2.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context2.v;
                    data = _yield$modal$onWillDi.data;
                    // ALWAYS refresh data after modal closes (whether saved or cancelled)
                    this.refreshData();

                  case 4:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "refreshData",
          value: function refreshData() {
            var _this5 = this;

            // Clear current data
            this.inspectionList = []; // Call your API directly

            this.SidsService.HMinspection_list(this.user_id).subscribe(function (response) {
              var _a;

              console.log('Refreshing data after modal close...');
              var rawList = ((_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.list) || [];

              if (_this5.emis_usertype == 8) {
                _this5.inspectionList = rawList.filter(function (item) {
                  return item.work_type_id === "3" && item.school_id === _this5.schoolKeyId;
                });
              } else {
                _this5.inspectionList = rawList;
              }

              _this5.datasaveList = _toConsumableArray(_this5.inspectionList); // Update local storage

              _this5.ionicstorage.insertData_Replace('inspectionData', _this5.inspectionList);

              _this5.ionicstorage.insertData_Replace('date', new Date().toISOString().split('T')[0]);

              _this5.checkRowEdit();

              console.log('Table data refreshed:', _this5.inspectionList.length, 'items');
            }, function (error) {
              console.error('API Error during refresh:', error); // Fallback to local storage

              _this5.getlocalstorage();
            });
          } // gotoStageForm(params){
          //   debugger
          //   let checkdata = new Date().toISOString().split('T')[0]
          //   // let obj = { 
          //   //   "list_id": params.id,
          //   //   "school_id": params.school_id,
          //   //   "work_type_id": params.work_type_id,
          //   //   "udise_code": params.udise_code,
          //   //   "school_name": params.school_name,
          //   // }
          //   // let timeLineobj = {}
          //   // let timeObj = this.StageList.filter(x => x.work_type_id == params.work_type_id)
          //   // if(params.school_id == undefined){params.school_id = {}}
          //   // timeLineobj[params.school_id] = timeObj
          //   // this.ionicstorage.insertData_Replace('timeLine', timeLineobj)
          //   // this.ionicstorage.insertData_Replace('listSchlId', obj)
          //   if (checkdata != this.datecheck) {
          //     let checksdf = params?.stages.filter(y => y.status == "completed")
          //     if(checksdf.length > 0){
          //       this.router.navigate(['/tabs/work-inspection-stage'],{ queryParams: { 'school_id':params.school_id}});
          //     }
          //     else{
          //       this.router.navigate(['/tabs/my-inspection-from'],{ queryParams: { 'id':1, 'school_id':params.school_id}});
          //     }
          //   }
          //   // else{
          //   //   // this.router.navigate(['/tabs/my-inspection-from'],
          //   //   // { queryParams: { 'school_id':data.school_id, 'list_id':data.list_id,'work_type_id':data.work_type_id,}});
          //   //   let checksdf = params?.stages.filter(y => y.status == "completed")
          //   //   if(checksdf.length > 0){
          //   //     this.router.navigate(['/tabs/work-inspection-stage'],{ queryParams: { 'school_id':params.school_id}});
          //   //   }
          //   //   else{
          //   //     this.router.navigate(['/tabs/my-inspection-from'], { queryParams: { 'id':1, 'school_id':params.school_id}});
          //   //   }
          //   // }
          // }

        }, {
          key: "editData",
          value: function editData(arg) {
            this.router.navigate(['/tabs/my-inspection-from'], {
              queryParams: {
                'id': 1,
                'school_id': arg.school_id,
                'list_id': arg.id,
                'curr_stage': arg.cur_stage,
                'work_type_id': arg.work_type_id,
                'editStage': 1
              }
            });
          }
        }, {
          key: "checkRowEdit",
          value: function checkRowEdit() {
            if (this.inspectionList != undefined && this.inspectionList != null) {
              this.inspectionList.forEach(function (x) {
                var stg = x.stages.filter(function (z) {
                  return z.status == "completed" && z.image == 0 && z.image == '' && z.stage != "Request Letter Sent";
                });
                console.log(stg, 'stg');

                if (stg.length == 0) {
                  x.enableEdit = 0;
                } else {
                  x.enableEdit = 1;
                }
              });
            }

            if (this.datasaveList != undefined && this.datasaveList != null) {
              this.datasaveList.forEach(function (x) {
                var stg = x.stages.filter(function (z) {
                  return z.status == "completed" && z.image == 0 && z.image == '' && z.stage != "Request Letter Sent";
                });
                console.log(stg, 'stg');

                if (stg.length == 0) {
                  x.enableEdit = 0;
                } else {
                  x.enableEdit = 1;
                }
              });
            }
          }
        }]);
      }();

      _WorkInspectionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService
        }];
      };

      _WorkInspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-work-inspection',
        template: _raw_loader_work_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_work_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WorkInspectionPage);
      /***/
    },

    /***/
    62448:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/work-inspection.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-content {\n  padding: 5px;\n  box-sizing: border-box;\n}\n\n.data-alert {\n  background: #d90000;\n  color: #fff;\n  width: 90%;\n  margin: 10px auto 0px;\n  border-radius: 10px;\n  padding: 5px 10px;\n  display: flex;\n  position: fixed;\n  left: 0px;\n  top: 53px;\n  right: 0px;\n  z-index: 3;\n}\n\n.data-alert ion-icon {\n  font-size: 35px;\n  margin-right: 7px;\n}\n\n.scrl-tbl {\n  overflow: auto;\n  padding: 0px;\n  border-radius: 15px;\n  position: fixed;\n  top: 150px;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 5px;\n  font-size: 12px;\n}\n\ntd ion-icon, th ion-icon {\n  font-size: 20px;\n  color: #9162b0;\n}\n\ntr:nth-child(even) {\n  background-color: #f3e8fe;\n}\n\n.select {\n  max-width: 80% !important;\n  padding: 0px !important;\n  height: 15px;\n  margin: 2px;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.ion_col_select {\n  margin-top: 14px !important;\n}\n\n.searchbar {\n  margin-top: 10px;\n  height: 49px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstaW5zcGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUU7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJTjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUFBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoid29yay1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhLWFsZXJ0e1xyXG4gICAgYmFja2dyb3VuZDogI2Q5MDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDUzcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2NybC10Ymx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjOTE2MmIwO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIzMiwgMjU0KVxyXG4gIH1cclxuXHJcblxyXG5cclxuLnNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcblxyXG59XHJcbi5pb25fY29sX3NlbGVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc2VhcmNoYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNDlweFxyXG4gIFxyXG5cclxufSJdfQ== */";
      /***/
    },

    /***/
    73660:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/work-inspection/work-inspection.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Civil inspection</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <div>\r\n    Generated UUID: {{ generatedUuid }}\r\n  </div>\r\n  <div>\r\n    dublicakt UUID: {{ dublicakt }}\r\n  </div> -->\r\n  <div class=\"data-alert\" *ngIf=\"dataNotSave\">\r\n    <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    <span>Your data is not synced to server. Please turn on your internet connection.</span>\r\n  </div>\r\n  <ion-row style=\"margin-bottom: -3.5rem !important;\" class=\"container \" >\r\n    <ion-col size = \"6\">\r\n      <ion-searchbar *ngIf=\"emis_usertype != 8\" class=\"shadow rounded searchbar\" (ionChange)=\"getFilterItems($event)\" placeholder=\"UDISE Search\"></ion-searchbar>\r\n    </ion-col>\r\n\r\n     <ion-col *ngIf=\"emis_usertype == 8\" size = \"6\" class=\"ion_col_select \" >\r\n      <ion-button (click)=\"addBuilding()\" style=\"width: 100%; font-size: 12px; color: white; font-weight: bold;\">Add Demolish <br> Building</ion-button>\r\n    </ion-col>\r\n\r\n    <ion-col *ngIf=\"emis_usertype != 8\" size = \"6\" class=\"shadow p-3 mb-5 bg-white rounded ion_col_select \" >\r\n      <ion-select ok-text=\"Ok\" [(ngModel)]=\"selectVal\" cancel-text=\"Dismiss\" class=\"select\" (ionChange)=\"getfilterstge($event)\" placeholder=\"All\"  >\r\n      <ion-select-option [value]=\"item1.id\" *ngFor=\"let item1 of StageListdrp\"> {{item1.stage}}\r\n      </ion-select-option>\r\n      </ion-select>\r\n \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card class=\"card-content scrl-tbl\">\r\n  <table >\r\n    <tr style=\"background-color: #8B67B3;color:#ffffff;position: sticky;top:0px;z-index: 1;\">\r\n      <th>S.No</th>\r\n      <th>Udise Code</th>\r\n      <th>School Name</th>\r\n      <th>Type of Project</th>\r\n      <th>Type of Work</th>\r\n      <th>Construction Agency</th>\r\n      <th>Status</th>\r\n      <th>History</th>\r\n      <!-- <th>Action</th> -->\r\n    </tr>\r\n      <tr *ngFor=\"let data of inspectionList;let i = index;\">\r\n        <td (click)=\"gotoStageForm(data)\">{{i+1}}</td>\r\n        <td (click)=\"gotoStageForm(data)\"><span style=\"text-decoration:underline;color:blue;\">{{data.udise_code}}</span></td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.school_name}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.work}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.work_type}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.agency}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.stage_name }}</td>\r\n        <td style=\"text-align: center;\" *ngIf=\"data.stage_name != 'Not Updated'\"><ion-icon name=\"eye-outline\" (click)=\"viewTimeline(data)\"></ion-icon></td>\r\n        <td style=\"text-align: center;\" *ngIf=\"data.stage_name == 'Not Updated'\">-</td>\r\n        <!-- <td style=\"text-align: center;\" *ngIf=\"data.work_type_id == '3' && data.stage_name != 'Not Updated' && data.enableEdit == 0\"><ion-icon name=\"create-outline\" (click)=\"editData(data)\"></ion-icon></td> -->\r\n        <!-- <td style=\"text-align: center;\" *ngIf=\"data.work_type_id != '3' || (data.work_type_id == '3' && data.stage_name == 'Not Updated' || data.enableEdit == 0)\">-</td> -->\r\n      </tr>\r\n      <tr *ngIf=\"emis_usertype == 8 && inspectionList.length == 0\">\r\n        <td colspan=\"8\" style=\"text-align: center;\"><h6 style=\"color:#000;margin:15px 0px;\"><b>Building to be demolish not available in the school</b></h6></td>\r\n      </tr>\r\n    <!-- <div  *ngIf=\"inspectionList.length == 0\">\r\n      <div class=\"m-2\">\r\n          No Records Found\r\n      </div>\r\n    </div> -->\r\n  \r\n  </table>\r\n</ion-card>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_work-inspection_work-inspection_module_ts-es5.js.map