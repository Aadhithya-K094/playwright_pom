(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_training_training-attendance_training-attendance_module_ts"],{

/***/ 31866:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/training/training-attendance/training-attendance-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingAttendancePageRoutingModule": function() { return /* binding */ TrainingAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _training_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-attendance.page */ 71860);




const routes = [
    {
        path: '',
        component: _training_attendance_page__WEBPACK_IMPORTED_MODULE_0__.TrainingAttendancePage
    }
];
let TrainingAttendancePageRoutingModule = class TrainingAttendancePageRoutingModule {
};
TrainingAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainingAttendancePageRoutingModule);



/***/ }),

/***/ 81759:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/training/training-attendance/training-attendance.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingAttendancePageModule": function() { return /* binding */ TrainingAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _training_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-attendance-routing.module */ 31866);
/* harmony import */ var _training_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-attendance.page */ 71860);







let TrainingAttendancePageModule = class TrainingAttendancePageModule {
};
TrainingAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _training_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingAttendancePageRoutingModule
        ],
        declarations: [_training_attendance_page__WEBPACK_IMPORTED_MODULE_1__.TrainingAttendancePage]
    })
], TrainingAttendancePageModule);



/***/ }),

/***/ 71860:
/*!********************************************************************************!*\
  !*** ./src/app/pages/training/training-attendance/training-attendance.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingAttendancePage": function() { return /* binding */ TrainingAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_training_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./training-attendance.page.html */ 74903);
/* harmony import */ var _training_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-attendance.page.scss */ 30650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let TrainingAttendancePage = class TrainingAttendancePage {
    constructor(fb, alertService, router, userService, usersessionService) {
        this.fb = fb;
        this.alertService = alertService;
        this.router = router;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.trainner = 0;
        this.todayDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.sessionUserName = this.usersessionService.emis_username();
        this.userService.getTeacherTrainingList().subscribe(res => {
            if (res.dataStatus) {
                this.trainingList = res.result;
            }
        });
    }
    initialValidator() {
        this.form = this.fb.group({
            training_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            training_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            udise: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            randomcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            starttime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            endtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
        });
    }
    onFiterChange(event) {
    }
    onTrainertype(event) {
        debugger;
        if (event.detail.value == 1) {
            this.form.controls['training_type'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.form.controls['udise'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.form.controls['starttime'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.form.controls['endtime'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.form.controls['randomcode'].setValue('');
            this.form.controls['randomcode'].setValidators(null);
        }
        else {
            this.form.controls['training_type'].setValue('');
            this.form.controls['training_type'].setValidators(null);
            this.form.controls['udise'].setValue('');
            this.form.controls['udise'].setValidators(null);
            this.form.controls['starttime'].setValue('');
            this.form.controls['starttime'].setValidators(null);
            this.form.controls['endtime'].setValue('');
            this.form.controls['endtime'].setValidators(null);
            this.form.controls['randomcode'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        this.form.controls['training_type'].updateValueAndValidity();
        this.form.controls['udise'].updateValueAndValidity();
        this.form.controls['starttime'].updateValueAndValidity();
        this.form.controls['endtime'].updateValueAndValidity();
        this.form.controls['randomcode'].updateValueAndValidity();
    }
    onSave() {
        debugger;
        if (this.form.valid) {
            if (this.form.value.training_id == 1) {
                let a = this.pipe.transform(this.form.value.starttime, 'hh');
                let b = this.pipe.transform(this.form.value.starttime, 'mm');
                let c = this.pipe.transform(this.form.value.endtime, 'hh');
                let d = this.pipe.transform(this.form.value.endtime, 'mm');
                let e = this.pipe.transform(this.form.value.starttime, 'a');
                let f = this.pipe.transform(this.form.value.endtime, 'a');
                // console.log(a)
                // console.log(b)
                // console.log(c)
                // console.log(d)
                // console.log(e)
                // console.log(f)
                if (((a < c || a == c) && (b < d || b == d) && (e == f)) || ((a < c || a == c || a > c) && (b < d || b == d || b > d) && (e != f))) {
                    this.userService.getSchoolInfo(this.form.value.udise).subscribe((res) => {
                        if (res.dataStatus) {
                            let schoolinfo = res.result[0].SclId;
                            if (schoolinfo == '' || schoolinfo == null) {
                                this.alertService.error('Invalid UDISE code of training location');
                            }
                            else {
                                var data = {
                                    "records": {
                                        "IndexId": "",
                                        "TraineId": this.sessionUserName,
                                        "TrainiDate": this.todayDateFormat,
                                        "TrainiVenue": this.form.value.udise,
                                        "TrainiType": this.form.value.training_type,
                                        "TrainiBatch": "1",
                                        "TrainiStartTime": this.form.value.starttime,
                                        "TrainiEndTime": this.form.value.endtime,
                                        "TrainiCode": ""
                                    }
                                };
                                console.log('form value', data);
                                this.userService.saveTrainerAttendance(data, true).subscribe(res => {
                                    if (res) {
                                        this.alertService.success(res.message);
                                        this.router.navigate(['/tabs/home']);
                                        this.form.reset();
                                    }
                                    else {
                                        this.alertService.error(res.message);
                                    }
                                });
                            }
                        }
                        else {
                            this.alertService.error('Invalid UDISE code of training location');
                        }
                    });
                }
                else {
                    this.alertService.error('Training start time should be smaller than training end time!');
                }
                // if (this.form.value.starttime > this.form.value.endtime) {
                //   this.alertService.error('Invalid Start Time & End Time');
                // } else {
                //   this.emisService.getSchoolInfo(this.form.value.udise).subscribe((res) => {
                //     if (res.dataStatus) {
                //       let schoolinfo = res.result[0].SclId;
                //       if (schoolinfo == '' || schoolinfo == null) {
                //         this.alertService.error('Invalid UDISE code of training location');
                //       } else {
                //         var data =
                //         {
                //           "records": {
                //             "IndexId": "",
                //             "TraineId": this.sessionUserName,
                //             "TrainiDate": this.todayDateFormat,
                //             "TrainiVenue": this.form.value.udise,
                //             "TrainiType": this.form.value.training_type,
                //             "TrainiBatch": "1",
                //             "TrainiStartTime": this.form.value.starttime,
                //             "TrainiEndTime": this.form.value.endtime,
                //             "TrainiCode": ""
                //           }
                //         }
                //         console.log('form value', data)
                //         this.emisService.saveTrainerAttendance(data, true).subscribe(res => {
                //           if (res) {
                //             this.alertService.success(res.message);
                //             this.router.navigate(['/tabs/dashboard']);
                //           }
                //           else {
                //             this.alertService.error(res.message);
                //           }
                //         });
                //       }
                //     } else {
                //       this.alertService.error('Invalid UDISE code of training location');
                //     }
                //   });
                // }
            }
            else {
                var resdata = {
                    "records": {
                        "IndexId": "",
                        "TchId": this.sessionUserName,
                        "TrainingCode": this.form.value.randomcode
                    }
                };
                // {
                //   "records": {
                //     "IndexId": "",
                //     "TchId": this.sessionUserName,
                //     "TrainiType": '',
                //     "TrainiBatch": '1',
                //     "TrainingId": '',
                //     "TrainingCode": this.form.value.randomcode
                //   }
                // }
                this.userService.saveTraineeAttendance(resdata, true).subscribe(res => {
                    if (res) {
                        this.alertService.success(res.message);
                        this.router.navigate(['/tabs/home']);
                        this.form.reset();
                    }
                    else {
                        this.alertService.error(res.message);
                    }
                });
            }
        }
        else {
            this.validateAllFormFields(this.form);
            this.alertService.error('Please Fill all the Required Fields');
        }
    }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
        this.form.reset();
    }
    onSavedData() {
        if (this.form.value.training_id == 1) {
            this.router.navigate(['/tabs/saveddata'], { queryParams: { 'page': 1 }, skipLocationChange: false });
        }
        else {
            this.router.navigate(['/tabs/saveddata'], { queryParams: { 'page': 2 }, skipLocationChange: false });
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
};
TrainingAttendancePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService }
];
TrainingAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-training-attendance',
        template: _raw_loader_training_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_training_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrainingAttendancePage);



/***/ }),

/***/ 30650:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/training/training-attendance/training-attendance.page.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.stuline {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\n.stulines {\n  border-bottom: 3px solid lightgray;\n  margin-left: 13px;\n  margin-right: 13px;\n  border-radius: 5px;\n}\n\n.stucard-class {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.avatar {\n  width: auto;\n  padding-right: 10px;\n}\n\n.name {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\n.tamilname {\n  font-size: 14px;\n  color: gray;\n  white-space: pre-line;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.btn-present {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.btn-na {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 16px;\n  --background:black !important;\n  color: #fff;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\nion-card {\n  margin-inline: 14px !important;\n}\n\nion-item {\n  background: transparent !important;\n}\n\n.ion-label {\n  font-size: 20px;\n  color: black;\n}\n\nion-select {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\n.option {\n  padding-top: 20px;\n  padding-left: 18px;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\nion-input {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  padding-bottom: 10px !important;\n}\n\n.input {\n  font-size: 20px;\n  padding-bottom: 15px;\n}\n\n.code {\n  font-size: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-datetime {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n}\n\n.error-message {\n  color: red;\n  margin: 0px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n  color: red;\n}\n\n.view {\n  text-align: center;\n  margin: auto;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLWF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFFRyxrQkFBQTtFQUNBLGtCQUFBO0FBR0w7O0FBREU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUpFO0VBQ0UsaUJBQUE7QUFPSjs7QUFKRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFNTjs7QUFKRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBTU47O0FBSkU7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQU1OOztBQUpFO0VBQ0UscUJBQUE7QUFPSjs7QUFKRTtFQUNFLDhCQUFBO0FBT0o7O0FBSkU7RUFDSSxrQ0FBQTtBQU9OOztBQUpFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFKRTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQU9OOztBQUpFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQU9KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7QUFPSjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBSkU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSUoiLCJmaWxlIjoidHJhaW5pbmctYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zdWItaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLnN0dWxpbmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWFhYmI7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweFxyXG4gIH1cclxuICAuc3R1bGluZXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAvLyBwYWRkaW5nOjBweDtcclxuICB9XHJcbiAgLnN0dWNhcmQtY2xhc3NcclxuICB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiBhdXRvOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgLnRhbWlsbmFtZSB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlLWxpbmVcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmVzZW50XHJcbiAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1hYnNlbnRcclxuICB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiNmODIzMzkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgLmJ0bi1uYVxyXG4gIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6YmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOnByZS1saW5lXHJcbiAgfVxyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW4taW5saW5lOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gIH1cclxuICBcclxuICAub3B0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuICBcclxuICBpb24taW5wdXR7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29kZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDVweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgLy8gZm9udC1zaXplOiAxNXB4OyBcclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAgcmVkOyAgXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC52aWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ 74903:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/training/training-attendance/training-attendance.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size: 20px\">Training Attendance</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form name=\"form\" [formGroup]=\"form\" novalidate>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"head\"> Date</ion-col>\r\n      <ion-col size=\"12\" class=\"sub-head\"> {{todayDate}}</ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"stuline\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card>\r\n      <ion-radio-group style=\"width: 100%;\" formControlName=\"training_id\" (ionChange)=\"onTrainertype($event)\">\r\n        <ion-row class=\"option\">\r\n          <ion-label>Please Choose Option</ion-label>\r\n        </ion-row>\r\n        <ion-col size=\"12\" style=\"padding:0px\">\r\n\r\n          <ion-item style=\"padding-left: 10px;\r\n          padding-right: 10px;\" lines=\"none\">\r\n            <ion-radio value=\"1\"></ion-radio>\r\n            <ion-label style=\"padding-left: 10px;padding-top: 2px;\">I am a Trainer</ion-label>\r\n          </ion-item>\r\n          <ion-item style=\"padding-left: 10px;padding-right: 10px;\" lines=\"none\">\r\n            <ion-radio value=\"2\"></ion-radio>\r\n            <ion-label style=\"padding-left: 10px;padding-top: 2px;\">I am attending a Training</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-radio-group>\r\n      <div class=\"button view\" *ngIf=\"this.form.value.training_id == 1 || this.form.value.training_id == 2\">\r\n        <ion-button  (click)=\"onSavedData()\" style=\"color:white\">View Today's Training Details</ion-button>\r\n      </div>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-aln\" *ngIf=\"this.form.value.training_id == 1\">\r\n      <!-- <ion-row style=\"padding:10px\" *ngIf=\"optionHide\">\r\n        <ion-col size=\"6\" class=\"code\">\r\n          <ion-label>Your Code </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\"\r\n          style=\"background: green;color: white;text-align: center;font-size: 20px;border-radius:5px;padding:10px\">\r\n          <ion-label>{{randomcode}}</ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n  \r\n      <ion-item class=\"item-style\" lines=\"none\" style=\"padding-bottom:10px;\">\r\n        <ion-label position=\"stacked\" class=\"ion-label\">Training Type<span style=\"color:red\">*</span></ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" class=\"select\" formControlName=\"training_type\"\r\n          placeholder=\"Please Select Training Type\" (ionChange)=\"onFiterChange($event)\" style=\"padding-top:15px\">\r\n          <ion-select-option [value]=\"item.IndexId\" *ngFor=\"let item of trainingList\"> {{item.TranNme}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n            *ngIf=\"form.controls['training_type'].hasError('required') && (form.controls['training_type'].dirty || form.controls['training_type'].touched)\">\r\n            Field is required</p>\r\n    </ion-row>\r\n      <ion-col size=\"12\" style=\"padding:0px\">\r\n        <div class=\"stulines\"></div>\r\n      </ion-col>\r\n  \r\n      <ion-item class=\"formLine\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"input\">UDISE code of training location<span style=\"color:red\">*</span></ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" maxlength=\"11\" formControlName=\"udise\" placeholder=\"Please Enter Your Answer\" style=\"padding-top:15px\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n            *ngIf=\"form.controls['udise'].hasError('required') && (form.controls['udise'].dirty || form.controls['udise'].touched)\">\r\n            Field is required</p>\r\n    </ion-row>\r\n      <ion-col size=\"12\" style=\"padding:0px\">\r\n        <div class=\"stulines\"></div>\r\n      </ion-col>\r\n  \r\n      <ion-item class=\"formLine\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"input\" style=\"font-size:20px\">Training Start Time<ion-icon name=\"time\"\r\n            style=\"color:green;zoom:1.2\"></ion-icon><span style=\"color:red\">*</span></ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"starttime\" placeholder=\"Select Start Time\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n            *ngIf=\"form.controls['starttime'].hasError('required') && (form.controls['starttime'].dirty || form.controls['starttime'].touched)\">\r\n            Field is required</p>\r\n    </ion-row>\r\n      <ion-col size=\"12\" style=\"padding:0px\">\r\n        <div class=\"stulines\"></div>\r\n      </ion-col>\r\n    \r\n      <ion-item class=\"formLine\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"input\" style=\"font-size:20px\">Training End Time<ion-icon name=\"time\"\r\n            style=\"color:green;zoom:1.2\"></ion-icon><span style=\"color:red\">*</span></ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"endtime\" placeholder=\"Select End Time\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n            *ngIf=\"form.controls['endtime'].hasError('required') && (form.controls['endtime'].dirty || form.controls['endtime'].touched)\">\r\n            Field is required</p>\r\n    </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-aln\" *ngIf=\"this.form.value.training_id == 2\">\r\n      <ion-item class=\"formLine\" lines=\"none\" lines=\"none\">\r\n        <ion-row>\r\n          <ion-label position=\"stacked\" class=\"input\" style=\"font-size:20px\">Enter unique code for Training Session<span\r\n            style=\"color:red\">*</span></ion-label>\r\n        </ion-row>\r\n       \r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" maxlength=\"6\" formControlName=\"randomcode\" placeholder=\"Please Enter Your Answer\"\r\n          style=\"padding-top:15px\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n            *ngIf=\"form.controls['randomcode'].hasError('required') && (form.controls['randomcode'].dirty || form.controls['randomcode'].touched)\">\r\n            Field is required</p>\r\n    </ion-row>\r\n    </ion-card>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-bckclr\" (click)=\"onSave()\" *ngIf=\"this.form.value.training_id == 1 || this.form.value.training_id == 2\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\">\r\n      Save\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_training_training-attendance_training-attendance_module_ts-es2015.js.map