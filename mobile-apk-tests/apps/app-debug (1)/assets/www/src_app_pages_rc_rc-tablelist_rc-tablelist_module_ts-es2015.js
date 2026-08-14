(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_rc_rc-tablelist_rc-tablelist_module_ts"],{

/***/ 96838:
/*!**********************************************************************!*\
  !*** ./src/app/pages/rc/rc-tablelist/rc-tablelist-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RCTablelistPageRoutingModule": function() { return /* binding */ RCTablelistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rc_tablelist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-tablelist.page */ 98171);




const routes = [
    {
        path: '',
        component: _rc_tablelist_page__WEBPACK_IMPORTED_MODULE_0__.RCTablelistPage
    }
];
let RCTablelistPageRoutingModule = class RCTablelistPageRoutingModule {
};
RCTablelistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RCTablelistPageRoutingModule);



/***/ }),

/***/ 31985:
/*!**************************************************************!*\
  !*** ./src/app/pages/rc/rc-tablelist/rc-tablelist.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RCTablelistPageModule": function() { return /* binding */ RCTablelistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rc_tablelist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-tablelist-routing.module */ 96838);
/* harmony import */ var _rc_tablelist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-tablelist.page */ 98171);







let RCTablelistPageModule = class RCTablelistPageModule {
};
RCTablelistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rc_tablelist_routing_module__WEBPACK_IMPORTED_MODULE_0__.RCTablelistPageRoutingModule
        ],
        declarations: [_rc_tablelist_page__WEBPACK_IMPORTED_MODULE_1__.RCTablelistPage]
    })
], RCTablelistPageModule);



/***/ }),

/***/ 98171:
/*!************************************************************!*\
  !*** ./src/app/pages/rc/rc-tablelist/rc-tablelist.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RCTablelistPage": function() { return /* binding */ RCTablelistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_rc_tablelist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rc-tablelist.page.html */ 67640);
/* harmony import */ var _rc_tablelist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-tablelist.page.scss */ 39743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/regulatory.service */ 63987);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);








let RCTablelistPage = class RCTablelistPage {
    constructor(router, rcservice, uploadService, iab) {
        this.router = router;
        this.rcservice = rcservice;
        this.uploadService = uploadService;
        this.iab = iab;
        this.onActive = false;
        this.applicationList = new Array();
        this.applist = new Array();
    }
    ionViewDidEnter() {
        this.getRCApplictaion();
    }
    ngOnInit() {
        // this.getRCquestion();
        // console.log(this.appType,"apptype")
        this.getTabs();
    }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
    }
    onExpand(item, id) {
        if (id) {
            if (this.onActive) {
                this.idItem = null;
                this.onActive = false;
            }
            else {
                this.idItem = id;
                this.onActive = true;
            }
        }
        else {
            this.onActive = false;
            this.idItem = null;
        }
    }
    getTabs() {
        this.tabsData = 1;
    }
    goToForm(appId, atype) {
        // this.router.navigate(['/tabs/rc-form'], { queryParams: { 'QuestionList': "1" }, skipLocationChange: false });
        this.applicationID = appId;
        this.appType = this.applist[appId].app_type;
        console.log(this.appType);
        // this.appType = atype
        this.school_name = this.applist[appId].school_name;
        this.district = this.applist[appId].district;
        let deoInspectionDoc = this.applist[appId].deo_inspection_doc || '';
        this.router.navigate(['/tabs/index'], { queryParams: { 'Apptype': this.appType, 'AppID': this.applicationID, 'schoolName': this.school_name, 'district': this.district, 'deoInspectionDoc': deoInspectionDoc }, skipLocationChange: false });
    }
    getRCquestion() {
        let data = {
            "application_id": "100000001",
        };
        this.rcservice.toGetRCFormquestion(data).subscribe(res => {
            this.section = res.result.sections;
            console.log(this.section);
            console.log(this.section, "question");
        });
    }
    getRCApplictaion() {
        this.rcservice.toGetAppList().subscribe(res => {
            if (res.result != 'Unable To Load Result for District List') {
                this.applicationList = res.result;
                for (let i in res.result) {
                    if (typeof res.result[i] !== 'undefined')
                        this.applist[res.result[i].application_id] = res.result[i];
                }
                console.log(this.applicationList, 'directAPI Call');
                console.log(this.applist, "result");
            }
            else {
                this.errorMessage = res.result;
            }
        });
    }
    viewInspectionFile(filename) {
        if (filename) {
            let splittedName = filename.split(".");
            let ext = splittedName[splittedName.length - 1].toLowerCase();
            var folderCode = this.uploadService.getAppTypeToFolderCode('3');
            var folderPath = this.uploadService.getBucketFolderNameForRC(folderCode, ext == 'pdf' ? 'pdf' : 'images');
            // inspectionFileName already contains folder path from getSignedUrl result.key
            var fileUrl = this.uploadService.emisApplicationCloudFront + folderPath + filename;
            this.iab.create(fileUrl, '_blank', 'location=yes,toolbar=yes');
        }
    }
};
RCTablelistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__.RegulatoryService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
RCTablelistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-rc-tablelist',
        template: _raw_loader_rc_tablelist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rc_tablelist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RCTablelistPage);



/***/ }),

/***/ 39743:
/*!**************************************************************!*\
  !*** ./src/app/pages/rc/rc-tablelist/rc-tablelist.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\n.textright {\n  text-align: right;\n  padding: 10px;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.buttontext {\n  color: white;\n}\n\n.errorMessage {\n  text-align: center;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJjLXRhYmxlbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InJjLXRhYmxlbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC13cmFwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudGV4dHJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlcnN0eWxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9udGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5lcnJvck1lc3NhZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 67640:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rc/rc-tablelist/rc-tablelist.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Regulatory Compilance</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-segment (click)=\"getTabs()\" [(ngModel)]=\"tabsData\"\r\n  style=\"max-width: 97%; margin: 8px; border-radius: 10px; border: 1px solid #e0e0e0;;\">\r\n  <ion-segment-button value=\"1\" style=\"border-right: 1px solid #e0e0e0; min-width: 25%;\">\r\n    <ion-label style=\"margin: auto;\">Pending<ion-icon name=\"alert-outline\"\r\n        style=\" font-size: 25px; float: right; color: #ed7b0a ;\"></ion-icon>\r\n    </ion-label>\r\n  </ion-segment-button>\r\n\r\n  <ion-segment-button value=\"2\" style=\"border-right: 1px solid #e0e0e0; min-width: 25%;\">\r\n    <ion-label style=\"margin: auto;\">Approved<ion-icon name=\"checkmark-outline\"\r\n        style=\" font-size: 25px; float: right; color: #4BB543 ;\"></ion-icon>\r\n    </ion-label>\r\n  </ion-segment-button>\r\n\r\n  <ion-segment-button value=\"3\" style=\"border-right: 1px solid #e0e0e0; min-width: 25%;\">\r\n    <ion-label style=\"margin: auto;\">Rejected<ion-icon name=\"close-outline\"\r\n        style=\" font-size: 25px; float: right; color: #df4759 ;\"></ion-icon>\r\n    </ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"tabsData == 1\">\r\n    <div *ngIf=\"this.errorMessage != 'Unable To Load Result for District List'\">\r\n      <div *ngFor=\"let data of applicationList\">\r\n        <div *ngIf=\"data.status == 'pending'\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"row-line\" (click)=\"onExpand(true,data.id)\">\r\n              <ion-row class=\"borderstyle\">\r\n                <ion-col size=\"6\" class=\"padding\">\r\n                  <ion-label class=\"headlabel\">Application No</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"textright\">\r\n                  <ion-label class=\"headlabel\">{{data.application_id}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"textright\">\r\n                  <ion-icon *ngIf=\"(!onActive)\" name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                  <ion-icon *ngIf=\"(onActive && (data.id == idItem))\" name=\"remove\" class=\"expand-label\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" *ngIf=\"(onActive && (data.id == idItem))\">\r\n              <ion-card>\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Date </ion-col>\r\n                      <ion-col size=\"6\"> {{data.creation_ts}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Code </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_code}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_type_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Address </ion-col>\r\n                      <ion-col size=\"6\"> {{data.address}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> School Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.school_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Contace No </ion-col>\r\n                      <ion-col size=\"6\"> {{data.sch_number}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Status </ion-col>\r\n                      <ion-col size=\"6\"> {{data.status}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"data.deo_inspection_doc\">\r\n                      <ion-col size=\"6\"> Inspection File </ion-col>\r\n                      <ion-col size=\"6\">\r\n                        <ion-button size=\"small\" fill=\"clear\" (click)=\"viewInspectionFile(data.deo_inspection_doc)\">\r\n                          <ion-icon name=\"document-outline\" slot=\"start\"></ion-icon> View\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-button class=\"buttontext\" (click)=\"goToForm(data.application_id, data.app_type)\">Go to Form\r\n                    </ion-button>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"this.errorMessage == 'Unable To Load Result for District List'\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"errorMessage\">\r\n          <h5>{{this.errorMessage}}</h5>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 2\">\r\n    <div *ngIf=\"this.errorMessage != 'Unable To Load Result for District List'\">\r\n      <div *ngFor=\"let data of applicationList\">\r\n        <div *ngIf=\"data.status == 'verified'\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"row-line\" (click)=\"onExpand(true,data.id)\">\r\n              <ion-row class=\"borderstyle\">\r\n                <ion-col size=\"6\" class=\"padding\">\r\n                  <ion-label class=\"headlabel\">Application No</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"textright\">\r\n                  <ion-label class=\"headlabel\">{{data.application_id}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"textright\">\r\n                  <ion-icon *ngIf=\"(!onActive)\" name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                  <ion-icon *ngIf=\"(onActive && (data.id == idItem))\" name=\"remove\" class=\"expand-label\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" *ngIf=\"(onActive && (data.id == idItem))\">\r\n              <ion-card>\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Date </ion-col>\r\n                      <ion-col size=\"6\">{{data.creation_ts}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Code </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_code}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_type_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Address </ion-col>\r\n                      <ion-col size=\"6\"> {{data.address}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> School Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.school_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Contace No </ion-col>\r\n                      <ion-col size=\"6\"> {{data.sch_number}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Status </ion-col>\r\n                      <ion-col size=\"6\"> {{data.status}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"data.deo_inspection_doc\">\r\n                      <ion-col size=\"6\"> Inspection File </ion-col>\r\n                      <ion-col size=\"6\">\r\n                        <ion-button size=\"small\" fill=\"clear\" (click)=\"viewInspectionFile(data.deo_inspection_doc)\">\r\n                          <ion-icon name=\"document-outline\" slot=\"start\"></ion-icon> View\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"this.errorMessage == 'Unable To Load Result for District List'\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"errorMessage\">\r\n          <h5>{{this.errorMessage}}</h5>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 3\">\r\n    <div *ngIf=\"this.errorMessage != 'Unable To Load Result for District List'\">\r\n      <div *ngFor=\"let data of applicationList\">\r\n        <div *ngIf=\"data.status == 'reject'\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"row-line\" (click)=\"onExpand(true,data.id)\">\r\n              <ion-row class=\"borderstyle\">\r\n                <ion-col size=\"6\" class=\"padding\">\r\n                  <ion-label class=\"headlabel\">Application No</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"textright\">\r\n                  <ion-label class=\"headlabel\">{{data.application_id}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"textright\">\r\n                  <ion-icon *ngIf=\"(!onActive)\" name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                  <ion-icon *ngIf=\"(onActive && (data.id == idItem))\" name=\"remove\" class=\"expand-label\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" *ngIf=\"(onActive && (data.id == idItem))\">\r\n              <ion-card>\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Date </ion-col>\r\n                      <ion-col size=\"6\">{{data.creation_ts}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Code </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_code}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Application Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.app_type_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Address </ion-col>\r\n                      <ion-col size=\"6\"> {{data.address}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> School Name </ion-col>\r\n                      <ion-col size=\"6\"> {{data.school_name}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Contace No </ion-col>\r\n                      <ion-col size=\"6\"> {{data.sch_number}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"> Status </ion-col>\r\n                      <ion-col size=\"6\"> {{data.status}} </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"data.deo_inspection_doc\">\r\n                      <ion-col size=\"6\"> Inspection File </ion-col>\r\n                      <ion-col size=\"6\">\r\n                        <ion-button size=\"small\" fill=\"clear\" (click)=\"viewInspectionFile(data.deo_inspection_doc)\">\r\n                          <ion-icon name=\"document-outline\" slot=\"start\"></ion-icon> View\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"this.errorMessage == 'Unable To Load Result for District List'\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"errorMessage\">\r\n          <h5>{{this.errorMessage}}</h5>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rc_rc-tablelist_rc-tablelist_module_ts-es2015.js.map