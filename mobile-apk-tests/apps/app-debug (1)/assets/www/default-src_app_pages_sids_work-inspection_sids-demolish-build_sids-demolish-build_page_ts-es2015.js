(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts"],{

/***/ 12748:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsDemolishBuildPage": function() { return /* binding */ SidsDemolishBuildPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_sids_demolish_build_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sids-demolish-build.page.html */ 64501);
/* harmony import */ var _sids_demolish_build_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sids-demolish-build.page.scss */ 83344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);



















// import { UploadService } from './services/emis/upload.service';

let SidsDemolishBuildPage = class SidsDemolishBuildPage {
    constructor(fb, userService, route, NetworkService, router, alert, userSessionService, sqliteDB, modalCtrl, file, geolocation, loadService, sidsService, camera, networkService, alertController, platform, androidPermissions, uploadService) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.NetworkService = NetworkService;
        this.router = router;
        this.alert = alert;
        this.userSessionService = userSessionService;
        this.sqliteDB = sqliteDB;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.geolocation = geolocation;
        this.loadService = loadService;
        this.sidsService = sidsService;
        this.camera = camera;
        this.networkService = networkService;
        this.alertController = alertController;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.uploadService = uploadService;
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
            },
            {
                "value": "12",
                "label": "Compound Wall"
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
        this.Severity = [
            { value: 1, label: 'Low' },
            { value: 2, label: 'medium' },
            { value: 3, label: 'high' },
            { value: 4, label: 'critical' },
        ];
    }
    ngOnInit() {
        this.initializeValidators();
        // this.networkStatus();
    }
    initializeValidators() {
        this.form = this.fb.group({
            ques1: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
            ques2: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques3: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques4: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques5: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques6: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques7: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques8: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null),
            ques9: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', null), // For description
        });
    }
    ionViewDidEnter() {
        this.schoolId = this.userSessionService.school_key_id();
        this.cattyId = this.userSessionService.catty_id();
        this.emis_user_id = this.userSessionService.emis_username();
    }
    onRadioEvent(event, id) {
        if (id === 1) {
            if (this.form.value.ques1 === true) {
                // Set validators for main fields when "Yes" is selected
                this.setMainFieldValidators(true);
                // Update conditional validators based on current severity
                this.updateConditionalValidators(this.form.value.ques6);
            }
            else {
                // Clear all validators when "No" is selected
                this.clearAllValidators();
                this.imageKey = "";
            }
        }
    }
    clearAllValidators() {
        Object.keys(this.form.controls).forEach(key => {
            const control = this.form.get(key);
            control.clearValidators();
            control.updateValueAndValidity();
            control.setValue('');
        });
    }
    setMainFieldValidators(required) {
        const validators = required ? [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required] : [];
        this.form.get('ques2').setValidators(validators);
        this.form.get('ques3').setValidators(validators);
        this.form.get('ques4').setValidators(validators);
        this.form.get('ques5').setValidators(validators);
        this.form.get('ques6').setValidators(validators);
        this.form.get('ques2').updateValueAndValidity();
        this.form.get('ques3').updateValueAndValidity();
        this.form.get('ques4').updateValueAndValidity();
        this.form.get('ques5').updateValueAndValidity();
        this.form.get('ques6').updateValueAndValidity();
    }
    // updateConditionalValidators(severity: number) {
    //   const isHighSeverity = (severity === 3 || severity === 4);
    //   const fileControl = this.form.get('ques7');
    //   const fileNameControl = this.form.get('ques8');
    //   const descriptionControl = this.form.get('ques9');
    //   if (isHighSeverity) {
    //     // For high/critical severity: file and description are required
    //     fileControl.setValidators([
    //       Validators.required,
    //       this.fileSizeValidator.bind(this),
    //       this.fileTypeValidator.bind(this)
    //     ]);
    //     descriptionControl.setValidators([
    //       Validators.required,
    //       Validators.minLength(10),
    //       Validators.maxLength(500)
    //     ]);
    //   } else {
    //     // For low/medium severity: optional fields
    //     fileControl.clearValidators();
    //     descriptionControl.clearValidators();
    //     // Clear values if they exist
    //     if (fileControl.value) {
    //       this.removeFile();
    //     }
    //     if (descriptionControl.value) {
    //       descriptionControl.setValue('');
    //     }
    //   }
    //   fileControl.updateValueAndValidity({ onlySelf: true });
    //   descriptionControl.updateValueAndValidity({ onlySelf: true });
    // }
    // Add this method after the requiresFileUpload() method
    isSubmitDisabled() {
        if (!this.form.valid) {
            return true;
        }
        // Check if ques1 (main question) is false - can submit
        if (!this.form.value.ques1) {
            return false;
        }
        // If ques1 is true, check severity-based conditions
        const severity = this.form.value.ques6;
        const isHighSeverity = (severity === 3 || severity === 4);
        if (isHighSeverity) {
            const fileUploaded = this.form.value.ques7;
            const descriptionFilled = this.form.value.ques9 && this.form.value.ques9.trim().length > 0;
            // Disable if file or description is missing
            if (!fileUploaded || !descriptionFilled) {
                return true;
            }
        }
        return false;
    }
    updateConditionalValidators(severity) {
        const previousSeverity = this.form.get('ques6').value;
        const currentSeverity = severity;
        // Clear file and description if changing from high/critical to low/medium
        if ((previousSeverity === 3 || previousSeverity === 4) && (currentSeverity === 1 || currentSeverity === 2)) {
            this.clearFileAndDescription();
        }
        const isHighSeverity = (currentSeverity === 3 || currentSeverity === 4);
        const fileControl = this.form.get('ques7');
        const fileNameControl = this.form.get('ques8');
        const descriptionControl = this.form.get('ques9');
        if (isHighSeverity) {
            // For high/critical severity: file and description are required
            fileControl.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                this.fileSizeValidator.bind(this),
                this.fileTypeValidator.bind(this)
            ]);
            descriptionControl.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(500)
            ]);
        }
        else {
            // For low/medium severity: optional fields
            fileControl.clearValidators();
            descriptionControl.clearValidators();
            // Clear values if they exist
            this.clearFileAndDescription();
        }
        fileControl.updateValueAndValidity({ onlySelf: true });
        descriptionControl.updateValueAndValidity({ onlySelf: true });
    }
    clearFileAndDescription() {
        const fileControl = this.form.get('ques7');
        const fileNameControl = this.form.get('ques8');
        const descriptionControl = this.form.get('ques9');
        // Clear the values
        fileControl.setValue('');
        fileNameControl.setValue('');
        descriptionControl.setValue('');
        // Reset file input if it exists
        if (this.fileInput) {
            this.fileInput.nativeElement.value = '';
        }
        // Mark as untouched to clear validation errors
        fileControl.markAsUntouched();
        descriptionControl.markAsUntouched();
    }
    removeFile() {
        this.form.get('ques7').setValue('');
        this.form.get('ques8').setValue('');
        if (this.fileInput) {
            this.fileInput.nativeElement.value = '';
        }
        this.form.get('ques7').markAsUntouched();
    }
    // onRadioEvent(event, id) {
    //   if (id == 1) {
    //     if (+this.form.value.ques1) {
    //       this.form.get('ques2').setValue('');
    //       this.form.get('ques2').setValidators(Validators.required);
    //       this.form.get('ques2').updateValueAndValidity();
    //       this.form.get('ques3').setValue('');
    //       this.form.get('ques3').setValidators(Validators.required);
    //       this.form.get('ques3').updateValueAndValidity();
    //       this.form.get('ques4').setValue('');
    //       this.form.get('ques4').setValidators(Validators.required);
    //       this.form.get('ques4').updateValueAndValidity();
    //       this.form.get('ques6').setValue('');
    //       this.form.get('ques6').setValidators(Validators.required);
    //       this.form.get('ques6').updateValueAndValidity();
    //     } else {
    //       this.form.get('ques2').setValue('');
    //       this.form.get('ques2').setValidators(null);
    //       this.form.get('ques2').updateValueAndValidity();
    //       this.form.get('ques3').setValue('');
    //       this.form.get('ques3').setValidators(null);
    //       this.form.get('ques3').updateValueAndValidity();
    //       this.form.get('ques4').setValue('');
    //       this.form.get('ques4').setValidators(null);
    //       this.form.get('ques4').updateValueAndValidity();
    //       this.form.get('ques5').setValue('');
    //       this.form.get('ques5').setValidators(null);
    //       this.form.get('ques5').updateValueAndValidity();
    //       this.form.get('ques6').setValue('');
    //       this.form.get('ques6').setValidators(null);
    //       this.form.get('ques6').updateValueAndValidity();
    //       this.imageKey = "";
    //     }
    // }
    // Custom validator for file size (max 5MB)
    fileSizeValidator(control) {
        if (control.value) {
            // If it's a string key from S3, skip validation (already validated)
            if (typeof control.value === 'string' && !control.value.startsWith('data:')) {
                return null;
            }
            // Only validate base64 strings
            if (control.value.startsWith('data:')) {
                const base64String = control.value;
                const sizeInBytes = (base64String.length * 3) / 4;
                const maxSize = 5 * 1024 * 1024; // 5MB
                if (sizeInBytes > maxSize) {
                    return { fileSizeExceeded: true };
                }
            }
        }
        return null;
    }
    // Custom validator for file type
    fileTypeValidator(control) {
        if (control.value) {
            // If it's a string key from S3, skip validation (already validated)
            if (typeof control.value === 'string' && !control.value.startsWith('data:')) {
                return null;
            }
            // Only validate base64 strings
            if (control.value.startsWith('data:')) {
                const base64String = control.value;
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
                const mimeType = base64String.match(/^data:(.*);base64,/);
                if (mimeType && mimeType[1]) {
                    if (!allowedTypes.includes(mimeType[1])) {
                        return { invalidFileType: true };
                    }
                }
                else {
                    return { invalidBase64Format: true };
                }
            }
        }
        return null;
    }
    // Helper method to check if severity requires file upload
    requiresFileUpload() {
        const severity = this.form.value.ques6;
        return (severity === 3 || severity === 4);
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                console.log("no camera permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
    }
    openCamera() {
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
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_11__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 3145728) {
                        this.imageKey = base64string;
                        this.form.controls['ques4'].setValue(splitedImage[0] + '.png');
                        this.getLatLong();
                    }
                    else {
                        this.alert.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                }
            });
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    uploadImgDelete() {
        this.form.get('ques4').setValue(null);
        this.form.get('ques4').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
        this.form.get('ques4').updateValueAndValidity();
        this.imageKey = "";
    }
    ionViewWillLeave() {
        this.initializeValidators();
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    onSave() {
        if (this.form.valid) {
            if (+this.form.value.ques1) {
                let buildType = this.type.filter(dd => +dd.value == +this.form.value.ques2);
                const records = {
                    "records": {
                        "id": '',
                        "school_id": this.schoolId,
                        "user_id": this.emis_user_id,
                        "work": buildType[0].label,
                        "work_id": this.form.value.ques2,
                        "work_type_id": "3",
                        "construction_yr": this.form.value.ques3,
                        "severity": this.form.value.ques6,
                        "description": this.form.value.ques9 || '',
                        "building_image": this.form.value.ques7 || '',
                        "uploads": this.form.value.ques4,
                        "bldg_name": this.form.value.ques5,
                        "agency": (+this.cattyId == 1 || +this.cattyId == 2 || +this.cattyId == 3) ? "RD" : "PWD",
                        "isactive": '1',
                    }
                };
                this.imagePost();
                this.sidsService.hm_demolitn_bldng_add(records).subscribe(res => {
                    if (res.dataStatus) {
                        // Simply close the modal - parent will refresh
                        this.modalCtrl.dismiss();
                        this.alert.success(res.message);
                    }
                    else {
                        this.alert.error(res.message);
                    }
                }, error => {
                    this.alert.error("Error saving data");
                });
            }
            else {
                // For "No" option - just close modal
                this.modalCtrl.dismiss();
                this.alert.success("Data saved successfully");
            }
        }
        else {
            this.alert.error("Please enter valid data");
        }
    }
    onFileSelected(event) {
        var _a;
        if (!event.target.files || !event.target.files[0]) {
            return;
        }
        const file = event.target.files[0];
        // Allowed file types (ONLY image & pdf)
        const allowedTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'application/pdf'
        ];
        if (!allowedTypes.includes(file.type)) {
            this.alert.error('Only JPG, PNG, and PDF files are allowed.');
            this.removeFile();
            return;
        }
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            this.alert.error(`File size should not exceed 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
            this.removeFile();
            return;
        }
        this.loadService.show('Uploading file...');
        const splittedName = file.name.split('.');
        const ext = ((_a = splittedName.pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        const baseName = splittedName.join('.');
        let bucketFolder;
        if (ext === 'pdf') {
            bucketFolder = 'pdf';
        }
        else {
            bucketFolder = 'images';
        }
        const bucketName = `emisapplication/sids_demolish/${bucketFolder}`;
        const filename = `${baseName}_${Date.now()}`;
        const expiry = 300;
        this.uploadService
            .getSignedUrl(bucketName, ext, filename, expiry)
            .subscribe((result) => {
            if (!(result === null || result === void 0 ? void 0 : result.url) || !(result === null || result === void 0 ? void 0 : result.key)) {
                // this.loadService.hide();
                this.alert.error('Failed to get signed URL');
                this.removeFile();
                return;
            }
            this.uploadService.uploadFile(result.url, file).subscribe(() => {
                var _a, _b, _c, _d;
                // Save S3 key & original filename
                (_a = this.form.get('ques7')) === null || _a === void 0 ? void 0 : _a.setValue(result.key);
                (_b = this.form.get('ques8')) === null || _b === void 0 ? void 0 : _b.setValue(file.name);
                (_c = this.form.get('ques7')) === null || _c === void 0 ? void 0 : _c.markAsTouched();
                (_d = this.form.get('ques7')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
                // this.loadService.hide();
                this.alert.success('File uploaded successfully');
            }, () => {
                // this.loadService.hide();
                this.alert.error('Error uploading file to S3');
                this.removeFile();
            });
        }, () => {
            // this.loadService.hide();
            this.alert.error('Error getting signed URL');
            this.removeFile();
        });
    }
    // from the above use as the bucket name emisapplication if image means           /sids_demolish/images/  and pdf means /sids_demolish/pdf/     
    // onFileSelected(event: any) {
    //   if (event.target.files && event.target.files[0]) {
    //     const file = event.target.files[0];
    //     // Check file type first (exclude videos)
    //     const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    //     if (!allowedTypes.includes(file.type)) {
    //       this.alert.error('Only JPG, PNG, and PDF files are allowed. Videos are not supported.');
    //       this.removeFile();
    //       return;
    //     }
    //     // Check file size (max 5MB)
    //     const maxSizeInMB = 5;
    //     const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    //     if (file.size > maxSizeInBytes) {
    //       this.alert.error(`File size should not exceed ${maxSizeInMB}MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
    //       this.removeFile();
    //       return;
    //     }
    //     // Show loading indicator
    //     this.loadService.show('Uploading file...');
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       const base64String = e.target.result;
    //       const splittedName = file.name.split(".");
    //       const fileName = splittedName[0];
    //       const fileExtension = splittedName[splittedName.length - 1].toLowerCase();
    //       const expiry: number = 300; // 5 minutes
    //       let bucketFolder = "";
    //       // Determine bucket folder based on file type
    //       if (fileExtension === 'pdf') {
    //         bucketFolder = "pdf";
    //       } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
    //         bucketFolder = "images";
    //       }
    //       const bucketName = `emisapplication/movie_screening/${bucketFolder}`;
    //       // Get signed URL from your upload service
    //       this.uploadService.getSignedUrl(bucketName, fileExtension, fileName, expiry).subscribe((result) => {
    //         if (result?.key) {
    //           // Upload the file to S3
    //           this.uploadService.uploadFile(result.url, file).subscribe((uploadRes) => {
    //             // Store the S3 key in ques7 and filename in ques8
    //             this.form.get('ques7').setValue(result.key);
    //             this.form.get('ques8').setValue(file.name);
    //             this.form.get('ques7').markAsTouched();
    //             this.form.get('ques7').updateValueAndValidity();
    //             // this.loadService.hide();
    //             this.alert.success('File uploaded successfully');
    //           }, (uploadError) => {
    //             // this.loadService.hide();
    //             this.alert.error('Error uploading file to S3');
    //             this.removeFile();
    //           });
    //         } else {
    //           // this.loadService.hide();
    //           this.alert.error('Error getting signed URL');
    //           this.removeFile();
    //         }
    //       }, (urlError) => {
    //         // this.loadService.hide();
    //         this.alert.error('Error getting signed URL');
    //         this.removeFile();
    //       });
    //     };
    //     reader.onerror = (error) => {
    //       // this.loadService.hide();
    //       this.alert.error('Error reading file');
    //       this.removeFile();
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }
    viewFile(fileKey, fileName) {
        const cloudfrontBaseUrl = 'https://d21mc000xink7q.cloudfront.net/';
        const fileExtension = fileName.split('.').pop().toLowerCase();
        let fileUrl = '';
        if (fileExtension === 'pdf') {
            fileUrl = `${cloudfrontBaseUrl}sids_demolish/pdf/${fileKey}`;
        }
        else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
            fileUrl = `${cloudfrontBaseUrl}sids_demolish/images/${fileKey}`;
        }
        else {
            fileUrl = `${cloudfrontBaseUrl}${fileKey}`;
        }
        console.log('Opening file:', fileUrl);
        window.open(fileUrl, '_blank');
    }
    imagePost() {
        let dataImage = [];
        dataImage = this.imageKey.split(',');
        if (dataImage.length == 2) {
            let data = {
                "records": {
                    "Photo": dataImage[1],
                    "PhotoName": this.form.value.ques4
                }
            };
            this.sidsService.S3ImageSave(data).subscribe(res => {
                if (res.dataStatus) {
                    this.alert.success('Saved Successfully');
                }
            });
        }
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alert.alertToTurnOnPermission('Location', 'Location');
            }
            // console.log('Error getting location', error);
        });
    }
    autoSync() {
        let buildType = this.type.filter(dd => +dd.value == +this.form.value.ques2);
        const records = {
            "records": {
                "id": '',
                "school_id": this.schoolId,
                "user_id": this.emis_user_id,
                "work": buildType[0].label,
                "work_id": this.form.value.ques2,
                "work_type_id": "3",
                "construction_yr": this.form.value.ques3,
                "uploads": this.form.value.ques4,
                "bldg_name": this.form.value.ques5,
                "agency": (+this.cattyId == 4 || +this.cattyId == 5) ? "PWD" : "RD",
                // "lat": this.latitude,
                // "log": this.longitude,
                "isactive": '1',
            }
        };
        const datainsert = "INSERT INTO TobeDemolish VALUES (?,?,?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.emis_user_id, records, this.imageKey, "2"]).then(insertres => {
            this.alert.warning("Saved Locally");
        });
    }
    networkStatus() {
        this.NetworkService.onNetworkChange().subscribe((status) => {
            if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.ConnectionStatus.Online) {
                console.log("To be Demolish Auto Sync");
                this.getDemolish();
            }
            else {
                console.log("AutoSync Stopped");
            }
        });
    }
    getDemolish() {
        debugger;
        let query = 'SELECT * FROM TobeDemolish';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let demolishData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    demolishData.push(data.rows.item(i));
                }
                console.log('demolishData', demolishData);
                if (demolishData.length > 0) {
                    for (let i = 0; i < demolishData.length; i++) {
                        if (+demolishData[i].Status == 2) {
                            let dataImage = [];
                            dataImage = demolishData[i].uploadFile.split(',');
                            this.sidsService.hm_demolitn_bldng_add(demolishData[i].records).subscribe(res => {
                                if (res.dataStatus) {
                                    if (dataImage.length == 2) {
                                        let data = {
                                            "records": {
                                                "Photo": dataImage[1],
                                                "PhotoName": demolishData[i].records.uploads
                                            }
                                        };
                                        this.sidsService.S3ImageSave(data).subscribe(res => {
                                            if (res.dataStatus) {
                                                let query2 = 'DELETE FROM TobeDemolish WHERE schoolId = "' + demolishData[i].schoolId + '"' +
                                                    ' And emisId = "' + demolishData[i].emisId + '"';
                                                return this.sqliteDB.update(query2).then(data => {
                                                    this.alert.success(res.message);
                                                });
                                            }
                                        });
                                    }
                                }
                                else {
                                    this.alert.success(res.message);
                                }
                            });
                        }
                    }
                }
            }
        });
    }
};
SidsDemolishBuildPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__.Geolocation },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__.SidsService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_14__.UploadService }
];
SidsDemolishBuildPage.propDecorators = {
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['jpgimage',] }]
};
SidsDemolishBuildPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-sids-demolish-build',
        template: _raw_loader_sids_demolish_build_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sids_demolish_build_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidsDemolishBuildPage);



/***/ }),

/***/ 47224:
/*!***********************************************************!*\
  !*** ./src/app/services/tnvn/services/loading.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 100000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 1000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => {
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 83344:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.scss ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\nion-content .header-text {\n  background: #f4f4f4;\n  padding: 15px;\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .middle-text {\n  border-radius: 0px 0px 10px 10px;\n}\nion-content .question {\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin: 10px auto;\n}\nion-content .question p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 20px;\n}\nion-content .question ion-select {\n  max-width: 100%;\n}\nion-content .question ion-item {\n  margin: 0px 0;\n  --padding-start: 0px ;\n}\nion-content ion-radio-group {\n  display: flex;\n}\nion-content ion-radio-group ion-item {\n  margin: 0 !important;\n}\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n.saveBtn {\n  --border-radius: 15px;\n  text-transform: capitalize;\n  color: #FFF;\n  display: flex;\n  margin: 10px auto;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZHMtZGVtb2xpc2gtYnVpbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFJO0VBRUksZ0NBQUE7QUFDUjtBQUNJO0VBQ0Usc0JBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFDTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBRU07RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBRU07RUFDRSxvQkFBQTtBQUFSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSiIsImZpbGUiOiJzaWRzLWRlbW9saXNoLWJ1aWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5oZWFkZXItdGV4dHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubWlkZGxlLXRleHR7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5xdWVzdGlvbiB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAvLyAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tcmFkaW8tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVwbG9hZEltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2F2ZUJ0bntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMzMTY4Nzk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 64501:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.page.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">Add Demolish Building</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon style=\"font-size: 24px;\" class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n    <ion-note slot=\"start\"\r\n      style=\"font-size: 10px; text-align: left; color: var(--ion-color-primary); font-weight: bold;\">\r\n      குறிப்பு :\r\n      கீழ் உள்ள பட்டியலில் தங்கள் பள்ளியில் ஆபத்தான நிலையில் இடிக்க வேண்டிய கட்டிடம் மற்றும் சுற்றுச்சுவர் ஏதேனும்\r\n      விடுபட்டு இருப்பின் அதன் விபரங்களை இங்கே புதிதாக பதிவேற்றம் செய்யவும்.\r\n      அவ்வாறு எந்தக்கட்டிடமும் இல்லையென்றாலோ அல்லது விடுபடவில்லை என்றாலோ இதனை தவிர்க்கவும்.\r\n    </ion-note>\r\n    <div class=\"question\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.தங்கள் பள்ளியில் இடிக்கப்பட வேண்டிய கட்டிடம் ஏதேனும் உள்ளதா?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-radio-group (ionChange)=\"onRadioEvent($event, 1)\" [value]=\"true\" formControlName=\"ques1\">\r\n            <ion-item mode=\"md\" lines=\"none\">\r\n              <ion-label>ஆம்</ion-label>\r\n              <ion-radio slot=\"start\" [value]=\"true\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item mode=\"md\" lines=\"none\">\r\n              <ion-label>இல்லை</ion-label>\r\n              <ion-radio slot=\"start\" [value]=\"false\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.1 கட்டிடம் பெயர்<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-input type=\"text\" formControlName=\"ques5\" placeholder=\"Please enter\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.2 கட்டிடத்தின் வகை?<span style=\"color: red;\">*</span></p>\r\n            </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques2\" multiple=\"false\" placeholder=\"Please select\"\r\n              style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of type\" [value]=\"item.value\">{{item.label}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <!-- <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.3 கட்டிதத்தின் திவிரைன்மை </p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques6\" placeholder=\"Please select\" style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of Severity\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.3 கட்டிதத்தின் திவிரைன்மை<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-select formControlName=\"ques6\" (ionChange)=\"updateConditionalValidators($event)\"\r\n              placeholder=\"Please select\" style=\"width: 100%; padding: 5px;\">\r\n              <ion-select-option *ngFor=\"let item of Severity\" [value]=\"item.value\">\r\n                {{ item.label }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- File Upload Section -->\r\n\r\n    </div>\r\n    <!-- <div class=\"question\" *ngIf=\"form.value.ques1  && (form.value.ques6 === 3 || form.value.ques6 === 4)\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Upload File</p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n\r\n            <input type=\"file\" (change)=\"onFileSelected($event)\" accept=\".jpg,.jpeg,.png,.pdf\" />\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"question\" *ngIf=\"form.value.ques1  && (form.value.ques6 === 3 || form.value.ques6 === 4)\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Description</p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-input type=\"text\" formControlName=\"ques9\" placeholder=\"Please enter\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n    <!-- File Upload Section -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1 && requiresFileUpload()\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Upload File <span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\"\r\n            [class.invalid]=\"form.get('ques7').invalid && form.get('ques7').touched\">\r\n            <input type=\"file\" (change)=\"onFileSelected($event)\"\r\n              accept=\"image/jpeg,image/jpg,image/png,application/pdf\" />\r\n              \r\n          </ion-item>\r\n          <ion-note \r\n            style=\"font-size: 10px; text-align: left; color: var(--ion-color-primary); font-weight: bold;\">\r\n            குறிப்பு : Only PDF and Image files (JPG, PNG) are allowed. Maximum file size: 5 MB\r\n          </ion-note>\r\n          <!-- Validation Messages -->\r\n          <div *ngIf=\"form.get('ques7').invalid && form.get('ques7').touched\" class=\"validation-error\">\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.required\">\r\n              File upload is required for high/critical severity\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.fileSizeExceeded\">\r\n              File size should not exceed 5 MB\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques7').errors?.invalidFileType\">\r\n              Only JPG, PNG and PDF files are allowed\r\n            </ion-text>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.value.ques8\" class=\"file-preview-section\">\r\n            <ion-note style=\"font-size: 12px; color: green;\">\r\n              Selected file: {{form.value.ques8}}\r\n            </ion-note>\r\n\r\n            <ion-button *ngIf=\"form.value.ques7\" size=\"small\" fill=\"clear\"\r\n              (click)=\"viewFile(form.value.ques7, form.value.ques8)\" style=\"margin-left: 10px;\">\r\n              <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\r\n              View File\r\n            </ion-button>\r\n          </div>\r\n\r\n          <!-- Optional: Add some CSS for better layout -->\r\n          <style>\r\n            .file-preview-section {\r\n              display: flex;\r\n              align-items: center;\r\n              margin-top: 5px;\r\n              flex-wrap: wrap;\r\n            }\r\n          </style>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1 && requiresFileUpload()\">\r\n      <ion-row class=\"header-text\">\r\n        <p>Description <span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\"\r\n            [class.invalid]=\"form.get('ques9').invalid && form.get('ques9').touched\">\r\n            <ion-textarea type=\"text\" formControlName=\"ques9\" placeholder=\"Please enter description (10-500 characters)\"\r\n              rows=\"3\" required>\r\n            </ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Validation Messages -->\r\n          <div *ngIf=\"form.get('ques9').invalid && form.get('ques9').touched\" class=\"validation-error\">\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.required\">\r\n              Description is required for high/critical severity\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.minlength\">\r\n              Description must be at least 10 characters\r\n            </ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"form.get('ques9').errors?.maxlength\">\r\n              Description cannot exceed 500 characters\r\n            </ion-text>\r\n          </div>\r\n\r\n          <ion-note style=\"font-size: 10px;\">\r\n            Characters: {{form.get('ques9').value?.length || 0}}/500\r\n          </ion-note>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- Add to your SCSS file -->\r\n    <!-- .validation-error {\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n  padding-left: 16px;\r\n}\r\n\r\n.item-input.invalid {\r\n  border-color: var(--ion-color-danger) !important;\r\n} -->\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.4 கட்டிடம் கட்டப்பட்ட வருடம்?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" class=\"item-input\">\r\n            <ion-label></ion-label>\r\n            <ion-datetime placeholder=\"Please select date\" displayFormat=\"YYYY\" formControlName=\"ques3\"\r\n              presentation=\"year\" min=\"1850\" max=\"2026\" style=\"border-bottom: 1px solid; width: 100%;\"></ion-datetime>\r\n            <!-- <ion-input type=\"date\" inputmode=\"number\" formControlName=\"ques3\" placeholder=\"Please enter\" required ></ion-input> -->\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.ques1\">\r\n      <ion-row class=\"header-text\">\r\n        <p>1.5 கட்டிடத்தின் தற்போதைய புகைப்படம்?<span style=\"color: red;\">*</span></p>\r\n      </ion-row>\r\n      <ion-row class=\"middle-text\" *ngIf=\"!form.value.image\">\r\n        <ion-col size=\"12\">\r\n          <ion-item mode=\"md\" fill=\"outline\" (click)=\"openCamera()\">\r\n            <ion-col size=\"1\" style=\"text-align: center;\">\r\n              <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                Click to Upload Image\r\n              </label>\r\n            </ion-col>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"form.value.ques4\" class=\"middle-text\">\r\n        <ion-col size=\"12\" style=\"float: left;\">\r\n          <ion-button (click)=\"uploadImgDelete()\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n          </ion-button>\r\n          <div style=\"padding: 5px;\">\r\n            <img class=\"uploadImage\" src=\"{{imageKey}}\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </form>\r\n  <ion-button [disabled]=\"form.invalid || isSubmitDisabled()\" size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\">\r\n    சேமிக்கவும் </ion-button>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts-es2015.js.map