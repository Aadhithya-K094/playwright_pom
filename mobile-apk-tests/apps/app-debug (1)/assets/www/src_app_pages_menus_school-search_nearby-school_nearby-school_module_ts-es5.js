(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_school-search_nearby-school_nearby-school_module_ts"], {
    /***/
    84781:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/nearby-school/nearby-school-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NearbySchoolPageRoutingModule": function NearbySchoolPageRoutingModule() {
          return (
            /* binding */
            _NearbySchoolPageRoutingModule
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


      var _nearby_school_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nearby-school.page */
      4709);

      var routes = [{
        path: '',
        component: _nearby_school_page__WEBPACK_IMPORTED_MODULE_0__.NearbySchoolPage
      }];

      var _NearbySchoolPageRoutingModule = /*#__PURE__*/_createClass(function NearbySchoolPageRoutingModule() {
        _classCallCheck(this, NearbySchoolPageRoutingModule);
      });

      _NearbySchoolPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NearbySchoolPageRoutingModule);
      /***/
    },

    /***/
    41789:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/nearby-school/nearby-school.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NearbySchoolPageModule": function NearbySchoolPageModule() {
          return (
            /* binding */
            _NearbySchoolPageModule
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


      var _nearby_school_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nearby-school-routing.module */
      84781);
      /* harmony import */


      var _nearby_school_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nearby-school.page */
      4709);

      var _NearbySchoolPageModule = /*#__PURE__*/_createClass(function NearbySchoolPageModule() {
        _classCallCheck(this, NearbySchoolPageModule);
      });

      _NearbySchoolPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _nearby_school_routing_module__WEBPACK_IMPORTED_MODULE_0__.NearbySchoolPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_nearby_school_page__WEBPACK_IMPORTED_MODULE_1__.NearbySchoolPage]
      })], _NearbySchoolPageModule);
      /***/
    },

    /***/
    4709:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/nearby-school/nearby-school.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NearbySchoolPage": function NearbySchoolPage() {
          return (
            /* binding */
            _NearbySchoolPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_nearby_school_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./nearby-school.page.html */
      63750);
      /* harmony import */


      var _nearby_school_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nearby-school.page.scss */
      20744);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/web-intent/ngx */
      61751);
      /* harmony import */


      var _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/app-availability/ngx */
      69414);

      var _NearbySchoolPage = /*#__PURE__*/function () {
        function NearbySchoolPage(geolocation, userService, userSessionService, appAvailability, router, webIntent, alertController) {
          _classCallCheck(this, NearbySchoolPage);

          this.geolocation = geolocation;
          this.userService = userService;
          this.userSessionService = userSessionService;
          this.appAvailability = appAvailability;
          this.router = router;
          this.webIntent = webIntent;
          this.alertController = alertController;
          this.svgGreen = '<svg id="mePinGreen" xmlns="http://www.w3.org/2000/svg" width="43.3" height="42.4" viewBox="0 0 43.3 42.4"><path class="ring_outer" fill="#878787" d="M28.6 23c6.1 1.4 10.4 4.4 10.4 8 0 4.7-7.7 8.6-17.3 8.6-9.6 0-17.4-3.9-17.4-8.6 0-3.5 4.2-6.5 10.3-7.9.7-.1-.4-1.5-1.3-1.3C5.5 23.4 0 27.2 0 31.7c0 6 9.7 10.7 21.7 10.7s21.6-4.8 21.6-10.7c0-4.6-5.7-8.4-13.7-10-.8-.2-1.8 1.2-1 1.4z"/><path class="ring_inner" fill="#5F5F5F" d="M27 25.8c2 .7 3.3 1.8 3.3 3 0 2.2-3.7 3.9-8.3 3.9-4.6 0-8.3-1.7-8.3-3.8 0-1 .8-1.9 2.2-2.6.6-.3-.3-2-1-1.6-2.8 1-4.6 2.7-4.6 4.6 0 3.2 5.1 5.7 11.4 5.7 6.2 0 11.3-2.5 11.3-5.7 0-2-2.1-3.9-5.4-5-.7-.1-1.2 1.3-.7 1.5z"/><path class="mePin" d="M21.6 8.1a4 4 0 0 0 4-4 4 4 0 0 0-4-4.1 4.1 4.1 0 0 0-4.1 4 4 4 0 0 0 4 4.1zm4.9 8v-3.7c0-1.2-.6-2.2-1.7-2.6-1-.4-1.9-.6-2.8-.6h-.9c-1 0-2 .2-2.8.6-1.2.4-1.8 1.4-1.8 2.6V16c0 .9 0 2 .2 2.8.2.8.8 1.5 1 2.3l.2.3.4 1 .1.8.2.7.6 3.6c-.6.3-.9.7-.9 1.2 0 .9 1.4 1.7 3.2 1.7 1.8 0 3.2-.8 3.2-1.7 0-.5-.3-.9-.8-1.2l.6-3.6.1-.7.2-.8.3-1 .1-.3c.3-.8 1-1.5 1.1-2.3.2-.8.2-2 .2-2.8z" fill="#282828"/></svg>';
          this.hasPermission = false; // tslint:disable-next-line: max-line-length

          this.mapview = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 21,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
          }); // tslint:disable-next-line: max-line-length

          this.terrainview = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 21,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
          }); // tslint:disable-next-line: max-line-length

          this.satelliteview = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 21,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
          });
          this.markerList = [];
          this.allMarkerList = [];
          this.nearBySchoolList = [];
          this.schoolTypeId = "1";
          this.tempData = [];
          this.latLngs = [];
          this.dstFilter = [];
          this.totalVehicles = 0;
          this.filteredVehicle = 0;
          this.minZoom = 6;
        }

        return _createClass(NearbySchoolPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.markerList = [];
            this.allMarkerList = [];
            this.nearBySchoolList = [];
            this.tempData = [];
            this.dstFilter = [];
            this.distanceRange = 10;
            this.usrLat = 0;
            this.usrLng = 0;
            this.getLatLong();
          }
        }, {
          key: "getNearBySchool",
          value: function getNearBySchool() {
            var _this = this;

            var data = {
              lat: this.usrLat,
              "long": this.usrLng,
              distance: this.distanceRange
            };
            this.userService.getNearBySchool(data).subscribe(function (response) {
              if (response.dataStatus) {
                // console.log(response, "response")
                _this.tempData = response.result;

                _this.filterSchoolType(_this.schoolTypeId); // this.markerList = this.filterSchoolType(response.result,1);


                _this.totalVehicles = response.result.length;
              }
            });
          }
        }, {
          key: "filterSchoolType",
          value: function filterSchoolType(schoolTypeId) {
            this.schoolTypeId = schoolTypeId;
            this.nearBySchoolList = [];
            this.nearBySchoolList = this.tempData.filter(function (e) {
              return e.school_type_id == schoolTypeId;
            });
            this.calcDistanceFromMachinaryLocation();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {//this.map.remove();
          }
        }, {
          key: "onDistanceChange",
          value: function onDistanceChange(event) {
            this.distanceRange = event.detail.value; // this.getNearBySchool()

            if (!this.hasPermission) // this.checkGPSPermission();
              if (this.usrLat != "" && this.usrLng != "") {
                // this.loadVehicles();
                this.calcDistanceFromMachinaryLocation();
              } else {// this.checkGPSPermission();
              }
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this2 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              //this.locationCordinates = resp.coords;
              _this2.usrLat = resp.coords.latitude;
              _this2.usrLng = resp.coords.longitude; // console.log('resp.coords;', resp.coords);

              _this2.getNearBySchool();
            })["catch"](function (error) {// this.loadingLocation = false;
              // console.log('Error getting location', error);
            });
          }
        }, {
          key: "calcDistanceFromMachinaryLocation",
          value: function calcDistanceFromMachinaryLocation() {
            var _this3 = this;

            this.dstFilter = [];

            if (this.distanceRange > 0 && this.usrLat && this.usrLng) {
              this.nearBySchoolList.forEach(function (school) {
                var actualDst = _this3.distance(school.latitude, school.longitude, _this3.usrLat, _this3.usrLng);

                if (actualDst <= _this3.distanceRange) {
                  _this3.dstFilter.push(school);
                }
              });
              this.markerList = this.dstFilter;
            } else {// console.log('May be Lat and lng is null or distance range is zero');
            } // this.filteredSchool = this.markerList.length;


            this.loadMarkersInMap();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh() {
            var _this4 = this;

            this.markerList = [];
            this.allMarkerList = [];
            this.nearBySchoolList = [];
            this.tempData = [];
            this.dstFilter = [];
            this.distanceRange = 10;
            this.usrLat = 0;
            this.usrLng = 0;
            this.getLatLong();
            setTimeout(function () {
              _this4.loadMap();
            }, 10);
          }
        }, {
          key: "goToSchoolList",
          value: function goToSchoolList(udise_code, school_name) {
            this.router.navigate(['/tabs/school-data'], {
              queryParams: {
                id: udise_code,
                school_name: school_name
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "presentAlertConfirmExit",
          value: function presentAlertConfirmExit(udise_code, school_name, school_type, id, latitude, longitude) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(Number(this.userSessionService.emis_usertype()) == 5 || Number(this.userSessionService.emis_usertype()) == 13 || Number(this.userSessionService.emis_usertype()) == 15 || Number(this.userSessionService.emis_usertype()) == 9 || Number(this.userSessionService.emis_usertype()) == 36 || Number(this.userSessionService.emis_usertype()) == 37 || Number(this.userSessionService.emis_usertype()) == 24)) {
                      _context.n = 2;
                      break;
                    }

                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'School Name',
                      message: school_name,
                      buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {}
                      }, {
                        text: 'Go to பள்ளி பார்வை ->',
                        cssClass: 'arrow',
                        handler: function handler() {
                          _this5.router.navigate(['/tnvntabs/page-route/dashboardc'], {
                            queryParams: {
                              id: udise_code,
                              school_name: school_name,
                              school_type: school_type,
                              sclid: id
                            }
                          });
                        }
                      }, {
                        text: 'Get Directions ->',
                        cssClass: 'arrow',
                        handler: function handler() {
                          _this5.appAvailability.check('com.google.android.apps.maps').then(function (info) {
                            console.log(info);
                          });

                          var options = {
                            action: _this5.webIntent.ACTION_VIEW,
                            url: 'http://maps.google.com/maps?daddr=' + latitude + ',' + longitude
                          };

                          _this5.webIntent.startActivity(options).then(function (intentResponse) {
                            console.log("success", intentResponse);
                          });
                        }
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 4;
                    break;

                  case 2:
                    _context.n = 3;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'School Name',
                      message: school_name,
                      buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {}
                      } // {
                      //   text: 'View School Details',
                      //   handler: () => {
                      //     this.router.navigate(['/tabs/school-data'], { queryParams: { id: udise_code, school_name: school_name, school_type: school_type,sclid : id } });
                      //   }
                      // }
                      ]
                    });

                  case 3:
                    alert = _context.v;

                  case 4:
                    _context.n = 5;
                    return alert.present();

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadMarkersInMap",
          value: function loadMarkersInMap() {
            var _this6 = this;

            this.clearAllMarker();
            this.markers = L.markerClusterGroup({
              chunkedLoading: true
            }); // Load Marker

            this.markerList.forEach(function (vehicle) {
              var markerIcon = L.icon.pulse({
                iconSize: [10, 10],
                color: 'green',
                fillColor: '#FF5500'
              });

              _this6.latLngs.push([parseFloat(vehicle.latitude), parseFloat(vehicle.longitude)]);

              var markerLayer = L.marker(L.latLng(parseFloat(vehicle.latitude), parseFloat(vehicle.longitude)), {
                icon: markerIcon
              }) // .bindPopup(vehicle.school_name)
              // .openPopup()       
              .on('click', function (e) {
                // console.log('marker click content', vehicle,"vehicle[0].udise_code",vehicle.udise_code);
                _this6.presentAlertConfirmExit(vehicle.udise_code, vehicle.school_name, vehicle.school_type, vehicle.id, vehicle.latitude, vehicle.longitude); // this.selectedItem = {};
                // this.vehicleDts = {};
                // var attributes = e.layer.properties;
                // console.log('marker click content', vehicle);
                // this.selectedItem = vehicle;
                // this.markerOnClickForSingleVehicle(vehicle.clatitude, vehicle.clongitude).then((result) => {
                //   if (result) {
                //     console.log('markerOnClickForSingleVehicle', result);
                //     this.vehicleDts = result;
                //     markerLayer.bindPopup(this.markerContent(vehicle))
                //       .on('popupopen', () => {
                //         const req = L.DomUtil.get('button-submit');
                //         L.DomEvent.addListener(req, 'click', (e) => {
                //           this.navigateToGoogle();
                //         });
                //       }).openPopup();
                //   }
                // });

              });

              _this6.markers.addLayer(markerLayer);
            });
            if (this.distanceRange > 0) this.map.addLayer(this.markers);

            if (this.latLngs && this.latLngs.length > 0) {
              this.map.fitBounds(this.latLngs);
            }

            this.createCircle(this.distanceRange);
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            try {
              var center = [13.0187, 80.2068];
              var baseMaps = {
                'Map': this.mapview,
                'Terrain': this.terrainview,
                'Satellite': this.satelliteview
              };
              this.map = L.map('schoolMap', {
                fullscreenControl: {
                  pseudoFullscreen: false
                },
                minZoom: 6,
                tilt: true,
                zoomControl: false
              }).setView(center, 16, {
                heading: 100.0,
                tilt: 10.0
              });
              L.control.zoom({
                position: 'bottomleft'
              }).addTo(this.map); // if (this.markerLayer) {
              //   this.map.removeLayer(this.markerLayer);
              // }
              // if (this.markers) {
              //   this.map.removeLayer(this.markers);
              // }

              L.control.layers(baseMaps).addTo(this.map);

              if (this.pagefrom == '3') {
                this.satelliteview.addTo(this.map);
              } else {
                this.mapview.addTo(this.map);
              }

              this.clearAllMarker();
              this.createCircle(0);
            } catch (error) {}
          }
        }, {
          key: "createCircle",
          value: function createCircle(distanceRange) {
            var distance = distanceRange * 1000 + 100;
            var usrMarkerIcon = L.icon({
              iconUrl: 'assets/images/userlocation.png',
              iconSize: [40, 40] // size of the icon

            });

            if (this.usrLat != 0 && this.usrLng != 0) {
              this.usrCurrentLoc = L.marker(L.latLng(parseFloat(this.usrLat), parseFloat(this.usrLng)), {
                icon: usrMarkerIcon
              });
              var circleOptions = {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0
              };
              this.userLocCircle = L.circle([this.usrLat, this.usrLng], distance, circleOptions);
              this.userLocCircle.addTo(this.map);
              this.map.addLayer(this.usrCurrentLoc);
              this.map.setView([this.usrLat, this.usrLng], 11);

              if (distanceRange > 0) {
                //let zlevel = distanceRange <= 4 ? 13 : 11;
                //setTimeout(() => {
                this.map.setView([this.usrLat, this.usrLng], 11); //}, 1);
              }
            }
          }
        }, {
          key: "clearAllMarker",
          value: function clearAllMarker() {
            if (this.markers) {
              this.map.removeLayer(this.markers);
            }

            if (this.userLocCircle) {
              this.map.removeLayer(this.userLocCircle);
            }

            if (this.usrCurrentLoc) {
              this.map.removeLayer(this.usrCurrentLoc);
            }
          }
        }, {
          key: "distance",
          value: function distance(lat1, lon1, lat2, lon2) {
            if (lat1 == lat2 && lon1 == lon2) {
              return 0;
            } else {
              var radlat1 = Math.PI * lat1 / 180;
              var radlat2 = Math.PI * lat2 / 180;
              var theta = lon1 - lon2;
              var radtheta = Math.PI * theta / 180;
              var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

              if (dist > 1) {
                dist = 1;
              }

              dist = Math.acos(dist);
              dist = dist * 180 / Math.PI;
              dist = dist * 60 * 1.1515;
              dist = dist * 1.609344;
              return dist.toFixed(0);
              0;
            }
          }
        }]);
      }();

      _NearbySchoolPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__.AppAvailability
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_5__.WebIntent
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }];
      };

      _NearbySchoolPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-nearby-school',
        template: _raw_loader_nearby_school_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nearby_school_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NearbySchoolPage);
      /***/
    },

    /***/
    20744:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/menus/school-search/nearby-school/nearby-school.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  margin: 15px auto;\n}\n\n.vdetail {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  margin: 0px;\n  background-color: #ffffffe0;\n}\n\n.map {\n  width: 100%;\n  position: unset !important;\n  height: 100%;\n}\n\n.arrow {\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\nion-item {\n  width: 100%;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background:transparent;\n}\n\nion-label {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.refreshIcon {\n  font-size: 30px;\n}\n\nion-range {\n  padding: unset;\n}\n\n.back-icon {\n  color: aliceblue;\n}\n\n.range-txt {\n  background-color: #7692bd;\n  font-size: 15px;\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lYXJieS1zY2hvb2wucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREU7RUFDRSxjQUFBO0FBSUo7O0FBREU7RUFDRSxnQkFBQTtBQUlKOztBQUZBO0VBRUkseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSUoiLCJmaWxlIjoibmVhcmJ5LXNjaG9vbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuXHJcbi52ZGV0YWlse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZTA7XHJcbn1cclxuLm1hcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MTAwJVxyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuICBcclxuaW9uLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5yZWZyZXNoSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuICBpb24tcmFuZ2V7XHJcbiAgICBwYWRkaW5nOnVuc2V0O1xyXG4gICAgLy8gbWF4LXdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbi5yYW5nZS10eHRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTJiZDsgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    63750:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/school-search/nearby-school/nearby-school.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Near by School List</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"refresh\" (click)=\"doRefresh()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n    <ion-col size=\"2\">\r\n      <ion-button style=\"color: aliceblue;\" [disabled]=\"schoolTypeId=='1'\" (click)=\"filterSchoolType(1)\"> GS </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-button style=\"color: aliceblue;\" [disabled]=\"schoolTypeId=='2'\" (click)=\"filterSchoolType(2)\"> FA</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2.5\">\r\n      <ion-button style=\"color: aliceblue;\" [disabled]=\"schoolTypeId=='3'\" (click)=\"filterSchoolType(3)\"> Un-a </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-button style=\"color: aliceblue;\" [disabled]=\"schoolTypeId=='4'\" (click)=\"filterSchoolType(4)\"> PA </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-button style=\"color: aliceblue;\" [disabled]=\"schoolTypeId=='5'\" (click)=\"filterSchoolType(5)\"> CG </ion-button>\r\n    </ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-item class=\"range-txt\" lines=\"none\">\r\n  \r\n    <ion-range min=\"1\" max=\"10\" title=\"{{distanceRange}}\" color=\"secondary\" snaps=\"true\" ticks=\"true\" pin=\"true\" step=\"1\" mode=\"ios\"\r\n      (ionChange)=\"onDistanceChange($event)\" [value]=\"distanceRange\">\r\n      <ion-label slot=\"start\" class=\"font-size14px\">1 KM</ion-label>\r\n      <ion-label slot=\"end\" class=\"font-size14px\">10 KM</ion-label>\r\n    </ion-range> \r\n    <!-- <span class=\"font-size12px\">{{distanceRange}} KM</span> -->\r\n  </ion-item>\r\n  <ion-row class=\"range-txt\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      {{distanceRange}} KM\r\n    </ion-col>\r\n  </ion-row> \r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <div id=\"schoolMap\" style=\"width: 100%; height: 100%\"></div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_menus_school-search_nearby-school_nearby-school_module_ts-es5.js.map