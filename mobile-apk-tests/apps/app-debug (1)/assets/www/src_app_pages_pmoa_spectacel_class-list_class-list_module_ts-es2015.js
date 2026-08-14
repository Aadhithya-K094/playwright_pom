(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_spectacel_class-list_class-list_module_ts"],{

/***/ 88145:
/*!******************************************************************************!*\
  !*** ./src/app/pages/pmoa/spectacel/class-list/class-list-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageRoutingModule": function() { return /* binding */ ClassListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list.page */ 32763);




const routes = [
    {
        path: '',
        component: _class_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassListPage
    }
];
let ClassListPageRoutingModule = class ClassListPageRoutingModule {
};
ClassListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassListPageRoutingModule);



/***/ }),

/***/ 12142:
/*!**********************************************************************!*\
  !*** ./src/app/pages/pmoa/spectacel/class-list/class-list.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageModule": function() { return /* binding */ ClassListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list-routing.module */ 88145);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page */ 32763);







let ClassListPageModule = class ClassListPageModule {
};
ClassListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListPageRoutingModule
        ],
        declarations: [_class_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassListPage]
    })
], ClassListPageModule);



/***/ }),

/***/ 32763:
/*!********************************************************************!*\
  !*** ./src/app/pages/pmoa/spectacel/class-list/class-list.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPage": function() { return /* binding */ ClassListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-list.page.html */ 1262);
/* harmony import */ var _class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page.scss */ 49790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);







let ClassListPage = class ClassListPage {
    constructor(router, healthServices, route, sqliteDB) {
        this.router = router;
        this.healthServices = healthServices;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.totalstds = 0;
        this.notRec = 0;
        this.verifiedRecd = 0;
        this.defRet = 0;
        this.corVerifiedRecd = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (this.route.snapshot.queryParamMap.get("SchoolId")) {
            // this.schoolId = "30206"
            this.schoolId = this.route.snapshot.queryParamMap.get("SchoolId");
            this.SchoolName = this.route.snapshot.queryParamMap.get("SchoolName");
        }
        // this.checkLocalExistClassList()
        // this.getClassSecData()
        this.getClassSecData();
        this.getTotalClassData();
    }
    // Check Local Data Exist Method_________________________________________________________________________________*
    checkLocalExistClassList() {
        this.sqliteDB.checkDataExistsWithConditions('ClassSec', "SchlId", this.schoolId).then((res) => {
            if (res == true) {
                console.log("local");
                this.getClassLocalDB(); // Local Data
            }
            else {
                console.log("server");
                if (this.schoolId) {
                    this.getClassSecData(); // From Server
                }
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/spectacel-school-list']);
    }
    nextPage(classId, SchoolId, classSection) {
        this.router.navigate(['/tabs/spectacel-section-list'], {
            queryParams: { classId, SchoolId, classSection: JSON.stringify(classSection) }
        });
    }
    studentPage(class_studying_id, class_section, SchoolId) {
        this.router.navigate(['/tabs/spectacel-student-list'], {
            queryParams: { class_studying_id, class_section, SchoolId }
        });
    }
    getTotalClassData() {
        this.healthServices.StudRefSpecs(this.schoolId).subscribe((response) => {
            this.totalstds = response.result[0].total;
            this.notRec = response.result[0].s1;
            this.verifiedRecd = response.result[0].s2;
            this.defRet = response.result[0].s3;
            this.corVerifiedRecd = response.result[0].s4;
            this.toBeVerified = (parseInt(response.result[0].total)) - Number(response.result[0].verified);
        });
    }
    getClassSecData() {
        this.healthServices.SpecsNeedClsList(this.schoolId).subscribe((response) => {
            this.classSecListData = [];
            // Grouping by class_studying_id
            const groupedData = response.result.reduce((acc, item) => {
                const existing = acc.find(obj => obj.class_studying_id === item.class_studying_id);
                if (existing) {
                    existing.class_section.push(item);
                    existing.to_be_verified += Number(item.to_be_verified);
                }
                else {
                    acc.push({
                        class_studying_id: item.class_studying_id,
                        class_section: [item],
                        to_be_verified: Number(item.to_be_verified)
                    });
                }
                return acc;
            }, []);
            console.log(groupedData);
            this.classSecListData = groupedData;
            this.idData = this.schoolId;
        });
    }
    isClassSectionValid(classSection) {
        return classSection !== "" && classSection !== null && !(Array.isArray(classSection) && classSection.length === 0);
    }
    getClassLocalDB() {
        let query = 'SELECT Classid as class_studying_id FROM ClassSec' +
            ' WHERE SchlId = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.classSecListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.classSecListData.push(data.rows.item(i));
                }
                this.classSecListData = [...new Map(this.classSecListData.map(item => [JSON.stringify(item.class_studying_id), item.class_studying_id])).values()];
                let tesstData = this.classSecListData.sort((n1, n2) => n1 - n2);
                this.idData = this.schoolId;
            }
            else {
                // this.getBlocklistServer();
            }
        });
    }
    saveClassLocalDB(element) {
        const datainsert = 'INSERT INTO ClassSec VALUES (?,?,?,?,?,?,?)';
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.schoolId, element.IndexId, element.screening_date, element.class_section, element.class_studying_id]).then(insertres => {
            if (insertres) {
                console.log('class info inserted');
            }
        });
    }
    onSync() {
        let query = 'DELETE FROM  ClassSec';
        // if (data.rowsAffected > 0) {
        //   this.getBlocklistServer();
        // }
        this.getTotalClassData();
        this.getClassSecData();
        //     return this.sqliteDB.getDataLocalDB(query).then(data1 => {
        //     console.log(data1,"deleted Class data")
        //     if (data1.rowsAffected > 0) {
        //       this.getClassSecData();
        //     }
        // });
    }
};
ClassListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService }
];
ClassListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-class-list',
        template: _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassListPage);



/***/ }),

/***/ 49790:
/*!**********************************************************************!*\
  !*** ./src/app/pages/pmoa/spectacel/class-list/class-list.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 5px;\n  zoom: 1.3;\n}\n\n.pt-15 {\n  font-size: 18px;\n  padding-left: 2%;\n}\n\n.labelPMOAtext {\n  color: #009045;\n  font-size: 15px;\n}\n\n.labelPMOA {\n  color: #009045;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.bar-PMOA {\n  background-color: #009045;\n}\n\n.square-container {\n  padding: 10px 5px;\n}\n\n.card-class {\n  text-align: center;\n  margin: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.label-class {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.label-section {\n  font-size: 15px;\n  text-align: center;\n  color: #000;\n}\n\n.barTotal-container {\n  background-color: #8C66AF;\n}\n\n.labelTotal {\n  color: #8C66AF;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText {\n  color: #8C66AF;\n  font-size: 15px;\n}\n\n.labelScn {\n  color: #9D5716;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntext {\n  color: #9D5716;\n  font-size: 15px;\n}\n\n.labelScnToBeVerified {\n  color: #ff7b00;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntextToBeVerified {\n  color: #ff7b00;\n  font-size: 15px;\n}\n\n.labelReported {\n  color: #FF6E6E;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtext {\n  color: #FF6E6E;\n  font-size: 15px;\n}\n\n.bar-Scn {\n  background-color: #9D5716;\n}\n\n.bar-ScnMe {\n  background-color: #FF6E6E;\n}\n\n.card-widget {\n  border-radius: 10px;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n\n.labelCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtextCorVerifiedRec {\n  color: #07D3B0;\n  font-size: 15px;\n}\n\n.bar-ScnMe-CorVerifiedRec {\n  background-color: #07D3B0;\n}\n\n.bar-ScnMe-ToBeVerified {\n  background-color: #ff7b00;\n}\n\n.border-red {\n  border: 2px solid red;\n}\n\n.border-green {\n  border: 2px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBRUE7O0FBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUE7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFBQTtFQUVHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFSDs7QUFBQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQ0E7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVBOztBQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFFQTs7QUFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFFQTs7QUFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBRUE7O0FBQ0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0E7O0FBQ0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQUNBOztBQUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNBOztBQUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFDQTs7QUFDQTtFQUNBLHlCQUFBO0FBRUE7O0FBQUE7RUFDQSx5QkFBQTtBQUdBOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0Usb0JBQUE7QUFPRjs7QUFMQTtFQUNFLFlBQUE7QUFRRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFDRSx5QkFBQTtBQVFGOztBQUxBO0VBQ0UseUJBQUE7QUFRRjs7QUFMQTtFQUNFLHFCQUFBO0FBUUY7O0FBTEE7RUFDRSx1QkFBQTtBQVFGIiwiZmlsZSI6ImNsYXNzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgem9vbTogMS4zO1xyXG59XHJcbi5wdC0xNSB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7IFxyXG59XHJcbi5sYWJlbFBNT0F0ZXh0IFxyXG57XHJcbmNvbG9yOiAjMDA5MDQ1O1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmxhYmVsUE1PQVxyXG57XHJcbmNvbG9yOiAjMDA5MDQ1O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmJhci1QTU9BIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MDQ1O1xyXG4gIH1cclxuICBcclxuLnNxdWFyZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzoxMHB4IDVweDtcclxuICB9XHJcbiAgXHJcbi5jYXJkLWNsYXNzXHJcbntcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubGFiZWwtY2xhc3Ncclxue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxufVxyXG5cclxuLmxhYmVsLXNlY3Rpb25cclxue1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmJhclRvdGFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhDNjZBRjtcclxufVxyXG4ubGFiZWxUb3RhbCBcclxue1xyXG5jb2xvcjogIzhDNjZBRjtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sYWJlbFRvdGFsVGV4dCBcclxue1xyXG5jb2xvcjogIzhDNjZBRjtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5sYWJlbFNjbiBcclxue1xyXG5jb2xvcjogIzlENTcxNjtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sYWJlbFNjbnRleHQgXHJcbntcclxuY29sb3I6ICM5RDU3MTY7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmxhYmVsU2NuVG9CZVZlcmlmaWVkIFxyXG57XHJcbmNvbG9yOiAjZmY3YjAwO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmxhYmVsU2NudGV4dFRvQmVWZXJpZmllZCAgXHJcbntcclxuY29sb3I6ICNmZjdiMDA7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubGFiZWxSZXBvcnRlZCBcclxue1xyXG5jb2xvcjojRkY2RTZFOztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sYWJlbFJlcG9ydGVkdGV4dCBcclxue1xyXG5jb2xvcjojRkY2RTZFOztcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5iYXItU2NuIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzlENTcxNjtcclxufVxyXG4uYmFyLVNjbk1lIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU2RTtcclxufVxyXG4uY2FyZC13aWRnZXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnB0LTE1IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxufSBcclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206Mi4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn0gXHJcbi50b29sYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn0gXHJcbmlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7O1xyXG59IFxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLmxhYmVsQ29yVmVyaWZpZWRSZWMge1xyXG4gIGNvbG9yOiMwN0QzQjA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5sYWJlbFJlcG9ydGVkdGV4dENvclZlcmlmaWVkUmVjIHtcclxuICBjb2xvcjojMDdEM0IwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmJhci1TY25NZS1Db3JWZXJpZmllZFJlYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3RDNCMDtcclxufVxyXG5cclxuLmJhci1TY25NZS1Ub0JlVmVyaWZpZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdiMDA7XHJcbn1cclxuXHJcbi5ib3JkZXItcmVkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JlZW4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ 1262:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/spectacel/class-list/class-list.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Class List</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" style=\"color:white\" (click)=\"onSync()\">\r\n      <ion-icon name=\"sync-outline\" style=\"zoom:2.0\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid class=\"grid-padding\">\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"barTotal-container \" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelTotal\">{{totalstds}}</p>\r\n              <p class=\"labelTotalText\">Total Students</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/stdCount.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <!-- <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScn\">{{notRec}}</p>\r\n              <p class=\"labelScntext\">Verified By PMOA</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card> -->\r\n\r\n\r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe-CorVerifiedRec\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelCorVerifiedRec\">{{corVerifiedRecd}}</p>\r\n              <p class=\"labelReportedtextCorVerifiedRec\">Verified And Received By Student</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speVerifiedRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScn\">{{verifiedRecd}}</p>\r\n              <p class=\"labelScntext\">Defective</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 10px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/speNotRec.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  \r\n    <!-- <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelReported\">{{defRet}}</p>\r\n              <p class=\"labelReportedtext\">Not Received</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"padding-top: 13px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/spcDefAndRet.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card> -->\r\n    \r\n    <ion-card class=\"card-widget\">\r\n      <ion-row>\r\n        <ion-col class=\"bar-ScnMe-ToBeVerified\" size=\"0.1\"></ion-col>\r\n        <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n          <div class=\"content-text content\">\r\n            <ion-label>\r\n              <p class=\"labelScnToBeVerified\">{{toBeVerified}}</p>\r\n              <p class=\"labelScntextToBeVerified\">To be verified</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\"  style=\"padding-top: 20px; padding-left: 20px;\">\r\n          <div> <img src=\"../../../../assets/icons/pmoa/spectacle.svg\" /><br />\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"padding-left: 15px;padding-top: 15px;font-size: 16px;\"> School Name</ion-col>\r\n    <ion-col size=\"12\" style=\"padding-left: 15px;color: var(--ion-color-primary);font-size: 16px;\"> {{SchoolName}} </ion-col>\r\n    <ion-col size=\"12\">\r\n      <div style=\"border-bottom: 1px solid #aaaabb;margin-left: 9px;margin-right: 9px;\"></div></ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"square-container\">\r\n      <ion-col size=\"4\" *ngFor=\"let class of classSecListData\" style=\"padding-bottom: 15px;\"\r\n      \r\n      [class.d-none]=\"class>12\">\r\n        <ion-card class=\"card-class\" [ngClass]=\"{'border-red': class.to_be_verified > 0, 'border-green': class.to_be_verified == 0}\" \r\n          (click)=\"class.class_studying_id == 99 ? studentPage(class.class_studying_id,class.class_section,idData) : nextPage(class.class_studying_id, idData, class.class_section)\">\r\n          <div class=\"ion-margin-top ion-margin-bottom\">\r\n            <ion-label>\r\n              <p class=\"label-section gray-text\">Class</p>\r\n              <p class=\"label-class\" *ngIf=\"class.class_studying_id < 13\">{{class.class_studying_id}} Std </p>\r\n              <p class=\"label-class\" *ngIf=\"class.class_studying_id == 99\">Other Classes</p>\r\n              <p class=\"label-class\" *ngIf=\"class.class_studying_id == 13\">LKG </p>\r\n              <p class=\"label-class\" *ngIf=\"class.class_studying_id == 14\">UKG </p>\r\n              <p class=\"label-class\" *ngIf=\"class.class_studying_id == 15\">PRE-KG </p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pmoa_spectacel_class-list_class-list_module_ts-es2015.js.map