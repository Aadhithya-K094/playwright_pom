(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_classroom-type_classroom-type_module_ts"],{

/***/ 33230:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-type/classroom-type.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomTypePageModule": function() { return /* binding */ ClassroomTypePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _classroom_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classroom-type.page */ 90149);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








const routes = [
    {
        path: '',
        component: _classroom_type_page__WEBPACK_IMPORTED_MODULE_0__.ClassroomTypePage
    }
];
let ClassroomTypePageModule = class ClassroomTypePageModule {
};
ClassroomTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
        ],
        declarations: [_classroom_type_page__WEBPACK_IMPORTED_MODULE_0__.ClassroomTypePage]
    })
], ClassroomTypePageModule);



/***/ }),

/***/ 90149:
/*!******************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-type/classroom-type.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomTypePage": function() { return /* binding */ ClassroomTypePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_classroom_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./classroom-type.page.html */ 8989);
/* harmony import */ var _classroom_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classroom-type.page.scss */ 19593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/file-handler/file-handler.service */ 24954);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);











let ClassroomTypePage = class ClassroomTypePage {
    constructor(fb, router, activateRoute, fileService, apiService, ionicStorage, plt, toastService) {
        this.fb = fb;
        this.router = router;
        this.activateRoute = activateRoute;
        this.fileService = fileService;
        this.apiService = apiService;
        this.ionicStorage = ionicStorage;
        this.plt = plt;
        this.toastService = toastService;
        this.class_list_forClasses = [];
        this.class_list = [{
                class_studying_id: 1,
                class_name: 1
            }, {
                class_studying_id: 2,
                class_name: 2
            },
            {
                class_studying_id: 3,
                class_name: 3
            },
            {
                class_studying_id: 4,
                class_name: 4
            },
            {
                class_studying_id: 5,
                class_name: 5
            },
            {
                class_studying_id: 6,
                class_name: 6
            },
            {
                class_studying_id: 7,
                class_name: 7
            },
            {
                class_studying_id: 8,
                class_name: 8
            },];
        this.section_list = [];
        this.student_list = [];
        this.medium_list = [{
                medium_info_id: 2,
                medium_info_name: "Tamil"
            }, {
                medium_info_id: 3,
                medium_info_name: "English"
            }, {
                medium_info_id: 1,
                medium_info_name: "Others"
            }];
        this.activateRoute.queryParams.subscribe(params => {
            if (params.class_sec_info) {
                this.param_class_sec_info = JSON.parse(params.class_sec_info);
            }
            if (params.class_data) {
                this.param_class_data = JSON.parse(params.class_data);
            }
            if (params.teacher_info) {
                this.param_teacher_data = JSON.parse(params.teacher_info);
            }
        });
        let class_numb;
        let sec_numb;
    }
    ngOnInit() {
        this.classroomTypeForm = this.fb.group({
            class: [this.param_class_sec_info ? this.param_class_sec_info.class_studying_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            section: [this.param_class_sec_info ? this.param_class_sec_info.sections.section : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            teacher: [''],
            class_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            tot_students: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            students_seen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            medium_info: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            medium_info_others: [''],
            teacher_observed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            teacher_emis_id: ['']
        });
        this.class_list_forClasses = this.class_list;
        this.ionicStorage.getData('classroom-data').then(Response => {
            if (Response) {
                let cate_type = Response.classroom_data[1].cate_type.split(' ')[0];
                if (cate_type.toUpperCase() == 'PRIMARY') {
                    this.class_list_forClasses = this.class_list.slice(0, 5);
                }
                else {
                }
            }
        });
        this.ionicStorage.getData('classroom-type').then(Response => {
            if (Response) {
                this.classroomTypeForm.patchValue(Response.classroom_type);
            }
        });
        this.ionicStorage.getData('teacherlist').then(res => {
            if (res) {
                this.teacher_list = res;
            }
            else {
            }
        });
        this.getTemplateFromFile();
    }
    valueChanges(value) {
        if (value == 'multigrade') {
            this.classroomTypeForm.addControl('classes_taken', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
            this.classroomTypeForm.addControl('class_observed', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
            this.classroomTypeForm.removeControl('class');
        }
        else {
            this.classroomTypeForm.addControl('class', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
            this.classroomTypeForm.removeControl('classes_taken');
            this.classroomTypeForm.removeControl('class_observed');
        }
    }
    onSubmit() {
        if (this.plt.is('cordova')) {
            if (this.classroomTypeForm.invalid) {
                Object.keys(this.classroomTypeForm.controls).forEach(field => {
                    const control = this.classroomTypeForm.get(field);
                    control.markAsTouched({ onlySelf: true });
                });
                this.toastService.presentToast("Please Fill all the Fields", 'error');
                return;
            }
        }
        if (this.classroomTypeForm.value.class_type == '') {
            this.template_class = this.classroomTypeForm.value.class;
        }
        else if (this.classroomTypeForm.value.class_type == "monograde") {
            this.template_class = this.classroomTypeForm.value.class;
        }
        else {
            this.template_class = this.classroomTypeForm.value.class_observed;
        }
        this.ionicStorage.insertData_Replace('classroom-type', { classroom_type: this.classroomTypeForm.value });
        let curr_template = this.template_list.filter(val => val.template_name.includes(this.template_class));
        if (curr_template.length == 0) {
            this.toastService.presentToast("No template available for the selected class", 'error');
            return;
        }
        curr_template = curr_template[0];
        this.navigate(curr_template.template_id);
    }
    getTemplateFromFile() {
        if (this.plt.is('cordova')) {
            this.template_list = [];
            this.fileService.listDirectory('templates').then(res => {
                let dir_list = res;
                let template_list_temp;
                dir_list.forEach(file_name => {
                    this.fileService.readFile({ dir: 'templates', file_name: file_name.name }).then(file => {
                        this.template_list.push(JSON.parse(file));
                    }, err => {
                        this.toastService.presentToast("Network Error" + err, 'error');
                    });
                });
            }, err => {
                this.toastService.presentToast("Network Error" + err, 'error');
            });
        }
        else {
            this.apiService.getAllTemplates().subscribe(res => {
                this.template_list = res['records'];
            });
        }
    }
    navigate(value) {
        let navigationExtras = {
            queryParams: {
                template_list: value
            }
        };
        this.router.navigate(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
    }
    getTotalList() {
        if (this.classroomTypeForm.value.class != '' && this.classroomTypeForm.value.section != '') {
            this.ionicStorage.getData('studentlist').then(res => {
                if (res) {
                    this.student_list = res;
                    let sec_upper = this.classroomTypeForm.value.section.toUpperCase();
                    let curr_class_info = this.student_list.filter(val => val.class_studying_id == this.classroomTypeForm.value.class && val.class_section == sec_upper)[0];
                    if (curr_class_info != '') {
                        let tot = parseInt(curr_class_info.male) + parseInt(curr_class_info.female);
                        this.classroomTypeForm.controls['tot_students'].setValue({ value: tot, disabled: true });
                    }
                }
                else {
                }
            });
        }
    }
};
ClassroomTypePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_2__.FileHandlerService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
ClassroomTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-classroom-type',
        template: _raw_loader_classroom_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_classroom_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassroomTypePage);



/***/ }),

/***/ 19593:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-type/classroom-type.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: #fff;\n  padding: 7px 16px !important;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\n.ion-contentbg {\n  --background: #eeeeee91;\n}\n\n.foot {\n  background-color: #eeeeee91;\n}\n\n.select {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  color: black;\n}\n\n.input {\n  border-left: 6px solid blue;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  border-radius: 10px;\n  font-size: 16px;\n  color: black;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzcm9vbS10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrSUFBQTtBQVBKOztBQVNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBTko7O0FBUUE7RUFDSSx1QkFBQTtBQUxKOztBQU9BO0VBQ0ksMkJBQUE7QUFKSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUEo7O0FBV0E7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsZUFBQTtFQUNBLFlBQUE7QUFWSjs7QUFhQTtFQUNJLGVBQUE7QUFWSiIsImZpbGUiOiJjbGFzc3Jvb20tdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtY2xhc3Nyb29tLWRhdGF7XHJcbi8vICAgICBpb24tY29udGVudHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcclxuLy8gfVxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuLmlvbi1jb250ZW50Ymd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZWVlZWU5MTtcclxufVxyXG4uZm9vdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWVlZTkxO1xyXG59XHJcbi8vIC5sYWJlbHtcclxuLy8gICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbi8vIH1cclxuLnNlbGVjdHtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vIGJvcmRlci1ibG9jay1zdGFydC1jb2xvcjogYXF1YTtcclxuICAgXHJcbn1cclxuLmlucHV0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOiBhcXVhO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgXHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 8989:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/classroom-type/classroom-type.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">    \r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n      Classroom Selection\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content class=\"ion-contentbg\" padding>\r\n      <ion-card style=\"padding: 12px !important;\" padding position=\"center\">\r\n          <form [formGroup]=\"classroomTypeForm\">\r\n           \r\n              <ion-label position=\"stacked\" class=\"label\"> Classroom type</ion-label><br/>\r\n              <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\" formControlName=\"class_type\" (ionChange)=\"valueChanges($event.target.value)\">\r\n                <ion-select-option value=\"monograde\">Monograde</ion-select-option>\r\n                <ion-select-option value=\"multigrade\">Multigrade</ion-select-option>\r\n              </ion-select>\r\n              <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['class_type'].hasError('required') && (classroomTypeForm.controls['class_type'].dirty || classroomTypeForm.controls['class_type'].touched)\">Classroom Type is Required</p>\r\n          \r\n            <br/><br/>\r\n            <div *ngIf=\"classroomTypeForm.controls['classes_taken']\">\r\n              <ion-label class=\"label\" position=\"floating\">What are the Classes</ion-label><br/>\r\n           \r\n              <ion-select class=\"select\" multiple=\"true\" placeholder=\"Select\" formControlName=\"classes_taken\" >\r\n                  <ion-select-option *ngFor=\"let value of class_list_forClasses\" value=\"{{value.class_name}}\">{{value.class_name}}</ion-select-option>\r\n              </ion-select>\r\n            \r\n              <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['classes_taken'].hasError('required') && (classroomTypeForm.controls['classes_taken'].dirty || classroomTypeForm.controls['classes_taken'].touched)\">Classes is Required</p>\r\n              <br/>\r\n            </div>\r\n           \r\n\r\n            <div *ngIf=\"classroomTypeForm.controls['class_observed'] && classroomTypeForm.controls['classes_taken'].value !=''\">\r\n               \r\n                <ion-label class=\"label\" position=\"floating\">Class being Observed</ion-label>\r\n               \r\n                <ion-select class=\"select\" interface=\"popover\" placeholder=\"Select\" formControlName=\"class_observed\">\r\n                <ion-select-option *ngFor=\"let value of classroomTypeForm.value.classes_taken\" value=\"{{value}}\">{{value}} </ion-select-option>\r\n                </ion-select>\r\n                <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['class_observed'].hasError('required') && (classroomTypeForm.controls['class_observed'].dirty || classroomTypeForm.controls['class_observed'].touched)\">Class Observed is Required</p>\r\n                <br/><br/>\r\n              </div>\r\n               \r\n              <div *ngIf=\"classroomTypeForm.value.class_type == 'monograde'\">\r\n                    <ion-label class=\"label\" position=\"stacked\">Select Class\r\n                      </ion-label><br/>\r\n                    <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\" formControlName=\"class\">\r\n                        <ion-select-option *ngFor=\"let value of class_list\" value=\"{{value.class_studying_id}}\">{{value.class_name}}</ion-select-option>\r\n                    </ion-select>\r\n                    <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['class'].hasError('required') && (classroomTypeForm.controls['class'].dirty || classroomTypeForm.controls['class'].touched)\">Class is Required</p>\r\n                    <br/><br/>\r\n                    </div>\r\n                          <ion-label>Section</ion-label>\r\n                           <ion-input style=\"text-transform: uppercase\" class=\"input\" type=\"text\" placeholder=\"Enter the Section\" formControlName=\"section\" ></ion-input>\r\n                           <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['section'].hasError('required') && (classroomTypeForm.controls['section'].dirty || classroomTypeForm.controls['section'].touched)\">Section is Required</p>\r\n                           <br/><br/>                     \r\n                        <div >\r\n                        <ion-label>Number of students on Roll</ion-label>\r\n                         <ion-input class=\"input\" type=\"Number\" formControlName=\"tot_students\" ></ion-input>\r\n                         <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['tot_students'].hasError('required') && (classroomTypeForm.controls['tot_students'].dirty || classroomTypeForm.controls['tot_students'].touched)\">Students on Roll is Required</p>\r\n                         <br/><br/>\r\n                        <ion-label>Enter Number of Students Present</ion-label>\r\n                        <ion-input class=\"input\" type=\"Number\" formControlName=\"students_seen\" ></ion-input>\r\n                        <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['students_seen'].hasError('required') && (classroomTypeForm.controls['students_seen'].dirty || classroomTypeForm.controls['students_seen'].touched)\">Students present is Required</p>\r\n                        <br/><br/>                        \r\n                      </div>\r\n                      <ion-label class=\"label\" position=\"stacked\">Medium of Instruction in Classroom\r\n                        </ion-label>\r\n                        <br/>\r\n                      <ion-select class=\"select\" placeholder=\"Select\" interface=\"popover\" formControlName=\"medium_info\" >\r\n                          <ion-select-option *ngFor=\"let value of medium_list\" value=\"{{value.medium_info_id}}\">{{value.medium_info_name}}</ion-select-option>\r\n                      </ion-select>\r\n                      <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['medium_info'].hasError('required') && (classroomTypeForm.controls['medium_info'].dirty || classroomTypeForm.controls['medium_info'].touched)\">Medium of Instruction is Required</p>\r\n                      <br/>\r\n                      <div *ngIf=\"classroomTypeForm.value.medium_info == '1'\">\r\n                      <ion-label>Specify the Medium of Instruction in Classroom</ion-label>\r\n                      <ion-input class=\"input\" type=\"text\" formControlName=\"medium_info_others\" ></ion-input><br/>\r\n                      <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['medium_info_others'].hasError('required') && (classroomTypeForm.controls['medium_info_others'].dirty || classroomTypeForm.controls['medium_info_others'].touched)\">Specify the Medium info</p>\r\n                      <br/>\r\n                    </div>\r\n                      <ion-label>Name of the Teacher who is Observed</ion-label>\r\n                      <ion-input class=\"input\" type=\"text\" formControlName=\"teacher_observed\" ></ion-input>\r\n                      <p class=\"error-message\" *ngIf=\"classroomTypeForm.controls['teacher_observed'].hasError('required') && (classroomTypeForm.controls['teacher_observed'].dirty || classroomTypeForm.controls['teacher_observed'].touched)\">Teacher Name is Required</p>\r\n                      <br/><br/>\r\n          </form>\r\n      </ion-card>\r\n    </ion-content>\r\n    <ion-footer  class=\"foot hide-on-keyboard-open\" translucent=\"true\">      \r\n        <ion-button expand=\"full\" shape=\"round\" (click)=\"onSubmit()\" class=\"login_button\" >Next<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>      \r\n    </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_classroom-type_classroom-type_module_ts-es2015.js.map