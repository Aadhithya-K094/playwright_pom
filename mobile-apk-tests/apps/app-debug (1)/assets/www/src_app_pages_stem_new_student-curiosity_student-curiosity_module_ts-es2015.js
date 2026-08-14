(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_student-curiosity_student-curiosity_module_ts"],{

/***/ 96181:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/stem_new/student-curiosity/student-curiosity-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCuriosityPageRoutingModule": function() { return /* binding */ StudentCuriosityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_curiosity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-curiosity.page */ 21043);




const routes = [
    {
        path: '',
        component: _student_curiosity_page__WEBPACK_IMPORTED_MODULE_0__.StudentCuriosityPage
    }
];
let StudentCuriosityPageRoutingModule = class StudentCuriosityPageRoutingModule {
};
StudentCuriosityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentCuriosityPageRoutingModule);



/***/ }),

/***/ 92256:
/*!******************************************************************************!*\
  !*** ./src/app/pages/stem_new/student-curiosity/student-curiosity.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCuriosityPageModule": function() { return /* binding */ StudentCuriosityPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_curiosity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-curiosity-routing.module */ 96181);
/* harmony import */ var _student_curiosity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-curiosity.page */ 21043);







let StudentCuriosityPageModule = class StudentCuriosityPageModule {
};
StudentCuriosityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_curiosity_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentCuriosityPageRoutingModule
        ],
        declarations: [_student_curiosity_page__WEBPACK_IMPORTED_MODULE_1__.StudentCuriosityPage]
    })
], StudentCuriosityPageModule);



/***/ }),

/***/ 21043:
/*!****************************************************************************!*\
  !*** ./src/app/pages/stem_new/student-curiosity/student-curiosity.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCuriosityPage": function() { return /* binding */ StudentCuriosityPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_curiosity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-curiosity.page.html */ 20957);
/* harmony import */ var _student_curiosity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-curiosity.page.scss */ 51611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);











let StudentCuriosityPage = class StudentCuriosityPage {
    constructor(router, uploadService, alertService, route, sqliteDB, userService, usersessionService) {
        this.router = router;
        this.uploadService = uploadService;
        this.alertService = alertService;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.imageActive = false;
        this.videoActive = false;
        this.array = [
            { label: "1" },
            { label: "2" },
            { label: "3" },
            { label: "4" },
            { label: "5" }
        ];
        // arrayDomain = [
        //   { value: "1", label: "Air and Matter" },
        //   { value: "2", label: "Chemical reaction" },
        //   { value: "3", label: "Light" },
        //   { value: "4", label: "Mathematics" },
        //   { value: "5", label: "Plant and Animal Cell" },
        // ]
        this.arrayDomain = [
            { value: "1", label: " Physics Experiment " },
            { value: "2", label: " Chemistry Experiments" },
            { value: "3", label: " Biology Experiments" },
            { value: "4", label: "Mathematics Experiments" },
        ];
        this.arrayExper = [
            { value: "1", label: " Candlestick seesaw", id: "1" },
            { value: "2", label: " Paper Helicopter - Force and Motion 7th Season 1", id: "1" },
            { value: "3", label: " Boyle rules 8th class", id: "1" },
            { value: "4", label: " Buoyancy Class 8", id: "1" },
            { value: "5", label: " Detection of bacteria by laser light", id: "1" },
            { value: "6", label: " Newton's pendulum", id: "1" },
            { value: "7", label: " Water boils in a paper pot", id: "1" },
            { value: "8", label: " Bernoulli's theory, colliding balloons", id: "1" },
            { value: "9", label: " Coin in water", id: "1" },
            { value: "10", label: " Hot water and cold water", id: "1" },
            { value: "11", label: " Festival of Light.", id: "2" },
            { value: "12", label: " Magic Juice (PH indicator)", id: "2" },
            { value: "13", label: "Oxygen recognition test", id: "2" },
            { value: "14", label: "Modification of starch granules", id: "2" },
            { value: "15", label: "Sedimentary experiment", id: "2" },
            { value: "16", label: "Water management", id: "3" },
            { value: "17", label: "Fermentation", id: "3" },
            { value: "18", label: "Dialysis", id: "3" },
            { value: "19", label: "Absorption of water through roots", id: "3" },
            { value: "20", label: "Laser Microscope", id: "3" },
            { value: "21", label: "Spin Number Game - Sixth Class First Term", id: "4" },
            { value: "22", label: "Find the area of the circle", id: "4" },
            { value: "23", label: "Prime numbers", id: "4" },
            { value: "24", label: "Types of triangles", id: "4" },
            { value: "25", label: "Addition of the angles of a triangle is 180°", id: "4" }
        ];
        this.domainData = [];
        this.ExperimentList = [];
        this.username = this.usersessionService.emis_user_id();
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.form.reset();
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.otp = this.routeData.queryParams.otp;
        this.imageActive = false;
        this.videoActive = false;
        this.active = false;
        this.ExpActive = false;
        // this.video720= ""; 
        this.video720.nativeElement.value = "";
        this.jpgimage.nativeElement.value = "";
        // this.video1080 = []
    }
    ionViewDidLeave() {
        this.video720.nativeElement.value = "";
    }
    Domain(event) {
        this.form.controls['experiment'].setValue('');
        this.form.controls['experiment'].updateValueAndValidity();
        this.ExpActive = true;
        TempDomain = [];
        this.arrayExper1 = [];
        this.ExperimentList = [];
        var TempDomain = event.detail.value;
        for (let index = 0; index < TempDomain.length; index++) {
            var arrayExper1 = this.arrayExper.filter(x => x.id == TempDomain[index]);
            for (let j = 0; j < arrayExper1.length; j++) {
                this.ExperimentList.push(arrayExper1[j]);
            }
        }
    }
    checkExperiment(event) {
        var TempExperiment = event.detail.value;
    }
    initialValidator() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            experiment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            question1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            question2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            question3: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            pic: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    onSave() {
        if (this.form.valid) {
            this.domainData = [];
            let string = this.form.value.domain.toString();
            let arr = JSON.parse("[" + string + "]");
            for (let i = 1; i <= 5; i++) {
                let filterarray = arr.filter((rq) => rq == i);
                if (filterarray.length != 0) {
                    let expdata = this.form.value.experiment;
                    let filterarray1 = expdata.filter((rq) => rq.id == filterarray.toString());
                    this.expData = [];
                    for (let n = 0; n < filterarray1.length; n++) {
                        this.expData.push(filterarray1[n].value);
                        if (filterarray1[n].value != 0) {
                            this.active1 = true;
                        }
                        else {
                            this.active1 = false;
                        }
                    }
                    if (this.expData.length != 0) {
                        let data = {
                            "IndexId": "",
                            "OtpNo": this.otp,
                            "Domain": filterarray.toString(),
                            "Batch": this.form.value.batch,
                            "Experiment": this.expData.toString(),
                            "ImageName": this.form.value.pic,
                            "VideoName": this.form.value.video,
                            "SchlId": this.schoolId,
                            "Qust1": this.form.value.question1,
                            "Qust2": this.form.value.question2,
                            "Qust3": this.form.value.question3,
                            "CreationUsr": this.username
                        };
                        if (this.expData.length) {
                            this.active = true;
                        }
                        this.domainData.push(data);
                    }
                    else {
                        this.alertService.error("Please Select one Experiment from Selected Domain");
                        this.active = false;
                    }
                }
            }
            setTimeout(() => {
            }, 1000);
            if (this.active == true) {
                let datas = {
                    "records": this.domainData
                };
                this.userService.studentResponse(datas).subscribe((response) => {
                    // if(response.dataStatus) {
                    console.log("response");
                    this.router.navigate(['/tabs/add-student'], { queryParams: { "schoolId": this.schoolId, "batch": this.form.value.batch, "domain": this.form.value.domain } });
                    // } else {
                    //  this.alertService.error("This Batch has already been added")
                    // }
                });
            }
        }
        else {
            this.validateAllFormFields(this.form);
            this.alertService.error("Please fill all the fields");
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    // Photoupload
    onSelectFile1(event) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg") {
                if (event.target.files[0].size <= 5242880) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    this.fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        // //debugger;
                        this.imageActive = true;
                        this.uploadUrl = fileReader.result;
                        var bucketName = "studentapp-content";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                let files = this.doc_file;
                                let file = files[0];
                                this.uploadService.uploadFile(result.url, file).subscribe((res) => {
                                    this.form.controls.pic.setValue(result.key);
                                    this.getUploadedFiles1(result.key);
                                    // this.getUploadedFiles1(result.key);
                                });
                                this.alertService.success('File Uploaded Successfully');
                            }
                            else {
                                this.alertService.error('Error in Uploading File please try again');
                                this.jpgimage.nativeElement.value = "";
                            }
                        });
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
    getUploadedFiles1(filename) {
        var bucketName = "studentapp-content";
        var filename = filename;
        let expiry = 1800;
        // this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + filename);
        // console.log(filename,"this.PDFFileName",this.PDFFileName.changingThisBreaksApplicationSecurity)
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                this.image1 = result.url;
                console.log();
            }
            else {
                this.alertService.error('Error in Uploading File please try again');
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/school-zone']);
    }
    onSelectFiles(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "video/mp4") {
                if ((event.target.files[0].size <= 209715200)) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    this.fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        this.uploadUrl = fileReader.result;
                        var bucketName = "studentapp-content";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                let files = this.doc_file;
                                let file = files[0];
                                this.uploadService.uploadFile(result.url, file).subscribe((res) => {
                                    this.videoActive = true;
                                    this.form.controls.video.setValue(result.key);
                                    this.getUploadedFiles(result.key);
                                });
                            }
                            else {
                                this.video720.nativeElement.value = "";
                                this.alertService.error("Error in Uploading File please try again");
                            }
                        });
                    };
                }
                else {
                    this.alertService.error("File Can`t uploaded Because File size should not exceed 200 MB");
                    this.video720.nativeElement.value = "";
                }
            }
            else {
                this.alertService.error("Please upload only .mp4 video format");
                this.video720.nativeElement.value = "";
            }
        }
    }
    getUploadedFiles(filename) {
        var bucketName = "studentapp-content";
        var filename = filename;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                // if(value == 1){
                this.video1080 = result.url;
                this.progresbar1080 = false;
                this.hide720p = true;
                this.alertService.success("File Uploaded Successfully");
            }
            else {
                // this.messageService.add({severity:'warn', summary: 'Error in Uploading File please try again', detail:''});
            }
        });
    }
};
StudentCuriosityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService }
];
StudentCuriosityPage.propDecorators = {
    video720: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['video720',] }],
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['jpgimage',] }]
};
StudentCuriosityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-student-curiosity',
        template: _raw_loader_student_curiosity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_curiosity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentCuriosityPage);



/***/ }),

/***/ 51611:
/*!******************************************************************************!*\
  !*** ./src/app/pages/stem_new/student-curiosity/student-curiosity.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-image {\n  background: url(\"/assets/images/header.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 30%;\n}\n\n.card-item {\n  background-color: #FFFFFF;\n  margin-top: 35%;\n  height: 100%;\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 5px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.selectitem {\n  border: 2px solid #707070;\n}\n\n.coluitem {\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\n.coluitem1 {\n  padding-left: 13px;\n  padding-right: 13px;\n  color: #707070;\n  border-bottom: dotted;\n}\n\n.imageVideo {\n  background-color: #EEEEEE;\n  margin: 1%;\n  padding: 5%;\n}\n\n.valid-clr1 {\n  padding-left: 5px;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.spanheader {\n  font-size: 10px;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.coluitem2 {\n  padding-left: 13px;\n  padding-right: 13px;\n  color: #343434;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtY3VyaW9zaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzdHVkZW50LWN1cmlvc2l0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdle1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICB9IFxyXG4gIFxyXG4gIC5jYXJkLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IDM1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIH0gXHJcblxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGl0ZW0ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzcwNzA3MDtcclxuICB9XHJcblxyXG4gIC5jb2x1aXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVpdGVtMSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBib3JkZXItYm90dG9tOiBkb3R0ZWQ7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VWaWRlbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkLWNscjEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAudmFsaWQtY2xyICB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG5cclxuICAuc3BhbmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sdWl0ZW0yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjojMzQzNDM0O1xyXG4gIH1cclxuICAgIl19 */");

/***/ }),

/***/ 20957:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/student-curiosity/student-curiosity.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <div class=\"header-image\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <!-- <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon> -->\r\n       <span class=\"spanheader\">Connect to School</span>\r\n    </ion-buttons>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"text-align: start;color: #FDFDFF;margin-top: 5%;\r\n      margin-left: 3%;\">\r\n        Explore Your unstoppable Ideas\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"margin-top: 7%;\">\r\n        <form [formGroup]=\"form\">\r\n          <ion-row>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\">\r\n              <ion-label class=\"ques-txt\">\r\n                Batch <span class=\"valid-clr\">*</span>\r\n              </ion-label>\r\n\r\n              <ion-select type=\"text\" formControlName=\"batch\" class=\"selectitem\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of array\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row style=\"padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"form.controls.batch.hasError('required') && (form.controls.batch.dirty || form.controls.batch.touched)\">\r\n                  Required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\">\r\n              <ion-label class=\"ques-txt\">\r\n                Select Domain <span class=\"valid-clr\">*</span>\r\n              </ion-label>\r\n\r\n              <ion-select type=\"text\" multiple=\"true\" formControlName=\"domain\" class=\"selectitem\"  (ionChange)=\"Domain($event)\" >\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of arrayDomain\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row style=\"padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"form.controls.domain.hasError('required') && (form.controls.domain.dirty || form.controls.domain.touched)\">\r\n                  Required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\" *ngIf=\"ExpActive\">\r\n              <ion-label class=\"ques-txt\">\r\n                Select Experiment <span class=\"valid-clr\">*</span>\r\n              </ion-label>\r\n\r\n              <ion-select type=\"text\" multiple=\"true\" formControlName=\"experiment\" class=\"selectitem\" (ionChange)=\"checkExperiment($event)\">\r\n                <ion-select-option [value]=\"item\" *ngFor=\"let item of ExperimentList\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n              <ion-row style=\"padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"form.controls.experiment.hasError('required') && (form.controls.experiment.dirty || form.controls.experiment.touched)\">\r\n                  Required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <!-- <ion-col size=\"12\" class=\"coluitem1\">\r\n              Please upload a picture or a video of students doing the experiment\r\n              <ion-row>\r\n\r\n                <ion-label style=\"color:#000006e4;padding-top:5%\"> Image (JPG/JPEG) <span class=\"valid-clr\">*</span> </ion-label>\r\n                <ion-col size=\"12\" class=\"imageVideo\">\r\n                  <input  #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event)\"  accept=\".jpg,.JPEG\"\r\n                    *ngIf=\"this.imageActive == false\" />\r\n                  <label for=\"file\" class=\"upload-txt\" style=\"background: rgb(248, 248, 248);\">\r\n                    <ion-icon name=\"cloud-upload-outline\" *ngIf=\"this.imageActive == false\"></ion-icon>\r\n                    <img src=\"{{image1}}\" class=\"image\" *ngIf=\"this.imageActive == true\" width=\"100\" height=\"100\">\r\n                  </label>\r\n                  <label class=\"valid-clr1\" style=\"color: #8b67b3;margin-top: 3% !important;\" *ngIf=\"this.imageActive == false\">Only Image files with maximum size 5MB</label>\r\n                </ion-col> -->\r\n\r\n                <!-- <ion-label style=\"color:#000006e4;\"> Video (mp4,.MP4)</ion-label>\r\n                <ion-col size=\"12\" class=\"imageVideo\">\r\n                  <input #video720 type='file' class=\"fileInput\" accept=\".mp4,.MP4,\"\r\n                    (change)=\"onSelectFiles($event)\"/>\r\n                  <label for=\"file\" class=\"upload-txt\" style=\"background: rgb(248, 248, 248);\">\r\n                    <ion-icon name=\"cloud-upload-outline\" *ngIf=\"this.videoActive == false\"></ion-icon> -->\r\n                    <!-- <video controls width=\"100%\" height=\"210\" type=\"video/mp4\" *ngIf=\"this.videoActive == true\">\r\n                        <source [src]=this.video1080 type=\"video/mp4\"> \r\n                      </video> -->\r\n                  <!-- </label>\r\n                  <label class=\"valid-clr1\" style=\"color: #8b67b3;margin-top: 3% !important;\" *ngIf=\"this.videoActive == false\">Only Video file with maximum size 200MB</label>\r\n                </ion-col> -->\r\n\r\n                <!-- <ion-col size=\"12\" class=\"imageVideo\">\r\n                    <input #video720 type='file'  class=\"form-control\" accept=\".mp4,.MP4,\"  (change)=\"onSelectFiles($event,4)\" />\r\n                    <video controls width=\"100%\" height=\"210\" [id]=this.filename type=\"video/mp4\">\r\n                      <source [src]=this.video1080 type=\"video/mp4\">\r\n                    </video>\r\n                  </ion-col>  -->\r\n\r\n              <!-- </ion-row>\r\n            </ion-col> -->\r\n\r\n            <ion-col size=\"12\" class=\"coluitem2\">\r\n              Please enter in 1 -3 curious questions asked by students in the session\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\">\r\n              <ion-label class=\"ques-txt\">\r\n                Question 1<span class=\"valid-clr\">*</span>\r\n              </ion-label>\r\n\r\n              <ion-input type=\"text\" formControlName=\"question1\" class=\"selectitem\">\r\n              </ion-input>\r\n              <ion-row style=\"padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"form.controls.question1.hasError('required') && (form.controls.question1.dirty || form.controls.question1.touched)\">\r\n                  Required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\">\r\n              <ion-label class=\"ques-txt\">\r\n                Question 2\r\n              </ion-label>\r\n\r\n              <ion-input type=\"text\" formControlName=\"question2\" class=\"selectitem\">\r\n              </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" class=\"coluitem\">\r\n              <ion-label class=\"ques-txt\">\r\n                Question 3\r\n              </ion-label>\r\n\r\n              <ion-input type=\"text\" formControlName=\"question3\" class=\"selectitem\">\r\n              </ion-input>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onSave()\">\r\n        <img src=\"/assets/images/Savebutton.png\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_student-curiosity_student-curiosity_module_ts-es2015.js.map