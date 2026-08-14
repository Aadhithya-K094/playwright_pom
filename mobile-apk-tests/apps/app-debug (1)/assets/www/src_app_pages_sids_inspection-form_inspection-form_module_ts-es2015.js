(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_inspection-form_inspection-form_module_ts"],{

/***/ 94385:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sids/inspection-form/inspection-form-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionFormPageRoutingModule": function() { return /* binding */ InspectionFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inspection_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection-form.page */ 33857);




const routes = [
    {
        path: '',
        component: _inspection_form_page__WEBPACK_IMPORTED_MODULE_0__.InspectionFormPage
    }
];
let InspectionFormPageRoutingModule = class InspectionFormPageRoutingModule {
};
InspectionFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InspectionFormPageRoutingModule);



/***/ }),

/***/ 25221:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/inspection-form/inspection-form.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionFormPageModule": function() { return /* binding */ InspectionFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inspection_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection-form-routing.module */ 94385);
/* harmony import */ var _inspection_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection-form.page */ 33857);








let InspectionFormPageModule = class InspectionFormPageModule {
};
InspectionFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inspection_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectionFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_inspection_form_page__WEBPACK_IMPORTED_MODULE_1__.InspectionFormPage]
    })
], InspectionFormPageModule);



/***/ }),

/***/ 33857:
/*!********************************************************************!*\
  !*** ./src/app/pages/sids/inspection-form/inspection-form.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionFormPage": function() { return /* binding */ InspectionFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_inspection_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inspection-form.page.html */ 72346);
/* harmony import */ var _inspection_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection-form.page.scss */ 9701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);


















let InspectionFormPage = class InspectionFormPage {
    constructor(router, SidsService, fb, route, uploadService, alertService, usersessionService, camera, platform, networkService, file, ionicstorage, location, geolocation) {
        this.router = router;
        this.SidsService = SidsService;
        this.fb = fb;
        this.route = route;
        this.uploadService = uploadService;
        this.alertService = alertService;
        this.usersessionService = usersessionService;
        this.camera = camera;
        this.platform = platform;
        this.networkService = networkService;
        this.file = file;
        this.ionicstorage = ionicstorage;
        this.location = location;
        this.geolocation = geolocation;
        this.currNetWrkSts = '';
        this.imageData = "";
        this.myFiles = [];
        this.StageList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe('en-US');
        this.Recordvalue = [];
        this.stages = [];
        this.minMax = {};
        //this.currentDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
        this.initialValidator();
    }
    ionViewDidEnter() {
    }
    ionViewWillEnter() {
        this.getLatLong();
        this.currentDate = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        // this.currentDate = "2024-01-20";
        this.currentDate1 = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.user_id = this.usersessionService.emis_username();
        this.school_id = this.route.snapshot.queryParams.school_id;
        this.list_id = this.route.snapshot.queryParams.list_id;
        this.curr_stage = this.route.snapshot.queryParams.curr_stage;
        this.work_type_id = this.route.snapshot.queryParams.work_type_id;
        this.editStage = this.route.snapshot.queryParams.editStage;
        this.datevalue = false;
        if (this.editStage == 1) {
            this.patchData();
            this.ionicstorage.getData('Records').then((dataa1) => {
                if (dataa1) {
                    this.Recordvalue = dataa1;
                }
            }, (error) => console.error(error));
        }
        else {
            this.matchOptions.clear();
            this.ionicDataGet();
            this.ionicstorage.getData('Records').then((dataa1) => {
                if (dataa1) {
                    this.Recordvalue = dataa1;
                }
            }, (error) => console.error(error));
            if (this.route.snapshot.queryParams.id == 1) {
                this.showInput = false;
                this.matchOptions.clear();
                this.addMatchOPtions();
            }
        }
    }
    ngOnInit() {
    }
    ionicDataGet() {
        debugger;
        this.ionicstorage.getData('StageList').then((dataa) => {
            this.noFromIds = dataa.filter(x => x.no_form == 1).map(y => y.id);
            this.showAllFlg = dataa.filter(x => x.show_all == 1).map(y => y.id);
            console.log(this.noFromIds, 'this.noFromIds');
            this.stageworktype = dataa;
            if (this.curr_stage != 0) {
                this.StageList = dataa.filter(x => x.no_form != 1);
            }
            else {
                this.StageList = dataa;
            }
            this.stages = dataa;
            console.log(this.StageList, 'this.StageList');
        }, (error) => console.error(error));
        this.ionicstorage.getData('date').then((dataa) => {
            let date = dataa;
            if (date != this.currentDate) {
                this.ionicstorage.removeKey('CurrendateSchl');
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('inspectionData').then((dataa) => {
            debugger;
            this.inspecList = dataa;
            console.log(this.inspecList, "this.inspecList");
            // this.schoolIndex = this.route.snapshot.queryParams.school_id
            debugger;
            this.schoolIndex = this.inspecList.findIndex(x => x.school_id == this.route.snapshot.queryParams.school_id && x.id == this.list_id);
            let listarray = this.inspecList.filter(x => x.school_id == this.route.snapshot.queryParams.school_id && x.id == this.list_id);
            this.listarray = listarray[0];
            let checkDate = this.listarray.stages.map(x => x.date_of_completion);
            if (checkDate.includes(this.currentDate)) {
                this.datevalue = true;
            }
            else {
                this.datevalue = false;
                // this.addMatchOPtions();
            }
            //  this.StageList = this.stages.filter( y => y.work_type_id == this.inspecList[this.schoolIndex].work_type_id)
            this.StageList = [];
            debugger;
            this.inspecList[this.schoolIndex].stages.forEach(element => {
                if (element.status == "pending") {
                    // let check = this.stages.filter( y => y.id == element.stage_id)
                    // if(check.length > 0){
                    if (this.curr_stage != 0 && !this.noFromIds.includes(element.stage_id)) { // && !this.showAllFlg.includes(element.stage_id)
                        this.StageList.push(element);
                    }
                    else if (this.curr_stage == 0) {
                        this.StageList.push(element);
                    }
                    if (this.curr_stage != 0 && this.noFromIds.includes(element.stage_id) && element.stage_id == 19) { // && !this.showAllFlg.includes(element.stage_id)
                        this.StageList.push(element);
                    }
                    // if(this.curr_stage != 0 && this.noFromIds.includes(element.stage_id)){
                    //   this.StageList.push(element)
                    // }
                    // if(this.curr_stage != 0 && this.showAllFlg.includes(element.stage_id)){
                    //   this.StageList.push(element)
                    // }
                    // this.StageList.push(element)
                    // }
                }
                else if (element.status == "completed" && (this.curr_stage == 20 || this.curr_stage == 21) && element.date_of_completion != 0) { // && !this.showAllFlg.includes(element.stage_id)
                    let gtIndx = this.inspecList[this.schoolIndex].stages.findIndex(x => x.stage_id == 19);
                    let splt = this.inspecList[this.schoolIndex].stages.splice(gtIndx, 1);
                    let gtIndx1 = this.inspecList[this.schoolIndex].stages.findIndex(x => x.stage_id == 25);
                    let splt1 = this.inspecList[this.schoolIndex].stages.splice(gtIndx1, 1);
                    // this.StageList.push(element)
                }
                // else if(element.status == "completed" && this.showAllFlg.includes(element.stage_id)){
                //   this.StageList.push(element)
                // }
            });
            if (this.curr_stage != 0) {
                let filet = this.stageworktype.filter(y => y.work_type_id == this.work_type_id && y.show_all == 1);
                let obj = {
                    "stage_id": filet[0].id,
                    "stage": filet[0].stage,
                    "date_of_completion": 0,
                    "image": 0,
                    "uploads": 0,
                    "lat": 0,
                    "long": 0,
                    "status": "pending",
                    "visit_id": "",
                    "user_id": "",
                    "eng_name": "",
                    "no_form": 1,
                    "show_all": 1
                };
                this.StageList.push(obj);
                // this.inspecList[this.schoolIndex].stages.push(obj)
            }
            this.StageList.reverse();
            console.log(this.StageList, 'this.chkkkk');
            console.log(this.stageworktype, 'this.chkkkk');
        }, (error) => console.error(error));
        debugger;
        // this.ionicstorage.getData('CurrendateSchl').then(
        //   (dataa) => {
        //     if(dataa){
        //       this.CurrendateSchl = dataa
        //       let schoolchek = this.CurrendateSchl.filter( y => y.School_id == this.school_id)
        //       if(schoolchek.length > 0){
        //       this.datevalue = true
        //       }else{
        //       this.datevalue = false
        //       }
        //     }
        //   },
        //   (error) => console.error(error)
        // );
    }
    initialValidator() {
        this.inspectionForm = this.fb.group({
            matchOptions: this.fb.array([]),
        });
    }
    get matchOptions() {
        return this.inspectionForm.controls["matchOptions"];
    }
    addMatchOPtions() {
        const matchOpt = this.fb.group({
            StageName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            uploaddimage: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            upload: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            uploadMandotory: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            stage: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            dateMinMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('')
        });
        this.matchOptions.push(matchOpt);
    }
    goToBack() {
        if (this.showInput) {
            this.showInput = false;
            this.matchOptions.clear();
            this.addMatchOPtions();
        }
        else {
            // this.location.back();
            this.router.navigate(['/tabs/work-inspection']);
        }
    }
    goToBackedit() {
        this.router.navigate(['/tabs/work-inspection']);
    }
    onChangeStage(arg) {
        debugger;
        if (arg.target.value != undefined && arg.target.value != null) {
            let valueid = +this.matchOptions.value[0].StageName;
            this.StageList;
            this.matchOptions.clear();
            let i = 0;
            let Index = this.StageList.findIndex(x => x.stage_id == valueid);
            let Indexform = this.StageList.filter(x => x.stage_id == valueid);
            let noform = this.stages.filter(x => x.id == valueid);
            this.noForm = noform[0].no_form;
            if (noform[0].no_form == 1) {
                if (noform[0].id == 19 && noform[0].work_type_id == 3) {
                    for (let k = Index; k >= 1; k--) {
                        // if( k < valueid){
                        let mandatory = this.stages.filter(y => y.id == this.StageList[k].stage_id);
                        debugger;
                        // if(valueid == 20 || valueid==21){
                        if (this.StageList[k].stage_id != 26 && mandatory[0].id != 24) {
                            this.uploadImg = true;
                            this.addMatchOPtions();
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(this.StageList[k].stage_id);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(this.StageList[k].stage);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);
                            if (mandatory[0].mandatory_upload == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                            }
                            i = i + 1;
                            // }
                            if (i == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate);
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: this.currentDate1 };
                            }
                            else {
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: "" };
                            }
                            //this.setMinMaxNew(this.StageList[k].id)
                            // } 
                        }
                    }
                }
                else {
                    this.addMatchOPtions();
                    this.inspectionForm.controls["matchOptions"]["controls"][0].controls["StageName"].setValue(Indexform[0].stage_id);
                    this.inspectionForm.controls["matchOptions"]["controls"][0].controls["stage"].setValue(Indexform[0].stage);
                    this.inspectionForm.controls["matchOptions"]["controls"][0].controls["uploadMandotory"].setValue(Indexform[0].mandatory_upload == 1 ? true : false);
                    this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate);
                    this.uploadImg = true;
                }
            }
            else {
                this.uploadImg = true;
                debugger;
                for (let k = Index; k >= 1; k--) {
                    // if( k < valueid){
                    let mandatory = this.stages.filter(y => y.id == this.StageList[k].stage_id);
                    if (valueid == 20 || valueid == 21) {
                        debugger;
                        if (mandatory[0].no_form != 1 && (this.StageList[k].stage_id != 25)) {
                            // if(){
                            this.addMatchOPtions();
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(this.StageList[k].stage_id);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(this.StageList[k].stage);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);
                            if (mandatory[0].mandatory_upload == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                            }
                            i = i + 1;
                            // }
                            if (i == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate);
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: this.currentDate1 };
                            }
                            else {
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: "" };
                            }
                            //this.setMinMaxNew(this.StageList[k].id)
                        }
                        this.matchOptions;
                        debugger;
                    }
                    else {
                        if (mandatory[0].no_form != 1) {
                            this.addMatchOPtions();
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(this.StageList[k].stage_id);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(this.StageList[k].stage);
                            this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);
                            if (mandatory[0].mandatory_upload == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                                this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].updateValueAndValidity();
                            }
                            i = i + 1;
                            // }
                            if (i == 1) {
                                this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate);
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: this.currentDate1 };
                            }
                            else {
                                this.minMax[this.StageList[k].stage_id] = { min: "", max: "" };
                            }
                            //this.setMinMaxNew(this.StageList[k].id)
                        }
                    }
                }
                this.setMinMax();
            }
            // for (let k = Index; k >= 1; k--) {
            // // if( k < valueid){
            //   this.addMatchOPtions()
            //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue( this.StageList[k].stage_id)
            //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue( this.StageList[k].stage)
            //   this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(this.StageList[k].mandatory_upload == 1 ? true : false )
            //   i = i+1
            //   // }
            //   if(i == 1){
            //     this.inspectionForm.controls["matchOptions"]["controls"][0].controls["date"].setValue(this.currentDate)
            //     this.minMax[this.StageList[k].stage_id]={ min:"",max:this.currentDate1 }
            //   } else {
            //     this.minMax[this.StageList[k].stage_id]={ min:"",max:"" }
            //   }
            //   //this.setMinMaxNew(this.StageList[k].id)
            // }
            this.showInput = true;
        }
        if (arg.target.value == 21) {
            this.inspectionForm.controls["matchOptions"]["controls"].splice(1, 1);
        }
        if (arg.target.value == 26) {
            this.curStage = 26;
        }
        else {
            this.curStage = '';
        }
    }
    getStageList() {
        this.matchOptions.clear();
        let workid = this.inspecList.filter(y => y.school_id == this.route.snapshot.queryParams.school_id);
        // this.StageList =workid[0].stages
        let getdata = workid[0].stages;
        let getcheckdata = [];
        this.showInput = true;
        let j = 0;
        for (let i = 0; i < getdata.length; i++) {
            if (getdata[i].status == "pending") {
                this.addMatchOPtions();
                let mandCheck = this.StageList.find(x => x.id == getdata[i].stage_id);
                getcheckdata.push(getdata[i]);
                this.inspectionForm.controls["matchOptions"]["controls"][j].controls["StageName"].setValue(getdata[i].stage_id);
                this.inspectionForm.controls["matchOptions"]["controls"][j].controls["uploadMandotory"].setValue(mandCheck.mandatory_upload == 1 ? true : false);
                if (getdata[i].stage == this.route.snapshot.queryParams.stage) {
                    this.inspectionForm.controls["matchOptions"]["controls"][j].controls["date"].setValue(this.currentDate);
                    break;
                }
                j = j + 1;
                //this.setMinMaxNew(getdata[i].stage_id)
            }
        }
    }
    getUploadedFiles(key) {
        var bucketName = "renewalapplicationemis";
        var filename = key;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                // return result.url  
                this.image = result.url;
            }
            else {
                this.alertService.error('Error in Uploading File please try again');
            }
        });
    }
    openCameraOn(i) {
        debugger;
        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(null);
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
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 10485760) {
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(base64string);
                        this.alertService.success('File Uploaded Successfully');
                        // this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                        //   if (result) {
                        //     this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                        //       this.imageKey = result.key;
                        //       this.viewImage();
                        //       // this.getLocation();
                        //       // this.doc1Uploaded = true;
                        //       // this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue( this.imageKey)
                        //       this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(base64string)
                        //       this.alertService.success('File Uploaded Successfully');
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
    viewImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            var bucketName = "renewalapplicationemis";
            var filename = this.imageKey;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.imageURL = result.url;
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        });
    }
    onSelectFile2(event, field) {
        debugger;
        if (event != '' && event != null && event != undefined) {
            var fileName = event.name;
            var splittedName = fileName.split(".");
            if (splittedName[1] == 'pdf' || splittedName[1] == 'png' || splittedName[1] == 'jpg' || splittedName[1] == 'jpeg' || splittedName[1] == 'gif') {
                if ((event.type == "application/pdf" && event.size <= 10145728) || ((event.type == "image/png" || event.type == "image/jpg" || event.type == "image/jpeg" || event.type == "image/gif") && event.size <= 10485760)) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        // this.dataURL = event.target.result;
                        let filebase64 = event.target.result;
                        this.dataURL = filebase64.split('base64,')[1];
                        // const base64String = dataURL.split(',')[1];
                        if (field == 1) {
                            this.myImgUpload = filebase64;
                            this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"].setValue(this.myImgUpload);
                            console.log(this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"], '["controls"]');
                        }
                        else if (field == 2) {
                            let obj = {
                                fileName: splittedName[1] != 'pdf' ? splittedName[0] + '.png' : fileName,
                                fileKey: this.dataURL,
                            };
                            this.myFiles.push(obj);
                            this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["upload"].setValue(this.myFiles);
                        }
                        this.alertService.success("File upload Successfully");
                    };
                    reader.readAsDataURL(event);
                    // const fileReader: FileReader = new FileReader();
                    // this.uploadUrl = fileReader.result;
                    // var bucketName = "renewalapplicationemis";
                    // var filename = splittedName[0];
                    // var ext = splittedName[1];
                    // let expiry: number = 300;
                    // this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                    //   if (result) {
                    //     let files: FileList = event
                    //     // let file : File = files[0];  
                    //     this.uploadService.uploadFile(result.url, files).subscribe((res) => {
                    //       let obj = {
                    //         fileName : fileName,
                    //         fileKey : result.key,
                    //       }
                    //       this.myFiles.push(obj);
                    //       this.alertService.success("File upload Successfully")
                    //     })
                    //   }
                    //   else {
                    //     this.alertService.warning("Image Not Available")
                    //   }
                    // });
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 10 MB');
                }
            }
            else {
                this.alertService.error('Only upload PDF files');
            }
        }
    }
    getivalue(i) {
        this.indexvalue = i;
    }
    handleMultiFile(event, field) {
        debugger;
        this.myFiles = [];
        this.myImgUpload = '';
        for (let i = 0; i < event.target.files.length; i++) {
            this.onSelectFile2(event.target.files[i], field);
        }
        if (field == 1) {
            this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"].setValue(this.myImgUpload);
            console.log(this.myImgUpload, 'this.myImgUpload');
            console.log(this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["uploaddimage"], 'sdffsf');
        }
        else if (field == 2) {
            this.inspectionForm.controls["matchOptions"]["controls"][this.indexvalue].controls["upload"].setValue(this.myFiles);
        }
    }
    getLatLong() {
        debugger;
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.lat = this.locationCordinates.latitude;
            this.long = this.locationCordinates.longitude;
            console.log(this.long + '----' + this.long);
        });
    }
    submitForm() {
        debugger;
        if (this.inspectionForm.valid) {
            let currentvalue = [];
            this.Recordvalue;
            let imagecheck = 0;
            let workid = this.inspecList.filter(y => y.school_id == this.route.snapshot.queryParams.school_id && y.id == this.list_id);
            console.log(this.matchOptions.value, 'this.matchOptions.value');
            this.matchOptions.value.forEach((element, i) => {
                let camPicbase64 = element.uploaddimage.split('base64,');
                currentvalue.push({
                    "user_id": this.user_id,
                    "school_id": this.school_id,
                    "list_id": workid[0].id,
                    "work_type": workid[0].work_type_id,
                    "stage": element.StageName,
                    "date_of_completion": element.date,
                    "image": camPicbase64[1] ? camPicbase64[1] : null,
                    "uploads": (element.upload || element.upload != '') ? JSON.stringify(element.upload) : null,
                    "lat": this.lat,
                    "long": this.long,
                    "visit": element.date == this.currentDate ? 1 : 0,
                    "cur_stage": element.date == this.currentDate ? element.StageName : "",
                });
                if ((this.matchOptions.value[0].uploaddimage == "" || !this.matchOptions.value[0].uploaddimage) && this.matchOptions.value[0].StageName != 25) {
                    imagecheck = 1;
                }
            });
            // All capture img are mandatory
            // if( this.noForm == 1){
            //   imagecheck = 0
            // }
            if (imagecheck == 0) {
                //  let matchstatus = this.StageList.filter(y => y.id == this.matchOptions.value[this.matchOptions.value.length -1].StageName)
                this.matchOptions.value.forEach(element => {
                    if (element.StageName == 27 || element.StageName == 28 || element.StageName == 29) {
                        let obj = {
                            "stage_id": this.matchOptions.value[0].StageName,
                            "stage": this.matchOptions.value[0].stage,
                            "date_of_completion": element.date,
                            "image": 0,
                            "uploads": element.upload,
                            "lat": 0,
                            "long": 0,
                            "status": "completed",
                            "visit_id": "",
                            "user_id": "",
                            "eng_name": "",
                            "no_form": 1,
                            "show_all": 1
                        };
                        this.inspecList[this.schoolIndex].cur_stage_name = this.matchOptions.value[0].stage;
                        this.inspecList[this.schoolIndex].cur_stage = this.matchOptions.value[0].StageName;
                        this.inspecList[this.schoolIndex].stages.push(obj);
                    }
                    else {
                        let staindex = this.inspecList[this.schoolIndex].stages.findIndex(y => y.stage_id == element.StageName);
                        this.inspecList[this.schoolIndex].stages[staindex].date_of_completion = element.date;
                        this.inspecList[this.schoolIndex].stages[staindex].image = element.uploaddimage;
                        this.inspecList[this.schoolIndex].stages[staindex].uploads = element.upload;
                        this.inspecList[this.schoolIndex].stages[staindex].status = "completed";
                        this.inspecList[this.schoolIndex].cur_stage_name = this.matchOptions.value[0].stage;
                        this.inspecList[this.schoolIndex].cur_stage = this.matchOptions.value[0].StageName;
                    }
                });
                var records = { "json": currentvalue };
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    console.log('sdfsdfsdf');
                    this.SidsService.PostinsWorkForm(records).subscribe((res) => {
                        if (res.dataStatus == true && res.status == 200) {
                            this.alertService.success("Data Insert Successfully");
                            this.refreshInspectionList();
                            this.router.navigate(['/tabs/work-inspection-stage'], { queryParams: { 'school_id': this.route.snapshot.queryParams.school_id, 'list_id': this.list_id, 'curr_stage': this.curStage } });
                            this.ionicstorage.removeKey('Records');
                            this.ionicstorage.insertData_Replace('inspectionData', this.inspecList);
                            // this.CurrendateSchl.push({
                            // "School_id":this.school_id,
                            // "date":this.currentDate,
                            // })  
                            // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)
                        }
                        else {
                            this.alertService.error(res.message);
                        }
                    });
                }
                else {
                    currentvalue.forEach(ele => {
                        this.Recordvalue.push(ele);
                    });
                    this.alertService.success("Data Insert Successfully");
                    this.router.navigate(['/tabs/work-inspection-stage'], { queryParams: { 'school_id': this.route.snapshot.queryParams.school_id, 'list_id': this.list_id, 'curr_stage': this.curStage } });
                    this.ionicstorage.insertData_Replace('Records', this.Recordvalue);
                    this.ionicstorage.insertData_Replace('inspectionData', this.inspecList);
                    // this.CurrendateSchl.push({
                    // "School_id":this.school_id,
                    // "date":this.currentDate,
                    // })  
                    // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)
                }
            }
            else {
                this.alertService.error('Please Upload Current Date Image');
            }
        }
        else {
            this.alertService.error('Please Fill All Mandatory Field');
        }
    }
    refreshInspectionList() {
        // Check network status first
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            // Online - call API
            this.SidsService.HMinspection_list(this.user_id).subscribe((response) => {
                var _a;
                const list = ((_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.list) || (response === null || response === void 0 ? void 0 : response.list) || (response === null || response === void 0 ? void 0 : response.data) || response || [];
                // Filter based on user type
                if (this.emis_usertype == 8) {
                    // HM user - show only their school's demolition work
                    const filteredList = list.filter(x => String(x.work_type_id) === '3' &&
                        String(x.school_id) === String(this.schoolKeyId));
                    // Update the inspection data in storage
                    this.ionicstorage.insertData_Replace('inspectionData', filteredList);
                }
                else {
                    // Other users - show all
                    this.ionicstorage.insertData_Replace('inspectionData', list);
                }
                console.log('Inspection list refreshed via API');
            }, (error) => {
                console.error('Error refreshing inspection list:', error);
            });
        }
        else {
            // Offline - just update local storage with current data
            this.refreshLocalInspectionList();
        }
    }
    schoolKeyId(schoolKeyId) {
        throw new Error('Method not implemented.');
    }
    // ✅ Method to refresh local inspection list
    refreshLocalInspectionList() {
        this.ionicstorage.getData('inspectionData').then((data) => {
            if (data) {
                // Update the specific school's data in the list
                const index = data.findIndex(item => item.school_id === this.school_id && item.id === this.list_id);
                if (index !== -1) {
                    // Update the specific item with new stage data
                    data[index] = this.inspecList[this.schoolIndex];
                    this.ionicstorage.insertData_Replace('inspectionData', data);
                }
            }
        }, (error) => console.error(error));
    }
    updateForm() {
        debugger;
        if (this.inspectionForm.valid) {
            let currentvalue = [];
            this.Recordvalue;
            let imagecheck = 0;
            let workid = this.inspecList.filter(y => y.school_id == this.route.snapshot.queryParams.school_id && y.id == this.list_id);
            console.log(this.matchOptions.value, 'this.matchOptions.value');
            this.matchOptions.value.forEach((element, i) => {
                let chkPng = element.uploaddimage.split('.');
                let camPicbase64;
                if (chkPng[1] == 'png') {
                    camPicbase64 = element.uploaddimage;
                }
                else {
                    let baseSplit = element.uploaddimage.split('base64,');
                    camPicbase64 = baseSplit[1];
                }
                currentvalue.push({
                    "user_id": this.user_id,
                    "school_id": this.school_id,
                    "list_id": workid[0].id,
                    "work_type": workid[0].work_type_id,
                    "stage": element.StageName,
                    "image": camPicbase64 ? camPicbase64 : null,
                });
                if ((this.matchOptions.value[0].uploaddimage == "" || !this.matchOptions.value[0].uploaddimage) && this.matchOptions.value[0].StageName != 25) {
                    imagecheck = 1;
                }
            });
            if (imagecheck == 0) {
                this.matchOptions.value.forEach(element => {
                    if (element.StageName == 27 || element.StageName == 28 || element.StageName == 29) {
                        let obj = {
                            "stage_id": this.matchOptions.value[0].StageName,
                            "stage": this.matchOptions.value[0].stage,
                            "date_of_completion": element.date,
                            "image": 0,
                            "uploads": element.upload,
                            "lat": 0,
                            "long": 0,
                            "status": "completed",
                            "visit_id": "",
                            "user_id": "",
                            "eng_name": "",
                            "no_form": 1,
                            "show_all": 1
                        };
                        this.inspecList[this.schoolIndex].cur_stage_name = this.matchOptions.value[0].stage;
                        this.inspecList[this.schoolIndex].cur_stage = this.matchOptions.value[0].StageName;
                        this.inspecList[this.schoolIndex].stages.push(obj);
                    }
                    else {
                        let staindex = this.inspecList[this.schoolIndex].stages.findIndex(y => y.stage_id == element.StageName);
                        this.inspecList[this.schoolIndex].stages[staindex].date_of_completion = element.date;
                        this.inspecList[this.schoolIndex].stages[staindex].image = element.uploaddimage;
                        this.inspecList[this.schoolIndex].stages[staindex].uploads = element.upload;
                        this.inspecList[this.schoolIndex].stages[staindex].status = "completed";
                        this.inspecList[this.schoolIndex].cur_stage_name = this.matchOptions.value[0].stage;
                        this.inspecList[this.schoolIndex].cur_stage = this.matchOptions.value[0].StageName;
                    }
                });
                var records = { "json": currentvalue };
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.SidsService.PostinsWorkForm(records).subscribe((res) => {
                        if (res.dataStatus == true && res.status == 200) {
                            this.alertService.success("Data Insert Successfully");
                            this.router.navigate(['/tabs/work-inspection-stage'], { queryParams: { 'school_id': this.route.snapshot.queryParams.school_id, 'list_id': this.list_id, 'curr_stage': this.curr_stage } });
                            this.ionicstorage.removeKey('Records');
                            this.ionicstorage.insertData_Replace('inspectionData', this.inspecList);
                            // this.CurrendateSchl.push({
                            // "School_id":this.school_id,
                            // "date":this.currentDate,
                            // })  
                            // this.ionicstorage.insertData_Replace('CurrendateSchl',   this.CurrendateSchl)
                        }
                        else {
                            this.alertService.error(res.message);
                        }
                    });
                }
                else {
                    currentvalue.forEach(ele => {
                        this.Recordvalue.push(ele);
                    });
                    this.alertService.success("Data Insert Successfully");
                    this.router.navigate(['/tabs/work-inspection-stage'], { queryParams: { 'school_id': this.route.snapshot.queryParams.school_id, 'list_id': this.list_id } });
                    this.ionicstorage.insertData_Replace('Records', this.Recordvalue);
                    this.ionicstorage.insertData_Replace('inspectionData', this.inspecList);
                }
            }
            else {
                this.alertService.error('Please Upload Current Date Image');
            }
        }
        else {
            this.alertService.error('Please Fill All Mandatory Field');
        }
    }
    setMinMax() {
        this.matchOptions.value.forEach((e) => {
            if (e != 'undefined') {
                this.setMinMaxNew(e.stage);
            }
        });
    }
    setMinMaxNew(idx) {
        debugger;
        let stage = this.listarray.stages.find(x => x.stage == idx).stage_id;
        let end = this.matchOptions.value[(this.matchOptions.value.length - 1)].StageName;
        let first = this.matchOptions.value[0].StageName;
        let top = first;
        let bottom = end;
        if (end < stage) {
            end = stage - 1;
        }
        let min = '';
        let max = '';
        if (stage == top) {
            let idx = this.matchOptions.value.findIndex(y => y.StageName == top);
            let e = this.matchOptions.value[idx];
            max = e.date;
        }
        else {
            for (let i = stage; i <= top; i++) {
                let idx = this.matchOptions.value.findIndex(y => y.StageName == i);
                let e = this.matchOptions.value[idx];
                if (e != undefined) {
                    if (e.date != 'undefined' && e.date != '') {
                        max = e.date;
                        break;
                    }
                }
            }
        }
        if (stage == bottom) {
            let idx = this.matchOptions.value.findIndex(y => y.StageName == bottom);
            let e = this.matchOptions.value[idx];
            min = e.date;
        }
        else {
            for (let i = stage; i >= bottom; i--) {
                let idx = this.matchOptions.value.findIndex(y => y.StageName == i);
                let e = this.matchOptions.value[idx];
                if (e != undefined) {
                    if (e.date != 'undefined' && e.date != '') {
                        min = e.date;
                        break;
                    }
                }
            }
        }
        /*this.matchOptions.value.forEach((e) => {
          if(e != 'undefined'){
            if(e.StageName==end)
              min=(e.date != 'undefined' && e.date!='')? e.date : '';
    
            if(e.StageName==first){
              max=(e.date != 'undefined' && e.date!='')? e.date : '';
            }
          }
        })*/
        //min = min.split("-").reverse().join("-");
        //max = max.split("-").reverse().join("-");
        this.minMax[stage].min = min;
        this.minMax[stage].max = max;
        console.log(this.minMax, 'this.minMax');
    }
    patchData() {
        this.ionicstorage.getData('StageList').then((dataa1) => {
            if (dataa1 != null && dataa1 != undefined) {
                this.stages = dataa1;
                console.log(this.stages, 'this.stages');
                this.matchOptions.clear();
                this.showInput = true;
                this.ionicstorage.getData('inspectionData').then((dataa) => {
                    debugger;
                    // this.editStage = 
                    this.inspecList = dataa;
                    let listarray = this.inspecList.filter(x => x.school_id == this.route.snapshot.queryParams.school_id && x.id == this.list_id);
                    this.listarray = listarray[0];
                    this.schoolIndex = this.inspecList.findIndex(x => x.school_id == this.route.snapshot.queryParams.school_id && x.id == this.list_id);
                    let stgeLst = this.inspecList[this.schoolIndex].stages.filter(x => x.status == "completed");
                    console.log(stgeLst, 'stgeLst');
                    for (let i = 0; i < stgeLst.length; i++) {
                        let mandatory = this.stages.filter(y => y.id == stgeLst[i].stage_id);
                        let uploadParse = (typeof stgeLst[i].uploads == 'string' && stgeLst[i].uploads != '') ? JSON.parse(stgeLst[i].uploads) : stgeLst[i].uploads;
                        this.addMatchOPtions();
                        console.log(typeof stgeLst[i].uploads);
                        console.log(stgeLst[i]);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["date"].setValue(stgeLst[i].date_of_completion);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].setValue(stgeLst[i].image);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].setValue(stgeLst[i].stage_id);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].setValue(stgeLst[i].stage);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["upload"].setValue(uploadParse);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].setValue(mandatory[0].mandatory_upload == 1 ? true : false);
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["date"].updateValueAndValidity();
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploaddimage"].updateValueAndValidity();
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["StageName"].updateValueAndValidity();
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["stage"].updateValueAndValidity();
                        this.inspectionForm.controls["matchOptions"]["controls"][i].controls["uploadMandotory"].updateValueAndValidity();
                    }
                    this.uploadImg = true;
                    console.log(this.inspectionForm.controls["matchOptions"]["controls"]);
                }, (error) => console.error(error));
                console.log(this.inspectionForm.controls);
            }
            else {
            }
        }, (error) => console.error(error));
    }
};
InspectionFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__.SidsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.Geolocation }
];
InspectionFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-inspection-form',
        template: _raw_loader_inspection_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inspection_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InspectionFormPage);



/***/ }),

/***/ 9701:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sids/inspection-form/inspection-form.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: #f3f4fa;\n}\nion-content .card {\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  background: #fff;\n  margin: 12px;\n}\nform {\n  background: #e9e9e9;\n  padding: 2px 0px 10px;\n}\n.butnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n}\n.submitLabel {\n  color: white;\n}\n.uploadImage {\n  max-width: 60px;\n  max-height: 60px;\n  margin-left: 10px;\n}\n.info-alert {\n  background: #e7daf0;\n  width: 95%;\n  margin: 20px auto 0px;\n  border: 1px solid #b593cb;\n  border-radius: 10px;\n  padding: 10px;\n}\n.info-alert h5 {\n  color: #9162b0;\n  font-size: 14px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb24tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDQTtFQUNRLHlCQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFVjtBQUNJO0VBQ0ksWUFBQTtBQUVSO0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGO0FBQUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJSiIsImZpbGUiOiJpbnNwZWN0aW9uLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZDogI2YzZjRmYTtcclxuICAuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgfVxyXG4gXHJcbn1cclxuZm9ybXtcclxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gIHBhZGRpbmc6IDJweCAwcHggMTBweDtcclxufVxyXG4uYnV0bkRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI2N0IzO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdExhYmVse1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuLnVwbG9hZEltYWdle1xyXG4gIG1heC13aWR0aDogNjBweDtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5mby1hbGVydHtcclxuICBiYWNrZ3JvdW5kOiAjZTdkYWYwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNTkzY2I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGg1e1xyXG4gICAgY29sb3I6ICM5MTYyYjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 72346:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/inspection-form/inspection-form.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" *ngIf=\"editStage != 1\" (click)=\"goToBack()\"></ion-icon>\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" *ngIf=\"editStage == 1\" (click)=\"goToBackedit()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size:14px;\">{{listarray?.school_name}} ({{listarray?.udise_code}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <form [formGroup]=\"inspectionForm\"> -->\r\n  <div *ngIf=\"!datevalue\"> \r\n    <form [formGroup]=\"inspectionForm\">\r\n      <div formArrayName=\"matchOptions\" class=\"flex-gap-bottom\"\r\n        *ngFor=\"let options of inspectionForm.get('matchOptions')['controls']; let i = index\">\r\n        <div [formGroupName]=\"i\"  class=\"card\" style=\"box-shadow: 0px 10px 10px rgba(0,0,0,0.08);\">\r\n          <div *ngIf=\"showInput\"> \r\n            <ion-item style=\"border-style:none\"><ion-label><b>{{matchOptions.value[i].stage.split('-')[0]}}</b></ion-label></ion-item>\r\n            <!-- <ion-item>\r\n              <ion-select placeholder=\"Select Stage Name\" formControlName=\"StageName\" hidden >\r\n                <ion-select-option [value]=\"item.id\" *ngFor=\"let item of StageList\"> {{item.stage}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> -->\r\n          </div>\r\n          <div *ngIf=\"!showInput\">\r\n            <ion-item style=\"border-style:none\"><ion-label><b>Select The Stage</b></ion-label></ion-item>\r\n            <ion-item>\r\n              <ion-select placeholder=\"Select Stage Name\" formControlName=\"StageName\" (ionChange)=\"onChangeStage($event)\">\r\n                <ion-select-option [value]=\"item.stage_id\" *ngFor=\"let item of StageList\"> {{item.stage}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <div *ngIf=\"showInput\">\r\n            <div class=\"card\" *ngIf=\"editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i != 0\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"date\" formControlName=\"date\" [min]=\"minMax[matchOptions.value[i].StageName].min\" [max]=\"minMax[matchOptions.value[i].StageName].max\" (change)=\"setMinMax()\">\r\n              </div>\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i == 0\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"text\" formControlName=\"date\" item-end disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"editStage == 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\">\r\n                <ion-label><b>Date<span  style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"text\" formControlName=\"date\" item-end disabled>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card\" *ngIf=\"uploadImg && matchOptions.value[i].StageName !=25 && editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i == 0\">\r\n                <ion-label><b>Capture The Image <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName=\"uploaddimage\"></ion-input>\r\n                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i)\"></ion-icon>\r\n              </div>\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"i != 0\">\r\n                <ion-label><b>Upload The Image</b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" id=\"cloud-upload\" (change)=\"handleMultiFile($event,1)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n\r\n                <!-- <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName=\"uploaddimage\"></ion-input>\r\n                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i)\"></ion-icon> -->\r\n              </div>\r\n              <!-- <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage\" src=\"https://deka0egrc3bqo.cloudfront.net/{{matchOptions.value[i].uploaddimage}}\"> -->\r\n              <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage\" src=\"{{matchOptions.value[i].uploaddimage}}\">\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"uploadImg && matchOptions.value[i].StageName !=25 && editStage == 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\" *ngIf=\"!matchOptions.value[i].uploaddimage\">\r\n                <ion-label><b>Upload The Image <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" id=\"cloud-upload\" (change)=\"handleMultiFile($event,1)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n              </div>\r\n              <div *ngIf=\"matchOptions.value[i].uploaddimage\">\r\n                <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage.split('.')[1] == 'png'\" src=\"https://deka0egrc3bqo.cloudfront.net/{{matchOptions.value[i].uploaddimage}}\">\r\n                <img class=\"uploadImage\" *ngIf=\"matchOptions.value[i].uploaddimage.split('.')[1] != 'png'\" src=\"{{matchOptions.value[i].uploaddimage}}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card\" *ngIf=\"matchOptions.value[i].uploadMandotory && editStage != 1\">\r\n              <div style=\"display: flex;justify-content: space-between;\">\r\n                <ion-label><b>Upload the Documents <span style=\"color: red;\"> *</span></b></ion-label>\r\n                <input type=\"file\" style=\"font-size: small;display: none;\" multiple id=\"cloud-upload\" (change)=\"handleMultiFile($event,2)\">\r\n                <label for=\"cloud-upload\"><ion-icon item-end name=\"cloud-upload\" (click)=\"getivalue(i)\" style=\"color: var(--ion-color-primary);font-size: large;\"></ion-icon></label>\r\n              </div>\r\n              <div *ngIf=\"matchOptions.value[i].upload.length > 0\">\r\n                <div *ngFor=\"let data of matchOptions.value[i].upload\">\r\n                  <ion-badge color=\"primary\" style=\"color: #fff;\">{{data.fileName}}</ion-badge>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"matchOptions.value[i].uploadMandotory && editStage == 1\">\r\n              <ion-label><b>Upload the Documents</b></ion-label>\r\n              <div *ngIf=\"matchOptions.value[i].upload.length > 0\">\r\n                <div *ngFor=\"let data of matchOptions.value[i].upload\">\r\n                  <ion-badge color=\"primary\" style=\"color: #fff;\">{{data.fileName}}</ion-badge>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"text-align: center;\" *ngIf=\"uploadImg\">\r\n              <p style=\"color: red;font-size: 14px;\">Note:File should be Below 10MB</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showInput && editStage != 1\" style=\" text-align: center;\" (click)=\"submitForm()\">\r\n        <div class=\"butnDiv\">\r\n          <ion-label class=\"submitLabel\">Submit</ion-label>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showInput && editStage == 1\" style=\" text-align: center;\" (click)=\"updateForm()\">\r\n        <div class=\"butnDiv\">\r\n          <ion-label class=\"submitLabel\">Update</ion-label>\r\n        </div>\r\n      </div>\r\n  </form>\r\n  </div>\r\n  <div *ngIf=\"datevalue\">\r\n \r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n     <div class=\"card text-center\" style=\"width: 18rem;  background-color: #8B67B3;color: #ffffff;\">\r\n      <div class=\"card-body\" >\r\n        <h5 class=\"card-title\" style=\"margin:0px;\">You have already visited this school</h5>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"info-alert\">\r\n    <h4 style=\"font-size: 18px;\"><b style=\"text-decoration:underline\">Note</b></h4>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Work Not Started</b> - Please select <b>“Work Not Started”</b> if HM has not sent the request letter.</h5>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Yet To Be Demolished</b> - Please select <b>Yet To Be Demolished</b> if HM has sent the request letter , but the building is Not Demolished.</h5>\r\n    <h5 class=\"card-title\" *ngIf=\"work_type_id == 3 && !showInput\"><b style=\"color:#775090;font-size: 16px;\">Demolition Not Required</b> - If this building is in good condition or there is only minor repair please choose <b>\"Demolition not required\"</b> option</h5>\r\n    <h5 class=\"card-title\"><b style=\"color:#775090;font-size: 16px;\">Current Stage</b> - Please update the current stage of the project on the day of your visit and capture the live photography by using camera.</h5>\r\n    <h5 class=\"card-title\" style=\"margin:0px;\"><b style=\"color:#775090;font-size: 16px;\">Completed Stages</b> - For previously completed stages, Please upload the image which is already captured by the school staffs.</h5>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_inspection-form_inspection-form_module_ts-es2015.js.map