(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-general_primary-commonspaces_primary-commonspaces_m-24c094"],{

/***/ 20604:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryCommonspacesPageRoutingModule": function() { return /* binding */ PrimaryCommonspacesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _primary_commonspaces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-commonspaces.page */ 17733);




const routes = [
    {
        path: '',
        component: _primary_commonspaces_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryCommonspacesPage
    }
];
let PrimaryCommonspacesPageRoutingModule = class PrimaryCommonspacesPageRoutingModule {
};
PrimaryCommonspacesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrimaryCommonspacesPageRoutingModule);



/***/ }),

/***/ 64701:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces.module.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryCommonspacesPageModule": function() { return /* binding */ PrimaryCommonspacesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _primary_commonspaces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-commonspaces-routing.module */ 20604);
/* harmony import */ var _primary_commonspaces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-commonspaces.page */ 17733);







let PrimaryCommonspacesPageModule = class PrimaryCommonspacesPageModule {
};
PrimaryCommonspacesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _primary_commonspaces_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryCommonspacesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_primary_commonspaces_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryCommonspacesPage]
    })
], PrimaryCommonspacesPageModule);



/***/ }),

/***/ 17733:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces.page.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryCommonspacesPage": function() { return /* binding */ PrimaryCommonspacesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_primary_commonspaces_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./primary-commonspaces.page.html */ 61741);
/* harmony import */ var _primary_commonspaces_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-commonspaces.page.scss */ 62726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);












let PrimaryCommonspacesPage = class PrimaryCommonspacesPage {
    constructor(router, formBuilder, route, networkService, alertController, sqliteDB, utilityService, userSessionService, alertService, el) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.networkService = networkService;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.utilityService = utilityService;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.el = el;
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
        this.visitstatus = this.routeData.queryParams.visitstatus;
        this.serverData();
    }
    serverData() {
        let query = 'SELECT * FROM sidsPrimaryCommonServer' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                console.log('Server', dataListData);
                if (dataListData[0].Status == 3) {
                    this.serverDatas = true;
                    this.commonSpace = 3;
                    this.playGround = 3;
                    this.waterData = 3;
                    this.compound_Wall = 3;
                    this.checkSafetyLocalDb(1);
                    this.checkPlaygroundLocalDb(1);
                    this.checkCompoundWallLocalDb(1);
                    this.checkWaterLocalDb(1);
                }
                else {
                    this.serverDatas = false;
                    console.log('Local Status');
                    this.checkSafetyLocalDb(2);
                    this.checkPlaygroundLocalDb(2);
                    this.checkCompoundWallLocalDb(2);
                    this.checkWaterLocalDb(2);
                }
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
            "IndexId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
            "EBliShiYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "RefilAreReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "RefilSqft": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "WatLoggYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "WatLogRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "TrePrunReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "OpenWellYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "CmnDustbinYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "ChulhaYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "ChulhaFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "ChulhaRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SChSepticTank": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "SepticTankFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SepticTankRepaired": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    playgroundInitial() {
        this.playground = this.formBuilder.group({
            "IndexId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
            "PlaygroYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "PlaygroArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "PlayKerbwall": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            // "PlayLevelling": new FormControl(false, null),
            "OutsiClsYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "OutsiClsNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    compoundWallInitial() {
        this.compoundWall = this.formBuilder.group({
            "IndexId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
            "CmpdwallSta": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            "CmpdwallReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "CmpdwallReqt": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "CmpdwallHTInc": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            // "CmpdwallLength": new FormControl('', null),
            "AreaWW": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "AreaBrickwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "GateYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "GateFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    waterInitial() {
        this.water = this.formBuilder.group({
            "IndexId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
            "WatAvaiSchool": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            "ResUnAvaiWater": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "srcWaterAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "BorWelFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "BorwelClosed": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "BorWelReqReapir": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "DWWatAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "DWSumpYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "DWSumpFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "DWSumpAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "DWPumpYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false, null),
            "DWPumpFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "DWPumpRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            "NumDWStation": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    onToggleChange(event, id) {
        if (id == 1) {
            if (this.safety.value.RefilAreReq) {
                this.safety.controls['RefilSqft'].setValue('');
                this.safety.controls['RefilSqft'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            }
            else {
                this.safety.controls['RefilSqft'].setValue('');
                this.safety.controls['RefilSqft'].setValidators(null);
            }
            this.safety.controls['RefilSqft'].updateValueAndValidity();
        }
        if (id == 2) {
            if (this.safety.value.ChulhaYn) {
                this.safety.controls['ChulhaFunc'].setValue('');
                this.safety.controls['ChulhaFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
                this.safety.controls['ChulhaRepair'].setValue('');
                this.safety.controls['ChulhaRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            }
            else {
                this.safety.controls['ChulhaFunc'].setValue('');
                this.safety.controls['ChulhaFunc'].setValue('');
                this.safety.controls['ChulhaRepair'].setValidators(null);
                this.safety.controls['ChulhaRepair'].setValidators(null);
            }
            this.safety.controls['ChulhaFunc'].updateValueAndValidity();
            this.safety.controls['ChulhaRepair'].updateValueAndValidity();
        }
        if (id == 3) {
            if (this.safety.value.SChSepticTank) {
                this.safety.controls['SepticTankFun'].setValue('');
                this.safety.controls['SepticTankFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
                this.safety.controls['SepticTankRepaired'].setValue('');
                this.safety.controls['SepticTankRepaired'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            }
            else {
                this.safety.controls['SepticTankFun'].setValue('');
                this.safety.controls['SepticTankFun'].setValue('');
                this.safety.controls['SepticTankRepaired'].setValidators(null);
                this.safety.controls['SepticTankRepaired'].setValidators(null);
            }
            this.safety.controls['SepticTankFun'].updateValueAndValidity();
            this.safety.controls['SepticTankRepaired'].updateValueAndValidity();
        }
        if (id == 4) {
            if (this.playground.value.PlaygroYn) {
                this.playground.controls['PlaygroArea'].setValue('');
                this.playground.controls['PlaygroArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
                this.playground.controls['PlayKerbwall'].setValue(false);
            }
            else {
                this.playground.controls['PlaygroArea'].setValue('');
                this.playground.controls['PlaygroArea'].setValidators(null);
                this.playground.controls['PlayKerbwall'].setValue(false);
            }
            this.playground.controls['PlaygroArea'].updateValueAndValidity();
            this.playground.controls['PlayKerbwall'].updateValueAndValidity();
        }
        if (id == 5) {
            if (this.playground.value.OutsiClsYN) {
                this.playground.controls['OutsiClsNum'].setValue('');
                this.playground.controls['OutsiClsNum'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            }
            else {
                this.playground.controls['OutsiClsNum'].setValue('');
                this.playground.controls['OutsiClsNum'].setValidators(null);
            }
            this.playground.controls['OutsiClsNum'].updateValueAndValidity();
        }
        if (id == 6) {
            if (this.compoundWall.value.GateYn) {
                this.compoundWall.controls['GateFunc'].setValue('');
                this.compoundWall.controls['GateFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            }
            else {
                this.compoundWall.controls['GateFunc'].setValue('');
                this.compoundWall.controls['GateFunc'].setValidators(null);
            }
            this.compoundWall.controls['GateFunc'].updateValueAndValidity();
        }
        if (id == 8) {
            if (this.safety.value.WatLoggYn) {
                this.safety.controls['WatLogRepair'].setValue('');
                this.safety.controls['WatLogRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
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
                this.compoundWall.controls['CmpdwallReqt'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
                this.compoundWall.controls['CmpdwallReq'].setValue("");
                this.compoundWall.controls['CmpdwallReq'].setValidators(null);
            }
            else {
                this.compoundWall.controls['CmpdwallReqt'].setValidators(null);
                this.compoundWall.controls['CmpdwallReqt'].updateValueAndValidity;
            }
            if (this.compoundWall.value.CmpdwallSta == 2 || this.compoundWall.value.CmpdwallSta == 5) {
                this.compoundWall.controls['CmpdwallReq'].setValue("");
                this.compoundWall.controls['CmpdwallReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
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
            else {
                this.compoundWall.controls['CmpdwallReq'].setValidators(null);
                this.compoundWall.controls['CmpdwallReq'].updateValueAndValidity;
            }
            this.compoundWall.controls['CmpdwallReq'].updateValueAndValidity();
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
    onMultiSelectChangeWater(event) {
        this.BorWelActive = false;
        this.DWWatActive = false;
        this.DWSumpActive = false;
        for (let i = 0; i <= event.length; i++) {
            if (event[i] == "1") {
                this.BorWelActive = true;
            }
            if (event[i] == "2") {
                this.DWWatActive = true;
            }
            if (event[i] == "3") {
                this.DWSumpActive = true;
            }
        }
        if (this.BorWelActive) {
            this.water.controls['BorWelFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['BorWelFunc'].updateValueAndValidity();
            this.water.controls['BorwelClosed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['BorwelClosed'].updateValueAndValidity();
            this.water.controls['BorWelReqReapir'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['BorWelReqReapir'].updateValueAndValidity();
        }
        else {
            this.water.controls['BorWelFunc'].setValue("");
            this.water.controls['BorWelFunc'].setValidators(null);
            this.water.controls['BorWelFunc'].updateValueAndValidity();
            this.water.controls['BorwelClosed'].setValue(false);
            this.water.controls['BorwelClosed'].setValidators(null);
            this.water.controls['BorwelClosed'].updateValueAndValidity();
            this.water.controls['BorWelReqReapir'].setValue(false);
            this.water.controls['BorWelReqReapir'].setValidators(null);
            this.water.controls['BorWelReqReapir'].updateValueAndValidity();
        }
        if (this.DWWatActive) {
            this.water.controls['DWWatAvai'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['DWWatAvai'].updateValueAndValidity();
            this.water.controls['DWSumpYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['DWSumpYn'].updateValueAndValidity();
            this.water.controls['DWPumpYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.water.controls['DWPumpYn'].updateValueAndValidity();
        }
        else {
            this.water.controls['DWWatAvai'].setValue("");
            this.water.controls['DWWatAvai'].setValidators(null);
            this.water.controls['DWWatAvai'].updateValueAndValidity();
            this.water.controls['DWSumpYn'].setValue(false);
            this.water.controls['DWSumpYn'].setValidators(null);
            this.water.controls['DWSumpYn'].updateValueAndValidity();
            this.water.controls['DWPumpYn'].setValue(false);
            this.water.controls['DWPumpYn'].setValidators(null);
            this.water.controls['DWPumpYn'].updateValueAndValidity();
        }
        console.log(this.water.value);
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
            this.compoundWall.controls['CmpdwallHTInc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['CmpdwallHTInc'].setValue("");
            this.compoundWall.controls['CmpdwallHTInc'].setValidators(null);
            this.compoundWall.controls['CmpdwallHTInc'].updateValueAndValidity();
        }
        if (this.wwActive) {
            // this.compoundWall.controls['AreaWW'].setValue("");
            this.compoundWall.controls['AreaWW'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['AreaWW'].setValue("");
            this.compoundWall.controls['AreaWW'].setValidators(null);
            this.compoundWall.controls['AreaWW'].updateValueAndValidity();
        }
        if (this.replasActive) {
            // this.compoundWall.controls['AreaReplastering'].setValue("");
            this.compoundWall.controls['AreaReplastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
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
            this.compoundWall.controls['AreaBrickwork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
        }
        else {
            this.compoundWall.controls['AreaBrickwork'].setValue("");
            this.compoundWall.controls['AreaBrickwork'].setValidators(null);
            this.compoundWall.controls['AreaBrickwork'].updateValueAndValidity();
        }
    }
    onInputChange(event, id) {
        if (this.safety.value.RefilSqft == 0 && id == 1) {
            this.safety.controls['RefilSqft'].setValue('');
            this.safety.controls['RefilSqft'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.safety.value.ChulhaFunc == 0 && id == 2) {
            this.safety.controls['ChulhaFunc'].setValue('');
            this.safety.controls['ChulhaFunc'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.safety.value.ChulhaRepair == 0 && id == 3) {
            this.safety.controls['ChulhaRepair'].setValue('');
            this.safety.controls['ChulhaRepair'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.safety.value.SepticTankFun == 0 && id == 4) {
            this.safety.controls['SepticTankFun'].setValue('');
            this.safety.controls['SepticTankFun'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (this.safety.value.SepticTankRepaired == 0 && id == 5) {
            this.safety.controls['SepticTankRepaired'].setValue('');
            this.safety.controls['SepticTankRepaired'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
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
        if (this.compoundWall.value.CmpdwallReq == 0 && id == 8) {
            this.compoundWall.controls['CmpdwallReq'].setValue('');
            this.compoundWall.controls['CmpdwallReq'].updateValueAndValidity();
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
        //   this.compoundWall.controls['GateFunc'].setValue('');
        //   this.compoundWall.controls['GateFunc'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        if (this.compoundWall.value.OutsiClsNum == 0 && id == 14) {
            this.compoundWall.controls['OutsiClsNum'].setValue('');
            this.compoundWall.controls['OutsiClsNum'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
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
                let deleteQuery = 'DELETE FROM sids_primary_safety_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_primary_safety_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.safety.value.IndexId, this.safety.value.EBliShiYn,
                        this.safety.value.RefilAreReq, this.safety.value.RefilSqft, this.safety.value.WatLoggYn, this.safety.value.WatLogRepair,
                        this.safety.value.TrePrunReq, this.safety.value.OpenWellYn, this.safety.value.CmnDustbinYN, this.safety.value.ChulhaYn,
                        this.safety.value.ChulhaFunc, this.safety.value.ChulhaRepair, this.safety.value.SChSepticTank,
                        this.safety.value.SepticTankFun, this.safety.value.SepticTankRepaired, 1
                    ]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.commonSpace = 2;
                            if (this.playGround == 3) {
                                this.playGround = 2;
                            }
                            if (this.waterData == 3) {
                                this.waterData = 2;
                            }
                            if (this.compound_Wall == 3) {
                                this.compound_Wall = 2;
                            }
                            this.safetySave = true;
                            // this.getTabs();
                            this.deleteCommonSpace();
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
                let deleteQuery = 'DELETE FROM sids_primary_playground_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_primary_playground_data VALUES (?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.playground.value.IndexId, this.playground.value.PlaygroYn,
                        this.playground.value.PlaygroArea, this.playground.value.PlayKerbwall,
                        this.playground.value.OutsiClsYN, this.playground.value.OutsiClsNum, 1]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.playGround = 2;
                            this.playgroundSave = true;
                            if (this.commonSpace == 3) {
                                this.commonSpace = 2;
                            }
                            if (this.waterData == 3) {
                                this.waterData = 2;
                            }
                            if (this.compound_Wall == 3) {
                                this.compound_Wall = 2;
                            }
                            // this.getTabs();
                            this.deleteCommonSpace();
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
                let deleteQuery = 'DELETE FROM sids_primary_water_schooldata' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_primary_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.water.value.IndexId,
                        this.water.value.WatAvaiSchool, this.water.value.ResUnAvaiWater, this.water.value.srcWaterAvai,
                        this.water.value.BorWelFunc, this.water.value.BorwelClosed,
                        this.water.value.BorWelReqReapir, this.water.value.DWWatAvai, this.water.value.DWSumpYn,
                        this.water.value.DWSumpFun, this.water.value.DWSumpAvai, this.water.value.DWPumpYn,
                        this.water.value.DWPumpFun, this.water.value.DWPumpRepair, this.water.value.NumDWStation,
                    ]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.waterData = 2;
                            this.waterSave = true;
                            if (this.commonSpace == 3) {
                                this.commonSpace = 2;
                            }
                            if (this.playGround == 3) {
                                this.playGround = 2;
                            }
                            if (this.compound_Wall == 3) {
                                this.compound_Wall = 2;
                            }
                            this.deleteCommonSpace();
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
                let deleteQuery = 'DELETE FROM sids_primary_compoundwall_data' +
                    ' WHERE SchlId = "' + this.SchlId + '"' +
                    ' And VistUId = "' + this.VistUId + '"';
                return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                    const datainsert = 'INSERT INTO sids_primary_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.compoundWall.value.IndexId, this.compoundWall.value.CmpdwallSta,
                        this.compoundWall.value.CmpdwallReq, this.compoundWall.value.CmpdwallReqt,
                        this.compoundWall.value.CmpdwallHTInc, this.compoundWall.value.AreaWW, this.compoundWall.value.AreaReplastering,
                        this.compoundWall.value.AreaBrickwork, this.compoundWall.value.GateYn, this.compoundWall.value.GateFunc, 1]).then(insertres => {
                        if (insertres.insertId) {
                            this.tabsData = 0;
                            this.compound_Wall = 2;
                            this.compoundSave = true;
                            if (this.commonSpace == 3) {
                                this.commonSpace = 2;
                            }
                            if (this.playGround == 3) {
                                this.playGround = 2;
                            }
                            if (this.waterData == 3) {
                                this.waterData = 2;
                            }
                            // this.getTabs();
                            this.deleteCommonSpace();
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
        this.router.navigate(['/tabs/primary-dashboard'], { queryParams: { 'schoolId': this.SchlId, 'vistId': this.VistUId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
    }
    checkSafetyLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_primary_safety_data' +
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
                    "IndexId": this.dataList[0].IndexId,
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
                    "EBliShiYn": this.dataList[0].EBliShiYn == "false" ? false : this.dataList[0].EBliShiYn == "true" ? true : this.dataList[0].EBliShiYn,
                    "RefilAreReq": this.dataList[0].RefilAreReq == "false" ? false : this.dataList[0].RefilAreReq == "true" ? true : this.dataList[0].RefilAreReq,
                    "RefilSqft": this.dataList[0].RefilSqft,
                    "WatLoggYn": this.dataList[0].WatLoggYn == "false" ? false : this.dataList[0].WatLoggYn == "true" ? true : this.dataList[0].WatLoggYn,
                    "WatLogRepair": this.dataList[0].WatLogRepair,
                    "TrePrunReq": this.dataList[0].TrePrunReq == "false" ? false : this.dataList[0].TrePrunReq == "true" ? true : this.dataList[0].TrePrunReq,
                    "OpenWellYn": this.dataList[0].OpenWellYn == "false" ? false : this.dataList[0].OpenWellYn == "true" ? true : this.dataList[0].OpenWellYn,
                    "CmnDustbinYN": this.dataList[0].CmnDustbinYN == "false" ? false : this.dataList[0].CmnDustbinYN == "true" ? true : this.dataList[0].CmnDustbinYN,
                    "ChulhaYn": this.dataList[0].ChulhaYn == "false" ? false : this.dataList[0].ChulhaYn == "true" ? true : this.dataList[0].ChulhaYn,
                    "ChulhaFunc": this.dataList[0].ChulhaFunc,
                    "ChulhaRepair": this.dataList[0].ChulhaRepair,
                    "SChSepticTank": this.dataList[0].SChSepticTank == "false" ? false : this.dataList[0].SChSepticTank == "true" ? true : this.dataList[0].SChSepticTank,
                    "SepticTankFun": this.dataList[0].SepticTankFun,
                    "SepticTankRepaired": this.dataList[0].SepticTankRepaired,
                });
            }
            else {
                console.log("local data", this.isData);
                this.safetySave = false;
                this.safetyInitial();
            }
        });
    }
    checkPlaygroundLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_primary_playground_data' +
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
                    "IndexId": this.dataList[0].IndexId,
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
                    "PlaygroYn": this.dataList[0].PlaygroYn == "false" ? false : this.dataList[0].PlaygroYn == "true" ? true : this.dataList[0].PlaygroYn,
                    "PlaygroArea": this.dataList[0].PlaygroArea,
                    "PlayKerbwall": this.dataList[0].PlayKerbwall == "false" ? false : this.dataList[0].PlayKerbwall == "true" ? true : this.dataList[0].PlayKerbwall,
                    "OutsiClsYN": this.dataList[0].OutsiClsYN == "false" ? false : this.dataList[0].OutsiClsYN == "true" ? true : this.dataList[0].OutsiClsYN,
                    "OutsiClsNum": this.dataList[0].OutsiClsNum,
                });
            }
            else {
                console.log("local data", this.isData);
                this.playgroundInitial();
                this.playgroundSave = false;
            }
        });
    }
    checkCompoundWallLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_primary_compoundwall_data' +
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
                    "IndexId": this.dataList[0].IndexId,
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
                    "CmpdwallSta": this.dataList[0].CmpdwallSta,
                    "CmpdwallReq": this.dataList[0].CmpdwallReq,
                    "CmpdwallReqt": this.dataList[0].CmpdwallReqt ? Array.from(this.dataList[0].CmpdwallReqt.split(",")) : this.dataList[0].CmpdwallReqt,
                    "CmpdwallHTInc": this.dataList[0].CmpdwallHTInc,
                    // "CmpdwallLength": this.dataList[0].CmpdwallLength,
                    "AreaWW": this.dataList[0].AreaWW,
                    "AreaReplastering": this.dataList[0].AreaReplastering,
                    "AreaBrickwork": this.dataList[0].AreaBrickwork,
                    "GateYn": this.dataList[0].GateYn == "false" ? false : this.dataList[0].GateYn == "true" ? true : this.dataList[0].GateYn,
                    "GateFunc": this.dataList[0].GateFunc,
                });
            }
            else {
                console.log("local data", this.isData);
                this.playgroundInitial();
                this.compoundSave = false;
            }
        });
    }
    checkWaterLocalDb(id) {
        let deleteQuery = 'SELECT * FROM sids_primary_water_schooldata' +
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
                    "IndexId": this.dataList[0].IndexId,
                    "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.SchlId, null),
                    "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.VistUId, null),
                    "WatAvaiSchool": this.dataList[0].WatAvaiSchool,
                    "ResUnAvaiWater": this.dataList[0].ResUnAvaiWater,
                    "srcWaterAvai": this.dataList[0].srcWaterAvai ? Array.from(this.dataList[0].srcWaterAvai.split(",")) : '',
                    "BorWelFunc": this.dataList[0].BorWelFunc,
                    "BorwelClosed": this.dataList[0].BorwelClosed,
                    "BorWelReqReapir": this.dataList[0].BorWelReqReapir,
                    "DWWatAvai": this.dataList[0].DWWatAvai,
                    "DWSumpYn": this.dataList[0].DWSumpYn == "false" ? false : this.dataList[0].DWSumpYn == "true" ? true : this.dataList[0].DWSumpYn,
                    "DWSumpFun": this.dataList[0].DWSumpFun,
                    "DWSumpAvai": this.dataList[0].DWSumpAvai,
                    "DWPumpYn": this.dataList[0].DWPumpYn == "false" ? false : this.dataList[0].DWPumpYn == "true" ? true : this.dataList[0].DWPumpYn,
                    "DWPumpFun": this.dataList[0].DWPumpFun,
                    "DWPumpRepair": this.dataList[0].DWPumpRepair,
                    "NumDWStation": this.dataList[0].NumDWStation,
                });
            }
            else {
                console.log("local data", this.isData);
                this.waterInitial();
                this.waterSave = false;
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
            this.form.controls['AuditoriumStageArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            this.form.controls['AuditoriumStageHeight'].setValue(this.dataList[0].AuditoriumStageHeight);
            this.form.controls['AuditoriumStageHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
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
            this.form.controls['AuditoriumStageAreaLevel'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
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
        if (this.safety.valid && this.playground.valid && this.water.valid && this.compoundWall.valid) {
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                let data = {
                    "records": {
                        "IndexId": this.safety.value.IndexId,
                        "SchlId": this.SchlId,
                        "VistUId": this.VistUId,
                        "EBliShiYn": this.safety.value.EBliShiYn == "false" ? 2 : this.safety.value.EBliShiYn == "true" ? 1 : this.safety.value.EBliShiYn == true ? 1 : 2,
                        "RefilAreReq": this.safety.value.RefilAreReq == "false" ? 2 : this.safety.value.RefilAreReq == "true" ? 1 : this.safety.value.RefilAreReq == true ? 1 : 2,
                        "RefilSqft": this.safety.value.RefilSqft,
                        "WatLoggYn": this.safety.value.WatLoggYn == "false" ? 2 : this.safety.value.WatLoggYn == "true" ? 1 : this.safety.value.WatLoggYn == true ? 1 : 2,
                        "WatLogRepair": this.safety.value.WatLogRepair,
                        "TrePrunReq": this.safety.value.TrePrunReq == "false" ? 2 : this.safety.value.TrePrunReq == "true" ? 1 : this.safety.value.TrePrunReq == true ? 1 : 2,
                        "OpenWellYn": this.safety.value.OpenWellYn == "false" ? 2 : this.safety.value.OpenWellYn == "true" ? 1 : this.safety.value.OpenWellYn == true ? 1 : 2,
                        "CmnDustbinYN": this.safety.value.CmnDustbinYN == "false" ? 2 : this.safety.value.CmnDustbinYN == "true" ? 1 : this.safety.value.CmnDustbinYN == true ? 1 : 2,
                        "ChulhaYn": this.safety.value.ChulhaYn == "false" ? 2 : this.safety.value.ChulhaYn == "true" ? 1 : this.safety.value.ChulhaYn == true ? 1 : 2,
                        "ChulhaFunc": this.safety.value.ChulhaFunc,
                        "ChulhaRepair": this.safety.value.ChulhaRepair,
                        "SChSepticTank": this.safety.value.SChSepticTank == "false" ? 2 : this.safety.value.SChSepticTank == "true" ? 1 : this.safety.value.SChSepticTank == true ? 1 : 2,
                        "SepticTankFun": this.safety.value.SepticTankFun,
                        "SepticTankRepaired": this.safety.value.SepticTankRepaired,
                        "PlaygroYn": this.playground.value.PlaygroYn == "false" ? 2 : this.playground.value.PlaygroYn == "true" ? 1 : this.playground.value.PlaygroYn == true ? 1 : 2,
                        "PlaygroArea": this.playground.value.PlaygroArea,
                        "PlayKerbwall": this.playground.value.PlayKerbwall == "false" ? 2 : this.playground.value.PlayKerbwall == "true" ? 1 : this.playground.value.PlayKerbwall == true ? 1 : 2,
                        "OutsiClsYN": this.playground.value.OutsiClsYN == "false" ? 2 : this.playground.value.OutsiClsYN == "true" ? 1 : this.playground.value.OutsiClsYN == true ? 1 : 2,
                        "OutsiClsNum": this.playground.value.OutsiClsNum,
                        "WatAvaiSchool": this.water.value.WatAvaiSchool,
                        "ResUnAvaiWater": this.water.value.ResUnAvaiWater ? this.water.value.ResUnAvaiWater.toString() : this.water.value.ResUnAvaiWater,
                        "srcWaterAvai": this.water.value.srcWaterAvai ? this.water.value.srcWaterAvai.toString() : this.water.value.srcWaterAvai,
                        "BorWelFunc": this.water.value.BorWelFunc,
                        "BorwelClosed": this.water.value.BorwelClosed,
                        "BorWelReqReapir": this.water.value.BorWelReqReapir,
                        "DWWatAvai": this.water.value.DWWatAvai,
                        "DWSumpYn": this.water.value.DWSumpYn == "false" ? 2 : this.water.value.DWSumpYn == "true" ? 1 : this.water.value.DWSumpYn == true ? 1 : 2,
                        "DWSumpFun": this.water.value.DWSumpFun,
                        "DWSumpAvai": this.water.value.DWSumpAvai,
                        "DWPumpYn": this.water.value.DWPumpYn == "false" ? 2 : this.water.value.DWPumpYn == "true" ? 1 : this.water.value.DWPumpYn == true ? 1 : 2,
                        "DWPumpFun": this.water.value.DWPumpFun,
                        "DWPumpRepair": this.water.value.DWPumpRepair,
                        "NumDWStation": this.water.value.NumDWStation,
                        "CmpdwallSta": this.compoundWall.value.CmpdwallSta,
                        "CmpdwallReqLen": this.compoundWall.value.CmpdwallReq,
                        "CmpdwallReqt": this.compoundWall.value.CmpdwallReqt ? this.compoundWall.value.CmpdwallReqt.toString() : this.compoundWall.value.CmpdwallReqt,
                        "CmpdwallHTInc": this.compoundWall.value.CmpdwallHTInc,
                        // "CmpdwallLength": this.compoundWall.value.CmpdwallLength,
                        "AreaWW": this.compoundWall.value.AreaWW,
                        "AreaReplastering": this.compoundWall.value.AreaReplastering,
                        "AreaBrickwork": this.compoundWall.value.AreaBrickwork,
                        "GateYn": this.compoundWall.value.GateYn == "false" ? 2 : this.compoundWall.value.GateYn == "true" ? 1 : this.compoundWall.value.GateYn == true ? 1 : 2,
                        "GateFunc": this.compoundWall.value.GateFunc,
                    }
                };
                this.utilityService.saveCommonSids(data).subscribe(res => {
                    if (res.dataStatus) {
                        this.safety.controls['IndexId'].setValue(res.IndexId);
                        this.safety.controls['IndexId'].updateValueAndValidity();
                        this.playground.controls['IndexId'].setValue(res.IndexId);
                        this.playground.controls['IndexId'].updateValueAndValidity();
                        this.water.controls['IndexId'].setValue(res.IndexId);
                        this.water.controls['IndexId'].updateValueAndValidity();
                        this.compoundWall.controls['IndexId'].setValue(res.IndexId);
                        this.compoundWall.controls['IndexId'].updateValueAndValidity();
                        this.updateAllQuery(3);
                        this.insertLocalDB();
                        this.alertService.success('Saved Successfully');
                    }
                });
            }
            else {
                this.updateAllQuery(2);
            }
        }
        else {
            this.alertService.error('Please Enter Valid Data');
            this.focusValidator();
        }
    }
    insertLocalDB() {
        let deleteQuery = 'DELETE FROM sidsPrimaryCommonServer' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        this.sqliteDB.getDataLocalDB(deleteQuery).then(res => {
            const datainsert = "INSERT INTO sidsPrimaryCommonServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, "3"]).then(insertres => {
                console.log('server inserted successfully', insertres);
                this.goToBack();
            });
        });
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    updateAllQuery(id) {
        let query1 = 'DELETE FROM sids_primary_safety_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        let query2 = 'DELETE FROM sids_primary_playground_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        let query3 = 'DELETE FROM sids_primary_water_schooldata' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        let query4 = 'DELETE FROM sids_primary_compoundwall_data' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        this.sqliteDB.getDataLocalDB(query1).then(data => {
            const datainsert = 'INSERT INTO sids_primary_safety_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.safety.value.IndexId, this.safety.value.EBliShiYn,
                this.safety.value.RefilAreReq, this.safety.value.RefilSqft, this.safety.value.WatLoggYn, this.safety.value.WatLogRepair,
                this.safety.value.TrePrunReq, this.safety.value.OpenWellYn, this.safety.value.CmnDustbinYN, this.safety.value.ChulhaYn,
                this.safety.value.ChulhaFunc, this.safety.value.ChulhaRepair, this.safety.value.SChSepticTank,
                this.safety.value.SepticTankFun, this.safety.value.SepticTankRepaired, 1
            ]).then(insertres => {
                if (insertres.insertId) {
                    this.tabsData = 0;
                    this.commonSpace = id;
                    this.safetySave = true;
                    // this.getTabs();
                }
            });
        });
        this.sqliteDB.getDataLocalDB(query2).then(data => {
            const datainsert = 'INSERT INTO sids_primary_playground_data VALUES (?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.playground.value.IndexId, this.playground.value.PlaygroYn,
                this.playground.value.PlaygroArea, this.playground.value.PlayKerbwall,
                this.playground.value.OutsiClsYN, this.playground.value.OutsiClsNum, 1]).then(insertres => {
                if (insertres.insertId) {
                    this.tabsData = 0;
                    this.playGround = id;
                    this.playgroundSave = true;
                    // this.getTabs();
                }
            });
        });
        this.sqliteDB.getDataLocalDB(query3).then(data => {
            const datainsert = 'INSERT INTO sids_primary_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.water.value.IndexId,
                this.water.value.WatAvaiSchool, this.water.value.ResUnAvaiWater, this.water.value.srcWaterAvai,
                this.water.value.BorWelFunc, this.water.value.BorwelClosed,
                this.water.value.BorWelReqReapir, this.water.value.DWWatAvai, this.water.value.DWSumpYn,
                this.water.value.DWSumpFun, this.water.value.DWSumpAvai, this.water.value.DWPumpYn,
                this.water.value.DWPumpFun, this.water.value.DWPumpRepair, this.water.value.NumDWStation,
            ]).then(insertres => {
                if (insertres.insertId) {
                    this.tabsData = 0;
                    this.waterData = id;
                    this.waterSave = true;
                }
            });
        });
        this.sqliteDB.getDataLocalDB(query4).then(data => {
            const datainsert = 'INSERT INTO sids_primary_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, this.compoundWall.value.IndexId, this.compoundWall.value.CmpdwallSta,
                this.compoundWall.value.CmpdwallReq, this.compoundWall.value.CmpdwallReqt,
                this.compoundWall.value.CmpdwallHTInc, this.compoundWall.value.AreaWW, this.compoundWall.value.AreaReplastering,
                this.compoundWall.value.AreaBrickwork, this.compoundWall.value.GateYn, this.compoundWall.value.GateFunc, 1]).then(insertres => {
                if (insertres.insertId) {
                    this.tabsData = 0;
                    this.compound_Wall = id;
                    this.compoundSave = true;
                    // this.getTabs();
                }
            });
        });
    }
    deleteCommonSpace() {
        let deleteQuery = 'UPDATE sidsPrimaryCommonServer SET Status = 2' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        this.sqliteDB.getDataLocalDB(deleteQuery).then(res => {
            console.log("update sidsPrimaryCommonServer");
        });
    }
};
PrimaryCommonspacesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_4__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef }
];
PrimaryCommonspacesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-primary-commonspaces',
        template: _raw_loader_primary_commonspaces_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_primary_commonspaces_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrimaryCommonspacesPage);



/***/ }),

/***/ 62726:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces.page.scss ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.commonMenu {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: var(--ion-color-primary);\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.btn-present {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.row-line-local {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: #70BBFF;\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #70BBFF;\n}\n\n.local {\n  background-color: #EDDEFF !important;\n  border-radius: 15px;\n  height: 100%;\n  padding: 10px;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  padding: 10px;\n  width: 100%;\n  margin: 5px 0px;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 5px;\n  border-radius: 10px;\n  background: var(--ion-color-primary);\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktY29tbW9uc3BhY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUVFO0VBRUUsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBR0EsMkJBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUFBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7OztFQUdFLGVBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1FOztFQUVFLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU9FLFNBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBUEo7O0FBVUU7RUFDRSxjQUFBO0FBUEo7O0FBV0UsT0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVEo7O0FBYUUsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0FBWEo7O0FBZUUsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsY0FBQTtBQWJKOztBQWlCRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxjQUFBO0FBZko7O0FBbUJFLFFBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxjQUFBO0FBakJKOztBQXFCRSxPQUFBOztBQU1BO0VBQ0UsV0FBQTtBQXZCSjs7QUEwQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXZCSjs7RUF5QkU7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXRCSjs7RUF3QkU7O0lBRUUsZUFBQTtJQUNBLG1CQUFBO0VBckJKO0FBQ0Y7O0FBd0JFO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQXRCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBM0JKOztBQThCRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsVUFBQTtBQTNCSjs7QUFvQ0U7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBakNKOztBQXdDRTtFQUNFLDBCQUFBO0FBckNKOztBQXdDRTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBckNOOztBQXdDRTtFQUNHLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBckNMOztBQXdDSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFyQ1I7O0FBd0NFO0VBQ0UsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBckNKOztBQXdDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBckNOOztBQXVDRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBcENKOztBQXNDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5DSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBbENKOztBQXFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBbENKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW1DRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFoQ0o7O0FBa0NFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQS9CSjs7QUFpQ0U7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBOUJKOztBQWdDRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUE5Qk47O0FBZ0NFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUE5Qk47O0FBa0NFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBL0JKOztBQWtDRTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEvQko7O0FBa0NFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUEvQko7O0FBaUNFO0VBQ0UsYUFBQTtBQTlCSiIsImZpbGUiOiJwcmltYXJ5LWNvbW1vbnNwYWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQm90dG9tMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luVG9wMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luVG9wNSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogOTMlO1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNkLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmVUZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lSWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1hdXRob3Ige1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gICNjZC10aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIC8qIHRoaXMgaXMgdGhlIHZlcnRpY2FsIGxpbmUgKi9cclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtaWNvbiBpIHtcclxuICAgIGNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtcGljdHVyZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtcGljdHVyZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgY29sb3I6ICMzMDNlNDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHAsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypDT0xPUlMqL1xyXG4gIFxyXG4gIFxyXG4gIC8qUE9TSVRJVkUqL1xyXG4gIFxyXG4gIC5wb3NpdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3NpdGl2ZSBpIHtcclxuICAgIGNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkNBTE0qL1xyXG4gIFxyXG4gIC5jYWxtIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQzY2VlNjtcclxuICB9XHJcbiAgXHJcbiAgLmNhbG0gaSB7XHJcbiAgICBjb2xvcjogIzQzY2VlNjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypCQUxBTkNFRCovXHJcbiAgXHJcbiAgLmJhbGFuY2VkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2Y2MzMztcclxuICB9XHJcbiAgXHJcbiAgLmJhbGFuY2VkIGkge1xyXG4gICAgY29sb3I6ICM2NmNjMzM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qRU5FUkdJWkVEKi9cclxuICBcclxuICAuZW5lcmdpemVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYjg0MDtcclxuICB9XHJcbiAgXHJcbiAgLmVuZXJnaXplZCBpIHtcclxuICAgIGNvbG9yOiAjZjBiODQwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkFTU0VSVElWRSovXHJcbiAgXHJcbiAgLmFzc2VydGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZjRlM2E7XHJcbiAgfVxyXG4gIFxyXG4gIC5hc3NlcnRpdmUgaSB7XHJcbiAgICBjb2xvcjogI2VmNGUzYTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypST1lBTCovXHJcbiAgXHJcbiAgLnJveWFsIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzhhNmRlOTtcclxuICB9XHJcbiAgXHJcbiAgLnJveWFsIGkge1xyXG4gICAgY29sb3I6ICM4YTZkZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qREFSSyovXHJcbiAgXHJcbiAgLy8gLmRhcmsge1xyXG4gIC8vICAgYm9yZGVyLWNvbG9yOiAjNDQ0O1xyXG4gIC8vIH1cclxuICBcclxuICAuZGFyayBpIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWxhYmVsIHtcclxuICAgIC8vIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLnZhbGlkLWNsciB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzLXR4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoLmhhcy12YWx1ZSk6YmVmb3Jle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjEuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1wYWRkaW5nIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1zZWxlY3Qge1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAvLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5pbnB1dC1jbHIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpIDFweCBzb2xpZDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1pbnB1dCB7XHJcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAvKiBtYXJnaW46IDAlOyAqL1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLW5vLXBhZGRpbmd7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGQTtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uLW5vLXBhZGRpbmctcXVlc3Rpb257XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO3doaXRlLXNwYWNlOiBcclxuICAgIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWRkIHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyLXNhdmUge1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxuICB9XHJcbiAgLmZvb3Rlci1ub3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgfVxyXG4gIC5mb290ZXItdmVyaWZpZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9XHJcbiAgXHJcbiAgLnNpZHNWaWV3e1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmsge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEI2N0IzO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNEZBO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmdDaGVja3tcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjRkZGRkZGO1xyXG4gIH1cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBpb24tdG9nZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4QjY3QjM7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5jb21tb25NZW51e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hZGRCdXR0b257XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5idG4tcHJlc2VudFxyXG4gIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICM0Q0FGNTAhaW1wb3J0YW50OyBcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tYWJzZW50XHJcbiAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDojZjgyMzM5ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctbGluZS1sb2NhbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VBRUFFQTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBcclxuICAgIGJhY2tncm91bmQ6ICM3MEJCRkY7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MEJCRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2NhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURERUZGICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTM3QTVDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN5bmNTZXJ2ZXJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 61741:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Common Spaces ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"sidsView\">\r\n    <ion-row >\r\n      <div [ngClass]=\"(commonSpace == 1) ? 'commonMenu' : (commonSpace == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(1)\">\r\n        <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n          <ion-label style=\"font-size: 17px;\">Safety and Sanitation</ion-label>\r\n        <ion-col col=\"1\" >\r\n          <ion-icon *ngIf=\"tabsData != 1\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n          <ion-icon *ngIf=\"tabsData == 1\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        </ion-col>\r\n      </div>\r\n  <div *ngIf=\"tabsData == 1\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"safety\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there an EB HT power line crossing over the school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.EBliShiYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.EBliShiYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.EBliShiYn?true:false}}\"\r\n                      formControlName=\"EBliShiYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there any low lying area (inclusive of playground) in school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.RefilAreReq\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.RefilAreReq\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.RefilAreReq?true:false}}\"\r\n                      formControlName=\"RefilAreReq\" (ionChange)=\"onToggleChange($event, 1)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.RefilAreReq\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Volume to be Refilled (cubic ft) <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"RefilSqft\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                  (ionChange)=\"onInputChange($event.detail.value, 1)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['RefilSqft'].hasError('required') && (safety.controls['RefilSqft'].dirty || safety.controls['RefilSqft'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.RefilSqft.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Is there water logging within the school campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.WatLoggYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.WatLoggYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.WatLoggYn?true:false}}\"\r\n                      formControlName=\"WatLoggYn\" (ionChange)=\"onToggleChange($event, 8)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.WatLoggYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Repair Required<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WatLogRepair\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of WaterLog\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['WatLogRepair'].hasError('required') && (safety.controls['WatLogRepair'].dirty || safety.controls['WatLogRepair'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Are there trees or shrubbery to be pruned in the campus?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.TrePrunReq\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.TrePrunReq\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.TrePrunReq?true:false}}\"\r\n                      formControlName=\"TrePrunReq\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Are there any uncover open wells within the campus of the school?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.OpenWellYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.OpenWellYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.OpenWellYn?true:false}}\"\r\n                      formControlName=\"OpenWellYn\" >\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              6\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have a common dustbin of adequate size? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.CmnDustbinYN\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.CmnDustbinYN\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.CmnDustbinYN?true:false}}\"\r\n                      formControlName=\"CmnDustbinYN\" >\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have smokless incinerators? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.ChulhaYn\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.ChulhaYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.ChulhaYn?true:false}}\"\r\n                      formControlName=\"ChulhaYn\" (ionChange)=\"onToggleChange($event, 2)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.ChulhaYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Number of Functional Units<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"ChulhaFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['ChulhaFunc'].hasError('required') && (safety.controls['ChulhaFunc'].dirty || safety.controls['ChulhaFunc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.ChulhaFunc.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.ChulhaYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              7B\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Units to be Repaired <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"ChulhaRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['ChulhaRepair'].hasError('required') && (safety.controls['ChulhaRepair'].dirty || safety.controls['ChulhaRepair'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.ChulhaRepair.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              8\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Does the school have septic tanks? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"safety.value.SChSepticTank\"> Yes</div>\r\n                    <div *ngIf=\"!safety.value.SChSepticTank\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{safety.value.SChSepticTank?true:false}}\"\r\n                      formControlName=\"SChSepticTank\" (ionChange)=\"onToggleChange($event, 3)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.SChSepticTank\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              8A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Number of Functional Units <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"SepticTankFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['SepticTankFun'].hasError('required') && (safety.controls['SepticTankFun'].dirty || safety.controls['SepticTankFun'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.SepticTankFun.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"safety.value.SChSepticTank\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              8B\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Units to be Repaired <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"SepticTankRepaired\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                  >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"safetySubmitted && safety.controls['SepticTankRepaired'].hasError('required') && (safety.controls['SepticTankRepaired'].dirty || safety.controls['SepticTankRepaired'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"safety.controls.SepticTankRepaired.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    <ion-row (click)=\"onSave(1)\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(playGround == 1) ? 'commonMenu' : (playGround == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(2)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Playground</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 2\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 2\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 2\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"playground\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have a playground? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.PlaygroYn\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.PlaygroYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.PlaygroYn?true:false}}\"\r\n                        formControlName=\"PlaygroYn\" (ionChange)=\"onToggleChange($event, 4)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.PlaygroYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Playground (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"PlaygroArea\" style=\"border-bottom: 1px solid;\" maxlength=\"8\" (ionChange)=\"onInputChange($event.detail.value, 1)\"\r\n                    (ionChange)=\"onInputChange($event.detail.value, 6)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"playSubmitted && playground.controls['PlaygroArea'].hasError('required') && (playground.controls['PlaygroArea'].dirty || playground.controls['PlaygroArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"playground.controls.PlaygroArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.PlaygroYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Does the playground have a kerbwall? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.PlayKerbwall\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.PlayKerbwall\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.PlayKerbwall?true:false}}\"\r\n                        formControlName=\"PlayKerbwall\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Are there any classes happening outside in the labs / verandah/ tree shade/ auditorium/ community hall etc. due to lack of classrooms?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"3\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"playground.value.OutsiClsYN\"> Yes</div>\r\n                      <div *ngIf=\"!playground.value.OutsiClsYN\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{playground.value.OutsiClsYN?true:false}}\"\r\n                        formControlName=\"OutsiClsYN\" (ionChange)=\"onToggleChange($event, 5)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"playground.value.OutsiClsYN\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Classes<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"OutsiClsNum\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onInputChange($event.detail.value, 14)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"playSubmitted && playground.controls['OutsiClsNum'].hasError('required') && (playground.controls['OutsiClsNum'].dirty || playground.controls['OutsiClsNum'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"playground.controls.OutsiClsNum.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      <ion-row (click)=\"onSave(2)\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n        <ion-col size=\"4\" class=\"addButton\">\r\n          <p style=\"text-align: center; margin:5px\">Save</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(waterData == 1) ? 'commonMenu' : (waterData == 2) ? 'row-line-local' : 'server'\" class=\"commonMenu\" (click)=\"getTabs(3)\">\r\n    <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Water</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 3\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"water\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" >\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Is water availabile in the school? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WatAvaiSchool\"\r\n                    style=\"max-width: 100% !important;\" >\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of srcWaterSchool\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['WatAvaiSchool'].hasError('required') && (water.controls['WatAvaiSchool'].dirty || water.controls['WatAvaiSchool'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 1\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n  \r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Reason for Unavailability of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ResUnAvaiWater\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\"\r\n                    >\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of UnavailabilityWater\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['ResUnAvaiWater'].hasError('required') && (water.controls['ResUnAvaiWater'].dirty || water.controls['ResUnAvaiWater'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n  \r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1A\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Source of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"srcWaterAvai\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\"\r\n                      (ionChange)=\"onMultiSelectChangeWater($event.detail.value)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of sourceOfWater\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['srcWaterAvai'].hasError('required') && (water.controls['srcWaterAvai'].dirty || water.controls['srcWaterAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of Functional Borewells <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorWelFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorWelFunc'].hasError('required') && (water.controls['BorWelFunc'].dirty || water.controls['BorWelFunc'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorWelFunc.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of Defunct Borewells to be closed <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorwelClosed\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorwelClosed'].hasError('required') && (water.controls['BorwelClosed'].dirty || water.controls['BorwelClosed'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorwelClosed.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"BorWelActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n              C\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Borewells requiring flushing<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"BorWelReqReapir\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['BorWelReqReapir'].hasError('required') && (water.controls['BorWelReqReapir'].dirty || water.controls['BorWelReqReapir'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.BorWelReqReapir.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Frequency of Availability of Water<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"DWWatAvai\"\r\n                    style=\"max-width: 100% !important;\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of FreqAvailability\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWWatAvai'].hasError('required') && (water.controls['DWWatAvai'].dirty || water.controls['DWWatAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the School have any Sumps? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"water.value.DWSumpYn\"> Yes</div>\r\n                      <div *ngIf=\"!water.value.DWSumpYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{water.value.DWSumpYn?true:false}}\"\r\n                        formControlName=\"DWSumpYn\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWSumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Functional Sumps<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWSumpFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWSumpFun'].hasError('required') && (water.controls['DWSumpFun'].dirty || water.controls['DWSumpFun'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWSumpFun.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWSumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Sumps requiring Cleaning/ Repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWSumpAvai\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,24)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWSumpAvai'].hasError('required') && (water.controls['DWSumpAvai'].dirty || water.controls['DWSumpAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWSumpAvai.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have any Motor pumps? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"water.value.DWPumpYn\"> Yes</div>\r\n                      <div *ngIf=\"!water.value.DWPumpYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{water.value.DWPumpYn?true:false}}\"\r\n                        formControlName=\"DWPumpYn\" (ionChange)=\"onToggleChange($event, 11)\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWPumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Functional Motor Pumps<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWPumpFun\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,26)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWPumpFun'].hasError('required') && (water.controls['DWPumpFun'].dirty || water.controls['DWPumpFun'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWPumpFun.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.DWPumpYn && water.value.WatAvaiSchool == 2 && DWWatActive\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Motor Pumps requiring Repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"DWPumpRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"1\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,27)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['DWPumpRepair'].hasError('required') && (water.controls['DWPumpRepair'].dirty || water.controls['DWPumpRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.DWPumpRepair.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- water yes mean -->\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"water.value.WatAvaiSchool == 2\"> \r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Common Drinking Water Taps <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"NumDWStation\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,27)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"waterSubmitted && water.controls['NumDWStation'].hasError('required') && (water.controls['NumDWStation'].dirty || water.controls['NumDWStation'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"water.controls.NumDWStation.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      <ion-row (click)=\"onSave(3)\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n        <ion-col size=\"4\" class=\"addButton\">\r\n          <p style=\"text-align: center; margin:5px\">Save</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n  <div [ngClass]=\"(compound_Wall == 1) ? 'commonMenu' : (compound_Wall == 2) ? 'row-line-local' : 'server'\" (click)=\"getTabs(4)\">\r\n    <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n      <ion-label style=\"font-size: 17px;\">Compound Wall</ion-label>\r\n    <ion-col col=\"1\" >\r\n      <ion-icon *ngIf=\"tabsData != 4\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      <ion-icon *ngIf=\"tabsData == 4\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <div *ngIf=\"tabsData == 4\" style=\"width: 100%;\">\r\n    <form [formGroup]=\"compoundWall\" class=\"form-horizontal\" style=\"margin: 2%;\" >\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Status of Compound Wall<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CmpdwallSta\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 1)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of compoundWallList\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallSta'].hasError('required') && (compoundWall.controls['CmpdwallSta'].dirty || compoundWall.controls['CmpdwallSta'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.CmpdwallSta == 2 || compoundWall.value.CmpdwallSta == 5\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Running length of compound wall required (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallReq\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,8)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallReq'].hasError('required') && (compoundWall.controls['CmpdwallReq'].dirty || compoundWall.controls['CmpdwallReq'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallReq.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.CmpdwallSta == 1 || compoundWall.value.CmpdwallSta == 2\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Requirement<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CmpdwallReqt\" multiple=\"true\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                  <ion-select-option [value]=\"item.value\" *ngFor=\"let item of requirementList\"> {{item.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallReqt'].hasError('required') && (compoundWall.controls['CmpdwallReqt'].dirty || compoundWall.controls['CmpdwallReqt'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"replasActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\"> \r\n                <ion-label>Area of Replastering (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReplastering\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"7\" (ionChange)=\"onInputChange($event.detail.value, 11)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaReplastering'].hasError('required') && (compoundWall.controls['AreaReplastering'].dirty || compoundWall.controls['AreaReplastering'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaReplastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"heiActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Height to be Increased (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallHTInc\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,9)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['CmpdwallHTInc'].hasError('required') && (compoundWall.controls['CmpdwallHTInc'].dirty || compoundWall.controls['CmpdwallHTInc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallHTInc.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"lengthActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Length to be Increased (in ft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"CmpdwallLength\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                  (ionChange)=\"onInputChange($event.detail.value, 15)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && compoundWall.controls['CmpdwallLength'].hasError('required') && (compoundWall.controls['CmpdwallLength'].dirty || compoundWall.controls['CmpdwallLength'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.CmpdwallLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"wwActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Area to be Whitewashed/ Painted (in sqft)<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                  formControlName=\"AreaWW\" style=\"border-bottom: 1px solid;\" maxlength=\"7\"\r\n                  (ionChange)=\"onInputChange($event.detail.value,10)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaWW'].hasError('required') && (compoundWall.controls['AreaWW'].dirty || compoundWall.controls['AreaWW'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaWW.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"brickActive\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              #\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Area of Brickwork (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaBrickwork\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"7\" (ionChange)=\"onInputChange($event.detail.value,12)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['AreaBrickwork'].hasError('required') && (compoundWall.controls['AreaBrickwork'].dirty || compoundWall.controls['AreaBrickwork'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.AreaBrickwork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Does the school have a gate?<span style=\"color:red\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000000;text-align: end;\">\r\n                    <div *ngIf=\"compoundWall.value.GateYn\"> Yes</div>\r\n                    <div *ngIf=\"!compoundWall.value.GateYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{compoundWall.value.GateYn?true:false}}\"\r\n                      formControlName=\"GateYn\" (ionChange)=\"onToggleChange($event, 6)\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"compoundWall.value.GateYn\">\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Functional Gates<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"GateFunc\"\r\n                  style=\"border-bottom: 1px solid;\" maxlength=\"1\" (ionChange)=\"onInputChange($event.detail.value, 13)\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"commonSubmitted && compoundWall.controls['GateFunc'].hasError('required') && (compoundWall.controls['GateFunc'].dirty || compoundWall.controls['GateFunc'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"compoundWall.controls.GateFunc.errors?.pattern\">Please enter\r\n                    numbers only\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    <ion-row (click)=\"onSave(4)\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n</ion-row>\r\n  <ion-row class=\"syncServer\" *ngIf=\"visitstatus != 2 && visitstatus != 4 && safetySave && playgroundSave && compoundSave && waterSave\">\r\n    <ion-col (click)=\"onSyncSave()\" size=\"12\" class=\"add\">\r\n      <ion-label> Sync Server </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"!serverDatas\">\r\n  <ion-row (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n      <ion-label> Save </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-general_primary-commonspaces_primary-commonspaces_m-24c094-es2015.js.map