(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_course-materials_course-materials_module_ts"],{

/***/ 45670:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-materials-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMaterialsPageRoutingModule": function() { return /* binding */ CourseMaterialsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _course_materials_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-materials.page */ 10793);




const routes = [
    {
        path: '',
        component: _course_materials_page__WEBPACK_IMPORTED_MODULE_0__.CourseMaterialsPage
    },
    {
        path: 'course-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_art-culture_course-materials_course-details_course-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-details/course-details.module */ 26805)).then(m => m.CourseDetailsPageModule)
    }
];
let CourseMaterialsPageRoutingModule = class CourseMaterialsPageRoutingModule {
};
CourseMaterialsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseMaterialsPageRoutingModule);



/***/ }),

/***/ 55942:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-materials.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMaterialsPageModule": function() { return /* binding */ CourseMaterialsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _course_materials_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-materials-routing.module */ 45670);
/* harmony import */ var _course_materials_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-materials.page */ 10793);







let CourseMaterialsPageModule = class CourseMaterialsPageModule {
};
CourseMaterialsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _course_materials_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseMaterialsPageRoutingModule
        ],
        declarations: [_course_materials_page__WEBPACK_IMPORTED_MODULE_1__.CourseMaterialsPage]
    })
], CourseMaterialsPageModule);



/***/ }),

/***/ 10793:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-materials.page.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMaterialsPage": function() { return /* binding */ CourseMaterialsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_course_materials_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-materials.page.html */ 61940);
/* harmony import */ var _course_materials_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-materials.page.scss */ 32826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let CourseMaterialsPage = class CourseMaterialsPage {
    constructor(router, domsaintizer, emisservice, usersessionService, route) {
        this.router = router;
        this.domsaintizer = domsaintizer;
        this.emisservice = emisservice;
        this.usersessionService = usersessionService;
        this.route = route;
        // details: any;
        this.isplay = false;
        this.emisName = this.usersessionService.emis_username();
    }
    ngOnInit() {
        let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/c2398f00c8fe446d8680b8bf869d3fec.pdf");
        this.vidUrl = videoUrl;
    }
    ionViewDidEnter() {
        this.downloadedname = null;
        // this.playVideo()
        // this.Id = this.usersessionService.emis_username();
        //   this.route.queryParams.subscribe((params) => {
        //   let routeData = JSON.parse(params['persondetails']);
        //   this.Id = routeData.value.id; 
        //     console.log(this.Id,'id')
        // });
        this.getcoursematerial();
    }
    destroyVideo() {
        let videoElement = document.getElementById(this.filename);
        videoElement.pause();
        this.vidUrl = "";
        videoElement.src = "";
        videoElement.removeAttribute('src');
        videoElement.load();
    }
    playVideo(val) {
        // this.destroyVideo() 
        this.filename = '';
        var A = Date.now();
        this.filename = A;
        this.downloadedname = val;
        let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.downloadedname);
        this.vidUrl = videoUrl;
        if (!this.isplay) {
            this.myVideo.nativeElement.pause();
        }
        else {
            this.myVideo.nativeElement.play();
        }
    }
    viewdetails(val, index) {
        this.downloadedname = null;
        this.showIndex = index;
        console.log(this.overAlldata[index].video_1);
        if (this.overAlldata[index].video_1 != "") {
            this.playVideo(this.overAlldata[index].video_1);
        }
        if (this.overAlldata[index].audio != "") {
            this.downloadedname = 'test';
            this.audioUrl = "https://d1p3r7kc5uix85.cloudfront.net/" + this.overAlldata[index].audio;
        }
        // this.router.navigate(["/tabs/course-materials/course-details"])
    }
    backBtn() {
        this.router.navigate(["/tabs/art-culture"]);
        this.myVideo.nativeElement.pause();
    }
    getcoursematerial() {
        // this.emisservice.getarpteachingplan(this.Id).subscribe((res) => {
        //   console.log(res,'test')
        // });
        let data = {
            "ArpId": this.emisName,
            "Type": 1
        };
        this.overAlldata = [];
        this.emisservice.ArpCourMatOverall(data).subscribe(res => {
            if (res.dataStatus) {
                this.overAlldata = res.result;
                // this.playVideo()
            }
        });
    }
};
CourseMaterialsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
CourseMaterialsPage.propDecorators = {
    myVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['video',] }],
    myAudio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['audio',] }]
};
CourseMaterialsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-course-materials',
        template: _raw_loader_course_materials_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_materials_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseMaterialsPage);



/***/ }),

/***/ 32826:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-materials.page.scss ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #dc6ecf ;\n}\n\n.div_img {\n  height: 50%;\n  width: 80%;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 10px;\n  --border: 2px solid#dc6ecf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1tYXRlcmlhbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQUdKIiwiZmlsZSI6ImNvdXJzZS1tYXRlcmlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkYzZlY2YgO1xyXG4gIH1cclxuICAuZGl2X2ltZ3tcclxuICAgIGhlaWdodDo1MCU7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIC0tYm9yZGVyOiAycHggc29saWQjZGM2ZWNmO1xyXG4gICAgXHJcbiAgfVxyXG4gIC8vIC5wbGF5aW1ne1xyXG4gIC8vICAgLS1jb2xvcjojZGM2ZWNmO1xyXG4gIC8vIH0iXX0= */");

/***/ }),

/***/ 61940:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/course-materials/course-materials.page.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>course-materials</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header >\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Course Materials</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card style=\"padding-top: 20px;\" *ngFor=\"let data of overAlldata; let i = index \">\r\n    <ion-row (click)=\"viewdetails(data,i)\">\r\n      <ion-col size=\"12\" *ngIf=\"i == showIndex && downloadedname\">\r\n        <!-- <video width=\"100%\" height=\"210\" id=\"class_in_iframe\">\r\n          <source src=https://d1e5r329t7a85t.cloudfront.net/87ad9d66641742f18ed5d1ee873eb370.mp4 type=\"video/mp4\">\r\n        </video> -->\r\n\r\n        <!-- <video controls width=\"100%\" height=\"100%\" type=\"video/mp4\" controlsList=\"nodownload\">\r\n          <source [src]=this.vidUrl type=\"video/mp4\">\r\n        </video> -->\r\n\r\n        <video *ngIf=\"data.video_1\" controls width=\"100%\" height=\"210\" #video type=\"video/mp4\" controlsList=\"nodownload\">\r\n          <source [src]=this.vidUrl type=\"video/mp4\">\r\n        </video>\r\n\r\n        <audio controls=\"false\" *ngIf=\"data.audio\" #video>\r\n          <source src=\"{{audioUrl}}\"  type=\"audio/mp3\">\r\n          Your browser does not support the audio element.\r\n        </audio>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"i == showIndex && !downloadedname\">\r\n        <ion-label>We don't have the video</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center; margin-top: 10px;\">\r\n        <div> <ion-label>{{data.learning_plan}}</ion-label></div>\r\n       <!-- <div> <ion-label>220 mins</ion-label></div> -->\r\n       \r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\" style=\"text-align: center;\">\r\n      <ion-img src=\"../assets/images/art&culture/playicon.png\"  style=\"height: 40px; margin-top: 10px;\" class=\"playimg\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </ion-card>\r\n\r\n  <!-- <ion-card>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <video controls width=\"100%\" height=\"100%\" [id]=this.filename type=\"video/mp4\" controlsList=\"nodownload\">\r\n          <source [src]=this.vidUrl type=\"video/mp4\">\r\n        </video>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"text-align: center; margin-top: 10px;\">\r\n        <div> <ion-label>Mask Making</ion-label></div>\r\n       <div> <ion-label>220 mins</ion-label></div>\r\n       \r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\" style=\"text-align: center;\">\r\n      <ion-img src=\"../assets/images/art&culture/playicon.png\"  style=\"height: 40px; margin-top: 10px;\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n      \r\n    \r\n  </ion-card> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_course-materials_course-materials_module_ts-es2015.js.map