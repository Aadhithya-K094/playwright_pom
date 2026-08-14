(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_uniform_uniform-classlist_uniform-classlist_module_ts"],{

/***/ 33324:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniformClasslistPageRoutingModule": function() { return /* binding */ UniformClasslistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniform-classlist.page */ 38172);




const routes = [
    {
        path: '',
        component: _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_0__.UniformClasslistPage
    }
];
let UniformClasslistPageRoutingModule = class UniformClasslistPageRoutingModule {
};
UniformClasslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniformClasslistPageRoutingModule);



/***/ }),

/***/ 36161:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniformClasslistPageModule": function() { return /* binding */ UniformClasslistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _uniform_classlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniform-classlist-routing.module */ 33324);
/* harmony import */ var _uniform_classlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniform-classlist.page */ 38172);







let UniformClasslistPageModule = class UniformClasslistPageModule {
};
UniformClasslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _uniform_classlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniformClasslistPageRoutingModule
        ],
        declarations: [_uniform_classlist_page__WEBPACK_IMPORTED_MODULE_1__.UniformClasslistPage]
    })
], UniformClasslistPageModule);



/***/ }),

/***/ 38172:
/*!***************************************************************************!*\
  !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniformClasslistPage": function() { return /* binding */ UniformClasslistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_uniform_classlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./uniform-classlist.page.html */ 26798);
/* harmony import */ var _uniform_classlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniform-classlist.page.scss */ 81883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);








let UniformClasslistPage = class UniformClasslistPage {
    constructor(router, route, sqliteDB, userService, alert) {
        this.router = router;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.userService = userService;
        this.alert = alert;
        this.classList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolName = this.routeData.queryParams.schoolName;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.region = this.routeData.queryParams.region;
        this.measurement_completed = this.routeData.queryParams.measurement_completed;
        this.sectionActive = false;
        this.class_studying_id = '';
        this.onSelectTotalStudent();
    }
    studentData() {
        this.classList = [];
        let data;
        let datas = { "school_id": this.schoolId };
        // fetch('https://d1wpyxz35bzzz4.cloudfront.net/noon_meals_stu_list_stage_'+this.schoolId+'_json.json').then(res => res.json()).then(manage => {
        //   if(manage){
        //     this.insertLocalData(manage)
        //     data = manage
        // this.studentlist = manage
        this.userService.studentlistData(datas).subscribe((res) => {
            if (res.dataStatus) {
                res.result.forEach(element => {
                    if (element.status === null || element.status === '') {
                        element.status = '0';
                    }
                });
                this.studentlist = res.result;
                var result = this.studentlist.filter(function (a) {
                    var key = a.class_studying_id + '|' + a.class_section;
                    if (!this[key]) {
                        this[key] = true;
                        return true;
                    }
                }, Object.create(null));
                let final = [];
                result.forEach((element) => {
                    let id = element.class_studying_id;
                    if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 1 || id == 2 || id == 3) {
                        final.push(element);
                    }
                });
                let cls = [...new Set(final.map(x => x.class_studying_id))];
                cls.forEach((val) => {
                    for (let i = 0; i < final.length; i++) {
                        if (val == final[i].class_studying_id) {
                            let obj = { 'class': final[i].class_studying_id, 'sec': final[i].class_section };
                            this.classList.push(obj);
                        }
                    }
                });
                const uniqueAddresses1 = Array.from(new Set(this.classList.map(a => a.class)))
                    .map(class_studying_id => {
                    return this.classList.find(a => a.class === class_studying_id);
                });
                uniqueAddresses1.sort((a, b) => a.class - b.class);
                this.uniqueclass = uniqueAddresses1;
            }
            else {
                this.alert.error(res.message);
            }
        });
    }
    selectSection(class_studying_id) {
        this.class_studying_id = class_studying_id;
        this.sectionActive = true;
        this.studentSeclist = this.classList.filter(item => item.class == class_studying_id).sort((a, b) => {
            // Assuming you want to sort alphabetically by a property called 'name'
            const nameA = a.sec.toUpperCase(); // Convert to uppercase to ensure case-insensitive sorting
            const nameB = b.sec.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0; // If names are equal
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/uniform-schoollist']);
    }
    navigateNext(class_studying_id, sec) {
        this.router.navigate(['/tabs/uniform-studentlist'], { queryParams: { class_studying_id: class_studying_id, sec: sec, schoolId: this.schoolId, schoolName: this.schoolName, region: this.region, measurement_completed: this.measurement_completed } });
    }
    onSelectTotalStudent() {
        this.studentDatalist = [];
        this.classList = [];
        let manage = [];
        let query = 'SELECT * FROM uniformStudentlistData' +
            ' WHERE school_id = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    manage.push(data.rows.item(i));
                }
                this.studentlist = manage;
                var result = this.studentlist.filter(function (a) {
                    var key = a.class_studying_id + '|' + a.class_section;
                    if (!this[key]) {
                        this[key] = true;
                        return true;
                    }
                }, Object.create(null));
                let final = [];
                result.forEach((element) => {
                    let id = element.class_studying_id;
                    if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 1 || id == 2 || id == 3) {
                        final.push(element);
                    }
                });
                let cls = [...new Set(final.map(x => x.class_studying_id))];
                cls.forEach((val) => {
                    for (let i = 0; i < final.length; i++) {
                        if (val == final[i].class_studying_id) {
                            let obj = { 'class': final[i].class_studying_id, 'sec': final[i].class_section };
                            this.classList.push(obj);
                        }
                    }
                });
                const uniqueAddresses1 = Array.from(new Set(this.classList.map(a => a.class)))
                    .map(class_studying_id => {
                    return this.classList.find(a => a.class === class_studying_id);
                });
                uniqueAddresses1.sort((a, b) => a.class - b.class);
                this.uniqueclass = uniqueAddresses1;
            }
            else {
                this.studentData();
            }
        });
    }
    insertLocalData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO uniformStudentlistData VALUES (?,?,?,?,?,?,?,?,?,?)",
                [null, element.school_id, element.school_name, element.user_id, element.name, element.class_studying_id,
                    element.class_section, element.gender, element.phone_number, element.status]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Student data", result);
            // this.onSelectTotalStudent()
        });
    }
    ionViewWillLeave() {
        this.uniqueclass = [];
        this.studentSeclist = [];
        this.sectionActive = false;
    }
};
UniformClasslistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
UniformClasslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-uniform-classlist',
        template: _raw_loader_uniform_classlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_uniform_classlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniformClasslistPage);



/***/ }),

/***/ 81883:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".classcard {\n  padding: 10%;\n  font-size: medium;\n  font-weight: bold;\n  border: 1px solid red;\n  border-radius: 5px;\n  color: #114a53;\n}\n\n.classcardSelect {\n  padding: 10%;\n  font-size: medium;\n  font-weight: bold;\n  border: 1px solid red;\n  border-radius: 5px;\n  background-color: #114a53;\n  color: white;\n}\n\n.rowclass {\n  padding: 5%;\n  background-color: #c5cbd0;\n  margin: 3%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaWZvcm0tY2xhc3NsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoidW5pZm9ybS1jbGFzc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICMxMTRhNTM7XHJcbn1cclxuXHJcbi5jbGFzc2NhcmRTZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTRhNTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvd2NsYXNzIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2JkMDtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 26798:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uniform/uniform-classlist/uniform-classlist.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title> {{schoolName}}\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-row class=\"rowclass\">\r\n      <ion-col size=\"12\">\r\n        <div> Class</div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngFor=\"let data of uniqueclass\" style=\"text-align: center;\">\r\n       <div (click)=\"selectSection(data.class)\" *ngIf=\"class_studying_id == data.class\">\r\n          <ion-card class=\"classcardSelect\"> {{data.class}} </ion-card>\r\n       </div> \r\n       <div (click)=\"selectSection(data.class)\" *ngIf=\"class_studying_id != data.class\">\r\n        <ion-card class=\"classcard\"> {{data.class}} </ion-card>\r\n       </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"rowclass\" *ngIf=\"sectionActive\">\r\n      <ion-col size=\"12\">\r\n        <div> Section </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngFor=\"let data of studentSeclist\" style=\"text-align: center;\">\r\n        <ion-card class=\"classcard\" (click)=\"navigateNext(data.class,data.sec)\"> {{data.sec}} </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_uniform_uniform-classlist_uniform-classlist_module_ts-es2015.js.map