(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts"],{

/***/ 32500:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotouploadPageRoutingModule": function() { return /* binding */ PhotouploadPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _photoupload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photoupload.page */ 52678);




const routes = [
    {
        path: '',
        component: _photoupload_page__WEBPACK_IMPORTED_MODULE_0__.PhotouploadPage
    }
];
let PhotouploadPageRoutingModule = class PhotouploadPageRoutingModule {
};
PhotouploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhotouploadPageRoutingModule);



/***/ }),

/***/ 17464:
/*!***********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotouploadPageModule": function() { return /* binding */ PhotouploadPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _photoupload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photoupload-routing.module */ 32500);
/* harmony import */ var _photoupload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoupload.page */ 52678);







let PhotouploadPageModule = class PhotouploadPageModule {
};
PhotouploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _photoupload_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotouploadPageRoutingModule
        ],
        declarations: [_photoupload_page__WEBPACK_IMPORTED_MODULE_1__.PhotouploadPage]
    })
], PhotouploadPageModule);



/***/ }),

/***/ 52678:
/*!*********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotouploadPage": function() { return /* binding */ PhotouploadPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_photoupload_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./photoupload.page.html */ 75723);
/* harmony import */ var _photoupload_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoupload.page.scss */ 58866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);


















let PhotouploadPage = class PhotouploadPage {
    constructor(router, uploadService, http, usersessionService, filed, file, alertService, sqliteDB, route, userService, camera, alertController, geolocation, NetworkService, androidPermissions) {
        this.router = router;
        this.uploadService = uploadService;
        this.http = http;
        this.usersessionService = usersessionService;
        this.filed = filed;
        this.file = file;
        this.alertService = alertService;
        this.sqliteDB = sqliteDB;
        this.route = route;
        this.userService = userService;
        this.camera = camera;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.NetworkService = NetworkService;
        this.androidPermissions = androidPermissions;
        this.url = '/assets/images/Group_upload.svg';
        this.minutes = 45;
        this.classdataList = [];
        this.finalclassdataList = [];
        // totalprsnt: any;
        // totalabst: any;
        // totalod: any;
        this.clssTotalList = [];
        this.timeLeft = 0; // Set the initial time in seconds (1 hour, 1 minute, and 5 seconds)
        this.imageActive = false;
        this.emis_username = this.usersessionService.emis_username();
    }
    ngOnInit() {
        this.submitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
            studentOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
            studentTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
            studentThree: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required)
        });
    }
    ionViewDidEnter() {
        this.hideSearch = true;
        this.filterActive = false;
        this.showPhoto = true;
        this.rest = false;
        this.endEnable = false;
        this.routeData = this.route.snapshot;
        this.otp = this.routeData.queryParams.otp;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.batch = this.routeData.queryParams.batch;
        this.status = this.routeData.queryParams.status;
        this.userid = this.routeData.queryParams.userid;
        this.CycleId = this.routeData.queryParams.CycleId;
        this.schoolName = this.routeData.queryParams.schoolName;
        this.InsertClsSec = this.routeData.queryParams.InsertClsSec;
        this.photoInsertClsSec = this.InsertClsSec;
        console.log(this.CycleId, this.InsertClsSec, "this.InsertClsSec");
        var date = new Date();
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        this.currentDate = [year, month, day].join('-');
        this.getGeolocation();
        this.localbatchRecord();
        this.localBatchStatusUpdate();
        this.localgetClassDetails();
        this.localTotalBatchDetails();
        this.localgetStudentStatus();
        this.localgetStudentDetailsJson();
        this.addStudentDataList = [];
    }
    ionViewWillLeave() {
        this.stopTimer();
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    //Malini ************************  start  *******************************
    localBatchStatusUpdate() {
        if (this.batch == 1) {
            let query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
            this.sqliteDB.update(query3).then(res => {
            });
        }
        if (this.batch == 2) {
            let query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
            this.sqliteDB.update(query3).then(res => {
            });
        }
        if (this.batch == 3) {
            let query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
            this.sqliteDB.update(query3).then(res => {
            });
        }
        if (this.batch == 4) {
            let query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
            this.sqliteDB.update(query3).then(res => {
            });
        }
    }
    autoSync() {
        debugger;
        this.localbatchRecord();
        if (this.NetworkService.getCurrentNetworkStatus() == 0) {
            console.log("online");
            this.onsave();
        }
        else {
            console.log("offline");
            this.offlineSave();
        }
    }
    offlineSave() {
        let InsertClsSec = parseInt(this.InsertClsSec) + this.finalclassdataList.length;
        this.photoInsertClsSec = InsertClsSec;
        let batch = parseInt(this.batch) + 1;
        let query3 = 'UPDATE VIStatusbatchDatas SET sync = 2 WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
        let query2 = 'UPDATE VIStatusbatchDatas SET sync = 1 WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + batch + '"';
        let query5 = 'UPDATE VasipuIStatusDetail SET status = 2 WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
        let query6 = 'UPDATE VIStatusClsSecData SET InsertClsSec = ' + InsertClsSec + ' WHERE VIStatusClsSecData.UserId = "' + this.emis_username + '"';
        return this.sqliteDB.update(query3).then(res => {
            return this.sqliteDB.update(query2).then(res => {
                return this.sqliteDB.update(query5).then(res => {
                    return this.sqliteDB.update(query6).then(res => {
                        this.updateBatchCount();
                        // this.localbatchRecord();
                        this.navigateBack();
                        this.alertPopup('Batch ' + this.batch + ' Completed');
                    });
                });
            });
        });
    }
    localbatchRecord() {
        let query = 'SELECT * FROM VIStatusbatchDatas' +
            ' WHERE userid = ' + this.emis_username;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataListbatch = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListbatch.push(data.rows.item(i));
                }
            }
            else {
            }
        });
    }
    localgetClassDetails() {
        let query = 'SELECT * FROM vasipuBatchStudentTable' +
            ' WHERE userId = "' + this.emis_username + '"' +
            ' And SchlId = "' + this.schoolId + '"' +
            ' And batch = "' + this.batch + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.classdataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.classdataList.push(data.rows.item(i));
                }
                for (var q = 0; q < this.classdataList.length; q++) {
                    this.finalclassdataList.push({
                        "ClsId": this.classdataList[q].ClsId,
                        "SchlId": this.schoolId,
                        "Sec": this.classdataList[q].Sec,
                        "TotStudnt": this.classdataList[q].TotStudnt,
                        "AbsentStud": this.classdataList[q].AbsentStud,
                        "ActivityDate": this.currentDate,
                        "CycleId": this.CycleId,
                    });
                }
                let jsonData = JSON.stringify(this.finalclassdataList);
                let updateQuery1 = 'UPDATE VasipuIStatusDetail SET ClsSec = "' + jsonData + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                this.sqliteDB.update(updateQuery1).then(res => {
                });
                let updateQuery = 'UPDATE VasipuIStatusDetail SET ClsSec = "' + jsonData + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                this.sqliteDB.update(updateQuery).then(res => {
                });
            }
            else {
            }
        });
    }
    getStudentDetailsJson() {
        this.studentListData = [];
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + this.schoolId + '_1.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                this.insertLocalData(data.studentlist);
                this.studentListData = data.studentlist;
            }
        });
    }
    localgetStudentDetailsJson() {
        this.studentListData = [];
        let query = 'SELECT * FROM VIStudenData' +
            ' WHERE RP_Id = "' + this.emis_username + '"' +
            ' And schoolId = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                for (var n = 0; n < this.finalclassdataList.length; n++) {
                    let studentStatusData = this.dataList.filter(item => item.prst == '' && item.class_studying_id == this.finalclassdataList[n].ClsId && item.class_section == this.finalclassdataList[n].Sec);
                    for (let c = 0; c < studentStatusData.length; c++) {
                        this.studentListData.push(studentStatusData[c]);
                    }
                }
                console.log(this.studentListData, "local json studentStatusData");
                this.totalStudent = this.studentListData.length;
            }
            else {
                console.log("server json");
                this.getStudentDetailsJson();
            }
        });
    }
    insertLocalData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO VasipuIyakamStudentDetails VALUES (?,?,?,?,?,?,?,?)",
                [null, this.schoolId, element.unique_id_no, element.user_id, element.name,
                    element.gender, element.class_studying_id, element.class_section]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Locally");
        });
    }
    insertStatusLocalData() {
        let insertRows = [];
        insertRows.push([
            "INSERT INTO VasipuIStatusDetail VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [null, this.schoolId, this.batch, '', '', '', '', '0', '0', '', '', '', '1', '', '', '', '', '', '', JSON.stringify(this.finalclassdataList), this.totalStudent, this.prsnStudent, this.emis_username
            ]
        ]);
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Locally");
            this.localgetStudentStatus();
        });
    }
    openCameraForBlob(id, index) {
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
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                var splittedName = filename.split(".");
                let fName = splittedName[0] + '.png';
                if (base64string) {
                    // this.imageData = base64string;
                    this.studentStatusData[index].startphtStatus = '1';
                    if (id == 1) {
                        var d = new Date(); // for now
                        var h = d.getHours(); // => 9
                        var m = d.getMinutes(); // =>  30
                        var s = d.getSeconds();
                        this.startTimes = h + ':' + m;
                        this.timeLeft = 0;
                        this.startTimer();
                        var splittedbase64string = base64string.split(",");
                        let fNamebase64string = splittedbase64string[1];
                        this.imageData = base64string;
                        this.test = fNamebase64string.toString();
                        this.studentStatusData[index].startphoto = this.test;
                        this.studentStatusData[index].startphotoblob = fName.toString();
                        let updateQuery = 'UPDATE VasipuIStatusDetail SET startphoto = "' + this.test + '",start = "' + this.startTimes + '",startphotoblob = "' + fName + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                        this.sqliteDB.update(updateQuery).then(res => {
                        });
                        this.getLatLong(id, index);
                    }
                    if (id == 2) {
                        var d = new Date(); // for now
                        var h = d.getHours(); // => 9
                        var m = d.getMinutes(); // =>  30
                        var s = d.getSeconds();
                        this.endTimes = h + ':' + m;
                        this.imageData1 = base64string;
                        let image = this.imageData1.toString();
                        var splittedbase64string = base64string.split(",");
                        let fNamebase64string = splittedbase64string[1];
                        this.test = fNamebase64string.toString();
                        this.studentStatusData[index].endphoto = this.test;
                        this.studentStatusData[index].end = this.endTimes;
                        this.studentStatusData[index].endphotoblob = fName.toString();
                        let query2 = 'UPDATE VasipuIStatusDetail SET endphoto = "' + this.test + '",end = "' + this.endTimes + '",endphotoblob = "' + fName + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                        this.sqliteDB.update(query2).then(res => {
                            console.log("upload end photo");
                        });
                        this.getLatLong(id, index);
                    }
                    let query2 = 'UPDATE VasipuIStatusDetail SET startphtStatus = 1 WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        console.log("upload start session");
                    });
                    // this.alertService.success('File Uploaded Successfully');
                    this.alertPopup("File Uploaded Successfully");
                }
            });
        }, (err) => {
            alert("error " + JSON.stringify(err));
        });
    }
    getLatLong(id, index) {
        console.log("location");
        if (this.NetworkService.getCurrentNetworkStatus() == 0) {
            console.log("online location");
            this.androidPermission();
            this.geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }).then((resp) => {
                this.locationCordinates = resp.coords;
                console.log("locationCordinates");
                if (id == 1) {
                    this.lat = this.locationCordinates.latitude.toString();
                    this.long = this.locationCordinates.longitude.toString();
                    this.studentStatusData[index].lat1 = this.lat;
                    this.studentStatusData[index].long1 = this.long;
                    let query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + this.lat + '",long1 = "' + this.long + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        this.localgetStudentStatus();
                    });
                }
                if (id == 2) {
                    this.studentStatusData[index].lat2 = this.lat;
                    this.studentStatusData[index].long2 = this.long;
                    this.lat1 = this.locationCordinates.latitude.toString();
                    this.long1 = this.locationCordinates.longitude.toString();
                    let query2 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + this.lat1 + '",long2 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        this.autoSync();
                    });
                }
            }).catch((error) => {
                if (id == 2) {
                    this.autoSync();
                }
            });
            if (id == 2 && (this.locationCordinates == "" || this.locationCordinates == null || this.locationCordinates == undefined)) {
                this.autoSync();
            }
        }
        else {
            if (id == 1) {
                this.studentStatusData[index].lat1 = this.offlinelat;
                this.studentStatusData[index].long1 = this.offlinelone;
                this.lat1 = this.offlinelat;
                this.long1 = this.offlinelone;
                let query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + this.lat1 + '",long1 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                this.sqliteDB.update(query2).then(res => {
                });
                // this.autoSync()
            }
            if (id == 2) {
                this.studentStatusData[index].lat2 = this.offlinelat;
                this.studentStatusData[index].long2 = this.offlinelone;
                this.lat1 = this.offlinelat;
                this.long1 = this.offlinelone;
                let query2 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + this.lat1 + '",long2 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                this.sqliteDB.update(query2).then(res => {
                    this.autoSync();
                });
                // this.autoSync()
            }
        }
    }
    onadded() {
        if (this.searchData.length > 0) {
            let alrterfilter = this.addStudentDataList.filter(item => item.Id == this.searchData[0].Id);
            if (alrterfilter.length == 0) {
                this.addDataActive = true;
                this.addStudentDataList.push(this.searchData[0]);
                let removeData = this.dataList.filter((item) => item.Id != this.searchData[0].Id);
                this.dataList = [];
                this.dataList = removeData;
                this.searchData = [];
                if (this.addStudentDataList.length == 1) {
                    this.activeSave = false;
                    let query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_1 = "' + this.addStudentDataList[0].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        this.localgetStudentStatus();
                    });
                }
                if (this.addStudentDataList.length == 2) {
                    this.activeSave = false;
                    let query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + this.addStudentDataList[1].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        this.localgetStudentStatus();
                    });
                }
                if (this.addStudentDataList.length == 3) {
                    this.hideSearch = false;
                    this.activeSave = true;
                    let query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_1 = "' + this.addStudentDataList[0].user_id + '",stud_2 = "' + this.addStudentDataList[1].user_id + '",stud_3 = "' + this.addStudentDataList[2].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                    this.sqliteDB.update(query2).then(res => {
                        this.localgetStudentStatus();
                    });
                }
            }
            else {
                // this.alertService.error("Already added") 
                this.alertPopup("Already added");
            }
        }
    }
    onsave() {
        let data = {
            "records": [
                {
                    "IndexId": "",
                    "UserId": this.emis_username,
                    "SchlId": this.schoolId,
                    "Batch": this.batch,
                    "StudId1": this.studentStatusData[0].stud_1,
                    "StudId2": this.studentStatusData[0].stud_2,
                    "StudId3": this.studentStatusData[0].stud_3,
                    "StartTime": this.studentStatusData[0].start,
                    "EndTime": this.studentStatusData[0].end,
                    "StartPhoto": this.studentStatusData[0].startphoto,
                    "StartPhotoName": this.studentStatusData[0].startphotoblob,
                    "EndPhoto": this.studentStatusData[0].endphoto,
                    "EndPhotoName": this.studentStatusData[0].endphotoblob,
                    "StartLat": this.studentStatusData[0].lat1,
                    "StartLongi": this.studentStatusData[0].long1,
                    "EndLat": this.studentStatusData[0].lat2,
                    "EndLongi": this.studentStatusData[0].long2,
                    "Data": this.finalclassdataList,
                }
            ]
        };
        this.userService.submitSessionData(data).subscribe((res) => {
            if (res.dataStatus) {
                this.updateBatchCount();
                // this.vasiIpyakam()
                let InsertClsSec = parseInt(this.InsertClsSec) + this.finalclassdataList.length;
                this.photoInsertClsSec = InsertClsSec;
                let batch = parseInt(this.batch) + 1;
                let query2 = 'UPDATE VasipuIStatusDetail SET status = 3 WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                let query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '3' + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
                let query4 = 'UPDATE VIStatusbatchDatas SET sync = "' + '1' + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + batch + '"';
                let query6 = 'UPDATE VIStatusClsSecData SET InsertClsSec = ' + InsertClsSec + ' WHERE VIStatusClsSecData.UserId = "' + this.emis_username + '"';
                return this.sqliteDB.update(query2).then(res => {
                    return this.sqliteDB.update(query3).then(res => {
                        return this.sqliteDB.update(query4).then(res => {
                            return this.sqliteDB.update(query6).then(res => {
                                // this.localbatchRecord();
                                this.navigateBack();
                                // this.alertService.success('Batch ' + this.batch +' Completed');
                                this.alertPopup('Batch ' + this.batch + ' Completed');
                            });
                        });
                    });
                });
            }
            else {
                // this.autoSync()
                this.navigateBack();
            }
        });
    }
    localgetStudentStatus() {
        this.startActive = false;
        this.studentStatusData = [];
        let query = 'SELECT * FROM VasipuIStatusDetail' +
            ' WHERE schlid = "' + this.schoolId + '"' +
            ' And batchId = "' + this.batch + '" ';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.studentStatusData.push(data.rows.item(i));
                }
                if (this.studentStatusData[0].start) {
                    this.calculateHoursDifference();
                }
                console.log(this.studentStatusData, "studentStatusData");
            }
            else {
                this.startActive = true;
                this.insertStatusLocalData();
            }
        });
    }
    // searching data 
    getFilterItems(event) {
        this.searchData = [];
        this.filterActive = true;
        this.searchTerm = event.trim();
        this.searchData = this.studentListData.filter((item) => {
            return item.user_id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
        if (this.searchData.length != 0) {
            this.statusDataActive = true;
        }
    }
    delete(id, event, array) {
        this.hideSearch = true;
        this.activeSave = false;
        let removeData = this.addStudentDataList.filter((item) => item.user_id != event);
        this.addStudentDataList = [];
        this.addStudentDataList = removeData;
        if (this.addStudentDataList.length == 3) {
            this.activeSave = true;
            this.hideSearch = false;
        }
        let query1 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 0,stud_1 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_1 = "' + event + '"';
        let query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_2 = "' + event + '"';
        let query3 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_3 = "' + event + '"';
        this.sqliteDB.update(query1).then(res => {
            this.sqliteDB.update(query2).then(res => {
                this.sqliteDB.update(query3).then(res => {
                    console.log("delete student");
                    this.localgetStudentStatus();
                });
            });
        });
    }
    updateBatchCount() {
        let count = parseInt(this.totalBatchData[0].InsertBatchCount) + 1;
        let query3 = 'UPDATE VIBatchData SET InsertBatchCount = "' + count + '" WHERE VIBatchData.UserId = "' + this.emis_username + '" And VIBatchData.SchlId = "' + this.schoolId + '"';
        this.sqliteDB.update(query3).then(res => {
            console.log("upload Count");
        });
    }
    localTotalBatchDetails() {
        this.totalBatchData = [];
        this.totalBatchStatus = [];
        let query = 'SELECT * FROM VIBatchData' +
            ' WHERE UserId = "' + this.emis_username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.totalBatchStatus.push(data.rows.item(i));
                }
                this.totalBatchData = this.totalBatchStatus.filter(item => item.SchlId == this.schoolId);
            }
            else {
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], { queryParams: { "schoolId": this.schoolId, "userID": this.emis_username, "CycleId": this.CycleId, "InsertClsSec": this.photoInsertClsSec, "schoolName": this.schoolName } });
    }
    navigateBack1() {
        this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], { queryParams: { "schoolId": this.schoolId, "userID": this.emis_username, "CycleId": this.CycleId, "InsertClsSec": this.photoInsertClsSec, "schoolName": this.schoolName } });
    }
    timeEnd() {
        this.rest = true;
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => {
            if (!result.hasPermission) {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
    }
    getGeolocation() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            // resp.coords.latitude and resp.coords.longitude are the latitude and longitude values
            const latitude = resp.coords.latitude;
            const longitude = resp.coords.longitude;
            this.offlinelat = latitude;
            this.offlinelone = longitude;
            // Now you can use latitude and longitude as needed
            console.log('this.offlinelone: ', this.offlinelat);
            console.log('this.offlinelone: ', this.offlinelone);
        }).catch((error) => {
            console.error('Error getting location', error);
            this.offlinelat = 0;
            this.offlinelone = 0;
        });
    }
    startTimer() {
        this.timer = setInterval(() => {
            if (this.timeLeft >= 0) {
                this.timeLeft++;
                this.updateFormattedTime();
            }
            else {
                clearInterval(this.timer);
                // Timer has reached zero, you can perform any action here
            }
        }, 1000); // Update every 1000 milliseconds (1 second)
    }
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    updateFormattedTime() {
        const hours = Math.floor(this.timeLeft / 3600);
        const minutes = Math.floor((this.timeLeft % 3600) / 60);
        const seconds = this.timeLeft % 60;
        this.formattedTime = `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }
    padNumber(num) {
        return num < 10 ? '0' + num : num.toString();
    }
    resetTimer() {
        this.timeLeft = 3665; // Reset the timer to 1 hour, 1 minute, and 5 seconds
        this.updateFormattedTime();
    }
    calculateHoursDifference() {
        var d = new Date(); // for now
        var h = d.getHours(); // => 9
        var m = d.getMinutes(); // =>  30
        var s = d.getSeconds();
        let endTimes = h + ':' + m;
        if (this.studentStatusData[0].start) {
            this.startTimes = this.studentStatusData[0].start;
            const startDate = new Date(`2000-01-01 ${this.startTimes}`);
            const endDate = new Date(`2000-01-01 ${endTimes}`);
            const timeDifference = endDate.getTime() - startDate.getTime();
            this.hoursDifference = timeDifference / (1000 * 60 * 60);
            this.timeLeft = (this.hoursDifference * 3600);
            this.startTimer();
        }
        else {
            this.timeLeft = 0;
            this.startTimer();
        }
    }
    alertPopup(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Notification',
                // subHeader:' Batch '+ this.batch +' completed',
                cssClass: 'popCalssInfo',
                message: text,
                buttons: [
                    {
                        text: 'OK',
                        cssClass: 'alert-button-confirm',
                    },
                ],
            });
            yield alert.present();
        });
    }
    // Photoupload
    onSelectFile1(event, id, index) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg") {
                if (event.target.files[0].size <= 5242880) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    console.log(fileName, "fileName");
                    this.fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        // //debugger;
                        this.imageActive = true;
                        this.uploadUrl = fileReader.result;
                        var splittedbase64string = this.uploadUrl.split(",");
                        let fNamebase64string = splittedbase64string[1];
                        this.test = fNamebase64string.toString();
                        var date = new Date();
                        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                        var h = d.getHours(); // => 9
                        var m = d.getMinutes(); // =>  30
                        var s = d.getSeconds();
                        let datefilename1 = "";
                        let ff = '.jpg';
                        datefilename1 = this.emis_username + day + month + year + h + m + s + ff.toString();
                        let datefilename = datefilename1.toString();
                        console.log(datefilename, "datefilename");
                        this.studentStatusData[index].startphtStatus = '1';
                        if (id == 1) {
                            var d = new Date(); // for now
                            var h = d.getHours(); // => 9
                            var m = d.getMinutes(); // =>  30
                            var s = d.getSeconds();
                            this.startTimes = h + ':' + m;
                            this.timeLeft = 0;
                            this.startTimer();
                            this.test = fNamebase64string.toString();
                            this.studentStatusData[index].startphoto = this.test.toString();
                            this.studentStatusData[index].startphotoblob = datefilename;
                            let updateQuery = 'UPDATE VasipuIStatusDetail SET startphoto = "' + this.test + '",start = "' + this.startTimes + '",startphotoblob = "' + datefilename + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                            this.sqliteDB.update(updateQuery).then(res => {
                            });
                            this.uploadgetLatLong(id, index);
                        }
                        if (id == 2) {
                            var d = new Date(); // for now
                            var h = d.getHours(); // => 9
                            var m = d.getMinutes(); // =>  30
                            var s = d.getSeconds();
                            this.endTimes = h + ':' + m;
                            this.test = fNamebase64string.toString();
                            this.studentStatusData[index].endphoto = this.test;
                            this.studentStatusData[index].end = this.endTimes;
                            this.studentStatusData[index].endphotoblob = datefilename.toString();
                            let query2 = 'UPDATE VasipuIStatusDetail SET endphoto = "' + this.test + '",end = "' + this.endTimes + '",endphotoblob = "' + datefilename + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                            this.sqliteDB.update(query2).then(res => {
                                console.log("upload end photo");
                            });
                            this.uploadgetLatLong(id, index);
                        }
                        let query2 = 'UPDATE VasipuIStatusDetail SET startphtStatus = 1 WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                        this.sqliteDB.update(query2).then(res => {
                            console.log("upload start session");
                        });
                        this.alertService.success('File Uploaded Successfully');
                        // this.alertPopup("File Uploaded Successfully")
                    };
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
                    this.jpgimage.nativeElement.value = "";
                }
            }
            else {
                this.alertService.error('Please upload only JPG / JPEG image format');
                this.jpgimage.nativeElement.value = "";
            }
        }
    }
    uploadgetLatLong(id, index) {
        this.getGeolocation();
        if (id == 1) {
            this.studentStatusData[index].lat1 = this.offlinelat;
            this.studentStatusData[index].long1 = this.offlinelone;
            this.lat1 = this.offlinelat;
            this.long1 = this.offlinelone;
            let query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + this.lat1 + '",long1 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
            this.sqliteDB.update(query2).then(res => {
            });
        }
        if (id == 2) {
            this.studentStatusData[index].lat2 = this.offlinelat;
            this.studentStatusData[index].long2 = this.offlinelone;
            this.lat1 = this.offlinelat;
            this.long1 = this.offlinelone;
            let query2 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + this.lat1 + '",long2 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
            this.sqliteDB.update(query2).then(res => {
                this.autoSync();
            });
            // this.autoSync()
        }
    }
};
PhotouploadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__.SqlitedatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__.AndroidPermissions }
];
PhotouploadPage.propDecorators = {
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['jpgimage',] }]
};
PhotouploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-photoupload',
        template: _raw_loader_photoupload_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_photoupload_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PhotouploadPage);



/***/ }),

/***/ 58866:
/*!***********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".startcard1 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  background-color: #30a748;\n  color: white;\n  font-weight: bold;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\n.textItem {\n  padding: 5%;\n  color: #707070 !important;\n}\n\n.card-row {\n  padding-top: 25px;\n}\n\n.selectdata {\n  border: 1px solid #134A54;\n}\n\nion-input {\n  color: #707070;\n  background-color: #FBFBFB;\n}\n\n.btn-dbl {\n  opacity: 0.5;\n}\n\n.coluitem2 {\n  padding-left: 2%;\n  padding-right: 2%;\n  font-weight: bold;\n  text-align: center;\n  color: #343434;\n}\n\n.startcard {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-size: smaller;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\n.cardICON {\n  text-align: center;\n  padding-top: 5px;\n  zoom: 2;\n}\n\n.cardStudent {\n  padding: 3%;\n  text-align: center;\n}\n\n.liststudentCard {\n  padding: 2%;\n  border-top-right-radius: 5%;\n  border-top-left-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQztFQUNDLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFDRiIsImZpbGUiOiJwaG90b3VwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnRjYXJkMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNjcsIDcyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4udGV4dEl0ZW0ge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RkYXRhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTM0QTU0O1xyXG59XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xyXG59XHJcblxyXG4uYnRuLWRibHtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmNvbHVpdGVtMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IzM0MzQzNDtcclxufVxyXG5cclxuLnN0YXJ0Y2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5jYXJkSUNPTiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgem9vbTogMjtcclxufVxyXG5cclxuLmNhcmRTdHVkZW50e1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RzdHVkZW50Q2FyZCB7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 75723:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack1()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>{{emis_username}} - Batch {{batch}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{schoolName}}</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row class=\"card-row\" *ngFor=\"let data of studentStatusData; let a = index\">\r\n\r\n    <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"data.startphtStatus == '1'\">\r\n      <div class=\"timer\">\r\n        <img src=\"/assets/images/vasipuiyagam/stopwatch.svg\"> {{ formattedTime }}\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"10\" *ngIf=\"data.startphtStatus == ''\">\r\n      <ion-card class=\"newsecondary startcard\">\r\n        அமர்வின் தொடக்கத்தில் மாணவர்களுடன் வாசிப்பு இயக்க கருத்தாளரும் சேர்ந்து புகைப்படம் எடுத்து பதிவிடவும்.\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"2\" *ngIf=\"data.startphtStatus == ''\" style=\"align-self: center;\">\r\n      <input #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'1',a)\"\r\n        accept=\".jpg,.JPEG\" style=\"display: none;\" />\r\n      <label for=\"file\" class=\"upload-txt\">\r\n        <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"></ion-icon>\r\n      </label>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"2\" class=\"imageVideo\">\r\n              <input  #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'1',a)\"  accept=\".jpg,.JPEG\"\r\n             style=\"display: none;\"  />\r\n              <label for=\"file\" class=\"upload-txt\">\r\n                <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"\r\n        ></ion-icon> \r\n              </label>\r\n            </ion-col>  -->\r\n\r\n    <!-- <ion-col size=\"12\">\r\n              <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label>\r\n            </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"2\" *ngIf=\"data.startphtStatus == ''\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\" (click)=\"openCameraForBlob('1',a)\" \r\n          name=\"camera\"\r\n        ></ion-icon> \r\n      </ion-col> -->\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.startphtStatus == '1'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு தொடங்கியது & புகைப்படம் பதிவேற்றப்பட்டது. </ion-card>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"2\" *ngIf=\"data.startphtStatus == '1'\" style=\"padding-top: 6%;\">\r\n        <ion-icon class=\"cardICON\"\r\n        name=\"camera\"\r\n      ></ion-icon>\r\n    </ion-col> -->\r\n\r\n    <ion-col size=\"12\" class=\"coluitem2\" *ngIf=\"data.startphtStatus == '1'\">\r\n      இந்த அமர்வில் சிறப்பாக பங்கேற்ற மாணவர்களை தேர்வு செய்யவும் (3 மாணவர்கள்).\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.startphtStatus == '1' && hideSearch\">\r\n      <ion-item style=\"border: 1px solid;margin: 3%;\">\r\n        <ion-input class=\"selectitem\" type=\"number\" (ionChange)=\"getFilterItems($event.detail.value)\"\r\n          placeholder=\"Search students\">\r\n        </ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"filterActive && data.startphtStatus == '1'\">\r\n      <ion-row style=\"margin: 5%;\">\r\n        <ion-col size=\"12\" class=\"newsecondary cardStudent\">மாணவர் விவரங்கள்\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"liststudentCard newsecondaryTex\" *ngFor=\"let item of searchData; let n = index\">\r\n          <div (click)=\"getFilterItems(item.user_id)\"> {{item.name}} - {{item.user_id}}</div>\r\n          <div (click)=\"getFilterItems(item.user_id)\"> {{item.class_studying_id}} - {{item.class_section}}\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"color:#707070;padding-left: 3%;border-bottom: dotted;\"\r\n          *ngFor=\"let item of addStudentDataList;let i =index\">\r\n          <ion-row>\r\n            <ion-col size=\"10\">\r\n              <div> {{item.name}} - {{item.user_id}}</div>\r\n              <div> {{item.class_studying_id}} - {{item.class_section}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" style=\"color:#ec4e4e;padding-left: 3%;zoom: 1.5;\">\r\n              <ion-icon name=\"trash\" (click)=\"delete(i,item.user_id,item)\"> நீக்கு </ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"!activeSave\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onadded()\">\r\n          <img src=\"/assets/images/vasipuiyagam/addbutton.svg\">\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"10\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\">\r\n      <ion-card class=\"newsecondary startcard\">\r\n        அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும்.\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\" class=\"imageVideo\"\r\n      style=\"align-self: center;\">\r\n      <input #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'2',a)\"\r\n        accept=\".jpg,.JPEG\" style=\"display: none;\" />\r\n      <label for=\"file\" class=\"upload-txt\">\r\n        <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"></ion-icon>\r\n        <!-- <ion-icon name=\"cloud-upload-outline\"></ion-icon> -->\r\n        <!-- <img src=\"{{image1}}\" class=\"image\" *ngIf=\"this.imageActive == true\" width=\"100\" height=\"100\"> -->\r\n      </label>\r\n      <!-- <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label> -->\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\"> \r\n        <ion-card class=\"newsecondary startcard\" > \r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n            அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும்.\r\n          </ion-col>\r\n            <ion-col size=\"12\" class=\"imageVideo\">\r\n              <input  #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'2',a)\"  accept=\".jpg,.JPEG\"\r\n               />\r\n              <label for=\"file\" class=\"upload-txt\">\r\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n              </label>\r\n              <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label>\r\n            </ion-col> \r\n            </ion-row>\r\n          </ion-card> \r\n      </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"10\" (click)=\"openCameraForBlob('2',a)\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\">\r\n        <ion-card class=\"newsecondary startcard\" > அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும். </ion-card> \r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\" (click)=\"openCameraForBlob('2',a)\"\r\n          name=\"camera\"\r\n        ></ion-icon>\r\n      </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"10\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\">\r\n        <ion-card class=\"newsecondary startcard\" > அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும். </ion-card> \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\"\r\n          name=\"camera\"\r\n        ></ion-icon>\r\n      </ion-col> -->\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '3'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு முடிந்தது. </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு முடிந்தது. </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\" (click)=\"autoSync()\" *ngIf=\"data.status == '2'\">\r\n      <button style=\"background: transparent;\">\r\n        <img src=\"/assets/images/vasipuiyagam/savebutton.svg\" class=\"menuicon\">\r\n      </button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts-es2015.js.map