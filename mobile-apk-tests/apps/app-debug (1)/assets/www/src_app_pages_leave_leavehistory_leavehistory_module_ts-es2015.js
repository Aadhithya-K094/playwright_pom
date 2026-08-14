(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_leavehistory_leavehistory_module_ts"],{

/***/ 27517:
/*!*************************************************************************!*\
  !*** ./src/app/pages/leave/leavehistory/leavehistory-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavehistoryPageRoutingModule": function() { return /* binding */ LeavehistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _leavehistory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavehistory.page */ 7863);




const routes = [
    {
        path: '',
        component: _leavehistory_page__WEBPACK_IMPORTED_MODULE_0__.LeavehistoryPage
    }
];
let LeavehistoryPageRoutingModule = class LeavehistoryPageRoutingModule {
};
LeavehistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeavehistoryPageRoutingModule);



/***/ }),

/***/ 32723:
/*!*****************************************************************!*\
  !*** ./src/app/pages/leave/leavehistory/leavehistory.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavehistoryPageModule": function() { return /* binding */ LeavehistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _leavehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavehistory-routing.module */ 27517);
/* harmony import */ var _leavehistory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavehistory.page */ 7863);







let LeavehistoryPageModule = class LeavehistoryPageModule {
};
LeavehistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leavehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeavehistoryPageRoutingModule
        ],
        declarations: [_leavehistory_page__WEBPACK_IMPORTED_MODULE_1__.LeavehistoryPage]
    })
], LeavehistoryPageModule);



/***/ }),

/***/ 7863:
/*!***************************************************************!*\
  !*** ./src/app/pages/leave/leavehistory/leavehistory.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavehistoryPage": function() { return /* binding */ LeavehistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_leavehistory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leavehistory.page.html */ 20035);
/* harmony import */ var _leavehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavehistory.page.scss */ 3807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);












let LeavehistoryPage = class LeavehistoryPage {
    constructor(usersessionService, emisService, Actroute, router, fb, alertCtrl, alert) {
        this.usersessionService = usersessionService;
        this.emisService = emisService;
        this.Actroute = Actroute;
        this.router = router;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.alert = alert;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.expandIcon = false;
        this.sessionTeacherId = this.usersessionService.teacher_id();
        this.todayDateFormat = this.pipe.transform(new Date(), "yyyy-MM-dd");
        this.Month = '';
        this.Year = this.pipe.transform(new Date(), "yyyy");
        this.Actroute.queryParams.subscribe(params => {
            this.fromPage = params.from_page;
            this.teacher_id = params.TchrId;
            if (this.fromPage == 'sanction') {
                this.teacher_id = params.TchrId;
            }
            else {
                this.teacher_id = this.usersessionService.teacher_id();
            }
        });
    }
    ngOnInit() {
        this.initialiazeValidator();
    }
    ionViewDidEnter() {
        this.form.controls.selectedMonth.setValue(this.Month);
        this.form.controls.selectedYear.setValue(this.Year);
        this.GetLeaveHis();
    }
    //Intialize form validations
    initialiazeValidator() {
        this.form = this.fb.group({
            selectedYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.Year, null),
            selectedMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.Month, null),
        });
        this.months = [
            { label: 'January', value: '1' },
            { label: 'February', value: '2' },
            { label: 'March', value: '3' },
            { label: 'April', value: '4' },
            { label: 'May', value: '5' },
            { label: 'June', value: '6' },
            { label: 'July', value: '7' },
            { label: 'August', value: '8' },
            { label: 'September', value: '9' },
            { label: 'October', value: '10' },
            { label: 'November', value: '11' },
            { label: 'December', value: '12' },
        ];
    }
    //get leave history details for the user
    GetLeaveHis() {
        this.emisService.getLeaveHistory(this.teacher_id, this.Year, this.Month).subscribe((data) => {
            this.LeaveList = [];
            this.LeaveList = data.result;
            if (data.result) {
                this.LeaveList.forEach(x => {
                    const to_date = x.LeaveToDate;
                    const today_date = this.todayDateFormat;
                    if (today_date < to_date) {
                        x.datevalid = 0;
                    }
                    else {
                        x.datevalid = 1;
                    }
                });
            }
            this.alldata = this.LeaveList;
            if (this.LeaveList == undefined || this.LeaveList == null) {
            }
            else {
                this.LeaveList.reverse();
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    //month dropdown select event
    onmonthSelect(event) {
        this.Month = event.detail.value;
        this.GetLeaveHis();
    }
    //arrow expand function
    expand(event) {
        this.expandIcon = !this.expandIcon;
        this.open = event;
    }
    //page goback function
    goBack() {
        this.router.navigate(["/tabs/e-sr"], { queryParams: { 'page': 2 }, skipLocationChange: false });
    }
    //get leave history data for before year
    beforeYear() {
        this.Month = '';
        this.Year = this.Year - 1;
        this.GetLeaveHis();
    }
    //get leave history data for after year
    afterYear() {
        this.Month = '';
        if (this.Year == this.pipe.transform(new Date(), "yyyy")) {
            this.Year = parseInt(this.Year) + 1;
        }
        else if (this.Year < this.pipe.transform(new Date(), "yyyy")) {
            this.Year = parseInt(this.Year) + 1;
        }
        else {
        }
        this.GetLeaveHis();
    }
    //filter history data
    getFilterItems(event) {
        if (event.detail.value != '') {
            this.searchTerm = event.detail.value.trim();
            var data = this.LeaveList.filter((item) => {
                return item.LeaveType.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            });
            this.LeaveList = data;
        }
        else {
            this.LeaveList = this.alldata;
        }
    }
    //call alert popup on delete icon
    delAlert(leave) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alert',
                subHeader: '',
                message: '<p>Your applied leave will be cancelled. Are you sure you want to delete this leave ? </p>',
                cssClass: 'leave-submit-class',
                buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (data) => {
                            this.cancelLeave(leave);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                    }]
            });
            yield alert.present();
        });
    }
    //update leave status is inactive 
    cancelLeave(leave) {
        let status;
        if (leave.ApprovalStatus == 4) {
            status = 2;
        }
        else {
            status = 1;
        }
        let dayFinal;
        //calculate leave balance
        const getBusinessDatesCount = (startDate, endDate) => {
            let count = 0;
            let curDate = +startDate;
            while (curDate <= +endDate) {
                const dayOfWeek = new Date(curDate).getDay();
                const isWeekend = dayOfWeek === 7 || dayOfWeek === 0;
                count++;
                curDate = curDate + 24 * 60 * 60 * 1000;
            }
            return count;
        };
        if (leave.ApprovalStatus == 4) {
            if (this.todayDateFormat > leave.LeaveFromDate) {
                const d1 = new Date(this.todayDateFormat);
                const d2 = new Date(leave.LeaveToDate);
                dayFinal = getBusinessDatesCount(d1, d2);
            }
            else {
                dayFinal = leave.LeaveDays;
            }
        }
        else {
            if (this.todayDateFormat > leave.LeaveFromDate) {
                const d1 = new Date(leave.LeaveFromDate);
                const d2 = new Date(this.todayDateFormat);
                dayFinal = getBusinessDatesCount(d1, d2);
            }
            else {
                dayFinal = 0;
            }
        }
        let data = {
            records: {
                "IndxId": leave.IndxId,
                "TeachId": leave.TchrId,
                "SchlId": leave.SchlId,
                "LveTypeId": leave.LeaveTypeId,
                "LeaveDays": dayFinal,
                "Sts": status,
            }
        };
        this.emisService.TchrLeaveDelete(data).subscribe((data) => {
            if (data.dataStatus) {
                this.GetLeaveHis();
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
};
LeavehistoryPage.ctorParameters = () => [
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
LeavehistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-leavehistory',
        template: _raw_loader_leavehistory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leavehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeavehistoryPage);



/***/ }),

/***/ 3807:
/*!*****************************************************************!*\
  !*** ./src/app/pages/leave/leavehistory/leavehistory.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.label-cls {\n  font-size: 12px;\n  color: #630094;\n  font-weight: 600;\n}\n\n.year-calendar-left {\n  text-align: left;\n  color: #630094;\n  zoom: 1.5;\n}\n\n.greyTitleRight {\n  color: #545454de !important;\n  font-size: 12px !important;\n  text-align: right !important;\n  font-weight: 600 !important;\n}\n\n.greyTitleLeft {\n  color: #545454de !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.greyText {\n  color: #a5a5a5;\n}\n\n.sc-ion-searchbar-md-h {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  --border-radius: 10px !important;\n}\n\n.greenTextLeft {\n  align-self: center !important;\n  color: #5dae53 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.redTextLeft {\n  align-self: center !important;\n  color: #fd5587 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.ylwTextLeft {\n  align-self: center !important;\n  color: #ecdd09 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.brownTextLeft {\n  align-self: center !important;\n  color: #83593c !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.pendingTextLeft {\n  align-self: center !important;\n  color: #2b3ba4e3 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.forwardgrnTextLeft {\n  align-self: center !important;\n  color: #92d050 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.clariResTextLeft {\n  align-self: center !important;\n  color: #6f30a0 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.user-col {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-right: 1px dashed lightgray;\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n}\n\nion-card {\n  border-radius: 10px !important;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.user-grid {\n  padding: 10px 5px 10px 5px;\n}\n\n.year-cls {\n  text-align: center;\n  align-self: center;\n  font-size: 14px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.arrow-icon {\n  text-align: right;\n  align-self: center;\n  zoom: 1.5;\n  color: #630094;\n}\n\n.trash-icon {\n  margin-bottom: -15px;\n  justify-content: center;\n  zoom: 1.5;\n  color: #fd5587;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJsZWF2ZWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGFiZWwtY2xzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2MzAwOTQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnllYXItY2FsZW5kYXItbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzYzMDA5NDtcclxuICB6b29tOiAxLjU7XHJcbn1cclxuXHJcbi5ncmV5VGl0bGVSaWdodCB7XHJcbiAgY29sb3I6ICM1NDU0NTRkZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JleVRpdGxlTGVmdCB7XHJcbiAgY29sb3I6ICM1NDU0NTRkZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmV5VGV4dCB7XHJcbiAgLy8gY29sb3I6IHJnYigxMzAsIDEyNywgMTI3KTtcclxuICBjb2xvcjogI2E1YTVhNTtcclxufVxyXG5cclxuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyZWVuVGV4dExlZnQge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNWRhZTUzICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZFRleHRMZWZ0IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZkNTU4NyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi55bHdUZXh0TGVmdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNlY2RkMDkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJvd25UZXh0TGVmdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYigxMzEsIDg5LCA2MCkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGVuZGluZ1RleHRMZWZ0IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzJiM2JhNGUzICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcndhcmRncm5UZXh0TGVmdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5MmQwNTAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xhcmlSZXNUZXh0TGVmdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM2ZjMwYTAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1jb2wge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMFxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi51c2VyLWdyaWQge1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xyXG59XHJcblxyXG4ueWVhci1jbHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYXJyb3ctaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHpvb206IDEuNTtcclxuICBjb2xvcjogIzYzMDA5NDtcclxufVxyXG5cclxuLnRyYXNoLWljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHpvb206IDEuNTtcclxuICBjb2xvcjogI2ZkNTU4NztcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 20035:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leavehistory/leavehistory.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Leave History</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"leave-container\">\r\n    <!-- user details card -->\r\n    <ion-card>\r\n      <ion-grid class=\"user-grid\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"user-col\">\r\n            <ion-label>UserId</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\" class=\"user-col\">\r\n            <ion-label>{{teacher_id}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n\r\n    <!-- select bar -->\r\n    <ion-card>\r\n      <ion-row>\r\n\r\n        <ion-col size=\"2\" class=\"year-calendar-left\">\r\n          <div *ngIf=\"Year == 2022 || Year == 2023\">\r\n            <ion-icon name='arrow-undo-circle' (click)=\"beforeYear()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"8\" class=\"year-cls\">\r\n          <ion-label>{{Year}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" class=\"arrow-icon\">\r\n          <div *ngIf=\"Year == 2022 || Year == 2021\">\r\n            <ion-icon name='arrow-redo-circle-sharp' (click)=\"afterYear()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-select class=\"select\" ok-text=\"Ok\" cancel-text=\"Dismiss\" [(ngModel)]=\"Month\" placeholder=\"Select Month\"\r\n              (ionChange)=\"onmonthSelect($event)\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of months\">\r\n                {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <!-- searchbar -->\r\n    <ion-searchbar *ngIf=\"LeaveList\" (ionChange)=\"getFilterItems($event)\"></ion-searchbar>\r\n\r\n    <!-- leave history card -->\r\n    <div *ngFor=\"let item of LeaveList; let i = index;\">\r\n      <ion-card>\r\n        <ion-row class=\"trash-icon\"\r\n          *ngIf=\"this.fromPage != 'sanction' && item.datevalid == 0 && item.ApprovalStatus != 2 && item.ApprovalStatus != 5\">\r\n          <ion-col size=\"11\"></ion-col>\r\n          <ion-col size=\"1\">\r\n            <ion-icon name=\"trash-outline\" (click)=\"delAlert(item)\">\r\n            </ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <ion-row>\r\n              <ion-col size=\"4\">\r\n                <ion-label class=\"label-cls\">Category</ion-label><br>\r\n                <ion-label class=\"greyTitleLeft\">{{item.LeaveType}}</ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <ion-label class=\"label-cls\">No.of days</ion-label><br>\r\n                <ion-label class=\"greyTitleLeft\">{{item.LeaveDays}}</ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <ion-label class=\"label-cls\">Status</ion-label><br>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 1\" class=\"pendingTextLeft\">Under Processing</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 2\" class=\"redTextLeft\">Rejected</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 3\" class=\"pendingTextLeft\">Pending Approval</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 4\" class=\"greenTextLeft\">Sanctioned</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 5\" class=\"redTextLeft\">Rejected by Auth</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 6\" class=\"forwardgrnTextLeft\">Forwarded</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 7\" class=\"pendingTextLeft\">Pending Verification</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 8\" class=\"brownTextLeft\">Verified</ion-label>\r\n                <ion-label *ngIf=\"item.ApprovalStatus == 9\" class=\"clariResTextLeft\">Clarification Requested</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"arrow-icon\">\r\n            <ion-icon name=\"arrow-up-circle-outline\" (click)=\"expand(i)\"\r\n              *ngIf=\"i != open || (i == open && expandIcon == false)\"></ion-icon>\r\n            <ion-icon name=\"arrow-down-circle-outline\" (click)=\"expand(i)\" *ngIf=\"i == open && expandIcon == true\">\r\n            </ion-icon>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"expandIcon && i == open\">\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"greyTitleLeft\">\r\n                <ion-label>From Date</ion-label><br>\r\n                <ion-label class=\"greyText\">{{item.LeaveFromDate | date: 'dd-MM-yyyy'}}\r\n                  <span *ngIf=\"item.LeaveTypeId == 2\">{{ (item.LeaveSession == \"1\") ? \"-FN\" : \"-AN\" }}</span>\r\n                </ion-label><br>\r\n                <ion-label>To Date</ion-label><br>\r\n                <ion-label class=\"greyText\">{{item.LeaveToDate | date: 'dd-MM-yyyy'}}\r\n                  <span *ngIf=\"item.LeaveTypeId == 2\">{{ (item.LeaveSession2 == \"1\") ? \"-FN\" : \"-AN\" }}</span>\r\n                </ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\" class=\"greyTitleRight\">\r\n                <ion-label>Sanctioned by level1</ion-label><br>\r\n                <ion-label class=\"greyText\">{{item.VerifiedUserName}}</ion-label><br>\r\n                <ion-label>Sanctioned by level2</ion-label><br>\r\n                <ion-label class=\"greyText\">{{item.ApproverUserName}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"item.ApprovalStatus == 2\">\r\n              <ion-col size=\"12\">\r\n                <ion-label class=\"greyTitleLeft\">Reject Reason</ion-label><br>\r\n                <ion-label class=\"greyText\">{{item.reject_reason}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <!-- no message no data found -->\r\n    <div *ngIf=\"!LeaveList\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"no-data\">\r\n          <ion-label>\r\n            No Data Found\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leave_leavehistory_leavehistory_module_ts-es2015.js.map