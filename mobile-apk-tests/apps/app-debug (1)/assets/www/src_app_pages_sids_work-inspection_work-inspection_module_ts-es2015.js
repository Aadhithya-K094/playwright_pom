(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_work-inspection_work-inspection_module_ts"],{

/***/ 377:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/work-inspection-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkInspectionPageRoutingModule": function() { return /* binding */ WorkInspectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _work_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-inspection.page */ 41836);




const routes = [
    {
        path: '',
        component: _work_inspection_page__WEBPACK_IMPORTED_MODULE_0__.WorkInspectionPage
    }
];
let WorkInspectionPageRoutingModule = class WorkInspectionPageRoutingModule {
};
WorkInspectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkInspectionPageRoutingModule);



/***/ }),

/***/ 74680:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/work-inspection.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkInspectionPageModule": function() { return /* binding */ WorkInspectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _work_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-inspection-routing.module */ 377);
/* harmony import */ var _work_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-inspection.page */ 41836);







let WorkInspectionPageModule = class WorkInspectionPageModule {
};
WorkInspectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _work_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkInspectionPageRoutingModule
        ],
        declarations: [_work_inspection_page__WEBPACK_IMPORTED_MODULE_1__.WorkInspectionPage]
    })
], WorkInspectionPageModule);



/***/ }),

/***/ 41836:
/*!********************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/work-inspection.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkInspectionPage": function() { return /* binding */ WorkInspectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_work_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./work-inspection.page.html */ 73660);
/* harmony import */ var _work_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-inspection.page.scss */ 62448);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _sids_demolish_build_sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sids-demolish-build/sids-demolish-build.page */ 12748);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);













// import { v4 as uuidv4 } from 'uuid';

let WorkInspectionPage = class WorkInspectionPage {
    constructor(router, http, usersessionService, ionicstorage, location, modalCtrl, alertService, networkService, alertController, SidsService) {
        this.router = router;
        this.http = http;
        this.usersessionService = usersessionService;
        this.ionicstorage = ionicstorage;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.networkService = networkService;
        this.alertController = alertController;
        this.SidsService = SidsService;
        this.inspectionList = [];
        this.dataNotSave = false;
        this.selectVal = '';
        this.user_id = this.usersessionService.emis_username();
        this.emis_usertype = this.usersessionService.emis_usertype();
        this.district_id = this.usersessionService.district_id();
        this.dist_id = this.usersessionService.dist_id();
        this.schoolKeyId = this.usersessionService.school_key_id();
        // this.generatedUuid = uuidv4();
        // this.dublicakt = uuidv4();
        console.log(this.emis_usertype, 'this.district_id');
        console.log(this.schoolKeyId, 'this.schoolKeyId');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.localstoragecheck();
        console.log(this.district_id, 'this.district_id');
        console.log(this.dist_id, 'this.dist_id');
        console.log(this.schoolKeyId, 'this.schoolKeyId');
        this.selectVal = '';
        this.dataNotSave = false;
    }
    ionViewDidEnter() {
        this.mod = this.usersessionService.mod1();
        const index = this.mod.indexOf('20');
        if (0 <= index) {
            this.homeActive = true;
        }
        else {
            this.homeActive = false;
        }
        console.log(this.homeActive, index);
    }
    onBack() {
        // this.location.back();
        if (this.homeActive == true) {
            this.router.navigate(['/tabs/home']);
        }
        if (this.homeActive == false) {
            this.router.navigate(['/tabs/dashboard']);
        }
    }
    localstoragecheck() {
        this.ionicstorage.getData('date').then((dataa1) => {
            this.datecheck = dataa1;
            this.getlocalstorage();
        }, (error) => console.error(error));
        this.ionicstorage.getData('Records').then((data) => {
            if (data && data.length > 0) {
                this.dataNotSave = true;
                let records = { "json": data };
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.SidsService.PostinsWorkForm(records).subscribe((res) => {
                        if (res.dataStatus == true && res.status == 200) {
                            // this.alertService.success("Data Insert Successfully")
                            this.ionicstorage.removeKey('Records');
                            this.dataNotSave = false;
                        }
                    });
                }
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('StageList').then((dataa1) => {
            this.StageList = dataa1;
            this.StageListdrp = dataa1;
            this.StageListdrp.forEach(x => {
                if (x.id == 27 || x.id == 28 || x.id == 29) {
                    x.stage = x.stage + '-' + x.work_desc;
                }
                else if (x.stage == 'Work not started') {
                    x.stage = x.stage + '-' + x.work_desc;
                }
            });
            if (this.emis_usertype == 8) {
                this.StageListdrp = this.StageListdrp.filter(x => x.work_type_id == 3);
            }
            console.log(this.StageList, 'this.StageList');
        }, (error) => console.error(error));
    }
    getlocalstorage() {
        debugger;
        let checkdata = new Date().toISOString().split('T')[0];
        if (checkdata != this.datecheck) {
            this.getJsonData();
        }
        else {
            this.ionicstorage.getData('inspectionData').then((dataas) => {
                if (this.emis_usertype == 8) {
                    // this.inspectionList = dataas.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
                    // this.datasaveList = dataas.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
                    this.inspectionList = dataas.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
                    this.datasaveList = dataas.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
                }
                else {
                    // this.inspectionList = dataas.filter(x => x.cur_stage_name != "Demolition not required");
                    // this.datasaveList = dataas.filter(x => x.cur_stage_name != "Demolition not required");
                    this.inspectionList = dataas;
                    this.datasaveList = dataas;
                }
                this.checkRowEdit();
                console.log(this.inspectionList, 'local call');
            }, (error) => console.error(error));
        }
    }
    // getJsonData() {
    //   // var url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_list_json_"+this.user_id+".json"
    //   // this.http.get<any>(url).subscribe((data) => {
    //   //     var columns  =data.columns
    //   //     var data  = data.data
    //   //     const jsonData = data.map(row => {
    //   //       const obj = {};
    //   //       columns.forEach((column, index) => {
    //   //         obj[column] = row[index]== null  ? "" :  row[index].toString();
    //   //       });
    //   //       return obj;
    //   //     });
    //   //     // Now `jsonData` is an array of objects, each representing a row of data with named properties.
    //   //     this.inspectionList = jsonData
    //   //     this.datasaveList = jsonData
    //   //     this.ionicstorage.insertData_Replace('datasaveList', this.datasaveList)
    //   //     let date = new Date().toISOString().split('T')[0]
    //   //     this.ionicstorage.insertData_Replace('date', date)
    //   // });
    //   let url2 = '';
    //   //production
    //   if(this.emis_usertype == 8){
    //     url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_json_"+this.dist_id+".json"
    //   }
    //   else{
    //     url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_json_"+this.district_id+".json"
    //   }
    //   //stagging
    //   // if(this.emis_usertype == 8){
    //   //   url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.dist_id+".json"
    //   // }
    //   // else{
    //   //   url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.district_id+".json"
    //   // }
    //   // let url2 = "https://d1wpyxz35bzzz4.cloudfront.net/sids_school_status_list_stage_"+this.district_id+".json"
    //   this.http.get<any>(url2).subscribe((data) => {
    //     if(this.emis_usertype == 8){
    //       // this.inspectionList = data.list.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
    //       // this.datasaveList = data.list.filter(x => x.work_type_id == 3 && x.cur_stage_name != "Demolition not required" && x.school_id == this.schoolKeyId);
    //       this.inspectionList = data.list.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
    //       this.datasaveList = data.list.filter(x => x.work_type_id == 3 && x.school_id == this.schoolKeyId);
    //     }
    //     else{
    //       // this.inspectionList = data.list.filter(x => x.cur_stage_name != "Demolition not required");
    //       // this.datasaveList = data.list.filter(x => x.cur_stage_name != "Demolition not required");
    //       this.inspectionList = data.list;
    //       this.datasaveList = data.list;
    //     }
    //     this.checkRowEdit();
    //     // this.inspectionList = data.list
    //     // this.datasaveList  = data.list
    //     console.log(this.inspectionList, 'json call')
    //     this.ionicstorage.insertData_Replace('inspectionData', this.inspectionList)
    //     let date = new Date().toISOString().split('T')[0]
    //     this.ionicstorage.insertData_Replace('date', date)
    //   });
    //   let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master.json"
    //   // let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master_stage.json"
    //   this.http.get<any>(url).subscribe((data) => {
    //     this.StageList = data.stages
    //     console.log(this.StageList, 'this.stageList')
    //     this.ionicstorage.insertData_Replace('StageList', this.StageList)
    //     this.StageListdrp = data.stages
    //     this.StageListdrp.forEach(x => {
    //       if(x.id == 27 || x.id == 28 || x.id == 29){
    //         x.stage = x.stage+'-'+x.work_desc
    //       }
    //       else if(x.stage == 'Work not started'){
    //         x.stage = x.stage+'-'+x.work_desc
    //       }
    //     })
    //     this.StageListdrp.push({
    //       "id":0,
    //       "stage":"All"
    //     })
    //     if(this.emis_usertype == 8){
    //       this.StageListdrp = this.StageListdrp.filter(x => x.work_type_id == 3)
    //     }
    //     console.log(this.StageListdrp, 'this.StageListdrp')
    //   });
    // }
    getJsonData() {
        // var url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_list_json_"+this.user_id+".json"
        // this.http.get<any>(url).subscribe((data) => {
        //     var columns  =data.columns
        //     var data  = data.data
        //     const jsonData = data.map(row => {
        //       const obj = {};
        //       columns.forEach((column, index) => {
        //         obj[column] = row[index]== null  ? "" :  row[index].toString();
        //       });
        //       return obj;
        //     });
        //     // Now `jsonData` is an array of objects, each representing a row of data with named properties.
        //     this.inspectionList = jsonData
        //     this.datasaveList = jsonData
        //     this.ionicstorage.insertData_Replace('datasaveList', this.datasaveList)
        //     let date = new Date().toISOString().split('T')[0]
        //     this.ionicstorage.insertData_Replace('date', date)
        // });
        // Use backend API instead of static CloudFront JSON
        this.SidsService.HMinspection_list(this.user_id).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            const list = (_e = (_d = (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : res === null || res === void 0 ? void 0 : res.list) !== null && _c !== void 0 ? _c : res === null || res === void 0 ? void 0 : res.data) !== null && _d !== void 0 ? _d : res) !== null && _e !== void 0 ? _e : [];
            if (this.emis_usertype == 8) {
                this.inspectionList = list.filter(x => String(x.work_type_id) === '3' && String(x.school_id) === String(this.schoolKeyId));
                this.datasaveList = list.filter(x => String(x.work_type_id) === '3' && String(x.school_id) === String(this.schoolKeyId));
            }
            else {
                this.inspectionList = Array.isArray(list) ? list : [];
                this.datasaveList = Array.isArray(list) ? list : [];
            }
            this.checkRowEdit();
            console.log(this.inspectionList, 'api call');
            this.ionicstorage.insertData_Replace('inspectionData', this.inspectionList);
            let date = new Date().toISOString().split('T')[0];
            this.ionicstorage.insertData_Replace('date', date);
        }, (err) => {
            console.error('HMinspection_list error', err);
        });
        let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master.json";
        // let url = "https://d1wpyxz35bzzz4.cloudfront.net/sids_inspection_stage_master_stage.json"
        this.http.get(url).subscribe((data) => {
            this.StageList = data.stages;
            console.log(this.StageList, 'this.stageList');
            this.ionicstorage.insertData_Replace('StageList', this.StageList);
            this.StageListdrp = data.stages;
            this.StageListdrp.forEach(x => {
                if (x.id == 27 || x.id == 28 || x.id == 29) {
                    x.stage = x.stage + '-' + x.work_desc;
                }
                else if (x.stage == 'Work not started') {
                    x.stage = x.stage + '-' + x.work_desc;
                }
            });
            this.StageListdrp.push({
                "id": 0,
                "stage": "All"
            });
            if (this.emis_usertype == 8) {
                this.StageListdrp = this.StageListdrp.filter(x => x.work_type_id == 3);
            }
            console.log(this.StageListdrp, 'this.StageListdrp');
        });
    }
    getFilterItems(event) {
        console.log(this.selectVal, 'selectVal');
        this.inspectionList = [];
        let sData = event.detail.value.trim();
        console.log(this.inspectionList, 'this.inspectionList');
        if (sData) {
            const searchKeyword = String(sData);
            this.inspectionList = this.datasaveList.filter((item) => this.rowContainsKeyword(item, searchKeyword));
        }
        else {
            this.inspectionList = this.datasaveList;
        }
    }
    rowContainsKeyword(row, keyword) {
        for (const key in row) {
            if (row.hasOwnProperty(key)) {
                const cellValue = String(row[key]);
                if (cellValue.includes(keyword)) {
                    return true;
                }
            }
        }
        return false;
    }
    getfilterstge(event) {
        this.inspectionList = [];
        let sData = event.detail.value;
        debugger;
        if (sData == "0") {
            this.inspectionList = this.datasaveList;
        }
        else if (sData == "") {
            debugger;
            this.inspectionList = this.datasaveList.filter((item) => { return item.cur_stage == ""; });
        }
        else {
            this.inspectionList = this.datasaveList.filter((item) => { return item.cur_stage == sData; });
        }
    }
    gotoStageForm(params) {
        debugger;
        if (params.cur_stage != 21 && params.cur_stage != 11 && params.cur_stage != 16 && params.cur_stage != 26) {
            let checkdata = new Date().toISOString().split('T')[0];
            // if (checkdata != this.datecheck) {
            this.router.navigate(['/tabs/my-inspection-from'], { queryParams: { 'id': 1, 'school_id': params.school_id, 'list_id': params.id, 'curr_stage': params.cur_stage, 'work_type_id': params.work_type_id } });
            // }
        }
        else if (params.cur_stage == 26) {
            this.alertService.error('Please upload the photo for the given status');
        }
        else {
            this.alertPopUp();
        }
    }
    viewTimeline(data) {
        debugger;
        console.log(data);
        this.router.navigate(['/tabs/work-inspection-stage'], { queryParams: { 'school_id': data.school_id, 'list_id': data.id, 'curr_stage': data.cur_stage } });
    }
    alertPopUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
                subHeader: 'Work Completed ',
                // message: `<ul class='offline-popup'>
                //             <li>1. Do Not Log Out</li>
                //             <li>2. Do Not Clear The RAM</li>
                //             <li>3. After Connecting to Internet Please Hit the Save Pending Data Button Below</li>
                //           </ul>`,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: () => { }
                    },
                ],
            });
            yield alert.present();
        });
    }
    addBuilding() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sids_demolish_build_sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_7__.SidsDemolishBuildPage,
            });
            yield modal.present();
            // Wait for the modal to close
            const { data } = yield modal.onWillDismiss();
            // ALWAYS refresh data after modal closes (whether saved or cancelled)
            this.refreshData();
        });
    }
    refreshData() {
        // Clear current data
        this.inspectionList = [];
        // Call your API directly
        this.SidsService.HMinspection_list(this.user_id).subscribe((response) => {
            var _a;
            console.log('Refreshing data after modal close...');
            const rawList = ((_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.list) || [];
            if (this.emis_usertype == 8) {
                this.inspectionList = rawList.filter(item => item.work_type_id === "3" &&
                    item.school_id === this.schoolKeyId);
            }
            else {
                this.inspectionList = rawList;
            }
            this.datasaveList = [...this.inspectionList];
            // Update local storage
            this.ionicstorage.insertData_Replace('inspectionData', this.inspectionList);
            this.ionicstorage.insertData_Replace('date', new Date().toISOString().split('T')[0]);
            this.checkRowEdit();
            console.log('Table data refreshed:', this.inspectionList.length, 'items');
        }, (error) => {
            console.error('API Error during refresh:', error);
            // Fallback to local storage
            this.getlocalstorage();
        });
    }
    // gotoStageForm(params){
    //   debugger
    //   let checkdata = new Date().toISOString().split('T')[0]
    //   // let obj = { 
    //   //   "list_id": params.id,
    //   //   "school_id": params.school_id,
    //   //   "work_type_id": params.work_type_id,
    //   //   "udise_code": params.udise_code,
    //   //   "school_name": params.school_name,
    //   // }
    //   // let timeLineobj = {}
    //   // let timeObj = this.StageList.filter(x => x.work_type_id == params.work_type_id)
    //   // if(params.school_id == undefined){params.school_id = {}}
    //   // timeLineobj[params.school_id] = timeObj
    //   // this.ionicstorage.insertData_Replace('timeLine', timeLineobj)
    //   // this.ionicstorage.insertData_Replace('listSchlId', obj)
    //   if (checkdata != this.datecheck) {
    //     let checksdf = params?.stages.filter(y => y.status == "completed")
    //     if(checksdf.length > 0){
    //       this.router.navigate(['/tabs/work-inspection-stage'],{ queryParams: { 'school_id':params.school_id}});
    //     }
    //     else{
    //       this.router.navigate(['/tabs/my-inspection-from'],{ queryParams: { 'id':1, 'school_id':params.school_id}});
    //     }
    //   }
    //   // else{
    //   //   // this.router.navigate(['/tabs/my-inspection-from'],
    //   //   // { queryParams: { 'school_id':data.school_id, 'list_id':data.list_id,'work_type_id':data.work_type_id,}});
    //   //   let checksdf = params?.stages.filter(y => y.status == "completed")
    //   //   if(checksdf.length > 0){
    //   //     this.router.navigate(['/tabs/work-inspection-stage'],{ queryParams: { 'school_id':params.school_id}});
    //   //   }
    //   //   else{
    //   //     this.router.navigate(['/tabs/my-inspection-from'], { queryParams: { 'id':1, 'school_id':params.school_id}});
    //   //   }
    //   // }
    // }
    editData(arg) {
        this.router.navigate(['/tabs/my-inspection-from'], { queryParams: { 'id': 1, 'school_id': arg.school_id, 'list_id': arg.id, 'curr_stage': arg.cur_stage, 'work_type_id': arg.work_type_id, 'editStage': 1 } });
    }
    checkRowEdit() {
        if (this.inspectionList != undefined && this.inspectionList != null) {
            this.inspectionList.forEach(x => {
                let stg = x.stages.filter(z => z.status == "completed" && z.image == 0 && z.image == '' && z.stage != "Request Letter Sent");
                console.log(stg, 'stg');
                if (stg.length == 0) {
                    x.enableEdit = 0;
                }
                else {
                    x.enableEdit = 1;
                }
            });
        }
        if (this.datasaveList != undefined && this.datasaveList != null) {
            this.datasaveList.forEach(x => {
                let stg = x.stages.filter(z => z.status == "completed" && z.image == 0 && z.image == '' && z.stage != "Request Letter Sent");
                console.log(stg, 'stg');
                if (stg.length == 0) {
                    x.enableEdit = 0;
                }
                else {
                    x.enableEdit = 1;
                }
            });
        }
    }
};
WorkInspectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService }
];
WorkInspectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-work-inspection',
        template: _raw_loader_work_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_work_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkInspectionPage);



/***/ }),

/***/ 62448:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/work-inspection.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-content {\n  padding: 5px;\n  box-sizing: border-box;\n}\n\n.data-alert {\n  background: #d90000;\n  color: #fff;\n  width: 90%;\n  margin: 10px auto 0px;\n  border-radius: 10px;\n  padding: 5px 10px;\n  display: flex;\n  position: fixed;\n  left: 0px;\n  top: 53px;\n  right: 0px;\n  z-index: 3;\n}\n\n.data-alert ion-icon {\n  font-size: 35px;\n  margin-right: 7px;\n}\n\n.scrl-tbl {\n  overflow: auto;\n  padding: 0px;\n  border-radius: 15px;\n  position: fixed;\n  top: 150px;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 5px;\n  font-size: 12px;\n}\n\ntd ion-icon, th ion-icon {\n  font-size: 20px;\n  color: #9162b0;\n}\n\ntr:nth-child(even) {\n  background-color: #f3e8fe;\n}\n\n.select {\n  max-width: 80% !important;\n  padding: 0px !important;\n  height: 15px;\n  margin: 2px;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.ion_col_select {\n  margin-top: 14px !important;\n}\n\n.searchbar {\n  margin-top: 10px;\n  height: 49px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstaW5zcGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUU7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJTjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUFBLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoid29yay1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhLWFsZXJ0e1xyXG4gICAgYmFja2dyb3VuZDogI2Q5MDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDUzcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2NybC10Ymx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjOTE2MmIwO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIzMiwgMjU0KVxyXG4gIH1cclxuXHJcblxyXG5cclxuLnNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcblxyXG59XHJcbi5pb25fY29sX3NlbGVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc2VhcmNoYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNDlweFxyXG4gIFxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 73660:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/work-inspection/work-inspection.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Civil inspection</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <div>\r\n    Generated UUID: {{ generatedUuid }}\r\n  </div>\r\n  <div>\r\n    dublicakt UUID: {{ dublicakt }}\r\n  </div> -->\r\n  <div class=\"data-alert\" *ngIf=\"dataNotSave\">\r\n    <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    <span>Your data is not synced to server. Please turn on your internet connection.</span>\r\n  </div>\r\n  <ion-row style=\"margin-bottom: -3.5rem !important;\" class=\"container \" >\r\n    <ion-col size = \"6\">\r\n      <ion-searchbar *ngIf=\"emis_usertype != 8\" class=\"shadow rounded searchbar\" (ionChange)=\"getFilterItems($event)\" placeholder=\"UDISE Search\"></ion-searchbar>\r\n    </ion-col>\r\n\r\n     <ion-col *ngIf=\"emis_usertype == 8\" size = \"6\" class=\"ion_col_select \" >\r\n      <ion-button (click)=\"addBuilding()\" style=\"width: 100%; font-size: 12px; color: white; font-weight: bold;\">Add Demolish <br> Building</ion-button>\r\n    </ion-col>\r\n\r\n    <ion-col *ngIf=\"emis_usertype != 8\" size = \"6\" class=\"shadow p-3 mb-5 bg-white rounded ion_col_select \" >\r\n      <ion-select ok-text=\"Ok\" [(ngModel)]=\"selectVal\" cancel-text=\"Dismiss\" class=\"select\" (ionChange)=\"getfilterstge($event)\" placeholder=\"All\"  >\r\n      <ion-select-option [value]=\"item1.id\" *ngFor=\"let item1 of StageListdrp\"> {{item1.stage}}\r\n      </ion-select-option>\r\n      </ion-select>\r\n \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-card class=\"card-content scrl-tbl\">\r\n  <table >\r\n    <tr style=\"background-color: #8B67B3;color:#ffffff;position: sticky;top:0px;z-index: 1;\">\r\n      <th>S.No</th>\r\n      <th>Udise Code</th>\r\n      <th>School Name</th>\r\n      <th>Type of Project</th>\r\n      <th>Type of Work</th>\r\n      <th>Construction Agency</th>\r\n      <th>Status</th>\r\n      <th>History</th>\r\n      <!-- <th>Action</th> -->\r\n    </tr>\r\n      <tr *ngFor=\"let data of inspectionList;let i = index;\">\r\n        <td (click)=\"gotoStageForm(data)\">{{i+1}}</td>\r\n        <td (click)=\"gotoStageForm(data)\"><span style=\"text-decoration:underline;color:blue;\">{{data.udise_code}}</span></td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.school_name}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.work}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.work_type}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.agency}}</td>\r\n        <td (click)=\"gotoStageForm(data)\">{{data.stage_name }}</td>\r\n        <td style=\"text-align: center;\" *ngIf=\"data.stage_name != 'Not Updated'\"><ion-icon name=\"eye-outline\" (click)=\"viewTimeline(data)\"></ion-icon></td>\r\n        <td style=\"text-align: center;\" *ngIf=\"data.stage_name == 'Not Updated'\">-</td>\r\n        <!-- <td style=\"text-align: center;\" *ngIf=\"data.work_type_id == '3' && data.stage_name != 'Not Updated' && data.enableEdit == 0\"><ion-icon name=\"create-outline\" (click)=\"editData(data)\"></ion-icon></td> -->\r\n        <!-- <td style=\"text-align: center;\" *ngIf=\"data.work_type_id != '3' || (data.work_type_id == '3' && data.stage_name == 'Not Updated' || data.enableEdit == 0)\">-</td> -->\r\n      </tr>\r\n      <tr *ngIf=\"emis_usertype == 8 && inspectionList.length == 0\">\r\n        <td colspan=\"8\" style=\"text-align: center;\"><h6 style=\"color:#000;margin:15px 0px;\"><b>Building to be demolish not available in the school</b></h6></td>\r\n      </tr>\r\n    <!-- <div  *ngIf=\"inspectionList.length == 0\">\r\n      <div class=\"m-2\">\r\n          No Records Found\r\n      </div>\r\n    </div> -->\r\n  \r\n  </table>\r\n</ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_work-inspection_work-inspection_module_ts-es2015.js.map