(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-student_summative-student_module_ts"],{

/***/ 69457:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeStudentPageRoutingModule": function() { return /* binding */ SummativeStudentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _summative_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-student.page */ 90001);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);






const routes = [
    {
        path: '',
        component: _summative_student_page__WEBPACK_IMPORTED_MODULE_0__.SummativeStudentPage
    }
];
let SummativeStudentPageRoutingModule = class SummativeStudentPageRoutingModule {
};
SummativeStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        providers: [_awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener]
    })
], SummativeStudentPageRoutingModule);



/***/ }),

/***/ 60981:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeStudentPageModule": function() { return /* binding */ SummativeStudentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _summative_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-student-routing.module */ 69457);
/* harmony import */ var _summative_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-student.page */ 90001);







let SummativeStudentPageModule = class SummativeStudentPageModule {
};
SummativeStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summative_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeStudentPageRoutingModule
        ],
        declarations: [_summative_student_page__WEBPACK_IMPORTED_MODULE_1__.SummativeStudentPage]
    })
], SummativeStudentPageModule);



/***/ }),

/***/ 90001:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeStudentPage": function() { return /* binding */ SummativeStudentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_summative_student_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./summative-student.page.html */ 77392);
/* harmony import */ var _summative_student_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-student.page.scss */ 52135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dom-to-image */ 83697);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/loader/ion-loader.service */ 21645);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);





// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';





// import { File, IWriteOptions } from '@ionic-native/file/ngx';




let SummativeStudentPage = class SummativeStudentPage {
    constructor(apiService, router, route, ionicstorage, alertService, ionLoaderService, file, fileOpener) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.ionicstorage = ionicstorage;
        this.alertService = alertService;
        this.ionLoaderService = ionLoaderService;
        this.file = file;
        this.fileOpener = fileOpener;
        this.studentsList = [];
        this.assessedStudents = [];
        this.viewassessmenbtn = false;
        this.searchTerm = "";
        this.showsubmitbutton = false;
        this.groupingStatus = 'pending';
        this.generatepdf = false;
        this.shownostudentboolean = false;
        this.conttent = [];
        this.arraypdf = [];
        this.secondsummative_pdf = [];
        this.live_img_url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.ImgUrl;
    }
    ionViewWillEnter() {
        this.pdfData = '';
        this.ionicstorage.getData('summativeAsseData').then((dataa) => {
            debugger;
            this.studentsList = dataa.studentlist;
            this.term = dataa.term;
            this.viewassessmenbtn = dataa.viewassessment;
            this.classAndsubject = dataa.subjectkey;
            this.classs_sections = dataa.class_sections;
            this.classdata = dataa.classdata;
            this.subject = dataa.subject;
            this.termValue = dataa.term.match(/\d+/)[0];
            this.weekOfYear = dataa.week_of_year;
        }, (error) => console.error(error));
        this.ionicstorage.getData('userInfo').then((dataa) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.username = yield dataa.username;
            this.schoolid = yield dataa.school_id;
            this.token = yield dataa.token;
        }), (error) => console.error(error));
        this.ionicstorage.getData('summativeAsseData').then((dataa) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            if (dataa.studentlist.length > 0) {
                this.shownostudentboolean = true;
                this.class = yield dataa.classdata;
                this.Medium = yield dataa.subject;
                this.subjectkey = yield dataa.subjectkey;
                if (this.subjectkey == 'English') {
                    this.pdfData = 'EE-Term2-SA-English.pdf';
                }
                else if (this.subjectkey == 'Mathematics') {
                    this.pdfData = 'EE-Term2-SA-Maths.pdf';
                }
                else if (this.subjectkey == 'Tamil') {
                    this.pdfData = 'EE-Term2-SA-Tamil.pdf';
                }
                let date = new Date();
                let obj = {
                    "academic_year": this.apiService.getacadamic_yearid(),
                    "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
                    "assessment_type": this.apiService.getdataassessed_typeformativeid(),
                    "school_id": this.schoolid
                };
                this.apiService.getformationterms(obj, this.token).subscribe(val => {
                    if (val['status'] == 200 && val['dataStatus'] == true) {
                        if (val['records'] == null || val['records'].length == 0 || typeof val['records'] == 'string') {
                            this.groupingStatus = 'pending';
                        }
                        else {
                            let getfozenSatus = val['records'].find(v => v.assessment_type == this.apiService.getdataassessed_typeformativeid() && v.class == this.class && v.subject == this.subject && v.term == this.termValue && v.week_of_year == this.weekOfYear);
                            if (getfozenSatus == undefined) {
                                this.groupingStatus = 'pending';
                            }
                            else {
                                this.groupingStatus = getfozenSatus.status;
                            }
                        }
                    }
                    else {
                        this.alertService.error(val['msg']);
                    }
                });
                this.studentsList = this.studentOrder(dataa.studentlist);
                this.totalCount = dataa.studentlist.length;
                this.dummystudentlist = dataa.studentlist;
                this.assessedStudents = this.studentsList.filter(s => s.isAssessed == true);
                this.showsubmitbutton = this.studentsList.some(s => s.isSkipped == true || (s.isAssessed == false && s.isSkipped == false));
            }
            else {
                this.shownostudentboolean = false;
                this.studentsList = [];
                this.totalCount = 0;
            }
            this.getSummativePdf();
        }), (error) => console.error(error));
    }
    studentOrder(data) {
        let female = data.filter(v => v.gender == '2');
        let ts = female.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        let male = data.filter(v => v.gender == '1');
        male.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        let newll = female.concat(male);
        return newll;
    }
    ngOnInit() {
        this.apiService.totalStudentsAssesedClass1.subscribe((data => {
            this.assessedStudents = data;
        }));
    }
    getSummativePdf() {
        let obj = {
            assessment_type: this.apiService.getdataassessed_typeformativeid(),
            class: this.classdata,
            subject: this.subject,
            school_id: this.schoolid,
            term: this.termValue,
            class_sections: this.classs_sections
        };
        this.apiService.pdfSummativeAssessmentDetails(obj, this.token).subscribe(val => {
            if (val['status'] == 200 && val['dataStatus'] == true) {
                this.summative_pdf = this.studentOrder(val['records']);
                this.summative_pdf.filter(val => {
                    if (val.student_status == null || val.student_status == '') {
                        val.total = 'Not assessed';
                    }
                    else if (val.student_status != null && val.student_status != 'assessed') {
                        val.total = val.student_status;
                    }
                });
                this.final_Data = this.summative_pdf;
            }
            else {
                this.summative_pdf = [];
            }
        });
    }
    generatePdf() {
        this.test = true;
        debugger;
        this.ionLoaderService.simpleLoader();
        setTimeout(() => {
            this.conttent = [];
            this.arraypdf = [];
            var pdfEle = document.getElementById("pdf-container");
            this.copypdfEle = pdfEle.innerHTML;
            let splitdata = pdfEle.innerHTML.split('<tr');
            while (splitdata.length > 0)
                this.arraypdf.push(splitdata.splice(0, 32));
            this.arraypdf.map((val, arin) => {
                let newval = val.map((s, index) => {
                    if (index >= 1) {
                        s = '<tr' + s;
                        return s;
                    }
                    else if (index == 0) {
                        if (arin == 0) {
                            s = s;
                        }
                        else {
                            s = '<table ><tr id="123"><th style="border: 1px solid black;color: black;">SlNo</th><th style="border: 1px solid black;color: black;">Student ID</th><th style="border: 1px solid black;color: black;">Student Name</th><th style="border: 1px solid black;color: black;">GROUP</th><th style="border: 1px solid black;color: black;">Total Marks(60)</th></tr><tr ' + s;
                        }
                        return s;
                    }
                    ;
                });
                let alstd = newval[newval.length - 1];
                newval[newval.length - 1] = alstd + '</table>';
                pdfEle.innerHTML = newval.join('');
                let splittable = pdfEle.innerHTML.split('<table');
                let newarr = splittable.map(v => {
                    if (v != "") {
                        return '<div style="width: 100%;text-align:center;padding-bottom: 30px;"><div style="font-weight:bold;">Summative Assesement Report</div><div style="font-weight:bold;">(2022-2023)</div><div style="font-weight:bold;">' + this.term + '</div><div style="font-weight:bold;"><h4>Class ' + this.class + ' - ' + this.subjectkey + '</h4></div><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image10.jpg"><span>-Arumbu</span><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image2.jpg"><span>-Mottu</span><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image19.jpg"><span>-Malar</span></div></div><table style="margin: 0 auto;" ' + v;
                    }
                });
                let removundefined = newarr.filter(t => t != undefined);
                removundefined.forEach((t) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    var stringToHTML = function (str) {
                        var dom = document.createElement('div');
                        dom.innerHTML = str;
                        return dom;
                    };
                    var options = {
                        background: "white",
                        height: (pdfEle.clientHeight + 600),
                        width: 800,
                    };
                    yield dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(stringToHTML(t), options).then((filePath) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                        this.conttent.push(filePath);
                    }));
                }));
            });
            const options = {
                background: "white",
                height: (pdfEle.clientHeight + 600),
                width: 800,
            };
            setTimeout(() => {
                dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(pdfEle, options).then((filePath) => {
                    var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_6__.default("p", "mm", "a4");
                    var width = jsPdfDoc.internal.pageSize.getWidth();
                    var height = jsPdfDoc.internal.pageSize.getHeight();
                    if (this.conttent.length > 0) {
                        this.conttent.push(this.conttent.shift());
                    }
                    this.conttent.forEach(n => {
                        jsPdfDoc.addPage(n);
                        jsPdfDoc.addImage(n, 'PNG', 12, 12, width, height);
                    });
                    jsPdfDoc.deletePage(1);
                    let docRes = jsPdfDoc.output();
                    let arrayBuffer = new ArrayBuffer(docRes.length);
                    let uintArray = new Uint8Array(arrayBuffer);
                    this.test = false;
                    for (var i = 0; i < docRes.length; i++) {
                        uintArray[i] = docRes.charCodeAt(i);
                    }
                    const directory = this.file.dataDirectory;
                    const pdfFile = "Student.pdf";
                    debugger;
                    this.file.checkFile(directory, pdfFile)
                        .then((res) => {
                        this.file.writeFile(directory, pdfFile, arrayBuffer, { replace: true })
                            .then((res) => {
                            this.ionLoaderService.dismissLoader();
                            this.fileOpener.open(this.file.dataDirectory + pdfFile, 'application/pdf')
                                .then(() => console.log('File is exported'))
                                .catch(e => console.log(e));
                        })
                            .catch((error) => {
                            console.log(JSON.stringify(error));
                        });
                    })
                        .catch((error) => {
                        this.file.writeFile(directory, pdfFile, arrayBuffer, { replace: true })
                            .then((res) => {
                            this.ionLoaderService.dismissLoader();
                            this.fileOpener.open(this.file.dataDirectory + pdfFile, 'application/pdf')
                                .then(() => console.log('File exported'))
                                .catch(e => console.log(e));
                        })
                            .catch((error) => {
                            console.log(JSON.stringify(error));
                            this.ionLoaderService.dismissLoader();
                        });
                    });
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }, 1000);
        }, 1000);
    }
    setFilteredItems(data) {
        this.studentsList = this.filterItems(data.value);
    }
    filterItems(searchTerm) {
        return this.dummystudentlist.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
    findStudentToBeAssessed() {
        let studentsToBeAssessed = this.studentsList.filter(el => (el.isSkipped !== true && el.isAssessed !== true));
        if (studentsToBeAssessed.length > 0) {
            this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
        }
        else {
            this.apiService.displayToast("All Students assessed!", false);
            this.router.navigate(['/tabs/summative-class-selection']);
        }
    }
};
SummativeStudentPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_9__.IonLoaderService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener }
];
SummativeStudentPage.propDecorators = {
    searchbarElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["searchbarElem", { read: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['content',] }]
};
SummativeStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-summative-student',
        template: _raw_loader_summative_student_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_summative_student_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SummativeStudentPage);



/***/ }),

/***/ 52135:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: \"Ubuntu\" !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.content {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n}\n\n.note {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  margin: auto;\n}\n\n.note-assess {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  padding: 3px;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.heading {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n  background: #f2c94c;\n  text-align: center;\n  padding: 10px;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 24px;\n}\n\n.select-learning-outcome {\n  border: 1px solid black;\n  border-radius: 5px;\n  background: rgba(200, 190, 190, 0.42);\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 5px;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n}\n\n.select-learning-outcome-option {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: block;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.assess-img-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  height: 5px;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n.assess-img {\n  width: 30px;\n  margin-right: -3px;\n}\n\n.search-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  padding: 0 10px;\n  background: rgba(196, 196, 196, 0.13);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-box-input {\n  width: 90%;\n  margin: 2px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.footer {\n  text-align: center;\n  font-family: \"Ubuntu\" !important;\n  background: #45B356;\n  color: white;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 28px;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n}\n\nth {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 800;\n  text-align: center;\n  font-size: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\ntd {\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\n.name {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n}\n\n.assess-status-red {\n  font-family: \"Ubuntu\" !important;\n  color: #F01313;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-green {\n  font-family: \"Ubuntu\" !important;\n  color: green;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-yellow {\n  font-family: \"Ubuntu\" !important;\n  color: orange;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-lightblue {\n  font-family: \"Ubuntu\" !important;\n  color: #3b45d4;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\nion-content {\n  --background: url(\"/assets/images/ennum-ezhuthum/screen-back.png\") 0 0/100% 100% no-repeat ;\n}\n\nion-card {\n  padding: 10px;\n}\n\n.center-align-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\nion-toolbar {\n  --background: #2176b9;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBREU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFNTjs7QUFIRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFIRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1OOztBQUpFO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBT047O0FBTEU7RUFFRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUFRSjs7QUFORTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBU0o7O0FBTkU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBTkU7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBFO0VBQ0UsZ0NBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFVTjs7QUFSRTtFQUNFLGdDQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBV047O0FBVEU7RUFDRSxnQ0FBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlOOztBQVZFO0VBQ0UsMkZBQUE7QUFhSjs7QUFURTtFQUNFLGFBQUE7QUFZSjs7QUFURTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVZFO0VBQ0UsZUFBQTtBQWFKOztBQVhFO0VBQ0UsbUJBQUE7QUFjSjs7QUFYRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQWNKIiwiZmlsZSI6InN1bW1hdGl2ZS1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubm90ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAubm90ZS1hc3Nlc3N7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5nIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICAuc2VsZWN0LWxlYXJuaW5nLW91dGNvbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAxOTAsIDE5MCwgMC40Mik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNlbGVjdC1sZWFybmluZy1vdXRjb21lLW9wdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnN0dWRlbnQtYXNzZXNzLWJveHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmFzc2Vzcy1pbWctYm94e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gIC5hc3Nlc3MtaW1ne1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xyXG5cclxuICB9XHJcbiAgLnNlYXJjaC1ib3h7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYm94LWlucHV0e1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogIzQ1QjM1NjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuICB0YWJsZXtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuICB0aHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcblxyXG4gIC5hc3Nlc3Mtc3RhdHVzLXJlZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGMDEzMTM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWdyZWVue1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmFzc2Vzcy1zdGF0dXMteWVsbG93e1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWxpZ2h0Ymx1ZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiKDU5LCA2OSwgMjEyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VubnVtLWV6aHV0aHVtL3NjcmVlbi1iYWNrLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdFxyXG4gIH1cclxuXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzIxNzZiOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */");

/***/ }),

/***/ 77392:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/summative-class-selection\"></ion-back-button>\r\n   </ion-buttons>\r\n    <ion-title>SUMMATIVE ASSESSMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"content\">\r\n  <ion-card>\r\n  <ion-note>Note : Mark the students who can be assessed now</ion-note>\r\n        <ion-text color=\"primary\" class=\"ion-text-center center-align-flex\" >\r\n          <h4>{{term}}</h4>\r\n        </ion-text>\r\n  \r\n  <ion-text color=\"primary\" class=\"ion-text-center center-align-flex\">\r\n    <h4 *ngIf=\"shownostudentboolean\">Class {{class}} {{subjectkey}}</h4>\r\n  </ion-text>\r\n\r\n  <ion-text *ngIf=\"pdfData\" color=\"primary\" class=\"ion-text-center center-align-flex\">\r\n    <ion-title><a href=\"{{live_img_url}}{{pdfData}}\">click to Download questions pdf</a></ion-title>\r\n  </ion-text>\r\n\r\n  <div class=\"student-assess-box\">\r\n    <!-- <div class=\"note-assess\">Number of students assessed</div> -->\r\n    <div class=\"note-assess\"><span style=\"font-size: 25px\">{{assessedStudents.length}}</span>\r\n      of {{totalCount}} students assessed</div>\r\n    <progress style=\"width: 100%\" max=\"{{totalCount}}\" value=\"{{assessedStudents.length}}\"></progress>\r\n   \r\n  </div>\r\n  <ion-searchbar #searchbarElem [(ngModel)]=\"searchTerm\" (ionInput)=\"setFilteredItems($event.target)\">\r\n  </ion-searchbar>\r\n\r\n  <table>\r\n    <tr>\r\n      <th>NAMES</th>\r\n      <th>STATUS</th>\r\n      <!-- <th>GROUP</th> -->\r\n    </tr>\r\n    <tr *ngFor=\"let item of studentsList\">\r\n      <td class=\"name\">\r\n        {{item.name}}   ({{item.user_id}})\r\n      </td>\r\n      \r\n      <td [ngClass]=\"item.isSkipped?item.color_class:item.isAssessed?item.color_class:'assess-status-red'\">\r\n        {{item.isSkipped?item.status_of_assessed:item.isAssessed?item.status_of_assessed:\"Not assessed\"}}\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div *ngIf=\"test\" style=\"padding-top:400px ;\">\r\n    <div id=\"pdf-container\" >\r\n      \r\n      <table >\r\n        <tr id=\"123\">\r\n          <th style=\"border: 1px solid black;color: black;\">SlNo</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Student ID</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Student Name</th>\r\n          <th style=\"border: 1px solid black;color: black;\">GROUP</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Total Marks(60)</th>\r\n     \r\n        </tr>\r\n        <tr *ngFor=\"let item of final_Data; let i = index\">\r\n          <td style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            {{i+1}}\r\n          </td>\r\n          <td style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            {{item.user_id}}\r\n          </td>\r\n          <td style=\"border: 1px solid black;color: black;width: 20px;\" class=\"name\">\r\n            {{item.name}} \r\n          </td>\r\n          <td *ngIf=\"!item.grade\" style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            -\r\n          </td>\r\n          <!-- </div> -->\r\n          <!-- <div *ngIf=\"groupingStatus != 'pending'\"> -->\r\n          <td style=\"padding:0px;border: 1px solid black;color: black;text-align: center;\" *ngIf=\"item.grade\" class=\"name\">\r\n            <img style=\"width: 25px;height: 25px;\" *ngIf=\"item.grade == 1\" src=\"/assets/images/ennum-ezhuthum/image10.jpg\">\r\n            <img style=\"width: 25px;height:25px\" *ngIf=\"item.grade == 2\" src=\"/assets/images/ennum-ezhuthum/image2.jpg\">\r\n            <img style=\"width: 25px;height:25px\" *ngIf=\"item.grade == 3\" src=\"/assets/images/ennum-ezhuthum/image19.jpg\">\r\n          </td>\r\n          <td style=\"padding:0px;border: 1px solid black;color: black;text-align: center;\" class=\"name\">\r\n            {{item.total}}\r\n          </td>\r\n         \r\n        <!-- </div> -->\r\n        </tr>\r\n      </table>\r\n  </div>\r\n  </div>\r\n  <div *ngIf=\"!shownostudentboolean\" style=\"text-align: center;\r\n  font-size: large;\">0 students to display</div>\r\n</ion-card>\r\n</ion-content>\r\n\r\n<ion-footer collapse=\"fade\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"groupingStatus != 'pending'\">\r\n          <!-- <button (click)=\"makePdf()\">make pdf</button> -->\r\n          <ion-button (click)=\"generatePdf()\" class=\"btn-submit\"  color=\"secondary\"\r\n            expand=\"block\">\r\n            PDF</ion-button>\r\n        </ion-col>\r\n        <ion-col >\r\n          \r\n<ion-button *ngIf=\"shownostudentboolean && showsubmitbutton && groupingStatus == 'pending'\" (click)=\"findStudentToBeAssessed()\" color=\"primary\">START ASSESSMENT</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-student_summative-student_module_ts-es2015.js.map