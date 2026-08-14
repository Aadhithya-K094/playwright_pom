(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-list_observation-list_module_ts"],{

/***/ 49642:
/*!************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-list/observation-list.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationListPageModule": function() { return /* binding */ ObservationListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _observation_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation-list.page */ 79165);







const routes = [
    {
        path: '',
        component: _observation_list_page__WEBPACK_IMPORTED_MODULE_0__.ObservationListPage
    }
];
let ObservationListPageModule = class ObservationListPageModule {
};
ObservationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_observation_list_page__WEBPACK_IMPORTED_MODULE_0__.ObservationListPage]
    })
], ObservationListPageModule);



/***/ }),

/***/ 79165:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-list/observation-list.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationListPage": function() { return /* binding */ ObservationListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation-list.page.html */ 1220);
/* harmony import */ var _observation_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-list.page.scss */ 68654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */ 90110);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);








let ObservationListPage = class ObservationListPage {
    constructor(actionSheetController, apiService, ionicStorageService, loaderService) {
        this.actionSheetController = actionSheetController;
        this.apiService = apiService;
        this.ionicStorageService = ionicStorageService;
        this.loaderService = loaderService;
        this.lastUpdated_value = '';
        this.local_list_data = [];
    }
    ngOnInit() {
        this.getObservationList();
    }
    getObservationList() {
        this.loaderService.presentLoading();
        this.ionicStorageService.getData('observation_list').then(local_data => {
            this.ionicStorageService.getData('store_observation').then(local_stored => {
                if (local_stored) {
                    local_stored = JSON.parse(local_stored);
                    this.local_list_data = local_stored.map(val => val.data.records.form_values);
                    let temp = [];
                    this.local_list_data.map(res => {
                        let d = res.filter(val => val.classroom_data)[0];
                        let class_type = res.filter(val => val.classroom_type)[0];
                        class_type = class_type.classroom_type;
                        d.classroom_data[1].class = class_type.hasOwnProperty('class') ? class_type.class : class_type.class_observed;
                        d.classroom_data[1].section = class_type.section;
                        temp.push(d.classroom_data[1]);
                    });
                    this.local_list_data = temp;
                }
                if (local_data) {
                    this.observation_list_data = local_data.records;
                    this.lastUpdated_value = local_data.lastUpdated;
                    this.loaderService.dismissLoader();
                }
                else {
                    let params = { start_date: null, end_date: null };
                    this.apiService.getObservationList(params).subscribe(result => {
                        if (result['dataStatus']) {
                            this.observation_list_data = result['records'];
                            this.lastUpdated_value = new Date();
                        }
                    });
                }
            });
        });
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: '',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    doRefresh(event) {
        let params = { start_date: null, end_date: null };
        this.apiService.getObservationList(params).subscribe(result => {
            if (result['dataStatus']) {
                this.observation_list_data = result['records'];
                this.lastUpdated_value = new Date();
            }
        });
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
ObservationListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_3__.LoaderServiceService }
];
ObservationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-observation-list',
        template: _raw_loader_observation_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationListPage);



/***/ }),

/***/ 68654:
/*!************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-list/observation-list.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\n.fixed[scrollx=true] ::-webkit-scrollbar, div[scrolly=true] ::-webkit-scrollbar {\n  display: none;\n}\n.fixed[scrollx=true] {\n  overflow-x: auto;\n}\n.fixed[scrolly=true] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFHRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBQUoiLCJmaWxlIjoib2JzZXJ2YXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWRbc2Nyb2xseD10cnVlXSwgZGl2W3Njcm9sbHk9dHJ1ZV0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZml4ZWRbc2Nyb2xseD10cnVlXSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZml4ZWRbc2Nyb2xseT10cnVlXSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 1220:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-list/observation-list.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Observation List</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content\r\n          pullingIcon=\"arrow-dropdown\"\r\n          pullingText=\"Pull to refresh\"\r\n          refreshingSpinner=\"circles\"\r\n          refreshingText=\"Refreshing...\">\r\n        </ion-refresher-content>\r\n      </ion-refresher>\r\n  <ion-list style=\"position: relative;bottom:3px;\">\r\n      <div *ngIf=\"local_list_data.length > 0\">\r\n    <ion-item *ngFor=\"let data of local_list_data;let index=index\"> \r\n        <ion-icon slot=\"start\" name=\"cloud-upload\" style=\"color:orange\"></ion-icon>\r\n      \r\n        <ion-label text-wrap>\r\n          <h2 >\r\n            <ion-col>{{data.school_name}}</ion-col></h2>\r\n          <h3><ion-col size=30>{{data.block_name}},{{data.district_name}}</ion-col>|\r\n            <ion-col style=\"color:orange;font-size:14px;\">Not Synced</ion-col></h3>\r\n       \r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item *ngFor=\"let data of observation_list_data;let index=index\"> \r\n      <ion-icon slot=\"start\" name=\"checkmark-circle\" style=\"color:green\"></ion-icon>\r\n      <ion-label text-wrap>\r\n        <h2>\r\n          <ion-col>{{data.school_name}}</ion-col></h2>\r\n        <h3><ion-col size=30>{{data.block_name}},{{data.district_name}}</ion-col>|\r\n         {{data.class}}<span *ngIf=\"data.section\"> '{{data.section.toUpperCase()}}'</span></h3>\r\n        <p><ion-col>{{data.createdon}}</ion-col> |\r\n          <ion-col style=\"color:green;font-size:14px;\">Synced</ion-col></p>\r\n      </ion-label>\r\n    </ion-item>\r\n   \r\n    </ion-list>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n      <ion-fab-button size=\"small\" routerLink=\"/tnvntabs/page-route/classroom-data\" routerDirection=\"forward\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n<ion-footer style=\"height: 30px;\" *ngIf=\"lastUpdated_value != ''\">\r\n  <ion-text><p style=\"text-align: center;color:gray;font-size: 12px;\">{{lastUpdated_value | date:'medium'}}</p></ion-text>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_observation-list_observation-list_module_ts-es2015.js.map