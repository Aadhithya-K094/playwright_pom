(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_school-list_school-list_module_ts"], {
    /***/
    72704:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ndd/school-list/school-list-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageRoutingModule": function SchoolListPageRoutingModule() {
          return (
            /* binding */
            _SchoolListPageRoutingModule
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


      var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list.page */
      60586);

      var routes = [{
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SchoolListPage
      }];

      var _SchoolListPageRoutingModule = /*#__PURE__*/_createClass(function SchoolListPageRoutingModule() {
        _classCallCheck(this, SchoolListPageRoutingModule);
      });

      _SchoolListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolListPageRoutingModule);
      /***/
    },

    /***/
    68623:
    /*!*************************************************************!*\
      !*** ./src/app/pages/ndd/school-list/school-list.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageModule": function SchoolListPageModule() {
          return (
            /* binding */
            _SchoolListPageModule
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


      var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list-routing.module */
      72704);
      /* harmony import */


      var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page */
      60586);

      var _SchoolListPageModule = /*#__PURE__*/_createClass(function SchoolListPageModule() {
        _classCallCheck(this, SchoolListPageModule);
      });

      _SchoolListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolListPageRoutingModule],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SchoolListPage]
      })], _SchoolListPageModule);
      /***/
    },

    /***/
    60586:
    /*!***********************************************************!*\
      !*** ./src/app/pages/ndd/school-list/school-list.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPage": function SchoolListPage() {
          return (
            /* binding */
            _SchoolListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-list.page.html */
      98112);
      /* harmony import */


      var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page.scss */
      9375);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SchoolListPage = /*#__PURE__*/function () {
        function SchoolListPage(router, usersessionService, pmoaService, route) {
          _classCallCheck(this, SchoolListPage);

          this.router = router;
          this.usersessionService = usersessionService;
          this.pmoaService = pmoaService;
          this.route = route;
          this.countdata = [];
        }

        return _createClass(SchoolListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.UserName = this.usersessionService.emis_username();
            this.useriddata = this.usersessionService.user_id();
            this.getdata();
            this.getschoolist();
            this.routeData = this.route.snapshot;
            this.section = this.routeData.queryParams.section;
            this["class"] = this.routeData.queryParams["class"];
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "navigateToClassSection",
          value: function navigateToClassSection(data, id) {
            console.log(data, 'data');
            this.stu_id = id;
            this.router.navigate(['/tabs/ndd/class-list'], {
              queryParams: {
                id: data.BlockId,
                school_id: data.SchoolId,
                school_name: data.SchoolName,
                "class": this["class"],
                section: this.section
              }
            });
            console.log(data.BlockId, data.SchoolId, data.SchoolName, this["class"], this.section);
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this = this;

            this.pmoaService.schoolcount(this.useriddata).subscribe(function (res) {
              _this.countdata = res.result;
              _this.count = _this.countdata.TotSchlCount[0].Count;
              _this.RcvdSchoolCount = _this.countdata.RcvdCount[0].RcvdSchoolCount;
              _this.NotRcvdSchlCount = _this.countdata.RcvdCount[0].NotRcvdSchlCount;
            });
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this2 = this;

            // this.searchData = this.schlist.filter((item: any) => {
            //   return item.SchoolName.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            // });
            this.schlist = [];
            this.searchTerm = event.detail.value.trim();
            this.schlist = this.allschlist.filter(function (item) {
              return item.SchoolName.toLowerCase().indexOf(_this2.searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "getschoolist",
          value: function getschoolist() {
            var _this3 = this;

            this.pmoaService.schoollist(this.useriddata).subscribe(function (res) {
              _this3.schlist = res.result;
              _this3.allschlist = res.result;
            });
          }
        }]);
      }();

      _SchoolListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _SchoolListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-school-list',
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolListPage);
      /***/
    },

    /***/
    9375:
    /*!*************************************************************!*\
      !*** ./src/app/pages/ndd/school-list/school-list.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maindiv {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.schName {\n  font-size: 12px;\n  color: #68529c;\n  font-weight: 600;\n}\n\n.mainCard {\n  padding: 8px;\n  border-radius: 15px;\n  border-left: 4px solid #68529c;\n  border-right: 4px solid #68529c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQywrQkFBQTtBQUdMIiwiZmlsZSI6InNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2e1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uc2NoTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOnJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubWFpbkNhcmR7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICB9XHJcbiAiXX0= */";
      /***/
    },

    /***/
    98112:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/school-list/school-list.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">School List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n     <!-- *ngFor=\"let item of StudentsCounts\" -->\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #6968D9;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{count}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">Total Schools </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Total_School.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #E9A069;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{RcvdSchoolCount}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">Received </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Received1.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #439DE3;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{NotRcvdSchlCount}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">Not Received</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Not_Received1.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  \r\n  <div class=\"maindiv\">\r\n    <ion-searchbar (ionChange)=\"getFilterItems($event)\"></ion-searchbar>\r\n    <ion-card class=\"mainCard\" (click)=\"navigateToClassSection(item,item.SchoolId)\" *ngFor=\"let item of this.schlist\"  >  \r\n      <ion-row>\r\n        <ion-col size=\"10\" class=\"col\">\r\n          <div style=\"width: 100%;\">\r\n            <ion-label class=\"schName\">{{item.SchoolName}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n          </ion-card>\r\n   \r\n\r\n    <!-- <div *ngIf=\"noData\" class=\"listDiv\">\r\n      <div style=\"text-align: center;font-size: 13px; margin-top: 10px;\">\r\n        <ion-label>No Data Found</ion-label>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ndd_school-list_school-list_module_ts-es5.js.map