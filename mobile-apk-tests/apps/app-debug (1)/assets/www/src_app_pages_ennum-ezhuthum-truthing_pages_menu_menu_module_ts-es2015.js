(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_menu_menu_module_ts"],{

/***/ 76197:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/menu/menu-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": function() { return /* binding */ MenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 90557);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 97941:
/*!*************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/menu/menu.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": function() { return /* binding */ MenuPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 76197);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 90557);






// import { HeaderSidebarComponent } from 'src/app/header-sidebar/header-sidebar.component';

let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 90557:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/menu/menu.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": function() { return /* binding */ MenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 41356);
/* harmony import */ var _menu_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.css */ 51841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader/ion-loader.service */ 21645);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);





// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';







let MenuPage = class MenuPage {
    constructor(apiService, ionLoaderService, ionicstorage, router, route, alertService, networService, userSessionService) {
        this.apiService = apiService;
        this.ionLoaderService = ionLoaderService;
        this.ionicstorage = ionicstorage;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.networService = networService;
        this.userSessionService = userSessionService;
        this.saving = false;
        this.nodata = false;
        this.obj = {};
        this.newmenus = [];
        this.user_name = '10300766';
        this.pass_word = '9442@1969';
        this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
        this.live_img_url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.ImgUrl;
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_usertype1 = this.userSessionService.emis_usertype1();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.apiService.setdata(this.router.url)
        // this.route.params.subscribe(val => {
        //   this.ionicstorage.getData('remainguser').then(
        //     (dataa) => {
        //       console.log(dataa)
        //       this.remainguserdata = dataa.remainingdata.length;
        //       debugger
        //       this.saveRemainingData();
        //     })
        //     this.ionicstorage.getData('remainguserformative').then(
        //       (dataa) => {
        //         // console.log(dataa)
        //         if(dataa != null){
        //           this.remainguserdata = dataa.remainingdata.length;
        //           this.saveRemainingDataFormative();
        //         }
        //       })
        //       this.ionicstorage.getData('remainguserformative_A').then(
        //         (dataa) => {
        //           if(dataa != null){
        //           this.remainguserdata = dataa.remainingdata.length;
        //           this.saveRemainingDataFormative_A();
        //           }
        //         })
        //     this.ionicstorage.getData('remaingusersummative').then(
        //       (dataa) => {
        //         console.log(dataa,"45476567");
        //         if(dataa != null){
        //         this.remainguserdata = dataa.remainingdata.length;
        //         this.saveRemainingDataSummative();
        //         }
        //       })
        // });
    }
    navigateModule() {
        this.router.navigate(['/tabs/school-observation']);
    }
    compareName(a, b) {
        // converting to uppercase to have case-insensitive comparison
        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
        let comparison = 0;
        if (name1 > name2) {
            comparison = 1;
        }
        else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }
    // classRoom() {
    //     this.ionicstorage.getData('userInfo').then(
    //       (dataa) => {
    //         this.username = dataa.username;
    //         this.schoolid = dataa.school_id;
    //         this.token = dataa.token;
    //         let date=new Date();
    //         let acadamicyear=date.getFullYear()+" - "+(date.getFullYear()+1);
    //         let userDetail = {
    //           'username': this.username,
    //           'school_id': this.schoolid,
    //         }
    //         this.apiService.getClassRoomDetailsAll(userDetail, dataa.token).subscribe(async val => {
    //           this.apiService.classroomDetails = val['records'].saved_details;
    //           if (val['records'].academic_year_details.length > 0) {
    //             this.apiService.setacadamic_yearid(val['records'].academic_year_details[0].id)
    //             }
    //           this.router.navigate(['/tabs/school-observation'])
    //         })
    //       },
    //       (error) => console.error(error)
    //     );
    //   }
    palliparvaiRoute(path) {
        this.router.navigate([path]);
    }
    // saveRemainingData() {
    //   if (this.networService.getCurrentNetworkStatus() == 0) {
    //     this.ionicstorage.getData('remainguser').then(
    //       (dataa) => {
    //         console.log(dataa.remainingdata,"dataa.remainingdata",dataa);
    //         let v = dataa.remainingdata.length;
    //         if (v > 0) {
    //           this.saving = true;
    //           this.nodata = false;
    //           let remaingusercount = 0;
    //           dataa.remainingdata.filter(val => {
    //             this.apiService.saveBaselineAssessmentDetails(val, this.token).subscribe(data => {
    //               if(data.status == 200 && data.dataStatus == true){
    //                 this.alertService.success("test successfully Saved!!", false)
    //                 remaingusercount = remaingusercount + 1;
    //                 if (remaingusercount == v) {
    //                   this.saving = false;
    //                   this.ionicstorage
    //                     .insertData_Replace('remainguser', { remainingdata: [] })
    //                   this.remainguserdata = 0;
    //                 }
    //               }else{
    //                 this.alertService.error(data.msg);
    //               }
    //             })
    //           })
    //         } else {
    //           this.nodata = true;
    //         }
    //       })
    //   } else {
    //     this.alertService.error("Offline!!")
    //   }
    // }
    saveRemainingDataFormative() {
        if (this.networService.getCurrentNetworkStatus() == 0) {
            this.ionicstorage.getData('remainguserformative').then((dataa) => {
                let v = dataa.remainingdata.length;
                if (v > 0) {
                    console.log("final");
                    this.saving = true;
                    this.nodata = false;
                    let remaingusercountformative = 0;
                    dataa.remainingdata.filter(val => {
                        this.apiService.saveFromativeAssessmentDetails(val, this.token).subscribe(data => {
                            if (data.status == 200 && data.dataStatus == true) {
                                this.alertService.success("Assessment successfully Saved!!", false);
                                remaingusercountformative = remaingusercountformative + 1;
                                if (remaingusercountformative == v) {
                                    this.saving = false;
                                    this.ionicstorage
                                        .insertData_Replace('remainguserformative', { remainingdata: [] });
                                    this.remainguserdata = 0;
                                }
                            }
                            else {
                                this.alertService.error(data.msg);
                            }
                        });
                    });
                }
                else {
                    this.nodata = true;
                }
            });
        }
        else {
            this.alertService.error("Offline!!");
        }
    }
    saveRemainingDataSummative() {
        if (this.networService.getCurrentNetworkStatus() == 0) {
            this.ionicstorage.getData('remaingusersummative').then((dataa) => {
                console.log(dataa, "123");
                let v = dataa.remainingdata.length;
                if (v > 0) {
                    this.saving = true;
                    this.nodata = false;
                    let remaingusersummativecount = 0;
                    // dataa.remainingdata.filter(val => {
                    console.log(dataa.remainingdata[0], "dataa.remainingdata[0]");
                    this.apiService.saveSummativeAssessmentDetails(dataa.remainingdata, this.token).subscribe(data => {
                        if (data.status == 200 && data.dataStatus == true) {
                            this.alertService.success("Assessment successfully Saved!!", false);
                            remaingusersummativecount = remaingusersummativecount + 1;
                            // if (remaingusersummativecount == v) {
                            this.saving = false;
                            this.ionicstorage
                                .insertData_Replace('remaingusersummative', { remainingdata: [] });
                            this.remainguserdata = 0;
                            // }
                        }
                        else {
                            this.alertService.error(data.msg);
                        }
                    });
                    // })
                }
                else {
                    this.nodata = true;
                }
            });
        }
        else {
            this.alertService.error("Offline!!");
        }
    }
    saveRemainingDataFormative_A() {
        if (this.networService.getCurrentNetworkStatus() == 0) {
            this.ionicstorage.getData('remainguserformative_A').then((dataa) => {
                let v = dataa.remainingdata.length;
                if (v > 0) {
                    this.saving = true;
                    this.nodata = false;
                    let remaingusercountformative = 0;
                    dataa.remainingdata.filter(val => {
                        this.apiService.saveFromativeAssessment_A_Details(val, this.token).subscribe(data => {
                            if (data.status == 200 && data.dataStatus == true) {
                                this.alertService.success("Assessment successfully Saved!!", false);
                                remaingusercountformative = remaingusercountformative + 1;
                                if (remaingusercountformative == v) {
                                    this.saving = false;
                                    this.ionicstorage
                                        .insertData_Replace('remainguserformative_A', { remainingdata: [] });
                                    this.remainguserdata = 0;
                                }
                            }
                            else {
                                this.alertService.error(data.msg);
                            }
                        });
                    });
                }
                else {
                    this.nodata = true;
                }
            });
        }
        else {
            this.alertService.error("Offline!!");
        }
    }
};
MenuPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__.IonLoaderService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 51841:
/*!************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/menu/menu.page.css ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nion-content{\r\n  --background: var(--ion-color-secondary)\r\n}\r\n.icon-avatar{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.card-content{\r\n  margin-top: 10%;\r\n}\r\nion-back-button{\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJtZW51LnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSlcclxufVxyXG4uaWNvbi1hdmF0YXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ 41356:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/menu/menu.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header-style\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/module-menu\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 2</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && (emis_usertype1 == '1' || emis_usertype1 == '2')\">L2 - 2</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\">\r\n    <!-- <ion-item button (click)=\"classRoom()\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Classroom Details\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <!-- <ion-item button (click)=\"palliparvaiRoute()\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        School Observation\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button (click)=\"palliparvaiRoute('/tabs/school-observation')\" detail>\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/classroomdetails.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Ennum Ezhuthum 2022-2023\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <span>\r\n      <ion-item button (click)=\"navigateModule()\" detail>\r\n        <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/formative.png\" />\r\n        <ion-label class=\"ion-text-center\">\r\n          Summative 2023-2024\r\n        </ion-label>\r\n      </ion-item>\r\n    </span>\r\n    <!-- <ion-item button detail routerLink=\"/tabs/assessment-report-menu\">\r\n      <img width=\"30\" src=\"/assets/images/ennum-ezhuthum/studentreportcard.png\" />\r\n      <ion-label class=\"ion-text-center\">\r\n        Assessment Reports\r\n      </ion-label>\r\n    </ion-item> -->\r\n  </ion-card>\r\n\r\n\r\n  <!-- <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <div *ngIf=\"saving\" style=\"padding:5px;padding: 10px;\r\n    background: #c5c1c1;\">Saving...</div>\r\n    <div>\r\n      <ion-button *ngIf=\"remainguserdata > 0\" style=\"--background: #c34242;width: 90%;\r\n        margin: 20px\"\r\n        (click)=\"saveRemainingData();saveRemainingDataFormative();saveRemainingDataSummative();saveRemainingDataFormative_A()\">Data\r\n        Save Pending</ion-button>\r\n    </div>\r\n  </ion-col> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_menu_menu_module_ts-es2015.js.map