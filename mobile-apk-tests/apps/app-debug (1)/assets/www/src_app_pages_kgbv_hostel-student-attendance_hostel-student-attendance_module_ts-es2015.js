(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_kgbv_hostel-student-attendance_hostel-student-attendance_module_ts"],{

/***/ 23179:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/kgbv/hostel-student-attendance/hostel-student-attendance-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostelStudentAttendancePageRoutingModule": function() { return /* binding */ HostelStudentAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _hostel_student_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostel-student-attendance.page */ 46971);




const routes = [
    {
        path: '',
        component: _hostel_student_attendance_page__WEBPACK_IMPORTED_MODULE_0__.HostelStudentAttendancePage
    }
];
let HostelStudentAttendancePageRoutingModule = class HostelStudentAttendancePageRoutingModule {
};
HostelStudentAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HostelStudentAttendancePageRoutingModule);



/***/ }),

/***/ 12366:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/kgbv/hostel-student-attendance/hostel-student-attendance.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostelStudentAttendancePageModule": function() { return /* binding */ HostelStudentAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _hostel_student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostel-student-attendance-routing.module */ 23179);
/* harmony import */ var _hostel_student_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostel-student-attendance.page */ 46971);







let HostelStudentAttendancePageModule = class HostelStudentAttendancePageModule {
};
HostelStudentAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _hostel_student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.HostelStudentAttendancePageRoutingModule
        ],
        declarations: [_hostel_student_attendance_page__WEBPACK_IMPORTED_MODULE_1__.HostelStudentAttendancePage]
    })
], HostelStudentAttendancePageModule);



/***/ }),

/***/ 46971:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/kgbv/hostel-student-attendance/hostel-student-attendance.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionStatus": function() { return /* binding */ ConnectionStatus; },
/* harmony export */   "HostelStudentAttendancePage": function() { return /* binding */ HostelStudentAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_hostel_student_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hostel-student-attendance.page.html */ 90839);
/* harmony import */ var _hostel_student_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostel-student-attendance.page.scss */ 62245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);




















var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
    ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));
let HostelStudentAttendancePage = class HostelStudentAttendancePage {
    constructor(route, emisService, userService, alertService, cdr, fb, networkService, apiService, alertController, geolocation, locationAccuracy, androidPermissions, diagnostic, sqliteDB, plt, network) {
        this.route = route;
        this.emisService = emisService;
        this.userService = userService;
        this.alertService = alertService;
        this.cdr = cdr;
        this.fb = fb;
        this.networkService = networkService;
        this.apiService = apiService;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.sqliteDB = sqliteDB;
        this.plt = plt;
        this.network = network;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe('en-US');
        this.showCompanyDet = false;
        this.sessionSts = 1;
        this.stuMasterList = [];
        this.sesControl = 'attendance_fn';
        this.submitted1 = false;
        this.editSts = false;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(ConnectionStatus.Offline);
        this.userId = this.userService.emis_username();
        this.iat = this.userService.iat();
        this.plt.ready().then(() => {
            this.initializeNetworkEvents();
            let status = this.network.type != 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
            this.status.next(status);
        });
    }
    initializeNetworkEvents() {
        this.network.onDisconnect().subscribe(() => {
            if (this.status.getValue() == ConnectionStatus.Online) {
                this.updateNetworkStatus(ConnectionStatus.Offline);
            }
        });
        this.network.onConnect().subscribe(() => {
            if (this.status.getValue() == ConnectionStatus.Offline) {
                this.updateNetworkStatus(ConnectionStatus.Online);
            }
        });
    }
    updateNetworkStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.status.next(status);
            let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
            if (connection == 'Online') {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'You are now online. Kindly save the details first.',
                    buttons: ['OK'],
                    cssClass: 'custom-alert',
                });
                yield alert.present();
            }
        });
    }
    ngOnInit() {
        this.initializeContent();
    }
    onSync() {
        this.networkService.initializeNetworkEvents();
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            let query = 'DELETE FROM hostelStuAttendance';
            this.sqliteDB.executeQuery(query).then(res => {
                if (res) {
                    if (this.attendanceForm.value.visit_date) {
                        var visitDate = this.pipe.transform(new Date(this.attendanceForm.value.visit_date), 'yyyy-MM-dd');
                        this.checkLocalDB(visitDate, this.sessionSts);
                    }
                }
            });
        }
        else {
            this.alertService.warning('No internet connection');
        }
    }
    ionViewDidEnter() {
        this.initializeContent();
        this.askToTurnOnGPS();
        this.todayDate = this.pipe.transform(new Date(this.iat * 1000), 'yyyy-MM-dd');
        this.showCompanyDet = false;
        this.submitted1 = false;
        this.editSts = false;
    }
    checkAndRequestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // Check location permission status
            const status = yield this.diagnostic.getLocationAuthorizationStatus();
            if (status === this.diagnostic.permissionStatus.GRANTED) {
                // Permission is granted, proceed to get location
                this.getLatLong();
            }
            else {
                this.requestPermission();
            }
            // else if (status === this.diagnostic.permissionStatus.NOT_REQUESTED) {
            //   // Permission denied, request again
            //   this.requestPermission();
            // } else if (status === this.diagnostic.permissionStatus.DENIED_ALWAYS) {
            //   // Permission permanently denied, redirect to settings
            //   this.showSettingsAlert();
            // }
        });
    }
    requestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.diagnostic.requestLocationAuthorization();
                if (result === this.diagnostic.permissionStatus.GRANTED) {
                    this.getLatLong();
                }
                else {
                    this.showSettingsAlert();
                }
            }
            catch (error) {
                console.error('Error requesting location permission:', error);
            }
        });
    }
    showSettingsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Permission Required',
                message: 'Location access is required. Please enable it in your device settings.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.goHome();
                        },
                    },
                    {
                        text: 'Open Settings',
                        handler: () => {
                            this.goHome();
                            this.diagnostic.switchToSettings();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.latitude = this.locationCordinates.latitude;
            this.longitude = this.locationCordinates.longitude;
        }).catch((error) => {
            console.log(error, 'error location');
            this.geolocation;
            // this.requestGPSPermission();
        });
    }
    initializeContent() {
        this.attendanceForm = this.fb.group({
            studentList: this.fb.array([]),
            visit_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]
        });
    }
    goBack() {
        this.route.navigate(['/tabs/dashboard']);
    }
    selectVisitDate(event, sts) {
        this.showCompanyDet = false;
        this.sessionSts = sts;
        this.sesControl = (sts == 2) ? 'attendance_an' : 'attendance_fn';
        this.submitted1 = false;
        this.initializeContent();
        this.attendanceForm.controls.visit_date.setValue(event);
        if (event) {
            var visitDate = this.pipe.transform(new Date(event), 'yyyy-MM-dd');
            this.editSts = (visitDate == this.todayDate);
            this.checkLocalDB(visitDate, this.sessionSts);
        }
    }
    checkLocalDB(visitDate, sts) {
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            let sql = "SELECT * from hostelStuAttendance WHERE attendance_at = " + "'" + visitDate + "';";
            this.sqliteDB.executeQuery(sql).then(data => {
                if (data.rows.length > 0) {
                    this.stuMasterList = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        this.stuMasterList.push(data.rows.item(i));
                    }
                    this.attendanceForm.controls.studentList.setValue([]);
                    this.stuMasterList.forEach(element => {
                        this.addstudentList(element);
                    });
                    this.stuAttendCheck();
                    this.showCompanyDet = true;
                    setTimeout(() => {
                        const card1 = document.querySelector('.card1');
                        const card2 = document.querySelector('.card2');
                        if (card1 && card2) {
                            const card1Height = card1.offsetHeight;
                            card2.style.top = `${(card1Height / 2) + 12}%`;
                        }
                        const buttons = document.querySelectorAll('.tapButton');
                        buttons.forEach(btn => btn.classList.remove('zoomButton'));
                        var buttonType = sts == 1 ? 'fnButton' : 'anButton';
                        const element = document.getElementById(buttonType);
                        element.classList.add('zoomButton');
                    }, 100);
                }
                else {
                    let query = "DELETE FROM hostelStuAttendance WHERE attendance_at = " + "'" + visitDate + "';";
                    this.sqliteDB.executeQuery(query).then(res => {
                        if (res) {
                            this.emisService.hostelStuListGet(this.userId, visitDate).subscribe(res => {
                                if (res.dataStatus) {
                                    this.stuMasterList = res.result;
                                    if (this.stuMasterList.length > 0) {
                                        let sqlArray = [];
                                        this.attendanceForm.controls.studentList.setValue([]);
                                        this.stuMasterList.forEach(element => {
                                            sqlArray.push(['INSERT INTO hostelStuAttendance VALUES (?,?,?,?,?,?,?,?,?,?)',
                                                [null, element.student_id, element.name, element.user_id, element.class_studying_id, element.class_section,
                                                    element.attendance_an, element.attendance_fn, element.school_id, visitDate
                                                ]]);
                                            this.addstudentList(element);
                                        });
                                        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => { });
                                        this.stuAttendCheck();
                                        this.showCompanyDet = true;
                                        setTimeout(() => {
                                            const card1 = document.querySelector('.card1');
                                            const card2 = document.querySelector('.card2');
                                            if (card1 && card2) {
                                                const card1Height = card1.offsetHeight;
                                                card2.style.top = `${(card1Height / 2) + 12}%`;
                                            }
                                            const buttons = document.querySelectorAll('.tapButton');
                                            buttons.forEach(btn => btn.classList.remove('zoomButton'));
                                            var buttonType = sts == 1 ? 'fnButton' : 'anButton';
                                            const element = document.getElementById(buttonType);
                                            element.classList.add('zoomButton');
                                        }, 100);
                                    }
                                    else {
                                        this.alertService.warning("No data found");
                                    }
                                }
                                else {
                                    this.showCompanyDet = false;
                                    this.alertService.warning("No data found");
                                }
                            });
                        }
                        else {
                            this.alertService.error("There was some error! Please try again.");
                        }
                    });
                }
            });
        }
        else {
            let query = "SELECT * from hostelStuAttendance WHERE attendance_at = " + "'" + visitDate + "';";
            this.sqliteDB.executeQuery(query).then(data => {
                if (data.rows.length > 0) {
                    this.stuMasterList = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        this.stuMasterList.push(data.rows.item(i));
                    }
                    this.attendanceForm.controls.studentList.setValue([]);
                    this.stuMasterList.forEach(element => {
                        this.addstudentList(element);
                    });
                    this.stuAttendCheck();
                    this.showCompanyDet = true;
                    this.presentAlert("No internet connection. Information is being displayed from temporary data.");
                    setTimeout(() => {
                        const card1 = document.querySelector('.card1');
                        const card2 = document.querySelector('.card2');
                        if (card1 && card2) {
                            const card1Height = card1.offsetHeight;
                            card2.style.top = `${(card1Height / 2) + 12}%`;
                        }
                        const buttons = document.querySelectorAll('.tapButton');
                        buttons.forEach(btn => btn.classList.remove('zoomButton'));
                        var buttonType = sts == 1 ? 'fnButton' : 'anButton';
                        const element = document.getElementById(buttonType);
                        element.classList.add('zoomButton');
                    }, 100);
                }
                else {
                    this.alertService.warning("No data found");
                }
            });
        }
    }
    zoomButton(event, session) {
        var checkSave = true;
        if (session == 2 && this.editSts) {
            var checkList = this.attendanceForm.value.studentList.filter(x => x.attendance_fn == null || !x.attendance_fn);
            checkSave = checkList.length > 0 ? false : true;
        }
        else {
            checkSave = true;
        }
        if (checkSave) {
            // Remove the 'zoomed' class from all buttons
            // const buttons = document.querySelectorAll('.tapButton');
            // buttons.forEach(btn => btn.classList.remove('zoomButton'));
            // // Add the 'zoomed' class to the clicked button
            // event.target.classList.add('zoomButton');
            this.sessionChange(session);
        }
        else {
            this.alertService.warning('Please save the FN details');
        }
    }
    sessionChange(session) {
        this.sessionSts = session;
        this.submitted1 = false;
        this.selectVisitDate(this.attendanceForm.value.visit_date, session);
    }
    markStatus(index, status) {
        this.attendanceForm.controls.studentList['controls'][index].controls[this.sesControl].setValue(status);
    }
    get studentList() {
        return this.attendanceForm.get("studentList");
    }
    addstudentList(stuDet) {
        this.studentList.push(this.fb.group({
            'id': [stuDet.id],
            'name': [stuDet.name],
            'student_id': [stuDet.student_id],
            'user_id': [stuDet.user_id],
            'school_id': [stuDet.school_id],
            'class_studying_id': [stuDet.class_studying_id],
            'class_section': [stuDet.class_section],
            'attendance_at': [this.todayDate],
            'attendance_fn': [stuDet.attendance_fn],
            'attendance_an': [stuDet.attendance_an],
            'action_by': [this.userId],
            'an_action_at': [new Date()],
            'fn_action_at': [new Date()],
            'an_latitude': [this.latitude],
            'an_longitude': [this.longitude],
            'fn_latitude': [this.latitude],
            'fn_longitude': [this.longitude],
        }));
    }
    clearStudentList() {
        this.studentList.clear(); // Removes all the controls from the FormArray
    }
    checkGPSPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                this.askToTurnOnGPS();
            }
            else {
                this.requestGPSPermission();
            }
        }, err => {
            // console.log("err=", err);
            // alert(err);
        });
    }
    askToTurnOnGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((i) => {
            this.checkAndRequestPermission();
        }, error => {
            this.alertService.alertToTurnOnPermission('Location', 'Location');
            this.checkGPSPermission();
        });
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then((i) => {
                    this.askToTurnOnGPS();
                }, error => {
                    this.alertService.alertWhite('To get current location please turn on device location');
                });
            }
        });
    }
    stuAttendCheck() {
        (this.attendanceForm.value.studentList).forEach((element, i) => {
            if (this.sessionSts == 1) {
                this.attendanceForm.controls.studentList['controls'][i].controls['attendance_fn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.attendanceForm.controls.studentList['controls'][i].controls['attendance_an'].setValidators(null);
            }
            else {
                this.attendanceForm.controls.studentList['controls'][i].controls['attendance_fn'].setValidators(null);
                this.attendanceForm.controls.studentList['controls'][i].controls['attendance_an'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            }
            this.attendanceForm.controls.studentList['controls'][i].controls['attendance_fn'].updateValueAndValidity();
            this.attendanceForm.controls.studentList['controls'][i].controls['attendance_an'].updateValueAndValidity();
        });
    }
    submitForm() {
        this.submitted1 = true;
        if (this.attendanceForm.valid) {
            var stuAttdData = [];
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                (this.attendanceForm.value.studentList).forEach(element => {
                    stuAttdData.push({
                        'student_id': element['student_id'],
                        'school_id': element['school_id'],
                        'attendance_at': this.attendanceForm.value.visit_date,
                        'attendance_fn': this.sessionSts == 1 ? element['attendance_fn'] : '',
                        'attendance_an': this.sessionSts == 2 ? element['attendance_an'] : '',
                        'action_by': this.userId,
                        'fn_action_at': this.sessionSts == 1 ? new Date() : '',
                        'an_action_at': this.sessionSts == 2 ? new Date() : '',
                        'fn_latitude': this.sessionSts == 1 ? this.latitude : '',
                        'fn_longitude': this.sessionSts == 1 ? this.longitude : '',
                        'an_latitude': this.sessionSts == 2 ? this.latitude : '',
                        'an_longitude': this.sessionSts == 2 ? this.longitude : '',
                    });
                });
                var data = {
                    records: {
                        'stuAttendance': stuAttdData
                    }
                };
                this.emisService.hostelStuAttUpt(data).subscribe(res => {
                    if (res.dataStatus) {
                        this.alertService.success(res.message);
                        let visitDate = this.pipe.transform(new Date(this.attendanceForm.value.visit_date), 'yyyy-MM-dd');
                        let query = "DELETE FROM hostelStuAttendance WHERE attendance_at = " + "'" + visitDate + "';";
                        this.sqliteDB.executeQuery(query).then(res => {
                            if (res) {
                                let sqlArray = [];
                                (this.attendanceForm.value.studentList).forEach(element => {
                                    sqlArray.push(['INSERT INTO hostelStuAttendance VALUES (?,?,?,?,?,?,?,?,?,?)',
                                        [null, element.student_id, element.name, element.user_id, element.class_studying_id, element.class_section,
                                            element.attendance_an, element.attendance_fn, element.school_id, visitDate
                                        ]]);
                                });
                                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                                    this.sessionChange(this.sessionSts);
                                });
                            }
                        });
                    }
                    else {
                        this.alertService.error(res.message);
                    }
                });
            }
            else {
                let visitDate = this.pipe.transform(new Date(this.attendanceForm.value.visit_date), 'yyyy-MM-dd');
                let query = "DELETE FROM hostelStuAttendance WHERE attendance_at = " + "'" + visitDate + "';";
                this.sqliteDB.executeQuery(query).then(res => {
                    if (res) {
                        let sqlArray = [];
                        (this.attendanceForm.value.studentList).forEach(element => {
                            sqlArray.push(['INSERT INTO hostelStuAttendance VALUES (?,?,?,?,?,?,?,?,?,?)',
                                [null, element.student_id, element.name, element.user_id, element.class_studying_id, element.class_section,
                                    element.attendance_an, element.attendance_fn, element.school_id, visitDate
                                ]]);
                        });
                        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                            this.presentAlert("Your data has been saved temporarily. Kindly connect to the internet and save the details again.");
                            this.sessionChange(this.sessionSts);
                        });
                    }
                });
            }
        }
        else {
            this.alertService.warning('Please fill all the fields');
        }
    }
    goHome() {
        this.route.navigate(['/tabs/kgbv-hostel']);
    }
    presentAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: msg,
                buttons: ['OK'],
                cssClass: 'custom-alert',
            });
            yield alert.present();
        });
    }
};
HostelStudentAttendancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_12__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__.LocationAccuracy },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Network }
];
HostelStudentAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-hostel-student-attendance',
        template: _raw_loader_hostel_student_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hostel_student_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HostelStudentAttendancePage);



/***/ }),

/***/ 62245:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/kgbv/hostel-student-attendance/hostel-student-attendance.page.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory::after {\n  content: \" *\";\n  color: red;\n}\n\n.navcolor {\n  color: var(--ion-color-primary);\n}\n\n.cardHeader {\n  background: #e7e7e7;\n  padding: 20px;\n  border-radius: 10px 10px 0 0;\n}\n\n.card-container {\n  position: relative;\n  width: 100%;\n}\n\n.card {\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.card1 {\n  background: var(--ion-color-primary);\n  font-weight: bold;\n  color: white;\n  z-index: 1;\n  border-radius: 0;\n  padding: 0 20px;\n  padding-bottom: 20px;\n}\n\n.card2 {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 93vw;\n  /* Slightly smaller than the first card */\n  z-index: 2;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n\n/* Pseudo-element to create space */\n\n.card2::after {\n  content: \"\";\n  display: block;\n  height: 50px;\n  /* Adjust height for the space you want */\n  background-color: transparent;\n  /* Optional: you can set a background color */\n  position: absolute;\n  bottom: -30px;\n  /* Move it below the card */\n  left: 0;\n  right: 0;\n}\n\n.flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flexLeft {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.gridLeft {\n  display: grid;\n  justify-content: left;\n  align-items: center;\n}\n\n.flexRight {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n}\n\n.dropdown {\n  border: 1px solid #e7e7e7;\n  border-radius: 5px;\n}\n\n.tapButton {\n  width: 100%;\n  --background: #e7e7e7;\n  --color: var(--ion-color-primary);\n  padding: 0 2vw;\n}\n\n.zoomButton {\n  transform: scale(1.2);\n  border-radius: 5px;\n  --background: var(--ion-color-primary);\n  --color: #e7e7e7;\n  padding: 0 1.5vw;\n}\n\n.presentButton {\n  --background: #e7e7e7;\n  --color: green;\n  width: 35%;\n  height: 2em;\n}\n\n.absentButton {\n  --background: #e7e7e7;\n  --color: red;\n  padding-left: 1px;\n  width: 35%;\n  height: 2em;\n}\n\n.onPreButton {\n  --background: green;\n  --color: white;\n  width: 35%;\n  height: 2em;\n}\n\n.onAbsentButton {\n  --background: red;\n  --color: white;\n  padding-left: 1px;\n  width: 35%;\n  height: 2em;\n}\n\n.table-row {\n  border: 1px solid #ccc;\n}\n\n.table-cell {\n  padding: 5px;\n  border-right: 1px solid #ccc;\n}\n\n.table-cell:last-child {\n  border-right: none;\n}\n\n.d-none {\n  display: none;\n}\n\n.fileIcons {\n  font-size: 2.5rem;\n  cursor: pointer;\n}\n\n.cancelIcon {\n  font-size: 2rem;\n  color: red;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.inputText {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3RlbC1zdHVkZW50LWF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtBQUFKOztBQUdBLG1DQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQWMseUNBQUE7RUFDZCw2QkFBQTtFQUErQiw2Q0FBQTtFQUMvQixrQkFBQTtFQUNBLGFBQUE7RUFBZSwyQkFBQTtFQUNmLE9BQUE7RUFDQSxRQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoiaG9zdGVsLXN0dWRlbnQtYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiAqXCI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmF2Y29sb3Ige1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XHJcbn1cclxuXHJcbi5jYXJkSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZDEge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhcmQyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGJvdHRvbTogLTE3dmg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogOTN2dztcclxuICAgIC8qIFNsaWdodGx5IHNtYWxsZXIgdGhhbiB0aGUgZmlyc3QgY2FyZCAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMC4yLCAwLjIsIDAuMik7XHJcbn1cclxuXHJcbi8qIFBzZXVkby1lbGVtZW50IHRvIGNyZWF0ZSBzcGFjZSAqL1xyXG4uY2FyZDI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNTBweDsgLyogQWRqdXN0IGhlaWdodCBmb3IgdGhlIHNwYWNlIHlvdSB3YW50ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogT3B0aW9uYWw6IHlvdSBjYW4gc2V0IGEgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzBweDsgLyogTW92ZSBpdCBiZWxvdyB0aGUgY2FyZCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmxleENlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleExlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkTGVmdHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleFJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YXBCdXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xyXG4gICAgcGFkZGluZzogMCAydnc7XHJcbn1cclxuXHJcbi56b29tQnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcclxuICAgIC0tY29sb3I6ICNlN2U3ZTc7XHJcbiAgICBwYWRkaW5nOiAwIDEuNXZ3XHJcbn1cclxuXHJcbi5wcmVzZW50QnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIC0tY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4uYWJzZW50QnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIC0tY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4ub25QcmVCdXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4ub25BYnNlbnRCdXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4udGFibGUtcm93IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50YWJsZS1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50YWJsZS1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uZC1ub25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGVJY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FuY2VsSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0VGV4dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ 90839:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/kgbv/hostel-student-attendance/hostel-student-attendance.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goHome()\">\r\n      <ion-icon name=\"arrow-back\" >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\" style=\"margin-left: 5px;\">Hostel Student Attendance</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"attendanceForm\">\r\n    <div class=\"cardDesign\">\r\n      <div class=\"card-container\">\r\n        <div class=\"card card1\">\r\n          <ion-row>\r\n            <ion-col size=\"1\"></ion-col>\r\n            <ion-col size=\"10\">\r\n              <div class=\"flexCenter\">\r\n                <div style=\"margin: 10px 0;\">\r\n                  <div style=\"text-align: center;\"><ion-label class=\"mandatory\">Select Date</ion-label></div>\r\n                  <div style=\"background: white; margin: 10px 0; color: black; font-weight: 100; border-radius: 5px;\">\r\n                    <ion-row class=\"input-div\">\r\n                      <ion-col size=\"2\" class=\"flexCenter\">\r\n                        <div style=\"padding-left: 15px;\">\r\n                          <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"10\" style=\"font-weight: 500;\">\r\n                        <ion-datetime displayFormat=\"DD/MM/YYYY\" [max]=\"todayDate\" placeholder=\"Select Date\"\r\n                          (ionChange)=\"selectVisitDate($event.target.value, 1)\" formControlName=\"visit_date\">\r\n                        </ion-datetime>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"1\"></ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"card card2\" *ngIf=\"showCompanyDet\">\r\n          <!-- <div class=\"cardHeader\">\r\n            <h4 style=\"margin: 0; text-align: center;\" class=\"navcolor\">{{industryName}}</h4>\r\n            <p style=\"text-align: center; margin-bottom: 5px;\">{{industryAddress}}</p>\r\n          </div> -->\r\n\r\n          <div style=\"padding: 20px;\">\r\n            <ion-row style=\"margin-top: 0.5em;\">\r\n              <ion-col size=\"12\">\r\n                <div style=\"margin-bottom: 5px;\">\r\n                  <ion-label class=\"mandatory\"><b>Select Session</b></ion-label>\r\n                  <ion-text color=\"danger\" style=\"font-size: 10px;\"> (Before you switch the session, please save the current \r\n                    session details first)</ion-text>\r\n                </div>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-button id=\"fnButton\" class=\"tapButton zoomButton\" (click)=\"zoomButton($event, 1)\">FN</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <ion-button id=\"anButton\" class=\"tapButton\" (click)=\"zoomButton($event, 2)\">AN</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\">\r\n                <div style=\"text-align: center; margin-bottom: 5px;\"><ion-label class=\"mandatory\">\r\n                  <b>Student List</b></ion-label></div>\r\n                <div formArrayName=\"studentList\" *ngFor=\"let item of studentList.controls; let i = index;\">\r\n                  <ion-row [formGroupName]=\"i\" class=\"table-row\">\r\n                      <ion-col size=\"1\" class=\"table-cell flexCenter\"> {{i+1}} </ion-col>\r\n                      <ion-col size=\"7\" class=\"table-cell gridLeft\" style=\"font-size: 14px;\">\r\n                        <div><span>{{item.value.name}} - {{item.value.user_id}} \r\n                          ({{item.value.class_studying_id}} - {{item.value.class_section}})</span></div>\r\n                        <ion-text color=\"danger\" style=\"font-size: 10px;\" \r\n                        *ngIf=\"(item.controls.attendance_fn.errors && (submitted1 || item.controls.attendance_fn.touched)) || \r\n                        (item.controls.attendance_an.errors && (submitted1 || item.controls.attendance_an.touched))\">\r\n                        Mark the attendance</ion-text>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\" class=\"table-cell flexCenter\">\r\n                        <ion-button [ngClass]=\"{'presentButton' : item.value[sesControl] != 1, 'onPreButton' : item.value[sesControl] == 1 }\" \r\n                        (click)=\"editSts ? markStatus(i, '1') : ''\">P</ion-button>\r\n                        <ion-button [ngClass]=\"{'absentButton' : item.value[sesControl] != 2, 'onAbsentButton' : item.value[sesControl] == 2 }\"\r\n                        (click)=\"editSts ? markStatus(i, '2') : ''\">A</ion-button>\r\n                      </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"text-center\" style=\"margin-top: 5px\" *ngIf=\"editSts\">\r\n                <ion-button (click)=\"submitForm()\" color=\"success\">Save</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_kgbv_hostel-student-attendance_hostel-student-attendance_module_ts-es2015.js.map