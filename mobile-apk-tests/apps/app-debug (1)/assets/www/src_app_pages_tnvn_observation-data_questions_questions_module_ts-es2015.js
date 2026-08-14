(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_questions_questions_module_ts"],{

/***/ 13854:
/*!*********************************************************************!*\
  !*** ./src/app/components/ui-components/ui-components.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiComponentsComponent": function() { return /* binding */ UiComponentsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ui_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ui-components.component.html */ 90241);
/* harmony import */ var _ui_components_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-components.component.scss */ 96901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);









let UiComponentsComponent = class UiComponentsComponent {
    constructor(api, fb, loadingCtrl, router) {
        this.api = api;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.extra_field = [];
        this.extra_img = [];
        this.someEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.inputRadio = false;
        this.selectValue = [];
        this.extra_field = [];
    }
    ngOnInit() {
        this.presentLoading();
        this.questionForm = this.fb.group({
            question: this.fb.array([]),
        });
        this.getQuestions();
        this.txt = this.myQuesResp;
    }
    ngAfterViewInit() { }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "",
                duration: 1000,
            });
            return yield this.loading.present();
        });
    }
    getQuestions() {
        this.api.getQuestions().subscribe((response) => {
            this.ques = response;
            if (typeof response != "object") {
                this.ques = JSON.parse(this.ques);
            }
            this.ques.forEach((res, index) => {
                let answer_only = [];
                if (res.type != "5") {
                    res.answers.forEach((val) => {
                        answer_only.push({ ans: val.ans });
                    });
                    const control = this.questionForm.get("question");
                    control.push(this.createValue(res, answer_only));
                }
                else {
                    const control = this.questionForm.get("question");
                    control.push(this.checkBoxArray(res));
                }
                let nae = res.key;
            });
        });
    }
    checkBoxArray(res) {
        return this.fb.group({
            ques: [res.question],
            type: [res.type],
            answer_key: [res.answers],
            ans: this.fb.array([]),
        });
    }
    onChange(value, isChecked, index) {
        const answers = (this.questionForm.controls["question"]["controls"][index].controls.ans);
        if (isChecked) {
            answers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(value));
        }
        else {
            let idx = answers.controls.findIndex((x) => x.value == value);
            answers.removeAt(idx);
        }
    }
    createValue(res, answer_only) {
        return this.fb.group({
            ans: [""],
            ques: [res.question],
            answer_only: [answer_only],
            type: [res.type],
            answer_key: [res.answers],
        });
    }
    valueChanges(event, name, i) {
        let value;
        value = name.answer_key.filter((val) => val.ans == event);
        const control = this.questionForm.get("question");
        if (value.length > 0) {
            if (value[0].next_filed == "freetext") {
                this.extra_field[i] = value[0];
                this.extra_field[i].open = true;
                control.controls[i].addControl("subfield_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl("subfield_value", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""));
            }
            else if (value[0].next_filed == "img") {
                value[0].open = true;
                this.extra_field[i] = value[0];
                control.controls[i].addControl("subfield_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl("subfield_value", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""));
            }
            else {
                value[0].open = false;
                this.extra_field[i] = value[0];
                this.questionForm.removeControl(this.extra_field[i].field_value);
                control.controls[i].removeControl(this.extra_field[i].field_value);
            }
        }
    }
    createRadio(name) {
        let vale = name;
        let val = this.fb.group({
            vale: [""],
        });
        const control = this.questionForm.controls.radio;
        control.push(val);
    }
    onSubmit() {
        let records = this.questionForm.value;
        records.question.forEach((res) => {
            let temp;
            res.answer_key ? delete res.answer_key : "";
            res.answer_only ? delete res.answer_only : "";
            if (res.ans.length > 0 && res.type == 4) {
                let temp = res.ans.map((val) => val.ans);
                res.ans = temp;
            }
        });
        this.router.navigate([""]);
    }
    onCheckboxChange(key, value, isChecked) {
        let answer = this.questionForm.controls[key]["controls"];
        if (isChecked) {
            answer.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(value));
        }
        else {
            let idx = answer.controls.findIndex((x) => x.value == value);
            answer.removeAt(idx);
        }
    }
    sendData() {
        let records = this.questionForm.value;
        records.question.forEach((res) => {
            let temp;
            res.answer_key ? delete res.answer_key : "";
            res.answer_only ? delete res.answer_only : "";
            if (res.ans.length > 0 && res.type == 4) {
                let temp = res.ans.map((val) => val.ans);
                res.ans = temp;
            }
        });
        this.someEvent.emit(records);
    }
};
UiComponentsComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
UiComponentsComponent.propDecorators = {
    myQuesResp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["ques_response",] }],
    someEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
UiComponentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-ui-components",
        template: _raw_loader_ui_components_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ui_components_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UiComponentsComponent);



/***/ }),

/***/ 25292:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/questions/questions.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageModule": function() { return /* binding */ QuestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.page */ 343);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var src_app_components_ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/ui-components/ui-components.component */ 13854);









const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage
    }
];
let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule
        ],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage, src_app_components_ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_1__.UiComponentsComponent]
    })
], QuestionsPageModule);



/***/ }),

/***/ 343:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/questions/questions.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPage": function() { return /* binding */ QuestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questions.page.html */ 88894);
/* harmony import */ var _questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page.scss */ 88049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/file-handler/file-handler.service */ 24954);











let QuestionsPage = class QuestionsPage {
    constructor(router, loadingCtrl, fb, api, activateRoute, ionicStrorageService, fileService, plt, toast, navCtrl) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.api = api;
        this.activateRoute = activateRoute;
        this.ionicStrorageService = ionicStrorageService;
        this.fileService = fileService;
        this.plt = plt;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.extra_field = [];
        this.extra_img = [];
        this.inputRadio = false;
        this.selectValue = [];
        this.curr_template = [];
        this.curr_section = [];
        this.curr_template_with_all_sec = [];
        this.last_saved_data = [];
        this.extra_field = [];
    }
    ngOnInit() {
        console.log('ewerwewerwe');
        this.questionForm = this.fb.group({});
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
        this.ionicStrorageService.getData('questions').then(Response => {
            if (Response) {
                this.last_saved_data.question = Response.classroom_observation;
                if (this.last_saved_data.hasOwnProperty('question')) {
                    this.questionForm.patchValue(this.last_saved_data);
                    this.questionForm.value.question.forEach((value, index) => {
                        if (value.type == 3 || value.type == 4) {
                            this.valueChanges(value.ans, value, index);
                        }
                    });
                    setTimeout(() => {
                        if (this.last_saved_data.hasOwnProperty('question')) {
                            const pedagogy_info = this.questionForm.controls['question'];
                            pedagogy_info.patchValue(this.last_saved_data.question);
                        }
                    }, 800);
                }
            }
        });
    }
    getQuestions() {
        this.api.getQuestions().subscribe(response => {
            this.ques = response;
            if (typeof (response) != 'object') {
                this.ques = JSON.parse(this.ques);
            }
            this.ques.forEach((res, index) => {
                let answer_only = [];
                if (res.type != '5') {
                    res.answers.forEach(val => {
                        answer_only.push({ 'ans': val.ans });
                    });
                    const control = this.questionForm.get('question');
                    control.push(this.createValue(res, answer_only));
                }
                else {
                    const control = this.questionForm.get('question');
                    control.push(this.checkBoxArray(res));
                }
                let nae = res.key;
            });
        });
    }
    getQues() {
        if (this.plt.is('cordova')) {
            this.fileService.readFile({ dir: 'templates', file_name: this.template_id }).then(file => {
                this.curr_template = JSON.parse(file);
                this.curr_template_with_all_sec = this.curr_template;
                this.original_template = this.curr_template;
                this.assignDataAndControl('');
            });
        }
        else {
            this.api.getAllTemplates().subscribe(res => {
                if (res['dataStatus']) {
                    this.curr_template = res['records'];
                    this.curr_template = this.curr_template.filter(val => val.template_id == this.template_id);
                    this.curr_template = this.curr_template[0];
                    this.original_template = this.curr_template;
                    this.curr_template_with_all_sec = this.curr_template;
                    this.assignDataAndControl('');
                }
            });
        }
    }
    assignDataAndControl(section_value) {
        this.questionForm.addControl('question', this.fb.array([]));
        this.curr_template = this.curr_template_with_all_sec.questions.filter(val => val.section == '4');
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
                const control = this.questionForm.get('question');
                control.push(this.createValue(res.ques_ans_json, answer_only));
            }
            else {
                const control = this.questionForm.get('question');
                control.push(this.checkBoxArray(res.ques_ans_json));
            }
            let nae = res.key;
        });
        this.getLocalData();
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
        const answers = this.questionForm.controls['question']['controls'][index].controls.ans;
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
    createRadio(name) {
        let vale = name;
        let val = this.fb.group({
            vale: ['']
        });
        const control = this.questionForm.controls.radio;
        control.push(val);
    }
    getValue(value) {
        this.data = value;
    }
    validateAllFormFields(formGroup) {
        formGroup.controls.question['controls'].forEach((formArray, index) => {
            Object.keys(formArray.controls).forEach(field => {
                const control = formGroup.controls.question['controls'][index].get(field);
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
                        const control = formGroup.controls.question['controls'][index].controls.sub_field_array['controls'][sub_index].get(field);
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
        let records = this.questionForm.value;
        records.question.forEach(res => {
            let temp;
            res.answer_key ? delete res.answer_key : '';
            res.answer_only ? delete res.answer_only : '';
        });
        this.ionicStrorageService.insertData_Replace("questions", { classroom_observation: records.question });
        let navigationExtras = {
            queryParams: {
                template_list: this.template_id
            }
        };
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
        const control = this.questionForm.get('question');
        let sub_field_template;
        if (value.length > 0) {
            control.controls[i].removeControl('sub_field_array');
            sub_field_template = this.original_template.questions.filter(val => val.section == value.map(action_val => {
                return action_val.action;
            }));
            control.controls[i].addControl('sub_field_array', this.fb.array([]));
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
QuestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_5__.FileHandlerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
QuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-questions',
        template: _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuestionsPage);



/***/ }),

/***/ 96901:
/*!***********************************************************************!*\
  !*** ./src/app/components/ui-components/ui-components.component.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 88049:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation-data/questions/questions.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\n.error-message {\n  margin: 0;\n  text-align: end;\n  color: red;\n  font-size: 14px;\n  font-style: italic;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6InF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4vLyBpb24tY2FyZHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuLy8gICAgIHBhZGRpbmc6IDdweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */");

/***/ }),

/***/ 90241:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-components/ui-components.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n<form [formGroup]=\"questionForm\">\r\n    <div formArrayName=\"question\">\r\n     \r\n      <div *ngFor=\"let radio of questionForm.controls.question['controls'];let i=index\" (click)=\"sendData()\">\r\n      \r\n              <div [formGroupName]=\"i\">\r\n        \r\n       <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n         <ion-label text-wrap  position=\"floating\">{{radio.get('ques').value}}</ion-label><br/>\r\n            <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n       </ion-item>\r\n\r\n  <ion-list *ngIf=\"radio.get('type').value== '2'\">\r\n  \r\n    <ion-radio-group formControlName=\"ans\"  (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n      <ion-list-header>\r\n        <ion-label >{{radio.get('ques').value}}</ion-label>\r\n      </ion-list-header>      \r\n      <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n        <ion-label>{{ans.ans}}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n    \r\n    <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n        <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>        \r\n        <ionic-selectable\r\n     formControlName=\"ans\"\r\n     itemValueField=\"ans\"\r\n     itemTextField=\"ans\"\r\n    [items]=\"radio.get('answer_only').value\"\r\n    [canSearch]=\"true\"\r\n    (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n  \r\n  </ionic-selectable>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n          <ion-label text-wrap >{{radio.get('ques').value}}</ion-label><br/>\r\n          <ionic-selectable \r\n          formControlName=\"ans\"\r\n          [items]=\"radio.get('answer_only').value\"\r\n          itemValueField=\"ans\"\r\n          itemTextField=\"ans\"\r\n          [isMultiple]=\"true\"\r\n          [canSearch]=\"true\"\r\n         (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n        </ionic-selectable>      \r\n        </ion-item>        \r\n        <div *ngIf=\"radio.get('type').value == '5'\">\r\n            <ion-list  formArrayName=\"ans\">\r\n              <ion-item-group>                \r\n                    <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                  <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                    <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                    <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\" value=\"{{ans.ans}}\"></ion-checkbox>\r\n                  </ion-item>\r\n                </ion-item-group>                \r\n              </ion-list>\r\n            </div>  \r\n    <div *ngIf=\"extra_field[i]\">        \r\n      <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n      <ion-label position=\"floating\">Enter the Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n    </ion-item>\r\n</div>\r\n<div *ngIf=\"extra_field[i]\">\r\n  <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\" >\r\n      <ion-button  slot=\"end\"> <ion-label>Capture Image</ion-label><ion-icon name=\"md-camera\"></ion-icon></ion-button>\r\n    </ion-item>\r\n    </div> \r\n  </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 88894:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/questions/questions.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Classroom Management & Record verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"ion-contentbg\">\r\n\r\n  <form [formGroup]=\"questionForm\">\r\n    <div formArrayName=\"question\" *ngIf=\"questionForm.controls['question']\">\r\n\r\n      <div *ngFor=\"let radio of questionForm.controls.question['controls'];let i=index\">\r\n\r\n        <div [formGroupName]=\"i\">\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n            <ion-label text-wrap position=\"stacked\">{{radio.get('ques').value}}</ion-label><br />\r\n            <ion-input type=\"text\" formControlName=\"ans\" stacked></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-list *ngIf=\"radio.get('type').value== '2'\">\r\n\r\n            <ion-radio-group formControlName=\"ans\" (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n              <ion-list-header>\r\n                <ion-label>{{radio.get('ques').value}}</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                <ion-label>{{ans.ans}}</ion-label>\r\n                <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n            <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>\r\n            <ionic-selectable formControlName=\"ans\" itemValueField=\"ans\" itemTextField=\"ans\"\r\n              [items]=\"radio.get('answer_only').value\" [canSearch]=\"true\"\r\n              (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n\r\n            </ionic-selectable>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n            <ion-label text-wrap>{{radio.get('ques').value}}</ion-label><br />\r\n            <ionic-selectable formControlName=\"ans\" [items]=\"radio.get('answer_only').value\" itemValueField=\"ans\"\r\n              itemTextField=\"ans\" [isMultiple]=\"true\" [canSearch]=\"true\"\r\n              (onChange)=\"valueChanges(radio.value.ans,radio.value,i)\">\r\n            </ionic-selectable>\r\n\r\n          </ion-item>\r\n          <div *ngIf=\"radio.get('type').value == '5'\">\r\n            <ion-list formArrayName=\"ans\">\r\n              <ion-item-group>\r\n                <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                  <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                  <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\"\r\n                    value=\"{{ans.ans}}\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-item-group>\r\n            </ion-list>\r\n          </div>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"radio.controls['ans'].hasError('required') && (radio.controls['ans'].dirty || radio.controls['ans'].touched)\">\r\n            Field is Required</p>\r\n          <div *ngIf=\"extra_field[i]\">\r\n            <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n              <ion-label position=\"floating\">{{extra_field[i].placeholder}}</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div *ngIf=\"extra_field[i]\">\r\n            <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\">\r\n              <ion-button slot=\"end\">\r\n                <ion-label>Capture Image</ion-label>\r\n                <ion-icon name=\"md-camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <div formArrayName=\"sub_field_array\" *ngIf=\"radio.get('sub_field_array')\">\r\n            <div *ngFor=\"let sub_field of radio.get('sub_field_array').controls;let u=index\" [formGroupName]=\"u\">\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '1'\">\r\n                <ion-label text-wrap position=\"floating\">{{sub_field.get('ques').value}}</ion-label><br />\r\n                <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n              </ion-item>\r\n              <ion-list *ngIf=\"sub_field.get('type').value== '2'\">\r\n\r\n                <ion-radio-group formControlName=\"ans\">\r\n                  <ion-list-header>\r\n                    <ion-label>{{sub_field.get('ques').value}}</ion-label>\r\n                  </ion-list-header>\r\n\r\n                  <ion-item *ngFor=\"let ans of sub_field.get('answer_key').value\">\r\n                    <ion-label>{{ans.ans}}</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '3'\">\r\n                <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label>\r\n                <ionic-selectable formControlName=\"ans\" itemValueField=\"ans\" itemTextField=\"ans\"\r\n                  [items]=\"sub_field.get('answer_only').value\" [canSearch]=\"true\">\r\n\r\n                </ionic-selectable>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '5' || sub_field.get('type').value == '4'\">\r\n                <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label><br />\r\n                <ionic-selectable formControlName=\"ans\" [items]=\"sub_field.get('answer_only').value\"\r\n                  itemValueField=\"ans\" itemTextField=\"ans\" [isMultiple]=\"true\" [canSearch]=\"true\">\r\n                </ionic-selectable>\r\n              </ion-item>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"sub_field.controls['ans'].hasError('required') && (sub_field.controls['ans'].dirty || sub_field.controls['ans'].touched)\">\r\n                Field is Required</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"full\" color=\"primary\" shape=\"round\" (click)=\"onSubmit()\">Save <ion-icon name=\"arrow-forward\">\r\n    </ion-icon>\r\n  </ion-button>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_observation-data_questions_questions_module_ts-es2015.js.map