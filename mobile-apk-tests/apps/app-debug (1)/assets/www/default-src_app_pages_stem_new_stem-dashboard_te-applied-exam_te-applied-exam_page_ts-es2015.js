(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_stem_new_stem-dashboard_te-applied-exam_te-applied-exam_page_ts"],{

/***/ 53068:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-applied-exam/te-applied-exam.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeAppliedExamPage": function() { return /* binding */ TeAppliedExamPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_te_applied_exam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./te-applied-exam.page.html */ 35010);
/* harmony import */ var _te_applied_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./te-applied-exam.page.scss */ 52422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _te_apply_exam_te_apply_exam_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../te-apply-exam/te-apply-exam.page */ 86866);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);









let TeAppliedExamPage = class TeAppliedExamPage {
    constructor(navParams, modalCtrl, usersessionService, emisService, alertService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.usersessionService = usersessionService;
        this.emisService = emisService;
        this.alertService = alertService;
        this.StudRegisterList = [];
        this.schoolList = [];
        this.ClassList = [];
        this.studentList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.emis_username = this.usersessionService.emis_username();
        this.studentData = this.navParams.get('data');
        this.examList = this.navParams.get('exam');
        this.StudRegisterList = this.studentData.StudRegisterList;
        // console.log("Student Data",this.studentData.StudRegisterList);
    }
    getExam(datas) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _te_apply_exam_te_apply_exam_page__WEBPACK_IMPORTED_MODULE_2__.TeApplyExamPage,
                componentProps: { data: this.studentData, exam: this.examList, saveData: datas },
                cssClass: 'te-exam-modal'
            });
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (data == 1) {
                this.isActive = true;
                this.SRPWiseSchoolList(this.studentData);
            }
        });
    }
    goBack() {
        if (this.isActive) {
            this.modalCtrl.dismiss(2);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
    ionViewWillLeave() {
        this.modalCtrl.dismiss();
    }
    SRPWiseSchoolList(data) {
        debugger;
        let params = {
            "UserId": this.emis_username
        };
        this.emisService.SRPWiseSchoolList(params).subscribe(res => {
            if (res.dataStatus) {
                this.schoolList = res.result.SRPSchoolStudList;
                let schoolData = this.schoolList.filter(dd => dd.school_id == data.school_id);
                this.ClassList = schoolData[0].ClassList;
                let classData = this.ClassList.filter(dd => dd.class_id == data.class_studying_id);
                this.studentList = classData[0].StudentList;
                let studData = this.studentList.filter(dd => dd.StudId == data.StudId);
                this.studentData = studData[0];
                this.StudRegisterList = this.studentData.StudRegisterList;
            }
            else {
                this.alertService.error(res.message);
            }
        });
    }
};
TeAppliedExamPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
TeAppliedExamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-te-applied-exam',
        template: _raw_loader_te_applied_exam_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_te_applied_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TeAppliedExamPage);



/***/ }),

/***/ 52422:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/te-applied-exam/te-applied-exam.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".disPlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card-widget {\n  box-shadow: none;\n}\n\n.review {\n  background: linear-gradient(-65deg, #8b67b3bf, #F4F4F4);\n  margin: 5px 0px;\n}\n\n.font-11 {\n  font-size: 12px;\n}\n\n.plat-color {\n  color: #004da6;\n}\n\n.m-0 {\n  margin: 0px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.bold-900 {\n  font-weight: 600;\n}\n\n.font-12 {\n  font-size: 15px;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlLWFwcGxpZWQtZXhhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHVEQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUdKOztBQURFO0VBQ0UsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUoiLCJmaWxlIjoidGUtYXBwbGllZC1leGFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNQbGF5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLXdpZGdldHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucmV2aWV3e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC02NWRlZywgIzhiNjdiM2JmLCAjRjRGNEY0KTsgXHJcbiAgICBtYXJnaW46IDVweCAwcHg7IFxyXG59XHJcblxyXG4uZm9udC0xMXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnBsYXQtY29sb3J7XHJcbiAgICBjb2xvcjogIzAwNGRhNjtcclxuICB9XHJcbiAgLm0tMHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICAubWItMTB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuYm9sZC05MDB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAuZm9udC0xMntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 35010:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/te-applied-exam/te-applied-exam.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Applied Exam</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid style=\"padding: 0px;\">\r\n    <ion-card class=\"card-widget\">\r\n      <!-- <ion-row *ngFor=\"let item of StudRegisterList;\" (click)=\"getExam(item)\" style=\"border-radius: 10px;margin: 5px 0px; border: 1px solid;\">\r\n        <ion-col size=\"11\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"color: black;\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Exam Type  </ion-label>\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.exam}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Exam Date  </ion-label>\r\n              <ion-label style=\"font-weight: bold;\">{{item.exam_date}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"color: black; font-size: 13px;\">\r\n              <ion-label style=\"color: #7951a6;\">Register No  </ion-label>\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.register_no}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Status  </ion-label>\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.result_status == 1 ? 'Cleared' : item.result_status == 2 ? 'Not Cleared' : item.result_status == 3 ? 'Not Attended' : '-'}}\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"disPlay\" style=\"background: #8b67b3; border-radius: 0px 5px 5px 0px;\">\r\n          <ion-icon name=\"chevron-forward-outline\" size=\"large\" style=\"color: #FFF;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <div *ngFor=\"let item of StudRegisterList\" class=\"review\">\r\n        <ion-row (click)=\"getExam(item)\">\r\n            <ion-col size=\"11\">\r\n              <!-- <h4 class=\"font-11 m-0 mb-10 bold-900 plat-color\">Exam Type</h4>\r\n              <ion-label class=\"font-12\">{{item.exam}}</ion-label> -->\r\n              <ion-row>\r\n                <ion-col size=\"12\" style=\"padding-left: 0px;\">\r\n                  <h4 class=\"font-11 m-0 mb-10 bold-900 plat-color\">Exam Type</h4>\r\n                  <ion-label class=\"font-12\">{{item.exam}} <span *ngIf=\"item.exam_id == 100\"> ({{item.other_exam}}) </span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3.5\" style=\"padding-left: 0px;\">\r\n                  <h4 class=\"font-11 m-0 mb-10 bold-900 plat-color\">Exam Date</h4>\r\n                  <ion-label class=\"font-12\">{{item.exam_date}}</ion-label>\r\n                </ion-col>\r\n                <ion-col col-8 size=\"4\">\r\n                  <h4 class=\"font-11 m-0 mb-10 bold-900 plat-color\">Register No</h4>\r\n                  <ion-label class=\"font-12\">{{item.register_no}}</ion-label>\r\n                </ion-col>\r\n                <ion-col col-8 size=\"4.5\">\r\n                  <h4 class=\"font-11 m-0 mb-10 bold-900 plat-color\">Status</h4>\r\n                  <ion-label class=\"font-12\"> {{item.result_status == 1 ? 'Cleared' \r\n                    : item.result_status == 2 ? 'Not Cleared' : item.result_status == 3 ? \r\n                    'Not Attended' : item.result_status == 4 ? 'Yet to Attended' : '-'}}\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"1\"  class=\"disPlay\">\r\n              <ion-icon name=\"caret-forward\" style=\"height: 45px; font-size: 25px; color: white; width: 18px  ;\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n\r\n      <!-- <ion-row *ngFor=\"let item of StudRegisterList;\" (click)=\"getExam(item)\" style=\"border-radius: 10px;margin: 5px 0px; border: 1px solid; background: linear-gradient(-70deg, #8b67b3, #ffffff)\">\r\n        <ion-col size=\"10.5\">\r\n          <ion-row>\r\n            <ion-col size=\"4\" style=\"color: black;\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Exam Type:  </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"8\" style=\"color: black;\">\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.exam}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Exam Date:  </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"8\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"font-weight: bold;\">{{item.exam_date}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"color: black; font-size: 13px;\">\r\n              <ion-label style=\"color: #7951a6;\">Register No:  </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"8\" style=\"color: black; font-size: 13px;\">\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.register_no}}\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"color: #7951a6; font-size: 13px;\">Status:  </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"8\" style=\"color: black; padding:5px;font-weight: 500\">\r\n              <ion-label style=\"font-weight: bold;\">\r\n                {{item.result_status == 1 ? 'Cleared' : item.result_status == 2 ? 'Not Cleared' : item.result_status == 3 ? 'Not Attended' : item.result_status == 4 ? 'Yet to Attended' : '-'}}\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"disPlay\" style=\"border-radius: 0px 5px 5px 0px;\">\r\n          <ion-icon name=\"chevron-forward-outline\" size=\"large\" style=\"color: #000;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </ion-card>\r\n  </ion-grid>\r\n\r\n  <ion-col size=\"12\" *ngIf=\"StudRegisterList.length == 0\">\r\n    <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n  </ion-col>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_stem_new_stem-dashboard_te-applied-exam_te-applied-exam_page_ts-es2015.js.map