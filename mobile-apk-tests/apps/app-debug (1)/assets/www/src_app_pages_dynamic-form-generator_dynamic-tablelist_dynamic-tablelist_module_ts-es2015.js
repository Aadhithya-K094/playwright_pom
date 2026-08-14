(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_dynamic-form-generator_dynamic-tablelist_dynamic-tablelist_module_ts"],{

/***/ 22492:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-tablelist/dyanamicsearchpipe.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAllPipe": function() { return /* binding */ SearchAllPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let SearchAllPipe = class SearchAllPipe {
    transform(value, args) {
        debugger;
        if (!args) {
            return value;
        }
        return value.filter((value) => {
            let isIn = false;
            for (let key in value) {
                let text = value[key].val;
                if (text) {
                    if (text.toString().toLowerCase().match(args.toString().toLowerCase())) {
                        isIn = true;
                        break;
                    }
                }
            }
            return isIn;
        });
    }
};
SearchAllPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchall'
    })
], SearchAllPipe);



/***/ }),

/***/ 79217:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-tablelist/dynamic-tablelist-routing.module.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTablelistPageRoutingModule": function() { return /* binding */ DynamicTablelistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dynamic_tablelist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-tablelist.page */ 20723);




const routes = [
    {
        path: '',
        component: _dynamic_tablelist_page__WEBPACK_IMPORTED_MODULE_0__.DynamicTablelistPage
    }
];
let DynamicTablelistPageRoutingModule = class DynamicTablelistPageRoutingModule {
};
DynamicTablelistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicTablelistPageRoutingModule);



/***/ }),

/***/ 99464:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-tablelist/dynamic-tablelist.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTablelistPageModule": function() { return /* binding */ DynamicTablelistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dynamic_tablelist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-tablelist-routing.module */ 79217);
/* harmony import */ var _dynamic_tablelist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-tablelist.page */ 20723);
/* harmony import */ var _dyanamicsearchpipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dyanamicsearchpipe */ 22492);








let DynamicTablelistPageModule = class DynamicTablelistPageModule {
};
DynamicTablelistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dynamic_tablelist_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicTablelistPageRoutingModule
        ],
        declarations: [_dynamic_tablelist_page__WEBPACK_IMPORTED_MODULE_1__.DynamicTablelistPage, _dyanamicsearchpipe__WEBPACK_IMPORTED_MODULE_2__.SearchAllPipe],
        exports: [_dyanamicsearchpipe__WEBPACK_IMPORTED_MODULE_2__.SearchAllPipe]
    })
], DynamicTablelistPageModule);



/***/ }),

/***/ 20723:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-tablelist/dynamic-tablelist.page.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTablelistPage": function() { return /* binding */ DynamicTablelistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dynamic_tablelist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-tablelist.page.html */ 27111);
/* harmony import */ var _dynamic_tablelist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-tablelist.page.scss */ 34016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dynamicform.service */ 42966);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);



//realtime code declare with temporary comment adhoc code placed in temporary below








let DynamicTablelistPage = class DynamicTablelistPage {
    constructor(router, dynamicFromService, toast, ionicstorage, route, usersessionService, alertService) {
        this.router = router;
        this.dynamicFromService = dynamicFromService;
        this.toast = toast;
        this.ionicstorage = ionicstorage;
        this.route = route;
        this.usersessionService = usersessionService;
        this.alertService = alertService;
        this.onActive = false;
        this.tablistJson = [];
        this.keyArray = [];
        this.newArray = [];
        this.searchBar = false;
        this.inputData = '';
        this.naviBackUrl = '';
        this.username = this.usersessionService.emis_username();
        console.log(this.username, 'this.username');
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.initialFun();
        });
    }
    ionViewWillEnter() { }
    initialFun() {
        console.log('🚀 ionViewWillEnter triggered');
        this.tablistJson = [];
        this.keyArray = [];
        this.newArray = [];
        // this.formId = this.route.snapshot.queryParamMap.get("Id");
        this.formId = this.route.snapshot.queryParamMap.get("formId");
        this.param1 = this.route.snapshot.queryParamMap.get("param1");
        this.param2 = this.route.snapshot.queryParamMap.get("param2");
        this.naviBackUrl = this.route.snapshot.queryParamMap.get("naviBackUrl");
        this.ionicstorage.insertData_Replace('qryfromId', this.formId);
        this.secLength = this.route.snapshot.queryParamMap.get("secLength");
        this.ionicstorage.getData('dbPk').then((dataa) => {
            this.dbPk = dataa;
            console.log(this.dbPk, 'this.dbPk');
        }, (error) => console.error(error));
        this.ionicstorage.getData('dbPkList').then((dataa) => {
            if (dataa != null || dataa != undefined) {
                this.dbPkList = dataa;
                console.log(this.dbPkList, 'this.dbPkList');
            }
            else {
                this.dbPkList = [];
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('qryfromId').then((dataa) => {
            if (dataa != null && dataa != undefined) {
                this.formId = dataa;
            }
            else {
                this.formId = this.route.snapshot.queryParamMap.get("formId");
                this.ionicstorage.insertData_Replace('qryfromId', this.formId);
            }
            if (this.secLength == '0') {
                this.urlGetApi();
            }
            else {
                this.urlGetApi();
            }
        }, (error) => console.error(error));
    }
    //169 for DIPE Inspection
    //187 for Bala Painting
    urlGetApi() {
        debugger;
        this.dynamicFromService.jsonFetch(this.formId).subscribe(//197
        (res) => {
            var _a, _b, _c, _d, _e, _f;
            try {
                if (res.status == 200 && res.dataStatus == true) {
                    this.ionicstorage.insertData_Replace('apiJson', JSON.stringify(res.url));
                    this.apiUrlDtls = res.url;
                    console.log(this.apiUrlDtls, 'this.apiUrlDtls');
                    // let conCol:any = '';
                    // if(res.url?.condition_col) {
                    //   conCol = JSON.parse(res.url?.condition_col);
                    // }
                    this.conditionalColumn = ((_a = res.url) === null || _a === void 0 ? void 0 : _a.condition_col) ? (_b = res.url) === null || _b === void 0 ? void 0 : _b.condition_col.split(',') : '';
                    this.hide_parameters = (_d = (_c = res.url) === null || _c === void 0 ? void 0 : _c.hide_parameters) === null || _d === void 0 ? void 0 : _d.split(',');
                    this.completeStatus = JSON.parse((_e = res.url) === null || _e === void 0 ? void 0 : _e.completed);
                    this.dbpkkey = (_f = res.url) === null || _f === void 0 ? void 0 : _f.db_pk;
                    console.log(this.completeStatus, 'this.completeStatus');
                    if (this.apiUrlDtls.dataset == 'JSON') {
                        const modifiedUrl = res.url.list_url.replace('{user_id}', this.username);
                        this.fetchJson(modifiedUrl);
                    }
                    else {
                        this.fetchFromApi(res.url);
                    }
                }
                else {
                    throw res.message;
                }
            }
            catch (err) {
                this.toast.presentToast(err, 'error');
            }
        }, (error) => {
            this.toast.presentToast(error === null || error === void 0 ? void 0 : error.message, 'error');
        });
    }
    fetchFromApi(details) {
        let obj = {
            "records": {
                "form_id": details.id,
                "db_pk": this.dbpkkey,
                "param1": this.param1,
                "param2": this.param2,
                "emis_username": this.usersessionService.emis_username()
            }
        };
        this.dynamicFromService.get_data_set(obj).subscribe((res => {
            if (res.dataStatus) {
                this.formDetailsParse(res.result);
            }
            else {
                this.alertService.warning(res.message);
            }
        }), error => {
            this.alertService.warning(error);
        });
    }
    fetchJson(url) {
        // fetch('/assets/student_list.json').then(res => res.json()).then(res => {
        //   this.tablistJson = res;
        //   this.convertkeyJson(this.tablistJson);
        // });
        fetch(url).then(res => res.json()).then(res => {
            debugger;
            this.formDetailsParse(res);
        });
    }
    formDetailsParse(res) {
        this.tablistJson = res;
        console.log(this.tablistJson, 'this.tablistJson');
        for (let i = 0; i < this.tablistJson.length; i++) {
            this.tablistJson[i].form_status = 'Not Completed';
            for (let j = 0; j < this.completeStatus.length; j++) {
                // if(this.tablistJson[i].id == this.completeStatus[j]){
                // if(this.tablistJson[i].school_id == this.completeStatus[j]){
                //   this.tablistJson[i].form_status = 'Completed';
                // }
                // if(this.completeStatus.includes(this.tablistJson[i].school_id)){//temporary
                if (this.completeStatus.includes(this.tablistJson[i][this.dbpkkey])) {
                    this.tablistJson[i].form_status = 'Completed';
                }
                else if (this.tablistJson[i][this.dbpkkey] == this.dbPk || this.dbPkList.includes(this.tablistJson[i][this.apiUrlDtls.db_pk])) {
                    this.tablistJson[i].form_status = 'D';
                }
                else {
                    this.tablistJson[i].form_status = 'Not Completed';
                }
            }
        }
        // this.hideColumns(this.tablistJson, this.hide_parameters);
        // this.convertkeyJson(this.tablistJson);
        // this.tablistJson.sort(( a, b ) => {
        //   return a.form_status > b.form_status ? 1 : -1;
        // });
        console.log(this.tablistJson, 'this.tablistJson');
        this.newArray = [];
        this.getScrollJson(this.tablistJson);
    }
    getScrollJson(data) {
        debugger;
        let count = this.newArray.length;
        let lenthCount = count + 10;
        let twentyData = data.slice(count, lenthCount);
        console.log(twentyData, 'twentyData');
        this.hideColumns(twentyData, this.hide_parameters);
        // this.convertkeyJson(twentyData);
    }
    // convertkeyJson(data){
    //   this.keyArray = [];
    //   for(let i = 0; i < data.length; i++){
    //     Object.entries(data[i]).forEach(([key, value]) => {
    //       if (typeof this.keyArray[i] === 'undefined') { this.keyArray[i] = new Array(); }
    //       let keyName = key.split('_').join(' ');
    //       let camelCase = this.camalize(keyName);
    //       this.keyArray[i].push({
    //         'key':camelCase,
    //         'val': value 
    //       })
    //     });
    //   }
    //   console.log(this.keyArray,'arrObj');
    // }
    convertkeyJson(data) {
        debugger;
        this.keyArray = [];
        let count = this.keyArray.length;
        new Promise((resolve, reject) => {
            for (let i = 0; i < data.length; i++) {
                let forData = data[i];
                for (const key in forData) {
                    if (typeof this.keyArray[i] === 'undefined') {
                        this.keyArray[i] = new Array();
                    }
                    let keyName = key.split('_').join(' ');
                    this.keyArray[i].push({
                        'key': keyName,
                        'val': forData[key]
                    });
                    let sdfsdf = this.keyArray[i].map(v => v.val);
                    if ((sdfsdf).includes(this.dbPk)) {
                        this.keyArray[i]['dbpk'] = 1;
                    }
                    else {
                        this.keyArray[i]['dbpk'] = 0;
                    }
                }
                // Object.entries(data[i]).forEach(([key, value], idx) => {
                //   if (typeof this.keyArray[i] === 'undefined') { this.keyArray[i] = new Array(); }
                //   let keyName = key.split('_').join(' ');
                //   this.keyArray[i].push({
                //     'key':keyName,
                //     'val': value 
                //   })
                // });
            }
            return resolve();
        }).then(() => {
            // this.newArray.push([...this.keyArray])
            this.keyArray.forEach(e => {
                this.newArray.push(e);
            });
            for (let i = 0; i < this.newArray.length; i++) {
                this.handleClick(this.newArray[i]);
            }
            console.log(this.keyArray, 'this.keyArray');
            console.log(this.newArray, 'this.newArray');
        });
    }
    // camalize(str) {
    //   return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    // }
    onExpand(id) {
        if (id) {
            this.onActive = !this.onActive;
            this.idItem = id != null ? id : null;
        }
        else {
            this.onActive = false;
            this.idItem = null;
        }
    }
    goToForm(index, jsonval) {
        var _a;
        debugger;
        console.log(JSON.stringify(jsonval), 'jsonval');
        console.log(index, 'index');
        let objectVal = {};
        let con = this.conditionalColumn;
        // con = con.split(',')
        console.log(con, 'consconc');
        if (con.length > 0) {
            Object.entries(this.tablistJson[index]).forEach(([key, value]) => {
                for (let j = 0; j < con.length; j++) {
                    if (key == con[j]) {
                        objectVal[key] = value;
                    }
                }
            });
        }
        this.primaryKey = this.tablistJson[index][this.apiUrlDtls.db_pk];
        if (!this.dbPkList.includes(this.tablistJson[index][this.apiUrlDtls.db_pk])) {
            this.dbPkList.push(this.tablistJson[index][this.apiUrlDtls.db_pk]);
        }
        this.ionicstorage.insertData_Replace('fromId', (_a = this.apiUrlDtls) === null || _a === void 0 ? void 0 : _a.id);
        this.ionicstorage.insertData_Replace('dbPk', this.primaryKey);
        this.ionicstorage.insertData_Replace('dbPkList', this.dbPkList);
        this.ionicstorage.insertData_Replace('conCol', JSON.stringify(objectVal));
        this.router.navigate(['/tabs/dynamic-index'], {
            queryParams: {
                formId: this.formId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl
            }
        });
    }
    getUdiSchl(val) {
        if (val == 1) {
            this.searchBar = true;
        }
        else {
            if (this.inputData != '') {
                this.newArray = [];
                this.searchBar = false;
                console.log(this.inputData, 'inputData');
                let fltrData = this.tablistJson.filter(v => v.udise_code == this.inputData);
                console.log(fltrData);
                this.convertkeyJson(fltrData);
                this.inputData = '';
            }
            else {
                this.searchBar = false;
            }
        }
    }
    hideColumns(data, columnsToHide) {
        debugger;
        if (columnsToHide) {
            data.forEach(item => {
                columnsToHide.forEach(column => {
                    if (item.hasOwnProperty(column)) {
                        delete item[column];
                    }
                });
            });
        }
        setTimeout(() => {
            this.convertkeyJson(data);
        }, 200);
    }
    handleRefresh(event) {
        this.keyArray = [];
        this.newArray = [];
        setTimeout(() => {
            this.getScrollJson(this.tablistJson);
            event.target.complete();
        }, 1000);
    }
    loadData(event) {
        setTimeout(() => {
            // this.convertkeyJson(this.tablistJson);
            this.getScrollJson(this.tablistJson);
            event.target.complete();
            // if (data.length == 1000) {
            //   event.target.disabled = true;
            // }
        }, 500);
    }
    handleClick(data) {
        var _a;
        debugger;
        // if ((this.apiUrlDtls.form_restriction =='0' && this.getCompletionStatus(data)=='Not Completed') || (this.apiUrlDtls.form_restriction =='0' && this.getCompletionStatus(data)=='Completed') || (this.apiUrlDtls.form_restriction =='1' && this.getCompletionStatus(data)=='Not Completed')) {
        //   if (this.dbPk == undefined) {
        //     this.onExpand(data[0].val);
        //   }
        //   return;
        // }
        // if ((this.apiUrlDtls.form_restriction =='0' && this.getCompletionStatus(data)=='Not Completed') || (this.apiUrlDtls.form_restriction =='0' && this.getCompletionStatus(data)=='Completed') || (this.apiUrlDtls.form_restriction =='1' && this.getCompletionStatus(data)=='Not Completed') || (this.apiUrlDtls.form_restriction =='0' && this.getCompletionStatus(data)=='Pending')) {
        //   if (this.dbPk || this.dbPk == undefined) {
        //     this.onExpand(data[0].val);
        //   }
        // }
        // if ((this.apiUrlDtls.form_restriction =='0' && (this.getCompletionStatus(data)=='Not Completed' || this.getCompletionStatus(data)=='Completed' || this.getCompletionStatus(data)=='Pending')) && (this.dbPk || this.dbPk == undefined)) {
        //   this.onExpand(data[0].val);
        // }
        // else if(this.apiUrlDtls.form_restriction =='1' && (this.getCompletionStatus(data) == 'Not Completed' && this.getCompletionStatus(data) != 'Completed') || this.getCompletionStatus(data) == 'Pending' && (this.dbPk || this.dbPk == undefined)){
        //   this.onExpand(data[0].val);
        // }
        if (((this.apiUrlDtls.form_restriction == '0' || this.apiUrlDtls.form_restriction == null) && (this.getCompletionStatus(data) == 'Not Completed' || this.getCompletionStatus(data) == 'Completed' || this.getCompletionStatus(data) == 'Pending')) && (this.dbPk || this.dbPk == undefined)) {
            this.onExpand(data[0].val);
        }
        else if ((this.apiUrlDtls.form_restriction == '1' || this.apiUrlDtls.form_restriction == null) && (this.getCompletionStatus(data) == 'Not Completed' || (this.getCompletionStatus(data) == 'Completed' && ((_a = this.apiUrlDtls) === null || _a === void 0 ? void 0 : _a.allow_edit) == '1')) || this.getCompletionStatus(data) == 'Pending' && (this.dbPk || this.dbPk == undefined)) {
            this.onExpand(data[0].val);
        }
    }
    // getCompletionStatus(data) {
    //   const formStatusIndex = data.findIndex(item => item.val == "Not Completed");
    //   const formStatusIndexD = data.findIndex(item => item.val == "D");
    //   if (formStatusIndex != -1) {
    //       return "Not Completed";
    //   } 
    //   else if(formStatusIndexD != -1){
    //     return "Pending";
    //   }
    //   else {
    //     return "Completed";
    //   }
    // }
    getCompletionStatus(data) {
        const formStatusIndex = data.findIndex(item => item.val == "Not Completed");
        const formStatusIndexD = data.findIndex(item => item.val == "D");
        if (formStatusIndex != -1) {
            console.log("Not Completed");
            return "Not Completed";
        }
        else if (formStatusIndexD != -1) {
            console.log("Pending");
            return "Pending";
        }
        else {
            console.log("Completed");
            return "Completed";
        }
    }
    navigateBack() {
        if (!this.naviBackUrl) {
            this.router.navigate(['/tabs/home']);
        }
        else {
            this.router.navigate([this.naviBackUrl]);
        }
    }
    ngOnDestroy() {
        console.log('Component destroyed');
    }
};
DynamicTablelistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_2__.DynamicformService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
DynamicTablelistPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll,] }]
};
DynamicTablelistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dynamic-tablelist',
        template: _raw_loader_dynamic_tablelist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_tablelist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicTablelistPage);



/***/ }),

/***/ 34016:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dynamic-form-generator/dynamic-tablelist/dynamic-tablelist.page.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  color: #fff;\n}\n\nion-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar button {\n  background: none;\n  font-size: 20px;\n  color: #fff;\n  width: 100%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.textright {\n  text-align: right;\n  padding: 10px;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background: var(--ion-color-primary);\n  color: white;\n  align-items: center;\n}\n\n.borderstyle.disabled {\n  background: #c2a2d7;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.searchbx {\n  display: flex;\n  align-items: center;\n  padding: 5px 6px;\n  background: #9162b0;\n  position: fixed;\n  top: -100%;\n  left: 0px;\n  right: 0px;\n  z-index: 100;\n  transition: all 0.3s ease-in-out;\n  width: 100%;\n}\n\n.searchbx ion-input {\n  color: #fff;\n  padding-left: 15px !important;\n}\n\n.searchbx button {\n  width: 14%;\n  color: #fff;\n  font-size: 26px;\n  height: 44px;\n  background: #854b9b;\n  border-radius: 10px;\n  padding-top: 6px;\n}\n\n.searchbx.show {\n  top: 0px;\n}\n\n.alert {\n  width: 94%;\n  margin: 10px auto 5px;\n  border-radius: 10px;\n  background: #feeec2;\n  color: #b98c00;\n  position: sticky;\n  top: 5px;\n  z-index: 1;\n  border: 1px solid rgba(255, 196, 9, 0.5);\n}\n\n.alert p {\n  margin: 0px;\n}\n\n.row-line ion-row ion-col ion-label {\n  display: block;\n}\n\n.row-line ion-row ion-col .status {\n  text-align: center;\n  border-radius: 30px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 10px 3px;\n  margin-top: 3px;\n  display: inline-block;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.dtls-bx {\n  padding-top: 0px;\n}\n\n.dtls-bx ion-card {\n  box-shadow: none;\n  margin-top: 0px;\n}\n\n.dtls-bx ion-card ion-card-content {\n  background: #EDDEFF;\n  border-radius: 12px;\n}\n\n.dtls-bx ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #dcbfef;\n}\n\n.dtls-bx ion-card ion-card-content ion-row ion-col {\n  font-size: 15px;\n  color: #555;\n}\n\n.dtls-bx ion-card ion-card-content ion-row ion-col:first-child {\n  color: #542374;\n  font-weight: 600;\n}\n\n.dtls-bx ion-card ion-card-content ion-button {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  margin-top: 15px;\n}\n\n.dtls-bx ion-card ion-card-content ion-button span {\n  color: #fff;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtdGFibGVsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLG1CQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBQUdSOztBQURJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdSOztBQURJO0VBQ0ksUUFBQTtBQUdSOztBQUFBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFHSjs7QUFGSTtFQUNJLFdBQUE7QUFJUjs7QUFFWTtFQUNJLGNBQUE7QUFDaEI7O0FBQ1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBQ2hCOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUNRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUNaOztBQUFZO0VBQ0ksZ0NBQUE7QUFFaEI7O0FBRGdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFHcEI7O0FBRm9CO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSXhCOztBQUFZO0VBQ0ksNENBQUE7RUFDQSxnQkFBQTtBQUVoQjs7QUFEZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHcEIiLCJmaWxlIjoiZHluYW1pYy10YWJsZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbi50ZXh0cmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXJzdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmLmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjMmEyZDc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2VhcmNoYnh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE2MmIwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4NTRiOWI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcbi5hbGVydHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZWVjMjtcclxuICAgIGNvbG9yOiAjYjk4YzAwO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDE5NiwgOSwgMC41MCk7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG59XHJcbi5yb3ctbGluZXtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0YXR1c3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsMCwwLDAuMjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kdGxzLWJ4e1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFRERFRkY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjYmZlZjtcclxuICAgICAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQyMzc0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMTApO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 27111:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-form-generator/dynamic-tablelist/dynamic-tablelist.page.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons class=\"back-icon\">\r\n        <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n      </ion-buttons>\r\n      <!-- <ion-back-button (click)=\"navigateBack()\"></ion-back-button> -->\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <ion-title>Form Registration</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <button (click)=\"getUdiSchl(1)\">\r\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div class=\"searchbx\" [ngClass]=\"searchBar == true ? 'show' : ''\">\r\n      <ion-input placeholder=\"Search\" type=\"number\" [(ngModel)]=\"inputData\"></ion-input>\r\n      <!-- <button (click)=\"getUdiSchl(2)\"><ion-icon name=\"search\"></ion-icon></button> -->\r\n      <button (click)=\"searchBar=false;inputData=''\"><ion-icon name=\"close\"></ion-icon></button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"alert mb-2\" *ngIf=\"dbPk && this.apiUrlDtls.form_restriction =='1'\">\r\n    <p>Complete pending list then goto next...!</p>\r\n  </div>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"row-line\">\r\n      <ion-row *ngIf=\"newArray.length>0\" class=\"borderstyle\" >\r\n        <ion-col size=\"1.5\">\r\n          <ion-label class=\"headlabel\" style=\"text-transform: capitalize;\">SNo</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3.5\">\r\n          <ion-label class=\"headlabel\" style=\"text-transform: capitalize;\">{{newArray[0][2].key}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-label class=\"headlabel\" style=\"text-transform: capitalize;\">{{newArray[0][3].key}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"headlabel\" style=\"text-transform: capitalize\">Form Status</ion-label><!--{{data[9].key}}-->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"mt-1\" *ngFor=\"let data of newArray | searchall:inputData;; let i = index;\">\r\n    <!-- <ion-row>\r\n      <ion-col size=\"3.5\" class=\"padding\">\r\n        <ion-label class=\"headlabel\" style=\"text-transform: capitalize;\">{{data[2].key}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3.5\">\r\n        <ion-label class=\"headlabel\" style=\"text-transform: capitalize;\">{{data[3].key}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <!-- <ion-col size=\"12\" class=\"row-line\" (click)=\"(data[9].val == 'Completed' && apiUrlDtls.form_restriction == 1) ? null : (dbPk == undefined) ? onExpand(data[0].val) : null\">(click)=\"data[4].val == 'Completed' ? null : dbPk == undefined ? onExpand(data[0].val) : data[i].val !== dbPk ? null : onExpand(data[0].val)\" -->\r\n        <ion-col size=\"12\" class=\"row-line\" (click)=\"handleClick(data)\">\r\n        <ion-row class=\"borderstyle\" \r\n        [ngClass]=\"((this.apiUrlDtls.form_restriction =='0' && (this.getCompletionStatus(data)=='Not Completed' || this.getCompletionStatus(data)=='Completed' || this.getCompletionStatus(data)=='Pending')) && (dbPk || dbPk == undefined )) ? '' : (this.apiUrlDtls.form_restriction =='1' && (this.getCompletionStatus(data) == 'Not Completed' && this.getCompletionStatus(data) != 'Completed') || this.getCompletionStatus(data) == 'Pending' && (dbPk || dbPk == undefined)) ? '' : ((this.apiUrlDtls.form_restriction =='1' && apiUrlDtls?.allow_edit == '1') ? '':'disabled')\"><!--[ngClass]=\"data[4].val == 'Completed' ? 'disabled' : dbPk == undefined ? '' : data[i].val !== dbPk ? 'disabled' : '' \"-->\r\n        <ion-col size=\"1.5\">\r\n          <ion-label class=\"headlabel ml-2\">{{i+1}}</ion-label>\r\n        </ion-col> \r\n        <ion-col size=\"3.5\">\r\n            <ion-label class=\"headlabel\">{{data[2].val}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label class=\"headlabel\">{{data[3].val}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-label class=\"headlabel status\" [style.background]=\"getCompletionStatus(data) == 'Completed' ? '#02ad59' : getCompletionStatus(data) == 'Pending' ? '#ff8f00' : '#eb403b'\">{{getCompletionStatus(data)}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"1\" class=\"textright\">\r\n            <ion-icon *ngIf=\"!onActive\" name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n            <ion-icon *ngIf=\"onActive && (data[0].val == idItem)\" name=\"remove\" class=\"expand-label\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"mt-2\">\r\n          <ion-col class=\"dtls-bx\" size=\"12\" *ngIf=\"(onActive && (data[0].val == idItem))\">\r\n            <ion-card>\r\n              <ion-card-content>\r\n                <ion-grid style=\"padding:0px;\">\r\n                  <ion-row *ngFor=\"let keyval of data; let j = index;\">\r\n                    <ng-container *ngIf=\"j != 0 && j != 2 && j != 3 && j != 4\">\r\n                      <ion-col size=\"6\" style=\"text-transform: capitalize;\"> {{keyval.key}} </ion-col>\r\n                      <ion-col size=\"6\" *ngIf=\"keyval.val == 'D'\"> Pending </ion-col>\r\n                      <ion-col size=\"6\" *ngIf=\"keyval.val != 'D'\"> {{keyval.val != null ? keyval.val : '-'}} </ion-col>\r\n                    </ng-container>\r\n                  </ion-row>\r\n                  <div style=\"text-align:center;\">\r\n                    <ion-button (click)=\"goToForm(i, data)\"><span>Go to Form</span>\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-grid>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-infinite-scroll *ngIf=\"newArray.length>0\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dynamic-form-generator_dynamic-tablelist_dynamic-tablelist_module_ts-es2015.js.map