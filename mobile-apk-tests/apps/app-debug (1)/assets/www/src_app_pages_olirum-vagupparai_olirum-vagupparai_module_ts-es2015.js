(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_olirum-vagupparai_olirum-vagupparai_module_ts"],{

/***/ 23657:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlirumVagupparaiPageRoutingModule": function() { return /* binding */ OlirumVagupparaiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olirum-vagupparai.page */ 80784);




const routes = [
    {
        path: '',
        component: _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_0__.OlirumVagupparaiPage
    }
];
let OlirumVagupparaiPageRoutingModule = class OlirumVagupparaiPageRoutingModule {
};
OlirumVagupparaiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OlirumVagupparaiPageRoutingModule);



/***/ }),

/***/ 58468:
/*!*********************************************************************!*\
  !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlirumVagupparaiPageModule": function() { return /* binding */ OlirumVagupparaiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _olirum_vagupparai_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olirum-vagupparai-routing.module */ 23657);
/* harmony import */ var _olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olirum-vagupparai.page */ 80784);







let OlirumVagupparaiPageModule = class OlirumVagupparaiPageModule {
};
OlirumVagupparaiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _olirum_vagupparai_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlirumVagupparaiPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_olirum_vagupparai_page__WEBPACK_IMPORTED_MODULE_1__.OlirumVagupparaiPage]
    })
], OlirumVagupparaiPageModule);



/***/ }),

/***/ 80784:
/*!*******************************************************************!*\
  !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlirumVagupparaiPage": function() { return /* binding */ OlirumVagupparaiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_olirum_vagupparai_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./olirum-vagupparai.page.html */ 68218);
/* harmony import */ var _olirum_vagupparai_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olirum-vagupparai.page.scss */ 73634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/json.service */ 77232);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */ 90110);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);




















let OlirumVagupparaiPage = class OlirumVagupparaiPage {
    constructor(fb, alertService, geolocation, loader, usersessionService, networkService, emisService, modalCtrl, camera, sqlLite, file, jsonService, router, sidsService) {
        this.fb = fb;
        this.alertService = alertService;
        this.geolocation = geolocation;
        this.loader = loader;
        this.usersessionService = usersessionService;
        this.networkService = networkService;
        this.emisService = emisService;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.sqlLite = sqlLite;
        this.file = file;
        this.jsonService = jsonService;
        this.router = router;
        this.sidsService = sidsService;
        this.schoolList = [];
        this.getSchool = [];
    }
    ngOnInit() {
        this.initialValidator();
    }
    initialValidator() {
        this.form = this.fb.group({
            "PhotoUpload1": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
            "PhotoUploadName1": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
            "PhotoUpload2": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            "PhotoUploadName2": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            "PhotoUpload3": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            "PhotoUploadName3": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            "Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
        });
    }
    ionViewDidEnter() {
        this.emis_username = this.usersessionService.emis_username();
        this.generalServerData();
        // this.getSchoolList();
    }
    generalServerData() {
        this.loader.presentLoading();
        let query = 'SELECT * FROM OlirumVaguparai';
        return this.sqlLite.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.schoolList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.schoolList.push(data.rows.item(i));
                }
                console.log("schoolList", this.schoolList);
            }
            else {
                this.getSchoolList();
            }
        }).catch(err => console.log(err));
    }
    getSchoolList() {
        this.loader.presentLoading();
        this.jsonService.SchoolList().subscribe(res => {
            if (res[0].udise_skl_det) {
                this.schoolList = [];
                this.schoolList = res[0].udise_skl_det;
                // console.log("schoolList",this.schoolList);
                let query = 'DELETE FROM OlirumVaguparai';
                this.sqlLite.getDataLocalDB(query).then(data => {
                    // const dataList = "INSERT INTO OlirumVaguparai VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    // this.schoolList.forEach(element => {
                    //   this.sqlLite.insert(dataList, [null, element.SclId, element.SclNam, element.Udise, "", "", "1", "", "", "1", "", "", "1", "", "", "", "1"])
                    // })
                    let sqlArray = [];
                    this.schoolList.forEach(element => {
                        sqlArray.push(['INSERT INTO OlirumVaguparai VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.SclId, element.SclNam, element.Udise, this.emis_username, "", "", "1", "", "", "1", "", "", "1", "", "", "", "1"]]);
                    });
                    this.sqlLite.bulkInsert(sqlArray).then((insertres) => {
                        this.loader.dismissLoader();
                    });
                });
            }
            else {
                this.loader.dismissLoader();
            }
        });
    }
    searchUdise() {
        debugger;
        this.getSchool = [];
        this.getSchool = this.schoolList.find(x => x.Udise == this.udiseCode);
        this.initialValidator();
        if (this.getSchool) {
            this.formOpen = true;
            if (this.getSchool.PhotoUpload1) {
                this.form.controls['PhotoUpload1'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload1);
                this.form.controls['PhotoUploadName1'].setValue(this.getSchool.PhotoUploadName1);
            }
            if (this.getSchool.PhotoUpload2) {
                this.form.controls['PhotoUpload2'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload2);
                this.form.controls['PhotoUploadName2'].setValue(this.getSchool.PhotoUploadName2);
            }
            if (this.getSchool.PhotoUpload3) {
                this.form.controls['PhotoUpload3'].setValue('data:image/jpeg;base64,' + this.getSchool.PhotoUpload3);
                this.form.controls['PhotoUploadName3'].setValue(this.getSchool.PhotoUploadName3);
            }
            if (this.getSchool.Remarks) {
                this.form.controls['Remarks'].setValue(this.getSchool.Remarks);
            }
            if (!this.getSchool.PhotoUploadName1 || !this.getSchool.PhotoUploadName2 || !this.getSchool.PhotoUploadName3) {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.apiDataGet(this.getSchool.SclId, this.emis_username);
                }
            }
        }
        else {
            this.formOpen = false;
            this.alertService.error("Enter Correct UDISE Code");
        }
    }
    apiDataGet(schlId, ObsrvId) {
        this.emisService.PPOlirumVagupariGet(schlId, ObsrvId).subscribe(res => {
            if (res.status == 200 && res.dataStatus == true) {
                let getData = res.result[0];
                this.getIndexId = res.result[0].IndxId;
                if (!this.getSchool.PhotoUploadName1) {
                    if (getData.BeforePaint) {
                        this.form.controls['PhotoUpload1'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.BeforePaint);
                        this.form.controls['PhotoUploadName1'].setValue(getData.BeforePaint);
                    }
                }
                if (!this.getSchool.PhotoUploadName2) {
                    if (getData.PaintOnProcess) {
                        this.form.controls['PhotoUpload2'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.PaintOnProcess);
                        this.form.controls['PhotoUploadName2'].setValue(getData.PaintOnProcess);
                    }
                }
                if (!this.getSchool.PhotoUploadName2) {
                    if (getData.AfterPaint) {
                        this.form.controls['PhotoUpload3'].setValue('https://deka0egrc3bqo.cloudfront.net/' + getData.AfterPaint);
                        this.form.controls['PhotoUploadName3'].setValue(getData.AfterPaint);
                    }
                }
                this.form.controls['Remarks'].setValue(getData.Remarks);
            }
            else {
                // this.alertService.error(res.message);
            }
        });
    }
    openCamera(id) {
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
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 10485760) {
                        if (id == 1) {
                            this.form.controls['PhotoUpload1'].setValue('data:image/jpeg;base64,' + base[1]);
                            this.form.controls['PhotoUploadName1'].setValue(filename);
                        }
                        if (id == 2) {
                            this.form.controls['PhotoUpload2'].setValue('data:image/jpeg;base64,' + base[1]);
                            this.form.controls['PhotoUploadName2'].setValue(filename);
                        }
                        if (id == 3) {
                            this.form.controls['PhotoUpload3'].setValue('data:image/jpeg;base64,' + base[1]);
                            this.form.controls['PhotoUploadName3'].setValue(filename);
                        }
                        this.getGeolocation();
                        let imgObj = {
                            "Photo": base[1],
                            "PhotoName": filename
                        };
                        // this.imageUpload(id, imgObj);
                        this.S3ImageSave(id, imgObj);
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
        });
    }
    S3ImageSave(id, imgObj) {
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            let s3ImgObj = {
                "records": imgObj
            };
            this.emisService.S3ImageSave(s3ImgObj).subscribe(res => {
                if (res.status == 200 && res.dataStatus == true) {
                    if (id == 1) {
                        let query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 3,PhotoUpload1 ="' + imgObj.Photo + '", PhotoUploadName1 ="' + imgObj.PhotoName + '"' +
                            'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                        return this.sqlLite.update(query).then(data => {
                            this.alertService.success('File Uploaded Successfully');
                        });
                    }
                    if (id == 2) {
                        let query = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 3, PhotoUpload2 ="' + imgObj.Photo + '", PhotoUploadName2 ="' + imgObj.PhotoName + '" ' +
                            'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                        return this.sqlLite.update(query).then(data => {
                            this.alertService.success('File Uploaded Successfully');
                        });
                    }
                    if (id == 3) {
                        let query = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 3, PhotoUpload3 ="' + imgObj.Photo + '", PhotoUploadName3 ="' + imgObj.PhotoName + '" ' +
                            'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                        return this.sqlLite.update(query).then(data => {
                            this.alertService.success('File Uploaded Successfully');
                        });
                    }
                    this.alertService.success('File Uploaded Successfully');
                }
                else {
                    this.imageUpload(id, imgObj);
                }
            });
        }
        else {
            this.imageUpload(id, imgObj);
        }
    }
    imageUpload(id, imgObj) {
        debugger;
        if (id == 1) {
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 2,PhotoUpload1 ="' + imgObj.Photo + '", PhotoUploadName1 ="' + imgObj.PhotoName + '"' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                this.alertService.success('File Uploaded Successfully');
            });
        }
        if (id == 2) {
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 2, PhotoUpload2 ="' + imgObj.Photo + '", PhotoUploadName2 ="' + imgObj.PhotoName + '" ' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                this.alertService.success('File Uploaded Successfully');
            });
        }
        if (id == 3) {
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 2, PhotoUpload3 ="' + imgObj.Photo + '", PhotoUploadName3 ="' + imgObj.PhotoName + '" ' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                this.alertService.success('File Uploaded Successfully');
            });
        }
    }
    deleteFile(i) {
        let empty = "";
        if (i == 1) {
            this.form.controls['PhotoUpload1'].setValue("");
            this.form.controls['PhotoUploadName1'].setValue("");
            this.form.controls['PhotoUpload1'].updateValueAndValidity();
            this.form.controls['PhotoUploadName1'].updateValueAndValidity();
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 1,PhotoUpload1 ="' + empty + '", PhotoUploadName1 ="' + empty + '"' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                // this.alertService.success('File Uploaded Successfully');
            });
        }
        else if (i == 2) {
            this.form.controls['PhotoUpload2'].setValue("");
            this.form.controls['PhotoUploadName2'].setValue("");
            this.form.controls['PhotoUpload2'].updateValueAndValidity();
            this.form.controls['PhotoUploadName2'].updateValueAndValidity();
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 1, PhotoUpload2 ="' + empty + '", PhotoUploadName2 ="' + empty + '" ' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                // this.alertService.success('File Uploaded Successfully');
            });
        }
        else if (i == 3) {
            this.form.controls['PhotoUpload3'].setValue("");
            this.form.controls['PhotoUploadName3'].setValue("");
            this.form.controls['PhotoUpload3'].updateValueAndValidity();
            this.form.controls['PhotoUploadName3'].updateValueAndValidity();
            let query = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 1, PhotoUpload3 ="' + empty + '", PhotoUploadName3 ="' + empty + '" ' +
                'WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
            return this.sqlLite.update(query).then(data => {
                // this.alertService.success('File Uploaded Successfully');
            });
        }
    }
    onSubmit() {
        debugger;
        if (this.form.valid) {
            let finalArr = [];
            let obj = {
                // "IndexId": (this.getIndexId == undefined && this.getIndexId == null) ? "" : this.getIndexId,
                "IndexId": "",
                "SchlId": this.getSchool.SclId,
                "ObservedBy": this.emis_username,
                "BeforePaint": (this.form.value.PhotoUploadName1 == undefined || this.form.value.PhotoUploadName1 == null) ? '' : this.form.value.PhotoUploadName1,
                "PaintOnProcess": (this.form.value.PhotoUploadName2 == undefined || this.form.value.PhotoUploadName2 == null) ? '' : this.form.value.PhotoUploadName2,
                "AfterPaint": (this.form.value.PhotoUploadName3 == undefined || this.form.value.PhotoUploadName3 == null) ? '' : this.form.value.PhotoUploadName3,
                "Remarks": this.form.value.Remarks,
                "Latitude": this.offlinelat,
                "Longitude": this.offlinelone
            };
            finalArr.push(obj);
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                let aruData = {
                    "records": finalArr
                };
                this.emisService.PPOlirumVagupari(aruData).subscribe(res => {
                    if (res.dataStatus) {
                        let query = 'UPDATE OlirumVaguparai SET Status = 3, Remarks ="' + this.form.value.Remarks + '", Latitude ="' + this.offlinelat + '", Longitude ="' + this.offlinelone + '"' +
                            ' WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                        this.sqlLite.update(query).then(data => {
                            this.alertService.success(res.message);
                            this.initialValidator();
                            this.udiseCode = "";
                            this.getSchool = [];
                            this.formOpen = false;
                        });
                    }
                });
            }
            else {
                let query = 'UPDATE OlirumVaguparai SET Status = 2, Remarks ="' + this.form.value.Remarks + '", Latitude ="' + this.offlinelat + '", Longitude ="' + this.offlinelone + '"' +
                    ' WHERE OlirumVaguparai.SclId = "' + this.getSchool.SclId + '" And OlirumVaguparai.Udise = "' + this.getSchool.Udise + '"';
                return this.sqlLite.update(query).then(data => {
                    this.alertService.success("Data Stored in offline");
                    this.initialValidator();
                    this.udiseCode = "";
                    this.getSchool = [];
                    this.formOpen = false;
                });
            }
        }
        else {
            this.alertService.error('Please enter mandatory fields');
        }
    }
    onBack() {
        this.router.navigate(['/tabs/home']);
    }
    viewImage(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            let url;
            if (id == 1) {
                url = this.form.value.PhotoUpload1;
            }
            if (id == 2) {
                url = this.form.value.PhotoUpload2;
            }
            if (id == 3) {
                url = this.form.value.PhotoUpload3;
            }
            const modal = yield this.modalCtrl.create({
                component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_13__.ViewImagePage,
                componentProps: { image: url },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.initialValidator();
        this.getSchool = [];
        this.udiseCode = "";
        this.formOpen = false;
    }
};
OlirumVagupparaiPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__.LoaderServiceService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__.EmisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_7__.Camera },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_10__.JsonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_14__.SidsService }
];
OlirumVagupparaiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-olirum-vagupparai',
        template: _raw_loader_olirum_vagupparai_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_olirum_vagupparai_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OlirumVagupparaiPage);



/***/ }),

/***/ 73634:
/*!*********************************************************************!*\
  !*** ./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content {\n  background: #f3f4fa;\n  height: 100%;\n  padding: 20px 0px 20px;\n  overflow-y: scroll;\n}\n.ion-content .uide-bx {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.ion-content .uide-bx input {\n  border-radius: 5px;\n  padding: 5px 7px;\n  border: 1px solid #888;\n  margin-right: 10px;\n  width: 73%;\n}\n.ion-content .uide-bx ion-button {\n  margin: 0px;\n}\n.ion-content h6 {\n  font-size: 15px;\n  font-weight: 600;\n  padding-top: 10px;\n}\n.ion-content .upld-bx {\n  display: block;\n  background: #fff;\n  width: 90%;\n  margin: 10px auto 18px;\n  padding: 25px 20px;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  position: relative;\n  text-align: center;\n}\n.ion-content .upld-bx:before {\n  content: \"\";\n  position: absolute;\n  border: 2px dashed #e4d9eb;\n  left: 10px;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 10px;\n}\n.ion-content .upld-bx ion-icon {\n  color: #e0b4fc;\n  font-size: 50px;\n}\n.ion-content .upld-bx.img-bx {\n  height: 140px;\n  padding: 12px 12px;\n}\n.ion-content .upld-bx.img-bx img {\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 1000;\n  position: relative;\n}\n.ion-content .upld-bx.img-bx span {\n  background: #a34040;\n  display: inline-block;\n  padding: 4px 6px 0px;\n  border-radius: 8px;\n  position: absolute;\n  right: 13px;\n  height: 27px;\n}\n.ion-content .upld-bx.img-bx span ion-icon {\n  font-size: 16px;\n  color: #fff;\n}\n.ion-content input[type=text] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 10px;\n  width: 90%;\n  margin: 0px auto 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXJ1bS12YWd1cHBhcmFpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR1o7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSWhCO0FBRlk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJaEI7QUFIZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUtwQjtBQUFJO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRVIiLCJmaWxlIjoib2xpcnVtLXZhZ3VwcGFyYWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjRmYTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAudWlkZS1ieHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC51cGxkLWJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0byAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNlNGQ5ZWI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBiNGZjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaW1nLWJ4e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTM0MDQwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDZweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 68218:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/olirum-vagupparai/olirum-vagupparai.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Olirum Vagupparai</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-content\">\r\n    <div class=\"uide-bx\">\r\n      <input type=\"tel\" maxlength=\"11\" [(ngModel)]=\"udiseCode\" placeholder=\"Enter UDISE Code\">\r\n      <ion-button (click)=\"searchUdise()\"><ion-icon name=\"search-outline\" style=\"color:#fff;\"></ion-icon></ion-button>\r\n    </div>\r\n    <div *ngIf=\"getSchool?.Udise\" >\r\n      <h6 style=\"color:#9162b0;padding:5px 20px;\">{{getSchool?.SclNam}} ({{getSchool?.Udise}})</h6>\r\n    </div>\r\n    <form [formGroup]=\"form\" *ngIf=\"formOpen\">\r\n      \r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload1 == ''\" (click)=\"openCamera(1)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 1 <span style=\"color: red;\">*</span></h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload1 != ''\">\r\n        <span (click)=\"deleteFile(1)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload1}}\" alt=\"\" (click)=\"viewImage(1)\" >\r\n      </div>\r\n\r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload2 == ''\" (click)=\"openCamera(2)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 2 </h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload2 != ''\">\r\n        <span (click)=\"deleteFile(2)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload2}}\" alt=\"\" (click)=\"viewImage(2)\" >\r\n      </div>\r\n\r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"form.value.PhotoUpload3 == ''\" (click)=\"openCamera(3)\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Olirum Vagupparai Image 3 </h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"form.value.PhotoUpload3 != ''\">\r\n        <span (click)=\"deleteFile(3)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{form.value.PhotoUpload3}}\" alt=\"\" (click)=\"viewImage(3)\" >\r\n      </div>\r\n\r\n      <h6 style=\"padding:7px 23px 3px;\">Remarks</h6>\r\n      <input type=\"text\" placeholder=\"Enter Remarks\" formControlName=\"Remarks\">\r\n\r\n      <div style=\"text-align: center;\">\r\n        <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Submit</span></ion-button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_olirum-vagupparai_olirum-vagupparai_module_ts-es2015.js.map