(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_module-menu_module-menu_module_ts"],{

/***/ 79276:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleMenuPageRoutingModule": function() { return /* binding */ ModuleMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _module_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-menu.page */ 60262);




const routes = [
    {
        path: '',
        component: _module_menu_page__WEBPACK_IMPORTED_MODULE_0__.ModuleMenuPage
    }
];
let ModuleMenuPageRoutingModule = class ModuleMenuPageRoutingModule {
};
ModuleMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModuleMenuPageRoutingModule);



/***/ }),

/***/ 36491:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleMenuPageModule": function() { return /* binding */ ModuleMenuPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _module_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-menu-routing.module */ 79276);
/* harmony import */ var _module_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-menu.page */ 60262);







let ModuleMenuPageModule = class ModuleMenuPageModule {
};
ModuleMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _module_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleMenuPageRoutingModule
        ],
        declarations: [_module_menu_page__WEBPACK_IMPORTED_MODULE_1__.ModuleMenuPage]
    })
], ModuleMenuPageModule);



/***/ }),

/***/ 60262:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleMenuPage": function() { return /* binding */ ModuleMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_module_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./module-menu.page.html */ 78101);
/* harmony import */ var _module_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-menu.page.scss */ 67840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);









let ModuleMenuPage = class ModuleMenuPage {
    constructor(router, userSessionService, apiService, alertController, ionicstorage) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.apiService = apiService;
        this.alertController = alertController;
        this.ionicstorage = ionicstorage;
        this.menuE = true;
        this.fullMenu = true;
        this.menuEE = true;
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_usertype1 = this.userSessionService.emis_usertype1();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        debugger;
        // this.getSchoolDetails();
    }
    getSchoolDetails() {
        this.apiService.eet_school_observation().subscribe(dataval => {
            try {
                if (Object.keys(dataval.record).length > 0 && dataval.status == 200 && dataval.dataStatus == true) {
                    this.start_datae = dataval.record.start_date;
                    this.end_datae = dataval.record.end_date;
                    this.currentDate = new Date().toJSON().slice(0, 10);
                    this.ionicstorage.insertData_Replace('eetSurveyLevel', dataval.record.level);
                    console.log(this.currentDate);
                    // this.palliparvaiRoute('');
                }
                else {
                    if (Object.keys(dataval.record).length == 0) {
                        throw 'There is no Data';
                    }
                    else if (dataval.status != 200 || dataval.dataStatus == false) {
                        this.fullMenu = false;
                        this.showMsg = dataval.record ? dataval.record : "API Error";
                        console.log(this.showMsg);
                        throw (this.showMsg);
                    }
                    else {
                        this.showMsg = "API Error";
                        console.log(this.showMsg);
                        throw (this.showMsg);
                    }
                }
            }
            catch (err) {
                this.errorMsg = err;
                this.apiService.displayToast(err, true);
                this.errorLog(err, {});
            }
        }, error => {
            debugger;
            console.log('oops11111', error);
            this.errorLog(error === null || error === void 0 ? void 0 : error.message, {});
            console.log('oops22222', error === null || error === void 0 ? void 0 : error.message);
        });
    }
    errorLog(err, payload) {
        let record = {
            "observation_id": '',
            "school_id": '',
            "student_id": "",
            "oberved_date": "",
            "oberved_by": "",
            "page": 'L1-1',
            "error": err,
            "payload": JSON.stringify(payload),
            "result": ""
        };
        console.log(record, 'recordrecord');
        this.apiService.eet_error_log(record).subscribe(data => {
            try {
                if (data.status == 200) {
                    throw "Data Saved Successfully";
                }
                else {
                    throw "Server not found";
                }
            }
            catch (err) {
                // this.apiService.displayToast(err, false);
                console.log('Error log api ' + err);
            }
        });
    }
    //  generateDateList(from, to) {
    //   var getDate = function(date) { //Mysql Format
    //       var m = date.getMonth(), d = date.getDate();
    //       return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    //   }
    //   var fs = from.split('-'), startDate = new Date(fs[0], fs[1], fs[2]), result = [getDate(startDate)], start = startDate.getTime(), ts, end;
    //   if ( typeof to == 'undefined') {
    //       end = new Date().getTime();
    //   } else {
    //       ts = to.split('-');
    //       end = new Date(ts[0], ts[1], ts[2]).getTime();
    //   }
    //   while (start < end) {
    //       start += 86400000;
    //       startDate.setTime(start);
    //       result.push(getDate(startDate));
    //   }
    //   return result;
    //  }
    palliparvaiRoute(path) {
        if ((this.currentDate >= this.start_datae) && (this.currentDate <= this.end_datae)) {
            if (path == '/tabs/menu') {
                this.router.navigate([path]);
            }
            else {
                this.checkObservationPalli();
            }
        }
        else {
            if (path == '/tabs/menu') {
                this.checkObservation();
            }
            else {
                this.router.navigate([path]);
            }
        }
    }
    underMaintaines() {
        this.maintainence();
    }
    // palliparvaimainRoute(path){
    //   this.router.navigate([path])
    // }
    maintainence() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'The Palli Paarvai module is under maintenance, kindly wait until futher notice.',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            this.router.navigate(['/tabs/home']);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkObservation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Access to this Ennum Ezhuthum is restricted between ' + this.start_datae + ' & ' + this.end_datae,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            // this.updateObservation();
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkObservationPalli() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Access to this School Observation is restricted between ' + this.start_datae + ' & ' + this.end_datae,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            // this.updateObservation();
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
};
ModuleMenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService }
];
ModuleMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-module-menu',
        template: _raw_loader_module_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_module_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModuleMenuPage);



/***/ }),

/***/ 67840:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\n.icon-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-content {\n  margin-top: 10%;\n}\n\nion-back-button {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6Im1vZHVsZS1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpXHJcbiAgfVxyXG4gIC5pY29uLWF2YXRhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG4gIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ 78101:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/module-menu/module-menu.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header-style\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 1</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && (emis_usertype1 == '1' || emis_usertype1 == '2')\">L2 - 1</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\" >\r\n    <!-- <ion-item button (click)=\"classRoom()\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Classroom Details\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <ion-item button (click)=\"palliparvaiRoute('/tnvntabs/page-route/dashboardc')\" *ngIf=\"menuE\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        School Observation\r\n      </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item button (click)=\"underMaintaines()\" *ngIf=\"menuE\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        School Observation\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <!-- <ion-item *ngIf=\"menuEE\" button (click)=\"palliparvaiRoute('/tabs/menu')\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Ennum Ezhuthum Survey\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <!-- <span *ngFor=\"let data of newmenus\">\r\n      <ion-item button [disabled]=\"data.disabled\" (click)=\"navigateModule(data.routerlink,data.assessment_type)\" detail>\r\n        <img width=\"30\" src=\"{{data.imgsrc}}\" />\r\n        <ion-label class=\"ion-text-center\">\r\n          {{data.name}}\r\n        </ion-label>\r\n      </ion-item>\r\n    </span> -->\r\n    <!-- <ion-item button detail routerLink=\"/tabs/assessment-report-menu\">\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/studentreportcard.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Assessment Reports\r\n      </ion-label>\r\n    </ion-item> -->\r\n  </ion-card>\r\n  <!-- <h5 style=\"text-align: center; margin-top: 100px;\">{{this.showMsg}}</h5> -->\r\n\r\n\r\n  <!-- <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <div *ngIf=\"saving\" style=\"padding:5px;padding: 10px;\r\n    background: #c5c1c1;\">Saving...</div>\r\n    <div>\r\n      <ion-button *ngIf=\"remainguserdata > 0\" style=\"--background: #c34242;width: 90%;\r\n        margin: 20px\"\r\n        (click)=\"saveRemainingData();saveRemainingDataFormative();saveRemainingDataSummative();saveRemainingDataFormative_A()\">Data\r\n        Save Pending</ion-button>\r\n    </div>\r\n  </ion-col> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_module-menu_module-menu_module_ts-es2015.js.map