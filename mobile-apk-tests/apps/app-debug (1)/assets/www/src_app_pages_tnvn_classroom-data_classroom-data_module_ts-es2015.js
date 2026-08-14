(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_classroom-data_classroom-data_module_ts"],{

/***/ 60128:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-data/classroom-data.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomDataPageModule": function() { return /* binding */ ClassroomDataPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _classroom_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classroom-data.page */ 67825);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








const routes = [
    {
        path: '',
        component: _classroom_data_page__WEBPACK_IMPORTED_MODULE_0__.ClassroomDataPage
    }
];
let ClassroomDataPageModule = class ClassroomDataPageModule {
};
ClassroomDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ],
        declarations: [_classroom_data_page__WEBPACK_IMPORTED_MODULE_0__.ClassroomDataPage]
    })
], ClassroomDataPageModule);



/***/ }),

/***/ 67825:
/*!******************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-data/classroom-data.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomDataPage": function() { return /* binding */ ClassroomDataPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_classroom_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./classroom-data.page.html */ 85106);
/* harmony import */ var _classroom_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classroom-data.page.scss */ 60667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/file-handler/file-handler.service */ 24954);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);












let ClassroomDataPage = class ClassroomDataPage {
    constructor(fb, router, apiService, authService, ionicStorage, toastService, fileService, networkService) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.ionicStorage = ionicStorage;
        this.toastService = toastService;
        this.fileService = fileService;
        this.networkService = networkService;
        this.school_data = [];
        this.school_info = '';
        this.searchOption = [{
                name: 'School Name',
                value: 'school_search'
            },
            {
                name: 'UDISE ID',
                value: 'id_search'
            },
            {
                name: 'Location',
                value: 'locate_school'
            }];
        this.no_internet = false;
        this.blockList = [];
        this.curr_school = [];
    }
    ngOnInit() {
        this.ionicStorage.getData('schoollistbydistrictid').then(res => {
            if (res != null) {
                this.school_data = res;
                this.seperateBlockandSchool();
            }
            else {
                if (this.networkService.getCurrentNetworkStatus() == src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__.ConnectionStatus.Offline) {
                    this.toastService.presentToast("You are currently Offline", '');
                }
                else {
                    this.getDataFromApi();
                }
            }
        });
        this.school_selection_form = this.fb.group({
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])],
            search_option: [''],
            school_search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])]
        });
        let local_data;
        this.ionicStorage.getData('classroom-data').then(response => {
            local_data = response;
            if (local_data) {
                local_data = local_data.classroom_data;
                this.SelectedOption(local_data[0].search_option);
                let data;
                if (this.school_selection_form.value.search_option == "UDISE ID") {
                    data = local_data[1];
                    this.school_selection_form.controls['id_search'].setValue(local_data[0].id_search);
                }
                else {
                    this.school_selection_form.controls['school_search'].setValue(local_data[0].school_search);
                    this.school_selection_form.controls['block'].setValue(local_data[0].block);
                    data = local_data[0].school_search;
                }
                this.getValueOfSchool(data, this.school_selection_form.value.search_option, '');
            }
        }, err => {
            alert(err);
        });
    }
    seperateBlockandSchool() {
        this.school_data.forEach(res => {
            if (this.blockList.length > 0) {
                let len = this.blockList.filter(val => val.block_id == res.block_id);
                if (len.length > 0) { }
                else {
                    this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name });
                }
            }
            else {
                this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name });
            }
        });
    }
    getDataFromApi() {
        this.apiService.getAllTemplates().subscribe(res => {
            res['records'].forEach(value => {
                let store = this.fileService.writeFile(value, { dir: "templates", file_name: value.template_id });
            });
        });
        let tokenData = this.authService.getTokenDetails();
        this.apiService.getSchoolListByBlockId(tokenData.district_id).subscribe(res => {
            if (res['dataStatus']) {
                this.school_data = res['records'].filter(val => val.school_type == 'Government');
                let store = this.ionicStorage.insertData_Replace('schoollistbydistrictid', this.school_data);
                this.school_data.forEach(res => {
                    if (this.blockList.length > 0) {
                        let len = this.blockList.filter(val => val.block_id == res.block_id);
                        if (len.length > 0) { }
                        else {
                            this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name });
                        }
                    }
                    else {
                        this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name });
                    }
                });
            }
        });
        this.apiService.getAllLeaningOutcomeQuestions().subscribe(ques_response => {
            if (ques_response['dataStatus'] == true) {
                this.ionicStorage.insertData_Replace('learningoutcomeques', ques_response['records']);
            }
        });
    }
    SelectedOption(value) {
        this.school_info = '';
        this.school_selection_form.controls['search_option'].setValue(value);
        if (value == 'School Name') {
            this.school_selection_form.addControl('school_search', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])));
            this.school_selection_form.removeControl('id_search');
        }
        else if (value == 'UDISE ID') {
            this.school_selection_form.addControl('id_search', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])));
            this.school_selection_form.removeControl('school_search');
        }
        else {
            this.school_selection_form.removeControl('id_search');
            this.school_selection_form.removeControl('school_search');
        }
    }
    getValueOfSchool(data, option, from) {
        if (option == 'udise_code') {
            let value = this.school_data.filter(val => val.udise_code == data);
            if (value.length != 0) {
                this.school_info = value[0];
            }
        }
        else {
            this.school_info = data;
        }
        if (from == 'click') {
            if (this.networkService.getCurrentNetworkStatus() == src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__.ConnectionStatus.Offline) {
            }
        }
    }
    storeMasterDataOffline() {
        let school_id = this.school_info.school_id;
        this.apiService.getStudentsListBySchoolId(school_id).subscribe(res => {
            if (res['dataStatus'] == true) {
                this.ionicStorage.insertData_Replace('studentlist', res['records']);
            }
            else {
                this.toastService.presentToast("Error:" + res['msg'], 'dark');
            }
            this.apiService.getTeachersListBySchoolId(school_id).subscribe(Response => {
                if (Response['dataStatus'] == true) {
                    this.ionicStorage.insertData_Replace('teacherlist', Response['records']);
                }
                else {
                    this.toastService.presentToast('Error' + Response['msg'], 'dark');
                }
            }, error => {
                this.toastService.presentToast('Error Something went wrong' + error, 'error');
            });
        }, err => {
            this.toastService.presentToast('Error Something went wrong' + err, 'error');
        });
        this.ionicStorage.insertData_Replace('school_id', this.school_info.school_id);
        let records = [];
        records.push(this.school_selection_form.value);
        records.push(this.school_info);
        this.ionicStorage.insertData_Replace('classroom-data', { "classroom_data": records });
    }
    onSubmit() {
        if (this.school_selection_form.valid && this.school_info != '') {
            this.goToNextPage();
        }
    }
    reset_School_info() {
        this.school_info = '';
    }
    goToNextPage() {
        this.ionicStorage.insertData_Replace('school_id', this.school_info.school_id);
        let records = [];
        records.push(this.school_selection_form.value);
        records.push(this.school_info);
        this.ionicStorage.insertData_Replace('classroom-data', { "classroom_data": records });
        this.router.navigate(['/tnvntabs/page-route', 'teacher-info']);
    }
    getSchools() {
        this.curr_school = this.school_data.filter(val => val.block_id == this.school_selection_form.value.block.block_id);
    }
};
ClassroomDataPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_6__.FileHandlerService },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService }
];
ClassroomDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-classroom-data',
        template: _raw_loader_classroom_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_classroom_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassroomDataPage);



/***/ }),

/***/ 60667:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom-data/classroom-data.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: #fff;\n  padding: 7px 16px !important;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\n.ion-contentbg {\n  --background: #eeeeee91;\n}\n\n.foot {\n  background-color: #eeeeee91;\n}\n\n.label_school {\n  font-size: 16px;\n  color: black;\n}\n\np {\n  font-size: 16px;\n}\n\n.label {\n  font-weight: bold;\n  color: darkslateblue;\n}\n\n.value {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzcm9vbS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrSUFBQTtBQVBKOztBQVNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBTko7O0FBUUE7RUFDSSx1QkFBQTtBQUxKOztBQU9BO0VBQ0ksMkJBQUE7QUFKSjs7QUFNQTtFQUNJLGVBQUE7RUFFQSxZQUFBO0FBSko7O0FBUUE7RUFDSSxlQUFBO0FBTEo7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBSko7O0FBTUE7RUFDSSxZQUFBO0FBSEoiLCJmaWxlIjoiY2xhc3Nyb29tLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLWNsYXNzcm9vbS1kYXRhe1xyXG4vLyAgICAgaW9uLWNvbnRlbnR7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbi8vIH1cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOiA3cHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjU2KSwgMCA0cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcclxufVxyXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5pb24tY29udGVudGJne1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVlZWVlOTE7XHJcbn1cclxuLmZvb3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU5MTtcclxufVxyXG4ubGFiZWxfc2Nob29se1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICAvLyBwYWRkaW5nOjVweDtcclxuXHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ZGFya3NsYXRlYmx1ZVxyXG59XHJcbi52YWx1ZXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59Il19 */");

/***/ }),

/***/ 85106:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/classroom-data/classroom-data.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">        \r\n       <ion-back-button ></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n      School Selection\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-contentbg\">\r\n  <ion-card style=\"padding: 12px !important;\">\r\n      <form [formGroup]=\"school_selection_form\">                       \r\n        <ion-item *ngIf=\"school_selection_form.controls['block']\">\r\n          <ion-label position=\"floating\">Block</ion-label>\r\n          <ionic-selectable\r\n            formControlName=\"block\"\r\n            itemValueField=\"block_id\"\r\n            itemTextField=\"block_name\"\r\n            [items]=\"blockList\"\r\n            [canSearch]=\"true\"\r\n            searchFailText=\"Nothing found :(\"\r\n            (onChange)=\"reset_School_info();getSchools();SelectedOption('School Name')\">\r\n          \r\n          </ionic-selectable>\r\n        </ion-item>\r\n        <div *ngIf=\"school_selection_form.value.block != ''\">                      \r\n          <ion-item *ngIf=\"school_selection_form.controls['school_search']\">\r\n            <ion-label position=\"floating\">Search By School Name</ion-label>\r\n            <ionic-selectable\r\n              formControlName=\"school_search\"\r\n              itemValueField=\"school_id\"\r\n              itemTextField=\"school_name\"\r\n              [items]=\"curr_school\"\r\n              [canSearch]=\"true\"\r\n              searchFailText=\"Nothing found :(\"\r\n              (onChange)=\"reset_School_info()\">            \r\n            </ionic-selectable>\r\n          </ion-item><br/>\r\n          <ion-button *ngIf=\"school_selection_form.controls['school_search']\" float-right color=\"tertiary\" icon-only (click)=\"getValueOfSchool(school_selection_form.value.school_search,school_name,'click')\">Get Details <ion-icon name=\"sync\"></ion-icon></ion-button>                    \r\n          <ion-item *ngIf=\"school_selection_form.controls['id_search']\" >\r\n            <ion-label position=\"floating\">Enter the UDISE ID</ion-label>\r\n            <ion-input formControlName=\"id_search\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n          <ion-button *ngIf=\"school_selection_form.controls['id_search']\" float-right color=\"tertiary\" icon-only (click)=\"getValueOfSchool(school_selection_form.value.id_search,'udise_code','click')\">Get Details <ion-icon name=\"sync\"></ion-icon></ion-button>            \r\n          <ion-button *ngIf=\"school_selection_form.controls['search_option'].value == 'Location'\" float-right color=\"tertiary\" shape=\"round\"><ion-icon name=\"locate\"></ion-icon>Locate</ion-button>\r\n        </div>                      \r\n      </form>\r\n  </ion-card>\r\n  <ion-card  *ngIf=\"school_info != ''\" class=\"card_school\">\r\n    <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p>School Name</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.school_name}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p>Block Name</p>  \r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.block_name}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p>District Name</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.district_name}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p> School Type</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.school_type}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p> Category</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.category}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p> Management</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.management}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p> Total Teaching Staff</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.teach_tot}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p>Total Boys</p>\r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.total_b}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col class=\"label\">\r\n         <p>Total Girls</p>\r\n   \r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.total_g}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row *ngIf=\"school_info.total_t != '0'\">\r\n      <ion-col class=\"label\">\r\n         <p> Total Transgender</p>\r\n   \r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.total_t}}</p>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row >\r\n      <ion-col class=\"label\">\r\n         <p>UDISE Code</p>\r\n   \r\n  </ion-col>\r\n  <ion-col class=\"value\">\r\n     <p> {{school_info.udise_code}}</p>\r\n  </ion-col>\r\n  </ion-row>  \r\n  </ion-card>  \r\n</ion-content>\r\n<ion-footer class=\"foot\" >        \r\n    <ion-button size=\"default\" shape=\"round\" expand=\"full\" (click)=\"onSubmit()\" class=\"login_button\" router [disabled]=\"!school_selection_form.valid || school_info == ''\">Next<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>  \r\n  </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_classroom-data_classroom-data_module_ts-es2015.js.map