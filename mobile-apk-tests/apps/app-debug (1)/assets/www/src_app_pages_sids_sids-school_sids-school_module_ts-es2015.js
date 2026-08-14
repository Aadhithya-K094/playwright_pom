(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_sids-school_sids-school_module_ts"],{

/***/ 98487:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/sids-school/sids-school-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsSchoolPageRoutingModule": function() { return /* binding */ SidsSchoolPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sids_school_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sids-school.page */ 89370);




const routes = [
    {
        path: '',
        component: _sids_school_page__WEBPACK_IMPORTED_MODULE_0__.SidsSchoolPage
    }
];
let SidsSchoolPageRoutingModule = class SidsSchoolPageRoutingModule {
};
SidsSchoolPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SidsSchoolPageRoutingModule);



/***/ }),

/***/ 69423:
/*!**************************************************************!*\
  !*** ./src/app/pages/sids/sids-school/sids-school.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsSchoolPageModule": function() { return /* binding */ SidsSchoolPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sids_school_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sids-school-routing.module */ 98487);
/* harmony import */ var _sids_school_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sids-school.page */ 89370);







let SidsSchoolPageModule = class SidsSchoolPageModule {
};
SidsSchoolPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sids_school_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidsSchoolPageRoutingModule
        ],
        declarations: [_sids_school_page__WEBPACK_IMPORTED_MODULE_1__.SidsSchoolPage]
    })
], SidsSchoolPageModule);



/***/ }),

/***/ 89370:
/*!************************************************************!*\
  !*** ./src/app/pages/sids/sids-school/sids-school.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsSchoolPage": function() { return /* binding */ SidsSchoolPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_sids_school_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sids-school.page.html */ 41315);
/* harmony import */ var _sids_school_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sids-school.page.scss */ 78212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);














let SidsSchoolPage = class SidsSchoolPage {
    constructor(fb, userService, route, router, alertService, userSessionService, sqliteDB, loadService, sidsService, alertController, platform) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
        this.sqliteDB = sqliteDB;
        this.loadService = loadService;
        this.sidsService = sidsService;
        this.alertController = alertController;
        this.platform = platform;
        this.noData = true;
        this.submitted = false;
        this.filter = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US');
        this.date = new Date().getDate();
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.myDate = "";
        this.username = this.userSessionService.emis_username();
        console.log(this.username, "this.username");
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => { });
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.form.reset();
        this.sessionUserName = this.userSessionService.emis_username();
        this.sessionTypeName = this.userSessionService.emis_usertype();
        this.myDate = this.year + '-' + this.month + '-' + this.date;
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.visitorData = [];
        this.schoolInfo = [];
    }
    initialValidator() {
        this.form = this.fb.group({
            'udise': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        });
    }
    getVistorData(id) {
        this.sidsService.SecVistorSaveSchlDetaGet(id).subscribe((res) => {
            this.visitorData = [];
            if (res.dataStatus) {
                this.visitorData = res.result;
                for (let i = 0; i < res.result.length; i++) {
                    console.log("visitId", this.visitorData[i].Id);
                    this.visitId = this.visitorData[i].Id;
                    this.VisitStatus = this.visitorData[i].VisitStatus;
                }
                if (+this.VisitStatus == 2) {
                    this.visitId = "";
                }
            }
            else {
                this.visitId = "";
                this.VisitStatus = "";
            }
            console.log("VisitStatus", this.VisitStatus + "    " + "VisitId", this.visitId);
        });
    }
    getSchoolInfo() {
        debugger;
        if (this.form.valid) {
            this.userService.getSchoolInfo(this.form.value.udise).subscribe((res) => {
                if (res.dataStatus) {
                    this.noData = false;
                    this.noDataFound = false;
                    this.dataFound = true;
                    this.schoolInfo = res.result[0];
                    this.userService.udiseCode = this.form.value.udise;
                    this.getVistorData(res.result[0].SclId);
                }
                else {
                    this.noData = true;
                    this.noDataFound = true;
                }
            });
        }
        else {
            this.submitted = true;
            this.alertService.error('Invalid UDISE Format');
        }
    }
    getSchoolInfoPost() {
        if (this.form.valid) {
            this.userService.getSchoolInfo(this.form.value.udise).subscribe((res) => {
                if (res.dataStatus) {
                    this.noData = false;
                    this.noDataFound = false;
                    this.dataFound = true;
                    this.schoolInfo = res.result[0];
                    this.visitorData = [];
                    this.sidsService.SecVistorSaveSchlDetaGet(res.result[0].SclId).subscribe((res) => {
                        this.visitorData = res.result;
                        for (let i = 0; i < res.result.length; i++) {
                            console.log(this.visitorData[i].Id);
                            this.visitId = this.visitorData[i].Id;
                            this.VisitStatus = this.visitorData[i].VisitStatus;
                        }
                        console.log('this.VisitStatus', this.VisitStatus);
                        this.router.navigate(['/tabs/sids-common-dashboard'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId, 'visitstatus': this.VisitStatus, verify: "1" }, skipLocationChange: false });
                        // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });
                    });
                }
                else {
                    this.noData = true;
                    this.noDataFound = true;
                }
            });
        }
        else {
            this.submitted = true;
            this.alertService.error('Invalid UDISE Format');
        }
    }
    goToBack() {
        this.router.navigate(['/tabs/sids-dashboard']);
    }
    nextPage() {
        debugger;
        if (+this.schoolInfo.CattyId == 4 || +this.schoolInfo.CattyId == 5) {
            console.log(this.schoolInfo.SclId, "school", this.visitId);
            if (this.visitId) {
                this.router.navigate(['/tabs/sids-common-dashboard'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId, 'visitstatus': this.VisitStatus, 'verify': "1" }, skipLocationChange: false });
                // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });
            }
            else {
                {
                    let data = {
                        "records": {
                            "IndexId": "",
                            "SchlId": this.schoolInfo.SclId,
                            "VistUId": this.sessionUserName,
                            "VistUTy": this.sessionTypeName,
                            "VistDate": this.todayDateFormat,
                            "VistStas": "1"
                        }
                    };
                    this.sidsService.SecVistorSaveSchlDeta(data).subscribe(res => {
                        // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });
                        console.log(res, "data");
                        if (res.dataStatus) {
                            this.getSchoolInfoPost();
                        }
                        else {
                            this.alertService.error(res.message);
                        }
                    });
                }
            }
        }
        else {
            this.alertService.error('High and Higher Secondary School only allowed');
        }
    }
    onKeypressEvent(event) {
        //debugger
        this.udiseLen = this.form.value.udise;
        let len = this.udiseLen.length;
        if (len == 11) {
        }
        else {
            this.schoolInfo = [];
            this.noData = true;
        }
    }
    ionViewWillLeave() {
        this.dataFound = false;
        this.subscription.unsubscribe();
    }
};
SidsSchoolPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform }
];
SidsSchoolPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-sids-school',
        template: _raw_loader_sids_school_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sids_school_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidsSchoolPage);



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

/***/ 78212:
/*!**************************************************************!*\
  !*** ./src/app/pages/sids/sids-school/sids-school.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchCard {\n  margin: 15px;\n}\n\n.searchDiv {\n  background-color: #EBEBEB;\n  padding: 14px;\n}\n\n.udiseLabel {\n  font-size: 18px;\n  color: #8B67B3;\n}\n\n.inputFiled {\n  width: 100%;\n  zoom: 1.5;\n  margin-bottom: 15px;\n}\n\n.submitLabel {\n  color: white;\n}\n\n.butnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n}\n\n.mainDiv {\n  background-color: #DFDFDF;\n  padding: 15px;\n}\n\n.nameDiv {\n  padding: 10px;\n  background-color: white;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.secondDiv {\n  padding: 8px;\n  background-color: #F0E3FF;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.lastBtnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n  text-align: center;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.label {\n  color: black;\n}\n\n.labelPrimary {\n  color: #8B67B3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZHMtc2Nob29sLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFNTjs7QUFKQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0MsNEJBQUE7RUFDQSw2QkFBQTtBQVFMOztBQU5BO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0MsK0JBQUE7RUFDQSxnQ0FBQTtFQUNDLG1CQUFBO0FBU047O0FBTkE7RUFDSSx5QkFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FBU047O0FBUEE7RUFDSSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0FBV0oiLCJmaWxlIjoic2lkcy1zY2hvb2wucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENhcmR7XHJcbiAgICBtYXJnaW46IDE1cHg7IFxyXG59XHJcbi5zZWFyY2hEaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxufVxyXG4udWRpc2VMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcbi5pbnB1dEZpbGVke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6b29tOjEuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnN1Ym1pdExhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXRuRGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5tYWluRGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERjtcclxuICAgIHBhZGRpbmc6MTVweDtcclxufVxyXG4ubmFtZURpdntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zZWNvbmREaXZ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFM0ZGO1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sYXN0QnRuRGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMzsgXHJcbiAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgIHBhZGRpbmc6IDhweDsgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLmxhYmVsUHJpbWFyeXtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59Il19 */");

/***/ }),

/***/ 41315:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/sids-school/sids-school.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Higher School Search</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n\r\n    <ion-card class=\"searchCard\">\r\n      <div class=\"searchDiv\">\r\n        <div style=\"margin-bottom: 15px; \">\r\n          <ion-label class=\"udiseLabel\">\r\n            UDISE\r\n          </ion-label>\r\n          <ion-input class=\"input-txt\" type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter UDISE\"\r\n            formControlName=\"udise\" maxlength=\"11\" style=\"border: 1px solid; padding-left: 10px !important;\">\r\n          </ion-input>\r\n          <div class=\"formLine\">\r\n            {{(form.controls.udise.errors && (form.controls.udise.dirty || form.controls.udise.touched))&&\r\n            form.controls.udise.errors?.required ? 'UDISE is required' : ''}}\r\n          </div>\r\n          <div class=\"formLine\">\r\n            <p class=\"error-message\" *ngIf=\"form.controls['udise'].hasError('pattern')\">Invalid Format\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div style=\" text-align: center;\" (click)=\"getSchoolInfo()\">\r\n          <div class=\"butnDiv\">\r\n            <ion-label class=\"submitLabel\">Submit</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ion-row class=\"title-nodata\" *ngIf=\"noDataFound \">\r\n        <ion-col size=\"12\" class=\"value-data\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"mainDiv\" *ngIf=\"dataFound\">\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">School Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.SclNam}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">District</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.DistNam}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">Block</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.block_name}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">Management</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.ManagNam}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" style=\"text-align: center;\" (click)=\"nextPage()\" *ngIf=\"dataFound\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"add\" style=\"margin: 3%;\">\r\n      <ion-label style=\"color: white;\">Start Building Classification</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_sids-school_sids-school_module_ts-es2015.js.map