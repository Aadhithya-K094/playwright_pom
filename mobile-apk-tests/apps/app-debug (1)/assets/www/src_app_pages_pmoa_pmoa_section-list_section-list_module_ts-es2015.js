(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_section-list_section-list_module_ts"],{

/***/ 62009:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/section-list/section-list-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPageRoutingModule": function() { return /* binding */ SectionListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list.page */ 97712);




const routes = [
    {
        path: '',
        component: _section_list_page__WEBPACK_IMPORTED_MODULE_0__.SectionListPage
    }
];
let SectionListPageRoutingModule = class SectionListPageRoutingModule {
};
SectionListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SectionListPageRoutingModule);



/***/ }),

/***/ 92149:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/section-list/section-list.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPageModule": function() { return /* binding */ SectionListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list-routing.module */ 62009);
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page */ 97712);







let SectionListPageModule = class SectionListPageModule {
};
SectionListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SectionListPageRoutingModule
        ],
        declarations: [_section_list_page__WEBPACK_IMPORTED_MODULE_1__.SectionListPage]
    })
], SectionListPageModule);



/***/ }),

/***/ 97712:
/*!*******************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/section-list/section-list.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPage": function() { return /* binding */ SectionListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./section-list.page.html */ 93358);
/* harmony import */ var _section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page.scss */ 10241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let SectionListPage = class SectionListPage {
    constructor(router, healthServices, route, sqliteDB, usersessionService) {
        this.router = router;
        this.healthServices = healthServices;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.usersessionService = usersessionService;
        this.classSecListData = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (this.route.snapshot.queryParamMap.get("classId")) {
            this.classId = this.route.snapshot.queryParamMap.get("classId");
            this.SchoolId = this.route.snapshot.queryParamMap.get("SchoolId");
        }
        this.usernameId = this.usersessionService.emis_username();
        console.log('user', this.usernameId);
        this.checkLocalExistSecList();
        // this.getClassSecData();
    }
    // Check Local Data Exist Method_________________________________________________________________________________*
    checkLocalExistSecList() {
        this.sqliteDB.checkDataExistsWithConditions('ClassSec', "SchlId", this.SchoolId).then((res) => {
            if (res == true) {
                this.getSecLocalDB(); // Local Data
            }
            else {
                if (this.SchoolId) {
                    this.getClassSecData(); // From Server
                }
            }
        });
    }
    getClassSecData() {
        this.healthServices.getTotalClassData(this.SchoolId).subscribe((response) => {
            this.classSecListData = response.result;
            this.filterSec = this.classSecListData.filter((item) => item.class_studying_id === this.classId);
            console.log(this.filterSec);
            this.idData = this.SchoolId;
            response.result.forEach(element => {
                this.saveClassLocalDB(element);
            });
            this.getSecLocalDB();
        });
    }
    getSecLocalDB() {
        let query = 'SELECT ClassSection as class_section , Classid as class_studying_id FROM ClassSec' +
            ' WHERE SchlId = "' + this.SchoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.classSecListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.classSecListData.push(data.rows.item(i));
                }
                this.filterSec = this.classSecListData.filter((item) => item.class_studying_id === this.classId);
                console.log(this.filterSec);
                this.filterSec = this.filterSec.sort((a, b) => a.class_section.localeCompare(b.class_section));
                this.idData = this.SchoolId;
                // this.filterSec = [...new Map(this.classSecListData.map(item => [JSON.stringify(item.ClassSection), item.ClassSection])).values()];
            }
            else {
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/class-list']);
    }
    nextPage(class_studying_id, class_section, SchoolId) {
        this.router.navigate(['/tabs/student-list'], {
            queryParams: { class_studying_id, class_section, SchoolId, "data": "add" }
        });
    }
    saveClassLocalDB(element) {
        const datainsert = 'INSERT INTO ClassSec VALUES (?,?,?,?,?,?,?)';
        this.sqliteDB.insert(datainsert, [null, this.SchoolId, this.SchoolId, element.IndexId, element.screening_date, element.class_section, element.class_studying_id]).then(insertres => {
            if (insertres) {
                console.log('class info inserted');
            }
        });
    }
};
SectionListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService }
];
SectionListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-section-list',
        template: _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SectionListPage);



/***/ }),

/***/ 10241:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/section-list/section-list.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 5px;\n  zoom: 1.3;\n}\n\n.pt-15 {\n  font-size: 18px;\n  padding-left: 2%;\n}\n\n.class-card {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  font-size: 19px;\n  background-color: cadetblue;\n  color: aliceblue;\n  font-weight: bold;\n}\n\n.square-container {\n  padding: 10px 5px;\n}\n\n.card-class {\n  text-align: center;\n  margin: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.label-class {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.label-section {\n  font-size: 15px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDRTtFQUNFLGlCQUFBO0FBRUo7O0FBQ0U7RUFFQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0g7O0FBQ0U7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVFO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0Usb0JBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJzZWN0aW9uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgem9vbTogMS4zO1xyXG4gIH1cclxuICAucHQtMTUge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlOyBcclxuICB9XHJcbiAgXHJcbiAgLmNsYXNzLWNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLnNxdWFyZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzoxMHB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY2xhc3NcclxuICB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1jbGFzc1xyXG4gIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbC1zZWN0aW9uXHJcbiAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gIH1cclxuICAucHQtMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 93358:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/section-list/section-list.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Section List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{usernameId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\"> \r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"padding-left: 15px;padding-top: 15px;font-size: 16px;\"> Class</ion-col>\r\n    <ion-col size=\"12\" style=\"padding-left: 15px;color: var(--ion-color-primary);;font-size: 16px;\"> \r\n     <span *ngIf=\"classId<13\">{{classId}} Std</span>\r\n       <span *ngIf=\"classId == 13\">LKG </span>\r\n       <span *ngIf=\"classId == 14\">UKG </span>\r\n       <span *ngIf=\"classId == 15\">PRE-KG </span>\r\n    </ion-col>\r\n    <ion-col size=\"12\" >\r\n    <div style=\"border-bottom: 1px solid #aaaabb;margin-left: 9px;\r\n    margin-right: 9px;\"></div></ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"grid-padding\">\r\n  <ion-row  class=\"square-container\">\r\n    <ion-col size=\"4\"  *ngFor=\"let class of filterSec\" style=\"padding-bottom: 15px;\">\r\n      <ion-card class=\"card-class\" (click)=\"nextPage(class.class_studying_id,class.class_section,idData)\">\r\n        <div class=\"ion-margin-top ion-margin-bottom\">\r\n          <ion-label>\r\n            <p class=\"label-section gray-text\">Section</p>\r\n            <p class=\"label-section\">{{class.class_section}}</p>\r\n          </ion-label>\r\n        </div>\r\n      </ion-card>\r\n    </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n   \r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pmoa_pmoa_section-list_section-list_module_ts-es2015.js.map