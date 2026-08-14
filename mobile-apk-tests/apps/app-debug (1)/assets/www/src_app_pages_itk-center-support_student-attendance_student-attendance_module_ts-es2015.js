(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_student-attendance_student-attendance_module_ts"],{

/***/ 22563:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/student-attendance/student-attendance-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAttendancePageRoutingModule": function() { return /* binding */ StudentAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-attendance.page */ 35118);




const routes = [
    {
        path: '',
        component: _student_attendance_page__WEBPACK_IMPORTED_MODULE_0__.StudentAttendancePage
    }
];
let StudentAttendancePageRoutingModule = class StudentAttendancePageRoutingModule {
};
StudentAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentAttendancePageRoutingModule);



/***/ }),

/***/ 88203:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/student-attendance/student-attendance.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAttendancePageModule": function() { return /* binding */ StudentAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-attendance-routing.module */ 22563);
/* harmony import */ var _student_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-attendance.page */ 35118);







let StudentAttendancePageModule = class StudentAttendancePageModule {
};
StudentAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentAttendancePageRoutingModule
        ],
        declarations: [_student_attendance_page__WEBPACK_IMPORTED_MODULE_1__.StudentAttendancePage]
    })
], StudentAttendancePageModule);



/***/ }),

/***/ 35118:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/student-attendance/student-attendance.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAttendancePage": function() { return /* binding */ StudentAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-attendance.page.html */ 78605);
/* harmony import */ var _student_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-attendance.page.scss */ 60441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ 9463);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-angular */ 550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);











const submitAttendance = apollo_angular__WEBPACK_IMPORTED_MODULE_6__.gql `
mutation createEITKATTENDANCE($createeattendanceinput: CreateEITKATTENDANCEInput!) {
  createEITKATTENDANCE(input: $createeattendanceinput) {
    ATT_PK
    ATT_SK
    CLASS
    SECTION
    PRST_ABST
    UDISE_CODE
    LAT
    LOG
    EDate
    EUser
  }
}
`;
const status = apollo_angular__WEBPACK_IMPORTED_MODULE_6__.gql `
mutation createEITKAttendanceMon($createeattendmoninput:
  CreateEITKAttendanceMonInput!) {
    createEITKAttendanceMon(input: $createeattendmoninput) {
      EITKM_PK
      EITKM_SK
      EDate
      EUser
      ETotal
    }
  }
`;
let StudentAttendancePage = class StudentAttendancePage {
    constructor(route, emisService, alertService, router, usersessionService, apollo, geolocation) {
        this.route = route;
        this.emisService = emisService;
        this.alertService = alertService;
        this.router = router;
        this.usersessionService = usersessionService;
        this.apollo = apollo;
        this.geolocation = geolocation;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
    }
    ngOnInit() {
        this.getLatLong();
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            let locationCordinates = resp.coords;
            this.lat = locationCordinates.latitude;
            this.long = locationCordinates.longitude;
        }).catch((error) => {
            // console.log('Error getting location', error);
        });
    }
    ionViewDidEnter() {
        debugger;
        this.studentList = [];
        this.routeData = this.route.snapshot;
        if (this.route.snapshot.paramMap.get('details') == 'volunteer') {
            this.volunteerDetails = JSON.parse(this.route.snapshot.paramMap.get('data'));
        }
        else {
            this.inspectionDetails = JSON.parse(this.route.snapshot.paramMap.get('data'));
        }
        this.paramsVolunteerId = this.routeData.params.volunteerId;
        this.paramsSearchTxt = this.routeData.params.searchTxt;
        this.todayDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        // this.todayDate = '03-02-2022';
        this.sessionUDISE = this.usersessionService.udise_code();
        this.sessionUserName = this.usersessionService.emis_username();
        this.sesssionEmisUserType = this.usersessionService.emis_usertype();
        this.getStudentList();
    }
    getStudentList() {
        debugger;
        this.emisService.getStduentList(this.paramsVolunteerId).subscribe((res) => {
            if (res && res.dataStatus) {
                this.noData = false;
                this.studentsList = res.result;
                this.studentListFilter(this.studentsList);
            }
            else {
                this.noData = true;
            }
        });
    }
    studentListFilter(studentsList) {
        this.maleStudentList = studentsList.filter(tt => tt.Gender == '1');
        this.maleStudentList.sort((a, b) => {
            if (a.Name < b.Name)
                return -1;
            if (a.Name > b.Name)
                return 1;
            return 0;
        });
        this.femaleStudentList = studentsList.filter(tt => tt.Gender == '2');
        this.femaleStudentList.sort((a, b) => {
            if (a.Name < b.Name)
                return -1;
            if (a.Name > b.Name)
                return 1;
            return 0;
        });
        this.studentList = [...this.maleStudentList, ...this.femaleStudentList];
        this.totalStudent = studentsList.length;
        let boy = studentsList.filter(tt => tt.Gender == '1');
        this.totalBoys = boy.length;
        let girl = studentsList.filter(tt => tt.Gender == '2');
        this.totalGirls = girl.length;
    }
    attendanceStatusChange(student, status) {
        if (status == 'P') {
            student.present = "1";
        }
        else if (status == 'A') {
            student.present = "2";
        }
        else {
            student.present = "3";
        }
    }
    saveAttendance(studentList) {
        debugger;
        this.len = studentList.length;
        this.dataLen = studentList.length - 1;
        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].present == 2 || studentList[i].present == 3) {
                this.present = studentList[i].present;
            }
            else {
                this.present = 1;
            }
            this.apollo.use('endpoint3')
                .mutate({
                mutation: submitAttendance,
                variables: {
                    createeattendanceinput: {
                        ATT_PK: 'ITKSUP#SCH#' + studentList[i].SchlId + '#' + this.sessionUserName,
                        ATT_SK: 'ITKSUP#' + this.todayDate + '#' + 1 + '#' + studentList[i].UniqueId,
                        CLASS: studentList[i].StudyingId,
                        SECTION: studentList[i].ClassSection,
                        PRST_ABST: this.present,
                        UDISE_CODE: studentList[i].UdiseCode,
                        LAT: this.lat,
                        LOG: this.long,
                        EDate: this.todayDate,
                        EUser: this.sessionUserName + '#' + studentList[0].VoluId
                    }
                }
            }).subscribe(({ data }) => {
                if (this.dataLen == i) {
                    this.alertService.success("Student Attendance Stored Successfully");
                    this.saveStudentStatus(this.len, studentList[0].VoluId);
                }
            });
        }
    }
    saveStudentStatus(data, volunId) {
        debugger;
        let len = data;
        this.apollo.use('endpoint4')
            .mutate({
            mutation: status,
            variables: {
                createeattendmoninput: {
                    EITKM_PK: 'ITKSUP#' + this.sessionUserName + '#' + this.todayDate,
                    EITKM_SK: volunId,
                    EDate: this.todayDate,
                    EUser: this.sessionUserName,
                    ETotal: len
                }
            }
        }).subscribe(({ data }) => {
            this.alertService.success("Student Attendance Status Stored Successfully");
            this.router.navigate(['tabs/dashboard']);
        });
    }
    saveAttendances() {
        this.router.navigate(['/tabs/teacher/volunteer-inspection', { details: "volunteer", data: JSON.stringify(this.volunteerDetails) }]);
    }
    navigateBack() {
        this.router.navigate(['/tabs/teacher/volunteer-inspection', { searchTxt: this.paramsSearchTxt, volunteerId: this.paramsVolunteerId }]);
    }
};
StudentAttendancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_5__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_9__.Apollo },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation }
];
StudentAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-student-attendance',
        template: _raw_loader_student_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentAttendancePage);



/***/ }),

/***/ 60441:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/student-attendance/student-attendance.page.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.line {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\n.card-class {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.name {\n  font-size: 15px;\n  color: var(--ion-color-primary);\n}\n\n.tamilname {\n  font-size: 14px;\n  color: gray;\n  white-space: pre-line;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.btn-present {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 20px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.btn-na {\n  width: 35px;\n  height: 45px;\n  font-weight: bold;\n  font-size: 16px;\n  --background:black !important;\n  color: #fff;\n}\n\nion-label {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBRUcsa0JBQUE7RUFDQSxrQkFBQTtBQUdMOztBQUFFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtBQUtKOztBQUZFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUlOOztBQUZFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUFJTjs7QUFGRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBSU47O0FBRkU7RUFDRSxxQkFBQTtBQUtKIiwiZmlsZSI6InN0dWRlbnQtYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zdWItaGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmxpbmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWFhYmI7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweFxyXG4gIH1cclxuICAuY2FyZC1jbGFzc1xyXG4gIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgfVxyXG4gXHJcbiAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAudGFtaWxuYW1lIHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtbGluZVxyXG4gIH1cclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByZXNlbnRcclxuICB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgXHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLWFic2VudFxyXG4gIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6I2Y4MjMzOSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICAuYnRuLW5hXHJcbiAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDpibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlLWxpbmVcclxuICB9Il19 */");

/***/ }),

/***/ 78605:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/student-attendance/student-attendance.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"navigateBack()\">\r\n      <ion-icon name=\"arrow-back\" >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Student Attendance</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"navigateBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Student Attendance</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content class=\"graybackgrond\">\r\n<!-- <ion-row>\r\n  <ion-col size=\"12\" class=\"head\"> Date</ion-col>\r\n  <ion-col size=\"12\" class=\"sub-head\"> {{todayDate}}</ion-col>\r\n  <ion-col size=\"12\">\r\n    <div class=\"line\"></div>\r\n  </ion-col>\r\n</ion-row> -->\r\n\r\n<ion-row *ngIf=\"!noData\">\r\n  <ion-col size=\"4\" class=\"head\"> Total</ion-col>\r\n  <ion-col size=\"4\" class=\"head\"> Boys</ion-col>\r\n  <ion-col size=\"4\" class=\"head\"> Girls</ion-col>\r\n  <ion-col size=\"4\" class=\"sub-head\"> {{totalStudent}}</ion-col>\r\n  <ion-col size=\"4\" class=\"sub-head\"> {{totalBoys}}</ion-col>\r\n  <ion-col size=\"4\" class=\"sub-head\"> {{totalGirls}}</ion-col>\r\n  <ion-col size=\"12\">\r\n    <div class=\"line\"></div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"noData\">\r\n  <ion-col size=\"12\" class=\"head\"> No Data Found</ion-col>\r\n</ion-row>\r\n\r\n<ion-row>\r\n  <ion-col size=\"12\">\r\n    <ion-card class=\"card-class\" *ngFor=\"let student of studentList\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar class=\"avatar\">\r\n          <img src=\"{{student.Gender== '1'?'../../assets/icons/attendance/boy.svg':'../../assets/icons/attendance/girl.svg'}}\">\r\n        </ion-avatar>\r\n        <ion-label *ngIf=\"student.Gender== '1'\">\r\n          <p class=\"primary name\" class=\"name\">{{student.Name}}</p>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"student.Gender== '2'\">\r\n          <p style=\"color:maroon\" class=\"name\">{{student.Name}}</p>\r\n        </ion-label>\r\n          <a href=\"tel:{{student.PhoneNo}}\" style=\"margin: auto;outline: none;\">\r\n        <ion-icon name=\"call\" class=\"green\"></ion-icon>\r\n        </a>\r\n        <div class=\"button\">\r\n          <ion-button *ngIf=\"student.present == '1' || student.present == null\" class=\"btn-present\" (click)=\"attendanceStatusChange(student,'A')\">P</ion-button>\r\n          <ion-button *ngIf=\"student.present == '2'\" class=\"btn-absent\" (click)=\"attendanceStatusChange(student,'NA')\">A</ion-button>\r\n          <ion-button *ngIf=\"student.present == '3'\" class=\"btn-na\" (click)=\"attendanceStatusChange(student,'P')\">NA</ion-button>\r\n        </div>\r\n      \r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-bckclr\" (click)=\"saveAttendance(studentList)\" >\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\">\r\n      Save\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>\r\n\r\n\r\n<!-- <ion-footer class=\"footer-bckclr\" (click)=\"saveAttendances()\" >\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\">\r\n      Save & Start Inspection\r\n    </ion-label>\r\n  </div>\r\n</ion-footer> -->\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_itk-center-support_student-attendance_student-attendance_module_ts-es2015.js.map