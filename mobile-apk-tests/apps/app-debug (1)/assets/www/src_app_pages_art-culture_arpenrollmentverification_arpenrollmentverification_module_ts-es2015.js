(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_arpenrollmentverification_arpenrollmentverification_module_ts"],{

/***/ 54473:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/arpenrollmentverification/arpenrollmentverification-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpenrollmentverificationPageRoutingModule": function() { return /* binding */ ArpenrollmentverificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _arpenrollmentverification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arpenrollmentverification.page */ 27058);




const routes = [
    {
        path: '',
        component: _arpenrollmentverification_page__WEBPACK_IMPORTED_MODULE_0__.ArpenrollmentverificationPage
    }
];
let ArpenrollmentverificationPageRoutingModule = class ArpenrollmentverificationPageRoutingModule {
};
ArpenrollmentverificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArpenrollmentverificationPageRoutingModule);



/***/ }),

/***/ 85638:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/arpenrollmentverification/arpenrollmentverification.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpenrollmentverificationPageModule": function() { return /* binding */ ArpenrollmentverificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _arpenrollmentverification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arpenrollmentverification-routing.module */ 54473);
/* harmony import */ var _arpenrollmentverification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arpenrollmentverification.page */ 27058);








let ArpenrollmentverificationPageModule = class ArpenrollmentverificationPageModule {
};
ArpenrollmentverificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _arpenrollmentverification_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArpenrollmentverificationPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
        ],
        declarations: [_arpenrollmentverification_page__WEBPACK_IMPORTED_MODULE_1__.ArpenrollmentverificationPage]
    })
], ArpenrollmentverificationPageModule);



/***/ }),

/***/ 27058:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/arpenrollmentverification/arpenrollmentverification.page.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpenrollmentverificationPage": function() { return /* binding */ ArpenrollmentverificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_arpenrollmentverification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./arpenrollmentverification.page.html */ 79022);
/* harmony import */ var _arpenrollmentverification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arpenrollmentverification.page.scss */ 28236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);












// import { ModalService } from "src/app/services/modal.service";
let ArpenrollmentverificationPage = class ArpenrollmentverificationPage {
    constructor(router, alertController, api, alertService, route, emisservice, usersessionService, uploadService, userService) {
        this.router = router;
        this.alertController = alertController;
        this.api = api;
        this.alertService = alertService;
        this.route = route;
        this.emisservice = emisservice;
        this.usersessionService = usersessionService;
        this.uploadService = uploadService;
        this.userService = userService;
        this.validationHeader = "Validation";
        this.currentResourceDetails = {};
        this.currentStatus = "all";
        this.currentDataMissingField = "";
        this.showInputSearch = false;
        this.searchValue = null;
        this.showErrorMessageforNoData = false;
        // this.route.queryParams.subscribe((blockId) => {
        //   this.BlkId =  blockId['blockId']
        // })
    }
    // id:any
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.checkBatch = null;
        this.teacher_id = this.usersessionService.teacher_id();
        this.getUserDetails();
        // this.route.queryParams.subscribe((blockId) => {
        //   this.BlkId =  blockId['blockId']
        // })
        // this.getarpverification();
        // this.block_id = window.localStorage.getItem("block_id");
        // this.currentStatus = this.getStatus('status')
        if (this.currentStatus === "all") {
            // this.getResources();
            // this.getarpverification();
        }
        else if (this.currentStatus !== "dataMissing") {
            // this.getResourceBasedOnFilter(this.currentStatus);
        }
        else if (this.currentStatus === "dataMissing") {
            // this.getResourceBasedOnFilter("dataMissing", this.currentDataMissingField);
        }
    }
    sendOTP(data) {
        var chk = {
            "records": {
                "TemplateId": "1707168967518871308",
                "MobileNo": data.contact_no,
                "TemplateMsg": "நீங்கள் பள்ளிகளில் கலைவள நபராக தன்னார்வப்பணி மேற்கொள்ள உங்கள் Playstoreஇல் TNSED Administrators APPஐ install செய்து கொள்ளவும்.உங்களது Username : {#var#} மற்றும் Password: {#var#} பயன்படுத்தி login செய்யவும்.- TNSED",
                "var": {
                    "var1": data.UserName,
                    "var2": data.Password
                }
            }
        };
        this.emisservice.getverifeidsms(chk).subscribe((res) => {
            this.alertService.success("sended successfully");
        });
    }
    getStatus(parameter) {
        return this.route.snapshot.paramMap.get(parameter);
    }
    showSearchInput() {
        this.showInputSearch = true;
    }
    changeSearchValue(event) {
        const { value } = event.target;
        this.searchValue = value === "" ? null : value;
        // this.showInputSearch = this.searchValue === null ? false : true;
    }
    handleFilter(ev) {
        this.searchValue = "";
        this.currentStatus = ev.target.value;
        if (this.currentStatus !== "dataMissing") {
            // this.getResourceBasedOnFilter(this.currentStatus);
            this.currentDataMissingField = "";
        }
        else {
            this.resourcePersonsList = [];
            // this.resourcePersonDump=[]
            this.showErrorMessageforNoData = false;
        }
    }
    handleDataMissing(event) {
        this.currentDataMissingField = event.target.value;
        // this.getResourceBasedOnFilter("dataMissing", this.currentDataMissingField);
    }
    splitCamelCaseToString(value) {
        return (value
            .replace(/([A-Z])/g, " $1")
            // uppercase the first character
            .replace(/^./, function (str) {
            return str.toUpperCase();
        }));
    }
    goBack() {
        if (this.showInputSearch === true) {
            this.showInputSearch = false;
        }
        else {
            this.router.navigate(["/tabs/art-culture"]);
        }
    }
    getMessage(list) {
        let stringFormed = `<div class="row">
      <div class="address-column">
      <label><strong>Address:</strong></label>
      <span> ${list.address}</span>
      </div>
      <div class="column">
      <label><strong>Mobile Number:</strong></label>
      <span> ${list.mobileNumber}</span>
      </div>
      <div class="column">
      <label><strong>Aadhaar Number:</strong></label>
      <span> ${list.adhaarNumber}</span>
      </div>
      </div>`;
        return stringFormed;
    }
    getButtonList(valid, id) {
        if (valid === true) {
            return [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.alertController.dismiss();
                    }),
                },
            ];
        }
        else {
            return [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.alertController.dismiss();
                    }),
                },
                {
                    text: "Confirm",
                    cssClass: "validate-success",
                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        // this.confirmValidate(id);
                    }),
                },
            ];
        }
    }
    viewImage(url, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            var filename = url;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    Object.assign(this.resourcePersonDump[i], { imageUrl: result.url });
                }
            }));
        });
    }
    brtestatus(status) {
        if (status == '1') {
            this.resourcePersonDump[status].brte_status = 'Onhold';
        }
        else if (status == '2') {
            this.resourcePersonDump[status].brte_status = 'Verified';
        }
        else if (status == '3') {
            this.resourcePersonDump[status].brte_status = 'Rejected';
        }
        else if (status == null) {
            this.resourcePersonDump[status].brte_status = 'Unverfied';
        }
        else {
            this.resourcePersonDump[status].brte_status = 'All';
        }
    }
    selectChart(status) {
        //  if(status.detail.value == '1' ||status.detail.value == '2' || status.detail.value == '3'|| status.detail.value == 'null'){
        if (status.detail.value) {
            this.resourcePersonDump = this.allResourcePersonDump.filter((ft) => (status.detail.value == 0) ? !ft.brte_status : (ft.brte_status == status.detail.value));
        }
        else {
            this.resourcePersonDump = this.allResourcePersonDump;
        }
        // }
        // else{
        //   this.resourcePersonDump;
        // }
    }
    getUserDetails() {
        this.userService.getOoscUserDetails(this.teacher_id).subscribe(res => {
            if (res.dataStatus == true) {
                this.block = res.result[0].block_id;
                this.getarpverification();
                // if (uerDetails.length > 0) {
                //     this.getBlockList(this.distId);
                // } else {
                //   this.blocklistActive = false;
                // }
            }
            else {
                this.alertService.error("Something went wrong");
            }
        });
    }
    getarpverification() {
        this.emisservice.getresourceperson(this.block).subscribe((res) => {
            this.resourcePersonDump = res.result;
            this.resourcePersonDump.forEach(datas => {
                datas.showName = 0;
            });
            this.artFormList = [];
            for (let i = 0; i < this.resourcePersonDump.length; i++) {
                if (this.artFormList.indexOf(this.resourcePersonDump[i].key_art_form) === -1) {
                    this.artFormList.push(this.resourcePersonDump[i].key_art_form);
                }
            }
            if (this.artFormList) {
                this.artFormList = this.artFormList.map(function (e) {
                    return { label: e };
                });
            }
            this.allResourcePersonDump = res.result;
        });
        setTimeout(() => {
            for (let i = 0; i < this.resourcePersonDump.length; i++) {
                if (this.resourcePersonDump[i].image != '' && this.resourcePersonDump[i].image != null && this.resourcePersonDump[i].image != undefined) {
                    this.viewImage(this.resourcePersonDump[i].image, i);
                }
                else {
                    // this.getstudentimagebuspass(this.resourcePersonDump[i].old_photo,i)
                    // this.viewImage(this.studentlist[i].old_photo,i)        
                }
            }
        }, 500);
    }
    validateprofile(val) {
        this.router.navigate(["/tabs/validation-profile"], { queryParams: { 'persondetails': JSON.stringify(val) } });
    }
    onArtForm(event) {
        console.log(event.value.label, "kkkk");
        for (let i = 0; i < this.resourcePersonDump.length; i++) {
            this.resourcePersonDump[i].showName = 0;
            if (this.resourcePersonDump[i].key_art_form == event.value.label) {
                this.resourcePersonDump[i].showName = 1;
            }
        }
    }
};
ArpenrollmentverificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService }
];
ArpenrollmentverificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "arpenrollmentverification",
        template: _raw_loader_arpenrollmentverification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_arpenrollmentverification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArpenrollmentverificationPage);



/***/ }),

/***/ 28236:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/arpenrollmentverification/arpenrollmentverification.page.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #F1624A;\n}\n\nion-searchbar.custom {\n  --background: #f1f3f4;\n  --color: black;\n  --placeholder-color: #666666;\n  --icon-color: #666666;\n  --clear-button-color: black;\n  --border-radius: 4px;\n}\n\nion-label.visible-header {\n  font-size: 1rem !important;\n  flex: 0.9;\n  transition: 0.1s;\n}\n\nion-badge {\n  --background: #F5E6E6;\n  --color: rgba(0, 0, 0, 0.6);\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  width: 150px;\n}\n\nion-label.invisible-header {\n  position: absolute;\n  left: -400px;\n  transition: 1s;\n}\n\nion-icon.visible-searchIcon {\n  font-size: 25px;\n  flex: 0.1;\n  transition: 0.5s;\n}\n\nion-icon.invisible-searchIcon {\n  position: absolute;\n  left: -100px;\n  transition: 1s;\n}\n\nion-input.visible-inputSearch {\n  flex: 0.9;\n  transition: 1s;\n}\n\nion-input.invisible-inputSearch {\n  flex: 0;\n  transition: 0.5s;\n}\n\nion-searchbar.ios.custom {\n  --cancel-button-color: black;\n}\n\nion-searchbar.md.custom {\n  --cancel-button-color: black;\n}\n\nion-select.filter {\n  width: 98%;\n}\n\nion-select.filter::part(text) {\n  font-family: \"Times New Roman\";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 22px;\n  color: #000000;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: 50px;\n  justify-content: space-around;\n}\n\nion-col.imageColumn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-row.body {\n  min-height: 60px;\n  height: auto;\n  display: flex;\n  border-bottom: 0.5px solid #f1f3f4;\n  justify-content: center;\n  background-color: #ffffff;\n  border: 2px solid salmon;\n  margin: 0.5rem;\n  border-radius: 6px;\n}\n\nion-row.body ion-col:nth-child(3) {\n  align-items: flex-end;\n  justify-content: space-around;\n}\n\nion-chip.validatedPending {\n  --background: #222222;\n  color: #ffffff;\n  margin: 0;\n  height: 20px;\n  --width: auto;\n}\n\nion-chip.validated {\n  --background: #2f983a;\n  color: #ffffff;\n  margin: 0;\n}\n\n.resourceName {\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  font-style: normal;\n  font-size: 0.9rem;\n  line-height: 20px;\n  color: #000000;\n  letter-spacing: 0.7px;\n}\n\n.mob-district {\n  font-family: \"Times New Roman\";\n  color: #666666;\n  font-size: 12px;\n}\n\n.instructor {\n  font-family: \"Times New Roman\";\n  font-weight: lighter;\n  font-size: 1rem;\n  line-height: 19px;\n  color: #000000;\n}\n\n.isValid {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  width: 32%;\n}\n\n.main {\n  display: flex;\n  flex: 1;\n  height: auto;\n  min-height: 92%;\n  flex-direction: column;\n  margin: 3%;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  min-height: 10%;\n  margin: 5px;\n}\n\n.column-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 68%;\n  margin: 2% 0 0 0;\n  padding: 0;\n}\n\n.verified {\n  background-color: #2f983a;\n}\n\n.rejected {\n  background-color: #cb2f2f;\n}\n\n.hold {\n  background-color: #d3951a;\n}\n\n.dataMissing {\n  background-color: #45b2e0;\n}\n\n.status-span {\n  font-family: \"Times New Roman\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.8rem;\n  line-height: 20px;\n  text-align: center;\n  color: #ffffff;\n  text-transform: capitalize;\n  letter-spacing: 0.8px;\n}\n\n.arts-span {\n  font-family: \"Times New Roman\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 0.8rem;\n  line-height: 20px;\n  text-align: center;\n  color: #666666;\n  text-transform: capitalize;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycGVucm9sbG1lbnR2ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUVBLG9CQUFBO0FBQUo7O0FBRUU7RUFDRSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFJSjs7QUFERTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQUlKOztBQURFO0VBQ0UsNEJBQUE7QUFJSjs7QUFERTtFQUNFLDRCQUFBO0FBSUo7O0FBRkU7RUFDRSxVQUFBO0FBS0o7O0FBSEU7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFNSjs7QUFGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBREU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFISTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7QUFLTjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUhFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUpFO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUpFO0VBQ0UsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFKRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVBFO0VBQ0UseUJBQUE7QUFVSjs7QUFSRTtFQUNFLHlCQUFBO0FBV0o7O0FBVEU7RUFDRSx5QkFBQTtBQVlKOztBQVZFO0VBQ0UseUJBQUE7QUFhSjs7QUFYRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBY0o7O0FBWkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQWVKIiwiZmlsZSI6ImFycGVucm9sbG1lbnR2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjE2MjRBO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyLmN1c3RvbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM2NjY2NjY7XHJcbiAgICAtLWljb24tY29sb3I6ICM2NjY2NjY7XHJcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogYmxhY2s7XHJcbiAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgaW9uLWxhYmVsLnZpc2libGUtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMC45O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICB9XHJcbiAgaW9uLWJhZGdlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y1RTZFNjtcclxuICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbC5pbnZpc2libGUtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC00MDBweDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbi52aXNpYmxlLXNlYXJjaEljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxleDogMC4xO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgaW9uLWljb24uaW52aXNpYmxlLXNlYXJjaEljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dC52aXNpYmxlLWlucHV0U2VhcmNoIHtcclxuICAgIGZsZXg6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXQuaW52aXNpYmxlLWlucHV0U2VhcmNoIHtcclxuICAgIGZsZXg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICBpb24tc2VhcmNoYmFyLmlvcy5jdXN0b20ge1xyXG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhci5tZC5jdXN0b20ge1xyXG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgaW9uLXNlbGVjdC5maWx0ZXIge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICB9XHJcbiAgaW9uLXNlbGVjdC5maWx0ZXI6OnBhcnQodGV4dCkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBpb24tY29sLmltYWdlQ29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLXJvdy5ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2YxZjNmNDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgaW9uLWNvbDpudGgtY2hpbGQoMykge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2hpcC52YWxpZGF0ZWRQZW5kaW5nIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLS13aWR0aDogYXV0bztcclxuICB9XHJcbiAgaW9uLWNoaXAudmFsaWRhdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzJmOTgzYTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAucmVzb3VyY2VOYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2ItZGlzdHJpY3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmluc3RydWN0b3Ige1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pc1ZhbGlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gIH1cclxuICAubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDkyJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5jb2x1bW4tYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogNjglO1xyXG4gICAgbWFyZ2luOiAyJSAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJpZmllZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY5ODNhO1xyXG4gIH1cclxuICAucmVqZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiMmYyZjtcclxuICB9XHJcbiAgLmhvbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzOTUxYTtcclxuICB9XHJcbiAgLmRhdGFNaXNzaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWIyZTA7XHJcbiAgfVxyXG4gIC5zdGF0dXMtc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgfVxyXG4gIC5hcnRzLXNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuLy8gIGlvbi1yb3cgaW9uLWJhZGdle1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuLy8gICAgIHdpZHRoOiA3MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzMXB4O1xyXG4vLyAgIH1cclxuICAiXX0= */");

/***/ }),

/***/ 79022:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/arpenrollmentverification/arpenrollmentverification.page.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>ARP Enrollment Verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header>\r\n    <!-- <div style=\"display: flex; height: auto; min-height: 48px; background-color: #ffffff; align-items: center; margin: 10px; border-bottom: 1px solid #eeeeee\">\r\n      <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px; flex: 0.1\" (click)=\"goBack()\"></ion-icon> -->\r\n  \r\n      <!-- <ion-label [class.visible-header]=\"!showInputSearch\" [class.invisible-header]=\"showInputSearch\">\r\n        <ion-text class=\"instructor\"> Resource Person Validation </ion-text>\r\n      </ion-label> -->\r\n      <!-- <ion-input [class.visible-inputSearch]=\"showInputSearch\" [class.invisible-inputSearch]=\"!showInputSearch\" [value]=\"searchValue\" placeholder=\"Search\" (ionChange)=\"handleChange($event)\" [clearInput]=\"true\"></ion-input>\r\n  \r\n      <ion-icon [class.visible-searchIcon]=\"!showInputSearch\" [class.invisible-searchIcon]=\"showInputSearch\" name=\"search-outline\" (click)=\"showSearchInput()\"></ion-icon> -->\r\n    <!-- </div> -->\r\n    <!-- <div>\r\n      <ion-select class=\"filter\" interface=\"popover\" [value]=\"currentStatus\" placeholder=\"Select Status\" (ionChange)=\"handleFilter($event)\" size>\r\n        <ion-select-option *ngFor=\"let options of filterOptions\" [value]=\"options.value\">{{options.title}}</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n    <div *ngIf=\"currentStatus==='dataMissing'\">\r\n      <ion-select class=\"filter\" interface=\"popover\" [value]=\"currentDataMissingField\" placeholder=\"Select Data Missing Field\" (ionChange)=\"handleDataMissing($event)\" size>\r\n        <ion-select-option *ngFor=\"let options of filterOptionDataMissing\" [value]=\"options.value\">{{options.title}}</ion-select-option>\r\n      </ion-select>\r\n    </div> -->\r\n    <ion-select class=\"filter\" placeholder=\"search\"  (ionChange)=\"selectChart($event)\" >\r\n      <ion-select-option value=\"\">All</ion-select-option>\r\n      <ion-select-option value='2'>Verified</ion-select-option>\r\n      <ion-select-option value='3'>Rejected</ion-select-option>\r\n      <ion-select-option value='1'>Onhold</ion-select-option>\r\n      <ion-select-option value= '0'>Unverified</ion-select-option>\r\n    </ion-select>\r\n   \r\n  </ion-header>\r\n  <!-- <i class=\"bi bi-x-circle\" ></i> -->\r\n  <ion-content>\r\n    <ion-grid class=\"validate-resource\" style=\"background-color: #f1f3f4;min-height: 100%;height: auto;padding-bottom: 50px;\" >\r\n     <ion-row *ngIf=\"showErrorMessageforNoData\" class=\"body\">\r\n      <ion-col size=\"12\" style=\"display:flex; justify-content: center;align-items: center\">\r\n        <ion-badge >No Data Found</ion-badge>\r\n        <!-- <ion-note style=\"text-align: center;color:#CB2F2F\">No Data Found</ion-note> -->\r\n      </ion-col>\r\n     </ion-row>\r\n     <div style=\"margin: 20px;\">\r\n      <div style=\"border: 1px solid #f49954;background-color: rgb(251, 224, 204); border-radius: 7px;\">\r\n        <ionic-selectable text-wrap [items]=\"artFormList\" [(ngModel)]=\"checkBatch\" (onChange)=\"onArtForm($event)\"  placeholder=\"Select\" style=\"padding-left: 10px;\" itemValue=\"label\"\r\n        itemTextField=\"label\">\r\n      </ionic-selectable>\r\n      </div>\r\n    </div>\r\n    <ion-row *ngFor=\"let list of resourcePersonDump;\" (click)=\"validateprofile(list)\">\r\n      <ion-row class=\"body\" *ngIf=\"list.showName == 1\">\r\n        <ion-col size=\"2\" size-xs=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" class=\"imageColumn\" *ngIf=\"list.showName == 1\">\r\n          <div style=\"height: 32px; width: 32px; border-radius: 50%;\">\r\n            <!-- <img [src]=\"list.imageUrl === null ?  '../assets/images/art-forms/samplemen2.jpg': list.image\" style=\"height:32px;width: 32px;border-radius: 50%;\" /> -->\r\n            <img src=\"{{list.imageUrl}}\"  style=\"height:32px;width: 32px;border-radius: 50%;\"/>\r\n          </div>\r\n          \r\n      \r\n        </ion-col>\r\n        <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"column\" *ngIf=\"list.showName == 1\">\r\n          <ion-text class=\"resourceName\">{{splitCamelCaseToString(list.name) }}</ion-text>\r\n          \r\n          <ion-text class=\"mob-district\"> {{list.contact_no}} | {{ list.district_name}} </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"4\" size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"column\" *ngIf=\"list.showName == 1\">\r\n          <div\r\n            style=\"display: flex; justify-content: center; align-items: center; min-height: 23px; height: auto; width: auto; min-width: 80%; border-radius: 15px; padding: 2px\"\r\n          >\r\n          <ion-row>\r\n            <ion-col size=\"2\"> <ion-badge *ngIf=\"list.brte_status == '2'\"  style=\"width: 62px;height: 22px;font-size: 12px;background-color:green;color:white;margin-left: 60px;font-family: 'Times New Roman';\" (Change)=\"brtestatus($event)\" >Verified</ion-badge></ion-col>\r\n           <ion-col size=\"2\"> <ion-badge *ngIf=\"list.brte_status == '3'\" color=\"danger\" style=\"margin-right: -27px;width: 61px;height: 22px;font-size: 12px;font-family: 'Times New Roman';\" (Change)=\"brtestatus($event)\">Rejected</ion-badge></ion-col>\r\n          <ion-col size=\"2\"> <ion-badge *ngIf=\"list.brte_status == '1'\" style=\"background-color:gray;color:white;width: 59px;height: 21px;font-size: 12px;font-family: 'Times New Roman';\" (Change)=\"brtestatus($event)\">Onhold</ion-badge></ion-col>\r\n          <ion-col size=\"2\"> <ion-badge *ngIf=\"!list.brte_status\" style=\"background-color:orange;color:white;margin-left: -41px; width: 74px;height: 24px;font-size: 12px;font-family: 'Times New Roman';\" (Change)=\"brtestatus($event)\">Unverified</ion-badge></ion-col>\r\n          </ion-row>\r\n         \r\n          </div>\r\n          <div *ngIf=\"list.UserName != null && list.Password != null\">\r\n            <button ion-button style=\"width: 62px;height: 22px;font-size: 10px;background-color:rgb(125, 125, 253); color: white;margin-right: 6px;border-radius: 10px;font-family: 'Times New Roman';\" type=\"submit\" (click)=\"sendOTP(list)\" block>Send Login</button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-note  style=\"font-family: 'Times New Roman';font-size: 10px;\" *ngIf=\"list.showName == 1\">{{list.key_art_form}}</ion-note>\r\n      </ion-row>\r\n    </ion-row>\r\n      <ion-row *ngIf=\"!resourcePersonDump\">\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n         <p>No Data Found</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content> \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_arpenrollmentverification_arpenrollmentverification_module_ts-es2015.js.map