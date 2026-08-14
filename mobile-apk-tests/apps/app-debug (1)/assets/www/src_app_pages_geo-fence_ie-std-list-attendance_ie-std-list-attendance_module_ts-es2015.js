(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_geo-fence_ie-std-list-attendance_ie-std-list-attendance_module_ts"],{

/***/ 30772:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/geo-fence/ie-std-list-attendance/ie-std-list-attendance-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IeStdListAttendancePageRoutingModule": function() { return /* binding */ IeStdListAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ie_std_list_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-std-list-attendance.page */ 41436);




const routes = [
    {
        path: '',
        component: _ie_std_list_attendance_page__WEBPACK_IMPORTED_MODULE_0__.IeStdListAttendancePage
    }
];
let IeStdListAttendancePageRoutingModule = class IeStdListAttendancePageRoutingModule {
};
IeStdListAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IeStdListAttendancePageRoutingModule);



/***/ }),

/***/ 12314:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/geo-fence/ie-std-list-attendance/ie-std-list-attendance.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IeStdListAttendancePageModule": function() { return /* binding */ IeStdListAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ie_std_list_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-std-list-attendance-routing.module */ 30772);
/* harmony import */ var _ie_std_list_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ie-std-list-attendance.page */ 41436);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);









let IeStdListAttendancePageModule = class IeStdListAttendancePageModule {
};
IeStdListAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _ie_std_list_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.IeStdListAttendancePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [
            _ie_std_list_attendance_page__WEBPACK_IMPORTED_MODULE_1__.IeStdListAttendancePage
        ],
        exports: []
    })
], IeStdListAttendancePageModule);



/***/ }),

/***/ 41436:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/geo-fence/ie-std-list-attendance/ie-std-list-attendance.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IeStdListAttendancePage": function() { return /* binding */ IeStdListAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ie_std_list_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ie-std-list-attendance.page.html */ 20533);
/* harmony import */ var _ie_std_list_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ie-std-list-attendance.page.scss */ 67591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonpages/view-image/view-image.page */ 29535);


















let IeStdListAttendancePage = class IeStdListAttendancePage {
    constructor(router, alertService, geolocation, emisService, userSessionService, ionicstorage, http, route, fb, platform, camera, file, uploadService, modalCtrl) {
        this.router = router;
        this.alertService = alertService;
        this.geolocation = geolocation;
        this.emisService = emisService;
        this.userSessionService = userSessionService;
        this.ionicstorage = ionicstorage;
        this.http = http;
        this.route = route;
        this.fb = fb;
        this.platform = platform;
        this.camera = camera;
        this.file = file;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.searchText = '';
        this.schStdList = [];
        this.paramdata = '';
        this.domainList = [];
        this.noParents = '';
        this.docUpload = '';
        this.fileType = '';
        this.doc_file = '';
        this.interVenTimList = [];
    }
    ngOnInit() {
        this.form = this.fb.group({});
        for (let i = 10; i <= 60; i++) {
            if (i % 5 == 0) {
                this.interVenTimList.push({ value: i, label: i + ' mins' });
            }
        }
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((res) => {
            if (res) {
                this.paramdata = JSON.parse(res.data);
            }
        });
        this.searchText = '';
        this.getDomains();
    }
    goToBack() {
        this.router.navigate(['/tabs/ie-center-geo-fence']);
    }
    getIeCenterStdList() {
        debugger;
        let obj = {
            user_id: this.paramdata.flag == 1 ? this.userSessionService.BlkdId() : this.userSessionService.emis_username(),
            flag: this.paramdata.flag
        };
        this.emisService.IECntrMapStdList(obj).subscribe(res => {
            if (res.dataStatus) {
                this.schStdList = [];
                // this.doc_file = res.result[0].Doc;
                // this.noParents = res.result[0].PrntNo?res.result[0].PrntNo:'';
                res.result.forEach(obj1 => {
                    if (obj1.domList) {
                        debugger;
                        obj1.domain = obj1.domList.map(obj3 => {
                            obj3.domain_name = (this.domainList.find(dom => dom.domain_idx_id == obj3.domain)).domain_name;
                            return obj3;
                        });
                    }
                    obj1.isMarked = obj1.StdAdId ? true : false;
                    // if(obj1.Duration) {
                    //   obj1.Duration = this.timeConvert(obj1.Duration);
                    // }
                    // if (obj1.domain) {
                    //   obj1.domain = obj1.domain.split(',');
                    //   obj1.domain = this.domainList.filter(obj3 => { return obj1.domain.includes(""+obj3.domain_idx_id+"") })
                    // }
                    this.schStdList.push(obj1);
                    this.schStdList = this.assessSort(this.schStdList, 'isMarked');
                });
                ;
            }
            else {
                this.schStdList = [];
                this.alertService.warning(res.message);
            }
            ;
        });
    }
    timeConvert(obj1) {
        debugger;
        let hrs = new Date(obj1).getHours();
        let mins = new Date(obj1).getMinutes();
        obj1 = hrs + ":" + mins;
        return obj1;
    }
    getDomains() {
        this.ionicstorage.getData('cwsn_domainlist_ie').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!data) {
                let nodal_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_domainlist_ie_stage.json';
                this.http.get(nodal_json).subscribe((data) => {
                    if (data) {
                        this.ionicstorage.insertData_Replace('cwsn_domainlist_ie', data);
                        this.getDomains();
                    }
                }, error => {
                    this.alertService.warning('There is some error while getting domains');
                });
            }
            else {
                let urt1 = this.userSessionService.emis_usertype1();
                let allDomIds = [...new Map(data.cwsn_domain_list_ie.map(item => [item['domain_idx_id'], item])).values()];
                this.domainList = allDomIds.filter((obj) => { return obj.usertype == urt1; });
                this.getIeCenterStdList();
            }
        }));
    }
    finalSubmit(form) {
        if (form.valid) {
            let arr = [];
            for (let i = 0; i < this.schStdList.length; i++) {
                if (this.schStdList[i].AttndSts && !this.schStdList[i].isMarked && this.schStdList[i].isChanged) {
                    let dom = '';
                    debugger;
                    // if (this.schStdList[i].domain) {
                    //   this.schStdList[i].domain.forEach(obj => {
                    //     dom = dom ? dom + ',' + obj.domain_idx_id : obj.domain_idx_id;
                    //   });
                    // }
                    arr.push({
                        "UserId": this.schStdList[i].userId,
                        "SchoolId": this.schStdList[i].school_id,
                        "AddedBy": this.userSessionService.emis_username(),
                        "UserType": this.paramdata.flag,
                        "Domain": this.schStdList[i].domain ? this.schStdList[i].domain : [],
                        "Remarks": this.schStdList[i].remarks,
                        "AttndSts": this.schStdList[i].AttndSts,
                        "PrntNo": this.noParents,
                        "Doc": this.doc_file,
                        "IndexId": this.schStdList[i].StdAdId
                    });
                }
            }
            let obj = {
                "records": arr
            };
            if (arr.length > 0) {
                this.emisService.IECntrMapStdCUD(obj).subscribe(res => {
                    if (res.dataStatus) {
                        for (let i = 0; i < arr.length; i++) {
                            let idx = this.schStdList.findIndex(obj => { return obj.userId == arr[i].UserId; });
                            if (idx != -1) {
                                this.schStdList[idx].isMarked = true;
                                // if(this.schStdList[idx].Duration) {
                                //   this.schStdList[idx].Duration = this.timeConvert(this.schStdList[idx].Duration);
                                // }
                            }
                        }
                        this.schStdList = this.assessSort(this.schStdList, 'isMarked');
                        this.alertService.success(res.message);
                    }
                    else {
                        this.alertService.warning(res.message);
                    }
                    ;
                });
            }
            else {
                this.alertService.warning('Please mark attendance for students');
            }
        }
        else {
            this.alertService.warning('Form is invalid');
        }
    }
    openCameraOn() {
        // this.checkCmaeraPermission();
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: false,
        };
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                var bucketName = "renewalapplicationemis";
                let expiry = 300;
                let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");
                this.file.readAsDataURL(imagename, filename).then((base64string) => {
                    if (base64string) {
                        const base = base64string.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 5242880) {
                            let obj = { bucketName, ext: splitedImage[1], filename: splitedImage[0], expiry };
                            this.commonFileUpload(obj, blob, base64string);
                        }
                        else {
                            this.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                        }
                    }
                });
            }, (err) => {
                // Handle error
                this.alertService.error("There is some error");
            });
        });
    }
    onSelectFile(event, forData) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size <= 5242880) {
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                if (splittedName[1].toLowerCase() == 'jpg' || splittedName[1].toLowerCase() == 'png' || splittedName[1].toLowerCase() == 'jpeg') {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        let base64 = fileReader.result;
                        const base = base64.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');
                        var bucketName = "renewalapplicationemis";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        let obj = { bucketName, ext, filename, expiry };
                        this.commonFileUpload(obj, blob, base64);
                    };
                }
                else {
                    this.alertService.warning("Only jpg and png allowd");
                }
            }
            else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
            }
        }
    }
    commonFileUpload(obj, uploadFile, base64) {
        this.uploadService.getSignedUrl(obj.bucketName, obj.ext, obj.filename, obj.expiry).subscribe((result) => {
            if (result) {
                this.uploadService.uploadFile(result.url, uploadFile).subscribe((res) => {
                    this.alertService.success('File Uploaded Successfully');
                    this.doc_file = result.key;
                    this.getUploadedFiles1(result.key);
                });
            }
            else {
                this.alertService.error('Error in Uploading File please try again');
            }
        });
    }
    getUploadedFiles1(filename) {
        var filename;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (filename) {
                var bucketName = "renewalapplicationemis";
                filename = filename;
                let expiry = 1800;
                this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        const modal = yield this.modalCtrl.create({
                            component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__.ViewImagePage,
                            componentProps: { image: result.url },
                            cssClass: 'view-image-modal'
                        });
                        yield modal.present();
                    }
                    else {
                        this.alertService.error('Error while getting image');
                    }
                }));
            }
            else {
                this.alertService.warning('No data found');
            }
        });
    }
    assessSort(array, field) {
        array.sort(function (x, y) {
            return (x[field] == y[field]) ? 1 : !x[field] ? -1 : 1;
        });
        return array;
    }
    presentAbsChange(item) {
        let idx = this.schStdList.findIndex(obj => { return obj.userId == item.userId; });
        if (idx != -1) {
            this.schStdList[idx].isChanged = true;
        }
        debugger;
    }
};
IeStdListAttendancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_10__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController }
];
IeStdListAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-ie-std-list-attendance',
        template: _raw_loader_ie_std_list_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ie_std_list_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IeStdListAttendancePage);



/***/ }),

/***/ 67591:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/geo-fence/ie-std-list-attendance/ie-std-list-attendance.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: #fff;\n}\n\n.card-align {\n  margin: 0;\n}\n\n.card-align .cards {\n  padding: 10px;\n}\n\n.card-align .cards .cluster-design {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  border-left: 5px solid #b14fdc;\n  border-radius: 15px;\n  padding: 10px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background: #b14fdc;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: #fff;\n}\n\n.grn {\n  background-color: rgba(0, 128, 0, 0.562);\n  color: white;\n}\n\n.card-expand {\n  margin-top: 15px;\n}\n\n.bt-g {\n  border-top: 1px solid #80808085;\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 5px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.customInput::-moz-placeholder {\n  color: var(--primary-text-color);\n}\n\n.customInput::placeholder {\n  color: var(--primary-text-color);\n}\n\n.multiSelectCus {\n  border: 1px solid var(--primary-text-color);\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 3px;\n  width: 100%;\n}\n\n.cuslabel {\n  color: var(--ion-color-primary);\n}\n\n.gap-10p {\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.gap-5p {\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.errorMsg {\n  color: #ff5252;\n  font-size: 12px;\n  margin: 2px;\n}\n\n.fileIcons {\n  font-size: 70px;\n  color: #343232;\n  background-color: white;\n}\n\n.opacity-50p {\n  opacity: 0.5;\n}\n\n.cusFlexCol {\n  display: flex;\n  flex-direction: column;\n}\n\n.cusFlexCol .card-align {\n  max-height: 500px;\n  overflow-y: auto;\n}\n\n.m0 {\n  margin: 0;\n}\n\n.cusViewIcon {\n  font-size: 22px;\n}\n\n.cusInputPadd {\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImllLXN0ZC1saXN0LWF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVFO0VBQ0UsYUFBQTtBQUFKOztBQUVJO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURSOztBQUlNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZSOztBQUlRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZWOztBQVNBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFFRSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFQRjs7QUFVQTtFQUNFLGdDQUFBO0FBUEY7O0FBTUE7RUFDRSxnQ0FBQTtBQVBGOztBQVVBO0VBQ0UsMkNBQUE7RUFDQSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQRjs7QUFVQTtFQUNFLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQUEsU0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUFBLFFBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBT0c7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBU0E7RUFDRSxTQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkYiLCJmaWxlIjoiaWUtc3RkLWxpc3QtYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuXHJcbiAgLmNhcmRzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2IxNGZkYztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG5cclxuICAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAuY2x1c3Rlci10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24tb3V0ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjE0ZmRjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgICAgICAgLmljb24taW5uZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdybiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNTYyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWV4cGFuZCB7XHJcbiAgLy8gdHJhbnNpdGlvbjogMXM7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ0LWcge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwODU7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tSW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLm11bHRpU2VsZWN0Q3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5nYXAtMTBwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5nYXAtNXAge1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4uZXJyb3JNc2cge1xyXG4gIGNvbG9yOiAjZmY1MjUyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmZpbGVJY29ucyB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIGNvbG9yOiAjMzQzMjMyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5vcGFjaXR5LTUwcCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY3VzRmxleENvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAuY2FyZC1hbGlnbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgIH1cclxufVxyXG5cclxuLm0wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jdXNWaWV3SWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY3VzSW5wdXRQYWRkIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59Il19 */");

/***/ }),

/***/ 20533:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geo-fence/ie-std-list-attendance/ie-std-list-attendance.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      IE Center Students\r\n      <div>({{paramdata.cntrName}})</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"px-3 mt-2\">\r\n    <ion-card class=\"card-align\">\r\n      <div class=\"schDetails p-3 \">\r\n        <div class=\"\">\r\n          <div>\r\n            <ion-label class=\"bold cuslabel\">\r\n              1. மையத்தில் குழந்தைகளுக்கு வழங்கப்பட்ட செயல்பாடுகளில் எத்தனை பெற்றோர்கள் பங்கேற்றனர்?/\r\n              How many parents participated in the intervention provided at the center for the children?\r\n            </ion-label>\r\n          </div>\r\n          <div class=\"mt-1\">\r\n            <input class=\"customInput p-2 col-12\" type=\"number\" [(ngModel)]=\"noParents\" maxlength=\"3\">\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <div>\r\n            <ion-label class=\"bold cuslabel\">\r\n              2. வருகைபுரிந்துள்ள மாற்றுத்திறன் மாணவருடன் இணைந்து எடுத்த புகைப்படத்தை பதிவேற்றம் செய்யவேண்டும்\r\n            </ion-label>\r\n          </div>\r\n          <div class=\"mt-1\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"text-center\">\r\n                <div>\r\n                  <ion-icon name=\"camera\" class=\"fileIcons\" (click)=\"openCameraOn()\"></ion-icon>\r\n                </div>\r\n                <ion-label class=\"text-center\">Camera</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" class=\"text-center\" *ngIf=\"doc_file\">\r\n                <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"getUploadedFiles1(doc_file)\">View\r\n                </ion-button>\r\n                <div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"schStdList.length>0\" class=\"px-3 mt-2\">\r\n    <ion-item class=\"customInput\">\r\n      <ion-input class=\"col-12\" placeholder=\"Search\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n      </ion-input>\r\n      <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n    </ion-item>\r\n    <form class=\"mt-2 cusFlexCol\" #form=\"ngForm\" (ngSubmit)=\"finalSubmit(form)\">\r\n      <ion-card class=\"card-align\">\r\n        <div class=\"cards\">\r\n          <ng-container *ngFor=\"let item of schStdList | searchall:searchText;let i=index;\">\r\n            <ion-card class=\"cluster-design\" [class.grn]=\"item.IndexId\" ngModelGroup=\"{{ i }}\">\r\n              <div class=\"cluster-text\">\r\n                <div>\r\n                  <span>{{item.name }} ({{item.userId}})</span> /\r\n                  <span>{{item.class}}-{{item.section}}</span> /\r\n                  <span>{{item.school_name}}({{item.udise}})</span>\r\n                </div>\r\n\r\n                <ion-icon name=\"eye-outline\" *ngIf=\"item.Doc\" class=\"cusViewIcon\" (click)=\"getUploadedFiles1(item.Doc)\">\r\n                </ion-icon>\r\n              </div>\r\n              <div class=\"mt-2 d-flex justify-content-between align-items-center\">\r\n                <div>\r\n                  <ion-label class=\"bold cuslabel\"> Status\r\n                  </ion-label>\r\n                </div>\r\n                <div class=\"mt-1\">\r\n                  <ion-radio-group class=\"d-flex gap-10p\" [(ngModel)]=\"item.AttndSts\" #AttndSts=\"ngModel\"\r\n                    name=\"AttndSts\" (ionChange)=\"presentAbsChange(item)\">\r\n                    <div class=\"d-flex gap-5p\">\r\n                      <ion-label color=\"success\"><b>P</b></ion-label>\r\n                      <ion-radio slot=\"start\" [value]=\"'1'\" [disabled]=\"item.isMarked\"></ion-radio>\r\n                    </div>\r\n                    <div class=\"d-flex gap-5p\">\r\n                      <ion-label color=\"danger\"><b>A</b></ion-label>\r\n                      <ion-radio slot=\"start\" [value]=\"'2'\" [disabled]=\"item.isMarked\"></ion-radio>\r\n                    </div>\r\n                  </ion-radio-group>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-2 bt-g\" *ngIf=\"item.AttndSts==1\">\r\n                <div class=\"mt-2\" *ngIf=\"!item.isMarked\">\r\n                  <div>\r\n                    <ion-label class=\"bold cuslabel inMandatory\"> Domain\r\n                    </ion-label>\r\n                  </div>\r\n                  <div class=\"mt-1\">\r\n                    <ion-item class=\"multiSelectCus\">\r\n                      <ionic-selectable #domain=\"ngModel\" placeholder=\"Select domain\" [(ngModel)]=\"item.domain\"\r\n                        name=\"domain\" itemValueField=\"domain_idx_id\" itemTextField=\"domain_name\" [items]=\"domainList\"\r\n                        [canSearch]=\"true\" [isMultiple]=\"true\" [required]=\"item.AttndSts==1\" [disabled]=\"item.isMarked\">\r\n                      </ionic-selectable>\r\n                    </ion-item>\r\n                    <div class=\"errorMsg\" *ngIf=\"domain.errors && domain.errors.required\">\r\n                      Required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-2\" *ngFor=\"let dm of item.domain;\">\r\n                  <div>\r\n                    <ion-label class=\"bold cuslabel inMandatory\">{{dm.domain_name}}\r\n                    </ion-label>\r\n                  </div>\r\n                  <ion-row class=\"mt-1\">\r\n                    <ion-col size=\"3\">\r\n                      <div>\r\n                        <div *ngIf=\"!item.isMarked\">\r\n                          <!-- <ion-datetime placeholder=\"Duration\"  class=\"customInput\" [disabled]=\"item.isMarked\"\r\n                            displayFormat=\"HH:mm\" name=\"Duration{{dm.domain_name}}\" #Duration=\"ngModel\" [(ngModel)]=\"dm.Duration\"\r\n                            [required]=\"item.AttndSts==1\" min=\"00:01\" max=\"01:00\">\r\n                          </ion-datetime> -->\r\n                          <ion-select class=\"customInput\" placeholder=\"Select Duration\" [disabled]=\"item.isMarked\"\r\n                            name=\"Duration{{dm.domain_name}}\" #Duration=\"ngModel\" [(ngModel)]=\"dm.duration\"\r\n                            [required]=\"item.AttndSts==1\">\r\n                            <ion-select-option *ngFor=\"let it of interVenTimList\" [value]=\"it.value\">\r\n                              {{it.label}}\r\n                            </ion-select-option>\r\n                          </ion-select>\r\n                          <div class=\"errorMsg\" *ngIf=\"Duration.errors && Duration.errors.required\">\r\n                            Required\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"item.isMarked\">\r\n                          <h6 class=\"mt-3\">\r\n                            {{dm.duration}} mins\r\n                          </h6>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"9\">\r\n                      <div>\r\n                        <div class=\"\">\r\n                          <input class=\"customInput cusInputPadd col-12\" type=\"text\" placeholder=\"Intervention\"\r\n                            [(ngModel)]=\"dm.remarks\" name=\"remarks{{dm.domain_name}}\"\r\n                            [class.opacity-50p]=\"item.isMarked\" #remarks=\"ngModel\" [required]=\"item.AttndSts==1\"\r\n                            maxlength=\"250\" [disabled]=\"item.isMarked\">\r\n                          <div class=\"errorMsg\" *ngIf=\"remarks.errors && remarks.errors.required\">\r\n                            Required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </ion-card>\r\n          </ng-container>\r\n        </div>\r\n      </ion-card>\r\n      <div class=\"pt-1 pb-1 text-center cusFooter\">\r\n        <ion-button color=\"tertiary\" type=\"submit\">Submit</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_geo-fence_ie-std-list-attendance_ie-std-list-attendance_module_ts-es2015.js.map