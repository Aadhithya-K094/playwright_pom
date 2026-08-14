(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-room-questions_primary-room-questi-eef77c"],{

/***/ 41421:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-building/primary-room-questions/primary-room-questions-routing.module.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryRoomQuestionsPageRoutingModule": function() { return /* binding */ PrimaryRoomQuestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _primary_room_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-room-questions.page */ 80641);




const routes = [
    {
        path: '',
        component: _primary_room_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryRoomQuestionsPage
    }
];
let PrimaryRoomQuestionsPageRoutingModule = class PrimaryRoomQuestionsPageRoutingModule {
};
PrimaryRoomQuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrimaryRoomQuestionsPageRoutingModule);



/***/ }),

/***/ 98220:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-building/primary-room-questions/primary-room-questions.module.ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryRoomQuestionsPageModule": function() { return /* binding */ PrimaryRoomQuestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _primary_room_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-room-questions-routing.module */ 41421);
/* harmony import */ var _primary_room_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-room-questions.page */ 80641);







let PrimaryRoomQuestionsPageModule = class PrimaryRoomQuestionsPageModule {
};
PrimaryRoomQuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _primary_room_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryRoomQuestionsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_primary_room_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryRoomQuestionsPage]
    })
], PrimaryRoomQuestionsPageModule);



/***/ }),

/***/ 80641:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-building/primary-room-questions/primary-room-questions.page.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryRoomQuestionsPage": function() { return /* binding */ PrimaryRoomQuestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_primary_room_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./primary-room-questions.page.html */ 2531);
/* harmony import */ var _primary_room_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-room-questions.page.scss */ 81660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);















let PrimaryRoomQuestionsPage = class PrimaryRoomQuestionsPage {
    constructor(formBuilder, route, router, el, sqliteDB, toastController, alertService, utilityService, androidPermissions, file, camera, geolocation) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.el = el;
        this.sqliteDB = sqliteDB;
        this.toastController = toastController;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.androidPermissions = androidPermissions;
        this.file = file;
        this.camera = camera;
        this.geolocation = geolocation;
        this.id = 1;
        this.repair1 = [
            {
                "value": "1",
                "label": "Classroom"
            },
            {
                "value": "2",
                "label": "Lab"
            },
            {
                "value": "3",
                "label": "Library"
            },
            {
                "value": "4",
                "label": "HM Room"
            },
            {
                "value": "5",
                "label": "Record Room"
            },
            {
                "value": "6",
                "label": "Staff Room"
            },
            {
                "value": "7",
                "label": "Kitchen"
            },
            {
                "value": "8",
                "label": "Noon Meal Store Room"
            },
            {
                "value": "9",
                "label": "Dining"
            },
            {
                "value": "10",
                "label": "Toilet"
            },
            {
                "value": "11",
                "label": "Pump Room"
            },
            {
                "value": "12",
                "label": "Store Room"
            },
            {
                "value": "13",
                "label": "Anganwadi"
            },
            {
                "value": "14",
                "label": "Empty"
            },
            {
                "value": "15",
                "label": "Security Room "
            },
            {
                "value": "16",
                "label": "PET Room"
            },
            {
                "value": "17",
                "label": "SMART Classroom"
            },
            {
                "value": "18",
                "label": "Auditorium"
            }
        ];
        this.repair69 = [
            {
                "value": "1",
                "label": "Cement"
            },
            {
                "value": "2",
                "label": "Mosaic"
            },
            {
                "value": "3",
                "label": "Tiles"
            },
            {
                "value": "4",
                "label": "Kotta Stone"
            },
            {
                "value": "5",
                "label": "Others"
            }
        ];
        this.repair63 = [
            {
                "value": "1",
                "label": "Excess Furniture"
            },
            {
                "value": "2",
                "label": " Excess Uniforms"
            },
            {
                "value": "3",
                "label": "Books"
            },
            // {
            //   "value": "4",
            //   "label": "Noon Meal Ingredients"
            // },
            {
                "value": "5",
                "label": "Others"
            }
        ];
        this.repair72 = [
            {
                "value": "1",
                "label": "Good"
            },
            {
                "value": "2",
                "label": "Needs repair"
            },
            {
                "value": "3",
                "label": "To be Demolished"
            },
            {
                "value": "4",
                "label": "Under Construction"
            }
        ];
        this.repair57 = [
            {
                "value": "1",
                "label": "Inside"
            },
            {
                "value": "2",
                "label": "Outside"
            }
        ];
        this.repair58 = [
            {
                "value": "1",
                "label": "Running water"
            },
            {
                "value": "2",
                "label": "Hand pump/ bucket"
            },
            {
                "value": "3",
                "label": "Drums/ cement tanks/ plastic containers"
            },
            {
                "value": "4",
                "label": "No water supplies available"
            }
        ];
        this.repair65 = [
            {
                "value": "1",
                "label": "Low enrolment"
            },
            {
                "value": "2",
                "label": "No furniture"
            },
            {
                "value": "3",
                "label": "Due to room condition"
            },
            {
                "value": "4",
                "label": "Other"
            }
        ];
        this.storeDrop = [
            {
                "value": "1",
                "label": "Excess Furniture"
            },
            {
                "value": "2",
                "label": "Excess Uniforms"
            },
            {
                "value": "3",
                "label": "Books"
            },
            {
                "value": "4",
                "label": "Noon Meal Ingredients"
            },
            {
                "value": "5",
                "label": "Others"
            }
        ];
        this.question14 = [
            {
                "value": "1",
                "label": "Physics"
            },
            {
                "value": "2",
                "label": "Chemistry"
            },
            {
                "value": "3",
                "label": "Biology"
            },
            {
                "value": "4",
                "label": "Language"
            },
            {
                "value": "5",
                "label": "Computer (Non Hi-Tech)"
            },
            {
                "value": "6",
                "label": "Hi-Tech"
            },
            {
                "value": "7",
                "label": "Math"
            },
            {
                "value": "8",
                "label": "Integrated Science Lab"
            },
            {
                "value": "9",
                "label": "Atal Tinkering"
            },
            {
                "value": "10",
                "label": "Vocational"
            }
        ];
        this.question22 = [
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
                "label": "Not required"
            }
        ];
        this.question23 = [
            {
                "value": "1",
                "label": "Yes - Open drain"
            },
            {
                "value": "2",
                "label": "Yes - Closed drain"
            },
            {
                "value": "3",
                "label": "No"
            }
        ];
        this.question31 = [
            {
                "value": "1",
                "label": "Male Staff"
            },
            {
                "value": "2",
                "label": "Female Staff"
            },
            {
                "value": "3",
                "label": "Both"
            }
        ];
        this.question36 = [
            {
                "value": "1",
                "label": "LPG Connection"
            },
            {
                "value": "2",
                "label": "Clean Water Supply"
            },
            {
                "value": "3",
                "label": "Firewood Only"
            }
        ];
        this.question43 = [
            {
                "value": "1",
                "label": "Girls Toilet"
            },
            {
                "value": "2",
                "label": "Boys Toilet"
            },
            {
                "value": "3",
                "label": "Common Toilet"
            },
            {
                "value": "4",
                "label": "CWSN Boys Toilet"
            },
            {
                "value": "5",
                "label": "CWSN Girls Toilet"
            },
            {
                "value": "6",
                "label": "CWSN Common Toilet"
            },
            {
                "value": "7",
                "label": "Male Staff Toilet"
            },
            {
                "value": "8",
                "label": "Female Staff Toilet"
            },
            {
                "value": "9",
                "label": "Common Staff Toilet"
            }
        ];
        // question44 = [
        //   {
        //     "value": "1",
        //     "label": "Running water"
        //   },
        //   {
        //     "value": "2",
        //     "label": "Hand pump/ bucket"
        //   },
        //   {
        //     "value": "3",
        //     "label": "Drums/ cement tanks/ plastic containers"
        //   },
        //   {
        //     "value": "4",
        //     "label": "No water supplies available"
        //   }
        // ];
        this.question45 = [
            {
                "value": "1",
                "label": "Running Water in all cubicles"
            },
            {
                "value": "2",
                "label": "Buckets/Handpump"
            },
            {
                "value": "3",
                "label": "Water Drum"
            },
            {
                "value": "4",
                "label": "No Water Connection"
            }
        ];
        this.question46 = [
            {
                "value": "1",
                "label": "No specific measure / sludge released in open"
            },
            {
                "value": "2",
                "label": "Open drain"
            },
            {
                "value": "3",
                "label": "Soak pits with sturdy and solid cover "
            },
            {
                "value": "4",
                "label": "Septic tank With cover"
            },
            {
                "value": "5",
                "label": "sewer line with sturdy and solid cover"
            },
            {
                "value": "6",
                "label": "Bio-Toilets"
            },
            {
                "value": "7",
                "label": "Septic tank without cover"
            }
        ];
        this.question55 = [
            {
                "value": "1",
                "label": "Roof over cubicles and urinals"
            },
            {
                "value": "2",
                "label": "Roof over cubicles only"
            },
            {
                "value": "3",
                "label": "No Roof"
            }
        ];
        this.question56 = [
            {
                "value": "1",
                "label": "Smokeless Incinerator"
            },
            {
                "value": "2",
                "label": "Electric Incinerator"
            },
            {
                "value": "3",
                "label": "Dustbins"
            },
            {
                "value": "4",
                "label": "Burial Pit"
            },
            {
                "value": "5",
                "label": "None"
            },
            {
                "value": "6",
                "label": "Not Applicable"
            }
        ];
        this.question37 = [
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
                "label": "Water Can"
            },
            {
                "value": "5",
                "label": "RO Plant"
            },
            {
                "value": "6",
                "label": "Hand Pump"
            },
            {
                "value": "7",
                "label": "Others"
            }
        ];
        this.question77 = [
            {
                "value": "1",
                "label": "Replacement of Doors"
            },
            {
                "value": "2",
                "label": "Replacement of Ventilation Windows"
            },
            {
                "value": "3",
                "label": "Repairing of Doors"
            },
            {
                "value": "4",
                "label": "Repairing of Ventilation Windows"
            },
            {
                "value": "5",
                "label": "Repainting of Doors"
            },
            {
                "value": "6",
                "label": "Minor Plumbing Repairs"
            },
            {
                "value": "7",
                "label": "Minor Electrical Repairs"
            }
        ];
        this.repair78 = [
            {
                "value": "1",
                "label": "Ceiling plastering 1:3, 10mm tk"
            },
            {
                "value": "2",
                "label": "Exterior - White washing and Colour washing"
            },
            {
                "value": "3",
                "label": "Interior - White washing and Colour washing"
            },
            {
                "value": "4",
                "label": "Replastering, 20mm tk"
            },
            {
                "value": "5",
                "label": "Roof Leakage"
            },
            {
                "value": "6",
                "label": "Reflooring tiles"
            },
            {
                "value": "7",
                "label": "Floor Patchwork"
            },
            {
                "value": "8",
                "label": "Repair of Water Supply"
            },
            {
                "value": "9",
                "label": "Repair of Drainage Facility"
            },
            {
                "value": "10",
                "label": "Improvement in Ventilation"
            }
        ];
        this.repair79 = [
            {
                "value": "1",
                "label": "Replacement of Doors"
            },
            {
                "value": "2",
                "label": "Replacement of Windows"
            },
            {
                "value": "3",
                "label": "Repairing of Doors"
            },
            {
                "value": "4",
                "label": "Repairing of Windows"
            },
            {
                "value": "5",
                "label": "Repainting of Doors"
            },
            {
                "value": "6",
                "label": "Repainting of Windows"
            },
            {
                "value": "7",
                "label": "Minor Electrical Repairs"
            },
            {
                "value": "8",
                "label": "Minor Plumbing Repairs"
            }
        ];
        this.question76 = [
            {
                "value": "1",
                "label": "Ceiling plastering 1:3, 10mm tk"
            },
            {
                "value": "2",
                "label": "Exterior - White washing and Colour washing"
            },
            {
                "value": "3",
                "label": "Interior - White washing and Colour washing"
            },
            {
                "value": "4",
                "label": "Replastering, 20mm tk"
            },
            {
                "value": "5",
                "label": "Roof Leakage"
            },
            {
                "value": "6",
                "label": "Reflooring tiles"
            },
            {
                "value": "7",
                "label": "Floor Patchwork"
            },
            {
                "value": "8",
                "label": "Replacement of Latrines"
            },
            {
                "value": "9",
                "label": "Replacement of Urinals"
            },
            {
                "value": "10",
                "label": "Repair of Water Supply"
            },
            {
                "value": "11",
                "label": "Repair of Drainage Facility"
            },
            {
                "value": "12",
                "label": "Improvement in Ventilation"
            }
        ];
        this.question761 = [
            {
                "value": "1",
                "label": "Ceiling plastering 1:3, 10mm tk"
            },
            {
                "value": "2",
                "label": "Exterior - White washing and Colour washing"
            },
            {
                "value": "3",
                "label": "Interior - White washing and Colour washing"
            },
            {
                "value": "4",
                "label": "Replastering, 20mm tk"
            },
            {
                "value": "5",
                "label": "Roof Leakage"
            },
            {
                "value": "6",
                "label": "Reflooring tiles"
            },
            {
                "value": "7",
                "label": "Floor Patchwork"
            },
            {
                "value": "8",
                "label": "Replacement of Latrines"
            },
            {
                "value": "9",
                "label": "Replacement of Urinals"
            },
            {
                "value": "10",
                "label": "Repair of Water Supply"
            },
            {
                "value": "11",
                "label": "Repair of Drainage Facility"
            },
            {
                "value": "12",
                "label": "Improvement in Ventilation"
            }
        ];
        this.question75 = [
            {
                "value": "1",
                "label": "Replacement of Doors"
            },
            {
                "value": "2",
                "label": "Replacement of Windows"
            },
            {
                "value": "3",
                "label": "Repairing of Doors"
            },
            {
                "value": "4",
                "label": "Repairing of Windows"
            },
            {
                "value": "5",
                "label": "Repainting of Doors"
            },
            {
                "value": "6",
                "label": "Repainting of Windows"
            },
            {
                "value": "7",
                "label": "Minor Electrical Repairs"
            }
        ];
        this.question74 = [
            {
                "value": "1",
                "label": "Ceiling plastering 1:3, 10mm tk"
            },
            {
                "value": "2",
                "label": "Exterior - White washing and Colour washing"
            },
            {
                "value": "3",
                "label": "Interior - White washing and Colour washing"
            },
            {
                "value": "4",
                "label": "Replastering, 20mm tk"
            },
            {
                "value": "5",
                "label": "Roof Leakage"
            },
            {
                "value": "6",
                "label": "Reflooring tiles"
            },
            {
                "value": "7",
                "label": "Floor Patchwork"
            }
        ];
        this.question73 = [
            {
                "value": "1",
                "label": "Major Repair"
            },
            {
                "value": "2",
                "label": "Minor Repair"
            },
            {
                "value": "3",
                "label": "Both"
            }
        ];
        this.question72 = [
            {
                "value": "1",
                "label": "Good"
            },
            {
                "value": "2",
                "label": "Needs repair"
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
            }
        ];
        this.roomselingyn = [
            {
                "value": "1",
                "label": "Good"
            },
            {
                "value": "2",
                "label": "Bad"
            },
            {
                "value": "3",
                "label": "Under Construction"
            }
        ];
        this.dataList = [];
        this.ToiletCWSN = false;
        this.typeLab = true;
        this.tabsData = 0;
        this.RoomUse = "";
        this.dataListBuild = [];
        this.dataListFloor = [];
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.vistId = this.routeData.queryParams.vistId;
        this.buildingId = this.routeData.queryParams.buildingId;
        this.floorId = this.routeData.queryParams.floorId;
        this.roomid = this.routeData.queryParams.roomId;
        this.status = this.routeData.queryParams.status;
        this.udiseCode = this.utilityService.udiseCode;
        this.buildName = this.routeData.queryParams.buildName;
        this.visitstatus = this.routeData.queryParams.visitstatus;
        console.log(this.roomid, "room id");
        // this.getbuilding();
        this.checkLocalDb();
        this.presentToastWithOptions(this.buildingId, this.buildName);
    }
    initialValidator() {
        this.form = this.formBuilder.group({
            "IndxId": "",
            "ToiletIndxId": "",
            "SchlId": this.schoolId,
            "VistId": this.vistId,
            "BldgIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "BldgId": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "FloorIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "FloorId": this.floorId,
            "RoomId": this.roomid,
            "RoomCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "RepairType": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "MajorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "MinorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaExtWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaIntWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaPlastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AreaPatchwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "DoorReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "WindowReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "DoorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "WindowRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "DoorRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "WindowRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LatrinReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "UrinalReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "PipeNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "DrainageNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "RoomLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "RoomBreadth": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "RoomHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "FloorType": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "BenchFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "DeskFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "TubelightFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "FansFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "Cupboard": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "RoomCeilingYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "RoomCeilingPhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "RoomCeilingPhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "RoomCeilingLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "RoomCeilingLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "TeacherTableYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "TelevisionYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "TelevisionFuncYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartboardPrjtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartboardPrjtFuncYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "ClassRoomProjYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "ClassRoomProjFuncYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "LabType": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabComputerYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "LabComputerFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabComputerRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabWatersupplyYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "LabDrainage": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "LabPhotoOne": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabPhotoOneName": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LabLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "LibraryBooks": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "HmRoomTblYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "StaffrmUsedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "KitchenWtrSrc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "KitchenLPGConYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "KitchenWtrSupply": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "KitchenStorageYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "KitchenCleanYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "DiningFunctionalYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "DiningSeatingCapacity": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "DiningSeatingWtrSupply": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "NoonmealStorageClean": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "StoreRoomPurpose": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "StrroomStorageClean": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "ReasonEmpty": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            // need toilet
            "ToiletType": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "ToiletWaterCon": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "ToiletWasteDis": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "IwcToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "Iwccubicles": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "IwccubiclesFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "EwcToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "Ewccubicles": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "Ewccubiclesfunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "UrinalToilet": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "Urinals": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "Urinalsfunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "ToiletTapsFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "ToiletNeedTabs": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "ToiletBucket": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "Toiletmugs": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SizeSuitable": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "Roof": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SanitWasteDisp": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "HwFacility": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            // "HwFacilityLocation": new FormControl('', null),
            // "HwFacilityType": new FormControl('', null),
            // "PipingNeed": new FormControl(false, null),
            // "PipeLengthNeed": new FormControl('', null),
            // "TapsFunc": new FormControl('', null),
            // "TapsReq": new FormControl('', null),
            // "StorageFacilityClosed": new FormControl(false, null),
            // toilet end
            "AuditoriumYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "AuditoriumStageReqt": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumStageArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumStageHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumStageAreaLevel": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumLights": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumFans": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "AuditoriumPrjtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "AuditoriumPrjtFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartRoomFacilityYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartRoomDeviceFunYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartRoomComputersYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
            "SmartRoomFunComp": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SmartRoomFunCompRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SmartRoomPhotoOne": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SmartRoomPhotoOneName": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SmartRoomLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
            "SmartRoomLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
        });
    }
    getTabs(i) {
        if (this.RoomUse) {
            if (this.tabsData == i) {
                this.tabsData = 0;
            }
            else {
                this.tabsData = i;
            }
        }
        else {
            this.alertService.error("Please select room used for");
        }
    }
    onSelectedRoom() {
        if (+this.RoomUse == 1) {
            this.form.controls['TeacherTableYn'].setValue(false);
            this.form.controls['TelevisionYn'].setValue(false);
            this.form.controls['TelevisionFuncYn'].setValue(false);
            this.form.controls['SmartboardPrjtYn'].setValue(false);
            this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
            this.form.controls['ClassRoomProjYn'].setValue(false);
            this.form.controls['ClassRoomProjFuncYn'].setValue(false);
        }
        else {
            this.form.controls['TeacherTableYn'].setValue(false);
            this.form.controls['TelevisionYn'].setValue(false);
            this.form.controls['TelevisionFuncYn'].setValue(false);
            this.form.controls['SmartboardPrjtYn'].setValue(false);
            this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
            this.form.controls['ClassRoomProjYn'].setValue(false);
            this.form.controls['ClassRoomProjFuncYn'].setValue(false);
        }
        if (+this.RoomUse == 2) {
            this.form.controls['LabType'].setValue('');
            this.form.controls['LabComputerYn'].setValue(false);
            this.form.controls['LabWatersupplyYn'].setValue(false);
            this.form.controls['LabDrainage'].setValue(false);
            this.form.controls['LabPhotoOne'].setValue('');
            this.form.controls['LabPhotoOneName'].setValue('');
            this.form.controls['LabType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['LabPhotoOne'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['LabPhotoOneName'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['LabType'].setValue('');
            this.form.controls['LabComputerYn'].setValue(false);
            this.form.controls['LabComputerFunc'].setValue('');
            this.form.controls['LabComputerRepair'].setValue('');
            this.form.controls['LabWatersupplyYn'].setValue(false);
            this.form.controls['LabDrainage'].setValue(false);
            this.form.controls['LabType'].setValidators(null);
            this.form.controls['LabComputerFunc'].setValidators(null);
            this.form.controls['LabComputerRepair'].setValidators(null);
            this.form.controls['LabPhotoOne'].setValidators(null);
            this.form.controls['LabPhotoOneName'].setValidators(null);
        }
        if (+this.RoomUse == 3) {
            this.form.controls['LibraryBooks'].setValue(false);
            this.form.controls['LibraryBooks'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['LibraryBooks'].setValue(false);
            this.form.controls['LibraryBooks'].setValidators(null);
        }
        if (+this.RoomUse == 4) {
            this.form.controls['HmRoomTblYn'].setValue(false);
            this.form.controls['HmRoomTblYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['HmRoomTblYn'].setValue(false);
            this.form.controls['HmRoomTblYn'].setValidators(null);
        }
        if (+this.RoomUse == 6) {
            this.form.controls['StaffrmUsedBy'].setValue('');
            this.form.controls['StaffrmUsedBy'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['StaffrmUsedBy'].setValue('');
            this.form.controls['StaffrmUsedBy'].setValidators(null);
        }
        if (+this.RoomUse == 7) {
            this.form.controls['KitchenLPGConYn'].setValue(false);
            this.form.controls['KitchenWtrSrc'].setValue('');
            this.form.controls['KitchenWtrSupply'].setValue(false);
            this.form.controls['KitchenStorageYn'].setValue(false);
            this.form.controls['KitchenCleanYn'].setValue(false);
            // this.form.controls['KitchenWtrSrc'].setValidators(Validators.required);
        }
        else {
            this.form.controls['KitchenLPGConYn'].setValue(false);
            this.form.controls['KitchenWtrSrc'].setValue('');
            this.form.controls['KitchenWtrSupply'].setValue(false);
            this.form.controls['KitchenStorageYn'].setValue(false);
            this.form.controls['KitchenCleanYn'].setValue(false);
            this.form.controls['KitchenLPGConYn'].setValidators(null);
            this.form.controls['KitchenWtrSrc'].setValidators(null);
            this.form.controls['KitchenWtrSupply'].setValidators(null);
            this.form.controls['KitchenStorageYn'].setValidators(null);
            this.form.controls['KitchenCleanYn'].setValidators(null);
        }
        if (+this.RoomUse == 8) {
            this.form.controls['NoonmealStorageClean'].setValue(false);
            this.form.controls['NoonmealStorageClean'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['NoonmealStorageClean'].setValue(false);
            this.form.controls['NoonmealStorageClean'].setValidators(null);
        }
        if (+this.RoomUse == 9) {
            this.form.controls['DiningFunctionalYn'].setValue(false);
            this.form.controls['DiningSeatingCapacity'].setValue('');
            this.form.controls['DiningSeatingWtrSupply'].setValue(false);
            this.form.controls['DiningSeatingCapacity'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['DiningFunctionalYn'].setValue(false);
            this.form.controls['DiningSeatingCapacity'].setValue('');
            this.form.controls['DiningSeatingWtrSupply'].setValue(false);
            this.form.controls['DiningFunctionalYn'].setValidators(null);
            this.form.controls['DiningSeatingCapacity'].setValidators(null);
            this.form.controls['DiningSeatingWtrSupply'].setValidators(null);
        }
        if (+this.RoomUse == 10) {
            this.form.controls['ToiletType'].setValue("");
            this.form.controls['ToiletWaterCon'].setValue("");
            this.form.controls['ToiletWasteDis'].setValue("");
            this.form.controls['IwcToilet'].setValue(false);
            this.form.controls['Iwccubicles'].setValue("");
            this.form.controls['IwccubiclesFunc'].setValue("");
            this.form.controls['EwcToilet'].setValue(false);
            this.form.controls['Ewccubicles'].setValue("");
            this.form.controls['Ewccubiclesfunc'].setValue("");
            this.form.controls['UrinalToilet'].setValue(false);
            this.form.controls['Urinals'].setValue("");
            this.form.controls['Urinalsfunc'].setValue("");
            this.form.controls['ToiletTapsFunc'].setValue("");
            this.form.controls['ToiletNeedTabs'].setValue("");
            this.form.controls['ToiletBucket'].setValue("");
            this.form.controls['Toiletmugs'].setValue("");
            this.form.controls['SizeSuitable'].setValue(false);
            this.form.controls['Roof'].setValue("");
            this.form.controls['HwFacility'].setValue(false);
            // this.form.controls['HwFacilityLocation'].setValue("");
            // this.form.controls['HwFacilityType'].setValue("");
            // this.form.controls['PipingNeed'].setValue(false);
            // this.form.controls['PipeLengthNeed'].setValue("");
            // this.form.controls['TapsFunc'].setValue("");
            // this.form.controls['TapsReq'].setValue("");
            // this.form.controls['StorageFacilityClosed'].setValue(false);
            this.form.controls['ToiletType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['ToiletWaterCon'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['ToiletWasteDis'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            // this.form.controls['Iwccubicles'].setValidators(Validators.required);
            this.form.controls['ToiletTapsFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['ToiletNeedTabs'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['ToiletBucket'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['Toiletmugs'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['SizeSuitable'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['Roof'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['HwFacility'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            if (this.form.value.ToiletType == 4 || this.form.value.ToiletType == 5 || this.form.value.ToiletType == 6 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9) {
                // console.log("Array of Drop If", this.question76);
                this.question76 = this.question76.filter(dd => dd.value != "9");
            }
            else {
                this.question76 = [];
                this.question76 = this.question761;
                // console.log("Array of Drop Else", this.question76);
            }
            if (this.form.value.ToiletType == 4 || this.form.value.ToiletType == 5 || this.form.value.ToiletType == 6) {
                this.form.controls['Iwccubicles'].setValidators(null);
                this.form.controls['IwccubiclesFunc'].setValidators(null);
                this.ToiletCWSN = true;
            }
            else {
                // this.form.controls['Iwccubicles'].setValidators(Validators.required);
                // this.form.controls['IwccubiclesFunc'].setValidators(Validators.required);
                this.ToiletCWSN = false;
            }
            if (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 ||
                this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9) {
                this.form.controls['Ewccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['Ewccubiclesfunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            }
            else {
                this.form.controls['Ewccubicles'].setValidators(null);
                this.form.controls['Ewccubiclesfunc'].setValidators(null);
            }
            // Toilet Ignore Bench, Desk, Fans and Cupboard..........
            this.form.controls['BenchFunc'].setValue("");
            this.form.controls['DeskFunc'].setValue("");
            this.form.controls['FansFunc'].setValue("");
            this.form.controls['Cupboard'].setValue("");
            this.form.controls['BenchFunc'].setValidators(null);
            this.form.controls['DeskFunc'].setValidators(null);
            this.form.controls['FansFunc'].setValidators(null);
            this.form.controls['Cupboard'].setValidators(null);
        }
        else {
            this.form.controls['ToiletType'].setValue("");
            this.form.controls['ToiletWaterCon'].setValue("");
            this.form.controls['ToiletWasteDis'].setValue("");
            this.form.controls['Iwccubicles'].setValue("");
            this.form.controls['IwccubiclesFunc'].setValue("");
            this.form.controls['Ewccubicles'].setValue("");
            this.form.controls['Ewccubiclesfunc'].setValue("");
            this.form.controls['Urinals'].setValue("");
            this.form.controls['Urinalsfunc'].setValue("");
            this.form.controls['ToiletTapsFunc'].setValue("");
            this.form.controls['ToiletNeedTabs'].setValue("");
            this.form.controls['ToiletBucket'].setValue("");
            this.form.controls['Toiletmugs'].setValue("");
            this.form.controls['SizeSuitable'].setValue(false);
            this.form.controls['Roof'].setValue("");
            this.form.controls['HwFacility'].setValue(false);
            this.form.controls['SanitWasteDisp'].setValue("");
            // this.form.controls['HwFacilityLocation'].setValue("");
            // this.form.controls['HwFacilityType'].setValue("");
            // this.form.controls['PipingNeed'].setValue(false);
            // this.form.controls['PipeLengthNeed'].setValue("");
            // this.form.controls['TapsFunc'].setValue("");
            // this.form.controls['TapsReq'].setValue("");
            // this.form.controls['StorageFacilityClosed'].setValue(false);
            this.form.controls['ToiletType'].setValidators(null);
            this.form.controls['ToiletWaterCon'].setValidators(null);
            this.form.controls['ToiletWasteDis'].setValidators(null);
            this.form.controls['Iwccubicles'].setValidators(null);
            this.form.controls['IwccubiclesFunc'].setValidators(null);
            this.form.controls['Ewccubicles'].setValidators(null);
            this.form.controls['Ewccubiclesfunc'].setValidators(null);
            this.form.controls['Urinals'].setValidators(null);
            this.form.controls['Urinalsfunc'].setValidators(null);
            this.form.controls['ToiletTapsFunc'].setValidators(null);
            this.form.controls['ToiletNeedTabs'].setValidators(null);
            this.form.controls['ToiletBucket'].setValidators(null);
            this.form.controls['Toiletmugs'].setValidators(null);
            this.form.controls['SizeSuitable'].setValidators(null);
            this.form.controls['Roof'].setValidators(null);
            this.form.controls['HwFacility'].setValidators(null);
            this.form.controls['SanitWasteDisp'].setValidators(null);
            // this.form.controls['HwFacilityLocation'].setValidators(null);
            // this.form.controls['HwFacilityType'].setValidators(null);
            // this.form.controls['PipingNeed'].setValidators(null);
            // this.form.controls['PipeLengthNeed'].setValidators(null);
            // this.form.controls['TapsFunc'].setValidators(null);
            // this.form.controls['TapsReq'].setValidators(null);
            // this.form.controls['StorageFacilityClosed'].setValidators(null);
            // No Toilet To Add Bench, Desk, Fans and Cupboard..............
            if (this.dataList.length > 0) { }
            else {
                this.form.controls['BenchFunc'].setValue("");
                this.form.controls['DeskFunc'].setValue("");
                this.form.controls['FansFunc'].setValue("");
                this.form.controls['Cupboard'].setValue("");
            }
            // if (+this.RoomUse == 7) {
            //   this.form.controls['BenchFunc'].setValidators(null);
            //   this.form.controls['DeskFunc'].setValidators(null);
            //   this.form.controls['FansFunc'].setValidators(null);
            //   this.form.controls['Cupboard'].setValidators(null);
            // }else{
            //   this.form.controls['BenchFunc'].setValidators(Validators.required);
            //   this.form.controls['DeskFunc'].setValidators(Validators.required);
            //   this.form.controls['FansFunc'].setValidators(Validators.required);
            //   this.form.controls['Cupboard'].setValidators(Validators.required);
            // }
        }
        if (+this.RoomUse == 12) {
            this.form.controls['StoreRoomPurpose'].setValue('');
            this.form.controls['StrroomStorageClean'].setValue(false);
            this.form.controls['StoreRoomPurpose'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['StrroomStorageClean'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['StoreRoomPurpose'].setValue('');
            this.form.controls['StrroomStorageClean'].setValue(false);
            this.form.controls['StoreRoomPurpose'].setValidators(null);
            this.form.controls['StrroomStorageClean'].setValidators(null);
        }
        if (+this.RoomUse == 14) {
            this.form.controls['ReasonEmpty'].setValue('');
            this.form.controls['ReasonEmpty'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['ReasonEmpty'].setValue('');
            this.form.controls['ReasonEmpty'].setValidators(null);
        }
        if (+this.RoomUse == 17) {
            this.form.controls['SmartRoomFacilityYn'].setValue(false);
            this.form.controls['SmartRoomFacilityYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['SmartRoomComputersYn'].setValue(false);
            this.form.controls['SmartRoomComputersYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['SmartRoomFacilityYn'].setValue(false);
            this.form.controls['SmartRoomFacilityYn'].setValidators(null);
            this.form.controls['SmartRoomComputersYn'].setValue(false);
            this.form.controls['SmartRoomComputersYn'].setValidators(null);
            this.form.controls['SmartRoomDeviceFunYn'].setValue(false);
            this.form.controls['SmartRoomDeviceFunYn'].setValidators(null);
            this.form.controls['SmartRoomFunComp'].setValue('');
            this.form.controls['SmartRoomFunComp'].setValidators(null);
            this.form.controls['SmartRoomFunCompRepair'].setValue('');
            this.form.controls['SmartRoomFunCompRepair'].setValidators(null);
        }
        if (+this.RoomUse == 18) {
            this.form.controls['AuditoriumYn'].setValue(false);
            this.form.controls['AuditoriumYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['AuditoriumYn'].setValue(false);
            this.form.controls['AuditoriumYn'].setValidators(null);
        }
        if (+this.RoomUse == 5 || +this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10
            || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
            this.form.controls['BenchFunc'].setValue('');
            this.form.controls['BenchFunc'].setValidators(null);
        }
        else {
            this.form.controls['BenchFunc'].setValue('');
            this.form.controls['BenchFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        if (+this.RoomUse == 5 || +this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10
            || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
            this.form.controls['DeskFunc'].setValue('');
            this.form.controls['DeskFunc'].setValidators(null);
        }
        else {
            this.form.controls['DeskFunc'].setValue('');
            this.form.controls['DeskFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        if (+this.RoomUse == 7 || +this.RoomUse == 8 || +this.RoomUse == 10
            || +this.RoomUse == 11 || +this.RoomUse == 12 || +this.RoomUse == 14) {
            this.form.controls['FansFunc'].setValue('');
            this.form.controls['FansFunc'].setValidators(null);
        }
        else {
            this.form.controls['FansFunc'].setValue('');
            this.form.controls['FansFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        if (+this.RoomUse == 7 || +this.RoomUse == 10 || +this.RoomUse == 11 || +this.RoomUse == 14) {
            this.form.controls['Cupboard'].setValue('');
            this.form.controls['Cupboard'].setValidators(null);
        }
        else {
            this.form.controls['Cupboard'].setValue('');
            this.form.controls['Cupboard'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        this.form.controls['TubelightFunc'].setValue('');
        this.form.controls['RoomLength'].setValue('');
        this.form.controls['RoomBreadth'].setValue('');
        this.form.controls['RoomHeight'].setValue('');
        this.form.controls['FloorType'].setValue('');
        this.form.controls['RoomCeilingYn'].setValue(''); // by Priya
        this.form.controls['RoomCondition'].setValue('');
        this.form.controls['RepairType'].setValue('');
        this.form.controls['MajorRepair'].setValue('');
        this.form.controls['MinorRepair'].setValue('');
        this.form.controls['AreaReplastering'].setValue('');
        this.form.controls['AreaExtWw'].setValue('');
        this.form.controls['AreaIntWw'].setValue('');
        this.form.controls['AreaPlastering'].setValue('');
        this.form.controls['AreaReflooring'].setValue('');
        this.form.controls['AreaPatchwork'].setValue('');
        this.form.controls['DoorReplace'].setValue('');
        this.form.controls['WindowReplace'].setValue('');
        this.form.controls['DoorRepair'].setValue('');
        this.form.controls['WindowRepair'].setValue('');
        this.form.controls['DoorRepaint'].setValue('');
        this.form.controls['WindowRepaint'].setValue('');
        this.form.controls['LatrinReplace'].setValue('');
        this.form.controls['UrinalReplace'].setValue('');
        this.form.controls['PipeNeed'].setValue('');
        this.form.controls['DrainageNeed'].setValue('');
        this.form.controls['RoomCondition'].updateValueAndValidity();
        this.form.controls['RepairType'].updateValueAndValidity();
        this.form.controls['MajorRepair'].updateValueAndValidity();
        this.form.controls['MinorRepair'].updateValueAndValidity();
        this.form.controls['AreaReplastering'].updateValueAndValidity();
        this.form.controls['AreaExtWw'].updateValueAndValidity();
        this.form.controls['AreaIntWw'].updateValueAndValidity();
        this.form.controls['AreaPlastering'].updateValueAndValidity();
        this.form.controls['AreaReflooring'].updateValueAndValidity();
        this.form.controls['AreaPatchwork'].updateValueAndValidity();
        this.form.controls['DoorReplace'].updateValueAndValidity();
        this.form.controls['WindowReplace'].updateValueAndValidity();
        this.form.controls['DoorRepair'].updateValueAndValidity();
        this.form.controls['WindowRepair'].updateValueAndValidity();
        this.form.controls['DoorRepaint'].updateValueAndValidity();
        this.form.controls['WindowRepaint'].updateValueAndValidity();
        this.form.controls['LatrinReplace'].updateValueAndValidity();
        this.form.controls['UrinalReplace'].updateValueAndValidity();
        this.form.controls['PipeNeed'].updateValueAndValidity();
        this.form.controls['DrainageNeed'].updateValueAndValidity();
        this.form.controls['RoomLength'].updateValueAndValidity();
        this.form.controls['RoomBreadth'].updateValueAndValidity();
        this.form.controls['RoomHeight'].updateValueAndValidity();
        this.form.controls['FloorType'].updateValueAndValidity();
        this.form.controls['RoomCeilingYn'].updateValueAndValidity(); // Priya
        this.form.controls['BenchFunc'].updateValueAndValidity();
        this.form.controls['DeskFunc'].updateValueAndValidity();
        this.form.controls['TubelightFunc'].updateValueAndValidity();
        this.form.controls['FansFunc'].updateValueAndValidity();
        this.form.controls['Cupboard'].updateValueAndValidity();
        this.form.controls['TeacherTableYn'].updateValueAndValidity();
        this.form.controls['TelevisionYn'].updateValueAndValidity();
        this.form.controls['TelevisionFuncYn'].updateValueAndValidity();
        this.form.controls['SmartboardPrjtYn'].updateValueAndValidity();
        this.form.controls['SmartboardPrjtFuncYn'].updateValueAndValidity();
        this.form.controls['ClassRoomProjYn'].updateValueAndValidity();
        this.form.controls['ClassRoomProjFuncYn'].updateValueAndValidity();
        this.form.controls['LabType'].updateValueAndValidity();
        this.form.controls['LabComputerYn'].updateValueAndValidity();
        this.form.controls['LabComputerFunc'].updateValueAndValidity();
        this.form.controls['LabComputerRepair'].updateValueAndValidity();
        this.form.controls['LabWatersupplyYn'].updateValueAndValidity();
        this.form.controls['LabDrainage'].updateValueAndValidity();
        this.form.controls['LibraryBooks'].updateValueAndValidity();
        this.form.controls['HmRoomTblYn'].updateValueAndValidity();
        this.form.controls['StaffrmUsedBy'].updateValueAndValidity();
        this.form.controls['KitchenWtrSrc'].updateValueAndValidity();
        this.form.controls['KitchenLPGConYn'].updateValueAndValidity();
        this.form.controls['KitchenWtrSupply'].updateValueAndValidity();
        this.form.controls['KitchenStorageYn'].updateValueAndValidity();
        this.form.controls['KitchenCleanYn'].updateValueAndValidity();
        this.form.controls['DiningFunctionalYn'].updateValueAndValidity();
        this.form.controls['DiningSeatingCapacity'].updateValueAndValidity();
        this.form.controls['DiningSeatingWtrSupply'].updateValueAndValidity();
        this.form.controls['NoonmealStorageClean'].updateValueAndValidity();
        this.form.controls['StoreRoomPurpose'].updateValueAndValidity();
        this.form.controls['StrroomStorageClean'].updateValueAndValidity();
        this.form.controls['ReasonEmpty'].updateValueAndValidity();
        this.form.controls['ToiletType'].updateValueAndValidity();
        this.form.controls['ToiletWaterCon'].updateValueAndValidity();
        this.form.controls['ToiletWasteDis'].updateValueAndValidity();
        this.form.controls['IwcToilet'].updateValueAndValidity();
        this.form.controls['Iwccubicles'].updateValueAndValidity();
        this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
        this.form.controls['EwcToilet'].updateValueAndValidity();
        this.form.controls['Ewccubicles'].updateValueAndValidity();
        this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
        this.form.controls['UrinalToilet'].updateValueAndValidity();
        this.form.controls['Urinals'].updateValueAndValidity();
        this.form.controls['Urinalsfunc'].updateValueAndValidity();
        this.form.controls['ToiletTapsFunc'].updateValueAndValidity();
        this.form.controls['ToiletNeedTabs'].updateValueAndValidity();
        this.form.controls['ToiletBucket'].updateValueAndValidity();
        this.form.controls['Toiletmugs'].updateValueAndValidity();
        this.form.controls['SizeSuitable'].updateValueAndValidity();
        this.form.controls['Roof'].updateValueAndValidity();
        this.form.controls['SanitWasteDisp'].updateValueAndValidity();
        this.form.controls['HwFacility'].updateValueAndValidity();
        // this.form.controls['HwFacilityLocation'].updateValueAndValidity();
        // this.form.controls['HwFacilityType'].updateValueAndValidity();
        // this.form.controls['PipingNeed'].updateValueAndValidity();
        // this.form.controls['PipeLengthNeed'].updateValueAndValidity();
        // this.form.controls['TapsFunc'].updateValueAndValidity();
        // this.form.controls['TapsReq'].updateValueAndValidity();
        // this.form.controls['StorageFacilityClosed'].updateValueAndValidity();
        this.form.controls['AuditoriumYn'].updateValueAndValidity();
        this.form.controls['AuditoriumStageReqt'].updateValueAndValidity();
        this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
        this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        this.form.controls['AuditoriumLights'].updateValueAndValidity();
        this.form.controls['AuditoriumFans'].updateValueAndValidity();
        this.form.controls['AuditoriumPrjtYn'].updateValueAndValidity();
        this.form.controls['AuditoriumPrjtFunc'].updateValueAndValidity();
        this.form.controls['SmartRoomFacilityYn'].updateValueAndValidity();
        this.form.controls['SmartRoomComputersYn'].updateValueAndValidity();
        this.form.controls['SmartRoomDeviceFunYn'].updateValueAndValidity();
        this.form.controls['SmartRoomFunComp'].updateValueAndValidity();
        this.form.controls['SmartRoomFunCompRepair'].updateValueAndValidity();
        this.form.controls['LabPhotoOne'].updateValueAndValidity();
        this.form.controls['LabPhotoOneName'].updateValueAndValidity();
    }
    onSelectChange(event, id) {
        if (id == 1) {
            this.form.controls['MajorRepair'].setValue("");
            this.form.controls['MinorRepair'].setValue("");
            this.form.controls['AreaReplastering'].setValue("");
            this.form.controls['AreaExtWw'].setValue("");
            this.form.controls['AreaIntWw'].setValue("");
            this.form.controls['AreaPlastering'].setValue("");
            this.form.controls['AreaReflooring'].setValue("");
            this.form.controls['AreaPatchwork'].setValue("");
            this.form.controls['DoorReplace'].setValue("");
            this.form.controls['WindowReplace'].setValue("");
            this.form.controls['DoorRepaint'].setValue("");
            this.form.controls['WindowRepaint'].setValue("");
            this.form.controls['LatrinReplace'].setValue("");
            this.form.controls['UrinalReplace'].setValue("");
            this.form.controls['PipeNeed'].setValue("");
            this.form.controls['DrainageNeed'].setValue("");
            this.form.controls['MajorRepair'].setValidators(null);
            this.form.controls['MinorRepair'].setValidators(null);
            this.form.controls['AreaReplastering'].setValidators(null);
            this.form.controls['AreaExtWw'].setValidators(null);
            this.form.controls['AreaIntWw'].setValidators(null);
            this.form.controls['AreaPlastering'].setValidators(null);
            this.form.controls['AreaReflooring'].setValidators(null);
            this.form.controls['AreaPatchwork'].setValidators(null);
            this.form.controls['DoorReplace'].setValidators(null);
            this.form.controls['WindowReplace'].setValidators(null);
            this.form.controls['DoorRepaint'].setValidators(null);
            this.form.controls['LatrinReplace'].setValidators(null);
            this.form.controls['UrinalReplace'].setValidators(null);
            this.form.controls['PipeNeed'].setValidators(null);
            this.form.controls['DrainageNeed'].setValidators(null);
            if (+this.form.value.RoomCondition == 2) {
                this.form.controls['RepairType'].setValue("");
                this.form.controls['RepairType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            }
            else {
                this.form.controls['RepairType'].setValue("");
                this.form.controls['RepairType'].setValidators(null);
                this.onSelectMajorRepairChange(0, "all");
                this.onSelectMinorRepairChange(0, "all");
            }
        }
        if (id == 2) {
            if (this.form.value.RoomCondition == 2) {
                if (this.form.value.RepairType == 1) {
                    this.form.controls['MajorRepair'].setValue("");
                    this.form.controls['MajorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                    this.form.controls['MinorRepair'].setValue("");
                    this.form.controls['MinorRepair'].setValidators(null);
                    this.onSelectMinorRepairChange(0, "all");
                }
                if (this.form.value.RepairType == 2) {
                    this.form.controls['MinorRepair'].setValue("");
                    this.form.controls['MinorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                    this.form.controls['MajorRepair'].setValue("");
                    this.form.controls['MajorRepair'].setValidators(null);
                    this.onSelectMajorRepairChange(0, "all");
                }
                if (this.form.value.RepairType == 3) {
                    this.form.controls['MajorRepair'].setValue("");
                    this.form.controls['MajorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                    this.form.controls['MinorRepair'].setValue("");
                    this.form.controls['MinorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                }
            }
            else {
                this.form.controls['MinorRepair'].setValue("");
                this.form.controls['MinorRepair'].setValidators(null);
                this.form.controls['MajorRepair'].setValue("");
                this.form.controls['MajorRepair'].setValidators(null);
                this.onSelectMinorRepairChange(0, "all");
                this.onSelectMajorRepairChange(0, "all");
            }
        }
        if (id == 11) {
            if (+this.form.value.LabType == 5 || +this.form.value.LabType == 6) {
                this.form.controls['LabComputerYn'].setValue(true);
            }
            else {
                this.form.controls['LabComputerYn'].setValue(false);
            }
            this.form.controls['LabComputerYn'].updateValueAndValidity();
        }
        this.form.controls['MajorRepair'].updateValueAndValidity();
        this.form.controls['MinorRepair'].updateValueAndValidity();
        this.form.controls['AreaReplastering'].updateValueAndValidity();
        this.form.controls['AreaExtWw'].updateValueAndValidity();
        this.form.controls['AreaIntWw'].updateValueAndValidity();
        this.form.controls['AreaPlastering'].updateValueAndValidity();
        this.form.controls['AreaReflooring'].updateValueAndValidity();
        this.form.controls['AreaPatchwork'].updateValueAndValidity();
        this.form.controls['DoorReplace'].updateValueAndValidity();
        this.form.controls['WindowReplace'].updateValueAndValidity();
        this.form.controls['DoorRepaint'].updateValueAndValidity();
        this.form.controls['WindowRepaint'].updateValueAndValidity();
        this.form.controls['LatrinReplace'].updateValueAndValidity();
        this.form.controls['UrinalReplace'].updateValueAndValidity();
        this.form.controls['PipeNeed'].updateValueAndValidity();
        this.form.controls['DrainageNeed'].updateValueAndValidity();
        // if(id == 3 && (+this.form.value.ToiletType == 10 || +this.form.value.ToiletType == 11|| +this.form.value.ToiletType == 5)){
        //   this.form.controls['SanitWasteDisp'].setValue("");
        //   this.form.controls['SanitWasteDisp'].setValidators(Validators.required);
        // }else{
        //   this.form.controls['SanitWasteDisp'].setValue("");
        //   this.form.controls['SanitWasteDisp'].setValidators(null);
        // }
        // this.form.controls['SanitWasteDisp'].updateValueAndValidity();
        if (id == 3) {
            // if(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 ||
            //   this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9){
            this.form.controls['IwcToilet'].setValue(false);
            this.form.controls['EwcToilet'].setValue(false);
            this.form.controls['UrinalToilet'].setValue(false);
            this.form.controls['Iwccubicles'].setValue("");
            this.form.controls['Iwccubicles'].setValidators(null);
            this.form.controls['IwccubiclesFunc'].setValue("");
            this.form.controls['IwccubiclesFunc'].setValidators(null);
            this.form.controls['Ewccubicles'].setValue("");
            this.form.controls['Ewccubicles'].setValidators(null);
            this.form.controls['Ewccubiclesfunc'].setValue("");
            this.form.controls['Ewccubiclesfunc'].setValidators(null);
            this.form.controls['Urinals'].setValue("");
            this.form.controls['Urinals'].setValidators(null);
            this.form.controls['Urinalsfunc'].setValue("");
            this.form.controls['Urinalsfunc'].setValidators(null);
            this.form.controls['Iwccubicles'].updateValueAndValidity();
            this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
            this.form.controls['Ewccubicles'].updateValueAndValidity();
            this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
            this.form.controls['Urinals'].updateValueAndValidity();
            this.form.controls['Urinalsfunc'].updateValueAndValidity();
            // }
        }
    }
    onSelectMajorRepairChange(event, item) {
        console.log(event, item);
        this.onActiveMajor1 = 0;
        this.onActiveMajor2 = 0;
        this.onActiveMajor3 = 0;
        this.onActiveMajor4 = 0;
        this.onActiveMajor5 = 0;
        this.onActiveMajor6 = 0;
        this.onActiveMajor7 = 0;
        this.onActiveMajor8 = 0;
        this.onActiveMajor9 = 0;
        this.onActiveMajor10 = 0;
        this.onActiveMajor11 = 0;
        this.onActiveMajor12 = 0;
        if (item == "all") {
            for (let i = 0; i <= event.length; i++) {
                console.log(event);
                if (event[i] == "1") {
                    this.onActiveMajor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMajor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMajor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMajor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMajor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMajor6 = 6;
                }
                if (event[i] == "7") {
                    this.onActiveMajor7 = 7;
                }
                if (event[i] == "8") {
                    this.onActiveMajor8 = 8;
                }
                if (event[i] == "9") {
                    this.onActiveMajor9 = 9;
                }
            }
            if (this.onActiveMajor1 == 1) {
                this.form.controls['AreaReplastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaReplastering'].setValue("");
                this.form.controls['AreaReplastering'].setValidators(null);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
            }
            if (this.onActiveMajor2 == 2) {
                this.form.controls['AreaExtWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaExtWw'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaExtWw'].setValue("");
                this.form.controls['AreaExtWw'].setValidators(null);
                this.form.controls['AreaExtWw'].updateValueAndValidity();
            }
            if (this.onActiveMajor3 == 3) {
                this.form.controls['AreaIntWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaIntWw'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaIntWw'].setValue("");
                this.form.controls['AreaIntWw'].setValidators(null);
                this.form.controls['AreaIntWw'].updateValueAndValidity();
            }
            if (this.onActiveMajor4 == 4) {
                this.form.controls['AreaPlastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaPlastering'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaPlastering'].setValue("");
                this.form.controls['AreaPlastering'].setValidators(null);
                this.form.controls['AreaPlastering'].updateValueAndValidity();
            }
            if (this.onActiveMajor6 == 6) {
                this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaReflooring'].setValue("");
                this.form.controls['AreaReflooring'].setValidators(null);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
            }
            if (this.onActiveMajor7 == 7) {
                this.form.controls['AreaPatchwork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['AreaPatchwork'].updateValueAndValidity();
            }
            else {
                this.form.controls['AreaPatchwork'].setValue("");
                this.form.controls['AreaPatchwork'].setValidators(null);
                this.form.controls['AreaPatchwork'].updateValueAndValidity();
            }
            if (this.onActiveMajor8 == 8 && +this.form.value.RoomUse == 10) {
                this.form.controls['LatrinReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['LatrinReplace'].updateValueAndValidity();
            }
            else {
                this.form.controls['LatrinReplace'].setValue("");
                this.form.controls['LatrinReplace'].setValidators(null);
                this.form.controls['LatrinReplace'].updateValueAndValidity();
            }
            if (this.onActiveMajor9 == 9 && +this.form.value.RoomUse == 10) {
                this.form.controls['UrinalReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['UrinalReplace'].updateValueAndValidity();
            }
            else {
                this.form.controls['UrinalReplace'].setValue("");
                this.form.controls['UrinalReplace'].setValidators(null);
                this.form.controls['UrinalReplace'].updateValueAndValidity();
            }
            if (this.onActiveMajor10 == 10 && +this.form.value.RoomUse == 10) {
                this.form.controls['PipeNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['PipeNeed'].updateValueAndValidity();
            }
            else {
                this.form.controls['PipeNeed'].setValue("");
                this.form.controls['PipeNeed'].setValidators(null);
                this.form.controls['PipeNeed'].updateValueAndValidity();
            }
            if (this.onActiveMajor11 == 11 && +this.form.value.RoomUse == 10) {
                this.form.controls['DrainageNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['DrainageNeed'].updateValueAndValidity();
            }
            else {
                this.form.controls['DrainageNeed'].setValue("");
                this.form.controls['DrainageNeed'].setValidators(null);
                this.form.controls['DrainageNeed'].updateValueAndValidity();
            }
        }
        if (item == "toilet") {
            for (let i = 0; i <= event.length; i++) {
                if (event[i] == "1") {
                    this.onActiveMajor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMajor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMajor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMajor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMajor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMajor6 = 6;
                }
                if (event[i] == "7") {
                    this.onActiveMajor7 = 7;
                }
                if (event[i] == "8") {
                    this.onActiveMajor8 = 8;
                }
                if (event[i] == "9") {
                    this.onActiveMajor9 = 9;
                }
                if (event[i] == "10") {
                    this.onActiveMajor10 = 10;
                }
                if (event[i] == "11") {
                    this.onActiveMajor11 = 11;
                }
                if (event[i] == "12") {
                    this.onActiveMajor12 = 12;
                }
            }
        }
        if (item == "labKitch") {
            for (let i = 0; i <= event.length; i++) {
                if (event[i] == "1") {
                    this.onActiveMajor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMajor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMajor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMajor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMajor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMajor6 = 6;
                }
                if (event[i] == "7") {
                    this.onActiveMajor7 = 7;
                }
                if (event[i] == "8") {
                    this.onActiveMajor8 = 8;
                }
                if (event[i] == "9") {
                    this.onActiveMajor9 = 9;
                }
                if (event[i] == "10") {
                    this.onActiveMajor10 = 10;
                }
            }
        }
    }
    onSelectMinorRepairChange(event, item) {
        console.log(event, item);
        this.onActiveMinor1 = 0;
        this.onActiveMinor2 = 0;
        this.onActiveMinor3 = 0;
        this.onActiveMinor4 = 0;
        this.onActiveMinor5 = 0;
        this.onActiveMinor6 = 0;
        this.onActiveMinor7 = 0;
        this.onActiveMinor8 = 0;
        this.onActiveMinor9 = 0;
        this.onActiveMinor10 = 0;
        this.onActiveMinor11 = 0;
        this.onActiveMinor12 = 0;
        if (item == "all") {
            for (let i = 0; i <= event.length; i++) {
                console.log(event, 'All');
                if (event[i] == "1") {
                    this.onActiveMinor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMinor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMinor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMinor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMinor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMinor6 = 6;
                }
                if (event[i] == "7") {
                    this.onActiveMinor7 = 7;
                }
            }
            if (this.onActiveMinor1 == 1) {
                this.form.controls['DoorReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['DoorReplace'].updateValueAndValidity();
            }
            else {
                this.form.controls['DoorReplace'].setValue("");
                this.form.controls['DoorReplace'].setValidators(null);
                this.form.controls['DoorReplace'].updateValueAndValidity();
            }
            if (this.onActiveMinor2 == 2) {
                this.form.controls['WindowReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['WindowReplace'].updateValueAndValidity();
            }
            else {
                this.form.controls['WindowReplace'].setValue("");
                this.form.controls['WindowReplace'].setValidators(null);
                this.form.controls['WindowReplace'].updateValueAndValidity();
            }
            if (this.onActiveMinor3 == 3) {
                this.form.controls['DoorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['DoorRepair'].updateValueAndValidity();
            }
            else {
                this.form.controls['DoorRepair'].setValue("");
                this.form.controls['DoorRepair'].setValidators(null);
                this.form.controls['DoorRepair'].updateValueAndValidity();
            }
            if (this.onActiveMinor4 == 4) {
                this.form.controls['WindowRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['WindowRepair'].updateValueAndValidity();
            }
            else {
                this.form.controls['WindowRepair'].setValue("");
                this.form.controls['WindowRepair'].setValidators(null);
                this.form.controls['WindowRepair'].updateValueAndValidity();
            }
            if (this.onActiveMinor5 == 5) {
                this.form.controls['DoorRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
            }
            else {
                this.form.controls['DoorRepaint'].setValue("");
                this.form.controls['DoorRepaint'].setValidators(null);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
            }
            if (this.onActiveMinor6 == 6) {
                this.form.controls['WindowRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
                this.form.controls['WindowRepaint'].updateValueAndValidity();
            }
            else {
                this.form.controls['WindowRepaint'].setValue("");
                this.form.controls['WindowRepaint'].setValidators(null);
                this.form.controls['WindowRepaint'].updateValueAndValidity();
            }
        }
        if (item == "toilet") {
            console.log(this.onActiveMinor1, "T12324");
            for (let i = 0; i <= event.length; i++) {
                if (event[i] == "1") {
                    this.onActiveMinor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMinor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMinor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMinor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMinor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMinor6 = 0;
                }
                if (event[i] == "7") {
                    this.onActiveMinor7 = 7;
                }
            }
        }
        if (item == "3") {
            console.log(this.onActiveMinor1, "12324");
            for (let i = 0; i <= event.length; i++) {
                if (event[i] == "1") {
                    this.onActiveMinor1 = 1;
                }
                if (event[i] == "2") {
                    this.onActiveMinor2 = 2;
                }
                if (event[i] == "3") {
                    this.onActiveMinor3 = 3;
                }
                if (event[i] == "4") {
                    this.onActiveMinor4 = 4;
                }
                if (event[i] == "5") {
                    this.onActiveMinor5 = 5;
                }
                if (event[i] == "6") {
                    this.onActiveMinor6 = 6;
                }
                if (event[i] == "7") {
                    this.onActiveMinor7 = 7;
                }
            }
        }
        console.log(this.onActiveMinor1, "onActiveMinor1");
    }
    onChangeBuildingData(event, id) {
        if (id == 11 && this.form.value.RoomLength == 0) {
            this.form.controls['RoomLength'].setValue("");
        }
        if (id == 12 && this.form.value.RoomBreadth == 0) {
            this.form.controls['RoomBreadth'].setValue("");
        }
        if (id == 13 && this.form.value.RoomHeight == 0) {
            this.form.controls['RoomHeight'].setValue("");
        }
        if (id == 14 && this.form.value.DiningSeatingCapacity == 0) {
            this.form.controls['DiningSeatingCapacity'].setValue("");
        }
        this.form.controls['RoomLength'].updateValueAndValidity();
        this.form.controls['RoomBreadth'].updateValueAndValidity();
        this.form.controls['RoomHeight'].updateValueAndValidity();
        this.form.controls['DiningSeatingCapacity'].updateValueAndValidity();
        if (id == 1 && +this.form.value.LabComputerFunc > 25) {
            this.form.controls['LabComputerFunc'].setValue("");
            this.form.controls['LabComputerFunc'].updateValueAndValidity();
        }
        if (id == 2) {
            if (+this.form.value.LabComputerRepair == 0 || +this.form.value.LabComputerRepair > 25) {
                this.form.controls['LabComputerRepair'].setValue("");
                this.form.controls['LabComputerRepair'].updateValueAndValidity();
            }
        }
        if (id == 3 && +this.form.value.AuditoriumLights > 20) {
            this.form.controls['AuditoriumLights'].setValue("");
            this.form.controls['AuditoriumLights'].updateValueAndValidity();
        }
        if (id == 4 && +this.form.value.AuditoriumFans > 20) {
            this.form.controls['AuditoriumFans'].setValue("");
            this.form.controls['AuditoriumFans'].updateValueAndValidity();
        }
        if (id == 5 && +this.form.value.PipeNeed == 0) {
            this.form.controls['PipeNeed'].setValue("");
            this.form.controls['PipeNeed'].updateValueAndValidity();
        }
        if (id == 6 && +this.form.value.DrainageNeed == 0) {
            this.form.controls['DrainageNeed'].setValue("");
            this.form.controls['DrainageNeed'].updateValueAndValidity();
        }
        if (id == 7 && +this.form.value.AuditoriumStageArea == 0) {
            this.form.controls['AuditoriumStageArea'].setValue("");
            this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
        }
        if (id == 8 && +this.form.value.AuditoriumStageHeight == 0) {
            this.form.controls['AuditoriumStageHeight'].setValue("");
            this.form.controls['AuditoriumStageHeight'].updateValueAndValidity();
        }
        if (id == 9 && +this.form.value.AuditoriumStageAreaLevel == 0) {
            this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
        if (id == 10) {
            if (+this.form.value.AuditoriumLights > 20) {
                this.form.controls['AuditoriumLights'].setValue("");
            }
        }
        if (id == 11) {
            if (+this.form.value.AuditoriumFans > 20) {
                this.form.controls['AuditoriumFans'].setValue("");
            }
        }
        if (id == 20 && +this.form.value.Ewccubicles == 0) {
            this.form.controls['Ewccubicles'].setValue("");
        }
        if (id == 21 && +this.form.value.Iwccubicles == 0) {
            this.form.controls['IwccubiclesFunc'].setValue("");
        }
        if (id == 22 && +this.form.value.Ewccubicles == 0) {
            this.form.controls['Ewccubiclesfunc'].setValue("");
        }
        if (id == 23 && +this.form.value.Urinals == 0) {
            this.form.controls['Urinalsfunc'].setValue("");
        }
    }
    onChangeValueData(event, id) {
        if (id == 2 && +this.form.value.LabComputerRepair == 0 && +this.form.value.LabComputerRepair > 25) {
            this.form.controls['LabComputerRepair'].setValue("");
            this.form.controls['LabComputerRepair'].updateValueAndValidity();
        }
        if (id == 3 && +this.form.value.SmartRoomFunComp > 25) {
            this.form.controls['SmartRoomFunComp'].setValue("");
            this.form.controls['SmartRoomFunComp'].updateValueAndValidity();
        }
        if (id == 4 && +this.form.value.SmartRoomFunCompRepair > 25 && +this.form.value.SmartRoomFunCompRepair == 0) {
            this.form.controls['SmartRoomFunCompRepair'].setValue("");
            this.form.controls['SmartRoomFunCompRepair'].updateValueAndValidity();
        }
    }
    onSave() {
        debugger;
        console.log("onSave", this.form, this.RoomName, this.RoomUse);
        if (this.RoomUse != '' && this.RoomName != '' && this.form.valid) {
            this.submitted = false;
            this.status = 2;
            let query = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' +
                ' And BldgId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' +
                ' And RoomId = "' + this.roomid + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(data => {
                if (data.rows.length == 0) {
                    let insertRows = [];
                    insertRows.push([
                        "INSERT INTO newPrimaryRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                            null, this.form.value.IndxId, this.form.value.ToiletIndxId, this.schoolId, this.vistId, this.form.value.BldgIdxId, this.buildingId, this.form.value.FloorIdxId, this.floorId, this.roomid,
                            this.RoomUse, this.RoomName, this.form.value.RoomCondition, this.form.value.RepairType,
                            this.form.value.MajorRepair, this.form.value.MinorRepair, this.form.value.AreaPlastering,
                            this.form.value.AreaExtWw, this.form.value.AreaIntWw, this.form.value.AreaReplastering,
                            this.form.value.AreaReflooring, this.form.value.AreaPatchwork, this.form.value.DoorReplace,
                            this.form.value.WindowReplace, this.form.value.DoorRepair, this.form.value.WindowRepair,
                            this.form.value.DoorRepaint, this.form.value.WindowRepaint, this.form.value.LatrinReplace,
                            this.form.value.UrinalReplace, this.form.value.PipeNeed, this.form.value.DrainageNeed,
                            this.form.value.RoomLength, this.form.value.RoomBreadth, this.form.value.RoomHeight,
                            this.form.value.FloorType, this.form.value.BenchFunc, this.form.value.DeskFunc,
                            this.form.value.TubelightFunc, this.form.value.FansFunc, this.form.value.Cupboard,
                            this.form.value.RoomCeilingYn,
                            this.form.value.RoomCeilingPhoto, this.form.value.RoomCeilingPhotoName, this.form.value.RoomCeilingLatitude, this.form.value.RoomCeilingLongitude,
                            this.form.value.TeacherTableYn, this.form.value.TelevisionYn, this.form.value.TelevisionFuncYn,
                            this.form.value.SmartboardPrjtYn, this.form.value.SmartboardPrjtFuncYn, this.form.value.ClassRoomProjYn, this.form.value.ClassRoomProjFuncYn,
                            this.form.value.LabType, this.form.value.LabComputerYn, this.form.value.LabComputerFunc,
                            this.form.value.LabComputerRepair, this.form.value.LabWatersupplyYn, this.form.value.LabDrainage,
                            this.form.value.LabPhotoOne, this.form.value.LabPhotoOneName, this.form.value.LabLatitude, this.form.value.LabLongitude,
                            this.form.value.LibraryBooks, this.form.value.HmRoomTblYn, this.form.value.StaffrmUsedBy,
                            this.form.value.KitchenWtrSrc, this.form.value.KitchenLPGConYn, this.form.value.KitchenWtrSupply,
                            this.form.value.KitchenStorageYn, this.form.value.KitchenCleanYn,
                            this.form.value.DiningFunctionalYn, this.form.value.DiningSeatingCapacity, this.form.value.DiningSeatingWtrSupply,
                            this.form.value.NoonmealStorageClean,
                            this.form.value.StoreRoomPurpose, this.form.value.StrroomStorageClean,
                            this.form.value.ReasonEmpty,
                            this.form.value.ToiletType, this.form.value.ToiletWaterCon, this.form.value.ToiletWasteDis,
                            this.form.value.IwcToilet, this.form.value.Iwccubicles, this.form.value.IwccubiclesFunc, this.form.value.EwcToilet, this.form.value.Ewccubicles,
                            this.form.value.Ewccubiclesfunc, this.form.value.UrinalToilet, this.form.value.Urinals, this.form.value.Urinalsfunc,
                            this.form.value.ToiletTapsFunc, this.form.value.ToiletNeedTabs, this.form.value.ToiletBucket,
                            this.form.value.Toiletmugs, this.form.value.SizeSuitable, this.form.value.Roof,
                            this.form.value.SanitWasteDisp, this.form.value.HwFacility,
                            this.form.value.AuditoriumYn, this.form.value.AuditoriumStageYn, this.form.value.AuditoriumStageReqt,
                            this.form.value.AuditoriumStageArea, this.form.value.AuditoriumStageHeight, this.form.value.AuditoriumStageAreaLevel,
                            this.form.value.AuditoriumLights, this.form.value.AuditoriumFans,
                            this.form.value.AuditoriumPrjtYn, this.form.value.AuditoriumPrjtFunc,
                            this.form.value.SmartRoomFacilityYn, this.form.value.SmartRoomDeviceFunYn, this.form.value.SmartRoomComputersYn,
                            this.form.value.SmartRoomFunComp, this.form.value.SmartRoomFunCompRepair,
                            this.form.value.SmartRoomPhotoOne, this.form.value.SmartRoomPhotoOneName, this.form.value.SmartRoomLatitude, this.form.value.SmartRoomLongitude
                        ]
                    ]);
                    this.sqliteDB.bulkInsert(insertRows).then((result) => {
                        console.info("Room Details Stored Locally");
                        let id = parseInt(this.buildingId) - 100;
                        let floor = parseInt(this.floorId) - 1000;
                        let updateQuery = 'UPDATE sidsPrimaryRoomSaves SET Status = 2 , RoomName="' + this.RoomName + '"' +
                            ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' +
                            ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + this.roomid + '"';
                        let flooor = 'UPDATE sidsPrimaryFloorSaveDatas SET RoomCondition = 1 WHERE SclId = "' + this.schoolId + '"' +
                            ' And BuildIndx = "' + id + '"' +
                            ' And FloorId = "' + this.floorId + '"';
                        return this.sqliteDB.update(updateQuery).then(data => {
                            this.alertService.success('Saved Successfully');
                            let build = parseInt(this.buildingId) - 101;
                            let buildId = parseInt(this.buildingId) - 100;
                            let floor = parseInt(this.floorId) - 1001;
                            let floorId = parseInt(this.floorId) - 1000;
                            let room = parseInt(this.roomid) - 10001;
                            let roomId = parseInt(this.roomid) - 10000;
                            if (this.status == 3) {
                                this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor, expIdRoom: room, expRoomId: roomId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            if (this.status != 3) {
                                this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor, expIdRoom: room, expRoomId: roomId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            return this.sqliteDB.update(flooor).then(floooooor => { console.log("floooooor", floooooor); });
                        });
                    });
                }
                else {
                    console.log("newPrimaryRoomscommons", data);
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
            this.submitted = true;
            this.alertService.error("Please enter the valid data");
            // this.focusValidator();
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    onGoBack() {
        let build = parseInt(this.buildingId) - 101;
        let buildId = parseInt(this.buildingId) - 100;
        let floor = parseInt(this.floorId) - 1001;
        let floorId = parseInt(this.floorId) - 1000;
        let room = parseInt(this.roomid) - 10001;
        let roomId = parseInt(this.roomid) - 10000;
        if (this.status == 1) {
            this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor, expIdRoom: room, expRoomId: roomId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
        }
        if (this.status == 2) {
            this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor, expIdRoom: room, expRoomId: roomId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
        }
        if (this.status == 3) {
            this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', expIdBuild: build, expBuildId: buildId, expIdFloor: floorId, expFloorId: floor, expIdRoom: room, expRoomId: roomId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
        }
        // this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': this.status,expIdBuild: build, expBuildId: buildId ,expIdFloor: floor, expFloorId: floorId ,expIdRoom: room, expRoomId: roomId, 'visitstatus':this.visitstatus }, skipLocationChange: false });
        // this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '3', 'visitstatus':this.visitstatus }, skipLocationChange: false });
    }
    checkLocalDb() {
        debugger;
        let query = 'SELECT * FROM newPrimaryRoomscommons' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And BldgId = "' + this.buildingId + '"' +
            ' And FloorId = "' + this.floorId + '"' +
            ' And RoomId = "' + this.roomid + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                console.log(this.dataList, "dataList");
                this.RoomName = this.dataList[0].RoomName;
                this.RoomUse = this.dataList[0].RoomUse;
                setTimeout(() => {
                    this.form.patchValue({
                        "IndxId": this.dataList[0].IndxId,
                        "ToiletIndxId": this.dataList[0].ToiletIndxId,
                        "SchlId": this.schoolId,
                        "VistId": this.vistId,
                        "BldgIdxId": this.dataList[0].BldgIdxId,
                        "BldgId": this.buildingId,
                        "FloorIdxId": this.dataList[0].FloorIdxId,
                        "FloorId": this.floorId,
                        "RoomId": this.roomid,
                        "RoomCondition": this.dataList[0].RoomCondition,
                        "RepairType": this.dataList[0].RepairType,
                        "MajorRepair": this.dataList[0].MajorRepair ? Array.from(this.dataList[0].MajorRepair.split(",")) : "",
                        "MinorRepair": this.dataList[0].MinorRepair ? Array.from(this.dataList[0].MinorRepair.split(",")) : "",
                        "AreaReplastering": this.dataList[0].AreaReplastering,
                        "AreaExtWw": this.dataList[0].AreaExtWw,
                        "AreaIntWw": this.dataList[0].AreaIntWw,
                        "AreaPlastering": this.dataList[0].AreaPlastering,
                        "AreaReflooring": this.dataList[0].AreaReflooring,
                        "AreaPatchwork": this.dataList[0].AreaPatchwork,
                        "DoorReplace": this.dataList[0].DoorReplace,
                        "WindowReplace": this.dataList[0].WindowReplace,
                        "DoorRepair": this.dataList[0].DoorRepair,
                        "WindowRepair": this.dataList[0].WindowRepair,
                        "DoorRepaint": this.dataList[0].DoorRepaint,
                        "WindowRepaint": this.dataList[0].WindowRepaint,
                        "LatrinReplace": this.dataList[0].LatrinReplace,
                        "UrinalReplace": this.dataList[0].UrinalReplace,
                        "PipeNeed": this.dataList[0].PipeNeed,
                        "DrainageNeed": this.dataList[0].DrainageNeed,
                        "RoomLength": this.dataList[0].RoomLength,
                        "RoomBreadth": this.dataList[0].RoomBreadth,
                        "RoomHeight": this.dataList[0].RoomHeight,
                        "FloorType": this.dataList[0].FloorType ? Array.from(this.dataList[0].FloorType.split(",")) : this.dataList[0].FloorType,
                        // "FloorType": this.dataList[0].FloorType,
                        "BenchFunc": this.dataList[0].BenchFunc,
                        "DeskFunc": this.dataList[0].DeskFunc,
                        "TubelightFunc": this.dataList[0].TubelightFunc,
                        "FansFunc": this.dataList[0].FansFunc,
                        "Cupboard": this.dataList[0].Cupboard,
                        "RoomCeilingYn": this.dataList[0].RoomCeilingYn,
                        "RoomCeilingPhoto": this.dataList[0].RoomCeilingPhoto,
                        "RoomCeilingPhotoName": this.dataList[0].RoomCeilingPhotoName,
                        "RoomCeilingLatitude": this.dataList[0].RoomCeilingLatitude,
                        "RoomCeilingLongitude": this.dataList[0].RoomCeilingLongitude,
                        "TeacherTableYn": this.dataList[0].TeacherTableYn == "false" ? false : this.dataList[0].TeacherTableYn == "true" ? true : this.dataList[0].TeacherTableYn == true ? true : false,
                        "TelevisionYn": this.dataList[0].TelevisionYn == "false" ? false : this.dataList[0].TelevisionYn == "true" ? true : this.dataList[0].TelevisionYn == true ? true : false,
                        "TelevisionFuncYn": this.dataList[0].TelevisionFuncYn == "false" ? false : this.dataList[0].TelevisionFuncYn == "true" ? true : this.dataList[0].TelevisionFuncYn == true ? true : false,
                        "SmartboardPrjtYn": this.dataList[0].SmartboardPrjtYn == "false" ? false : this.dataList[0].SmartboardPrjtYn == "true" ? true : this.dataList[0].SmartboardPrjtYn == true ? true : false,
                        "SmartboardPrjtFuncYn": this.dataList[0].SmartboardPrjtFuncYn == "false" ? false : this.dataList[0].SmartboardPrjtFuncYn == "true" ? true : this.dataList[0].SmartboardPrjtFuncYn == true ? true : false,
                        "ClassRoomProjYn": this.dataList[0].ClassRoomProjYn == "false" ? false : this.dataList[0].ClassRoomProjYn == "true" ? true : this.dataList[0].ClassRoomProjYn == true ? true : false,
                        "ClassRoomProjFuncYn": this.dataList[0].ClassRoomProjFuncYn == "false" ? false : this.dataList[0].ClassRoomProjFuncYn == "true" ? true : this.dataList[0].ClassRoomProjFuncYn == true ? true : false,
                        "LabType": this.dataList[0].LabType,
                        "LabComputerYn": this.dataList[0].LabComputerYn == "false" ? false : this.dataList[0].LabComputerYn == "true" ? true : this.dataList[0].LabComputerYn == true ? true : false,
                        "LabComputerFunc": this.dataList[0].LabComputerFunc,
                        "LabComputerRepair": this.dataList[0].LabComputerRepair,
                        "LabWatersupplyYn": this.dataList[0].LabWatersupplyYn == "false" ? false : this.dataList[0].LabWatersupplyYn == "true" ? true : this.dataList[0].LabWatersupplyYn == true ? true : false,
                        "LabDrainage": this.dataList[0].LabDrainage == "false" ? false : this.dataList[0].LabDrainage == "true" ? true : this.dataList[0].LabDrainage == true ? true : false,
                        "LabPhotoOne": this.dataList[0].LabPhotoOne,
                        "LabPhotoOneName": this.dataList[0].LabPhotoOneName,
                        "LabLatitude": this.dataList[0].LabLatitude,
                        "LabLongitude": this.dataList[0].LabLongitude,
                        "LibraryBooks": this.dataList[0].LibraryBooks == "false" ? false : this.dataList[0].LibraryBooks == "true" ? true : this.dataList[0].LibraryBooks == true ? true : false,
                        "HmRoomTblYn": this.dataList[0].HmRoomTblYn == "false" ? false : this.dataList[0].HmRoomTblYn == "true" ? true : this.dataList[0].HmRoomTblYn == true ? true : false,
                        "StaffrmUsedBy": this.dataList[0].StaffrmUsedBy,
                        "KitchenWtrSrc": this.dataList[0].KitchenWtrSrc ? Array.from(this.dataList[0].KitchenWtrSrc.split(",")) : this.dataList[0].KitchenWtrSrc,
                        "KitchenLPGConYn": this.dataList[0].KitchenLPGConYn == "false" ? false : this.dataList[0].KitchenLPGConYn == "true" ? true : this.dataList[0].KitchenLPGConYn == true ? true : false,
                        "KitchenWtrSupply": this.dataList[0].KitchenWtrSupply == "false" ? false : this.dataList[0].KitchenWtrSupply == "true" ? true : this.dataList[0].KitchenWtrSupply == true ? true : false,
                        "KitchenStorageYn": this.dataList[0].KitchenStorageYn == "false" ? false : this.dataList[0].KitchenStorageYn == "true" ? true : this.dataList[0].KitchenStorageYn == true ? true : false,
                        "KitchenCleanYn": this.dataList[0].KitchenCleanYn == "false" ? false : this.dataList[0].KitchenCleanYn == "true" ? true : this.dataList[0].KitchenCleanYn == true ? true : false,
                        "DiningFunctionalYn": this.dataList[0].DiningFunctionalYn == "false" ? false : this.dataList[0].DiningFunctionalYn == "true" ? true : this.dataList[0].DiningFunctionalYn == true ? true : false,
                        "DiningSeatingCapacity": this.dataList[0].DiningSeatingCapacity,
                        "DiningSeatingWtrSupply": this.dataList[0].DiningSeatingWtrSupply == "false" ? false : this.dataList[0].DiningSeatingWtrSupply == "true" ? true : this.dataList[0].DiningSeatingWtrSupply == true ? true : false,
                        "NoonmealStorageClean": this.dataList[0].NoonmealStorageClean == "false" ? false : this.dataList[0].NoonmealStorageClean == "true" ? true : this.dataList[0].NoonmealStorageClean == true ? true : false,
                        "StoreRoomPurpose": this.dataList[0].StoreRoomPurpose ? Array.from(this.dataList[0].StoreRoomPurpose.split(",")) : "",
                        "StrroomStorageClean": this.dataList[0].StrroomStorageClean == "false" ? false : this.dataList[0].StrroomStorageClean == "true" ? true : this.dataList[0].StrroomStorageClean == true ? true : false,
                        "ReasonEmpty": this.dataList[0].ReasonEmpty,
                        "ToiletType": this.dataList[0].ToiletType,
                        "ToiletWaterCon": this.dataList[0].ToiletWaterCon,
                        "ToiletWasteDis": this.dataList[0].ToiletWasteDis,
                        "IwcToilet": this.dataList[0].IwcToilet == "false" ? false : this.dataList[0].IwcToilet == "true" ? true : this.dataList[0].IwcToilet == true ? true : false,
                        "Iwccubicles": this.dataList[0].Iwccubicles,
                        "IwccubiclesFunc": this.dataList[0].IwccubiclesFunc,
                        "EwcToilet": this.dataList[0].EwcToilet == "false" ? false : this.dataList[0].EwcToilet == "true" ? true : this.dataList[0].EwcToilet == true ? true : false,
                        "Ewccubicles": this.dataList[0].Ewccubicles,
                        "Ewccubiclesfunc": this.dataList[0].Ewccubiclesfunc,
                        "UrinalToilet": this.dataList[0].UrinalToilet == "false" ? false : this.dataList[0].UrinalToilet == "true" ? true : this.dataList[0].UrinalToilet == true ? true : false,
                        "Urinals": this.dataList[0].Urinals,
                        "Urinalsfunc": this.dataList[0].Urinalsfunc,
                        "ToiletTapsFunc": this.dataList[0].ToiletTapsFunc,
                        "ToiletNeedTabs": this.dataList[0].ToiletNeedTabs,
                        "ToiletBucket": this.dataList[0].ToiletBucket,
                        "Toiletmugs": this.dataList[0].Toiletmugs,
                        "SizeSuitable": this.dataList[0].SizeSuitable == "false" ? false : this.dataList[0].SizeSuitable == "true" ? true : this.dataList[0].SizeSuitable == true ? true : false,
                        "Roof": this.dataList[0].Roof,
                        "SanitWasteDisp": this.dataList[0].SanitWasteDisp,
                        "HwFacility": this.dataList[0].HwFacility == "false" ? false : this.dataList[0].HwFacility == "true" ? true : this.dataList[0].HwFacility == true ? true : false,
                        // "HwFacilityLocation": this.dataList[0].HwFacilityLocation,
                        // "HwFacilityType": this.dataList[0].HwFacilityType,
                        // "PipingNeed": this.dataList[0].PipingNeed == "false" ? false : this.dataList[0].PipingNeed == "true" ? true : this.dataList[0].PipingNeed == true ? true : false,
                        // "PipeLengthNeed": this.dataList[0].PipeLengthNeed,
                        // "TapsFunc": this.dataList[0].TapsFunc,
                        // "TapsReq":ToiletType this.dataList[0].TapsReq,
                        // "StorageFacilityClosed": this.dataList[0].StorageFacilityClosed == "false" ? false : this.dataList[0].StorageFacilityClosed == "true" ? true : this.dataList[0].StorageFacilityClosed == true ? true : false,
                        "AuditoriumYn": this.dataList[0].AuditoriumYn == "false" ? false : this.dataList[0].AuditoriumYn == "true" ? true : this.dataList[0].AuditoriumYn == true ? true : false,
                        "AuditoriumStageReqt": this.dataList[0].AuditoriumStageReqt,
                        "AuditoriumStageArea": this.dataList[0].AuditoriumStageArea,
                        "AuditoriumStageHeight": this.dataList[0].AuditoriumStageHeight,
                        "AuditoriumStageAreaLevel": this.dataList[0].AuditoriumStageAreaLevel,
                        "AuditoriumLights": this.dataList[0].AuditoriumLights,
                        "AuditoriumFans": this.dataList[0].AuditoriumFans,
                        "AuditoriumPrjtYn": this.dataList[0].AuditoriumPrjtYn == "false" ? false : this.dataList[0].AuditoriumPrjtYn == "true" ? true : this.dataList[0].AuditoriumPrjtYn == true ? true : false,
                        "AuditoriumPrjtFunc": this.dataList[0].AuditoriumPrjtFunc == "false" ? false : this.dataList[0].AuditoriumPrjtFunc == "true" ? true : this.dataList[0].AuditoriumPrjtFunc == true ? true : false,
                        "SmartRoomFacilityYn": this.dataList[0].SmartRoomFacilityYn == "false" ? false : this.dataList[0].SmartRoomFacilityYn == "true" ? true : this.dataList[0].SmartRoomFacilityYn == true ? true : false,
                        "SmartRoomDeviceFunYn": this.dataList[0].SmartRoomDeviceFunYn == "false" ? false : this.dataList[0].SmartRoomDeviceFunYn == "true" ? true : this.dataList[0].SmartRoomDeviceFunYn == true ? true : false,
                        "SmartRoomComputersYn": this.dataList[0].SmartRoomComputersYn == "false" ? false : this.dataList[0].SmartRoomComputersYn == "true" ? true : this.dataList[0].SmartRoomComputersYn == true ? true : false,
                        "SmartRoomFunComp": this.dataList[0].SmartRoomFunComp,
                        "SmartRoomFunCompRepair": this.dataList[0].SmartRoomFunCompRepair,
                        "SmartRoomPhotoOne": this.dataList[0].SmartRoomPhotoOne,
                        "SmartRoomPhotoOneName": this.dataList[0].SmartRoomPhotoOneName,
                        "SmartRoomLatitude": this.dataList[0].SmartRoomLatitude,
                        "SmartRoomLongitude": this.dataList[0].SmartRoomLongitude,
                    });
                    if (this.dataList[0].RoomUse != '10' && this.dataList[0].RoomUse != 2 && this.dataList[0].RoomUse != 7) {
                        if (this.dataList[0].MajorRepair) {
                            this.onSelectMajorRepairChange(this.dataList[0].MajorRepair, "all");
                        }
                        if (this.dataList[0].MinorRepair) {
                            this.onSelectMinorRepairChange(this.dataList[0].MinorRepair, "all");
                        }
                    }
                    if (this.dataList[0].RoomUse == '10') {
                        if (this.dataList[0].MajorRepair) {
                            this.onSelectMajorRepairChange(this.dataList[0].MajorRepair, "toilet");
                        }
                        if (this.dataList[0].MinorRepair) {
                            this.onSelectMinorRepairChange(this.dataList[0].MinorRepair, "toilet");
                        }
                    }
                    if (this.dataList[0].RoomUse == 2 || this.dataList[0].RoomUse == 7) {
                        if (this.dataList[0].MajorRepair) {
                            this.onSelectMajorRepairChange(this.dataList[0].MajorRepair, "labKitch");
                        }
                        if (this.dataList[0].MinorRepair) {
                            this.onSelectMinorRepairChange(this.dataList[0].MinorRepair, "labKitch");
                        }
                    }
                }, 1000);
            }
            else {
                this.dataList = [];
                console.log("local data");
                this.checkLocalDbBuild();
                this.checkLocalDbFloor();
            }
        });
    }
    checkLocalDbBuild() {
        let query = 'SELECT * FROM sidsPrimaryBuildingQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                // this.dataActive =true;
                // this.dataTrue = true
                this.dataListBuild = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListBuild.push(data.rows.item(i));
                }
                console.log("Room Build Data", this.dataListBuild);
                this.form.patchValue({
                    "BldgIdxId": this.dataListBuild[0].BuildingIndex
                });
            }
        });
    }
    checkLocalDbFloor() {
        let build = 100 + parseInt(this.buildingId);
        let floor = 1000 + parseInt(this.floorId);
        let query = 'SELECT * FROM sidsPrimaryFloorQuestion' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And BuildingId = "' + this.buildingId + '"' +
            ' And FloorId = "' + this.floorId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataListFloor = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListFloor.push(data.rows.item(i));
                }
                console.log("Room Floor Data", this.dataListFloor);
                this.form.patchValue({
                    "FloorIdxId": this.dataListFloor[0].FloorIndx
                });
            }
        });
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
            this.form.controls['AuditoriumStageArea'].setValue("");
            this.form.controls['AuditoriumStageArea'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['AuditoriumStageArea'].updateValueAndValidity();
            this.form.controls['AuditoriumStageHeight'].setValue("");
            this.form.controls['AuditoriumStageHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
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
            this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            this.form.controls['AuditoriumStageAreaLevel'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
        else {
            this.form.controls['AuditoriumStageAreaLevel'].setValue("");
            this.form.controls['AuditoriumStageAreaLevel'].setValidators(null);
            this.form.controls['AuditoriumStageAreaLevel'].updateValueAndValidity();
        }
    }
    onToggleChange(event, id) {
        if (id == 1 && !this.form.value.ClassRoomProjYn) {
            this.form.controls['ClassRoomProjFuncYn'].setValue(false);
            this.form.controls['ClassRoomProjFuncYn'].updateValueAndValidity();
        }
        if (id == 2 && !this.form.value.SmartboardPrjtYn) {
            this.form.controls['SmartboardPrjtFuncYn'].setValue(false);
            this.form.controls['SmartboardPrjtFuncYn'].updateValueAndValidity();
        }
        if (id == 3 && !this.form.value.TelevisionYn) {
            this.form.controls['TelevisionFuncYn'].setValue(false);
            this.form.controls['TelevisionFuncYn'].updateValueAndValidity();
        }
        if (id == 4 && this.form.value.IwcToilet) {
            // this.form.controls['Iwccubicles'].setValue("");
            this.form.controls['Iwccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.controls['Iwccubicles'].updateValueAndValidity();
            this.form.controls['IwccubiclesFunc'].setValue("");
            this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
        }
        else if (id == 4 && !this.form.value.IwcToilet) {
            this.form.controls['Iwccubicles'].setValue("");
            this.form.controls['IwccubiclesFunc'].setValue("");
            this.form.controls['Iwccubicles'].setValidators(null);
            this.form.controls['IwccubiclesFunc'].setValidators(null);
            this.form.controls['Iwccubicles'].updateValueAndValidity();
            this.form.controls['IwccubiclesFunc'].updateValueAndValidity();
        }
        if (id == 5 && this.form.value.EwcToilet) {
            // this.form.controls['Ewccubicles'].setValue("");
            if (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3
                || this.form.value.ToiletType == 7 || this.form.value.ToiletType == 8 || this.form.value.ToiletType == 9) {
                this.form.controls['Ewccubicles'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            }
            else {
                this.form.controls['Ewccubicles'].setValidators(null);
            }
            this.form.controls['Ewccubicles'].updateValueAndValidity();
            this.form.controls['Ewccubiclesfunc'].setValue("");
            this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
        }
        else if (id == 5 && !this.form.value.EwcToilet) {
            this.form.controls['Ewccubicles'].setValue("");
            this.form.controls['Ewccubiclesfunc'].setValue("");
            this.form.controls['Ewccubicles'].setValidators(null);
            this.form.controls['Ewccubicles'].updateValueAndValidity();
            this.form.controls['Ewccubiclesfunc'].updateValueAndValidity();
        }
        if (id == 6 && this.form.value.UrinalToilet) {
            // this.form.controls['Urinals'].setValue("");
            if (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7) {
                this.form.controls['Urinals'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            }
            else {
                this.form.controls['Urinals'].setValidators(null);
            }
            this.form.controls['Urinals'].updateValueAndValidity();
            this.form.controls['Urinalsfunc'].setValue("");
            this.form.controls['Urinalsfunc'].updateValueAndValidity();
        }
        else if (id == 6 && !this.form.value.UrinalToilet) {
            this.form.controls['Urinals'].setValue("");
            this.form.controls['Urinalsfunc'].setValue("");
            this.form.controls['Urinals'].setValidators(null);
            this.form.controls['Urinals'].updateValueAndValidity();
            this.form.controls['Urinalsfunc'].updateValueAndValidity();
        }
        if (id == 7 && this.form.value.KitchenWtrSupply) {
            this.form.controls['KitchenWtrSrc'].setValue("");
            this.form.controls['KitchenWtrSrc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['KitchenWtrSrc'].setValue("");
            this.form.controls['KitchenWtrSrc'].setValidators(null);
        }
        this.form.controls['KitchenWtrSrc'].updateValueAndValidity();
    }
    ionViewWillLeave() {
        this.RoomName = "";
        this.RoomUse = "";
        this.tabsData = 0;
        this.submitted = false;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_5__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 3145728) {
                        if (i == 1) {
                            this.form.controls['LabPhotoOne'].setValue(base64string);
                            this.form.controls['LabPhotoOneName'].setValue(splitedImage[0] + '.png');
                            this.getLatLong(1);
                        }
                        if (i == 2) {
                            this.form.controls['SmartRoomPhotoOne'].setValue(base64string);
                            this.form.controls['SmartRoomPhotoOneName'].setValue(splitedImage[0] + '.png');
                            this.getLatLong(2);
                        }
                        if (i == 3) {
                            this.form.controls['RoomCeilingPhoto'].setValue(base64string);
                            this.form.controls['RoomCeilingPhotoName'].setValue(splitedImage[0] + '.png');
                            this.getLatLong(3);
                        }
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
    uploadImgDelete(id) {
        if (id == 1) {
            this.form.controls['LabPhotoOne'].setValue('');
            this.form.controls['LabPhotoOneName'].setValue('');
            this.form.get('LabPhotoOne').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.get('LabPhotoOne').updateValueAndValidity();
            this.form.controls['LabLatitude'].setValue(null);
            this.form.controls['LabLongitude'].setValue(null);
            this.form.get('LabLatitude').updateValueAndValidity();
            this.form.get('LabLongitude').updateValueAndValidity();
        }
        if (id == 2) {
            this.form.controls['SmartRoomPhotoOne'].setValue('');
            this.form.controls['SmartRoomPhotoOneName'].setValue('');
            this.form.get('SmartRoomPhotoOne').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.get('SmartRoomPhotoOne').updateValueAndValidity();
            this.form.controls['SmartRoomLatitude'].setValue(null);
            this.form.controls['SmartRoomLongitude'].setValue(null);
            this.form.get('SmartRoomLatitude').updateValueAndValidity();
            this.form.get('SmartRoomLongitude').updateValueAndValidity();
        }
        if (id == 3) {
            this.form.controls['RoomCeilingPhoto'].setValue('');
            this.form.controls['RoomCeilingPhotoName'].setValue('');
            this.form.get('RoomCeilingPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            this.form.get('RoomCeilingPhoto').updateValueAndValidity();
            this.form.controls['RoomCeilingLatitude'].setValue(null);
            this.form.controls['RoomCeilingLongitude'].setValue(null);
            this.form.get('RoomCeilingLatitude').updateValueAndValidity();
            this.form.get('RoomCeilingLongitude').updateValueAndValidity();
        }
        setTimeout(() => {
            this.getLatLong(id);
        }, 1000);
    }
    getLatLong(id) {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            if (id == 1) {
                this.form.controls['LabLatitude'].setValue(this.locationCordinates.latitude);
                this.form.controls['LabLongitude'].setValue(this.locationCordinates.longitude);
                this.form.get('LabLatitude').updateValueAndValidity();
                this.form.get('LabLongitude').updateValueAndValidity();
            }
            if (id == 2) {
                this.form.controls['SmartRoomLatitude'].setValue(this.locationCordinates.latitude);
                this.form.controls['SmartRoomLongitude'].setValue(this.locationCordinates.longitude);
                this.form.get('SmartRoomLatitude').updateValueAndValidity();
                this.form.get('SmartRoomLongitude').updateValueAndValidity();
            }
            if (id == 3) {
                this.form.controls['RoomCeilingLatitude'].setValue(this.locationCordinates.latitude);
                this.form.controls['RoomCeilingLongitude'].setValue(this.locationCordinates.longitude);
                this.form.get('RoomCeilingLatitude').updateValueAndValidity();
                this.form.get('RoomCeilingLongitude').updateValueAndValidity();
            }
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alertService.alertToTurnOnPermission('Location', 'Location');
            }
            // console.log('Error getting location', error);
        });
    }
    // Room seling condition / Image by Priya
    ceilingChange(event) {
        debugger;
        if (this.form.value.RoomCeilingYn == 2) {
            this.form.controls['RoomCeilingPhoto'].setValue('');
            this.form.get('RoomCeilingPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        }
        else {
            this.form.controls['RoomCeilingPhoto'].setValue('');
            this.form.get('RoomCeilingPhoto').setValidators(null);
        }
        this.form.get('RoomCeilingPhoto').updateValueAndValidity();
    }
};
PrimaryRoomQuestionsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__.AndroidPermissions },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation }
];
PrimaryRoomQuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-primary-room-questions',
        template: _raw_loader_primary_room_questions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_primary_room_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrimaryRoomQuestionsPage);



/***/ }),

/***/ 81660:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-building/primary-room-questions/primary-room-questions.page.scss ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.commonMenu {\n  margin-bottom: 10px;\n  border: 1px solid #EAEAEA;\n  border-radius: 15px;\n  background: var(--ion-color-primary);\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.rowColr {\n  background-color: #E8F2FF;\n}\n\n.btn-present {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 35px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 18px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.left-text {\n  text-align: left;\n}\n\n.normal {\n  border-bottom: 1px solid;\n}\n\n.error {\n  border-bottom: 1px solid;\n  opacity: 1;\n  border: 1px solid red;\n  box-shadow: 0px 1px 5px 2px red;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktcm9vbS1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0FBQ0o7O0FBRUU7RUFFRSxpQkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFHQSwyQkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQUEsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTs7O0VBR0UsZUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUU7O0VBRUUscUJBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBT0UsU0FBQTs7QUFHQSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFQSjs7QUFVRTtFQUNFLGNBQUE7QUFQSjs7QUFXRSxPQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7QUFUSjs7QUFhRSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFYSjs7QUFjRTtFQUNFLGNBQUE7QUFYSjs7QUFlRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFiSjs7QUFnQkU7RUFDRSxjQUFBO0FBYko7O0FBaUJFLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWZKOztBQWtCRTtFQUNFLGNBQUE7QUFmSjs7QUFtQkUsUUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBakJKOztBQW9CRTtFQUNFLGNBQUE7QUFqQko7O0FBcUJFLE9BQUE7O0FBTUE7RUFDRSxXQUFBO0FBdkJKOztBQTBCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBdkJKOztFQXlCRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBdEJKOztFQXdCRTs7SUFFRSxlQUFBO0lBQ0EsbUJBQUE7RUFyQko7QUFDRjs7QUF3QkU7RUFDRSx3Q0FBQTtFQUNBLDRDQUFBO0FBdEJKOztBQThCRTtFQUNFLFVBQUE7QUEzQko7O0FBOEJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQW9DRTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSx1REFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFqQ0o7O0FBd0NFO0VBQ0UsMEJBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFyQ047O0FBd0NFO0VBQ0csb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyQ0w7O0FBd0NJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQXJDUjs7QUF3Q0U7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFyQ0o7O0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQ047O0FBdUNFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQUEsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwQ0o7O0FBc0NFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbkNKOztBQXFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBbENKOztBQXFDRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBbENKOztBQXFDRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFsQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBbUNFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWhDSjs7QUFrQ0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBL0JKOztBQWlDRTtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE5Qko7O0FBaUNFO0VBQ0UseUJBQUE7QUE5Qko7O0FBZ0NFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQTlCTjs7QUFnQ0U7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQTlCTjs7QUFpQ0U7RUFDRSxnQkFBQTtBQTlCSjs7QUFpQ0U7RUFDRSx3QkFBQTtBQTlCSjs7QUFpQ0U7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBOUJKOztBQWlDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE5Qko7O0FBZ0NFO0VBQ0UsYUFBQTtBQTdCSiIsImZpbGUiOiJwcmltYXJ5LXJvb20tcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Cb3R0b20wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW5Ub3AwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW5Ub3A1IHtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY2QtY29udGFpbmVyIHtcclxuICAgIC8vIHdpZHRoOiA5MyU7XHJcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2QtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZVRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmVJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLWF1dGhvciB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgI2NkLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xyXG4gICAgLyogdGhpcyBpcyB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDJlbSAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1pY29uIGkge1xyXG4gICAgY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1waWN0dXJlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1waWN0dXJlIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgICBjb2xvcjogIzMwM2U0OTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkNPTE9SUyovXHJcbiAgXHJcbiAgXHJcbiAgLypQT1NJVElWRSovXHJcbiAgXHJcbiAgLnBvc2l0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc2l0aXZlIGkge1xyXG4gICAgY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQ0FMTSovXHJcbiAgXHJcbiAgLmNhbG0ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDNjZWU2O1xyXG4gIH1cclxuICBcclxuICAuY2FsbSBpIHtcclxuICAgIGNvbG9yOiAjNDNjZWU2O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkJBTEFOQ0VEKi9cclxuICBcclxuICAuYmFsYW5jZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjZjYzMzO1xyXG4gIH1cclxuICBcclxuICAuYmFsYW5jZWQgaSB7XHJcbiAgICBjb2xvcjogIzY2Y2MzMztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypFTkVSR0laRUQqL1xyXG4gIFxyXG4gIC5lbmVyZ2l6ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjBiODQwO1xyXG4gIH1cclxuICBcclxuICAuZW5lcmdpemVkIGkge1xyXG4gICAgY29sb3I6ICNmMGI4NDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQVNTRVJUSVZFKi9cclxuICBcclxuICAuYXNzZXJ0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2VmNGUzYTtcclxuICB9XHJcbiAgXHJcbiAgLmFzc2VydGl2ZSBpIHtcclxuICAgIGNvbG9yOiAjZWY0ZTNhO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKlJPWUFMKi9cclxuICBcclxuICAucm95YWwge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE2ZGU5O1xyXG4gIH1cclxuICBcclxuICAucm95YWwgaSB7XHJcbiAgICBjb2xvcjogIzhhNmRlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypEQVJLKi9cclxuICBcclxuICAvLyAuZGFyayB7XHJcbiAgLy8gICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5kYXJrIGkge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLFxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmRhcnkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24tbGFiZWwge1xyXG4gICAgLy8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LXdlaWdodDogNTAwO1xyXG4gIC8vIH1cclxuICBcclxuICAudmFsaWQtY2xyIHtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgXHJcbiAgLnF1ZXMtdHh0IHtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0W3R5cGU9XCJkYXRlXCJdOm5vdCguaGFzLXZhbHVlKTpiZWZvcmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgfSBcclxuICBcclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206MS4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLXNlbGVjdCB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmlucHV0LWNsciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCkgMXB4IHNvbGlkOztcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWlucHV0IHtcclxuICAvLyAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbm8tcGFkZGluZ3tcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tbm8tcGFkZGluZy1xdWVzdGlvbntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICBcclxuICAuc2VsZWN0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gICAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hZGQge1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlOyBcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItc2F2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG4gIH1cclxuICAuZm9vdGVyLW5vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMyMzE1O1xyXG4gICAgcGFkZGluZzogMTBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICB9XHJcbiAgLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4ZjI2O1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuICBcclxuICAuc2lkc1ZpZXd7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZGFyayB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICB9XHJcbiAgXHJcbiAgLnF1ZXNDb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y0RkE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ0NoZWNre1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4QjY3QjM7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b2dnbGV7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxuICB9XHJcbiAgLmNvbW1vbk1lbnV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQUVBRUE7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFkZEJ1dHRvbntcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnJvd0NvbHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjJGRjtcclxuICB9XHJcbiAgLmJ0bi1wcmVzZW50XHJcbiAge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzRDQUY1MCFpbXBvcnRhbnQ7IFxyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1hYnNlbnRcclxuICB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiNmODIzMzkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICBcclxuICB9XHJcbiAgLmxlZnQtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3JtYWx7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAycHggcmVkO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 2531:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-room-questions/primary-room-questions.page.html ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onGoBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Room Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; margin: 0px; align-items: center;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Room General Questions</ion-label>\r\n    </ion-card>\r\n\r\n    <ion-row style=\"background-color: aliceblue; margin: 10px auto;\">\r\n      <ion-col size=\"12\" style=\"padding-left: 10px; padding-top: 10px; color: rgb(165, 7, 7);font-weight: bold;\">\r\n        <ion-label>Notes : </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"padding-left: 10px;padding-bottom: 10px;color: rgb(139, 103, 179);\">\r\n        <ion-label style=\"font-size: 16px;\">Details of the room can be saved only after entering all the details\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row >\r\n    \r\n    <ion-row style=\"width: 100%; margin-bottom: 10px;\">\r\n      <ion-col size=\"12\" class=\"quesColor\">\r\n        <ion-label> What is the room used for?<span style=\"color:red\">*</span></ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n        (ionChange)=\"onSelectedRoom()\" style=\"max-width: 100% !important;\" [(ngModel)]=\"RoomUse\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair1\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row><p class=\"error-message\"*ngIf=\"!RoomUse && submitted\">Field is required</p></ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row style=\"width: 100%; margin-bottom: 10px;\">\r\n      <ion-col size=\"12\" class=\"quesColor\">\r\n        <ion-label> Enter the Room Name<span style=\"color:red\">*</span></ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n        <ion-input placeholder=\"Please Enter your answer\" type=\"text\"\r\n        [(ngModel)]=\"RoomName\" style=\"border-bottom: 1px solid;\" maxlength=\"15\">\r\n      </ion-input>\r\n        <ion-row><p class=\"error-message\"*ngIf=\"!RoomName && submitted\">Field is required</p></ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div class=\"commonMenu\" (click)=\"getTabs(1)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Condition</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 1\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 1\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    <div *ngIf=\"tabsData == 1\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                1\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Condition of the room<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RoomCondition\"\r\n                      style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 1)\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair72\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomCondition'].hasError('required') && (form.controls['RoomCondition'].dirty || form.controls['RoomCondition'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\" >\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Nature of Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RepairType\"\r\n                      style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 2)\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question73\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RepairType'].hasError('required') && (form.controls['RepairType'].dirty || form.controls['RepairType'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <!-- all room major -------------------------------------------------------------------------------------->\r\n  \r\n            <div ng-repeat=\"activity in timeline\"\r\n              *ngIf=\"this.form.value.RoomCondition == 2 && (this.form.value.RepairType == 1 || this.form.value.RepairType == 3)\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2A\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of Major Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse != '10' && this.RoomUse != 2 && this.RoomUse != 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'all')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question74\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\" *ngIf=\"(this.RoomUse == '10')\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'toilet')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question76\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse == 2 || this.RoomUse == 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MajorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMajorRepairChange($event.target.value,'labKitch')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair78\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MajorRepair'].hasError('required') && (form.controls['MajorRepair'].dirty || form.controls['MajorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\"\r\n              *ngIf=\"this.form.value.RoomCondition == 2 && (this.form.value.RepairType == 2 || this.form.value.RepairType == 3)\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2B\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of Minor Repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse != '10' && this.RoomUse != 2 && this.RoomUse != 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'all')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question75\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\" *ngIf=\"this.RoomUse == '10'\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'toilet')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question77\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\"\r\n                    *ngIf=\"(this.RoomUse == 2 || this.RoomUse == 7)\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"MinorRepair\"\r\n                      multiple=\"true\" style=\"max-width: 100% !important;\"\r\n                      (ionChange)=\"onSelectMinorRepairChange($event.target.value,'3')\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair79\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['MinorRepair'].hasError('required') && (form.controls['MinorRepair'].dirty || form.controls['MinorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n  \r\n  \r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <!-- sub questions ----------------------------------------------------------------------------------------------->\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor1 == 1 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of ceiling plastering required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaReplastering\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaReplastering'].hasError('required') && (form.controls['AreaReplastering'].dirty || form.controls['AreaReplastering'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaReplastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor2 == 2 && form.value.RoomCondition == 2\">\r\n  \r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of exterior whitewashing required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaExtWw\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaExtWw'].hasError('required') && (form.controls['AreaExtWw'].dirty || form.controls['AreaExtWw'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaExtWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor3 == 3 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of interior whitewashing required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaIntWw\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaIntWw'].hasError('required') && (form.controls['AreaIntWw'].dirty || form.controls['AreaIntWw'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaExtWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor4 == 4 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of replastering required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaPlastering\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaPlastering'].hasError('required') && (form.controls['AreaPlastering'].dirty || form.controls['AreaPlastering'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPlastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor6 == 6) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of reflooring required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input  pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaReflooring\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaReflooring'].hasError('required') && (form.controls['AreaReflooring'].dirty || form.controls['AreaReflooring'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPlastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMajor7 == 7 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of floor patchwork required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\"  placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"AreaPatchwork\" style=\"border-bottom: 1px solid;\" maxlength=\"6\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['AreaPatchwork'].hasError('required') && (form.controls['AreaPatchwork'].dirty || form.controls['AreaPatchwork'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.AreaPatchwork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor1 == 1 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of doors to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorReplace'].hasError('required') && (form.controls['DoorReplace'].dirty || form.controls['DoorReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor2 == 2 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of windows to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowReplace'].hasError('required') && (form.controls['WindowReplace'].dirty || form.controls['WindowReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.WindowReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"onActiveMinor3 == 3 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of doors requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorRepair'].hasError('required') && (form.controls['DoorRepair'].dirty || form.controls['DoorRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepair.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"onActiveMinor4 == 4 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of windows requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowRepair'].hasError('required') && (form.controls['WindowRepair'].dirty || form.controls['WindowRepair'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepair.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor5 == 5 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of Doors Requiring Repainting (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DoorRepaint\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DoorRepaint'].hasError('required') && (form.controls['DoorRepaint'].dirty || form.controls['DoorRepaint'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DoorRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"onActiveMinor6 == 6 && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Area of Windows Requiring Repainting (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"WindowRepaint\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['WindowRepaint'].hasError('required') && (form.controls['WindowRepaint'].dirty || form.controls['WindowRepaint'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.WindowRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor8 == 8 && (this.RoomUse == '10')) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of Latrines to be Replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"LatrinReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                     >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['LatrinReplace'].hasError('required') && (form.controls['LatrinReplace'].dirty || form.controls['LatrinReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.LatrinReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"(onActiveMajor9 == 9 && (this.RoomUse == 10)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> No. of Urinals to be Replaced<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"UrinalReplace\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                      >\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['UrinalReplace'].hasError('required') && (form.controls['UrinalReplace'].dirty || form.controls['UrinalReplace'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.UrinalReplace.errors?.pattern\">Please enter\r\n                        numbers only\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"(onActiveMajor10 == '10' && this.RoomUse == 10) || (onActiveMajor9 == 9 && (this.RoomUse == 2 || this.RoomUse == 7)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of Pipe needed (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipeNeed\"\r\n                      style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 5)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['PipeNeed'].hasError('required') && (form.controls['PipeNeed'].dirty || form.controls['PipeNeed'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.PipeNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n  \r\n          <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"(onActiveMajor11 == '11' && this.RoomUse == '10') || (onActiveMajor9 == 9 && (this.RoomUse == 2 || this.RoomUse == 7)) && form.value.RoomCondition == 2\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  #\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of drainage line to be repaired (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"DrainageNeed\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 6)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['DrainageNeed'].hasError('required') && (form.controls['DrainageNeed'].dirty || form.controls['DrainageNeed'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.DrainageNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n  \r\n          </section>\r\n\r\n          <!-- <ion-row (click)=\"onSave()\">\r\n            <ion-col size=\"4\" class=\"addButton\">\r\n              <p style=\"text-align: center; margin:5px\">Save</p>\r\n            </ion-col>\r\n          </ion-row> -->\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    \r\n    <div class=\"commonMenu\" (click)=\"getTabs(2)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Basic Details</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 2\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 2\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    <div *ngIf=\"tabsData == 2\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n        <div>\r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  1\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Length of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomLength\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 11)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomLength'].hasError('required') && (form.controls['RoomLength'].dirty || form.controls['RoomLength'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  2\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Breadth of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomBreadth\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 12)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomBreadth'].hasError('required') && (form.controls['RoomBreadth'].dirty || form.controls['RoomBreadth'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomBreadth.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  3\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Height of the room (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                      formControlName=\"RoomHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"4\"\r\n                      (ionChange)=\"onChangeBuildingData($event.detail.value, 13)\">\r\n                    </ion-input>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['RoomHeight'].hasError('required') && (form.controls['RoomHeight'].dirty || form.controls['RoomBreadth'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <p class=\"error-message\" *ngIf=\"form.controls.RoomHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                      </p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n    \r\n          <section id=\"cd-timeline\" class=\"cd-container\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                  4\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Type of flooring in the room<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n    \r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorType\"\r\n                      style=\"max-width: 100% !important;\" multiple=\"true\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair69\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <ion-row>\r\n                      <p class=\"error-message\"\r\n                        *ngIf=\"form.controls['FloorType'].hasError('required') && (form.controls['FloorType'].dirty || form.controls['FloorType'].touched)\">\r\n                        Field is required</p>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-row size=\"12\" style=\"padding:10px; margin: 10px auto; background: #f3f4f9; width: 100%;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Material</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <div class=\"font-wB font-14\" style=\"text-align: center;\">Functional</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 5 && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Benches</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['BenchFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"BenchFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 5  && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Desks</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['DeskFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"DeskFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Tubelights</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['TubelightFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"TubelightFunc\" style=\"border-bottom: 1px solid;\" class=\"left-text\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 12 && RoomUse != 14 && RoomUse != 8\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Fans</div> \r\n                  </ion-col>\r\n                  <ion-col size=\"8\" class=\"text-center\" >\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['FansFunc'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"FansFunc\"  style=\"border-bottom: 1px solid;\" class=\"left-text\" ></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n              <ion-col *ngIf=\"RoomUse != 10 && RoomUse != 7 && RoomUse != 11 && RoomUse != 14\" size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <ion-col size=\"4\">\r\n                  <div class=\"font-14\">Cupboards</div> \r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['Cupboard'].hasError('required') ? 'error' : 'normal'\" maxlength=\"2\" formControlName=\"Cupboard\" class=\"left-text\" ></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Condition of the ceiling <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RoomCeilingYn\"\r\n                    style=\"max-width: 100% !important;\"  (ionChange)=\"ceilingChange($event.target.value)\">\r\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of roomselingyn\"> {{item.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['RoomCeilingYn'].hasError('required') && (form.controls['RoomCeilingYn'].dirty || form.controls['RoomCeilingYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.form.value.RoomCeilingYn == 2\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>Please upload the image of the room ceiling (only if it is in bad condition) \r\n                    <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <div *ngIf=\"!form.value.RoomCeilingPhoto \" style=\"margin-top: 10px;\" (click)=\"openCamera(3)\">\r\n                    <ion-col size=\"1\" style=\"text-align: center;\">\r\n                      <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                        Click to Upload Image\r\n                      </label>\r\n                    </ion-col>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"form.value.RoomCeilingPhoto\">\r\n                    <ion-col size=\"12\" style=\"float: left;\">\r\n                      <ion-button (click)=\"uploadImgDelete(3)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                      <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.RoomCeilingPhoto}}\"></div>\r\n                    </ion-col>\r\n                  </div>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['RoomCeilingPhoto'].hasError('required') && (form.controls['RoomCeilingPhoto'].dirty || form.controls['RoomCeilingPhoto'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n     \r\n\r\n        </div>\r\n        <!-- <ion-row (click)=\"onSave()\">\r\n          <ion-col size=\"4\" class=\"addButton\">\r\n            <p style=\"text-align: center; margin:5px\">Save</p>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"RoomUse == 5 || RoomUse == 11 || RoomUse == 13 || RoomUse == 15 || RoomUse == 16\" class=\"commonMenu\" style=\"opacity: 0.5;\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Room Specific Questions</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n\r\n    <div *ngIf=\"RoomUse != 5 && RoomUse != 11 && RoomUse != 13 && RoomUse != 15 && RoomUse != 16\" class=\"commonMenu\" (click)=\"getTabs(3)\">\r\n      <img src=\"assets/icons/sids/server_commonspace.svg\" style=\"width: 25px; margin: 15px;\">\r\n        <ion-label style=\"font-size: 17px;\">Room Specific Questions</ion-label>\r\n      <ion-col col=\"1\" >\r\n        <ion-icon *ngIf=\"tabsData != 3\" name=\"add-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n        <ion-icon *ngIf=\"tabsData == 3\" name=\"remove-outline\" style=\"margin: 15px 5px; font-size: 25px; float: right;\"></ion-icon>\r\n      </ion-col>\r\n    </div>\r\n    \r\n    <div *ngIf=\"tabsData == 3\" style=\"width: 100%;\">\r\n      <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n          <div>\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 1\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a teacher's table and chair?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TeacherTableYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TeacherTableYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TeacherTableYn?true:false}}\" formControlName=\"TeacherTableYn\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a TV?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TelevisionYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TelevisionYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TelevisionYn?true:false}}\" formControlName=\"TelevisionYn\"\r\n                            (ionChange)=\"onToggleChange($event,3)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.form.value.TelevisionYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.TelevisionFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.TelevisionFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.TelevisionFuncYn?true:false}}\" formControlName=\"TelevisionFuncYn\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a smartboard facility?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartboardPrjtYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartboardPrjtYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SmartboardPrjtYn?true:false}}\" formControlName=\"SmartboardPrjtYn\"\r\n                            (ionChange)=\"onToggleChange($event,2)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"form.value.SmartboardPrjtYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartboardPrjtFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartboardPrjtFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SmartboardPrjtFuncYn?true:false}}\" \r\n                            formControlName=\"SmartboardPrjtFuncYn\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the classroom have a projector facility?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.ClassRoomProjYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.ClassRoomProjYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.ClassRoomProjYn?true:false}}\" formControlName=\"ClassRoomProjYn\"\r\n                            (ionChange)=\"onToggleChange($event, 1)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 1 && form.value.ClassRoomProjYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.ClassRoomProjFuncYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.ClassRoomProjFuncYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.ClassRoomProjFuncYn?true:false}}\" formControlName=\"ClassRoomProjFuncYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n  <!-- Lab ----------------------------------------------------------------------------------------------->\r\n      \r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of lab<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"LabType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 11)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question14\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabType'].hasError('required') && (form.controls['LabType'].dirty || form.controls['LabType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 2\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the lab have computers?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabComputerYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabComputerYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabComputerYn?true:false}}\" formControlName=\"LabComputerYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.form.value.LabComputerYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Functional Computers<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabComputerFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       (ionChange)=\"onChangeBuildingData($event, 1)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabComputerFunc'].hasError('required') && (form.controls['LabComputerFunc'].dirty || form.controls['LabComputerFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabComputerFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.form.value.LabComputerYn\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Computers requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"LabComputerRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeValueData($event.detail.value, 2)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['LabComputerRepair'].hasError('required') && (form.controls['LabComputerRepair'].dirty || form.controls['LabComputerRepair'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.LabComputerRepair.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && (this.form.value.LabType == 1 || this.form.value.LabType == 2 || this.form.value.LabType == 3 || this.form.value.LabType == 8\r\n            || this.form.value.LabType == 9 || this.form.value.LabType == 10)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have water supply<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabWatersupplyYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabWatersupplyYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabWatersupplyYn?true:false}}\" formControlName=\"LabWatersupplyYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2 && this.form.value.LabWatersupplyYn == 1 && (this.form.value.LabType == 1 || this.form.value.LabType == 2 || this.form.value.LabType == 3 || this.form.value.LabType == 8\r\n            || this.form.value.LabType == 9 || this.form.value.LabType == 10)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the lab have drainage facility?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LabDrainage\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LabDrainage\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LabDrainage?true:false}}\" formControlName=\"LabDrainage\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 2\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please upload the image of the lab ( image must contain functional devices/instruments)\r\n                        <br>Photo Upload 1<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <div *ngIf=\"!form.value.LabPhotoOne \" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                        <ion-col size=\"1\" style=\"text-align: center;\">\r\n                          <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                            Click to Upload Image\r\n                          </label>\r\n                        </ion-col>\r\n                      </div>\r\n    \r\n                      <div *ngIf=\"form.value.LabPhotoOne\">\r\n                        <ion-col size=\"12\" style=\"float: left;\">\r\n                          <ion-button *ngIf=\"visitstatus != 2 && visitstatus != 4\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.LabPhotoOne}}\"></div>\r\n                        </ion-col>\r\n                      </div>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['LabPhotoOne'].hasError('required') && (form.controls['LabPhotoOne'].dirty || form.controls['LabPhotoOne'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n  <!-- Library ----------------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 3\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage adequate to store books?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.LibraryBooks\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.LibraryBooks\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.LibraryBooks?true:false}}\" formControlName=\"LibraryBooks\"\r\n                          >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n<!-- HM room ---------------------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 4\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have a functional table and chair?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.HmRoomTblYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.HmRoomTblYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.HmRoomTblYn?true:false}}\" formControlName=\"HmRoomTblYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n<!-- staff room ------------------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 6\">\r\n      \r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Who uses the Staff Room?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"StaffrmUsedBy\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question31\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['StaffrmUsedBy'].hasError('required') && (form.controls['StaffrmUsedBy'].dirty || form.controls['StaffrmUsedBy'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- kitchan --------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the kitchen have LPG Connection?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenLPGConYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenLPGConYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenLPGConYn?true:false}}\" formControlName=\"KitchenLPGConYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have water supply?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenWtrSupply\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenWtrSupply\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenWtrSupply?true:false}}\" formControlName=\"KitchenWtrSupply\"\r\n                          (ionChange)=\"onToggleChange($event, 7)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7 && form.value.KitchenWtrSupply\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the source of water used in the kitchen?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"KitchenWtrSrc\"\r\n                        multiple=\"true\" style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question37\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['KitchenWtrSrc'].hasError('required') && (form.controls['KitchenWtrSrc'].dirty || form.controls['KitchenWtrSrc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 7\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the kitchen used for storing groceries/food supplies?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenStorageYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenStorageYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenStorageYn?true:false}}\" formControlName=\"KitchenStorageYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 7 && this.form.value.KitchenStorageYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.KitchenCleanYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.KitchenCleanYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.KitchenCleanYn?true:false}}\" formControlName=\"KitchenCleanYn\" >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n  <!-- Dining ----------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 9\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the dining room functional?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.DiningFunctionalYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.DiningFunctionalYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DiningFunctionalYn?true:false}}\" formControlName=\"DiningFunctionalYn\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 9\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Seating capacity of the dining room?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"DiningSeatingCapacity\" style=\"border-bottom: 1px solid;\" maxlength=\"3\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 14)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['DiningSeatingCapacity'].hasError('required') && (form.controls['DiningSeatingCapacity'].dirty || form.controls['DiningSeatingCapacity'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.DiningSeatingCapacity.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n            *ngIf=\"this.RoomUse == 9\">\r\n            <div ng-repeat=\"activity in timeline\">\r\n              <div class=\"timeline-point-track-container\">\r\n                <div class=\"cd-timeline-picture dark\">\r\n                 3\r\n                </div>\r\n                <ion-row class=\"cd-timeline-content\">\r\n                  <ion-col size=\"12\" class=\"quesColor\">\r\n                    <ion-label> Does the room have water supply?<span style=\"color:red\">*</span></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-row>\r\n                      <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                        <div *ngIf=\"form.value.DiningSeatingWtrSupply\"> Yes</div>\r\n                        <div *ngIf=\"!form.value.DiningSeatingWtrSupply\"> No</div>\r\n                      </ion-col>\r\n                      <ion-col size=\"3\">\r\n                        <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DiningSeatingWtrSupply?true:false}}\" formControlName=\"DiningSeatingWtrSupply\"\r\n                          >\r\n                        </ion-toggle>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </section>\r\n      \r\n <!-- Noon Meal Store Room ---------------------------------------------------------------------------->\r\n            \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 8\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.NoonmealStorageClean\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.NoonmealStorageClean\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.NoonmealStorageClean?true:false}}\"\r\n                            formControlName=\"NoonmealStorageClean\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n      \r\n <!-- Store Room ---------------------------------------------------------------------------------------->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 12\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Purpose of Store Room <span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"StoreRoomPurpose\"\r\n                        multiple=\"true\" style=\"max-width: 100% !important;\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair63\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['StoreRoomPurpose'].hasError('required') && (form.controls['StoreRoomPurpose'].dirty || form.controls['StoreRoomPurpose'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 12\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage clean and free from pests and insects?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.StrroomStorageClean\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.StrroomStorageClean\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.StrroomStorageClean?true:false}}\"\r\n                            formControlName=\"StrroomStorageClean\"></ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n <!-- empty....................................................................................... -->\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 14\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Reason for room being empty<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ReasonEmpty\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair65\" > {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ReasonEmpty'].hasError('required') && (form.controls['ReasonEmpty'].dirty || form.controls['ReasonEmpty'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n  <!-- toilet ------------------------------------------------------------------------------------------------------------>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of Toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value, 3)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question43\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletType'].hasError('required') && (form.controls['ToiletType'].dirty || form.controls['ToiletType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have water connection?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletWaterCon\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question45\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletWaterCon'].hasError('required') && (form.controls['ToiletWaterCon'].dirty || form.controls['ToiletWaterCon'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the mode of toilet waste disposal?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ToiletWasteDis\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question46\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletWasteDis'].hasError('required') && (form.controls['ToiletWasteDis'].dirty || form.controls['ToiletWasteDis'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && !ToiletCWSN\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have IWC?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.IwcToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.IwcToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 4)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.IwcToilet?true:false}}\" formControlName=\"IwcToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && !ToiletCWSN && form.value.IwcToilet\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of IWC Toilet cubicles<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Iwccubicles\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 21)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Iwccubicles'].hasError('required') && (form.controls['Iwccubicles'].dirty || form.controls['Iwccubicles'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Iwccubicles.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && !ToiletCWSN && form.value.Iwccubicles > 0 && form.value.IwcToilet\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    4B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Functional IWC Toilet cubicles (running water available in toilet, no foul\r\n                        smell,unbroken seat, regularly cleaned dry, working drainage system, door with latch, cloth hanging\r\n                        hooks)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"IwccubiclesFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['IwccubiclesFunc'].hasError('required') && (form.controls['IwccubiclesFunc'].dirty || form.controls['IwccubiclesFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.IwccubiclesFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have EWC?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.EwcToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.EwcToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 5)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.EwcToilet?true:false}}\" formControlName=\"EwcToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && (form.value.ToiletType == '1' || form.value.ToiletType == '2' ||\r\n              form.value.ToiletType == '3' || form.value.ToiletType == '7' || form.value.ToiletType == '8' || form.value.ToiletType == '9') && form.value.EwcToilet\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of EWC Toilet cubicles<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Ewccubicles\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        (ionChange)=\"onChangeBuildingData($event, 22)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Ewccubicles'].hasError('required') && (form.controls['Ewccubicles'].dirty || form.controls['Ewccubicles'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Ewccubicles.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\" *ngIf=\"this.RoomUse == 10 && form.value.Ewccubicles && (form.value.ToiletType == '1' || form.value.ToiletType == '2' ||\r\n              form.value.ToiletType == '3' || form.value.ToiletType == '7' || form.value.ToiletType == '8' || form.value.ToiletType == '9') && form.value.EwcToilet\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    5B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Functional EWC Toilet cubicles (running water available in toilet, no foul\r\n                        smell,unbroken seat, regularly cleaned dry, working drainage system, door with latch, cloth hanging\r\n                        hooks)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Ewccubiclesfunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" \r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Ewccubiclesfunc'].hasError('required') && (form.controls['Ewccubiclesfunc'].dirty || form.controls['Ewccubiclesfunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Ewccubiclesfunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet complex have urinals?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.UrinalToilet\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.UrinalToilet\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle (ionChange)=\"onToggleChange($event, 6)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.UrinalToilet?true:false}}\" formControlName=\"UrinalToilet\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && (this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7) && form.value.UrinalToilet\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of Urinals<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"Urinals\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        (ionChange)=\"onChangeBuildingData($event, 23)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Urinals'].hasError('required') && (form.controls['Urinals'].dirty || form.controls['Urinals'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Urinals.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.Urinals &&(this.form.value.ToiletType == 1 || this.form.value.ToiletType == 2 || this.form.value.ToiletType == 3 || this.form.value.ToiletType == 7) && form.value.UrinalToilet\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    6B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of functional urinals (running water available in toilet, no foul smell,unbroken seat,\r\n                        regularly cleaned dry, working drainage system, cloth hanging hooks)<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Urinalsfunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Urinalsfunc'].hasError('required') && (form.controls['Urinalsfunc'].dirty || form.controls['Urinalsfunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Urinalsfunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    7\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Total number of functional taps in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletTapsFunc\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletTapsFunc'].hasError('required') && (form.controls['ToiletTapsFunc'].dirty || form.controls['ToiletTapsFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletTapsFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    8\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of taps needed in the toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletNeedTabs\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletNeedTabs'].hasError('required') && (form.controls['ToiletNeedTabs'].dirty || form.controls['ToiletNeedTabs'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletNeedTabs.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    9\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of buckets needed in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"ToiletBucket\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['ToiletBucket'].hasError('required') && (form.controls['ToiletBucket'].dirty || form.controls['ToiletBucket'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.ToiletBucket.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    10\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of mugs needed in toilet<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"Toiletmugs\" style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Toiletmugs'].hasError('required') && (form.controls['Toiletmugs'].dirty || form.controls['Toiletmugs'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.Toiletmugs.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    11\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the height and size of toilet and urinal facility suitable for children of all age groups\r\n                        in the school?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SizeSuitable\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SizeSuitable\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.SizeSuitable?true:false}}\" formControlName=\"SizeSuitable\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    12\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have a roof?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Roof\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question55\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['Roof'].hasError('required') && (form.controls['Roof'].dirty || form.controls['Roof'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container \" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    13\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> What is the mode of sanitary waste disposal?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"SanitWasteDisp\"\r\n                        style=\"max-width: 100% !important;\" >\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of question56\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SanitWasteDisp'].hasError('required') && (form.controls['SanitWasteDisp'].dirty || form.controls['SanitWasteDisp'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   14\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the toilet have an attached handwash facility<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.HwFacility\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.HwFacility\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.HwFacility?true:false}}\" formControlName=\"HwFacility\"\r\n                            >\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Location of Facility<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"HwFacilityLocation\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair57\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['HwFacilityLocation'].hasError('required') && (form.controls['HwFacilityLocation'].dirty || form.controls['HwFacilityLocation'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Type of Facility<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"HwFacilityType\"\r\n                        style=\"max-width: 100% !important;\" (ionChange)=\"onSelectChange($event.target.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of repair58\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['HwFacilityType'].hasError('required') && (form.controls['HwFacilityType'].dirty || form.controls['HwFacilityType'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 10 && form.value.HwFacility\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is new piping required?<span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.PipingNeed\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.PipingNeed\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"true\" formControlName=\"PipingNeed\"\r\n                            (ionChange)=\"onToggleToilet($event,3)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.PipingNeed\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    CA\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Length of Pipe needed<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"PipeLengthNeed\" style=\"border-bottom: 1px solid;\" maxlength=\"5\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['PipeLengthNeed'].hasError('required') && (form.controls['PipeLengthNeed'].dirty || form.controls['PipeLengthNeed'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.PipeLengthNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\"\r\n                *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.HwFacilityType == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14D\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Functional Taps<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"TapsFunc\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                        >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['TapsFunc'].hasError('required') && (form.controls['TapsFunc'].dirty || form.controls['TapsFunc'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.TapsFunc.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\">\r\n              <div ng-repeat=\"activity in timeline\"\r\n                *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && form.value.HwFacilityType == 1\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14E\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Number of Taps Required<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"TapsReq\"\r\n                        style=\"border-bottom: 1px solid;\" maxlength=\"2\"\r\n                       >\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['TapsReq'].hasError('required') && (form.controls['TapsReq'].dirty || form.controls['TapsReq'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.TapsReq.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n      \r\n            <!-- <section id=\"cd-timeline\" class=\"cd-container\"\r\n              *ngIf=\"this.RoomUse == 10 && form.value.HwFacility && (form.value.HwFacilityType == 2 || form.value.HwFacilityType == 3)\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    14F\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the storage facility closed? <span style=\"color:red\">*</span>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.StorageFacilityClosed\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.StorageFacilityClosed\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.StorageFacilityClosed?true:false}}\"\r\n                            formControlName=\"StorageFacilityClosed\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section> -->\r\n\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 18\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is there an auditorium?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumYn?true:false}}\" formControlName=\"AuditoriumYn\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['AuditoriumYn'].hasError('required') && (form.controls['AuditoriumYn'].dirty || form.controls['AuditoriumYn'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n    \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1A\r\n                  </div>\r\n      \r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Requirement for Stage<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"AuditoriumStageReqt\"\r\n                        style=\"max-width: 100% !important;\" multiple=\"true\" (ionChange)=\"onMultiSelectChange($event.detail.value)\">\r\n                        <ion-select-option [value]=\"item.value\" *ngFor=\"let item of statge\"> {{item.label}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageReqt'].hasError('required') && (form.controls['AuditoriumStageReqt'].dirty || form.controls['AuditoriumStageReqt'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n      \r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Area of Stage (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageArea\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 7)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageArea'].hasError('required') && (form.controls['AuditoriumStageArea'].dirty || form.controls['AuditoriumStageArea'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageArea.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeHeight\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Height of Stage (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageHeight\" style=\"border-bottom: 1px solid;\" maxlength=\"3\" (ionChange)=\"onChangeBuildingData($event.detail.value, 8)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageHeight'].hasError('required') && (form.controls['AuditoriumStageHeight'].dirty || form.controls['AuditoriumStageHeight'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && activeLevelling\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Area of Levelling Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumStageAreaLevel\" style=\"border-bottom: 1px solid;\" maxlength=\"5\" (ionChange)=\"onChangeBuildingData($event.detail.value, 9)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumStageAreaLevel'].hasError('required') && (form.controls['AuditoriumStageAreaLevel'].dirty || form.controls['AuditoriumStageAreaLevel'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumStageAreaLevel.errors?.pattern\">Please enter a number with one value after decimal point\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Lights in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumLights\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 10)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumLights'].hasError('required') && (form.controls['AuditoriumLights'].dirty || form.controls['AuditoriumLights'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumLights.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1C\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Ceiling Fans in Usable Condition<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"AuditoriumFans\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeBuildingData($event.detail.value, 11)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['AuditoriumFans'].hasError('required') && (form.controls['AuditoriumFans'].dirty || form.controls['AuditoriumFans'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.AuditoriumFans.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1D\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Does the auditorium have a large screen/projector facility<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumPrjtYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumPrjtYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtYn?true:false}}\"\r\n                            formControlName=\"AuditoriumPrjtYn\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n      \r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.AuditoriumYn && form.value.AuditoriumPrjtYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    #\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Is the unit functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.AuditoriumPrjtFunc\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.AuditoriumPrjtFunc\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.AuditoriumPrjtFunc?true:false}}\"\r\n                            formControlName=\"AuditoriumPrjtFunc\" (ionChange)=\"onToggleChange($event, 13)\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <!-- Smart ClassRoom -->\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have a smartboard facility?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomFacilityYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomFacilityYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" formControlName=\"SmartRoomFacilityYn\"\r\n                          checked=\"{{form.value.SmartRoomFacilityYn?true:false}}\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17 && form.value.SmartRoomFacilityYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    1A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Is the device functional?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomDeviceFunYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomDeviceFunYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" formControlName=\"SmartRoomDeviceFunYn\"\r\n                          checked=\"{{form.value.SmartRoomDeviceFunYn?true:false}}\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                   2\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label> Does the room have computers?<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n      \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-row>\r\n                        <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                          <div *ngIf=\"form.value.SmartRoomComputersYn\"> Yes</div>\r\n                          <div *ngIf=\"!form.value.SmartRoomComputersYn\"> No</div>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                          <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\"  formControlName=\"SmartRoomComputersYn\"\r\n                          checked=\"{{form.value.SmartRoomComputersYn?true:false}}\">\r\n                          </ion-toggle>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n      \r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.SmartRoomComputersYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2A\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Functional Computers<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartRoomFunComp\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 3)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartRoomFunComp'].hasError('required') && (form.controls['SmartRoomFunComp'].dirty || form.controls['SmartRoomFunComp'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartRoomFunComp.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.SmartRoomComputersYn\">\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    2B\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Number of Computers requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <ion-input pattern=\"[0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                        formControlName=\"SmartRoomFunCompRepair\" style=\"border-bottom: 1px solid;\" maxlength=\"2\" (ionChange)=\"onChangeValueData($event.detail.value, 4)\">\r\n                      </ion-input>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"form.controls['SmartRoomFunCompRepair'].hasError('required') && (form.controls['SmartRoomFunCompRepair'].dirty || form.controls['SmartRoomFunCompRepair'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <p class=\"error-message\" *ngIf=\"form.controls.SmartRoomFunCompRepair.errors?.pattern\">Please enter\r\n                          numbers only\r\n                        </p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n            <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"this.RoomUse == 17\">\r\n\r\n              <div ng-repeat=\"activity in timeline\">\r\n                <div class=\"timeline-point-track-container\">\r\n                  <div class=\"cd-timeline-picture dark\">\r\n                    3\r\n                  </div>\r\n                  <ion-row class=\"cd-timeline-content\">\r\n                    <ion-col size=\"12\" class=\"quesColor\">\r\n                      <ion-label>Please upload the image of the smart room ( image must contain functional devices/instruments)\r\n                        <br>Photo Upload 1<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n    \r\n                    <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                      <div *ngIf=\"!form.value.SmartRoomPhotoOne \" style=\"margin-top: 10px;\" (click)=\"openCamera(2)\">\r\n                        <ion-col size=\"1\" style=\"text-align: center;\">\r\n                          <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                            Click to Upload Image\r\n                          </label>\r\n                        </ion-col>\r\n                      </div>\r\n    \r\n                      <div *ngIf=\"form.value.SmartRoomPhotoOne\">\r\n                        <ion-col size=\"12\" style=\"float: left;\">\r\n                          <ion-button *ngIf=\"visitstatus != 2 && visitstatus != 4\" (click)=\"uploadImgDelete(2)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.SmartRoomPhotoOne}}\"></div>\r\n                        </ion-col>\r\n                      </div>\r\n                      <ion-row>\r\n                        <p class=\"error-message\"\r\n                          *ngIf=\"submitted && form.controls['SmartRoomPhotoOne'].hasError('required') && (form.controls['SmartRoomPhotoOne'].dirty || form.controls['SmartRoomPhotoOne'].touched)\">\r\n                          Field is required</p>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </section>\r\n\r\n          </div>\r\n         \r\n      </form>\r\n    </div>\r\n  </ion-row> \r\n\r\n</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"this.status == '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onGoBack()\">\r\n      <ion-label> Already Synced to Server\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-room-questions_primary-room-questi-eef77c-es2015.js.map