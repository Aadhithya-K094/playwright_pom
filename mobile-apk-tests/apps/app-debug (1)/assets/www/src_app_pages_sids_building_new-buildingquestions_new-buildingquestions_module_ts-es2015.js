(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_building_new-buildingquestions_new-buildingquestions_module_ts"],{

/***/ 77687:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-buildingquestions/new-buildingquestions-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBuildingquestionsPageRoutingModule": function() { return /* binding */ NewBuildingquestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _new_buildingquestions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-buildingquestions.page */ 27970);




const routes = [
    {
        path: '',
        component: _new_buildingquestions_page__WEBPACK_IMPORTED_MODULE_0__.NewBuildingquestionsPage
    }
];
let NewBuildingquestionsPageRoutingModule = class NewBuildingquestionsPageRoutingModule {
};
NewBuildingquestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewBuildingquestionsPageRoutingModule);



/***/ }),

/***/ 38714:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-buildingquestions/new-buildingquestions.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBuildingquestionsPageModule": function() { return /* binding */ NewBuildingquestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _new_buildingquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-buildingquestions-routing.module */ 77687);
/* harmony import */ var _new_buildingquestions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-buildingquestions.page */ 27970);







let NewBuildingquestionsPageModule = class NewBuildingquestionsPageModule {
};
NewBuildingquestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_buildingquestions_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewBuildingquestionsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_new_buildingquestions_page__WEBPACK_IMPORTED_MODULE_1__.NewBuildingquestionsPage]
    })
], NewBuildingquestionsPageModule);



/***/ }),

/***/ 27970:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-buildingquestions/new-buildingquestions.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBuildingquestionsPage": function() { return /* binding */ NewBuildingquestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_new_buildingquestions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-buildingquestions.page.html */ 96804);
/* harmony import */ var _new_buildingquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-buildingquestions.page.scss */ 85395);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);


















let NewBuildingquestionsPage = class NewBuildingquestionsPage {
    constructor(router, formBuilder, route, camera, geolocation, alertController, file, sqliteDB, uploadService, utilityService, datePipe, userSessionService, androidPermissions, alertService, el) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.camera = camera;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.file = file;
        this.sqliteDB = sqliteDB;
        this.uploadService = uploadService;
        this.utilityService = utilityService;
        this.datePipe = datePipe;
        this.userSessionService = userSessionService;
        this.androidPermissions = androidPermissions;
        this.alertService = alertService;
        this.el = el;
        this.years = [
            {
                "value": "1",
                "label": "<5"
            },
            {
                "value": "2",
                "label": "5-10"
            },
            {
                "value": "3",
                "label": "10-15"
            },
            {
                "value": "4",
                "label": "15-20"
            },
            {
                "value": "5",
                "label": "20-25"
            },
            {
                "value": "6",
                "label": "25-30"
            },
            {
                "value": "7",
                "label": ">30"
            }
        ];
        this.sourceData = [
            {
                "value": "1",
                "label": "Government"
            },
            {
                "value": "2",
                "label": "CSR"
            },
            {
                "value": "3",
                "label": "Community Contribution"
            },
            {
                "value": "4",
                "label": "Individual Contribution"
            },
            {
                "value": "5",
                "label": "Others"
            }
        ];
        this.type = [
            {
                "value": "1",
                "label": "Administrative"
            },
            {
                "value": "2",
                "label": "Academic"
            },
            {
                "value": "3",
                "label": "Toilet Block"
            },
            {
                "value": "4",
                "label": "Kitchen Shed"
            },
            {
                "value": "5",
                "label": "Lab"
            },
            {
                "value": "6",
                "label": "Dining"
            },
            {
                "value": "7",
                "label": "Anganwadi"
            },
            {
                "value": "8",
                "label": "IE Resource Building"
            },
            {
                "value": "9",
                "label": "CRC Building"
            },
            {
                "value": "10",
                "label": "Combination"
            },
            {
                "value": "11",
                "label": "Indoor Auditorium"
            }
            // {
            //   "value": "12",
            //   "label": "Library"
            // },
            // {
            //   "value": "13",
            //   "label": "Security Room"
            // }
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
                "label": "Dilapitated - to be demolished"
            },
            {
                "value": "4",
                "label": "Needs Repair"
            },
            {
                "value": "5",
                "label": "Under Renovations"
            }
        ];
        this.repair = [
            // {
            //   "value": "1",
            //   "label": "Weathering Course"
            // },
            // {
            //   "value": "2",
            //   "label": "Pressed Tiles"
            // },
            {
                "value": "3",
                "label": "Renewing the overall plumbing works for Handwash and Drinking Water"
            },
            {
                "value": "4",
                "label": "Renewing the plumbing works for toilet"
            },
            {
                "value": "5",
                "label": "Repair of inner electrical lines"
            },
            {
                "value": "6",
                "label": "Overall Water Seepage and Leakage"
            },
            {
                "value": "7",
                "label": "Exterior Whitewashing and Painting for building"
            },
            {
                "value": "8",
                "label": "Interior Whitewashing and Painting of Building Common Spaces"
            },
            {
                "value": "9",
                "label": "Replastering of Building Extertior and Interior Common Spaces"
            },
            {
                "value": "10",
                "label": "Reflooring of Building Common Spaces"
            },
            {
                "value": "11",
                "label": "Floor Patchwork - Building Common Spaces"
            }
        ];
        this.electricity = [
            {
                "value": "1",
                "label": "All Rooms"
            },
            {
                "value": "2",
                "label": "Most Rooms"
            },
            {
                "value": "3",
                "label": "Few Rooms"
            },
            {
                "value": "4",
                "label": "No Rooms"
            }
        ];
        this.fire = [
            {
                "value": "1",
                "label": "Functional"
            },
            {
                "value": "2",
                "label": "Expired"
            },
            {
                "value": "3",
                "label": "No Fire"
            },
            {
                "value": "4",
                "label": "Extinguisher"
            }
        ];
        this.firstAidKit = [
            {
                "value": "1",
                "label": "Usable"
            },
            {
                "value": "2",
                "label": "Needs Refill"
            },
            {
                "value": "3",
                "label": "No Kit"
            }
        ];
        this.statge = [
            {
                "value": "1",
                "label": "Increase in Height"
            },
            {
                "value": "2",
                "label": "Levelling"
            },
            {
                "value": "3",
                "label": "To be Demolished"
            },
            {
                "value": "4",
                "label": "None"
            }
        ];
        this.Agency = [
            {
                "value": "1",
                "label": "PWD"
            },
            {
                "value": "2",
                "label": "NABARD"
            },
            {
                "value": "3",
                "label": "POLICE HOUSING CORPORATION"
            },
            {
                "value": "4",
                "label": "RURAL DEVELOPMENT"
            },
            {
                "value": "5",
                "label": "SMC"
            },
            {
                "value": "6",
                "label": "INDIVIDUAL"
            },
            {
                "value": "7",
                "label": "OTHERS"
            }
        ];
        this.StatusAge = [
            {
                "value": "1",
                "label": "Functional"
            },
            {
                "value": "2",
                "label": "Needs repair"
            },
            {
                "value": "3",
                "label": "To be demolished"
            },
            {
                "value": "4",
                "label": "Under Construction"
            },
            {
                "value": "5",
                "label": "No Stage"
            }
        ];
        this.Electricity = [
            {
                value: "1",
                label: 'Yes'
            },
            {
                value: "2",
                label: 'No'
            },
            {
                value: "3",
                label: 'Yes but not Functional '
            }
        ];
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
        this.status = this.routeData.queryParams.status;
        console.log(this.schoolId, this.vistId, this.buildingId, this.status);
        this.udiseCode = this.utilityService.udiseCode;
        this.checkLocalDb();
    }
    initialValidator() {
        this.form = this.formBuilder.group({
            "IndexId": "",
            "SchlId": this.schoolId,
            "VistId": this.vistId,
            "BldgId": this.buildingId,
            "BldgName": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgNameRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            // "BldgAge": new FormControl('', Validators.required),
            "BldgYrConst": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgYrConstRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgConstAgency": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgConstAgencyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgConstOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgConstOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFundSourceCons": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgFundSourceConsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFundSourceConsOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFundSourceConsOthersRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgType": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgTypeRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgLengthRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgBre": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgBreRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgConditionRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "ElectricityAvai": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "ElectricityAvaiRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgRepairRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaWeatheringReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaWeatheringReqRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaPressedTiles": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaPressedTilesRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "PipeNeedHwDw": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "PipeNeedHwDwRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "PipeNeedToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "PipeNeedToiletRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "WireLenElectrcty": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "WireLenElectrctyRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaWaterLeakage": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaWaterLeakageRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaExtWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaExtWwRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaIntWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaIntWwRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaReplasting": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaReplastingRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaReflooringRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaFlrPatchwrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AreaFlrPatchwrkRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AuditoriumYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "AuditoriumYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AudiStageStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AudiStageStatusRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            // "AuditoriumStageYn": new FormControl(false, null),
            // "AuditoriumStageReqt": new FormControl('', null),
            // "AuditoriumStageArea": new FormControl('', null),
            // "AuditoriumStageHeight": new FormControl('', null),
            // "AuditoriumStageAreaLevel": new FormControl('', null),
            "AuditoriumLights": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AuditoriumLightsRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AuditoriumFans": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AuditoriumFansRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "AuditoriumPrjtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "AuditoriumPrjtYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            // "AuditoriumPrjtFunc": new FormControl(false, null),
            "RampAvailYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "RampAvailYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "RampRepairYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "RampRepairYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "RampHandrailYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "RampHandrailYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "FireExtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "FireExtYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            // "FirstAidKit": new FormControl(false, null),
            // "CCTVCameraYn": new FormControl(false, null),
            // "BuildTabsYn": new FormControl(false, null),
            // "BuildTabsNumber": new FormControl('', null),
            "BuildReapairComArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "BuildReapairComAreaRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgExterior": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgExteriorRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgInterior": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgInteriorRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "RainWaterFacilityYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
            "RainWaterFacilityYnRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFrontPhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            "BldgFrontPhotoRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFrontPhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "BldgFrontPhotoNameRmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            // "BldgBackPhoto": new FormControl('', Validators.required),
            // "BldgBackPhotoName": new FormControl('', null),
            // "BldgRightSidePhoto": new FormControl('', Validators.required),
            // "BldgRightSidePhotoName": new FormControl('', null),
            // "BldgLeftSidePhoto": new FormControl('', Validators.required),
            // "BldgLeftSidePhotoName": new FormControl('', null),
            "LATITUDE": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "LATITUDERmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "LOGITUDE": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            "LOGITUDERmrk": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
        });
    }
    onSave() {
        debugger;
        console.log("Form", this.form);
        if (this.form.valid) {
            this.submitted = false;
            this.alertService.success("Saved Successfully");
            let query = 'DELETE FROM  sidsBuildingQuestion' +
                ' WHERE SclId = "' + this.schoolId + '"' +
                ' And BuildingId = "' + this.buildingId + '"' +
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
            this.validateAllFormFields(this.form);
            this.alertService.error('Please Fill all the Required Fields');
            // this.alertService.error("Please enter valid data");
            this.submitted = true;
            this.focusValidator();
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    insertLocalDB() {
        let insertRows = [];
        insertRows.push([
            "INSERT INTO sidsBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [null, this.schoolId, this.vistId, this.buildingId, "",
                this.form.value.BldgName,
                // this.form.value.BldgAge, 
                this.form.value.BldgFundSourceCons, this.form.value.BldgFundSourceConsOthers,
                this.form.value.BldgType, this.form.value.BldgLength, this.form.value.BldgBre,
                this.form.value.BldgCondition, this.form.value.ElectricityAvai, this.form.value.BldgRepair ? this.form.value.BldgRepair.toString() : this.form.value.BldgRepair,
                this.form.value.AreaWeatheringReq, this.form.value.AreaPressedTiles, this.form.value.PipeNeedHwDw, this.form.value.PipeNeedToilet, this.form.value.WireLenElectrcty, this.form.value.AreaWaterLeakage,
                this.form.value.AreaExtWw, this.form.value.AreaIntWw, this.form.value.AreaReplasting, this.form.value.AreaReflooring,
                this.form.value.AreaFlrPatchwrk, this.form.value.AuditoriumYn,
                // this.form.value.AuditoriumStageReqt, 
                // this.form.value.AuditoriumStageArea,
                // this.form.value.AuditoriumStageHeight, 
                // this.form.value.AuditoriumStageAreaLevel,
                this.form.value.AuditoriumLights, this.form.value.AuditoriumFans,
                this.form.value.AuditoriumPrjtYn,
                // this.form.value.AuditoriumPrjtFunc, 
                this.form.value.RampAvailYn,
                this.form.value.RampRepairYn, this.form.value.RampHandrailYn, this.form.value.FireExtYn,
                // this.form.value.FirstAidKit, 
                // this.form.value.CCTVCameraYn, 
                // this.form.value.BuildTabsYn, 
                // this.form.value.BuildTabsNumber, 
                this.form.value.BuildReapairComArea, this.form.value.BldgYrConst, this.form.value.BldgConstAgency,
                this.form.value.BldgConstOthers, this.form.value.AudiStageStatus, this.form.value.BldgFrontPhoto, this.form.value.BldgFrontPhotoName,
                this.form.value.BldgExterior, this.form.value.BldgInterior, this.form.value.RainWaterFacilityYn,
                // this.form.value.BldgBackPhoto, this.form.value.BldgBackPhotoName, this.form.value.BldgRightSidePhoto, this.form.value.BldgRightSidePhotoName,
                // this.form.value.BldgLeftSidePhoto, this.form.value.BldgLeftSidePhotoName,
                this.form.value.LATITUDE, this.form.value.LOGITUDE,
            ]
        ]);
        console.log("pludgeRepar", this.form.value.BldgRepair);
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("Floor Details Stored Locally");
            this.alertService.success('Saved Successfully');
            let name = this.form.value.BldgName;
            let build = parseInt(this.buildingId) - 101;
            let buildId = parseInt(this.buildingId) - 100;
            if (+this.form.value.BldgCondition == 2 || +this.form.value.BldgCondition == 3 || +this.form.value.BldgCondition == 5) {
                this.deleteFloorandRoom();
            }
            if (+this.form.value.BldgType == 3) {
                this.deleteTypeRoom();
            }
            let query = 'UPDATE sidsBuildSavesDatas SET Status = 2 WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + this.buildingId + '"';
            let query1 = 'UPDATE sidsBuildSavesDatas SET BuildName="' + name + '" WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + this.buildingId + '"';
            let query2 = 'UPDATE sidsBuildSavesDatas SET BuildCondi="' + this.form.value.BldgCondition + '" WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + this.buildingId + '"';
            return this.sqliteDB.update(query).then(data => {
                return this.sqliteDB.update(query1).then(data => {
                    return this.sqliteDB.update(query2).then(data => {
                        console.log("update");
                        this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId, BldgCondition: +this.form.value.BldgCondition == 2 ? 2 : +this.form.value.BldgCondition == 1 ? 1 : null }, skipLocationChange: false });
                    });
                });
            });
        });
    }
    checkLocalDb() {
        let query = 'SELECT * FROM sidsBuildingQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                // this.dataActive =true;
                // this.dataTrue = true
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                console.log('selectQuery', this.dataList);
                this.form.patchValue({
                    "IndexId": "",
                    "SchlId": this.schoolId,
                    "VistId": this.vistId,
                    "BldgId": this.buildingId,
                    "BldgName": this.dataList[0].BldgName,
                    "BldgFundSourceCons": this.dataList[0].BldgFundSourceCons,
                    "BldgFundSourceConsOthers": this.dataList[0].BldgFundSourceConsOthers,
                    "BldgType": this.dataList[0].BldgType,
                    "BldgLength": this.dataList[0].BldgLength,
                    "BldgBre": this.dataList[0].BldgBre,
                    "BldgCondition": this.dataList[0].BldgCondition,
                    "ElectricityAvai": this.dataList[0].ElectricityAvai,
                    "BldgYrConst": this.dataList[0].BldgYrConst,
                    "BldgConstAgency": this.dataList[0].BldgConstAgency,
                    "BldgConstOthers": this.dataList[0].BldgConstOthers,
                    "BldgRepair": this.dataList[0].BldgRepair ? Array.from(this.dataList[0].BldgRepair.split(",")) : "",
                    "AreaWeatheringReq": this.dataList[0].AreaWeatheringReq,
                    "AreaPressedTiles": this.dataList[0].AreaPressedTiles,
                    "PipeNeedHwDw": this.dataList[0].PipeNeedHwDw,
                    "PipeNeedToilet": this.dataList[0].PipeNeedToilet,
                    "WireLenElectrcty": this.dataList[0].WireLenElectrcty,
                    "AreaWaterLeakage": this.dataList[0].AreaWaterLeakage,
                    "AreaExtWw": this.dataList[0].AreaExtWw,
                    "AreaIntWw": this.dataList[0].AreaIntWw,
                    "AreaReplasting": this.dataList[0].AreaReplasting,
                    "AreaReflooring": this.dataList[0].AreaReflooring,
                    "AreaFlrPatchwrk": this.dataList[0].AreaFlrPatchwrk,
                    "AuditoriumYn": this.dataList[0].AuditoriumYn == "false" ? false : this.dataList[0].AuditoriumYn == "true" ? true : this.dataList[0].AuditoriumYn,
                    "AuditoriumLights": this.dataList[0].AuditoriumLights,
                    "AudiStageStatus": this.dataList[0].AudiStageStatus,
                    "AuditoriumFans": this.dataList[0].AuditoriumFans,
                    "AuditoriumPrjtYn": this.dataList[0].AuditoriumPrjtYn == "false" ? false : this.dataList[0].AuditoriumPrjtYn == "true" ? true : this.dataList[0].AuditoriumPrjtYn,
                    "RampAvailYn": this.dataList[0].RampAvailYn,
                    "RampRepairYn": this.dataList[0].RampRepairYn == "false" ? false : this.dataList[0].RampRepairYn == "true" ? true : this.dataList[0].RampRepairYn,
                    "RampHandrailYn": this.dataList[0].RampHandrailYn == "false" ? false : this.dataList[0].RampHandrailYn == "true" ? true : this.dataList[0].RampHandrailYn,
                    "FireExtYn": this.dataList[0].FireExtYn == "false" ? false : this.dataList[0].FireExtYn == "true" ? true : this.dataList[0].FireExtYn,
                    "BuildReapairComArea": this.dataList[0].BuildReapairComArea == "false" ? false : this.dataList[0].BuildReapairComArea == "true" ? true : this.dataList[0].BuildReapairComArea,
                    "BldgFrontPhoto": this.dataList[0].BldgFrontPhoto,
                    "BldgFrontPhotoName": this.dataList[0].BldgFrontPhotoName,
                    "BldgExterior": this.dataList[0].BldgExterior,
                    "BldgInterior": this.dataList[0].BldgInterior,
                    "RainWaterFacilityYn": this.dataList[0].RainWaterFacilityYn == "false" ? false : this.dataList[0].RainWaterFacilityYn == "true" ? true : this.dataList[0].RainWaterFacilityYn,
                    // "BldgBackPhoto": this.dataList[0].BldgBackPhoto,
                    // "BldgBackPhotoName": this.dataList[0].BldgBackPhotoName,
                    // "BldgRightSidePhoto": this.dataList[0].BldgRightSidePhoto,
                    // "BldgRightSidePhotoName": this.dataList[0].BldgRightSidePhotoName,
                    // "BldgLeftSidePhoto": this.dataList[0].BldgLeftSidePhoto,
                    // "BldgLeftSidePhotoName": this.dataList[0].BldgLeftSidePhotoName,
                    "LATITUDE": this.dataList[0].LATITUDE,
                    "LOGITUDE": this.dataList[0].LOGITUDE,
                    // "BldgAge": this.dataList[0].BldgAge,
                    // "AuditoriumPrjtFunc": this.dataList[0].AuditoriumPrjtFunc == "false" ? false : this.dataList[0].AuditoriumPrjtFunc == "true" ? true : this.dataList[0].AuditoriumPrjtFunc,
                    // "AuditoriumStageYn": this.dataList[0].AuditoriumStageYn == "false" ? false : this.dataList[0].AuditoriumStageYn == "true" ? true : this.dataList[0].AuditoriumStageYn,
                    // "AuditoriumStageReqt":this.dataList[0].AuditoriumStageReqt ? Array.from(this.dataList[0].AuditoriumStageReqt.split(",")) : "",
                    // "AuditoriumStageArea": this.dataList[0].AuditoriumStageArea,
                    // "AuditoriumStageHeight": this.dataList[0].AuditoriumStageHeight,
                    // "AuditoriumStageAreaLevel": this.dataList[0].AuditoriumStageAreaLevel,
                    // "FirstAidKit": this.dataList[0].FirstAidKit == "false" ? false : this.dataList[0].FirstAidKit == "true" ? true : this.dataList[0].FirstAidKit,
                    // "CCTVCameraYn": this.dataList[0].CCTVCameraYn == "false" ? false : this.dataList[0].CCTVCameraYn == "true" ? true : this.dataList[0].CCTVCameraYn,
                    // "BuildTabsYn": this.dataList[0].BuildTabsYn == "false" ? false : this.dataList[0].BuildTabsYn == "true" ? true : this.dataList[0].BuildTabsYn,
                    // "BuildTabsNumber": this.dataList[0].BuildTabsNumber,
                });
                // if(this.form.value.AuditoriumStageReqt){
                //   this.onMultiSelectChange(this.form.value.AuditoriumStageReqt)
                // }
                // if(this.dataList[0].BldgFrontPhoto){
                //   // this.imageKey = this.dataList[0].BldgFrontPhoto;
                //   this.viewImage(1);
                // }
                // if(this.dataList[0].BldgBackPhoto){
                //   setTimeout(()=>{
                //     this.viewImage(2);
                //   },100)
                // }
                // if(this.dataList[0].BldgRightSidePhoto){
                //   setTimeout(()=>{
                //     this.viewImage(3);
                //   },2000)
                // }
                // if(this.dataList[0].BldgLeftSidePhoto){
                //   setTimeout(()=>{
                //     this.viewImage(4);
                //   },3000)
                // }
            }
            else {
                console.log("local data");
                this.initialValidator();
            }
        });
    }
    onFunRepair(event, id) {
        console.log(event);
        this.repairActive1 = false;
        this.repairActive2 = false;
        this.repairActive3 = false;
        this.repairActive4 = false;
        this.repairActive5 = false;
        this.repairActive6 = false;
        this.repairActive7 = false;
        this.repairActive8 = false;
        this.repairActive9 = false;
        this.repairActive10 = false;
        this.repairActive11 = false;
        for (let i = 0; i <= event.length; i++) {
            if (event[i] == "1") {
                this.repairActive1 = true;
            }
            if (event[i] == "2") {
                this.repairActive2 = true;
            }
            if (event[i] == "3") {
                this.repairActive3 = true;
            }
            if (event[i] == "4") {
                this.repairActive4 = true;
            }
            if (event[i] == "5") {
                this.repairActive5 = true;
            }
            if (event[i] == "6") {
                this.repairActive6 = true;
            }
            if (event[i] == "7") {
                this.repairActive7 = true;
            }
            if (event[i] == "8") {
                this.repairActive8 = true;
            }
            if (event[i] == "9") {
                this.repairActive9 = true;
            }
            if (event[i] == "10") {
                this.repairActive10 = true;
            }
            if (event[i] == "11") {
                this.repairActive11 = true;
            }
        }
        if (this.repairActive1) {
            // this.form.controls['AreaWeatheringReq'].setValue("");
            this.form.controls['AreaWeatheringReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaWeatheringReq'].setValue("");
            this.form.controls['AreaWeatheringReq'].setValidators(null);
            this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
        }
        if (this.repairActive2) {
            // this.form.controls['AreaPressedTiles'].setValue("");
            this.form.controls['AreaPressedTiles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaPressedTiles'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaPressedTiles'].setValue("");
            this.form.controls['AreaPressedTiles'].setValidators(null);
            this.form.controls['AreaPressedTiles'].updateValueAndValidity();
        }
        if (this.repairActive3) {
            // this.form.controls['PipeNeedHwDw'].setValue("");
            this.form.controls['PipeNeedHwDw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
        }
        else {
            this.form.controls['PipeNeedHwDw'].setValue("");
            this.form.controls['PipeNeedHwDw'].setValidators(null);
            this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
        }
        if (this.repairActive4) {
            // this.form.controls['PipeNeedToilet'].setValue("");
            this.form.controls['PipeNeedToilet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['PipeNeedToilet'].updateValueAndValidity();
        }
        else {
            this.form.controls['PipeNeedToilet'].setValue("");
            this.form.controls['PipeNeedToilet'].setValidators(null);
            this.form.controls['PipeNeedToilet'].updateValueAndValidity();
        }
        if (this.repairActive5) {
            // this.form.controls['WireLenElectrcty'].setValue("");
            this.form.controls['WireLenElectrcty'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['WireLenElectrcty'].updateValueAndValidity();
        }
        else {
            this.form.controls['WireLenElectrcty'].setValue("");
            this.form.controls['WireLenElectrcty'].setValidators(null);
            this.form.controls['WireLenElectrcty'].updateValueAndValidity();
        }
        if (this.repairActive6) {
            // this.form.controls['AreaWaterLeakage'].setValue("");
            this.form.controls['AreaWaterLeakage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaWaterLeakage'].setValue("");
            this.form.controls['AreaWaterLeakage'].setValidators(null);
            this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
        }
        if (this.repairActive7) {
            // this.form.controls['AreaExtWw'].setValue("");
            this.form.controls['AreaExtWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaExtWw'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaExtWw'].setValue("");
            this.form.controls['AreaExtWw'].setValidators(null);
            this.form.controls['AreaExtWw'].updateValueAndValidity();
        }
        if (this.repairActive8) {
            // this.form.controls['AreaIntWw'].setValue("");
            this.form.controls['AreaIntWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaIntWw'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaIntWw'].setValue("");
            this.form.controls['AreaIntWw'].setValidators(null);
            this.form.controls['AreaIntWw'].updateValueAndValidity();
        }
        if (this.repairActive9) {
            // this.form.controls['AreaReplasting'].setValue("");
            this.form.controls['AreaReplasting'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaReplasting'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaReplasting'].setValue("");
            this.form.controls['AreaReplasting'].setValidators(null);
            this.form.controls['AreaReplasting'].updateValueAndValidity();
        }
        if (this.repairActive10) {
            // this.form.controls['AreaReflooring'].setValue("");
            this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaReflooring'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaReflooring'].setValue("");
            this.form.controls['AreaReflooring'].setValidators(null);
            this.form.controls['AreaReflooring'].updateValueAndValidity();
        }
        if (this.repairActive11) {
            // this.form.controls['AreaFlrPatchwrk'].setValue("");
            this.form.controls['AreaFlrPatchwrk'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaFlrPatchwrk'].setValue("");
            this.form.controls['AreaFlrPatchwrk'].setValidators(null);
            this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
        }
    }
    onMultiSelectChange(event) {
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
            // this.form.controls['AuditoriumStageArea'].setValue("");
            // this.form.controls['AuditoriumStageArea'].setValidators(Validators.required);
            // this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            // this.form.controls['AuditoriumStageHeight'].setValue("");
            // this.form.controls['AuditoriumStageHeight'].setValidators(Validators.required);
            // this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        }
        else {
            // this.form.controls['AuditoriumStageArea'].setValue("");
            // this.form.controls['AuditoriumStageArea'].setValidators(null);
            // this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            // this.form.controls['AuditoriumStageHeight'].setValue("");
            // this.form.controls['AuditoriumStageHeight'].setValidators(null);
            // this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        }
        if (this.activeLevelling) {
            // this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            // this.form.controls['AuditoriumStageAreaLevel'].setValidators(Validators.required);
            // this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
        else {
            // this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            // this.form.controls['AuditoriumStageAreaLevel'].setValidators(null);
            // this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
    }
    getOnFunRepair(event, id) {
        console.log(event);
        this.repairActive1 = false;
        this.repairActive2 = false;
        this.repairActive3 = false;
        this.repairActive4 = false;
        this.repairActive5 = false;
        this.repairActive6 = false;
        this.repairActive7 = false;
        this.repairActive8 = false;
        this.repairActive9 = false;
        this.repairActive10 = false;
        this.repairActive11 = false;
        for (let i = 0; i <= event.length; i++) {
            if (event[i] == "1") {
                this.repairActive1 = true;
            }
            if (event[i] == "2") {
                this.repairActive2 = true;
            }
            if (event[i] == "3") {
                this.repairActive3 = true;
            }
            if (event[i] == "4") {
                this.repairActive4 = true;
            }
            // if (event[i] == "5") {
            //   this.repairActive5 = true
            // }
            if (event[i] == "6") {
                this.repairActive6 = true;
            }
            if (event[i] == "7") {
                this.repairActive7 = true;
            }
            if (event[i] == "8") {
                this.repairActive8 = true;
            }
            if (event[i] == "9") {
                this.repairActive9 = true;
            }
            if (event[i] == "10") {
                this.repairActive10 = true;
            }
            if (event[i] == "11") {
                this.repairActive11 = true;
            }
        }
        if (this.repairActive1) {
            this.form.controls['AreaWeatheringReq'].setValue(this.dataList[0].AreaWeatheringReq);
            this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaWeatheringReq'].setValue("");
            this.form.controls['AreaWeatheringReq'].setValidators(null);
            this.form.controls['AreaWeatheringReq'].updateValueAndValidity();
        }
        if (this.repairActive2) {
            this.form.controls['AreaPressedTiles'].setValue(this.dataList[0].AreaPressedTiles);
            this.form.controls['AreaPressedTiles'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaPressedTiles'].setValue("");
            this.form.controls['AreaPressedTiles'].setValidators(null);
            this.form.controls['AreaPressedTiles'].updateValueAndValidity();
        }
        if (this.repairActive3) {
            this.form.controls['PipeNeedHwDw'].setValue(this.dataList[0].PipeNeedHwDw);
            this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
        }
        else {
            this.form.controls['PipeNeedHwDw'].setValue("");
            this.form.controls['PipeNeedHwDw'].setValidators(null);
            this.form.controls['PipeNeedHwDw'].updateValueAndValidity();
        }
        if (this.repairActive4) {
            this.form.controls['PipeNeedToilet'].setValue(this.dataList[0].PipeNeedToilet);
            this.form.controls['PipeNeedToilet'].updateValueAndValidity();
        }
        else {
            this.form.controls['PipeNeedToilet'].setValue("");
            this.form.controls['PipeNeedToilet'].setValidators(null);
            this.form.controls['PipeNeedToilet'].updateValueAndValidity();
        }
        if (this.repairActive5) {
            this.form.controls['WireLenElectrcty'].setValue(this.dataList[0].WireLenElectrcty);
            this.form.controls['WireLenElectrcty'].updateValueAndValidity();
        }
        else {
            this.form.controls['WireLenElectrcty'].setValue("");
            this.form.controls['WireLenElectrcty'].setValidators(null);
            this.form.controls['WireLenElectrcty'].updateValueAndValidity();
        }
        if (this.repairActive6) {
            this.form.controls['AreaWaterLeakage'].setValue(this.dataList[0].AreaWaterLeakage);
            this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaWaterLeakage'].setValue("");
            this.form.controls['AreaWaterLeakage'].setValidators(null);
            this.form.controls['AreaWaterLeakage'].updateValueAndValidity();
        }
        if (this.repairActive7) {
            this.form.controls['AreaExtWw'].setValue(this.dataList[0].AreaExtWw);
            this.form.controls['AreaExtWw'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaExtWw'].setValue("");
            this.form.controls['AreaExtWw'].setValidators(null);
            this.form.controls['AreaExtWw'].updateValueAndValidity();
        }
        if (this.repairActive8) {
            this.form.controls['AreaIntWw'].setValue(this.dataList[0].AreaIntWw);
            this.form.controls['AreaIntWw'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaIntWw'].setValue("");
            this.form.controls['AreaIntWw'].setValidators(null);
            this.form.controls['AreaIntWw'].updateValueAndValidity();
        }
        if (this.repairActive9) {
            this.form.controls['AreaReplasting'].setValue(this.dataList[0].AreaReplasting);
            this.form.controls['AreaReplasting'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaReplasting'].setValue("");
            this.form.controls['AreaReplasting'].setValidators(null);
            this.form.controls['AreaReplasting'].updateValueAndValidity();
        }
        if (this.repairActive10) {
            this.form.controls['AreaReflooring'].setValue(this.dataList[0].AreaReflooring);
            this.form.controls['AreaReflooring'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaReflooring'].setValue("");
            this.form.controls['AreaReflooring'].setValidators(null);
            this.form.controls['AreaReflooring'].updateValueAndValidity();
        }
        if (this.repairActive11) {
            this.form.controls['AreaFlrPatchwrk'].setValue(this.dataList[0].AreaFlrPatchwrk);
            this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
        }
        else {
            this.form.controls['AreaFlrPatchwrk'].setValue("");
            this.form.controls['AreaFlrPatchwrk'].setValidators(null);
            this.form.controls['AreaFlrPatchwrk'].updateValueAndValidity();
        }
    }
    onChangeBuildingData(event, id) {
        if (id == 1) {
            // this.form.controls['BldgName'].setValue("");
        }
        if (id == 7) {
            if (+this.form.value.AuditoriumLights > 20) {
                this.form.controls['AuditoriumLights'].setValue("");
            }
        }
        if (id == 10) {
            if (+this.form.value.AuditoriumFans > 20) {
                this.form.controls['AuditoriumFans'].setValue("");
            }
        }
        if (this.form.value.PipeNeedHwDw == 0 && id == 13) {
            this.form.controls['PipeNeedHwDw'].setValue("");
        }
        if (this.form.value.PipeNeedToilet == 0 && id == 14) {
            this.form.controls['PipeNeedToilet'].setValue("");
        }
        if (this.form.value.WireLenElectrcty == 0 && id == 15) {
            this.form.controls['WireLenElectrcty'].setValue("");
        }
        if (this.form.value.AreaWaterLeakage == 0 && id == 16) {
            this.form.controls['AreaWaterLeakage'].setValue("");
        }
        if (this.form.value.AreaExtWw == 0 && id == 17) {
            this.form.controls['AreaExtWw'].setValue("");
        }
        if (this.form.value.AreaIntWw == 0 && id == 18) {
            this.form.controls['AreaIntWw'].setValue("");
        }
        if (this.form.value.AreaReplasting == 0 && id == 19) {
            this.form.controls['AreaReplasting'].setValue("");
        }
        if (this.form.value.AreaReflooring == 0 && id == 20) {
            this.form.controls['AreaReflooring'].setValue("");
        }
        if (this.form.value.AreaFlrPatchwrk == 0 && id == 21) {
            this.form.controls['AreaFlrPatchwrk'].setValue("");
        }
        if (this.form.value.AuditoriumStageArea == 0 && id == 22) {
            this.form.controls['AuditoriumStageArea'].setValue("");
        }
        if (this.form.value.AuditoriumStageHeight == 0 && id == 23) {
            this.form.controls['AuditoriumStageHeight'].setValue("");
        }
        if (this.form.value.AuditoriumStageAreaLevel == 0 && id == 24) {
            this.form.controls['AuditoriumStageAreaLevel'].setValue("");
        }
        if (+this.form.value.BldgLength == 0 && id == 25) {
            this.form.controls['BldgLength'].setValue("");
        }
        if (+this.form.value.BldgBre == 0 && id == 26) {
            this.form.controls['BldgBre'].setValue("");
        }
        if (id == 27) {
            console.log(this.form.value.BldgYrConst);
            if (+this.form.value.BldgYrConst == 0) {
                this.form.controls['BldgYrConst'].setValue("");
            }
            if (+this.form.value.BldgYrConst < 1850 && this.form.value.BldgYrConst > 2023) {
                this.form.controls['BldgYrConst'].setValue("");
            }
            this.form.controls['BldgYrConst'].updateValueAndValidity();
        }
        if (+this.form.value.BldgConstOthers == 0 && id == 28) {
            this.form.controls['BldgConstOthers'].setValue("");
        }
    }
    goToBack() {
        let build = parseInt(this.buildingId) - 101;
        let buildId = parseInt(this.buildingId) - 100;
        console.log(this.status);
        if (this.status == 3) {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', expIdBuild: build, expBuildId: buildId }, skipLocationChange: false });
        }
        if (this.status == 1) {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', expIdBuild: build, expBuildId: buildId }, skipLocationChange: false });
        }
        if (this.status == 2) {
            this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId }, skipLocationChange: false });
        }
    }
    getToggleClass(event, id) {
        if (id == 1) {
            if (this.form.value.AuditoriumYn) {
                this.form.controls['AudiStageStatus'].setValue("");
                this.form.controls['AuditoriumLights'].setValue("");
                this.form.controls['AuditoriumFans'].setValue("");
                this.form.controls['AuditoriumPrjtYn'].setValue(false);
                this.form.controls['AudiStageStatus'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
                this.form.controls['AuditoriumLights'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
                this.form.controls['AuditoriumFans'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
                this.form.controls['AuditoriumPrjtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            }
            else {
                this.form.controls['AudiStageStatus'].setValue("");
                this.form.controls['AuditoriumLights'].setValue("");
                this.form.controls['AuditoriumFans'].setValue("");
                this.form.controls['AuditoriumPrjtYn'].setValue(false);
                this.form.controls['AudiStageStatus'].setValidators(null);
                this.form.controls['AuditoriumLights'].setValidators(null);
                this.form.controls['AuditoriumFans'].setValidators(null);
                this.form.controls['AuditoriumPrjtYn'].setValidators(null);
            }
            this.form.controls['AudiStageStatus'].updateValueAndValidity();
            this.form.controls['AuditoriumLights'].updateValueAndValidity();
            this.form.controls['AuditoriumFans'].updateValueAndValidity();
            this.form.controls['AuditoriumPrjtYn'].updateValueAndValidity();
        }
    }
    onEventDropdown(event, id) {
        if (id == 1) {
            if (+this.form.value.BldgCondition == 2 || +this.form.value.BldgCondition == 3) {
                this.form.controls['AuditoriumYn'].setValue(false);
                this.form.controls['AuditoriumYn'].setValidators(null);
                this.form.controls['ElectricityAvai'].setValue('');
                this.form.controls['ElectricityAvai'].setValidators(null);
                this.getToggleClass('', 1);
            }
            else {
                this.form.controls['ElectricityAvai'].setValue('');
                this.form.controls['ElectricityAvai'].setValidators(null);
            }
            if (+this.form.value.BldgCondition == 1 || +this.form.value.BldgCondition == 4 || +this.form.value.BldgCondition == 5) {
                this.form.controls['ElectricityAvai'].setValue('');
                this.form.controls['ElectricityAvai'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            }
            else {
                this.form.controls['ElectricityAvai'].setValue('');
                this.form.controls['ElectricityAvai'].setValidators(null);
            }
        }
        if (id == 2) {
            if (this.form.value.BldgType != 11) {
                this.form.controls['AuditoriumYn'].setValue(false);
                this.form.controls['AuditoriumYn'].setValidators(null);
                this.getToggleClass('', 1);
            }
            if (this.form.value.BldgType == 11) {
                this.form.controls['AuditoriumYn'].setValue(false);
                this.form.controls['AuditoriumYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
                this.getToggleClass('', 1);
            }
        }
        if (id == 3) {
            if (+this.form.value.BldgFundSourceCons == 5) {
                this.form.controls['BldgFundSourceConsOthers'].setValue('');
                this.form.controls['BldgFundSourceConsOthers'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
            }
            else {
                this.form.controls['BldgFundSourceConsOthers'].setValue('');
                this.form.controls['BldgFundSourceConsOthers'].setValidators(null);
            }
            this.form.controls['BldgFundSourceConsOthers'].updateValueAndValidity();
        }
    }
    deleteFloorandRoom() {
        let idbuild = parseInt(this.buildingId) - 100;
        let query1 = 'DELETE FROM sidsFloorQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"';
        let query2 = 'DELETE FROM sidsFloorSaveDatas' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildIndx = "' + idbuild + '"' +
            ' And VistId = "' + this.vistId + '"';
        let query3 = 'DELETE FROM sidsRoomSaves' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildIndx = "' + idbuild + '"' +
            ' And VistId = "' + this.vistId + '"';
        let query4 = 'DELETE FROM newRoomscommons' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And BldgId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query1).then(data => {
            return this.sqliteDB.getDataLocalDB(query2).then(data => {
                return this.sqliteDB.getDataLocalDB(query3).then(data => {
                    return this.sqliteDB.getDataLocalDB(query4).then(data => {
                        console.log("Floor and Room Deleted");
                    });
                });
            });
        });
    }
    ionViewWillLeave() {
        this.form.reset();
        this.initialValidator();
        this.imageKey = "";
        this.imageURL = "";
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    openImage(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'இதிலிருந்து புகைப்படத்தை தேர்ந்தெடுக்கவும்',
                // message: 'தயவுசெய்து ஒன்றைத் தேர்ந்தெடுக்கவும்',
                buttons: [
                    {
                        text: 'Camera',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: () => {
                            this.openCamera(i);
                        }
                    }, {
                        text: 'Gallery',
                        cssClass: 'popup',
                        handler: () => {
                            // this.openGallery(i);
                            this.galleryImage = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openCamera(i) {
        this.androidPermission();
        debugger;
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
            // console.log("CameraPicture",imageData)
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 3145728) {
                        if (i == 1) {
                            this.form.get('BldgFrontPhoto').setValue(base64string);
                            this.form.get('BldgFrontPhotoName').setValue(splitedImage[0] + '.png');
                        }
                        this.getLatLong();
                        // if(i == 2){
                        //   this.form.controls['BldgBackPhoto'].setValue(base64string);
                        //   this.form.controls['BldgBackPhotoName'].setValue(splitedImage[0]+'.png');
                        // }
                        // if(i == 3){
                        //   this.form.controls['BldgRightSidePhoto'].setValue(base64string);
                        //   this.form.controls['BldgRightSidePhotoName'].setValue(splitedImage[0]+'.png');
                        // }
                        // if(i == 4){
                        //   this.form.controls['BldgLeftSidePhoto'].setValue(base64string);
                        //   this.form.controls['BldgLeftSidePhotoName'].setValue(splitedImage[0]+'.png');
                        // }
                        // this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                        //   if (result) {
                        //     //  console.log("result",result);
                        //     this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                        //       // console.log("responce",res);
                        //       if(i == 1){
                        //         this.form.controls['BldgFrontPhoto'].setValue(result.key);
                        //       }
                        //       if(i == 2){
                        //         this.form.controls['BldgBackPhoto'].setValue(result.key);
                        //       }
                        //       if(i == 3){
                        //         this.form.controls['BldgRightSidePhoto'].setValue(result.key);
                        //       }
                        //       if(i == 4){
                        //         this.form.controls['BldgLeftSidePhoto'].setValue(result.key);
                        //       }
                        //       // this.imageKey = result.key;
                        //       this.viewImage(i);
                        //       // this.form.controls['form_questions']['controls'][i].controls['result'].setValue(this.imageKey);
                        //     this.alertService.success('File Uploaded Successfully');
                        //     });
                        //   }
                        // });
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
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                console.log("no camera permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
    }
    onSelectFile1(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg") {
                if (event.target.files[0].size <= 3145728) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    this.fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        this.uploadUrl = fileReader.result;
                        var bucketName = "renewalapplicationemis";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        this.utilityService.getFileUrl1(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                let files = this.doc_file;
                                let file = files[0];
                                this.utilityService.uploadFile(result.url, file).subscribe((res) => {
                                    this.imageKey = result.key;
                                    // this.viewImage();
                                    this.form.controls['BldgFrontPhoto'].setValue(result.key);
                                    this.form.controls['BldgFrontPhoto'].updateValueAndValidity();
                                });
                                this.alertService.success('File Uploaded Successfully');
                            }
                            else {
                                this.alertService.error('Error in Uploading File please try again');
                            }
                        });
                    };
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                }
            }
            else {
                this.alertService.error('Please upload only JPG / JPEG image format');
                this.jpgimage.nativeElement.value = "";
            }
        }
    }
    viewImage(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            // var filename = this.imageKey;
            var filename;
            if (id == 1) {
                filename = this.form.value.BldgFrontPhoto;
            }
            // if(id == 2){
            //   filename = this.form.value.BldgBackPhoto;
            // }
            // if(id == 3){
            //   filename = this.form.value.BldgRightSidePhoto;
            // }
            // if(id == 4){
            //   filename = this.form.value.BldgLeftSidePhoto;
            // }
            let expiry = 1800;
            this.utilityService.getFile(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    // this.imageURL = result.url;
                    if (id == 1) {
                        this.form.get('BldgFrontPhotoName').setValue(result.url);
                    }
                    // if(id == 2){
                    //   this.form.controls['BldgBackPhotoName'].setValue(result.url);
                    // }
                    // if(id == 3){
                    //   this.form.controls['BldgRightSidePhotoName'].setValue(result.url);
                    // }
                    // if(id == 4){
                    //   this.form.controls['BldgLeftSidePhotoName'].setValue(result.url);
                    // }
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        });
    }
    uploadImgDelete(id) {
        this.imageKey = "";
        this.imageURL = "";
        if (id == 1) {
            this.form.controls['BldgFrontPhoto'].setValue(null);
            this.form.controls['BldgFrontPhotoName'].setValue(null);
            this.form.get('BldgFrontPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
        }
        // if(id == 2){
        //   this.form.controls['BldgBackPhoto'].setValue(null);
        //   this.form.controls['BldgBackPhotoName'].setValue(null);
        //   this.form.get('BldgBackPhoto').setValidators(Validators.required);
        // }
        // if(id == 3){
        //   this.form.controls['BldgRightSidePhoto'].setValue(null);
        //   this.form.controls['BldgRightSidePhotoName'].setValue(null);
        //   this.form.get('BldgRightSidePhoto').setValidators(Validators.required);
        // }
        // if(id == 4){
        //   this.form.controls['BldgLeftSidePhoto'].setValue(null);
        //   this.form.controls['BldgLeftSidePhotoName'].setValue(null);
        //   this.form.get('BldgLeftSidePhoto').setValidators(Validators.required);
        // }
        this.form.get('BldgFrontPhoto').updateValueAndValidity();
        // this.form.get('BldgBackPhoto').updateValueAndValidity();
        // this.form.get('BldgRightSidePhoto').updateValueAndValidity();
        // this.form.get('BldgLeftSidePhoto').updateValueAndValidity();
        this.form.controls['LATITUDE'].setValue(null);
        this.form.controls['LOGITUDE'].setValue(null);
        this.form.get('LATITUDE').updateValueAndValidity();
        this.form.get('LOGITUDE').updateValueAndValidity();
        setTimeout(() => {
            this.getLatLong();
        }, 1000);
    }
    deleteTypeRoom() {
        let idbuild = parseInt(this.buildingId) - 100;
        let query = 'SELECT Id FROM newRoomscommons' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And BldgId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"' +
            ' And RoomUse NOT IN(10,11,12)';
        let query1 = 'SELECT Sid FROM sidsRoomSaves' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildIndx = "' + idbuild + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataList = [];
                let dataList2 = [];
                let RoomId = [];
                let RoomId2 = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataList.push(data.rows.item(i));
                }
                // console.log("DeleteRoomType",dataList);
                if (dataList.length > 0) {
                    return this.sqliteDB.getDataLocalDB(query1).then(data2 => {
                        for (var i = 0; i < data2.rows.length; i++) {
                            dataList2.push(data2.rows.item(i));
                        }
                        for (let i = 0; i < dataList.length; i++) {
                            if (dataList[i].Id) {
                                this.removeLocal1(dataList[i].Id);
                            }
                        }
                        for (let i = 0; i < dataList2.length; i++) {
                            for (let j = 0; j < dataList.length; j++) {
                                if (+dataList2[i].Sid == +dataList[j].Id) {
                                    this.removeLocal2(dataList2[i].Sid);
                                }
                            }
                        }
                    });
                }
            }
        });
    }
    removeLocal1(value) {
        let query2 = 'DELETE FROM newRoomscommons' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And BldgId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"' +
            ' And Id IN ("' + value + '")';
        return this.sqliteDB.executeQuery(query2).then(data => { });
    }
    removeLocal2(value) {
        let idbuild = parseInt(this.buildingId) - 100;
        let query3 = 'DELETE FROM sidsRoomSaves' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildIndx = "' + idbuild + '"' +
            ' And VistId = "' + this.vistId + '"' +
            ' And Sid IN ("' + value + '")';
        return this.sqliteDB.executeQuery(query3).then(data => { });
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.form.controls['LATITUDE'].setValue(this.locationCordinates.latitude);
            this.form.controls['LOGITUDE'].setValue(this.locationCordinates.longitude);
            this.form.controls['LATITUDE'].updateValueAndValidity();
            this.form.controls['LOGITUDE'].updateValueAndValidity();
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alertService.alertToTurnOnPermission('Location', 'Location');
            }
            // console.log('Error getting location', error);
        });
    }
};
NewBuildingquestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__.UploadService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ElementRef }
];
NewBuildingquestionsPage.propDecorators = {
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['jpgimage',] }]
};
NewBuildingquestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-new-buildingquestions',
        template: _raw_loader_new_buildingquestions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_buildingquestions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewBuildingquestionsPage);



/***/ }),

/***/ 85395:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/sids/building/new-buildingquestions/new-buildingquestions.page.scss ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-datetime {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1idWlsZGluZ3F1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUVFLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUdBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFBQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BOzs7RUFHRSxlQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFPQSxTQUFBOztBQUdBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVdBLE9BQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQWFBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWVBLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLGNBQUE7QUFiRjs7QUFpQkEsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQW1CQSxRQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRjs7QUFxQkEsT0FBQTs7QUFNQTtFQUNFLFdBQUE7QUF2QkY7O0FBMEJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF2QkY7O0VBeUJBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF0QkY7O0VBd0JBOztJQUVFLGVBQUE7SUFDQSxtQkFBQTtFQXJCRjtBQUNGOztBQXdCQTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUF0QkY7O0FBOEJBO0VBQ0UsVUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBM0JGOztBQThCQTtFQUNFLFVBQUE7QUEzQkY7O0FBb0NBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBakNGOztBQW9DQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWpDRjs7QUF3Q0E7RUFDRSwwQkFBQTtBQXJDRjs7QUF3Q0E7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXJDSjs7QUF3Q0E7RUFDRyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXJDSDs7QUF3Q0U7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBckNOOztBQXdDQTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQXJDRjs7QUF3Q0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJDSjs7QUF1Q0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXBDRjs7QUFzQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFuQ0Y7O0FBcUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbENGOztBQXFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWxDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDRjs7QUFtQ0E7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBaENGOztBQWtDQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBL0JGOztBQWlDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUE5QkY7O0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTdCRiIsImZpbGUiOiJuZXctYnVpbGRpbmdxdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkJvdHRvbTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3AwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZC1jb250YWluZXIge1xyXG4gIC8vIHdpZHRoOiA5MyU7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lVGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGltZWxpbmVJY29uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2QtYXV0aG9yIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI2NkLXRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gbWFyZ2luLXRvcDogMmVtO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAvKiB0aGlzIGlzIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtYmxvY2s6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaWNvbiBpIHtcclxuICBjb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLXBpY3R1cmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4OyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLXBpY3R1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gIGNvbG9yOiAjMzAzZTQ5O1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBwLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICBtYXJnaW46IDFlbSAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLypDT0xPUlMqL1xyXG5cclxuXHJcbi8qUE9TSVRJVkUqL1xyXG5cclxuLnBvc2l0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbn1cclxuXHJcbi5wb3NpdGl2ZSBpIHtcclxuICBjb2xvcjogIzRhODdlZTtcclxufVxyXG5cclxuXHJcbi8qQ0FMTSovXHJcblxyXG4uY2FsbSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDNjZWU2O1xyXG59XHJcblxyXG4uY2FsbSBpIHtcclxuICBjb2xvcjogIzQzY2VlNjtcclxufVxyXG5cclxuXHJcbi8qQkFMQU5DRUQqL1xyXG5cclxuLmJhbGFuY2VkIHtcclxuICBib3JkZXItY29sb3I6ICM2NmNjMzM7XHJcbn1cclxuXHJcbi5iYWxhbmNlZCBpIHtcclxuICBjb2xvcjogIzY2Y2MzMztcclxufVxyXG5cclxuXHJcbi8qRU5FUkdJWkVEKi9cclxuXHJcbi5lbmVyZ2l6ZWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2YwYjg0MDtcclxufVxyXG5cclxuLmVuZXJnaXplZCBpIHtcclxuICBjb2xvcjogI2YwYjg0MDtcclxufVxyXG5cclxuXHJcbi8qQVNTRVJUSVZFKi9cclxuXHJcbi5hc3NlcnRpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2VmNGUzYTtcclxufVxyXG5cclxuLmFzc2VydGl2ZSBpIHtcclxuICBjb2xvcjogI2VmNGUzYTtcclxufVxyXG5cclxuXHJcbi8qUk9ZQUwqL1xyXG5cclxuLnJveWFsIHtcclxuICBib3JkZXItY29sb3I6ICM4YTZkZTk7XHJcbn1cclxuXHJcbi5yb3lhbCBpIHtcclxuICBjb2xvcjogIzhhNmRlOTtcclxufVxyXG5cclxuXHJcbi8qREFSSyovXHJcblxyXG4vLyAuZGFyayB7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjNDQ0O1xyXG4vLyB9XHJcblxyXG4uZGFyayBpIHtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWNvbmRhcnkge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi8vIGlvbi1sYWJlbCB7XHJcbiAgLy8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG5cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4ucXVlcy10eHQge1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxufVxyXG5cclxuaW9uLWlucHV0W3R5cGU9XCJkYXRlXCJdOm5vdCguaGFzLXZhbHVlKTpiZWZvcmV7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxufSBcclxuXHJcbi5iYWNrLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6b29tOjEuMDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmdyaWQtcGFkZGluZyB7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLy8gaW9uLXNlbGVjdCB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuLy8gfVxyXG5cclxuLmlucHV0LWNsciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCkgMXB4IHNvbGlkOztcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4vLyBpb24taW5wdXQge1xyXG4vLyAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLW5vLXBhZGRpbmd7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW9uLW5vLXBhZGRpbmctcXVlc3Rpb257XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItc2F2ZSB7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG4uZm9vdGVyLW5vdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgcGFkZGluZzogMTBweDsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLnNpZHNWaWV3e1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5xdWVzQ29sb3J7XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGQTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYmdDaGVja3tcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLXRvZ2dsZXtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbn1cclxuaW9uLWRhdGV0aW1lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnVwbG9hZEltYWdle1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmNsb3NlYnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 96804:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/building/new-buildingquestions/new-buildingquestions.page.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Building {{ buildingId - 100 }} Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Building General Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Name of the building<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"text\" formControlName=\"BldgName\" (ionChange)=\"onChangeBuildingData($event.detail.value, 1)\"\r\n                    maxlength=\"20\" style=\"border-bottom: 1px solid;\" >\r\n                    </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgName'].errors?.required && (form.controls['BldgName'].dirty || form.controls['BldgName'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Approximate age of the building, in years<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgAge\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of years\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgAge'].hasError('required') && (form.controls['BldgAge'].dirty || form.controls['BldgAge'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section> -->\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Year of construction<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <!-- <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"BldgYrConst\" (ionChange)=\"onChangeBuildingData($event.detail.value, 27)\"\r\n                    maxlength=\"4\" style=\"border-bottom: 1px solid;\" >\r\n                    </ion-input> -->\r\n                <ion-datetime placeholder=\"Please select date\" displayFormat=\"YYYY\" formControlName=\"BldgYrConst\" presentation=\"year\" min=\"1850\" max=\"2023\" style=\"border-bottom: 1px solid;\"></ion-datetime>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgYrConst'].errors?.required && (form.controls['BldgYrConst'].dirty || form.controls['BldgYrConst'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Construction Agency<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgConstAgency\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of Agency\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgConstAgency'].hasError('required') && (form.controls['BldgConstAgency'].dirty || form.controls['BldgConstAgency'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldgConstAgency == '7'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              3A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Please specify<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"text\" formControlName=\"BldgConstOthers\" (ionChange)=\"onChangeBuildingData($event.detail.value, 28)\"\r\n                    maxlength=\"20\" style=\"border-bottom: 1px solid;\" >\r\n                    </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgConstOthers'].errors?.required && (form.controls['BldgConstOthers'].dirty || form.controls['BldgConstOthers'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Source of funds for construction of building<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgFundSourceCons\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onEventDropdown($event, 3)\" >\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of sourceData\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgFundSourceCons'].hasError('required') && (form.controls['BldgFundSourceCons'].dirty || form.controls['BldgFundSourceCons'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldgFundSourceCons == '5'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Please specify<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"text\" \r\n                  formControlName=\"BldgFundSourceConsOthers\" \r\n                  maxlength=\"20\" style=\"border-bottom: 1px solid;\" >\r\n                  </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldgFundSourceConsOthers'].hasError('required') && (form.controls['BldgFundSourceConsOthers'].dirty || form.controls['BldgFundSourceConsOthers'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Building Type<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select (ionChange)=\"onEventDropdown($event, 2)\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgType\"\r\n                  style=\"max-width: 100% !important;\" >\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of type\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgType'].hasError('required') && (form.controls['BldgType'].dirty || form.controls['BldgType'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Outer Length of Building (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"BldgLength\" (ionChange)=\"onChangeBuildingData($event.detail.value, 25)\"\r\n                    maxlength=\"5\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgLength'].hasError('required') && (form.controls['BldgLength'].dirty || form.controls['BldgLength'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.BldgLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                7\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Outer Breadth of building (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"BldgBre\" (ionChange)=\"onChangeBuildingData($event.detail.value, 26)\"\r\n                    maxlength=\"5\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgBre'].hasError('required') && (form.controls['BldgBre'].dirty || form.controls['BldgBre'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.BldgBre.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Building condition <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select (ionChange)=\"onEventDropdown($event, 1)\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"BldgCondition\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of condition\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgCondition'].hasError('required') && (form.controls['BldgCondition'].dirty || form.controls['BldgCondition'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldgCondition == 1 || form.value.BldgCondition == 4 || form.value.BldgCondition == 5\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Electricity Availability<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ElectricityAvai\"\r\n                    style=\"max-width: 100% !important;\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Electricity\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['ElectricityAvai'].hasError('required') && (form.controls['ElectricityAvai'].dirty || form.controls['ElectricityAvai'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldgType == 11 && (form.value.BldgCondition == 1 || form.value.BldgCondition == 4)\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                9\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there an auditorium?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle (ionChange)=\"getToggleClass($event, 1)\"  class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumYn?true:false}}\" formControlName=\"AuditoriumYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AuditoriumYn'].hasError('required') && (form.controls['AuditoriumYn'].dirty || form.controls['AuditoriumYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                8A\r\n              </div>\r\n  \r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Requirement for Stage<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AuditoriumStageReqt\"\r\n                    style=\"max-width: 100% !important;\" multiple=\"true\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of statge\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageReqt'].hasError('required') && (form.controls['AuditoriumStageReqt'].dirty || form.controls['AuditoriumStageReqt'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n  \r\n            </div>\r\n          </div>\r\n        </section> -->\r\n  \r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Stage (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageArea\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 22)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageArea'].hasError('required') && (form.controls['AuditoriumStageArea'].dirty || form.controls['AuditoriumStageArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n  \r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Height of Stage (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"3\" (ionChange)=\"onChangeBuildingData($event.detail.value, 23)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageHeight'].hasError('required') && (form.controls['AuditoriumStageHeight'].dirty || form.controls['AuditoriumStageHeight'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n  \r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeLevelling\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Area of Levelling Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumStageAreaLevel\" style=\"border-bottom: 1px solid;\" maxlength=\"6\" (ionChange)=\"onChangeBuildingData($event.detail.value, 24)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumStageAreaLevel'].hasError('required') && (form.controls['AuditoriumStageAreaLevel'].dirty || form.controls['AuditoriumStageAreaLevel'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageAreaLevel.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn \">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                9A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Status of stage<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AudiStageStatus\"\r\n                  style=\"max-width: 100% !important;\" >\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of StatusAge\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['AudiStageStatus'].hasError('required') && (form.controls['AudiStageStatus'].dirty || form.controls['AudiStageStatus'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                9B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Lights in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumLights\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 7)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumLights'].hasError('required') && (form.controls['AuditoriumLights'].dirty || form.controls['AuditoriumLights'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumLights.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                9C\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Number of Ceiling Fans in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"AuditoriumFans\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 10)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AuditoriumFans'].hasError('required') && (form.controls['AuditoriumFans'].dirty || form.controls['AuditoriumFans'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumFans.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                9D\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Does the auditorium have a functional projector facility other than in the HM room or classrooms? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumPrjtYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumPrjtYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtYn?true:false}}\"\r\n                        formControlName=\"AuditoriumPrjtYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n  \r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && form.value.AuditoriumPrjtYn\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Is the unit functional?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.AuditoriumPrjtFunc\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.AuditoriumPrjtFunc\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtFunc?true:false}}\"\r\n                        formControlName=\"AuditoriumPrjtFunc\" >\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                10\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Building Front Side photo<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.BldgFrontPhoto\" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.BldgFrontPhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.BldgFrontPhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgFrontPhoto'].hasError('required') && (form.controls['BldgFrontPhoto'].dirty || form.controls['BldgFrontPhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                11\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Building Back Side photo<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.BldgBackPhoto\" style=\"margin-top: 10px;\" (click)=\"openCamera(2)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.BldgBackPhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(2)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.BldgBackPhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgBackPhoto'].hasError('required') && (form.controls['BldgBackPhoto'].dirty || form.controls['BldgBackPhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                12\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Building Right Side photo<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.BldgRightSidePhoto\" style=\"margin-top: 10px;\" (click)=\"openCamera(3)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.BldgRightSidePhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(3)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.BldgRightSidePhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgRightSidePhoto'].hasError('required') && (form.controls['BldgRightSidePhoto'].dirty || form.controls['BldgRightSidePhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                13\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Building Left Side photo<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.BldgLeftSidePhoto \" style=\"margin-top: 10px;\" (click)=\"openCamera(4)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.BldgLeftSidePhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button *ngIf=\"status == 1 || status == 2\" (click)=\"uploadImgDelete(4)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.BldgLeftSidePhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldgLeftSidePhoto'].hasError('required') && (form.controls['BldgLeftSidePhoto'].dirty || form.controls['BldgLeftSidePhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n    \r\n      </div>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"this.status != '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"this.status == '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"goToBack()\">\r\n      <ion-label> Already Synced to Server\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_building_new-buildingquestions_new-buildingquestions_module_ts-es2015.js.map