(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_l3-ee-report_l3-ee-report_module_ts"],{

/***/ 72995:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3EeReportPageRoutingModule": function() { return /* binding */ L3EeReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _l3_ee_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l3-ee-report.page */ 6929);




const routes = [
    {
        path: '',
        component: _l3_ee_report_page__WEBPACK_IMPORTED_MODULE_0__.L3EeReportPage
    }
];
let L3EeReportPageRoutingModule = class L3EeReportPageRoutingModule {
};
L3EeReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], L3EeReportPageRoutingModule);



/***/ }),

/***/ 17458:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3EeReportPageModule": function() { return /* binding */ L3EeReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _l3_ee_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l3-ee-report-routing.module */ 72995);
/* harmony import */ var _l3_ee_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l3-ee-report.page */ 6929);







let L3EeReportPageModule = class L3EeReportPageModule {
};
L3EeReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _l3_ee_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.L3EeReportPageRoutingModule
        ],
        declarations: [_l3_ee_report_page__WEBPACK_IMPORTED_MODULE_1__.L3EeReportPage]
    })
], L3EeReportPageModule);



/***/ }),

/***/ 6929:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3EeReportPage": function() { return /* binding */ L3EeReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_l3_ee_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./l3-ee-report.page.html */ 39467);
/* harmony import */ var _l3_ee_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l3-ee-report.page.scss */ 27416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let L3EeReportPage = class L3EeReportPage {
    constructor(apiService, datePipe) {
        this.apiService = apiService;
        this.datePipe = datePipe;
        this.AssessedCount = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getSchoolList();
    }
    getSchoolList() {
        debugger;
        this.apiService.eet_school_observation().subscribe(dataval => {
            try {
                if (Object.keys(dataval.record).length > 0 && dataval.status == 200) {
                    this.eetOverAllData = dataval.record;
                    this.eetSchoolData = dataval.record.schools;
                    console.log(this.eetOverAllData, 'this.eetOverAllData');
                    console.log(this.eetSchoolData, 'this.eetSchoolData');
                    this.start_date = this.datePipe.transform(this.eetOverAllData['start_date'], 'dd-MM-yyyy');
                    this.end_date = this.datePipe.transform(this.eetOverAllData['end_date'], 'dd-MM-yyyy');
                    let comSchools;
                    this.eetSchoolData.filter(x => {
                        if (typeof x.completed != 'undefined') {
                            comSchools = x.completed;
                        }
                    });
                    console.log(comSchools, 'comSchools');
                    if (typeof comSchools != 'undefined') {
                        this.completedSchool = comSchools.filter(x => {
                            if (x.count != null) {
                                let date = x.date.split(' ');
                                x.splitDate = date[0];
                                return x;
                            }
                        });
                    }
                    if (typeof this.completedSchool != 'undefined') {
                        this.SchoolLength = this.completedSchool.length;
                        this.completedSchool.forEach(e => {
                            this.AssessedCount += Number(e.count);
                        });
                    }
                    console.log(this.SchoolLength, 'this.SchoolLength');
                }
                else {
                    if (Object.keys(dataval.record).length === 0) {
                        throw "No data found in this school";
                    }
                    else if (dataval.status !== 200) {
                        throw "Server not found...Try again later";
                    }
                    else if (typeof dataval.record == 'undefined' || typeof dataval.record == null) {
                        throw "Server not found...Try again later";
                    }
                    else {
                        throw "Server not found...Try again later";
                    }
                }
            }
            catch (err) {
                this.apiService.displayToast(err, true);
                this.errorLog(err, {});
                console.log(err, 'error');
            }
        }, error => {
            this.errorLog(error === null || error === void 0 ? void 0 : error.message, {});
            this.apiService.displayToast(error === null || error === void 0 ? void 0 : error.message, true);
        });
    }
    errorLog(err, payload) {
        let record = {
            "observation_id": "",
            "school_id": "",
            "student_id": "",
            "oberved_date": "",
            "oberved_by": "",
            "page": "EET Report Page",
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
};
L3EeReportPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
L3EeReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-l3-ee-report',
        template: _raw_loader_l3_ee_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_l3_ee_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], L3EeReportPage);



/***/ }),

/***/ 27416:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  color: #fff;\n}\n\n.flex-bx {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex-bx div {\n  width: 50%;\n  text-align: center;\n}\n\n.flex-bx div span {\n  font-size: 13px;\n  display: block;\n  padding: 20px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImwzLWVlLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFESTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlaIiwiZmlsZSI6ImwzLWVlLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFjay1idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSAgXHJcbi5mbGV4LWJ4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpdntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 39467:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\r\n    <ion-toolbar class=\"header-style\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"tabs/school-observation\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Report</ion-title>\r\n      <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 3</span>\r\n      <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 3</span> -->\r\n      <span class=\"header-span\">L-3</span>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content sty>\r\n\r\n  <div style=\"background-color: #f2e6e6;margin:20px;border-radius: 12px;padding: 20px;\">\r\n\r\n\r\n    <div style=\"text-align: center;font-size:20px;\">\r\n      <ion-label>\r\n        From<span style=\"font-weight: 600;\">  {{start_date}}</span> to <span style=\"font-weight: 600;\"> {{end_date}}</span> \r\n      </ion-label>\r\n      <div class=\"flex-bx\">\r\n        <div>\r\n          <span style=\"margin-bottom:18px;\">SCHOOL VISITS</span>\r\n          <h5><b>{{SchoolLength ? SchoolLength : '-'}}</b></h5>\r\n        </div>\r\n        <div>\r\n          <span>ASSESSMENTS COMPLETED</span>\r\n          <h5><b>{{AssessedCount ? AssessedCount : '-'}} / 24</b></h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    \r\n  </div>\r\n\r\n<div style=\"margin-left: 20px;margin-right: 20px;\">\r\n  <ion-row style=\"background: var(--ion-color-primary);border-radius: 8px;padding: 4px;margin-bottom: 10px;color: white;font-weight: 600;\">\r\n    <ion-col size=\"5\" style=\"align-self: center;text-align:center;font-size: 14px;\">\r\n      <div>\r\n        <ion-label>\r\n          School Visited\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"align-self: center;text-align:center;font-size: 14px;\">\r\n      <div>\r\n        <ion-label>\r\n          Date\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4\" style=\"align-self: center;text-align:center;font-size: 14px;\">\r\n      <div>\r\n        <ion-label>\r\n          Assessments Completed\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n\r\n  <!-- Sch? -->\r\n  <ng-container *ngIf=\"completedSchool\">\r\n    <ion-row style=\"background-color:#ebeeff;border-radius: 8px;padding: 4px;margin-bottom: 10px;\" *ngFor=\"let data of completedSchool\">\r\n      <ion-col size=\"5\" style=\"align-self: center;font-weight:500;text-align:center;font-size: 12px;\">\r\n        <div>\r\n          <ion-label>\r\n            {{data.school_name}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"align-self: center;font-weight:500;text-align:center;font-size: 12px;\">\r\n        <div>\r\n          <ion-label>\r\n            {{data.splitDate}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"align-self: center;font-weight:500;text-align:center;font-size: 12px;\">\r\n        <div>\r\n          <ion-label>\r\n            {{data.count}}\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <ion-row style=\"background-color:#ebeeff;border-radius:8px;padding:14px 4px 7px;margin-bottom: 10px;justify-content: center;\" *ngIf=\"!completedSchool\">\r\n    <h6>No Record Found</h6>\r\n  </ion-row>\r\n  \r\n  <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\">\r\n    <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n    <ion-text color=\"dark\">If you are offline your latest school visits will not be reflected in your report. When you go online you can see the latest updated report.</ion-text>\r\n  </ion-card>\r\n\r\n  <!-- <ion-card style=\"padding: 12px;\">\r\n    <label style=\"font-size: 16px;\">Note:</label><br>\r\n    <ion-label style=\"font-size: 14px;\">If you are offline your latest school visits will not be reflected in your report. When you go online you can see the latest updated report. </ion-label>\r\n  </ion-card> -->\r\n\r\n</div>\r\n \r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_l3-ee-report_l3-ee-report_module_ts-es2015.js.map