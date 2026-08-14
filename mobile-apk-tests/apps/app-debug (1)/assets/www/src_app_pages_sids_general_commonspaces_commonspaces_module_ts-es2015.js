(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_general_commonspaces_commonspaces_module_ts"],{

/***/ 21428:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sids/general/commonspaces/commonspaces-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonspacesPageRoutingModule": function() { return /* binding */ CommonspacesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _commonspaces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonspaces.page */ 73173);




const routes = [
    {
        path: '',
        component: _commonspaces_page__WEBPACK_IMPORTED_MODULE_0__.CommonspacesPage
    }
];
let CommonspacesPageRoutingModule = class CommonspacesPageRoutingModule {
};
CommonspacesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommonspacesPageRoutingModule);



/***/ }),

/***/ 3259:
/*!************************************************************************!*\
  !*** ./src/app/pages/sids/general/commonspaces/commonspaces.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonspacesPageModule": function() { return /* binding */ CommonspacesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _commonspaces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonspaces-routing.module */ 21428);
/* harmony import */ var _commonspaces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonspaces.page */ 73173);







let CommonspacesPageModule = class CommonspacesPageModule {
};
CommonspacesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _commonspaces_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonspacesPageRoutingModule
        ],
        declarations: [_commonspaces_page__WEBPACK_IMPORTED_MODULE_1__.CommonspacesPage]
    })
], CommonspacesPageModule);



/***/ }),

/***/ 73173:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/general/commonspaces/commonspaces.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonspacesPage": function() { return /* binding */ CommonspacesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_commonspaces_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./commonspaces.page.html */ 56224);
/* harmony import */ var _commonspaces_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonspaces.page.scss */ 4567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);













let CommonspacesPage = class CommonspacesPage {
    constructor(router, formBuilder, route, alertController, sqliteDB, utilityService, sidsService, userSessionService, alertService, el, ionicstorage) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.utilityService = utilityService;
        this.sidsService = sidsService;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.el = el;
        this.ionicstorage = ionicstorage;
        this.isData = false;
        this.data = [];
        this.dataList = [];
        this.tabsData = 0;
        this.sourceWater = [
            {
                "value": "1",
                "label": "Borewell"
            },
            {
                "value": "2",
                "label": "Piped Water Supply from Localbody"
            },
            {
                "value": "3",
                "label": "Open Well"
            },
            {
                "value": "4",
                "label": "Water Lorry"
            },
            {
                "value": "5",
                "label": "Hand Pump"
            },
            {
                "value": "6",
                "label": "Water Can"
            },
            {
                "value": "7",
                "label": "Others"
            }
        ];
        this.disposal = [
            {
                "value": "1",
                "label": "Soak Pits"
            },
            {
                "value": "2",
                "label": "Drainage"
            },
            {
                "value": "3",
                "label": "Used for Garden"
            },
            {
                "value": "4",
                "label": "None"
            }
        ];
        this.treatedWater = [
            {
                "value": "1",
                "label": "No treatment"
            },
            {
                "value": "2",
                "label": "Filtration"
            },
            {
                "value": "3",
                "label": "Solar disinfection"
            },
            {
                "value": "4",
                "label": "Boiling"
            },
            {
                "value": "5",
                "label": "Chlorination"
            },
            {
                "value": "6",
                "label": "Treated at water source (No treatment required at school)"
            },
            {
                "value": "7",
                "label": "Advanced Treatment(RO,UV,etc.)"
            }
        ];
        this.availability = [
            {
                "value": "1",
                "label": "Always (Throughout the Day)"
            },
            {
                "value": "2",
                "label": "Most of the Time, At Scheduled Times"
            },
            {
                "value": "3",
                "label": "Scheduled Days (Few Days in a Week)"
            },
            {
                "value": "4",
                "label": "No Fixed Schedule"
            },
            {
                "value": "5",
                "label": "No Water Connection"
            }
        ];
        this.srcWaterSchool = [
            {
                "value": "1",
                "label": "No Water"
            },
            {
                "value": "2",
                "label": "Water Available"
            }
        ];
        this.sourceOfWater = [
            {
                "value": "1",
                "label": "Borewell"
            },
            {
                "value": "2",
                "label": "Piped Water Supply from Localbody"
            },
            {
                "value": "3",
                "label": "Others"
            }
        ];
        this.UnavailabilityWater = [
            {
                "value": "1",
                "label": "Drought"
            },
            {
                "value": "2",
                "label": "No Piped Water Supply from Localbody"
            },
            {
                "value": "3",
                "label": "No Ground Water for Borewell"
            }
        ];
        this.FreqAvailability = [
            {
                "value": "1",
                "label": "Always (Throughout the Day)"
            },
            {
                "value": "2",
                "label": "Most of the Time"
            },
            {
                "value": "3",
                "label": "At Scheduled Times"
            },
            {
                "value": "4",
                "label": "Scheduled Days (Few Days in a Week)"
            },
            {
                "value": "5",
                "label": "No Schedule"
            }
        ];
        this.compoundWallList = [
            {
                "value": "1",
                "label": "Full Length (Pucca)"
            },
            {
                "value": "2",
                "label": "Partial Length (Pucca)"
            },
            {
                "value": "3",
                "label": "Dilapidated"
            },
            {
                "value": "4",
                "label": "Under Construction"
            },
            {
                "value": "5",
                "label": "No Compound Wall"
            }
        ];
        this.compoundTypeList = [
            {
                "value": "1",
                "label": "Concrete"
            },
            // {
            //   "value": "2",
            //   "label": "ques_condition"
            // },
            {
                "value": "2",
                "label": "RR Masonry"
            },
            {
                "value": "3",
                "label": "Brick"
            },
            {
                "value": "4",
                "label": "Wire Fence"
            },
            {
                "value": "5",
                "label": "Combination"
            },
            {
                "value": "6",
                "label": "Other"
            }
        ];
        this.requirementList = [
            {
                "value": "1",
                "label": "Requires Replastering"
            },
            {
                "value": "2",
                "label": "Requires Increase in Height"
            },
            {
                "value": "3",
                "label": "Requires Whitewashing and Painting"
            },
            {
                "value": "4",
                "label": "Requires Brickwork"
            },
            {
                "value": "5",
                "label": "No requirement"
            },
            // {
            //   "value": "6",
            //   "label": "Requires increase in length"
            // },
        ];
        this.CleaningToilets = [
            {
                "value": "1",
                "label": "No specific schedule"
            },
            {
                "value": "2",
                "label": "Once a week"
            },
            {
                "value": "3",
                "label": "Twice in a week"
            },
            {
                "value": "4",
                "label": "Daily"
            }
        ];
        this.WaterLog = [
            {
                "value": "1",
                "label": "Requires Drainage System"
            },
            {
                "value": "2",
                "label": "Requires Refilling"
            },
            {
                "value": "3",
                "label": "Requires Both"
            }
        ];
        this.sourceOfDrinkingWater = [
            {
                "value": "1",
                "label": "Borewell"
            },
            {
                "value": "2",
                "label": "Piped Water Supply from Local Body"
            },
            {
                "value": "3",
                "label": "Protected Well"
            },
            {
                "value": "4",
                "label": "Unprotected Well"
            },
            {
                "value": "5",
                "label": "Tap water"
            },
            {
                "value": "6",
                "label": "Packaged/Bottled Drinking water"
            },
            {
                "value": "7",
                "label": "Others"
            }
        ];
        this.commonSpace = 1;
        this.playGround = 1;
        this.compound_Wall = 1;
        this.waterData = 1;
    }
    ngOnInit() {
        this.safetyInitial();
        this.playgroundInitial();
        this.waterInitial();
        this.compoundWallInitial();
    }
    ionViewDidEnter() {
        // this.form.reset();
        this.routeData = this.route.snapshot;
        this.SchlId = this.routeData.queryParams.schoolId;
        this.VistUId = this.routeData.queryParams.vistId;
        console.log(this.SchlId, this.VistUId);
        this.udiseCode = this.utilityService.udiseCode;
        this.serverData();
        this.getIonStorage();
    }
    serverData() {
        let query = 'SELECT * FROM sidsCommonServer' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.serverDatas = true;
                this.commonSpace = 3;
                this.playGround = 3;
                this.waterData = 3;
                this.compound_Wall = 3;
                this.checkSafetyLocalDb(1);
                this.checkPlaygroundLocalDb(1);
                this.checkCompoundWallLocalDb(1);
                this.checkWaterLocalDb(1);
                console.log('Server');
            }
            else {
                this.serverDatas = false;
                console.log('Local');
                this.checkSafetyLocalDb(2);
                this.checkPlaygroundLocalDb(2);
                this.checkCompoundWallLocalDb(2);
                this.checkWaterLocalDb(2);
            }
        });
    }
    getTabs(i) {
        if (this.tabsData == i) {
            this.tabsData = 0;
        }
        else {
            this.tabsData = i;
        }
        // if(this.tabsData == 1){
        //   this.checkSafetyLocalDb();
        // }
        // if(this.tabsData == 2){
        //   this.playgroundInitial();
        // }
        // if(this.tabsData == 3){
        //   this.waterInitial();
        // }
        // if(this.tabsData == 4){
        //   this.compoundWallInitial();
        // }
    }
    safetyInitial() {
        this.safety = this.formBuilder.group({
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
            "EBliShiYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "RefilAreReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            // "RefilSqft": new FormControl('', null),
            "WatLoggYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "WatLogRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            // "TrePrunReq": new FormControl(false, null),
            "OpenWellYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "CmnDustbinYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            // "ChulhaYn": new FormControl(false, null),
            // "ChulhaFunc": new FormControl('', null),
            // "ChulhaRepair": new FormControl('', null),
            // "SChSepticTank": new FormControl(false, null),
            // "SepticTankFun": new FormControl('', null),
            // "SepticTankRepaired": new FormControl('', null),
        });
    }
    playgroundInitial() {
        this.playground = this.formBuilder.group({
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
            "PlaygroYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "PlaygroArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            // "PlayKerbwall": new FormControl(false, null),
            // "PlayLevelling": new FormControl(false, null),
            // "OutsiClsYN": new FormControl(false, null),
            "OutsiClsNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            // "OutsiClsNum": new FormControl('', null),
            "PlaygroOutdoorGamYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
        });
    }
    compoundWallInitial() {
        this.compoundWall = this.formBuilder.group({
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
            "CmpdwallSta": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            "CmpdwallReqLen": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "CmpdwallReqt": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "CmpdwallHTInc": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            // "CmpdwallLength": new FormControl('', null),
            "AreaWW": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "AreaBrickwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "SchoolTotalGates": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "GateFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
    }
    waterInitial() {
        this.water = this.formBuilder.group({
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
            "WatAvaiSchool": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            "ResUnAvaiWater": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "srcWaterAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "BorWelFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "srcWaterOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            // "BorwelClosed": new FormControl('', null),
            // "BorWelReqReapir": new FormControl('', null),
            // "DWWatAvai": new FormControl('', null),
            "FreqWaterAvail": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "DWSumpYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "DWSumpFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "DWSumpAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "DWPumpYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            "DWPumpFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "DWPumpRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "NumDWStation": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "WaterRoFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "srcDrnkWaterAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "srcDrnkWaterAvaiOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            "WaterComHandwash": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('0', null)
        });
    }
    getIonStorage() {
        debugger;
        this.ionicstorage.getData('SecSidsSchlGenrlInfoGetRmrks').then((data) => {
            if (data != null && data != undefined) {
                this.schlDataRmks = {};
                for (let i = 0; i < data.length; i++) {
                    for (const key in data[i]) {
                        let gtData = data[i];
                        if (key != 'question_id' && key != 'remarks' && key != 'hm_status_yn') {
                            this.gtKey = key;
                        }
                        if (typeof this.schlDataRmks[this.gtKey] == 'undefined') {
                            this.schlDataRmks[this.gtKey] = {};
                        }
                        if (key == 'remarks') {
                            this.schlDataRmks[this.gtKey][key] = gtData[key];
                        }
                        else if (key == 'hm_status_yn') {
                            this.schlDataRmks[this.gtKey][key] = gtData[key];
                        }
                    }
                }
                console.log(this.schlDataRmks, 'keyName');
            }
        }, (error) => {
            this.alertService.error(error);
        });
    }
    onToggleChange(event, id) {
        // if(id == 1){
        // if(this.safety.value.RefilAreReq){
        //   this.safety.controls['RefilSqft'].setValue('');
        //   this.safety.controls['RefilSqft'].setValidators(Validators.required);
        // }else{
        //   this.safety.controls['RefilSqft'].setValue('');
        //   this.safety.controls['RefilSqft'].setValidators(null);
        // }
        // this.safety.controls['RefilSqft'].updateValueAndValidity();
        // }
        if (id == 2) {
            // if(this.safety.value.ChulhaYn){
            // this.safety.controls['ChulhaFunc'].setValue('');
            // this.safety.controls['ChulhaFunc'].setValidators(Validators.required);
            // this.safety.controls['ChulhaRepair'].setValue('');
            // this.safety.controls['ChulhaRepair'].setValidators(Validators.required);
            // }else{
            //   this.safety.controls['ChulhaFunc'].setValue('');
            //   this.safety.controls['ChulhaFunc'].setValue('');
            //   this.safety.controls['ChulhaRepair'].setValidators(null);
            //   this.safety.controls['ChulhaRepair'].setValidators(null);
            // }
            // this.safety.controls['ChulhaFunc'].updateValueAndValidity();
            // this.safety.controls['ChulhaRepair'].updateValueAndValidity();
        }
        // if(id == 3){
        //   if(this.safety.value.SChSepticTank){
        //     this.safety.controls['SepticTankFun'].setValue('');
        //     this.safety.controls['SepticTankFun'].setValidators(Validators.required);
        //     this.safety.controls['SepticTankRepaired'].setValue('');
        //     this.safety.controls['SepticTankRepaired'].setValidators(Validators.required);
        //   }else{
        //     this.safety.controls['SepticTankFun'].setValue('');
        //     this.safety.controls['SepticTankFun'].setValue('');
        //     this.safety.controls['SepticTankRepaired'].setValidators(null);
        //     this.safety.controls['SepticTankRepaired'].setValidators(null);
        //   }
        //   this.safety.controls['SepticTankFun'].updateValueAndValidity();
        //   this.safety.controls['SepticTankRepaired'].updateValueAndValidity();
        // }
        if (id == 4) {
            if (this.playground.value.PlaygroYn) {
                this.playground.controls['PlaygroArea'].setValue('');
                this.playground.controls['PlaygroArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.playground.controls['PlaygroOutdoorGamYn'].setValue(false);
                this.playground.controls['PlaygroOutdoorGamYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                // this.playground.controls['PlayKerbwall'].setValue(false);
            }
            else {
                this.playground.controls['PlaygroArea'].setValue('');
                this.playground.controls['PlaygroArea'].setValidators(null);
                // this.playground.controls['PlayKerbwall'].setValue(false);
            }
            this.playground.controls['PlaygroArea'].updateValueAndValidity();
            this.playground.controls['PlaygroOutdoorGamYn'].updateValueAndValidity();
            // this.playground.controls['PlayKerbwall'].updateValueAndValidity();
        }
        if (id == 5) {
            // if(this.playground.value.OutsiClsYN){
            //   this.playground.controls['OutsiClsNum'].setValue('');
            //   this.playground.controls['OutsiClsNum'].setValidators(Validators.required);
            // }else{
            //   this.playground.controls['OutsiClsNum'].setValue('');
            //   this.playground.controls['OutsiClsNum'].setValidators(null);
            // }
            // this.playground.controls['OutsiClsNum'].updateValueAndValidity();
        }
        if (id == 6) {
            if (this.compoundWall.value.SchoolTotalGates) {
                this.compoundWall.controls['GateFunc'].setValue('0');
                this.compoundWall.controls['GateFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            else {
                this.compoundWall.controls['GateFunc'].setValue('0');
                this.compoundWall.controls['GateFunc'].setValidators(null);
            }
            this.compoundWall.controls['GateFunc'].updateValueAndValidity();
        }
        if (id == 8) {
            if (this.safety.value.WatLoggYn) {
                this.safety.controls['WatLogRepair'].setValue('');
                this.safety.controls['WatLogRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            else {
                this.safety.controls['WatLogRepair'].setValue('');
                this.safety.controls['WatLogRepair'].setValidators(null);
            }
            this.safety.controls['WatLogRepair'].updateValueAndValidity();
        }
    }
    onSelectChange(event, id) {
        if (id == 1) {
            if (this.compoundWall.value.CmpdwallSta == 1) {
                this.compoundWall.controls['CmpdwallReqt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.compoundWall.controls['CmpdwallReqLen'].setValue("");
                this.compoundWall.controls['CmpdwallReqLen'].setValidators(null);
            }
            if (this.compoundWall.value.CmpdwallSta == 2 || this.compoundWall.value.CmpdwallSta == 5) {
                this.compoundWall.controls['CmpdwallReqLen'].setValue("");
                this.compoundWall.controls['CmpdwallReqLen'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.compoundWall.controls['CmpdwallReqt'].setValue("");
                this.compoundWall.controls['CmpdwallReqt'].setValidators(null);
                this.compoundWall.controls['CmpdwallHTInc'].setValue("");
                this.compoundWall.controls['CmpdwallHTInc'].setValidators(null);
                this.compoundWall.controls['AreaWW'].setValue("");
                this.compoundWall.controls['AreaWW'].setValidators(null);
                this.compoundWall.controls['AreaReplastering'].setValue("");
                this.compoundWall.controls['AreaReplastering'].setValidators(null);
                this.compoundWall.controls['AreaBrickwork'].setValue("");
                this.compoundWall.controls['AreaBrickwork'].setValidators(null);
                // this.compoundWall.controls['CmpdwallLength'].setValue("");
                // this.compoundWall.controls['CmpdwallLength'].setValidators(null);
            }
            this.compoundWall.controls['CmpdwallReqLen'].updateValueAndValidity();
            this.compoundWall.controls['CmpdwallReqt'].updateValueAndValidity();
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
            this.compoundWall.controls['AreaReplastering'].updateValueAndValidity();
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
            // this.compoundWall.controls['CmpdwallLength'].updateValueAndValidity();
            this.heiActive = false;
            this.wwActive = false;
            this.replasActive = false;
            this.brickActive = false;
        }
    }
    onSelectChangeWater(event, id) {
        if (event == "1") {
            this.water.controls['srcWaterAvai'].setValue("");
            this.water.controls['srcWaterAvai'].setValidators(null);
            this.water.controls['srcWaterAvai'].updateValueAndValidity();
            this.water.controls['srcWaterOthers'].setValue("");
            this.water.controls['srcWaterOthers'].setValidators(null);
            this.water.controls['srcWaterOthers'].updateValueAndValidity();
        }
        if (event == "2") {
            this.water.controls['ResUnAvaiWater'].setValue("");
            this.water.controls['ResUnAvaiWater'].setValidators(null);
            this.water.controls['ResUnAvaiWater'].updateValueAndValidity();
        }
    }
    onMultiSelectChangeWater(event, id) {
        this.BorWelActive = false;
        this.DWWatActive = false;
        this.DWSumpActive = false;
        for (let i = 0; i <= event.length; i++) {
            if (event[i] == "1") {
                this.BorWelActive = true;
                this.water.controls['srcWaterOthers'].setValue("");
                this.water.controls['srcWaterOthers'].setValidators(null);
                this.water.controls['srcWaterOthers'].updateValueAndValidity();
            }
            if (event[i] == "2") {
                this.DWWatActive = true;
                this.water.controls['srcWaterOthers'].setValue("");
                this.water.controls['srcWaterOthers'].setValidators(null);
                this.water.controls['srcWaterOthers'].updateValueAndValidity();
            }
            if (event[i] == "3") {
                this.DWSumpActive = true;
            }
        }
        if (this.BorWelActive) {
            this.water.controls['BorWelFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.water.controls['BorWelFunc'].updateValueAndValidity();
            // this.water.controls['BorwelClosed'].setValidators(Validators.required);
            // this.water.controls['BorwelClosed'].updateValueAndValidity();
            // this.water.controls['BorWelReqReapir'].setValidators(Validators.required);
            // this.water.controls['BorWelReqReapir'].updateValueAndValidity();
        }
        else {
            this.water.controls['BorWelFunc'].setValue("");
            this.water.controls['BorWelFunc'].setValidators(null);
            this.water.controls['BorWelFunc'].updateValueAndValidity();
            // this.water.controls['BorwelClosed'].setValue(false);
            // this.water.controls['BorwelClosed'].setValidators(null);
            // this.water.controls['BorwelClosed'].updateValueAndValidity();
            // this.water.controls['BorWelReqReapir'].setValue(false);
            // this.water.controls['BorWelReqReapir'].setValidators(null);
            // this.water.controls['BorWelReqReapir'].updateValueAndValidity();
        }
        if (this.DWWatActive) {
            // this.water.controls['DWWatAvai'].setValidators(Validators.required);
            // this.water.controls['DWWatAvai'].updateValueAndValidity();
            this.water.controls['FreqWaterAvail'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.water.controls['FreqWaterAvail'].updateValueAndValidity();
            this.water.controls['DWSumpYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.water.controls['DWSumpYn'].updateValueAndValidity();
            this.water.controls['DWPumpYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.water.controls['DWPumpYn'].updateValueAndValidity();
        }
        else {
            // this.water.controls['DWWatAvai'].setValue("");
            // this.water.controls['DWWatAvai'].setValidators(null);
            // this.water.controls['DWWatAvai'].updateValueAndValidity();
            this.water.controls['FreqWaterAvail'].setValue("");
            this.water.controls['FreqWaterAvail'].setValidators(null);
            this.water.controls['FreqWaterAvail'].updateValueAndValidity();
            this.water.controls['DWSumpYn'].setValue(false);
            this.water.controls['DWSumpYn'].setValidators(null);
            this.water.controls['DWSumpYn'].updateValueAndValidity();
            this.water.controls['DWPumpYn'].setValue(false);
            this.water.controls['DWPumpYn'].setValidators(null);
            this.water.controls['DWPumpYn'].updateValueAndValidity();
        }
        console.log(this.water.value);
    }
    onMultiSelectChangeWater2(event, id) {
        if (id == 1) {
            if (event != "7") {
                this.water.controls['srcDrnkWaterAvaiOthers'].setValue("");
                this.water.controls['srcDrnkWaterAvaiOthers'].setValidators(null);
                this.water.controls['srcDrnkWaterAvaiOthers'].updateValueAndValidity();
            }
            else {
                this.water.controls['srcDrnkWaterAvaiOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
        }
    }
    onMultiSelectChange(event) {
        this.heiActive = false;
        this.wwActive = false;
        this.replasActive = false;
        this.brickActive = false;
        for (let i = 0; i <= event.length; i++) {
            if (event[i] == "1") {
                this.replasActive = true;
            }
            if (event[i] == "2") {
                this.heiActive = true;
            }
            if (event[i] == "3") {
                this.wwActive = true;
            }
            if (event[i] == "4") {
                this.brickActive = true;
            }
            // if (event[i] == "6") {
            //   this.lengthActive = true
            // } 
        }
        if (this.heiActive) {
            // this.compoundWall.controls['CmpdwallHTInc'].setValue("");
            this.compoundWall.controls['CmpdwallHTInc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['CmpdwallHTInc'].setValue("");
            this.compoundWall.controls['CmpdwallHTInc'].setValidators(null);
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
        }
        if (this.wwActive) {
            // this.compoundWall.controls['AreaWW'].setValue("");
            this.compoundWall.controls['AreaWW'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['AreaWW'].setValue("");
            this.compoundWall.controls['AreaWW'].setValidators(null);
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
        }
        if (this.replasActive) {
            // this.compoundWall.controls['AreaReplastering'].setValue("");
            this.compoundWall.controls['AreaReplastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.compoundWall.controls['AreaReplastering'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['AreaReplastering'].setValue("");
            this.compoundWall.controls['AreaReplastering'].setValidators(null);
            this.compoundWall.controls['AreaReplastering'].updateValueAndValidity();
        }
        // if (this.lengthActive) {
        //   // this.compoundWall.controls['CmpdwallLength'].setValue("");
        //   this.compoundWall.controls['CmpdwallLength'].setValidators(Validators.required);
        //   this.compoundWall.controls['CmpdwallLength'].updateValueAndValidity();
        // }else{
        //   this.compoundWall.controls['CmpdwallLength'].setValue("");
        //   this.compoundWall.controls['CmpdwallLength'].setValidators(null);
        //   this.compoundWall.controls['CmpdwallLength'].updateValueAndValidity();
        // }
        if (this.brickActive) {
            // this.compoundWall.controls['AreaBrickwork'].setValue("");
            this.compoundWall.controls['AreaBrickwork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['AreaBrickwork'].setValue("");
            this.compoundWall.controls['AreaBrickwork'].setValidators(null);
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
        }
    }
    onInputChange(event, id) {
        // if (this.safety.value.RefilSqft == 0 && id == 1) {
        //   this.safety.controls['RefilSqft'].setValue('');
        //   this.safety.controls['RefilSqft'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.safety.value.ChulhaFunc == 0 && id == 2) {
        //   this.safety.controls['ChulhaFunc'].setValue('');
        //   this.safety.controls['ChulhaFunc'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.safety.value.ChulhaRepair == 0 && id == 3) {
        //   this.safety.controls['ChulhaRepair'].setValue('');
        //   this.safety.controls['ChulhaRepair'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.safety.value.SepticTankFun == 0 && id == 4) {
        //   this.safety.controls['SepticTankFun'].setValue('');
        //   this.safety.controls['SepticTankFun'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.safety.value.SepticTankRepaired == 0 && id == 5) {
        //   this.safety.controls['SepticTankRepaired'].setValue('');
        //   this.safety.controls['SepticTankRepaired'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        if (this.playground.value.PlaygroArea == 0 && id == 6) {
            this.playground.controls['PlaygroArea'].setValue('');
            this.playground.controls['PlaygroArea'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        // if (this.form.value.AreaLevelling == 0 && id == 7) {
        //   this.form.controls['AreaLevelling'].setValue('');
        //   this.form.controls['AreaLevelling'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        if (this.compoundWall.value.CmpdwallReqLen == 0 && id == 8) {
            this.compoundWall.controls['CmpdwallReqLen'].setValue('');
            this.compoundWall.controls['CmpdwallReqLen'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.compoundWall.value.CmpdwallHTInc == 0 && id == 9) {
            this.compoundWall.controls['CmpdwallHTInc'].setValue('');
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.compoundWall.value.AreaWW == 0 && id == 10) {
            this.compoundWall.controls['AreaWW'].setValue('');
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.compoundWall.value.AreaReplastering == 0 && id == 11) {
            this.compoundWall.controls['AreaReplastering'].setValue('');
            this.compoundWall.controls['AreaReplastering'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.compoundWall.value.AreaBrickwork == 0 && id == 12) {
            this.compoundWall.controls['AreaBrickwork'].setValue('');
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        // if (this.compoundWall.value.GateFunc == 0 && id == 13) {
        //   this.compoundWall.controls['GateFunc'].setValue('0');
        //   this.compoundWall.controls['GateFunc'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.compoundWall.value.SchoolTotalGates == 0 && id == 14) {
        //   this.compoundWall.controls['SchoolTotalGates'].setValue('0');
        //   this.compoundWall.controls['SchoolTotalGates'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.compoundWall.value.OutsiClsNum == 0 && id == 14) {
        //   this.compoundWall.controls['OutsiClsNum'].setValue('');
        //   this.compoundWall.controls['OutsiClsNum'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        // if (this.compoundWall.value.CmpdwallLength == 0 && id == 15) {
        //   this.compoundWall.controls['CmpdwallLength'].setValue('');
        //   this.compoundWall.controls['CmpdwallLength'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
    }
    onSave(id) {
        if (this.tabsData == 1 && id == 1) {
            if (this.safety.valid) {
                this.safetySubmitted = false;
                this.alertService.success('Saved Successfully');
                let deleteQuery = 'DELETE FROM sids_safety_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_safety_data VALUES (?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.safety.value.EBliShiYn,
                        this.safety.value.RefilAreReq, this.safety.value.WatLoggYn, this.safety.value.WatLogRepair,
                        this.safety.value.OpenWellYn, this.safety.value.CmnDustbinYN, 1
                    ]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.commonSpace = 2;
                            this.safetySave = true;
                            // this.getTabs();
                        }
                    });
                });
            }
            else {
                this.focusValidator();
                this.safetySubmitted = true;
                this.alertService.error('Please Enter Valid Data');
            }
        }
        if (this.tabsData == 2 && id == 2) {
            if (this.playground.valid) {
                this.playSubmitted = true;
                this.alertService.success('Saved Successfully');
                let deleteQuery = 'DELETE FROM sids_playground_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_playground_data VALUES (?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.playground.value.PlaygroYn, this.playground.value.PlaygroOutdoorGamYn,
                        this.playground.value.PlaygroArea,
                        this.playground.value.OutsiClsNum, 1]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.playGround = 2;
                            this.playgroundSave = true;
                            // this.getTabs();
                        }
                    });
                });
            }
            else {
                this.focusValidator();
                this.playSubmitted = false;
                this.alertService.error('Please Enter Valid Data');
            }
        }
        if (this.tabsData == 3 && id == 3) {
            if (this.water.valid) {
                this.waterSubmitted = false;
                this.alertService.success('Saved Successfully');
                let deleteQuery = 'DELETE FROM sids_water_schooldata' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId,
                        this.water.value.WatAvaiSchool, this.water.value.ResUnAvaiWater, this.water.value.srcWaterAvai, this.water.value.srcWaterOthers,
                        this.water.value.BorWelFunc,
                        this.water.value.FreqWaterAvail, this.water.value.DWSumpYn,
                        this.water.value.DWSumpFun, this.water.value.DWSumpAvai, this.water.value.DWPumpYn,
                        this.water.value.DWPumpFun, this.water.value.DWPumpRepair, this.water.value.NumDWStation, this.water.value.WaterRoFunc,
                        this.water.value.srcDrnkWaterAvai, this.water.value.srcDrnkWaterAvaiOthers, this.water.value.WaterComHandwash,
                    ]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.waterData = 2;
                            this.waterSave = true;
                        }
                    });
                });
            }
            else {
                this.focusValidator();
                this.waterSubmitted = true;
                this.alertService.error('Please Enter Valid Data');
            }
        }
        if (this.tabsData == 4 && id == 4) {
            if (this.compoundWall.valid) {
                this.commonSubmitted = false;
                // this.submitted = false;
                this.alertService.success('Saved Successfully');
                let deleteQuery = 'DELETE FROM sids_compoundwall_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.compoundWall.value.CmpdwallSta,
                        this.compoundWall.value.CmpdwallReqLen, this.compoundWall.value.CmpdwallReqt,
                        this.compoundWall.value.CmpdwallHTInc, this.compoundWall.value.AreaWW, this.compoundWall.value.AreaReplastering,
                        this.compoundWall.value.AreaBrickwork, this.compoundWall.value.SchoolTotalGates, this.compoundWall.value.GateFunc, 1]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.compound_Wall = 2;
                            this.compoundSave = true;
                            // this.getTabs();
                        }
                    });
                });
            }
            else {
                this.alertService.error('Please Enter Valid Data');
                // this.submitted = true;
                this.commonSubmitted = true;
                this.focusValidator();
            }
        }
    }
    goToBack() {
        this.router.navigate(['/tabs/sids-common-dashboard'], { queryParams: { 'schoolId': this.SchlId, 'vistId': this.VistUId }, skipLocationChange: false });
    }
    checkSafetyLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_safety_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.safetySave = true;
                console.log(this.dataList, "dataList");
                if (id == 2) {
                    this.commonSpace = 2;
                }
                this.safety.patchValue({
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
                    "EBliShiYn": this.dataList[0].EBliShiYn == "false" ? false : this.dataList[0].EBliShiYn == "true" ? true : this.dataList[0].EBliShiYn,
                    "RefilAreReq": this.dataList[0].RefilAreReq == "false" ? false : this.dataList[0].RefilAreReq == "true" ? true : this.dataList[0].RefilAreReq,
                    // "RefilSqft": this.dataList[0].RefilSqft,
                    "WatLoggYn": this.dataList[0].WatLoggYn == "false" ? false : this.dataList[0].WatLoggYn == "true" ? true : this.dataList[0].WatLoggYn,
                    "WatLogRepair": this.dataList[0].WatLogRepair,
                    // "TrePrunReq":this.dataList[0].TrePrunReq == "false" ?  false : this.dataList[0].TrePrunReq == "true" ?  true : this.dataList[0].TrePrunReq,
                    "OpenWellYn": this.dataList[0].OpenWellYn == "false" ? false : this.dataList[0].OpenWellYn == "true" ? true : this.dataList[0].OpenWellYn,
                    "CmnDustbinYN": this.dataList[0].CmnDustbinYN == "false" ? false : this.dataList[0].CmnDustbinYN == "true" ? true : this.dataList[0].CmnDustbinYN,
                    // "ChulhaYn":this.dataList[0].ChulhaYn == "false" ?  false : this.dataList[0].ChulhaYn == "true" ?  true : this.dataList[0].ChulhaYn,
                    // "ChulhaFunc": this.dataList[0].ChulhaFunc,
                    // "ChulhaRepair": this.dataList[0].ChulhaRepair,
                    // "SChSepticTank":this.dataList[0].SChSepticTank == "false" ?  false : this.dataList[0].SChSepticTank == "true" ?  true : this.dataList[0].SChSepticTank,
                    // "SepticTankFun": this.dataList[0].SepticTankFun,
                    // "SepticTankRepaired": this.dataList[0].SepticTankRepaired,
                });
            }
            else {
                console.log("local data", this.isData);
                this.safetySave = false;
                this.safetyInitial();
                this.commonSpace = 1;
            }
        });
    }
    checkPlaygroundLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_playground_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.playgroundSave = true;
                console.log(this.dataList, "dataList");
                if (id == 2) {
                    this.playGround = 2;
                }
                this.playground.patchValue({
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
                    "PlaygroYn": this.dataList[0].PlaygroYn == "false" ? false : this.dataList[0].PlaygroYn == "true" ? true : this.dataList[0].PlaygroYn,
                    "PlaygroOutdoorGamYn": this.dataList[0].PlaygroOutdoorGamYn == "false" ? false : this.dataList[0].PlaygroOutdoorGamYn == "true" ? true : this.dataList[0].PlaygroOutdoorGamYn,
                    "PlaygroArea": this.dataList[0].PlaygroArea,
                    // "PlayKerbwall":this.dataList[0].PlayKerbwall == "false" ?  false : this.dataList[0].PlayKerbwall == "true" ?  true : this.dataList[0].PlayKerbwall,
                    // "OutsiClsYN":this.dataList[0].OutsiClsYN == "false" ?  false : this.dataList[0].OutsiClsYN == "true" ?  true : this.dataList[0].OutsiClsYN,
                    "OutsiClsNum": this.dataList[0].OutsiClsNum,
                });
            }
            else {
                console.log("local data", this.isData);
                this.playgroundInitial();
                this.playgroundSave = false;
                this.playGround = 1;
            }
        });
    }
    checkCompoundWallLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_compoundwall_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.compoundSave = true;
                console.log(this.dataList, "dataList");
                if (id == 2) {
                    this.compound_Wall = 2;
                }
                this.compoundWall.patchValue({
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
                    "CmpdwallSta": this.dataList[0].CmpdwallSta,
                    "CmpdwallReqLen": this.dataList[0].CmpdwallReqLen,
                    "CmpdwallReqt": this.dataList[0].CmpdwallReqt ? Array.from(this.dataList[0].CmpdwallReqt.split(",")) : this.dataList[0].CmpdwallReqt,
                    "CmpdwallHTInc": this.dataList[0].CmpdwallHTInc,
                    // "CmpdwallLength": this.dataList[0].CmpdwallLength,
                    "AreaWW": this.dataList[0].AreaWW,
                    "AreaReplastering": this.dataList[0].AreaReplastering,
                    "AreaBrickwork": this.dataList[0].AreaBrickwork,
                    "SchoolTotalGates": this.dataList[0].SchoolTotalGates,
                    "GateFunc": this.dataList[0].GateFunc,
                });
            }
            else {
                console.log("local data", this.isData);
                this.playgroundInitial();
                this.compoundSave = false;
                this.compound_Wall = 1;
            }
        });
    }
    checkWaterLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_water_schooldata' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.waterSave = true;
                console.log(this.dataList, "dataList");
                if (id == 2) {
                    this.waterData = 2;
                }
                this.water.patchValue({
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.VistUId, null),
                    "WatAvaiSchool": this.dataList[0].WatAvaiSchool,
                    "ResUnAvaiWater": this.dataList[0].ResUnAvaiWater,
                    "srcWaterAvai": this.dataList[0].srcWaterAvai ? Array.from(this.dataList[0].srcWaterAvai.split(",")) : null,
                    "srcWaterOthers": this.dataList[0].srcWaterOthers,
                    "BorWelFunc": this.dataList[0].BorWelFunc,
                    // "BorwelClosed": this.dataList[0].BorwelClosed,
                    // "BorWelReqReapir": this.dataList[0].BorWelReqReapir,
                    // "DWWatAvai": this.dataList[0].DWWatAvai,
                    "FreqWaterAvail": this.dataList[0].FreqWaterAvail,
                    "DWSumpYn": this.dataList[0].DWSumpYn == "false" ? false : this.dataList[0].DWSumpYn == "true" ? true : this.dataList[0].DWSumpYn,
                    "DWSumpFun": this.dataList[0].DWSumpFun,
                    "DWSumpAvai": this.dataList[0].DWSumpAvai,
                    "DWPumpYn": this.dataList[0].DWPumpYn == "false" ? false : this.dataList[0].DWPumpYn == "true" ? true : this.dataList[0].DWPumpYn,
                    "DWPumpFun": this.dataList[0].DWPumpFun,
                    "DWPumpRepair": this.dataList[0].DWPumpRepair,
                    "NumDWStation": this.dataList[0].NumDWStation,
                    "WaterRoFunc": this.dataList[0].WaterRoFunc,
                    "srcDrnkWaterAvai": this.dataList[0].srcDrnkWaterAvai,
                    "srcDrnkWaterAvaiOthers": this.dataList[0].srcDrnkWaterAvaiOthers,
                    "WaterComHandwash": this.dataList[0].WaterComHandwash,
                });
                if (this.water.value.srcDrnkWaterAvai) {
                    this.onMultiSelectChangeWater2(this.water.value.srcDrnkWaterAvai, 1);
                }
            }
            else {
                console.log("local data", this.isData);
                this.waterInitial();
                this.waterSave = false;
                this.waterData = 1;
            }
        });
    }
    getOnMultiSelectChange(event) {
        this.activeHeight = false;
        this.activeLevelling = false;
        for (let i = 0; i <= event.length; i++) {
            console.log(event[i], "121324", event);
            if (event[i] == "1") {
                this.activeHeight = true;
            }
            if (event[i] == "2") {
                this.activeLevelling = true;
            }
        }
        if (this.activeHeight) {
            this.form.controls['AuditoriumStageArea'].setValue(this.dataList[0].AuditoriumStageArea);
            this.form.controls['AuditoriumStageArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            this.form.controls['AuditoriumStageHeight'].setValue(this.dataList[0].AuditoriumStageHeight);
            this.form.controls['AuditoriumStageHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        }
        else {
            this.form.controls['AuditoriumStageArea'].setValue("");
            this.form.controls['AuditoriumStageArea'].setValidators(null);
            this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            this.form.controls['AuditoriumStageHeight'].setValue("");
            this.form.controls['AuditoriumStageHeight'].setValidators(null);
            this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        }
        if (this.activeLevelling) {
            this.form.controls['AuditoriumStageAreaLevel'].setValue(this.dataList[0].AuditoriumStageAreaLevel);
            this.form.controls['AuditoriumStageAreaLevel'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
        else {
            this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            this.form.controls['AuditoriumStageAreaLevel'].setValidators(null);
            this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
    }
    ionViewWillLeave() {
        // this.form.reset();
    }
    onSyncSave() {
        let data = {
            "records": {
                "IndexId": "",
                "SchlId": this.SchlId,
                "VistUId": this.VistUId,
                "EBliShiYn": this.safety.value.EBliShiYn == "false" ? 2 : this.safety.value.EBliShiYn == "true" ? 1 : this.safety.value.EBliShiYn == true ? 1 : 2,
                "RefilAreReq": this.safety.value.RefilAreReq == "false" ? 2 : this.safety.value.RefilAreReq == "true" ? 1 : this.safety.value.RefilAreReq == true ? 1 : 2,
                // "RefilSqft": this.safety.value.RefilSqft,
                "WatLoggYn": this.safety.value.WatLoggYn == "false" ? 2 : this.safety.value.WatLoggYn == "true" ? 1 : this.safety.value.WatLoggYn == true ? 1 : 2,
                "WatLogRepair": this.safety.value.WatLogRepair,
                // "TrePrunReq":this.safety.value.TrePrunReq == "false" ?  2 : this.safety.value.TrePrunReq == "true" ?  1 : this.safety.value.TrePrunReq == true ? 1 : 2,
                "OpenWellYn": this.safety.value.OpenWellYn == "false" ? 2 : this.safety.value.OpenWellYn == "true" ? 1 : this.safety.value.OpenWellYn == true ? 1 : 2,
                "CmnDustbinYN": this.safety.value.CmnDustbinYN == "false" ? 2 : this.safety.value.CmnDustbinYN == "true" ? 1 : this.safety.value.CmnDustbinYN == true ? 1 : 2,
                // "ChulhaYn":this.safety.value.ChulhaYn == "false" ?  2 : this.safety.value.ChulhaYn == "true" ?  1 : this.safety.value.ChulhaYn == true ? 1 : 2,
                // "ChulhaFunc": this.safety.value.ChulhaFunc,
                // "ChulhaRepair": this.safety.value.ChulhaRepair,
                // "SChSepticTank":this.safety.value.SChSepticTank == "false" ?  2 : this.safety.value.SChSepticTank == "true" ?  1 : this.safety.value.SChSepticTank == true ? 1 : 2,
                // "SepticTankFun": this.safety.value.SepticTankFun,
                // "SepticTankRepaired": this.safety.value.SepticTankRepaired,
                "PlaygroYn": this.playground.value.PlaygroYn == "false" ? 2 : this.playground.value.PlaygroYn == "true" ? 1 : this.playground.value.PlaygroYn == true ? 1 : 2,
                "PlaygroOutdoorGamYn": this.playground.value.PlaygroOutdoorGamYn == "false" ? 2 : this.playground.value.PlaygroOutdoorGamYn == "true" ? 1 : this.playground.value.PlaygroOutdoorGamYn == true ? 1 : 2,
                "PlaygroArea": this.playground.value.PlaygroArea,
                // "PlayKerbwall":this.playground.value.PlayKerbwall == "false" ?  2 : this.playground.value.PlayKerbwall == "true" ?  1 : this.playground.value.PlayKerbwall == true ? 1 : 2,
                // "OutsiClsYN":this.playground.value.OutsiClsYN == "false" ?  2 : this.playground.value.OutsiClsYN == "true" ?  1 : this.playground.value.OutsiClsYN == true ? 1 : 2,
                "OutsiClsNum": this.playground.value.OutsiClsNum,
                "WatAvaiSchool": this.water.value.WatAvaiSchool,
                "ResUnAvaiWater": this.water.value.ResUnAvaiWater ? this.water.value.ResUnAvaiWater.toString() : this.water.value.ResUnAvaiWater,
                "srcWaterAvai": this.water.value.srcWaterAvai ? this.water.value.srcWaterAvai.toString() : this.water.value.srcWaterAvai,
                "srcWaterOthers": this.water.value.srcWaterOthers,
                "BorWelFunc": this.water.value.BorWelFunc,
                // "BorwelClosed": this.water.value.BorwelClosed,
                // "BorWelReqReapir": this.water.value.BorWelReqReapir,
                // "DWWatAvai": this.water.value.DWWatAvai,
                "FreqWaterAvail": this.water.value.FreqWaterAvail,
                "DWSumpYn": this.water.value.DWSumpYn == "false" ? 2 : this.water.value.DWSumpYn == "true" ? 1 : this.water.value.DWSumpYn == true ? 1 : 2,
                "DWSumpFun": this.water.value.DWSumpFun,
                "DWSumpAvai": this.water.value.DWSumpAvai,
                "DWPumpYn": this.water.value.DWPumpYn == "false" ? 2 : this.water.value.DWPumpYn == "true" ? 1 : this.water.value.DWPumpYn == true ? 1 : 2,
                "DWPumpFun": this.water.value.DWPumpFun,
                "DWPumpRepair": this.water.value.DWPumpRepair,
                "NumDWStation": this.water.value.NumDWStation,
                "WaterRoFunc": this.water.value.WaterRoFunc,
                "srcDrnkWaterAvai": this.water.value.srcDrnkWaterAvai.toString(),
                "srcDrnkWaterAvaiOthers": this.water.value.srcDrnkWaterAvaiOthers,
                "WaterComHandwash": this.water.value.WaterComHandwash,
                "CmpdwallSta": this.compoundWall.value.CmpdwallSta,
                "CmpdwallReqLen": this.compoundWall.value.CmpdwallReqLen,
                "CmpdwallReqt": this.compoundWall.value.CmpdwallReqt ? this.compoundWall.value.CmpdwallReqt.toString() : this.compoundWall.value.CmpdwallReqt,
                "CmpdwallHTInc": this.compoundWall.value.CmpdwallHTInc,
                // "CmpdwallLength": this.compoundWall.value.CmpdwallLength,
                "AreaWW": this.compoundWall.value.AreaWW,
                "AreaReplastering": this.compoundWall.value.AreaReplastering,
                "AreaBrickwork": this.compoundWall.value.AreaBrickwork,
                "SchoolTotalGates": this.compoundWall.value.SchoolTotalGates,
                "GateFunc": this.compoundWall.value.GateFunc,
            }
        };
        console.log(data, 'jhbdubwjsbdb');
        this.sidsService.SecSidsSchlGenrlInfo(data).subscribe(res => {
            if (res.dataStatus) {
                this.insertLocalDB();
                this.alertService.success('Saved Successfully');
            }
        });
    }
    insertLocalDB() {
        const datainsert = "INSERT INTO sidsCommonServer VALUES (?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, "1"]).then(insertres => {
            console.log('server inserted successfully', insertres);
            this.goToBack();
        });
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    showRemarks(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'HM Remarks',
                message: data,
                buttons: ['Close'],
            });
            yield alert.present();
        });
    }
};
CommonspacesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService }
];
CommonspacesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-commonspaces',
        template: _raw_loader_commonspaces_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_commonspaces_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonspacesPage);



/***/ }),

/***/ 4567:
/*!************************************************************************!*\
  !*** ./src/app/pages/sids/general/commonspaces/commonspaces.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.commonMenu {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: var(--ion-color-primary);\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.btn-present {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.row-line-local {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: #70BBFF;\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #70BBFF;\n}\n\n.local {\n  background-color: #EDDEFF !important;\n  border-radius: 15px;\n  height: 100%;\n  padding: 10px;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  padding: 10px;\n  width: 100%;\n  margin: 5px 0px;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 5px;\n  border-radius: 10px;\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnNwYWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUVFLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUdBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFBQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BOzs7RUFHRSxlQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFPQSxTQUFBOztBQUdBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVdBLE9BQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQWFBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWVBLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFpQkEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQW1CQSxRQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRjs7QUFxQkEsT0FBQTs7QUFNQTtFQUNFLFdBQUE7QUF2QkY7O0FBMEJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF2QkY7O0VBeUJBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF0QkY7O0VBd0JBOztJQUVFLGVBQUE7SUFDQSxtQkFBQTtFQXJCRjtBQUNGOztBQXdCQTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUF0QkY7O0FBOEJBO0VBQ0UsVUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBM0JGOztBQThCQTtFQUNFLFVBQUE7QUEzQkY7O0FBb0NBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBakNGOztBQW9DQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWpDRjs7QUF3Q0E7RUFDRSwwQkFBQTtBQXJDRjs7QUF3Q0E7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXJDSjs7QUF3Q0E7RUFDRyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXJDSDs7QUF3Q0U7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBckNOOztBQXdDQTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQXJDRjs7QUF3Q0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJDSjs7QUF1Q0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXBDRjs7QUFzQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFuQ0Y7O0FBcUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbENGOztBQXFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWxDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFtQ0E7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBaENGOztBQWtDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUEvQkY7O0FBaUNBO0VBQ0UsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTlCRjs7QUFnQ0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBOUJKOztBQWdDQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBOUJKOztBQWtDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUEvQkY7O0FBa0NBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWtDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBL0JGIiwiZmlsZSI6ImNvbW1vbnNwYWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQm90dG9tMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm1hcmdpblRvcDAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3A1IHtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkLWNvbnRhaW5lciB7XHJcbiAgLy8gd2lkdGg6IDkzJTtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAvLyBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNkLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmVUZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50aW1lbGluZUljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZC1hdXRob3Ige1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jY2QtdGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBtYXJnaW4tdG9wOiAyZW07XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xyXG4gIC8qIHRoaXMgaXMgdGhlIHZlcnRpY2FsIGxpbmUgKi9cclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1pY29uIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgY29sb3I6ICMzMDNlNDk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKkNPTE9SUyovXHJcblxyXG5cclxuLypQT1NJVElWRSovXHJcblxyXG4ucG9zaXRpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuLnBvc2l0aXZlIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG5cclxuLypDQUxNKi9cclxuXHJcbi5jYWxtIHtcclxuICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbn1cclxuXHJcbi5jYWxtIGkge1xyXG4gIGNvbG9yOiAjNDNjZWU2O1xyXG59XHJcblxyXG5cclxuLypCQUxBTkNFRCovXHJcblxyXG4uYmFsYW5jZWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2Y2MzMztcclxufVxyXG5cclxuLmJhbGFuY2VkIGkge1xyXG4gIGNvbG9yOiAjNjZjYzMzO1xyXG59XHJcblxyXG5cclxuLypFTkVSR0laRUQqL1xyXG5cclxuLmVuZXJnaXplZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG4uZW5lcmdpemVkIGkge1xyXG4gIGNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG5cclxuLypBU1NFUlRJVkUqL1xyXG5cclxuLmFzc2VydGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG4uYXNzZXJ0aXZlIGkge1xyXG4gIGNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG5cclxuLypST1lBTCovXHJcblxyXG4ucm95YWwge1xyXG4gIGJvcmRlci1jb2xvcjogIzhhNmRlOTtcclxufVxyXG5cclxuLnJveWFsIGkge1xyXG4gIGNvbG9yOiAjOGE2ZGU5O1xyXG59XHJcblxyXG5cclxuLypEQVJLKi9cclxuXHJcbi8vIC5kYXJrIHtcclxuLy8gICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbi8vIH1cclxuXHJcbi5kYXJrIGkge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLy8gaW9uLWxhYmVsIHtcclxuICAvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcblxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206MS4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4vLyBpb24tc2VsZWN0IHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4vLyB9XHJcblxyXG4uaW5wdXQtY2xyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OjBweDtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi8vIGlvbi1pbnB1dCB7XHJcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tbm8tcGFkZGluZ3tcclxuICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RkE7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5pb24tbm8tcGFkZGluZy1xdWVzdGlvbntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hZGQge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1zYXZlIHtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG59XHJcbi5mb290ZXItbm90IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uZm9vdGVyLXZlcmlmaWVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICBwYWRkaW5nOiAxMHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uc2lkc1ZpZXd7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIGJvcmRlci1jb2xvcjogIzhCNjdCMztcclxuICBjb2xvcjogIzhCNjdCMztcclxufVxyXG5cclxuLnF1ZXNDb2xvcntcclxuICBiYWNrZ3JvdW5kOiAjRjNGNEZBO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iZ0NoZWNre1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogOTQlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5pb24tdG9nZ2xle1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxufVxyXG4uY29tbW9uTWVudXtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBOyBcclxuICBib3JkZXItcmFkaXVzOiAxNXB4OyBcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFkZEJ1dHRvbntcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1wcmVzZW50XHJcbntcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzRDQUY1MCFpbXBvcnRhbnQ7IFxyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tYWJzZW50XHJcbntcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIC0tYmFja2dyb3VuZDojZjgyMzM5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG5cclxufVxyXG5cclxuLnJvdy1saW5lLWxvY2Fse1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQUVBRUE7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxyXG4gIGJhY2tncm91bmQ6ICM3MEJCRkY7IFxyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwQkJGRjtcclxufVxyXG5cclxuLmxvY2FsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURERUZGICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDEwMCU7IFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXJ2ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EzN0E1QyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTsgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbi5zeW5jU2VydmVye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59Il19 */");

/***/ }),

/***/ 56224:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/general/commonspaces/commonspaces.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Common Spaces ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"sidsView\">\r\n    <ion-row >\r\n      <div [ngClass]=\"(commonSpace == 1) ? 'commonMenu' : (commonSpace == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(1)\">\r\n        <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n          <ion-label style=\"font-size: 17px;\">Safety and Sanitation</ion-label>\r\n        <ion-col col=\"1\" >\r\n          <ion-icon *ngIf=\"tabsData != 1\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n          <ion-icon *ngIf=\"tabsData == 1\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        </ion-col>\r\n      </div>\r\n  <div *ngIf=\"tabsData == 1\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"safety\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there an EB HT power line crossing over the school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.EBliShiYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.EBliShiYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.EBliShiYn?true:false}}\"\r\n                      formControlName=\"EBliShiYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there any low lying area (inclusive of playground) in school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.RefilAreReq\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.RefilAreReq\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.RefilAreReq?true:false}}\"\r\n                      formControlName=\"RefilAreReq\" (ionChange)=\"onToggleChange($event, 1)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.RefilAreReq\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Volume to be Refilled (cubic ft) <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"RefilSqft\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                  (ionChange)=\"onInputChange($event.detail.value, 1)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['RefilSqft'].hasError('required') && (safety.controls['RefilSqft'].dirty || safety.controls['RefilSqft'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.RefilSqft.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there water logging within the school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.WatLoggYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.WatLoggYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.WatLoggYn?true:false}}\"\r\n                      formControlName=\"WatLoggYn\" (ionChange)=\"onToggleChange($event, 8)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.WatLoggYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Repair Required<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WatLogRepair\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of WaterLog\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['WatLogRepair'].hasError('required') && (safety.controls['WatLogRepair'].dirty || safety.controls['WatLogRepair'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Are there trees or shrubbery to be pruned in the campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.TrePrunReq\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.TrePrunReq\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.TrePrunReq?true:false}}\"\r\n                      formControlName=\"TrePrunReq\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Are there any uncover open wells within the campus of the school?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.OpenWellYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.OpenWellYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.OpenWellYn?true:false}}\"\r\n                      formControlName=\"OpenWellYn\" >\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have a common dustbin of adequate size? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.CmnDustbinYN\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.CmnDustbinYN\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.CmnDustbinYN?true:false}}\"\r\n                      formControlName=\"CmnDustbinYN\" >\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              6\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have smokless incinerators? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.ChulhaYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.ChulhaYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.ChulhaYn?true:false}}\"\r\n                      formControlName=\"ChulhaYn\" (ionChange)=\"onToggleChange($event, 2)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.ChulhaYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              6A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Number of Functional Units<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"ChulhaFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['ChulhaFunc'].hasError('required') && (safety.controls['ChulhaFunc'].dirty || safety.controls['ChulhaFunc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.ChulhaFunc.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.ChulhaYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              6B\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Units to be Repaired <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"ChulhaRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['ChulhaRepair'].hasError('required') && (safety.controls['ChulhaRepair'].dirty || safety.controls['ChulhaRepair'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.ChulhaRepair.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have septic tanks? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.SChSepticTank\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.SChSepticTank\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.SChSepticTank?true:false}}\"\r\n                      formControlName=\"SChSepticTank\" (ionChange)=\"onToggleChange($event, 3)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.SChSepticTank\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Number of Functional Units <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"SepticTankFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['SepticTankFun'].hasError('required') && (safety.controls['SepticTankFun'].dirty || safety.controls['SepticTankFun'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.SepticTankFun.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.SChSepticTank\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7B\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Units to be Repaired <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"SepticTankRepaired\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['SepticTankRepaired'].hasError('required') && (safety.controls['SepticTankRepaired'].dirty || safety.controls['SepticTankRepaired'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.SepticTankRepaired.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n    <ion-row (click)=\"onSave(1)\" *ngIf=\"!serverDatas\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(playGround == 1) ? 'commonMenu' : (playGround == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(2)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Playground</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 2\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 2\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 2\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"playground\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have a playground? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.PlaygroYn\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.PlaygroYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.PlaygroYn?true:false}}\"\r\n                        formControlName=\"PlaygroYn\" (ionChange)=\"onToggleChange($event, 4)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"!playground.value.PlaygroYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Whether school has made adequate arrangements for children to play outdoor games and other\r\n                    physical activities in an adjoining playground/municipal park <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.PlaygroOutdoorGamYn\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.PlaygroOutdoorGamYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.PlaygroOutdoorGamYn?true:false}}\"\r\n                        formControlName=\"PlaygroOutdoorGamYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.PlaygroYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Playground (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"PlaygroArea\" style=\"border-bottom: 1px solid;\" maxlength=\"8\" (ionChange)=\"onInputChange($event.detail.value, 1)\"\r\n                    (ionChange)=\"onInputChange($event.detail.value, 6)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"playSubmitted && playground.controls['PlaygroArea'].hasError('required') && (playground.controls['PlaygroArea'].dirty || playground.controls['PlaygroArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"playground.controls.PlaygroArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.PlaygroYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Does the playground have a kerbwall? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.PlayKerbwall\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.PlayKerbwall\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.PlayKerbwall?true:false}}\"\r\n                        formControlName=\"PlayKerbwall\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of  classes happening outside in the labs/varendah/ tree shade/ auditorium/ community hall etc. due to lack of classroom?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"3\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.OutsiClsYN\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.OutsiClsYN\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.OutsiClsYN?true:false}}\"\r\n                        formControlName=\"OutsiClsYN\" (ionChange)=\"onToggleChange($event, 5)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of  classes happening outside in the labs/varendah/ tree shade/ auditorium/ community hall etc. due to lack of classroom?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"OutsiClsNum\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"safetySubmitted && playground.controls['OutsiClsNum'].hasError('required') && (playground.controls['OutsiClsNum'].dirty || playground.controls['OutsiClsNum'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"playground.controls.OutsiClsNum.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.OutsiClsYN\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Classes<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"OutsiClsNum\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onInputChange($event.detail.value, 14)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"playSubmitted && playground.controls['OutsiClsNum'].hasError('required') && (playground.controls['OutsiClsNum'].dirty || playground.controls['OutsiClsNum'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"playground.controls.OutsiClsNum.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n      <ion-row (click)=\"onSave(2)\" *ngIf=\"!serverDatas\">\r\n        <ion-col size=\"4\" class=\"addButton\">\r\n          <p style=\"text-align: center; margin:5px\">Save</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(waterData == 1) ? 'commonMenu' : (waterData == 2) ? 'row-line-local' : 'server'\" class=\"commonMenu\" (click)=\"getTabs(3)\">\r\n    <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Water</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 3\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"water\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Is water availabile in the school? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WatAvaiSchool\"\r\n                    style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChangeWater($event.detail.value, 1)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of srcWaterSchool\" > {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['WatAvaiSchool'].hasError('required') && (water.controls['WatAvaiSchool'].dirty || water.controls['WatAvaiSchool'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 1\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n  \r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Reason for Unavailability of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ResUnAvaiWater\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\"\r\n                    >\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of UnavailabilityWater\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['ResUnAvaiWater'].hasError('required') && (water.controls['ResUnAvaiWater'].dirty || water.controls['ResUnAvaiWater'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n  \r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Source of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"srcWaterAvai\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\"\r\n                      (ionChange)=\"onMultiSelectChangeWater($event.detail.value, '')\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of sourceOfWater\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['srcWaterAvai'].hasError('required') && (water.controls['srcWaterAvai'].dirty || water.controls['srcWaterAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.srcWaterAvai == 3\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A.a\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Others<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                    formControlName=\"srcWaterOthers\" style=\"border-bottom: 1px solid;\" \r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['srcWaterOthers'].hasError('required') && (water.controls['srcWaterOthers'].dirty || water.controls['srcWaterOthers'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of Functional Borewells <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorWelFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorWelFunc'].hasError('required') && (water.controls['BorWelFunc'].dirty || water.controls['BorWelFunc'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorWelFunc.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of Defunct Borewells to be closed <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorwelClosed\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorwelClosed'].hasError('required') && (water.controls['BorwelClosed'].dirty || water.controls['BorwelClosed'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorwelClosed.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n              C\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Borewells requiring flushing<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorWelReqReapir\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorWelReqReapir'].hasError('required') && (water.controls['BorWelReqReapir'].dirty || water.controls['BorWelReqReapir'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorWelReqReapir.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Frequency of Availability of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FreqWaterAvail\"\r\n                    style=\"max-width: 100% !important;\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of FreqAvailability\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['FreqWaterAvail'].hasError('required') && (water.controls['FreqWaterAvail'].dirty || water.controls['FreqWaterAvail'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the School have any Sumps? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"water.value.DWSumpYn\"> Yes</div>\r\n                      <div *ngIf=\"!water.value.DWSumpYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{water.value.DWSumpYn?true:false}}\"\r\n                        formControlName=\"DWSumpYn\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWSumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Functional Sumps<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWSumpFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWSumpFun'].hasError('required') && (water.controls['DWSumpFun'].dirty || water.controls['DWSumpFun'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWSumpFun.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWSumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Sumps requiring Cleaning/ Repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWSumpAvai\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,24)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWSumpAvai'].hasError('required') && (water.controls['DWSumpAvai'].dirty || water.controls['DWSumpAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWSumpAvai.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have any Motor pumps? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"water.value.DWPumpYn\"> Yes</div>\r\n                      <div *ngIf=\"!water.value.DWPumpYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{water.value.DWPumpYn?true:false}}\"\r\n                        formControlName=\"DWPumpYn\" (ionChange)=\"onToggleChange($event, 11)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWPumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Functional Motor Pumps<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWPumpFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,26)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWPumpFun'].hasError('required') && (water.controls['DWPumpFun'].dirty || water.controls['DWPumpFun'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWPumpFun.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWPumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Motor Pumps requiring Repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWPumpRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,27)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWPumpRepair'].hasError('required') && (water.controls['DWPumpRepair'].dirty || water.controls['DWPumpRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWPumpRepair.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- water yes mean -->\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2\"> \r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Common Drinking Water Taps <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"NumDWStation\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,27)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['NumDWStation'].hasError('required') && (water.controls['NumDWStation'].dirty || water.controls['NumDWStation'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.NumDWStation.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\"> \r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Functinal RO system available<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"WaterRoFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,27)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['WaterRoFunc'].hasError('required') && (water.controls['WaterRoFunc'].dirty || water.controls['WaterRoFunc'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.WaterRoFunc.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Source of drinking water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"srcDrnkWaterAvai\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\"\r\n                      (ionChange)=\"onMultiSelectChangeWater2($event.detail.value,1)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of sourceOfDrinkingWater\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['srcDrnkWaterAvai'].hasError('required') && (water.controls['srcDrnkWaterAvai'].dirty || water.controls['srcDrnkWaterAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n \r\n \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.srcDrnkWaterAvai == 7\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4A\r\n              </div>\r\n \r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Others<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n                    formControlName=\"srcDrnkWaterAvaiOthers\" style=\"border-bottom: 1px solid;\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['srcDrnkWaterAvaiOthers'].hasError('required') && (water.controls['srcDrnkWaterAvaiOthers'].dirty || water.controls['srcDrnkWaterAvaiOthers'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n \r\n            </div>\r\n          </div>\r\n        </section>\r\n \r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Common Handwash taps available<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"WaterComHandwash\" style=\"border-bottom: 1px solid;\" maxlength=\"2\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['WaterComHandwash'].hasError('required') && (water.controls['WaterComHandwash'].dirty || water.controls['WaterComHandwash'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.WaterComHandwash.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      <ion-row (click)=\"onSave(3)\" *ngIf=\"!serverDatas\">\r\n        <ion-col size=\"4\" class=\"addButton\">\r\n          <p style=\"text-align: center; margin:5px\">Save</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(compound_Wall == 1) ? 'commonMenu' : (compound_Wall == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(4)\">\r\n    <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Compound Wall</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 4\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 4\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 4\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"compoundWall\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Status of Compound Wall<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CmpdwallSta\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 1)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of compoundWallList\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallSta'].hasError('required') && (compoundWall.controls['CmpdwallSta'].dirty || compoundWall.controls['CmpdwallSta'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.CmpdwallSta == 2 || compoundWall.value.CmpdwallSta == 5\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Running length of compound wall required (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallReqLen\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,8)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallReqLen'].hasError('required') && (compoundWall.controls['CmpdwallReqLen'].dirty || compoundWall.controls['CmpdwallReqLen'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallReqLen.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.CmpdwallSta == 1 || compoundWall.value.CmpdwallSta == 2\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Requirement<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CmpdwallReqt\" multiple=\"true\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of requirementList\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallReqt'].hasError('required') && (compoundWall.controls['CmpdwallReqt'].dirty || compoundWall.controls['CmpdwallReqt'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"replasActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\"> \r\n                <ion-label>Area of Replastering (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReplastering\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"7\" (ionChange)=\"onInputChange($event.detail.value, 11)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaReplastering'].hasError('required') && (compoundWall.controls['AreaReplastering'].dirty || compoundWall.controls['AreaReplastering'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaReplastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"heiActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Height to be Increased (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallHTInc\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,9)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallHTInc'].hasError('required') && (compoundWall.controls['CmpdwallHTInc'].dirty || compoundWall.controls['CmpdwallHTInc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallHTInc.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"lengthActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Length to be Increased (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallLength\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                  (ionChange)=\"onInputChange($event.detail.value, 15)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && compoundWall.controls['CmpdwallLength'].hasError('required') && (compoundWall.controls['CmpdwallLength'].dirty || compoundWall.controls['CmpdwallLength'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"wwActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Area to be Whitewashed/ Painted (in sqft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"AreaWW\" style=\"border-bottom: 1px solid;\" maxlength=\"7\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,10)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaWW'].hasError('required') && (compoundWall.controls['AreaWW'].dirty || compoundWall.controls['AreaWW'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaWW.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"brickActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Area of Brickwork (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaBrickwork\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"7\" (ionChange)=\"onInputChange($event.detail.value,12)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaBrickwork'].hasError('required') && (compoundWall.controls['AreaBrickwork'].dirty || compoundWall.controls['AreaBrickwork'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaBrickwork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Total gates in the school<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000000;text-align: end;\">\r\n                    <div *ngIf=\"compoundWall.value.GateYn\"> Yes</div>\r\n                    <div *ngIf=\"!compoundWall.value.GateYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{compoundWall.value.GateYn?true:false}}\"\r\n                      formControlName=\"GateYn\" (ionChange)=\"onToggleChange($event, 6)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Total gates in the school<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"SchoolTotalGates\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"1\" (ionChange)=\"onInputChange($event.detail.value, 14)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['SchoolTotalGates'].hasError('required') && (compoundWall.controls['SchoolTotalGates'].dirty || compoundWall.controls['SchoolTotalGates'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.SchoolTotalGates.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.SchoolTotalGates\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of functional gates <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"GateFunc\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"1\" (ionChange)=\"onInputChange($event.detail.value, 13)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['GateFunc'].hasError('required') && (compoundWall.controls['GateFunc'].dirty || compoundWall.controls['GateFunc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.GateFunc.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    <ion-row (click)=\"onSave(4)\" *ngIf=\"!serverDatas\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n</ion-row>\r\n  <ion-row class=\"syncServer\" *ngIf=\"!serverDatas && safetySave && playgroundSave && compoundSave && waterSave\">\r\n    <ion-col (click)=\"onSyncSave()\" size=\"12\" class=\"add\">\r\n      <ion-label> Sync Server </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"!serverDatas\">\r\n  <ion-row (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n      <ion-label> Save </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_general_commonspaces_commonspaces_module_ts-es2015.js.map