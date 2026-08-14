(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_student-list_student-list_module_ts"],{

/***/ 39684:
/*!************************************************************************!*\
  !*** ./src/app/pages/cwsn/student-list/student-list-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPageRoutingModule": function() { return /* binding */ StudentListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list.page */ 30498);




const routes = [
    {
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage
    }
];
let StudentListPageRoutingModule = class StudentListPageRoutingModule {
};
StudentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentListPageRoutingModule);



/***/ }),

/***/ 6761:
/*!****************************************************************!*\
  !*** ./src/app/pages/cwsn/student-list/student-list.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPageModule": function() { return /* binding */ StudentListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list-routing.module */ 39684);
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list.page */ 30498);







let StudentListPageModule = class StudentListPageModule {
};
StudentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentListPageRoutingModule
        ],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_1__.StudentListPage]
    })
], StudentListPageModule);



/***/ }),

/***/ 30498:
/*!**************************************************************!*\
  !*** ./src/app/pages/cwsn/student-list/student-list.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPage": function() { return /* binding */ StudentListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-list.page.html */ 75353);
/* harmony import */ var _student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list.page.scss */ 75985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);








// import { ToastService } from 'src/app/services/toast.service'; 
let StudentListPage = class StudentListPage {
    constructor(router, route, cwsnService, toast, sqliteDB) {
        this.router = router;
        this.route = route;
        this.cwsnService = cwsnService;
        this.toast = toast;
        this.sqliteDB = sqliteDB;
        this.studentList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe(data => {
            let allData = JSON.parse(data.data);
            this.schoolData = allData.schoolData;
            this.studentList = allData.notCwsnSt;
            this.classSectionData = allData.clsSec;
            let schId = this.schoolData.StuId;
            let secClass = this.classSectionData.Class;
            this.schoolName = this.schoolData.SchlNme;
            this.schoolId = parseInt(schId);
            this.classId = parseInt(secClass);
            this.secId = this.schoolData.Sec;
        });
    }
    addStudentes() {
        let addStList = [];
        this.studentList.forEach(obj => {
            if (obj.isChecked) {
                addStList.push({
                    StuId: obj.StuId,
                    DifferAbled: 99
                });
            }
        });
        if (addStList.length > 0) {
            this.insertAddStd(addStList);
        }
        else {
            this.toast.presentToast('Please select the student before submit', 'secondary');
        }
    }
    insertAddStd(data) {
        console.log('data', data);
        let sqlArray = [];
        debugger;
        data.forEach(element => {
            debugger;
            let query1 = 'UPDATE cwsn_student_list SET cwsnStatus="' + 2 + '"' +
                'WHERE StuId = "' + element.StuId + '"';
            this.sqliteDB.update(query1).then(res => {
                console.log("updated", res);
            });
            sqlArray.push(['INSERT INTO cwsn_add_std_post VALUES (?,?,?,?,?)', [null, element.StuId, element.DifferAbled, '', '2']]);
        });
        debugger;
        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
            let queryData = {
                totalSclData: this.schoolData,
                clsSec: this.classSectionData
            };
            this.router.navigate([`/tabs/cwsn/class-student-list/${this.schoolId}`], { queryParams: { data: JSON.stringify(queryData) } });
        });
    }
    navigateBack() {
        let queryData = {
            totalSclData: this.schoolData,
            clsSec: this.classSectionData
        };
        // let id = JSON.stringify(this.routeData);
        this.router.navigate([`/tabs/cwsn/class-student-list/${this.schoolId}`,], { queryParams: { data: JSON.stringify(queryData) } });
    }
};
StudentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService }
];
StudentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-student-list',
        template: _raw_loader_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentListPage);



/***/ }),

/***/ 75985:
/*!****************************************************************!*\
  !*** ./src/app/pages/cwsn/student-list/student-list.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px;\n}\n\n.card-align .card-align-inner {\n  background: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n  margin: 10px 0;\n  border-radius: 10px;\n}\n\n.card-align .card-align-inner .card-align__body {\n  padding: 15px 20px;\n}\n\n.card-align .card-align-inner .card-align__body .student-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .card-align-inner .card-align__body .student-data .student-data__name {\n  color: var(--primary-text-color);\n}\n\n.btn-container {\n  margin: 30px 20px;\n}\n\n.btn-container ion-button {\n  --border-radius: 7px;\n  width: 100%;\n  border-radius: 17px;\n  --background: #8B66B3;\n  font-size: 1rem;\n  color: #fff;\n  padding: 0px;\n  text-transform: capitalize;\n}\n\n.nocwsnstudent-here {\n  text-align: center;\n}\n\n.nocwsnstudent-here .nocwsnstudent {\n  margin: 0;\n  font-weight: 600;\n  color: var(--primary-text-color) !important;\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.multiSelectCus {\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBREY7O0FBT0U7RUFFRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTEo7O0FBTUk7RUFDRSxrQkFBQTtBQUpOOztBQUtNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjs7QUFJUTtFQUNFLGdDQUFBO0FBRlY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQU9FO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBTE47O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQU9FO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFMTjs7QUFTQTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFORjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjojMzMzMzMzO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxufVxyXG5cclxuJWNhcmQtbGF5b3V0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAyMHB4XHJcbiAgXHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAuY2FyZC1hbGlnbi1pbm5lcntcclxuICAgIC8vIG1hcmdpbjogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY2FyZC1hbGlnbl9fYm9keXtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAuc3R1ZGVudC1kYXRhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnN0dWRlbnQtZGF0YV9fbmFtZXtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHg7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICM4QjY2QjM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ubm9jd3Nuc3R1ZGVudC1oZXJle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAubm9jd3Nuc3R1ZGVudHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvciA6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXVsdGlTZWxlY3RDdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 75353:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/student-list/student-list.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Student List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align\">\r\n    <div *ngIf=\"studentList?.length > 0; else noFoundNotCWSNStudent\">\r\n      <ng-container *ngFor=\"let student of studentList;let i=index\">\r\n        <ion-card class=\"card-align-inner\">\r\n            <div class=\"card-align__body\">\r\n              <div class=\"student-data\" >\r\n                <ion-label class=\"student-data__name\">{{student.name}}({{student.unique_id_no}})</ion-label>\r\n                <div class=\"radion-group\">\r\n                  <input type=\"checkbox\" [(ngModel)]=\"student.isChecked\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-card>\r\n      </ng-container>\r\n    </div>\r\n    <ng-template #noFoundNotCWSNStudent>\r\n      <div class=\"nocwsnstudent-here\">\r\n        <h6 class=\"nocwsnstudent\"> Students Not Found</h6>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <div class=\"btn-container\" *ngIf=\"studentList?.length > 0;\">\r\n      <ion-button class=\"btn\" (click)=\"addStudentes()\">Add Student</ion-button>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_student-list_student-list_module_ts-es2015.js.map