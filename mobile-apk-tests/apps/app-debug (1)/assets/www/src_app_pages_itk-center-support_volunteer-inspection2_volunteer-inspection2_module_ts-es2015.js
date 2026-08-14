(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-inspection2_volunteer-inspection2_module_ts"],{

/***/ 74737:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2-routing.module.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspection2PageRoutingModule": function() { return /* binding */ VolunteerInspection2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volunteer-inspection2.page */ 66053);




const routes = [
    {
        path: '',
        component: _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspection2Page
    }
];
let VolunteerInspection2PageRoutingModule = class VolunteerInspection2PageRoutingModule {
};
VolunteerInspection2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VolunteerInspection2PageRoutingModule);



/***/ }),

/***/ 54398:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspection2PageModule": function() { return /* binding */ VolunteerInspection2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _volunteer_inspection2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volunteer-inspection2-routing.module */ 74737);
/* harmony import */ var _volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volunteer-inspection2.page */ 66053);







let VolunteerInspection2PageModule = class VolunteerInspection2PageModule {
};
VolunteerInspection2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _volunteer_inspection2_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspection2PageRoutingModule
        ],
        declarations: [_volunteer_inspection2_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerInspection2Page]
    })
], VolunteerInspection2PageModule);



/***/ }),

/***/ 66053:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspection2Page": function() { return /* binding */ VolunteerInspection2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_volunteer_inspection2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./volunteer-inspection2.page.html */ 58742);
/* harmony import */ var _volunteer_inspection2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volunteer-inspection2.page.scss */ 8382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);

















let VolunteerInspection2Page = class VolunteerInspection2Page {
    constructor(fb, router, ActRoute, alertService, camera, androidPermissions, file, uploadService, emisService, usersessionService, modalCtrl) {
        this.fb = fb;
        this.router = router;
        this.ActRoute = ActRoute;
        this.alertService = alertService;
        this.camera = camera;
        this.androidPermissions = androidPermissions;
        this.file = file;
        this.uploadService = uploadService;
        this.emisService = emisService;
        this.usersessionService = usersessionService;
        this.modalCtrl = modalCtrl;
        this.questionArray = [];
        this.questionList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe("en-US");
        this.resultData = [];
    }
    ngOnInit() {
        this.initializeValidator();
        this.todayDate = this.pipe.transform(new Date(), "yyyy-MM-dd");
        this.month = this.pipe.transform(new Date(), 'MM');
        this.teacherId = this.usersessionService.teacher_id();
    }
    ionViewDidEnter() {
        this.noData = true;
        this.submitted = false;
        this.getQuestionFromServer();
        this.ActRoute.queryParams.subscribe(params => { this.volId = params.volunteerId, this.searchTxt = params.searchTxt; });
        // console.log("check constructor datas",'currentMonth=>', this.month, "volId=>",this.volId,"searchText",this.searchTxt, "todayDate",this.todayDate,"teacherId", this.teacherId);   
    }
    initializeValidator() {
        this.form = this.fb.group({
            Answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', null),
            questions: this.fb.array([]),
        });
    }
    getQuestionFromServer() {
        this.emisService.getItkCentrObsrQuetions().subscribe((res) => {
            this.questionArray = [];
            this.questionArray = res.result;
            if (this.questionArray.length > 0) {
                this.noData = true;
                for (let i = 0; i < this.questionArray.length; i++) {
                    this.questionArray[i].validation = "required";
                    this.questionArray[i].Answer = "";
                    this.questionArray[i].OptId = "";
                }
                this.addQuestValidation(this.questionArray);
                // console.log("check validation field added in this.questionList",this.questionArray);
            }
            else {
                this.noData = false;
                this.alertService.error(res.messgae || 'No data Found');
            }
        });
    }
    addQuestValidation(questionArray) {
        const control = this.form.controls["questions"];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.questionList = this.form.controls.questions;
        for (let i = 0; i < questionArray.length; i++) {
            this.questionList.push(this.fb.group({
                Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].Qid, null),
                QtypId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].QtypId, null),
                Qtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].Qtype, null),
                Qst: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].Qst, null),
                Options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].Options, null),
                validation: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].validation, null),
                OptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].OptId, null),
                Answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(questionArray[i].Answer, (questionArray[i].validation == 'required' ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null)),
            }));
        }
        // console.log("CHECK Form Control Question Array are displayed", this.questionList); 
    }
    openCamera(i) {
        // for test
        // this.imageKey = "image Key Dummy Name"
        // this.form.controls['questions']['controls'][i].controls['Answer'].setValue(this.imageKey);   
        // debugger
        this.androidPermission();
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            var bucketName = "renewalapplicationemis";
            let expiry = 300;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_2__.base64StringToBlob)(base[1], 'image/jpg');
                    console.log(blob);
                    if (blob.size <= 3145728) {
                        this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                            if (result) {
                                this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                    this.imageKey = result.key;
                                    this.doc1Uploaded = true;
                                    this.form.controls['questions']['controls'][i].controls['Answer'].setValue(this.imageKey);
                                    this.alertService.success('File Uploaded Successfully');
                                });
                            }
                        });
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
    onEventValidation(event, i) {
        this.form.controls['questions']['controls'][i].controls['OptId'].setValue(event.detail.value.OptId);
        this.form.controls['questions']['controls'][i].controls['OptId'].updateValueAndValidity();
        this.form.controls['questions']['controls'][i].controls['Answer'].setValue(event.detail.value.Options);
        this.form.controls['questions']['controls'][i].controls['Answer'].updateValueAndValidity();
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                // console.log("Camera permission request");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
        //  console.log("Camera permission denied");
    }
    viewImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            // Dummy image
            // this.imageKey ='a926d470-6fc8-11ed-a171-2700209804e4.jpg'
            var filename = this.imageKey;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.image = result.url;
                    const modal = yield this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__.ViewImagePage,
                        componentProps: { image: this.image },
                        cssClass: 'view-image-modal'
                    });
                    yield modal.present();
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        });
    }
    saveSurvey() {
        if (this.form.valid) {
            // record set survery answers     
            let arrayData = [];
            let forData = this.form.value.questions;
            // console.log("check form value",forData);
            for (let i = 0; i < forData.length; i++) {
                let data = {
                    "IndxID": "",
                    "QueId": forData[i].Qid,
                    "RespInt": forData[i].OptId,
                    "RespChar": forData[i].Answer
                };
                arrayData.push(data);
            }
            // console.log("array data",arrayData)
            let data = {
                "ItkVolunteer": [
                    {
                        "IndxID": "",
                        "TeacherId": this.teacherId,
                        "volunteer_Id": this.volId,
                        "SurveyMonth": this.month,
                        "surveyDate": this.todayDate,
                    }
                ],
                "ItkQuestDetails": arrayData,
            };
            // console.log("check data array",data);
            // post method 
            this.emisService.saveITKInspectionDetails(data).subscribe((res) => {
                if (res.dataStatus = true) {
                    this.alertService.success(res.message);
                    this.router.navigate(['tabs/itk-center-dashboard']);
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
        else {
            this.submitted = true;
            this.alertService.error('Field Required');
            // console.log("form invalid");
        }
    }
    goBack() {
        this.router.navigate(['/tabs/teacher/volunteer-search', { volunId: this.searchTxt }]);
    }
    ionViewWillLeave() {
        this.submitted = false;
        this.form.reset();
        this.addQuestValidation(this.questionArray);
    }
};
VolunteerInspection2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__.AndroidPermissions },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_9__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_10__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController }
];
VolunteerInspection2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-volunteer-inspection2',
        template: _raw_loader_volunteer_inspection2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_volunteer_inspection2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VolunteerInspection2Page);



/***/ }),

/***/ 8382:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.scss ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-grid {\n  margin: 3%;\n}\n\n.error-message {\n  padding-left: 5%;\n  color: red;\n  padding-top: 4%;\n}\n\n.border {\n  border: #9a9fcd 1px solid;\n  margin-top: 3%;\n}\n\n.cardNoData {\n  padding: 15px;\n  font-size: 15px;\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1pbnNwZWN0aW9uMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InZvbHVudGVlci1pbnNwZWN0aW9uMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBtYXJnaW46IDMlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAjOWE5ZmNkIDFweCBzb2xpZDtcclxuICBtYXJnaW4tdG9wOiAzJVxyXG59XHJcblxyXG4uY2FyZE5vRGF0YSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiA1JTtcclxufSJdfQ== */");

/***/ }),

/***/ 58742:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-inspection2/volunteer-inspection2.page.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n\t\t\t<ion-button><ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>ITK Center Questions</ion-title>   \r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> ITK Center Questions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"!noData\" class=\"cardNoData\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-label>No data found</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" *ngIf=\"noData\">\r\n    <ion-grid formArrayName=\"questions\">\r\n      <div *ngFor=\"let item of form.get('questions')['controls']; let i=index;\" [formGroupName]=\"i\" style=\"margin-bottom: 3%;\">\r\n        <ion-list class=\"graybackgrond\">\r\n          <ion-row>\r\n            <ion-col size=\"12\"><ion-label>{{i+1}}. {{item.value.Qst}}</ion-label></ion-col>            \r\n          </ion-row>\r\n        </ion-list>\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 4\">\r\n          <ion-select style=\"width:90%\" placeholder=\"Select option\" (ionChange)=\"onEventValidation($event, i)\">\r\n            <ion-select-option [value]=\"item\" *ngFor=\"let item of item.value.Options\">{{item.Options}}</ion-select-option>           \r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 9\">\r\n          <ion-textarea formControlName=\"Answer\" Placeholder=\"Enter Remarks\"></ion-textarea>\r\n        </ion-item> \r\n\r\n        <ion-item lines=\"none\" class=\"border\" *ngIf=\"item.value.QtypId == 6\">\r\n          <ion-input type=\"tel\"  formControlName=\"Answer\"  maxlength=\"2\" Placeholder=\"Enter No of students\"></ion-input>\r\n        </ion-item> \r\n\r\n        <ion-card style=\"width: 100%;margin-left: 0%;\" *ngIf=\"item.value.QtypId == 1\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"text-align:center\">\r\n              <ion-button (click)=\"openCamera(i)\" style=\"text-transform:none\"><ion-icon name=\"camera-outline\"></ion-icon>&nbsp;Camera</ion-button>\r\n              <!-- <ion-button (click)='viewImage()' style=\"text-transform:none\"><ion-icon name=\"image-outline\"></ion-icon>&nbsp;View image</ion-button> -->\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"text-align:center\">\r\n              <ion-label style=\"font-size: 12px;\"> 'Tap camera button to take and upload center photo' </ion-label>\r\n            </ion-col>\r\n            <ion-col>              \r\n              <ion-label>{{item.value.Answer}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        \r\n       <div *ngIf=\"item.value.QtypId == 7\">\r\n        <ion-radio-group (ionChange)=\"onEventValidation($event, i)\">          \r\n              <ion-item lines=\"none\" *ngFor=\"let item of item.value.Options\">\r\n                <ion-label>{{item.Options}}</ion-label>\r\n                <ion-radio slot=\"start\" [value]=\"item\"></ion-radio>\r\n              </ion-item>         \r\n        </ion-radio-group>       \r\n      </div>\r\n         <div class=\"error-message\" *ngIf=\"(item.controls['Answer'].hasError('required')) && (submitted || item.controls['Answer'].dirty || item.controls['Answer'].touched)\" text-wrap>\r\n                <ion-label>Field Required</ion-label>\r\n            </div>            \r\n      </div>      \r\n    </ion-grid>  \r\n  </form>\r\n  </ion-content>\r\n\r\n\r\n \r\n  <ion-footer style=\"text-align:center; background:#2176b9;\">\r\n      <ion-button expand=\"full\" style=\"box-shadow:none;--box-shadow:none;\" (click)=\"saveSurvey()\" >Save</ion-button>\r\n  </ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-inspection2_volunteer-inspection2_module_ts-es2015.js.map