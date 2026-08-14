(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_experiment-phase_experiment-phase_module_ts"],{

/***/ 2082:
/*!************************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPhasePageRoutingModule": function() { return /* binding */ ExperimentPhasePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _experiment_phase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiment-phase.page */ 21185);




const routes = [
    {
        path: '',
        component: _experiment_phase_page__WEBPACK_IMPORTED_MODULE_0__.ExperimentPhasePage
    }
];
let ExperimentPhasePageRoutingModule = class ExperimentPhasePageRoutingModule {
};
ExperimentPhasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExperimentPhasePageRoutingModule);



/***/ }),

/***/ 59230:
/*!****************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPhasePageModule": function() { return /* binding */ ExperimentPhasePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _experiment_phase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiment-phase-routing.module */ 2082);
/* harmony import */ var _experiment_phase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-phase.page */ 21185);







let ExperimentPhasePageModule = class ExperimentPhasePageModule {
};
ExperimentPhasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _experiment_phase_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperimentPhasePageRoutingModule
        ],
        declarations: [_experiment_phase_page__WEBPACK_IMPORTED_MODULE_1__.ExperimentPhasePage]
    })
], ExperimentPhasePageModule);



/***/ }),

/***/ 21185:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPhasePage": function() { return /* binding */ ExperimentPhasePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_experiment_phase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./experiment-phase.page.html */ 81886);
/* harmony import */ var _experiment_phase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-phase.page.scss */ 49748);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);














let ExperimentPhasePage = class ExperimentPhasePage {
    constructor(router, alertService, route, userService, http, domsaintizer, fileTransfer, file, modalCtrl, fileOpener, loading) {
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.userService = userService;
        this.http = http;
        this.domsaintizer = domsaintizer;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.fileOpener = fileOpener;
        this.loading = loading;
        this.headerName = '';
        this.array = [
            {
                icon: "../../../../assets/images/physics.png",
                name: "Physics",
                value: "1"
            },
            {
                icon: "../../../../assets/images/number_system.png",
                name: "Mathematics",
                value: "2"
            }
        ];
        this.array1 = [
            {
                icon: "../../../../assets/images/measurement.png",
                name: "Measurement",
                value: "1",
                pdf: "https://drive.google.com/file/d/1l9AkstXKscQxI-oBh_B3FMWrDuOjquIf/view?usp=drive_link"
            },
            {
                icon: "../../../../assets/images/force_and_motion.png",
                name: "Force and Motion",
                value: "2",
                pdf: "https://drive.google.com/file/d/1cZJdTWSDGMqFnkrFTZtz0b7bKRYxbPzY/view?usp=drive_link"
            },
            {
                icon: "../../../../assets/images/pressure.png",
                name: "Pressure",
                value: "3",
                pdf: "https://drive.google.com/file/d/1sxqIp_6ncyugVO9nEZ6Qyt5PtT_3SY2U/view?usp=drive_link"
            },
            {
                icon: "../../../../assets/images/friction.png",
                name: "Friction",
                value: "4",
                pdf: "https://drive.google.com/file/d/1W2ne-NIh0sRixQMnF4-Axiy41rhWdDSP/view?usp=drive_link"
            }
        ];
        this.array2 = [
            {
                icon: "../../../../assets/images/measurement.png",
                name: "Measurements",
                value: "1",
                pdf: ""
            },
            {
                icon: "../../../../assets/images/number_system.png",
                name: "Number System ",
                value: "2",
                pdf: ""
            },
            {
                icon: "../../../../assets/images/real_life_mathematics.png",
                name: "Real Life Mathematics",
                value: "3",
                pdf: ""
            },
            {
                icon: "../../../../assets/images/area.png",
                name: "Area",
                value: "4",
                pdf: ""
            }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.headerName = 'Theme';
        this.activeMenu = true;
        this.routeData = this.route.snapshot;
        this.name = this.routeData.queryParams.name;
        console.log(this.routeData.queryParams.expermentId, "this.routeData.queryParams.expermentId");
        if (this.routeData.queryParams.expermentId) {
            this.expermentId = this.routeData.queryParams.expermentId;
            console.log(this.expermentId);
            if (this.expermentId == 1) {
                this.array1Active = true;
                this.array2Active = false;
                this.activeMenu = false;
                this.headerName = 'Physics';
            }
            if (this.expermentId == 2) {
                this.array1Active = false;
                this.array2Active = true;
                this.activeMenu = false;
                this.headerName = 'Mathematics';
            }
        }
    }
    onNextMenu(value) {
        if (value == 1) {
            this.array1Active = true;
            this.array2Active = false;
            this.activeMenu = false;
            this.headerName = 'Physics';
        }
        if (value == 2) {
            this.array1Active = false;
            this.array2Active = true;
            this.activeMenu = false;
            this.headerName = 'Mathematics';
        }
    }
    onNextPage(value, name, id) {
        this.router.navigate(['/tabs/experiment-pdfviewer'], { queryParams: { "value": value, "name": name, expermentId: id } });
    }
    navigateBack() {
        this.array1Active = false;
        this.array2Active = false;
        this.activeMenu = true;
        this.router.navigate(['/tabs/experiment-dashboard'], { queryParams: { "name": "experiments" } });
    }
    navigateBackpage() {
        this.array1Active = false;
        this.array2Active = false;
        this.activeMenu = true;
    }
};
ExperimentPhasePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService }
];
ExperimentPhasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-experiment-phase',
        template: _raw_loader_experiment_phase_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_experiment_phase_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExperimentPhasePage);



/***/ }),

/***/ 47224:
/*!***********************************************************!*\
  !*** ./src/app/services/tnvn/services/loading.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 100000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 1000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => {
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 49748:
/*!****************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-phase/experiment-phase.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-image {\n  background: url(\"/assets/images/Rectangle.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 2100%;\n}\n\n.circle {\n  height: 75px;\n  padding: 10%;\n  padding-left: 15% !important;\n  padding-top: 15% !important;\n}\n\n.circle1 {\n  padding: 10%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQtcGhhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFHQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJleHBlcmltZW50LXBoYXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9SZWN0YW5nbGUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIxMDAlO1xyXG4gIH0gXHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzZFNTNGRjtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlMSB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIl19 */");

/***/ }),

/***/ 81886:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/experiment-phase/experiment-phase.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <ion-row class=\"header-image\">\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"font-size: x-large;\">\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" *ngIf=\"activeMenu\" (click)=\"navigateBack()\">\r\n          </ion-icon>\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" *ngIf=\"!activeMenu\" (click)=\"navigateBackpage()\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"padding-left:5%;font-size: large;color: white;\">\r\n          Theme\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div *ngIf=\"activeMenu\">\r\n        <ion-row *ngFor=\"let item of array\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextMenu(item.value)\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div *ngIf=\"array1Active\">\r\n        <ion-row *ngFor=\"let item of array1\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextPage(item.value,item.name,'1')\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div *ngIf=\"array2Active\">\r\n        <ion-row *ngFor=\"let item of array2\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"onNextPage(item.value,item.name,'2')\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_experiment-phase_experiment-phase_module_ts-es2015.js.map