(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cluster_cluster_module_ts"], {
    /***/
    33973:
    /*!**************************************************************!*\
      !*** ./src/app/pages/cwsn/cluster/cluster-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClusterPageRoutingModule": function ClusterPageRoutingModule() {
          return (
            /* binding */
            _ClusterPageRoutingModule
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


      var _cluster_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cluster.page */
      78048);

      var routes = [{
        path: '',
        component: _cluster_page__WEBPACK_IMPORTED_MODULE_0__.ClusterPage
      }];

      var _ClusterPageRoutingModule = /*#__PURE__*/_createClass(function ClusterPageRoutingModule() {
        _classCallCheck(this, ClusterPageRoutingModule);
      });

      _ClusterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClusterPageRoutingModule);
      /***/
    },

    /***/
    54094:
    /*!******************************************************!*\
      !*** ./src/app/pages/cwsn/cluster/cluster.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClusterPageModule": function ClusterPageModule() {
          return (
            /* binding */
            _ClusterPageModule
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


      var _cluster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cluster-routing.module */
      33973);
      /* harmony import */


      var _cluster_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cluster.page */
      78048);

      var _ClusterPageModule = /*#__PURE__*/_createClass(function ClusterPageModule() {
        _classCallCheck(this, ClusterPageModule);
      });

      _ClusterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cluster_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClusterPageRoutingModule],
        declarations: [_cluster_page__WEBPACK_IMPORTED_MODULE_1__.ClusterPage]
      })], _ClusterPageModule);
      /***/
    },

    /***/
    78048:
    /*!****************************************************!*\
      !*** ./src/app/pages/cwsn/cluster/cluster.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClusterPage": function ClusterPage() {
          return (
            /* binding */
            _ClusterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cluster_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cluster.page.html */
      81853);
      /* harmony import */


      var _cluster_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cluster.page.scss */
      30943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);

      var _ClusterPage = /*#__PURE__*/function () {
        function ClusterPage(router, cwsnService, alertService, userSessionService, sqliteDB, route, http, networkService) {
          _classCallCheck(this, ClusterPage);

          this.router = router;
          this.cwsnService = cwsnService;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.sqliteDB = sqliteDB;
          this.route = route;
          this.http = http;
          this.networkService = networkService;
          this.dataInLolDB = false; // clustoers: { IndexId: number, ZonalId: string, ClusterNme: string }[] = [
          //   // { id:1, name:'C U BOYS HS WASHERMENPET', icon:'arrow-forward-outline'},
          //   // { id:2, name:'CHENNAI BOYS HIGH SCHOOL SURIYA NARAYANA CHETTY  STREET', icon:'arrow-forward-outline'},
          //   // { id:3, name:' CHENNAI GIRLS HIGHER SECONDARY SCHOOL -ROTLER STREET', icon:'arrow-forward-outline'},
          //   // { id:4, name:'CHENNAI HIGH SCHOOL, CHINDATRIPET', icon:'arrow-forward-outline'},
          //   // { id:5, name:'CHENNAI HIGHER SECONDARY SCHOOL APPASAMY LANE', icon:'arrow-forward-outline'}
          // ];

          this.clustoers = [];
          this.zonalId = '';
        }

        return _createClass(ClusterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            console.log('title', this.title, 'mode', this.mode);

            if (this.title == 'My Schools') {
              this.phase = 1;
            } else {
              this.phase = 2;
            }

            this.checkLocalDB();
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            var _this = this;

            var query = 'SELECT * FROM cluster_list' + ' WHERE SpeEduId = "' + this.userSessionService.teacher_id() + '"' + ' And phase = "' + this.phase + '" ';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res.rows.length > 0) {
                _this.clustoers = [];

                for (var i = 0; i < res.rows.length; i++) {
                  _this.clustoers.push(res.rows.item(i));
                }
              } else {
                _this.getClusters();
              }

              ;
            });
          }
        }, {
          key: "getSplEducatorBlockId",
          value: function getSplEducatorBlockId() {
            var _this2 = this;

            this.cwsnService.getSplEducatorProfile(this.userSessionService.emis_username()).subscribe(function (res) {
              if (res.result.length > 0) {
                _this2.splEducatorBlockId = +res.result[0].block_id;

                _this2.checkLocalDB();
              } else {
                _this2.alertService.warning('No Data Found');

                return;
              }
            });
          }
        }, {
          key: "getClusters",
          value: function getClusters() {
            var _this3 = this;

            // if (this.title == 'My Schools') {
            var nodal_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_userwise_nodal_list_json.json';
            this.http.get(nodal_json).subscribe(function (data) {
              console.log('nodal_data', data);

              if (data) {
                var user_nodal_list = data.filter(function (d) {
                  return d.user_id == _this3.userSessionService.emis_username();
                });
                console.log('user_nodal_list', user_nodal_list);

                if (user_nodal_list.length > 0) {
                  _this3.insertCluster(user_nodal_list);
                } else {
                  _this3.alertService.warning('No Clusters Found');
                }
              } else {
                _this3.alertService.warning('No Clusters Found');
              }
            }, function (error) {
              _this3.alertService.warning('No Clusters Found');
            }); // }
          }
        }, {
          key: "insertCluster",
          value: function insertCluster(data) {
            var _this4 = this;

            console.log('data', data);
            var sqlArray = [];
            data.forEach(function (element) {
              sqlArray.push(['INSERT INTO cluster_list VALUES (?,?,?,?,?,?)', [null, _this4.userSessionService.teacher_id(), parseInt(element.IndexId), parseInt(element.zonalId), element.cluName, _this4.phase]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              console.log('insertres', insertres);

              _this4.checkLocalDB();
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this5 = this;

            this.networkService.initializeNetworkEvents();

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              var query = 'DELETE FROM cluster_list ' + ' WHERE phase = "' + this.phase + '"';
              this.sqliteDB.executeQuery(query).then(function (res) {
                if (res) {
                  _this5.checkLocalDB();
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
            if (item.ZonalId) {
              var id = parseInt(item.ZonalId);
              this.router.navigate(["/tabs/cwsn/school-list-cwsn/".concat(id)], {
                queryParams: {
                  id: item,
                  'mode': this.mode,
                  'title': this.title
                }
              } //  skipLocationChange: true 
              );
            }
          }
        }]);
      }();

      _ClusterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }];
      };

      _ClusterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-cluster',
        template: _raw_loader_cluster_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.Emulated,
        styles: [_cluster_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClusterPage);
      /***/
    },

    /***/
    30943:
    /*!******************************************************!*\
      !*** ./src/app/pages/cwsn/cluster/cluster.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  min-height: 100%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  border-left: 8px solid var(--border-color-left);\n  border-right: 1px solid #fff;\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLGtDQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtBQURGOztBQUlBO0VBQ0Usd0NBQUE7QUFERjs7QUFLQTtFQUVFLGdCQUFBO0FBSEY7O0FBTUk7RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBSk47O0FBT007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBTVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUpWOztBQVFNO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQVBSOztBQVFRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFOVjs7QUFXSTtFQUNFLGFBQUE7QUFUTjs7QUFZSTtFQUNFLGdCQUFBO0FBVk4iLCJmaWxlIjoiY2x1c3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIC8vIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIC8vIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKVxyXG59XHJcblxyXG4uY2FyZC1hbGlnbntcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIC5jYXJkcyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4OyBzZWNvbmRheS1jb2xvclxyXG4gICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1sZWZ0KTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAvLyBtYXJnaW46IDEycHggMDtcclxuICAgICAvLyBtYXJnaW46IDE2cHg7XHJcbiAgICAgIC5jbHVzdGVyLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuaWNvbi1vdXRlciB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIC5pY29uLWlubmVye1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ== */";
      /***/
    },

    /***/
    81853:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cluster/cluster.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of clusters</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards ion-card-inside-padding\">\r\n      <ng-container *ngFor=\"let item of clustoers\">\r\n          <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(item)\">\r\n          <div class=\"cluster-text\">\r\n           <span>{{ item.ClusterNme }}</span>\r\n           <div class=\"icon-outer\">\r\n            <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\"></ion-icon>\r\n           </div>\r\n          </div>\r\n        </ion-card>\r\n      </ng-container>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_cluster_cluster_module_ts-es5.js.map