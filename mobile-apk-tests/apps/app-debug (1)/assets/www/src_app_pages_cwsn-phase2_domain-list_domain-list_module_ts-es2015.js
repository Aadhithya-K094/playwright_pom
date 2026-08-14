(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_domain-list_domain-list_module_ts"],{

/***/ 22640:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/domain-list/domain-list-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainListPageRoutingModule": function() { return /* binding */ DomainListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _domain_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain-list.page */ 54791);




const routes = [
    {
        path: '',
        component: _domain_list_page__WEBPACK_IMPORTED_MODULE_0__.DomainListPage
    }
];
let DomainListPageRoutingModule = class DomainListPageRoutingModule {
};
DomainListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DomainListPageRoutingModule);



/***/ }),

/***/ 12854:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/domain-list/domain-list.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainListPageModule": function() { return /* binding */ DomainListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _domain_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain-list-routing.module */ 22640);
/* harmony import */ var _domain_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain-list.page */ 54791);







let DomainListPageModule = class DomainListPageModule {
};
DomainListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _domain_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DomainListPageRoutingModule
        ],
        declarations: [_domain_list_page__WEBPACK_IMPORTED_MODULE_1__.DomainListPage]
    })
], DomainListPageModule);



/***/ }),

/***/ 54791:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/domain-list/domain-list.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainListPage": function() { return /* binding */ DomainListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_domain_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./domain-list.page.html */ 30229);
/* harmony import */ var _domain_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain-list.page.scss */ 3449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);













let DomainListPage = class DomainListPage {
    constructor(router, http, route, cwsnService, alertService, sqliteDB, ionicstorage, userSessionService) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.cwsnService = cwsnService;
        this.alertService = alertService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.userSessionService = userSessionService;
        this.tabsData = 1;
        // domainList: Array<{ 'label': any, 'value': any }> = [
        //   { label: 'Birth & Developmental History', value: '1' },
        //   { label: 'Senses', value: '2' },
        //   { label: 'Cognition & Sensory', value: '3' },
        //   { label: 'Commu.& Social Skill', value: '4' },
        //   { label: 'Assisstive Device', value: '5' }
        // ];
        this.domainList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe("en-US");
        this.EMIS_No = "";
    }
    ngOnInit() {
        // this.assessment();
    }
    ionViewDidEnter() {
        this.user_id = this.userSessionService.emis_username();
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
        this.domainList = [];
        console.log("title", this.title, "mode", this.mode);
        this.ionicstorage.getData("getUserDetailsCwsn").then((userData) => {
            console.log("userData", userData);
            if (userData == 1) {
                this.usertype = "SpecialEdu";
            }
            else {
                this.usertype = "Therapist";
            }
            console.log("usertype", this.usertype);
        });
        this.ionicstorage.getData("studentData").then((studData) => {
            debugger;
            console.log("studData", studData);
            this.studentData = studData;
            this.studName = studData.Name;
            this.schlId = studData.SchlId;
            this.studId = studData.studId;
            this.EMIS_No = studData.EMIS_No;
            console.log("studId", this.studId);
            this.currentDate = this.pipe.transform(new Date(), "yyyy-MM-dd");
            console.log("currentDate", this.currentDate);
            // this.getStuScreenDet();
            this.checklocalDB();
        });
        // this.checkDomainLocal();
    }
    checklocalDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("checkLocalDB");
            let query;
            query = 'SELECT * FROM stud_fun_assessment' +
                ' WHERE user_id = "' + this.user_id + '"' +
                ' AND stud_id = "' + this.studId + '"';
            yield this.sqliteDB.executeQuery(query).then((res) => {
                console.log("checkLocalDB ass res", res, "length", res.rows.length);
                if (res.rows.length > 0) {
                    console.log("Inside if");
                    let asstemp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        asstemp.push(res.rows.item(i));
                    }
                    this.assStudDetails = asstemp;
                    console.log("getFormArray", this.assStudDetails);
                    // this.checkDomainLocal();
                    this.checkAssementLocal();
                }
                else {
                    console.log("Inside else ");
                    this.assStudDetails = [];
                    this.getDatafromServer();
                    // this.getFormArray();
                }
            });
        });
    }
    checkDomainLocal() {
        debugger;
        console.log("inside checkDomainLocal");
        let domainSelquery = "SELECT * FROM stu_domain_status" +
            ' WHERE user_id = "' +
            this.user_id +
            '"' +
            ' AND stud_id = "' +
            this.studId +
            '"';
        console.log("domainSelquery", domainSelquery);
        this.sqliteDB.executeQuery(domainSelquery).then((res) => {
            console.log("domain local data=", res, "local DB length", res.rows.length);
            if (res.rows.length > 0) {
                let temp = [];
                for (var i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                this.domainList = temp;
                console.log("domainList", this.domainList);
                // console.log('subDomain data', data, 'student disability type', this.studentData.screen_disability)
                // console.log('data[i].disability_type', (JSON.parse("[" + data[i].disability_type + "]")), 'this.studentData.screen_disability',JSON.parse("[" + this.studentData.screen_disability + "]"))
                let first = this.domainList.find((key) => key.d_status == 1 || key.d_status == 3);
                // Check if the current mark is even
                console.log("first", first);
                console.log("this.domainList after", this.domainList);
                this.domainList.forEach((element, index) => {
                    console.log("insert element", element, "d_status", element.d_status, "index", index);
                    if (element.domain_id == first.domain_id ||
                        element.d_status == "2" ||
                        element.d_status == "3") {
                        console.log("Inside enabled");
                        element.enabled = 1;
                    }
                    else {
                        console.log("Inside disabled");
                        const statuses = this.domainList.map((el) => el.d_status);
                        // Find the last index of 3 or 2
                        const lastIndexOf3Or2 = statuses.reduceRight((acc, status, index) => {
                            if (acc === -1 && (status === 3 || status === 2)) {
                                return index;
                            }
                            return acc;
                        }, -1);
                        console.log("lastIndexOf3Or2", lastIndexOf3Or2);
                        if (index == lastIndexOf3Or2 + 1) {
                            element.enabled = 1;
                        }
                        else {
                            element.enabled = 0;
                        }
                    }
                });
            }
            else {
                this.checkAssementLocal();
            }
        });
    }
    getDatafromServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("inside getDatafromServer");
            this.cwsnService
                .getStudAssDetails(this.user_id, this.studId)
                .subscribe((res) => {
                console.log("getStudAssDetails", res);
                if (res.dataStatus == true) {
                    if (res.result.length > 0) {
                        this.insertStudAssDataLocal(res.result);
                    }
                    else {
                        // this.alertService.warning('No Data Found');
                        // return
                    }
                }
                else {
                    // this.checkDomainLocal();
                    this.checkAssementLocal();
                    // this.alertService.warning('No Data Found');
                }
            });
        });
    }
    insertStudAssDataLocal(submitArray) {
        let delQuery = "DELETE FROM stud_fun_assessment" +
            ' WHERE user_id = "' +
            this.user_id +
            '"' +
            ' AND stud_id = "' +
            this.studId +
            '"';
        console.log("submitArray", submitArray);
        this.sqliteDB.executeQuery(delQuery).then((res) => {
            // if (res) {
            console.log("Inside delete");
            let sqlArray = [];
            submitArray.forEach((element) => {
                sqlArray.push([
                    "INSERT INTO stud_fun_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,q_id,q_val,date,q_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    [
                        null,
                        element.IndxId,
                        element.userId,
                        element.schlId,
                        element.studId,
                        element.domainId,
                        element.domainName,
                        element.subDomainId,
                        element.qstnId,
                        element.qstnVal,
                        this.pipe.transform(new Date(), "yyyy-MM-dd"),
                        3,
                    ],
                ]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                console.log("insertres", insertres);
                // this.insertStudDomainlocal();
                this.checklocalDB();
                // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });
            });
            // }
        });
    }
    checkAssementLocal() {
        console.log("checkAssementLocal");
        let query = "SELECT * FROM fun_assessment_qstns" +
            ' WHERE user_name = "' +
            this.usertype +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res.rows.length > 0) {
                let temp = [];
                for (var i = 0; i < res.rows.length; i++) {
                    console.log("row disablity item", res.rows.item(i).disability_type, "screen_disability", this.studentData.screen_disability);
                    // let isDisabilityFound = JSON.parse("[" + res.rows.item(i).disability_type + "]").some(ai => this.studentData.screen_disability.includes(ai));
                    const aV = res.rows
                        .item(i)
                        .disability_type.split(",")
                        .map((e) => +e);
                    const bV = this.studentData.screen_disability
                        .split(",")
                        .map((e) => +e);
                    let isDisabilityFound = bV.some((v) => aV.indexOf(v) !== -1);
                    console.log("isDisabilityFound", isDisabilityFound);
                    if (isDisabilityFound == true) {
                        temp.push(res.rows.item(i));
                    }
                }
                let questionList = temp;
                var helper = {};
                let domainListArray = questionList.reduce(function (r, o) {
                    var key = o.domain_name + "-" + o.domain_id;
                    if (!helper[key]) {
                        helper[key] = Object.assign({}, o); // create a copy of o
                        r.push(helper[key]);
                    }
                    else {
                        helper[key].used += o.used;
                        helper[key].instances += o.instances;
                    }
                    return r;
                }, []);
                console.log("domainListArray", domainListArray);
                if (domainListArray.length > 0) {
                    this.insertStudDomainlocal(domainListArray);
                }
            }
            else {
                this.assessment();
            }
        });
    }
    assessment() {
        console.log("inside assessment");
        let assessment_json = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.cwsn_asses_ques;
        this.http.get(assessment_json).subscribe((data) => {
            console.log("Assessment json", data.cwsn_asses_ques, "assessment_json length", data.cwsn_asses_ques.length);
            // this.domainList = [...new Set(data.cwsn_asses_ques.map(item => item.domain_name))];
            // console.log('result', this.domainList);
            if (data.cwsn_asses_ques.length > 0) {
                this.insertData(data.cwsn_asses_ques);
            }
            else {
                this.alertService.warning("No Schools Found");
            }
            // console.log('domainList',this.domainList);
        });
    }
    insertData(list) {
        console.log('insertData list', list);
        let delQuery = 'DELETE FROM fun_assessment_qstns' +
            ' WHERE user_id = "' + this.user_id + '"' +
            ' AND StuId = "' + this.studId + '"';
        this.sqliteDB.executeQuery(delQuery).then((res) => {
            let sqlArray = [];
            list.forEach((element) => {
                console.log("insert element", element);
                element.screen = 0;
                sqlArray.push([
                    "INSERT INTO fun_assessment_qstns VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [
                        null,
                        this.user_id,
                        element.user,
                        1,
                        "",
                        element.domain_idx_id,
                        element.domain_name,
                        element.subdomain_idx_id,
                        element.sub_domain,
                        element.q_id,
                        element.q_format,
                        element.q_text_eng,
                        element.q_text_tam,
                        element.choice_id,
                        element.option_type,
                        element.choice_text_eng,
                        element.choice_text_tam,
                        element.q_status,
                        element.disability_type,
                        element.question_intervension,
                        element.choice_intervension,
                    ],
                ]);
                console.log("sqlArray", sqlArray);
            });
            console.log("sqlArray", sqlArray);
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                console.log(insertres, "insertres");
                this.checkAssementLocal();
            });
        });
    }
    insertStudDomainlocal(domainArray) {
        console.log("insertStudDomainlocal domainArray", domainArray);
        let delQuery = "DELETE FROM stu_domain_status" +
            ' WHERE user_id = "' +
            this.user_id +
            '"' +
            ' AND stud_id = "' +
            this.studId +
            '"';
        this.sqliteDB.executeQuery(delQuery).then((res) => {
            // if (res) {
            console.log("Inside domain delete");
            let sqlArray = [];
            domainArray.forEach((element) => {
                let domIndex = this.assStudDetails.filter((key) => key.domain_id == element.domain_id &&
                    (key.q_val != "" || key.q_val != null || key.q_val != undefined));
                console.log("domIndex", domIndex);
                let status_val;
                if (domIndex.length > 0) {
                    console.log("domIndex[0].q_status", domIndex[0].q_status);
                    if (domIndex[0].q_status == 3) {
                        console.log("insert status 3");
                        status_val = 3;
                    }
                    else {
                        console.log("insert status 2");
                        status_val = 2;
                    }
                }
                else {
                    console.log("insert status 1");
                    status_val = 1;
                }
                sqlArray.push([
                    "INSERT INTO stu_domain_status (Id,user_id,schl_id,stud_id,domain_id,domain_name,d_status,inter_status) VALUES (?,?,?,?,?,?,?,?)",
                    [
                        null,
                        this.user_id,
                        this.schlId,
                        this.studId,
                        element.domain_id,
                        element.domain_name,
                        status_val,
                        0,
                    ],
                ]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                console.log("insertres", insertres);
                this.checkDomainLocal();
            });
            // }
        });
    }
    getTabs(event) {
        this.tabsData = event.target.value;
    }
    navigateSchoolList(val, i) {
        this.tabsData = 1;
        if (this.indexVal == i) {
            this.indexVal = "";
        }
        else {
            this.indexVal = i;
        }
    }
    // navigatenextsegment(val,i) {
    //   this.tabsData = 2
    //   if(this.indexVal == i) {
    //     this.indexVal = ''
    //   } else {
    //     this.indexVal = i
    //   }
    // }
    // navigatelastsegment(val,i) {
    //   this.tabsData = 3
    //   if(this.indexVal == i) {
    //     this.indexVal = ''
    //   } else {
    //     this.indexVal = i
    //   }
    // }
    goToFunctionalAssessment(item) {
        console.log("item", item, "item.enabled", item.enabled);
        // if (item.enabled == 1) {
        this.router.navigate(["/tabs/assessment-questions"], {
            queryParams: { item: JSON.stringify(item) },
            skipLocationChange: true,
        });
        // }
    }
    navigateBack() {
        this.router.navigate(["/tabs/ca-student-details"], {
            queryParams: {
                item: JSON.stringify(this.studentData),
                title: this.title,
                mode: this.mode,
            },
        });
    }
};
DomainListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService }
];
DomainListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-domain-list",
        template: _raw_loader_domain_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_domain_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DomainListPage);



/***/ }),

/***/ 3449:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/domain-list/domain-list.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 15px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n  border-radius: 15px;\n}\n\n.size {\n  font-size: 10px;\n  text-transform: capitalize;\n  font-weight: 600;\n}\n\n.card-align {\n  min-height: auto;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #FF79B7;\n  border-radius: 15px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  text-align: end;\n  padding: 3px;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .icon-outer .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 20px;\n}\n\nion-label .schoolnames {\n  font-size: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.align {\n  text-align: center;\n}\n\n.box {\n  border: 1px #b9b8b8;\n  background-color: #ece4e4;\n  display: flex;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin: 1px;\n}\n\n.box:host {\n  --background:var(--ion-background-color, #532044);\n}\n\n.text {\n  font-size: 12px;\n  color: #525252;\n  font-weight: bold;\n  font-family: none;\n}\n\n.card-align .cards .card-design {\n  border-radius: 15px;\n  padding: 20px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n  border-left: 6px solid #8B66B3;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.btn {\n  text-align: center;\n  border-radius: 10px;\n}\n\n.btn-style {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.download {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n  border: 2px #8B66B3;\n  background-color: white !important;\n  font-size: smaller;\n}\n\n.icon-outer {\n  padding: 10px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 13px;\n}\n\n.icon-outer .icon-inner {\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.icon-outer .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFFRSxnQkFBQTtBQUFGOztBQUlNO0VBQ0ksOENBQUE7RUFLQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFOVjs7QUFVVTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUmQ7O0FBVWM7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUmxCOztBQVlVO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FBWmQ7O0FBY2M7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVpsQjs7QUFlYztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYmhCOztBQW1CTTtFQUNJLGFBQUE7QUFqQlY7O0FBb0JNO0VBQ0ksbUJBQUE7QUFsQlY7O0FBK0JBO0VBQ0UsZUFBQTtBQTVCRjs7QUErQkE7RUFDRSxZQUFBO0FBNUJGOztBQStCQTtFQUNFLGtCQUFBO0FBNUJGOztBQStCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBN0JGOztBQWlDQTtFQUNFLGlEQUFBO0FBOUJGOztBQWlDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTlCRjs7QUFzQ007RUFHSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBckNWOztBQXdDVTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXRDZDs7QUF3Q2M7RUFDSSxlQUFBO0FBdENsQjs7QUF5Q2M7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUF2Q2xCOztBQTRDVTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBMUNkOztBQTRDYztFQUNJLFdBQUE7RUFDQSxZQUFBO0FBMUNsQjs7QUErQ007RUFDSSxhQUFBO0VBRUEsdUNBQUE7RUFDQSwwQ0FBQTtBQTlDVjs7QUFvREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBakRGOztBQXFEQTtFQUNFLFlBQUE7RUFJQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFyREY7O0FBdURBO0VBQ0UsWUFBQTtFQUNDLFlBQUE7RUFDRCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXBERjs7QUFnRkE7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBOUVGOztBQStFRTtFQUVFLGVBQUE7RUFDQSxtQ0FBQTtBQTlFSjs7QUFnRkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTlFSiIsImZpbGUiOiJkb21haW4tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuJWJhc2UtbGF5b3V0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2l6ZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG5cclxuICAuY2FyZHMge1xyXG4gICAgICAvLyBwYWRkaW5nOiAxMHB4OyBzZWNvbmRheS1jb2xvclxyXG4gICAgICAuY2x1c3Rlci1kZXNpZ24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAvLyBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1sZWZ0KTtcclxuICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIC8vIG1hcmdpbjogMTJweCAwO1xyXG4gICAgICAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgICAgLmNsdXN0ZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzlCNztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLW91dGVyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgIC5pY29uLWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyAlY2FyZC1sYXlvdXR7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTVweDtcclxuLy8gICB9XHJcblxyXG5pb24tbGFiZWwgLnNjaG9vbG5hbWVzIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uYm94IHtcclxuICBib3JkZXI6IDFweCByZ2IoMTg1LCAxODQsIDE4NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjI4LCAyMjgpO1xyXG4gIDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgbWFyZ2luOiAxcHg7XHJcblxyXG59XHJcblxyXG4uYm94Omhvc3Qge1xyXG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzUzMjA0NCk7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM1MjUyNTI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcblxyXG4gIC5jYXJkcyB7XHJcbiAgICAgIC5jYXJkLWRlc2lnbiB7XHJcbiAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IHB4O1xyXG4gICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzhCNjZCMztcclxuICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG5cclxuICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgLnRvdGFsQ291bnRMYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zY2hvb2xuYW1lcyB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltYWdlLW91dGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBkYXJrYmx1ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1zdHlsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uZG93bmxvYWR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGJvcmRlcjogMnB4ICM4QjY2QjM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHNtYWxsZXJcclxufVxyXG5cclxuLy8gLmhlYWQge1xyXG4vLyAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbCBwIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gaDUge1xyXG4vLyAgIGNvbG9yOiBncmVlbjtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLy8gLnBvcGNhcmQge1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuLy8gfVxyXG4vLyBpb24tYmFja2Ryb3Age1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLmNoZWNrYm94e1xyXG4vLyAgIC0tY2hlY2ttYXJrLWNvbG9yOndoaXRlO1xyXG4vLyB9XHJcblxyXG4uaWNvbi1vdXRlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxuICAuaWNvbi1pbm5lcntcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 30229:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/domain-list/domain-list.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studName}} ({{EMIS_No}})</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <div class=\"back\"> -->\r\n  <!-- <ion-card>\r\n    <ion-segment value=\"buttons\" (click)=\"getTabs($event)\" [(ngModel)]=\"tabsData\">\r\n      <ion-segment-button value=\"1\">\r\n        <ion-label class=\"size\">Functional Assessment</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\">\r\n        <ion-label class=\"size\"> Evaluation and Goal Setting</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"3\">\r\n        <ion-label class=\"size\">Intervention</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-card> -->\r\n\r\n\r\n  <ion-card class=\"ion-card-margin\">\r\n    <ion-row style=\"padding:10px !important; color: var(--primary-text-color);\">\r\n      <ion-col size=\"8\">\r\n        <ion-label>Date</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-right\">\r\n        <ion-label>{{currentDate | date:'dd/MM/yyyy'}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"card-align ion-card-margin\" *ngIf=\"domainList?.length != 0\">\r\n    <div class=\"cards\" *ngFor=\"let item of domainList; let i = index\">\r\n      <!-- {{item.enabled}} : enabled   {{item.d_status}} : d_status -->\r\n      <!-- <ion-card class=\"card-design ion-card-margin-top-bottom\" [ngStyle]=\"{'background': item.d_status == 3 ? 'var(--screened-text-color)' : item.d_status == 2 ? 'var(--unscreened-text-color)' : (item.d_status == 1 && item.enabled == '1' ) ? 'var(--seconday-color-change)' : '#E9E9E9', 'color': item.d_status > 1 ? '#000000' : 'var(--primary-text-color)', 'border-left': item.d_status == 3 ? '8px solid var(--screen-border-color)' : item.d_status == 2 ? '8px solid var(--local-border-color)' : (item.d_status == 1 && item.enabled == '1' ) ? '8px solid var(--border-color-left)' : item.enabled != '1' ? '8px solid #808080' : '8px solid var(--border-color-left)'}\">         -->\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\" [ngStyle]=\"{'background': item.d_status == 3 ? 'var(--screened-text-color)' : item.d_status == 2 ? 'var(--unscreened-text-color)' : (item.d_status == 1 && (item.enabled == '1' || item.enabled == '0') ) ? 'var(--seconday-color-change)' : '#E9E9E9', 'color': item.d_status > 1 ? '#000000' : 'var(--primary-text-color)', 'border-left': item.d_status == 3 ? '8px solid var(--screen-border-color)' : item.d_status == 2 ? '8px solid var(--local-border-color)' : (item.d_status == 1 && (item.enabled == '1' || item.enabled == '0') ) ? '8px solid var(--border-color-left)' : item.enabled != '1' ? '8px solid #808080' : '8px solid var(--border-color-left)'}\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"schoolnames\">{{item.domain_name}}</ion-label>\r\n        </div>\r\n        <div class=\"icon-outer\" (click)=\"goToFunctionalAssessment(item)\">\r\n          <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\" *ngIf=\"item.d_status != 3\"></ion-icon>\r\n          <ion-icon *ngIf=\"item.d_status == 3\"\r\n            style=\"width: 24px; height: 24px;\" class=\"icon-inner\"\r\n            [src]=\"item.d_status == 3 ? '../../../../assets/icons/Tick.svg' : ''\"\r\n          ></ion-icon>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <!-- [ngClass]=\"{'class1':condition1, 'class2': condition2, 'class3':condition3}\" -->\r\n  </ion-card>\r\n\r\n  <ion-row *ngIf=\"domainList.length==0\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <ion-label class=\"text-danger\">Domains not found</ion-label>\r\n    </ion-col>\r\n </ion-row>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn-phase2_domain-list_domain-list_module_ts-es2015.js.map