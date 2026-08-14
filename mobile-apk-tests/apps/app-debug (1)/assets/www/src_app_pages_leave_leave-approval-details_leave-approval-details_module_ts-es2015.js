(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_leave-approval-details_leave-approval-details_module_ts"],{

/***/ 29081:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/leave/leave-approval-details/leave-approval-details-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveApprovalDetailsPageRoutingModule": function() { return /* binding */ LeaveApprovalDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _leave_approval_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-approval-details.page */ 44613);




const routes = [
    {
        path: '',
        component: _leave_approval_details_page__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalDetailsPage
    }
];
let LeaveApprovalDetailsPageRoutingModule = class LeaveApprovalDetailsPageRoutingModule {
};
LeaveApprovalDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaveApprovalDetailsPageRoutingModule);



/***/ }),

/***/ 43169:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/leave/leave-approval-details/leave-approval-details.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveApprovalDetailsPageModule": function() { return /* binding */ LeaveApprovalDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _leave_approval_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-approval-details-routing.module */ 29081);
/* harmony import */ var _leave_approval_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-approval-details.page */ 44613);







let LeaveApprovalDetailsPageModule = class LeaveApprovalDetailsPageModule {
};
LeaveApprovalDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_approval_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalDetailsPageRoutingModule
        ],
        declarations: [_leave_approval_details_page__WEBPACK_IMPORTED_MODULE_1__.LeaveApprovalDetailsPage]
    })
], LeaveApprovalDetailsPageModule);



/***/ }),

/***/ 44613:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/leave/leave-approval-details/leave-approval-details.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveApprovalDetailsPage": function() { return /* binding */ LeaveApprovalDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_leave_approval_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leave-approval-details.page.html */ 65121);
/* harmony import */ var _leave_approval_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-approval-details.page.scss */ 16641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);











let LeaveApprovalDetailsPage = class LeaveApprovalDetailsPage {
    constructor(router, emisService, alert, usersessionService, route, navctrl, alertCtrl, modalCtrl, uploadService) {
        this.router = router;
        this.emisService = emisService;
        this.alert = alert;
        this.usersessionService = usersessionService;
        this.route = route;
        this.navctrl = navctrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.uploadService = uploadService;
        this.teachersLeaveDetlList = [];
        this.rejtrsn = '';
        this.sessionTeacherId = this.usersessionService.teacher_id();
        this.sessionTeacherType = this.usersessionService.teacher_type();
        this.emis_username = this.usersessionService.emis_username();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.teacher_id = this.routeData.queryParams.teacher_id;
        this.teacher_type = this.routeData.queryParams.teacher_type;
        this.funtion = this.routeData.queryParams.fun;
        this.refreshAllList();
        this.teachersLeaveDetlList = [];
    }
    //call getleavedetailsHm
    refreshAllList() {
        if (this.sessionTeacherType == 102) {
            this.getleavedetailsBeo();
        }
        if (this.sessionTeacherType == 101 || this.sessionTeacherType == 202 || this.sessionTeacherType == 203) {
            this.getleavedetailsDeo();
        }
        if (this.sessionTeacherType == 100) {
            this.getleavedetailsCeo();
        }
        if (this.sessionTeacherType == 144) {
            this.getleavedetailsJd();
        }
    }
    // get selected staff details for BEO approve
    getleavedetailsBeo() {
        this.emisService.getTchrsLeaveListBeo(this.sessionTeacherId, this.teacher_id, this.funtion, this.teacher_type).subscribe((data) => {
            this.teachersLeaveDetlList = [];
            if (data.dataStatus == true) {
                this.teachersLeaveDetlList = data.result;
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    // get selected staff details for DEO approve
    getleavedetailsDeo() {
        this.emisService.getTchrsLeaveListDeo(this.sessionTeacherId, this.teacher_id, this.sessionTeacherType, this.funtion).subscribe((data) => {
            this.teachersLeaveDetlList = [];
            if (data.dataStatus == true) {
                this.teachersLeaveDetlList = data.result;
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    // get selected staff details for CEO approve
    getleavedetailsCeo() {
        this.emisService.getTchrsLeaveListCeo(this.sessionTeacherId, this.teacher_id, this.funtion).subscribe((data) => {
            this.teachersLeaveDetlList = [];
            if (data.dataStatus == true) {
                this.teachersLeaveDetlList = data.result;
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    // get selected staff details for JD approve
    getleavedetailsJd() {
        this.emisService.getTchrsLeaveListJd(this.sessionTeacherId, this.teacher_id, this.teacher_type, this.funtion).subscribe((data) => {
            this.teachersLeaveDetlList = [];
            if (data.dataStatus == true) {
                this.teachersLeaveDetlList = data.result;
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    // document fownload
    onDownloadPdf(docName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            var filename = docName;
            let expiry = 1800;
            let ext = '';
            ext = docName.split(".");
            console.log('ext', ext[1]);
            if (filename != null && filename != "") {
                this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        let doc;
                        doc = result.url;
                        if (ext == 'pdf') {
                            this.uploadService.viewPdf(doc);
                            // window.open(doc)
                        }
                        else {
                            const modal = yield this.modalCtrl.create({
                                component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_6__.ViewImagePage,
                                componentProps: { image: doc },
                                cssClass: 'view-image-modal'
                            });
                            yield modal.present();
                        }
                    }
                    else {
                        this.alert.error('Error in getting document');
                    }
                }));
            }
        });
    }
    // call leave approval status function
    leaveAprUsrSlct(AprSts, item) {
        this.leaveApproveHm(AprSts, item, item.appsts);
    }
    //post api aprove particaular leave like (CL,SL)
    leaveApproveHm(AprSts, item, appsts) {
        let status;
        let Approve_Username;
        let Verify_Username;
        let Approver_TchrType;
        let Verify_TchrType;
        // sanction
        if (AprSts == 4) {
            status = 1; // minus leaves in leave balance
            Approve_Username = this.emis_username;
            Approver_TchrType = this.sessionTeacherType;
            Verify_Username = item.verifiedUserName;
            Verify_TchrType = item.VerifiedTchrType;
            //forword
        }
        else if (AprSts == 6) {
            status = 3; // no update in leave balance   
            Approve_Username = item.ApprUserName;
            Approver_TchrType = item.ApprTchrType;
            Verify_Username = this.emis_username;
            Verify_TchrType = this.sessionTeacherType;
            // add leaves in leave balance
        }
        else if (appsts == 4 && AprSts == 2) {
            status = 2;
            Approve_Username = this.emis_username;
            Approver_TchrType = this.sessionTeacherType;
            Verify_Username = item.verifiedUserName;
            Verify_TchrType = item.VerifiedTchrType;
        }
        else {
            status = 3; // no - update in leave balance
            Approve_Username = this.emis_username;
            Approver_TchrType = this.sessionTeacherType;
            Verify_Username = item.verifiedUserName;
            Verify_TchrType = item.VerifiedTchrType;
        }
        var params = {
            records: {
                IndxId: item.IndxId,
                TchrId: item.TchrId,
                LveTypeId: item.LeaveTypeId,
                LeaveDays: item.LeaveDays,
                ApproverUsername: Approve_Username,
                ApproverTchrType: Approver_TchrType,
                VerifyUsername: Verify_Username,
                VerifyTchrType: Verify_TchrType,
                ApprovalStatus: AprSts,
                RjctRsn: this.rejtrsn,
                Sts: status,
            }
        };
        // call leave approval status update post api
        this.emisService.leaveApproveHm(params).subscribe((data) => {
            if (data.status == 200) {
                if (AprSts == 4) {
                    this.alert.success("Leave Approved");
                }
                else if (AprSts == 6) {
                    this.alert.success("Leave Forwarded");
                }
                else {
                    this.alert.error("Leave Rejected");
                }
                this.refreshAllList();
            }
            else {
                this.alert.error(data.message);
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    //cal alert prompt for leave rejection
    rejectAlert(AprSts, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Reject Reason',
                cssClass: 'leave-custom-class',
                inputs: [
                    {
                        name: 'reason',
                        type: 'textarea',
                        placeholder: 'Enter Reject Reason',
                    }
                ],
                buttons: [
                    {
                        text: 'Save',
                        cssClass: 'alert-button-confirm',
                        handler: data => {
                            if (data.reason != '') {
                                this.rejtrsn = data.reason;
                                this.leaveAprUsrSlct(AprSts, item);
                                return true;
                            }
                            else {
                                this.rejtrsn = '';
                                return false;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                    }
                ]
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
        });
    }
    //navigate leave sanction list page
    goBack() {
        this.router.navigate(["/tabs/leave-approval-list"]);
    }
    //navigate leave history list page
    goleaveHistory() {
        this.navctrl.navigateForward(["/tabs/leavehistory"], { queryParams: { 'from_page': 'sanction', 'TchrId': this.teacher_id }, skipLocationChange: false });
    }
    //navigate my leaves page
    goleaveBalance(leaveDetlItem) {
        // this.navctrl.navigateForward(["/tabs/leavebalance"]);
        this.router.navigate(["/tabs/leave"], { queryParams: { 'menu': 'My Leaves', 'from_page': 'sanction', 'TchrId': this.teacher_id, 'TchrName': leaveDetlItem.TchrName, 'Gender': leaveDetlItem.Gender }, skipLocationChange: false });
    }
};
LeaveApprovalDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService }
];
LeaveApprovalDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-leave-approval-details',
        template: _raw_loader_leave_approval_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leave_approval_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeaveApprovalDetailsPage);



/***/ }),

/***/ 16641:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/leave/leave-approval-details/leave-approval-details.page.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.leaveListClsLeft {\n  align-self: center !important;\n  color: #630094 !important;\n  text-align: left !important;\n  font-size: 14px;\n  font-weight: 500 !important;\n}\n\n.greyTextLeft {\n  align-self: center !important;\n  color: #6a6a6a !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 500 !important;\n}\n\n.greenTextLeft {\n  align-self: center !important;\n  color: #5dae53 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.redTextLeft {\n  align-self: center !important;\n  color: #fd5587 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.ylwTextLeft {\n  align-self: center !important;\n  color: #ecdd09 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.brownTextLeft {\n  align-self: center !important;\n  color: #83593c !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.pendingTextLeft {\n  align-self: center !important;\n  color: #2b3ba4 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.forwardgrnTextLeft {\n  align-self: center !important;\n  color: #92d050 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.clariResTextLeft {\n  align-self: center !important;\n  color: #6f30a0 !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 600 !important;\n}\n\n.rejButtonCls {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background-color: #fd5587;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.sacButtonCls {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background-color: #5dae53;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.hisButtonCls {\n  margin: 5px;\n  padding: 8px;\n  background-color: #630094;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.lvBlsButtonCls {\n  margin: 5px;\n  padding: 8px;\n  background-color: #575757;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.btnRow {\n  padding: 5px;\n  background-color: white;\n  justify-content: center !important;\n  align-self: center !important;\n}\n\ntextarea.alert-input.sc-ion-alert-md {\n  min-height: 117px;\n  resize: auto;\n}\n\n.alert-input.sc-ion-alert-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-bottom: 2px solid #a9a9a9;\n  border-radius: 10px;\n}\n\nion-card {\n  border-radius: 10px !important;\n  margin: 20px;\n  padding-top: 10px;\n}\n\nion-button {\n  border-radius: 10px !important;\n  margin: 0px !important;\n  text-transform: capitalize !important;\n  --color: white !important;\n}\n\n.person-icon {\n  text-align: center !important;\n  align-self: center !important;\n  zoom: 2.5 !important;\n  color: #b2b2b2 !important;\n}\n\na:not([href]):not([class]) {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n\n.call-icon {\n  text-align: center !important;\n  zoom: 1.5 !important;\n  color: #228616 !important;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWFwcHJvdmFsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJsZWF2ZS1hcHByb3ZhbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sZWF2ZUxpc3RDbHNMZWZ0IHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2MzAwOTQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyZXlUZXh0TGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNmE2YTZhICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyZWVuVGV4dExlZnQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYWU1MyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWRUZXh0TGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmQ1NTg3ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnlsd1RleHRMZWZ0IHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNlY2RkMDkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJvd25UZXh0TGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCA4OSwgNjApICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBlbmRpbmdUZXh0TGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMmIzYmE0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcndhcmRncm5UZXh0TGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOTJkMDUwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsYXJpUmVzVGV4dExlZnQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzZmMzBhMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWpCdXR0b25DbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ1NTg3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2FjQnV0dG9uQ2xzIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYWU1MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmhpc0J1dHRvbkNscyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzAwOTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sdkJsc0J1dHRvbkNscyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idG5Sb3cge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhLmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMTdweDtcclxuICAgIHJlc2l6ZTogYXV0bztcclxufVxyXG5cclxuLmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTlhOWE5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGVyc29uLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHpvb206IDIuNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNiMmIyYjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW2NsYXNzXSkge1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWxsLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB6b29tOiAxLjUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjI4NjE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 65121:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave-approval-details/leave-approval-details.page.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Leave Sanction Details</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div *ngIf=\"teachersLeaveDetlList?.length != 0\">\r\n    <ion-card class=\"leave-container\" *ngFor=\"let leaveDetlItem of teachersLeaveDetlList; let i = index;\">\r\n\r\n      <ion-row>\r\n        <ion-col size=\"2\" class=\"person-icon\">\r\n          <ion-icon name=\"person\"></ion-icon>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"leaveListClsLeft\">{{ leaveDetlItem.TchrName }}</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.TchrTypeName }}</ion-label><br>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"leaveListClsLeft\">Leave Type</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.LeaveShortName }}</ion-label><br>\r\n\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 1\" class=\"pendingTextLeft\">Under Processing</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 2\" class=\"redTextLeft\">Rejected</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 3\" class=\"pendingTextLeft\">Pending Approval</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 4\" class=\"greenTextLeft\">Sanctioned</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 5\" class=\"redTextLeft\">Rejected by Auth</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 6\" class=\"forwardgrnTextLeft\">Forwarded</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 7\" class=\"pendingTextLeft\">Pending Verification</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 8\" class=\"brownTextLeft\">Verified</ion-label>\r\n          <ion-label *ngIf=\"leaveDetlItem.ApprStatus == 9\" class=\"clariResTextLeft\">Clarification Requested</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" class=\"call-icon\">\r\n          <a href=\"tel:{{leaveDetlItem.MblNum}}\" class=\"call-icon\">\r\n            <ion-icon name=\"call\"></ion-icon>\r\n          </a>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"2\"></ion-col>\r\n\r\n        <ion-col size=\"3\">\r\n          <ion-label class=\"leaveListClsLeft\">From Date</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.LeaveFrmDate | date:'dd-MM-yyyy' }}\r\n            <span *ngIf=\"leaveDetlItem.LeaveTypeId == 2\">{{ (leaveDetlItem.LeaveSession == \"1\") ? \"-FN\" : \"-AN\" }}</span>\r\n          </ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"leaveListClsLeft\">To Date</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.LeaveToDate | date:'dd-MM-yyyy' }}\r\n            <span *ngIf=\"leaveDetlItem.LeaveTypeId == 2\">{{ (leaveDetlItem.LeaveSession2 == \"1\") ? \"-FN\" : \"-AN\" }}</span>\r\n          </ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\">\r\n          <ion-label class=\"leaveListClsLeft\">No.of days</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.LeaveDays }}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-label class=\"leaveListClsLeft\">Applied on</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.AppliedDate | date:'dd-MM-yyyy' }}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"leaveListClsLeft\">Reason</ion-label><br>\r\n          <ion-label class=\"greyTextLeft\">{{ leaveDetlItem.Remarks }}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\">\r\n          <ion-label class=\"leaveListClsLeft\">Document</ion-label><br>\r\n          <a *ngIf=\"leaveDetlItem.File != ''\" (click)=\"onDownloadPdf(leaveDetlItem.File)\">{{leaveDetlItem.File}}</a>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"btnRow\">\r\n        <ion-col size=\"4\"\r\n          *ngIf=\"this.funtion !=2 && (this.sessionTeacherType == 100 && (leaveDetlItem.TchrType == 101 || leaveDetlItem.TchrType == 202 || leaveDetlItem.TchrType == 203) && leaveDetlItem.LeaveTypeId != 2 && leaveDetlItem.LeaveTypeId != 3 && leaveDetlItem.LeaveTypeId != 4)\">\r\n          <div class=\"sacButtonCls\">\r\n            <ion-button fill=\"clear\" size=\"small\" disabled=\"{{leaveDetlItem.ApprStatus == '1'  ? false : true}}\"\r\n              (click)=\"leaveAprUsrSlct(6,leaveDetlItem)\">Forward</ion-button>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\"\r\n          *ngIf=\"this.funtion !=2 && ((this.sessionTeacherType == 100 && ((leaveDetlItem.TchrType == 101 || leaveDetlItem.TchrType == 202 || leaveDetlItem.TchrType == 203) && (leaveDetlItem.LeaveTypeId == 2 || leaveDetlItem.LeaveTypeId == 3 || leaveDetlItem.LeaveTypeId == 4)) || leaveDetlItem.TchrType == 27) || this.sessionTeacherType != 100)\">\r\n          <div class=\"sacButtonCls\">\r\n            <ion-button fill=\"clear\" size=\"small\"\r\n              disabled=\"{{(leaveDetlItem.ApprStatus == '2' || leaveDetlItem.ApprStatus == '4')}}\"\r\n              (click)=\"leaveAprUsrSlct(4,leaveDetlItem)\">Sanction</ion-button>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" *ngIf=\"this.funtion !=2\">\r\n          <div class=\"rejButtonCls\">\r\n            <ion-button fill=\"clear\" size=\"small\"\r\n              disabled=\"{{(leaveDetlItem.ApprStatus == '2' || leaveDetlItem.ApprStatus == '4')}}\"\r\n              (click)=\"rejectAlert(2,leaveDetlItem)\">Reject</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"btnRow\">\r\n        <ion-col size=\"6\">\r\n          <div class=\"hisButtonCls\" (click)=\"goleaveHistory()\">\r\n            <ion-label>Leave History</ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <div class=\"lvBlsButtonCls\" (click)=\"goleaveBalance(leaveDetlItem)\">\r\n            <ion-label>Leave Balance</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <!-- no data container -->\r\n  <div *ngIf=\"teachersLeaveDetlList.length == 0\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"no-data\">\r\n        <ion-label>\r\n          No Data Found\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leave_leave-approval-details_leave-approval-details_module_ts-es2015.js.map