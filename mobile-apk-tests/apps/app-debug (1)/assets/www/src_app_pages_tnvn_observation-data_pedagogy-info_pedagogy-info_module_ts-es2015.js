(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_pedagogy-info_pedagogy-info_module_ts"],{

/***/ 94714:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/pedagogy-info/pedagogy-info.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedagogyInfoPageModule": function() { return /* binding */ PedagogyInfoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pedagogy_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedagogy-info.page */ 62509);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








const routes = [
    {
        path: '',
        component: _pedagogy_info_page__WEBPACK_IMPORTED_MODULE_0__.PedagogyInfoPage
    }
];
let PedagogyInfoPageModule = class PedagogyInfoPageModule {
};
PedagogyInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
        ],
        declarations: [_pedagogy_info_page__WEBPACK_IMPORTED_MODULE_0__.PedagogyInfoPage]
    })
], PedagogyInfoPageModule);



/***/ }),

/***/ 62509:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/pedagogy-info/pedagogy-info.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedagogyInfoPage": function() { return /* binding */ PedagogyInfoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_pedagogy_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pedagogy-info.page.html */ 13269);
/* harmony import */ var _pedagogy_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedagogy-info.page.scss */ 35783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/file-handler/file-handler.service */ 24954);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);











let PedagogyInfoPage = class PedagogyInfoPage {
    constructor(api, fb, loadingCtrl, router, navCtrl, activateRoute, ionicStorageService, plt, fileService, toast) {
        this.api = api;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.activateRoute = activateRoute;
        this.ionicStorageService = ionicStorageService;
        this.plt = plt;
        this.fileService = fileService;
        this.toast = toast;
        this.extra_field = [];
        this.extra_img = [];
        this.inputRadio = false;
        this.selectValue = [];
        this.original_template = [];
        this.last_saved_data = [];
    }
    ngOnInit() {
        this.getLocalData();
        this.questionForm = this.fb.group({
            pedagogy_info: this.fb.array([])
        });
        this.activateRoute.queryParams.subscribe(params => {
            if (params.template_list) {
                this.template_id = JSON.parse(params.template_list);
            }
        });
        this.getQues();
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: '',
                duration: 1000
            });
            return yield this.loading.present();
        });
    }
    getLocalData() {
        this.ionicStorageService.getData('tntp-content').then(Response => {
            if (Response) {
                this.last_saved_data.pedagogy_info = Response.tntp_content;
            }
        });
    }
    assignDataAndControl() {
        let temp = this.curr_template;
        this.curr_template = temp.questions.filter(val => val.section == "2");
        this.curr_template.forEach(res => {
            let temp = JSON.parse(res.ques_ans_json);
            res.ques_ans_json = temp;
        });
        this.ques = this.curr_template;
        this.ques.forEach((res, index) => {
            let answer_only = [];
            if (res.ques_ans_json.type != '5') {
                res.ques_ans_json.answers.forEach(val => {
                    answer_only.push({ 'ans': val.ans });
                });
                const control = this.questionForm.get('pedagogy_info');
                control.push(this.createValue(res.ques_ans_json, answer_only));
            }
            else {
                const control = this.questionForm.get('pedagogy_info');
                control.push(this.checkBoxArray(res.ques_ans_json));
            }
            let nae = res.key;
        });
        if (this.last_saved_data) {
            this.questionForm.patchValue(this.last_saved_data);
            this.questionForm.value.pedagogy_info.forEach((value, index) => {
                if (value.type == 3 || value.type == 4) {
                    this.valueChanges(value.ans, value, index);
                }
            });
            setTimeout(() => {
                if (this.last_saved_data.hasOwnProperty('pedagogy_info')) {
                    const pedagogy_info = this.questionForm.controls['pedagogy_info'];
                    pedagogy_info.patchValue(this.last_saved_data.pedagogy_info);
                }
            }, 800);
        }
    }
    getQues() {
        if (this.plt.is('cordova')) {
            this.fileService.readFile({ dir: 'templates', file_name: this.template_id }).then(file => {
                this.curr_template = JSON.parse(file);
                this.original_template = this.curr_template;
                this.assignDataAndControl();
            });
        }
        else {
            this.api.getAllTemplates().subscribe(res => {
                if (res['dataStatus']) {
                    this.curr_template = res['records'];
                    this.curr_template = this.curr_template.filter(val => val.template_id == this.template_id);
                    this.curr_template = this.curr_template[0];
                    this.original_template = this.curr_template;
                    this.assignDataAndControl();
                }
            });
        }
    }
    checkBoxArray(res) {
        return this.fb.group({
            ques: [res.question],
            type: [res.type],
            answer_key: [res.answers],
            ans: this.fb.array([])
        });
    }
    onChange(value, isChecked, index) {
        const answers = this.questionForm.controls['pedagogy_info']['controls'][index].controls.ans;
        if (isChecked) {
            answers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(value, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])));
        }
        else {
            let idx = answers.controls.findIndex(x => x.value == value);
            answers.removeAt(idx);
        }
    }
    createValue(res, answer_only) {
        return this.fb.group({
            ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            ques: [res.question],
            answer_only: [answer_only],
            type: [res.type],
            answer_key: [res.answers]
        });
    }
    onCheckboxChange(key, value, isChecked) {
        let answer = this.questionForm.controls[key]['controls'];
        if (isChecked) {
            answer.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(value));
        }
        else {
            let idx = answer.controls.findIndex(x => x.value == value);
            answer.removeAt(idx);
        }
    }
    validateAllFormFields(formGroup) {
        console.log(formGroup);
        formGroup.controls.pedagogy_info['controls'].forEach((formArray, index) => {
            Object.keys(formArray.controls).forEach(field => {
                const control = formGroup.controls.pedagogy_info['controls'][index].get(field);
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                    control.markAsTouched();
                }
                else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                    this.validateAllFormFields(control);
                }
            });
            if (formArray.controls.sub_field_array) {
                formArray.controls.sub_field_array['controls'].forEach((subFormArray, sub_index) => {
                    Object.keys(subFormArray.controls).forEach(field => {
                        const control = formGroup.controls.pedagogy_info['controls'][index].controls.sub_field_array['controls'][sub_index].get(field);
                        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                            control.markAsTouched();
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                            this.validateAllFormFields(control);
                        }
                    });
                });
            }
        });
    }
    onSubmit() {
        if (this.plt.is('cordova')) {
            if (this.questionForm.invalid) {
                this.validateAllFormFields(this.questionForm);
                this.toast.presentToast("Please Fill all the Fields", 'error');
                return;
            }
        }
        let records = [];
        records.pedagogy_info = this.questionForm.value.pedagogy_info ? this.questionForm.value.pedagogy_info : this.questionForm.value.tntp_content;
        records.pedagogy_info.forEach(res => {
            res.answer_key ? delete res.answer_key : '';
            res.answer_only ? delete res.answer_only : '';
            if (res.ans.length > 0 && res.type == 4) {
                let temp = res.ans.map(val => val.ans);
                res.ans = temp;
            }
        });
        let navigationExtras = {
            queryParams: {
                template_list: this.template_id
            }
        };
        this.ionicStorageService.insertData_Replace("tntp-content", { 'tntp_content': records.pedagogy_info });
        this.navCtrl.navigateBack(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
    }
    valueChanges(event, name, i) {
        let value = [];
        if (typeof (event) == 'object') {
            event.forEach(result => {
                let child = name.answer_key.filter(val => val.ans == result.ans);
                if (child.length > 0) {
                    value.push(child[0]);
                }
            });
        }
        else {
            value = name.answer_key.filter(val => val.ans == event);
        }
        const control = this.questionForm.get('pedagogy_info');
        let sub_field_template;
        if (value.length > 0) {
            control.controls[i].removeControl('sub_field_array');
            sub_field_template = this.original_template.questions.filter(val => val.section == value.map(action_val => {
                return action_val.action;
            }));
            control.controls[i].addControl('sub_field_array', this.fb.array([]));
            const pedagogy_info = this.questionForm.controls['pedagogy_info'];
            sub_field_template.forEach((res, index) => {
                let answer_only = [];
                let cc = JSON.parse(res.ques_ans_json);
                cc.answers.forEach(value => {
                    answer_only.push({ 'ans': value.ans });
                });
                let sub_control = control.controls[i].get('sub_field_array');
                sub_control.push(this.createSubValue(cc, answer_only));
            });
        }
        if (typeof (event) == 'object') {
            let data = [];
            if (value.length > 0) {
                value.map(val => {
                    if (val.next_filed == 'freetext' || val.next_filed == 'img') {
                        data.push(val);
                    }
                });
                value = data;
            }
        }
        if (value.length > 0) {
            if (value[0].next_filed == 'freetext') {
                this.extra_field[i] = value[0];
                this.extra_field[i].open = true;
                this.extra_field[i].placeholder = value[0].Description;
                control.controls[i].addControl('subfield_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl('subfield_value', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])));
            }
            else if (value[0].next_filed == 'img') {
                value[0].open = true;
                this.extra_field[i] = value[0];
                control.controls[i].addControl('subfield_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl('subfield_value', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''));
            }
            else {
                value[0].open = false;
                this.extra_field[i] = value[0];
                control.controls[i].removeControl('subfield_value');
                this.questionForm.removeControl(this.extra_field[i].field_value);
                control.controls[i].removeControl(this.extra_field[i].field_value);
            }
        }
    }
    createSubValue(res, answer_only) {
        return this.fb.group({
            ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
            ques: [res.question],
            answer_only: [answer_only],
            type: [res.type],
            answer_key: [res.answers]
        });
    }
};
PedagogyInfoPage.ctorParameters = () => [
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_4__.FileHandlerService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
PedagogyInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pedagogy-info',
        template: _raw_loader_pedagogy_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pedagogy_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PedagogyInfoPage);



/***/ }),

/***/ 35783:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/pedagogy-info/pedagogy-info.page.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  margin: 0;\n  text-align: end;\n  color: red;\n  font-size: 14px;\n  font-style: italic;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGFnb2d5LWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoicGVkYWdvZ3ktaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 13269:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/pedagogy-info/pedagogy-info.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Diksha/TNTP content</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <form [formGroup]=\"questionForm\">       \r\n        <div formArrayName=\"pedagogy_info\">\r\n         \r\n          <div *ngFor=\"let radio of questionForm.controls.pedagogy_info['controls'];let i=index\" >\r\n          \r\n                  <div [formGroupName]=\"i\">\r\n            \r\n           <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n             <ion-label text-wrap  position=\"floating\">{{radio.get('ques').value}}</ion-label><br/>\r\n                <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n           </ion-item>\r\n    \r\n      <ion-list  *ngIf=\"radio.get('type').value== '2'\">\r\n      \r\n        <ion-radio-group formControlName=\"ans\"  (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n          <ion-list-header>\r\n            <ion-label >{{radio.get('ques').value}}</ion-label>\r\n          </ion-list-header>          \r\n          <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n            <ion-label>{{ans.ans}}</ion-label>\r\n            <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        </ion-list>\r\n        \r\n        <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n            <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>           \r\n            <ionic-selectable\r\n         formControlName=\"ans\"\r\n         itemValueField=\"ans\"\r\n         itemTextField=\"ans\"\r\n        [items]=\"radio.get('answer_only').value\"\r\n        [canSearch]=\"true\"\r\n        (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n      \r\n      </ionic-selectable>\r\n          </ion-item>\r\n    \r\n          <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n              <ion-label text-wrap >{{radio.get('ques').value}}</ion-label><br/>\r\n              <ionic-selectable \r\n              formControlName=\"ans\"\r\n              [items]=\"radio.get('answer_only').value\"\r\n              itemValueField=\"ans\"\r\n              itemTextField=\"ans\"\r\n              [isMultiple]=\"true\"\r\n              [canSearch]=\"true\"\r\n             (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n            </ionic-selectable>           \r\n            </ion-item>            \r\n            <div *ngIf=\"radio.get('type').value == '5'\">\r\n                <ion-list  formArrayName=\"ans\">\r\n                  <ion-item-group>                    \r\n                        <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                      <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                        <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                        <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\" value=\"{{ans.ans}}\"></ion-checkbox>\r\n                      </ion-item>\r\n                    </ion-item-group>                    \r\n                  </ion-list>\r\n                </div>\r\n                <p class=\"error-message\" *ngIf=\"radio.controls['ans'].hasError('required') && (radio.controls['ans'].dirty || radio.controls['ans'].touched)\">Field is Required</p>\r\n      \r\n        <div *ngIf=\"extra_field[i]\">\r\n          <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n              <ion-label position=\"floating\">{{extra_field[i].placeholder}}</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n        </ion-item>\r\n    </div>\r\n    <div *ngIf=\"extra_field[i]\">\r\n      <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\" >\r\n          <ion-button  slot=\"end\"> <ion-label>Capture Image</ion-label><ion-icon name=\"md-camera\"></ion-icon></ion-button>\r\n        </ion-item>\r\n        </div> \r\n\r\n        <div formArrayName=\"sub_field_array\" *ngIf=\"radio.get('sub_field_array')\">\r\n            <div *ngFor=\"let sub_field of radio.get('sub_field_array').controls;let u=index\" [formGroupName]=\"u\">                  \r\n              <ion-item *ngIf=\"sub_field.get('type').value== '1'\">\r\n                  <ion-label text-wrap  position=\"floating\">{{sub_field.get('ques').value}}</ion-label><br/>\r\n                     <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n                </ion-item>\r\n              <ion-list  *ngIf=\"sub_field.get('type').value== '2'\">\r\n          \r\n                  <ion-radio-group formControlName=\"ans\" >\r\n                    <ion-list-header>\r\n                      <ion-label >{{sub_field.get('ques').value}}</ion-label>\r\n                    </ion-list-header>                    \r\n                    <ion-item *ngFor=\"let ans of sub_field.get('answer_key').value\">\r\n                      <ion-label>{{ans.ans}}</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                  </ion-list>\r\n    \r\n              <ion-item *ngIf=\"sub_field.get('type').value== '3'\">\r\n                  <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label>                  \r\n                  <ionic-selectable\r\n               formControlName=\"ans\"\r\n               itemValueField=\"ans\"\r\n               itemTextField=\"ans\"\r\n              [items]=\"sub_field.get('answer_only').value\"\r\n              [canSearch]=\"true\"\r\n             >\r\n            \r\n            </ionic-selectable>          \r\n                </ion-item>\r\n    \r\n              <ion-item *ngIf=\"sub_field.get('type').value== '5' || sub_field.get('type').value == '4'\">\r\n                  <ion-label text-wrap >{{sub_field.get('ques').value}}</ion-label><br/>\r\n                  <ionic-selectable \r\n                  formControlName=\"ans\"\r\n                  [items]=\"sub_field.get('answer_only').value\"\r\n                  itemValueField=\"ans\"\r\n                  itemTextField=\"ans\"\r\n                  [isMultiple]=\"true\"\r\n                  [canSearch]=\"true\"\r\n                 >\r\n                </ionic-selectable>              \r\n                </ion-item>\r\n                <p class=\"error-message\" *ngIf=\"sub_field.controls['ans'].hasError('required') && (sub_field.controls['ans'].dirty || sub_field.controls['ans'].touched)\">Field is Required</p>\r\n    \r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n        </div>\r\n      </div>\r\n \r\n    </form>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"full\" color=\"primary\" shape=\"round\" (click)=\"onSubmit()\">Save <ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_observation-data_pedagogy-info_pedagogy-info_module_ts-es2015.js.map