(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-report_summative-report_module_ts"],{

/***/ 26910:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeReportPageRoutingModule": function() { return /* binding */ SummativeReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _summative_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-report.page */ 38422);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);






const routes = [
    {
        path: '',
        component: _summative_report_page__WEBPACK_IMPORTED_MODULE_0__.SummativeReportPage
    }
];
let SummativeReportPageRoutingModule = class SummativeReportPageRoutingModule {
};
SummativeReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        providers: [_awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener]
    })
], SummativeReportPageRoutingModule);



/***/ }),

/***/ 51767:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeReportPageModule": function() { return /* binding */ SummativeReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _summative_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-report-routing.module */ 26910);
/* harmony import */ var _summative_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-report.page */ 38422);







let SummativeReportPageModule = class SummativeReportPageModule {
};
SummativeReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summative_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeReportPageRoutingModule
        ],
        declarations: [_summative_report_page__WEBPACK_IMPORTED_MODULE_1__.SummativeReportPage]
    })
], SummativeReportPageModule);



/***/ }),

/***/ 38422:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeReportPage": function() { return /* binding */ SummativeReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_summative_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./summative-report.page.html */ 45527);
/* harmony import */ var _summative_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-report.page.scss */ 10169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader/ion-loader.service */ 21645);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-to-image */ 83697);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chart.js/auto */ 6625);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);





// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';








// import { File, IWriteOptions } from '@ionic-native/file/ngx';




let SummativeReportPage = class SummativeReportPage {
    constructor(apiService, ionicstorage, router, alertService, route, ionLoaderService, uploadService, http, file, fileOpener, renderer) {
        this.apiService = apiService;
        this.ionicstorage = ionicstorage;
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.ionLoaderService = ionLoaderService;
        this.uploadService = uploadService;
        this.http = http;
        this.file = file;
        this.fileOpener = fileOpener;
        this.renderer = renderer;
        this.labels = ['A', 'B', 'C', 'D', 'E', 'G'];
        this.dataSet1 = [86, 114, 10, 106, 107, 111];
        this.dataSet2 = [40, 220, 15, 16, 24, 212];
        this.montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.termData = [];
        this.studentList = [];
        this.classchart = false;
        this.levelwise = false;
        this.conttent = [];
        this.arraypdf = [];
        this.showReportCard = false;
        this.slectedObject = {
            headername: '',
            reportcard: '',
            term: '',
            studentname: '',
            class: '',
            emis: '',
            attend: '',
            part1: '',
            subject: '',
            level: '',
            total: '',
            grade: '',
            tamil: '',
            eng: '',
            maths: '',
            grad: '',
            per: '',
            part2: '',
            area: '',
            point: '',
            gra: '',
            skills: '',
            attitude: '',
            wellness: '',
            curricuilar: '',
            remark: '',
            sign: '',
            hsign: '',
        };
        this.Englishobject = {
            headername: 'PUPS ULUNDAI',
            reportcard: 'Report Card',
            term: 'Term',
            studentname: 'Name of student',
            class: 'Class & Section',
            emis: 'EMIS ID',
            attend: 'Attendance',
            part1: 'Part - I  Scholastic Area',
            subject: 'Subjects',
            level: 'Level',
            total: 'Total (100)',
            grade: 'Grade',
            tamil: 'Tamil',
            eng: 'English',
            maths: 'Maths',
            grad: 'Overall Grade',
            per: 'Percentage(%)',
            part2: 'Part - II  Co-Scholastic Area',
            area: 'Area',
            point: 'Grade Point',
            gra: 'Grade',
            skills: 'Life Skills',
            attitude: 'Attitude and Values',
            wellness: 'Wellness & Holistic Experience',
            curricuilar: 'Co-Curricuilar activities',
            remark: 'General Remarks',
            sign: 'Teacher Sign',
            hsign: 'Headmaster Sign'
        };
        this.Tamilobject = {
            headername: 'PUMS  செம்பாக்கம்',
            reportcard: 'மாணவர் தரநிலை அறிக்கை',
            term: 'பருவம்',
            studentname: 'மாணவர் பெயர்',
            class: 'வகுப்பு & பிரிவு',
            emis: 'EMIS எண்',
            attend: 'வருகை',
            part1: 'பகுதி - I   - கல்விச் செயல்பாடு',
            subject: 'பாடங்கள்',
            level: 'நிலை',
            total: 'மொத்தம் (100)',
            grade: 'தரநிலை',
            tamil: 'தமிழ்',
            eng: 'ஆங்கிலம்',
            maths: 'கணக்கு',
            grad: 'ஒட்டுமொத்த தரநிலை',
            per: 'விழுக்காடு (%)',
            part2: 'பகுதி - 2 கல்வி இணைச் செயல்பாடு',
            area: 'பகுதிகள்',
            point: 'தரநிலை ப்புள்ளி',
            gra: 'தரநிலை',
            skills: 'வாழ்வியல் திறன்கள்',
            attitude: 'மனப்பான்மைகளும் மதிப்புகளும்',
            wellness: 'நன்னலம் & உடற்பயிற்சி',
            curricuilar: 'பாட இணைச் செயல்பாடுகள் (கலை, கைவினை)',
            remark: 'பொதுவான குறிப்புகள்',
            sign: 'வகுப்பாசிரியர் கையொப்பம்',
            hsign: 'தலைமையாசிரியர் கையொப்பம்'
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ionicstorage.getData('userInfo').then((dataa) => {
            this.username = dataa.username;
            // this.schoolid = dataa.school_id;
            this.schoolid = '32421';
            this.token = dataa.token;
            this.schoolName = dataa.school_name;
            let date = new Date();
            let obj = {
                "academic_year": this.apiService.getacadamic_yearid(),
                "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
                "assessment_type": 4,
                "school_id": this.schoolid
            };
            this.apiService.getformationterms(obj, this.token).subscribe((val) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                this.obj = {};
                yield val['records'].filter(val => {
                    if (val.assessment_type == 4) {
                        val.term = "term " + val.term;
                        this.obj[val.term] = this.obj[val.term] || {};
                        let changedatedynamic = new Date(val.start_date);
                        let getcurrentmonth = (changedatedynamic.getMonth());
                        const getWeekNumOfMonthOfDate = (d) => {
                            const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
                            return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
                        };
                        const weekNumOfDate = getWeekNumOfMonthOfDate(new Date());
                        this.obj[val.term][getcurrentmonth] = this.obj[val.term][getcurrentmonth] || {};
                        this.obj[val.term][getcurrentmonth][val.week_of_month] = this.obj[val.term][getcurrentmonth][val.week_of_month] || [];
                        if (val.week_of_month > weekNumOfDate) {
                            val.view_status_week = true;
                        }
                        else {
                            val.view_status_week = false;
                        }
                        this.obj[val.term][getcurrentmonth][val.week_of_month].push(val);
                    }
                });
            }));
        }, (error) => console.error(error));
        this.ionicstorage.getData('userInfo').then((dataa) => {
            this.assessment_type = this.apiService.getdataassessed_typeid();
            this.ionLoaderService.simpleLoader();
            this.username = dataa.username;
            // this.schoolid = dataa.school_id;
            this.schoolid = '32421';
            this.token = dataa.token;
            let date = new Date();
            let acadamicyear = date.getFullYear() + " - " + (date.getFullYear() + 1);
            setTimeout(() => { this.ionLoaderService.dismissLoader(); }, 1000);
            this.apiService.getClassRoomDetailsAll({ username: this.username, school_id: this.schoolid, acadamicname: acadamicyear }, dataa.token).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                if (data['records'].academic_year_details.length > 0) {
                    this.apiService.setacadamic_yearid(data['records'].academic_year_details[0].id);
                }
                let getsavedclass = JSON.parse(data['records'].saved_details[0].class);
                let getformate = getsavedclass.map(a => {
                    let getfrommasterclass = this.apiService.classes.find(n => n.class == a.class);
                    return { class: getfrommasterclass.class, section: a.section.map(t => t.name).join() };
                });
                this.sectionbasedcountlist = data['records'].sections_based_student_count;
                if (data['status'] == 200 && data['dataStatus'] == true) {
                    this.formativeassessmentdata = yield this.getFormativeAssessment(data['records'].saved_details, this.apiService.classes, this.apiService.subjects, 0);
                }
                else {
                    this.alertService.error(data['msg']);
                }
            }));
        }, (error) => console.error(error));
    }
    getFormativeAssessment(apivalue, classes, subjects, countlist) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let filteredarray = [];
            if (apivalue == null || apivalue == 0 || typeof apivalue == 'string') {
                return filteredarray;
            }
            else if (apivalue.length > 0) {
                if (this.isJson(apivalue[0].class) == true && this.isJson(apivalue[0].subject) == true) {
                    let apiclass = JSON.parse(apivalue[0].class);
                    let apisubject = JSON.parse(apivalue[0].subject);
                    let apicalsstype = apivalue[0].class_type;
                    yield apiclass.filter(s => {
                        let findcalss = classes.find(n => n.class == s.class);
                        findcalss.section.find(n => {
                            s.section.filter(val => { if (val.name == n.name) {
                                return n.isSelected = true;
                            } });
                        });
                        let newva = findcalss.section.filter(s => s.isSelected == true);
                        apisubject.filter(v => {
                            let findsubject = subjects.find(l => l.id == v);
                            let obj = {
                                id: findcalss.id,
                                classid: findcalss.class,
                                name: findcalss.class_id,
                                subject: findsubject.subject,
                                subject_id: findsubject.id,
                                class_type: apicalsstype,
                                color: findcalss.class_id.replace(" ", ""),
                                studentcount: findcalss.students,
                                assessedcount: 0,
                                section: newva.map(s => s.name).join()
                            };
                            if (obj.section != '') {
                                obj.studentcount = 0;
                            }
                            else {
                                obj.studentcount = obj.studentcount;
                            }
                            filteredarray.push(obj);
                        });
                    });
                    if (countlist.length > 0) {
                        yield filteredarray.filter((t) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            if (t.section != '') {
                                t.assessedcount = 0;
                            }
                            else {
                                t.assessedcount = 0;
                            }
                        }));
                    }
                    return filteredarray;
                }
                else {
                    return filteredarray;
                }
            }
        });
    }
    isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    ngAfterViewInit() {
    }
    createBarChart() {
        this.chartInstance = new chart_js_auto__WEBPACK_IMPORTED_MODULE_10__.default('chartJSContainer', {
            type: 'bar',
            data: {
                labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8'],
                datasets: [{
                        label: 'LO1',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: '#ddee44',
                        borderColor: '#ddee44',
                        borderWidth: 1
                    },
                    {
                        label: 'LO2',
                        data: [1.5, 2.8, 4, 4.9, 3.9, 4.5, 7, 12],
                        backgroundColor: '#dd1144',
                        borderColor: '#dd1144',
                        borderWidth: 1
                    }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        stacked: false // Make it true to make the overlapping bars visible
                    },
                    y: {
                        stacked: false
                    }
                }
            }
        });
    }
    selectChart(data) {
        if (data.target.value == 'Class') {
            this.chartType = data.target.value;
            this.chartData = this.formativeassessmentdata;
            this.showReportCard = false;
        }
        else if (data.target.value == 'Level') {
            this.chartType = data.target.value;
            let keys = ['name'];
            let filtered = this.formativeassessmentdata.filter((s => o => (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join('|')))(new Set));
            this.chartData = filtered;
        }
    }
    termSelection(data) {
        if (data.target.value) {
            this.term = data.target.value;
        }
    }
    Onnextnavigate(value) {
        if (this.chartType == 'Class') {
            this.showReportCard = false;
            this.slectedClass = value;
            this.ionicstorage.getData('userInfo').then((dataa) => {
                this.token = dataa.token;
                let obj = {
                    "class": value['classid'],
                    "school_id": this.schoolid,
                    "term": this.term.match(/(\d+)/)[0],
                };
                this.apiService.getStudentreport(obj, this.token).subscribe(val => {
                    this.studentList = [];
                    if (val['dataStatus'] == true && val['status'] == 200) {
                        this.newa = val;
                        this.term_selected = this.term.match(/(\d+)/)[0];
                        Object.keys(this.newa['result']).forEach(key => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                            if (((_e = (_d = (_c = (_b = (_a = this.newa) === null || _a === void 0 ? void 0 : _a['result']) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c['scores']) === null || _d === void 0 ? void 0 : _d[this.term_selected]) === null || _e === void 0 ? void 0 : _e['FA(A)']) == undefined || this.newa['result'][key]['scores'][this.term_selected]['FA(A)'] == undefined) {
                                this.newa['result'][key]['fora'] = '';
                                this.newa['result'][key]['forab'] = '';
                                this.newa['result'][key]['foraa'] = '';
                            }
                            else {
                                if (this.newa['result'][key]['scores'][this.term_selected]['FA(A)'][value.subject_id] == '' || this.newa['result'][key]['scores'][this.term_selected]['FA(A)'][value.subject_id] == undefined) {
                                    this.newa['result'][key]['fora'] = '';
                                    this.newa['result'][key]['forab'] = '';
                                    this.newa['result'][key]['foraa'] = '';
                                }
                                else {
                                    this.newa['result'][key]['fora'] = Number(this.newa['result'][key]['scores'][this.term_selected]['FA(A)'][value.subject_id]['per']);
                                    if (this.newa['result'][key]['scores'][this.term_selected]['FA(A)'][value.subject_id]['pers'] == undefined) {
                                        this.newa['result'][key]['forab'] = '';
                                        this.newa['result'][key]['foraa'] = '';
                                    }
                                    else {
                                        let spli = this.newa['result'][key]['scores'][this.term_selected]['FA(A)'][value.subject_id]['pers'].split(',');
                                        this.newa['result'][key]['forab'] = Number(spli[0]);
                                        this.newa['result'][key]['foraa'] = Number(spli[1]);
                                    }
                                }
                            }
                            if (((_k = (_j = (_h = (_g = (_f = this.newa) === null || _f === void 0 ? void 0 : _f['result']) === null || _g === void 0 ? void 0 : _g[key]) === null || _h === void 0 ? void 0 : _h['scores']) === null || _j === void 0 ? void 0 : _j[this.term_selected]) === null || _k === void 0 ? void 0 : _k['FA(B)']) == undefined || this.newa['result'][key]['scores'][this.term_selected]['FA(B)'] == undefined) {
                                this.newa['result'][key]['forb'] = '';
                                this.newa['result'][key]['forba'] = '';
                                this.newa['result'][key]['forbb'] = '';
                            }
                            else {
                                if (this.newa['result'][key]['scores'][this.term_selected]['FA(B)'][value.subject_id] == '' || this.newa['result'][key]['scores'][this.term_selected]['FA(B)'][value.subject_id] == undefined) {
                                    this.newa['result'][key]['forb'] = '';
                                    this.newa['result'][key]['forba'] = '';
                                    this.newa['result'][key]['forbb'] = '';
                                }
                                else {
                                    this.newa['result'][key]['forb'] = Number(this.newa['result'][key]['scores'][this.term_selected]['FA(B)'][value.subject_id]['per']);
                                    if (this.newa['result'][key]['scores'][this.term_selected]['FA(B)'][value.subject_id]['pers'] == undefined) {
                                        this.newa['result'][key]['forba'] = '';
                                        this.newa['result'][key]['forbb'] = '';
                                    }
                                    else {
                                        let spli = this.newa['result'][key]['scores'][this.term_selected]['FA(B)'][value.subject_id]['pers'].split(',');
                                        this.newa['result'][key]['forba'] = Number(spli[0]);
                                        this.newa['result'][key]['forbb'] = Number(spli[1]);
                                    }
                                }
                            }
                            if (((_q = (_p = (_o = (_m = (_l = this.newa) === null || _l === void 0 ? void 0 : _l['result']) === null || _m === void 0 ? void 0 : _m[key]) === null || _o === void 0 ? void 0 : _o['scores']) === null || _p === void 0 ? void 0 : _p[this.term_selected]) === null || _q === void 0 ? void 0 : _q['SA']) == undefined || this.newa['result'][key]['scores'][this.term_selected]['SA'] == undefined) {
                                this.newa['result'][key]['suma'] = '';
                            }
                            else {
                                if (this.newa['result'][key]['scores'][this.term_selected]['SA'][value.subject_id] == '' || this.newa['result'][key]['scores'][this.term_selected]['SA'][value.subject_id] == undefined) {
                                    this.newa['result'][key]['suma'] = '';
                                }
                                else {
                                    this.newa['result'][key]['suma'] = Number(this.newa['result'][key]['scores'][this.term_selected]['SA'][value.subject_id]['per']);
                                }
                            }
                            this.studentList.push(this.newa['result'][key]);
                        });
                        this.studentList = this.studentOrder(this.studentList);
                        this.generatePdf(value);
                    }
                    else {
                        this.studentList = [];
                    }
                });
            });
        }
        else if (this.chartType == 'Level') {
            this.showReportCard = true;
            let obj = {
                "class": value['classid'],
                "school_id": this.schoolid,
                "term": this.term.match(/(\d+)/)[0],
            };
            this.apiService.getStudentreport(obj, this.token).subscribe(val => {
                this.studentList = [];
                if (val['dataStatus'] == true && val['status'] == 200) {
                    Object.keys(val['result']).forEach(key => {
                        this.studentList.push(val['result'][key]);
                    });
                    this.studentList = this.studentOrder(this.studentList);
                }
                else {
                    this.studentList = [];
                }
            });
        }
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
    generatePdf(classdata) {
        this.conttent = [];
        if (this.chartType == 'Class') {
            this.classchart = true;
        }
        else if (this.chartType == 'Level') {
            this.levelwise = true;
            setTimeout(() => {
                this.createBarChart();
            }, 500);
        }
        this.ionLoaderService.simpleLoader();
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.arraypdf = [];
            if (this.chartType == 'Class') {
                var pdfEle = document.getElementById("classchart");
                var chardatas = document.getElementById("chard");
                let splitdata = pdfEle.innerHTML.split('<tr');
                while (splitdata.length > 0)
                    this.arraypdf.push(splitdata.splice(0, 33));
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
                                s = '<table border="1"><tr><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">S.No</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;width: 20px;">Name of theStudent</th><th colspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(A)Activity<br>(Marks Out of 10)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(A)<br>(Total 20)</th><th colspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(B)Activity<br>(Marks Out of 10)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(B)<br>(Total 20)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA TOTAL<br>(OUT OF40)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">SA TOTAL<br>(OUT OF60)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">TOTAL MARKS<br>(OUTOF 100)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">TOTAL GRADES</th></tr><tr><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">I</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">II</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">I</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">II</td></tr><tr ' + s;
                            }
                            return s;
                        }
                        ;
                    });
                    let alstd = newval[newval.length - 1];
                    if (alstd.includes("</table>") == false) {
                        newval[newval.length - 1] = alstd + '</table>';
                    }
                    var allheight = 200;
                    if (newval.length <= 15) {
                        allheight = 800;
                    }
                    pdfEle.innerHTML = newval.join('');
                    let splittable = pdfEle.innerHTML.split('<table');
                    let newarr = splittable.map(v => {
                        if (v != "") {
                            return '<div style="width: 100%;text-align:center;padding-bottom: 30px;"><div style="border-top: 1px solid black;height: 20px;background: #9c9c9c;width:1100px;padding:5px"><div class="c" style="float:left;background: #9c9c9c;color:black;font-weight:600;">STUDENT SCHOLASTIC REPORTS</div><div class="c" style="float:right;background: #9c9c9c;color:black">Academic Year: 2022-2023</div></div><div style="border-bottom: 1px solid black;height: 20px;width:1110px;background: #9c9c9c;"><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">TERM :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + this.term.match(/(\d+)/)[0] + '</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">CLASS :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + classdata.classid + '</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">SECTION :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + classdata.section + '</div><div class="c" style="float:left;width: 13%;border: 1px solid black;color: black;text-align: center;">SUBJECT :</div>  <div class="c" style="float:left;width: 13%;border: 1px solid black;color: black;text-align: center;">' + classdata.subject + '</div> </div> </div><table' + v;
                        }
                    });
                    let removundefined = newarr.filter(t => t != undefined);
                    this.conttent.length = 0;
                    removundefined.forEach((t) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        var stringToHTML = function (str) {
                            var dom = document.createElement('div');
                            dom.innerHTML = str;
                            return dom;
                        };
                        var options = {
                            background: "white",
                            height: (pdfEle.clientHeight + allheight),
                            width: 1300,
                            quality: 0.10
                        };
                        yield dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(stringToHTML(t), options).then((filePath) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            this.conttent.push(filePath);
                        }));
                    }));
                });
                var options = {
                    background: "white",
                    height: (pdfEle.clientHeight + 200),
                    width: 1300,
                };
            }
            else if (this.chartType == 'Level') {
                var pdfEle = document.getElementById("levelwiseboolean");
                var options = {
                    background: "white",
                    height: (pdfEle.clientHeight + 1500),
                    width: 1000,
                };
            }
            setTimeout(() => {
                dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(pdfEle, options).then((filePath) => {
                    var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_8__.default("p", "mm", "a4");
                    var width = jsPdfDoc.internal.pageSize.getWidth();
                    var height = jsPdfDoc.internal.pageSize.getHeight();
                    if (this.conttent.length > 0) {
                        this.conttent.push(this.conttent.shift());
                    }
                    this.conttent.forEach(n => {
                        jsPdfDoc.addPage(n);
                        jsPdfDoc.addImage(n, 'PNG', 12, 12, width, height);
                    });
                    this.conttent = [];
                    jsPdfDoc.deletePage(1);
                    let docRes = jsPdfDoc.output();
                    let arrayBuffer = new ArrayBuffer(docRes.length);
                    let uintArray = new Uint8Array(arrayBuffer);
                    // pdfEle.innerHTML=this.copypdfEle;
                    if (this.chartType == 'Class') {
                        this.classchart = false;
                    }
                    else if (this.chartType == 'Level') {
                        this.levelwise = false;
                        this.chartInstance.destroy();
                    }
                    for (var i = 0; i < docRes.length; i++) {
                        uintArray[i] = docRes.charCodeAt(i);
                    }
                    const directory = this.file.dataDirectory;
                    const pdfFile = "Student.pdf";
                    // let iWriteOptions: IWriteOptions = {
                    //   replace: true
                    // };
                    this.file.checkFile(directory, pdfFile)
                        .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        // this.ionLoaderService.dismissLoader();
                        this.file.writeFile(directory, pdfFile, arrayBuffer, { replace: true })
                            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            this.conttent = [];
                            this.ionLoaderService.dismissLoader();
                            this.fileOpener.open(this.file.dataDirectory + pdfFile, 'application/pdf')
                                .then(() => console.log('File is exported'))
                                .catch(e => console.log(e));
                        }))
                            .catch((error) => {
                            console.log(JSON.stringify(error));
                        });
                    }))
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
                        });
                    });
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }, 500);
        }), 1000);
    }
    generatePdfLevelWise(value, lang) {
        if (lang == 'English') {
            this.slectedObject = this.Englishobject;
            this.classtype = 'classtype2';
        }
        else {
            this.slectedObject = this.Tamilobject;
            this.classtype = 'classtype';
        }
        this.apiService.getStudentsinglereport({
            "student_id": value.student_id,
            "term": this.term.match(/(\d+)/)[0],
        }, this.token).subscribe(val => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (val['dataStatus'] == true && val['status'] == 200) {
                this.singlStudent = val['result'];
                this.term_selected = this.term.match(/(\d+)/)[0];
                console.log(this.singlStudent);
                // this.singlStudent.baseline_group={3: 'Arumbu', 46: 'Arumbu', 48: 'Arumbu'}
                if (this.singlStudent['baseline_group'] == undefined || this.singlStudent['baseline_group'][3] == undefined) {
                    this.singlStudent['mathsgroup'] = '';
                }
                else {
                    this.singlStudent['mathsgroup'] = this.singlStudent['baseline_group'][3];
                }
                if (this.singlStudent['baseline_group'] == undefined || this.singlStudent['baseline_group'][46] == undefined) {
                    this.singlStudent['englishgroup'] = '';
                }
                else {
                    this.singlStudent['englishgroup'] = this.singlStudent['baseline_group'][46];
                }
                if (this.singlStudent['baseline_group'] == undefined || this.singlStudent['baseline_group'][48] == undefined) {
                    this.singlStudent['tamilgroup'] = '';
                }
                else {
                    this.singlStudent['tamilgroup'] = this.singlStudent['baseline_group'][48];
                }
                //   console.log(this.singlStudent?.['scores']?.[this.term_selected]?.['FA(A)'])
                if (((_c = (_b = (_a = this.singlStudent) === null || _a === void 0 ? void 0 : _a['scores']) === null || _b === void 0 ? void 0 : _b[this.term_selected]) === null || _c === void 0 ? void 0 : _c['FA(A)']) == undefined || this.singlStudent['scores'][this.term_selected]['FA(A)'] == undefined) {
                    this.singlStudent['foramaths'] = '';
                    this.singlStudent['foraenglish'] = '';
                    this.singlStudent['foratamil'] = '';
                }
                else {
                    //maths
                    if (this.singlStudent['scores'][this.term_selected]['FA(A)'][3] == '' || this.singlStudent['scores'][this.term_selected]['FA(A)'][3] == undefined) {
                        this.singlStudent['foramaths'] = '';
                    }
                    else {
                        this.singlStudent['foramaths'] = Number(this.singlStudent['scores'][this.term_selected]['FA(A)'][3]['per']);
                    }
                    //english
                    if (this.singlStudent['scores'][this.term_selected]['FA(A)'][46] == '' || this.singlStudent['scores'][this.term_selected]['FA(A)'][46] == undefined) {
                        this.singlStudent['foraenglish'] = '';
                    }
                    else {
                        this.singlStudent['foraenglish'] = Number(this.singlStudent['scores'][this.term_selected]['FA(A)'][46]['per']);
                    }
                    //tamil
                    if (this.singlStudent['scores'][this.term_selected]['FA(A)'][48] == '' || this.singlStudent['scores'][this.term_selected]['FA(A)'][48] == undefined) {
                        this.singlStudent['foratamil'] = '';
                    }
                    else {
                        this.singlStudent['foratamil'] = Number(this.singlStudent['scores'][this.term_selected]['FA(A)'][48]['per']);
                    }
                }
                if (((_f = (_e = (_d = this.singlStudent) === null || _d === void 0 ? void 0 : _d['scores']) === null || _e === void 0 ? void 0 : _e[this.term_selected]) === null || _f === void 0 ? void 0 : _f['FA(B)']) == undefined || this.singlStudent['scores'][this.term_selected]['FA(B)'] == undefined) {
                    this.singlStudent['forbmaths'] = '';
                    this.singlStudent['forbenglish'] = '';
                    this.singlStudent['forbtamil'] = '';
                }
                else {
                    if (this.singlStudent['scores'][this.term_selected]['FA(B)'][3] == '' || this.singlStudent['scores'][this.term_selected]['FA(B)'][3] == undefined) {
                        this.singlStudent['forbmaths'] = '';
                    }
                    else {
                        this.singlStudent['forbmaths'] = Number(this.singlStudent['scores'][this.term_selected]['FA(B)'][3]['per']);
                    }
                    //english
                    if (this.singlStudent['scores'][this.term_selected]['FA(B)'][46] == '' || this.singlStudent['scores'][this.term_selected]['FA(B)'][46] == undefined) {
                        this.singlStudent['forbenglish'] = '';
                    }
                    else {
                        this.singlStudent['forbenglish'] = Number(this.singlStudent['scores'][this.term_selected]['FA(B)'][46]['per']);
                    }
                    //tamil
                    if (this.singlStudent['scores'][this.term_selected]['FA(B)'][48] == '' || this.singlStudent['scores'][this.term_selected]['FA(B)'][48] == undefined) {
                        this.singlStudent['forbtamil'] = '';
                    }
                    else {
                        this.singlStudent['forbtamil'] = Number(this.singlStudent['scores'][this.term_selected]['FA(B)'][48]['per']);
                    }
                }
                if (((_j = (_h = (_g = this.singlStudent) === null || _g === void 0 ? void 0 : _g['scores']) === null || _h === void 0 ? void 0 : _h[this.term_selected]) === null || _j === void 0 ? void 0 : _j['SA']) == undefined || this.singlStudent['scores'][this.term_selected]['SA'] == undefined) {
                    this.singlStudent['sumamaths'] = '';
                    this.singlStudent['sumaenglish'] = '';
                    this.singlStudent['sumatamil'] = '';
                }
                else {
                    if (this.singlStudent['scores'][this.term_selected]['SA'][3] == '' || this.singlStudent['scores'][this.term_selected]['SA'][3] == undefined) {
                        this.singlStudent['sumamaths'] = '';
                    }
                    else {
                        this.singlStudent['sumamaths'] = Number(this.singlStudent['scores'][this.term_selected]['SA'][3]['per']);
                    }
                    //english
                    if (this.singlStudent['scores'][this.term_selected]['SA'][46] == '' || this.singlStudent['scores'][this.term_selected]['SA'][46] == undefined) {
                        this.singlStudent['sumaenglish'] = '';
                    }
                    else {
                        this.singlStudent['sumaenglish'] = Number(this.singlStudent['scores'][this.term_selected]['SA'][46]['per']);
                    }
                    //tamil
                    if (this.singlStudent['scores'][this.term_selected]['SA'][48] == '' || this.singlStudent['scores'][this.term_selected]['SA'][48] == undefined) {
                        this.singlStudent['sumatamil'] = '';
                    }
                    else {
                        this.singlStudent['sumatamil'] = Number(this.singlStudent['scores'][this.term_selected]['SA'][48]['per']);
                    }
                }
                this.levelwise = true;
                setTimeout(() => {
                    this.createBarChart();
                }, 500);
                this.ionLoaderService.simpleLoader();
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    let elem = document.getElementById('myDiv');
                    let elem1 = document.getElementById('myDivs');
                    if (elem1.clientHeight > elem.clientHeight) {
                        document.getElementById('myDivs').style.fontSize = '10px';
                    }
                    var pdfEle = document.getElementById("levelwiseboolean");
                    var options = {
                        background: "white",
                        height: (pdfEle.clientHeight + 50),
                        width: 750,
                    };
                    dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(pdfEle, options).then((filePath) => {
                        var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_8__.default("p", "mm", "a4");
                        var width = jsPdfDoc.internal.pageSize.getWidth();
                        var height = jsPdfDoc.internal.pageSize.getHeight();
                        jsPdfDoc.addImage(filePath, 'PNG', 12, 12, width, height);
                        let docRes = jsPdfDoc.output();
                        let arrayBuffer = new ArrayBuffer(docRes.length);
                        let uintArray = new Uint8Array(arrayBuffer);
                        // pdfEle.innerHTML=this.copypdfEle;
                        this.levelwise = false;
                        this.chartInstance.destroy();
                        for (var i = 0; i < docRes.length; i++) {
                            uintArray[i] = docRes.charCodeAt(i);
                        }
                        const directory = this.file.dataDirectory;
                        const pdfFile = "Student.pdf";
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
                            });
                        });
                    })
                        .catch(function (error) {
                        console.error(error);
                    });
                }), 1000);
            }
            else {
            }
        });
    }
    addingAandB(a, b) {
        if (!a && !b) {
            return '';
        }
        else if (a && !b) {
            return a;
        }
        else if (!a && b) {
            return b;
        }
        else if (a && b) {
            return a + b;
        }
    }
};
SummativeReportPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__.IonLoaderService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2 }
];
SummativeReportPage.propDecorators = {
    myDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['myDiv',] }]
};
SummativeReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-summative-report',
        template: _raw_loader_summative_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_summative_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SummativeReportPage);



/***/ }),

/***/ 10169:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: \"Ubuntu\" !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.content {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n}\n\n.note {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  margin: auto;\n}\n\n.note-assess {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  padding: 3px;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.heading {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n  background: #f2c94c;\n  text-align: center;\n  padding: 10px;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 24px;\n}\n\n.select-learning-outcome {\n  border: 1px solid black;\n  border-radius: 5px;\n  background: rgba(200, 190, 190, 0.42);\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 5px;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n}\n\n.select-learning-outcome-option {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: block;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.assess-img-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  height: 5px;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n.assess-img {\n  width: 30px;\n  margin-right: -3px;\n}\n\n.search-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  padding: 0 10px;\n  background: rgba(196, 196, 196, 0.13);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-box-input {\n  width: 90%;\n  margin: 2px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\nul {\n  list-style: none;\n  display: table;\n}\n\nli {\n  display: table-row;\n}\n\nb {\n  display: table-cell;\n}\n\n.footer {\n  text-align: center;\n  font-family: \"Ubuntu\" !important;\n  color: black;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n}\n\nth {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 800;\n  text-align: center;\n  font-size: 18px;\n  border: 1px solid black;\n  padding: 10px;\n}\n\ntd {\n  text-align: center;\n  border: 1px solid black;\n  padding: 10px;\n}\n\n.nopadding {\n  padding: 0px !important;\n}\n\n.name {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n}\n\n.assess-status-red {\n  font-family: \"Ubuntu\" !important;\n  color: #F01313;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-green {\n  font-family: \"Ubuntu\" !important;\n  color: green;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-yellow {\n  font-family: \"Ubuntu\" !important;\n  color: orange;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-lightblue {\n  font-family: \"Ubuntu\" !important;\n  color: #3b45d4;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\nion-card {\n  padding: 10px;\n}\n\n.center-align-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\nion-toolbar {\n  --background: #2176b9;\n  color: white;\n}\n\n.primarytext {\n  color: #2F5387 !important;\n}\n\n.primarylight {\n  background-color: #0FBCDD !important;\n  color: white !important;\n  vertical-align: middle;\n}\n\nth {\n  background-color: #0FBCDD !important;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n}\n\ntd {\n  text-align: center;\n  padding: 5px 10px !important;\n}\n\n.eg {\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n.contentbody {\n  padding-left: 50px;\n  padding-right: 50px;\n  width: 150mm;\n  text-align: center;\n  margin: 0 auto;\n  padding-top: 7%;\n}\n\n.wapper {\n  text-align: center;\n  margin: 0 auto;\n  width: 175mm;\n  height: 955px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('bg-02-01.jpg');\n}\n\n.innerwapper {\n  padding-top: 50px;\n}\n\n.tamilnadulogo {\n  float: left;\n}\n\n.ennum {\n  float: right;\n}\n\n.sublinetext {\n  font-size: 0.5rem;\n}\n\n.borderb {\n  border-bottom: 1px solid #CECECE;\n}\n\n.classtype {\n  font-size: 11px;\n  padding: 4px;\n}\n\n.classtype2 {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFERTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIRTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhFO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTU47O0FBSEU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIRTtFQUNFLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSxtQkFBQTtBQU1KOztBQUhFO0VBRUksa0JBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7QUFJTjs7QUFDRTtFQUVFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUVDLGFBQUE7QUFETDs7QUFJRTtFQUNFLHVCQUFBO0FBREo7O0FBY0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEo7O0FBY0U7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWFFO0VBQ0UsZ0NBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWTjs7QUFZRTtFQUNFLGdDQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVE47O0FBV0U7RUFDRSxnQ0FBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJOOztBQWVFO0VBQ0UsYUFBQTtBQVpKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBWko7O0FBY0U7RUFDRSxlQUFBO0FBWEo7O0FBYUU7RUFDRSxtQkFBQTtBQVZKOztBQWFFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBVko7O0FBY0U7RUFDRSx5QkFBQTtBQVhKOztBQWFBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBVko7O0FBWUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVEo7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0FBUko7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0MsY0FBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBR0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7QUFQSjs7QUFTQTtFQUNJLGlCQUFBO0FBTko7O0FBUUE7RUFBZSxXQUFBO0FBSmY7O0FBS0E7RUFBTyxZQUFBO0FBRFA7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7QUFFSjs7QUFDQTtFQUNFLGVBQUE7RUFDQyxZQUFBO0FBRUg7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoic3VtbWF0aXZlLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLm5vdGUtYXNzZXNze1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZyB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbiAgLnNlbGVjdC1sZWFybmluZy1vdXRjb21le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMTkwLCAxOTAsIDAuNDIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZWxlY3QtbGVhcm5pbmctb3V0Y29tZS1vcHRpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zdHVkZW50LWFzc2Vzcy1ib3h7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5hc3Nlc3MtaW1nLWJveHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIH1cclxuICAuYXNzZXNzLWltZ3tcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTNweDtcclxuXHJcbiAgfVxyXG4gIC5zZWFyY2gtYm94e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJveC1pbnB1dHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICB9XHJcbiAgXHJcbiAgYiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICM0NUIzNTY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgLy8gZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgLy8gZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAvLyBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcbiAgdGFibGV7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgXHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAvLyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvLyBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLm5vcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLy8gICB0YWJsZSB7XHJcbi8vICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7ICAgXHJcbi8vIH1cclxuLy8gICB0aCx0ZCB7XHJcbi8vICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICNCQ0JDQkM7XHJcbi8vICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbi8vIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcblxyXG4gIC5hc3Nlc3Mtc3RhdHVzLXJlZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGMDEzMTM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWdyZWVue1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmFzc2Vzcy1zdGF0dXMteWVsbG93e1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWxpZ2h0Ymx1ZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiKDU5LCA2OSwgMjEyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbi8vICAgaW9uLWNvbnRlbnR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VubnVtLWV6aHV0aHVtL3NjcmVlbi1iYWNrLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdFxyXG4vLyAgIH1cclxuXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzIxNzZiOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICAucHJpbWFyeXRleHR7XHJcbiAgICBjb2xvcjojMkY1Mzg3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByaW1hcnlsaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkJDREQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZCQ0REICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IWltcG9ydGFudDtcclxufVxyXG4uZWd7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLmNvbnRlbnRib2R5IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNTBtbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG59XHJcbi53YXBwZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxNzVtbTtcclxuICAgIGhlaWdodDogOTU1cHg7XHJcbiAgICAvLyB3aWR0aDogMTAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZW5udW0tZXpodXRodW0vYmctMDItMDEuanBnJyk7XHJcbn1cclxuLmlubmVyd2FwcGVye1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG4udGFtaWxuYWR1bG9nb3tmbG9hdDogbGVmdDt9XHJcbi5lbm51bXtmbG9hdDpyaWdodDt9XHJcbi5zdWJsaW5ldGV4dHtcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbn1cclxuLmJvcmRlcmJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NFQ0VDRTtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5jbGFzc3R5cGV7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5jbGFzc3R5cGUye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBwYWRkaW5nOiAzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 45527:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/menu\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Summative Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-select placeholder=\"Select Term\" (ionChange)=\"termSelection($event)\">\r\n        <ion-select-option *ngFor=\"let term of obj | keyvalue\" [value]=\"term.key\">{{term.key | titlecase}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-select [disabled]=\"!term\" placeholder=\"Select Chart\" (ionChange)=\"selectChart($event)\">\r\n        <ion-select-option value=\"Class\">CCE REPORTS</ion-select-option>\r\n        <ion-select-option value=\"Level\">STUDENT REPORT CARD</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n\r\n\r\n\r\n  <ion-card style=\"    box-shadow: none;\">\r\n    <ion-list *ngIf=\"chartType == 'Class'\">\r\n      <div *ngFor=\"let val of chartData\">\r\n        <ion-button class=\"Class{{val.classid}}\"\r\n          style=\"margin: 15px auto;border-radius: 15px;border:1px solid #353fa1;overflow:hidden; display: flex;\"\r\n          expand=\"full\" (click)=\"Onnextnavigate(val)\">\r\n          <div style=\"width:100%;display: flex;justify-content: space-around;align-items: center;\">\r\n\r\n            <div>{{val.name}} - {{val.subject}}</div>\r\n            <div slot=\"end\"></div>\r\n\r\n          </div>\r\n        </ion-button>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"chartType == 'Level' && !showReportCard\">\r\n      <div *ngFor=\"let val of chartData\">\r\n          <ion-button class=\"Class{{val.classid}}\" style=\"margin: 15px auto;border-radius: 15px;border:1px solid #353fa1;overflow:hidden; display: flex;\" expand=\"full\" (click)=\"Onnextnavigate(val)\">\r\n            <div style=\"width:100%;display: flex;justify-content: space-around;align-items: center;\">\r\n              \r\n              <div >{{val.name}}</div>\r\n              <div slot=\"end\"></div>\r\n              \r\n            </div>\r\n          </ion-button>\r\n        </div>\r\n    </ion-list>\r\n  </ion-card>\r\n<div *ngIf=\"showReportCard\">\r\n  <ion-button style=\"margin: 15px auto;border-radius: 15px;width: 15%;\r\n  margin-left: 17px;\" expand=\"full\" (click)=\"showReportCard=false\">Back</ion-button>\r\n  <table >\r\n    <tr>\r\n      <th>NAMES</th>\r\n      <th>STATUS</th>\r\n      <!-- <th>GROUP</th> -->\r\n    </tr>\r\n    <tr *ngFor=\"let item of studentList\">\r\n      <td class=\"name\">\r\n        {{item.name}}   ({{item.student_id}})\r\n      </td>\r\n      <td >\r\n        <ion-button style=\"margin: 15px auto;border-radius: 15px;\r\n        margin-left: 17px;\" expand=\"full\" (click)=\"generatePdfLevelWise(item,'English')\">Pdf English</ion-button>\r\n        <ion-button style=\"margin: 15px auto;border-radius: 15px;\r\n        margin-left: 17px;\" expand=\"full\" (click)=\"generatePdfLevelWise(item,'Tamil')\">Pdf Tamil</ion-button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n  <div *ngIf=\"classchart\" style=\"padding-top:100%\">\r\n    <div id=\"classchart\">\r\n  \r\n\r\n\r\n      <table border=\"1\">\r\n\r\n        <tr>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">S.No</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;width: 20px;\">Name of the\r\n            Student</th>\r\n          <th colspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(A)\r\n            Activity<br>(Marks Out of 10)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(A)<br>(Total 20)\r\n          </th>\r\n          <th colspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(B)\r\n            Activity<br>(Marks Out of 10)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(B)<br>(Total 20)\r\n          </th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA TOTAL<br>(OUT OF\r\n            40)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">SA TOTAL<br>(OUT OF\r\n            60)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">TOTAL MARKS<br>(OUT\r\n            OF 100)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">TOTAL GRADES\r\n          </th>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">I</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">II</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">I</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">II</td>\r\n        </tr>\r\n        <tr *ngFor=\"let data of studentList;let i = index\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{data.name}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forab}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.foraa}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.fora}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forba}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forbb}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forb}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{addingAandB(data.fora,data.forb)}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.suma}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\"></td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\"></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div id=\"chard\">\r\n\r\n  </div>\r\n\r\n  <ion-card-content *ngIf=\"levelwise\"  style=\"padding-top:70%\">\r\n    <div id=\"levelwiseboolean\" style=\"text-align:center;padding-bottom: 10px; width: 175mm;\r\n    height: 955px;\">\r\n      <div class=\"wapper\" id=\"myDiv\" #myDiv style=\"padding-left: 25mm;padding-right: 25mm;\">\r\n        <ion-grid id=\"myDivs\" style=\"border: 0px solid black;width: 100%;padding-top: 40px;\">\r\n          <ion-row style=\"border: 0px solid black;\">\r\n            <ion-col size=\"3\">\r\n              <div><img width=\"60% !important\" src=\"../../../../../assets/images/ennum-ezhuthum/Tamilnadulogo.png\"></div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n              <h3 style=\"color: white;\">{{schoolName}}</h3>\r\n              <!-- <small>Sembakkam, Tambaram, Chengalpattu District</small> -->\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <div><img width=\"60% !important\" src=\"../../../../../assets/images/ennum-ezhuthum/ennumezhuthumlogo.png\"></div>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row>\r\n            <!-- <ion-col size=\"5\" style=\"top: 20px;\r\n            text-align: center;\">\r\n              <div><img width=\"50%\" src=\"../../../../../assets/images/ennum-ezhuthum/1.jpeg\"></div>\r\n            </ion-col> -->\r\n            <ion-col  style=\"text-align: center;\">\r\n              <h2 class=\"text-center text-dark pt-3 display-6 primarytext\">{{slectedObject.reportcard}}</h2>\r\n              <!-- <h4 class=\"text-center text-dark fs-6 primarytext\">&nbsp;</h4> -->\r\n              <h4 class=\"text-center text-dark fs-6 primarytext\">{{term}} (2022-2023)</h4>\r\n              <!-- <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Name of student</b>: <span style=\"font-size: 13px;\">{{singlStudent.name}}</span></div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Class & Section</b>: <span style=\"font-size: 13px;\">{{singlStudent.class}} - {{singlStudent.section}}</span> </div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">EMIS ID</b>: <span style=\"font-size: 13px;\">{{singlStudent.student_id}}</span> </div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Attendance</b>: <span style=\"font-size: 13px;\"></span></div> -->\r\n              <div  class=\"row\">\r\n                <div style=\"text-align: center;\" class=\"borderb\">\r\n                    <p style=\"  float: left;\r\n                    text-align: left;\r\n                    width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.studentname}}</p>\r\n                    <p style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.name}}</p>\r\n                </div>\r\n                <div style=\"text-align: center;\" class=\"borderb\">\r\n                  <div style=\"float: left;\r\n                  text-align: left;\r\n                  width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.class}}</div>\r\n                  <div style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.class}} - {{singlStudent.section}}</div>\r\n              </div>\r\n              <div style=\"text-align: center;\" class=\"borderb\">\r\n                <div style=\" float: left;\r\n                text-align: left;\r\n                width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.emis}}</div>\r\n                <div style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.student_id}}</div>\r\n            </div>\r\n            <div style=\"text-align: center;\" class=\"borderb\">\r\n              <div style=\"float: left;\r\n              text-align: left;\r\n              width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.attend}}</div>\r\n              <div style=\" text-align: right;\" [ngClass]=\"classtype\">&nbsp;</div>\r\n          </div>\r\n               </div> \r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row style=\"padding-top: 20px;\">\r\n            <ion-col>\r\n              <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.part1}}</h5>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\" >\r\n                <thead style=\"font-weight:bold;\r\n                text-align:center;\r\n                background: #0FBCDD;\r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.subject}} </td>\r\n                    <td class=\"nopadding\">{{slectedObject.level}} </td>\r\n                    <td class=\"nopadding\">FA (A)\r\n                      - Total\r\n                      (20) </td>\r\n                    <td class=\"nopadding\">FA (B)\r\n                      - Total\r\n                      (20)</td>\r\n                    <td class=\"nopadding\"> SA\r\n                      (60) </td>\r\n                    <td class=\"nopadding\">{{slectedObject.total}}</td>\r\n                    <td class=\"nopadding\">{{slectedObject.grade}}</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n  \r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.tamil}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.tamilgroup}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.foratamil}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbtamil}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumatamil}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.eng}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.englishgroup}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.foraenglish}} </td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbenglish}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumaenglish}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.maths}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.mathsgroup}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.foramaths}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbmaths}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumamaths}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\" >\r\n                <tbody style=\"\r\n                text-align:center;\r\n               \r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\" style=\" background: #0FBCDD;\" >{{slectedObject.grad}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\" style=\" background: #0FBCDD;\" >{{slectedObject.per}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n             \r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n           \r\n          <ion-col >\r\n            <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.part2}}</h5>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\">\r\n                <thead style=\"font-weight:bold;\r\n                text-align:center;\r\n                background: #0FBCDD;\r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.area}}\t\t\t </td>\r\n                    <td class=\"nopadding\">{{slectedObject.point}}\t</td>\r\n                    <td class=\"nopadding\">{{slectedObject.gra}}</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n  \r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.skills}}\t\t\t </td>\r\n                    <td class=\"nopadding\">\t\t\t</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.attitude}}\t\t\t </td>\r\n                    <td class=\"nopadding\">\t\t\t</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.wellness}}\t\t </td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.curricuilar}}\t\t\t\t </td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.remark}}</h5>\r\n              <div style=\"height:50px;border:1px solid #DEE2E6\"></div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top: 50px;\">\r\n            <ion-col>\r\n              <h3>{{slectedObject.sign}}</h3>\r\n            </ion-col>\r\n            <ion-col>\r\n              \r\n            </ion-col>\r\n            <ion-col>\r\n              <h3>{{slectedObject.hsign}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </ion-card-content>\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-report_summative-report_module_ts-es2015.js.map