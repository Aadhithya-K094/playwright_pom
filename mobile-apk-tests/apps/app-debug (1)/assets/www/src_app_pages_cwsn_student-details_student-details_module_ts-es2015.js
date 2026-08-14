(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_student-details_student-details_module_ts"],{

/***/ 48872:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/ques-view/ques-view.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuesViewComponent": function() { return /* binding */ QuesViewComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ques_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ques-view.component.html */ 90227);
/* harmony import */ var _ques_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ques-view.component.scss */ 47834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var _refer_screeing_Ques__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../refer-screeing-Ques */ 94784);









let QuesViewComponent = class QuesViewComponent {
    constructor(modalController, cwsnService, sqliteDB, alertService) {
        this.modalController = modalController;
        this.cwsnService = cwsnService;
        this.sqliteDB = sqliteDB;
        this.alertService = alertService;
        this.value = '';
        this.referQues = [];
    }
    ngOnInit() {
        this.value;
        this.referQues = [];
        this.checkLocalDB();
    }
    getQuesList() {
        this.cwsnService.GetRefStudDetil(this.value).subscribe((data) => {
            if (data.dataStatus) {
                this.insertData(data.result);
            }
            else {
                this.alertService.error(data.message);
            }
        }, error => {
        });
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    onSync() {
        let query = 'DELETE FROM ReffCwsn_From_health' +
            ' WHERE StuId = "' + this.value + '"';
        debugger;
        this.sqliteDB.executeQuery(query).then(res => {
            if (res) {
                this.checkLocalDB();
            }
        });
    }
    checkLocalDB() {
        let query = 'SELECT * FROM ReffCwsn_From_health' +
            ' WHERE StuId = "' + this.value + '"';
        this.sqliteDB.executeQuery(query).then(res => {
            this.referQues = [];
            if (res.rows.length > 0) {
                let data = res.rows.item(0);
                for (let i = 0; i < _refer_screeing_Ques__WEBPACK_IMPORTED_MODULE_5__.screenQues.length; i++) {
                    if (data[_refer_screeing_Ques__WEBPACK_IMPORTED_MODULE_5__.screenQues[i].ControlName] == 1) {
                        this.referQues.push(_refer_screeing_Ques__WEBPACK_IMPORTED_MODULE_5__.screenQues[i]);
                    }
                }
            }
            else {
                this.getQuesList();
            }
            ;
        });
    }
    ;
    insertData(list) {
        let sqlArray = [];
        list.forEach(element => {
            debugger;
            sqlArray.push(['INSERT INTO ReffCwsn_From_health VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, this.value, element.head_size_yn, element.back_curve_yn, element.back_bone_yn, element.urinary_tract_infection_yn, element.bowel_mvmt, element.feet_muscular_dystrophy_yn,
                    element.feet_congenital_talepus_yn, element.FeetVitdYn, element.agnormal_htwt_yn, element.heart_shortness_breath_yn, element.limited_life_skills_yn, element.stutter_yn, element.behaviour_yn, element.hand_functions, element.aloof_yn, element.self_harm_yn, element.epilepsy_yn, element.age_approp_Act,
                    element.withdrawn_behavior, element.nervousness_yn, element.adhd_yn, element.Short_and_Long_Site_eye_prob, element.Shape_of_eyeBalls, element.Night_eye_disease]]);
        });
        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
            this.checkLocalDB();
        });
    }
    ;
};
QuesViewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
QuesViewComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
QuesViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ques-view',
        template: _raw_loader_ques_view_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ques_view_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuesViewComponent);



/***/ }),

/***/ 94784:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/refer-screeing-Ques.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "screenQues": function() { return /* binding */ screenQues; }
/* harmony export */ });
const screenQues = [
    {
        "Quest_text": "தலை சிரியதாகவோ (அ) பெரியதாகவோ உள்ளதா?",
        "ControlName": "head_size_yn"
    },
    {
        "Quest_text": "முதுகு வளைவு உள்ளதா?",
        "ControlName": 'back_curve_yn'
    },
    {
        "Quest_text": "முதுகில் நரம்புக்கற்றை வெளியில் நீட்டிக்கொண்டுள்ளதா ?",
        "ControlName": "back_bone_yn"
    },
    {
        "Quest_text": "சிறுநீர் கழிக்கும் போது வலி அல்லது எரிச்சல் உள்ளதா? (Urinary tract infection)",
        "ControlName": "urinary_tract_infection_yn"
    },
    {
        "Quest_text": "தினமும் ஒரு முறையாவது காலை கடன் கழிப்பதில் சிரமம் உள்ளதா?",
        "ControlName": 'bowel_mvmt'
    },
    {
        "Quest_text": "நடக்கும் போதும், படிகளில் ஏறும் போதும் அல்லது ஓடும் போதும் ஏதேனும் குறிப்பிட தக்க சிரமங்கள் உள்ளனவா?(Muscular Dystrophy)",
        "ControlName": "feet_muscular_dystrophy_yn"
    },
    {
        "Quest_text": "பாதங்கள் உட்புறம் வளைந்து உள்ளனவா? (Congenital Talepus)",
        "ControlName": "feet_congenital_talepus_yn"
    },
    {
        "Quest_text": "கால்கள் முழங்காலுக்கு கீழ் உட்பக்கமாக வளைந்து இருக்கிறதா? (Vitamin D Deficiency)",
        "ControlName": "FeetVitdYn"
    },
    {
        "Quest_text": "மிகவும் குள்ளமாகவோ அல்லது மிகவும் எடை குறைவாகவோ உள்ளனரா?",
        "ControlName": "agnormal_htwt_yn"
    },
    {
        "Quest_text": "குழந்தை விளையாடும் பொழுதும், மாடி படிகள் ஏறும் போது மூச்சு திணறல் ஏற்படுகிறதா? (Congenital Heart Disease)",
        "ControlName": "heart_shortness_breath_yn"
    },
    {
        "Quest_text": "குழந்தை, வாழ்க்கை திறன்களான பேச்சு மற்றும் சமூக திறன்கள் குறைந்தவர்களாகவும், பேசாமல் இருப்பது/ குறைவாக பேசுவது / தெளிவற்ற பேச்சு / மற்ற குழந்தைகளுடன் சேர்ந்து விளையாடாமல் இருப்பது போன்ற செயல்பாடுகள் உள்ளனவா ?",
        "ControlName": "limited_life_skills_yn"
    },
    {
        "Quest_text": "சரளமாக பேசுவதில் சிரமம் உள்ளதா? (திக்குவாய் / திணறல்)",
        "ControlName": "stutter_yn"
    },
    {
        "Quest_text": "குழந்தையின் சமீபத்திய செயல்பாடுகளில் மாற்றம் உள்ளதா?",
        "ControlName": "behaviour_yn"
    },
    {
        "Quest_text": "பொருட்களை பிடித்தல், எழுதுதல் போன்ற செயல்பாடுகளில் கைகளை பயன்படுத்த சிரமப்படுகிறாரா ?",
        "ControlName": 'hand_functions'
    },
    // {
    //     "Quest_text": "உட்கார, நிற்க, நடக்க, ஓட அல்லது குதிக்க சிரமப்படுகிறாரா?",
    //     "ControlName": ''
    // },
    {
        "Quest_text": "தனிமையில் இருக்க  விரும்புகிறாரா?",
        "ControlName": "aloof_yn"
    },
    {
        "Quest_text": "தன்னைத்தானே துன்புறுத்திக் கொள்கிறாரா?",
        "ControlName": "self_harm_yn"
    },
    {
        "Quest_text": "வலிப்பு நோய் உள்ளதா?",
        "ControlName": "epilepsy_yn"
    },
    {
        "Quest_text": "அவர்களின் வயதுக்கு ஏற்ற எளிய தினசரிப் பணிகளைச் செய்வதில் சிரமப்படுகிறாரா?",
        "ControlName": "age_approp_Act"
    },
    {
        "Quest_text": "முன்னர் ஆர்வத்தோடு செய்த செயல்களில் இப்பொழுது ஆர்வம் இன்றி காணப்படுகிறாரா ?(withdrawn behaviour)",
        "ControlName": "withdrawn_behavior"
    },
    {
        "Quest_text": "படபடப்புடன்/பதைப்புடன்  காணப்படுகிறாரா? (எ.கா. அடிக்கடி நகம் கடித்தல், சிறுநீர் கழிக்க செல்லுதல், முடியை சுழற்றுதல்)",
        "ControlName": "nervousness_yn"
    },
    {
        "Quest_text": "வகுப்பறையிலோ அல்லது பிற சூழ்நிலைகளிலோ அமர்ந்து கவனிப்பதில் சிரமம் அல்லது மிகை செயல் கோளாறு உள்ளதா? (Attention Deficit Hyperactive Disorder)",
        "ControlName": "adhd_yn"
    },
    {
        "Quest_text": "அருகில் அல்லது தொலைவில் உள்ள பொருட்களைத் தெளிவாகக் காண்பதில் குறைபாடு உள்ளதா?",
        "ControlName": 'Short_and_Long_Site_eye_prob'
    },
    {
        "Quest_text": "மாணவர்கள் படிக்கும்போது ஏதேனும் வரிகளை தவற விடுகிறார்களா? வாசித்த வரிகளையே மீண்டும் வாசிக்கிறார்களா?",
        "ControlName": 'Shape_of_eyeBalls'
    },
    {
        "Quest_text": "நிறங்களைக் கண்டறிவதில் அல்லது மாலை நேரங்களில் பார்வைக் குறைபாடு உள்ளதா?",
        "ControlName": 'Night_eye_disease'
    }
];


/***/ }),

/***/ 48298:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/student-details-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPageRoutingModule": function() { return /* binding */ StudentDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _student_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-details.page */ 67862);





const routes = [
    {
        path: '',
        component: _student_details_page__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPage
    }
];
let StudentDetailsPageRoutingModule = class StudentDetailsPageRoutingModule {
};
StudentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], StudentDetailsPageRoutingModule);



/***/ }),

/***/ 73776:
/*!**********************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/student-details.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPageModule": function() { return /* binding */ StudentDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-details-routing.module */ 48298);
/* harmony import */ var _student_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-details.page */ 67862);
/* harmony import */ var _ques_view_ques_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ques-view/ques-view.component */ 48872);








let StudentDetailsPageModule = class StudentDetailsPageModule {
};
StudentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPageRoutingModule,
        ],
        declarations: [
            _student_details_page__WEBPACK_IMPORTED_MODULE_1__.StudentDetailsPage,
            _ques_view_ques_view_component__WEBPACK_IMPORTED_MODULE_2__.QuesViewComponent
        ]
    })
], StudentDetailsPageModule);



/***/ }),

/***/ 67862:
/*!********************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/student-details.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPage": function() { return /* binding */ StudentDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-details.page.html */ 2365);
/* harmony import */ var _student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-details.page.scss */ 69009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);












let StudentDetailsPage = class StudentDetailsPage {
    // dateOfBirth: any = "2010-01-01T00:00:00";
    constructor(router, formBuilder, route, cwsnService, datePipe, alertService, sqliteDB, alertController, modalController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.cwsnService = cwsnService;
        this.datePipe = datePipe;
        this.alertService = alertService;
        this.sqliteDB = sqliteDB;
        this.alertController = alertController;
        this.modalController = modalController;
        // isDisabled = true;
        this.date = new Date();
        this.showFormValues = true;
        this.nidNumberPattern = "^[T][N][/][A-Z]{3}[/][A-Z]{2,6}[/][0-9]{5,6}$"; // alphanumeric with slash
        this.udidNumberPattern = "^[T][N][0-9]{16}$"; // alpha numeric;
        this.stdDetails = "";
        this.referFromHealth = 0;
        this.isModalOpen = false;
    }
    ngOnInit() {
        // let query = 'drop table cwsn_student_details';
        // this.sqliteDB.executeQuery(query).then(res => {
        // });
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((data) => {
            this.studentData = JSON.parse(data.data);
            // ADD THIS LOG TO SEE WHAT'S COMING
            console.log("========== STUDENT DETAILS RECEIVED ==========");
            console.log("studentData:", this.studentData);
            console.log("studentData.referedfrom:", this.studentData.referedfrom);
            console.log("studentData.allData:", this.studentData.allData);
            console.log("=============================================");
            this.section = this.studentData.clsSec.Sec;
            this.schlId = this.studentData.schId;
            this.studentName = this.studentData.allData.name;
            this.className = this.changeClassNameToRomanLetters(this.studentData.clsSec.Class);
            let id = this.studentData.allData.StuId;
            this.studentId = parseInt(id);
            this.checkLocalDB();
        });
    }
    checkLocalDB() {
        let query = "SELECT * FROM cwsn_student_list" +
            ' WHERE school_key_id = "' +
            this.schlId +
            '"' +
            ' And StuId = "' +
            this.studentId +
            '"';
        // debugger
        this.sqliteDB.executeQuery(query).then((res) => {
            this.form.reset();
            if (res.rows.length > 0) {
                // this.clustoers=[];
                let value = {};
                value = res.rows.item(0);
                this.stdDetails = res.rows.item(0);
                let type = "None";
                this.referFromHealth = this.stdDetails.cwsnStatus;
                if (this.referFromHealth == 1) {
                    type = "Existing CWSN";
                }
                else if (this.referFromHealth == 2) {
                    type = "Directly identified by special educator";
                }
                else if (this.referFromHealth == 3) {
                    type = "Referred from Health Module";
                }
                //  else if(value.Status == 4){
                //   type = 'Referred from PMOA';
                // };
                this.differently_abled = value.differently_abled
                    ? value.differently_abled
                    : "";
                this.showFormValues = true;
                if (this.differently_abled == "0" ||
                    this.differently_abled == "99" ||
                    this.referFromHealth != 1) {
                    this.showFormValues = false;
                }
                value.Status = type;
                this.form.patchValue(value);
                // console.log('after patch', this.form)
                this.form.updateValueAndValidity();
            }
            else {
                this.getStudentDetails(this.studentId);
            }
        });
    }
    initialValidator() {
        this.form = this.formBuilder.group({
            nid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.nidNumberPattern)]),
            udid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.udidNumberPattern)]),
            unique_id_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            da_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
            ScreenedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
        });
    }
    getStudentDetails(id) {
        this.cwsnService
            .getEachStudentDetails(id, this.schlId)
            .subscribe((data) => {
            if (data.dataStatus) {
                let sqlArray = [];
                data.result.forEach((element) => {
                    sqlArray.push([
                        "INSERT INTO cwsn_student_list VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                            null,
                            element.school_id,
                            element.id,
                            element.nid,
                            element.udid,
                            element.IndexId,
                            element.user_id,
                            element.differently_abled,
                            element.ScreenedDate,
                            element.Status,
                            element.da_name,
                            element.userId,
                            3,
                            "",
                        ],
                    ]);
                });
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.checkLocalDB();
                });
            }
            else {
                this.alertService.warning("No data Found");
            }
        });
    }
    onSync() {
        let query = "DELETE FROM cwsn_student_list" +
            ' WHERE school_key_id = "' +
            this.schlId +
            '"' +
            ' And StuId = "' +
            this.studentId +
            '"';
        this.sqliteDB.executeQuery(query).then((res) => {
            if (res) {
                this.checkLocalDB();
            }
        });
    }
    // submitForm() {
    //   // console.log("student data=",this.studentData,'form',this.form)
    //   let schoolId = this.schlId;
    //   let NidNo = this.form.value.nid;
    //   let UdidNo = this.form.value.udid;
    //   this.studentData.NIdNumber = NidNo;
    //   this.studentData.UdidNumber = UdidNo;
    //   if (this.form.valid) {
    //     debugger;
    //     let data = {
    //       records: this.form.value,
    //     };
    //     data.records.StuId = this.studentData.allData.StuId;
    //     let query =
    //       'UPDATE cwsn_student_list SET nid="' +
    //       NidNo +
    //       '", udid="' +
    //       UdidNo +
    //       '", isPost="' +
    //       2 +
    //       '"' +
    //       'WHERE StuId = "' +
    //       this.studentData.allData.StuId +
    //       '"';
    //     this.sqliteDB.update(query).then((res) => {
    //       if (!this.studentData.ScrSts) {
    //         this.router.navigate(
    //           [`/tabs/cwsn/disability-screening/${schoolId}`],
    //           {
    //             queryParams: { data: JSON.stringify(this.studentData) },
    //             skipLocationChange: true,
    //           },
    //         );
    //       } else {
    //         this.alertService.warning("Students is already screened");
    //       }
    //     });
    //     // this.cwsnService.addNidandUdidNumbers(data).subscribe((data) => {
    //     //   if (data.dataStatus) {
    //     //     this.onSync();
    //     //     this.presentAlert("Updated Successfully");
    //     //     this.router.navigate([`/tabs/cwsn/disability-screening/${schoolId}`], { queryParams: { data: JSON.stringify(this.studentData) }, skipLocationChange: true });
    //     //   } else {
    //     //     this.router.navigate([`/tabs/cwsn/disability-screening/${schoolId}`], { queryParams: { data: JSON.stringify(this.studentData) }, skipLocationChange: true });
    //     //   }
    //     // });
    //   } else {
    //     this.alertService.error("Form is Invalid");
    //   }
    // }
    submitForm() {
        let schoolId = this.schlId;
        let NidNo = this.form.value.nid;
        let UdidNo = this.form.value.udid;
        this.studentData.NIdNumber = NidNo;
        this.studentData.UdidNumber = UdidNo;
        // ADD referedfrom if not already there
        if (!this.studentData.referedfrom && this.stdDetails) {
            this.studentData.referedfrom = this.stdDetails.referedfrom;
        }
        console.log("========== SUBMIT FORM - NAVIGATING ==========");
        console.log("referedfrom being passed:", this.studentData.referedfrom);
        console.log("=============================================");
        if (this.form.valid) {
            let query = 'UPDATE cwsn_student_list SET nid="' +
                NidNo +
                '", udid="' +
                UdidNo +
                '", isPost="' +
                2 +
                '"' +
                'WHERE StuId = "' +
                this.studentData.allData.StuId +
                '"';
            this.sqliteDB.update(query).then((res) => {
                this.router.navigate([`/tabs/cwsn/disability-screening/${schoolId}`], {
                    queryParams: { data: JSON.stringify(this.studentData) },
                    skipLocationChange: true,
                });
            });
        }
        else {
            this.alertService.error("Form is Invalid");
        }
    }
    submitForm2() {
        this.router.navigate(["/tabs/cwsn-questions"]);
    }
    goBack() {
        let schoolId = parseInt(this.studentData.SchlId);
        // console.log(schoolId);
        // console.log(this.studentData);
        this.router.navigate([`/tabs/cwsn/class-student-list/${schoolId}`], {
            queryParams: { data: JSON.stringify(this.studentData) },
            skipLocationChange: true,
        });
    }
    changeClassNameToRomanLetters(element) {
        if (element.Class === "1") {
            element.Class = "I";
        }
        else if (element.Class === "2") {
            element.Class = "II";
        }
        else if (element.Class === "3") {
            element.Class = "III";
        }
        else if (element.Class === "4") {
            element.Class = "IV";
        }
        else if (element.Class === "5") {
            element.Class = "V";
        }
        else if (element.Class === "6") {
            element.Class = "VI";
        }
        else if (element.Class === "7") {
            element.Class = "VII";
        }
        else if (element.Class === "8") {
            element.Class = "VIII";
        }
        else if (element.Class === "9") {
            element.Class = "IX";
        }
        else if (element.Class === "10") {
            element.Class = "X";
        }
        else if (element.Class === "11") {
            element.Class = "XI";
        }
        else if (element.Class === "12") {
            element.Class = "XII";
        }
        else if (element.Class === "13") {
            element.Class = "LKG";
        }
        else if (element.Class === "14") {
            element.Class = "UKG";
        }
        else if (element.Class === "15") {
            element.Class = "PRE-KG";
        }
        return element;
    }
    navigateScrnQues() {
        let NidNo = this.form.value.nid;
        let UdidNo = this.form.value.udid;
        this.studentData.NIdNumber = NidNo;
        this.studentData.UdidNumber = UdidNo;
        // ADD referedfrom to studentData if not already there
        if (!this.studentData.referedfrom && this.stdDetails) {
            this.studentData.referedfrom = this.stdDetails.referedfrom;
        }
        console.log("========== NAVIGATING TO SCREENING ==========");
        console.log("referedfrom being passed:", this.studentData.referedfrom);
        console.log("studentData:", this.studentData);
        console.log("=============================================");
        let query = 'UPDATE cwsn_student_list SET nid="' +
            NidNo +
            '", udid="' +
            UdidNo +
            '"' +
            'WHERE StuId = "' +
            this.studentData.allData.StuId +
            '"';
        this.sqliteDB.update(query).then((res) => { });
        if (!this.studentData.ScrSts) {
            this.router.navigate([`/tabs/cwsn/disability-screening/${this.schlId}`], {
                queryParams: { data: JSON.stringify(this.studentData) },
                skipLocationChange: true,
            });
        }
        else {
            this.alertService.warning("Students is already screened");
        }
    }
    presentAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let color_mode = document.documentElement.style.getPropertyValue("--primary-color");
            // console.log("mode", color_mode);
            let msg_con;
            if (color_mode == "#000000") {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick_dark.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            else {
                msg_con = `<div class="text-center custom_model">
      <img src="../../../../assets/icons/cwsn/success-tick.svg" alt="img">
      <h4 class="mt-2">${msg}</h4>
      </div>`;
            }
            const alert = yield this.alertController.create({
                cssClass: "cwsn-custom-class",
                message: msg_con,
                buttons: ["OK"],
            });
            // <ion-button  class="btn_lightRed border-0 rounded-0 text-light mt-3">OK</ion-button>
            yield alert.present();
        });
    }
    gotoMht() {
        this.router.navigate(["/tabs/health-check-up-answer"], {
            queryParams: {
                SchlId: this.stdDetails.school_key_id,
                student_ID: this.stdDetails.StuId,
                Sectn: "",
                ClsID: "",
                SchName: "",
                data: this.studentData,
                back: 2,
            },
            skipLocationChange: false,
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/tabs/health-check-up-answer"], {
                queryParams: {
                    SchlId: this.stdDetails.school_key_id,
                    student_ID: this.stdDetails.StuId,
                    studentid: this.stdDetails.StuId,
                    pageId: 1,
                    Gender: this.stdDetails.gender,
                    studentname: this.stdDetails.name,
                    ClsID: this.stdDetails.Class,
                    UniqId: this.stdDetails.unique_id_no,
                    module: "CWSN",
                    navigate: JSON.stringify({ data: JSON.stringify(this.studentData) }),
                    navigateUrl: `/tabs/cwsn/student-detail/${this.stdDetails.school_key_id}`,
                },
                skipLocationChange: false,
            });
        });
    }
};
StudentDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
StudentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-student-details",
        template: _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentDetailsPage);



/***/ }),

/***/ 47834:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/ques-view/ques-view.component.scss ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mlr-10p {\n  margin: 0 10px;\n}\n\n.rowStyle1 {\n  background-color: white;\n  margin: 5px;\n}\n\n.p5 {\n  padding: 5px;\n}\n\n.rowStyle2 {\n  background-color: #f4f4d2;\n  width: 100%;\n}\n\n.radioCon {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQztFQUNDLHVCQUFBO0VBQXdCLFdBQUE7QUFFMUI7O0FBQ0M7RUFDRyxZQUFBO0FBRUo7O0FBQ0M7RUFDRyx5QkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtDQUFBO0FBRUoiLCJmaWxlIjoicXVlcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1sci0xMHAge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbiAucm93U3R5bGUxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO21hcmdpbjo1cHg7XHJcbiB9XHJcblxyXG4gLnA1IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuIH1cclxuXHJcbiAucm93U3R5bGUye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRkMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmFkaW9Db24ge1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 69009:
/*!**********************************************************************!*\
  !*** ./src/app/pages/cwsn/student-details/student-details.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form {\n  padding-bottom: 10px;\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQ0FBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORjs7QUFTQTtFQUNFLHdDQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBTkY7O0FBU0E7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQTVDUztFQTZDVCxpQkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBV0E7RUFDRSxhQUFBO0VBQ0Usc0JBQUE7QUFSSjs7QUFVRTtFQUNFLGlCQUFBO0FBUko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFZRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBVko7O0FBYUU7RUFHRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBYko7O0FBa0JBO0VBQ0UsNEJBQUE7QUFmRjs7QUF1Qkk7RUFDRSxjQUFBO0VBQ0EsZ0JBM0ZPO0VBNEZQLGdDQS9GTztBQTJFYjs7QUE0Qks7RUFDRSxjQUFBO0VBQ0EsZ0JBdEdNO0VBdUdOLGdDQUFBO0FBMUJQOztBQWtDRTtFQUVFLG9CQUFBO0FBakNKOztBQWtDSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWhDTjs7QUFpQ007RUFDRSxnQkF4SEs7RUF5SEwsZ0NBNUhLO0FBNkZiOztBQWlDTTtFQUVFLGdDQWhJSztBQWdHYjs7QUFvQ0k7RUFDRSxxQkFBQTtBQWxDTjs7QUFtQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFqQ1I7O0FBa0NRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBaENWOztBQXNDRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBbkNKOztBQXNDRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFuQ0oiLCJmaWxlIjoic3R1ZGVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhcmlhYmxlc1xyXG5cclxuJHRleHQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRhcnJvdy1pY29uLWNvbG9yOnZhcigtLWljb24tY29sb3IpO1xyXG4kZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiVjYXJkLWxheW91dHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG5cclxuJWxhYmVsLWRlc2lnbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWRlc2lnbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWdue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcblxyXG4vLyBoZWFkZXJcclxuLnRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuc3R1TmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNjcmVlbi1kYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgLnRleHQtY29sb3J7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLXByaW1hcnkpO1xyXG4gIH1cclxuICAuZGF0ZXBpY2tlcntcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgfVxyXG4gfVxyXG5cclxuLy8gIGlvbi1pbnB1dCBwYWRkaW5nXHJcbi5wYWRkaW5nLWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuICAvLyBjbGFzcyBhbmQgc2VjdGlvblxyXG4gIC5jYXJkLWFsaWduIHtcclxuICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgIC5jbGFzc3tcclxuICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tZGVzaWduO1xyXG4gICAgLmNsYXNzLXRpdGxle1xyXG4gICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLmNsYXNzX192YWx1ZXtcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgIH1cclxuICAgfVxyXG4gICAuc2VjdGlvbntcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgICAuc2VjdGlvbi10aXRsZXtcclxuICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgIH1cclxuICAgICAuc2VjdGlvbl9fdmFsdWV7XHJcbiAgICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgLy8gZm9ybVxyXG4gIC5mb3Jte1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAuZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVle1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLmN1c3RvbUljb25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHggMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 90227:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/student-details/ques-view/ques-view.component.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"dismiss()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> \r\n      <div class=\"title\">\r\n        <div class=\"page-title\">View Questions</div>\r\n      </div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-row class=\"mlr-10p\" *ngFor=\"let list of referQues;let i = index\">\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"rowStyle1\">\r\n        <ion-col size=\"10\">\r\n          <div class=\"p5\">\r\n            <ion-label>\r\n              {{i+1}}. {{list.Quest_text}}\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-row class=\"rowStyle2\">\r\n          <ion-col>\r\n            <ion-radio-group value = \"1\">\r\n              <ion-item lines=\"none\">\r\n                <ion-radio value=\"1\" class=\"red_radio\" ></ion-radio><span class=\"radioCon\">ஆம்</span>\r\n                <ion-radio value=\"2\" class=\"green_radio\"  ></ion-radio><span class=\"radioCon\">இல்லை</span>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 2365:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/student-details/student-details.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> \r\n      <div class=\"title\">\r\n        <div class=\"page-title\">Student Name</div>\r\n        <div class=\"stuName\">{{ studentName }}</div>\r\n      </div>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <form class=\"form\" [formGroup]=\"form\">\r\n    <ion-card class=\"card-align\">\r\n      <ion-row >\r\n        <ion-col size=\"12\">\r\n          <div class=\"screen-date\">\r\n            <ion-label class=\"text-color\">Screening date</ion-label>\r\n            <span  class=\"datepicker\">{{ form.controls['ScreenedDate'].value | date:'dd/MM/yyyy' }}</span>\r\n            <!-- <div class=\"customIconBg\" *ngIf=\"referFromHealth==3\">\r\n              <ion-icon name=\"pulse-outline\" class=\"arrow-icon\" (click)=\"presentModal()\"></ion-icon>\r\n            </div> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    <ion-card class=\"card-align\" *ngIf=\"referFromHealth==3\">\r\n      <ion-row >\r\n        <ion-col size=\"12\">\r\n          <div class=\"screen-date\">\r\n            <ion-label class=\"text-color\">Health Module Questions</ion-label>\r\n            <div class=\"customIconBg\">\r\n              <ion-icon name=\"pulse-outline\" class=\"arrow-icon\" (click)=\"presentModal()\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"card-align\">\r\n\r\n        <div class=\"form-group form-groupBtn\">\r\n          <div class=\"icon-background\" *ngIf=\"!this.studentData?.ScrSts\">\r\n            <ion-icon name=\"arrow-forward-outline\" class=\"arrow-icon\" (click)=\"navigateScrnQues()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">EMIS ID</ion-label>\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"unique_id_no\" readonly=\"true\"></ion-input>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">Status</ion-label>\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"Status\" readonly=\"true\"></ion-input>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"showFormValues && form.value.da_name\">\r\n          <ion-label class=\"form-group__title\">Disability Type</ion-label>\r\n          <ion-textarea type=\"text\" class=\"form-group__value\" formControlName=\"da_name\" readonly=\"true\" autoGrow=\"true\" style=\"padding: 0px;\"></ion-textarea>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"showFormValues\">\r\n          <ion-label class=\"form-group__title\">NID <span style=\"font-weight:300\">(Eg: TN/XYZ/XYZABC/123456)</span></ion-label>\r\n          <ion-input type=\"text\"class=\"form-group__value padding-left\" formControlName=\"nid\" maxlength='20'disabled></ion-input>\r\n          <div>\r\n          <p class=\"error\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['nid'].hasError('required') && (form.controls['nid'].dirty || form.controls['nid'].touched)\">\r\n            Field is required</p>\r\n\r\n            <p class=\"error\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['nid'].hasError('pattern')\">\r\n              Invalid Format.  Alpha numeric and forward slash only allowed</p>\r\n            </div> \r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"showFormValues\">\r\n            <ion-label  class=\"form-group__title\"> UDID <span style=\"font-weight:300\">(Eg:TN0120420100090662)</span></ion-label>\r\n            <ion-input  class=\"form-group__value padding-left\" formControlName=\"udid\" maxlength='20'disabled></ion-input>\r\n            <div class=\"errors\">\r\n\r\n              <p class=\"error\" style=\"padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                *ngIf=\"form.controls['udid'].hasError('required')\">\r\n                Field is required</p>\r\n    \r\n                <p class=\"error\" style=\"padding-left: 10px;\r\n                padding-right: 10px;\"\r\n                  *ngIf=\"form.controls['udid'].hasError('pattern')\">\r\n                  Invalid Format.  Alpha numeric only allowed</p>\r\n          </div> \r\n        </div>\r\n         <div class=\"mt-2 text-center pb-3\" *ngIf=\"showFormValues && !this.studentData?.ScrSts\">\r\n          <ion-button  class=\"btn_lightRed border-0 rounded-0\" (click)=\"submitForm()\">Submit</ion-button>\r\n         </div>\r\n    </ion-card>\r\n  </form>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_student-details_student-details_module_ts-es2015.js.map