(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-dashboard_te-school-list_te-school-list_module_ts"],{

/***/ 56222:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-school-list/te-school-list-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeSchoolListPageRoutingModule": function() { return /* binding */ TeSchoolListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _te_school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./te-school-list.page */ 37828);




const routes = [
    {
        path: '',
        component: _te_school_list_page__WEBPACK_IMPORTED_MODULE_0__.TeSchoolListPage
    }
];
let TeSchoolListPageRoutingModule = class TeSchoolListPageRoutingModule {
};
TeSchoolListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeSchoolListPageRoutingModule);



/***/ }),

/***/ 13856:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-school-list/te-school-list.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeSchoolListPageModule": function() { return /* binding */ TeSchoolListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _te_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./te-school-list-routing.module */ 56222);
/* harmony import */ var _te_school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./te-school-list.page */ 37828);







let TeSchoolListPageModule = class TeSchoolListPageModule {
};
TeSchoolListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _te_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeSchoolListPageRoutingModule
        ],
        declarations: [_te_school_list_page__WEBPACK_IMPORTED_MODULE_1__.TeSchoolListPage]
    })
], TeSchoolListPageModule);



/***/ }),

/***/ 37828:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-school-list/te-school-list.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeSchoolListPage": function() { return /* binding */ TeSchoolListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_te_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./te-school-list.page.html */ 69576);
/* harmony import */ var _te_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./te-school-list.page.scss */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _te_apply_exam_te_apply_exam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../te-apply-exam/te-apply-exam.page */ 86866);
/* harmony import */ var _te_applied_exam_te_applied_exam_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../te-applied-exam/te-applied-exam.page */ 53068);












let TeSchoolListPage = class TeSchoolListPage {
    constructor(navCtrl, alertCtrl, router, userService, usersessionService, emisService, alertService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.emisService = emisService;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.schoolList = [];
        this.ClassList = [];
        this.studentList = [];
        this.isSchool = true;
        this.menuList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.emis_username = this.usersessionService.emis_username();
        this.getSchoolList();
    }
    getSchoolList() {
        let params = {
            "UserId": this.emis_username
        };
        this.emisService.SRPWiseSchoolList(params).subscribe(res => {
            if (res.dataStatus) {
                this.schoolList = res.result.SRPSchoolStudList;
                this.TalentExamMaster = res.result.TalentExamMaster;
            }
            else {
                this.alertService.error(res.message);
            }
        });
    }
    onSchool(data) {
        this.ClassList = data.ClassList;
        this.schlName = data.school_name;
        this.isSchool = false;
        this.isStudent = false;
        this.isClass = true;
        this.isDashboard = false;
    }
    onClass(data) {
        this.isClass = false;
        this.isSchool = false;
        this.isDashboard = false;
        this.isStudent = true;
        this.studentList = data.StudentList;
        this.classId = data.class_id;
        // console.log("Selected Class", data);
    }
    onStudent(data) {
        this.isClass = false;
        this.isStudent = false;
        this.isSchool = false;
        this.isDashboard = true;
        this.studName = data.name;
        this.menuList = [
            {
                id: 1,
                title: "Apply Exam",
                image: "assets/icons/classroomStrategies.svg",
                url: "",
                studData: data,
            },
            {
                id: 2,
                title: "Applied Exam",
                image: "assets/icons/learning.svg",
                url: "",
                studData: data,
            }
        ];
        // this.router.navigate(['/tabs/talent-exam-dahsboard'], {queryParams:{StudId: data.StudId, ClassId: data.class_studying_id, SchlId: data.class_studying_id }});
        // console.log("Selected Class", data);
    }
    onSelect(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("Selected Class", item.studData);
            if (item.id == 1) {
                const modal = yield this.modalCtrl.create({
                    component: _te_apply_exam_te_apply_exam_page__WEBPACK_IMPORTED_MODULE_6__.TeApplyExamPage,
                    componentProps: { data: item.studData, exam: this.TalentExamMaster },
                    cssClass: 'te-exam-modal'
                });
                yield modal.present();
                const { data, role } = yield modal.onWillDismiss();
                if (data == 1) {
                    this.SRPWiseSchoolList(item.studData);
                }
            }
            if (item.id == 2) {
                const modal = yield this.modalCtrl.create({
                    component: _te_applied_exam_te_applied_exam_page__WEBPACK_IMPORTED_MODULE_7__.TeAppliedExamPage,
                    componentProps: { data: item.studData, exam: this.TalentExamMaster },
                    cssClass: 'te-exam-modal'
                });
                yield modal.present();
                const { data, role } = yield modal.onWillDismiss();
                if (data == 2) {
                    this.SRPWiseSchoolList(item.studData);
                }
            }
        });
    }
    navigateSchool() {
        this.isSchool = true;
        this.isClass = false;
        this.isStudent = false;
        this.isDashboard = false;
    }
    navigateClass() {
        this.isClass = true;
        this.isSchool = false;
        this.isStudent = false;
        this.isDashboard = false;
    }
    navigateStudent() {
        this.isClass = false;
        this.isSchool = false;
        this.isStudent = true;
        this.isDashboard = false;
    }
    navigateBack() {
        this.router.navigate(['/tabs/stem-dashboard']);
    }
    SRPWiseSchoolList(data) {
        let params = {
            "UserId": this.emis_username
        };
        this.emisService.SRPWiseSchoolList(params).subscribe(res => {
            if (res.dataStatus) {
                this.schoolList = res.result.SRPSchoolStudList;
                this.TalentExamMaster = res.result.TalentExamMaster;
                let schoolData = this.schoolList.filter(dd => dd.school_id == data.school_id);
                this.ClassList = schoolData[0].ClassList;
                let classData = this.ClassList.filter(dd => dd.class_id == data.class_studying_id);
                this.studentList = classData[0].StudentList;
                let studData = this.studentList.filter(dd => dd.StudId == data.StudId);
                this.studentData = studData[0];
                this.onStudent(this.studentData);
            }
            else {
                this.alertService.error(res.message);
            }
        });
    }
};
TeSchoolListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
TeSchoolListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-te-school-list',
        template: _raw_loader_te_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_te_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TeSchoolListPage);



/***/ }),

/***/ 5288:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-school-list/te-school-list.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.schoolList {\n  margin: 10px;\n  border-radius: 10px;\n  border: 1px solid black;\n  padding: 10px;\n  background: linear-gradient(-65deg, #8b67b3, #ffffff);\n}\n\n.disPlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.classList {\n  padding: 20px 5px;\n  border: 1px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  margin: 15px;\n  text-align: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.new-menu {\n  border: 1px solid;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: auto 10px;\n}\n\n.cardicon1 {\n  background: linear-gradient(-65deg, #8b67b3, #ffffff);\n  border: 1px solid;\n  padding: 5px;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.even-background {\n  --background: linear-gradient(-65deg, #8b67b3, #ffffff);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxxREFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSx1REFBQTtBQUNKIiwiZmlsZSI6InRlLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2Nob29sTGlzdHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTY1ZGVnLCAjOGI2N2IzLCAjZmZmZmZmKTtcclxuICB9XHJcblxyXG4gIC5kaXNQbGF5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jbGFzc0xpc3R7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubmV3LW1lbnUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkaWNvbjEge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC02NWRlZywgIzhiNjdiMywgI2ZmZmZmZik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5ldmVuLWJhY2tncm91bmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTY1ZGVnLCAjOGI2N2IzLCAjZmZmZmZmKTtcclxuICB9XHJcbiAiXX0= */");

/***/ }),

/***/ 69576:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/te-school-list/te-school-list.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"isSchool\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>School List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSchool\">\r\n\r\n  <div>\r\n    <ion-row class=\"schoolList\" *ngFor=\"let item of schoolList\" (click)=\"onSchool(item)\">\r\n      <ion-col size=\"2\" class=\"disPlay\">\r\n        <img src=\"assets/icons/schoolsearch.svg\">\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div>\r\n          <ion-col size=\"12\" style=\"text-transform: uppercase;\">\r\n            {{item.block_name}}\r\n          </ion-col><br>\r\n          <ion-col size=\"12\" style=\"font-weight: bold;\">\r\n            {{item.school_name}}\r\n          </ion-col>\r\n        </div>\r\n      </ion-col>\r\n     <ion-col size=\"2\" class=\"disPlay\">\r\n       <ion-icon name=\"arrow-forward\" style=\"font-size: 25px; color: #000;\"></ion-icon>\r\n     </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-col size=\"12\" *ngIf=\"schoolList.length == 0\">\r\n      <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n    </ion-col>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isClass\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateSchool()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{schlName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isClass\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" *ngFor=\"let item of ClassList; let i = index\" (click)=\"onClass(item)\">\r\n      <div class=\"cardicon1\">\r\n        <div style=\"margin: 10px auto; text-align: center; font-weight: bold;\"> Total Students - {{item.StudCount}} </div>\r\n        <div class=\"bold\" style=\"text-align: end; font-size: 50px;margin: 30px 5px 0px 5px; font-family: monospace;\">{{item.class_id}}<span style=\"font-size: 16px;\">th</span></div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-col size=\"12\" *ngIf=\"ClassList.length == 0\">\r\n    <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n\r\n<ion-header *ngIf=\"isStudent\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateClass()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{schlName}} - {{classId}}th</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isStudent\">\r\n  <div style=\"padding: 5px;\">\r\n    <ion-item class=\"bold\" style=\"text-align: center;--background: linear-gradient(0deg, #6952ff, #c758ff); color: white;\" lines=\"full\">\r\n      <span>Sno</span>\r\n      <ion-label>Name</ion-label>\r\n      <ion-label slot=\"end\">Applied Exam</ion-label>\r\n    </ion-item>\r\n    <ion-item [ngClass]=\"{'even-background': i % 2 !== 0}\" style=\"text-align: center;\" lines=\"full\" \r\n    *ngFor=\"let item of studentList; let i = index;\" (click)=\"onStudent(item)\">\r\n      <span>{{i+1}}</span>\r\n      <ion-label>{{item.name}}<br>{{item.NewEmisId}}</ion-label>\r\n      <ion-label slot=\"end\" style=\"width: 50px; margin: 0px;\">{{item.StudRegisterList.length}}</ion-label>\r\n      <!-- <ion-icon name=\"caret-forward-outline\" slot=\"end\"></ion-icon> -->\r\n    </ion-item>\r\n  </div>\r\n  <ion-col size=\"12\" *ngIf=\"studentList.length == 0\">\r\n    <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isDashboard\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateStudent()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{schlName}} - {{classId}}th <br>\r\n    {{studName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isDashboard\">\r\n  <div style=\"padding: 5px;\">\r\n    <ion-row class=\"menu-txt\">\r\n      <!-- <ion-col size=\"12\" class=\"head-txt\">\r\n        <ion-label>Menu</ion-label> \r\n      </ion-col> -->\r\n      <ion-col size=\"4\" class=\"new-menu\" *ngFor=\"let item of menuList\">\r\n        <ion-row (click)=\"onSelect(item)\" >\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.title}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_stem-dashboard_te-school-list_te-school-list_module_ts-es2015.js.map