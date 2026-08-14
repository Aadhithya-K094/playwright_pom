(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_class-student-list_class-student-list_module_ts"],{

/***/ 62828:
/*!************************************************************************************!*\
  !*** ./src/app/pages/cwsn/class-student-list/class-student-list-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPageRoutingModule": function() { return /* binding */ ClassStudentListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-student-list.page */ 53759);




const routes = [
    {
        path: '',
        component: _class_student_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassStudentListPage
    }
];
let ClassStudentListPageRoutingModule = class ClassStudentListPageRoutingModule {
};
ClassStudentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassStudentListPageRoutingModule);



/***/ }),

/***/ 41234:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cwsn/class-student-list/class-student-list.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPageModule": function() { return /* binding */ ClassStudentListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-student-list-routing.module */ 62828);
/* harmony import */ var _class_student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-student-list.page */ 53759);
/* harmony import */ var _mht_health_check_up_answer_health_check_up_answer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mht/health-check-up-answer/health-check-up-answer.module */ 88778);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);









let ClassStudentListPageModule = class ClassStudentListPageModule {
};
ClassStudentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _class_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassStudentListPageRoutingModule,
            _mht_health_check_up_answer_health_check_up_answer_module__WEBPACK_IMPORTED_MODULE_2__.HealthCheckUpAnswerPageModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_class_student_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassStudentListPage]
    })
], ClassStudentListPageModule);



/***/ }),

/***/ 53759:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cwsn/class-student-list/class-student-list.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPage": function() { return /* binding */ ClassStudentListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_class_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-student-list.page.html */ 16344);
/* harmony import */ var _class_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-student-list.page.scss */ 51298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _mht_health_check_up_answer_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mht/health-check-up-answer/health-check-up-answer.page */ 98614);












let ClassStudentListPage = class ClassStudentListPage {
    constructor(router, route, cwsnService, userSessionService, sqliteDB, alertService, cWSNService, alertController, healthCheckUpAnswerPage) {
        this.router = router;
        this.route = route;
        this.cwsnService = cwsnService;
        this.userSessionService = userSessionService;
        this.sqliteDB = sqliteDB;
        this.alertService = alertService;
        this.cWSNService = cWSNService;
        this.alertController = alertController;
        this.healthCheckUpAnswerPage = healthCheckUpAnswerPage;
        this.searchText = "";
        this.sectionCondition = true;
    }
    ngOnInit() {
        //     let query = 'drop table cwsn_student_list';
        // this.sqliteDB.executeQuery(query).then(res => {
        //   debugger
        // });
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((data) => {
            if (data) {
                if (data.data) {
                    this.routeData = JSON.parse(data.data);
                    let schId = this.routeData.totalSclData.SchlId;
                    this.schoolName = this.routeData.totalSclData.SchlNme;
                    this.schoolId = parseInt(schId);
                    this.classId = parseInt(this.routeData.clsSec.Class);
                    this.secId = this.routeData.clsSec.Sec;
                    this.cwsnService.cwsnP1Post("load", 0);
                    this.healthCheckUpAnswerPage.checkLocalDB(2);
                }
                this.checkLocalDB();
            }
        });
    }
    checkLocalAddStd(stdIds, stdList) {
        debugger;
        let query = "SELECT * FROM cwsn_add_std_post" + " WHERE StuId in (" + stdIds + ")";
        this.sqliteDB.executeQuery(query).then((res) => {
            let temp = [];
            for (var i = 0; i < res.rows.length; i++) {
                temp.push(res.rows.item(i));
            }
            debugger;
            let cwsnStudent = [];
            let notCwsnStudent = [];
            stdList.map((cwsnStu) => {
                temp.forEach((obj) => {
                    if (cwsnStu.StuId == obj.StuId && obj.DifferAbled == 99) {
                        cwsnStu.cwsnStatus = 2;
                    }
                });
                if (cwsnStu.cwsnStatus !== null) {
                    cwsnStudent.push(cwsnStu);
                }
                else {
                    notCwsnStudent.push(cwsnStu);
                }
            });
            this.cwsnStudentList = cwsnStudent;
            this.cwsnStudentList.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.notCwsnStudentList = notCwsnStudent;
            this.notCwsnStudentList.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        });
    }
    checkLocalDB() {
        debugger;
        let query = "SELECT * FROM cwsn_student_list" +
            ' WHERE school_key_id = "' +
            this.schoolId +
            '"' +
            ' And Class = "' +
            this.classId +
            '"' +
            ' And Sec = "' +
            this.secId +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res.rows.length > 0) {
                // this.clustoers=[];
                let temp = [];
                for (var i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                // =========================
                let stdIds = "";
                temp.forEach((obj) => {
                    if (stdIds) {
                        stdIds = stdIds + "," + obj.StuId;
                    }
                    else {
                        stdIds = obj.StuId;
                    }
                });
                this.checkLocalAddStd(stdIds, temp);
                //  ===============================
            }
            else {
                this.alertService.warning("No students found");
            }
        });
    }
    onSync() {
        let query = "SELECT * FROM cwsn_student_list" +
            ' WHERE school_key_id = "' +
            this.schoolId +
            '"' +
            ' And Class = "' +
            this.classId +
            '"' +
            ' And Sec = "' +
            this.secId +
            '"' +
            ' And scrSts_Local = "' +
            2 +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res.rows.length > 0) {
                this.alertService.alert("Please Sync Data First");
            }
            else {
                let query = "DELETE FROM cwsn_student_list" +
                    ' WHERE school_key_id = "' +
                    this.schoolId +
                    '"' +
                    ' And Class = "' +
                    this.classId +
                    '"' +
                    ' And Sec = "' +
                    this.secId +
                    '"';
                this.sqliteDB.executeQuery(query).then((res) => {
                    if (res) {
                        this.checkLocalDB();
                    }
                });
            }
        }, (error) => { });
    }
    // getStudentsList(){
    //   this.cwsnService.getStudentsList(this.schoolId,this.classId,this.secId).subscribe(data => {
    //     if(data.dataStatus == true) {
    //     if(data.result.length === 0) {
    //       this.cwsnStudentList = [];
    //       this.alertService.warning('No Data Found');
    //       return;
    //     } else {
    //       let sqlArray = [];
    //         data.result.forEach(element => {
    //           sqlArray.push(['INSERT INTO cwsn_student_list VALUES (?,?,?,?,?,?,?,?,?,?,?)', [null, this.schoolId, this.classId,this.secId, element.StuId, element.name,
    //             element.cwsnStatus, element.ScrSts, element.refer_to, 0,'']]);
    //         });
    //         this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
    //           this.checkLocalDB();
    //         });
    //     }
    //   }
    //   })
    // }
    getStudentsList() {
        this.cwsnService
            .getStudentsList(this.schoolId, this.classId, this.secId)
            .subscribe((data) => {
            if (data.dataStatus == true) {
                let sqlArray = [];
                data.result.forEach((element) => {
                    // Make sure column count matches your table (14 columns)
                    sqlArray.push([
                        "INSERT INTO cwsn_student_list VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                            null,
                            this.schoolId,
                            this.classId,
                            this.secId,
                            element.StuId,
                            element.name,
                            element.cwsnStatus,
                            element.ScrSts,
                            element.refer_to,
                            0,
                            "",
                            element.referedfrom,
                            "",
                            "", // da_name
                        ],
                    ]);
                });
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.checkLocalDB();
                });
            }
        });
    }
    allStudentList() {
        let data = {
            // schoolData : this.schoolData,
            schoolData: this.routeData.totalSclData,
            notCwsnSt: this.notCwsnStudentList,
            clsSec: this.routeData.clsSec,
        };
        let schoolData = {
            schId: this.schoolId,
            classData: this.routeData,
        };
        let id = JSON.stringify(schoolData);
        this.router.navigate([`/tabs/cwsn/student-list/${id}`], {
            queryParams: { data: JSON.stringify(data) },
            skipLocationChange: true,
        });
    }
    navigateBack() {
        // let id = 'A'
        let data = {
            schoolId: this.routeData.totalSclData,
            clsSec: this.routeData.clsSec,
        };
        let zonelId = localStorage.getItem("zonelId");
        // this.router.navigate([`/tabs/cwsn/summary-list-cwsn/${zonelId}`],{ queryParams:{data:JSON.stringify(data)},skipLocationChange:true });
        this.router.navigate([`/tabs/cwsn/class-list2`], {
            queryParams: { data: JSON.stringify(data) },
            skipLocationChange: true,
        });
    }
    onStudentDetails(item) {
        let schoolData = {
            schId: this.schoolId,
            totalSclData: this.routeData.totalSclData,
            clsSec: this.routeData.clsSec,
            allData: item,
            cwsnStatus: item.cwsnStatus,
            ScrSts: item.ScrSts,
            referedfrom: item.referedfrom, // Add this line
        };
        // console.log(schoolData);
        if (item) {
            this.router.navigate([`/tabs/cwsn/student-detail/${this.schoolId}`], {
                queryParams: { data: JSON.stringify(schoolData) },
                skipLocationChange: true,
            });
        }
    }
    findStdStatus(value) {
        if (value == 1) {
            value = "Existing cwsn";
        }
        else if (value == 2) {
            value = "Directly spl Educator";
        }
        else {
            value = "Referred student";
        }
        return value;
    }
    syncScrQues(value) {
        this.cwsnService.cwsnP1Post("load", 0);
        this.onSync();
    }
    syncScrQuesOld(value) {
        let query = "SELECT * FROM cwsn_screen_ques" +
            ' WHERE school_key_id = "' +
            value.school_key_id +
            '"' +
            ' And StuId = "' +
            value.StuId +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res.rows.length > 0) {
                let temp = [];
                for (var i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                let newDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("YYYY-MM-DD");
                let obj = {
                    Cswr: [
                        {
                            IndxID: null,
                            SchlId: value.school_key_id,
                            ScrenDate: newDate,
                            Status: "1",
                            StuId: value.StuId,
                            Refer: value.refer_to,
                            userName: this.userSessionService.emis_username(),
                        },
                    ],
                    CswrDet: temp,
                };
                this.cWSNService.cwsnPostScreenQues(obj).subscribe((res) => {
                    if (res.dataStatus) {
                        this.presentAlert(res.message);
                        this.updateTableValue(value.StuId);
                    }
                }, (err) => { });
            }
        });
    }
    updateTableValue(value) {
        let query = 'UPDATE cwsn_student_list SET scrSts_Local="' +
            3 +
            '"' +
            'WHERE StuId = "' +
            value +
            '"';
        return this.sqliteDB.update(query).then((res) => {
            this.checkLocalDB();
            console.log(value, "Updated In server");
        });
    }
    presentAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let color_mode = document.documentElement.style.getPropertyValue("--primary-color");
            // console.log("mode",color_mode);
            let msg_con;
            if (color_mode == "#000000") {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick_dark.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            else {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            const alert = yield this.alertController.create({
                cssClass: "cwsn-custom-class",
                message: msg_con,
                buttons: ["OK"],
            });
            // <ion-button  class="btn_lightRed border-0 rounded-0 text-light mt-3">OK</ion-button>
            yield alert.present();
        });
    }
};
ClassStudentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _mht_health_check_up_answer_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_7__.HealthCheckUpAnswerPage }
];
ClassStudentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-class-student-list",
        template: _raw_loader_class_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassStudentListPage);



/***/ }),

/***/ 51298:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cwsn/class-student-list/class-student-list.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-row {\n  margin: 12px 0;\n}\n\n.card-align, .card {\n  border-radius: 10px;\n  margin: 15px;\n}\n\n.student-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--primary-text-color);\n}\n\n.student-data .icon-container {\n  display: flex;\n  align-items: center;\n}\n\n.student-data .icon-container .icon {\n  color: var(--icon-color);\n  font-size: 18px;\n}\n\n.card {\n  padding: 15px 0px;\n}\n\n.card-align .card-align-inner {\n  margin: 6px 15px;\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .card-align-inner .card-align__body {\n  padding: 10px;\n  color: var(--primary-text-color);\n}\n\n.card-align .card-align__body {\n  padding: 10px;\n}\n\n.card-align .card-align__body .title {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-color-black);\n}\n\n.card-align .card-align__body .values {\n  border: 2px solid #707070;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  background-color: var(--seconday-color-change);\n}\n\n.addStuCard {\n  border-radius: 15px;\n  margin: 15px 20px;\n}\n\n.heading-container {\n  margin: 0 18px;\n  text-align: center;\n}\n\n.heading-container .heading {\n  width: 100%;\n  border-radius: 13px;\n  background: var(--primary-color);\n  font-size: 0.9rem;\n  color: #fff;\n  padding: 10px;\n}\n\n.nocwsnstudent-here {\n  text-align: center;\n}\n\n.nocwsnstudent-here .nocwsnstudent {\n  margin: 0;\n  font-weight: 600;\n  color: var(--primary-text-color) !important;\n}\n\n.green {\n  color: #00d800 !important;\n}\n\n.refDEIC {\n  color: #1A85FF !important;\n}\n\n.comAssmnt {\n  color: #E71868 !important;\n}\n\n.syncServer {\n  color: #ff0000;\n}\n\nion-alert.custom-alert .alert-button.sc-ion-alert-md {\n  color: var(--primary-color) !important;\n}\n\nion-alert.custom-alert .alert-button.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md {\n  color: var(--primary-color) !important;\n}\n\n.alert-button-inner.sc-ion-alert-md {\n  color: var(--primary-color) !important;\n}\n\n.mr-15p {\n  margin-right: 15px;\n}\n\n.customInput {\n  border-radius: 20px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 95%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLXN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSwrQkFBQTtBQUpKOztBQU9BO0VBQ0ksa0NBQUE7QUFKSjs7QUFPQTtFQUNJLHdDQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0FBSko7O0FBT0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhSOztBQU9RO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBTFo7O0FBVUE7RUFDSSxpQkFBQTtBQVBKOztBQWFJO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWFI7O0FBWVE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFWWjs7QUFhSTtFQUNJLGFBQUE7QUFYUjs7QUFZUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZaOztBQVlRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhDQUFBO0FBVlo7O0FBb0JBO0VBQ0ksbUJBakZXO0VBa0ZYLGlCQUFBO0FBakJKOztBQW9CQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQWpCSjs7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFoQlI7O0FBb0JBO0VBQ0ksa0JBQUE7QUFqQko7O0FBa0JJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFoQlI7O0FBcUJBO0VBQ0kseUJBQUE7QUFsQko7O0FBcUJBO0VBRUEseUJBQUE7QUFuQkE7O0FBc0JBO0VBQ0cseUJBQUE7QUFuQkg7O0FBc0JBO0VBQ0ksY0FBQTtBQW5CSjs7QUF1Qkk7RUFDRSxzQ0FBQTtBQXBCTjs7QUFxQk07RUFDRSxzQ0FBQTtBQW5CUjs7QUF3QkU7RUFDRSxzQ0FBQTtBQXJCSjs7QUF3QkU7RUFDRSxrQkFBQTtBQXJCSjs7QUE2Q0U7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUExQ0oiLCJmaWxlIjoiY2xhc3Mtc3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhcmlhYmxlc1xyXG5cclxuJGNvbG9yOiMwMDA7XHJcbiRib3JkZXItY29sb3I6IzcwNzA3MDtcclxuJGJvcmRlci1yYWRpdXM6MTVweDtcclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbn1cclxuXHJcbiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5zdHVkZW50LWRhdGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgLmljb24tY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICAvLyAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxufVxyXG5cclxuLmNhcmQtYWxpZ257XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgIC5jYXJkLWFsaWduLWlubmVye1xyXG5cclxuICAgICAgICBtYXJnaW46IDZweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAuY2FyZC1hbGlnbl9fYm9keXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtYWxpZ25fX2JvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ibGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuY2FyZC1hbGlnbjpudGgtY2hpbGQoMil7XHJcbi8vICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbi8vICAgICBtYXJnaW46IDIwcHggMjBweCAxNXB4IDIwcHg7XHJcbi8vIH1cclxuXHJcbi5hZGRTdHVDYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBtYXJnaW46IDE1cHggMjBweDtcclxufVxyXG5cclxuLmhlYWRpbmctY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vY3dzbnN0dWRlbnQtaGVyZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5ub2N3c25zdHVkZW50e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yIDogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmdyZWVuIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMjE2LCAwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVmREVJQyB7XHJcbi8vICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuY29sb3I6IzFBODVGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tQXNzbW50IHtcclxuICAgY29sb3I6ICNFNzE4NjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN5bmNTZXJ2ZXIge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbmlvbi1hbGVydC5jdXN0b20tYWxlcnQge1xyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLTE1cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuLy8gICAuY3VzdG9tX21vZGVse1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjZCMztcclxuLy8gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICA6Om5nLWRlZXAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY2QjM7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIDo6bmctZGVlcCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQge1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcblxyXG4vLyAgIDo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICA6Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xyXG4vLyAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuLy8gICB9XHJcblxyXG4gIC5jdXN0b21JbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 16344:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/class-student-list/class-student-list.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon\r\n        class=\"back-icon\"\r\n        size=\"large\"\r\n        name=\"arrow-back\"\r\n        (click)=\"navigateBack()\"\r\n      >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Students List</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"card-align__body\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"title\">School</div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"values\">{{schoolName}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">Class</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"title\">Section</div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"values\">\r\n            {{classId ==13?\"LKG\":(classId==14?\"UKG\":classId)}}\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"values\">{{secId}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n  <div class=\"heading-container\">\r\n    <h4 class=\"heading\">Student List</h4>\r\n  </div>\r\n  <ion-card class=\"card-align card ion-card-margin\">\r\n    <ion-item class=\"customInput\">\r\n      <ion-input\r\n        class=\"col-12\"\r\n        placeholder=\"Search\"\r\n        [(ngModel)]=\"searchText\"\r\n        autocomplete=\"off\"\r\n      >\r\n      </ion-input>\r\n      <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n    </ion-item>\r\n    <div *ngIf=\"cwsnStudentList?.length > 0; else noFoundCWSNStudent\">\r\n      <ng-container *ngFor=\"let item of cwsnStudentList | searchall:searchText\">\r\n        <ion-card class=\"card-align-inner\">\r\n          <div class=\"card-align__body\">\r\n            <!-- [class.comAssmnt]=\"item.refer_to=='Comprehensive Assessment'\" -->\r\n            <div class=\"student-data\" (click)=\"onStudentDetails(item)\">\r\n              <ion-label\r\n                [class.green]=\"item.refer_to==1\"\r\n                [class.refDEIC]=\"item.refer_to==2\"\r\n                [class.comAssmnt]=\"item.refer_to==3\"\r\n                [class.green]=\"item.ScrSts\"\r\n              >\r\n                <b>{{item.name}} ({{item.unique_id_no}})</b>\r\n              </ion-label>\r\n              <div class=\"icon-container\">\r\n                <!-- <ion-icon class=\"back-icon mr-15p syncServer\" size=\"small\" name=\"sync\" *ngIf=\"item.scrSts_Local==2\" (click)=\"syncScrQues(item)\">\r\n                    </ion-icon> -->\r\n                <ion-icon\r\n                  name=\"arrow-forward-outline\"\r\n                  class=\"icon\"\r\n                  [class.green]=\"item.refer_to==1\"\r\n                  [class.green]=\"item.ScrSts\"\r\n                  [class.refDEIC]=\"item.refer_to==2\"\r\n                  [class.comAssmnt]=\"item.refer_to==3\"\r\n                ></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ng-container>\r\n    </div>\r\n    <ng-template #noFoundCWSNStudent>\r\n      <div class=\"nocwsnstudent-here\">\r\n        <h6 class=\"nocwsnstudent\">No CWSN Student Found</h6>\r\n      </div>\r\n    </ng-template>\r\n  </ion-card>\r\n  <div class=\"heading-container\">\r\n    <h3 class=\"heading\">Add Student</h3>\r\n  </div>\r\n  <ion-card class=\"card-align addStuCard ion-card-margin\">\r\n    <div class=\"card-align__body\" (click)=\"allStudentList()\">\r\n      <div class=\"student-data\">\r\n        <ion-label>Select Student</ion-label>\r\n        <div class=\"icon-container\">\r\n          <ion-icon name=\"arrow-forward-outline\" class=\"icon\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_class-student-list_class-student-list_module_ts-es2015.js.map