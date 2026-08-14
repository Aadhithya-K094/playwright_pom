(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mass-visit_mass-visit_module_ts"],{

/***/ 60000:
/*!***************************************************************!*\
  !*** ./src/app/pages/mass-visit/mass-visit-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassVisitPageRoutingModule": function() { return /* binding */ MassVisitPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mass_visit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mass-visit.page */ 35760);




const routes = [
    {
        path: '',
        component: _mass_visit_page__WEBPACK_IMPORTED_MODULE_0__.MassVisitPage
    }
];
let MassVisitPageRoutingModule = class MassVisitPageRoutingModule {
};
MassVisitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MassVisitPageRoutingModule);



/***/ }),

/***/ 17106:
/*!*******************************************************!*\
  !*** ./src/app/pages/mass-visit/mass-visit.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassVisitPageModule": function() { return /* binding */ MassVisitPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mass_visit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mass-visit-routing.module */ 60000);
/* harmony import */ var _mass_visit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mass-visit.page */ 35760);








let MassVisitPageModule = class MassVisitPageModule {
};
MassVisitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mass_visit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MassVisitPageRoutingModule
        ],
        declarations: [_mass_visit_page__WEBPACK_IMPORTED_MODULE_1__.MassVisitPage]
    })
], MassVisitPageModule);



/***/ }),

/***/ 35760:
/*!*****************************************************!*\
  !*** ./src/app/pages/mass-visit/mass-visit.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassVisitPage": function() { return /* binding */ MassVisitPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_mass_visit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mass-visit.page.html */ 21615);
/* harmony import */ var _mass_visit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mass-visit.page.scss */ 39659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);

















let MassVisitPage = class MassVisitPage {
    constructor(fb, alertService, uploadService, geolocation, http, ionicstorage, usersessionService, networkService, emisService, camera, file, router) {
        this.fb = fb;
        this.alertService = alertService;
        this.uploadService = uploadService;
        this.geolocation = geolocation;
        this.http = http;
        this.ionicstorage = ionicstorage;
        this.usersessionService = usersessionService;
        this.networkService = networkService;
        this.emisService = emisService;
        this.camera = camera;
        this.file = file;
        this.router = router;
        this.myImgUpload1 = '';
        this.myImgUpload2 = '';
        this.myImgUpload3 = '';
        this.formShow = false;
        this.udiseCode = '';
        this.offDataList = {};
        this.offDataPaload = {};
        this.s3ImgArr = [];
        this.s3ImgArrList = [];
    }
    ngOnInit() {
        this.uploadForm = this.fb.group({
            upload1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            upload2: ["", null],
            upload3: ["", null],
            remarks: ["", null]
        });
    }
    ionViewDidEnter() {
        // this.getGeolocation();
        this.emis_username = this.usersessionService.emis_username();
        this.getJsonData();
        this.formShow = false;
        this.getSchool = '';
        this.udiseCode = '';
    }
    onBack() {
        this.router.navigate(['/tabs/home']);
    }
    getJsonData() {
        this.ionicstorage.getData('massVisitSchlLst').then((dataa) => {
            if (dataa != null && dataa != undefined) {
                this.jsonData = dataa;
            }
            else {
                let url = "https://d1wpyxz35bzzz4.cloudfront.net/udise_skl_detail.json";
                this.http.get(url).subscribe((data) => {
                    this.jsonData = data.udise_skl_det;
                    console.log(this.jsonData);
                    this.ionicstorage.insertData_Replace('massVisitSchlLst', this.jsonData);
                });
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('massVisitPayload').then((dataa) => {
            if (dataa != null && dataa != undefined) {
                this.offDataPaload = dataa;
                // console.log("offDataPaload",this.offDataPaload)
                let finalArr = [];
                Object.keys(this.offDataPaload).forEach(key => {
                    finalArr.push(this.offDataPaload[key]);
                    console.log(finalArr, 'finalArr');
                });
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    let aruData = {
                        "records": finalArr
                    };
                    this.massClnPost(aruData);
                }
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('massVisitList').then((dataa) => {
            if (dataa != null && dataa != undefined) {
                this.offDataList = dataa;
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('s3ImgArr').then((dataa) => {
            console.log(dataa, 'dataa');
            if (dataa != null && dataa != undefined) {
                this.s3ImgArr = dataa;
                console.log(this.s3ImgArr, 'this.s3ImgArr');
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    for (let i = 0; i < this.s3ImgArr.length; i++) {
                        this.S3ImageSave(this.s3ImgArr[i]);
                    }
                }
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('s3ImgArrList').then((dataa) => {
            if (dataa != null && dataa != undefined) {
                this.s3ImgArrList = dataa;
            }
        }, (error) => console.error(error));
    }
    searchUdise() {
        var _a, _b, _c;
        debugger;
        this.myImgUpload1 = '';
        this.myImgUpload2 = '';
        this.myImgUpload3 = '';
        this.getSchool = this.jsonData.find(x => x.Udise == this.udiseCode);
        console.log(this.getSchool, 'this.getSchool', this.s3ImgArrList);
        if (typeof this.getSchool != 'undefined' && this.getSchool != '') {
            this.formShow = (this.getSchool == undefined || this.getSchool == '') ? false : true;
            this.uploadForm.reset();
            let ofDtSchlId = this.offDataList[this.getSchool.SclId];
            if (ofDtSchlId != undefined) {
                if (this.s3ImgArrList.length > 0) {
                    let imgTxt1 = (_a = this.s3ImgArrList.find(x => x.PhotoName == ofDtSchlId.BeforeClean)) === null || _a === void 0 ? void 0 : _a.Photo;
                    this.myImgUpload1 = imgTxt1 != undefined ? 'data:image/jpeg;base64,' + imgTxt1 : '';
                    let imgTxt2 = (_b = this.s3ImgArrList.find(x => x.PhotoName == ofDtSchlId.CleanOnProcess)) === null || _b === void 0 ? void 0 : _b.Photo;
                    this.myImgUpload2 = imgTxt2 != undefined ? 'data:image/jpeg;base64,' + imgTxt2 : '';
                    let imgTxt3 = (_c = this.s3ImgArrList.find(x => x.PhotoName == ofDtSchlId.AfterClean)) === null || _c === void 0 ? void 0 : _c.Photo;
                    this.myImgUpload3 = imgTxt3 != undefined ? 'data:image/jpeg;base64,' + imgTxt3 : '';
                    if (this.myImgUpload1 == "") {
                        if (ofDtSchlId.BeforeClean) {
                            this.myImgUpload1 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.BeforeClean;
                        }
                    }
                    if (this.myImgUpload2 == "") {
                        if (ofDtSchlId.CleanOnProcess) {
                            this.myImgUpload2 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.CleanOnProcess;
                        }
                    }
                    if (this.myImgUpload3 == "") {
                        if (ofDtSchlId.AfterClean) {
                            this.myImgUpload3 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.AfterClean;
                        }
                    }
                }
                else {
                    if (ofDtSchlId.BeforeClean) {
                        this.myImgUpload1 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.BeforeClean;
                    }
                    if (ofDtSchlId.CleanOnProcess) {
                        this.myImgUpload2 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.CleanOnProcess;
                    }
                    if (ofDtSchlId.AfterClean) {
                        this.myImgUpload3 = 'https://deka0egrc3bqo.cloudfront.net/' + ofDtSchlId.AfterClean;
                    }
                }
                this.myImgUpload1 = this.myImgUpload1 == undefined ? '' : this.myImgUpload1;
                this.myImgUpload2 = this.myImgUpload2 == undefined ? '' : this.myImgUpload2;
                this.myImgUpload3 = this.myImgUpload3 == undefined ? '' : this.myImgUpload3;
                this.uploadForm.controls['upload1'].setValue(ofDtSchlId.BeforeClean);
                this.uploadForm.controls['upload2'].setValue(ofDtSchlId.CleanOnProcess);
                this.uploadForm.controls['upload3'].setValue(ofDtSchlId.AfterClean);
                this.uploadForm.controls['remarks'].setValue(ofDtSchlId.Remarks);
            }
            else {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.apiDataGet(this.getSchool.SclId, this.emis_username);
                }
            }
        }
        else {
            this.alertService.error('Enter Correct UDISE Code');
        }
    }
    // uploadFile(event, field) {
    //   debugger
    //   if (event.target.files[0] != '' && event.target.files[0] != null && event.target.files[0] != undefined) {
    //     var fileName = event.target.files[0].name;
    //     var splittedName = fileName.split(".");
    //     if (splittedName[1] == 'png' || splittedName[1] == 'jpg' || splittedName[1] == 'jpeg' || splittedName[1] == 'gif'){
    //       if ((event.target.files[0].type == "image/png" || event.target.files[0].type == "image/jpg" || event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/gif") && event.target.files[0].size <= 10485760) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //           let filebase64 = event.target.result as string;
    //           this.dataURL = filebase64.split('base64,')[1];
    //           if(field == 1){
    //             this.myImgUpload1 = filebase64
    //             this.uploadForm.controls['upload1'].setValue(fileName)
    //           }
    //           else if(field == 2){
    //             this.myImgUpload2 = filebase64
    //             this.uploadForm.controls['upload2'].setValue(fileName)
    //           }
    //           else if(field == 3){
    //             this.myImgUpload3 = filebase64
    //             this.uploadForm.controls['upload3'].setValue(fileName)
    //           }
    //           // this['myImgUpload'+field] = filebase64
    //           this.getGeolocation();
    //           let imgObj = {
    //             "Photo":filebase64,
    //             "PhotoName": fileName
    //           }
    //           this.S3ImageSave(imgObj);
    //           this.alertService.success("File upload Successfully")
    //         };
    //         reader.readAsDataURL(event.target.files[0]);
    //       } else {
    //         this.alertService.error('File Can`t uploaded because Image size should not exceed 10 MB');
    //       }
    //     } else {
    //       this.alertService.error('Only upload PDF files');
    //     }
    //   }
    // }
    openCameraOn(frmCntrl) {
        debugger;
        this.uploadForm.controls[frmCntrl].setValue(null);
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
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 10485760) {
                        this.uploadForm.controls[frmCntrl].setValue(filename);
                        if (frmCntrl == 'upload1') {
                            this.myImgUpload1 = 'data:image/jpeg;base64,' + base[1];
                        }
                        else if (frmCntrl == 'upload2') {
                            this.myImgUpload2 = 'data:image/jpeg;base64,' + base[1];
                        }
                        else if (frmCntrl == 'upload3') {
                            this.myImgUpload3 = 'data:image/jpeg;base64,' + base[1];
                        }
                        this.getGeolocation();
                        let imgObj = {
                            "Photo": base[1],
                            "PhotoName": filename
                        };
                        this.S3ImageSave(imgObj);
                        this.alertService.success('File Uploaded Successfully');
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
    deleteFile(i) {
        if (i == 1) {
            this.myImgUpload1 = '';
            this.uploadForm.controls['upload1'].setValue(null);
        }
        else if (i == 2) {
            this.myImgUpload2 = '';
            this.uploadForm.controls['upload2'].setValue(null);
        }
        else if (i == 3) {
            this.myImgUpload3 = '';
            this.uploadForm.controls['upload3'].setValue(null);
        }
    }
    onSubmit() {
        if (this.uploadForm.valid) {
            let finalArr = [];
            let obj = {
                // "IndexId": (this.getIndexId == undefined && this.getIndexId == null) ? "" : this.getIndexId,
                "IndexId": "",
                "SchlId": this.getSchool.SclId,
                "ObservedBy": this.emis_username,
                "BeforeClean": (this.uploadForm.value.upload1 == undefined || this.uploadForm.value.upload1 == null) ? '' : this.uploadForm.value.upload1,
                "CleanOnProcess": (this.uploadForm.value.upload2 == undefined || this.uploadForm.value.upload2 == null) ? '' : this.uploadForm.value.upload2,
                "AfterClean": (this.uploadForm.value.upload3 == undefined || this.uploadForm.value.upload3 == null) ? '' : this.uploadForm.value.upload3,
                "Remarks": this.uploadForm.value.remarks,
                "Latitude": this.offlinelat,
                "Longitude": this.offlinelone
            };
            finalArr.push(obj);
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                let aruData = {
                    "records": finalArr
                };
                this.massClnPost(aruData);
            }
            else {
                if (typeof this.offDataPaload[this.getSchool.SclId] == 'undefined') {
                    this.offDataPaload[this.getSchool.SclId] = {};
                }
                this.offDataPaload[this.getSchool.SclId] = obj;
                this.ionicstorage.insertData_Replace('massVisitPayload', this.offDataPaload);
                this.alertService.success("Data Stored in offline");
            }
            if (typeof this.offDataList[this.getSchool.SclId] == 'undefined') {
                this.offDataList[this.getSchool.SclId] = {};
            }
            this.offDataList[this.getSchool.SclId] = obj;
            this.ionicstorage.insertData_Replace('massVisitList', this.offDataList);
            this.myImgUpload1 = '';
            this.myImgUpload2 = '';
            this.myImgUpload3 = '';
            this.udiseCode = '';
            this.getSchool = '';
            this.uploadForm.reset();
            this.formShow = false;
        }
        else {
            this.alertService.error('Please enter mandatory fields');
        }
    }
    massClnPost(aruData) {
        this.emisService.PPSchlMassClean(aruData).subscribe((res) => {
            try {
                if (res.status == 200 && res.dataStatus == true) {
                    this.ionicstorage.removeKey('massVisitPayload').then((dataa) => {
                        console.log(dataa, 'massVisitPayload data removed');
                        this.offDataPaload = {};
                    }, (error) => console.error(error));
                    this.ionicstorage.removeKey('massVisitList').then((dataa) => {
                        console.log(dataa, 'massVisitList data removed');
                    }, (error) => console.error(error));
                    this.alertService.success(res.message);
                }
                else {
                    throw res.message;
                }
            }
            catch (err) {
                this.alertService.error(err);
            }
        }, (error) => {
            this.alertService.error(error === null || error === void 0 ? void 0 : error.message);
        });
    }
    apiDataGet(schlId, ObsrvId) {
        this.emisService.PPSchlMassCleanGet(schlId, ObsrvId).subscribe((res) => {
            try {
                if (res.status == 200 && res.dataStatus == true) {
                    console.log(res.result[0], 'get api data');
                    let getData = res.result[0];
                    this.getIndexId = res.result[0].IndxId;
                    this.myImgUpload1 = getData.BeforeClean == '' ? '' : 'https://deka0egrc3bqo.cloudfront.net/' + getData.BeforeClean;
                    this.myImgUpload2 = getData.CleanOnProcess == '' ? '' : 'https://deka0egrc3bqo.cloudfront.net/' + getData.CleanOnProcess;
                    this.myImgUpload3 = getData.AfterClean == '' ? '' : 'https://deka0egrc3bqo.cloudfront.net/' + getData.AfterClean;
                    this.uploadForm.controls['upload1'].setValue(getData.BeforeClean);
                    this.uploadForm.controls['upload2'].setValue(getData.CleanOnProcess);
                    this.uploadForm.controls['upload3'].setValue(getData.AfterClean);
                    this.uploadForm.controls['remarks'].setValue(getData.Remarks);
                }
            }
            catch (err) {
                this.alertService.error(err);
            }
        }, (error) => {
            this.alertService.error(error === null || error === void 0 ? void 0 : error.message);
        });
    }
    S3ImageSave(aruData) {
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            let s3ImgObj = {
                "records": aruData
            };
            this.emisService.S3ImageSave(s3ImgObj).subscribe((res) => {
                try {
                    if (res.status == 200 && res.dataStatus == true) {
                        // console.log("Saved data", this.s3ImgArr, this.s3ImgArrList)
                        this.ionicstorage.removeKey('s3ImgArr').then((dataa) => {
                            console.log(dataa, 's3ImgArr data removed');
                            this.s3ImgArr = [];
                        }, (error) => console.error(error));
                        this.ionicstorage.removeKey('s3ImgArrList').then((dataa) => {
                            console.log(dataa, 's3ImgArrList data removed');
                        }, (error) => console.error(error));
                        // this.alertService.success(res.message)
                    }
                    else {
                        throw res.message;
                    }
                }
                catch (err) {
                    this.alertService.error(err);
                }
            }, (error) => {
                this.alertService.error(error === null || error === void 0 ? void 0 : error.message);
            });
        }
        else {
            this.s3ImgArr.push(aruData);
            this.ionicstorage.insertData_Replace('s3ImgArr', this.s3ImgArr);
        }
        this.s3ImgArrList.push(aruData);
        this.ionicstorage.insertData_Replace('s3ImgArrList', this.s3ImgArrList);
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
    ionViewWillLeave() {
        this.offDataPaload = {};
        this.s3ImgArr = [];
    }
};
MassVisitPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_8__.EmisService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router }
];
MassVisitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-mass-visit',
        template: _raw_loader_mass_visit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mass_visit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MassVisitPage);



/***/ }),

/***/ 39659:
/*!*******************************************************!*\
  !*** ./src/app/pages/mass-visit/mass-visit.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content {\n  background: #f3f4fa;\n  height: 100%;\n  padding: 20px 0px 20px;\n  overflow-y: scroll;\n}\n.ion-content .uide-bx {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.ion-content .uide-bx input {\n  border-radius: 5px;\n  padding: 5px 7px;\n  border: 1px solid #888;\n  margin-right: 10px;\n  width: 73%;\n}\n.ion-content .uide-bx ion-button {\n  margin: 0px;\n}\n.ion-content h6 {\n  font-size: 15px;\n  font-weight: 600;\n  padding-top: 10px;\n}\n.ion-content .upld-bx {\n  display: block;\n  background: #fff;\n  width: 90%;\n  margin: 10px auto 18px;\n  padding: 25px 20px;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n  position: relative;\n  text-align: center;\n}\n.ion-content .upld-bx:before {\n  content: \"\";\n  position: absolute;\n  border: 2px dashed #e4d9eb;\n  left: 10px;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 10px;\n}\n.ion-content .upld-bx ion-icon {\n  color: #e0b4fc;\n  font-size: 50px;\n}\n.ion-content .upld-bx.img-bx {\n  height: 140px;\n  padding: 12px 12px;\n}\n.ion-content .upld-bx.img-bx img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.ion-content .upld-bx.img-bx span {\n  background: #a34040;\n  display: inline-block;\n  padding: 4px 6px 0px;\n  border-radius: 8px;\n  position: absolute;\n  right: 13px;\n  height: 27px;\n}\n.ion-content .upld-bx.img-bx span ion-icon {\n  font-size: 16px;\n  color: #fff;\n}\n.ion-content input[type=text] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 10px;\n  width: 90%;\n  margin: 0px auto 20px;\n  display: block;\n}\n.serverSync {\n  font-size: 12px;\n  color: red;\n  background-color: #fff;\n  padding: 3%;\n  margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3MtdmlzaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHWjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFGWTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBS3BCO0FBQUk7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFBWSxVQUFBO0FBRWhCIiwiZmlsZSI6Im1hc3MtdmlzaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjRmYTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAudWlkZS1ieHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC51cGxkLWJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0byAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNlNGQ5ZWI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBiNGZjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaW1nLWJ4e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhMzQwNDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggNnB4IDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXJ2ZXJTeW5jIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMyU7bWFyZ2luOiAzJTsgXHJcbn0iXX0= */");

/***/ }),

/***/ 21615:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mass-visit/mass-visit.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"onBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Mass Cleaning Visit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-content\">\r\n    <ion-row *ngIf=\"s3ImgArr.length > 0 && offDataPaload\" class=\"serverSync\">\r\n      <ion-col size=\"12\">\r\n        <div>\r\n          <p>”Your data is not synced to server. Please turn on your internet connection.”</p> \r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"uide-bx\">\r\n      <input type=\"number\" [(ngModel)]=\"udiseCode\" placeholder=\"Enter UDISE Code\">\r\n      <ion-button (click)=\"searchUdise()\"><ion-icon name=\"search-outline\" style=\"color:#fff;\"></ion-icon></ion-button>\r\n    </div>\r\n    <h6 *ngIf=\"getSchool\" style=\"color:#9162b0;padding:5px 20px;\">{{getSchool?.SclNam}} ({{getSchool?.Udise}})</h6>\r\n    <form [formGroup]=\"uploadForm\" *ngIf=\"formShow\">\r\n      <!-- <input id=\"uploadimg1\" type=\"file\" (change)=\"uploadFile($event, 1)\" accept=\"image/*\" style=\"display:none;\"/> -->\r\n      <!-- <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"myImgUpload1 == ''\">\r\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n        <h6>Upload Mass Cleaning Image 1</h6>\r\n      </label> -->\r\n      <label for=\"uploadimg1\" class=\"upld-bx\" *ngIf=\"myImgUpload1 == ''\" (click)=\"openCameraOn('upload1')\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Mass Cleaning Image 1 <span style=\"color: red;\">*</span></h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"myImgUpload1 != ''\">\r\n        <span (click)=\"deleteFile(1)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{myImgUpload1}}\" alt=\"\">\r\n      </div>\r\n  \r\n      <!-- <input id=\"uploadimg2\" type=\"file\" (change)=\"uploadFile($event, 2)\" accept=\"image/*\" style=\"display:none;\"/> -->\r\n      <!-- <label for=\"uploadimg2\" class=\"upld-bx\" *ngIf=\"myImgUpload2 == ''\">\r\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n        <h6>Upload Mass Cleaning Image 2</h6>\r\n      </label> -->\r\n      <label for=\"uploadimg2\" class=\"upld-bx\" *ngIf=\"myImgUpload2 == ''\" (click)=\"openCameraOn('upload2')\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Mass Cleaning Image 2</h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"myImgUpload2 != ''\">\r\n        <span (click)=\"deleteFile(2)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{myImgUpload2}}\" alt=\"\">\r\n      </div>\r\n  \r\n      <!-- <input id=\"uploadimg3\" type=\"file\" (change)=\"uploadFile($event, 3)\" accept=\"image/*\" style=\"display:none;\"/> -->\r\n      <!-- <label for=\"uploadimg3\" class=\"upld-bx\" *ngIf=\"myImgUpload3 == ''\">\r\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n        <h6>Upload Mass Cleaning Image 3</h6>\r\n      </label> -->\r\n      <label for=\"uploadimg3\" class=\"upld-bx\" *ngIf=\"myImgUpload3 == ''\" (click)=\"openCameraOn('upload3')\">\r\n        <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        <h6>Capture Mass Cleaning Image 3</h6>\r\n      </label>\r\n      <div class=\"upld-bx img-bx\" *ngIf=\"myImgUpload3 != ''\">\r\n        <span (click)=\"deleteFile(3)\"><ion-icon name=\"trash-outline\"></ion-icon></span>\r\n        <img src=\"{{myImgUpload3}}\" alt=\"\">\r\n      </div>\r\n\r\n      <h6 style=\"padding:7px 23px 3px;\">Remarks</h6>\r\n      <input type=\"text\" placeholder=\"Enter Remarks\" formControlName=\"remarks\">\r\n\r\n      <div style=\"text-align: center;\">\r\n        <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Submit</span></ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mass-visit_mass-visit_module_ts-es2015.js.map