(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuiyakam-report_vasipuiyakam-report_module_ts"],{

/***/ 17553:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakam-report/vasipuiyakam-report-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamReportPageRoutingModule": function() { return /* binding */ VasipuiyakamReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipuiyakam_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakam-report.page */ 2393);




const routes = [
    {
        path: '',
        component: _vasipuiyakam_report_page__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamReportPage
    }
];
let VasipuiyakamReportPageRoutingModule = class VasipuiyakamReportPageRoutingModule {
};
VasipuiyakamReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuiyakamReportPageRoutingModule);



/***/ }),

/***/ 19068:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakam-report/vasipuiyakam-report.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamReportPageModule": function() { return /* binding */ VasipuiyakamReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipuiyakam_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakam-report-routing.module */ 17553);
/* harmony import */ var _vasipuiyakam_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakam-report.page */ 2393);







let VasipuiyakamReportPageModule = class VasipuiyakamReportPageModule {
};
VasipuiyakamReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vasipuiyakam_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamReportPageRoutingModule
        ],
        declarations: [_vasipuiyakam_report_page__WEBPACK_IMPORTED_MODULE_1__.VasipuiyakamReportPage]
    })
], VasipuiyakamReportPageModule);



/***/ }),

/***/ 2393:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakam-report/vasipuiyakam-report.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamReportPage": function() { return /* binding */ VasipuiyakamReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipuiyakam_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipuiyakam-report.page.html */ 76555);
/* harmony import */ var _vasipuiyakam_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakam-report.page.scss */ 67956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);







let VasipuiyakamReportPage = class VasipuiyakamReportPage {
    constructor(router, usersessionService, pdfGenerator) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.pdfGenerator = pdfGenerator;
        this.monthList = [
            { id: "01", month: "January" },
            { id: "02", month: "February" },
            { id: "03", month: "March" },
            { id: "04", month: "April" },
            { id: "05", month: "May" },
            { id: "06", month: "June" },
            { id: "07", month: "July" },
            { id: "08", month: "August" },
            { id: "09", month: "September" },
            { id: "10", month: "October" },
            { id: "11", month: "November" },
            { id: "12", month: "December" },
        ];
        this.monthName = "இம்மாத வாசிப்பு இயக்கம்";
        this.emis_username = this.usersessionService.emis_username();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.networkActive = false;
        this.dateActive = false;
        this.getServerData();
    }
    navigateBack() {
        this.router.navigate(['/tabs/vasipu-iyakam']);
    }
    selectMonth(event) {
        console.log(event.detail.value, "event");
        let monthName = this.monthList.filter(item => item.id == event.detail.value);
        this.monthName = monthName[0].month;
        let filter = this.alldataDetails.filter(item => item.InsertDate.split('-')[1] == event.detail.value);
        console.log(filter);
        this.filterdataDetails = filter;
        if (this.filterdataDetails.length == 0) {
            this.networkActive = false;
        }
        else {
            //  this.json_update = this.filterdataDetails[0].json_update
            this.networkActive = true;
        }
    }
    getServerData() {
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/vi_user_visit_list_' + this.emis_username + '.json').then(res => res.json()).then(manage => {
            if (manage) {
                console.log("in Server");
                this.alldataDetails = manage;
                console.log(this.alldataDetails, "123");
                this.filterdataDetails = manage;
                if (this.alldataDetails.length == 0) {
                    this.networkActive = false;
                    this.dateActive = false;
                }
                else {
                    this.json_update = this.filterdataDetails[0].json_update;
                    this.networkActive = true;
                    this.dateActive = true;
                }
            }
            else {
                this.networkActive = false;
            }
        });
    }
    generatePdf(id) {
        this.content = document.getElementById(id).innerHTML;
        const options = {
            documentSize: 'A4',
            type: 'share',
            // landscape: 'portrait',
            fileName: id + '.pdf'
        };
        this.pdfGenerator.fromData(this.content, options)
            .then((base64) => {
            console.log('OK', base64);
        }).catch((error) => {
            console.log('error', error);
        });
    }
};
VasipuiyakamReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__.PDFGenerator }
];
VasipuiyakamReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vasipuiyakam-report',
        template: _raw_loader_vasipuiyakam_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipuiyakam_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuiyakamReportPage);



/***/ }),

/***/ 67956:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakam-report/vasipuiyakam-report.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectdata {\n  background-color: #c6d5d8;\n  color: #114a53;\n  border: 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdWl5YWthbS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ2YXNpcHVpeWFrYW0tcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RkYXRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmQ1ZDg7XHJcbiAgICBjb2xvcjogIzExNGE1MztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG59Il19 */");

/***/ }),

/***/ 76555:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuiyakam-report/vasipuiyakam-report.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div> இம்மாத வாசிப்பு இயக்கம்</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{emis_username}} <span *ngIf=\"dateActive\"> - Last updated : {{json_update}}</span></div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid style=\"padding: 3%;\">\r\n    <ion-row>\r\n      <ion-col size=\"9\">\r\n        <ion-select class=\"selectdata\" label=\"Default label\" (ionChange)=\"selectMonth($event)\" placeholder=\"Month\">\r\n          <ion-select-option *ngFor=\"let month of monthList\" [value]=\"month.id\">{{month.month}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: end;\" *ngIf=\"networkActive\">\r\n        <ion-button style=\"--background: #bc3555;color: white;\" (click)=\"generatePdf('downloadPDF')\"> PDF \r\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: end;\" *ngIf=\"!networkActive\">\r\n        <ion-button style=\"--background: #bc3555;color: white;\" disabled=\"true\"> PDF \r\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div *ngIf=\"networkActive\">\r\n      <ion-card *ngFor=\"let data of filterdataDetails\" style=\"border-left: 7px solid #114a53;\">\r\n        <ion-row style=\"padding: 1%;\">\r\n          <ion-col size=\"12\" class=\"newsecondaryTex\"> Date : {{data.InsertDate}} | Batch : {{data.Batch}}</ion-col>\r\n          <ion-col size=\"12\" class=\"newprimaryTex\"> {{data.SchlName}} - {{data.Udisecode}}</ion-col>\r\n          <ion-col size=\"12\" class=\"newsecondaryTex\">class : {{data.ClsSec}} | duration (hh:mm:ss) : {{data.StartEndCalculate}} </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div id=\"downloadPDF\" hidden class=\"hidden\">\r\n        <div>\r\n          <div class=\"newsecondary\" style=\"text-align: center;color: black; padding: 5px; margin: 10px;\">\r\n            <P style=\"font-weight: 600;\">{{monthName}} Reports</P>\r\n          </div>\r\n              <table style=\"width: 100% !important;\">\r\n                <fieldset style=\"margin: 15px 10px;\" *ngFor=\"let data of filterdataDetails\">\r\n                  <legend style=\"font-weight: bolder;\">Date : {{data.InsertDate}} | Batch : {{data.Batch}}</legend>\r\n                  <div style=\"width: 90% !important; margin: auto;\">\r\n                    <div style=\"width: 100%; background: #E8E8E8; margin: 10px auto; padding: 10px;\">{{data.SchlName}} - {{data.Udisecode}}</div>\r\n                    <div style=\"border: 1px solid #CDCDCD; width: 100%; padding: 10px;\"> class : {{data.ClsSec}} | duration (hh:mm:ss) : {{data.StartEndCalculate}}\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n              </table>\r\n        </div>\r\n      </div>\r\n\r\n    <ion-row *ngIf=\"!networkActive\" style=\"text-align: center;color:#114a53; font-weight: bold;\">\r\n      <ion-col size=\"12\">\r\n        <p>No Data</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuiyakam-report_vasipuiyakam-report_module_ts-es2015.js.map