(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_unverified-arps_unverified-arps_module_ts"],{

/***/ 18747:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/art-culture/unverified-arps/unverified-arps-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedARPSPageRoutingModule": function() { return /* binding */ UnverifiedARPSPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _unverified_arps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverified-arps.page */ 44811);




const routes = [
    {
        path: '',
        component: _unverified_arps_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedARPSPage
    }
];
let UnverifiedARPSPageRoutingModule = class UnverifiedARPSPageRoutingModule {
};
UnverifiedARPSPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UnverifiedARPSPageRoutingModule);



/***/ }),

/***/ 11099:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/art-culture/unverified-arps/unverified-arps.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedARPSPageModule": function() { return /* binding */ UnverifiedARPSPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _unverified_arps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverified-arps-routing.module */ 18747);
/* harmony import */ var _unverified_arps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverified-arps.page */ 44811);







let UnverifiedARPSPageModule = class UnverifiedARPSPageModule {
};
UnverifiedARPSPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _unverified_arps_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnverifiedARPSPageRoutingModule
        ],
        declarations: [_unverified_arps_page__WEBPACK_IMPORTED_MODULE_1__.UnverifiedARPSPage]
    })
], UnverifiedARPSPageModule);



/***/ }),

/***/ 44811:
/*!***************************************************************************!*\
  !*** ./src/app/pages/art-culture/unverified-arps/unverified-arps.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedARPSPage": function() { return /* binding */ UnverifiedARPSPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_unverified_arps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./unverified-arps.page.html */ 58970);
/* harmony import */ var _unverified_arps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverified-arps.page.scss */ 26360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let UnverifiedARPSPage = class UnverifiedARPSPage {
    constructor(router, emisservice, usersessionService, userService, alertService, route) {
        this.router = router;
        this.emisservice = emisservice;
        this.usersessionService = usersessionService;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.showtable = false;
        // this.route.queryParams.subscribe((blockId) => {
        //   this.BlkId = blockId['blockId']
        // })
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.teacher_id = this.usersessionService.teacher_id();
        this.getUserDetails();
        // this.BlkId = this.usersessionService.block_id();
        // this.getunverified();
    }
    SchInfohide() {
        this.showtable = true;
    }
    showlow() {
        this.showtable = false;
    }
    backBtn() {
        this.router.navigate(["/tabs/art-culture"]);
    }
    statusChange(contact_no) {
        // this.unverifiedarp[i].brte_status = null
        console.log('contact_no', contact_no);
        var data = {
            "records": {
                "TemplateId": "1707168967530399182",
                "MobileNo": contact_no,
                "TemplateMsg": "நீங்கள் பள்ளிகளில் கலைவள நபராக தன்னார்வப்பணி மேற்கொள்ள ,கீழே உள்ள லிங்க்-ஐ கிளிக் செய்து உங்களது விவரங்களை பதிவேற்றம் செய்யவும். லிங்க் : {#var#}. - TNSED",
                "var": {
                    "var1": "kalaiarangam.tnschools.gov.in/"
                }
            }
        };
        this.emisservice.getverifeidsms(data).subscribe((res) => {
            this.alertService.success("sended successfully");
            this.getunverified();
        });
        // if (event.detail.checked) {
        //   this.unverifiedarp[index].status = 'verifeid';
        //   // this.isAllItem = true;
        // } else {
        //   this.unverifiedarp[index].status = 'rejected';
        // }
    }
    getUserDetails() {
        this.userService.getOoscUserDetails(this.teacher_id).subscribe(res => {
            if (res.dataStatus == true) {
                this.block = res.result[0].block_id;
                this.getunverified();
                // this.getunverified();
                // if (uerDetails.length > 0) {
                //     this.getBlockList(this.distId);
                // } else {
                //   this.blocklistActive = false;
                // }
            }
            else {
                this.alertService.error("Something went wrong");
            }
        });
    }
    getunverified() {
        this.emisservice.getunverifiedarp(this.block).subscribe((res) => {
            if (res.dataStatus) {
                this.unverifiedarp = res.result;
            }
            else {
                this.unverifiedarp = [];
                this.alertService.warning(res.message);
            }
        });
    }
    getunverifiedbrtestatus(event, list) {
        if (event.detail.checked == true) {
            this.BrteStatus = 1;
        }
        else {
            this.BrteStatus = 2;
        }
        let obj = {
            records: {
                IndxId: list.id,
                BrteStatus: this.BrteStatus
            }
        };
        this.userService.unverifiedbrtestatus(obj).subscribe(res => {
            if (res.dataStatus == true) {
                this.alertService.success(res.message);
                this.getunverified();
            }
            else {
                this.alertService.warning(res.message);
            }
        });
    }
};
UnverifiedARPSPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
UnverifiedARPSPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-unverified-arps',
        template: _raw_loader_unverified_arps_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_unverified_arps_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UnverifiedARPSPage);



/***/ }),

/***/ 26360:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/art-culture/unverified-arps/unverified-arps.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #dc6ecf;\n}\n\n.mainDiv {\n  margin: 20px;\n}\n\n.headerRow {\n  background-color: #dc6ecf;\n  color: white;\n  padding: 6px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.tabelRow {\n  border: 2px solid #dc6ecf;\n  margin-top: 4px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.iconCol {\n  align-self: center;\n  text-align: center;\n  color: white;\n  background-color: #dc6ecf;\n}\n\n.ion-row {\n  --background: #707070 !important;\n}\n\n.labelCol {\n  font-size: 13px;\n  color: gray;\n  background-color: white;\n  align-self: center;\n}\n\n.hideHeader {\n  font-weight: 500;\n  text-align: center;\n  color: #707070;\n}\n\n.headCol {\n  font-size: 12px;\n  text-align: center;\n  color: #707070;\n}\n\n.sendbtn {\n  font-size: 12px;\n  --background:green;\n  color: white;\n  --border-radius: 12px;\n}\n\nion-toggle {\n  padding: 10px;\n  --background: gray;\n  --background-checked: green;\n  --handle-background: white;\n  --handle-background-checked: white;\n  /* Required for iOS handle to overflow the height of the track */\n  overflow: visible;\n  contain: none;\n}\n\n.ion-label {\n  font-family: \"Times New Roman\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWQtYXJwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQkFBQTtBQUZKOztBQU1BO0VBRUksWUFBQTtBQUpKOztBQVFBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBQVRKOztBQWFBO0VBRUkseUJBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FBYko7O0FBaUJBO0VBRUksa0JBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSx5QkFBQTtBQWxCSjs7QUF1QkE7RUFDSSxnQ0FBQTtBQXBCSjs7QUF1QkE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUF0Qko7O0FBMEJBO0VBRUksZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsY0FBQTtBQXRCeEM7O0FBMEJBO0VBRUksZUFBQTtFQUFnQixrQkFBQTtFQUFtQixjQUFBO0FBdEJ2Qzs7QUF5QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUF0Qko7O0FBMEJJO0VBRUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFFQSwwQkFBQTtFQUNBLGtDQUFBO0VBR0EsZ0VBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUEzQlI7O0FBZ0NNO0VBQ0UsOEJBQUE7QUE3QlIiLCJmaWxlIjoidW52ZXJpZmllZC1hcnBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZGM2ZWNmO1xyXG5cclxuICB9XHJcblxyXG4ubWFpbkRpdntcclxuXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyUm93e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzZlY2Y7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuXHJcbi50YWJlbFJvd3tcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGM2ZWNmO1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaWNvbkNvbHtcclxuXHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2ZWNmO1xyXG5cclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcblxyXG59XHJcbi5pb24tcm93e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzA3MDcwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbENvbHtcclxuXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmhpZGVIZWFkZXJ7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6IzcwNzA3MDtcclxuXHJcbn1cclxuXHJcbi5oZWFkQ29se1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTJweDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6IzcwNzA3MDtcclxuXHJcbn1cclxuLnNlbmRidG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6Z3JlZW47XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbn1cclxuXHJcbiAgICBpb24tdG9nZ2xlIHtcclxuICAgXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZWVuO1xyXG4gICAgICBcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgLyogUmVxdWlyZWQgZm9yIGlPUyBoYW5kbGUgdG8gb3ZlcmZsb3cgdGhlIGhlaWdodCBvZiB0aGUgdHJhY2sgKi9cclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBjb250YWluOiBub25lO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6MTZweDtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcclxuICAgICAgfSJdfQ== */");

/***/ }),

/***/ 58970:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/unverified-arps/unverified-arps.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>unverified-ARPS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n\r\n<ion-header>\r\n\r\n  <ion-toolbar class=\"toolbar\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n\r\n      </ion-icon>\r\n\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">Unverified ARP'S</ion-title>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"mainDiv\">\r\n\r\n    <ion-row class=\"headerRow\">\r\n\r\n\r\n      <ion-col size=\"3\">\r\n        <ion-label>ARP Name</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n        <ion-label>Art Form</ion-label>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n        <ion-label>Call</ion-label>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n\r\n        <ion-label>Willing</ion-label>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n\r\n        <ion-label>Link</ion-label>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n   \r\n    <ion-row class=\"tabelRow\" *ngFor=\"let list of unverifiedarp;let i = index\">\r\n      <!-- <ion-col size=\"1\" class=\"iconCol\">\r\n\r\n        <div style=\"zoom:1.5\">\r\n\r\n          <ion-icon name=\"add\" (click)=\"SchInfohide()\"></ion-icon>\r\n\r\n        </div>\r\n\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"3\" class=\"labelCol\">\r\n\r\n        <ion-label style=\"font-size: 10px;\">{{list.resource_person_name}}</ion-label>\r\n\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"2\" class=\"labelCol\">\r\n\r\n        <ion-label style=\"font-size: 10px;\">{{list.key_art_form}}</ion-label>\r\n\r\n      </ion-col>\r\n\r\n\r\n\r\n\r\n      <ion-col size=\"2\" class=\"labelCol\">\r\n\r\n        <a href=\"tel:+{{list.contact_no}}\"><ion-icon name=\"call-outline\"></ion-icon></a>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"labelCol\">\r\n\r\n        <ion-toggle class=\"toggle\" [checked]=\"list.brte_status == '1'\" [disabled]=\"list.brte_status == '1'\"\r\n          (ionChange)=\"getunverifiedbrtestatus($event,list)\"></ion-toggle>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"labelCol\">\r\n        <div><ion-button size=\"small\" class=\"sendbtn\" [disabled]=\"list.brte_status == '2' || list.brte_status == null\"\r\n            (click)=\"statusChange(list.contact_no)\">Send</ion-button></div>\r\n      </ion-col>\r\n      \r\n   \r\n    </ion-row>\r\n    <ion-row *ngIf=\"!unverifiedarp\">\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <ion-label>No Data Found</ion-label>\r\n      </ion-col>\r\n   </ion-row>\r\n  </div>\r\n\r\n    <!-- <ion-row style=\"background-color: #ECE8FF;\" *ngIf=\"showtable\">\r\n\r\n      <ion-col size=\"1\" style=\"align-self: center;\">\r\n\r\n        <div style=\"zoom:1.5;color: #707070;\">\r\n\r\n          <ion-icon name=\"remove\" (click)=\"showlow()\"></ion-icon>\r\n\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"11\">\r\n\r\n        <ion-row>\r\n\r\n          <ion-col size=\"4.5\" class=\"hideHeader\">\r\n\r\n            <ion-button color=\"success\">Send Link</ion-button>\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  \r\n\r\n    \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_unverified-arps_unverified-arps_module_ts-es2015.js.map