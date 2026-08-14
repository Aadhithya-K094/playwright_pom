(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_building_new-floorquestions_new-floorquestions_module_ts"],{

/***/ 65944:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-floorquestions/new-floorquestions-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewFloorquestionsPageRoutingModule": function() { return /* binding */ NewFloorquestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _new_floorquestions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-floorquestions.page */ 41545);




const routes = [
    {
        path: '',
        component: _new_floorquestions_page__WEBPACK_IMPORTED_MODULE_0__.NewFloorquestionsPage
    }
];
let NewFloorquestionsPageRoutingModule = class NewFloorquestionsPageRoutingModule {
};
NewFloorquestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewFloorquestionsPageRoutingModule);



/***/ }),

/***/ 15878:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-floorquestions/new-floorquestions.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewFloorquestionsPageModule": function() { return /* binding */ NewFloorquestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _new_floorquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-floorquestions-routing.module */ 65944);
/* harmony import */ var _new_floorquestions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-floorquestions.page */ 41545);







let NewFloorquestionsPageModule = class NewFloorquestionsPageModule {
};
NewFloorquestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_floorquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewFloorquestionsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_new_floorquestions_page__WEBPACK_IMPORTED_MODULE_1__.NewFloorquestionsPage]
    })
], NewFloorquestionsPageModule);



/***/ }),

/***/ 41545:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-floorquestions/new-floorquestions.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewFloorquestionsPage": function() { return /* binding */ NewFloorquestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_new_floorquestions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-floorquestions.page.html */ 70501);
/* harmony import */ var _new_floorquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-floorquestions.page.scss */ 72889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);











let NewFloorquestionsPage = class NewFloorquestionsPage {
    constructor(router, formBuilder, route, alertController, sqliteDB, utilityService, userSessionService, alertService, el, toastController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.utilityService = utilityService;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.el = el;
        this.toastController = toastController;
        this.floor = [
            {
                "value": "1",
                "label": "Ground"
            },
            {
                "value": "2",
                "label": "First"
            },
            {
                "value": "3",
                "label": "Second"
            },
            {
                "value": "4",
                "label": "Third"
            },
            {
                "value": "5",
                "label": "Fourth"
            },
            {
                "value": "6",
                "label": "Fifth"
            },
            {
                "value": "7",
                "label": "Terrace"
            }
        ];
        this.floorBackup = [
            {
                "value": "1",
                "label": "Ground"
            },
            {
                "value": "2",
                "label": "First"
            },
            {
                "value": "3",
                "label": "Second"
            },
            {
                "value": "4",
                "label": "Third"
            },
            {
                "value": "5",
                "label": "Fourth"
            },
            {
                "value": "6",
                "label": "Fifth"
            },
            {
                "value": "7",
                "label": "Terrace"
            }
        ];
        this.condition = [
            {
                "value": "1",
                "label": "Functional"
            },
            {
                "value": "2",
                "label": "Under Construction"
            },
            {
                "value": "3",
                "label": "Under Renovation"
            },
            {
                "value": "4",
                "label": "Needs Repair"
            }
        ];
        this.roofing = [
            {
                "value": "1",
                "label": "Concrete (RCC)"
            },
            {
                "value": "2",
                "label": "Tiled"
            },
            {
                "value": "3",
                "label": "Asbestos"
            },
            {
                "value": "4",
                "label": "Tin Sheet"
            },
            {
                "value": "5",
                "label": "AC Sheet"
            },
            {
                "value": "6",
                "label": "Open"
            },
            {
                "value": "7",
                "label": "Partially Open - Concrete/Tiles"
            }
        ];
        this.corridorCondition = [
            {
                "value": "1",
                "label": "Functional"
            },
            {
                "value": "2",
                "label": "Repairs"
            }
        ];
        this.repair = [
            {
                "value": "1",
                "label": "Whitewashing and Painting"
            },
            {
                "value": "2",
                "label": "Replastering"
            },
            {
                "value": "3",
                "label": "Reflooring"
            },
            {
                "value": "4",
                "label": "Ceiling Plastering"
            },
            {
                "value": "5",
                "label": "Floor Patchwork"
            },
            {
                "value": "6",
                "label": "Replacement of Doors"
            },
            {
                "value": "7",
                "label": "Replacement of Jaalis"
            },
            {
                "value": "8",
                "label": "Repair of Doors"
            },
            {
                "value": "9",
                "label": "Repair of Jaalis"
            },
            {
                "value": "10",
                "label": "Repainting of Doors"
            },
            {
                "value": "11",
                "label": "Repainting of Jaalis"
            }
        ];
        this.parapet = [
            {
                "value": "1",
                "label": "Increase in Length"
            },
            {
                "value": "2",
                "label": "Increase in Height"
            },
            {
                "value": "3",
                "label": "Whitewashing and Colouwashing"
            },
            {
                "value": "4",
                "label": "Replastering"
            },
            {
                "value": "5",
                "label": "Brickwork"
            },
            {
                "value": "6",
                "label": "None"
            }
        ];
        this.repairStep = [
            {
                "value": "1",
                "label": "Yes"
            },
            {
                "value": "2",
                "label": "No"
            },
            {
                "value": "3",
                "label": "No Steps"
            }
        ];
        this.Weathering = [
            {
                "value": "1",
                "label": "Weathering Course"
            },
            {
                "value": "2",
                "label": "Pressed Tiles"
            },
            {
                "value": "3",
                "label": "Both"
            },
            {
                "value": "4",
                "label": "No Need"
            }
        ];
        this.functionalFloor = true;
    }
    ngOnInit() {
        this.username = this.userSessionService.emis_username();
        console.log(this.username);
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.vistId = this.routeData.queryParams.vistId;
        this.buildingId = this.routeData.queryParams.buildingId;
        this.floorId = this.routeData.queryParams.floorId;
        this.status = this.routeData.queryParams.status;
        this.buildName = this.routeData.queryParams.buildName;
        console.log(this.schoolId, this.vistId, this.floorId, this.buildingId, "floor");
        this.udiseCode = this.utilityService.udiseCode;
        // this.getbuilding()
        this.checkLocalDb();
        // this.checkLocalFloor();
        this.presentToastWithOptions(+this.buildingId - 100, this.buildName);
    }
    initialValidator() {
        this.form = this.formBuilder.group({
            "IndexId": "",
            "SchlId": this.schoolId,
            "VistId": this.vistId,
            "BldgIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "BldgId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FoolrId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FloorNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            "FloorNumRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FloorCondi": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            "FloorCondiRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FloorSafety": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
            "FloorSafetyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ReqParapetWall": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ReqParapetWallRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallLengthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallHeightRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallWhiteWash": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallWhiteWashRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallReplasting": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallReplastingRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallBrickWork": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "ParapetWallBrickWorkRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "RepairSteps": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "RepairStepsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "WeatheringReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "WeatheringReqRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FoolrTy": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FoolrTyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FoolrAreReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FoolrAreReqRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "OutPipY": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true, null),
            "OutPipYRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true, null),
            "PipLenNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "PipLenNeedRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "RoofCleaYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
            "RoofCleaYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorridorYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
            "CorridorYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorriCondi": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorriCondiRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorriLen": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorriLenRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorridorWidth": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorridorWidthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorriLighFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0', null),
            "CorriLighFuncRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorridorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "CorridorRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaWwRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaReplasteringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaReflooringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaCeilingPlaster": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaCeilingPlasterRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaFlrPatchwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "AreaFlrPatchworkRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            // "DoorReplace":new FormControl('', null),
            "JaalisReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0', null),
            "JaalisReplaceRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            // "DoorRepair":new FormControl('', null),
            "JaalisRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0', null),
            "JaalisRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            // "DoorRepaint":new FormControl('', null),
            "JaalisRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0', null),
            "JaalisRepaintRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "BldOhtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
            "BldOhtYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FunBldOhtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            "FunBldOhtYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
        });
    }
    onSave() {
        console.log(this.form);
        if (this.form.valid) {
            this.submitted = false;
            let query = 'DELETE FROM sidsFloorQuestion' +
                ' WHERE SclId = "' + this.schoolId + '"' +
                ' And BuildingId = "' + this.buildingId + '"' +
                ' And FloorId = "' + this.floorId + '"' +
                ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(data => {
                console.log(data, "delete");
                if (data.rowsAffected > 0) {
                    this.insertLocalDB();
                }
                if (data.rowsAffected == 0) {
                    this.insertLocalDB();
                }
            });
        }
        else {
            this.alertService.error("Please Enter Valid Data");
            this.submitted = true;
            this.focusValidator();
        }
    }
    insertLocalDB() {
        let insertRows = [];
        insertRows.push([
            "INSERT INTO sidsFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [null, this.schoolId, this.vistId, this.buildingId, "", this.floorId, "",
                this.form.value.FloorNum, this.form.value.FloorCondi, this.form.value.FloorSafety,
                this.form.value.ReqParapetWall, this.form.value.ParapetWallLength, this.form.value.ParapetWallHeight,
                this.form.value.ParapetWallWhiteWash, this.form.value.ParapetWallReplasting, this.form.value.ParapetWallBrickWork,
                this.form.value.BldOhtYn, this.form.value.FunBldOhtYn, this.form.value.RepairSteps, this.form.value.FoolrTy,
                this.form.value.FoolrAreReq, this.form.value.OutPipY, this.form.value.PipLenNeed, this.form.value.WeatheringReq,
                this.form.value.RoofCleaYn, this.form.value.CorridorYn, this.form.value.CorriCondi, this.form.value.CorriLen,
                this.form.value.CorridorWidth, this.form.value.CorriLighFunc, this.form.value.CorridorRepair,
                this.form.value.AreaWw, this.form.value.AreaReplastering, this.form.value.AreaReflooring, this.form.value.AreaCeilingPlaster,
                this.form.value.AreaFlrPatchwork,
                // this.form.value.DoorReplace, 
                this.form.value.JaalisReplace,
                // this.form.value.DoorRepair,
                this.form.value.JaalisRepair,
                // this.form.value.DoorRepaint,
                this.form.value.JaalisRepaint
            ]
        ]);
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("Floor Details Stored Locally");
            let idbuild = parseInt(this.buildingId) - 100;
            let idfloor = parseInt(this.floorId) - 1000;
            let build = parseInt(this.buildingId) - 101;
            let buildId = parseInt(this.buildingId) - 100;
            let floor = parseInt(this.floorId) - 1001;
            let floorId = parseInt(this.floorId) - 1000;
            console.log(idbuild, idfloor);
            let name = "";
            if (+this.form.value.FloorNum == 1) {
                name = "Ground";
            }
            if (+this.form.value.FloorNum == 2) {
                name = "First";
            }
            if (+this.form.value.FloorNum == 3) {
                name = "Second";
            }
            if (+this.form.value.FloorNum == 4) {
                name = "Third";
            }
            if (+this.form.value.FloorNum == 5) {
                name = "Fourth";
            }
            if (+this.form.value.FloorNum == 6) {
                name = "Fifth";
            }
            if (+this.form.value.FloorNum == 7) {
                name = "Terrace";
                this.deleteTerrace();
                // let FloorClose =  'UPDATE sidsFloorSaveDatas SET FloorClose = 2, RoomCondition ="'+empty+'" WHERE SclId = "' + this.schoolId + '"' +
                // ' And BuildIndx = "' + idbuild + '"' +
                // ' And FloorId = "' + this.floorId + '"';
                // return this.sqliteDB.update(FloorClose).then(rrrr => { console.log("rrrr",rrrr) });
            }
            if (+this.form.value.FloorCondi == 2) {
                this.deleteTerrace();
            }
            if (+this.form.value.FloorCondi == 3) {
                this.deleteTerrace();
            }
            let empty = 0;
            console.log("name", name);
            let updateQuery;
            if (+this.form.value.FloorNum == 7) {
                updateQuery = 'UPDATE sidsFloorSaveDatas SET Status = 2 , RoomCondition ="' + empty + '",FloorName="' + name + '", FloorCondi= "' + this.form.value.FloorCondi + '"' +
                    ' WHERE SclId = "' + this.schoolId + '"' +
                    ' And BuildIndx = "' + idbuild + '"' +
                    ' And FloorId = "' + this.floorId + '"';
            }
            else {
                updateQuery = 'UPDATE sidsFloorSaveDatas SET Status = 2 , FloorName="' + name + '", FloorCondi= "' + this.form.value.FloorCondi + '"' +
                    ' WHERE SclId = "' + this.schoolId + '"' +
                    ' And BuildIndx = "' + idbuild + '"' +
                    ' And FloorId = "' + this.floorId + '"';
            }
            let query2 = 'UPDATE sidsBuildSavesDatas SET FloorCondition = 1 WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + this.buildingId + '"';
            return this.sqliteDB.update(updateQuery).then(data => {
                console.log('Update Status');
                if (this.status == '3') {
                    this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor }, skipLocationChange: false });
                }
                if (this.status != '3') {
                    this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor }, skipLocationChange: false });
                }
                return this.sqliteDB.update(query2).then(build => { console.log("buildUpdate", build); });
            });
        });
    }
    checkLocalDb() {
        let build = 100 + parseInt(this.buildingId);
        let floor = 1000 + parseInt(this.floorId);
        let query = 'SELECT * FROM sidsFloorQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And FloorId = "' + this.floorId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                console.log(this.dataList, "dataList");
                this.form.patchValue({
                    "IndexId": "",
                    "SchlId": this.schoolId,
                    "VistId": this.vistId,
                    "BldgIdxId": "",
                    "BldgId": this.buildingId,
                    "FloorIdxId": "",
                    "FloorId": this.floorId,
                    "FloorNum": this.dataList[0].FloorNum,
                    "FloorCondi": this.dataList[0].FloorCondi,
                    "FloorSafety": this.dataList[0].FloorSafety == "false" ? false : this.dataList[0].FloorSafety == "true" ? true : this.dataList[0].FloorSafety,
                    "ReqParapetWall": this.dataList[0].ReqParapetWall ? Array.from(this.dataList[0].ReqParapetWall.split(",")) : null,
                    "ParapetWallLength": this.dataList[0].ParapetWallLength,
                    "ParapetWallHeight": this.dataList[0].ParapetWallHeight,
                    "ParapetWallWhiteWash": this.dataList[0].ParapetWallWhiteWash,
                    "ParapetWallReplasting": this.dataList[0].ParapetWallReplasting,
                    "ParapetWallBrickWork": this.dataList[0].ParapetWallBrickWork,
                    "RepairSteps": this.dataList[0].RepairSteps,
                    "WeatheringReq": this.dataList[0].WeatheringReq,
                    "FoolrTy": this.dataList[0].FoolrTy,
                    "FoolrAreReq": this.dataList[0].FoolrAreReq,
                    "OutPipY": this.dataList[0].OutPipY == "false" ? false : this.dataList[0].OutPipY == "true" ? true : this.dataList[0].OutPipY,
                    "PipLenNeed": this.dataList[0].PipLenNeed,
                    "RoofCleaYn": this.dataList[0].RoofCleaYn == "false" ? false : this.dataList[0].RoofCleaYn == "true" ? true : this.dataList[0].RoofCleaYn,
                    "CorridorYn": this.dataList[0].CorridorYn == "false" ? false : this.dataList[0].CorridorYn == "true" ? true : this.dataList[0].CorridorYn,
                    "CorriCondi": this.dataList[0].CorriCondi,
                    "CorriLen": this.dataList[0].CorriLen,
                    "CorridorWidth": this.dataList[0].CorridorWidth,
                    "CorriLighFunc": this.dataList[0].CorriLighFunc,
                    "CorridorRepair": this.dataList[0].CorridorRepair ? Array.from(this.dataList[0].CorridorRepair.split(",")) : null,
                    "AreaWw": this.dataList[0].AreaWw,
                    "AreaReplastering": this.dataList[0].AreaReplastering,
                    "AreaReflooring": this.dataList[0].AreaReflooring,
                    "AreaCeilingPlaster": this.dataList[0].AreaCeilingPlaster,
                    "AreaFlrPatchwork": this.dataList[0].AreaFlrPatchwork,
                    // "DoorReplace":this.dataList[0].DoorReplace,
                    "JaalisReplace": this.dataList[0].JaalisReplace,
                    // "DoorRepair":this.dataList[0].DoorRepair,
                    "JaalisRepair": this.dataList[0].JaalisRepair,
                    // "DoorRepaint":this.dataList[0].DoorRepaint,
                    "JaalisRepaint": this.dataList[0].JaalisRepaint,
                    "BldOhtYn": this.dataList[0].BldOhtYn == "false" ? false : this.dataList[0].BldOhtYn == "true" ? true : this.dataList[0].BldOhtYn,
                    "FunBldOhtYn": this.dataList[0].FunBldOhtYn,
                });
            }
            else {
                console.log("local data");
                this.initialValidator();
            }
        });
    }
    checkLocalFloor() {
        let query = 'SELECT FloorNum FROM sidsFloorQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataList.push(data.rows.item(i));
                }
                this.floor = [];
                this.floorBackup.forEach(dd => {
                    dataList.forEach(ff => {
                        if (dd.value == ff.FloorNum) {
                        }
                        else {
                            this.floor.push(dd);
                        }
                    });
                });
                console.log("YYYYYY", this.floor);
            }
            else {
                console.log("OOOOOO", this.floor);
                this.floor = [];
                this.floor = this.floorBackup;
            }
        });
    }
    goToBack() {
        let build = parseInt(this.buildingId) - 101;
        let buildId = parseInt(this.buildingId) - 100;
        let floor = parseInt(this.floorId) - 1001;
        let floorId = parseInt(this.floorId) - 1000;
        if (this.status == '3') {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor }, skipLocationChange: false });
        }
        if (this.status == '2') {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor }, skipLocationChange: false });
        }
        if (this.status == '1') {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor }, skipLocationChange: false });
        }
        // this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2' }, skipLocationChange: false });
    }
    deleteTerrace() {
        debugger;
        let idbuild = parseInt(this.buildingId) - 100;
        let idfloor = parseInt(this.floorId) - 1000;
        let query = 'DELETE FROM sidsRoomSaves' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildIndx = "' + idbuild + '"' +
            ' And FloorIndx = "' + idfloor + '"' +
            ' And VistId = "' + this.vistId + '"';
        let query2 = 'DELETE FROM newRoomscommons' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And BldgId = "' + this.buildingId + '"' +
            ' And FloorId = "' + this.floorId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            return this.sqliteDB.getDataLocalDB(query2).then(red => {
                console.log("deleteTerrace", data, red);
            });
        });
    }
    onSelectedRoom(ev) {
        if (+this.form.value.FloorNum == 7) {
            this.onToggleClass('', 1);
            this.form.controls['RoofCleaYn'].setValue(false);
            this.form.controls['WeatheringReq'].setValue("");
            this.form.controls['BldOhtYn'].setValue(false);
            this.form.controls['FunBldOhtYn'].setValue("0");
            this.form.controls['BldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.form.controls['PipLenNeed'].setValue("");
            this.form.controls['PipLenNeed'].setValidators(null);
            this.form.controls['OutPipY'].setValue(false);
            this.form.controls['RoofCleaYn'].setValue(false);
            this.form.controls['WeatheringReq'].setValue("");
            this.form.controls['BldOhtYn'].setValue(false);
            this.form.controls['BldOhtYn'].setValidators(null);
            this.form.controls['FunBldOhtYn'].setValidators(null);
        }
        this.form.controls['RoofCleaYn'].updateValueAndValidity();
        this.form.controls['WeatheringReq'].updateValueAndValidity();
        this.form.controls['BldOhtYn'].updateValueAndValidity();
        this.form.controls['FunBldOhtYn'].updateValueAndValidity();
    }
    onSelecteCondi(ev) {
        if (+this.form.value.FloorCondi == 1 || +this.form.value.FloorCondi == 4) {
            this.form.controls['RoofCleaYn'].setValue(false);
            this.form.controls['WeatheringReq'].setValue("");
            this.form.controls['BldOhtYn'].setValue(false);
            this.form.controls['FunBldOhtYn'].setValue("0");
            this.form.controls['BldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.form.controls['RoofCleaYn'].setValue(false);
            this.form.controls['WeatheringReq'].setValue("");
            this.form.controls['BldOhtYn'].setValue(false);
            this.form.controls['BldOhtYn'].setValidators(null);
            this.form.controls['FunBldOhtYn'].setValidators(null);
        }
        this.form.controls['RoofCleaYn'].updateValueAndValidity();
        this.form.controls['WeatheringReq'].updateValueAndValidity();
        this.form.controls['BldOhtYn'].updateValueAndValidity();
        this.form.controls['FunBldOhtYn'].updateValueAndValidity();
    }
    getToggleClass(ev) {
        if (this.form.value.BldOhtYn) {
            this.form.controls['FunBldOhtYn'].setValue("0");
            this.form.controls['FunBldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.form.controls['FunBldOhtYn'].setValue("0");
            this.form.controls['FunBldOhtYn'].setValidators(null);
        }
        this.form.controls['FunBldOhtYn'].updateValueAndValidity();
    }
    ionViewWillLeave() {
        this.form.reset();
        this.initialValidator();
        if (this.toastinstance) {
            this.toastinstance.dismiss();
        }
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    presentToastWithOptions(buildId, buildName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.toastinstance) {
                this.toastinstance.dismiss();
            }
            let text = 'B ' + buildId + ' ' + buildName + ' opened';
            this.toastinstance = yield this.toastController.create({
                header: text,
                position: 'bottom',
                cssClass: 'my-toast',
                color: 'light',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            this.toastinstance.present();
        });
    }
    onToggleClass(event, id) {
        if (id == 1) {
            if (this.form.value.OutPipY == false) {
                this.form.controls['PipLenNeed'].setValue("");
                this.form.controls['PipLenNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.form.controls['PipLenNeed'].setValue("");
                this.form.controls['PipLenNeed'].setValidators(null);
            }
            this.form.controls['PipLenNeed'].updateValueAndValidity();
        }
    }
};
NewFloorquestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
NewFloorquestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-new-floorquestions',
        template: _raw_loader_new_floorquestions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_floorquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewFloorquestionsPage);



/***/ }),

/***/ 72889:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-floorquestions/new-floorquestions.page.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1mbG9vcnF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUVFLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUdBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFBQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BOzs7RUFHRSxlQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFPQSxTQUFBOztBQUdBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVdBLE9BQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQWFBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWVBLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFpQkEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQW1CQSxRQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRjs7QUFxQkEsT0FBQTs7QUFNQTtFQUNFLFdBQUE7QUF2QkY7O0FBMEJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF2QkY7O0VBeUJBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF0QkY7O0VBd0JBOztJQUVFLGVBQUE7SUFDQSxtQkFBQTtFQXJCRjtBQUNGOztBQXdCQTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUF0QkY7O0FBOEJBO0VBQ0UsVUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBM0JGOztBQThCQTtFQUNFLFVBQUE7QUEzQkY7O0FBb0NBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBakNGOztBQW9DQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWpDRjs7QUF3Q0E7RUFDRSwwQkFBQTtBQXJDRjs7QUF3Q0E7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXJDSjs7QUF3Q0E7RUFDRyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXJDSDs7QUF3Q0U7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBckNOOztBQXdDQTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQXJDRjs7QUF3Q0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJDSjs7QUF1Q0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXBDRjs7QUFzQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFuQ0Y7O0FBcUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbENGOztBQXFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWxDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFtQ0E7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBaENGIiwiZmlsZSI6Im5ldy1mbG9vcnF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQm90dG9tMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm1hcmdpblRvcDAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3A1IHtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNkLWNvbnRhaW5lciB7XHJcbiAgLy8gd2lkdGg6IDkzJTtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAvLyBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNkLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmVUZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50aW1lbGluZUljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZC1hdXRob3Ige1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jY2QtdGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBtYXJnaW4tdG9wOiAyZW07XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xyXG4gIC8qIHRoaXMgaXMgdGhlIHZlcnRpY2FsIGxpbmUgKi9cclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1pY29uIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtcGljdHVyZSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgY29sb3I6ICMzMDNlNDk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKkNPTE9SUyovXHJcblxyXG5cclxuLypQT1NJVElWRSovXHJcblxyXG4ucG9zaXRpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuLnBvc2l0aXZlIGkge1xyXG4gIGNvbG9yOiAjNGE4N2VlO1xyXG59XHJcblxyXG5cclxuLypDQUxNKi9cclxuXHJcbi5jYWxtIHtcclxuICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbn1cclxuXHJcbi5jYWxtIGkge1xyXG4gIGNvbG9yOiAjNDNjZWU2O1xyXG59XHJcblxyXG5cclxuLypCQUxBTkNFRCovXHJcblxyXG4uYmFsYW5jZWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2Y2MzMztcclxufVxyXG5cclxuLmJhbGFuY2VkIGkge1xyXG4gIGNvbG9yOiAjNjZjYzMzO1xyXG59XHJcblxyXG5cclxuLypFTkVSR0laRUQqL1xyXG5cclxuLmVuZXJnaXplZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG4uZW5lcmdpemVkIGkge1xyXG4gIGNvbG9yOiAjZjBiODQwO1xyXG59XHJcblxyXG5cclxuLypBU1NFUlRJVkUqL1xyXG5cclxuLmFzc2VydGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG4uYXNzZXJ0aXZlIGkge1xyXG4gIGNvbG9yOiAjZWY0ZTNhO1xyXG59XHJcblxyXG5cclxuLypST1lBTCovXHJcblxyXG4ucm95YWwge1xyXG4gIGJvcmRlci1jb2xvcjogIzhhNmRlOTtcclxufVxyXG5cclxuLnJveWFsIGkge1xyXG4gIGNvbG9yOiAjOGE2ZGU5O1xyXG59XHJcblxyXG5cclxuLypEQVJLKi9cclxuXHJcbi8vIC5kYXJrIHtcclxuLy8gICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbi8vIH1cclxuXHJcbi5kYXJrIGkge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLy8gaW9uLWxhYmVsIHtcclxuICAvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcblxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206MS4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4vLyBpb24tc2VsZWN0IHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4vLyB9XHJcblxyXG4uaW5wdXQtY2xyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OjBweDtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi8vIGlvbi1pbnB1dCB7XHJcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tbm8tcGFkZGluZ3tcclxuICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RkE7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5pb24tbm8tcGFkZGluZy1xdWVzdGlvbntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hZGQge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1zYXZlIHtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG59XHJcbi5mb290ZXItbm90IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uZm9vdGVyLXZlcmlmaWVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICBwYWRkaW5nOiAxMHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uc2lkc1ZpZXd7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIGJvcmRlci1jb2xvcjogIzhCNjdCMztcclxuICBjb2xvcjogIzhCNjdCMztcclxufVxyXG5cclxuLnF1ZXNDb2xvcntcclxuICBiYWNrZ3JvdW5kOiAjRjNGNEZBO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iZ0NoZWNre1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogOTQlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5pb24tdG9nZ2xle1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxufSJdfQ== */");

/***/ }),

/***/ 70501:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/building/new-floorquestions/new-floorquestions.page.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Floor Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Floor General Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Which Floor?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorNum\"\r\n                style=\"max-width: 100% !important;\" (ionChange)=\"onSelectedRoom($event)\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of floor\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['FloorNum'].errors?.required && (form.controls['FloorNum'].dirty || form.controls['FloorNum'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Floor condition<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorCondi\"\r\n                style=\"max-width: 100% !important;\" (ionChange)=\"onSelecteCondi($event)\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of condition\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['FloorCondi'].hasError('required') && (form.controls['FloorCondi'].dirty || form.controls['FloorCondi'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Is there outlet pipe to drain rain water?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"form.value.OutPipY\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.OutPipY\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" (ionChange)=\"onToggleClass($event,1)\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.OutPipY?true:false}}\" formControlName=\"OutPipY\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['OutPipY'].hasError('required') && (form.controls['OutPipY'].dirty || form.controls['OutPipY'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"!form.value.OutPipY && form.value.FloorNum =='7'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Length of Pipe needed (in ft)<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipLenNeed\" \r\n                maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['PipLenNeed'].hasError('required') && (form.controls['PipLenNeed'].dirty || form.controls['PipLenNeed'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.PipLenNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Is there a need for cleaning of roof surface?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"form.value.RoofCleaYn\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.RoofCleaYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.RoofCleaYn?true:false}}\" formControlName=\"RoofCleaYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['RoofCleaYn'].hasError('required') && (form.controls['RoofCleaYn'].dirty || form.controls['RoofCleaYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Is there a need for weathering course or pressed tiles in the terrace?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WeatheringReq\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of Weathering\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['WeatheringReq'].hasError('required') && (form.controls['WeatheringReq'].dirty || form.controls['WeatheringReq'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             6\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Does the building have an overhead tank? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                    <div *ngIf=\"form.value.BldOhtYn\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.BldOhtYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle (ionChange)=\"getToggleClass($event)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.BldOhtYn?true:false}}\" formControlName=\"BldOhtYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldOhtYn'].hasError('required') && (form.controls['BldOhtYn'].dirty || form.controls['BldOhtYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldOhtYn && form.value.FloorNum =='7'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             6A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Functional OHTs <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"FunBldOhtYn\" \r\n                maxlength=\"1\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['FunBldOhtYn'].hasError('required') && (form.controls['FunBldOhtYn'].dirty || form.controls['FunBldOhtYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.FunBldOhtYn.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"this.status != '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_building_new-floorquestions_new-floorquestions_module_ts-es2015.js.map