(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_statistics_statistic_statistic_module_ts"], {
    /***/
    53927:
    /*!************************************************************************!*\
      !*** ./src/app/pages/statistics/statistic/statistic-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatisticPageRoutingModule": function StatisticPageRoutingModule() {
          return (
            /* binding */
            _StatisticPageRoutingModule
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


      var _statistic_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./statistic.page */
      51785);

      var routes = [{
        path: '',
        component: _statistic_page__WEBPACK_IMPORTED_MODULE_0__.StatisticPage
      }];

      var _StatisticPageRoutingModule = /*#__PURE__*/_createClass(function StatisticPageRoutingModule() {
        _classCallCheck(this, StatisticPageRoutingModule);
      });

      _StatisticPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StatisticPageRoutingModule);
      /***/
    },

    /***/
    98856:
    /*!****************************************************************!*\
      !*** ./src/app/pages/statistics/statistic/statistic.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatisticPageModule": function StatisticPageModule() {
          return (
            /* binding */
            _StatisticPageModule
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


      var _statistic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./statistic-routing.module */
      53927);
      /* harmony import */


      var _statistic_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistic.page */
      51785);

      var _StatisticPageModule = /*#__PURE__*/_createClass(function StatisticPageModule() {
        _classCallCheck(this, StatisticPageModule);
      });

      _StatisticPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _statistic_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatisticPageRoutingModule],
        declarations: [_statistic_page__WEBPACK_IMPORTED_MODULE_1__.StatisticPage]
      })], _StatisticPageModule);
      /***/
    },

    /***/
    51785:
    /*!**************************************************************!*\
      !*** ./src/app/pages/statistics/statistic/statistic.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatisticPage": function StatisticPage() {
          return (
            /* binding */
            _StatisticPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_statistic_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./statistic.page.html */
      36983);
      /* harmony import */


      var _statistic_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./statistic.page.scss */
      13801);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/aws.service */
      56263);

      var _StatisticPage = /*#__PURE__*/function () {
        function StatisticPage(router, awsService, route) {
          _classCallCheck(this, StatisticPage);

          this.router = router;
          this.awsService = awsService;
          this.route = route;
        }

        return _createClass(StatisticPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.Id = this.routeData.queryParams.Id;
            this.Menu = this.routeData.queryParams.Menu;
            this.getStatData();
          }
        }, {
          key: "getStatData",
          value: function getStatData() {
            var _this = this;

            this.awsService.getStatisticData(this.Id).subscribe(function (res) {
              if (res) {
                _this.schoolData = res[0];
                _this.schoolCategory = res[1];
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/home']);
          }
        }]);
      }();

      _StatisticPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_2__.AwsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _StatisticPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-statistic',
        template: _raw_loader_statistic_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_statistic_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StatisticPage);
      /***/
    },

    /***/
    13801:
    /*!****************************************************************!*\
      !*** ./src/app/pages/statistics/statistic/statistic.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".labelTotal {\n  color: #401fd2;\n  font-size: 25px;\n}\n\n.labelTotalText {\n  color: #401fd2;\n  font-size: 13px;\n}\n\n.barTotal-container {\n  background-color: #401fd2;\n  border-radius: 5px 0px 0px 5px;\n}\n\n.labelReported {\n  color: #00af64;\n  font-size: 25px;\n}\n\n.labelReportedtext {\n  color: #00af64;\n  font-size: 13px;\n}\n\n.bar-Reported {\n  background-color: #00af64;\n}\n\n.bar-Healthy {\n  background-color: #ff6e6e;\n}\n\n.labelHealthy {\n  color: #ff6e6e;\n  font-size: 25px;\n}\n\n.labelHealthytext {\n  color: #ff6e6e;\n  font-size: 13px;\n}\n\n.height-bar {\n  height: 22px;\n}\n\n.card-widget {\n  width: 87%;\n  margin: auto;\n  margin-top: 5%;\n}\n\n.bar-ion {\n  height: 21PX !important;\n}\n\n.content-text {\n  padding-left: 10px;\n}\n\n.count-teacher {\n  font-size: 13px;\n  margin: auto;\n  background-color: #3dc2ff;\n  height: 21px;\n}\n\n.count-rbsk {\n  font-size: 13px;\n  margin: auto;\n  background-color: #5260ff;\n  height: 21px;\n}\n\n.count-doctor {\n  font-size: 13px;\n  margin: auto;\n  background-color: #ffc409;\n  height: 21px;\n}\n\n.count-hospital {\n  font-size: 13px;\n  margin: auto;\n  background-color: #2dd36f;\n  height: 21px;\n}\n\n.count-completed {\n  font-size: 13px;\n  margin: auto;\n  background-color: #eb445a;\n  height: 21px;\n}\n\n.quiz-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10px;\n  color: aliceblue;\n  font-weight: bolder;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 40px;\n}\n\n.btn-screen {\n  padding-top: 37px;\n  padding-bottom: 13px;\n  text-align: center;\n}\n\n.headerData {\n  color: #401fd2;\n  font-size: 25px;\n  background-color: aliceblue;\n  padding: 10px;\n  text-align: center;\n}\n\n.countData {\n  font-size: 15px;\n  background-color: #8b67b3;\n  color: aliceblue;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  text-align: center;\n}\n\n.cardDashboard {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n\n.cardDashboard1 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: antiquewhite;\n}\n\n.cardDashboard2 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #f1cdcd;\n}\n\n.cardDashboard3 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #d7fad9;\n}\n\n.cardDashboard4 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #dec5e5;\n}\n\n.cardDashboard5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #c2f3f3;\n}\n\n.cardDashboard6 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n  background-color: #f5f3be;\n}\n\n.category {\n  font-size: 20px;\n  padding: 5px;\n  font-weight: bolder;\n  color: black;\n}\n\n.type_dash {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBRUUsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBRUUsY0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBSkE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFORTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBUEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFQRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBVUo7O0FBUkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVdKOztBQVRFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFZSjs7QUFWRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBYUo7O0FBWEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWNKOztBQVpFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFlSjs7QUFWRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEU7RUFDRSxZQUFBO0FBY0oiLCJmaWxlIjoic3RhdGlzdGljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbFRvdGFsIFxyXG57XHJcbiAgY29sb3I6ICM0MDFmZDI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5sYWJlbFRvdGFsVGV4dCBcclxue1xyXG4gIGNvbG9yOiAjNDAxZmQyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uYmFyVG90YWwtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAxZmQyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxufVxyXG4ubGFiZWxSZXBvcnRlZCBcclxue1xyXG4gIGNvbG9yOiMwMGFmNjQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5sYWJlbFJlcG9ydGVkdGV4dCBcclxue1xyXG4gIGNvbG9yOiMwMGFmNjQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5iYXItUmVwb3J0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFmNjQ7XHJcbn1cclxuLmJhci1IZWFsdGh5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZlNmU7XHJcbiAgfVxyXG4ubGFiZWxIZWFsdGh5XHJcbntcclxuICBjb2xvcjojZmY2ZTZlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubGFiZWxIZWFsdGh5dGV4dCBcclxue1xyXG4gIGNvbG9yOiNmZjZlNmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5oZWlnaHQtYmFyIHtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG4uY2FyZC13aWRnZXR7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmJhci1pb24ge1xyXG4gICAgaGVpZ2h0OiAyMVBYICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb3VudC10ZWFjaGVyXHJcbntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGMyZmY7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5jb3VudC1yYnNrXHJcbntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjYwZmY7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5jb3VudC1kb2N0b3Jcclxue1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZjNDA5OztcclxuICBoZWlnaHQ6IDIxcHg7XHJcbn1cclxuLmNvdW50LWhvc3BpdGFsXHJcbntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzJkZDM2ZiA7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5jb3VudC1jb21wbGV0ZWRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNDQ1YTs7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5xdWl6LWNlbnRlclxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnRvZGF5cy1xdWl6LWljb25cclxuICB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcbiAgLmJ0bi1zY3JlZW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDM3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmhlYWRlckRhdGEge1xyXG4gICAgY29sb3I6ICM0MDFmZDI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY291bnREYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjY3YjM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkRGFzaGJvYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigxNTUgMTg3IDIyMSAvIDUwJSk7XHJcbiAgfVxyXG4gIC5jYXJkRGFzaGJvYXJkMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIH1cclxuICAuY2FyZERhc2hib2FyZDIge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWNkY2Q7XHJcbiAgfVxyXG4gIC5jYXJkRGFzaGJvYXJkMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjUwLCAyMTcpO1xyXG4gIH1cclxuICAuY2FyZERhc2hib2FyZDQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWM1ZTU7XHJcbiAgfVxyXG4gIC5jYXJkRGFzaGJvYXJkNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZjNmMztcclxuICB9XHJcbiAgLmNhcmREYXNoYm9hcmQ2IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmM2JlO1xyXG4gIH1cclxuICAvLyAuaWNvbl9kYXNoe1xyXG4gIC8vICAgY29sb3I6IGJsYWNrO1xyXG4gIC8vIH1cclxuICAuY2F0ZWdvcnkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnR5cGVfZGFzaCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    36983:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistic/statistic.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> {{Menu}} Statistics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row class=\"square-container graybackgrond\" style=\"margin:10px;justify-content: center;\">\r\n    <ion-col size=\"6\" class=\"square\" *ngFor=\"let item of schoolData\">\r\n      <!-- <div class=\"square\" > -->\r\n      <ion-card style=\"border-radius: 5px;\" *ngIf=\"Id == 1\">\r\n        <ion-label>\r\n          <div class=\"headerData\"> {{item.School_Type}} </div>\r\n          <div class=\"countData\"> {{item.school_type}} </div>\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n      <ion-card style=\"border-radius: 5px;\" *ngIf=\"Id == 2\">\r\n        <ion-label>\r\n          <div class=\"headerData\"> {{item.Teacher_By_school_Type}} </div>\r\n          <div class=\"countData\"> {{item.school_type}} </div>\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n      <ion-card style=\"border-radius: 5px;\" *ngIf=\"Id == 3\">\r\n        <ion-label>\r\n          <div class=\"headerData\"> {{item.Total_students_by_School_Type}} </div>\r\n          <div class=\"countData\"> {{item.school_type}} </div>\r\n        </ion-label>\r\n      </ion-card>\r\n\r\n      <!-- <div class=\"content\" style=\"background-color:white;padding: 15px;border-radius: 5px;\">\r\n        <ion-label *ngIf=\"Id == 1\">\r\n          <p class=\"labelTotal\"> {{item.School_Type}} </p>\r\n          <p class=\"labelTotalText\"> {{item.school_type}} </p>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"Id == 2\">\r\n          <p class=\"labelTotal\"> {{item.Teacher_By_school_Type}} </p>\r\n          <p class=\"labelTotalText\"> {{item.school_type}} </p>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"Id == 3\">\r\n          <p class=\"labelTotal\"> {{item.Total_students_by_School_Type}} </p>\r\n          <p class=\"labelTotalText\"> {{item.school_type}} </p>\r\n        </ion-label>\r\n      </div> -->\r\n      <!-- </div> -->\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" *ngFor=\"let item of schoolCategory; let i = index;\">\r\n      <ion-card\r\n        [ngClass]=\"(i == 0) ? 'cardDashboard1' : (i == 1) ? 'cardDashboard2' : (i == 2) ? 'cardDashboard3': (i == 3) ? 'cardDashboard4': (i == 4) ? 'cardDashboard5': (i == 5) ? 'cardDashboard6': 'cardDashboard' \"\r\n        *ngIf=\"Id == 1\">\r\n        <div class=\"icon_dash\">\r\n          <img src=\"/assets/icons/dashbordSchool.svg\">\r\n        </div>\r\n        <div class=\"category\">{{item.school_category}}</div>\r\n        <div class=\"type_dash\">{{item.cate_type}}</div>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        [ngClass]=\"(i == 0) ? 'cardDashboard1' : (i == 1) ? 'cardDashboard2' : (i == 2) ? 'cardDashboard3': (i == 3) ? 'cardDashboard4': (i == 4) ? 'cardDashboard5': (i == 5) ? 'cardDashboard6': 'cardDashboard' \"\r\n        *ngIf=\"Id == 2\">\r\n        <div class=\"icon_dash\">\r\n          <img src=\"/assets/icons/dashbordSchool.svg\">\r\n        </div>\r\n        <div class=\"category\">{{item.cate_type}}</div>\r\n        <div class=\"type_dash\">{{item.Teacher_By_category_Type}}</div>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        [ngClass]=\"(i == 0) ? 'cardDashboard1' : (i == 1) ? 'cardDashboard2' : (i == 2) ? 'cardDashboard3': (i == 3) ? 'cardDashboard4': (i == 4) ? 'cardDashboard5': (i == 5) ? 'cardDashboard6': 'cardDashboard' \"\r\n        *ngIf=\"Id == 3\">\r\n        <div class=\"icon_dash\">\r\n          <img src=\"/assets/icons/dashbordSchool.svg\">\r\n        </div>\r\n        <div class=\"category\">{{item.cate_type}}</div>\r\n        <div class=\"type_dash\">{{item.Total_students_by_School_Category}}</div>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-row style=\"margin: 15px;\r\n    background: white;\r\n    border-radius: 5px;\" *ngFor=\"let item of schoolCategory\">\r\n    <ion-col class=\"barTotal-container\" size=\"0.1\"></ion-col>\r\n    <ion-col size=\"11\">\r\n      <div class=\"content-text content\">\r\n        <ion-label *ngIf=\"Id == 1\">\r\n          <p class=\"labelTotalText\" style=\"padding-bottom: 5px;\">{{item.cate_type}}</p>\r\n          <span class=\"labelTotal\">{{item.school_category}}</span>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"Id == 2\">\r\n          <p class=\"labelTotalText\" style=\"padding-bottom: 5px;\">{{item.cate_type}}</p>\r\n          <span class=\"labelTotal\">{{item.Teacher_By_category_Type}}</span>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"Id == 3\">\r\n          <p class=\"labelTotalText\" style=\"padding-bottom: 5px;\">{{item.cate_type}}</p>\r\n          <span class=\"labelTotal\">{{item.Total_students_by_School_Category}}</span>\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_statistics_statistic_statistic_module_ts-es5.js.map