(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_add-student_add-student_module_ts"],{

/***/ 95722:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/add-student/add-student-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentPageRoutingModule": function() { return /* binding */ AddStudentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-student.page */ 11439);




const routes = [
    {
        path: '',
        component: _add_student_page__WEBPACK_IMPORTED_MODULE_0__.AddStudentPage
    }
];
let AddStudentPageRoutingModule = class AddStudentPageRoutingModule {
};
AddStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddStudentPageRoutingModule);



/***/ }),

/***/ 13323:
/*!******************************************************************!*\
  !*** ./src/app/pages/stem_new/add-student/add-student.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentPageModule": function() { return /* binding */ AddStudentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-student-routing.module */ 95722);
/* harmony import */ var _add_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-student.page */ 11439);







let AddStudentPageModule = class AddStudentPageModule {
};
AddStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddStudentPageRoutingModule
        ],
        declarations: [_add_student_page__WEBPACK_IMPORTED_MODULE_1__.AddStudentPage]
    })
], AddStudentPageModule);



/***/ }),

/***/ 11439:
/*!****************************************************************!*\
  !*** ./src/app/pages/stem_new/add-student/add-student.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStudentPage": function() { return /* binding */ AddStudentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_add_student_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-student.page.html */ 86151);
/* harmony import */ var _add_student_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-student.page.scss */ 30997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);









let AddStudentPage = class AddStudentPage {
    constructor(router, route, sqliteDB, alertService, userService) {
        this.router = router;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.alertService = alertService;
        this.userService = userService;
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.batch = this.routeData.queryParams.batch;
        this.domain = this.routeData.queryParams.domain;
        this.addStudentDataList = [];
        this.filterActive = false;
        this.activeSave = false;
        this.form.controls.emisId.setValue('');
        this.form.controls.emisId.updateValueAndValidity();
        this.searchData = [];
        this.localStudentData();
        this.studentData();
    }
    initialValidator() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            emisId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    }
    studentData() {
        this.schoolExpreData = [];
        this.userService.getExpermentData(this.schoolId, this.batch).subscribe((response) => {
            this.studentIndex = response.result[0].IndxId;
            // this.schoolExpreData = response.result.filter((rq) => rq.batch == this.batch);
        });
    }
    localStudentData() {
        let query = 'SELECT * FROM AllStemStudentslists' +
            ' WHERE SchlId = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.studentListData = [];
                this.studentListData = this.dataList;
                console.log(this.dataList, "local json");
            }
            else {
                console.log("server json");
            }
        });
    }
    // searching data 
    getFilterItems(event) {
        this.searchData = [];
        this.filterActive = true;
        this.searchTerm = event.trim();
        this.searchData = this.dataList.filter((item) => {
            return item.unique_id_no.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
    onSave() {
        if (this.searchData.length > 0) {
            this.addStudentDataList.push(this.searchData[0]);
            let removeData = this.dataList.filter((item) => item.unique_id_no != this.searchData[0].unique_id_no);
            this.dataList = [];
            this.dataList = removeData;
            this.searchData = [];
            if (this.addStudentDataList.length == 3) {
                this.activeSave = true;
            }
        }
    }
    delete(id, event, array) {
        this.activeSave = false;
        let removeData = this.addStudentDataList.filter((item) => item.unique_id_no != event);
        this.addStudentDataList = [];
        this.addStudentDataList = removeData;
        if (this.addStudentDataList.length == 3) {
            this.activeSave = true;
        }
        this.dataList.push(array);
    }
    onFinalSave() {
        let recordSet = [];
        for (let i = 0; i <= 2; i++) {
            recordSet.push({
                "IndexId": "",
                "ExprmntBtchId": this.batch,
                "ExprmntDomain": this.domain.toString(),
                "SchlId": this.schoolId,
                "StudId": this.addStudentDataList[i].StudId,
                "Cls": this.addStudentDataList[i].class_studying_id,
                "Sec": this.addStudentDataList[i].class_section
            });
        }
        let data = { "records": recordSet };
        this.userService.studentListData(data).subscribe((response) => {
            this.router.navigate(['/tabs/school-zone']);
            this.alertService.success("Saved Sucessfully");
        });
    }
};
AddStudentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
AddStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-student',
        template: _raw_loader_add_student_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_student_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddStudentPage);

//**********  By Malini */


/***/ }),

/***/ 30997:
/*!******************************************************************!*\
  !*** ./src/app/pages/stem_new/add-student/add-student.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-image {\n  background: url(\"/assets/images/Curiousstudents.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 30%;\n}\n\n.header-image1 {\n  background: url(\"/assets/images/SCIENTIST.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  padding-top: 20%;\n  padding-bottom: 20%;\n}\n\n.card-item {\n  height: 100%;\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.spanheader {\n  font-size: 10px;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.coluitem2 {\n  padding-left: 2%;\n  padding-right: 2%;\n  font-weight: bold;\n  text-align: center;\n  color: #343434;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 5px;\n  padding-left: 2%;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1GQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBR0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtBQURKIiwiZmlsZSI6ImFkZC1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0N1cmlvdXNzdHVkZW50cy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH0gXHJcblxyXG4gIC5oZWFkZXItaW1hZ2Uxe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9TQ0lFTlRJU1QucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcclxuICB9IFxyXG4gIFxyXG4gIC5jYXJkLWl0ZW0ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIH0gXHJcblxyXG4gIC52YWxpZC1jbHIgIHtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcblxyXG4gIC5zcGFuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5jb2x1aXRlbTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjojMzQzNDM0O1xyXG4gIH1cclxuXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG4gIH1cclxuICAgXHJcbiAgIl19 */");

/***/ }),

/***/ 86151:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/add-student/add-student.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"header-image\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <span style=\"margin-top: 1%;\" class=\"spanheader\">Curious Students</span>\r\n    </ion-buttons>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"margin-top: 10%;\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"coluitem2\">\r\n            Please select 3 students who have actively participated in the session\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"border: 1px solid;margin: 3%;\">\r\n              <ion-input type=\"number\" (ionChange)=\"getFilterItems($event.detail.value)\" formControlName=\"emisId\"\r\n                class=\"selectitem\">\r\n              </ion-input>\r\n              <ion-icon name=\"search\" slot=\"end\" style=\"color: #6B4DC9;\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"filterActive\">\r\n            <ion-row style=\"margin: 5%;\">\r\n              <ion-col size=\"12\" style=\"background-color: #6B4DC9;color: white;text-align: center;\">Student Details\r\n              </ion-col>\r\n              <ion-col size=\"12\" style=\"color:#6B4DC9;padding-left: 5%;\" *ngFor=\"let item of searchData\">\r\n                <div (click)=\"getFilterItems(item.unique_id_no)\"> {{item.name}} - {{item.unique_id_no}}</div>\r\n                <div (click)=\"getFilterItems(item.unique_id_no)\"> {{item.class_studying_id}} - {{item.class_section}}\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"12\" style=\"color:#707070;padding-left: 3%;border-bottom: dotted;\"\r\n                *ngFor=\"let item of addStudentDataList;let i =index\">\r\n                <ion-row>\r\n                  <ion-col size=\"10\">\r\n                    <div> {{item.name}} - {{item.unique_id_no}}</div>\r\n                    <div> {{item.class_studying_id}} - {{item.class_section}} </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" style=\"color:#ec4e4e;padding-left: 3%;zoom: 1.5;\">\r\n                    <ion-icon name=\"trash\" (click)=\"delete(i,item.unique_id_no,item)\"> Delete </ion-icon>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"!activeSave\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onSave()\">\r\n            <img src=\"/assets/images/addbutton.png\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"activeSave\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onFinalSave()\">\r\n            <img src=\"/assets/images/Savebutton.png\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"header-image1\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_add-student_add-student_module_ts-es2015.js.map