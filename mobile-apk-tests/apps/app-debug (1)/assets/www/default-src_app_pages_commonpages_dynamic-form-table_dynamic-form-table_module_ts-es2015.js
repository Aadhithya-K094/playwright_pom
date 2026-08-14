(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"],{

/***/ 50207:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/aws-dynamic-form1/aws-dynamic-form1.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsDynamicForm1Component": function() { return /* binding */ AwsDynamicForm1Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_aws_dynamic_form1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aws-dynamic-form1.component.html */ 72848);
/* harmony import */ var _aws_dynamic_form1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aws-dynamic-form1.component.scss */ 82108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);









let AwsDynamicForm1Component = class AwsDynamicForm1Component {
    constructor(route, fb, userSessionService, cdr, alertService) {
        this.route = route;
        this.fb = fb;
        this.userSessionService = userSessionService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.formArrayList = [];
        this.list = '';
        this.formGrp = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup;
        this.formArrName = '';
        this.index = '';
        this.submitted = false;
        this.healthBlock = [];
        this.childDom = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.cateID = '';
        this.sub = false;
        this.listFromApi = [];
        this.teacherTable = true;
        this.cattyId = "";
        this.maxDate = '2040-01-01';
        this.currPageParam = 1;
        this.currControl = '';
        this.diable1 = false;
        this.quesIndex = 0;
        this.classType = 1;
        this.minFmDate = new Date();
        this.isDrpDwnChange = false;
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD');
        this.previousYear = this.currentYear - 1;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.currPageParam = params['id'];
            this.classType = params['class'];
            this.classType = 'this.classType.toString()';
        });
        // if(this.viewstatus ==1){
        //   this.diable1 = false
        // }else{
        //   this.diable1 =true
        // }
        this.listFromApi = localStorage.getItem("listFromApi") ? JSON.parse(localStorage.getItem("listFromApi")) : [];
        this.parentform = this.createFormArray();
        this.updateItemsToformArray();
        let formArr = this.parentform.get('dynamicFormArray');
        if (this.formArrName == 'grandParentFA') {
            for (let i = 0; i < formArr.controls.length; i++) {
                (this.formGrp.get(this.formArrName)).push(formArr.controls[i]);
            }
        }
        else {
            // ======bind subforms to parent form======
            this.formGrp = this.formGrp.controls;
            for (let i = 0; i < formArr.controls.length; i++) {
                this.formGrp[Number(this.index)].controls.subques.push(formArr.controls[i]);
            }
        }
        ;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        let parForm = this.parentform.get('dynamicFormArray');
        // this.childDom.emit(parForm);
        this.cdr.detectChanges();
        this.data = window.localStorage.getItem("viewstatus");
        if (this.data == 1) {
            this.diable1 = false;
            this.cdr.detectChanges();
        }
        else {
            this.diable1 = true;
            this.cdr.detectChanges();
        }
        console.log(this.healthBlock, 'healthBlock');
    }
    ionViewDidEnter() {
        this.cdr.detectChanges();
    }
    createFormArray() {
        return this.fb.group({
            dynamicFormArray: this.fb.array([])
        });
    }
    mainQuesChange(controlName, event) {
        let obj = {
            qId: controlName,
            value: event.detail.value
        };
        this.childDom.emit(obj);
        this.cdr.detectChanges();
    }
    updateItemsToformArray() {
        var _a, _b, _c;
        this.formArrayList = this.parentform.get('dynamicFormArray');
        let data = this.list;
        if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
            this.quesIndex = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].subques.length > 0) {
                    data[i].subquesList = data[i].subques;
                }
                else if (!(data[i].subquesList)) {
                    data[i].subquesList = [];
                }
                (data[i].subquesList).forEach(element => {
                    element['mainQuesInd'] = i;
                });
                let obj = {};
                obj = {
                    ques_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(i, null),
                    ques_displayid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_displayid, null),
                    ques_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_text, null),
                    ques_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_type, null),
                    table_footer_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].table_footer_text, null),
                    ques_valid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_valid, null),
                    ques_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_option, null),
                    controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].controlName),
                    subquesLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].subquesList.length),
                    subques: this.fb.array([]),
                    subquesList: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].subquesList),
                    col: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].col),
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].value),
                    table: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].table),
                    notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].info),
                    emsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].info),
                    disable: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].disable),
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].hidden),
                    expected: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].expected),
                    cls_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].cls_name),
                    ques_tamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_tamil),
                    ques_english: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_english),
                    label1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].label1),
                    label2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].label2),
                    Screened_Dis_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].Screened_Dis_type),
                    calcSubValid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].calcSubValid),
                    grp_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].grp_type),
                    sub_heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].sub_heading),
                    ques_text_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].ques_text_type),
                    page: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[i].page),
                    mainQuesInd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_a = data[i]) === null || _a === void 0 ? void 0 : _a.mainQuesInd),
                    option_mapping: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_b = data[i]) === null || _b === void 0 ? void 0 : _b.option_mapping, null)
                };
                if (data[i].ques_type == 0) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else if (data[i].ques_type == 1) {
                    obj[data[i].controlName] = !(data[i].hidden) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]) : new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else if (data[i].ques_type == 2) {
                    obj[data[i].controlName] = (data[i].required == 1) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(data[i].pattern)]) : new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else if (data[i].ques_type == 3) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else if (data[i].ques_type == 4) {
                    obj[data[i].controlName] = (data[i].required == 1) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]) : new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else if (data[i].ques_type == 5) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
                }
                else if (data[i].ques_type == 6) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
                }
                else if (data[i].ques_type == 7) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
                }
                else if (data[i].ques_type == 8) {
                    obj[data[i].controlName] = (data[i].required == 1) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]) : new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                else {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
                }
                if (this.listFromApi.length == 0 && data[i].ques_type == 1) {
                    data[i].value = '2';
                }
                for (let k = 0; k < this.listFromApi.length; k++) {
                    let list = this.listFromApi[k];
                    if (list) {
                        if (data[i].controlName == list.Qid) {
                            if (data[i].ques_type == 5) {
                                let dropValue = data[i].ques_option.find(obj => obj.id == list.ResChar);
                                data[i].value = dropValue === null || dropValue === void 0 ? void 0 : dropValue.id;
                            }
                            else if (data[i].ques_type == 6) {
                                let res = list.ResChar.split(',');
                                let dropValue = [];
                                data[i].ques_option.forEach(obj => {
                                    if (res.includes(obj.id)) {
                                        dropValue.push(obj);
                                    }
                                });
                                data[i].value = dropValue;
                            }
                            else if (data[i].ques_type == 12) {
                                data[i].value = list.ResChar == '1' ? true : false;
                            }
                            else if (data[i].ques_type == 16) {
                                let dropValue = data[i].ques_option.find(obj => obj == list.ResChar);
                                data[i].value = dropValue;
                            }
                            else if (data[i].ques_type == 6) {
                                let valSplit = list.ResChar.split(',');
                                let dropValue = valSplit;
                                data[i].value = dropValue;
                            }
                            else {
                                data[i].value = list.ResChar;
                            }
                        }
                    }
                }
                if ((_c = this.listFromApi[this.listFromApi.length - 1]) === null || _c === void 0 ? void 0 : _c.stdType) {
                    data[i].value = '';
                }
                this.formArrayList.push(this.fb.group(obj));
                this.formArrayList.controls[i].patchValue({
                    [data[i].controlName]: data[i].value,
                });
                this.formArrayList.controls[i].updateValueAndValidity();
            }
        }
    }
    dynamicPatchValue(index, formIndex) {
        this.formArrayList.controls[formIndex].patchValue({
            [this.list[index]['controlName']]: this.list[index]['value'],
        });
        this.formArrayList.controls[formIndex].updateValueAndValidity();
    }
    removeFormControl(index) {
        // this.formArrayList.controls[index].controls.clear();
    }
    removeSubQues(list) {
        list.controls.subques.clear();
    }
    removeSubQuesCond(list, currVal) {
        let temp = [];
        if (list['controls']) {
            let qstList = list['controls'].subques.value;
            temp = qstList.filter((obj, idx) => {
                return obj.option_mapping && obj.option_mapping != currVal;
            });
            if (temp) {
                debugger;
                temp.forEach(obj1 => {
                    let idx = qstList.findIndex((obj2) => { return obj2.controlName == obj1.controlName; });
                    if (idx != -1) {
                        list.controls.subques.removeAt(idx);
                    }
                });
            }
        }
        ;
        // list.controls.subques.clear();
    }
    showSubQuesDropdown(expected, current) {
        if (expected.includes(current)) {
            return true;
        }
        else {
            return false;
        }
    }
    setFormValidation(list, val, index, loopArr) {
        // if(this.viewstatus == 2){
        //   this.truevalue1 = true
        // }
        // else{
        //   this.truevalue2 = true
        // }
        var _a;
        let isAllValid = true;
        if (((_a = loopArr[index - 1]) === null || _a === void 0 ? void 0 : _a.valid) || index == 0) {
            for (let j = 0; j < loopArr.length; j++) {
                if (j != index) {
                    loopArr[j].patchValue({
                        [loopArr[j].controls.controlName.value]: false
                    });
                }
            }
            ;
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
        else {
            for (let i = 0; i < loopArr.length; i++) {
                if (loopArr[i].invalid) {
                    this.alertService.warning("Please fill all questions in section " + (i + 1));
                    for (let j = 0; j < loopArr.length; j++) {
                        if (j != i) {
                            loopArr[j].patchValue({
                                [loopArr[j].controls.controlName.value]: false
                            });
                        }
                    }
                    ;
                    loopArr[i].patchValue({
                        [loopArr[i].controls.controlName.value]: val
                    });
                    isAllValid = false;
                    return;
                }
            }
        }
        ;
        if (isAllValid) {
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
    }
    subQustShowCond(list, currVal) {
        let temp = [];
        if (list['controls']) {
            let qstList = list['controls'].subquesList.value;
            temp = qstList.filter((obj) => {
                return !obj.option_mapping || obj.option_mapping == currVal;
            });
        }
        ;
        return temp.length > 0 ? temp : list;
    }
    ;
};
AwsDynamicForm1Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
AwsDynamicForm1Component.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    formGrp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    formArrName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    viewstatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    healthBlock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    childDom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    dischargingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['dischargingPortsComponent',] }]
};
AwsDynamicForm1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-aws-dynamic-form1',
        template: _raw_loader_aws_dynamic_form1_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aws_dynamic_form1_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AwsDynamicForm1Component);



/***/ }),

/***/ 55186:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form-table-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormTablePageRoutingModule": function() { return /* binding */ DynamicFormTablePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dynamic_form_table_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form-table.page */ 11374);




const routes = [
    {
        path: '',
        component: _dynamic_form_table_page__WEBPACK_IMPORTED_MODULE_0__.DynamicFormTablePage
    }
];
let DynamicFormTablePageRoutingModule = class DynamicFormTablePageRoutingModule {
};
DynamicFormTablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicFormTablePageRoutingModule);



/***/ }),

/***/ 41721:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form-table.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormTablePageModule": function() { return /* binding */ DynamicFormTablePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dynamic_form_table_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form-table-routing.module */ 55186);
/* harmony import */ var _dynamic_form_table_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form-table.page */ 11374);
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ 67869);
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-table/dynamic-table.component */ 4463);
/* harmony import */ var _aws_dynamic_form1_aws_dynamic_form1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aws-dynamic-form1/aws-dynamic-form1.component */ 50207);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var _dynamic_health_form_mode_dynamic_health_form_mode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-health-form-mode/dynamic-health-form-mode.component */ 9922);












let DynamicFormTablePageModule = class DynamicFormTablePageModule {
};
DynamicFormTablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _dynamic_form_table_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicFormTablePageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__.IonicSelectableModule
        ],
        declarations: [_dynamic_form_table_page__WEBPACK_IMPORTED_MODULE_1__.DynamicFormTablePage, _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent, _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent, _aws_dynamic_form1_aws_dynamic_form1_component__WEBPACK_IMPORTED_MODULE_4__.AwsDynamicForm1Component, _dynamic_health_form_mode_dynamic_health_form_mode_component__WEBPACK_IMPORTED_MODULE_5__.DynamicHealthFormModeComponent],
        exports: [
            _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent,
            _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent,
            _aws_dynamic_form1_aws_dynamic_form1_component__WEBPACK_IMPORTED_MODULE_4__.AwsDynamicForm1Component,
            _dynamic_health_form_mode_dynamic_health_form_mode_component__WEBPACK_IMPORTED_MODULE_5__.DynamicHealthFormModeComponent
        ]
    })
], DynamicFormTablePageModule);



/***/ }),

/***/ 11374:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form-table.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormTablePage": function() { return /* binding */ DynamicFormTablePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_form_table_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-form-table.page.html */ 48409);
/* harmony import */ var _dynamic_form_table_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form-table.page.scss */ 45235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let DynamicFormTablePage = class DynamicFormTablePage {
    constructor() { }
    ngOnInit() {
    }
};
DynamicFormTablePage.ctorParameters = () => [];
DynamicFormTablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dynamic-form-table',
        template: _raw_loader_dynamic_form_table_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_form_table_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicFormTablePage);



/***/ }),

/***/ 67869:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form/dynamic-form.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": function() { return /* binding */ DynamicFormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-form.component.html */ 78955);
/* harmony import */ var _dynamic_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component.scss */ 62777);
/* harmony import */ var _dynamic_class_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-class.scss */ 77385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_pages_cwsn_disability_screening_disability_screening_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/cwsn/disability-screening/disability-screening.page */ 21439);











let DynamicFormComponent = class DynamicFormComponent {
    constructor(route, fb, userSessionService, cdr, alertService, platform, disabilityScreeningPage) {
        this.route = route;
        this.fb = fb;
        this.userSessionService = userSessionService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.platform = platform;
        this.disabilityScreeningPage = disabilityScreeningPage;
        this.formArrayList = [];
        this.list = '';
        this.formGrp = _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup;
        this.formArrName = '';
        this.index = '';
        this.submitted = false;
        this.childDom = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.cateID = '';
        this.sub = false;
        this.listFromApi = [];
        this.teacherTable = true;
        this.cattyId = "";
        this.currPageParam = 1;
        this.currControl = '';
        this.quesIndex = 0;
        this.classType = 1;
        this.currentYear = (new Date()).getFullYear();
        this.previousYear = this.currentYear - 1;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.currPageParam = params['id'];
            this.classType = params['class'];
            this.classType = this.classType.toString();
        });
        //  this.currPageParam =  Number(this.route.snapshot.paramMap.get('id'));
        // this.cateID = this.userSessionService.school_key_id();
        // // this.cattyId = this.userSessionService.catty_id();
        // this.schoolTyId = this.userSessionService.school_key_id();
        this.listFromApi = localStorage.getItem("listFromApi") ? JSON.parse(localStorage.getItem("listFromApi")) : [];
        this.parentform = this.createFormArray();
        this.updateItemsToformArray();
        let formArr = this.parentform.get('dynamicFormArray');
        if (this.formArrName == 'grandParentFA') {
            for (let i = 0; i < formArr.controls.length; i++) {
                (this.formGrp.get(this.formArrName)).push(formArr.controls[i]);
            }
        }
        else {
            // ======bind subforms to parent form======
            this.formGrp = this.formGrp.controls;
            for (let i = 0; i < formArr.controls.length; i++) {
                this.formGrp[Number(this.index)].controls.subques.push(formArr.controls[i]);
            }
        }
        ;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        let parForm = this.parentform.get('dynamicFormArray');
        this.childDom.emit(parForm);
        this.cdr.detectChanges();
    }
    ionViewDidEnter() {
        this.cdr.detectChanges();
    }
    createFormArray() {
        return this.fb.group({
            dynamicFormArray: this.fb.array([])
        });
    }
    updateItemsToformArray() {
        var _a;
        this.formArrayList = this.parentform.get('dynamicFormArray');
        let data = this.list;
        if (data.length > 0) {
            this.quesIndex = 0;
            for (let i = 0; i < data.length; i++) {
                // ==========for now we store sub questions in subquesList in future we get from api=============
                if (((_a = data[i]) === null || _a === void 0 ? void 0 : _a.subques) == undefined) {
                    debugger;
                }
                if (data[i].subques.length > 0) {
                    data[i].subquesList = data[i].subques;
                }
                else if (!(data[i].subquesList)) {
                    data[i].subquesList = [];
                }
                let obj;
                //============Hide Based on Grade=============== 
                if (data[i].class_type) {
                    if (data[i].class_type.includes(this.classType)) {
                        data[i].hidden = false;
                    }
                    else {
                        data[i].hidden = true;
                    }
                }
                // ==========================
                let required = '';
                if (data[i].ques_valid != undefined) {
                    required = '';
                    required = data[i].ques_valid == '1' ? _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required : '';
                }
                else {
                    required = _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required;
                }
                let validation = [];
                if (data[i].ques_type == 18) {
                    data[i].ques_option = JSON.parse(localStorage.getItem("teacherDT"));
                }
                obj = {
                    ques_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.calcQueIndex(i, data[i].hidden, data[i].controlName), null),
                    ques_displayid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_displayid, null),
                    ques_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_text, null),
                    ques_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_type, null),
                    table_footer_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].table_footer_text, null),
                    ques_valid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_valid, null),
                    ques_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_option, null),
                    controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].controlName),
                    subquesLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].subquesList.length),
                    subques: this.fb.array([]),
                    subquesList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].subquesList),
                    col: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].col),
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].value),
                    table: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].table),
                    notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].notes),
                    emsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].emsg),
                    disable: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].disable),
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].hidden),
                    expected: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].expected),
                    cls_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].cls_name),
                    ques_tamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_tamil),
                    ques_english: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_english),
                    label1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].label1),
                    label2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].label2),
                    Screened_Dis_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].Screened_Dis_type),
                    calcSubValid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].calcSubValid ? data[i].calcSubValid : null),
                    grp_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].grp_type),
                    sub_heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].sub_heading),
                    ques_text_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].ques_text_type),
                    seq_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data[i].seq_id),
                };
                if (data[i].ques_type == 0) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
                }
                else if (data[i].ques_type == 1) {
                    obj[data[i].controlName] = !(data[i].hidden) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]) : new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
                }
                else if (data[i].ques_type == 2) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
                }
                else if (data[i].ques_type == 3) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
                }
                else if (data[i].ques_type == 5) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                }
                else {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
                }
                // value patch from API
                for (let k = 0; k < this.listFromApi.length; k++) {
                    let list = this.listFromApi[k];
                    if (list) {
                        if (data[i].controlName == list.Qid) {
                            if (data[i].ques_type == 5) {
                                let dropValue = data[i].ques_option.find(obj => obj.id == list.ResChar);
                                data[i].value = dropValue.id;
                            }
                            else if (data[i].ques_type == 12) {
                                data[i].value = list.ResChar == '1' ? true : false;
                            }
                            else if (data[i].ques_type == 16) {
                                let dropValue = data[i].ques_option.find(obj => obj == list.ResChar);
                                data[i].value = dropValue;
                            }
                            else if (data[i].ques_type == 6) {
                                let valSplit = list.ResChar.split(',');
                                let dropValue = valSplit;
                                data[i].value = dropValue;
                            }
                            else {
                                data[i].value = list.ResChar;
                            }
                        }
                    }
                }
                // if(this.listFromApi[this.listFromApi.length-1].stdType) {
                //   data[i].value = '';
                // }
                this.formArrayList.push(this.fb.group(obj));
                this.formArrayList.controls[i].patchValue({
                    [data[i].controlName]: data[i].value ? data[i].value : null,
                });
                this.formArrayList.controls[i].updateValueAndValidity();
            }
        }
    }
    dynamicPatchValue(index, formIndex) {
        this.formArrayList.controls[formIndex].patchValue({
            [this.list[index]['controlName']]: this.list[index]['value'],
        });
        this.formArrayList.controls[formIndex].updateValueAndValidity();
    }
    submit() {
        this.parentform.value;
    }
    subFormSubmit(value) {
        value.valid;
    }
    removeFormControl(index) {
        // this.formArrayList.controls[index].controls.clear();
    }
    removeSubQues(list) {
        list.controls.subques.clear();
    }
    showSubQuesDropdown(expected, current) {
        if (expected.includes(current)) {
            return true;
        }
        else {
            return false;
        }
    }
    findSubQuesValid(list) {
        this.platform.ready().then(() => {
            //  setTimeout(() => {
            this.disabilityScreeningPage.callFromChildDom('');
            //  }, 100);
        });
    }
    ;
    setFormValidation(list, val, index, loopArr) {
        var _a;
        let isAllValid = true;
        debugger;
        if (((_a = loopArr[index - 1]) === null || _a === void 0 ? void 0 : _a.valid) || index == 0) {
            for (let j = 0; j < loopArr.length; j++) {
                if (j != index && loopArr[j].value.ques_type == 3) {
                    loopArr[j].patchValue({
                        [loopArr[j].controls.controlName.value]: false
                    });
                }
            }
            ;
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
        else {
            for (let i = 0; i < loopArr.length; i++) {
                if (loopArr[i].invalid) {
                    this.alertService.warning("Please Fill Question " + (i + 1) + "");
                    for (let j = 0; j < loopArr.length; j++) {
                        if (j != i && loopArr[j].value.ques_type == 3) {
                            loopArr[j].patchValue({
                                [loopArr[j].controls.controlName.value]: false
                            });
                        }
                    }
                    ;
                    if (loopArr[i].value.ques_type == 3) {
                        loopArr[i].patchValue({
                            [loopArr[i].controls.controlName.value]: val
                        });
                    }
                    isAllValid = false;
                    return;
                }
            }
        }
        ;
        if (isAllValid) {
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
    }
    calcQueIndex(value, hidden, ctrlName) {
        if (!hidden && ctrlName) {
            this.quesIndex = this.quesIndex + 1;
        }
        return hidden ? '' : this.quesIndex;
    }
    checkMutiDisLabel(list) {
        if (list.length > 1) {
            this.isMultiple = true;
        }
        else {
            this.isMultiple = false;
        }
        if (list.includes('Multiple Disabilities பல்வகைத்திறன் குறைபாடு')) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    checkDefBlind(list) {
        if (list.includes('Visual Impairment - பார்வைத்திறன் குறைபாடு') && list.includes('Hearing Impairment - செவித்திறன் குறைபாடு') && list.length == 3) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    intToRoman(num) {
        let map = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };
        let result = '';
        for (let key in map) {
            const repeatCounter = Math.floor(num / map[key]);
            if (repeatCounter !== 0) {
                result += key.repeat(repeatCounter);
            }
            num %= map[key];
            if (num === 0)
                return result;
        }
        return result;
    }
    ;
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_pages_cwsn_disability_screening_disability_screening_page__WEBPACK_IMPORTED_MODULE_5__.DisabilityScreeningPage }
];
DynamicFormComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    formGrp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    formArrName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    childDom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
DynamicFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dynamic-form',
        template: _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default, _dynamic_class_scss__WEBPACK_IMPORTED_MODULE_2__.default]
    })
], DynamicFormComponent);



/***/ }),

/***/ 9922:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-health-form-mode/dynamic-health-form-mode.component.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHealthFormModeComponent": function() { return /* binding */ DynamicHealthFormModeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_health_form_mode_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-health-form-mode.component.html */ 27225);
/* harmony import */ var _dynamic_health_form_mode_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-health-form-mode.component.scss */ 84958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);















// import { BmiEyeGeneralScreeningPage } from 'src/app/pages/health/bmi-eye-general-screening/bmi-eye-general-screening.page';


let DynamicHealthFormModeComponent = class DynamicHealthFormModeComponent {
    constructor(route, fb, userSessionService, cdr, alertService, camera, platform, file, uploadService, modalCtrl, networkService, sqliteDB) {
        this.route = route;
        this.fb = fb;
        this.userSessionService = userSessionService;
        this.cdr = cdr;
        this.alertService = alertService;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.formArrayList = [];
        this.list = '';
        this.formGrp = _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup;
        this.formArrName = '';
        this.index = '';
        this.submitted = false;
        this.childDom = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.cateID = '';
        this.sub = false;
        this.listFromApi = [];
        this.teacherTable = true;
        this.cattyId = "";
        this.currPageParam = 1;
        this.currControl = '';
        this.quesIndex = 0;
        this.classType = 1;
        this.minFmDate = new Date();
        this.cameraKey = '';
        this.imageData = "";
        this.fileType = '';
        this.currNetWrkSts = '';
        this.paramData = '';
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format('YYYY-MM-DD');
        this.previousYear = this.currentYear - 1;
    }
    ngOnInit() {
        this.paramData = this.route.snapshot.queryParams;
        this.listFromApi = localStorage.getItem("listFromApi") ? JSON.parse(localStorage.getItem("listFromApi")) : [];
        this.parentform = this.createFormArray();
        this.updateItemsToformArray();
        let formArr = this.parentform.get('dynamicFormArray');
        if (this.formArrName == 'grandParentFA') {
            for (let i = 0; i < formArr.controls.length; i++) {
                (this.formGrp.get(this.formArrName)).push(formArr.controls[i]);
            }
        }
        else {
            // ======bind subforms to parent form======
            this.formGrp = this.formGrp.controls;
            for (let i = 0; i < formArr.controls.length; i++) {
                this.formGrp[Number(this.index)].controls.subques.push(formArr.controls[i]);
            }
        }
        ;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        let parForm = this.parentform.get('dynamicFormArray');
        this.childDom.emit(parForm);
        this.cdr.detectChanges();
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
    }
    ionViewDidEnter() {
        this.cdr.detectChanges();
    }
    createFormArray() {
        return this.fb.group({
            dynamicFormArray: this.fb.array([])
        });
    }
    updateItemsToformArray() {
        var _a;
        this.formArrayList = this.parentform.get('dynamicFormArray');
        let data = this.list;
        if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
            this.quesIndex = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].subques.length > 0) {
                    data[i].subquesList = data[i].subques;
                }
                else if (!(data[i].subquesList)) {
                    data[i].subquesList = [];
                }
                let obj = {};
                obj = {
                    ques_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].ques_text, null),
                    ques_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].ques_type, null),
                    ques_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].ques_option, null),
                    controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].controlName),
                    subquesLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].subquesList.length),
                    subques: this.fb.array([]),
                    subquesList: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].subquesList),
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].value),
                    info: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].info),
                    infoType: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].infoType),
                    emsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].error_msg),
                    disable: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].disable),
                    hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].hidden),
                    expected: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].expected),
                    sub_heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].sub_heading),
                    ques_text_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[i].ques_text_type)
                };
                let conds = [];
                if (data[i].required == 1) {
                    conds.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
                }
                if (data[i].pattern) {
                    conds.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(data[i].pattern));
                }
                if (data[i].ques_type == 0) {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
                }
                else {
                    obj[data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', conds);
                }
                for (let k = 0; k < this.listFromApi.length; k++) {
                    let list = this.listFromApi[k];
                    if (list) {
                        if (data[i].controlName == list.Qid) {
                            if (data[i].ques_type == 5) {
                                let dropValue = data[i].ques_option.find(obj => obj.id == list.ResChar);
                                data[i].value = dropValue.id;
                            }
                            else if (data[i].ques_type == 6) {
                                let res = list.ResChar.split(',');
                                let dropValue = [];
                                data[i].ques_option.forEach(obj => {
                                    if (res.includes(obj.id)) {
                                        dropValue.push(obj);
                                    }
                                });
                                data[i].value = dropValue;
                            }
                            else if (data[i].ques_type == 12) {
                                data[i].value = list.ResChar == '1' ? true : false;
                            }
                            else if (data[i].ques_type == 16) {
                                let dropValue = data[i].ques_option.find(obj => obj == list.ResChar);
                                data[i].value = dropValue;
                            }
                            else if (data[i].ques_type == 6) {
                                let valSplit = list.ResChar.split(',');
                                let dropValue = valSplit;
                                data[i].value = dropValue;
                            }
                            else {
                                data[i].value = list.ResChar;
                            }
                        }
                    }
                }
                if ((_a = this.listFromApi[this.listFromApi.length - 1]) === null || _a === void 0 ? void 0 : _a.stdType) {
                    data[i].value = '';
                }
                if ((data[i].ques_type == 0 || data[i].ques_type > 2) || ((data[i].value == 1 && data[i].ques_type == 1) || (data[i].value && data[i].ques_type == 2))) {
                    this.formArrayList.push(this.fb.group(obj));
                    this.formArrayList.controls[this.formArrayList.controls.length - 1].patchValue({
                        [data[i].controlName]: data[i].value,
                    });
                    this.formArrayList.controls[this.formArrayList.controls.length - 1].updateValueAndValidity();
                }
            }
        }
    }
    dynamicPatchValue(index, formIndex) {
        this.formArrayList.controls[formIndex].patchValue({
            [this.list[index]['controlName']]: this.list[index]['value']
        });
        this.formArrayList.controls[formIndex].updateValueAndValidity();
    }
    removeFormControl(index) {
        // this.formArrayList.controls[index].controls.clear();
    }
    removeSubQues(list) {
        list.controls.subques.clear();
    }
    showSubQuesDropdown(expected, current) {
        if (expected.includes(current)) {
            return true;
        }
        else {
            return false;
        }
    }
    setFormValidation(list, val, index, loopArr) {
        var _a;
        let isAllValid = true;
        if (((_a = loopArr[index - 1]) === null || _a === void 0 ? void 0 : _a.valid) || index == 0) {
            for (let j = 0; j < loopArr.length; j++) {
                if (j != index) {
                    loopArr[j].patchValue({
                        [loopArr[j].controls.controlName.value]: false
                    });
                }
            }
            ;
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
        else {
            for (let i = 0; i < loopArr.length; i++) {
                if (loopArr[i].invalid) {
                    this.alertService.warning("Please Fill Question " + (i + 1) + "");
                    for (let j = 0; j < loopArr.length; j++) {
                        if (j != i) {
                            loopArr[j].patchValue({
                                [loopArr[j].controls.controlName.value]: false
                            });
                        }
                    }
                    ;
                    loopArr[i].patchValue({
                        [loopArr[i].controls.controlName.value]: val
                    });
                    isAllValid = false;
                    return;
                }
            }
        }
        ;
        if (isAllValid) {
            list.patchValue({
                [list.controls.controlName.value]: val
            });
        }
    }
    onChange($event, i, list, arr) {
        let obj = {
            $event, i, list, arr
        };
        // this.bmiEyeGeneralScreeningPage.callFromChildDom(obj);
    }
    openCameraOn(forData) {
        // this.checkCmaeraPermission();
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: false,
        };
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                var bucketName = "renewalapplicationemis";
                let expiry = 300;
                let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");
                this.file.readAsDataURL(imagename, filename).then((base64string) => {
                    if (base64string) {
                        const base = base64string.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 5242880) {
                            let obj = { bucketName, ext: splitedImage[1], filename: splitedImage[0], expiry };
                            this.commonFileUpload(obj, forData, blob, base64string);
                        }
                        else {
                            this.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                        }
                    }
                });
            }, (err) => {
                // Handle error
                this.alertService.error("There is some error");
            });
        });
    }
    viewPic(fun, key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            var filename = key;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    if (fun == 'modal') {
                        const modal = yield this.modalCtrl.create({
                            component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_9__.ViewImagePage,
                            componentProps: { image: result.url },
                            cssClass: 'view-image-modal'
                        });
                        yield modal.present();
                    }
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        });
    }
    onSelectFile(event, forData) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size <= 5242880) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                if (splittedName[1].toLowerCase() == 'jpg' || splittedName[1].toLowerCase() == 'png' || splittedName[1].toLowerCase() == 'jpeg') {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        let base64 = fileReader.result;
                        const base = base64.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');
                        var bucketName = "renewalapplicationemis";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        let obj = { bucketName, ext, filename, expiry };
                        this.commonFileUpload(obj, forData, blob, base64);
                    };
                }
                else {
                    this.alertService.warning("Only jpg and png allowd");
                }
            }
            else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
            }
        }
    }
    commonFileUpload(obj, forData, uploadFile, base64) {
        // ======network status-(0,1)(in,out)==========
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        if (this.currNetWrkSts == 0) {
            this.uploadService.getSignedUrl(obj.bucketName, obj.ext, obj.filename, obj.expiry).subscribe((result) => {
                if (result) {
                    this.uploadService.uploadFile(result.url, uploadFile).subscribe((res) => {
                        forData.patchValue({
                            [forData.controls.controlName.value]: result.key
                        });
                        this.alertService.success('File Uploaded Successfully');
                        this.getUploadedFiles1(result.key);
                    });
                }
                else {
                    this.alertService.error('Error in Uploading File please try again');
                }
            });
        }
        else {
            forData.patchValue({
                [forData.controls.controlName.value]: base64
            });
            this.imageData = base64;
            this.fileUploadLocal(obj, forData, base64);
        }
    }
    fileUploadLocal(obj, forData, uploadFile) {
        let fieldId = forData.controls.controlName.value;
        let query = 'DELETE FROM document_upload' +
            ' WHERE module = "' + 1 + '"' +
            ' AND stdId = "' + this.paramData.studentid + '"';
        this.sqliteDB.update(query).then(res => {
            if (res) {
                let sqlArray = [];
                sqlArray.push(['INSERT INTO document_upload VALUES (?,?,?,?,?,?,?)', [null, 1, this.paramData.studentid, fieldId, obj.filename, uploadFile, obj.ext]]);
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.alertService.success('Data Stored in Local');
                });
            }
        });
    }
    getUploadedFiles1(filename) {
        // ======network status-(0,1)(in,out)==========
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        if (this.currNetWrkSts == 0) {
            var bucketName = "renewalapplicationemis";
            var filename = filename;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
                if (result) {
                    this.imageData = result.url;
                }
                else {
                    this.alertService.error('Error in Uploading File please try again');
                }
            });
        }
        else {
            this.imageData = filename;
        }
    }
    showLabel(list) {
        if (list.length > 0) {
            let isValid = false;
            for (let i = 0; i < list.length; i++) {
                if (list[i][list[i].controlName] == 1) {
                    isValid = true;
                    break;
                }
            }
            return isValid;
        }
        else {
            return false;
        }
    }
};
DynamicHealthFormModeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService }
];
DynamicHealthFormModeComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    formGrp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    formArrName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    childDom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    dischargingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dischargingPortsComponent',] }]
};
DynamicHealthFormModeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-dynamic-health-form-mode',
        template: _raw_loader_dynamic_health_form_mode_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_health_form_mode_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicHealthFormModeComponent);



/***/ }),

/***/ 4463:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-table/dynamic-table.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableComponent": function() { return /* binding */ DynamicTableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-table.component.html */ 27196);
/* harmony import */ var _dynamic_table_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-table.component.scss */ 5890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let DynamicTableComponent = class DynamicTableComponent {
    constructor(fb, route) {
        this.fb = fb;
        this.route = route;
        this.table = {
            tableHeader: [],
            tableHeader1: [],
            colValue: [],
            type: '',
            label: ""
        };
        this.content = [];
        this.header = [];
        this.tabLabel = '';
        this.header1 = [];
        this.formArrayList = [];
        this.formArrName = '';
        this.formGrp = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup;
        this.index = '';
        this.submitted = false;
        this.listFromApi = [];
        this.indexValue = '';
        this.currPageParam = 1;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.currPageParam = params['id'];
        });
        // this.currPageParam =  Number(this.route.snapshot.paramMap.get('id'));
        this.listFromApi = JSON.parse(localStorage.getItem("listFromApi")) ? JSON.parse(localStorage.getItem("listFromApi")) : [];
        this.header = this.table.tableHeader;
        this.header1 = this.table.tableHeader1;
        this.content = this.table.colValue;
        this.tabType = this.table.type;
        this.tabLabel = this.table.label;
        if (this.tabType == 2 || this.tabType == 3 || this.tabType == 4) {
            // ===========dynamic table form=================
            this.parentform = this.createFormArray();
            this.updateItemsToformArray();
            let formArr = this.parentform.get('dynamicFormArray');
            if (this.formArrName == 'grandParentFA') {
                for (let i = 0; i < formArr.controls.length; i++) {
                    (this.formGrp.get(this.formArrName)).push(formArr.controls[i]);
                }
            }
            else {
                // ======bind subforms to parent form======
                this.formGrp = this.formGrp.controls;
                for (let i = 0; i < formArr.controls.length; i++) {
                    this.formGrp[Number(this.index)].controls.subques.push(formArr.controls[i]);
                }
            }
        }
    }
    createFormArray() {
        return this.fb.group({
            dynamicFormArray: this.fb.array([])
        });
    }
    updateItemsToformArray() {
        this.formArrayList = this.parentform.get('dynamicFormArray');
        let data = this.content;
        for (let i = 0; i < data.length; i++) {
            let subFormArr = this.fb.group({
                subFormArray: this.fb.array([])
            });
            let subFormArrList = subFormArr.get('subFormArray');
            for (let j = 0; j < data[i].length; j++) {
                let data2 = data[i][j];
                let obj;
                let ctrlName = this.header[j].controlName;
                if (data2.controlName == undefined) {
                    obj = {
                        ques_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_id, null),
                        ques_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_text, null),
                        ques_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_type, null),
                        ques_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_option, null),
                        controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(ctrlName),
                        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.value),
                        col: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.col),
                        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.notes),
                        emsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.emsg)
                    };
                }
                else {
                    obj = {
                        ques_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_id, null),
                        ques_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_text, null),
                        ques_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_type, null),
                        ques_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.ques_option, null),
                        controlName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.controlName),
                        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.value),
                        col: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.col),
                        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.notes),
                        emsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.emsg)
                    };
                }
                // =========Auto Sum==========
                if (data2.grp_type != undefined) {
                    obj.grp_type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.grp_type);
                }
                if (data2.total_Group != undefined) {
                    obj.total_Group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.total_Group);
                }
                if (data2.total_grpType != undefined) {
                    obj.totalgrpType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.total_grpType);
                }
                if (data2.grp2Type != undefined) {
                    obj.grp2Type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.grp2Type);
                }
                if (data2.colTotal != undefined) {
                    obj.colTotal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.colTotal);
                }
                if (data2.col_grp != undefined) {
                    obj.colGrp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data2.col_grp);
                }
                let required = '';
                if (data2.ques_valid != undefined) {
                    required = '';
                    required = data2.ques_valid == '1' ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required : '';
                }
                else {
                    required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required;
                }
                let validation = [];
                if (data2.ques_type == 0) {
                    obj[ctrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
                }
                else if (data2.ques_type == 4 && data2.controlName != undefined) {
                    required != '' ? validation.push(required) : validation = [];
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(validation));
                }
                else if (data2.ques_type == 4 && data2.controlName == undefined) {
                    required != '' ? validation.push(required) : validation = [];
                    obj[ctrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(validation));
                }
                else if (data2.ques_type == 5) {
                    required != '' ? validation.push(required) : validation = [];
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(validation));
                }
                else if (data2.ques_type == 12 && data2.controlName != undefined) {
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ value: '', disabled: data2.diabled ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
                }
                else if (data2.ques_type == 12 && data2.controlName == undefined) {
                    obj[ctrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ value: '', disabled: data2.diabled ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(data2.pattern)]));
                }
                else if (data2.ques_type == 13 && data2.controlName != undefined) {
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ value: '', disabled: data2.diabled ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(data2.pattern)]));
                }
                else if (data2.ques_type == 13.1 && data2.controlName != undefined) {
                    // ======when value is negative then disable the input============
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(data2.pattern)]));
                }
                else if (data2.ques_type == 13.2 && data2.controlName != undefined) {
                    // ======Auto sum============
                    obj[data2.controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(data2.pattern)]));
                }
                else if (data2.ques_type == 13 && data2.controlName == undefined) {
                    obj[ctrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ value: '', disabled: data2.diabled ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(data2.pattern)]));
                }
                else {
                    obj[ctrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
                }
                subFormArrList.push(this.fb.group(obj));
                for (let k = 0; k < this.listFromApi.length; k++) {
                    let list = this.listFromApi[k][("Page" + this.currPageParam)];
                    if (list) {
                        if (list[data2.controlName]) {
                            if (data2.ques_type == 5) {
                                let dropValue = data2.ques_option.find(obj => obj.id == list[data2.controlName]);
                                data2.value = dropValue;
                            }
                            else if (data2.ques_type == 12) {
                                data2.value = list[data2.controlName] == '1' ? true : false;
                            }
                            else if (data2.ques_type == 16) {
                                let dropValue = data2.ques_option.find(obj => obj == list[data2.controlName]);
                                data2.value = dropValue;
                            }
                            else {
                                data2.value = list[data2.controlName];
                            }
                        }
                        else {
                            for (let l = 0; l < list.length; l++) {
                                let listval = list[l];
                                if (listval[obj.controlName.value] != undefined) {
                                    if (data2.ItemId == listval.ItemId) {
                                        if (data2.ques_type == 12) {
                                            data2.value = listval[obj.controlName.value] == '1' ? true : false;
                                        }
                                        else {
                                            data2.value = listval[obj.controlName.value];
                                        }
                                    }
                                    else {
                                        // data2.value='';
                                    }
                                }
                            }
                        }
                    }
                }
                if (data2.controlName == undefined) {
                    subFormArrList.controls[j].patchValue({
                        [ctrlName]: data2.value,
                    });
                }
                else {
                    subFormArrList.controls[j].patchValue({
                        [data2.controlName]: data2.value,
                    });
                    if (data2.ques_type == 13.1) {
                        let temp;
                        temp = subFormArrList.controls[j];
                        temp.controls[data2.controlName].value > 0 ? temp.controls[data2.controlName].enable() : temp.controls[data2.controlName].disable({ onlySelf: true });
                    }
                }
            }
            this.formArrayList.push(subFormArr);
        }
        this.formArrayList;
    }
    submit() {
        this.parentform.value;
    }
    fieldEditable(event, list, index) {
        let listItems = list.controls.subFormArray.controls;
        for (let i = 0; i < listItems.length; i++) {
            let temp = listItems[i].controls[listItems[i].controls.controlName.value];
            if (temp && !(event.checked) && index != i) {
                listItems[i].patchValue({
                    [listItems[i].controls.controlName.value]: 0,
                });
                temp.disable({ onlySelf: true });
            }
            else if (temp && event.checked) {
                temp.enable();
            }
        }
    }
    autoSum(event, list, index, parentList) {
        let listItems = list.controls.subFormArray.controls;
        let GrpAT = this.parseGrp('A', listItems);
        let GrpBT = this.parseGrp('B', listItems);
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].controls.total_Group != undefined) {
                let Sum = "Invalid";
                if (GrpAT === GrpBT) {
                    Sum = GrpAT;
                }
                listItems[i].patchValue({
                    [listItems[i].controls.controlName.value]: Sum,
                });
                this.colSum(parentList, i);
            }
            // ==========row sum==================
            if (listItems[i].controls.totalgrpType != undefined) {
                let rowTot = 0;
                if (listItems[i].controls.totalgrpType.value == "A") {
                    rowTot = GrpAT;
                }
                else if (listItems[i].controls.totalgrpType.value == "B") {
                    rowTot = GrpBT;
                }
                if (!(GrpAT >= GrpBT)) {
                    rowTot = "Miss Match";
                }
                listItems[i].patchValue({
                    [listItems[i].controls.controlName.value]: rowTot,
                });
                this.colSum(parentList, i);
            }
            // =========row grp sum============
            if (listItems[i].controls.grp2Type != undefined) {
                let rowGrpTot = 0;
                let tot = Number(listItems[i].controls[listItems[i].controls.controlName.value].value);
                let totFun = Number(listItems[i + 1].controls[listItems[i + 1].controls.controlName.value].value);
                if (listItems[i].controls.grp2Type.value) {
                    if (totFun > tot) {
                        rowGrpTot = "";
                        listItems[i + 1].patchValue({
                            [listItems[i + 1].controls.controlName.value]: rowGrpTot,
                        });
                        this.colSum(parentList, i);
                    }
                }
            }
        }
        this.colSum(parentList, index);
    }
    colSum(list, index) {
        let currColTot = 0;
        for (let i = 0; i < list.length; i++) {
            let data = list[i].controls.subFormArray.controls;
            for (let j = 0; j < data.length; j++) {
                if (data[j].controls[data[j].controls.controlName.value]) {
                    if (data[j].controls.colGrp != undefined) {
                        if (data[j].controls.colGrp.value == ('colGrp' + index)) {
                            let colVal = data[j].controls[data[index].controls.controlName.value].value;
                            currColTot = Number(colVal) + currColTot;
                        }
                    }
                }
            }
        }
        // ==========================
        let calTotCalc = list[list.length - 1].controls.subFormArray.controls[index];
        if (calTotCalc.controls.colTotal != undefined) {
            if (calTotCalc.controls.colTotal.value == 'col' + index + 'Total') {
                calTotCalc.patchValue({
                    [calTotCalc.controls.controlName.value]: currColTot,
                });
            }
        }
    }
    parseGrp(grpType, list) {
        let total = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].controls.grp_type != undefined) {
                if (list[i].controls.grp_type.value == grpType) {
                    total = Number(list[i].controls[list[i].controls.controlName.value].value) + total;
                }
            }
        }
        return total;
    }
};
DynamicTableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
DynamicTableComponent.propDecorators = {
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    formArrName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    formGrp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DynamicTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dynamic-table',
        template: _raw_loader_dynamic_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_table_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicTableComponent);



/***/ }),

/***/ 21439:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/disability-screening/disability-screening.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabilityScreeningPage": function() { return /* binding */ DisabilityScreeningPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_disability_screening_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./disability-screening.page.html */ 50126);
/* harmony import */ var _disability_screening_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disability-screening.page.scss */ 92980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);






// import data from '../disability-screening-questions.json';










let DisabilityScreeningPage = class DisabilityScreeningPage {
    constructor(router, alertService, fb, userSessionService, route, cWSNService, sqliteDB, alertController, http, platform, cwsnService, networkService, ionicstorage, modalController) {
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.userSessionService = userSessionService;
        this.route = route;
        this.cWSNService = cWSNService;
        this.sqliteDB = sqliteDB;
        this.alertController = alertController;
        this.http = http;
        this.platform = platform;
        this.cwsnService = cwsnService;
        this.networkService = networkService;
        this.ionicstorage = ionicstorage;
        this.modalController = modalController;
        this.formArrayList = {
            controls: [],
        };
        this.currPage = 1;
        this.currStdId = "";
        this.listFromApi = [];
        this.jsonList = [];
        this.formPages = [];
        this.issubmitted = false;
        // =============================
        this.formPost = [];
        this.indexId = "";
        this.jsnQues = [];
        this.jsonOptions = [];
        this.currCls = "";
        this.currControl = "";
        this.disabilityTypes = "";
        this.cwsnDiffAbleList = [];
        this.showDisabilityPopup = false;
    }
    // ngOnInit(): void {
    //   let currPageParam: any = 1;
    //   localStorage.setItem("listFromApi", "");
    //   this.formGroupList = this.fb.group({
    //     formGroupPages: this.fb.array([]),
    //   });
    // }
    ngOnInit() {
        let currPageParam = 1;
        localStorage.setItem("listFromApi", "");
        this.formGroupList = this.fb.group({
            formGroupPages: this.fb.array([]),
        });
        // ========== CHECK POPUP CONDITION IN NGONINIT ==========
        setTimeout(() => {
            console.log("========== POPUP CONDITION CHECK ==========");
            console.log("studentData in ngOnInit:", this.studentData);
            if (this.studentData && this.studentData.allData) {
                const cwsnStatus = this.studentData.allData.cwsnStatus;
                const isPinkStudent = cwsnStatus == 1 || cwsnStatus == "1";
                console.log("Student Name:", this.studentData.allData.name);
                console.log("cwsnStatus value:", cwsnStatus);
                console.log("cwsnStatus type:", typeof cwsnStatus);
                console.log("Is Pink Student? (cwsnStatus == 1):", isPinkStudent);
                if (isPinkStudent) {
                    console.log("🔴 RESULT: This is a PINK student");
                    console.log("   → Popup WILL show if NO disability selected");
                    console.log("   → Popup WILL NOT show if at least one disability selected");
                }
                else {
                    console.log("🟢 RESULT: This is NOT a pink student");
                    console.log("   → Popup will NEVER show");
                }
            }
            else {
                console.log("studentData not available in ngOnInit yet");
                console.log("Waiting for data to load...");
            }
            console.log("============================================");
        }, 2000); // Wait 2 seconds for data to load
        // ========== END CHECK ==========
    }
    // async showDisabilityVerificationPopup() {
    //   console.log("========== POPUP METHOD CALLED ==========");
    //   const modal = await this.modalController.create({
    //     component: PopScreenedStudentComponent,
    //     cssClass: "pop-screened-student-modal",
    //     backdropDismiss: false,
    //     componentProps: {},
    //     keyboardClose: false,
    //     showBackdrop: true,
    //     // backdropDismiss: false,
    //     animated: true,
    //     mode: "ios", // Try 'md' or 'ios'
    //   });
    //   console.log("Modal created, presenting...");
    //   await modal.present();
    //   console.log("Modal presented");
    //   const result = await modal.onDidDismiss();
    //   console.log("Modal dismissed with result:", result);
    // }
    ionViewDidEnter() {
        this.formGroupList.reset();
        localStorage.setItem("listFromApi", "");
        this.route.queryParams.subscribe((params) => {
            this.studentData = params.data
                ? JSON.parse(params.data)
                : this.studentData;
            console.log("studentData", this.studentData);
            // ADD THIS LINE TO CHECK REFEREDFROM
            this.checkReferedFromInConsole();
            this.indexId = params["IndexId"] ? params["IndexId"] : 1;
            this.currStdId = this.studentData.allData.StuId;
            this.school = this.studentData.schId;
            this.studentName =
                this.studentData.allData.name +
                    "(" +
                    this.studentData.allData.unique_id_no +
                    ")";
            this.currCls = this.studentData.allData.Class.toString();
        });
        this.currPage = 0;
        this.formGroupList.reset();
        this.loadDisability();
        this.checkLocalDB(1);
    }
    // Add this method to your component
    checkReferedFromInConsole() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        console.log("========== REFEREDFROM CHECK ==========");
        console.log("Full studentData:", this.studentData);
        console.log("studentData.allData:", (_a = this.studentData) === null || _a === void 0 ? void 0 : _a.allData);
        console.log("referedfrom value:", (_c = (_b = this.studentData) === null || _b === void 0 ? void 0 : _b.allData) === null || _c === void 0 ? void 0 : _c.referedfrom);
        console.log("referedfrom type:", typeof ((_e = (_d = this.studentData) === null || _d === void 0 ? void 0 : _d.allData) === null || _e === void 0 ? void 0 : _e.referedfrom));
        console.log("refer_to value:", (_g = (_f = this.studentData) === null || _f === void 0 ? void 0 : _f.allData) === null || _g === void 0 ? void 0 : _g.refer_to);
        console.log("Is referedfrom == '1'?", ((_j = (_h = this.studentData) === null || _h === void 0 ? void 0 : _h.allData) === null || _j === void 0 ? void 0 : _j.referedfrom) == "1");
        console.log("Is referedfrom == 1?", ((_l = (_k = this.studentData) === null || _k === void 0 ? void 0 : _k.allData) === null || _l === void 0 ? void 0 : _l.referedfrom) == 1);
        console.log("=========================================");
    }
    showDisabilityVerificationPopup() {
        this.showDisabilityPopup = true;
    }
    closeDisabilityPopup() {
        this.showDisabilityPopup = false;
    }
    loadJson() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.formGroupList.reset();
            for (let i = 0; i < this.jsonList.length; i++) {
                let temp = "Page" + (i + 1) + "";
                let formArr = this.formGroupList.get("formGroupPages");
                let obj = this.fb.group({
                    grandParentFA: this.fb.array([]),
                    value: this.fb.control(""),
                });
                obj.patchValue({
                    value: this.jsonList[i][temp],
                });
                formArr.controls.push(obj);
            }
            this.formArrayList.control = [];
            this.formArrayList = this.formGroupList.get("formGroupPages");
            localStorage.setItem("listFromApi", "");
            this.formGroupList.updateValueAndValidity();
            this.navigateNextPage();
        });
    }
    checkLocalDB(type) {
        let query = "SELECT * FROM cwsn_screen_ques_list" + ' WHERE block_id = "' + 1 + '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res.rows.length > 0) {
                if (type == 1) {
                    this.jsonList = [];
                    this.jsonList = JSON.parse(res.rows.item(0).questions);
                    this.loadJson();
                }
            }
            else {
                this.jsonConverter(type);
            }
        });
    }
    onSync() {
        this.networkService.initializeNetworkEvents();
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.currPage = 0;
            let query = "DELETE FROM cwsn_screen_ques_list" + ' WHERE block_id = "' + 1 + '"';
            this.sqliteDB.executeQuery(query).then((res) => {
                if (res) {
                    this.checkLocalDB(1);
                }
            });
        }
        else {
            this.alertService.warning("No internet connection");
        }
    }
    navigateNextPage() {
        localStorage.setItem("listFromApi", "");
        this.formArrayList.controls.splice(this.currPage, 1);
        this.currPage = this.currPage + 1;
        this.router.navigate([], {
            queryParams: {
                id: this.currPage,
                IndexId: this.indexId,
                stdId: this.currStdId,
                class: this.studentData.clsSec.Class,
            },
        });
        this.issubmitted = false;
        let query = "SELECT * FROM cwsn_screen_ques" +
            ' WHERE school_key_id = "' +
            this.school +
            '"' +
            ' And StuId = "' +
            this.currStdId +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            let nId = this.studentData.NIdNumber;
            let temp = [];
            let obj = {
                IndxID: "",
                Qid: "",
                ResChar: nId && nId != "null" ? "Comprehensive Assessment" : "DEIC",
                ResInt: "",
                ScrenID: "",
                stdType: false,
            };
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                temp.push(obj);
                localStorage.setItem("listFromApi", JSON.stringify(temp));
                this.loadNextForm();
            }
            else {
                // this.cWSNService.getCwsnQues(this.studentData.allData.StuId).subscribe((res: any) => {
                //   if (res.dataStatus) {
                //     res.result[0].Details.push(obj);
                //     localStorage.setItem("listFromApi", JSON.stringify(res.result[0].Details));
                //   } else {
                //     temp.push(obj);
                //     localStorage.setItem("listFromApi", JSON.stringify(temp));
                //   }
                //   this.loadNextForm();
                // }, error => {
                //   temp.push(obj);
                //   localStorage.setItem("listFromApi", JSON.stringify(temp));
                //   this.loadNextForm();
                // });
                temp.push(obj);
                localStorage.setItem("listFromApi", JSON.stringify(temp));
                this.loadNextForm();
            }
        });
        this.formGroupList.updateValueAndValidity();
    }
    loadNextForm() {
        let tempFormList = this.jsonList;
        let temp = "Page" + (this.currPage - 1 + 1) + "";
        let formArr = this.formGroupList.get("formGroupPages");
        let obj = this.fb.group({
            grandParentFA: this.fb.array([]),
            value: this.fb.control(""),
        });
        obj.patchValue({
            value: tempFormList[this.currPage - 1][temp],
        });
        formArr.controls.splice(this.currPage - 1, 0, obj);
        this.formArrayList = this.formGroupList.get("formGroupPages");
        this.formGroupList.updateValueAndValidity();
    }
    navigatePreviousPage() {
        this.currPage = this.currPage - 2;
        this.navigateNextPage();
    }
    // Add this method to check if all disabilities are marked as "Applicable" for Pink students
    // Check if at least ONE disability is marked as "Applicable" for Pink students
    checkAnyApplicableForPinkStudent() {
        let totalForms = this.formGroupList.get("formGroupPages");
        let currFormTotal = totalForms.controls[this.currPage - 1].value.grandParentFA;
        let applicableList = [];
        let notApplicableList = [];
        // Recursive function to check all questions including subques
        const checkQuestions = (questions) => {
            for (let i = 0; i < questions.length; i++) {
                const control = questions[i];
                const controlId = Number(control.controlName);
                // List of Applicable/Not Applicable question IDs
                const disabilityIds = [
                    2, 11, 22, 27, 39, 46, 51, 55, 57, 59, 118, 122, 125, 128, 131, 134,
                    137, 140, 203,
                ];
                if (disabilityIds.includes(controlId)) {
                    const value = control[control.controlName];
                    console.log(`Found disability question ${controlId}: value = ${value}`);
                    if (value == 2 || value == "2") {
                        notApplicableList.push(`Question ${controlId}`);
                    }
                    else if (value == 1 || value == "1") {
                        applicableList.push(`Question ${controlId}`);
                    }
                }
                // Check sub-questions recursively
                if (control.subques && control.subques.length > 0) {
                    checkQuestions(control.subques);
                }
            }
        };
        // Start checking from the main questions
        checkQuestions(currFormTotal);
        const isValid = applicableList.length > 0;
        console.log("========== VALIDATION RESULT ==========");
        console.log("Applicable List:", applicableList);
        console.log("Not Applicable List:", notApplicableList);
        console.log("Is Valid (at least one Applicable)?", isValid);
        console.log("=======================================");
        return { isValid, applicableList, notApplicableList };
    }
    isPinkColorStudent() {
        var _a, _b, _c, _d;
        // Use cwsnStatus == 1 to identify pink students
        const cwsnStatusValue = (_c = (_b = (_a = this.studentData) === null || _a === void 0 ? void 0 : _a.allData) === null || _b === void 0 ? void 0 : _b.cwsnStatus) !== null && _c !== void 0 ? _c : (_d = this.studentData) === null || _d === void 0 ? void 0 : _d.cwsnStatus;
        const isPink = cwsnStatusValue == 1 || cwsnStatusValue == "1";
        console.log("cwsnStatus value:", cwsnStatusValue);
        console.log("Is Pink (cwsnStatus == 1)?", isPink);
        return isPink;
    }
    debugFormValues() {
        let totalForms = this.formGroupList.get("formGroupPages");
        let currFormTotal = totalForms.controls[this.currPage - 1].value.grandParentFA;
        console.log("========== DEBUG FORM VALUES ==========");
        const debugQuestions = (questions, level = 0) => {
            for (let i = 0; i < questions.length; i++) {
                const control = questions[i];
                if (control.controlName && control[control.controlName] !== undefined) {
                    console.log(`Question ID: ${control.controlName}, Value: ${control[control.controlName]}, Type: ${typeof control[control.controlName]}`);
                }
                if (control.subques && control.subques.length > 0) {
                    debugQuestions(control.subques, level + 1);
                }
            }
        };
        debugQuestions(currFormTotal);
        console.log("========================================");
    }
    saveAll(currpage) {
        var _a, _b, _c, _d, _e, _f, _g;
        console.log("========== SAVEALL STARTED ==========");
        console.log("Current Page:", currpage);
        this.disabilityTypes = "";
        this.issubmitted = true;
        this.formPost = [];
        this.issubmitted = true;
        let totalForms = this.formGroupList.get("formGroupPages");
        let currFormTotal = totalForms.controls[currpage - 1].value.grandParentFA;
        this.debugFormValues();
        this.findFormIsEditted =
            totalForms.controls[currpage - 1].value.grandParentFA;
        this.formPost = [];
        // First check if form is valid
        if (!totalForms.controls[currpage - 1].valid) {
            console.log("Form is INVALID - Please fill all required fields");
            this.alertService.warning("Please fill all required fields");
            return;
        }
        // Check pink student using cwsnStatus == 1
        const isPinkStudent = ((_b = (_a = this.studentData) === null || _a === void 0 ? void 0 : _a.allData) === null || _b === void 0 ? void 0 : _b.cwsnStatus) == 1 ||
            ((_c = this.studentData) === null || _c === void 0 ? void 0 : _c.cwsnStatus) == 1;
        console.log("Student Name:", (_e = (_d = this.studentData) === null || _d === void 0 ? void 0 : _d.allData) === null || _e === void 0 ? void 0 : _e.name);
        console.log("cwsnStatus value:", (_g = (_f = this.studentData) === null || _f === void 0 ? void 0 : _f.allData) === null || _g === void 0 ? void 0 : _g.cwsnStatus);
        console.log("Is Pink Student? (cwsnStatus == 1):", isPinkStudent);
        if (isPinkStudent) {
            console.log("✅ PINK STUDENT DETECTED (cwsnStatus=1) - Running validation");
            const validation = this.checkAnyApplicableForPinkStudent();
            console.log("Validation Result:", validation);
            console.log("Applicable List Length:", validation.applicableList.length);
            console.log("Applicable List:", validation.applicableList);
            if (!validation.isValid) {
                // NO disability selected - show popup
                console.log("❌❌❌ VALIDATION FAILED - NO disability selected");
                console.log("Showing popup and stopping submission");
                this.showDisabilityVerificationPopup();
                return;
            }
            else {
                console.log("✅✅✅ VALIDATION PASSED - At least one disability selected");
            }
        }
        else {
            console.log("🟢 NON-PINK STUDENT (cwsnStatus != 1) - Skipping validation");
        }
        console.log("Proceeding to save...");
        // Continue with save logic
        let schId = this.studentData.schId;
        for (let i = 0; i < currFormTotal.length; i++) {
            this.generatePost(currFormTotal[i]);
        }
        for (let i = 0; i < this.formPost.length; i++) {
            this.parseDisability(this.formPost[i]);
        }
        let newDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("YYYY-MM-DD");
        let query = "DELETE FROM cwsn_screen_ques" +
            ' WHERE school_key_id = "' +
            this.school +
            '"' +
            ' And StuId = "' +
            this.currStdId +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res) {
                let sqlArray = [];
                this.formPost.forEach((element) => {
                    sqlArray.push([
                        "INSERT INTO cwsn_screen_ques VALUES (?,?,?,?,?,?)",
                        [
                            null,
                            this.school,
                            this.currStdId,
                            element.Qid,
                            element.ResChar,
                            element.isactive,
                        ],
                    ]);
                });
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.updateTableValue(2);
                    this.presentAlert("Screened Successfully");
                    this.router.navigate([`/tabs/cwsn/class-student-list/${schId}`], {
                        queryParams: this.studentData,
                        skipLocationChange: true,
                    });
                });
            }
        });
    }
    updateTableValue(value) {
        let disTypes = "";
        let da_name = "";
        this.cwsnDiffAbleList.forEach((obj) => {
            disTypes = disTypes
                ? obj.isDisabled
                    ? disTypes + "," + (obj.isDisabled ? obj.id : disTypes)
                    : disTypes
                : obj.isDisabled
                    ? obj.id
                    : "";
            da_name = da_name
                ? obj.isDisabled
                    ? da_name + "," + (obj.isDisabled ? obj.value : da_name)
                    : da_name
                : obj.isDisabled
                    ? obj.value
                    : "";
        });
        let totalForms = this.formGroupList.get("formGroupPages");
        let currFormTotal = totalForms.controls[this.currPage - 1].value.grandParentFA;
        let refTo = currFormTotal[currFormTotal.length - 1][currFormTotal[currFormTotal.length - 1].controlName];
        let query = 'UPDATE cwsn_student_list SET ScrSts=1, scrSts_Local="' +
            value +
            '",disabi_types="' +
            disTypes +
            '", refer_to="' +
            this.findReferTo(refTo) +
            '", da_name="' +
            da_name +
            '"' +
            'WHERE StuId = "' +
            this.currStdId +
            '"';
        this.sqliteDB.update(query).then((res) => {
            this.cwsnService.cwsnP1Post("load", 0);
        });
        let newDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("YYYY-MM-DD");
        let query1 = 'UPDATE cwsn_student_list SET ScreenedDate="' +
            newDate +
            '"' +
            'WHERE StuId = "' +
            this.currStdId +
            '"';
        this.sqliteDB.update(query1).then((res) => { });
    }
    findReferTo(val) {
        if (val == "To Class") {
            val = 1;
        }
        else if (val == "DEIC") {
            val = 2;
        }
        else if (val == "Comprehensive Assessment") {
            val = 3;
        }
        return val;
    }
    generatePost(data) {
        if (parseInt(data.controlName) > 0 &&
            data.ques_type != 3 &&
            data.ques_type != 0) {
            let obj = {
                IndxID: data.IndxID,
                Qid: data.controlName,
                ResChar: "",
                isactive: "1",
                ques_type: data.ques_type,
            };
            if (data.ques_type == 12) {
                obj.ResChar = data[data.controlName] ? 1 : 2;
            }
            else if (data.ques_type == 5) {
                if (data[data.controlName] != undefined) {
                    if (data[data.controlName].id != undefined) {
                        obj.ResChar = data[data.controlName].id;
                    }
                    else {
                        obj.ResChar = data[data.controlName];
                    }
                }
                else {
                    obj.ResChar = data[data.controlName];
                }
            }
            else {
                obj.ResChar = data[data.controlName];
            }
            if (obj.ResChar != "") {
                this.formPost.push(obj);
            }
        }
        if (data.subques != undefined) {
            if (data.subques.length > 0) {
                for (let i = 0; i < data.subques.length; i++) {
                    this.generatePost(data.subques[i]);
                }
            }
        }
    }
    parsesubques(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].subFormArray != undefined) {
                if (data[i].subFormArray.length > 0) {
                    this.parsesubques(data[i].subFormArray);
                }
            }
            else if (data[i].subques != undefined) {
                this.generatePost(data[i]);
                if (data[i].subques.length > 0) {
                    this.parsesubques(data[i].subques);
                }
                else {
                    this.generatePost(data[i]);
                }
            }
            else {
                this.generatePost(data[i]);
            }
        }
    }
    goBack() {
        let schoolId = parseInt(this.studentData.schId);
        this.router.navigate([`/tabs/cwsn/student-detail/${schoolId}`], {
            queryParams: { data: JSON.stringify(this.studentData) },
            skipLocationChange: true,
        });
    }
    presentAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let color_mode = document.documentElement.style.getPropertyValue("--primary-color");
            let msg_con;
            if (color_mode == "#000000") {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick_dark.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            else {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            const alert = yield this.alertController.create({
                cssClass: "cwsn-custom-class",
                message: msg_con,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    jsonParse(data, column) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let obj = {};
            for (let j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
            }
            obj.subques = [];
            obj.isMapped = false;
            arr.push(obj);
        }
        return arr;
    }
    jsonConverter(type) {
        let cwsnQues = "https://d1wpyxz35bzzz4.cloudfront.net/cwsn_quest_master_phase1_changes_stage.json";
        let mainQues = [];
        this.http.get(cwsnQues).subscribe((data) => {
            let ques = this.jsonParse(data.questions.data, data.questions.columns);
            this.jsonOptions = this.jsonParse(data.options.data, data.options.columns);
            this.jsnQues = this.quesFormat(ques);
            for (let i = 0; i < this.jsnQues.length; i++) {
                if (this.jsnQues[i].map == 0) {
                    this.jsnQues[i].mapped = true;
                    mainQues.push(this.jsnQues[i]);
                }
                else {
                    this.jsnQues[i].mapped = false;
                }
            }
            mainQues.sort(function (a, b) {
                return a.seq_id - b.seq_id;
            });
            console.group("mainQues", mainQues);
            for (let i = 0; i < mainQues.length; i++) {
                mainQues[i].subques = this.subQusParse(mainQues[i]);
            }
            let questions = JSON.stringify([
                { Page1: mainQues, Page_Title: "Screening Questions" },
            ]);
            let sqlArray = [];
            sqlArray.push([
                "INSERT INTO cwsn_screen_ques_list VALUES (?,?,?)",
                [null, 1, questions],
            ]);
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                if (type == 1) {
                    this.checkLocalDB(1);
                }
            });
        }, (error) => { });
    }
    quesFormat(ques) {
        let arr = [];
        let ScreenedDisType = [
            1, 10, 21, 26, 38, 45, 50, 54, 56, 58, 117, 121, 124, 127, 130, 133, 136,
            139, 202, 208,
        ];
        let grpType1 = [
            1, 10, 21, 26, 38, 45, 50, 54, 56, 58, 117, 121, 124, 127, 130, 133, 136,
            139, 202, 208,
        ];
        let grpType2 = [];
        let grpType3 = [];
        let grpType4 = [];
        // let grpType1:any = [1,10,21,26,33,38,50];
        // let grpType2:any = [45];
        // let grpType3:any = [56];
        // let grpType4:any = [58];
        for (let i = 0; i < ques.length; i++) {
            ques[i].class_type = ques[i].needed_class
                .split(",")
                .map((item) => item.trim());
            // ====Screened_Dis_type================
            if (ScreenedDisType.includes(ques[i].controlName)) {
                ques[i].Screened_Dis_type = false;
            }
            // ====grpType================
            if (grpType1.includes(ques[i].controlName)) {
                ques[i].grp_type = 1;
            }
            else if (grpType2.includes(ques[i].controlName)) {
                ques[i].grp_type = 2;
            }
            else if (grpType3.includes(ques[i].controlName)) {
                ques[i].grp_type = 3;
            }
            else if (grpType4.includes(ques[i].controlName)) {
                ques[i].grp_type = 4;
            }
            // ============expected===============
            if (ques[i].expected) {
                ques[i].expected = ques[i].expected.split(",");
            }
            else {
                ques[i].expected = [];
            }
            if (ques[i].expected.length > 0) {
                for (let j = 0; j < ques[i].expected.length; j++) {
                    if (ques[i].expected[j] == "true") {
                        ques[i].expected[j] = true;
                    }
                    else if (ques[i].expected[j] == "false") {
                        ques[i].expected[j] = false;
                    }
                    else if (ques[i].expected[j]) {
                        ques[i].expected[j] = ques[i].expected[j];
                    }
                }
            }
            // ========options=============
            if (ques[i].ques_type == 5 || ques[i].ques_type == 1) {
                ques[i].ques_option = [];
                ques[i].options = ques[i].options.split(",");
                for (let j = 0; j < this.jsonOptions.length; j++) {
                    let index = ques[i].options.findIndex((x) => {
                        return x == this.jsonOptions[j].id;
                    });
                    if (index > -1) {
                        ques[i].ques_option.push({
                            id: this.jsonOptions[j].value,
                            value: this.jsonOptions[j].label,
                        });
                    }
                }
            }
            arr.push(ques[i]);
        }
        return arr;
    }
    subQusParse(obj) {
        let arr = [];
        for (let i = 0; i < this.jsnQues.length; i++) {
            if (!this.jsnQues[i].isMapped && obj.controlName == this.jsnQues[i].map) {
                this.jsnQues[i].isMapped = true;
                arr.push(this.jsnQues[i]);
            }
        }
        for (let j = 0; j < arr.length; j++) {
            arr[j].subques = this.subQusParse(arr[j]);
        }
        arr.sort(function (a, b) {
            return a.seq_id - b.seq_id;
        });
        return arr;
    }
    findSubQuesValid(list) {
        if (list["calcSubValid"].value || list["ques_type"].value == 0) {
            for (let i = 0; i < list["subques"].controls.length; i++) {
                let validateQues = list["subques"].controls[i].controls;
                //  ========check blood============
                let isBloodRel = false;
                if (validateQues["ques_type"].value == 5 &&
                    validateQues[validateQues.controlName.value].value) {
                    isBloodRel = true;
                }
                if (validateQues[validateQues.controlName.value].value == 1 ||
                    isBloodRel) {
                    // if(validateQues['controlName'].value != 209 && validateQues['controlName'].value != 210 &&
                    //   validateQues['controlName'].value != 211 && validateQues['controlName'].value != 208
                    //   && validateQues['controlName'].value != 212){
                    // }
                    if (list["controlName"].value != 54)
                        this.currControl.patchValue({
                            Screened_Dis_type: true,
                        });
                    this.currControl.updateValueAndValidity();
                    return;
                }
            }
            this.iterateSubQues(list);
        }
        else {
            // this.currControl.patchValue({
            //   Screened_Dis_type: false
            //   });
            this.iterateSubQues(list);
            // if(list['subques'].controls.length>0) {
            //   for(let i=0;i<list['subques'].controls.length;i++) {
            //     this.findSubQuesValid(list['subques'].controls[i].controls);
            //   }
            // }
        }
    }
    iterateSubQues(list) {
        if (list["subques"].controls.length > 0) {
            for (let i = 0; i < list["subques"].controls.length; i++) {
                this.findSubQuesValid(list["subques"].controls[i].controls);
            }
        }
    }
    checkMultipleDisorder(list) {
        var _a, _b, _c, _d, _e, _f;
        let statusVal = [];
        let getType1 = 0;
        let getType2 = 0;
        let getType3 = 0;
        let getType4 = 0;
        for (let i = 0; i < list.length; i++) {
            let Screened_Ques = list[i].controls;
            if (Screened_Ques["controlName"].value != 208 &&
                Screened_Ques["controlName"].value != 209 &&
                Screened_Ques["controlName"].value != 210 &&
                Screened_Ques["controlName"].value != 211 &&
                Screened_Ques["controlName"].value != 212) {
                let grpType = Screened_Ques["grp_type"].value;
                if (grpType == 1 && Screened_Ques["Screened_Dis_type"].value) {
                    getType1 = getType1 + 1;
                }
                else if (grpType == 2 && Screened_Ques["Screened_Dis_type"].value) {
                    getType2 = getType2 + 1;
                }
                else if (grpType == 3 && Screened_Ques["Screened_Dis_type"].value) {
                    getType3 = getType3 + 1;
                }
                else if (grpType == 4 && Screened_Ques["Screened_Dis_type"].value) {
                    getType4 = getType4 + 1;
                }
                if (Screened_Ques["Screened_Dis_type"].value) {
                    let questText = Screened_Ques["ques_text"].value;
                    if (Screened_Ques["controlName"].value == 1) {
                        let data = this.formPost.filter((obj) => {
                            return obj.Qid == 4;
                        });
                        if (data[0].ResChar == 1) {
                            questText = questText + "(Blindness)";
                        }
                    }
                    else if (Screened_Ques["controlName"].value == 10) {
                        let data = this.formPost.filter((obj) => {
                            return obj.Qid == 13;
                        });
                        if (data[0].ResChar == 1) {
                            questText = questText + "(Deaf)";
                        }
                    }
                    // if(Screened_Ques['controlName'].value != 208 && Screened_Ques['controlName'].value != 209 &&
                    //   Screened_Ques['controlName'].value != 210 && Screened_Ques['controlName'].value != 211 &&
                    //   Screened_Ques['controlName'].value != 212
                    // ){
                    statusVal.push(questText);
                    // }
                }
            }
        }
        // =========patch multiple disorder autofill==============
        let isValid = false;
        if (getType1 > 1 ||
            getType2 + getType1 > 1 ||
            getType2 + getType3 > 1 ||
            getType4 + getType2 > 1) {
            isValid = true;
        }
        else {
            isValid = false;
        }
        let index = list.findIndex((x) => {
            return x.controls.controlName.value == 54;
        });
        if (index > -1 && index) {
            list[index].patchValue({
                [list[index].controls.controlName.value]: isValid ? true : false,
            });
            (_d = (_c = (_b = (_a = list[index]) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.subques) === null || _c === void 0 ? void 0 : _c.controls[0]) === null || _d === void 0 ? void 0 : _d.patchValue({
                55: isValid ? "1" : "2",
            });
        }
        // ========Referred To============
        let index2 = list.findIndex((x) => {
            return x.controls.controlName.value == 115;
        });
        this.listFromApi = localStorage.getItem("listFromApi")
            ? JSON.parse(localStorage.getItem("listFromApi"))
            : [];
        if (index2 > -1 && index2) {
            (_e = list[index2]) === null || _e === void 0 ? void 0 : _e.patchValue({
                [list[index2].controls.controlName.value]: statusVal.length > 0
                    ? statusVal[0] == "Specific Learning Disability" ||
                        "Comorbid conditions - இணை குறைபாடு"
                        ? "Comprehensive Assessment"
                        : this.listFromApi[this.listFromApi.length - 1].ResChar
                    : "To Class",
            });
        }
        // ========Screened Disability============
        let index3 = list.findIndex((x) => {
            return x.controls.controlName.value == 114;
        });
        if (index3 > -1 && index3) {
            (_f = list[index3]) === null || _f === void 0 ? void 0 : _f.patchValue({
                [list[index3].controls.controlName.value]: statusVal,
            });
        }
        // =======================================
    }
    disableCLDQues(list) {
        let isSld = false;
        for (let i = 0; i < list.length; i++) {
            // let grpType =  Screened_Ques['grp_type'].value;
            // let cldDisGrp = ['35', '36', '37', '47', '48', '49', '116', '119', '123', '126', '129', '132', '135', '138', '141'];
            let cldDisGrp = [
                "47",
                "48",
                "49",
                "119",
                "123",
                "126",
                "129",
                "132",
                "135",
                "138",
                "141",
            ];
            if (cldDisGrp.includes(list[i].Qid.toString())) {
                if (list[i].ResChar == 1 || (list[i].ResChar && list[i].Qid == 116))
                    isSld = true;
            }
        }
        return isSld;
    }
    callFromChildDom(event) {
        setTimeout(() => {
            this.formPost = [];
            let totalForms = this.formGroupList.get("formGroupPages");
            let currFormTotal = totalForms.controls[0].controls.grandParentFA.controls;
            let currFormTotal1 = totalForms.controls[0].value.grandParentFA;
            for (let i = 0; i < currFormTotal1.length; i++) {
                this.generatePost(currFormTotal1[i]);
            }
            for (let i = 0; i < currFormTotal.length; i++) {
                this.currControl = currFormTotal[i];
                this.currControl.patchValue({
                    Screened_Dis_type: false,
                });
                this.currControl.updateValueAndValidity();
                this.findSubQuesValid(currFormTotal[i].controls);
            }
            let index3 = currFormTotal.findIndex((x) => {
                return x.controls.controlName.value == 58;
            });
            if (index3 > -1 && index3) {
                // currFormTotal[index3]?.controls?.subques?.controls[0]?.patchValue({
                //   59: this.disableCLDQues(this.formPost) ? '1' : '2'
                // });
                currFormTotal[index3].updateValueAndValidity();
            }
            this.checkMultipleDisorder(currFormTotal);
        });
    }
    loadDisability() {
        // let url = 'https://d1wpyxz35bzzz4.cloudfront.net/dif_able/cwsn_diff_able_json.json';
        this.ionicstorage.getData("cwsn_diff_able_json").then((data) => {
            if (!data) {
                this.http
                    .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.cwsn_diff_able_json)
                    .subscribe((data) => {
                    this.cwsnDiffAbleList = data.cwsn_diff_able;
                    this.ionicstorage.insertData_Replace("cwsn_diff_able_json", data.cwsn_diff_able);
                });
            }
            else {
                this.cwsnDiffAbleList = data;
            }
        });
    }
    parseDisability(data) {
        var _a, _b;
        for (let i = 0; i < this.cwsnDiffAbleList.length; i++) {
            let disId = this.cwsnDiffAbleList[i].id;
            if ((_b = (_a = this.cwsnDiffAbleList[i]) === null || _a === void 0 ? void 0 : _a.cwsnPh1) === null || _b === void 0 ? void 0 : _b.split(",").includes(data.Qid.toString())) {
                if (data.ques_type != 5) {
                    if (data.ResChar == 1) {
                        this.cwsnDiffAbleList[i].isDisabled = true;
                    }
                }
                else {
                    if (data.Qid == 116) {
                        let isBloodDis = false;
                        if (data.ResChar == 1 && disId == 18) {
                            isBloodDis = true;
                        }
                        else if (data.ResChar == 2 && disId == 19) {
                            isBloodDis = true;
                        }
                        else if (data.ResChar == 3 && disId == 20) {
                            isBloodDis = true;
                        }
                        this.cwsnDiffAbleList[i].isDisabled = isBloodDis;
                    }
                }
            }
        }
    }
};
DisabilityScreeningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__.CWSNService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__.CWSNService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController }
];
DisabilityScreeningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: "app-disability-screening",
        template: _raw_loader_disability_screening_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_disability_screening_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DisabilityScreeningPage);



/***/ }),

/***/ 82108:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/aws-dynamic-form1/aws-dynamic-form1.component.scss ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background: var(--seconday-color-change);\n}\n\n.cwsnRadio {\n  display: flex;\n}\n\n.cwsnRadio {\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.content, .customcard {\n  border-radius: 25px !important;\n}\n\n.customcard {\n  background: var(--seconday-color-change) !important;\n  border: 1px solid #ffffff;\n}\n\n.cwsnCheckBox {\n  background-color: var(--seconday-color-change);\n  box-sizing: 0 0 5px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 0;\n  outline: 0;\n  position: relative;\n  z-index: 9;\n  flex-wrap: wrap;\n}\n\n.cwsnRadio {\n  background: var(--seconday-color-change);\n  padding: 8px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div {\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.radio[_ngcontent-lbn-c341] {\n  font-size: 15px;\n  color: var(--text-color-black);\n}\n\n.radio-btn {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\nion-item {\n  --background: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  font-weight: 500 !important;\n}\n\n.subRadio1 {\n  background-color: #F9F9F9;\n  border-bottom: 2px dashed;\n  margin-bottom: 20px;\n}\n\n.subRadio1 div {\n  display: flex;\n  padding: 0 10px;\n}\n\n.subRadio1 div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.sNoContent {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 100%;\n}\n\n.ques_header {\n  font-size: 0.9rem;\n}\n\n.content {\n  border-radius: 15px !important;\n  justify-content: space-between;\n  width: 100%;\n  display: flex;\n  background: var(--seconday-color-change);\n}\n\n.content .ques-id {\n  padding: 15px;\n  color: var(--seconday-color-change);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  border-radius: 15px 0px 0px 15px;\n  background: var(--icon-color);\n}\n\n.content .ques {\n  padding: 2%;\n}\n\n.content .ques h6 {\n  color: var(--icon-color);\n  font-weight: 600;\n}\n\n.content .check {\n  display: flex;\n  padding-right: 0.5rem;\n  margin: auto;\n}\n\n.main-select {\n  width: 100%;\n}\n\n.main-list {\n  border-radius: 50px;\n  padding: 0;\n  border: 2px solid var(--primary-text-color);\n}\n\nh6 {\n  color: var(--primary-text-color);\n}\n\n.color {\n  color: var(--screened-text-color) !important;\n}\n\n.background {\n  background-color: var(--screened-text-color) !important;\n}\n\n.radio {\n  font-size: 15px;\n}\n\n.radio-icon, .radio-inner {\n  box-sizing: border-box;\n  background: #ffffff;\n}\n\n.customLabel {\n  text-align: center;\n  width: 100%;\n}\n\n.d-none {\n  display: none;\n}\n\n.plusMinus {\n  font-size: 1.5rem;\n  color: var(--icon-color);\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 20px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.text-dark {\n  color: var(--primary-text-color) !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\nol, ul, dl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: var(--primary-text-color);\n}\n\n.select-icon {\n  opacity: 9;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.col-6 {\n  padding: 0;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n::ng-deep .alert-wrapper.sc-ion-alert-md {\n  background-color: #fff;\n}\n\n.cusInput {\n  border-radius: 10px;\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 8px !important;\n}\n\n.mt-8p {\n  margin-top: 8px;\n}\n\n.multiSelectCus {\n  border: 2px solid black;\n  padding: 5px;\n  border-radius: 35px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3cy1keW5hbWljLWZvcm0xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0NBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFPRTtFQUNFLGNBQUE7RUFBQSxTQUFBO0FBSko7O0FBUUU7RUFDRSw4QkFBQTtBQUxKOztBQVFFO0VBRUUsbURBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVNFO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUU7RUFHQyx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVEg7O0FBVUc7RUFDQyxhQUFBO0VBQ0UsbUJBQUE7QUFSTjs7QUFTTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVBSOztBQVlFO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBVEo7O0FBYUU7RUFLRSxrQkFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0FBZEo7O0FBaUJFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFmTjs7QUFnQk07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFkUjs7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxXQUFBO0FBaEJKOztBQW9CRTtFQUNFLGlCQUFBO0FBakJKOztBQXFCRTtFQUVFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBbkJKOztBQXFCSTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBbkJOOztBQXFCSTtFQUNFLFdBQUE7QUFuQk47O0FBb0JNO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQWxCUjs7QUFxQkk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbkJOOztBQXVCRTtFQUNFLFdBQUE7QUFwQko7O0FBdUJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFwQko7O0FBdUJFO0VBQ0UsZ0NBQUE7QUFwQko7O0FBd0JFO0VBQ0UsNENBQUE7QUFyQko7O0FBdUJFO0VBQ0UsdURBQUE7QUFwQko7O0FBdUJFO0VBQ0UsZUFBQTtBQXBCSjs7QUF1QkU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBcEJKOztBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxhQUFBO0FBcEJKOztBQXVCRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFwQko7O0FBdUJFO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSwyQ0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxpQ0FBQTtBQXBCSjs7QUF3QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXJCSjs7QUF3QkU7RUFDRSxVQUFBO0FBckJKOztBQXdCRTtFQUNFLFdBQUE7QUFyQko7O0FBd0JBO0VBQ0ksVUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0FBckJKOztBQW9DQTtFQUNJLHNCQUFBO0FBakNKOztBQW9DQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsZUFBQTtBQWpDRjs7QUFvQ0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakNGIiwiZmlsZSI6ImF3cy1keW5hbWljLWZvcm0xLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09Q1dTTiBDTEFTU0VTPT09PT09PT09PT09PT09PT09PT1cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICAlZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gICVnYXAtNSB7XHJcbiAgICBnYXA6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgJWdhcC0xMCB7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICVib3JkZXItcmFkaXVzLWFsaWdue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tY2FyZCB7XHJcbiAgICBAZXh0ZW5kICVib3JkZXItcmFkaXVzLWFsaWduO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jd3NuQ2hlY2tCb3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGJveC1zaXppbmc6IDAgMCA1cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gIH1cclxuICBcclxuICAuY3dzblJhZGlvIHtcclxuICAgQGV4dGVuZCAlZC1mbGV4O1xyXG4gICBAZXh0ZW5kICVnYXAtMTAgO1xyXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICBwYWRkaW5nOiA4cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvW19uZ2NvbnRlbnQtbGJuLWMzNDFdIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWJsYWNrKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnJhZGlvLWJ0biB7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjOEI2NkIzO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJSYWRpbzEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3ViUmFkaW8xe1xyXG4gICAgZGl2e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc05vQ29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5xdWVzX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb250ZW50e1xyXG4gICAgQGV4dGVuZCAlYm9yZGVyLXJhZGl1cy1hbGlnbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICBcclxuICAgIC5xdWVzLWlkIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgfVxyXG4gICAgLnF1ZXMge1xyXG4gICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgaDZ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpOztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hlY2sge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWFpbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWxpc3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBoNntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAvLyBkeW5hbWljIGNsYXNzIGFkZGVkIFxyXG4gIC5jb2xvcntcclxuICAgIGNvbG9yOnZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2NyZWVuZWQtdGV4dC1jb2xvcikgICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICBcclxuICAucmFkaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucmFkaW8taWNvbiwgLnJhZGlvLWlubmVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tTGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8vIGR5bmFtaWMgY2xhc3MgYWRkZWQgXHJcbiAgLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAucGx1c01pbnVzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tSW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWRhcmt7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAucGItNCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgb2wsIHVsLCBkbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0LWljb24ge1xyXG4gICAgb3BhY2l0eTogOTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAuY29sLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sLTYge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnAtNXAge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4vLyAuZC1mbGV4IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vIH1cclxuXHJcbi8vIC5nYXAtMyB7XHJcbi8vICAgICBnYXA6IDMlO1xyXG4vLyB9XHJcblxyXG4vLyAuYWxpZ24taXRlbXMtY2VudGVyIHtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbjo6bmctZGVlcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c0lucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtOHAge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLm11bHRpU2VsZWN0Q3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59Il19 */");

/***/ }),

/***/ 45235:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form-table.page.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0tdGFibGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 77385:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form/dynamic-class.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background: var(--seconday-color-change);\n}\n\n.cwsnRadio {\n  display: flex;\n}\n\n.cwsnRadio {\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.content, .customcard {\n  border-radius: 25px !important;\n}\n\n.customcard {\n  background: var(--seconday-color-change) !important;\n  border: 1px solid #ffffff;\n  margin: 10px 0px 10px 0px;\n}\n\n.cwsnCheckBox {\n  background-color: var(--seconday-color-change);\n  box-sizing: 0 0 5px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 0;\n  outline: 0;\n  position: relative;\n  z-index: 9;\n  flex-wrap: wrap;\n}\n\n.cwsnRadio {\n  background: var(--seconday-color-change);\n  padding: 8px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div {\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.radio[_ngcontent-lbn-c341] {\n  font-size: 15px;\n  color: var(--text-color-black);\n}\n\n.radio-btn {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\nion-item {\n  --background: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  font-weight: 500 !important;\n}\n\n.subRadio1 {\n  background-color: #F9F9F9;\n  border-bottom: 2px dashed;\n  margin-bottom: 20px;\n}\n\n.subRadio1 div {\n  display: flex;\n  padding: 0 10px;\n}\n\n.subRadio1 div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.sNoContent {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 100%;\n}\n\n.ques_header {\n  font-size: 0.9rem;\n}\n\n.content {\n  border-radius: 15px !important;\n  justify-content: space-between;\n  width: 100%;\n  display: flex;\n  background: var(--seconday-color-change);\n}\n\n.content .ques-id {\n  padding: 15px;\n  color: var(--seconday-color-change);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  border-radius: 15px 0px 0px 15px;\n  background: var(--icon-color);\n}\n\n.content .ques {\n  padding: 2%;\n}\n\n.content .ques h6 {\n  color: var(--icon-color);\n  font-weight: 600;\n}\n\n.content .check {\n  display: flex;\n  padding-right: 0.5rem;\n  margin: auto;\n}\n\n.main-select {\n  width: 100%;\n}\n\n.main-list {\n  border-radius: 50px;\n  padding: 0;\n  border: 2px solid var(--primary-text-color);\n}\n\nh6 {\n  color: var(--no-students-color);\n}\n\n.cls-sld-heading {\n  color: var(--primary-text-color) !important;\n}\n\n.color {\n  color: var(--screened-text-color) !important;\n}\n\n.background {\n  background-color: var(--screened-text-color) !important;\n}\n\n.radio {\n  font-size: 15px;\n}\n\n.radio-icon, .radio-inner {\n  box-sizing: border-box;\n  background: var(--icon-color) !important;\n  border-color: var(--icon-color) !important;\n}\n\n:host(.radio-checked) .radio-icon {\n  border-color: var(--icon-color) !important;\n}\n\n.customLabel {\n  text-align: center;\n  width: 100%;\n}\n\n.d-none {\n  display: none;\n}\n\n.plusMinus {\n  font-size: 1.5rem;\n  color: var(--icon-color);\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 20px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.text-dark {\n  color: var(--primary-text-color) !important;\n}\n\n.pb-4 {\n  padding-bottom: 0.1rem !important;\n}\n\nol, ul, dl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: var(--no-students-color);\n}\n\n.select-icon {\n  opacity: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtY2xhc3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBT0E7RUFDRSxjQUFBO0VBQUEsU0FBQTtBQUpGOztBQVFBO0VBQ0UsOEJBQUE7QUFMRjs7QUFRQTtFQUVFLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQU5GOztBQVNBO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFHQyx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVEQ7O0FBVUM7RUFDQyxhQUFBO0VBQ0UsbUJBQUE7QUFSSjs7QUFTSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVBOOztBQVlBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBVEY7O0FBYUE7RUFLRSxrQkFBQTtFQUNBLGlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBa0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFmSjs7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFkTjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxXQUFBO0FBaEJGOztBQW9CQTtFQUNFLGlCQUFBO0FBakJGOztBQXFCQTtFQUVFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBbkJGOztBQXFCRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBbkJKOztBQXFCRTtFQUNFLFdBQUE7QUFuQko7O0FBb0JJO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQWxCTjs7QUFxQkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbkJKOztBQXVCQTtFQUNFLFdBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsK0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsMkNBQUE7QUFwQkY7O0FBd0JBO0VBQ0UsNENBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsdURBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsZUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxzQkFBQTtFQUVBLHdDQUFBO0VBQ0EsMENBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsMENBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBckJGOztBQXdCQTtFQUNFLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQXJCRjs7QUF3QkE7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBckJGOztBQXdCQTtFQUNFLDJDQUFBO0FBckJGOztBQXdCQTtFQUNFLGlDQUFBO0FBckJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLFVBQUE7QUF0QkYiLCJmaWxlIjoiZHluYW1pYy1jbGFzcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09Q1dTTiBDTEFTU0VTPT09PT09PT09PT09PT09PT09PT1cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbiVkLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiVnYXAtNSB7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbiVnYXAtMTAge1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuXHJcbiVib3JkZXItcmFkaXVzLWFsaWduIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21jYXJkIHtcclxuICBAZXh0ZW5kICVib3JkZXItcmFkaXVzLWFsaWduO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSkgIWltcG9ydGFudDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY3dzbkNoZWNrQm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIGJveC1zaXppbmc6IDAgMCA1cHg7XHJcbiAgLy8gcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5O1xyXG4gIGZsZXgtd3JhcDogd3JhcFxyXG59XHJcblxyXG4uY3dzblJhZGlvIHtcclxuIEBleHRlbmQgJWQtZmxleDtcclxuIEBleHRlbmQgJWdhcC0xMCA7XHJcbiBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gcGFkZGluZzogOHB4O1xyXG4gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gbWFyZ2luLXRvcDogMTBweDtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3BhbntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiB9XHJcbn1cclxuXHJcbi5yYWRpb1tfbmdjb250ZW50LWxibi1jMzQxXSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWJsYWNrKTtcclxufVxyXG5cclxuXHJcbi5yYWRpby1idG4ge1xyXG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkICM4QjY2QjM7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIC8vIGhlaWdodDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViUmFkaW8xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnN1YlJhZGlvMSB7XHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc05vQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucXVlc19oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxufVxyXG5cclxuXHJcbi5jb250ZW50IHtcclxuICBAZXh0ZW5kICVib3JkZXItcmFkaXVzLWFsaWduO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIFxyXG4gIC5xdWVzLWlkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICB9XHJcbiAgLnF1ZXMge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBoNntcclxuICAgICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpOztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9IFxyXG4gIC5jaGVjayAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tbGlzdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmg2IHtcclxuICBjb2xvcjogdmFyKC0tbm8tc3R1ZGVudHMtY29sb3IpO1xyXG59XHJcblxyXG4uY2xzLXNsZC1oZWFkaW5nIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBkeW5hbWljIGNsYXNzIGFkZGVkIFxyXG4uY29sb3Ige1xyXG4gIGNvbG9yOnZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5yYWRpby1pY29uLCAucmFkaW8taW5uZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QoLnJhZGlvLWNoZWNrZWQpIC5yYWRpby1pY29uIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21MYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8vIGR5bmFtaWMgY2xhc3MgYWRkZWQgXHJcbi5kLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wbHVzTWludXMge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxufVxyXG5cclxuLmN1c3RvbUlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dC1kYXJrIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGItNCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbSAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5vbCwgdWwsIGRsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLW5vLXN0dWRlbnRzLWNvbG9yKTtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICBvcGFjaXR5OiA5O1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Il19 */");

/***/ }),

/***/ 62777:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-form/dynamic-form.component.scss ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-12 {\n  width: 100%;\n}\n\n.col-6 {\n  padding: 0;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n::ng-deep .alert-wrapper.sc-ion-alert-md {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5REE7RUFDSSxXQUFBO0FBeERKOztBQTJEQTtFQUNJLFVBQUE7QUF4REo7O0FBMkRBO0VBQ0ksWUFBQTtBQXhESjs7QUF1RUE7RUFDSSxzQkFBQTtBQXBFSiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYWxpZ25fZXJyb3Ige1xyXG4vLyAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIGNvbG9yOiByZWQ7XHJcbi8vIH1cclxuXHJcbi8vIC5keW5hbWljX2Zvcm06Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XHJcbi8vICAgbWF4LXdpZHRoOiAzOTRweDtcclxuLy8gfVxyXG5cclxuLy8gLmR5bmFtaWNfZm9ybTo6bmctZGVlcCAucC1kcm9wZG93bi1sYWJlbCB7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gLmNvbnRyb2xfaXRlbXMge1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLnF1ZXNfaGVhZGVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuLy8gICAvLyBtaW4taGVpZ2h0OiA1MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgcHJpbnQge1xyXG4vLyAgIC5jdXNJbnB1dCB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmRpc2FibGVkRGl2IHtcclxuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuLy8gICBvcGFjaXR5OiAwLjQ7ICAgXHJcbi8vIH1cclxuXHJcbi8vIC50Yi1mb290ZXItbm90ZSB7XHJcbi8vICAgY29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuLy8gLy8gaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQge1xyXG4vLyAvLyAgIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbi8vIC8vIH1cclxuXHJcbi8vIC5pbnB1dFR5cGUxIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb2xvcntcclxuLy8gICBjb2xvcjojMDViYTA1ICAhaW1wb3J0YW50O1xyXG4vLyB9IFxyXG5cclxuLmNvbC0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC02IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wLTVwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLy8gLmQtZmxleCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAuZ2FwLTMge1xyXG4vLyAgICAgZ2FwOiAzJTtcclxuLy8gfVxyXG5cclxuLy8gLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ 84958:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-health-form-mode/dynamic-health-form-mode.component.scss ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background: var(--seconday-color-change);\n}\n\n.cwsnRadio {\n  display: flex;\n}\n\n.cwsnRadio {\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.content, .customcard {\n  border-radius: 25px !important;\n}\n\n.customcard {\n  background: var(--seconday-color-change) !important;\n  border: 1px solid #ffffff;\n}\n\n.cwsnCheckBox {\n  background-color: var(--seconday-color-change);\n  box-sizing: 0 0 5px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 0;\n  outline: 0;\n  position: relative;\n  z-index: 9;\n  flex-wrap: wrap;\n}\n\n.cwsnRadio {\n  background: var(--seconday-color-change);\n  padding: 8px;\n  border-radius: 5px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div {\n  display: flex;\n  align-items: center;\n}\n\n.cwsnRadio div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.radio[_ngcontent-lbn-c341] {\n  font-size: 15px;\n  color: var(--text-color-black);\n}\n\n.radio-btn {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\nion-item {\n  --background: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  font-weight: 500 !important;\n}\n\n.subRadio1 {\n  background-color: #F9F9F9;\n  border-bottom: 2px dashed;\n  margin-bottom: 20px;\n}\n\n.subRadio1 div {\n  display: flex;\n  padding: 0 10px;\n}\n\n.subRadio1 div span {\n  display: flex;\n  padding-left: 5px;\n}\n\n.sNoContent {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 100%;\n  align-items: center;\n}\n\n.ques_header {\n  font-size: 0.9rem;\n}\n\n.content {\n  border-radius: 15px !important;\n  justify-content: space-between;\n  width: 100%;\n  display: flex;\n  background: var(--seconday-color-change);\n}\n\n.content .ques-id {\n  padding: 15px;\n  color: var(--seconday-color-change);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  border-radius: 15px 0px 0px 15px;\n  background: var(--icon-color);\n}\n\n.content .ques {\n  padding: 2%;\n}\n\n.content .ques h6 {\n  color: var(--icon-color);\n  font-weight: 600;\n}\n\n.content .check {\n  display: flex;\n  padding-right: 0.5rem;\n  margin: auto;\n}\n\n.main-select {\n  width: 100%;\n}\n\n.main-list {\n  border-radius: 50px;\n  padding: 0;\n  border: 2px solid var(--primary-text-color);\n}\n\nh6 {\n  color: var(--primary-text-color);\n}\n\n.color {\n  color: var(--screened-text-color) !important;\n}\n\n.background {\n  background-color: var(--screened-text-color) !important;\n}\n\n.radio {\n  font-size: 15px;\n}\n\n.radio-icon, .radio-inner {\n  box-sizing: border-box;\n  background: #ffffff;\n}\n\n.customLabel {\n  text-align: center;\n  width: 100%;\n}\n\n.d-none {\n  display: none;\n}\n\n.plusMinus {\n  font-size: 1.5rem;\n  color: var(--icon-color);\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 20px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.text-dark {\n  color: var(--primary-text-color) !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\nol, ul, dl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: var(--primary-text-color);\n}\n\n.select-icon {\n  opacity: 9;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.col-6 {\n  padding: 0;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n.p-lr-15 {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-warp {\n  flex-wrap: wrap;\n}\n\n.gap-3 {\n  grid-gap: 3%;\n  gap: 3%;\n}\n\n.mr-15p {\n  margin-right: 15px;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n::ng-deep .alert-wrapper.sc-ion-alert-md {\n  background-color: #fff;\n}\n\n.cusInput {\n  border-radius: 10px;\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 8px !important;\n}\n\n.mt-8p {\n  margin-top: 8px;\n}\n\n.multiSelectCus {\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 20px;\n}\n\n.m0 {\n  margin: 0;\n}\n\n.error {\n  color: red;\n  padding-left: 15px;\n}\n\n.info {\n  padding: 10px;\n  background-color: #f1e68c7d;\n}\n\n.fileIcons {\n  font-size: 70px;\n  padding-top: 12px;\n  color: #343232;\n}\n\n.d-none {\n  display: none;\n}\n\n.opacity1 {\n  opacity: 1;\n}\n\n.cusSec {\n  border: 2px solid rgba(0, 0, 0, 0.226);\n  margin-top: 5px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtaGVhbHRoLWZvcm0tbW9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBT0U7RUFDRSxjQUFBO0VBQUEsU0FBQTtBQUpKOztBQVFFO0VBQ0UsOEJBQUE7QUFMSjs7QUFRRTtFQUVFLG1EQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVVFO0VBR0Msd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRIOztBQVVHO0VBQ0MsYUFBQTtFQUNFLG1CQUFBO0FBUk47O0FBU007RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFQUjs7QUFZRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQVRKOztBQWFFO0VBS0Usa0JBQUE7RUFDQSxpQkFBQTtBQWRKOztBQWlCRTtFQUNFLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQWRKOztBQWlCRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWtCSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBZk47O0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBZFI7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBaEJKOztBQW9CRTtFQUNFLGlCQUFBO0FBakJKOztBQXFCRTtFQUVFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBbkJKOztBQXFCSTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBbkJOOztBQXFCSTtFQUNFLFdBQUE7QUFuQk47O0FBb0JNO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQWxCUjs7QUFxQkk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbkJOOztBQXVCRTtFQUNFLFdBQUE7QUFwQko7O0FBdUJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFwQko7O0FBdUJFO0VBQ0UsZ0NBQUE7QUFwQko7O0FBd0JFO0VBQ0UsNENBQUE7QUFyQko7O0FBdUJFO0VBQ0UsdURBQUE7QUFwQko7O0FBdUJFO0VBQ0UsZUFBQTtBQXBCSjs7QUF1QkU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBcEJKOztBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxhQUFBO0FBcEJKOztBQXVCRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFwQko7O0FBdUJFO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSwyQ0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxpQ0FBQTtBQXBCSjs7QUF3QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXJCSjs7QUF3QkU7RUFDRSxVQUFBO0FBckJKOztBQXdCRTtFQUNFLFdBQUE7QUFyQko7O0FBd0JFO0VBQ0UsVUFBQTtBQXJCSjs7QUF3QkU7RUFDRSxZQUFBO0FBckJKOztBQXdCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFyQko7O0FBd0JFO0VBQ0ksYUFBQTtBQXJCTjs7QUF3QkU7RUFDRSxlQUFBO0FBckJKOztBQXdCRTtFQUNJLFlBQUE7RUFBQSxPQUFBO0FBckJOOztBQXdCRTtFQUNFLGtCQUFBO0FBckJKOztBQXdCRTtFQUNJLG1CQUFBO0FBckJOOztBQXdCRTtFQUNFLHNCQUFBO0FBckJKOztBQXdCRTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFyQkY7O0FBd0JFO0VBQ0EsZUFBQTtBQXJCRjs7QUF3QkU7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkU7RUFDRSxTQUFBO0FBckJKOztBQXdCRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFyQko7O0FBd0JFO0VBQ0UsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixjQUFBO0FBbkJ0Qzs7QUFzQkU7RUFDRSxhQUFBO0FBbkJKOztBQXNCRTtFQUNFLFVBQUE7QUFuQko7O0FBc0JFO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFuQkoiLCJmaWxlIjoiZHluYW1pYy1oZWFsdGgtZm9ybS1tb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09Q1dTTiBDTEFTU0VTPT09PT09PT09PT09PT09PT09PT1cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICAlZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gICVnYXAtNSB7XHJcbiAgICBnYXA6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgJWdhcC0xMCB7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICVib3JkZXItcmFkaXVzLWFsaWdue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tY2FyZCB7XHJcbiAgICBAZXh0ZW5kICVib3JkZXItcmFkaXVzLWFsaWduO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jd3NuQ2hlY2tCb3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGJveC1zaXppbmc6IDAgMCA1cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gIH1cclxuICBcclxuICAuY3dzblJhZGlvIHtcclxuICAgQGV4dGVuZCAlZC1mbGV4O1xyXG4gICBAZXh0ZW5kICVnYXAtMTAgO1xyXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICBwYWRkaW5nOiA4cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvW19uZ2NvbnRlbnQtbGJuLWMzNDFdIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWJsYWNrKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnJhZGlvLWJ0biB7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjOEI2NkIzO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJSYWRpbzEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3ViUmFkaW8xe1xyXG4gICAgZGl2e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc05vQ29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAucXVlc19oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29udGVudHtcclxuICAgIEBleHRlbmQgJWJvcmRlci1yYWRpdXMtYWxpZ247XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgXHJcbiAgICAucXVlcy1pZCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIH1cclxuICAgIC5xdWVzIHtcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgIGg2e1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTs7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZWNrIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gICAgICBtYXJnaW46YXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1haW4tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgaDZ7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gZHluYW1pYyBjbGFzcyBhZGRlZCBcclxuICAuY29sb3J7XHJcbiAgICBjb2xvcjp2YXIoLS1zY3JlZW5lZC10ZXh0LWNvbG9yKSAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLWljb24sIC5yYWRpby1pbm5lciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbUxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvLyBkeW5hbWljIGNsYXNzIGFkZGVkIFxyXG4gIC5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBsdXNNaW51cyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbUlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1kYXJre1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnBiLTQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG9sLCB1bCwgZGwge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdC1pY29uIHtcclxuICAgIG9wYWNpdHk6IDk7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLmNvbC0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC02IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLTVwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtbHItMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LXdhcnAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuZ2FwLTMge1xyXG4gICAgICBnYXA6IDMlO1xyXG4gIH1cclxuICBcclxuICAubXItMTVwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmN1c0lucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubXQtOHAge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLm11bHRpU2VsZWN0Q3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm0wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlNjhjN2Q7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlSWNvbnN7XHJcbiAgICBmb250LXNpemU6IDcwcHg7cGFkZGluZy10b3A6IDEycHg7Y29sb3I6ICMzNDMyMzI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5vcGFjaXR5MSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmN1c1NlYyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 5890:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/commonpages/dynamic-form-table/dynamic-table/dynamic-table.component.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableType3 .tableHeader {\n  background-color: #f8f9fa;\n}\n\n.tableLabel {\n  background-color: rgba(0, 0, 0, 0.486);\n  color: white;\n}\n\n.tableType3 .tablecell {\n  background-color: var(--white-text-color);\n}\n\n.tableType3 .tableHeader,\n.tableType3 .tablecell {\n  border-left: 1px solid #dee2e6;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem;\n}\n\n.tableHeader, .tablecell {\n  min-width: 100px;\n}\n\n.tableType3 .borderR {\n  border-right: 1px solid #dee2e6;\n}\n\n.tableType3 .borderb {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.td-iborder {\n  border: 1px solid #bfdbfe !important;\n}\n\ninput[type=text]:disabled {\n  background: #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx5Q0FBQTtBQUNKOztBQUVFOztFQUVFLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0U7RUFDRSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsK0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdDQUFBO0FBQUo7O0FBR0U7RUFDRSxvQ0FBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJkeW5hbWljLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlVHlwZTMgLnRhYmxlSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZUxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudGFibGVUeXBlMyAudGFibGVjZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAudGFibGVUeXBlMyAudGFibGVIZWFkZXIsXHJcbiAgLnRhYmxlVHlwZTMgLnRhYmxlY2VsbCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAvLyBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFibGVIZWFkZXIsIC50YWJsZWNlbGwge1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlVHlwZTMgLmJvcmRlclIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlVHlwZTMgLmJvcmRlcmIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZC1pYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2RlZTJlNjtcclxuICB9Il19 */");

/***/ }),

/***/ 92980:
/*!********************************************************************************!*\
  !*** ./src/app/pages/cwsn/disability-screening/disability-screening.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background: var(--seconday-color-change);\n}\n\n.form-header .main-align .languages .lang .form-header__english {\n  display: block;\n  font-size: 16px;\n  color: var(--icon-color);\n  text-transform: capitalize;\n}\n\n.radion-group {\n  display: flex;\n  align-items: center;\n  margin: 2% 0% 2% 5%;\n  background-color: #f4f4d2;\n}\n\n.radion-group .radio-group__btns {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  text-transform: capitalize;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-select {\n  width: 100%;\n  color: #5a585a;\n}\n\n.error {\n  margin-left: 8%;\n}\n\n.error .error-text {\n  color: #ff0000;\n  font-size: 13px;\n}\n\n.radion-group .radio-group__btns .radio-btn-title {\n  margin-right: 7px;\n}\n\n.twodigites {\n  margin-left: -2.5% !important;\n}\n\n.root-card {\n  z-index: 1;\n}\n\n.root-card .root-card-content {\n  padding: 0;\n}\n\n.values-card {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: -20px;\n}\n\n.form-header .main-align {\n  display: flex;\n  align-items: center;\n}\n\n.form-header .main-align .ques-num {\n  width: 7%;\n  background: #a344ea;\n  text-align: center;\n  /* margin-right: 10px; */\n  line-height: 65px;\n}\n\n.form-header .main-align .ques-num .ques-id {\n  color: #ffffff;\n  margin-right: 4%;\n}\n\n.form-header .main-align .languages {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n}\n\n.form-header .main-align .languages .lang .form-header__tamil {\n  font-size: 12px;\n}\n\n.form-header .main-align .languages .icon .hideShowicon {\n  font-size: 20px;\n  color: #a344ea;\n}\n\n.form-group {\n  margin-top: 10px;\n}\n\n.form-group .form-group__main-question .main-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 25px 0;\n}\n\n.form-group .form-group__main-question .main-align {\n  display: flex;\n}\n\n.form-group .form-group__main-question .main-align .ques-num {\n  width: 7%;\n  background: pink;\n  text-align: center;\n  /* margin-right: 10px; */\n  line-height: 65px;\n}\n\n.form-group .form-group__main-question .main-align .question-id {\n  margin-right: 12px;\n}\n\n.form-group .form-group__main-question .main-align .languages .english-question {\n  font-size: 14px;\n  margin: 8px 0px;\n  display: block;\n}\n\n.form-group .form-group__main-question .main-align .languages .tamil-question {\n  font-size: 14px;\n}\n\n.form-group .form-group__main-question .main-question {\n  margin-left: 5%;\n}\n\n.form-group .form-group__main-question .main-question .totalDisability {\n  font-size: 15px;\n  margin: 5px 0px;\n}\n\n.form-group .form-group__main-question .form-group__title {\n  color: var(--primary-text-color);\n}\n\n.form-group .form-group__main-question .form-group__value {\n  background: var(--seconday-color-change);\n  color: var(--primary-text-color);\n}\n\n.form-group .form-group__sub-question .sub-question {\n  margin-left: 5%;\n}\n\n.card {\n  margin: 5% 3% 5% 3%;\n}\n\n.card .form .disabilitySelect {\n  margin: 0 !important;\n}\n\n.card .form .submitBtn {\n  margin: 18px 0;\n}\n\n.card .form .submitBtn ion-button {\n  width: 100%;\n}\n\n.card-heading_data {\n  margin: 8% 0 0 3%;\n}\n\n.card-heading_data .form-group__main-question {\n  border: 1px solid #000;\n  padding-left: 5px;\n  border-radius: 15px;\n}\n\n.card-heading_data .form-group__main-question .main-question {\n  margin: 4% 3%;\n}\n\n.card-heading_data .form-group__main-question .main-question .totalDisability {\n  font-size: 15px;\n  margin: 5px 0px;\n  color: #767676;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.display_none {\n  display: none;\n}\n\n.display_block {\n  display: block;\n}\n\n.color {\n  color: #05ba05 !important;\n}\n\n.background {\n  background-color: #05ba05 !important;\n}\n\n.form-header .main-align .languages .lang .form-header__english {\n  display: block;\n  font-size: 16px;\n  color: #a344ea;\n  text-transform: capitalize;\n}\n\n.radion-group {\n  display: flex;\n  align-items: center;\n  margin: 2% 0% 2% 5%;\n  background-color: #f4f4d2;\n}\n\n.radion-group .radio-group__btns {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  text-transform: capitalize;\n}\n\nion-select {\n  width: 100%;\n  color: #5a585a;\n}\n\n.error {\n  margin-left: 8%;\n}\n\n.error .error-text {\n  color: #ff0000;\n  font-size: 13px;\n}\n\n.radion-group .radio-group__btns .radio-btn-title {\n  margin: 0;\n  margin-right: 10px;\n}\n\n.twodigites {\n  margin-left: -2.5% !important;\n}\n\n.root-card {\n  z-index: 1;\n}\n\n.root-card .root-card-content {\n  padding: 0;\n}\n\n.values-card {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: -20px;\n}\n\n.form-header .main-align {\n  display: flex;\n  align-items: center;\n}\n\n.form-header .main-align .ques-num {\n  width: 50px;\n  background: #8b66b3;\n  text-align: center;\n  /* margin-right: 10px; */\n  line-height: 65px;\n}\n\n.form-header .main-align .ques-num .ques-id {\n  color: #ffffff;\n  margin-right: 4%;\n}\n\n.form-header .main-align .languages {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n}\n\n.form-header .main-align .languages .lang .form-header__tamil {\n  font-size: 12px;\n}\n\n.form-header .main-align .languages .icon .hideShowicon {\n  font-size: 20px;\n  color: #a344ea;\n}\n\n.form-group {\n  margin-top: 10px;\n}\n\n.form-group .form-group__main-question .main-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 25px 0;\n}\n\n.form-group .form-group__main-question .main-align {\n  display: flex;\n}\n\n.form-group .form-group__main-question .main-align .ques-num {\n  width: 7%;\n  background: pink;\n  text-align: center;\n  /* margin-right: 10px; */\n  line-height: 65px;\n}\n\n.form-group .form-group__main-question .main-align .question-id {\n  margin-right: 12px;\n}\n\n.form-group .form-group__main-question .main-align .languages .english-question {\n  font-size: 14px;\n  margin: 8px 0px;\n  display: block;\n}\n\n.form-group .form-group__main-question .main-align .languages .tamil-question {\n  font-size: 14px;\n}\n\n.form-group .form-group__main-question .main-question {\n  margin-left: 5%;\n}\n\n.form-group .form-group__main-question .main-question .totalDisability {\n  font-size: 15px;\n  margin: 5px 0px;\n}\n\n.form-group .form-group__sub-question .sub-question {\n  margin-left: 5%;\n}\n\n.card {\n  margin: 5% 3% 5% 3%;\n}\n\n.card .form .disabilitySelect {\n  margin: 0 !important;\n}\n\n.card .form .submitBtn {\n  margin: 18px 0;\n}\n\n.card .form .submitBtn ion-button {\n  width: 100%;\n}\n\n.card-heading_data {\n  margin: 0 25px;\n}\n\n.card-heading_data .form-group__main-question {\n  border: 1px solid #000;\n  border-radius: 15px;\n}\n\n.card-heading_data .form-group__main-question .main-question .totalDisability {\n  font-size: 15px;\n  margin: 5px 0px;\n  color: #767676;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.display_none {\n  display: none;\n}\n\n.display_block {\n  display: block;\n}\n\n.color {\n  color: #05ba05 !important;\n}\n\n.background {\n  background-color: #05ba05 !important;\n}\n\n.custom_model {\n  background-color: #8b66b3;\n  color: #ffffff;\n}\n\nion-button {\n  --background: var(--primary-color) !important;\n  color: #ffffff;\n}\n\nion-alert.custom-alert .alert-button.sc-ion-alert-md {\n  --color: var(--primary-color) !important;\n}\n\nion-alert.custom-alert .alert-button.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md {\n  --color: var(--primary-color) !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.gap-3 {\n  grid-gap: 3%;\n  gap: 3%;\n}\n\n.stuName {\n  font-size: 0.9rem;\n}\n\n.disability-verification-popup img {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 10px;\n}\n\n.disability-verification-popup h3 {\n  margin-bottom: 15px;\n}\n\n.disability-verification-popup p {\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\n.disability-verify-alert .alert-wrapper {\n  border-radius: 15px !important;\n  min-width: 300px;\n}\n\n.disability-verify-alert .alert-button-group {\n  padding: 10px !important;\n  justify-content: center !important;\n}\n\n.disability-verify-alert .alert-button {\n  background-color: var(--primary-color) !important;\n  color: white !important;\n  border-radius: 5px !important;\n  padding: 10px 25px !important;\n  margin: 5px !important;\n}\n\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.popup-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\n\n.popup-content {\n  background: #ffffff;\n  border-radius: 14px;\n  overflow: hidden;\n  max-width: 90%;\n  width: 340px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);\n  animation: fadeIn 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.popup-header {\n  background: #6b3fa0;\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n  padding: 16px 20px;\n}\n\n.popup-header ion-icon.warning-icon {\n  font-size: 22px;\n  color: #ffffff;\n}\n\n.popup-header span {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.popup-body {\n  padding: 16px 18px;\n}\n\n.popup-body .note-box {\n  background: #fdf8e1;\n  border: 1px solid #e8dda0;\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n\n.popup-body .note-box .note-title {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n\n.popup-body .note-box .note-title ion-icon.info-icon {\n  font-size: 18px;\n  color: #e67e22;\n}\n\n.popup-body .note-box .note-title strong {\n  font-size: 14px;\n  color: #333;\n}\n\n.popup-body .note-box p {\n  margin: 0;\n  font-size: 13.5px;\n  line-height: 1.6;\n  color: #444;\n}\n\n.popup-footer {\n  padding: 12px 18px 18px;\n  display: flex;\n  justify-content: center;\n}\n\n.popup-footer .close-button {\n  --background: #6b3fa0;\n  --background-activated: #5a3288;\n  --border-radius: 8px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: none;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2FiaWxpdHktc2NyZWVuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQ0FBQTtBQUxGOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFORjs7QUFVQTtFQUNFLGVBQUE7QUFQRjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTko7O0FBY0k7RUFDRSxpQkFBQTtBQVhOOztBQWtCQTtFQUNFLDZCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsVUFBQTtBQWZGOztBQWdCRTtFQUNFLFVBQUE7QUFkSjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZGOztBQW9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWpCSjs7QUFrQkk7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFoQk47O0FBaUJNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZlI7O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWhCTjs7QUFzQlE7RUFDRSxlQUFBO0FBcEJWOztBQXlCUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBdkJWOztBQStCQTtFQUNFLGdCQUFBO0FBNUJGOztBQThCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBNUJOOztBQThCSTtFQUNFLGFBQUE7QUE1Qk47O0FBOEJNO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBNUJSOztBQThCTTtFQUNFLGtCQUFBO0FBNUJSOztBQStCUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTdCVjs7QUErQlE7RUFDRSxlQUFBO0FBN0JWOztBQWtDSTtFQUNFLGVBQUE7QUFoQ047O0FBaUNNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUEvQlI7O0FBdUNJO0VBRUUsZ0NBQUE7QUF0Q047O0FBd0NJO0VBRUUsd0NBQUE7RUFDQSxnQ0FBQTtBQXZDTjs7QUEyQ0k7RUFDRSxlQUFBO0FBekNOOztBQThDQTtFQUNFLG1CQUFBO0FBM0NGOztBQTZDSTtFQUNFLG9CQUFBO0FBM0NOOztBQTZDSTtFQUNFLGNBQUE7QUEzQ047O0FBNENNO0VBQ0UsV0FBQTtBQTFDUjs7QUFnREE7RUFDRSxpQkFBQTtBQTdDRjs7QUE4Q0U7RUFDRSxzQkFBQTtFQUdBLGlCQUFBO0VBQ0EsbUJBQUE7QUE5Q0o7O0FBK0NJO0VBQ0UsYUFBQTtBQTdDTjs7QUE4Q007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE1Q1I7O0FBa0RBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBL0NGOztBQWtEQTtFQUNFLGFBQUE7QUEvQ0Y7O0FBaURBO0VBQ0UsY0FBQTtBQTlDRjs7QUFpREE7RUFDRSx5QkFBQTtBQTlDRjs7QUFnREE7RUFDRSxvQ0FBQTtBQTdDRjs7QUFrREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQS9DRjs7QUF3REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBckRGOztBQXdEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBckRGOztBQXlEQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBdERGOztBQTBEQTtFQUNFLGVBQUE7QUF2REY7O0FBd0RFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF0REo7O0FBOERJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBM0ROOztBQWtFQTtFQUNFLDZCQUFBO0FBL0RGOztBQWtFQTtFQUNFLFVBQUE7QUEvREY7O0FBZ0VFO0VBQ0UsVUFBQTtBQTlESjs7QUFrRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQS9ERjs7QUFvRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFqRUo7O0FBa0VJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBaEVOOztBQWlFTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQS9EUjs7QUFrRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBaEVOOztBQXNFUTtFQUNFLGVBQUE7QUFwRVY7O0FBeUVRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUF2RVY7O0FBK0VBO0VBQ0UsZ0JBQUE7QUE1RUY7O0FBOEVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUE1RU47O0FBOEVJO0VBQ0UsYUFBQTtBQTVFTjs7QUE4RU07RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUE1RVI7O0FBOEVNO0VBQ0Usa0JBQUE7QUE1RVI7O0FBK0VRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBN0VWOztBQStFUTtFQUNFLGVBQUE7QUE3RVY7O0FBaUZJO0VBQ0UsZUFBQTtBQS9FTjs7QUFnRk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQTlFUjs7QUFtRkk7RUFDRSxlQUFBO0FBakZOOztBQXNGQTtFQUNFLG1CQUFBO0FBbkZGOztBQXFGSTtFQUNFLG9CQUFBO0FBbkZOOztBQXFGSTtFQUNFLGNBQUE7QUFuRk47O0FBb0ZNO0VBQ0UsV0FBQTtBQWxGUjs7QUF3RkE7RUFDRSxjQUFBO0FBckZGOztBQXNGRTtFQUNFLHNCQUFBO0VBR0EsbUJBQUE7QUF0Rko7O0FBeUZNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdkZSOztBQTZGQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQTFGRjs7QUE2RkE7RUFDRSxhQUFBO0FBMUZGOztBQTRGQTtFQUNFLGNBQUE7QUF6RkY7O0FBNEZBO0VBQ0UseUJBQUE7QUF6RkY7O0FBMkZBO0VBQ0Usb0NBQUE7QUF4RkY7O0FBMkZBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBeEZGOztBQTJGQTtFQUNFLDZDQUFBO0VBRUEsY0FBQTtBQXpGRjs7QUE4RkU7RUFDRSx3Q0FBQTtBQTNGSjs7QUE0Rkk7RUFDRSx3Q0FBQTtBQTFGTjs7QUFnR0E7RUFDRSxhQUFBO0FBN0ZGOztBQWdHQTtFQUNFLDhCQUFBO0FBN0ZGOztBQWdHQTtFQUNFLHVCQUFBO0FBN0ZGOztBQWdHQTtFQUNFLFlBQUE7RUFBQSxPQUFBO0FBN0ZGOztBQWdHQTtFQUNFLGlCQUFBO0FBN0ZGOztBQWdHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE3Rko7O0FBZ0dFO0VBQ0UsbUJBQUE7QUE5Rko7O0FBaUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEvRko7O0FBb0dFO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQWpHSjs7QUFvR0U7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0FBbEdKOztBQXFHRTtFQUNFLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFuR0o7O0FBc0dBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQW5HRjs7QUFzR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBbkdGOztBQXNHQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtBQW5HRjs7QUFzR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQW5HRjtFQXFHQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQW5HRjtBQUNGOztBQXNHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxrQkFBQTtBQXBHRjs7QUFzR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXBHSjs7QUF1R0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckdKOztBQXlHQTtFQUNFLGtCQUFBO0FBdEdGOztBQXdHRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBdEdKOztBQXdHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0Esa0JBQUE7QUF0R047O0FBd0dNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUF0R1I7O0FBeUdNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF2R1I7O0FBMkdJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBekdOOztBQThHQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBM0dGOztBQTZHRTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBM0dKIiwiZmlsZSI6ImRpc2FiaWxpdHktc2NyZWVuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG59XHJcblxyXG4lZW5nbGlzaC10aXRsZXMtZGVzaWduIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4lcXVlc3Rpb24tZGVzaWduIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4lcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIlIDAlIDIlIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZDI7XHJcbn1cclxuXHJcbiVyYWRpby1ncm91cC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4vLyBpb24tc2VsZWN0XHJcbmlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjNWE1ODVhO1xyXG59XHJcblxyXG4vLyBlcnJvciB0ZXh0XHJcbi5lcnJvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIC5lcnJvci10ZXh0IHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG4vLyByYWRpby1idG5cclxuLnJhZGlvbi1ncm91cCB7XHJcbiAgQGV4dGVuZCAlcmFkaW8tZ3JvdXA7XHJcbiAgLnJhZGlvLWdyb3VwX19idG5zIHtcclxuICAgIEBleHRlbmQgJXJhZGlvLWdyb3VwLWJ0bjtcclxuICAgIC5yYWRpby1idG4tdGl0bGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuICAgIC8vIC5yYWRpby1idG4tY2lyY2xle31cclxuICB9XHJcbn1cclxuXHJcbi8vIHJvbGVudW1iZXJzXHJcbi50d29kaWdpdGVzIHtcclxuICBtYXJnaW4tbGVmdDogLTIuNSUgIWltcG9ydGFudDtcclxufVxyXG4vLyByb290IGNhcmRcclxuLnJvb3QtY2FyZCB7XHJcbiAgei1pbmRleDogMTtcclxuICAucm9vdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi52YWx1ZXMtY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgLy8gei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgLm1haW4tYWxpZ24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAucXVlcy1udW0ge1xyXG4gICAgICB3aWR0aDogNyU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNhMzQ0ZWE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xyXG4gICAgICBsaW5lLWhlaWdodDogNjVweDtcclxuICAgICAgLnF1ZXMtaWQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5sYW5ndWFnZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAubGFuZyB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmZvcm0taGVhZGVyX19lbmdsaXNoIHtcclxuICAgICAgICAgIEBleHRlbmQgJWVuZ2xpc2gtdGl0bGVzLWRlc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0taGVhZGVyX190YW1pbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5oaWRlU2hvd2ljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNhMzQ0ZWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vLmZvcm0taGVhZGVyX190YW1pbHsgLy8gbWFyZ2luLWxlZnQ6IDUlO31cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC5mb3JtLWdyb3VwX19tYWluLXF1ZXN0aW9uIHtcclxuICAgIC5tYWluLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgfVxyXG4gICAgLm1haW4tYWxpZ24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5xdWVzLW51bSB7XHJcbiAgICAgICAgd2lkdGg6IDclO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxuICAgICAgICBsaW5lLWhlaWdodDogNjVweDtcclxuICAgICAgfVxyXG4gICAgICAucXVlc3Rpb24taWQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAubGFuZ3VhZ2VzIHtcclxuICAgICAgICAuZW5nbGlzaC1xdWVzdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhbWlsLXF1ZXN0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgLnRvdGFsRGlzYWJpbGl0eSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBtYXJnaW46IDA7XHJcbiAgICAuZm9ybS1ncm91cF9fdGl0bGUge1xyXG4gICAgICAvLyBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuICAgIC5mb3JtLWdyb3VwX192YWx1ZSB7XHJcbiAgICAgIC8vIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwX19zdWItcXVlc3Rpb24ge1xyXG4gICAgLnN1Yi1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDUlIDMlIDUlIDMlO1xyXG4gIC5mb3JtIHtcclxuICAgIC5kaXNhYmlsaXR5U2VsZWN0IHtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0QnRuIHtcclxuICAgICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nX2RhdGEge1xyXG4gIG1hcmdpbjogOCUgMCAwIDMlO1xyXG4gIC5mb3JtLWdyb3VwX19tYWluLXF1ZXN0aW9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAvLyBwYWRkaW5nOiAzJSAzJTtcclxuICAgIC8vIG1hcmdpbjogMyUgMiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAubWFpbi1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogNCUgMyU7XHJcbiAgICAgIC50b3RhbERpc2FiaWxpdHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4uZGlzcGxheV9ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kaXNwbGF5X2Jsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBjb2xvcjogIzA1YmEwNSAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViYTA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIDExIFFVRVNUSU9OU1xyXG5cclxuJWVuZ2xpc2gtdGl0bGVzLWRlc2lnbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjYTM0NGVhO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4lcXVlc3Rpb24tZGVzaWduIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4lcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIlIDAlIDIlIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZDI7XHJcbn1cclxuXHJcbiVyYWRpby1ncm91cC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi8vIGlvbi1zZWxlY3RcclxuaW9uLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM1YTU4NWE7XHJcbn1cclxuXHJcbi8vIGVycm9yIHRleHRcclxuLmVycm9yIHtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgLmVycm9yLXRleHQge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcbi8vIHJhZGlvLWJ0blxyXG4ucmFkaW9uLWdyb3VwIHtcclxuICBAZXh0ZW5kICVyYWRpby1ncm91cDtcclxuICAucmFkaW8tZ3JvdXBfX2J0bnMge1xyXG4gICAgQGV4dGVuZCAlcmFkaW8tZ3JvdXAtYnRuO1xyXG4gICAgLnJhZGlvLWJ0bi10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLy8gLnJhZGlvLWJ0bi1jaXJjbGV7fVxyXG4gIH1cclxufVxyXG5cclxuLy8gcm9sZW51bWJlcnNcclxuLnR3b2RpZ2l0ZXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMi41JSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIHJvb3QgY2FyZFxyXG4ucm9vdC1jYXJkIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIC5yb290LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnZhbHVlcy1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAvLyB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICAubWFpbi1hbGlnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5xdWVzLW51bSB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGI2NmIzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxuICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICAgIC5xdWVzLWlkIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGFuZ3VhZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLmxhbmcge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5mb3JtLWhlYWRlcl9fZW5nbGlzaCB7XHJcbiAgICAgICAgICBAZXh0ZW5kICVlbmdsaXNoLXRpdGxlcy1kZXNpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWhlYWRlcl9fdGFtaWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAuaGlkZVNob3dpY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjYTM0NGVhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLy5mb3JtLWhlYWRlcl9fdGFtaWx7IC8vIG1hcmdpbi1sZWZ0OiA1JTt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAuZm9ybS1ncm91cF9fbWFpbi1xdWVzdGlvbiB7XHJcbiAgICAubWFpbi10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIH1cclxuICAgIC5tYWluLWFsaWduIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAucXVlcy1udW0ge1xyXG4gICAgICAgIHdpZHRoOiA3JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnF1ZXN0aW9uLWlkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxhbmd1YWdlcyB7XHJcbiAgICAgICAgLmVuZ2xpc2gtcXVlc3Rpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YW1pbC1xdWVzdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFpbi1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgLnRvdGFsRGlzYWJpbGl0eSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZm9ybS1ncm91cF9fc3ViLXF1ZXN0aW9uIHtcclxuICAgIC5zdWItcXVlc3Rpb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiA1JSAzJSA1JSAzJTtcclxuICAuZm9ybSB7XHJcbiAgICAuZGlzYWJpbGl0eVNlbGVjdCB7XHJcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdEJ0biB7XHJcbiAgICAgIG1hcmdpbjogMThweCAwO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGluZ19kYXRhIHtcclxuICBtYXJnaW46IDAgMjVweDtcclxuICAuZm9ybS1ncm91cF9fbWFpbi1xdWVzdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgLy8gcGFkZGluZzogMyUgMyU7XHJcbiAgICAvLyBtYXJnaW46IDMlIDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC5tYWluLXF1ZXN0aW9uIHtcclxuICAgICAgLy8gbWFyZ2luOiA0JSAzJTtcclxuICAgICAgLnRvdGFsRGlzYWJpbGl0eSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5X25vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRpc3BsYXlfYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIGNvbG9yOiAjMDViYTA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWJhMDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbV9tb2RlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNjZiMztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8vIC5jdXN0b20tYWxlcnQge1xyXG5pb24tYWxlcnQuY3VzdG9tLWFsZXJ0IHtcclxuICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyB9XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZ2FwLTMge1xyXG4gIGdhcDogMyU7XHJcbn1cclxuXHJcbi5zdHVOYW1lIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uZGlzYWJpbGl0eS12ZXJpZmljYXRpb24tcG9wdXAge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmlsaXR5LXZlcmlmeS1hbGVydCB7XHJcbiAgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5hbGVydC1idXR0b24tZ3JvdXAge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGVydC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5wb3B1cC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLnBvcHVwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICB3aWR0aDogMzQwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wdXAtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmIzZmEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG5cclxuICBpb24taWNvbi53YXJuaW5nLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3B1cC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNnB4IDE4cHg7XHJcblxyXG4gIC5ub3RlLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRmOGUxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZGRhMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuXHJcbiAgICAubm90ZS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICBpb24taWNvbi5pbmZvLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogI2U2N2UyMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wdXAtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE4cHggMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuY2xvc2UtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzZiM2ZhMDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1YTMyODg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 72848:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dynamic-form-table/aws-dynamic-form1/aws-dynamic-form1.component.html ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"parentform\" class=\"dynamic_form\">\r\n  <div formArrayName=\"dynamicFormArray\">\r\n      <div class=\"\" *ngIf=\"formArrayList\">\r\n          <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n              <div id=\"dynamicQ{{i}}\" *ngIf=\"list.controls.hidden.value ? false:true\">\r\n                  <div  class=\"position-relative pb-4\" [ngSwitch]=\"list.controls.ques_type.value\"\r\n                      formGroupName=\"{{i}}\" >\r\n                      <div>\r\n                               <!--========label============== -->\r\n                               <div *ngSwitchCase=\"'0'\" class=\"mt-3\" ngClass=\"{{list.controls.cls_name.value}}\">\r\n                                      <div *ngIf=\"list.controls.ques_text.value\">\r\n                                          <h6 class=\"text-center\">\r\n                                              {{list.controls.ques_text.value}}\r\n                                          </h6>\r\n                                      </div>\r\n                              </div>\r\n                          <!-- =======radio=========== -->\r\n                          <div *ngSwitchCase=\"'1'\" class=\"p-5p\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value && list.controls.ques_text_type.value != 'hidden'\">\r\n                                      <h6 class=\"m-0 text-dark\">\r\n                                          {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} . <span *ngIf=\"list.controls.ques_text.value\">{{list.controls.ques_text.value}}</span>\r\n                                      </h6>\r\n                                  </div> \r\n                              </div>\r\n                              <div ngClass=\"{{list.controls.cls_name.value}}\">\r\n                                  <ion-radio-group formControlName=\"{{list.controls.controlName.value}}\" >\r\n                                      <ion-item lines=\"none\" disabled =\"{{diable1?true:false}}\">\r\n                                          <div *ngFor=\"let item of list.controls.ques_option.value\" class=\"d-flex align-items-center col-6 flex-warp\">\r\n                                              <ion-radio class=\"radio-btn\" value=\"{{item.id}}\"  ></ion-radio>\r\n                                              <div  class=\"radio\"> \r\n                                                 {{item.value}} \r\n                                             </div>\r\n                                          </div>\r\n                                      </ion-item>\r\n                                  </ion-radio-group> \r\n                              </div>\r\n                              <!-- ============Sub question================  -->\r\n                              <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                  <div class=\"mt-3\"\r\n                                      *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                     <h6 *ngIf=\"list['controls'].sub_heading.value\"><b>{{list['controls'].sub_heading.value}}</b></h6>\r\n                                      <div>\r\n                                          <app-aws-dynamic-form1 [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                              formArrName=\"dynamicFormControl\"\r\n                                              [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                          </app-aws-dynamic-form1>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div\r\n                                      *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                      {{removeSubQues(list)}}\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <!-- =========text box============= -->\r\n                          <div *ngSwitchCase=\"'2'\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"m-0\">\r\n                                        {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"mt-2 customInput p-3 col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                              </div>\r\n                          </div>\r\n                          <!-- ==========Custom Accordian=============== -->\r\n                          <div *ngSwitchCase=\"'3'\">\r\n                              <ion-card class=\"card customcard\" ngClass=\"{{list.controls.cls_name.value}}\" *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                  <div class=\"content\">\r\n                                      <div class=\"sNoContent\"> \r\n                                          <div class=\"ques-id\" [class.background]=\"list.controls.Screened_Dis_type.value\">\r\n                                              {{(i+1)}}\r\n                                          </div>\r\n                                          <div class=\"ques\">\r\n                                              <h6>{{list.controls.ques_text.value}}</h6>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"check\">\r\n                                        <ion-icon class=\"plusMinus\" *ngIf=\"!list.controls[list.controls.controlName.value].value && data == 1\" name=\"add-outline\" (click)=\"setFormValidation(list,true,i, formArrayList.controls);\"></ion-icon>\r\n                                        <ion-icon class=\"plusMinus\" *ngIf=\"list.controls[list.controls.controlName.value].value && data == 1\" name=\"remove-outline\" (click)=\"setFormValidation(list,false,i, formArrayList.controls);\"></ion-icon>\r\n                                        <ion-icon class=\"plusMinus\" *ngIf=\"!list.controls[list.controls.controlName.value].value && data == 2\" name=\"eye-outline\" (click)=\"setFormValidation(list,true,i, formArrayList.controls);\"></ion-icon>\r\n                                        <ion-icon class=\"plusMinus\" *ngIf=\"list.controls[list.controls.controlName.value].value && data == 2\" name=\"eye-outline\" (click)=\"setFormValidation(list,false,i, formArrayList.controls);\"></ion-icon>\r\n                                        <input class=\"d-none\" type=\"checkbox\" value=\"1\" name=\"{{list.controls.controlName.value}}\"\r\n                                            formControlName=\"{{list.controls.controlName.value}}\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- ============Sub question================  -->\r\n                                  <div  class=\"col-12\" class=\"content\">\r\n                                    <!-- [hidden]=\"!(showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value))\"  -->\r\n                                      <div class=\"mt-2 col-12\" [hidden]=\"!(showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value))\">\r\n                                          <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                              <app-aws-dynamic-form1 [formGrp]=\"formArrayList\" index=\"{{i}}\" \r\n                                                  formArrName=\"dynamicFormControl\"\r\n                                                  [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                              </app-aws-dynamic-form1>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </ion-card>\r\n                          </div>\r\n                          <!--========dropdown============== -->\r\n                          <div *ngSwitchCase=\"'5'\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"ques_header m-0\">\r\n                                        {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div>\r\n                                  <ion-list class=\"main-list mt-8p\">\r\n                                      <ion-item class=\"main-item\">\r\n                                          <ion-select class=\"main-select\" placeholder=\"Select one\" (ionChange)=\"mainQuesChange(list.controls.controlName.value, $event)\"\r\n                                              formControlName=\"{{list.controls.controlName.value}}\">\r\n                                              <ion-select-option *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                  [value]=\"item.id\">\r\n                                                  {{ item.value }}\r\n                                              </ion-select-option>\r\n                                          </ion-select>\r\n                                      </ion-item>\r\n                                  </ion-list>\r\n                              </div>\r\n                              <!-- ============Sub question================ -->\r\n                              <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                <div class=\"mt-2\" *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                    <div class=\"mt-2 p-5p\"\r\n                                        *ngIf=\"list.controls.expected.value\">\r\n                                        <div *ngFor=\"let opVal of list.controls.expected.value\">\r\n                                           <div *ngIf=\"showSubQuesDropdown([opVal], list.controls[list.controls.controlName.value].value)\">\r\n                                            <app-aws-dynamic-form1 [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                            formArrName=\"dynamicFormControl\" [healthBlock]=\"healthBlock\"\r\n                                            [list]=\"subQustShowCond(list, list.controls[list.controls.controlName.value].value)\" [submitted]=\"submitted\">\r\n                                        </app-aws-dynamic-form1>\r\n                                           </div>\r\n                                           <div\r\n                                                *ngIf=\"!showSubQuesDropdown([opVal], list.controls[list.controls.controlName.value].value)\">\r\n                                                {{removeSubQuesCond(list, list.controls[list.controls.controlName.value].value)}}\r\n                                           </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div\r\n                                        *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        {{removeSubQues(list)}}\r\n                                    </div>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                            <!--========multi select============== -->\r\n                            <div *ngSwitchCase=\"'6'\">\r\n                                <div>\r\n                                    <div *ngIf=\"list.controls.ques_text.value\">\r\n                                        <h6 class=\"ques_header m-0\">\r\n                                            {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                            {{list.controls.ques_text.value}}\r\n                                        </h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <!-- <ion-list class=\"main-list mt-8p\">\r\n                                        <ion-item class=\"main-item\">\r\n                                            <ion-select class=\"main-select\" placeholder=\"Select one\" [multiple]=\"true\"\r\n                                                formControlName=\"{{list.controls.controlName.value}}\">\r\n                                                <ion-select-option *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                    [value]=\"item.id\">\r\n                                                    {{ item.value }}\r\n                                                </ion-select-option>\r\n                                            </ion-select>\r\n                                        </ion-item>\r\n                                    </ion-list> -->\r\n                                    <ionic-selectable class=\"multiSelectCus\" text-wrap placeholder=\"Select\" formControlName=\"{{list.controls.controlName.value}}\" itemValueField=\"id\"\r\n                                        itemTextField=\"value\" [items]=\"list.controls.ques_option.value\"   [isMultiple]=\"true\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                                        closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n                                    </ionic-selectable>\r\n                                    </div>\r\n                                <!-- ============Sub question================ -->\r\n                                <!-- <div class=\"mt-2\" *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                    <div class=\"mt-2 p-5p\"\r\n                                        *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                            <app-aws-dynamic-form1 [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                formArrName=\"dynamicFormControl\"\r\n                                                [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                            </app-aws-dynamic-form1>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div\r\n                                        *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        {{removeSubQues(list)}}\r\n                                    </div>\r\n                                </div> -->\r\n                            </div>\r\n                          <!-- ==========calender=============== -->\r\n                        <div *ngSwitchCase=\"'4'\">\r\n                            <div>\r\n                                <div *ngIf=\"list.controls.ques_text.value\">\r\n                                    <h6 class=\"m-0\">\r\n                                        {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                        {{list.controls.ques_text.value}}\r\n                                    </h6>\r\n                                </div>\r\n                                </div>\r\n                                <div class=\"mt-2\">\r\n                                  \r\n                                    <ion-datetime max=\"2040-10-31\" [min]=\"currentYear\" class=\"cusInput\" displayFormat=\"DD/MM/YYYY\"\r\n                                        placeholder=\"Select Date\" formControlName=\"{{list.controls.controlName.value}}\">\r\n                                    </ion-datetime>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <!-- ==========month calender=============== -->\r\n                        <div *ngSwitchCase=\"'7'\">\r\n                            <div>\r\n                                <div *ngIf=\"list.controls.ques_text.value\">\r\n                                    <h6 class=\"m-0\">\r\n                                        {{((list.controls.page.value == 3) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                        {{list.controls.ques_text.value}}\r\n                                    </h6>\r\n                                </div>\r\n                                </div>\r\n                                <div class=\"mt-2\">\r\n                                    <ion-datetime max=\"2040-10-31\" [min]=\"currentYear\" class=\"cusInput\" displayFormat=\"MM/YYYY\" pickerFormat=\"MM YYYY\"\r\n                                        placeholder=\"Select Month and Year\" formControlName=\"{{list.controls.controlName.value}}\">\r\n                                    </ion-datetime>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <!-- ========== custom dropdown =============== -->\r\n                        <div *ngSwitchCase=\"'8'\">\r\n                            <div>\r\n                                <div *ngIf=\"list.controls.ques_text.value\">\r\n                                    <h6 class=\"ques_header m-0\">\r\n                                      {{((list.controls.page.value == 1) && (list.controls.ques_text_type.value == 'subquestion')) ? ((list.controls.mainQuesInd.value + 1) + '.' + (i+1)) : (i+1)}} .\r\n                                        {{list.controls.ques_text.value}}\r\n                                    </h6>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <ion-list class=\"main-list mt-8p\">\r\n                                    <ion-item class=\"main-item\">\r\n                                        <ion-select class=\"main-select\" placeholder=\"Select one\"\r\n                                            formControlName=\"{{list.controls.controlName.value}}\">\r\n                                            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of healthBlock\">\r\n                                                {{ item.label }}\r\n                                            </ion-select-option>\r\n                                        </ion-select>\r\n                                    </ion-item>\r\n                                </ion-list>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <p class=\"error align_error top-80 col-12\"\r\n                          *ngIf=\"(submitted && list.controls[list.controls.controlName.value].hasError('required')) && (submitted || list.controls[list.controls.controlName.value].dirty || list.controls[list.controls.controlName.value].touched)\">\r\n                          Field is required\r\n                      </p>\r\n                      <p class=\"error align_error top-80 col-12\"\r\n                          *ngIf=\"list.controls[list.controls.controlName.value].hasError('pattern')\">\r\n                          {{list.controls.emsg.value}}\r\n                      </p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ 48409:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dynamic-form-table/dynamic-form-table.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>dynamic-form-table</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 78955:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dynamic-form-table/dynamic-form/dynamic-form.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"parentform\" class=\"dynamic_form\">\r\n    <div formArrayName=\"dynamicFormArray\">\r\n        <div class=\"\" *ngIf=\"formArrayList\">\r\n            <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n                <div id=\"dynamicQ{{i}}\" *ngIf=\"list.controls.hidden.value ? false:true\">\r\n                    <div class=\"position-relative pb-4\" [ngSwitch]=\"list.controls.ques_type.value\"\r\n                        formGroupName=\"{{i}}\">\r\n                        <div>\r\n                            <!--========label============== -->\r\n                            <div *ngSwitchCase=\"'0'\" class=\"mt-3\" ngClass=\"{{list.controls.cls_name.value}}\">\r\n                                <div *ngIf=\"list.controls.ques_text.value\">\r\n                                    <h6 class=\"text-center cls-sld-heading\">\r\n                                        {{list.controls.ques_text.value}}\r\n                                    </h6>\r\n                                </div>\r\n                                <!-- ============Sub question================  -->\r\n                                <div *ngIf=\"list['controls'].subquesLength.value>0 && list['controls'].subquesList.value\"\r\n                                    class=\"mt-3\">\r\n                                    <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                        formArrName=\"dynamicFormControl\" [list]=\"list['controls'].subquesList.value\"\r\n                                        [submitted]=\"submitted\">\r\n                                    </app-dynamic-form>\r\n                                </div>\r\n                            </div>\r\n                            <!-- =======radio=========== -->\r\n                            <div *ngSwitchCase=\"'1'\" class=\"p-5p\">\r\n                                <div>\r\n                                    <div\r\n                                        *ngIf=\"list.controls.ques_text.value && list.controls.ques_text_type.value != 'hidden'\">\r\n                                        <h6 class=\"m-0 text-dark\">\r\n                                            {{list.controls.seq_id.value}} . <span\r\n                                                *ngIf=\"list.controls.ques_text.value\">{{list.controls.ques_text.value}}</span> \r\n                                                <!-- : question -->\r\n                                            <!-- Checkbox ques -->\r\n                                        </h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div ngClass=\"{{list.controls.cls_name.value}}\">\r\n                                    <ion-radio-group formControlName=\"{{list.controls.controlName.value}}\"\r\n                                        (ionChange)=\"findSubQuesValid(list);\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <div *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                class=\"d-flex align-items-center col-6 flex-warp\">\r\n                                                <ion-radio class=\"radio-btn\" value=\"{{item.id}}\"></ion-radio>\r\n                                                <div class=\"radio\">\r\n                                                    {{item.value}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </ion-item>\r\n                                    </ion-radio-group>\r\n                                </div>\r\n                                <!-- ============Sub question================  --> \r\n                                <div>\r\n                                    <div class=\"mt-3\"\r\n                                        *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        <h6 *ngIf=\"list['controls'].sub_heading.value\">\r\n                                            <b>{{list['controls'].sub_heading.value}}</b></h6> \r\n                                            <!-- : sub heading -->\r\n                                        <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                            <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                formArrName=\"dynamicFormControl\"\r\n                                                [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                            </app-dynamic-form>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div\r\n                                        *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        {{removeSubQues(list)}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- =========text box============= -->\r\n                            <div *ngSwitchCase=\"'2'\">\r\n                                <div>\r\n                                    <div *ngIf=\"list.controls.ques_text.value\">\r\n                                        <h6 class=\"m-0\">\r\n                                            {{i+1}} .\r\n                                            <!-- Child referred to label -->\r\n                                            {{list.controls.ques_text.value}} \r\n                                        </h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mt-2\">\r\n                                    <input class=\"mt-2 customInput p-3 col-12\" type=\"text\"\r\n                                        formControlName=\"{{list.controls.controlName.value}}\" disabled>\r\n                                </div>\r\n                            </div>\r\n                            <!-- ==========Custom Accordian=============== --> \r\n                            <div *ngSwitchCase=\"'3'\">\r\n                                <!-- {{list.controls.Screened_Dis_type.value}} -->\r\n                                <ion-card class=\"card customcard\" ngClass=\"{{list.controls.cls_name.value}}\">\r\n                                    <div class=\"content\" (click)=\"!list.controls[list.controls.controlName.value].value ? setFormValidation(list,true,i, formArrayList.controls)\r\n                                    : list.controls[list.controls.controlName.value].value ? setFormValidation(list,false,i, formArrayList.controls) : null\">\r\n                                        <div class=\"sNoContent\">\r\n                                            <div class=\"ques-id\"\r\n                                                [class.background]=\"list.controls.Screened_Dis_type.value\">\r\n                                                {{(i+1)}}\r\n                                                <!-- violet header -->\r\n                                            </div>\r\n                                            <div class=\"ques\">\r\n                                                <h6>{{list.controls.ques_text.value}}</h6> \r\n                                                <!-- : main heading -->\r\n                                                <!-- <h6>{{list.controls.ques_tamil.value}}</h6> -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"check\">\r\n                                            <ion-icon class=\"plusMinus\"\r\n                                                *ngIf=\"!list.controls[list.controls.controlName.value].value\"\r\n                                                name=\"add-outline\"\r\n                                                >\r\n                                            </ion-icon>\r\n                                            <ion-icon class=\"plusMinus\"\r\n                                                *ngIf=\"list.controls[list.controls.controlName.value].value\"\r\n                                                name=\"remove-outline\"\r\n                                                >\r\n                                            </ion-icon>\r\n                                            <!-- <ion-icon [ngClass]=\"{'color': visualQue}\" slot=\"end\" [name]=\"passwordIcon1\" class=\"hideShowicon\" (click)=\"hideShowQuestions1()\"> -->\r\n                                            <input class=\"d-none\" type=\"checkbox\" value=\"1\"\r\n                                                name=\"{{list.controls.controlName.value}}\"\r\n                                                formControlName=\"{{list.controls.controlName.value}}\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- ============Sub question================  -->\r\n                                    <div class=\"col-12\" class=\"content\">\r\n                                        <div class=\"mt-2 col-12\"\r\n                                            [hidden]=\"!(showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value))\">\r\n                                            <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                                <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                    formArrName=\"dynamicFormControl\"\r\n                                                    [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                                </app-dynamic-form>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div\r\n                                                *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                                {{removeSubQues(list)}}\r\n                                            </div> -->\r\n                                    </div>\r\n                                </ion-card>\r\n                                <!-- {{calcDisAbility(list)}} -->\r\n                            </div>\r\n                            <!--========dropdown============== -->\r\n                            <div *ngSwitchCase=\"'5'\">\r\n                                <div>\r\n                                    <div *ngIf=\"list.controls.ques_text.value\">\r\n                                        <h6 class=\"ques_header m-0\">\r\n                                            <!-- {{list.controls.seq_id.value}} -->\r\n                                            {{list.controls.ques_text.value}}\r\n                                        </h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <ion-list class=\"main-list\">\r\n                                        <ion-item class=\"main-item\">\r\n                                            <ion-select class=\"main-select\" placeholder=\"Select one\"\r\n                                                (ionChange)=\"findSubQuesValid(list);\"\r\n                                                formControlName=\"{{list.controls.controlName.value}}\">\r\n                                                <ion-select-option *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                    [value]=\"item.id\">\r\n                                                    {{ item.value }}\r\n                                                </ion-select-option>\r\n                                            </ion-select>\r\n                                        </ion-item>\r\n                                    </ion-list>\r\n                                </div>\r\n                                <!-- ============Sub question================ sub: {{list.controls[list.controls.controlName.value].value}} -->\r\n                                <div class=\"mt-2\" *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                    <div class=\"mt-2\"\r\n                                        *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value.id)\">\r\n                                        <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                            <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{i}\"\r\n                                                formArrName=\"dynamicFormControl\"\r\n                                                [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                            </app-dynamic-form>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div\r\n                                        *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value.id)\">\r\n                                        {{removeSubQues(list)}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- =========UL============= -->\r\n                            <div *ngSwitchCase=\"'6'\"> \r\n                                <!-- {{list.controls[list.controls.controlName.value].value}}  -->\r\n                                <!-- Switch 6 -->\r\n                                <div *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                    <div>\r\n                                        <h6>\r\n                                            {{i+1}} . {{list.controls.ques_text.value}}\r\n                                            <!-- Screened Disability lable -->\r\n                                        </h6>\r\n                                    </div>\r\n                                    <div class=\"mt-2 p-2\"\r\n                                        *ngIf=\"list.controls[list.controls.controlName.value].value.length>0\">\r\n                                        <h6\r\n                                            *ngIf=\"checkMutiDisLabel(list.controls[list.controls.controlName.value].value) || isMultiple\">\r\n                                            <b>Multiple Disabilities</b></h6>\r\n                                        <ol>\r\n                                            <li *ngFor=\"let list of list.controls[list.controls.controlName.value].value\"\r\n                                                [class.d-none]=\"list == 'Multiple Disabilities பல்வகைத்திறன் குறைபாடு'\">\r\n                                                {{list}}\r\n                                            </li>\r\n                                        </ol>\r\n                                    </div>\r\n                                    <div class=\"mt-2\"\r\n                                        *ngIf=\"list.controls[list.controls.controlName.value].value.length==0\">\r\n                                        <div class=\"mt-2\">\r\n                                            <input class=\"mt-2 p-3 customInput col-12\" type=\"text\"\r\n                                                value=\"Not Applicable\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <p class=\"error align_error top-80 col-12\"\r\n                            *ngIf=\"(submitted && list.controls[list.controls.controlName.value].hasError('required')) && (submitted || list.controls[list.controls.controlName.value].dirty || list.controls[list.controls.controlName.value].touched)\">\r\n                            Field is required\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- use later if you want additional fileds like dropdown input upload table etc... -->\r\n\r\n<!-- <div *ngSwitchCase=\"'0'\">\r\n                               <div *ngIf=\"list.controls.ques_text.value\" class=\"mb-3\">\r\n                                  <h5 class=\"ques_header m-0\">\r\n                                      <span class=\"inMandatory\">{{list.controls.ques_text.value}}</span>\r\n                                  </h5>\r\n                              </div> \r\n                              <div *ngIf=\"list.controls[list.controls.controlName.value].value=='others'\">\r\n                                  <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                      <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                          formArrName=\"dynamicFormControl\" [list]=\"list['controls'].subquesList.value\"\r\n                                          [submitted]=\"submitted\"></app-dynamic-form>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'2'\">\r\n                              <div>\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                                  QuestType 2\r\n                                  <div *ngIf=\"list.controls.ques_type.value==2\">\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list.controls[list.controls.controlName.value].hasError('pattern')\">\r\n                                          Numbers Only allowed\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'3'\">\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                                  <div *ngIf=\"list.controls.ques_type.value==3\">\r\n\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list.controls[list.controls.controlName.value].hasError('pattern')\">\r\n                                          String Only allowed\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'4'\">\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                              </div>\r\n                          </div>\r\n                          \r\n                          <div *ngSwitchCase=\"'8'\">\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\"\r\n                                      tooltipPosition=\"bottom\">\r\n                                  <div *ngIf=\"list.controls.ques_type.value==8\">\r\n\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list.controls[list.controls.controlName.value].hasError('pattern') && list.controls[list.controls.controlName.value].touched\">\r\n                                          Enter Valid Lan Number\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'9'\">\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                                  <div *ngIf=\"list.controls.ques_type.value==9\">\r\n\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"(list.controls[list.controls.controlName.value].hasError('pattern') && list.controls[list.controls.controlName.value].touched)\">\r\n                                          Enter Valid Mobile Number\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'10'\">\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\"\r\n                                      tooltipPosition=\"bottom\">\r\n                                  <div *ngIf=\"list.controls.ques_type.value==10\">\r\n\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list.controls[list.controls.controlName.value].hasError('email') && list.controls[list.controls.controlName.value].touched\">\r\n                                          Enter Valid Email\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'11'\">\r\n                              <div class=\"mt-2\">\r\n                                  <h6 class=\"mb-3\">From: {{list.controls.value.value[0] + ' to ' +\r\n                                      list.controls.value.value[1]}}</h6>\r\n                                   <p-slider formControlName=\"{{list.controls.controlName.value}}\" [range]=\"true\"\r\n                                      [min]=\"1\" [max]=\"12\"></p-slider> \r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'12'\">\r\n                              <div>\r\n                                  <div class=\"d-flex gap-3\">\r\n                                      <p-inputSwitch formControlName=\"{{list.controls.controlName.value}}\">\r\n                                      </p-inputSwitch>\r\n                                      <div>{{list.controls[list.controls.controlName.value].value ? \"Yes\":\"No\"}}</div>\r\n                                  </div>\r\n                                   ============Sub question================ \r\n                                      <div class=\"mt-4\"\r\n                                          *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                          <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                              <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                  formArrName=\"dynamicFormControl\"\r\n                                                  [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                              </app-dynamic-form>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div\r\n                                          *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                          {{removeSubQues(list)}}\r\n                                      </div>\r\n\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'13'\">\r\n                              <div class=\"mt-2\">\r\n                                <ion-item class=\"inputType1\" lines=\"none\">\r\n                                    <ion-input class=\"input-box\" formControlName=\"{{list.controls.controlName.value}}\">\r\n                                    </ion-input>\r\n                                  </ion-item>\r\n                                   <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\"\r\n                                      pTooltip=\"{{list.controls.notes.value}}\" tooltipPosition=\"bottom\"> \r\n                                  <div *ngIf=\"list.controls.ques_type.value==13\">\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"(list.controls[list.controls.controlName.value].hasError('pattern') && list.controls[list.controls.controlName.value].touched) || (submitted && list.controls[list.controls.controlName.value].hasError('pattern'))\">\r\n                                          {{list.controls.emsg.value}}\r\n                                      </small>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'14'\">\r\n                              <app-dynamic-table [table]=\"list.controls[list.controls.controlName.value].value\"\r\n                                  [formGrp]=\"formArrayList\" index=\"{{i}}\" formArrName=\"dynamicFormControl\"\r\n                                  [submitted]=\"submitted\">\r\n                              </app-dynamic-table>\r\n\r\n                              <h6 class=\"mt-3 tb-footer-note\">\r\n                                  <span class=\"\">{{list.controls.table_footer_text.value}} Academic Year\r\n                                      ({{previousYear}}-{{currentYear}})</span>\r\n                              </h6>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'15'\">\r\n                              <div class=\"mt-2\">\r\n                                   <input class=\"border-0 rounded-0 p-2 d-block col-12\" type=\"text\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\" disabled> \r\n\r\n                                      <ion-item class=\"inputType1\" lines=\"none\"> \r\n                                        <ion-input class=\"input-box\"  formControlName=\"{{list.controls.controlName.value}}\">\r\n                                        </ion-input>\r\n                                      </ion-item>\r\n                              </div> \r\n                          </div>\r\n                          <div *ngSwitchCase=\"'16'\">\r\n                              <div>\r\n                                   <p-dropdown appendTo=\"body\" class=\"\" [options]=\"list.controls.ques_option.value\"\r\n                                      placeholder=\"Please select Value\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\"\r\n                                      >\r\n                                  </p-dropdown> \r\n                              </div>\r\n                          </div>\r\n                          <div *ngSwitchCase=\"'17'\">\r\n                              <app-dynamic-table [table]=\"list.controls[list.controls.controlName.value].value\"\r\n                                  [formGrp]=\"formArrayList\" index=\"{{i}}\" formArrName=\"dynamicFormControl\"\r\n                                  [submitted]=\"submitted\">\r\n                              </app-dynamic-table>\r\n\r\n                               <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\" formArrName=\"dynamicFormControl\"\r\n                              [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\"></app-dynamic-form> \r\n\r\n                          </div>\r\n                           ============Drop down with functionality================ \r\n                          <div *ngSwitchCase=\"'18'\">\r\n                              <div>\r\n                                   <p-dropdown appendTo=\"body\" class=\"\" [options]=\"list.controls.ques_option.value\"\r\n                                      (onChange)=\"teachDTchange($event)\" placeholder=\"Please select Value\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\" optionLabel=\"Name\">\r\n                                  </p-dropdown> \r\n                                  <h6 class=\"mt-2 tb-footer-note\"\r\n                                      *ngIf=\"!(list.controls[list.controls.controlName.value].value)\">Please select a\r\n                                      Teacher then fill the form</h6>\r\n                              </div>\r\n                              <div class=\"mt-2\" *ngIf=\"list.controls.controlName.value== 'teacher_details_partA'\">\r\n                                  <div>\r\n                                      <div\r\n                                          *ngIf=\"teacherTable && list.controls[list.controls.controlName.value].value\">\r\n                                          <app-dynamic-form [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                              formArrName=\"dynamicFormControl\"\r\n                                              [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                          </app-dynamic-form>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div> -->");

/***/ }),

/***/ 27225:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dynamic-form-table/dynamic-health-form-mode/dynamic-health-form-mode.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"parentform\" class=\"dynamic_form\">\r\n  <div formArrayName=\"dynamicFormArray\">\r\n      <div class=\"\" *ngIf=\"formArrayList\">\r\n          <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n              <div id=\"dynamicQ{{i}}\" *ngIf=\"list.controls.hidden.value!=1\">\r\n                  <div class=\"position-relative pb-4\" [ngSwitch]=\"list.controls.ques_type.value\"\r\n                      formGroupName=\"{{i}}\">\r\n                      <div class=\"info\" *ngIf=\"list.controls.info.value\">\r\n                          <div *ngIf=\"list.controls.infoType.value==1 && list.controls.info.value\">\r\n                              <p *ngFor=\"let val of list.controls.info.value\">\r\n                                  {{val}}\r\n                              </p>\r\n                          </div> \r\n                          <div *ngIf=\"list.controls.infoType.value==3\" class=\"text-center\">\r\n                              <img src=\"{{list.controls.info.value}}\" alt=\"img\">\r\n                              <!-- onerror=\"this.src='/assets/images/notfound.png';\" -->\r\n                          </div>\r\n                      </div>\r\n                      <div>\r\n                          <!--========label============== -->\r\n                          <div *ngSwitchCase=\"'0'\" [class.mt-3]=\"showLabel(list['controls'].subques.value)\" [class.cusSec]=\"showLabel(list['controls'].subques.value)\">\r\n                              <div *ngIf=\"list.controls.ques_text.value && showLabel(list['controls'].subques.value)\">\r\n                                  <h6 class=\"text-center\">\r\n                                      {{list.controls.ques_text.value}}\r\n                                  </h6>\r\n                              </div>\r\n                              <!-- ============Sub question================  -->\r\n                              <div *ngIf=\"list['controls'].subquesLength.value>0 && list['controls'].subquesList.value\"\r\n                                  class=\"mt-3\">\r\n                                  <app-dynamic-health-form-mode [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                      formArrName=\"dynamicFormControl\" [list]=\"list['controls'].subquesList.value\"\r\n                                      [submitted]=\"submitted\">\r\n                                  </app-dynamic-health-form-mode>\r\n                              </div>\r\n                          </div>\r\n                          <!-- =======radio=========== -->\r\n                          <div *ngSwitchCase=\"'1'\" class=\"p-lr-15\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"m-0 text-dark\">\r\n                                          {{i+1}} . <span\r\n                                              *ngIf=\"list.controls.ques_text.value\">{{list.controls.ques_text.value}}</span>\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div>\r\n                                  <ion-radio-group formControlName=\"{{list.controls.controlName.value}}\"\r\n                                      class=\"d-flex flex-warp gap-3\" (ionChange)=\"onChange($event,i,list,formArrayList.controls)\">\r\n                                      <!-- <ion-item>\r\n                                          <div *ngFor=\"let item of list.controls.ques_option.value\" class=\"d-flex align-items-center col-6 flex-warp\">\r\n                                              <ion-radio class=\"radio-btn\" value=\"{{item.id}}\"></ion-radio>\r\n                                              <div  class=\"radio\"> \r\n                                                 {{item.value}}\r\n                                             </div>\r\n                                          </div>\r\n                                      </ion-item> -->\r\n                                      <ion-item *ngFor=\"let item of list.controls.ques_option.value\" lines=\"none\">\r\n                                          <ion-radio disabled=\"true\" value=\"{{item.id}}\" class=\"mr-15p opacity1\"></ion-radio>\r\n                                          {{item.value}}\r\n                                      </ion-item> \r\n                                  </ion-radio-group>\r\n                              </div>\r\n                              <!-- ============Sub question================  -->\r\n                              <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                  <div class=\"mt-3\"\r\n                                      *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                      <h6 *ngIf=\"list['controls'].sub_heading.value\">\r\n                                          <b>{{list['controls'].sub_heading.value}}</b>\r\n                                      </h6>\r\n                                      <div>\r\n                                          <app-dynamic-health-form-mode [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                              formArrName=\"dynamicFormControl\"\r\n                                              [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                          </app-dynamic-health-form-mode>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div\r\n                                      *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                      {{removeSubQues(list)}}\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <!-- =========text box============= -->\r\n                          <div *ngSwitchCase=\"'2'\" class=\"p-lr-15\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"m-0\">\r\n                                          {{i+1}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"mt-2\">\r\n                                  <input class=\"mt-2 customInput p-3 col-12\" type=\"text\" [readonly]=\"list.controls.disable.value==1\"\r\n                                      (keyup)=\"onChange($event,i,list,formArrayList.controls)\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                              </div>\r\n                          </div>\r\n                          <!-- ==========Custom Accordian=============== -->\r\n                          <div *ngSwitchCase=\"'3'\">\r\n                              <ion-card class=\"card customcard\">\r\n                                  <div class=\"content\">\r\n                                      <div class=\"sNoContent\">\r\n                                          <div class=\"ques-id\">\r\n                                              {{(i+1)}}\r\n                                          </div>\r\n                                          <div class=\"ques\">\r\n                                              <h6 class=\"m0\">{{list.controls.ques_text.value}}</h6>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"check\">\r\n                                          <ion-icon class=\"plusMinus\"\r\n                                              *ngIf=\"!list.controls[list.controls.controlName.value].value\"\r\n                                              name=\"add-outline\"\r\n                                              (click)=\"setFormValidation(list,true,i, formArrayList.controls);\">\r\n                                          </ion-icon>\r\n                                          <ion-icon class=\"plusMinus\"\r\n                                              *ngIf=\"list.controls[list.controls.controlName.value].value\"\r\n                                              name=\"remove-outline\"\r\n                                              (click)=\"setFormValidation(list,false,i, formArrayList.controls);\">\r\n                                          </ion-icon>\r\n                                          <input class=\"d-none\" type=\"checkbox\" value=\"1\"\r\n                                              name=\"{{list.controls.controlName.value}}\"\r\n                                              formControlName=\"{{list.controls.controlName.value}}\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <!-- ============Sub question================  -->\r\n                                  <div class=\"col-12\" class=\"content\">\r\n                                      <!-- [hidden]=\"!(showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value))\"  -->\r\n                                      <div class=\"mt-2 col-12\"\r\n                                          [hidden]=\"!(showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value))\">\r\n                                          <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                              <app-dynamic-health-form-mode [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                  formArrName=\"dynamicFormControl\"\r\n                                                  [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                              </app-dynamic-health-form-mode>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </ion-card>\r\n                          </div>\r\n                          <!--========dropdown============== -->\r\n                          <div *ngSwitchCase=\"'5'\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"ques_header m-0\">\r\n                                          {{i+1}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div>\r\n                                  <ion-list class=\"main-list mt-8p\">\r\n                                      <ion-item class=\"main-item\">\r\n                                          <ion-select class=\"main-select\" placeholder=\"Select one\" [disabled]=\"list.controls.disable.value==1\"\r\n                                              formControlName=\"{{list.controls.controlName.value}}\">\r\n                                              <ion-select-option *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                  [value]=\"item.id\">\r\n                                                  {{ item.value }}\r\n                                              </ion-select-option>\r\n                                          </ion-select>\r\n                                      </ion-item>\r\n                                  </ion-list>\r\n                              </div>\r\n                              <!-- ============Sub question================ -->\r\n                              <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                  <div class=\"mt-2\" *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                      <div class=\"mt-2 p-5p\"\r\n                                          *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                          <div>\r\n                                              <app-dynamic-health-form-mode [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                  formArrName=\"dynamicFormControl\"\r\n                                                  [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                              </app-dynamic-health-form-mode>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div\r\n                                          *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                          {{removeSubQues(list)}}\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <!--========multi select============== -->\r\n                          <div *ngSwitchCase=\"'6'\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"ques_header m-0\">\r\n                                          {{i+1}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div>\r\n                                  <!-- <ion-list class=\"main-list mt-8p\">\r\n                                        <ion-item class=\"main-item\">\r\n                                            <ion-select class=\"main-select\" placeholder=\"Select one\" [multiple]=\"true\"\r\n                                                formControlName=\"{{list.controls.controlName.value}}\">\r\n                                                <ion-select-option *ngFor=\"let item of list.controls.ques_option.value\"\r\n                                                    [value]=\"item.id\">\r\n                                                    {{ item.value }}\r\n                                                </ion-select-option>\r\n                                            </ion-select>\r\n                                        </ion-item>\r\n                                    </ion-list> -->\r\n                                  <ionic-selectable class=\"multiSelectCus\" text-wrap placeholder=\"Select\" [disabled]=\"list.controls.disable.value==1\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\" itemValueField=\"id\"\r\n                                      itemTextField=\"value\" [items]=\"list.controls.ques_option.value\"\r\n                                      [isMultiple]=\"true\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                                      closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n                                  </ionic-selectable>\r\n                              </div>\r\n                              <!-- ============Sub question================ -->\r\n                              <!-- <div class=\"mt-2\" *ngIf=\"list.controls[list.controls.controlName.value].value\">\r\n                                    <div class=\"mt-2 p-5p\"\r\n                                        *ngIf=\"showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        <div *ngIf=\"list['controls'].subquesLength.value>0\">\r\n                                            <app-dynamic-health-form-mode [formGrp]=\"formArrayList\" index=\"{{i}}\"\r\n                                                formArrName=\"dynamicFormControl\"\r\n                                                [list]=\"list['controls'].subquesList.value\" [submitted]=\"submitted\">\r\n                                            </app-dynamic-health-form-mode>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div\r\n                                        *ngIf=\"!showSubQuesDropdown(list.controls.expected.value ? list.controls.expected.value:[], list.controls[list.controls.controlName.value].value)\">\r\n                                        {{removeSubQues(list)}}\r\n                                    </div>\r\n                                </div> -->\r\n                          </div>\r\n                          <!-- ==========calender=============== -->\r\n                          <div *ngSwitchCase=\"'4'\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"m-0\">\r\n                                          {{i+1}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"mt-2\">\r\n\r\n                                  <ion-datetime max=\"2040-10-31\" [min]=\"currentYear\" class=\"cusInput\" [readonly]=\"list.controls.disable.value==1\"\r\n                                      displayFormat=\"DD/MM/YYYY\" placeholder=\"Select Date\"\r\n                                      formControlName=\"{{list.controls.controlName.value}}\">\r\n                                  </ion-datetime>\r\n                              </div>\r\n                          </div>\r\n                          <!-- ==========File upload with camera plugin=============== -->\r\n                          <div *ngSwitchCase=\"'7'\" class=\"p-lr-15\">\r\n                              <div>\r\n                                  <div *ngIf=\"list.controls.ques_text.value\">\r\n                                      <h6 class=\"m-0\">\r\n                                          {{i+1}} .\r\n                                          {{list.controls.ques_text.value}}\r\n                                      </h6>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"mt-2\">\r\n                                  <ion-row>\r\n                                      <!-- <ion-col size=\"5\" class=\"text-center\">\r\n                                          <div>\r\n                                              <ion-icon name=\"camera\" class=\"fileIcons\" (click)=\"openCameraOn(list)\"></ion-icon>\r\n                                          </div><br>\r\n                                          <ion-label class=\"text-center\">Camera</ion-label>\r\n                                      </ion-col>\r\n                                      <ion-col size=\"2\" style=\"align-self: center;\">\r\n                                          <div class=\"text-center\">\r\n                                              <p style=\"font-size: 12px;\">(Or)</p>\r\n                                          </div>\r\n                                      </ion-col>\r\n\r\n                                      <ion-col size=\"5\" class=\"text-center\">\r\n                                          <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput d-none\" [readonly]=\"list.controls.disable.value==1\"\r\n                                              (change)=\"onSelectFile($event,list)\" />\r\n                                          <label for=\"file\" class=\"upload-txt\"\r\n                                              style=\"background: rgb(248, 248, 248);\">\r\n                                              <div>\r\n                                                  <ion-icon name=\"folder-outline\" class=\"fileIcons\"></ion-icon>\r\n                                              </div>\r\n                                          </label><br>\r\n                                          <ion-label class=\"text-center\">Gallery</ion-label>\r\n                                      </ion-col> -->\r\n\r\n                                      <ion-col size=\"12\" class=\"text-center\">\r\n                                          <ion-button class=\"btn_lightRed border-0 rounded-0\" *ngIf=\"list.controls[list.controls.controlName.value].value\" (click)=\"viewPic('modal',list.controls[list.controls.controlName.value].value)\">View</ion-button>\r\n                                          <!-- <div>\r\n                                              <img *ngIf=\"list.controls[list.controls.controlName.value].value && imageData\"\r\n                                                  src=\"{{imageData}}\" class=\"img image\" width=\"50%\" height=\"50%\"\r\n                                                  style=\"padding:0;margin:0\">\r\n                                          </div> -->\r\n\r\n                                      </ion-col>\r\n\r\n                                  </ion-row>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n\r\n                      <p class=\"error\"\r\n                          *ngIf=\"(submitted && list.controls[list.controls.controlName.value].hasError('required')) && (submitted || list.controls[list.controls.controlName.value].dirty || list.controls[list.controls.controlName.value].touched)\">\r\n                          Field is required\r\n                      </p>\r\n                      <p class=\"error\" *ngIf=\"list.controls[list.controls.controlName.value].hasError('pattern')\">\r\n                          {{list.controls.emsg.value}}\r\n                      </p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ 27196:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dynamic-form-table/dynamic-table/dynamic-table.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- =====Table======= -->\r\n<div *ngIf=\"content.length>0\">\r\n  <!-- <p-table styleClass=\"p-datatable-gridlines\" [value]=\"content\" *ngIf=\"tabType==1\">\r\n      <ng-template pTemplate=\"header\">\r\n          <tr>\r\n              <th *ngFor=\"let col of header\">\r\n                  {{col.header}}\r\n              </th>\r\n          </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-i=\"rowIndex\">\r\n          <tr>\r\n              <td *ngFor=\"let val of rowData\">\r\n                  <div>{{val.value}}</div>\r\n              </td>\r\n          </tr>\r\n      </ng-template>\r\n  </p-table> -->\r\n\r\n\r\n  <form [formGroup]=\"parentform\" *ngIf=\"tabType==2 || tabType==3  || tabType==4\">\r\n      <div class=\"p-3 tableLabel\" *ngIf=\"tabLabel\" [class.mb-2]=\"tabType==2\">{{tabLabel}}</div>\r\n      <div formArrayName=\"dynamicFormArray\" [class.tableType3]=\"tabType==3 || tabType==4\" class=\"overflow-auto\">\r\n          <div class=\"d-flex justify-content-between\" *ngIf=\"tabType==4\">\r\n              <div *ngFor=\"let col of header1;let i=index\" class=\"tableHeader\" [class.col-1]=\"col.col==1\"\r\n                  [class.col-2]=\"col.col==2\" [class.col-5]=\"col.col==5\" [class.col-4]=\"col.col==4\"\r\n                  [class.col-6]=\"col.col==6\" [class.col-7]=\"col.col==7\" [class.borderR]=\"i==(header1.length-1)\">\r\n                  <b>{{col.header}}</b>\r\n              </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-between\">\r\n              <div *ngFor=\"let col of header;let i=index\" class=\"tableHeader\" [class.col-1]=\"col.col==1\"\r\n                  [class.col-2]=\"col.col==2\" [class.col-3]=\"col.col==3\" [class.col-4]=\"col.col==4\"\r\n                  [class.col-5]=\"col.col==5\" [class.col-6]=\"col.col==6\" [class.col-7]=\"col.col==7\" [class.col-8]=\"col.col==8\"\r\n                  [class.col-9]=\"col.col==9\" [class.col-12]=\"col.col==12\"\r\n                  [class.borderR]=\"i==(header.length-1) || col.col==12\">\r\n                  <div class=\"px-2\">\r\n                      <b>{{col.header}}</b>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div *ngFor=\"let list of formArrayList.controls; let i=index\">\r\n              <div formGroupName=\"{{i}}\">\r\n                  <div class=\"d-flex justify-content-between\" formArrayName=\"subFormArray\">\r\n                      <div [class.mt-3]=\"tabType==2\" class=\"tablecell\"\r\n                          [class.borderR]=\"j==(list.get('subFormArray').controls.length-1)\"\r\n                          [class.borderb]=\"i==(formArrayList.controls.length-1)\"\r\n                          *ngFor=\"let list1 of list.get('subFormArray').controls;let j = index\" formGroupName=\"{{j}}\"\r\n                          [class.col-1]=\"list1.controls.col.value==1\" [class.col-2]=\"list1.controls.col.value==2\"\r\n                          [class.col-3]=\"list1.controls.col.value==3\" [class.col-4]=\"list1.controls.col.value==4\"\r\n                          [class.col-5]=\"list1.controls.col.value==5\" [class.col-6]=\"list1.controls.col.value==6\" [class.col-7]=\"list1.controls.col.value==7\"\r\n                          [class.col-8]=\"list1.controls.col.value==8\" [class.col-9]=\"list1.controls.col.value==9\">\r\n                          <div [ngSwitch]=\"list1.controls.ques_type.value\" class=\"px-2\">\r\n                              <div *ngSwitchCase=\"'0'\">\r\n                                  <h6 *ngIf=\"list1.controls.ques_text.value\">\r\n                                      <span class=\"\">{{list1.controls.ques_text.value}}</span>\r\n                                  </h6>\r\n                              </div>\r\n                              <div *ngSwitchCase=\"'4'\">\r\n                                  <h6 *ngIf=\"list1.controls.ques_text.value\">\r\n                                      <span class=\"inMandatory\">{{list1.controls.ques_text.value}}</span>\r\n                                  </h6>\r\n                                  <div class=\"mt-2\">\r\n                                      <input class=\"border-0 rounded-0 p-2 d-block col-12 td-iborder\" type=\"text\"\r\n                                          placeholder=\"{{list1.controls.ques_text.value}}\"\r\n                                          formControlName=\"{{list1.controls.controlName.value}}\">\r\n                                  </div>\r\n                                  <div>\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                          required\r\n                                      </small> \r\n                                  </div>\r\n                              </div>\r\n                              <div *ngSwitchCase=\"'5'\">\r\n                                  <h6 *ngIf=\"list1.controls.ques_text.value\">\r\n                                      <span class=\"inMandatory\">{{list1.controls.ques_text.value}}</span>\r\n                                  </h6>\r\n                                  <div>\r\n                                      <!-- <p-dropdown [options]=\"list1.controls.ques_option.value\" appendTo=\"body\" placeholder=\"Please select Value\"\r\n                                          formControlName=\"{{list1.controls.controlName.value}}\" optionLabel=\"value\">\r\n                                      </p-dropdown> -->\r\n                                  </div>\r\n                                  <div>\r\n                                      <small class=\"error align_error\"\r\n                                          *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                          required\r\n                                      </small> \r\n                                  </div>\r\n                              </div>\r\n                              <div *ngSwitchCase=\"'13'\">\r\n                                  <div class=\"mt-2\">\r\n                                      <input class=\"border-0 rounded-0 p-2 d-block col-12 td-iborder\" type=\"text\"\r\n                                          formControlName=\"{{list1.controls.controlName.value}}\"\r\n                                          >\r\n                                      <div *ngIf=\"list1.controls.ques_type.value==13\">\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('pattern')\">\r\n                                              {{list1.controls.emsg.value}}\r\n                                          </small> \r\n                                      </div>\r\n                                      <div>\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                              required\r\n                                          </small> \r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div *ngSwitchCase=\"'13.1'\">\r\n                                  <div class=\"mt-2\">\r\n                                      <input class=\"border-0 rounded-0 p-2 d-block col-12 td-iborder\" type=\"text\"\r\n                                          formControlName=\"{{list1.controls.controlName.value}}\"\r\n                                          >\r\n                                      <div *ngIf=\"list1.controls.ques_type.value==13.1\">\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('pattern')\">\r\n                                              {{list1.controls.emsg.value}}\r\n                                          </small> \r\n                                      </div>\r\n                                      <div>\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                              required\r\n                                          </small> \r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n\r\n                              <div *ngSwitchCase=\"'13.2'\">\r\n                                  <div class=\"mt-2\">\r\n                                      <input class=\"border-0 rounded-0 p-2 d-block col-12 td-iborder\" type=\"text\"\r\n                                          formControlName=\"{{list1.controls.controlName.value}}\"\r\n                                           (keyup)=\"autoSum($event, list, j, formArrayList.controls)\">\r\n                                      <div *ngIf=\"list1.controls.ques_type.value==13.2\">\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('pattern')\">\r\n                                              {{list1.controls.emsg.value}}\r\n                                          </small> \r\n                                      </div>\r\n                                      <div>\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                              required\r\n                                          </small> \r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n\r\n                              <div *ngSwitchCase=\"'12'\">\r\n                                  <h6>\r\n                                      <span class=\"\">{{list1.controls.ques_text.value}}</span>\r\n                                  </h6>\r\n                                  <div class=\"mt-3\">\r\n                                      <div class=\"d-flex gap-3 flex-wrap\">\r\n                                          <p-inputSwitch formControlName=\"{{list1.controls.controlName.value}}\" (onChange)=\"fieldEditable($event, list, j)\">\r\n                                          </p-inputSwitch>\r\n                                          <div>{{list1.controls[list1.controls.controlName.value].value ? \"Yes\":\"No\"}}\r\n                                          </div>\r\n                                      </div>\r\n                                      <div>\r\n                                          <small class=\"error align_error\"\r\n                                              *ngIf=\"list1.controls[list1.controls.controlName.value].hasError('required') &&  submitted\">\r\n                                              required\r\n                                          </small> \r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n</div>");

/***/ }),

/***/ 50126:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/disability-screening/disability-screening.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon\r\n        class=\"back-icon\"\r\n        size=\"large\"\r\n        name=\"arrow-back\"\r\n        (click)=\"goBack()\"\r\n      >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"title\">\r\n        <div class=\"page-title\">Screening Questions</div>\r\n        <div class=\"stuName\">{{ studentName }}</div>\r\n      </div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-card class=\"card-align ion-card-margin\"> -->\r\n  <div class=\"staffList_Content bg_lightBlue mt-3\">\r\n    <div class=\"container\">\r\n      <form [formGroup]=\"formGroupList\">\r\n        <div formArrayName=\"formGroupPages\">\r\n          <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n            <div formGroupName=\"{{i}}\">\r\n              <div formArrayName=\"grandParentFA\" *ngIf=\"(i+1)==currPage\">\r\n                <app-dynamic-form\r\n                  [list]=\"list['controls'].value.value\"\r\n                  index=\"'0'\"\r\n                  [formGrp]=\"list\"\r\n                  formArrName=\"grandParentFA\"\r\n                  [submitted]=\"issubmitted\"\r\n                  (childDom)=\"callFromChildDom($event)\"\r\n                >\r\n                </app-dynamic-form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"d-flex justify-content-center gap-3\"\r\n          *ngIf=\"formArrayList.controls.length>0\"\r\n        >\r\n          <ion-button\r\n            class=\"btn_lightRed border-0 rounded-0\"\r\n            (click)=\"saveAll(currPage)\"\r\n            >Submit</ion-button\r\n          >\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-card> -->\r\n</ion-content>\r\n<div\r\n  class=\"popup-overlay\"\r\n  *ngIf=\"showDisabilityPopup\"\r\n  (click)=\"$event.stopPropagation()\"\r\n>\r\n  <div class=\"popup-container\">\r\n    <div class=\"popup-content\">\r\n      <div class=\"popup-header\">\r\n        <ion-icon name=\"warning-outline\" class=\"warning-icon\"></ion-icon>\r\n        <span>Disability Verification Required</span>\r\n      </div>\r\n      <div class=\"popup-body\">\r\n        <div class=\"note-box\">\r\n          <div class=\"note-title\">\r\n            <ion-icon name=\"information-circle\" class=\"info-icon\"></ion-icon>\r\n            <strong>NOTE</strong>\r\n          </div>\r\n          <p>\r\n            No disability has been selected for this student. Kindly verify\r\n            whether the student has any disability before proceeding, as the\r\n            student has been marked as a <strong>CWSN student</strong> in the\r\n            student profile. If the student does not have any disability, please\r\n            inform the <strong>School HM</strong> to update the student profile\r\n            in the school login as <strong>\"None\"</strong> to continue.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"popup-footer\">\r\n        <ion-button class=\"close-button\" (click)=\"closeDisabilityPopup()\"\r\n          >Close</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts-es2015.js.map