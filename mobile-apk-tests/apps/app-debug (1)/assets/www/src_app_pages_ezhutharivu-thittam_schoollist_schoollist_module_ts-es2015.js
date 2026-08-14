(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ezhutharivu-thittam_schoollist_schoollist_module_ts"],{

/***/ 22160:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ezhutharivu-thittam/schoollist/schoollist-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoollistPageRoutingModule": function() { return /* binding */ SchoollistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _schoollist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schoollist.page */ 28894);




const routes = [
    {
        path: '',
        component: _schoollist_page__WEBPACK_IMPORTED_MODULE_0__.SchoollistPage
    }
];
let SchoollistPageRoutingModule = class SchoollistPageRoutingModule {
};
SchoollistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoollistPageRoutingModule);



/***/ }),

/***/ 92977:
/*!***************************************************************************!*\
  !*** ./src/app/pages/ezhutharivu-thittam/schoollist/schoollist.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoollistPageModule": function() { return /* binding */ SchoollistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _schoollist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schoollist-routing.module */ 22160);
/* harmony import */ var _schoollist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schoollist.page */ 28894);







let SchoollistPageModule = class SchoollistPageModule {
};
SchoollistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _schoollist_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoollistPageRoutingModule
        ],
        declarations: [_schoollist_page__WEBPACK_IMPORTED_MODULE_1__.SchoollistPage]
    })
], SchoollistPageModule);



/***/ }),

/***/ 28894:
/*!*************************************************************************!*\
  !*** ./src/app/pages/ezhutharivu-thittam/schoollist/schoollist.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoollistPage": function() { return /* binding */ SchoollistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_schoollist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schoollist.page.html */ 92585);
/* harmony import */ var _schoollist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schoollist.page.scss */ 96485);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ 7386);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let SchoollistPage = class SchoollistPage {
    constructor(router, httpClient, storage, ionicstorage, userSession, sharedService) {
        this.router = router;
        this.httpClient = httpClient;
        this.storage = storage;
        this.ionicstorage = ionicstorage;
        this.userSession = userSession;
        this.sharedService = sharedService;
        this.schoolListCopy = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        debugger;
        this.blockId = this.userSession.block_id();
        // let url = 'https://d1wpyxz35bzzz4.cloudfront.net/block_based_govt_aided_and_govt_' + this.blockId + '_prod.json';
        // this.httpClient.get<any>(url).subscribe((data: any) => {
        //   this.schoolList = data.govt_aided;
        // });
        this.getSchollList(this.blockId);
    }
    getSchollList(blockid) {
        debugger;
        this.schoolList = [];
        this.schoolListCopy = [];
        this.ionicstorage.getData('volnteerSchool').then((data) => {
            if (data) {
                if (data.result.length > 0) {
                    this.schoolList = data.result;
                    this.schoolList.sort(this.sharedService.compareValues('school_name', 'asc'));
                    this.schoolListCopy.push(this.schoolList);
                    this.noData = false;
                }
                else {
                    this.noData = true;
                }
            }
            else {
                let url = 'https://d1wpyxz35bzzz4.cloudfront.net/block_based_govt_aided_and_govt_' + blockid + '_prod.json';
                this.httpClient.get(url).subscribe((data) => {
                    console.log('test', data);
                    this.schoolList = data.govt_aided;
                    this.schoolList.sort(this.sharedService.compareValues('school_name', 'asc'));
                    this.schoolListCopy.push(this.schoolList);
                    this.storage.set('volnteerSchool', { result: data.govt_aided }).then(r => {
                        console.log('Volunteer school success');
                    });
                });
            }
        });
    }
    navigationBack() {
        this.router.navigate(['tabs/home']);
    }
    onMenuNavigate(item) {
        debugger;
        this.router.navigate(['tabs/ezhutharivu-thittam/dashboard'], { queryParams: { 'data': JSON.stringify(item) } });
    }
    onSearch(list, event) {
        debugger;
        let searchTerm = event.detail.value.trim();
        this.schoolList = this.schoolListCopy[0].filter((item) => {
            let udise = item.udise_code.toString();
            return item.school_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // item.GrNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // item.dateFormat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // item.GrievanceTypeText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // item.GrievanceCategoryText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                udise.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
};
SchoollistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService }
];
SchoollistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-schoollist',
        template: _raw_loader_schoollist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schoollist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoollistPage);



/***/ }),

/***/ 96485:
/*!***************************************************************************!*\
  !*** ./src/app/pages/ezhutharivu-thittam/schoollist/schoollist.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: auto;\n  color: #8B67B3;\n  margin: 17px;\n  border-radius: 10px;\n  --background: white;\n  box-shadow: 0 4px 8px 0 #b0d4ef, 0 6px 20px 0 #e5eef5;\n}\n\n.menu-icon {\n  text-align: center;\n}\n\n.menu-txt {\n  font-size: 17px;\n  margin-bottom: auto;\n  margin-top: auto;\n  padding-left: 16px;\n}\n\n.lbl {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 16px;\n}\n\n.icon-lbl {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  zoom: 1.7;\n  color: green;\n}\n\nion-searchbar {\n  padding-left: 20px;\n  padding-top: 15px;\n  padding-right: 20px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InNjaG9vbGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgICBtYXJnaW46IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICNiMGQ0ZWYsIDAgNnB4IDIwcHggMCAjZTVlZWY1O1xyXG59XHJcblxyXG4ubWVudS1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LXR4dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmljb24tbGJse1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHpvb206IDEuNztcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 92585:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ezhutharivu-thittam/schoollist/schoollist.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigationBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>School List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar class=\"search\" placeholder=\"Search\" (ionChange)=\"onSearch(schoolList,$event)\"></ion-searchbar>\r\n\r\n  <ion-card *ngFor=\"let item of schoolList\" (click)=\"onMenuNavigate(item);\">\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"padding:0px;\">\r\n          <ion-label class=\"lbl\">{{item.school_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"padding:0px;color:rgb(61, 60, 60);\">\r\n          <ion-label>{{item.udise_code}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ezhutharivu-thittam_schoollist_schoollist_module_ts-es2015.js.map