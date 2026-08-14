(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_dynamic-form-generator_dynamic-form_dynamic-form_module_ts"],{

/***/ 56135:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormPageRoutingModule": function() { return /* binding */ DynamicFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dynamic_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form.page */ 49334);




const routes = [
    {
        path: '',
        component: _dynamic_form_page__WEBPACK_IMPORTED_MODULE_0__.DynamicFormPage
    }
];
let DynamicFormPageRoutingModule = class DynamicFormPageRoutingModule {
};
DynamicFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicFormPageRoutingModule);



/***/ }),

/***/ 89814:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormPageModule": function() { return /* binding */ DynamicFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form-routing.module */ 56135);
/* harmony import */ var _dynamic_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.page */ 49334);







let DynamicFormPageModule = class DynamicFormPageModule {
};
DynamicFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicFormPageRoutingModule
        ],
        declarations: [_dynamic_form_page__WEBPACK_IMPORTED_MODULE_1__.DynamicFormPage]
    })
], DynamicFormPageModule);



/***/ }),

/***/ 49334:
/*!********************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormPage": function() { return /* binding */ DynamicFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-form.page.html */ 27751);
/* harmony import */ var _dynamic_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.page.scss */ 19776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-pdf/view-pdf.page */ 10467);
/* harmony import */ var _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dynamicform.service */ 42966);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! blob-util */ 1230);

















let DynamicFormPage = class DynamicFormPage {
    constructor(router, route, fb, ionicstorage, alertService, modalCtrl, dynamicFromService, toast, uploadService, location, camera, file) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.ionicstorage = ionicstorage;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.dynamicFromService = dynamicFromService;
        this.toast = toast;
        this.uploadService = uploadService;
        this.location = location;
        this.camera = camera;
        this.file = file;
        this.queslist = [];
        this.quesString = 'Question';
        this.inlinelist = new Array();
        this.rcappCols = new Array();
        this.show_child = new Array();
        this.parent_values = new Array();
        this.patch_data = new Array();
        this.default_values = {};
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
        this.newDate = new Date();
        this.minDateValue = new Date().toJSON().split('T')[0];
        this.maxDateValue = new Date().toJSON().split('T')[0];
        this.finalUploads = {};
        this.objectValId = {};
        this.getIonSecId = {};
        this.formId = '';
        this.param1 = '';
        this.param2 = '';
        this.naviBackUrl = '';
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.secId = this.route.snapshot.queryParamMap.get("secId");
        this.formId = this.route.snapshot.queryParamMap.get("formId");
        this.param1 = this.route.snapshot.queryParamMap.get("param1");
        this.param2 = this.route.snapshot.queryParamMap.get("param2");
        this.naviBackUrl = this.route.snapshot.queryParamMap.get("naviBackUrl");
        this.todayDate = this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd');
        this.cwsn.controls['form_data'].clear();
        this.ionicstorage.getData('conCol').then(res => {
            this.conCol = JSON.parse(res);
            this.ionicStorageGet();
        });
        // this.urlGetApi();
    }
    ionicStorageGet() {
        this.ionicstorage.getData('apiJson').then((dataa) => {
            this.apiJson = dataa != null ? JSON.parse(dataa) : '';
            setTimeout(() => {
                if (this.apiJson) {
                    this.fetchJson(this.apiJson.form_url);
                }
                else {
                    this.toast.presentToast('Data not found', 'error');
                }
            }, 100);
        }, (error) => console.error(error));
        this.ionicstorage.getData('languageValue').then((dataa) => {
            this.langstatus = dataa != null ? dataa : 1;
        }, (error) => console.error(error));
        // this.ionicstorage.getData('fromId').then(
        //   (dataa) => {
        //     this.fromId = dataa;
        //   },
        //   (error) => console.error(error)
        // );
        this.ionicstorage.getData('dbPk').then((dataa) => {
            this.dbPk = dataa;
        }, (error) => console.error(error));
        this.ionicstorage.getData('conCol').then((dataa) => {
            this.conCol = JSON.parse(dataa);
            console.log(this.conCol, 'this.conCol');
        }, (error) => console.error(error));
        this.ionicstorage.getData('dynamicFromSecData').then((dataa) => {
            this.objectValId = {};
            if (dataa) {
                this.objectValId = JSON.parse(dataa);
            }
        }, (error) => console.error(error));
    }
    // urlGetApi() {
    //   this.dynamicFromService.jsonFetch(169).subscribe(
    //     (res) => {
    //       try {
    //         if (res.status == 200 && res.dataStatus == true) {
    //           this.fetchJson(res.url.form_url);
    //         } else {
    //           throw res.message
    //         }
    //       } catch (err) {
    //         this.toast.presentToast(err, 'error');
    //       }
    //     },
    //     (error) => {
    //       this.toast.presentToast(error?.message, 'error');
    //     }
    //   )
    // }
    fetchJson(url) {
        // fetch('/assets/dynamic_json.json').then(res => res.json()).then(res => {
        //   this.section = res[0].section.find(x => x.id == this.secId);
        //   this.generateFormgroup(this.section.question);
        //   console.log(this.section.question,'this.section')
        // });
        fetch(url).then(res => res.json()).then(res => {
            this.section = res[0].section.find(x => x.sec_id == this.secId);
            // this.section.question.push({
            //   "id": "14064",
            //   "form_id": "169",
            //   "section_id": "233",
            //   "question_type": "photo",
            //   "question_title": "",
            //   "question_text": "Capture Image",
            //   "question_desc": "",
            //   "question_title_t": "",
            //   "question_text_t": "டெச்ட்",
            //   "question_desc_t": "",
            //   "option_1": "",
            //   "option_2": "",
            //   "option_3": "",
            //   "option_4": "",
            //   "option_5": "",
            //   "options_api": "",
            //   "table_name": null,
            //   "form_controller": "",
            //   "required": "1",
            //   "show_child_answer": null,
            //   "populate": "0",
            //   "verify": "0",
            //   "parent_id": null,
            //   "sequence_id": "3",
            //   "score": null,
            //   "correct_answer": "{}",
            //   "validation": "",
            //   "applicable_value": "",
            //   "applicable_for": "",
            //   "ordr": "140630",
            //   "options": [],
            //   "parent_form_controller": "",
            //   "parent_question_id": ""
            // })
            console.log(this.section, 'this.section');
            console.log(this.section.question, 'this.section');
        }).then(() => {
            this.generateFormgroup(this.section.question);
        });
    }
    initialValidator() {
        this.cwsn = this.fb.group({
            form_data: this.fb.array([])
        });
        console.log(this.cwsn, 'this.cwsn');
    }
    get form_data() {
        return this.cwsn.get("form_data");
    }
    generateFormgroup(data) {
        var _a;
        debugger;
        let tmp_data = new Array();
        for (let i in data) {
            // if (data[i].applicable_for !== "" && data[i].applicable_value !== "") {
            //   for (let j in this.conCol) {
            //     if (data[i].applicable_for == j && data[i].applicable_value == this.conCol[j]) {
            //       tmp_data.push(data[i]);
            //     }
            //   }
            // }
            // else {
            //   tmp_data.push(data[i]);
            // }
            if (data[i].applicable_for !== "" && data[i].applicable_value !== "") {
                let app_for = data[i].applicable_for;
                for (let j in this.conCol) {
                    if (app_for == j && data[i].applicable_value == this.conCol[j]) {
                        tmp_data.push(data[i]);
                    }
                }
            }
            else {
                tmp_data.push(data[i]);
            }
        }
        console.log(tmp_data, 'tmpdata');
        const resultArray = Object.keys(tmp_data).map(index => {
            let person = tmp_data[index];
            return person;
        });
        this.cwsn.controls['form_data'].clear();
        this.queslist = this.cwsn.controls['form_data'];
        if (resultArray.length > 0) {
            for (let i = 0; i < resultArray.length; i++) {
                if (resultArray[i].id != 'inline') {
                    let t_child = {
                        childs: resultArray[i].id,
                        values: resultArray[i].show_child_answer,
                        child_id: i,
                    };
                    if (typeof this.show_child[resultArray[i].parent_question_id] == 'undefined')
                        this.show_child[resultArray[i].parent_question_id] = new Array();
                    this.show_child[resultArray[i].parent_question_id].push(t_child);
                    console.log(this.show_child, 'this.show_child');
                    this.parent_values[resultArray[i].id] = ((resultArray[i].parent_question_id == '') ? true : false); //((resultArray[i].parent_id == '') ? true : false)
                    // let validator = Validators.compose([Validators.required]);
                    this.rcappCols.push(resultArray[i].id);
                    let validSplit = resultArray[i].validation.split('&&');
                    let validSplitObj = validSplit.map(ele => {
                        let x = ele.split('=');
                        let obj = {
                            [x[0]]: x[1]
                        };
                        return obj;
                    });
                    debugger;
                    if (resultArray[i].question_type == 'number') {
                        var condArr = [];
                        resultArray[i].validation = [];
                        let obj = {};
                        condArr.push((resultArray[i].required == 1) ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern('^[0-9\\W]+$'));
                        for (let j = 0; j < validSplitObj.length; j++) {
                            Object.entries(validSplitObj[j]).forEach(([key, value]) => {
                                let v = +value;
                                if (key == 'min' && value) {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(v));
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                                if (key == 'max' && value) {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(v));
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                            });
                        }
                        console.log(condArr, 'condArrcondArrcondArr');
                    }
                    else if (resultArray[i].question_type == 'text') {
                        var condArr = [];
                        resultArray[i].validation = [];
                        let obj = {};
                        condArr.push((resultArray[i].required == 1) ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(/^[a-zA-Z\s]*$/));
                        for (let j = 0; j < validSplitObj.length; j++) {
                            Object.entries(validSplitObj[j]).forEach(([key, value]) => {
                                let v = +value;
                                if (key == 'min' && value) {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(v));
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                                if (key == 'max' && value) {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(v));
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                            });
                        }
                    }
                    else if (resultArray[i].question_type == 'date') {
                        debugger;
                        var condArr = [];
                        let obj = {};
                        resultArray[i].validation = [];
                        condArr.push((resultArray[i].required == 1) ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                        for (let j = 0; j < validSplitObj.length; j++) {
                            Object.entries(validSplitObj[j]).forEach(([key, value]) => {
                                // if(key == 'past_date'){
                                //   condArr.push(Validators.required)
                                // }
                                // if(key == 'future_date'){
                                //   condArr.push(Validators.required)
                                // }
                                if (key == 'dateValid' || value) {
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                                else if (key == 'date_length' && (value || value == '')) {
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                                else if (key == 'date_value') {
                                    if (validSplitObj[0].dateValid == 'future_date') {
                                        obj = {
                                            [key]: this.pipe.transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')
                                        };
                                    }
                                    else if (validSplitObj[0].dateValid == 'past_date') {
                                        obj = {
                                            [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - 1), 'yyyy-MM-dd')
                                        };
                                    }
                                    // else if(validSplitObj[0].dateValid == 'current_future'){
                                    //   obj = {
                                    //     [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd')
                                    //   }
                                    // }
                                    // else if(validSplitObj[0].dateValid == 'current_past'){
                                    //   obj = {
                                    //     [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd')
                                    //   }
                                    // }
                                    else if (validSplitObj[0].dateValid == 'ndate_future') {
                                        obj = {
                                            [key]: this.pipe.transform(new Date().setDate(new Date().getDate() + +validSplitObj[1].date_length), 'yyyy-MM-dd')
                                        };
                                    }
                                    else if (validSplitObj[0].dateValid == 'ndate_past') {
                                        obj = {
                                            [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - +validSplitObj[1].date_length), 'yyyy-MM-dd')
                                        };
                                    }
                                    resultArray[i].validation.push(obj);
                                }
                            });
                        }
                    }
                    else if (resultArray[i].question_type == 'mcq') {
                        var condArr = [];
                        condArr.push(resultArray[i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                    }
                    else if (resultArray[i].question_type == 'mmcq') {
                        var condArr = [];
                        condArr.push(resultArray[i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                        for (let j = 0; j < validSplitObj.length; j++) {
                            Object.entries(validSplitObj[j]).forEach(([key, value]) => {
                                let v = +value;
                                if (key == 'min') {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(v));
                                }
                                if (key == 'max') {
                                    condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(v));
                                }
                            });
                        }
                    }
                    else if (resultArray[i].question_type == 'yesno') {
                        var condArr = [];
                        condArr.push(resultArray[i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                    }
                    else if (resultArray[i].question_type == 'file') {
                        var condArr = [];
                        condArr.push(resultArray[i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                        this.finalUploads[resultArray[i].id] = '';
                        console.log(this.finalUploads, 'this.finalUploads');
                        let obj = {};
                        resultArray[i].validation = [];
                        for (let j = 0; j < validSplitObj.length; j++) {
                            Object.entries(validSplitObj[j]).forEach(([key, value]) => {
                                // let v: any = value.split(',').join('');
                                if (key == 'file_type' || value) {
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                                else if (key == 'file_size' || value) {
                                    obj = {
                                        [key]: value
                                    };
                                    resultArray[i].validation.push(obj);
                                }
                            });
                        }
                    }
                    else {
                        var condArr = [];
                    }
                    if (parseInt(resultArray[i].verify) == 1) {
                        this.queslist.push(this.fb.group({
                            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                            form_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].form_id, null),
                            section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].section_id, null),
                            question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc, null),
                            question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc_t, null),
                            question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text, null),
                            question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text_t, null),
                            question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title, null),
                            question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title_t, null),
                            question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_type, null),
                            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options, null),
                            options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options_t, null),
                            options_api: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options_api, null),
                            table_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].table_name, null),
                            show_child: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].show_child_answer, null),
                            populate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].populate, null),
                            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                            parent_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_question_id, null),
                            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].is_active, null),
                            sequence_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].sequence_id, null),
                            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].score, null),
                            correct_answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].correct_answer, null),
                            required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].required, null),
                            verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].verify, null),
                            parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                            form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                            dis_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                            [resultArray[i].id]: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', (resultArray[i].parent_id != null || '') ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose(condArr)),
                            // [resultArray[i].id]: new FormControl('', (resultArray[i].parent_id != '') ? null : validator),              
                            sub: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].sub, null),
                            quesString: this.quesString,
                            validation: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].validation, null),
                            IsPhoto: false,
                        }));
                    }
                    else {
                        this.queslist.push(this.fb.group({
                            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                            form_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].form_id, null),
                            section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].section_id, null),
                            question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc, null),
                            question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc_t, null),
                            question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text, null),
                            question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text_t, null),
                            question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title, null),
                            question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title_t, null),
                            question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_type, null),
                            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options, null),
                            options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options_t, null),
                            options_api: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options_api, null),
                            table_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].table_name, null),
                            show_child: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].show_child_answer, null),
                            populate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].populate, null),
                            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                            parent_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_question_id, null),
                            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].is_active, null),
                            sequence_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].sequence_id, null),
                            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].score, null),
                            correct_answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].correct_answer, null),
                            required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].required, null),
                            verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].verify, null),
                            parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                            form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                            [resultArray[i].id]: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', (resultArray[i].parent_id != null || '') ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose(condArr)),
                            // [resultArray[i].id]: new FormControl('', (resultArray[i].parent_id != '') ? null : validator),
                            sub: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].sub, null),
                            validation: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].validation, null),
                            quesString: this.quesString,
                            IsPhoto: false,
                        }));
                    }
                    debugger;
                    if (this.objectValId == null) {
                        this.objectValCondition = this.objectValId;
                    }
                    else {
                        if (this.objectValId[this.dbPk] == undefined) {
                            this.objectValId[this.dbPk] = {};
                        }
                        this.objectValCondition = this.objectValId[this.dbPk][this.secId];
                    }
                    if (this.objectValCondition != undefined || null) {
                        let fromValue;
                        if (parseInt(resultArray[i].verify) == 1) {
                            this.queslist.controls[i].patchValue({
                                // [resultArray[i].dis_form_controller]: this.objectValId[resultArray[i].dis_form_controller],
                                [resultArray[i].id]: this.objectValId[this.dbPk][this.secId][resultArray[i].id],
                            });
                            // this.queslist.controls[i].controls[resultArray[i].dis_form_controller].updateValueAndValidity();
                            this.queslist.controls[i].controls[resultArray[i].id].updateValueAndValidity();
                        }
                        else {
                            if ((_a = this.objectValId[this.dbPk][this.secId][resultArray[i].id]) === null || _a === void 0 ? void 0 : _a.includes(',')) {
                                fromValue = this.objectValId[this.dbPk][this.secId][resultArray[i].id].split(',');
                            }
                            else {
                                fromValue = this.objectValId[this.dbPk][this.secId][resultArray[i].id];
                            }
                            this.queslist.controls[i].patchValue({
                                // [resultArray[i].id]: this.objectValId[this.secId][resultArray[i].id],
                                [resultArray[i].id]: fromValue,
                            });
                            this.queslist.controls[i].controls[resultArray[i].id].setValue(fromValue);
                            this.finalUploads[resultArray[i].id] = fromValue;
                            this.queslist.controls[i].controls[resultArray[i].id].updateValueAndValidity();
                        }
                        let pquesId = this.objectValId[this.dbPk][this.secId][resultArray[i].parent_question_id];
                        if (resultArray[i].parent_question_id != '') {
                            this.patchMCQNew(pquesId, resultArray[i].parent_question_id);
                        }
                    }
                }
                else {
                    let validator = _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
                    this.inlinelist = new Array();
                    let obj = {
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                        question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc, null),
                        question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_desc_t, null),
                        question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text, null),
                        question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_text_t, null),
                        question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title, null),
                        question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_title_t, null),
                        question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].question_type, null),
                        required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].required, null),
                        verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].verify, null),
                        options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options, null),
                        options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].options_t, null),
                        parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                        form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].id, null),
                        [resultArray[i].id]: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', (resultArray[i].parent_id != '') ? null : validator),
                        sub: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].sub, null),
                        quesString: this.quesString,
                        IsPhoto: false,
                    };
                    if (resultArray[i].question_text != '<h3>No Form Found</h3>') {
                        for (let j in resultArray[i].question_text) {
                            let inl = resultArray[i].question_text[j];
                            let temp = this.fb.array([]);
                            for (let k in inl.elements) {
                                if (typeof this.default_values[inl.elements[k].indexid] == 'undefined') {
                                    this.default_values[inl.elements[k].indexid] = new Array();
                                }
                                if (inl.elements[k].type == 'hidden') {
                                    this.default_values[inl.elements[k].indexid].push({
                                        [inl.elements[k].name]: inl.elements[k].value,
                                    });
                                }
                                temp.push(this.fb.group({
                                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].id, null),
                                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].name, null),
                                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].type, null),
                                    placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].placeholder, null),
                                    label: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].label, null),
                                    label_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].label_t, null),
                                    lang: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].lang, null),
                                    indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].indexid, null),
                                    parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[i].parent_id, null),
                                    form_control: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].form_control, null),
                                    options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].options, null),
                                    options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].options_t, null),
                                    url: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].url, null),
                                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].value, null),
                                    [inl.elements[k].form_control]: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', (inl.elements[k].parent_form_controller != '') ? null : validator),
                                }));
                                obj[inl.elements[k].form_control] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].value, null);
                            }
                            this.inlinelist.push({
                                "title": inl.title,
                                "elements": temp,
                            });
                            console.log(this.inlinelist, 'inline');
                        }
                    }
                    obj['inline'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.inlinelist, null);
                    this.queslist.push(this.fb.group(obj));
                }
            }
            console.log(this.queslist, "finalArr");
        }
    }
    openCameraOn(index, form_controller, validate) {
        debugger;
        this.queslist.controls[index].controls[form_controller].setValue(null);
        const options = {
            quality: 60,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK
        };
        this.camera.getPicture(options).then((imageData) => {
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 10485760) {
                        // this.queslist.controls[index].controls[form_controller].setValue(base64string)
                        // this.alertService.success('File Uploaded Successfully');
                        this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                            if (result) {
                                this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                    // this.imageKey = result.key;
                                    this.queslist.controls[index].controls[form_controller].setValue(result.key);
                                    this.finalUploads[form_controller] = result.key;
                                    // this.viewImage();
                                    this.alertService.success('File Uploaded Successfully');
                                });
                            }
                        });
                    }
                    else {
                        this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                }
            });
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    // handleMCQNew(val, i, form_name) {
    //   console.log(val, form_name)
    //   let childs = this.show_child[form_name];
    //   let occurred = false;
    //   console.log(childs, "parent chosen")
    //   for (let l in childs) {
    //     let e = childs[l];
    //     occurred = false;
    //     for (let j in e.values) {
    //       if (val.detail.value[j] == e.values[j])
    //         occurred = true;
    //     }
    //     if (occurred == true) {
    //       console.log(e.childs, "child true")
    //       this.parent_values[e.childs] = true
    //     } else {
    //       console.log(e.childs, "child false")
    //       this.parent_values[e.childs] = false
    //     }
    //   }
    //   console.log(this.parent_values, "childs")
    // }
    handleMMCQNew(val, i, form_name) {
        debugger;
        console.log(val, form_name);
        if (this.show_child[form_name] == undefined) {
            this.show_child[form_name] = {};
        }
        let childs = this.show_child[form_name];
        let occurred = false;
        console.log(childs, "parent chosen");
        for (let i = 0; i < childs.length; i++) {
            let e = childs[i];
            occurred = false;
            let chilvalue = e.values.split(',');
            for (let j = 0; j < chilvalue.length; j++) {
                if (val.includes(chilvalue[j])) {
                    occurred = true;
                }
            }
            if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
            }
            else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
            }
        }
        // for (let l in childs) {
        //   let e = childs[l];
        //   occurred = false;
        //   for (let j in e.values) {
        //     if (val.detail.value == e.values[j]){
        //       occurred = true;
        //     }
        //   }
        //   if (occurred == true) {
        //     console.log(e.childs, "child true")
        //     this.parent_values[e.childs] = true
        //   } else {
        //     console.log(e.childs, "child false")
        //     this.parent_values[e.childs] = false
        //   }
        // }
        console.log(this.parent_values, "childs");
    }
    handleMCQNew(val, i, form_name) {
        debugger;
        console.log(val, form_name);
        if (this.show_child[form_name] == undefined) {
            this.show_child[form_name] = {};
        }
        let childs = this.show_child[form_name];
        let occurred = false;
        console.log(childs, "parent chosen");
        for (let l in childs) {
            let e = childs[l];
            occurred = false;
            // for (let j in e.values) {
            //   if (val.detail.value == e.values[j]) {
            //     occurred = true;
            //   }
            // }
            if (val.detail.value == e.values) {
                occurred = true;
            }
            if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
            }
            else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
            }
        }
        console.log(this.parent_values, "childs");
    }
    patchMCQNew(val, form_name) {
        debugger;
        console.log(val, form_name);
        if (this.show_child[form_name] == undefined) {
            this.show_child[form_name] = {};
        }
        let childs = this.show_child[form_name];
        let occurred = false;
        console.log(childs, "parent chosen");
        for (let l in childs) {
            let e = childs[l];
            occurred = false;
            // for (let j in e.values) {
            //   if (val.detail.value == e.values[j]) {
            //     occurred = true;
            //   }
            // }
            if (val == e.values) {
                occurred = true;
            }
            if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
            }
            else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
            }
        }
        console.log(this.parent_values, "childs");
    }
    setValidatorsForQuestion(questionid) {
        debugger;
        const req = _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required;
        for (let i = 0; i < this.queslist.length; i++) {
            // const sec = this.queslist.controls[i].controls.question;
            const sec = this.queslist;
            for (const key in sec.controls) {
                if (sec.controls.hasOwnProperty(key)) {
                    const control = sec.controls[key];
                    if (control.value.id === questionid) {
                        const targetControl = control.get(questionid);
                        console.log(targetControl, 'targetControl');
                        if (targetControl) {
                            const hasValue = this.parent_values[questionid] != undefined;
                            if (!this.parent_values[questionid] || !hasValue) {
                                targetControl.clearValidators();
                            }
                            else {
                                targetControl.setValidators((this.parent_values[questionid] == false) ? null : req);
                            }
                            targetControl.updateValueAndValidity(); // Update validity status
                        }
                        else {
                            console.error('Target control form_controller is missing:', control.value);
                        }
                        break;
                    }
                }
            }
        }
    }
    FileUploadsnew(event, index, form_controller, validate) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            var fileName = event.target.files[0].name;
            let fileSize = validate.value[1].file_size * (1024 * 1024);
            let fileTypes = validate.value[0].file_type.split(',');
            // let fileExtss = [];
            // let fileApplication;
            // if(validate.value[0].file_type !== ''){
            //   if(validate.value[0].file_type?.includes(',')){
            //     fileTypes = "'"+validate.value[0].file_type.split(',').join("'||'")+ "'";
            //     fileTypes = fileTypes;
            //     let fileExt = validate.value[0].file_type.split(',')
            //     for(let k = 0; k < fileExt.length; k++){
            //       fileExtss.push('application/'+fileExt[k])
            //     }
            //     fileApplication = fileExtss.toString().split(',').join('||');
            //   }
            //   else{
            //     fileTypes = validate.value[0].file_type;
            //     fileApplication = 'application/'+validate.value[0].file_type;
            //   }
            // }
            console.log(fileTypes, 'fileTypes');
            if (fileSize == 0 || event.target.files[0].size <= fileSize) {
                this.doc_file = event.target.files;
                var splittedName = fileName.split(".");
                let filenameExt = false;
                let applicationType;
                for (let s = 0; s < fileTypes.length; s++) {
                    if (validate.value[0].file_type !== "") {
                        if (splittedName[1] == fileTypes[s]) {
                            filenameExt = true;
                            applicationType = event.target.files[0].type;
                            console.log(applicationType);
                        }
                    }
                    else {
                        filenameExt = true;
                        applicationType = event.target.files[0].type;
                    }
                }
                if (filenameExt == true) {
                    this.fileType = splittedName[1];
                    console.log(event.target.files[0].type);
                    if ((event.target.files[0].type == applicationType) || (event.target.files[0].type == '')) {
                        const fileReader = new FileReader();
                        fileReader.readAsDataURL(event.target.files[0]);
                        fileReader.onload = (event) => {
                            // ;
                            var bucketName = "renewalapplicationemis";
                            var filename = splittedName[0];
                            var ext = splittedName[1];
                            let expiry = 1800;
                            this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                                if (result) {
                                    // this.finalUploads[form_controller] = result.key;
                                    // this.queslist.controls[index].controls[form_controller].setValue(result.key)
                                    // this.form.controls['form_questions']['controls'][i].controls['result'].updateValueAndValidity();
                                    let files = this.doc_file;
                                    // let file: File = files[0];
                                    this.uploadService.uploadFile(result.url, files[0]).subscribe((res) => {
                                        this.finalUploads[form_controller] = result.key;
                                        this.queslist.controls[index].controls[form_controller].setValue(result.key);
                                    });
                                    this.alertService.success('File Uploaded Successfully');
                                    console.log(result.key, 'result.key');
                                }
                                else {
                                    this.alertService.error('Error in Uploading File please try again');
                                }
                            });
                        };
                    }
                    else {
                        this.alertService.warning('Please upload only ' + validate.value[0].file_type + ' format');
                        this.queslist.controls[index].controls[form_controller].setValue(null);
                    }
                }
                else {
                    this.alertService.warning('Upload file name without dot(.) OR Please upload only ' + validate.value[0].file_type + ' format');
                    this.queslist.controls[index].controls[form_controller].setValue(null);
                }
            }
            else {
                this.alertService.warning('File Can`t uploaded because File size should not exceed ' + validate.value[1].file_size + 'MB');
                this.queslist.controls[index].controls[form_controller].setValue(null);
            }
        }
    }
    getUploadedFiles1(filename, i) {
        var bucketName = "renewalapplicationemis";
        var filename = filename;
        if (filename == undefined || filename == "") {
            this.alertService.alert('File Not Uploaded');
            this.queslist.controls[i].controls.IsPhoto.setValue(true);
        }
        var splitword = filename.split('.')[1];
        console.log(filename, 'kfshdfkjhdskfjhsdk');
        console.log(splitword, 'kjfuiwyrewuiryidjfhsdkjfskjf');
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            console.log("file data", result);
            if (result) {
                console.log(result);
                setTimeout(() => {
                    this.viewImage(result.url, splitword);
                    console.log(result.url, 'result.url');
                }, 100);
                this.queslist.controls[i].controls.IsPhoto.setValue(true);
            }
        });
    }
    RemoveAgencyDocnew(form_controller, index) {
        this.finalUploads[form_controller] = "";
        this.queslist.controls[index].controls[form_controller].setValue(null);
    }
    viewImage(urlPdf, ext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log('daata', urlPdf);
            const modal = yield this.modalCtrl.create({
                component: _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__.ViewPdfPage,
                componentProps: { image: urlPdf, extension: ext },
                cssClass: 'fullscreen',
                backdropDismiss: false,
            });
            yield modal.present();
        });
    }
    getsectionStatus() {
        debugger;
        this.getIonSecId = {};
        this.ionicstorage.getData('sectionStatus').then((dataa) => {
            if (dataa !== null) {
                // if (typeof dataa == 'object') {
                //   this.getIonSecId = dataa;
                // }
                // else {
                //   this.getIonSecId.push(dataa);
                // }
                this.getIonSecId = dataa;
                if (typeof this.getIonSecId[this.dbPk] == 'undefined') {
                    this.getIonSecId[this.dbPk] = [];
                }
                // this.getIonSecId[this.dbPk].push(this.secId)
                if (!this.getIonSecId[this.dbPk].includes(this.secId)) {
                    this.getIonSecId[this.dbPk].push(this.secId);
                    this.ionicstorage.insertData_Replace('sectionStatus', this.getIonSecId);
                }
            }
            else {
                if (typeof this.getIonSecId[this.dbPk] == 'undefined') {
                    this.getIonSecId[this.dbPk] = [];
                }
                this.getIonSecId[this.dbPk].push(this.secId);
                this.ionicstorage.insertData_Replace('sectionStatus', this.getIonSecId);
            }
        }, (error) => console.error(error));
    }
    localSubmit() {
        if (this.objectValId == null) {
            this.objectValId = {};
        }
        let objectVal = {};
        let submitData = this.cwsn.value.form_data;
        debugger;
        // console.log(submitData, 'submitData')
        for (let i = 0; i < submitData.length; i++) {
            // console.log(submitData[i])
            let fromCntrl = submitData[i].form_controller;
            // let obj = {
            //   [submitData[i].form_controller] : submitData[i][fromCntrl]
            // }
            objectVal[submitData[i].id] = submitData[i][fromCntrl] ? (submitData[i][fromCntrl]) : null;
            // if (typeof objectValId[this.secId] === 'undefined') { objectValId[this.secId] =  new Array(); }
            if (typeof this.objectValId[this.dbPk] === 'undefined') {
                this.objectValId[this.dbPk] = {};
            }
            this.objectValId[this.dbPk][this.secId] = objectVal;
            // objectVal[submitData[i].form_controller] = submitData[i][fromCntrl]
        }
        this.ionicstorage.insertData_Replace('dynamicFromSecData', JSON.stringify(this.objectValId));
        this.getsectionStatus();
        this.router.navigate(['/tabs/dynamic-index'], { queryParams: {
                'secId': this.secId,
                formId: this.formId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl,
            } });
    }
    changeEnglish() {
        this.langstatus = 1;
        this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
    }
    changeTamil() {
        this.langstatus = 2;
        this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
    }
    goBack() {
        this.router.navigate(['/tabs/dynamic-index'], { queryParams: {
                'secId': this.secId,
                formId: this.formId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl,
            } });
    }
    handleRefresh(event) {
        setTimeout(() => {
            this.fetchJson(this.apiJson.form_url);
            event.target.complete();
        }, 1000);
    }
};
DynamicFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_6__.DynamicformService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File }
];
DynamicFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-dynamic-form',
        template: _raw_loader_dynamic_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicFormPage);



/***/ }),

/***/ 19776:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  color: #fff;\n}\n\nsmall {\n  color: red;\n  margin-left: 10px;\n}\n\n.star {\n  color: red;\n  margin-left: 5px;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 5px;\n  width: 90%;\n  font-size: 18px;\n}\n\n.cardbg {\n  background-color: #F3F4FA;\n}\n\n.inputbg {\n  padding: 10px;\n  background-color: #EDDEFF;\n  border-radius: 10px;\n}\n\n.inputbg .get-upload {\n  border: 2px solid #9162b0;\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n}\n\n.inputbg .get-upload span {\n  color: #9162b0;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.inputbg .get-upload ion-icon {\n  font-size: 30px;\n  color: #f00;\n  margin-left: 20px;\n}\n\n.card-content-md {\n  padding: 0px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.carder {\n  padding: 0%;\n  margin: 0%;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.layout {\n  margin: 10px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.note {\n  color: red;\n}\n\n.textright {\n  text-align: right;\n  padding: 10px;\n}\n\n.select-txt {\n  font-size: 18px;\n  color: #542374;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.keylinkbackground {\n  background-color: white;\n  padding: 15px;\n}\n\n.keylinkbackgroundinline {\n  background-color: white;\n  padding: 10px;\n}\n\n.tickfalse {\n  color: white;\n  background-color: red;\n  text-align: right;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.cancelbuttonlink {\n  margin-top: 2px;\n}\n\n.notelink {\n  color: #3930f4;\n}\n\n.rfrsh-btn {\n  text-align: center;\n  padding: 50px 0px;\n}\n\n.rfrsh-btn img {\n  width: 150px;\n  margin-bottom: 25px;\n}\n\nion-card {\n  box-shadow: none;\n}\n\nion-card ion-card-content {\n  background: #fff;\n}\n\nion-card ion-card-content h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  padding: 0px 0px 5px;\n}\n\nion-card ion-card-content .botom-btn {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0px;\n}\n\nion-card ion-card-content .botom-btn ion-button {\n  margin: 0px 10px;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.textaling .lang-btn {\n  border-radius: 5px;\n  background-color: #d5b2ed;\n  color: var(--ion-color-primary);\n  margin: 0px 6px;\n  padding: 8px 12px;\n}\n\n.textaling .lang-btn.lan_active {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREU7RUFDRSx5QkFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFISTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUtOOztBQUpNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU1SOztBQURFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFJSjs7QUFEQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0FBSUY7O0FBREE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUhFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUhFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFKSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQU1OOztBQUpJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFMTTtFQUNFLGdCQUFBO0FBT1I7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSkU7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFMTTtFQUNJLGdCQUFBO0FBT1YiLCJmaWxlIjoiZHluYW1pYy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnNtYWxse1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5zdGFye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5jYXJkYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0Ymd7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuZ2V0LXVwbG9hZHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzkxNjJiMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgc3BhbntcclxuICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2FyZGVye1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4uYm9yZGVyc3R5bGV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4ucGFkZGluZ3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGF5b3V0e1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmJ0bmJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3Rle1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50ZXh0cmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdC10eHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNTQyMzc0O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2V7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYzZjNWM1XHJcbn1cclxuXHJcbi50ZXh0YWxpbmd7XHJcbiAgdGV4dC1hbGlnbjplbmQ7XHJcbn1cclxuXHJcbi5rZXlsaW5rYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ua2V5bGlua2JhY2tncm91bmRpbmxpbmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpY2tmYWxzZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWxidXR0b25saW5re1xyXG4gIG1hcmdpbi10b3A6MnB4IDtcclxufVxyXG5cclxuLm5vdGVsaW5re1xyXG4gIGNvbG9yOiByZ2IoNTcsIDQ4LCAyNDQpO1xyXG59XHJcblxyXG4ucmZyc2gtYnRue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMHB4IDVweDtcclxuICAgIH1cclxuICAgIC5ib3RvbS1idG57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXh0YWxpbmd7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIC5sYW5nLWJ0bntcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDViMmVkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAmLmxhbl9hY3RpdmV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 27751:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-col size=\"8\">\r\n        <ion-row style=\"flex-wrap: nowrap;\">\r\n          <ion-buttons class=\"back-icon\">\r\n            <ion-icon name=\"arrow-back\" (click)=\"goBack()\">\r\n            </ion-icon>\r\n          </ion-buttons>\r\n          <ion-title class=\"ion-text-wrap\" *ngIf=\"langstatus == 1\">{{section?.section_name}}</ion-title>\r\n          <ion-title class=\"ion-text-wrap\" *ngIf=\"langstatus == 2\">{{section?.section_name_t}}</ion-title>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div class=\"textaling\">\r\n          <ion-label class=\"lang-btn\" (click)=\"changeEnglish()\" [class.lan_active]=\"langstatus == 1\">E</ion-label>\r\n          <ion-label class=\"lang-btn\" (click)=\"changeTamil()\" [class.lan_active]=\"langstatus == 2\">த</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/dynamic-index\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Form Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\">\r\n    <ion-card-content *ngIf=\"form_data.controls.length > 0\">\r\n      <form id=\"cwsn\" [formGroup]=\"cwsn\" >\r\n        <div formArrayName=\"form_data\">\r\n          <div *ngFor=\"let control of form_data.controls; let i = index;\" [formGroupName]=\"i\">\r\n            <div [ngSwitch]=\"control.controls.question_type.value\">\r\n              <div *ngSwitchCase=\"'yesno'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\"\r\n                                  name={{control.controls.dis_form_controller.value}}>\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'text'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Text\"></ion-input>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['minlength']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['maxlength']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed alphabets</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.dis_form_controller.value}}\r\n                                  disbaled=\"true\" name={{control.controls.dis_form_controller.value}}\r\n                                  placeholder=\"Enter Text\" disabled=\"true\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['minlength']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['maxlength']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed alphabets</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'date'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='future_date'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='past_date'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [max]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='current_future'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"todayDate\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='current_past'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [max]=\"todayDate\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='ndate_future'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"todayDate\" [max]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='ndate_past'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"control.controls.validation.value[2]?.date_value\" [max]=\"todayDate\"></ion-input>\r\n                              </ion-item>\r\n                              <!-- <ion-item *ngIf=\"control.controls.validation.value=='future_date'\">\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} placeholder=\"Enter Date\" [max]=\"maxDateValue\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item *ngIf=\"control.controls.validation.value=='past_date'\">\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} placeholder=\"Enter Date\" [min]=\"minDateValue\"></ion-input>\r\n                              </ion-item> -->\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}} disabled=\"true\"\r\n                                  placeholder=\"Enter Date\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc.value_t}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'file'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n\r\n                              <div class=\"keylinkbackground\" *ngIf=\"control.controls.IsPhoto.value\">\r\n                                <div>\r\n                                  <ion-item class=\"item-styles\">\r\n                                    <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                      formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                      (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                      name={{control.controls.form_controller.value}}>\r\n                                      <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                      <ion-select-option value=\"2\">No</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <div *ngIf=\"finalUploads[control.controls.form_controller.value]\" class=\"get-upload\">\r\n                                <span (click)=\"getUploadedFiles1(finalUploads[control.controls.form_controller.value] ,i)\">\r\n                                  {{this.finalUploads[control.controls.form_controller.value]}}</span>\r\n                                  <ion-icon name=\"close-circle-outline\" (click)=\"RemoveAgencyDocnew(control.controls.form_controller.value, i)\"></ion-icon>\r\n                              </div>\r\n                              <ion-item *ngIf=\"!finalUploads[control.controls.form_controller.value]\">\r\n                                <ion-input type=\"file\" (change)=\"FileUploadsnew($event, i, control.controls.form_controller.value, control.controls.validation)\" formControlName={{control.controls.form_controller.value}}></ion-input>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'photo'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <!-- <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n\r\n                              <div class=\"keylinkbackground\" *ngIf=\"control.controls.IsPhoto.value\">\r\n                                <div>\r\n                                  <ion-item class=\"item-styles\">\r\n                                    <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                      formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                      (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                      name={{control.controls.form_controller.value}}>\r\n                                      <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                      <ion-select-option value=\"2\">No</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </div>\r\n                              </div>\r\n                            </div> -->\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <div *ngIf=\"finalUploads[control.controls.form_controller.value]\" class=\"get-upload\">\r\n                                <span (click)=\"getUploadedFiles1(finalUploads[control.controls.form_controller.value] ,i)\">\r\n                                  {{this.finalUploads[control.controls.form_controller.value]}}</span>\r\n                                  <ion-icon name=\"close-circle-outline\" (click)=\"RemoveAgencyDocnew(control.controls.form_controller.value, i)\"></ion-icon>\r\n                              </div>\r\n                              <ion-item *ngIf=\"!finalUploads[control.controls.form_controller.value]\">\r\n                                <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName={{control.controls.form_controller.value}}></ion-input>\r\n                                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i, control.controls.form_controller.value, control.controls.validation)\"></ion-icon>\r\n                                <!-- <ion-input type=\"file\" (change)=\"FileUploadsnew($event, i, control.controls.form_controller.value, control.controls.validation)\" formControlName={{control.controls.form_controller.value}}></ion-input> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'number'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input onkeypress=\"return (event.charCode>47 && event.charCode<58)\" placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Number\">\r\n                                </ion-input>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['min']\">Enter proper min value {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['max']\">Enter proper max value {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed numbers</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}}\r\n                                  name={{control.controls.dis_form_controller.value}} disabled=\"true\">\r\n                                </ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['min']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['max']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed numbers</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div *ngSwitchCase=\"'inline'\">\r\n                <div *ngFor=\"let obj of control.controls.inline.value;let l=index\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"!onActive\" (click)=\"onExpand(true)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"onActive\" (click)=\"onExpand(false)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" *ngIf=\"onActive\">\r\n                      <div class=\"inputbg\">\r\n                        <div *ngFor=\"let elem of obj.elements.controls let i=index\">\r\n                          <div *ngIf=\"i == 0\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'select'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item class=\"item-styles\">\r\n                              <ion-select class=\"select\" placeholder=\"{{elem.controls.type.value}}\" ok-text=\"Ok\"\r\n                                cancel-text=\"Dismiss\" formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                <ion-select-option [value]=\"val.id\" *ngFor=\"let val of elem.controls.options.value\">\r\n                                  {{val.value}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"elem.controls.type.value == 'text' || elem.controls.type.value == 'number' || elem.controls.type.value == 'tel' || elem.controls.type.value == 'date'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item>\r\n                              <ion-input type=\"{{elem.controls.type.value}}\"\r\n                                placeholder=\"{{elem.controls.placeholder.value}}\"\r\n                                formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                              </ion-input>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'file'\">\r\n                            <div *ngIf=\"elem.controls.url.value!= null\">\r\n                              <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                              <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                              <div class=\"keylinkbackgroundinline\">\r\n                                <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                elem.controls.url.value\r\n                                ? elem.controls.url.value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n                              </div>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,elem.controls.form_control.value)\"\r\n                                  name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                  indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div *ngSwitchCase=\"'mcq'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            {{control.controls.value}}\r\n                            <div *ngIf=\"control.controls.verify.value != 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                <ng-container *ngIf=\"langstatus == 1\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"langstatus == 2\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                               \r\n                                </ion-select>\r\n                                <!-- <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\">\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'mmcq'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            {{control.controls.value}}\r\n                            <div *ngIf=\"control.controls.verify.value != 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                (ionChange)=\"handleMMCQNew($event.target.value, i,control.controls.form_controller.value)\" [multiple]=\"true\">\r\n                                <ng-container *ngIf=\"langstatus == 1\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"langstatus == 2\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                </ion-select>\r\n                                <!-- <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMMCQNew($event, i,control.controls.dis_form_controller.value)\">\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <p style=\"color: red; margin-left: 10px;\"\r\n                *ngIf=\"(control.controls[control.controls.form_controller.value].hasError('required'))\">\r\n                Field is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"botom-btn\">\r\n          <ion-button (click)=\"goBack()\"><span style=\"color:#fff;\">Back</span></ion-button>\r\n          <ion-button (click)=\"localSubmit()\" [disabled]=\"!cwsn.controls.form_data.valid\"><span style=\"color:#fff;\">Save & Next</span></ion-button>\r\n        </div>\r\n      </form>\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"form_data.controls.length == 0\" class=\"rfrsh-btn\">\r\n      <img src=\"https://i.pinimg.com/564x/7d/d4/d5/7dd4d5852fa388f238d485080089d94e.jpg\" alt=\"\">\r\n      <h4><b>Swipe Down To Refresh</b></h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dynamic-form-generator_dynamic-form_dynamic-form_module_ts-es2015.js.map