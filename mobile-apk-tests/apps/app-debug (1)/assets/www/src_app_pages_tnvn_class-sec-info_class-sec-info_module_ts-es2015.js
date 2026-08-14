(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_class-sec-info_class-sec-info_module_ts"],{

/***/ 18600:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/class-sec-info/class-sec-info.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassSecInfoPageModule": function() { return /* binding */ ClassSecInfoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_sec_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-sec-info.page */ 80139);







const routes = [
    {
        path: '',
        component: _class_sec_info_page__WEBPACK_IMPORTED_MODULE_0__.ClassSecInfoPage
    }
];
let ClassSecInfoPageModule = class ClassSecInfoPageModule {
};
ClassSecInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_class_sec_info_page__WEBPACK_IMPORTED_MODULE_0__.ClassSecInfoPage]
    })
], ClassSecInfoPageModule);



/***/ }),

/***/ 80139:
/*!******************************************************************!*\
  !*** ./src/app/pages/tnvn/class-sec-info/class-sec-info.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassSecInfoPage": function() { return /* binding */ ClassSecInfoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_class_sec_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-sec-info.page.html */ 28408);
/* harmony import */ var _class_sec_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-sec-info.page.scss */ 39003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/file-handler/file-handler.service */ 24954);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);








let ClassSecInfoPage = class ClassSecInfoPage {
    constructor(router, apiService, ActivateRoute, ionicStorage, fileService) {
        this.router = router;
        this.apiService = apiService;
        this.ActivateRoute = ActivateRoute;
        this.ionicStorage = ionicStorage;
        this.fileService = fileService;
        this.school_data = [];
        this.param_data = [];
        this.class_info = [{
                class_studying_id: 1,
                sections: [{ sec: 'a',
                        boys: '20',
                        girls: '10',
                        tot: '30'
                    },
                    {
                        sec: 'b',
                        boys: '10',
                        girls: '90',
                        tot: '140'
                    }]
            },
            {
                class_studying_id: 2,
                sections: [{ sec: 'a',
                        boys: '20',
                        girls: '10',
                        tot: '30'
                    },
                    {
                        sec: 'b',
                        boys: '10',
                        girls: '90',
                        tot: '140'
                    }]
            }];
        this.data_value = [];
        this.randomColor = [];
    }
    ngOnInit() {
        this.ionicStorage.getData('studentlist').then(res => {
            if (res) {
                this.school_data = res;
                let i = 0;
                this.school_data.forEach((res, index) => {
                    let tot = parseInt(res.male) + parseInt(res.female);
                    res.total = tot;
                    if (this.data_value.length != 0) {
                        if (res.class_studying_id == this.data_value[i - 1].class_studying_id) {
                            this.data_value[i - 1].sections.push({ 'section': res.class_section, 'totalStrength': tot, 'male': res.male, 'female': res.female });
                            i = i - 1;
                        }
                        else {
                            this.data_value.push({ class_name: this.fileService.classConvertion(res.class_studying_id), class_studying_id: res.class_studying_id, sections: [{ 'section': res.class_section, 'totalStrength': tot, 'male': res.male, 'female': res.female }] });
                        }
                    }
                    else {
                        this.data_value = [{ class_name: this.fileService.classConvertion(res.class_studying_id), class_studying_id: res.class_studying_id, sections: [{ 'section': res.class_section, 'totalStrength': tot, 'male': res.male, 'female': res.female }] }];
                    }
                    i = i + 1;
                    this.Color();
                });
            }
        });
    }
    Color() {
        let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255) + ")";
        this.randomColor.push(color);
    }
    onClick(value, childIndex) {
        let sec = value.sections[childIndex];
        let records = {};
        records = { class_studying_id: value.class_studying_id };
        records.sections = sec;
        let navigationExtras = {
            queryParams: {
                class_sec_info: JSON.stringify(records)
            }
        };
        this.router.navigate(['/tnvntabs/page-route', 'classroom-type'], navigationExtras);
    }
};
ClassSecInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__.FileHandlerService }
];
ClassSecInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-class-sec-info',
        template: _raw_loader_class_sec_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_sec_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassSecInfoPage);



/***/ }),

/***/ 39003:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/class-sec-info/class-sec-info.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  color: black;\n}\n\np {\n  color: black;\n}\n\n.even {\n  border-radius: 20px;\n}\n\nodd {\n  color: blue;\n}\n\nion-card {\n  color: #fff;\n  background-color: #fff;\n  border-radius: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\n.ion-contentbg {\n  --background: #eeeeee91;\n}\n\n.class_even {\n  background-color: white;\n}\n\n.class_odd {\n  background-color: azure;\n}\n\n.sec_odd {\n  background-color: #802ac1;\n  padding: 3px;\n  font-weight: bold;\n}\n\n.sec_even {\n  background-color: #3ca5bd;\n  padding: 3px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLXNlYy1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUdJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUdBLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBSko7O0FBTUE7RUFDSSx1QkFBQTtBQUhKOztBQUtBO0VBQ0ksdUJBQUE7QUFGSjs7QUFJQTtFQUNJLHVCQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJjbGFzcy1zZWMtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5ldmVue1xyXG4gICAgLy8gY29sb3I6YmxhY2s7XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcbm9kZHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgLy8gcGFkZGluZzogN3B4IDEycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgIC8vIG1hcmdpbjowcHg7XHJcbiAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuLmlvbi1jb250ZW50Ymd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZWVlZWU5MTtcclxufVxyXG4uY2xhc3NfZXZlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jbGFzc19vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xyXG59XHJcbi5zZWNfb2Rke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMmFjMTtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uc2VjX2V2ZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NhNWJkO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 28408:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/class-sec-info/class-sec-info.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Classes Information</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-label padding>Select the Class</ion-label><br/>\r\n  <ion-grid>\r\n  <ion-card *ngFor=\"let class of data_value;let i=index; let class_even=even;let class_odd=odd\">\r\n      <ion-row [ngClass]={class_even:class_even,class_odd:class_odd}>\r\n      <ion-col size=\"4\" *ngFor=\"let sec of class.sections;let first=first;let chilIndex=index; let sec_even=even;let sec_odd=odd\" >\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-card (click)=\"onClick(class,chilIndex)\" [ngClass]={sec_even:sec_even,sec_odd:sec_odd} [style.background-color]=\"chilIndex < 1 ? randomColor[i] : ''\">  \r\n           \r\n          <div style=\"font-size:16px;\"><b>{{class.class_name}} </b><span style=\"font-size:16px;\">'{{sec.section}}'</span></div>\r\n          <div style=\"font-size:13px;\"><ion-icon name=\"man\"></ion-icon>{{sec.male}} <span style=\"font-size:13px;\"><ion-icon name=\"woman\"></ion-icon>{{sec.female}}</span></div>   \r\n        </ion-card>\r\n    \r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-card>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_class-sec-info_class-sec-info_module_ts-es2015.js.map