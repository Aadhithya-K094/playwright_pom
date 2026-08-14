(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_ca-cluster_ca-cluster_module_ts"], {
    /***/
    66848:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-cluster/ca-cluster-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CAClusterPageRoutingModule": function CAClusterPageRoutingModule() {
          return (
            /* binding */
            _CAClusterPageRoutingModule
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


      var _ca_cluster_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-cluster.page */
      25144);

      var routes = [{
        path: '',
        component: _ca_cluster_page__WEBPACK_IMPORTED_MODULE_0__.CAClusterPage
      }];

      var _CAClusterPageRoutingModule = /*#__PURE__*/_createClass(function CAClusterPageRoutingModule() {
        _classCallCheck(this, CAClusterPageRoutingModule);
      });

      _CAClusterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CAClusterPageRoutingModule);
      /***/
    },

    /***/
    23784:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-cluster/ca-cluster.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CAClusterPageModule": function CAClusterPageModule() {
          return (
            /* binding */
            _CAClusterPageModule
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


      var _ca_cluster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-cluster-routing.module */
      66848);
      /* harmony import */


      var _ca_cluster_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-cluster.page */
      25144);

      var _CAClusterPageModule = /*#__PURE__*/_createClass(function CAClusterPageModule() {
        _classCallCheck(this, CAClusterPageModule);
      });

      _CAClusterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ca_cluster_routing_module__WEBPACK_IMPORTED_MODULE_0__.CAClusterPageRoutingModule],
        declarations: [_ca_cluster_page__WEBPACK_IMPORTED_MODULE_1__.CAClusterPage]
      })], _CAClusterPageModule);
      /***/
    },

    /***/
    25144:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-cluster/ca-cluster.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CAClusterPage": function CAClusterPage() {
          return (
            /* binding */
            _CAClusterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ca_cluster_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ca-cluster.page.html */
      51079);
      /* harmony import */


      var _ca_cluster_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-cluster.page.scss */
      49810);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _CAClusterPage = /*#__PURE__*/function () {
        function CAClusterPage(router, cwsnService, alertService, userSessionService, sqliteDB, route, http, ionicstorage, networkService) {
          _classCallCheck(this, CAClusterPage);

          this.router = router;
          this.cwsnService = cwsnService;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.sqliteDB = sqliteDB;
          this.route = route;
          this.http = http;
          this.ionicstorage = ionicstorage;
          this.networkService = networkService;
          this.dataInLolDB = false;
          this.clustoers = [];
          this.zonalId = '';
        }

        return _createClass(CAClusterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            this.ionicstorage.getData('getUserDetailsCwsn').then(function (userData) {
              console.log('userData', userData);
              _this.usertype = userData;
            });
            console.log('usertype', this.usertype);
            console.log('ca-cluster title', this.title, 'mode', this.mode);

            if (this.title == 'My Schools') {
              this.phase = 1;
            } else {
              this.phase = 2;
            } // this.getSplEducatorBlockId();


            this.checkLocalDB();
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            var _this2 = this;

            var query = 'SELECT * FROM cluster_list' + ' WHERE SpeEduId = "' + this.userSessionService.teacher_id() + '"' + ' And phase = "' + this.phase + '" ';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res.rows.length > 0) {
                _this2.clustoers = [];

                for (var i = 0; i < res.rows.length; i++) {
                  _this2.clustoers.push(res.rows.item(i));
                }
              } else {
                _this2.getClusters();
              }

              ;
            });
          }
        }, {
          key: "getSplEducatorBlockId",
          value: function getSplEducatorBlockId() {
            var _this3 = this;

            this.cwsnService.getSplEducatorProfile(this.userSessionService.emis_username()).subscribe(function (res) {
              console.log('getSplEducatorProfile', res);

              if (res.result.length > 0) {
                _this3.splEducatorBlockId = +res.result[0].block_id;

                _this3.checkLocalDB();
              } else {
                _this3.alertService.warning('No Data Found');

                return;
              }
            });
          }
        }, {
          key: "getClusters",
          value: function getClusters() {
            var _this4 = this;

            console.log('getClusters for ca'); // if (this.title == 'My Schools') {

            var nodal_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_userwise_nodal_list_json.json';
            this.http.get(nodal_json).subscribe(function (data) {
              console.log('nodal_data', data);

              if (data) {
                var user_nodal_list = data.filter(function (d) {
                  return d.user_id == _this4.userSessionService.emis_username();
                });
                console.log('user_nodal_list', user_nodal_list);

                _this4.insertCluster(user_nodal_list);
              } else {
                _this4.alertService.warning('No Clusters Found');
              }
            }); // }
          }
        }, {
          key: "insertCluster",
          value: function insertCluster(data) {
            var _this5 = this;

            console.log('data', data);
            var sqlArray = [];
            data.forEach(function (element) {
              sqlArray.push(['INSERT INTO cluster_list VALUES (?,?,?,?,?,?)', [null, _this5.userSessionService.teacher_id(), parseInt(element.IndexId), parseInt(element.zonalId), element.cluName, _this5.phase]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this5.checkLocalDB();
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this6 = this;

            this.networkService.initializeNetworkEvents();

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              var query = 'DELETE FROM cluster_list ' + ' WHERE phase = "' + this.phase + '"';
              this.sqliteDB.executeQuery(query).then(function (res) {
                if (res) {
                  _this6.checkLocalDB();
                }
              });
            } else {
              this.alertService.warning('No internet connection');
            }
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            if (this.title == 'Comprehensive Assessment') {
              this.router.navigate(['/tabs/cwsn-menu'], {
                queryParams: {
                  title: this.title,
                  mode: this.mode
                }
              });
            } else {
              this.router.navigate(['/tabs/cwsn/dashboard']);
            }
          }
        }, {
          key: "navigateSchoolList",
          value: function navigateSchoolList(item) {
            console.log('data navigateSchoolList', item);

            if (item.ZonalId) {
              this.router.navigate(['/tabs/cwsn/ca-school-list'], {
                queryParams: {
                  item: JSON.stringify(item),
                  'mode': this.mode,
                  'title': this.title
                }
              } //  skipLocationChange: true 
              );
            }
          }
        }]);
      }();

      _CAClusterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }];
      };

      _CAClusterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-ca-cluster',
        template: _raw_loader_ca_cluster_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ca_cluster_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CAClusterPage);
      /***/
    },

    /***/
    49810:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-cluster/ca-cluster.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  min-height: 100%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  border-left: 8px solid var(--border-color-left);\n  border-right: 1px solid #fff;\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhLWNsdXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFJRTtFQUNFLGtDQUFBO0FBREo7O0FBSUU7RUFDRSwrQkFBQTtBQURKOztBQUlFO0VBQ0Usd0NBQUE7QUFESjs7QUFLRTtFQUVFLGdCQUFBO0FBSEo7O0FBTU07RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBSlI7O0FBT1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBTFY7O0FBTVU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUpaOztBQVFRO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQVBWOztBQVFVO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFOWjs7QUFXTTtFQUNFLGFBQUE7QUFUUjs7QUFZTTtFQUNFLGdCQUFBO0FBVlIiLCJmaWxlIjoiY2EtY2x1c3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgLy8gYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFsaWdue1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNhcmRzIHtcclxuICAgICAgLy8gcGFkZGluZzogMTBweDsgc2Vjb25kYXktY29sb3JcclxuICAgICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWxlZnQpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50OyBcclxuICAgICAgICAvLyBtYXJnaW46IDEycHggMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTZweDtcclxuICAgICAgICAuY2x1c3Rlci10ZXh0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmljb24tb3V0ZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAuaWNvbi1pbm5lcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWNhcmQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9Il19 */";
      /***/
    },

    /***/
    51079:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/ca-cluster/ca-cluster.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of clusters (CA Cluster)</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards ion-card-inside-padding\">\r\n      <ng-container *ngFor=\"let item of clustoers\">\r\n          <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(item)\">\r\n          <div class=\"cluster-text\">\r\n           <span>{{ item.ClusterNme }}</span>\r\n           <div class=\"icon-outer\">\r\n            <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\"></ion-icon>\r\n           </div>\r\n          </div>\r\n        </ion-card>\r\n      </ng-container>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_ca-cluster_ca-cluster_module_ts-es5.js.map