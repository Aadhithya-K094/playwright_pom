(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts"],{

/***/ 90737:
/*!*********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/instruction/instruction.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructionPage": function() { return /* binding */ InstructionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_instruction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./instruction.page.html */ 78960);
/* harmony import */ var _instruction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruction.page.scss */ 72596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);








let InstructionPage = class InstructionPage {
    constructor(router, usersessionService, navParams, modalCtrl, sqliteDB) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.sqliteDB = sqliteDB;
        this.count = 1;
        this.username = this.usersessionService.emis_username();
        this.schoolID = this.navParams.get('schoolID');
        this.sync = this.navParams.get('sync');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log(this.sync, "this.sync");
        debugger;
        this.checkBox = false;
        var checkValue = localStorage.getItem('checkValue');
        if (checkValue == '2') {
            localStorage.setItem('checkValue', '3');
            this.count = 1;
        }
        else {
            this.count = 0;
        }
    }
    acceptNotes(event) {
        debugger;
        this.checkBox = !event.target.checked;
    }
    onEdit() {
        debugger;
        this.insertLocalData();
        if (this.checkBox == true) {
            // this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], { queryParams: { "schoolId": this.schoolID , "userID":this.username} });
            // this.modalCtrl.dismiss();
        }
    }
    insertLocalData() {
        let insertRows = [];
        // elementData.forEach(element => {
        insertRows.push([
            "INSERT INTO VIInstructionData VALUES (?,?,?,?)",
            [null, 1, this.schoolID, this.username]
        ]);
        // });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored student Locally");
            this.modalCtrl.dismiss('', 'success');
        });
    }
    closeModal() {
        this.modalCtrl.dismiss('', 'success');
    }
};
InstructionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService }
];
InstructionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-instruction',
        template: _raw_loader_instruction_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_instruction_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InstructionPage);



/***/ }),

/***/ 72596:
/*!***********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/instruction/instruction.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#stage {\n  padding: 20px 0px;\n  position: relative;\n}\n#stage .line {\n  height: 100%;\n  border-left: 2px dashed #9162b0;\n  position: absolute;\n  left: 33%;\n  z-index: -1;\n}\n#stage .info-bx {\n  display: flex;\n  align-items: start;\n  margin-bottom: 35px;\n}\n#stage .info-bx .stge {\n  width: 30%;\n  font-size: 16px;\n  text-align: right;\n  padding: 4px 10px 0px;\n  margin: 0px;\n}\n#stage .info-bx .circle {\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  border: 3px solid #5fb587;\n  color: #5fb587;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n}\n#stage .info-bx .toolbox {\n  width: 56%;\n  background: #f9f1fe;\n  border: 1px solid #9162b0;\n  padding: 10px;\n  position: relative;\n  margin-left: 16px;\n  border-radius: 8px;\n}\n#stage .info-bx .toolbox:before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: -7px;\n  height: 13px;\n  width: 13px;\n  background: #f9f1fe;\n  border-left: 1px solid #9162b0;\n  border-bottom: 1px solid #9162b0;\n  transform: rotate(45deg);\n}\n#stage .info-bx .toolbox img {\n  max-width: 40px;\n  max-height: 40px;\n  border-radius: 6px;\n  margin-left: 10px;\n}\n#stage .info-bx .toolbox p {\n  margin: 5px 0px 0px;\n  background: #ddb5e9;\n  padding: 7px;\n  font-size: 15px;\n  border-radius: 10px;\n}\n#stage .info-bx.pending .circle {\n  border-color: #ef666a;\n  color: #ef666a;\n}\n#stage .info-bx.pending .toolbox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0px 0px 10px;\n}\n#stage .info-bx.pending .toolbox .upload {\n  font-size: 24px;\n  border-left: 2px solid #9162b0;\n  padding: 6px 10px 0px 10px;\n  color: #9162b0;\n  background: #fff;\n  border-radius: 0px 10px 10px 0px;\n}\nion-checkbox {\n  --size: 20px;\n  --checkbox-background-checked: #6815ec;\n}\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid #6815ec;\n}\n.btn-dbl {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0FBSWhCO0FBRlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUloQjtBQUFZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBRWhCO0FBQVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUdwQjtBQUlBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtBQURKIiwiZmlsZSI6Imluc3RydWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdGFnZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmxpbmV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkICM5MTYyYjA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDMzJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5pbmZvLWJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgICAgLnN0Z2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzVmYjU4NztcclxuICAgICAgICAgICAgY29sb3I6ICM1ZmI1ODc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b29sYm94e1xyXG4gICAgICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmMWZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE2MmIwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWYxZmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5MTYyYjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRiNWU5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnBlbmRpbmd7XHJcbiAgICAgICAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlZjY2NmE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudG9vbGJveHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIC51cGxvYWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2hlY2tib3gge1xyXG4gICAgLS1zaXplOiAyMHB4O1xyXG4gICAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM2ODE1ZWM7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ODE1ZWM7XHJcbiAgfVxyXG5cclxuICAuYnRuLWRibHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 78960:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/instruction/instruction.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\" style=\"padding-left: 3%;\">\r\n    <ion-title>Instruction</ion-title>\r\n  <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n    <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n    </ion-icon>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"stage\">\r\n    <div class=\"line\"></div>\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">1.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>ஒரு batch-இல் 30 மாணவர்களுக்கு குறைவில்லா வகையில் அமைத்தல் வேண்டும்.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">2.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>ஒருவேளை பள்ளியின் மொத்த மாணவர்களின் எண்ணிக்கை 30ஐ-விட குறைவாக இருக்கும் பட்சத்தில் அனைத்து \r\n          வகுப்பு மாணவர்களையும் ஒருங்கிணைத்து ஒரே அமர்வாக வாசிப்பு இயக்க பாடங்களை நடத்த வேண்டும்.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">3.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>ஒன்றுக்கும் மேற்பட்ட வகுப்புகளில் ஒருங்கிணைந்து நடத்தும் நேர்வுகளில் அதிக பட்சம் 60 மாணவர்களுக்கு மிகாமல் அமைத்து வேண்டும்.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">4.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>ஒருவேளை ஒரு வகுப்பிலேயே 60 மாணவர்களுக்கு மேல் இருக்கும் நேர்வுகளில் வகுப்பை இரண்டாகப் பிரித்து நடத்த தேவையில்லை அனைவரையும் \r\n          ஒன்றாக வைத்தே வாசிப்பு இயக்க பாடங்களை நடத்த வேண்டும்.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">5.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>Server-ல் Sync செய்த தரவுகளை Edit செய்ய இயலாது.</span>\r\n       <div style=\"background-color: #70BBFF !important;margin: 3%;color: white;padding: 3%;\"> <span>Data Saved in Local</span></div> \r\n       <div style=\"background-color: rgb(48, 167, 72) !important;margin: 3%;color: white;padding: 3%;\"> <span>Data Saved in Server</span></div> \r\n       <div style=\"background-color: #a07b4b !important;margin: 3%;color: white;padding: 3%;\"> <span>Data Saved in Local partially</span></div> \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"info-bx\">\r\n      <h5 class=\"stge\">6.</h5>\r\n      <div class=\"circle\">\r\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"toolbox\">\r\n        <span>“Your data is not synced to server. Please turn on your internet connection.”\r\n          மேற்காணும் Alert நீங்கள் பதிவிடும் தரவுகள் இன்னும் server-ல் save செய்யவில்லை, என்பதை குறிக்கிறது. Server-ல் தரவுகளை சேமிக்க, நன்கு  Internet கிடைக்கும் பொழுது செயலியில் வாசிப்பு இயக்கம் Home Page-க்கு செல்லவும்.</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ion-row *ngIf=\"sync == 0\" >\r\n    <ion-col size=\"12\">\r\n      <ion-row style=\"padding-left:5%; padding-right:5%; text-align: justify; font-size: small;\">\r\n        <ion-col size=\"1\" style=\"display: flex; align-items: center;\">\r\n          <ion-checkbox labelPlacement=\"end\" (click)=\"acceptNotes($event)\"></ion-checkbox>\r\n        </ion-col>\r\n        <ion-col size=\"11\">\r\n           மேலே குறிபிட்ட வழிகாட்டுதல்களின் அடிப்படையில் வகுப்புகளை அமைத்து வாசிப்பு இயக்க பணியை மேர்கொள்கிரேன்.\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\"></ion-col>\r\n\r\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 10px;\" (click)=\"onEdit()\">\r\n      <button [disabled]=\"!checkBox\" style=\"background: transparent;\"><img [ngClass]=\"{'btn-dbl' : checkBox == false}\" src=\"/assets/images/next.png\" class=\"menuicon\"></button>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\"></ion-col>\r\n\r\n  </ion-row>  \r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts-es2015.js.map