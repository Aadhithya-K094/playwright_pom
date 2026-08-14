(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_ndd-tablet_ndd-tablet_module_ts"],{

/***/ 64157:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NddTabletPageRoutingModule": function() { return /* binding */ NddTabletPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ndd-tablet.page */ 42753);




const routes = [
    {
        path: '',
        component: _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_0__.NddTabletPage
    }
];
let NddTabletPageRoutingModule = class NddTabletPageRoutingModule {
};
NddTabletPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NddTabletPageRoutingModule);



/***/ }),

/***/ 61312:
/*!***********************************************************!*\
  !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NddTabletPageModule": function() { return /* binding */ NddTabletPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ndd_tablet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ndd-tablet-routing.module */ 64157);
/* harmony import */ var _ndd_tablet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ndd-tablet.page */ 42753);







let NddTabletPageModule = class NddTabletPageModule {
};
NddTabletPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ndd_tablet_routing_module__WEBPACK_IMPORTED_MODULE_0__.NddTabletPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_ndd_tablet_page__WEBPACK_IMPORTED_MODULE_1__.NddTabletPage]
    })
], NddTabletPageModule);



/***/ }),

/***/ 42753:
/*!*********************************************************!*\
  !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NddTabletPage": function() { return /* binding */ NddTabletPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ndd_tablet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ndd-tablet.page.html */ 21714);
/* harmony import */ var _ndd_tablet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ndd-tablet.page.scss */ 77374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);











let NddTabletPage = class NddTabletPage {
    constructor(router, usersessionService, fb, alert, userService, cdref, pmoaService, route, alertService) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.fb = fb;
        this.alert = alert;
        this.userService = userService;
        this.cdref = cdref;
        this.pmoaService = pmoaService;
        this.route = route;
        this.alertService = alertService;
        this.toggleValue = '2';
        this.selected = true;
        this.class1 = [];
    }
    ngOnInit() {
        this.initialValidator();
        this.myForm = this.fb.group({
            isChecked: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            toggleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            isChecked1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            toggleValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            date1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        });
    }
    initialValidator() {
        this.form = this.fb.group({
            NddArray: this.fb.array([]),
        });
    }
    checkbox() {
        if (this.myForm.value.isChecked1) {
            for (let i = 0; i < this.form.value.NddArray.length; i++) {
                this.form.controls['NddArray']['controls'][i].controls['isChecked'].setValue(true);
            }
        }
        else {
            this.myForm.controls.isChecked.setValue(false);
            for (let i = 0; i < this.form.value.NddArray.length; i++) {
                this.form.controls['NddArray']['controls'][i].controls['isChecked'].setValue(false);
            }
        }
    }
    ionViewWillEnter() {
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD'); // Get current date in 'YYYY-MM-DD' format
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
        this.routeData = this.route.snapshot;
        this.bloack_id = this.routeData.queryParams.id;
        this.schol_id = this.routeData.queryParams.school_id;
        this.schol_name = this.routeData.queryParams.school_name;
        this.class = this.routeData.queryParams.class;
        this.section = this.routeData.queryParams.section;
        this.UserName = this.usersessionService.emis_username();
        this.useriddata = this.usersessionService.user_id();
        this.getstudentlist();
    }
    onGoButton() {
        this.router.navigate(['/tabs/ndd/section-list'], {
            queryParams: { id: this.bloack_id, school_id: this.schol_id, school_name: this.schol_name, class: this.class, section: this.section }
        });
    }
    toggleChanged(event) {
        this.toggleValue = event.detail.checked ? '1' : '2';
        if (this.myForm.value.toggleValue1) {
            for (let i = 0; i < this.form.value.NddArray.length; i++) {
                if (this.form.controls['NddArray']['controls'][i].value['AlbendaStatus'] != 1) {
                    this.form.controls['NddArray']['controls'][i].controls['toggleValue'].setValue(true);
                }
            }
        }
        else {
            for (let i = 0; i < this.form.value.NddArray.length; i++) {
                if (this.form.controls['NddArray']['controls'][i].value['AlbendaStatus'] != 1) {
                    this.form.controls['NddArray']['controls'][i].controls['toggleValue'].setValue(false);
                }
            }
        }
    }
    toggleChangedDate(event) {
        if (this.myForm.value.date1) {
            this.myForm.controls.date.setValue(this.myForm.value.date1);
            for (let i = 0; i < this.form.value.NddArray.length; i++) {
                if (!this.form.value.NddArray[i].date) {
                    this.form.controls['NddArray']['controls'][i].controls['date'].setValue(this.myForm.value.date1);
                }
            }
        }
    }
    getstudentlist() {
        this.pmoaService.studentlist(this.schol_id).subscribe((res) => {
            this.stutlist = res.result.filter(y => y.class == this.class && y.sections == this.section);
            for (let i = 0; i < this.stutlist.length; i++) {
                this.tabelt = this.stutlist[i].AlbendaStatus;
                this.stutlist[i].checked = "2";
                this.stutlist[i].toggle = "2";
                this.stutlist[i].date = "";
            }
            // this.getpatch()
            let filterSchoolList = this.stutlist.filter(dd => +dd.AlbendaStatus == 1 && dd.AlbendaTabDate);
            if (filterSchoolList.length == this.stutlist.length) {
                this.buttonOpen = true;
            }
            else {
                this.buttonOpen = false;
            }
            this.loadQuestion(this.stutlist);
        });
    }
    loadQuestion(data) {
        const control = this.form.controls['NddArray'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.form.controls.NddArray;
        for (let i = 0; i < data.length; i++) {
            this.queslist.push(this.fb.group({
                indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].IndexId),
                StudId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].studid),
                StudName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].studname),
                isChecked: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].isChecked),
                toggleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].toggleValue),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].AlbendaTabDate, null),
                AlbendaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(data[i].AlbendaStatus, null),
            }));
            // this.queslist.controls[i]['controls'].StudId
        }
        this.cdref.detectChanges();
    }
    changeindex(id) {
        console.log(id, "p");
    }
    onSumbit() {
        var finaldata = [];
        for (let i = 0; i < this.form.value.NddArray.length; i++) {
            if (this.form.value.NddArray[i].toggleValue && this.form.value.NddArray[i].date != null) {
                // this.form.value.NddArray[i].isChecked!= null && 
                finaldata.push({
                    "IndexId": this.form.value.NddArray[i].indexid ? this.form.value.NddArray[i].indexid : '',
                    "studid": this.form.value.NddArray[i].StudId,
                    "AlbendaStatus": this.form.value.NddArray[i].toggleValue == true ? 1 : 2,
                    "AlbendaTabDate": moment__WEBPACK_IMPORTED_MODULE_4___default()(this.form.value.NddArray[i].date).format("yyyy-MM-DD")
                });
            }
        }
        if (finaldata.length > 0) {
            var data = {
                "records": finaldata
            };
            this.pmoaService.tabeltpost(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (res.dataStatus) {
                    this.alertService.alert(res.message);
                    // this.initialValidator();
                    this.getstudentlist();
                    // this.submitted = false
                }
                else {
                    this.alertService.warning(res.message);
                    // this.submitted = true
                }
            }));
        }
        else {
            this.alert.warning('Please Select field ');
        }
    }
};
NddTabletPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_5__.PmoaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
NddTabletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ndd-tablet',
        template: _raw_loader_ndd_tablet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ndd_tablet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NddTabletPage);



/***/ }),

/***/ 77374:
/*!***********************************************************!*\
  !*** ./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maindiv {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.ion-checkbox {\n  --size: 20px;\n  --checkbox-background-checked: #6815ec;\n}\n\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid #6815ec;\n}\n\n.style {\n  font-size: 16px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5kZC10YWJsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoibmRkLXRhYmxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmlvbi1jaGVja2JveHtcclxuICAgIC0tc2l6ZTogMjBweDtcclxuICAgIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjNjgxNWVjO1xyXG59XHJcbmlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ODE1ZWM7XHJcbiAgfVxyXG4gIC5zdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */");

/***/ }),

/***/ 21714:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/ndd-tablet/ndd-tablet.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">NDD</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content>\r\n<div>\r\n    <form [formGroup]=\"myForm\">\r\n\r\n      <ion-card style=\"margin: 20px;\">\r\n        <ion-row style=\"margin: 20px;\"> \r\n          <ion-col size=\"6\" style=\"text-align: center;\">\r\n            <!-- <ion-checkbox class=\"ion-checkbox\" formControlName=\"isChecked1\" (ionChange)=\"checkbox()\">Themed checkbox</ion-checkbox>\r\n           <ion-label style=\"padding: 10px;\" class=\"style\">Common Select</ion-label> -->\r\n           <ion-label class=\"style\" style=\"font-size: large;font-weight: 600;text-align: center;\">Common Select</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label class=\"style\"></ion-label>\r\n            <ion-toggle [checked]=\"toggleValue == '1'\"  (ionChange)=\"toggleChanged($event)\" formControlName=\"toggleValue1\" ></ion-toggle>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n             <ion-label class=\"style\" style=\"margin-left: 20px;\" >Date</ion-label>\r\n            <ion-datetime  (ionChange)=\"toggleChangedDate($event)\" placeholder=\"Select Date\" [min]=\"currentDate\" \r\n            [max]=\"maxDate\" formControlName=\"date1\"></ion-datetime>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div formArrayName=\"NddArray\" style=\"margin: 20px;font-size: smaller;font-weight: 500;text-align: center;\">\r\n          <ion-row  *ngFor=\"let i = index ; let item of form.get('NddArray')['controls'];\" [formGroupName]=\"i\" style=\"background-color: aliceblue;margin-bottom: 10px\">\r\n            <!-- <ion-col size=\"2\">\r\n              <ion-checkbox class=\"ion-checkbox\" formControlName=\"isChecked\" (click)=\"changeindex(i)\"></ion-checkbox>\r\n            </ion-col> -->\r\n            <ion-col size=\"6\" style=\"    text-align: left;\r\n            align-self: center;\">\r\n              <ion-label>{{ item.value.StudName }}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-toggle *ngIf=\"item.value.AlbendaStatus == 1\" [disabled]=\"true\" [checked]=\"true\" ></ion-toggle>\r\n              <ion-toggle *ngIf=\"item.value.AlbendaStatus != 1\" [disabled]=\"false\" formControlName=\"toggleValue\"></ion-toggle>\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf=\"item.value.AlbendaStatus != 1\">\r\n              <ion-datetime placeholder=\"Select Date\" [min]=\"currentDate\" \r\n              [max]=\"maxDate\"  formControlName=\"date\"></ion-datetime>\r\n            </ion-col>\r\n            <ion-col size=\"4\" *ngIf=\"item.value.AlbendaStatus == 1\" style=\"color: grey;text-align: right;\r\n            align-self: center;\">\r\n              <ion-label>{{ item.value.date | date: 'dd/MM/yyyy' }}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </form>\r\n\r\n    \r\n      <div *ngIf=\"!buttonOpen\" class=\"btn-row\" size=\"12\" style=\"text-align: center;\">\r\n        <ion-button (click)=\"onSumbit()\" style=\"color:white;\">save</ion-button>\r\n      </div>\r\n    </form>\r\n    </div>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ndd_ndd-tablet_ndd-tablet_module_ts-es2015.js.map