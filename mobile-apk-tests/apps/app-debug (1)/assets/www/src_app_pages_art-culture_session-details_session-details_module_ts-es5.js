(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_session-details_session-details_module_ts"], {
    /***/
    81009:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/art-culture/session-details/session-details-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionDetailsPageRoutingModule": function SessionDetailsPageRoutingModule() {
          return (
            /* binding */
            _SessionDetailsPageRoutingModule
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


      var _session_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./session-details.page */
      51344);

      var routes = [{
        path: '',
        component: _session_details_page__WEBPACK_IMPORTED_MODULE_0__.SessionDetailsPage
      }];

      var _SessionDetailsPageRoutingModule = /*#__PURE__*/_createClass(function SessionDetailsPageRoutingModule() {
        _classCallCheck(this, SessionDetailsPageRoutingModule);
      });

      _SessionDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SessionDetailsPageRoutingModule);
      /***/
    },

    /***/
    81548:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/art-culture/session-details/session-details.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionDetailsPageModule": function SessionDetailsPageModule() {
          return (
            /* binding */
            _SessionDetailsPageModule
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


      var _session_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./session-details-routing.module */
      81009);
      /* harmony import */


      var _session_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./session-details.page */
      51344);

      var _SessionDetailsPageModule = /*#__PURE__*/_createClass(function SessionDetailsPageModule() {
        _classCallCheck(this, SessionDetailsPageModule);
      });

      _SessionDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _session_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionDetailsPageRoutingModule],
        declarations: [_session_details_page__WEBPACK_IMPORTED_MODULE_1__.SessionDetailsPage]
      })], _SessionDetailsPageModule);
      /***/
    },

    /***/
    51344:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/art-culture/session-details/session-details.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionDetailsPage": function SessionDetailsPage() {
          return (
            /* binding */
            _SessionDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_session_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./session-details.page.html */
      31666);
      /* harmony import */


      var _session_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./session-details.page.scss */
      95823);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SessionDetailsPage = /*#__PURE__*/function () {
        function SessionDetailsPage(router, userSessionService, route, emisService) {
          _classCallCheck(this, SessionDetailsPage);

          this.router = router;
          this.userSessionService = userSessionService;
          this.route = route;
          this.emisService = emisService;
        }

        return _createClass(SessionDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.emis_usertype = this.userSessionService.emis_usertype();
            this.emisName = this.userSessionService.emis_username();
            this.route.queryParams.subscribe(function (params) {
              _this.groupData = JSON.parse(params['groupData']);
              _this.schoolData = JSON.parse(params['schoolData']);
            });

            if (this.schoolData) {
              this.initial(); // this.m = new Date().getMonth()+1;
              // this.y = new Date().getFullYear().toString();
              // const lastDayOfMonth = new Date(this.y, this.m , 0).getDate();
              // this.dateMonth = []
              // for (let i = 1; i < lastDayOfMonth + 2; i++) {
              //   let data = new Date(this.y, this.m - 1, i); let val = data.getDay()
              //   var test = val - 1
              //   if(test == -1){ test = 6 }
              //   if(test == 0){ test = 7 }
              //   var to = data.toISOString().split("T")[0] + ',' + test
              //   if(i > 1){
              //     this.dateMonth.push(to)
              //   }
              // }
              // if(this.dateMonth){
              //   this.dayArray = []
              //   for(let i = 0; i < this.dateMonth.length; i++) {
              //     const myArray = this.dateMonth[i].split(",");
              //     if(myArray[1] == this.groupData.day){
              //       this.dayArray.push(myArray[0])
              //     }
              //   }
              //   if(this.dayArray){
              //     this.dataList = []
              //     for(let i = 0; i < this.dayArray.length; i++) {
              //       if(i == 0 || i == 2 || i == 3){
              //         this.dataList.push(this.dayArray[i])
              //       }
              //     }
              //   }
              // }
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (this.schoolData) {
              this.initial();
            }
          }
        }, {
          key: "initial",
          value: function initial() {
            var _this2 = this;

            var data = {
              "SchlId": this.schoolData.school_id,
              "GroupId": this.groupData.groupid,
              "BatchId": this.groupData.batch_id,
              "Day": this.groupData.day - 1
            };
            this.emisService.ArpGrupDetBrte(data).subscribe(function (res) {
              if (res.dataStatus) {
                console.log(res.result);
                _this2.dataList = [];

                for (var i = 0; i < res.result.length; i++) {
                  _this2.dataList.push(res.result[i][0]);
                } // this.dataList = res.result[0]

              }
            });
          }
        }, {
          key: "backBtn",
          value: function backBtn() {
            this.router.navigate(["/tabs/my-schools"]);
          }
        }]);
      }();

      _SessionDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService
        }];
      };

      _SessionDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-session-details',
        template: _raw_loader_session_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_session_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SessionDetailsPage);
      /***/
    },

    /***/
    95823:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/art-culture/session-details/session-details.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #917AFE;\n}\n\n.cmptDiv {\n  background-color: #EBFEE7;\n  border: 1px solid #22720E;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.cmptRow {\n  border-bottom: 1px solid #22720E;\n  padding: 10px;\n}\n\n.cmptheader {\n  font-size: 18px;\n  font-weight: 600;\n  color: #555555;\n}\n\n.commonCol {\n  color: #555555;\n  font-size: 12px;\n}\n\n.linkCol {\n  color: #081FB8;\n  font-size: 12px;\n}\n\n.comptedWord {\n  color: #22720E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.inPrcssDiv {\n  background-color: #FFF7EB;\n  border: 1px solid #EB9E37;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.inPrcssRow {\n  border-bottom: 1px solid #EB9E37;\n  padding: 10px;\n}\n\n.inPrcssWord {\n  color: #EB9E37;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.yetToStrDiv {\n  background-color: #F8F1FF;\n  border: 1px solid #8934E7;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.yetToStrRow {\n  border-bottom: 1px solid #8934E7;\n  padding: 10px;\n}\n\n.yetToStrWord {\n  color: #8934E7;\n  font-size: 12px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtBQUFKOztBQUlBO0VBRUkseUJBQUE7RUFBMEIseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0IsbUJBQUE7QUFDNUU7O0FBR0E7RUFFSSxnQ0FBQTtFQUFpQyxhQUFBO0FBQXJDOztBQUlBO0VBRUksZUFBQTtFQUFnQixnQkFBQTtFQUFnQixjQUFBO0FBQXBDOztBQUlBO0VBRUksY0FBQTtFQUFjLGVBQUE7QUFEbEI7O0FBS0E7RUFFSSxjQUFBO0VBQWMsZUFBQTtBQUZsQjs7QUFNQTtFQUVJLGNBQUE7RUFBYyxlQUFBO0VBQWUsZ0JBQUE7QUFGakM7O0FBVUE7RUFFSSx5QkFBQTtFQUEwQix5QkFBQTtFQUEwQixtQkFBQTtFQUFvQixtQkFBQTtBQUw1RTs7QUFTQTtFQUVJLGdDQUFBO0VBQWlDLGFBQUE7QUFOckM7O0FBVUE7RUFFSSxjQUFBO0VBQWMsZUFBQTtFQUFlLGdCQUFBO0FBTmpDOztBQWFBO0VBRUkseUJBQUE7RUFBMEIseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0IsbUJBQUE7QUFSNUU7O0FBWUE7RUFFSSxnQ0FBQTtFQUFpQyxhQUFBO0FBVHJDOztBQWFBO0VBRUksY0FBQTtFQUFjLGVBQUE7RUFBZSxnQkFBQTtBQVRqQyIsImZpbGUiOiJzZXNzaW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTE3QUZFO1xyXG5cclxuICB9XHJcblxyXG4uY21wdERpdntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGRUU3O2JvcmRlcjogMXB4IHNvbGlkICMyMjcyMEU7Ym9yZGVyLXJhZGl1czogMTBweDttYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmNtcHRSb3d7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjcyMEU7cGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jbXB0aGVhZGVye1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtmb250LXdlaWdodDo2MDA7Y29sb3I6IzU1NTU1NTtcclxuXHJcbn1cclxuXHJcbi5jb21tb25Db2x7XHJcblxyXG4gICAgY29sb3I6IzU1NTU1NTtmb250LXNpemU6MTJweDtcclxuXHJcbn1cclxuXHJcbi5saW5rQ29se1xyXG5cclxuICAgIGNvbG9yOiMwODFGQjg7Zm9udC1zaXplOjEycHhcclxuXHJcbn1cclxuXHJcbi5jb21wdGVkV29yZHtcclxuXHJcbiAgICBjb2xvcjojMjI3MjBFO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmluUHJjc3NEaXZ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjdFQjtib3JkZXI6IDFweCBzb2xpZCAjRUI5RTM3O2JvcmRlci1yYWRpdXM6IDEwcHg7bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5pblByY3NzUm93e1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUI5RTM3O3BhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uaW5QcmNzc1dvcmR7XHJcblxyXG4gICAgY29sb3I6I0VCOUUzNztmb250LXNpemU6MTJweDtmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnlldFRvU3RyRGl2e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEYxRkY7Ym9yZGVyOiAxcHggc29saWQgIzg5MzRFNztib3JkZXItcmFkaXVzOiAxMHB4O21hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG59XHJcblxyXG4ueWV0VG9TdHJSb3d7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4OTM0RTc7cGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbi55ZXRUb1N0cldvcmR7XHJcblxyXG4gICAgY29sb3I6Izg5MzRFNztmb250LXNpemU6MTJweDtmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    31666:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/session-details/session-details.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Session Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin: 20px;\" *ngFor=\"let data of dataList\">\r\n    <div class=\"cmptDiv\" *ngIf=\"data.status == 'complete'\">\r\n      <ion-row class=\"cmptRow\">\r\n        <ion-col size=\"9\" class=\"cmptheader\">\r\n          <div>\r\n            <ion-label>{{this.schoolData.school_name}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <div style=\"position: absolute;\">\r\n            <!-- <img src=\"../../../../../assets/icons/artCulture/schCompted.svg\"> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 22px;\">\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Art Form Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{this.groupData.key_art_form}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Course Content</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"linkCol\">\r\n          <div>\r\n            <ion-label>https://www.youtube.com/watch?v=PKd_4YCs9-g&ab_channel=DrishtiIAS%3AEnglish</ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>No. of Students</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.Stud}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Date</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.SesDate | date :  \"dd-MM-y\"}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Status</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"comptedWord\">\r\n          <div>\r\n            <ion-label>{{data.status}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inPrcssDiv\" *ngIf=\"data.status == 'In progress'\">\r\n      <ion-row class=\"inPrcssRow\">\r\n        <ion-col size=\"9\" class=\"cmptheader\">\r\n          <div>\r\n            <ion-label>{{this.schoolData.school_name}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <div style=\"position: absolute;\">\r\n            <!-- <img src=\"../../../../../assets/icons/artCulture/schInprocess.svg\"> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 22px;\">\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Art Form Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{this.groupData.key_art_form}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>No. of Students</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.Stud}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Date</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.SesDate | date :  \"dd-MM-y\"}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Status</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"inPrcssWord\">\r\n          <div>\r\n            <ion-label>{{data.status}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"yetToStrDiv\" *ngIf=\"data.status == 'Yet to Start'\">\r\n      <ion-row class=\"yetToStrRow\">\r\n        <ion-col size=\"9\" class=\"cmptheader\">\r\n          <div>\r\n            <ion-label>{{this.schoolData.school_name}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <div style=\"position: absolute;\">\r\n            <!-- <img src=\"../../../../../assets/icons/artCulture/schYettoStrt.svg\"> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding: 22px;\">\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Art Form Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{this.groupData.key_art_form}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>No. of Students</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.Stud}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Date</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>{{data.SesDate | date :  \"dd-MM-y\"}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"commonCol\">\r\n          <div>\r\n            <ion-label>Status</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"yetToStrWord\">\r\n          <div>\r\n            <ion-label>{{data.status}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_art-culture_session-details_session-details_module_ts-es5.js.map