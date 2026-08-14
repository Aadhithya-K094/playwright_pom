(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts"],{

/***/ 94002:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryAttendancePageRoutingModule": function() { return /* binding */ SummaryAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _summary_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-attendance.page */ 89871);




const routes = [
    {
        path: '',
        component: _summary_attendance_page__WEBPACK_IMPORTED_MODULE_0__.SummaryAttendancePage
    }
];
let SummaryAttendancePageRoutingModule = class SummaryAttendancePageRoutingModule {
};
SummaryAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SummaryAttendancePageRoutingModule);



/***/ }),

/***/ 98528:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryAttendancePageModule": function() { return /* binding */ SummaryAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _summary_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-attendance-routing.module */ 94002);
/* harmony import */ var _summary_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-attendance.page */ 89871);







let SummaryAttendancePageModule = class SummaryAttendancePageModule {
};
SummaryAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summary_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummaryAttendancePageRoutingModule
        ],
        declarations: [_summary_attendance_page__WEBPACK_IMPORTED_MODULE_1__.SummaryAttendancePage]
    })
], SummaryAttendancePageModule);



/***/ }),

/***/ 89871:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryAttendancePage": function() { return /* binding */ SummaryAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_summary_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./summary-attendance.page.html */ 57806);
/* harmony import */ var _summary_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-attendance.page.scss */ 57485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);












const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.api_url;
let SummaryAttendancePage = class SummaryAttendancePage {
    constructor(navCtrl, alertCtrl, router, userService, usersessionService, emisService, alertService, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.emisService = emisService;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.hideData = true;
        this.user_Id = this.usersessionService.emis_username();
    }
    ngOnInit() {
        this.hideData = true;
        this.yearList = [
            // {'label':'2022',value:2022},
            { 'label': '2023', value: 2023 },
            { 'label': '2024', value: 2024 },
            { 'label': '2025', value: 2025 },
        ];
        this.monthList = [
            { 'label': 'Janauary', value: 1 },
            { 'label': 'February', value: 2 },
            { 'label': 'March', value: 3 },
            { 'label': 'April', value: 4 },
            { 'label': 'May', value: 5 },
            { 'label': 'June', value: 6 },
            { 'label': 'July', value: 7 },
            { 'label': 'August', value: 8 },
            { 'label': 'September', value: 9 },
            { 'label': 'October', value: 10 },
            { 'label': 'November', value: 11 },
            { 'label': 'December', value: 12 },
        ];
        this.getDistrictslist();
    }
    ionViewDidEnter() {
        this.hideData = true;
        this.teacherList = [];
        this.districtId = null;
        this.yearId = null;
        this.monthId = null;
        this.getDistrictslist();
    }
    navigateBack() {
        if (this.hideData == false) {
            this.hideData = true;
        }
        else {
            this.router.navigate(['/tabs/stem-dashboard']);
        }
    }
    getDistrictslist() {
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                this.totalcountry = data.state.map(l => { return { label: l.state_name, value: l.state_code }; });
                this.totalDistricts = data.district.map(l => { return { label: l.district_name, value: l.disid }; });
                this.totalDistricts.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
                console.log(this.totalDistricts, this.user_Id);
                this.finalDist = [];
                for (let i = 0; i < this.totalDistricts.length; i++) {
                    if ((this.user_Id == 4033185) && (this.totalDistricts[i].label == 'ARIYALUR' || this.totalDistricts[i].label == 'CUDDALORE' || this.totalDistricts[i].label == 'KALLAKURICHI' || this.totalDistricts[i].label == 'MAYILADUTHURAI' || this.totalDistricts[i].label == 'NAGAPATTINAM' ||
                        this.totalDistricts[i].label == 'PERAMBALUR' || this.totalDistricts[i].label == 'PUDUKKOTTAI' || this.totalDistricts[i].label == 'THANJAVUR' || this.totalDistricts[i].label == 'TIRUCHIRAPPALLI' || this.totalDistricts[i].label == 'TIRUVARUR' || this.totalDistricts[i].label == 'VILLUPURAM')) {
                        this.finalDist.push(this.totalDistricts[i]);
                    }
                    if ((this.user_Id == 4033184) && (this.totalDistricts[i].label == 'COIMBATORE' || this.totalDistricts[i].label == 'DHARMAPURI' || this.totalDistricts[i].label == 'ERODE' || this.totalDistricts[i].label == 'KRISHNAGIRI' || this.totalDistricts[i].label == 'NAMAKKAL' || this.totalDistricts[i].label == 'SALEM' ||
                        this.totalDistricts[i].label == 'THE NILGIRIS' || this.totalDistricts[i].label == 'TIRUPPUR')) {
                        this.finalDist.push(this.totalDistricts[i]);
                    }
                    if ((this.user_Id == 4033186) && (this.totalDistricts[i].label == 'DINDIGUL' || this.totalDistricts[i].label == 'KANNIYAKUMARI' || this.totalDistricts[i].label == 'KARUR' || this.totalDistricts[i].label == 'MADURAI' || this.totalDistricts[i].label == 'RAMANATHAPURAM' || this.totalDistricts[i].label == 'SIVAGANGAI' ||
                        this.totalDistricts[i].label == 'TENKASI' || this.totalDistricts[i].label == 'THENI' || this.totalDistricts[i].label == 'THOOTHUKKUDI' || this.totalDistricts[i].label == 'TIRUNELVELI' || this.totalDistricts[i].label == 'VIRUDHUNAGAR')) {
                        this.finalDist.push(this.totalDistricts[i]);
                    }
                    if ((this.user_Id == 4033187) && (this.totalDistricts[i].label == 'CHENGALPATTU' || this.totalDistricts[i].label == 'CHENNAI (EXT. GCC)' || this.totalDistricts[i].label == 'KANCHEEPURAM' || this.totalDistricts[i].label == 'RANIPET' || this.totalDistricts[i].label == 'TIRUPATHUR' || this.totalDistricts[i].label == 'TIRUVALLUR' ||
                        this.totalDistricts[i].label == 'TIRUVANNAMALAI' || this.totalDistricts[i].label == 'VELLORE')) {
                        this.finalDist.push(this.totalDistricts[i]);
                    }
                }
            }
        });
        this.getData();
    }
    getData() {
        this.attendanceData = [];
        this.emisService.StemRpAttendenceSts().subscribe(res => {
            if (res.dataStatus) {
                this.attendanceData = res.result;
            }
        });
    }
    selectdistrict(event) {
        this.districtId = event.target.value;
        this.yearId = null;
        this.monthId = null;
        this.attendancedistData = this.attendanceData.filter((a) => parseInt(a.district_id) == this.districtId);
    }
    selectyear(event) {
        this.yearId = event.target.value;
        this.monthId = null;
        this.attendanceyearData = this.attendancedistData.filter((a) => parseInt(a.Year) == this.yearId);
    }
    selectmonth(event) {
        this.dataList = [];
        this.hideData = true;
        this.monthId = event.target.value;
        let url = 'https://d1wpyxz35bzzz4.cloudfront.net/rp_daily_status_dist_id_' + this.districtId + '.json';
        this.http.get(url).subscribe((data) => {
            // Merge the columns and values
            this.dataList = data.values.map(row => {
                let obj = {};
                data.columns.forEach((column, index) => {
                    obj[column] = row[index];
                });
                return obj;
            });
            if (this.dataList.length > 0) {
                this.yearFilt = this.dataList.filter((a) => a.VisitYear == this.yearId);
                this.showData = this.yearFilt.filter((a) => a.VisitMonth == this.monthId);
                this.attendancemonth = this.attendanceyearData.filter((a) => parseInt(a.Month) == this.monthId);
                this.showData.forEach(element => {
                    element.user_id = element.UserID;
                });
                for (let i = 0; i < this.showData.length; i++) {
                    for (let j = 0; j < this.attendancemonth.length; j++) {
                        if ((this.showData[i].user_id == parseInt(this.attendancemonth[j].user_id) && (this.showData[i].VisitingDate == this.attendancemonth[j].leave_date))) {
                            this.showData[i].VisitingStatus = 'absent';
                        }
                    }
                }
                this.teacherList = this.showData.filter((value, index, self) => index === self.findIndex((t) => (t["UserID"] === value["UserID"])));
                console.log(this.teacherList);
                const uniqueData = this.showData.filter((value, index, self) => index === self.findIndex((t) => (t["VisitingDate"] === value["VisitingDate"])));
                //total working days
                this.totWrkDays = uniqueData.length;
                // Step 2: Count occurrences of each "User ID" and their respective "Visiting Status"
                const statusCountByUser = this.showData.reduce((acc, item) => {
                    const userId = item["UserID"];
                    const status = item["VisitingStatus"];
                    if (!acc[userId]) {
                        acc[userId] = {};
                    }
                    // Count the occurrences of each "Visiting Status" for the given "User ID"
                    acc[userId][status] = (acc[userId][status] || 0) + 1;
                    return acc;
                }, []);
                this.userStatus = statusCountByUser;
                if (this.totWrkDays && this.userStatus) {
                    // Transforming the object to an array format
                    const statusArray = Object.keys(statusCountByUser).map(userId => (Object.assign({ "UserID": parseInt(userId) }, statusCountByUser[userId] // Spread the status counts (Not Visited, Visited)
                    )));
                    console.log(this.teacherList, statusArray, this.attendancemonth);
                    this.teacherList.forEach(element => {
                        element.absent = 0,
                            element.visit = 0,
                            element.notVisit = 0;
                    });
                    for (let i = 0; i < this.teacherList.length; i++) {
                        for (let j = 0; j < statusArray.length; j++) {
                            if (this.teacherList[i].UserID == statusArray[j].UserID) {
                                this.teacherList[i].visit = statusArray[j].Visited > 0 ? statusArray[j].Visited : 0;
                                this.teacherList[i].notVisit = statusArray[j].NotVisited > 0 ? statusArray[j].NotVisited : 0;
                                this.teacherList[i].absent = statusArray[j].absent > 0 ? statusArray[j].absent : 0;
                            }
                        }
                    }
                    console.log(this.attendancemonth);
                    // const statusCountByUser1 = this.attendancemonth.reduce((acc, item) => {
                    //   const userId = item["user_id"];
                    //   const status = "absent";
                    //     if (!acc[userId]) {
                    //       acc[userId] = {};
                    //     }
                    //     // Count the occurrences of each "Visiting Status" for the given "User ID"
                    //     acc[userId][status] = (acc[userId][status] || 0) + 1;
                    //     return acc;
                    //   }, []);
                    // console.log(statusCountByUser1)
                    // // Transforming the object to an array format
                    // const statusArray1 = Object.keys(statusCountByUser1).map(userId => ({
                    //   "UserID": parseInt(userId),  // Ensures User ID is an integer
                    //   ...statusCountByUser1[userId]  // Spread the status counts (Not Visited, Visited)
                    // }));
                    // console.log(statusArray1);
                    // for(let i=0;i<this.teacherList.length;i++){
                    //   for(let j=0;j<statusArray1.length;j++){
                    //     if(this.teacherList[i].UserID == statusArray1[j].UserID){
                    //       this.teacherList[i].absent = statusArray1[j].absent
                    //     }
                    //   }
                    // }
                    console.log(this.teacherList);
                }
            }
        });
    }
    check(val) {
        this.individualData = this.showData.filter((a) => a.UserID == val.UserID);
        this.hideData = false;
        this.userName = val.Name;
        this.userId = val.UserID;
        this.individualData.sort((a, b) => {
            if (a.VisitingDate < b.VisitingDate)
                return -1;
            if (a.VisitingDate > b.VisitingDate)
                return 1;
            return 0;
        });
        for (let i = 0; i < this.individualData.length; i++) {
            this.attendancemonth.forEach((element, y) => {
                if ((this.individualData[i].UserID == parseInt(this.attendancemonth[y].user_id)) && (this.individualData[i].VisitingDate == this.attendancemonth[y].leave_date)) {
                    this.individualData[i].VisitingStatus = 'Absent';
                }
            });
        }
        console.log(this.individualData, this.attendancemonth);
    }
};
SummaryAttendancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
SummaryAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-summary-attendance',
        template: _raw_loader_summary_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_summary_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SummaryAttendancePage);



/***/ }),

/***/ 57485:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.scss ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-pg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n}\n\n.header-pg1 {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.title-icon {\n  margin-top: 3%;\n  font-size: 10px;\n  margin-left: 3px;\n}\n\n.arrow-icon {\n  margin-top: 2%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.selectitem {\n  border: 1px solid #707070;\n  color: #707070;\n}\n\n.coluitem {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n}\n\n.coluitem1 {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 5%;\n}\n\n.valid-clr {\n  color: #950909;\n}\n\nion-label {\n  color: #8b4ecf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQRTtFQUNFLGNBQUE7QUFVSjs7QUFSRTtFQUNFLGNBQUE7QUFXSiIsImZpbGUiOiJzdW1tYXJ5LWF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAuaGVhZGVyLXBnMXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgLnRpdGxlLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYXJyb3ctaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSBcclxuICAuc2VsZWN0aXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIC5jb2x1aXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5jb2x1aXRlbTEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH1cclxuICAudmFsaWQtY2xye1xyXG4gICAgY29sb3I6ICM5NTA5MDk7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzhiNGVjZjtcclxuICB9Il19 */");

/***/ }),

/***/ 57806:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-header class=\"header-pg\">\r\n  <div class=\"mb-4\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon class=\"arrow-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n      <ion-title class=\"title-icon\">Attendance Summary</ion-title>\r\n    </ion-buttons>\r\n  </div>\r\n\r\n  <ion-card class=\"mt-2\" *ngIf=\"hideData\">\r\n    <ion-row class=\"middle-text\">\r\n      <ion-col size=\"12\">\r\n        <ion-item mode=\"md\" fill=\"outline\" style=\"text-align: center;\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.districtId\" (ionChange)=\"selectdistrict($event)\" placeholder=\"Select District\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of finalDist\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"mt-2\" *ngIf=\"hideData\">\r\n    <ion-row class=\"middle-text\">\r\n      <ion-col size=\"6\">\r\n        <ion-item mode=\"md\" fill=\"outline\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.yearId\" (ionChange)=\"selectyear($event)\" placeholder=\"Select Year\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of yearList\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item mode=\"md\" fill=\"outline\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.monthId\" (ionChange)=\"selectmonth($event)\" placeholder=\"Select Month\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of monthList\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-header>\r\n\r\n<ion-content class=\"header-pg\" *ngIf=\"teacherList && hideData\">\r\n  <div style=\"padding: 10PX;\" class=\"header-pg1\">\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"4\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>Name</b>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Days</b>\r\n       </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Visited</b>\r\n       </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Not Visited</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Absent</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #f4f4f4;align-self: center;\" *ngFor=\"let data of teacherList\">\r\n      <ion-col size=\"4\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;\" (click)=\"check(data)\">\r\n          {{data.Name}} {{data.UserID}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{totWrkDays}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.visit}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.notVisit}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.absent}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"teacherList.length == 0\">\r\n      <ion-col size=\"12\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          No Data Found\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content class=\"header-pg\" *ngIf=\"!hideData\">\r\n  <div style=\"padding: 10PX;\" class=\"header-pg1\">\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"12\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>{{userName}} - {{userId}}</b>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>Date</b>\r\n        </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Status</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #f4f4f4;align-self: center;\" *ngFor=\"let data of individualData\">\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          {{data.VisitingDate | date :  \"dd-MM-y\"}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;text-align: center;\">\r\n          {{data.VisitingStatus}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts-es2015.js.map