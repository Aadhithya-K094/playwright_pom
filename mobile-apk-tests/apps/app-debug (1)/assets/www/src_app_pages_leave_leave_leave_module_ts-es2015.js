(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_leave_leave_module_ts"],{

/***/ 64724:
/*!***********************************************************!*\
  !*** ./src/app/pages/leave/leave/leave-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavePageRoutingModule": function() { return /* binding */ LeavePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _leave_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave.page */ 92228);




const routes = [
    {
        path: '',
        component: _leave_page__WEBPACK_IMPORTED_MODULE_0__.LeavePage
    }
];
let LeavePageRoutingModule = class LeavePageRoutingModule {
};
LeavePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeavePageRoutingModule);



/***/ }),

/***/ 91143:
/*!***************************************************!*\
  !*** ./src/app/pages/leave/leave/leave.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavePageModule": function() { return /* binding */ LeavePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _leave_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-routing.module */ 64724);
/* harmony import */ var _leave_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave.page */ 92228);



// import { FormsModule } from '@angular/forms';




let LeavePageModule = class LeavePageModule {
};
LeavePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeavePageRoutingModule
        ],
        declarations: [_leave_page__WEBPACK_IMPORTED_MODULE_1__.LeavePage]
    })
], LeavePageModule);



/***/ }),

/***/ 92228:
/*!*************************************************!*\
  !*** ./src/app/pages/leave/leave/leave.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavePage": function() { return /* binding */ LeavePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leave.page.html */ 25704);
/* harmony import */ var _leave_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave.page.scss */ 2776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);













let LeavePage = class LeavePage {
    constructor(router, emisService, alert, formBuilder, usersessionService, route, navctrl, alertCtrl, uploadService) {
        this.router = router;
        this.emisService = emisService;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.usersessionService = usersessionService;
        this.route = route;
        this.navctrl = navctrl;
        this.alertCtrl = alertCtrl;
        this.uploadService = uploadService;
        this.yearlyLeaves = [];
        this.serviceLeaves = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe("en-US");
        this.leaveSubmitted = false;
        this.agree = [];
        this.yrAgree = [];
        this.localLeaveMaster = [];
        this.dayFinal = 0;
        this.rsnFormat = "[a-zA-Z0-9. !@#$%^&*/;:,_`~'-]*";
        this.sessionList = [
            { label: 'Forenoon', value: '1' },
            { label: 'Afternoon', value: '2' },
        ];
        this.sessionTeacherId = this.usersessionService.teacher_id();
        this.sessionTeacherName = this.usersessionService.teacher_name();
        this.sessionSchoolId = this.usersessionService.school_key_id();
        this.sessionTeacherType = this.usersessionService.teacher_type();
    }
    ngOnInit() {
    }
    ionViewDidEnter(fun) {
        //assign param values
        this.routeData = this.route.snapshot;
        this.page = this.routeData.queryParams.menu;
        this.fromPage = this.routeData.queryParams.from_page;
        this.designation = this.routeData.queryParams.Designation;
        this.category = this.routeData.queryParams.Category;
        this.gender = this.routeData.queryParams.Gender;
        this.teacher_id = this.routeData.queryParams.TchrId;
        //assign session values
        this.sessionEmisUsertype = this.usersessionService.emis_usertype();
        this.sessionEmisUsertype = this.usersessionService.usertype();
        if (this.sessionEmisUsertype == 27) {
            this.sessionUserName = this.usersessionService.emis_username();
        }
        else if (this.sessionEmisUsertype == 14) {
            this.sessionUserName = this.usersessionService.teacher_name();
        }
        else {
            this.sessionUserName = this.usersessionService.emis_username();
        }
        //assign from page depends upon the from page
        if (this.fromPage == 'sanction') {
            this.teacher_id = this.routeData.queryParams.TchrId;
            this.gender = this.routeData.queryParams.Gender;
            this.sessionTeacherName = this.routeData.queryParams.TchrName;
        }
        else {
            this.teacher_id = this.sessionTeacherId;
            this.sessionTeacherName = this.usersessionService.teacher_name();
        }
        //page show hide depends upon the from page
        if (fun == 'load') {
            this.page = 'My Leaves';
        }
        else {
            this.page = this.routeData.queryParams.menu;
        }
        if (this.page == 'My Leaves') {
            this.active1 = true;
            this.active2 = false;
        }
        else {
            this.active1 = false;
            this.active2 = true;
        }
        this.toggleChange = true;
        this.submitted = false;
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        this.initialValidators1();
        this.getFirstAppliedLeaveBalanceList();
        let yes = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0);
        this.minFmDate = new Date().getFullYear();
        this.maxFmDate = (new Date()).getFullYear() + 1;
        this.minToDate = new Date().getFullYear();
        this.maxToDate = (new Date()).getFullYear() + 1;
    }
    //Initial form validation 
    initialValidators1() {
        if (this.page == 'Apply Leaves') {
            //lerave apply form
            this.submitForm2 = this.formBuilder.group({
                'LeaveTypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
                'from_date': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
                'session1': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                'to_date': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
                'session2': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                'suptFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('0', null),
                'reasonVal': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat)]),
            });
        }
        else {
            //leave balance form
            this.submitForm1 = this.formBuilder.group({
                LeaveType: this.formBuilder.array([]),
                YrLeaveAry: this.formBuilder.array([]),
            });
        }
    }
    //set values and validators for leave apply form fields
    setFormValues() {
        this.submitForm2.controls['LeaveTypeId'].setValue('');
        this.submitForm2.controls['LeaveTypeId'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
        this.submitForm2.controls['from_date'].setValue('');
        this.submitForm2.controls['from_date'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
        this.submitForm2.controls['session1'].setValue('');
        this.submitForm2.controls['session1'].setValidators(null);
        this.submitForm2.controls['to_date'].setValue('');
        this.submitForm2.controls['to_date'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
        this.submitForm2.controls['session2'].setValue('');
        this.submitForm2.controls['session2'].setValidators(null);
        this.submitForm2.controls['suptFile'].setValue('0');
        this.submitForm2.controls['suptFile'].setValidators(null);
        this.submitForm2.controls['reasonVal'].setValue('');
        this.submitForm2.controls['reasonVal'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat));
    }
    //get available leave Balance list with teacher ID
    getFirstAppliedLeaveBalanceList() {
        this.emisService.getTchrLeaveBalanceList(this.teacher_id, this.gender).subscribe((data) => {
            if (data.dataStatus == true) {
                this.LeaveBalanceList = [];
                this.LeaveBalanceList = data.result.service;
                if (data.result.Service.length > 0) {
                    this.yearlyLeaves = data.result.yearly;
                    this.serviceLeaves = data.result.Service;
                    if (this.page == 'My Leaves') {
                        this.yrlyLeaveDetail(this.yearlyLeaves);
                        this.addQuestionDetail(this.serviceLeaves);
                    }
                    if (this.page == 'Apply Leaves') {
                        this.leaveTypeList = this.yearlyLeaves.concat(this.serviceLeaves);
                    }
                }
                else {
                    // this.getLeaveBalanceForm();
                }
            }
            else {
                this.alert.error(data.message);
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    // to capture leave balance for the first time from user
    getLeaveBalanceForm() {
        let params = this.teacher_id;
        this.emisService.getTchrLeaveTypeList(params, this.gender).subscribe((data) => {
            if (data.dataStatus == true) {
                this.LeaveType = data.result;
                if (data.result.length > 0) {
                    this.yearlyLeaves = [];
                    this.serviceLeaves = [];
                    for (let i = 0; i < data.result.length; i++) {
                        if (data.result[i].LeaveTypeId == 2 || data.result[i].LeaveTypeId == 3 || data.result[i].LeaveTypeId == 4) {
                            this.yearlyLeaves.push(data.result[i]);
                        }
                        else {
                            this.serviceLeaves.push(data.result[i]);
                        }
                    }
                    if (this.page == 'My Leaves') {
                        this.yrlyLeaveDetail(this.yearlyLeaves);
                        this.addQuestionDetail(this.serviceLeaves);
                    }
                    if (this.page == 'Apply Leaves') {
                        this.leaveTypeList = this.yearlyLeaves.concat(this.serviceLeaves);
                    }
                }
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    //set form values for yearly leaves
    yrlyLeaveDetail(data) {
        const control = this.submitForm1.controls["YrLeaveAry"];
        this.yrlyLeaveList = this.submitForm1.controls.YrLeaveAry;
        for (let i = 0; i < data.length; i++) {
            this.yrAgree[i] = '0';
            let leave_type = data[i].LeaveTypeId;
            let balance_val;
            let float_val;
            let max_leng;
            //assign values to change balance field color and property
            if (this.fromPage == 'e-sr') {
                if (data[0].ApprovalStatus == 0 || data[0].ApprovalStatus == null || data[0].ApprovalStatus == '') {
                    balance_val = '';
                    this.yrAgree[i] = '1';
                    this.agree[i] = '1';
                }
                else {
                    if (leave_type != 2) {
                        balance_val = this.round(data[i].LeaveBalance, float_val);
                    }
                    else {
                        balance_val = data[i].LeaveBalance;
                    }
                    this.yrAgree[i] = '0';
                    this.agree[i] = '0';
                    if (data[0].ApprovalStatus == 1) {
                        document.documentElement.style.setProperty('--approve-back', '#630094');
                    }
                    else {
                        document.documentElement.style.setProperty('--approve-back', '#5dae53');
                    }
                }
            }
            else {
                if (leave_type != 2) {
                    balance_val = this.round(data[i].LeaveBalance, float_val);
                }
                else {
                    balance_val = data[i].LeaveBalance;
                }
                if (data[0].ApprovalStatus == 1) {
                    document.documentElement.style.setProperty('--approve-back', '#630094');
                }
                else {
                    document.documentElement.style.setProperty('--approve-back', '#5dae53');
                }
                this.yrAgree[i] = '0';
                this.agree[i] = '0';
                if (data[0].ApprovalStatus == 1) {
                    document.documentElement.style.setProperty('--approve-back', '#630094');
                }
                else {
                    document.documentElement.style.setProperty('--approve-back', '#5dae53');
                }
            }
            //set field format validation
            if (leave_type == 2) {
                this.numFormat = "[0-9.]*";
                max_leng = 4;
                float_val = 1;
            }
            else {
                this.numFormat = "[0-9]*";
                max_leng = 3;
                float_val = 0;
            }
            console.log("balance_val", balance_val);
            //set form values for yearly leaves
            this.yrlyLeaveList.push(this.formBuilder.group({
                index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].IndxId, null),
                teacher_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.teacher_id, null),
                teacher_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.sessionTeacherType, null),
                LeaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeId, null),
                LeaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveType, null),
                LeaveTypeTamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeTamil, null),
                readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                max_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(max_leng, null),
                YearlyLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].YearlyLimit, null),
                LeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(balance_val, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numFormat), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(data[i].YearlyLimit)]),
                float_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(float_val, null),
                balance_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.pipe.transform(new Date(), "yyyy-MM-dd"), null),
                app_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].ApprovalStatus, null),
            }));
        }
    }
    //set form values for yearly leaves and validators
    addQuestionDetail(data) {
        const control = this.submitForm1.controls["LeaveType"];
        this.queslist = this.submitForm1.controls.LeaveType;
        for (let i = 0; i < data.length; i++) {
            this.agree[i] = '0';
            let leave_type = data[i].LeaveTypeId;
            let limit;
            if (leave_type != 1 && leave_type != 5 && leave_type != 10 && leave_type != 11) {
                limit = data[i].YearlyLimit;
            }
            else {
                limit = data[i].YearlyLimit;
            }
            let balance_val;
            let float_val;
            this.numFormat = "[0-9]*";
            float_val = 0;
            //assign values for to change balance field color and property
            if (this.fromPage == 'e-sr') {
                if (data[0].ApprovalStatus == 0 || data[0].ApprovalStatus == null || data[0].ApprovalStatus == '') {
                    balance_val = '';
                    this.yrAgree[i] = '1';
                    this.agree[i] = '1';
                    this.Approve = 0;
                }
                else {
                    balance_val = this.round(data[i].LeaveBalance, float_val);
                    this.yrAgree[i] = '0';
                    this.agree[i] = '0';
                    this.Approve = 1;
                    if (data[0].ApprovalStatus == 1) {
                        document.documentElement.style.setProperty('--approve-back', '#630094');
                        document.documentElement.style.setProperty('--approve-color', 'white');
                    }
                    else {
                        document.documentElement.style.setProperty('--approve-back', '#5dae53');
                        document.documentElement.style.setProperty('--approve-color', 'white');
                    }
                }
            }
            else {
                balance_val = this.round(data[i].LeaveBalance, float_val);
                if (data[0].ApprovalStatus == 1) {
                    this.yrAgree[i] = '0';
                    this.agree[i] = '0';
                    this.Approve = 0;
                    document.documentElement.style.setProperty('--approve-back', '#630094');
                    document.documentElement.style.setProperty('--approve-color', 'white');
                }
                else {
                    this.Approve = 1;
                    document.documentElement.style.setProperty('--approve-back', '#5dae53');
                    document.documentElement.style.setProperty('--approve-color', 'white');
                }
            }
            //set form values for yearly leaves and validators
            if (leave_type != 1 && leave_type != 12) {
                this.queslist.push(this.formBuilder.group({
                    index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].IndxId, null),
                    teacher_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.teacher_id, null),
                    teacher_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.sessionTeacherType, null),
                    LeaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeId, null),
                    LeaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveType, null),
                    LeaveTypeTamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeTamil, null),
                    readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    YearlyLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].YearlyLimit, null),
                    LeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(balance_val, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numFormat), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(limit)]),
                    float_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(float_val, null),
                    balance_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.pipe.transform(new Date(), "yyyy-MM-dd"), null),
                    app_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].ApprovalStatus, null),
                }));
            }
            else {
                this.queslist.push(this.formBuilder.group({
                    index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].IndxId, null),
                    teacher_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.teacher_id, null),
                    teacher_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.sessionTeacherType, null),
                    LeaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeId, null),
                    LeaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveType, null),
                    LeaveTypeTamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].LeaveTypeTamil, null),
                    readonly: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    YearlyLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].YearlyLimit, null),
                    LeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(balance_val, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numFormat)]),
                    float_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(float_val, null),
                    balance_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.pipe.transform(new Date(), "yyyy-MM-dd"), null),
                    app_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data[i].ApprovalStatus, null),
                }));
            }
        }
    }
    //to convert leave balance rounded
    round(value, exp) {
        if (typeof exp === 'undefined' || +exp === 0)
            return Math.round(value);
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
            return NaN;
        // Shift
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
    }
    // update save leave balance data
    saveLeaveBls() {
        if (this.submitForm1.valid) {
            let submitArray = [];
            let app_status;
            if (this.fromPage == 'e-sr') {
                app_status = 1;
            }
            else {
                app_status = 8;
            }
            for (let i = 0; i < this.yearlyLeaves.length; i++) {
                submitArray.push({
                    IndxId: this.submitForm1.value.YrLeaveAry[i].index_id,
                    TchrId: this.teacher_id,
                    TchrType: this.sessionTeacherType,
                    LeaveTypeId: this.submitForm1.value.YrLeaveAry[i].LeaveTypeId,
                    LeaveBalance: this.submitForm1.value.YrLeaveAry[i].LeaveBalance,
                    BalanceDate: this.pipe.transform(new Date(), "yyyy-MM-dd"),
                    AppStatus: app_status,
                    AppUserNme: '',
                });
            }
            for (let j = 0; j < this.submitForm1.value.LeaveType.length; j++) {
                submitArray.push({
                    IndxId: this.submitForm1.value.LeaveType[j].index_id,
                    TchrId: this.teacher_id,
                    TchrType: this.sessionTeacherType,
                    LeaveTypeId: this.submitForm1.value.LeaveType[j].LeaveTypeId,
                    LeaveBalance: this.submitForm1.value.LeaveType[j].LeaveBalance,
                    BalanceDate: this.submitForm1.value.LeaveType[j].balance_date,
                    AppUserNme: ''
                });
            }
            let params = {
                records: submitArray
            };
            // call post api to save leave balance data
            this.emisService.saveTchrAvailLeave(params).subscribe((data) => {
                if (data.dataStatus == true) {
                    this.submitted = false;
                    this.alert.toast(data.message);
                    this.submitForm1.reset();
                    this.emisService.leaveSubmitted = true;
                    this.router.navigate(["/tabs/e-sr"], { queryParams: { 'page': 2 }, skipLocationChange: false });
                }
                else {
                    this.alert.error(data.message);
                }
            }, error => {
                this.alert.error("Unable to connect to the server.  Please try after some time.");
            });
        }
        else {
            this.submitted = true;
            this.alert.error("Please enter valid field values");
        }
    }
    //leave days calculation
    leaveCalculation() {
        if (this.submitForm2.value.LeaveTypeId == "1") {
            this.dayFinal = 0.5;
        }
        else if (this.submitForm2.value.LeaveTypeId == "2") {
            if (this.submitForm2.value.from_date != '' && this.submitForm2.value.from_date != null && this.submitForm2.value.from_date != undefined && this.submitForm2.value.to_date != '' && this.submitForm2.value.to_date != null && this.submitForm2.value.to_date != undefined &&
                this.submitForm2.value.session1 != '' && this.submitForm2.value.session1 != null && this.submitForm2.value.session1 != undefined && this.submitForm2.value.session2 != '' && this.submitForm2.value.session2 != null && this.submitForm2.value.session2 != undefined) {
                let firstDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.from_date);
                let secondDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.to_date);
                let diffInDays = Math.abs(firstDate.diff(secondDate, 'days'));
                this.day_count = diffInDays + 1;
                if (this.submitForm2.value.session1 == 1 && this.submitForm2.value.session2 == 2) {
                    this.dayFinal = this.day_count;
                }
                else if ((this.submitForm2.value.session1 == 1 && this.submitForm2.value.session2 == 1) || (this.submitForm2.value.session1 == 2 && this.submitForm2.value.session2 == 2)) {
                    this.dayFinal = (this.day_count - 0.5);
                }
                else if (this.submitForm2.value.session1 == 2 && this.submitForm2.value.session2 == 1) {
                    this.dayFinal = (this.day_count - 1);
                }
                else {
                    this.submitForm2.controls['session1'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.submitForm2.controls['session2'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.dayFinal = 0;
                }
            }
            else {
                this.submitForm2.controls['session1'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.submitForm2.controls['session2'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.dayFinal = 0;
            }
        }
        else {
            if (this.submitForm2.value.from_date != '' && this.submitForm2.value.from_date != null && this.submitForm2.value.from_date != undefined && this.submitForm2.value.to_date != '' && this.submitForm2.value.to_date != null && this.submitForm2.value.to_date != undefined) {
                let firstDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.from_date);
                let secondDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.to_date);
                let diffInDays = Math.abs(firstDate.diff(secondDate, 'days'));
                this.dayFinal = diffInDays + 1;
            }
            else {
                this.dayFinal = 0;
            }
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls['session1'].setValidators(null);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls['session2'].setValidators(null);
            if (this.submitForm2.value.LeaveTypeId == '3') {
                this.submitForm2.controls["reasonVal"].setValue('');
                this.submitForm2.controls['reasonVal'].setValidators(null);
            }
            if ((this.submitForm2.value.LeaveTypeId == '6' || this.submitForm2.value.LeaveTypeId == '7' || this.submitForm2.value.LeaveTypeId == '8' || this.submitForm2.value.LeaveTypeId == '9' || this.submitForm2.value.LeaveTypeId == '10' || this.submitForm2.value.LeaveTypeId == '12' || this.submitForm2.value.LeaveTypeId == '16') && this.dayFinal > 3) {
                if (this.submitForm2.value.suptFile == '') {
                    this.submitForm2.controls["suptFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.submitForm2.controls["suptFile"].setValue('');
                }
            }
            else {
                this.submitForm2.controls["suptFile"].setValidators(null);
                this.submitForm2.controls["suptFile"].setValue('');
            }
        }
    }
    // form 2 apply leave (submitForm2)
    saveApplyLeave() {
        var isValid = false;
        let day_msg;
        let src;
        if (this.submitForm2.valid) {
            if (this.dayFinal > 0) {
                let leave_valid;
                if (this.submitForm2.value.LeaveTypeId == '1' && this.dayFinal <= 0.5) {
                    leave_valid = true;
                    src = 2;
                }
                else if (this.submitForm2.value.LeaveTypeId == '2' && this.dayFinal <= 10) {
                    leave_valid = true;
                    src = 1;
                }
                else if (this.submitForm2.value.LeaveTypeId == '3' && this.dayFinal <= 3) {
                    src = 1;
                    leave_valid = true;
                }
                else if ((this.submitForm2.value.LeaveTypeId == '5') && this.dayFinal <= 180) {
                    leave_valid = true;
                    src = 1;
                }
                else if ((this.submitForm2.value.LeaveTypeId == '6') && this.dayFinal <= 60) {
                    leave_valid = true;
                    src = 2;
                }
                else if ((this.submitForm2.value.LeaveTypeId == '7') && this.dayFinal <= 365) {
                    leave_valid = true;
                    src = 2;
                }
                else if ((this.submitForm2.value.LeaveTypeId == '9') && this.dayFinal <= 90) {
                    leave_valid = true;
                    src = 2;
                }
                else if ((this.submitForm2.value.LeaveTypeId == '4' || this.submitForm2.value.LeaveTypeId == '8' || this.submitForm2.value.LeaveTypeId == '9' ||
                    this.submitForm2.value.LeaveTypeId == '10' || this.submitForm2.value.LeaveTypeId == '11' || this.submitForm2.value.LeaveTypeId == '12' ||
                    this.submitForm2.value.LeaveTypeId == '13' || this.submitForm2.value.LeaveTypeId == '14' || this.submitForm2.value.LeaveTypeId == '15' || this.submitForm2.value.LeaveTypeId == '16')) {
                    leave_valid = true;
                    src = 2;
                }
                else {
                    if (this.submitForm2.value.LeaveTypeId == '1') {
                        day_msg = 0.5;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '2') {
                        day_msg = 10;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '3') {
                        day_msg = 3;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '5') {
                        day_msg = 180;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '6') {
                        day_msg = 60;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '7') {
                        day_msg = 365;
                    }
                    else if (this.submitForm2.value.LeaveTypeId == '9') {
                        day_msg = 90;
                    }
                    else {
                        day_msg = 0;
                    }
                    leave_valid = false;
                }
                if (leave_valid == true) {
                    let leaveIndex = this.leaveTypeList.filter((key) => key.LeaveTypeId == this.submitForm2.value.LeaveTypeId);
                    let leaveBalance = leaveIndex[0].LeaveBalance;
                    if (this.dayFinal <= leaveBalance || leaveIndex[0].LeaveTypeId == '12') {
                        this.emisService.getLeaveAprvldtls(this.designation, this.category, src).subscribe((data) => {
                            if (data.dataStatus == true) {
                                // set param to save leave
                                let params = {
                                    records: [
                                        {
                                            IndxId: "",
                                            TchrId: this.teacher_id,
                                            SchlId: this.sessionSchoolId,
                                            TchrType: this.sessionTeacherType,
                                            AppliedDate: this.pipe.transform(new Date(), "yyyy-MM-dd"),
                                            LeaveTypeId: this.submitForm2.value.LeaveTypeId,
                                            LeaveDayType: 0,
                                            LeaveFromDate: this.pipe.transform(this.submitForm2.value.from_date, "yyyy-MM-dd"),
                                            LeaveToDate: this.pipe.transform(this.submitForm2.value.to_date, "yyyy-MM-dd"),
                                            LeaveSession: this.submitForm2.value.session1,
                                            LeaveSession2: this.submitForm2.value.session2,
                                            LeaveDays: this.dayFinal,
                                            file: this.submitForm2.value.suptFile,
                                            Remarks: this.submitForm2.value.reasonVal,
                                            ApplicationStatus: 1,
                                            LvelimitId: data.result[0].lvelimitId,
                                        },
                                    ],
                                };
                                this.messagecnt = 0;
                                if (this.LeavetypeId == 3) {
                                    for (let i = 0; i < this.ResdLeaveList.length; i++) {
                                        let from_date = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.from_date).format('YYYY-MM-DD');
                                        let to_date = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.to_date).format('YYYY-MM-DD');
                                        if (from_date == this.ResdLeaveList[i].date_yr && to_date == this.ResdLeaveList[i].date_yr) {
                                            this.leaveSubmission(params, "RH");
                                        }
                                        else {
                                            this.messagecnt = this.messagecnt + 1;
                                        }
                                    }
                                    if (this.messagecnt > 0 && this.messagecnt == 33) {
                                        this.alert.error("You select date is not matched with restricted holiday");
                                    }
                                }
                                else if (this.LeavetypeId == 2 || this.LeavetypeId == 5) {
                                    for (let i = 0; i < this.ResdLeaveList.length; i++) {
                                        let from_date = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.from_date).format('YYYY-MM-DD');
                                        let to_date = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.submitForm2.value.to_date).format('YYYY-MM-DD');
                                        if (from_date == this.ResdLeaveList[i].date_yr || to_date == this.ResdLeaveList[i].date_yr) {
                                            this.messagecnt = this.messagecnt + 1;
                                        }
                                    }
                                    this.leaveSubmission(params, "CL");
                                }
                                else {
                                    this.leaveSubmission(params, "CL");
                                }
                            }
                            else {
                                this.alert.error("Something went wrong");
                            }
                        }, error => {
                            this.alert.error("Unable to connect to the server.  Please try after some time.");
                        });
                    }
                    else {
                        this.alert.error("You have insufficient leave balance. Please apply on Loss of Pay");
                    }
                }
                else {
                    this.alert.error("should not apply exceed of " + day_msg + " days");
                }
            }
            else {
                this.alert.error("Invalid count of leave days");
            }
        }
        else {
            this.alert.error("Field is Required");
            this.submitted = true;
        }
    }
    //call post api to save leave details
    leaveSubmission(params, leave) {
        this.emisService.saveAppliedLeave(params).subscribe((data) => {
            if (data.dataStatus == true) {
                if (this.messagecnt > 0) {
                    if (leave == "CL") {
                        this.alert.error("You select date is matched with public holiday");
                    }
                }
                this.alert.success("Thank you for applying. Leave application under process. Please check status in 24 hrs.");
                this.dayFinal = 0;
                this.messagecnt = 0;
                this.goBack();
            }
            else {
                this.alert.error(data.message);
            }
        }),
            (err) => {
                alert("error " + JSON.stringify(err));
                this.alert.success("Something went wrong.");
            };
    }
    //set valiodations based on leave type
    optionsFn(event) {
        this.LeavetypeId = event.detail.value;
        this.LeavTyp = 0;
        if (event.detail.value == '1') {
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(null);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(null);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(null);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat)]);
        }
        else if (event.detail.value == '2') {
            this.LeavTyp = 1;
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(null);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators(null);
        }
        if (event.detail.value == '3') {
            this.LeavTyp = 2;
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(null);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(null);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(null);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators(null);
        }
        else if (event.detail.value == '5') {
            this.LeavTyp = 1;
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(null);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(null);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(null);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat)]);
        }
        else if (event.detail.value == '6' || event.detail.value == '7' || event.detail.value == '8' || event.detail.value == '9' || event.detail.value == '10' || event.detail.value == '12' || this.submitForm2.value.LeaveTypeId == '16') {
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(null);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(null);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat)]);
        }
        else {
            this.submitForm2.controls["session1"].setValue('');
            this.submitForm2.controls["session1"].setValidators(null);
            this.submitForm2.controls["session2"].setValue('');
            this.submitForm2.controls["session2"].setValidators(null);
            this.submitForm2.controls["from_date"].setValue('');
            this.submitForm2.controls["from_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["to_date"].setValue('');
            this.submitForm2.controls["to_date"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(null);
            this.submitForm2.controls["reasonVal"].setValue('');
            this.submitForm2.controls["reasonVal"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.rsnFormat)]);
        }
        if (this.LeavTyp != 0) {
            this.emisService.TchrLeaveCalender(this.LeavTyp).subscribe((data) => {
                this.ResdLeaveList = data.result;
            }),
                (err) => {
                    this.alert.success("Something went wrong.");
                };
        }
        else {
            this.ResdLeaveList = [];
        }
    }
    //to upload document
    onSelectFile(event) {
        if (event.target.files[0] != '' && event.target.files[0] != null && event.target.files[0] != undefined) {
            if (event.target.files && event.target.files[0]) {
                if (event.target.files[0].size <= 15728640) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    this.fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        this.uploadUrl = fileReader.result;
                        var bucketName = "renewalapplicationemis";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                let files = this.doc_file;
                                let file = files[0];
                                this.uploadService.uploadFile(result.url, file).subscribe((res) => {
                                    this.imageKey = result.key;
                                    this.image1 = '';
                                    this.submitForm2.controls["suptFile"].setValue(result.key);
                                });
                                this.alert.success('File Uploaded Successfully');
                            }
                            else {
                                this.alert.error('Error in Uploading File please try again');
                            }
                        });
                    };
                }
                else {
                    this.alert.error('File Can`t uploaded because Image size should not exceed 15 MB');
                }
            }
        }
        else {
            this.submitForm2.controls["suptFile"].setValue('');
            this.submitForm2.controls["suptFile"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
        }
        this.submitForm2.controls["suptFile"].updateValueAndValidity();
    }
    //to view document from bucket
    viewImage(fun) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            var filename = this.imageKey;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.image1 = result.url;
                    if (fun == 'modal') {
                    }
                }
                else {
                    this.alert.error('Error in getting image file');
                }
            }));
        });
    }
    //navigate to leave dashboard
    goBack() {
        this.router.navigate(["/tabs/e-sr"], { queryParams: { 'page': 2 }, skipLocationChange: false });
    }
    //navigate to leave balance page
    goleaveHistory() {
        this.navctrl.navigateForward(["/tabs/leavehistory"]);
    }
    //go to my leaves page
    goleaveBalance() {
        // debugger
        this.page = 'My Leaves';
        this.active1 = true;
        this.active2 = false;
        this.ionViewDidEnter('load');
    }
    //calculate leave days
    autocalculate(datefun) {
        if (datefun == 'from') {
            if (this.submitForm2.value.from_date != undefined && this.submitForm2.value.from_date != '' && this.submitForm2.value.from_date != null) {
                this.minToDate = this.submitForm2.value.from_date;
            }
        }
        else {
            if (this.submitForm2.value.to_date != undefined && this.submitForm2.value.to_date != '' && this.submitForm2.value.to_date != null) {
                this.maxFmDate = this.submitForm2.value.to_date;
            }
        }
        if (this.submitForm2.value.LeaveTypeId != '' && this.submitForm2.value.LeaveTypeId != null && this.submitForm2.value.LeaveTypeId != undefined) {
            if (this.submitForm2.value.from_date < this.submitForm2.value.to_date) {
            }
            else {
            }
            this.leaveCalculation();
        }
        else {
            this.alert.error("Pleace Select Leave Type");
            this.submitForm2.controls['from_date'].setValue('');
            this.submitForm2.controls['to_date'].setValue('');
        }
    }
    //call alert prompt on leave balance submit
    instrAlert(iVal, fun) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((this.fromPage == 'e-sr' && this.Approve == 0 && (this.agree[iVal] == '0' || this.yrAgree[iVal] == '0')) || (this.fromPage == 'sanction' && this.Approve == 0 && (this.agree[iVal] == '0' || this.yrAgree[iVal] == '0'))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Instructions',
                    subHeader: '',
                    message: '<p>1.Please fill up leave balances as applicable.</p>' +
                        '<p>2.Please refer to SR/Offline leave history before you update/verify balance here.</p>' +
                        '<p>3.Upon submission the balance will be verified and updated in leave balance. </p>' +
                        '<p>4.No editing will be possible once submitted.</p>',
                    cssClass: 'leave-custom-class',
                    inputs: [
                        {
                            name: 'agree',
                            type: 'checkbox',
                            label: 'I acknowledge that i have read and understood the above message',
                            value: true,
                            checked: false
                        }
                    ],
                    buttons: [{
                            text: 'Proceed',
                            cssClass: 'alert-button-confirm',
                            handler: (data) => {
                                if (data.length != 0) {
                                    if (data[0] == true) {
                                        if (this.fromPage == 'e-sr') {
                                            for (var i = 0; i < this.yearlyLeaves.length; i++) {
                                                this.yrAgree[i] = '1';
                                            }
                                            for (var i = 0; i < this.serviceLeaves.length; i++) {
                                                this.agree[i] = '1';
                                            }
                                        }
                                        else {
                                            if (fun == 'Yearly') {
                                                this.yrAgree[i] = '1';
                                            }
                                            else {
                                                this.agree[iVal] = '1';
                                            }
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < this.yearlyLeaves.length; i++) {
                                            this.yrAgree[i] = '0';
                                        }
                                        for (var i = 0; i < this.serviceLeaves.length; i++) {
                                            this.agree[i] = '0';
                                        }
                                    }
                                }
                            }
                        },]
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
            }
        });
    }
    //call 2nd alert prompt on leave balance submit
    submitAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let msg_content;
            let header_content;
            let class_name;
            if (msg == 'msg1') {
                header_content = 'Please note';
                class_name = 'leave-custom-class';
                msg_content = '<label>You have filled in leave balance.</label>' +
                    '<label>Please note that no editing will be possible.</label>' +
                    '<label>If you wish to proceed to submission please click OK.</label>';
            }
            else {
                header_content = 'Alert';
                class_name = 'leave-submit-class';
                msg_content = '<label>Note: No editing will be possible.</label>' +
                    '<label>Please make sure this is the correct leave balance from SR. This balance will be updated against teacher leave account.  If you are sure to proceed to submission click OK</label>';
            }
            const alert = yield this.alertCtrl.create({
                header: header_content,
                subHeader: '',
                message: msg_content,
                cssClass: class_name,
                buttons: [
                    {
                        text: 'OK',
                        cssClass: 'alert-button-confirm',
                        handler: data => {
                            if (msg == 'msg1') {
                                this.submitAlert('msg2');
                            }
                            else {
                                this.saveLeaveBls();
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                    }
                ]
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
        });
    }
};
LeavePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService }
];
LeavePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-leave',
        template: _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leave_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeavePage);



/***/ }),

/***/ 2776:
/*!***************************************************!*\
  !*** ./src/app/pages/leave/leave/leave.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\nion-label {\n  font-size: 14px;\n  margin-top: 10px;\n}\n\nion-select {\n  --placeholder-opacity: 0.5;\n  font-size: 14px;\n}\n\nion-datetime {\n  height: auto;\n  width: auto;\n  max-width: 350px;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));\n  grid-gap: 0 10px;\n}\n\nion-modal {\n  --width: 290px;\n  --height: 382px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 382px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  font-size: inherit;\n  align-self: center;\n  padding-left: 0px !important;\n  background-color: #630094;\n  color: white;\n}\n\n.input-row {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  background-color: white;\n  padding: 0px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  border-radius: 10px;\n}\n\n.input-column {\n  border: 2px solid #630094;\n  border-radius: 10px !important;\n  text-align: center !important;\n}\n\n.bls-label {\n  color: white;\n  font-size: 16px !important;\n  font-weight: 500;\n  text-align: right;\n}\n\n.uploadDiv {\n  padding: 10px;\n  border: 1px solid lightgrey;\n  margin-top: 10px;\n  border-radius: 10px;\n  color: grey;\n  background-color: #eeeeee;\n}\n\n.ion-page {\n  background-color: #630094;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.lbl-color {\n  color: red;\n}\n\n.input-div {\n  border: 1px solid #c4c4c4;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n\n.lv-calandar {\n  align-self: center;\n  zoom: 1.2;\n  color: #630094;\n}\n\n.user-grid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.user-col-label {\n  margin-top: 10px;\n  border-bottom: 1px dashed lightgray;\n  border-right: 1px dashed lightgray;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.user-col {\n  margin-top: 10px;\n  border-right: 1px dashed lightgray;\n  font-size: 15px;\n  font-weight: 500;\n}\n\nion-card {\n  border-radius: 10px !important;\n  margin: 15px 0px;\n}\n\nion-button {\n  --border-radius: 20px !important;\n  text-transform: capitalize !important;\n  --color: white !important;\n}\n\n.lv-title-cls {\n  text-align: center;\n  font-size: 20px;\n  color: white;\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.bls-num-cls {\n  align-self: center;\n  border-right: 1px dashed lightgray;\n  text-align: center;\n}\n\n.item-center {\n  align-self: center;\n}\n\n.hisButtonCls {\n  margin: 5px 0px;\n  padding: 8px;\n  background-color: #630094;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.lvBlsButtonCls {\n  margin: 5px 0px;\n  padding: 8px;\n  background-color: #575757;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.lvBlsSubmitCls {\n  padding: 15px;\n  background-color: white;\n  color: #630094;\n  width: 50%;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 25px;\n}\n\n.aplLvSubmitCls {\n  --background: #8b67b3 !important;\n  font-size: 16px;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC0xMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udXNlci1pY29uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmJ0bkRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODhweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDAgMTBweDtcclxufVxyXG5cclxuaW9uLW1vZGFsIHtcclxuICAtLXdpZHRoOiAyOTBweDtcclxuICAtLWhlaWdodDogMzgycHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCBpb24tZGF0ZXRpbWUge1xyXG4gIGhlaWdodDogMzgycHg7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMwMDk0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0LXJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jb2x1bW4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MzAwOTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxzLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnVwbG9hZERpdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzMDA5NDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGJsLWNvbG9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmx2LWNhbGFuZGFyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgem9vbTogMS4yO1xyXG4gIGNvbG9yOiAjNjMwMDk0O1xyXG59XHJcblxyXG4udXNlci1ncmlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1jb2wtbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnVzZXItY29sIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCBsaWdodGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubHYtdGl0bGUtY2xzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ibHMtbnVtLWNscyB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCBsaWdodGdyYXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1jZW50ZXIge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpc0J1dHRvbkNscyB7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMwMDk0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubHZCbHNCdXR0b25DbHMge1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTc1NztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmx2QmxzU3VibWl0Q2xzIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNjMwMDk0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmFwbEx2U3VibWl0Q2xzIHtcclxuICAtLWJhY2tncm91bmQ6ICM4YjY3YjMgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 25704:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave/leave.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">{{(this.active1 == true) ? \"My Leaves\" : \"Apply Leaves\"}}</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <!-- My leaves  -->\r\n  <div class=\"leave-container\" *ngIf=\"active1\">\r\n    <form [formGroup]=\"submitForm1\">\r\n      <ion-grid class=\"user-grid\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"user-col-label\">\r\n            <ion-label>Name</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\" class=\"user-col-label\">\r\n            <ion-label>User Id</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"user-col\">\r\n            <ion-label>{{sessionTeacherName}}</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\" class=\"user-col\">\r\n            <ion-label>{{teacher_id}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Yearly Leaves -->\r\n      <div class=\"lv-title-cls\" *ngIf=\"yearlyLeaves?.length != 0\">\r\n        <ion-label class=\"lv-title-cls\">Yearly leaves </ion-label>\r\n      </div>\r\n\r\n      <ion-row style=\"margin-top: 0px;\" *ngIf=\"this.yearlyLeaves?.length != 0\">\r\n        <ion-col size=\"9\">\r\n          <ion-label></ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"bls-label\">\r\n          <ion-label class=\"bls-label\">Balance</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div formArrayName=\"YrLeaveAry\">\r\n        <ion-row class=\"input-row\" *ngFor=\"let YLitem of submitForm1.get('YrLeaveAry')['controls']; let i = index;\"\r\n          [formGroupName]=\"i\">\r\n          <ion-col size=\"1.5\" class=\"bls-num-cls\">\r\n            <ion-label>{{(i+1)}}</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"8.5\" class=\"item-center\">\r\n            <ion-label>{{YLitem.value.LeaveType}}</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\">\r\n            <ion-input class=\"input-column\"\r\n              [ngStyle]=\"{'background-color': (this.yrAgree[i] == 0 && YLitem.value.app_status != null && YLitem.value.app_status != 0 && YLitem.value.app_status != '') ? 'var(--approve-back)' :'white' , 'color': (this.yrAgree[i] == 0 && YLitem.value.app_status != null && YLitem.value.app_status != 0 && YLitem.value.app_status != '') ? 'white' :'#630094' , 'border': (this.yrAgree[i] == 0 && YLitem.value.app_status != null && YLitem.value.app_status != 0 && YLitem.value.app_status != '') ? '2px solid var(--approve-back)' :'2px solid #630094'}\"\r\n              maxlength=\"{{YLitem.value.max_length}}\" type=\"text\" formControlName=\"LeaveBalance\"\r\n              (click)='instrAlert(i,\"Yearly\")' readonly=\"{{this.yrAgree[i] === '0' ? true : false}}\"></ion-input>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(YLitem.controls['LeaveBalance'].hasError('required')) && (submitted || YLitem.controls['LeaveBalance'].dirty || YLitem.controls['LeaveBalance'].touched)\">\r\n              Required </p>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(YLitem.controls['LeaveBalance'].hasError('pattern')) && (submitted || YLitem.controls['LeaveBalance'].dirty || YLitem.controls['LeaveBalance'].touched)\">\r\n              Invalid </p>\r\n            <p class=\"error-message\" *ngIf=\"(YLitem.controls['LeaveBalance'].hasError('max'))\">\r\n              Limit {{this.submitForm1.value.YrLeaveAry[i].YearlyLimit}} </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <!-- Service Leaves -->\r\n      <div class=\"lv-title-cls\" *ngIf=\"serviceLeaves?.length != 0\">\r\n        <ion-label class=\"lv-title-cls\">Service Leaves</ion-label>\r\n      </div>\r\n\r\n      <ion-row style=\"margin-top: 0px;\" *ngIf=\"this.serviceLeaves?.length != 0\">\r\n        <ion-col size=\"9\">\r\n          <ion-label></ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"bls-label\">\r\n          <ion-label class=\"bls-label\"> Balance</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div formArrayName=\"LeaveType\">\r\n        <ion-row class=\"input-row\" *ngFor=\"let item of submitForm1.get('LeaveType')['controls']; let i = index;\"\r\n          [formGroupName]=\"i\">\r\n          <ion-col size=\"1.5\" class=\"bls-num-cls\">\r\n            <ion-label>{{(i+1)}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"8.5\" class=\"item-center\">\r\n            <ion-label>{{item.value.LeaveType}}</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\">\r\n            <!-- {{this.agree[i]}} : agree val\t\t\t -->\r\n            <ion-input class=\"input-column\"\r\n              [ngStyle]=\"{'background-color': (this.agree[i] == 0 && item.value.app_status != null && item.value.app_status != 0 && item.value.app_status != '') ? 'var(--approve-back)' :'white' , 'color': (this.agree[i] == 0 && item.value.app_status != null && item.value.app_status != 0 && item.value.app_status != '') ? 'white' :'#630094' , 'border': (this.agree[i] == 0  && item.value.app_status != null && item.value.app_status != 0 && item.value.app_status != '') ? '2px solid var(--approve-back)' :'2px solid #630094'}\"\r\n              type=\"text\" maxlength=\"3\" formControlName=\"LeaveBalance\" (click)='instrAlert(i,\"Service\")'\r\n              readonly=\"{{this.agree[i] === '0' ? true : false}}\"></ion-input>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['LeaveBalance'].hasError('required')) && (submitted || item.controls['LeaveBalance'].dirty || item.controls['LeaveBalance'].touched)\">\r\n              Required </p>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['LeaveBalance'].hasError('pattern')) && (submitted || item.controls['LeaveBalance'].dirty || item.controls['LeaveBalance'].touched)\">\r\n              Invalid </p>\r\n            <p class=\"error-message\" *ngIf=\"(item.controls['LeaveBalance'].hasError('max'))\">\r\n              Limit {{this.submitForm1.value.LeaveType[i].YearlyLimit}} </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"btnDiv\" *ngIf=\"this.Approve != 1 && serviceLeaves?.length != 0\">\r\n      <div class=\"lvBlsSubmitCls\" (click)=\"submitAlert('msg1')\">\r\n        <ion-label>Submit</ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Apply leaves -->\r\n  <div class=\"leave-container\" *ngIf=\"active2\">\r\n    <ion-card>\r\n      <form [formGroup]=\"submitForm2\">\r\n        <!----------------------------------------- Basic Data for Type 1 ----------------------------------------------->\r\n        <ion-grid class=\"user-grid\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-label>Leave Type<span class=\"lbl-color\">*</span></ion-label>\r\n\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"12\">\r\n                  <ion-select class=\"select select-style\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                    formControlName=\"LeaveTypeId\" (ionChange)=\"optionsFn($event);leaveCalculation()\">\r\n                    <ion-select-option [value]=\"item.LeaveTypeId\" *ngFor=\"let item of leaveTypeList\"> {{item.LeaveType}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['LeaveTypeId'].hasError('required') && (submitForm2.controls['LeaveTypeId'].dirty || submitForm2.controls['LeaveTypeId'].touched)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label>From Date<span class=\"lbl-color\">*</span></ion-label>\r\n\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"10\">\r\n                  <ion-datetime displayFormat=\"DD/MM/YYYY\" [min]=\"minFmDate\" [max]=\"maxFmDate\" placeholder=\"Select Date\"\r\n                    formControlName=\"from_date\" (ionChange)=\"autocalculate('from')\">\r\n                  </ion-datetime>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"2\" class=\"lv-calandar\">\r\n                  <div>\r\n                    <ion-icon name=\"calendar\"></ion-icon>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['from_date'].hasError('required') && (submitForm2.controls['from_date'].dirty || submitForm2.controls['from_date'].touched)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\"\r\n              *ngIf=\"this.submitForm2.value.LeaveTypeId != '' && this.submitForm2.value.LeaveTypeId != null && (this.submitForm2.value.LeaveTypeId == '2' || this.submitForm2.value.LeaveTypeId == '1')\">\r\n              <ion-label>Sessions<span class=\"lbl-color\">*</span></ion-label>\r\n\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"12\">\r\n                  <ion-select class=\"select select-style\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                    formControlName=\"session1\" (ionChange)=\"leaveCalculation()\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of sessionList\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['session1'].hasError('required') && (submitForm2.controls['session1'].dirty || submitForm2.controls['session1'].touched)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\" *ngIf=\"this.submitForm2.value.LeaveTypeId != '1'\">\r\n              <ion-label>To Date<span class=\"lbl-color\">*</span></ion-label>\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"10\">\r\n                  <ion-datetime displayFormat=\"DD/MM/YYYY\" [min]=\"minToDate\" [max]=\"maxToDate\" placeholder=\"Select Date\"\r\n                    formControlName=\"to_date\" (ionChange)=\"autocalculate('to')\">\r\n                  </ion-datetime>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"lv-calandar\">\r\n                  <div>\r\n                    <ion-icon name=\"calendar\"></ion-icon>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!-- {{submitForm2.invalid}}:invalid {{submitForm2.controls['to_date'].hasError('required')}} : required -->\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['to_date'].hasError('required') && (submitForm2.controls['to_date'].dirty || submitForm2.controls['to_date'].touched)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\"\r\n              *ngIf=\"this.submitForm2.value.LeaveTypeId != '' && this.submitForm2.value.LeaveTypeId != null && (this.submitForm2.value.LeaveTypeId == '2')\">\r\n              <ion-label>Sessions<span class=\"lbl-color\">*</span></ion-label>\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"12\">\r\n\r\n                  <ion-select class=\"select select-style\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                    formControlName=\"session2\" (ionChange)=\"leaveCalculation()\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of sessionList\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['session2'].hasError('required') && (submitForm2.controls['session2'].dirty || submitForm2.controls['session2'].touched)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          <ion-row\r\n            *ngIf=\"(this.submitForm2.value.LeaveTypeId == '6' || this.submitForm2.value.LeaveTypeId == '7' || this.submitForm2.value.LeaveTypeId == '8' || this.submitForm2.value.LeaveTypeId == '9' || this.submitForm2.value.LeaveTypeId == '10' || this.submitForm2.value.LeaveTypeId == '12' || this.submitForm2.value.LeaveTypeId == '16') && this.dayFinal > 3\">\r\n            <ion-col size=\"12\">\r\n              <ion-row>\r\n                <ion-label>Upload Required Document<span class=\"lbl-color\">*</span> </ion-label>\r\n                <div class=\"uploadDiv\">\r\n                  <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile($event)\"\r\n                    accept=\".pdf,image/png, image/jpg, image/jpeg\" />\r\n                </div>\r\n                <img *ngIf=\"image1 != '' && image1 != null && image1 != undefined\" src=\"{{image1}}\" class=\"img image\"\r\n                  width=\"50%\" height=\"50%\" (click)=\"viewImage('modal')\">\r\n              </ion-row>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['suptFile'].hasError('required') && (submitForm2.controls['suptFile'].dirty || submitForm2.controls['suptFile'].touched || submitForm2.controls['suptFile'].value == 0)\">\r\n                Field is required</p>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row\r\n            *ngIf=\"this.submitForm2.value.LeaveTypeId != '' && this.submitForm2.value.LeaveTypeId != '2' && this.submitForm2.value.LeaveTypeId != '3'\">\r\n            <ion-col size=\"12\">\r\n              <ion-label>Reason<span class=\"lbl-color\">*</span></ion-label>\r\n\r\n              <ion-row class=\"input-div\">\r\n                <ion-col size=\"12\">\r\n                  <ion-textarea placeholder=\"Enter Reason\" formControlName=\"reasonVal\"></ion-textarea>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['reasonVal'].hasError('required') && (submitForm2.controls['reasonVal'].dirty || submitForm2.controls['reasonVal'].touched)\">\r\n                Field is required</p>\r\n\r\n              <p class=\"error-message\"\r\n                *ngIf=\"submitForm2.controls['reasonVal'].hasError('pattern') && (submitForm2.controls['reasonVal'].dirty || submitForm2.controls['reasonVal'].touched)\">\r\n                Invalid Format</p>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-card>\r\n\r\n    <!-- leave days calculate panel -->\r\n    <ion-card>\r\n      <div>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-label style=\"font-size: 16px;margin-left: 6px;color:lightgray;\">No of leave days/permission :\r\n              {{dayFinal}}</ion-label>\r\n            <div class=\"btnDiv\">\r\n              <ion-button size=\"large\" class=\"aplLvSubmitCls\" (click)=\"saveApplyLeave()\">Submit</ion-button>\r\n            </div>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <div class=\"hisButtonCls\" (click)=\"goleaveHistory()\">\r\n                <ion-label>Leave History</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div class=\"lvBlsButtonCls\" (click)=\"goleaveBalance()\">\r\n                <ion-label>Leave Balance</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leave_leave_leave_module_ts-es2015.js.map